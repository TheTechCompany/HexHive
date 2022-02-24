import * as k8s from '@pulumi/kubernetes'
import * as eks from '@pulumi/eks'
import { efs } from '@pulumi/aws'
import { ec2 } from '@pulumi/awsx';

export const GreenScreen = async (cluster: eks.Cluster, vpc: ec2.Vpc) => {
    const appName = "green-screen";
    const appLabels = { appClass: appName };

    if(!process.env.NEO4J_URI || !process.env.TIMESERIES_HOST || !process.env.TIMESERIES_PASSWORD || !process.env.RABBIT_URL || !process.env.IPFS_URL) return

    const efsVolume = cluster.eksCluster.name.apply(name => new efs.FileSystem(`greenscreen-storage`))
    
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

    const storagePv = new k8s.core.v1.PersistentVolume('greenscreen-pv', {
        metadata: {
            name: 'greenscreen-pv',
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
    })

    const storageClaim = new k8s.core.v1.PersistentVolumeClaim('greenscreen-pvc', {
        metadata: {
            name: 'greenscreen-pvc',
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
    })

    const configMap = new k8s.core.v1.ConfigMap(`${appName}-config`, {
        data: {   
            NEO4J_URI: process.env.NEO4J_URI,
            TIMESERIES_HOST: process.env.TIMESERIES_HOST,
            ROOT_SERVER: 'https://staging-api.hexhive.io',
            RABBIT_URL: process.env.RABBIT_URL,
            IPFS_URL: process.env.IPFS_URL
        }
    }, {provider: cluster.provider});

    // console.log(process.env)
    const secrets = new k8s.core.v1.Secret(`${appName}-conf`, {
        stringData: {
            NEO4J_URI: process.env.NEO4J_URI,
            TIMESERIES_HOST: process.env.TIMESERIES_HOST,
            TIMESERIES_PASSWORD: process.env.TIMESERIES_PASSWORD,
            ROOT_SERVER: 'https://staging-api.hexhive.io',
            RABBIT_URL: process.env.RABBIT_URL,
            IPFS_URL: process.env.IPFS_URL,
        }
        // NEO4J_URI
        // TIMESERIES_HOST=54.66.232.181
        // TIMESERIES_PASSWORD=pass00tdb!
        
        // MAINTAINER_EMAIL=ross@hexhive.io
        
        // ROOT_SERVER=https://api.hexhive.io
        
        // RABBIT_URL=amqp://54.66.232.181
        
        // IPFS_URL=http://ip-172-31-34-95.ap-southeast-2.compute.internal:5001
    }, {
        provider: cluster.provider,
    })
    
    const deployment = new k8s.apps.v1.Deployment(`${appName}-dep`, {
        metadata: { labels: appLabels },
        spec: {
            replicas: 2,
            strategy: { type: "RollingUpdate" },
            selector: { matchLabels: appLabels },
            template: {
                metadata: { labels: appLabels },
                spec: {
                    containers: [{
                        imagePullPolicy: "Always",
                        name: appName,
                        image: "thetechcompany/greenco-signage:latest-next",
                        ports: [{ name: "http", containerPort: 9009 }],
                        volumeMounts: [
                            { name: 'greenscreen-storage', mountPath: '/data/storage' },
                        ],
                        env: [
                            { name: 'CLIENT_ID', value: 'test'},
                            { name: 'CLIENT_SECRET', value: 'hexhive_secret' },
                            { name: 'NODE_ENV', value: 'development' },
                            // { name: 'UI_URL',  value: `https://${domainName}/dashboard` },
                            // { name: 'BASE_URL',  value: `https://${domainName}`},
                            {name: "TIMESERIES_HOST", value: process.env.TIMESERIES_HOST},
                            {name: "TIMESERIES_PASSWORD",  value: process.env.TIMESERIES_PASSWORD},
                            {name: "NEO4J_URI",  value: process.env.NEO4J_URI},
                            {name: "ROOT_SERVER",  value: process.env.ROOT_SERVER},
                            {name: "RABBIT_URL",  value: process.env.RABBIT_URL},
                            {name: "IPFS_URL",  value: process.env.IPFS_URL},
                            // { name: "MONGO_URL", value: mongoUrl.apply((url) => `mongodb://${url}.default.svc.cluster.local`) },
                        ]
                    }],
                    volumes: [
                        {
                            name: 'greenscreen-storage',
                            persistentVolumeClaim: {
                                claimName: storageClaim.metadata.name,
                            },
                            
                        }
                    ]
                    // volumes: [{
                    //     name: `endpoints-config`,
                    //     configMap: {
                    //         name: configMap.metadata.name,
                    //         items: [{
                    //             key: 'endpoints',
                    //             path: 'endpoints.json'
                    //         }]
                    //     }
                    // }]
                }
            }
        },
    }, { provider: cluster.provider });

    const service = new k8s.core.v1.Service(`${appName}-svc`, {
        metadata: { 
            labels: appLabels,
            annotations: {
            //     'kubernetes.io/ingress.class': 'alb',
            //     'alb.ingress.kubernetes.io/scheme': 'internet-facing',
            //     'alb.ingress.kubernetes.io/target-type': 'ip',

                // 'service.beta.kubernetes.io/aws-load-balancer-ssl-cert': sslValidation.certificateArn,
                // 'service.beta.kubernetes.io/aws-load-balancer-ssl-ports': 'https',
                'service.beta.kubernetes.io/aws-load-balancer-backend-protocol': 'http',

                'service.beta.kubernetes.io/aws-load-balancer-type': 'external',
                'service.beta.kubernetes.io/aws-load-balancer-nlb-target-type': 'ip',
                'service.beta.kubernetes.io/aws-load-balancer-scheme': 'internet-facing'
            }
        },
        spec: {
            type: "LoadBalancer",
            ports: [{ port: 80, targetPort: "http", name: 'http' }, { port: 443, targetPort: "http", name: 'https'}],
            selector: appLabels,
        },
    }, { provider: cluster.provider });

    return {
        deployment,
        service
    }
}