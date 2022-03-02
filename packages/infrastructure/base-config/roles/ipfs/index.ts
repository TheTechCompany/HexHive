import * as eks from '@pulumi/eks'
import * as k8s from '@pulumi/kubernetes'
import {efs} from '@pulumi/aws';
import { ec2 } from '@pulumi/awsx'

export default async (cluster: eks.Cluster, vpc: ec2.Vpc) => {

    if(!process.env.IPFS_BOOTSTRAP_PEER_ID || !process.env.IPFS_CLUSTER_SECRET || !process.env.IPFS_BOOTSTRAP_PEER_PRIV_KEY) return

    const efsVolume = cluster.eksCluster.name.apply(name => new efs.FileSystem(`ipfs-volume-${name}`))

    // const storageClass = new k8s.storage.v1.StorageClass('ipfs-storage-class', {
    //     metadata: {
    //         name: 'efs-sc'
    //     },
    //     provisioner: 'efs.csi.aws.com',
    //     parameters: {
    //         provisioningMode: 'efs-ap',
    //         // fileSystemId: efsVolume.id,
    //         directoryPerms: '700'
    //     }
    // })

    const storagePv = new k8s.core.v1.PersistentVolume('ipfs-pv', {
        metadata: {
            name: 'ipfs-pv',
        },
        spec: {
            capacity: {
                storage: '5Gi'
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
    })

    const storageClaim = new k8s.core.v1.PersistentVolumeClaim('ipfs-pvc', {
        metadata: {
            name: 'ipfs-pvc',
        },
        spec: {
            accessModes: ['ReadWriteMany'],
            storageClassName: 'efs-sc',
            volumeName: storagePv.metadata.name,
            resources: {
                requests: {
                    storage: '5Gi'
                }
            }
        }   
    })

    const subnetIds = await vpc.publicSubnetIds;

    const targets = [];

    for(let i = 0; i < subnetIds.length; i++){
        targets.push(new efs.MountTarget(`fs-mount-${i}`, {
            fileSystemId: efsVolume.id,
            subnetId: subnetIds[i],
            securityGroups: [vpc.vpc.defaultSecurityGroupId]
        }))
    }

    const efsAp = new efs.AccessPoint(`ap`, {
        fileSystemId: efsVolume.id,
        posixUser: {uid: 1000, gid: 1000},
        rootDirectory: { path: "/" },
    })
    
    const clusterSecret = new k8s.core.v1.Secret(`ipfs-cluster-secrets`, {
        stringData: {
            cluster_secret: process.env.IPFS_CLUSTER_SECRET,
            bootstrap_peer_priv_key: process.env.IPFS_BOOTSTRAP_PEER_PRIV_KEY,
        }
    })

    const bootstrapConfig = new k8s.core.v1.ConfigMap(`ipfs-cluster-set-bootstrap-conf`, {
        metadata: {
            name: 'ipfs-cluster-set-bootstrap-conf'
        },
        data: {
            'entrypoint.sh': "" +
                "#!/bin/sh \n" + 
                "user=ipfs \n" + 
            
                "# This is a custom entrypoint for k8s designed to connect to the bootstrap \n" + 
                "# node running in the cluster. It has been set up using a configmap to \n" +
                "# allow changes on the fly. \n" + 
            
            
                "if [ ! -f /data/ipfs-cluster/service.json ]; then \n" +
                "ipfs-cluster-service init" + 
                "fi" + 
            
                "PEER_HOSTNAME=`cat /proc/sys/kernel/hostname` \n" + 
            
                'grep -q ".*ipfs-cluster-0.*" /proc/sys/kernel/hostname \n' +
                "if [ $? -eq 0 ]; then \n" +
                "CLUSTER_ID=${BOOTSTRAP_PEER_ID} \  \n" +
                "CLUSTER_PRIVATEKEY=${BOOTSTRAP_PEER_PRIV_KEY} \  \n" +
                "exec ipfs-cluster-service daemon --upgrade \n" +
                "else" +
                "BOOTSTRAP_ADDR=/dns4/${SVC_NAME}-0/tcp/9096/ipfs/${BOOTSTRAP_PEER_ID} \n" +
            
                "if [ -z $BOOTSTRAP_ADDR ]; then \n" + 
                "    exit 1 \n" + 
                "fi \n" +
                "# Only ipfs user can get here \n" +
                "exec ipfs-cluster-service daemon --upgrade --bootstrap $BOOTSTRAP_ADDR --leave \n" +
                "fi \n",
            'configure-ipfs.sh': `
                #!/bin/sh
                set -e
                set -x
                user=ipfs
                # This is a custom entrypoint for k8s designed to run ipfs nodes in an appropriate
                # setup for production scenarios.
            
                mkdir -p /data/ipfs && chown -R ipfs /data/ipfs
            
                if [ -f /data/ipfs/config ]; then
                if [ -f /data/ipfs/repo.lock ]; then
                    rm /data/ipfs/repo.lock
                fi
                exit 0
                fi
            
                ipfs init --profile=badgerds,server
                ipfs config Addresses.API /ip4/0.0.0.0/tcp/5001
                ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/8080
                ipfs config --json Swarm.ConnMgr.HighWater 2000
                ipfs config --json Datastore.BloomFilterSize 1048576
                ipfs config Datastore.StorageMax 100GB
            `
            
        }
    })

    const clusterConfig = new k8s.core.v1.ConfigMap(`ipfs-cluster-config`, {
        data: {
            bootstrap_peer_id: process.env.IPFS_BOOTSTRAP_PEER_ID,
        }
    })

    const deployment = new k8s.apps.v1.StatefulSet(`ipfs-cluster`, {
        metadata: {
            name: `ipfs-cluster`,
        },
        spec: {
            serviceName: `ipfs-cluster`,
            replicas: 3,
            selector: {
                matchLabels: {
                    app: 'ipfs-cluster'
                }
            },
            template: {
                metadata: {
                    labels: {
                        app: 'ipfs-cluster'
                    }
                },
                spec: {
                    initContainers: [
                        {
                            name: 'configure-ipfs',
                            image: 'ipfs/go-ipfs:v0.4.18',
                            command: ['sh', '/custom/configure-ipfs.sh'],
                            volumeMounts: [
                                {
                                    name: 'ipfs-storage',
                                    mountPath: '/data/ipfs'
                                },
                                {  
                                    name: 'configure-script',
                                    mountPath: '/custom'
                                }
                            ]
                        }
                    ],
                    containers: [
                        {
                            name: 'ipfs',
                            image: 'ipfs/go-ipfs:v0.4.18',
                            imagePullPolicy: 'IfNotPresent',
                            env: [
                                {
                                    name: 'IPFS_FD_MAX',
                                    value: '4096'
                                }
                            ],
                            ports: [
                                {
                                    name: 'swarm',
                                    protocol: 'TCP',
                                    containerPort: 4001
                                },
                                {
                                    name: 'swarm-udp',
                                    protocol: 'UDP',
                                    containerPort: 4002
                                },
                                {
                                    name: 'api',
                                    protocol: 'TCP',
                                    containerPort: 5001
                                },
                                {
                                    name: 'ws',
                                    protocol: 'TCP',
                                    containerPort: 8081
                                },
                                {
                                    name: 'http',
                                    protocol: 'TCP',
                                    containerPort: 8080
                                }
                            ],
                            livenessProbe: {
                                tcpSocket: {
                                    port: 'swarm'
                                },
                                initialDelaySeconds: 10,
                                timeoutSeconds: 5,
                                periodSeconds: 15
                            },
                            volumeMounts: [
                                {
                                    name: 'ipfs-storage',
                                    mountPath: '/data/ipfs'
                                },
                                {
                                    name: 'configure-script',
                                    mountPath: '/custom'
                                }
                            ]
                        },
                        {
                            name: 'ipfs-cluster',
                            image: 'ipfs/ipfs-cluster:latest',
                            imagePullPolicy: 'IfNotPresent',
                            command: ['sh', '/custom/entrypoint.sh'],
                            envFrom: [
                                {
                                    configMapRef: {
                                        name: clusterConfig.metadata.name
                                    }
                                }
                            ],
                            env: [
                                {
                                    name: 'BOOTSTRAP_PEER_ID',
                                    valueFrom: {
                                        configMapKeyRef: {
                                            name: clusterConfig.metadata.name,
                                            key: 'bootstrap_peer_id'
                                        }
                                    }
                                },
                                {
                                    name: 'BOOTSTRAP_PEER_PRIV_KEY',
                                    valueFrom: {
                                        secretKeyRef: {
                                            name: clusterSecret.metadata.name,
                                            key: 'bootstrap_peer_priv_key'
                                        }
                                    }
                                },
                                {
                                    name: 'CLUSTER_SECRET',
                                    valueFrom: {
                                        secretKeyRef: {
                                            name: clusterSecret.metadata.name,
                                            key: 'cluster_secret'
                                        }
                                    }
                                },
                                {
                                    name: 'CLUSTER_MONITOR_PING_INTERVAL',
                                    value: '3m'
                                },
                                {
                                    name: "SVC_NAME",
                                    value: `$(CLUSTER_SVC_NAME)`
                                }
                            ],
                            ports: [
                                {
                                    name: 'api-http',
                                    containerPort: 9094,
                                    protocol: "TCP"
                                },
                                {
                                    name: 'proxy-http',
                                    containerPort: 9095,
                                    protocol: "TCP"
                                },
                                {
                                    name: 'cluster-swarm',
                                    containerPort: 9096,
                                    protocol: "TCP"
                                }
                            ],
                            livenessProbe: {
                                tcpSocket: {
                                    port: 'cluster-swarm'
                                },
                                initialDelaySeconds: 5,
                                timeoutSeconds: 5,
                                periodSeconds: 10
                            },
                            volumeMounts: [
                                {
                                    name: 'cluster-storage',
                                    mountPath: '/data/ipfs-cluster',
                                    
                                },
                                {
                                    name: 'configure-script',
                                    mountPath: '/custom'
                                }
                            ]
                        }
                    ],
                    volumes: [
                        {
                            name: 'configure-script',
                            configMap: {
                                name: 'ipfs-cluster-set-bootstrap-conf'
                            }
                        }
                    ],
                },

            },
            volumeClaimTemplates: [
                {
                    metadata: {
                        name: 'cluster-storage',
                    },
                    spec: {
                        storageClassName: 'efs-sc',
                        accessModes: ["ReadWriteMany"],
                        // dataSource: {
                        //     name: storageClaim.metadata.name,
                        //     kind: 'PersistentVolumeClaim',
                        // },
                        volumeName: storagePv.metadata.name,
                        resources: {
                            requests: {
                                storage: '5Gi'
                            }
                        }
                    }
                },
                {
                    metadata: {
                        name: 'ipfs-storage',
                    },
                    spec: {
                        storageClassName: 'efs-sc',
                        accessModes: ["ReadWriteMany"],
                        // dataSource: {
                        //     name: storageClaim.metadata.name,
                        //     kind: 'PersistentVolumeClaim',
                        // },
                        volumeName: storagePv.metadata.name,
                        resources: {
                            requests: {
                                storage: '200Gi'
                            }
                        }
                    }
                }
            ]

        }
    })

    const ipfsService = new k8s.core.v1.Service(`ipfs-cluster-svc`, {
        metadata: {
            name: 'ipfs-cluster',
            annotations: {
                'service.beta.kubernetes.io/aws-load-balancer-type': 'external',
                'service.beta.kubernetes.io/aws-load-balancer-nlb-target-type': 'ip',
                'service.beta.kubernetes.io/aws-load-balancer-scheme': 'internet-facing'
            },
            labels: {
                app: 'ipfs-cluster'
            }
        },
        spec: {
            type: 'LoadBalancer',
            ports: [
                {
                    name: 'swarm',
                    targetPort: 'swarm',
                    port: 4001
                },
                {
                    name: 'swarm-udp',
                    targetPort: 'swarm-udp',
                    port: 4002
                }, 
                {
                    name: 'ws',
                    targetPort: 'ws',
                    port: 8081
                },
                {
                    name: 'http',
                    targetPort: 'http',
                    port: 8080
                },
                {
                    name: 'api-http',
                    targetPort: 'api-http',
                    port: 9094
                },
                {
                    name: 'proxy-http',
                    targetPort: 'proxy-http',
                    port: 9095
                },
                {
                    name: 'cluster-swarm',
                    targetPort: 'cluster-swarm',
                    port: 9096
                }
            ],
            selector: {
                app: 'ipfs-cluster'
            }
        }
    })

    return {
        ipfsService,
        deployment
    }
}