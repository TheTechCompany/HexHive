import * as eks from "@pulumi/eks";
import * as k8s from '@pulumi/kubernetes'

export const Neo4jCluster = (cluster: eks.Cluster) => {
    
    const appName = "hexhive-neo4j";
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
                        image: "neo4j:latest",
                        resources: {
                            requests: {
                                memory: '2Gi'
                            } 
                        },
                        ports: [
                            { name: "bolt", containerPort: 7687 }, 
                        ],
                        env: [
                            { name: "NEO4J_AUTH", value: "neo4j/test" },
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
            ports: [{ name: "bolt", port: 7687, targetPort: "bolt" }],
            selector: appLabels,
        },
    }, { provider: cluster.provider });

    // Export the URL for the load balanced service.
    const url = service.metadata.name // .status.loadBalancer.ingress[0].ip;

    return {url}
}