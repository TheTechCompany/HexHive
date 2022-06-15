import * as k8s from '@pulumi/kubernetes'
import { all, Config, Output } from '@pulumi/pulumi';
import {efs} from '@pulumi/aws'
import * as aws from '@pulumi/aws'

export const MongoDB = async (provider: k8s.Provider, vpcId: Output<any>, namespace: k8s.core.v1.Namespace) => {
    const config = new Config();

    let suffix = config.require('suffix');

    const depName = `mongodb-${suffix}`

    const appLabels = {appClass: depName}

    const ebsClaim = new k8s.core.v1.PersistentVolumeClaim(`mongo-pvc-${suffix}`, {
        metadata: {
            name: `mongo-pvc-${suffix}`,
            namespace: namespace.metadata.name
        },
        spec: {
            accessModes: ['ReadWriteOnce'],
            storageClassName: 'gp2',
            resources: {
                requests: {
                    storage: '7Gi'
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
                    nodeSelector: {
                        'eks.amazonaws.com/nodegroup': 'managed-nodes'
                    },
                    containers: [{
                        imagePullPolicy: 'IfNotPresent',
                        name: depName,
                        image: 'mongo:latest', 
                        ports: [{name: 'mongo', containerPort: 27017}],
                        volumeMounts: [//newdata
                            { name: 'mongo-store', mountPath: '/data/db', subPath: 'data' },
                        ],
                        resources: {
                            requests: {
                                cpu: '0.25',
                                memory: '0.5Gi'
                            },
                            limits: {
                                cpu: '0.25',
                                memory: '0.5Gi'
                            }
                        }
                    }],
                    volumes: [
                    {
                        name: 'mongo-store',
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
            ports: [{ name: "mongo", port: 27017, targetPort: "mongo" }],
            selector: appLabels,
        },
    }, { provider: provider });

    return {
        service,
        deployment,
        url: all([service.metadata.name, namespace.metadata.name]).apply(([name, ns]) => `${name}.${ns}.svc.cluster.local:27017`)
    }
}