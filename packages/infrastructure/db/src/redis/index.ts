import * as k8s from '@pulumi/kubernetes'
import { all, Config, Output } from '@pulumi/pulumi';
import {efs} from '@pulumi/aws'
import * as aws from '@pulumi/aws'

export const RedisDB = async (provider: k8s.Provider, vpcId: Output<any>, ns: k8s.core.v1.Namespace) => {
    const config = new Config();

    let suffix = config.require('suffix');
    
    const depName = `redisdb-${suffix}`

    const appLabels = {appClass: depName}

    // const efsVolume = new efs.FileSystem(`postgres-storage-${suffix}`)
    
    // const subnets = await vpcId.apply(async (id) => await aws.ec2.getSubnets({
    //     filters: [
    //         {
    //             name: 'vpc-id',
    //             values: [id]
    //         },
    //         {
    //             name: 'tag:type',
    //             values: ['public']
    //         }
    //     ]
    // }))

    // const defaultSecurityGroup = await vpcId.apply(async (id) => aws.ec2.getSecurityGroup({
    //     vpcId: id,
    //     name: 'default'
    // }))

    const targets = [];

    // subnets.ids.apply((ids) => {
    //     for(let i = 0; i < ids.length; i++){
    //         targets.push(new efs.MountTarget(`fs-mount-${i}-${suffix}`, {
    //             fileSystemId: efsVolume.id,
    //             subnetId: subnets.ids[i],
    //             securityGroups: [defaultSecurityGroup.id]
    //         }))
    //     }

    // })
    // const efsAp = new efs.AccessPoint(`postgres-ap-${suffix}`, {
    //     fileSystemId: efsVolume.id,
    //     posixUser: {uid: 1000, gid: 1000},
    //     rootDirectory: { path: "/" },
    // })



    // const storagePv = new k8s.core.v1.PersistentVolume(`postgres-pv-${suffix}`, {
    //     metadata: {
    //         name: `postgres-pv-${suffix}`,
    //     },
    //     spec: {
    //         capacity: {
    //             storage: '100Gi'
    //         },
    //         volumeMode: 'Filesystem',
    //         accessModes: ['ReadWriteMany'],
    //         persistentVolumeReclaimPolicy: 'Retain',
    //         storageClassName: 'efs-sc',
    //         csi: {
    //             driver: 'efs.csi.aws.com',
    //             volumeHandle: efsVolume.id
    //         }
    //     }
    // }, {provider})

    const storageClaim = new k8s.core.v1.PersistentVolumeClaim(`redis-pvc-${suffix}`, {
        metadata: {
            name: `redis-pvc-${suffix}`,
            namespace: ns.metadata.name
        },
        spec: {
            accessModes: ['ReadWriteOnce'],
            storageClassName: 'ebs',
            // volumeName: storagePv.metadata.name,
            resources: {
                requests: {
                    storage: '5Gi'
                }
            }
        }   
    }, {provider})


    const deployment = new k8s.apps.v1.Deployment(`${depName}-dep`, {
        metadata: {
            labels: appLabels,
            namespace: ns.metadata.name
        },
        spec: {
            replicas: 1,
            strategy: {type: "RollingUpdate"},
            selector: { matchLabels: appLabels },
            template: {
                metadata: {labels: appLabels},
                spec: {
                    containers: [{
                        name: depName,
                        image: 'redis:7.0.4', //`postgres:latest`, //`thetechcompany/hexhive-db:${imageTag}`, //`postgres:latest`, //thetechcompany/hexhive-db:${imageTag}`,
                        ports: [{name: 'redis', containerPort: 6379}],
                        volumeMounts: [
                            // { name: 'postgres-config', mountPath: '/var/lib/postgresql/data/'},
                            { name: 'redis-storage', mountPath: '/data' },
                        ]
                    }],
                    volumes: [{
                        name: 'redis-storage',
                        persistentVolumeClaim: {
                            claimName: storageClaim.metadata.name
                        }
                    }
                ]
                    
                }
            }
        }
    }, {provider})

    const service = new k8s.core.v1.Service(`${depName}-svc`, {
        metadata: { 
            labels: appLabels,
            namespace: ns.metadata.name,
            annotations: {
            
            }
        },
        spec: {
            type: "ClusterIP",
            ports: [{ name: "redis", port: 6379, targetPort: "redis" }],
            selector: appLabels,
        },
    }, { 
        provider: provider,
        dependsOn: [deployment]
    });

    return {
        service,
        deployment,
        url: all([service.metadata.name, ns.metadata.name]).apply(([service, ns]) => `${service}.${ns}.svc.cluster.local`)
    }
}