import * as k8s from "@pulumi/kubernetes";
import * as aws from '@pulumi/aws'
import { all, Config, Output } from "@pulumi/pulumi";

export const MicrofrontendCluster = async (provider: k8s.Provider, ssl: aws.acm.Certificate, vpcId: Output<string>, zone: aws.route53.GetZoneResult, domainName: string, backendUrl: string, mongoUrl: Output<string>, dbUrl: Output<any>, postgresPass: Output<any>) => {
    // Create an EKS cluster with the default configuration.
    // const cluster = new eks.Cluster("my-cluster");

    const config = new Config();

    let suffix = config.require('suffix');
    let imageTag = process.env.FRONTEND_IMAGE //config.require('image-tag');
    let redundancy = config.require('redundancy');

    // Deploy a small canary service (NGINX), to test that the cluster is working.
    const appName = `hexhive-frontend-${suffix}`;
    const appLabels = { appClass: appName, suffix };

    

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

    // sslValidation.certificateArn

    const deployment = new k8s.apps.v1.Deployment(`${appName}-dep`, {
        metadata: { labels: appLabels },
        spec: {
            replicas: redundancy ? parseInt(redundancy) : 2,
            strategy: { type: "RollingUpdate" },
            selector: { matchLabels: appLabels },
            template: {
                metadata: { labels: appLabels },
                spec: {
                    priority: 100,
                    nodeSelector: {
                        'role': 'worker'
                    },
                    containers: [{
                        imagePullPolicy: "Always",
                        name: appName,
                        image: `thetechcompany/hexhive-frontend-server:${imageTag}`,
                        ports: [
                            { name: "http", containerPort: 8000 },
                            // {name: "https", containerPort: 443}
                        ],
                        env: [
                            { name: 'DEPLOYMENT', value: config.require('deployment-level') },
                            { name: 'NODE_ENV', value: 'production' },
                            { name: 'DEPLOYMENT_LEVEL', value: suffix },
                            { name: 'UI_URL', value: `https://${domainName}/dashboard` },
                            { name: 'BASE_URL', value: `https://${domainName}` },
                            { name: 'BASE_DOMAIN', value: 'hexhive.io' },
                            { name: 'API_URL', value: `https://${backendUrl}` },
                            { name: "MONGO_URL", value: mongoUrl.apply((url) => `mongodb://${url}`) },
                            { name: "DATABASE_URL", value: all([dbUrl, postgresPass]).apply(([url, pass]) => `postgresql://postgres:${pass}@${url}.db-${suffix}.svc.cluster.local:5432/postgres`) },
                        ],
                        resources: {
                            limits: {
                                cpu: '0.5'
                            }
                        },
                        readinessProbe: {
                            tcpSocket: {
                                port: 'http'
                            }
                        }
                    }]
                }
            },
        },
    }, { provider: provider });

    const service = new k8s.core.v1.Service(`${appName}-svc`, {
        metadata: {
            name: `${appName}-svc`,
            labels: appLabels,
            annotations: {
            //    'service.beta.kubernetes.io/aws-load-balancer-ssl-cert': sslValidation.certificateArn,
            //     'service.beta.kubernetes.io/aws-load-balancer-ssl-ports': 'https',
            //     'service.beta.kubernetes.io/aws-load-balancer-backend-protocol': 'http',
            //     // 'service.beta.kubernetes.io/aws-load-balancer-type': 'external',
            //     'service.beta.kubernetes.io/aws-load-balancer-type': 'nlb',
            //     'service.beta.kubernetes.io/aws-load-balancer-nlb-target-type': 'ip',
            //     'service.beta.kubernetes.io/aws-load-balancer-scheme': 'internet-facing',
             }
        },
        spec: {
            type: "NodePort",
            ports: [{ name: "http", port: 80, targetPort: "http" }, { name: "https", port: 443, targetPort: 'http' }],
            selector: appLabels,
        },
    }, { provider: provider });

    const ingress = new k8s.networking.v1.Ingress('frontend-ingess', {
        metadata: {
            // namespace: ''
            annotations: {
                'alb.ingress.kubernetes.io/listen-ports': '[{"HTTPS":443}, {"HTTP":80}]',
                'alb.ingress.kubernetes.io/certificate-arn': ssl.arn,
                'alb.ingress.kubernetes.io/scheme': 'internet-facing',
                'alb.ingress.kubernetes.io/group.name': 'hexhive-core',
                'alb.ingress.kubernetes.io/success-codes': '200-499'
                // 'alb.ingress.kubernetes.io/target-node-labels': 'cluster=hexhive-cluster'
                // 'alb.ingress.kubernetes.io/target-type': 'ip'
                // 'alb.ingress.kubernetes.io/subnets': subnets.ids.apply((x) => x.join(', '))
            },
            
        },
        spec: {
            ingressClassName: 'alb',
            rules: [
                {
                    host: domainName,
                    http: {
                        paths: [
                            {
                                path: '/*',
                                pathType: 'ImplementationSpecific',
                                backend: {
                                    service: {
                                        name: service.metadata.name,
                                        port: {
                                            name: 'http'
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }, {
        provider
    })


    // Export the URL for the load balanced service.
    const url = ingress.status.loadBalancer.ingress[0].hostname;

    // aws.elb.getLoadBalancer({ })

    // const s : string = await url.apply((f) => f.toString())
    // const elbZone = await aws.route53.getZone({name: })
    //'Z0191605UGITHVV6M61S'

    const devRecord = new aws.route53.Record(`${appName}-frontend-dns`, {
        zoneId: zone.zoneId,
        name: domainName,
        type: 'A',
        aliases: [{
            name: url,
            zoneId: 'Z1GM3OXH4ZPM65',
            evaluateTargetHealth: true
        }]
    })


    // const ingressUrl = ingress.;

    return { url, deployment, service }
}