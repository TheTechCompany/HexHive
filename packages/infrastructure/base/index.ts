import { config } from 'dotenv'
config();
import { local, remote, types } from "@pulumi/command";

import * as awsx from "@pulumi/awsx";
import * as eks from '@pulumi/eks';
import * as aws from '@pulumi/aws'
import * as k8s from "@pulumi/kubernetes";

import { Neo4jCluster, MongoCluster } from './src/db';

import { all, Config, output } from "@pulumi/pulumi";
import EKSCluster from './src/eks-cluster'
import { readFileSync } from 'fs';

const main = (async () => {

    const config = new Config();


    const amiName = config.require("amiName") //AMI with kubernetes dependencies
    
    const keyName = config.require('keyName')

    const privateKeyBase64 = readFileSync(`/Users/thekid/.ssh/M1.pem`, 'utf8') //process.env.PRIVATE_KEY || ''

    const privateKey = privateKeyBase64 // Buffer.from(privateKeyBase64, 'base64').toString('ascii');


    const deployment = "hexhive"

    const defaultVpc = awsx.ec2.Vpc.getDefault()

    const privateSubnetIds = await defaultVpc.privateSubnetIds;
    const publicSubnetIds = await defaultVpc.publicSubnetIds
   
    const { cluster, vpc } = await EKSCluster(deployment)

    // const ipfsCluster = await IPFSCluster(cluster, vpc)

    const { url: mongoUrl } = MongoCluster(cluster);

  
    const k8sMasterRole = new aws.iam.Role(`k8s-master-role`, {
        name: 'k8s-master-role',
        // path: '/',
        assumeRolePolicy: `{
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Effect":"Allow",
                        "Principal":{"Service":"ec2.amazonaws.com"},
                        "Action":"sts:AssumeRole"
                    }
                ]
            }`,
        inlinePolicies: [
            {
                name: "master",
                policy: JSON.stringify({"Version":"2012-10-17","Statement":[{"Sid":"K8sMasterDescribeResources","Effect":"Allow","Action":["ec2:DescribeInstances","ec2:DescribeRegions","ec2:DescribeRouteTables","ec2:DescribeSecurityGroups","ec2:DescribeSubnets","ec2:DescribeVolumes"],"Resource":"*"},{"Sid":"K8sMasterAllResourcesWriteable","Effect":"Allow","Action":["ec2:CreateRoute","ec2:CreateSecurityGroup","ec2:CreateTags","ec2:CreateVolume","ec2:ModifyInstanceAttribute"],"Resource":"*"},{"Sid":"K8sMasterTaggedResourcesWritable","Effect":"Allow","Action":["ec2:AttachVolume","ec2:AuthorizeSecurityGroupIngress","ec2:DeleteRoute","ec2:DeleteSecurityGroup","ec2:DeleteVolume","ec2:DetachVolume","ec2:RevokeSecurityGroupIngress"],"Resource":"*"}]})
            },
            {
                name: "ecr",
                policy: JSON.stringify({"Version":"2012-10-17","Statement":[{"Sid":"K8sECR","Effect":"Allow","Action":["ecr:GetAuthorizationToken","ecr:BatchCheckLayerAvailability","ecr:GetDownloadUrlForLayer","ecr:GetRepositoryPolicy","ecr:DescribeRepositories","ecr:ListImages","ecr:BatchGetImage"],"Resource":"*"}]})
            },
            {
                name: 'cni',
                policy: JSON.stringify({"Version":"2012-10-17","Statement":[{"Sid":"K8sNodeAwsVpcCNI","Effect":"Allow","Action":["ec2:CreateNetworkInterface","ec2:AttachNetworkInterface","ec2:DeleteNetworkInterface","ec2:DetachNetworkInterface","ec2:DescribeNetworkInterfaces","ec2:DescribeInstances","ec2:ModifyNetworkInterfaceAttribute","ec2:AssignPrivateIpAddresses","tag:TagResources"],"Resource":"*"}]})
            },
            {
                name: 'autoscaler',
                policy: JSON.stringify({"Version":"2012-10-17","Statement":[{"Sid":"K8sClusterAutoscalerDescribe","Effect":"Allow","Action":["autoscaling:DescribeAutoScalingGroups","autoscaling:DescribeAutoScalingInstances","autoscaling:DescribeTags","autoscaling:DescribeLaunchConfigurations"],"Resource":"*"},{"Sid":"K8sClusterAutoscalerTaggedResourcesWritable","Effect":"Allow","Action":["autoscaling:SetDesiredCapacity","autoscaling:TerminateInstanceInAutoScalingGroup","autoscaling:UpdateAutoScalingGroup"],"Resource":"*"}]})
            },
            {
                name: 'loadbalancing',
                policy: JSON.stringify({"Version":"2012-10-17","Statement":[{"Sid":"K8sELB","Effect":"Allow","Action":["elasticloadbalancing:AddTags","elasticloadbalancing:AttachLoadBalancerToSubnets","elasticloadbalancing:ApplySecurityGroupsToLoadBalancer","elasticloadbalancing:CreateLoadBalancer","elasticloadbalancing:CreateLoadBalancerPolicy","elasticloadbalancing:CreateLoadBalancerListeners","elasticloadbalancing:ConfigureHealthCheck","elasticloadbalancing:DeleteLoadBalancer","elasticloadbalancing:DeleteLoadBalancerListeners","elasticloadbalancing:DescribeLoadBalancers","elasticloadbalancing:DescribeLoadBalancerAttributes","elasticloadbalancing:DetachLoadBalancerFromSubnets","elasticloadbalancing:DeregisterInstancesFromLoadBalancer","elasticloadbalancing:ModifyLoadBalancerAttributes","elasticloadbalancing:RegisterInstancesWithLoadBalancer","elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer"],"Resource":"*"},{"Sid":"K8sNLB","Effect":"Allow","Action":["ec2:DescribeVpcs","elasticloadbalancing:AddTags","elasticloadbalancing:CreateListener","elasticloadbalancing:CreateTargetGroup","elasticloadbalancing:DeleteListener","elasticloadbalancing:DeleteTargetGroup","elasticloadbalancing:DescribeListeners","elasticloadbalancing:DescribeLoadBalancerPolicies","elasticloadbalancing:DescribeTargetGroups","elasticloadbalancing:DescribeTargetHealth","elasticloadbalancing:ModifyListener","elasticloadbalancing:ModifyTargetGroup","elasticloadbalancing:RegisterTargets","elasticloadbalancing:SetLoadBalancerPoliciesOfListener"],"Resource":"*"}]})
            }
        ]
    });


    const k8sMasterProfile = new aws.iam.InstanceProfile('k8s-master-profile', {
        name: 'k8s-master-profile',
        role: k8sMasterRole
    })

    const k8sNodeRole = new aws.iam.Role('k8s-node-role', {
        name: 'k8s-node-role',
        assumeRolePolicy: `{
                "Version":"2012-10-17",
                "Statement":[{"Effect":"Allow","Principal":{"Service":"ec2.amazonaws.com"},"Action":"sts:AssumeRole"}]
            }`,
        inlinePolicies: [
            {
                name: 'node',
                policy: JSON.stringify({"Version":"2012-10-17","Statement":[{"Sid":"K8sNodeDescribeResources","Effect":"Allow","Action":["ec2:DescribeInstances","ec2:DescribeRegions"],"Resource":"*"}]})
            },
            {
                name: 'ecr',
                policy: JSON.stringify({"Version":"2012-10-17","Statement":[{"Sid":"K8sECR","Effect":"Allow","Action":["ecr:GetAuthorizationToken","ecr:BatchCheckLayerAvailability","ecr:GetDownloadUrlForLayer","ecr:GetRepositoryPolicy","ecr:DescribeRepositories","ecr:ListImages","ecr:BatchGetImage"],"Resource":"*"}]})
            },
            {
                name: 'cni',
                policy: JSON.stringify({"Version":"2012-10-17","Statement":[{"Sid":"K8sNodeAwsVpcCNI","Effect":"Allow","Action":["ec2:CreateNetworkInterface","ec2:AttachNetworkInterface","ec2:DeleteNetworkInterface","ec2:DetachNetworkInterface","ec2:DescribeNetworkInterfaces","ec2:DescribeInstances","ec2:ModifyNetworkInterfaceAttribute","ec2:AssignPrivateIpAddresses","tag:TagResources"],"Resource":"*"}]})
            }
        ]
    })

    const k8sNodeProfile = new aws.iam.InstanceProfile('k8s-node-profile', {
        name: 'k8s-node-profile',
        role: k8sNodeRole
    })
    
    let k3sAmi;
    
    let ami = await aws.ec2.getAmi({
        filters: [
            {
                name: "name",
                values: [`${amiName}`]
            }
        ],
        owners: ['self']
    })

    if(ami.id){
        k3sAmi = ami.id;
    }


    //Setup Control Node

//     const controlNode = new aws.ec2.Instance('k8s-control-node', {
//         ami: k3sAmi,
//         instanceType: 't2.medium',
//         iamInstanceProfile: k8sMasterProfile,
//         keyName: keyName,
//         userData: `#!/bin/bash
// exec > >(tee /var/log/user-data.log|logger -t user-data -s 2>/dev/console) 2>&1

// systemctl enable k3s
// systemctl start k3s`
//     })  


    // const connection : types.input.remote.ConnectionArgs = {
    //     host: controlNode.publicIp,
    //     user: 'ubuntu',
    //     privateKey
    // }

    // const s3TokenResponse = new remote.Command('get-k3s-token', {
    //     connection,
    //     create: `sudo cat /var/lib/rancher/k3s/server/node-token`
    // })

    // let clusterToken = s3TokenResponse.stdout.apply((s) => s.substring(0, s.length - 1))


    // //Create EC2 Instances to handle K8s

    // const userData = all([controlNode.privateDns, clusterToken]).apply(([privateDns, token]) => `#!/bin/bash
    // exec > >(tee /var/log/user-data.log|logger -t user-data -s 2>/dev/console) 2>&1
    

    // echo "K3S_TOKEN=${token}" > /etc/systemd/system/k3s.service.env
    // echo "K3S_URL=https://${privateDns}:6443" >> /etc/systemd/system/k3s.service.env

    // sed -i -e 's/#EnvironmentFile/EnvironmentFile/' /usr/lib/systemd/system/k3s.service

    // sed -i -e 's/k3s server/k3s agent/' /usr/lib/systemd/system/k3s.service
    // systemctl enable k3s
    // systemctl start k3s`)

    if(!k3sAmi) k3sAmi = '';

    // const autoscalingConfg = new aws.ec2.LaunchConfiguration('hexhive-cluster-autoscaling-conf', {
    //     instanceType: 't2.medium',
    //     namePrefix: `hexhive-cluster`,
    //     imageId: k3sAmi,
    //     iamInstanceProfile: k8sNodeProfile,
    //     userData: userData,
    //     associatePublicIpAddress: true,
    //     keyName
    // })

    // const autoscalingGroup = new aws.autoscaling.Group(`hexhive-cluster-node-group`, {
    //     launchConfiguration: autoscalingConfg,
    //     minSize: 1,
    //     maxSize: 2,
    //     // vpc: defaultVpc,
        
    //     vpcZoneIdentifiers: publicSubnetIds.concat(privateSubnetIds)
    // })



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


    // // const { url: neo4Url } = Neo4jCluster(cluster)
    // const { url: mongoUrl } = MongoCluster(cluster)

    // const { url } = GatewayCluster(cluster, zone, 'staging-api.hexhive.io', mongoUrl);
    // const { url : frontend } = await MicrofrontendCluster(cluster, zone, 'next.hexhive.io', mongoUrl);

    return {
        mongoUrl,
        vpc,
        // clusterToken,
        // hostIp: controlNode.privateDns,
        // token,
        // discoveryCa: discoveryCa.apply((ca) => ca?.trim()),
        kubeconfig: cluster.kubeconfig
    }

})()

// export const token = main.then(result => result.clusterToken)
// export const hostIp = main.then(result => result.hostIp)
// export const discoveryCa = main.then(result => result.discoveryCa)

export const kubeconfig = main.then(result => result.kubeconfig)
export const vpcId = main.then(result => result.vpc.id);

export const mongoUrl = main.then(result => result.mongoUrl)
