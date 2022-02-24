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

    const account = await aws.getCallerIdentity()

    const clusterName = `${deployment}-cluster`;

    const cluster = new eks.Cluster(clusterName, {
        fargate: true,
        vpcId: vpc.id,
        privateSubnetIds: vpc.privateSubnetIds,
        createOidcProvider: true
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
    })


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