import * as k8s from '@pulumi/kubernetes'
import { Config } from '@pulumi/pulumi';

export const HiveFlow = (provider: k8s.Provider, rootServer: string) => {
    const config = new Config();

    let suffix = config.require('suffix');
    let imageTag = config.require('image-tag');

    let redundancy = config.require('redundancy');

    const appName = `hive-flow-${suffix}`;
    const appLabels = { appClass: appName };
    
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
                        image: `thetechcompany/hiveflow-backend:${imageTag}`,
                        ports: [{ name: "http", containerPort: 9011 }],
                        volumeMounts: [
                        ],
                        env: [
                            { name: 'CLIENT_ID', value: process.env.CLIENT_ID },
                            { name: 'CLIENT_SECRET', value: process.env.CLIENT_SECRET },
                            { name: 'NODE_ENV', value: 'production' },
                            { name: 'ROOT_SERVER', value: `http://${rootServer}` },
                            { name: 'VERSION_SHIM', value: '1.0.5' },
                            // { name: 'UI_URL',  value: `https://${domainName}/dashboard` },
                            // { name: 'BASE_URL',  value: `https://${domainName}`},
                            { name: "NEO4J_URI", value: process.env.NEO4J_URI /*neo4Url.apply((url) => `neo4j://${url}.default.svc.cluster.local`)*/ },
                            // { name: "MONGO_URL", value: mongoUrl.apply((url) => `mongodb://${url}.default.svc.cluster.local`) },
                        ],
                        readinessProbe: {
                            httpGet: {
                                path: '/graphql',
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



    const service = new k8s.core.v1.Service(`${appName}-svc`, {
        metadata: { 
            labels: appLabels,
            name: `${appName}-svc`,
            annotations: {
                // 'service.beta.kubernetes.io/aws-load-balancer-ssl-cert': sslCert.arn,
                // 'service.beta.kubernetes.io/aws-load-balancer-ssl-ports': 'https',
                // 'service.beta.kubernetes.io/aws-load-balancer-backend-protocol': 'http',
                // 'service.beta.kubernetes.io/aws-load-balancer-type': 'internal',
                // 'service.beta.kubernetes.io/aws-load-balancer-nlb-target-type': 'ip',
                // 'service.beta.kubernetes.io/aws-load-balancer-scheme': 'internet-facing',
            }
        },
        spec: {
            type: "ClusterIP",
            ports: [{ name: "http", port: 80, targetPort: "http" }],
            selector: appLabels,
        },
    }, { provider: provider });

    // const service = new k8s.core.v1.Service(`${appName}-svc`, {
    //     metadata: { 
    //         labels: appLabels,
    //         annotations: {
    //         //     'kubernetes.io/ingress.class': 'alb',
    //         //     'alb.ingress.kubernetes.io/scheme': 'internet-facing',
    //         //     'alb.ingress.kubernetes.io/target-type': 'ip',

    //             // 'service.beta.kubernetes.io/aws-load-balancer-ssl-cert': sslValidation.certificateArn,
    //             // 'service.beta.kubernetes.io/aws-load-balancer-ssl-ports': 'https',
    //             'service.beta.kubernetes.io/aws-load-balancer-backend-protocol': 'http',

    //             'service.beta.kubernetes.io/aws-load-balancer-type': 'external',
    //             'service.beta.kubernetes.io/aws-load-balancer-nlb-target-type': 'ip',
    //             'service.beta.kubernetes.io/aws-load-balancer-scheme': 'internet-facing'
    //         }
    //     },
    //     spec: {
    //         type: "LoadBalancer",
    //         ports: [{ port: 80, targetPort: "http", name: 'http' }, { port: 443, targetPort: "http", name: 'https'}],
    //         selector: appLabels,
    //     },
    // }, { provider: cluster.provider });

    return {
        deployment,
        service
    }
}