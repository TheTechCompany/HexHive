import * as k8s from '@pulumi/kubernetes'
import { Config } from '@pulumi/pulumi';

export const ApplicationDB = (provider: k8s.Provider) => {

    const config = new Config();

    let suffix = config.require('suffix');
    
    const depName = `pgdb-${suffix}`

    const appLabels = {appClass: depName}

    const deployment = new k8s.apps.v1.Deployment(`${depName}-dep`, {
        metadata: {
            labels: appLabels
        },
        spec: {
            replicas: 1,
            strategy: {type: "RollingUpdate"},
            selector: { matchLabels: appLabels },
            template: {
                metadata: {labels: appLabels},
                spec: {
                    containers: [{
                        name: depName,
                        image: 'postgres:latest',
                        ports: [{name: 'postgres', containerPort: 5432}],
                        env: [
                            {
                                name: 'POSTGRES_PASSWORD',
                                value: config.require('postgres-password')
                            }
                        ]
                    }],
                    
                }
            }
        }
    }, {provider})

    const service = new k8s.core.v1.Service(`${depName}-svc`, {
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
            ports: [{ name: "postgres", port: 5432, targetPort: "postgres" }],
            selector: appLabels,
        },
    }, { provider: provider });

    return {
        service,
        deployment
    }
}