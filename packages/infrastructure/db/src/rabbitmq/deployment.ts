import {Provider} from '@pulumi/kubernetes'
import * as k8s from '@pulumi/kubernetes'
import { Config } from '@pulumi/pulumi';

export const RabbitMQDeployment = async (provider: Provider, appName: string, storageClaim: k8s.core.v1.PersistentVolumeClaim) => {

    const config = new Config();
    const suffix = config.require('suffix');

    const appLabels = { appClass: appName };

    const deployment = new k8s.apps.v1.Deployment(`${appName}-dep`, {
        metadata: { 
            labels: appLabels,
        },
        spec: {
            replicas: 1,
            strategy: { type: "RollingUpdate" },
            selector: { matchLabels: appLabels },
            template: {
                metadata: { labels: appLabels },
                spec: {
                 
                    hostname: `hive-command-mq-${suffix}`,
                    containers: [{
                        imagePullPolicy: "Always",
                        name: appName,
                        image: `rabbitmq:3.9`,
                        ports: [{ name: "amqp", containerPort: 5672 }],
                        volumeMounts: [
                            {
                                name: 'persistence',
                                mountPath: `/var/lib/rabbitmq/mnesia/`
                            }
                        ],
                        // env: [
                        //     {name: 'POSTGRES_PASSWORD', value: process.env.TIMESERIES_PASSWORD},
                        // ],
                        resources: {
                            limits: {
                                cpu: '0.25'
                            }
                        }
                    }],
                    volumes: [
                        {
                            name: 'persistence',
                            persistentVolumeClaim: {
                                claimName: storageClaim.metadata.name
                            }
                        }
                    ]
                    // volumes: [
                    //     {
                    //         name: 'persistence',
                    //         persistentVolumeClaim: {
                    //             claimName: storageClaim.metadata.name
                    //         }
                    //     }
                    // ]
                }
            }
        },
    }, { provider: provider });

    return deployment
}