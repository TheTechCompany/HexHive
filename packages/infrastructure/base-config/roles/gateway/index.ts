import * as eks from "@pulumi/eks";
import * as k8s from "@pulumi/kubernetes";
import * as aws from '@pulumi/aws';
import { Output } from "@pulumi/pulumi";


export const GatewayCluster = (cluster: eks.Cluster, zone: aws.route53.GetZoneResult, domainName: string, mongoUrl: Output<string>) => {
    // Create an EKS cluster with the default configuration.
    // const cluster = new eks.Cluster("my-cluster");

    // Deploy a small canary service (NGINX), to test that the cluster is working.
    const appName = "hexhive-gateway";
    const appLabels = { appClass: appName };
    
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
                        "name": "GreenScreen",
                        "url": "https://api.greenco.co.nz/graphql"
                    },
                    {
                        "name": "HiveFlow",
                        "url": "http://localhost:9011/graphql",
                        "version": "0.0.1"
                    },
                    {
                        "name": "HiveCommand",
                        "url": "http://localhost:9010/graphql",
                        "version": "0.0.1"
                    }
                ]	
            }`
        }   
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
                        image: "thetechcompany/hexhive-gateway:latest-next",
                        ports: [{ name: "http", containerPort: 7000 }],
                        volumeMounts: [
                            {name: 'endpoints-config', mountPath: '/tmp/endpoints.json', subPath: 'endpoints.json'}
                        ],
                        env: [
                            { name: 'CLIENT_ID', value: 'test'},
                            { name: 'CLIENT_SECRET', value: 'hexhive_secret' },
                            { name: 'NODE_ENV', value: 'development' },
                            { name: 'UI_URL',  value: `https://${domainName}/dashboard` },
                            { name: 'BASE_URL',  value: `https://${domainName}`},
                            { name: "NEO4J_URI", value: `neo4j://3.26.93.103` /*neo4Url.apply((url) => `neo4j://${url}.default.svc.cluster.local`)*/ },
                            { name: "MONGO_URL", value: mongoUrl.apply((url) => `mongodb://${url}.default.svc.cluster.local`) },
                        ]
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
                    }]
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
    }, { provider: cluster.provider });


    // Export the URL for the load balanced service.
    const url = service.status.loadBalancer.ingress[0].hostname;

    const gatewayRecord = new aws.route53.Record(`${appName}-record`, {
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