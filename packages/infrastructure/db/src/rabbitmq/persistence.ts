import * as k8s from '@pulumi/kubernetes'
import { Config, Output } from '@pulumi/pulumi';
import * as aws from '@pulumi/aws'
import {Provider} from '@pulumi/kubernetes'

export const RabbitMQPersistence = async (provider: Provider, vpcId: Output<any>) => {
    const config = new Config()

    const suffix = config.get('suffix');

    let efsRoot = `hivecommand-mq-storage-${suffix}`;

    const efsVolume =  new aws.efs.FileSystem(efsRoot)
    
    // const subnetIds = await vpc.publicSubnetIds;

    const targets = [];

    const subnets = await vpcId.apply(async (id) => await aws.ec2.getSubnets({
        filters: [
            {
                name: 'vpc-id',
                values: [id]
            },
            {
                name: 'tag:type',
                values: ['public']
            }
        ]
    }))

    const defaultSecurityGroup = await vpcId.apply(async (id) => aws.ec2.getSecurityGroup({
        vpcId: id,
        name: 'default'
    }))

    subnets.ids.apply((ids) => {
        for(let i = 0; i < ids.length; i++){
            targets.push(new aws.efs.MountTarget(`${efsRoot}-fs-mount-${i}`, {
                fileSystemId: efsVolume.id,
                subnetId: ids[i],
                securityGroups: [defaultSecurityGroup.id]
            }))
        }
    })

    const efsAp = new aws.efs.AccessPoint(`${efsRoot}-ap`, {
        fileSystemId: efsVolume.id,
        posixUser: {uid: 1000, gid: 1000},
        rootDirectory: { path: "/" },
    })


    const storagePv = new k8s.core.v1.PersistentVolume(`${efsRoot}-pv`, {
        metadata: {
            name: `${efsRoot}-pv`,
        },
        spec: {
            capacity: {
                storage: '100Gi'
            },
            volumeMode: 'Filesystem',
            accessModes: ['ReadWriteMany'],
            persistentVolumeReclaimPolicy: 'Retain',
            storageClassName: 'efs-sc',
            csi: {
                driver: 'efs.csi.aws.com',
                volumeHandle: efsVolume.id
            }
        }
    }, {provider})

    const storageClaim = new k8s.core.v1.PersistentVolumeClaim(`${efsRoot}-pvc`, {
        metadata: {
            name: `${efsRoot}-pvc`,
        },
        spec: {
            accessModes: ['ReadWriteMany'],
            storageClassName: 'efs-sc',
            volumeName: storagePv.metadata.name,
            resources: {
                requests: {
                    storage: '10Gi'
                }
            }
        }   
    }, {provider})
    
    return {
        storageClaim,
        storagePv
    }
}