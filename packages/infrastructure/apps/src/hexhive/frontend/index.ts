import * as eks from "@pulumi/eks";
import * as k8s from "@pulumi/kubernetes";
import * as aws from '@pulumi/aws'
import { Config, output, Output } from "@pulumi/pulumi";

export const MicrofrontendCluster = async (provider: k8s.Provider, zone: aws.route53.GetZoneResult, domainName: string, backendUrl: string, mongoUrl: Output<string>, dbUrl: Output<string>) => {
    // Create an EKS cluster with the default configuration.
    // const cluster = new eks.Cluster("my-cluster");

    const config = new Config();

    let suffix = config.require('suffix');
    let imageTag = process.env.FRONTEND_IMAGE //config.require('image-tag');
    let redundancy = config.require('redundancy');

    // Deploy a small canary service (NGINX), to test that the cluster is working.
    const appName = `hexhive-frontend-${suffix}`;
    const appLabels = { appClass: appName };

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
                            { name: "MONGO_URL", value: mongoUrl.apply((url) => `mongodb://${url}.default.svc.cluster.local`) },
                            { name: "DATABASE_URL", value: dbUrl.apply((url) => `postgresql://postgres:${config.require('postgres-password')}@${url}.default.svc.cluster.local:5432/postgres`) },
                        ],
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
            labels: appLabels,
            annotations: {
                // 'kubernetes.io/ingress.class': 'alb',
                //     'alb.ingress.kubernetes.io/scheme': 'internet-facing',
                //     'alb.ingress.kubernetes.io/target-type': 'ip',
                'service.beta.kubernetes.io/aws-load-balancer-ssl-cert': sslValidation.certificateArn,
                'service.beta.kubernetes.io/aws-load-balancer-ssl-ports': 'https',
                'service.beta.kubernetes.io/aws-load-balancer-backend-protocol': 'http',
                'service.beta.kubernetes.io/aws-load-balancer-type': 'external',
                'service.beta.kubernetes.io/aws-load-balancer-nlb-target-type': 'ip',
                'service.beta.kubernetes.io/aws-load-balancer-scheme': 'internet-facing',
                // 'alb.ingress.kubernetes.io/certificate-arn': sslCert.arn,
                // 'alb.ingress.kubernetes.io/listen-ports': '[{"HTTP": 80}, {"HTTPS":443}]',
                // 'alb.ingress.kubernetes.io/actions.ssl-redirect': '443'
            }
        },
        spec: {
            type: "LoadBalancer",
            ports: [{ name: "http", port: 80, targetPort: "http" }, { name: "https", port: 443, targetPort: 'http' }],
            selector: appLabels,
        },
    }, { provider: provider });

    // Export the URL for the load balanced service.
    const url = service.status.loadBalancer.ingress[0].hostname;

    // aws.elb.getLoadBalancer({ })

    // const s : string = await url.apply((f) => f.toString())
    // const elbZone = await aws.route53.getZone({name: })
    //'Z0191605UGITHVV6M61S'
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


    // const ingressUrl = ingress.;

    return { url, deployment, service }
}