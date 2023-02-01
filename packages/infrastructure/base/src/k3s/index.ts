import * as aws from '@pulumi/aws'
import roles from './roles';
import storageclass from './storageclass'
import { local, remote, types } from "@pulumi/command";
import { all, Input, Output } from '@pulumi/pulumi'
import { Provider } from '@pulumi/kubernetes';
import cloudcontroller from './cloudcontroller'
import loadbalancercontroller from './loadbalancercontroller'

export default async (amiName: string, keyName: string, privateKey: string, sg: aws.ec2.SecurityGroup, subnets: Input<string>[], cidrBlocks: Input<string>[], vpcId: Input<string>) => {

    const {
        k8sMasterProfile,
        k8sNodeProfile
    } = roles()

    
    let k3sAmi : undefined | string;
    
    let ami = await aws.ec2.getAmi({
        filters: [
            {
                name: "name",
                values: [`${amiName}`]
            }
        ],
        owners: ['471796009502']
        // owners: ['self']
    })

    if(ami.id){
        k3sAmi = ami.id;
    }



    //Setup Control Node

    const controlNode = new aws.ec2.Instance('k8s-control-node', {
        ami: k3sAmi,
        instanceType: 't2.medium',
        iamInstanceProfile: k8sMasterProfile,
        keyName: keyName,
        subnetId: subnets[0],
        vpcSecurityGroupIds: [sg.id],
        // ebsBlockDevices: [
        //     {
        //         deviceName: '/dev/sda',
        //         volumeSize: 15
        //     }
        // ],
        tags: {
            'cluster': 'hexhive-cluster',
            'kubernetes.io/cluster/hexhive-cluster': 'shared'
        },
        metadataOptions: {
            httpEndpoint: 'enabled',
            httpPutResponseHopLimit: 2
        },
        userData: `#!/bin/bash
exec > >(tee /var/log/user-data.log|logger -t user-data -s 2>/dev/console) 2>&1

curl -L https://github.com/k3s-io/k3s/releases/download/v1.24.4%2Bk3s1/k3s > /usr/local/bin/k3s
chmod +x /usr/local/bin/k3s

export INSTALL_K3S_SKIP_DOWNLOAD=true
export INSTALL_K3S_SKIP_ENABLE=true
export INSTALL_K3S_SKIP_START=true

curl -sfL https://get.k3s.io | sh -s -

sed -z -i -e "s|/usr/local/bin/k3s.*|/bin/bash -c '/usr/local/bin/k3s server --tls-san $(curl http://169.254.169.254/latest/meta-data/public-ipv4) --node-external-ip $(curl http://169.254.169.254/latest/meta-data/public-ipv4) --disable-cloud-controller --disable servicelb --disable traefik  --node-label topology.kubernetes.io/zone=$(curl http://169.254.169.254/latest/meta-data/placement/availability-zone) --node-label topology.kubernetes.io/region=$(curl http://169.254.169.254/latest/meta-data/placement/region) --kubelet-arg cloud-provider=external --kubelet-arg provider-id=aws:///$(curl -s http://169.254.169.254/latest/meta-data/placement/availability-zone)/$(curl -s http://169.254.169.254/latest/meta-data/instance-id)'|" /etc/systemd/system/k3s.service
systemctl daemon-reload
systemctl enable k3s
systemctl start k3s
`
    })  
    /*
sed -i -e "s|/usr/local/bin/k3s server|/bin/bash -c '/usr/local/bin/k3s server --node-external-ip $(curl http://169.254.169.254/latest/meta-data/public-ipv4)'|" /etc/systemd/system/k3s.service
systemctl daemon-reload
systemctl enable k3s
systemctl restart k3s
    */


    const connection : types.input.remote.ConnectionArgs = {
        host: controlNode.publicIp,
        user: 'ubuntu',
        privateKey
    }

    const waitForit = new remote.Command('wait-for-it', {
        connection,
        create: `while ! sudo test -f /var/lib/rancher/k3s/server/node-token; do sleep 10; echo "Waiting"; done`
    })
    
    const s3TokenResponse = new remote.Command('get-k3s-token', {
        connection,
        create: `sudo cat /var/lib/rancher/k3s/server/node-token`
    }, {
        dependsOn: [waitForit]
    })

    const kubeconfigResponse = new remote.Command(`get-k3s-kubeconfig`, {
        connection,
        create: `sudo cat /etc/rancher/k3s/k3s.yaml`,
        update: `sudo cat /etc/rancher/k3s/k3s.yaml`
    }, {
        dependsOn: [waitForit]
    });

    let kubeconfig = all([kubeconfigResponse.stdout, connection.host]).apply(([s, host]) => s.replace(/127.0.0.1/g, host))

    let clusterToken = s3TokenResponse.stdout.apply((s) => s.substring(0, s.length - 1))


    // //Create EC2 Instances to handle K8s

    const userData = all([controlNode.privateDns, clusterToken]).apply(([privateDns, token]) => `#!/bin/bash
    exec > >(tee /var/log/user-data.log|logger -t user-data -s 2>/dev/console) 2>&1

    curl -L https://github.com/k3s-io/k3s/releases/download/v1.24.4%2Bk3s1/k3s > /usr/local/bin/k3s
    chmod +x /usr/local/bin/k3s

    export INSTALL_K3S_SKIP_DOWNLOAD=true
    export K3S_TOKEN=${token}
    export K3S_URL=https://${privateDns}:6443
    echo "K3S_TOKEN=${token}" > /etc/systemd/system/k3s.service.env
    echo "K3S_URL=https://${privateDns}:6443" >> /etc/systemd/system/k3s.service.env

    curl -sfL https://get.k3s.io | sh -s -

    sed -z -i -e "s|/usr/local/bin/k3s.*|/bin/bash -c '/usr/local/bin/k3s agent --node-label role=worker --node-external-ip $(curl http://169.254.169.254/latest/meta-data/public-ipv4) --node-label topology.kubernetes.io/zone=$(curl http://169.254.169.254/latest/meta-data/placement/availability-zone) --node-label topology.kubernetes.io/region=$(curl http://169.254.169.254/latest/meta-data/placement/region) --kubelet-arg cloud-provider=external --kubelet-arg provider-id=aws:///$(curl -s http://169.254.169.254/latest/meta-data/placement/availability-zone)/$(curl -s http://169.254.169.254/latest/meta-data/instance-id)'|" /etc/systemd/system/k3s-agent.service
    systemctl daemon-reload
    systemctl restart k3s-agent
`)

/*
    sed -i -e 's|/usr/local/bin/k3s server|/usr/local/bin/k3s agent|' /etc/systemd/system/k3s.service
    systemctl daemon-reload
    systemctl enable k3s
    systemctl restart k3s
*/
    if(!k3sAmi) k3sAmi = '';


    const autoscalingConfg = all([userData, k8sNodeProfile.arn]).apply(([data, arn]) => {
        return new aws.ec2.LaunchTemplate('hexhive-cluster-autoscaling-conf', {
            instanceType: 't2.medium',
            namePrefix: 'hexhive-cluster',
            imageId: k3sAmi,
            iamInstanceProfile: {
                arn: arn
            },
            tags: {
                'kubernetes.io/cluster/hexhive-cluster': 'shared'
            },
            metadataOptions: {
                httpEndpoint: 'enabled',
                httpPutResponseHopLimit: 2
            },
            // blockDeviceMappings: [
            //     {
            //         deviceName: '/dev/sda',
            //         ebs: {
            //             volumeSize: 15
            //         }
            //     }
            // ],
            userData: Buffer.from(data).toString('base64'),
            keyName,
            // vpcSecurityGroupIds: [sg.id],
            networkInterfaces: [{
                networkCardIndex: 0,
                securityGroups: [sg.id],
                associatePublicIpAddress: 'true'
            }]
        })
    })
 
    const autoscalingGroup = all([autoscalingConfg.id, autoscalingConfg.latestVersion]).apply(([id, version]) => {
        return new aws.autoscaling.Group(`hexhive-cluster-node-group`, {
            launchTemplate: {
                id: id,
                version: `${version}`
            },
            minSize: 1,
            desiredCapacity: 2,
            maxSize: 3,
            vpcZoneIdentifiers: subnets
        })
    })

    const provider = new Provider('k3s-config', {
        kubeconfig
    })

    const storage = storageclass(provider)

    const cc = cloudcontroller(provider, cidrBlocks)

    loadbalancercontroller(provider, vpcId);

    return {
        // autoscalingConfg,
        // autoscalingGroup,
        kubeconfig
    }

    /*
 exec > >(tee /var/log/user-data.log|logger -t user-data -s 2>/dev/console) 2>&1
                echo BEGIN
                date '+%Y-%m-%d %H:%M:%S'
                echo END
                
                sudo hostnamectl set-hostname $(curl http://169.254.169.254/latest/meta-data/hostname)
                sudo mkdir -p /etc/systemd/system/kubelet.service.d
                cat << EOF >/etc/systemd/system/kubelet.service.d/20-aws.conf
                [Service]
                Environment="KUBELET_EXTRA_ARGS=--node-ip=$(curl http://169.254.169.254/latest/meta-data/local-ipv4) --node-labels=node.kubernetes.io/node="
                EOF
                
                sudo systemctl daemon-reload
                sudo systemctl restart kubelet

    */
    //Initialise k8s

    //Cluster setup

    //Autoscaling

}