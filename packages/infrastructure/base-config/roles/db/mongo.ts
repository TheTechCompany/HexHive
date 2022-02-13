import * as eks from "@pulumi/eks";
import * as k8s from '@pulumi/kubernetes'

export const MongoCluster = (cluster: eks.Cluster) => {
    
    const appName = "hexhive-mongo";
    const appLabels = { appClass: appName };

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
                        image: "mongo:latest",
                        ports: [
                            { name: "mongo", containerPort: 27017 }, 
                        ],
                        env: [
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
            ports: [{ name: "mongo", port: 27017, targetPort: "mongo" }],
            selector: appLabels,
        },
    }, { provider: cluster.provider });

    // Export the URL for the load balanced service.
    const url = service.metadata.name //status.loadBalancer.ingress[0].ip;

    return {url}
}