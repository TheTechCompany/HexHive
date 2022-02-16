import * as eks from "@pulumi/eks";
import * as k8s from "@pulumi/kubernetes";


export const GatewayCluster = (cluster: eks.Cluster) => {
    // Create an EKS cluster with the default configuration.
    // const cluster = new eks.Cluster("my-cluster");

    // Deploy a small canary service (NGINX), to test that the cluster is working.
    const appName = "hexhive-gateway";
    const appLabels = { appClass: appName };
    
    const deployment = new k8s.apps.v1.Deployment(`${appName}-dep`, {
        metadata: { labels: appLabels },
        spec: {
            replicas: 2,
            selector: { matchLabels: appLabels },
            template: {
                metadata: { labels: appLabels },
                spec: {
                    containers: [{
                        name: appName,
                        image: "nginx",
                        ports: [{ name: "http", containerPort: 80 }]
                    }],
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
                'service.beta.kubernetes.io/aws-load-balancer-type': 'external',
                'service.beta.kubernetes.io/aws-load-balancer-nlb-target-type': 'ip',
                'service.beta.kubernetes.io/aws-load-balancer-scheme': 'internet-facing'
            }
        },
        spec: {
            type: "LoadBalancer",
            ports: [{ port: 80, targetPort: "http" }],
            selector: appLabels,
        },
    }, { provider: cluster.provider });

    // const ingress = new k8s.extensions.v1beta1.Ingress(`${appName}-ingress`, {
    //     metadata: { 
    //         labels: appLabels,
    //         annotations: {
    //             'kubernetes.io/ingress.class': 'alb',
    //             'alb.ingress.kubernetes.io/scheme': 'internet-facing',
    //             'alb.ingress.kubernetes.io/target-type': 'ip'
    //         }
    //      },
    //     spec: {
    //         rules: [{

    //             // The hostname for the ingress rule.
    //             // host: "api.hexhive.io",

    //             // The path for the ingress rule.
    //             http: {
    //                 paths: [{
    //                     path: "/",
    //                     // pathType: 'Prefix',
    //                     backend: {
    //                         serviceName: `${appName}-svc`,
    //                         servicePort: 80
    //                     } 
    //                 }]


    //             }
    //         }]

    //     }
    // }, {provider: cluster.provider});

    // Export the URL for the load balanced service.
    const url = service.status.loadBalancer.ingress[0].hostname;

    const urls = service.status.loadBalancer.ingress.apply((i) => i.map((x) => x.hostname))

    // const ingressUrl = ingress.;

    return {url, urls}
}