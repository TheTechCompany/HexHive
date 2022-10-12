import * as k8s from '@pulumi/kubernetes'
import { Config } from '@pulumi/pulumi';
import { Provider } from '@pulumi/kubernetes'

export const RabbitMQService = async (provider: Provider, appName: string, deployment: k8s.apps.v1.Deployment, ns: k8s.core.v1.Namespace) => {

    const appLabels = { appClass: appName };

    const service = new k8s.core.v1.Service(`${appName}-svc`, {
        metadata: { 
            labels: appLabels,
            name: `${appName}-svc`,
            namespace: ns.metadata.name,
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
            ports: [{ name: "amqp", port: 5672, targetPort: "amqp" }],
            selector: appLabels,
        },
    }, { 
        provider: provider,
        dependsOn: [deployment]
    });

    return service;
}