import * as eks from "@pulumi/eks";
import * as k8s from "@pulumi/kubernetes";
import * as aws from '@pulumi/aws'
import { Output } from "@pulumi/pulumi";

export const MicrofrontendCluster = async (cluster: eks.Cluster, zone: aws.route53.GetZoneResult, domainName: string, neo4Url: Output<string>, mongoUrl: Output<string>) => {
    // Create an EKS cluster with the default configuration.
    // const cluster = new eks.Cluster("my-cluster");

    // Deploy a small canary service (NGINX), to test that the cluster is working.
    const appName = "hexhive-frontend";
    const appLabels = { appClass: appName };

    const sslCert = new aws.acm.Certificate(`${appName}-ssl-cert`, {
        domainName: domainName,
        validationMethod: "DNS"
    })

    const exampleRecord: aws.route53.Record[] = [];

    // console.log(sslCert.domainValidationOptions.apply(opts => opts.map((x) => (x as any).resources )))
    const dnsRecords = Object.entries(
        sslCert.domainValidationOptions.apply(domainValidationOptions => domainValidationOptions.reduce((__obj, dvo) => ({
            ...__obj, 
            [dvo.domainName]: {
                name: dvo.resourceRecordName,
                record: dvo.resourceRecordValue,
                type: dvo.resourceRecordType,
            }
        }), {})
    )).map(([k, v]) => ({key: k, value: v}))
    
    // console.log(dns)

    for(const range of dnsRecords) {
        
        // let r = (range as any)
        // exampleRecord.push(new aws.route53.Record(`record-${range.key}`, {
        //     allowOverwrite: true,
        //     name: r.value.name,
        //     records: [r.value.record ],
        //     ttl: 60,
        //     type: r.value.type,
        //     zoneId: zone.zoneId
        // }))

    }

    // const sslValidation = new aws.acm.CertificateValidation(`${appName}-ssl-cert-validation`, {
    //     certificateArn: sslCert.arn,
    //     validationRecordFqdns: exampleRecord.map((rec) => rec.fqdn)
    // })

    // sslValidation.certificateArn
    
    const deployment = new k8s.apps.v1.Deployment(`${appName}-dep`, {
        metadata: { labels: appLabels },
        spec: {
            replicas: 2,
            strategy: {type: "RollingUpdate"},
            selector: { matchLabels: appLabels },
            template: {
                metadata: { labels: appLabels },
                spec: {
                    containers: [{
                        name: appName,
                        image: "thetechcompany/hexhive-frontend-server:latest",
                        ports: [
                            { name: "http", containerPort: 8000 }, 
                            // {name: "https", containerPort: 443}
                        ],
                        env: [
                            { name: 'CLIENT_ID', value: 'test'},
                            { name: 'CLIENT_SECRET', value: 'hexhive_secret' },
                            { name: 'NODE_ENV', value: 'development' },
                            { name: 'UI_URL',  value: 'https://dev.hexhive.io/dashboard' },
                            { name: 'BASE_URL',  value: 'https://dev.hexhive.io' },
                            { name: "NEO4J_URI", value: `neo4j://3.26.93.103` /*neo4Url.apply((url) => `neo4j://${url}.default.svc.cluster.local`)*/ },
                            { name: "MONGO_URL", value: mongoUrl.apply((url) => `mongodb://${url}.default.svc.cluster.local`) },
                        ]
                    }]
                }
            },
        },
    }, { provider: cluster.provider });

    const service = new k8s.core.v1.Service(`${appName}-svc`, {
        metadata: { 
            labels: appLabels,
            annotations: {
                // 'kubernetes.io/ingress.class': 'alb',
            //     'alb.ingress.kubernetes.io/scheme': 'internet-facing',
            //     'alb.ingress.kubernetes.io/target-type': 'ip',
                'service.beta.kubernetes.io/aws-load-balancer-ssl-cert': sslCert.arn,
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
            ports: [{ name: "http", port: 80, targetPort: "http" }, {name: "https", port: 443, targetPort: 'http'}],
            selector: appLabels,
        },
    }, { provider: cluster.provider });

    // Export the URL for the load balanced service.
    const url = service.status.loadBalancer.ingress[0].hostname;

    // aws.elb.getLoadBalancer({ })

    // const s : string = await url.apply((f) => f.toString())
    // const elbZone = await aws.route53.getZone({name: })
//'Z0191605UGITHVV6M61S'
    const devRecord = new aws.route53.Record('dev-frontend', {
        zoneId: zone.zoneId,
        name: 'dev.hexhive.io',
        type: 'A',
        aliases: [{
            name: url,
            zoneId: 'ZCT6FZBF4DROD',
            evaluateTargetHealth: true
        }]
    })


    // const ingressUrl = ingress.;

    return {url, dnsRecords}
}