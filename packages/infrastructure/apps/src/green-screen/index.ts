import * as k8s from '@pulumi/kubernetes'
import { efs } from '@pulumi/aws'
import { ec2 } from '@pulumi/awsx';
import { Config, Output } from '@pulumi/pulumi';
import * as aws from '@pulumi/aws'

export const GreenScreen = async (provider: k8s.Provider, vpcId: Output<string>, domainName: string,  zone: aws.route53.GetZoneResult,  rootServer: string) => {
    const config = new Config();

    let suffix = config.require('suffix');
    let imageTag = config.require('image-tag');
    let redundancy = config.require('redundancy');

    const appName = `green-screen-${suffix}`;
    const appLabels = { appClass: appName };

    // if(!process.env.NEO4J_URI || !process.env.TIMESERIES_HOST || !process.env.TIMESERIES_PASSWORD || !process.env.RABBIT_URL) return

    const sslCert = new aws.acm.Certificate(`${appName}-ssl-certif`, {
        domainName: domainName,
        // subjectAlternativeNames: [domainName],
        validationMethod: "DNS"
    })


    let certValidation = new aws.route53.Record(`${appName}-certValidation`, {
        name: sslCert.domainValidationOptions[0].resourceRecordName,
        zoneId: zone.zoneId,
        type: sslCert.domainValidationOptions[0].resourceRecordType,
        records: [sslCert.domainValidationOptions[0].resourceRecordValue],
        ttl: 60
    });


    const sslValidation = new aws.acm.CertificateValidation(`${appName}-ssl-cert-validation`, {
        certificateArn: sslCert.arn,
        validationRecordFqdns: [certValidation.fqdn] //exampleRecord.map((rec) => rec.fqdn)
    })


    const efsVolume = new efs.FileSystem(`greenscreen-storage-${suffix}`)
    
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
    const efsAp = new efs.AccessPoint(`greenscreen-ap-${suffix}`, {
        fileSystemId: efsVolume.id,
        posixUser: {uid: 1000, gid: 1000},
        rootDirectory: { path: "/" },
    })

    const storagePv = new k8s.core.v1.PersistentVolume(`greenscreen-pv-${suffix}`, {
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
    })

    const storageClaim = new k8s.core.v1.PersistentVolumeClaim(`greenscreen-pvc-${suffix}`, {
        metadata: {
            name: `greenscreen-pvc-${suffix}`,
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

    // const configMap = new k8s.core.v1.ConfigMap(`${appName}-config`, {
    //     data: {   
    //         NEO4J_URI: process.env.NEO4J_URI,
    //         TIMESERIES_HOST: process.env.TIMESERIES_HOST,
    //         ROOT_SERVER: 'https://staging-api.hexhive.io',
    //         RABBIT_URL: process.env.RABBIT_URL,
    //     }
    // }, {provider: cluster.provider});

    // console.log(process.env)
    // const secrets = new k8s.core.v1.Secret(`${appName}-conf`, {
    //     stringData: {
    //         NEO4J_URI: process.env.NEO4J_URI,
    //         TIMESERIES_HOST: process.env.TIMESERIES_HOST,
    //         TIMESERIES_PASSWORD: process.env.TIMESERIES_PASSWORD,
    //         ROOT_SERVER: 'https://staging-api.hexhive.io',
    //         RABBIT_URL: process.env.RABBIT_URL,
    //         IPFS_URL: process.env.IPFS_URL,
    //     }
    //     // NEO4J_URI
    //     // TIMESERIES_HOST=54.66.232.181
    //     // TIMESERIES_PASSWORD=pass00tdb!
        
    //     // MAINTAINER_EMAIL=ross@hexhive.io
        
    //     // ROOT_SERVER=https://api.hexhive.io
        
    //     // RABBIT_URL=amqp://54.66.232.181
        
    //     // IPFS_URL=http://ip-172-31-34-95.ap-southeast-2.compute.internal:5001
    // }, {
    //     provider: cluster.provider,
    // })
    
    const deployment = new k8s.apps.v1.Deployment(`${appName}-dep`, {
        metadata: { labels: appLabels },
        spec: {
            replicas: redundancy ? parseInt(redundancy) : 2,
            strategy: { type: "RollingUpdate" },
            selector: { matchLabels: appLabels },
            template: {
                metadata: { labels: appLabels },
                spec: {
                    containers: [{
                        imagePullPolicy: "Always",
                        name: appName,
                        image: `thetechcompany/greenco-signage:${imageTag}`,
                        ports: [{ name: "http", containerPort: 9009 }],
                        volumeMounts: [
                            { name: 'greenscreen-storage', mountPath: '/data/campaigns' },
                        ],
                        env: [
                            { name: 'CLIENT_ID', value: process.env.CLIENT_ID || 'test'},
                            { name: 'CLIENT_SECRET', value: process.env.CLIENT_SECRET || 'secret' },
                            { name: 'NODE_ENV', value: 'production' },
                            // { name: 'UI_URL',  value: `https://${domainName}/dashboard` },
                            // { name: 'BASE_URL',  value: `https://${domainName}`},
                            {name:'CAMPAIGN_ROOT', value: '/data/campaigns'},
                            {name: "TIMESERIES_HOST", value: process.env.TIMESERIES_HOST},
                            {name: "TIMESERIES_PASSWORD",  value: process.env.TIMESERIES_PASSWORD},
                            {name: "NEO4J_URI",  value: process.env.NEO4J_URI},
                            { name: "ROOT_SERVER",  value: `http://${rootServer}` },
                            {name: "RABBIT_URL",  value: process.env.RABBIT_URL},
                            {name: "VERSION_SHIM", value: '1.0.7'}
                            // {name: "IPFS_URL",  value: process.env.IPFS_URL},
                            // { name: "MONGO_URL", value: mongoUrl.apply((url) => `mongodb://${url}.default.svc.cluster.local`) },
                        ],
                        resources: {
                            requests: {
                                cpu: '0.5',
                                memory: '1Gi'
                            }
                        },
                        readinessProbe: {
                            tcpSocket: {
                                port: 'http'
                            }
                        },
                        // livenessProbe: {
                        //     httpGet: {
                        //         path: '/graphql',
                        //         port: 'http'
                        //     }
                        // }
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
    }, { provider: provider });

    // const service = new k8s.core.v1.Service(`${appName}-svc`, {
    //     metadata: { 
    //         labels: appLabels,
    //         annotations: {
    //             // 'service.beta.kubernetes.io/aws-load-balancer-ssl-cert': sslCert.arn,
    //             // 'service.beta.kubernetes.io/aws-load-balancer-ssl-ports': 'https',
    //             // 'service.beta.kubernetes.io/aws-load-balancer-backend-protocol': 'http',
    //             // 'service.beta.kubernetes.io/aws-load-balancer-type': 'internal',
    //             // 'service.beta.kubernetes.io/aws-load-balancer-nlb-target-type': 'ip',
    //             // 'service.beta.kubernetes.io/aws-load-balancer-scheme': 'internet-facing',
    //         }
    //     },
    //     spec: {
    //         type: "ClusterIP",
    //         ports: [{ name: "http", port: 80, targetPort: "http" }],
    //         selector: appLabels,
    //     },
    // }, { provider: cluster.provider });


    const service = new k8s.core.v1.Service(`${appName}-svc`, {
        metadata: { 
            labels: appLabels,
            annotations: {
            //     'kubernetes.io/ingress.class': 'alb',
            //     'alb.ingress.kubernetes.io/scheme': 'internet-facing',
            //     'alb.ingress.kubernetes.io/target-type': 'ip',

                'service.beta.kubernetes.io/aws-load-balancer-ssl-cert': sslValidation.certificateArn,
                'service.beta.kubernetes.io/aws-load-balancer-ssl-ports': 'https',
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
    }, { provider: provider });

    const url = service.status.loadBalancer.ingress[0].hostname;

    const devRecord = new aws.route53.Record(`${appName}-frontend`, {
        zoneId: zone.zoneId,
        name: domainName,
        type: 'A',
        aliases: [{
            name: url,
            zoneId: 'ZCT6FZBF4DROD',
            evaluateTargetHealth: true
        }]
    })

    
    return {
        deployment,
        service,
        efsVolume
    }
}