import * as k8s from '@pulumi/kubernetes'
import { Config, Output } from '@pulumi/pulumi';
import {efs} from '@pulumi/aws'
import * as aws from '@pulumi/aws'

export const ApplicationDB = async (provider: k8s.Provider, vpcId: Output<any>, ns: k8s.core.v1.Namespace, pgPassword: string) => {
    const config = new Config();

    let suffix = config.require('suffix');
    
    const imageTag = process.env.IMAGE;

    const depName = `pgdb-${suffix}`

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

    const storageClaim = new k8s.core.v1.PersistentVolumeClaim(`postgres-pvc-${suffix}`, {
        metadata: {
            name: `postgres-pvc-${suffix}`,
            namespace: ns.metadata.name
        },
        spec: {
            accessModes: ['ReadWriteOnce'],
            storageClassName: 'ebs',
            // volumeName: storagePv.metadata.name,
            resources: {
                requests: {
                    storage: '10Gi'
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
                    // priority: 50,
// 
                    containers: [{
                        name: depName,//v14
                        image: 'postgres:14', //`postgres:latest`, //`thetechcompany/hexhive-db:${imageTag}`, //`postgres:latest`, //thetechcompany/hexhive-db:${imageTag}`,
                        ports: [{name: 'postgres', containerPort: 5432}],
                        volumeMounts: [
                            // { name: 'postgres-config', mountPath: '/var/lib/postgresql/data/'},
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
            ports: [{ name: "postgres", port: 5432, targetPort: "postgres" }],
            selector: appLabels,
        },
    }, { 
        provider: provider,
        dependsOn: [deployment]
     });

    return {
        service,
        deployment
    }
}