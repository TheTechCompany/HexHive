import * as awsx from '@pulumi/awsx'
import * as eks from '@pulumi/eks'
import * as aws from '@pulumi/aws'
import * as k8s from '@pulumi/kubernetes'
import ELBController from './elb-controller'
import EFSCSI from './efs-csi'
import { output } from '@pulumi/pulumi'

export default async (deployment: string) => {
        
    const vpc = new awsx.ec2.Vpc(`${deployment}-vpc`, {
        subnets: [{ type: 'public', tags: {'kubernetes.io/role/elb': '1'}}, { type: 'private' }],
    });

    // aws.ec2.getS

    // const defaultSecurityGroup = awsx.ec2.

    const defaultVpc = awsx.ec2.Vpc.getDefault();

    const defaultSecurityGroup = defaultVpc.id.apply(async (id) => {
        return await aws.ec2.getSecurityGroup({
            vpcId: id,
            name: 'default'
        })    
    })

    // const subnets = await vpc.publicSubnets


    let securityGroups = vpc.id.apply(async (id) => await aws.ec2.getSecurityGroups({
        filters: [
            {
                name: 'vpc-id',
                values: [id]
            }
        ]
    }));


    let nfsRules = securityGroups.ids.apply((ids) => {
    
        return ids.map((id) => {

            return new aws.ec2.SecurityGroupRule(`allow-efs-access-${id}`, {
                securityGroupId: vpc.vpc.defaultSecurityGroupId,
                fromPort: 2049,
                toPort: 2049,
                protocol: 'TCP',
                sourceSecurityGroupId: id,
                type: 'ingress'
            })
        })
    })


    // new awsx.ec2.Subnet(`${deployment}-public-subnet`, vpc, {
    //     type: 'public',

    // }, {
        
    // });

    // const defaultSubnets = await defaultVpc.publicSubnets;

    // defaultSubnets.forEach((subnet) => {
        
    // })
    // .forEach(subnet => {

    // })

    const account = await aws.getCallerIdentity()

    const clusterName = `${deployment}-cluster`;

      // IAM roles for the node group.
      const role = new aws.iam.Role(`${deployment}-ng-role`, {
        assumeRolePolicy: aws.iam.assumeRolePolicyForPrincipal({
            Service: "ec2.amazonaws.com",
        }),
    });
    let counter = 0;
    for (const policyArn of [
        "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
        "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy",
        "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly",
    ]) {
        new aws.iam.RolePolicyAttachment(`${deployment}-ng-role-policy-${counter++}`,
            { policyArn, role },
        );
    }

    const cluster = new eks.Cluster(clusterName, {
        fargate: true,
        vpcId: vpc.id,
        privateSubnetIds: vpc.privateSubnetIds,
        createOidcProvider: true,
        // instanceRoles: [role]
    })


    const elbController = ELBController(cluster, account)

    const storageClass = new k8s.storage.v1.StorageClass('efs-storage-class', {
        metadata: {
            name: 'efs-sc'
        },
        provisioner: 'efs.csi.aws.com',
        parameters: {
            provisioningMode: 'efs-ap',
            // fileSystemId: efsVolume.id,
            directoryPerms: '700'
        }
    }, {
        provider: cluster.provider
    })

  
    const instanceProfile = new aws.iam.InstanceProfile(`${deployment}-ng-ip`, { role });


    const managedGroup = new eks.ManagedNodeGroup(`${deployment}-mng`, {
        cluster: cluster,
        nodeRole: cluster.instanceRoles?.[0],
        instanceTypes: ["t3.medium"],
        nodeGroupName: `managed-nodes`,
        labels: {
            type: 'managed-node-group'
        },
        scalingConfig: {
            minSize: 1,
            maxSize: 2,
            desiredSize: 2
        }
    })

    // const ebsStorageClass = new k8s.storage.v1.StorageClass(`${deployment}-ebs-storage`, {
    //     metadata: {
    //         name: 'ebs-sc'
    //     },
    //     provisioner: 'ebs.csi.aws.com',
    //     volumeBindingMode: 'WaitForFirstConsumer'
    // })
    

    // const efsController = EFSCSI(cluster, account)

//     const clusterInfo = await cluster.eksCluster.name.apply(name => {
//         return aws.eks.getCluster({name: name})
//     })

//     const oidcUrl = clusterInfo.identities[0].oidcs[0].issuer

// // const oidcArn = clusterInfo.identities[0].oid

//     const oidcProvider = cluster.core.oidcProvider;
//     const oidc = cluster.core.oidcProvider


    return {cluster, vpc}

}