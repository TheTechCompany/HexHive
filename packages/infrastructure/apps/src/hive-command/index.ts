import * as k8s from '@pulumi/kubernetes'
import { Config, Output } from '@pulumi/pulumi';

export const HiveCommand = (provider: k8s.Provider, rootServer: string, dbUrl: Output<string>) => {
    const config = new Config();

    let suffix = config.require('suffix');
    let imageTag = config.require('image-tag');
    let redundancy = config.require('redundancy');

    const appName = `hive-command-${suffix}`;
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
                        image: `thetechcompany/hivecommand-backend:${imageTag}`,
                        ports: [{ name: "http", containerPort: 9010 }],
                        volumeMounts: [
                        ],
                        env: [
                            { name: 'CLIENT_ID', value: process.env.CLIENT_ID || 'test'},
                            { name: 'CLIENT_SECRET', value: process.env.CLIENT_SECRET || 'secret' },
                            { name: 'NODE_ENV', value: 'production' },
                            { name: 'ROOT_SERVER', value: `http://${rootServer}` },
                            {name: "RABBIT_URL",  value: process.env.RABBIT_URL},
                            {name: "VERSION_SHIM", value: '1.0.10'},
                            {name: "TIMESERIES_HOST", value: process.env.TIMESERIES_HOST},
                            {name: "TIMESERIES_PASSWORD",  value: process.env.TIMESERIES_PASSWORD},
                            {name: "MONGO_URL", value: process.env.COMMAND_MONGO_URL},
                            {name: "MONGO_DB", value: process.env.COMMAND_MONGO_DB},
                            {name: "MONGO_USER", value: process.env.COMMAND_MONGO_USER},
                            {name: "MONGO_PASS", value: process.env.COMMAND_MONGO_PASS},
                            {name: "MONGO_AUTH_DB", value: process.env.COMMAND_MONGO_AUTH_DB},

                            { name: "DATABASE_URL", value: dbUrl.apply((url) => `postgresql://postgres:${config.require('postgres-password')}@${url}.default.svc.cluster.local:5432/hivecommand`) },

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

    return {
        deployment,
        service
    }
}