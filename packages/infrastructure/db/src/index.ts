import * as k8s from '@pulumi/kubernetes'
import { Config, Output } from '@pulumi/pulumi';
import {efs} from '@pulumi/aws'
import * as aws from '@pulumi/aws'

export const ApplicationDB = async (provider: k8s.Provider, vpcId: Output<any>, pgPassword: string) => {

    const config = new Config();

    let suffix = config.require('suffix');
    
    const depName = `pgdb-${suffix}`

    const appLabels = {appClass: depName}


    const efsVolume = new efs.FileSystem(`postgres-storage-${suffix}`)
    
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
    // const subnetIds = await vpc.publicSubnetIds;

    const targets = [];

    subnets.ids.apply((ids) => {
        for(let i = 0; i < ids.length; i++){
            targets.push(new efs.MountTarget(`fs-mount-${i}-${suffix}`, {
                fileSystemId: efsVolume.id,
                subnetId: subnets.ids[i],
                securityGroups: [defaultSecurityGroup.id]
            }))
        }

    })
    const efsAp = new efs.AccessPoint(`postgres-ap-${suffix}`, {
        fileSystemId: efsVolume.id,
        posixUser: {uid: 1000, gid: 1000},
        rootDirectory: { path: "/" },
    })

    const storagePv = new k8s.core.v1.PersistentVolume(`postgres-pv-${suffix}`, {
        metadata: {
            name: `greenscreen-pv-${suffix}`,
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

    const storageClaim = new k8s.core.v1.PersistentVolumeClaim(`postgres-pvc-${suffix}`, {
        metadata: {
            name: `postgres-pvc-${suffix}`,
        },
        spec: {
            accessModes: ['ReadWriteMany'],
            storageClassName: 'efs-sc',
            volumeName: storagePv.metadata.name,
            resources: {
                requests: {
                    storage: '100Gi'
                }
            }
        }   
    }, {provider})

    const deployment = new k8s.apps.v1.Deployment(`${depName}-dep`, {
        metadata: {
            labels: appLabels
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
                        image: 'postgres:latest',
                        ports: [{name: 'postgres', containerPort: 5432}],
                        volumeMounts: [
                            { name: 'postgres-storage', mountPath: '/var/lib/postgresql/data' },
                        ],
                        env: [
                            {
                                name: 'POSTGRES_PASSWORD',
                                value: pgPassword
                            }
                        ]
                    }],
                    volumes: [{
                        name: 'postgres-storage',
                        persistentVolumeClaim: {
                            claimName: storageClaim.metadata.name
                        }
                    }]
                    
                }
            }
        }
    }, {provider})

    const service = new k8s.core.v1.Service(`${depName}-svc`, {
        metadata: { 
            labels: appLabels,
            annotations: {
            
            }
        },
        spec: {
            type: "ClusterIP",
            ports: [{ name: "postgres", port: 5432, targetPort: "postgres" }],
            selector: appLabels,
        },
    }, { provider: provider });

    return {
        service,
        deployment
    }
}