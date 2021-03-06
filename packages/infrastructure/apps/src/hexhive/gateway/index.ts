import * as k8s from "@pulumi/kubernetes";
import * as aws from '@pulumi/aws';
import { all, Config, Output } from "@pulumi/pulumi";

export const GatewayCluster = async (provider: k8s.Provider, vpcId: Output<string>, zone: aws.route53.GetZoneResult, domainName: string, frontendUrl: string, mongoUrl: Output<string>, dbUrl: Output<any>, postgresPass: Output<any>) => {
    // Create an EKS cluster with the default configuration.
    // const cluster = new eks.Cluster("my-cluster");

    // Deploy a small canary service (NGINX), to test that the cluster is working.

    const config = new Config();

    let suffix = config.require('suffix');
    let imageTag = process.env.GATEWAY_IMAGE //config.require('image-tag');
    let redundancy = config.require('redundancy');

    const appName = `hexhive-gateway-${suffix}`;
    const appLabels = { appClass: appName };

    let efsRoot = `gateway-config-${suffix}`;

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
    }, {
        provider
    })

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
    }, {
        provider
    })
    
    const sslCert = new aws.acm.Certificate(`${appName}-ssl-certif`, {
        domainName: domainName,
        // subjectAlternativeNames: [domainName],
        validationMethod: "DNS"   
    })

    const certValidation = new aws.route53.Record(`${appName}-certValidation`, {
        name: sslCert.domainValidationOptions[0].resourceRecordName,
        zoneId: zone.id,   
        type: sslCert.domainValidationOptions[0].resourceRecordType,
        records: [sslCert.domainValidationOptions[0].resourceRecordValue],
        ttl: 60
    })

    const sslValidation = new aws.acm.CertificateValidation(`${appName}-ssl-cert-validation`, {
        certificateArn: sslCert.arn,
        validationRecordFqdns: [certValidation.fqdn] //exampleRecord.map((rec) => rec.fqdn)
    })

    const configMap = new k8s.core.v1.ConfigMap(`${appName}-config`, {
        metadata: {name: `${appName}-config`},
        data: {
            endpoints: `
            {
                "endpoints": [
                    {
                        "name": "HiveFlow",
                        "url": "http://hive-flow-${suffix}-svc.default.svc.cluster.local/graphql",
                        "version": "0.0.1"
                    },
                    {
                        "name": "HiveCommand",
                        "url": "http://hive-command-${suffix}-svc.default.svc.cluster.local/graphql",
                        "version": "0.0.1"
                    },
                    {
                        "name": "HiveChat",
                        "url": "http://hive-chat-${suffix}-svc.default.svc.cluster.local/graphql",
                        "version": "0.0.1"
                    },
                    {
                        "name": "HiveAutomate",
                        "url": "http://hive-automate-${suffix}-svc.default.svc.cluster.local/graphql",
                        "version": "0.0.1"
                    },
                    {
                        "name": "HiveFiles",
                        "url": "http://hive-files-${suffix}-svc.default.svc.cluster.local/graphql",
                        "version": "0.0.1"
                    },
                    {
                        "name": "HiveReport",
                        "url": "http://hive-report-${suffix}-svc.default.svc.cluster.local/graphql",
                        "version": "0.0.1"
                    }
                ]	
            }`
        }   
    }, {
        provider: provider,
    })

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
                        image: `thetechcompany/hexhive-gateway:${imageTag}`,
                        ports: [{ name: "http", containerPort: 7000 }],
                        volumeMounts: [
                            { name: "keystore", mountPath: '/data/jwks/' },
                            { name: 'endpoints-config', mountPath: '/tmp/endpoints.json', subPath: 'endpoints.json' }
                        ],
                        env: [
                            { name: 'NODE_ENV', value: 'production' },
                            { name: 'UI_URL',  value: `https://${frontendUrl}/dashboard` },
                            { name: 'BASE_URL',  value: `https://${frontendUrl}`},
                            { name: 'GATEWAY_URL', value: `http://hexhive-gateway-${suffix}-svc.default.svc.cluster.local/graphql`},
                            { name: "MONGO_URL", value: mongoUrl.apply((url) => `mongodb://${url}.default.svc.cluster.local`) },
                            { name: "JWT_SECRET", value: process.env.JWT_SECRET || 'test' },
                            { name: 'DATABASE_URL', value: all([dbUrl, postgresPass]).apply(([url, pass]) => `postgresql://postgres:${pass}@${url}.default.svc.cluster.local:5432/postgres`) },

                        ],
                        resources: {
                            limits: {
                                cpu: '0.5'
                            }
                        },
                        readinessProbe: {
                            tcpSocket: {
                                port: 'http',
                            }
                        },
                        // livenessProbe: {
                        //     httpGet: {
                        //         path: '/graphql',
                        //         port: 'http'
                        //     }
                        // }
                    }],
                    volumes: [{
                        name: `endpoints-config`,
                        configMap: {
                            name: configMap.metadata.name,
                            items: [{
                                key: 'endpoints',
                                path: 'endpoints.json'
                            }]
                        }
                    }, 
                    {
                        name: 'keystore',
                        persistentVolumeClaim: {
                            claimName: storageClaim.metadata.name,
                        }
                    }]
                }
            }
        },
    }, { provider: provider });

    const service = new k8s.core.v1.Service(`${appName}-svc`, {
        metadata: { 
            name: `${appName}-svc`,
            labels: appLabels,
            annotations: {
        
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


    // Export the URL for the load balanced service.
    const url = service.status.loadBalancer.ingress[0].hostname;

    const gatewayRecord = new aws.route53.Record(`${appName}-gateway-dns`, {
        zoneId: zone.zoneId,
        name: domainName,
        type: "A",
        aliases: [{
            name: url,
            zoneId: 'ZCT6FZBF4DROD',
            evaluateTargetHealth: true
        }]   
    })

    // const ingressUrl = ingress.;

    return {url, deployment, service}
}