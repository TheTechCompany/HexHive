import * as k8s from '@pulumi/kubernetes'
import { Config, Output } from '@pulumi/pulumi';
import {efs} from '@pulumi/aws'
import * as aws from '@pulumi/aws'

export const TimescaleDB = async (provider: k8s.Provider, vpcId: Output<any>, pgPassword: string) => {
    const config = new Config();

    let suffix = config.require('suffix');
    
    const imageTag = process.env.IMAGE;

    const depName = `timeseriesdb-${suffix}`

    const appLabels = {appClass: depName}

    const efsVolume = new efs.FileSystem(`timeseriesdb-storage-${suffix}`)
    
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

    const targets = [];

    subnets.ids.apply((ids) => {
        for(let i = 0; i < ids.length; i++){
            targets.push(new efs.MountTarget(`tsdb-fs-mount-${i}-${suffix}`, {
                fileSystemId: efsVolume.id,
                subnetId: subnets.ids[i],
                securityGroups: [defaultSecurityGroup.id]
            }))
        }

    })
    const efsAp = new efs.AccessPoint(`timeseriesdb-ap-${suffix}`, {
        fileSystemId: efsVolume.id,
        posixUser: {uid: 1000, gid: 1000},
        rootDirectory: { path: "/" },
    })



    const storagePv = new k8s.core.v1.PersistentVolume(`timeseriesdb-pv-${suffix}`, {
        metadata: {
            name: `timeseriesdb-pv-${suffix}`,
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

    const storageClaim = new k8s.core.v1.PersistentVolumeClaim(`timeseriesdb-pvc-${suffix}`, {
        metadata: {
            name: `timeseriesdb-pvc-${suffix}`,
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
                        imagePullPolicy: 'IfNotPresent',
                        name: depName,
                        image: 'timescale/timescaledb:2.6.1-pg14', //`postgres:latest`, //`thetechcompany/hexhive-db:${imageTag}`, //`postgres:latest`, //thetechcompany/hexhive-db:${imageTag}`,
                        ports: [{name: 'timeseriesdb', containerPort: 5432}],
                        volumeMounts: [
                            { name: 'timeseriesdb-store', mountPath: '/var/lib/postgresql/data' },
                        ],
                        env: [
                            {
                                name: 'POSTGRES_PASSWORD',
                                value: pgPassword
                            }
                        ],
                        resources: {
                            requests: {
                                cpu: '0.5',
                                memory: '1Gi'
                            }
                        }
                    }],
                
                    volumes: [{
                        name: 'timeseriesdb-store',
                        persistentVolumeClaim: {
                            claimName: storageClaim.metadata.name
                        }
                    }]
                    
                },
            }
        }
    }, {provider})

    const service = new k8s.core.v1.Service(`${depName}-svc`, {
        metadata: { 
            labels: appLabels
        },
        spec: {
            type: "ClusterIP",
            ports: [{ name: "timeseriesdb", port: 5432, targetPort: "timeseriesdb" }],
            selector: appLabels,
        },
    }, { provider: provider });

    return {
        service,
        deployment
    }
}