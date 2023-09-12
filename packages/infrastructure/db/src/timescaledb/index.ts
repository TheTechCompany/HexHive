import * as k8s from '@pulumi/kubernetes'
import { all, Config, Output } from '@pulumi/pulumi';
import {efs} from '@pulumi/aws'
import * as aws from '@pulumi/aws'

export const TimescaleDB = async (provider: k8s.Provider, vpcId: Output<any>, namespace: k8s.core.v1.Namespace, pgPassword: string) => {
    const config = new Config();

    let suffix = config.require('suffix');
    

    const imageTag = process.env.IMAGE;

    const depName = `timeseriesdb-${suffix}`

    const appLabels = {appClass: depName}

    // const efsVolume = new efs.FileSystem(`timeseriesdb-storage-${suffix}`)
    
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
    //         targets.push(new efs.MountTarget(`tsdb-fs-mount-${i}-${suffix}`, {
    //             fileSystemId: efsVolume.id,
    //             subnetId: subnets.ids[i],
    //             securityGroups: [defaultSecurityGroup.id]
    //         }))
    //     }

    // })
    // const efsAp = new efs.AccessPoint(`timeseriesdb-ap-${suffix}`, {
    //     fileSystemId: efsVolume.id,
    //     posixUser: {uid: 1000, gid: 1000},
    //     rootDirectory: { path: "/" },
    // })



    // const storagePv = new k8s.core.v1.PersistentVolume(`timeseriesdb-pv-${suffix}`, {
    //     metadata: {
    //         name: `timeseriesdb-pv-${suffix}`,
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

    // const storageClaim = new k8s.core.v1.PersistentVolumeClaim(`timeseriesdb-pvc-${suffix}`, {
    //     metadata: {
    //         name: `timeseriesdb-pvc-${suffix}`,
    //     },
    //     spec: {
    //         accessModes: ['ReadWriteMany'],
    //         storageClassName: 'efs-sc',
    //         volumeName: storagePv.metadata.name,
    //         resources: {
    //             requests: {
    //                 storage: '100Gi'
    //             }
    //         }
    //     }   
    // }, {provider})

    const ebsClaim = new k8s.core.v1.PersistentVolumeClaim(`timeseries-pvc-${suffix}`, {
        metadata: {
            name: `timeseries-pvc-${suffix}`,
            namespace: namespace.metadata.name
        },
        spec: {
            accessModes: ['ReadWriteOnce'],
            storageClassName: 'ebs',
            resources: {
                requests: {
                    storage: '50Gi'
                }
            }
        }
    }, {
        provider
    })


    const deployment = new k8s.apps.v1.Deployment(`${depName}-dep`, {
        metadata: {
            labels: appLabels,
            namespace: namespace.metadata.name,
        },
        spec: {
            replicas: 1,
            strategy: {type: "RollingUpdate"},
            selector: { matchLabels: appLabels },
            template: {
                metadata: {labels: appLabels},
                spec: {
                    priority: 50,

                    // nodeSelector: {
                    //     'eks.amazonaws.com/nodegroup': 'managed-nodes'
                    // },
                    containers: [{
                        imagePullPolicy: 'IfNotPresent',
                        name: depName,
                        image: 'timescale/timescaledb:2.7.0-pg14', 
                        ports: [{name: 'timeseriesdb', containerPort: 5432}],
                        volumeMounts: [//newdata
                            { name: 'timeseriesdb-store', mountPath: '/var/lib/postgresql/data', subPath: 'newdata' },
                        ],
                        env: [
                            {
                                name: 'POSTGRES_PASSWORD',
                                value: pgPassword
                            }
                        ],
                        resources: {
                            requests: {
                                cpu: '0.25',
                                memory: '1Gi'
                            },
                            limits: {
                                cpu: '0.5',
                                memory: '2Gi'
                            }
                        }
                    }],
                
                    volumes: [
                    
                    {
                        name: 'timeseriesdb-store',
                        persistentVolumeClaim: {
                            claimName: ebsClaim.metadata.name,
                              
                        }
                    }
                ]
                    
                },
            }
        }
    }, {provider})

    const service = new k8s.core.v1.Service(`${depName}-svc`, {
        metadata: { 
            labels: appLabels,
            namespace: namespace.metadata.name
        },
        spec: {
            type: "ClusterIP",
            ports: [{ name: "timeseriesdb", port: 5432, targetPort: "timeseriesdb" }],
            selector: appLabels,
        },
    }, { 
        provider: provider,
        dependsOn: [deployment]
    });

    return {
        service,
        deployment,
        url: all([service.metadata.name, namespace.metadata.name]).apply(([name, ns]) => `${name}.${ns}.svc.cluster.local:5432`)
    }
}