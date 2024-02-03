import * as k8s from '@pulumi/kubernetes'
import { Provider } from '@pulumi/kubernetes';
import { Config } from '@pulumi/pulumi'

export const PgBouncer = (provider: Provider, timescaleUrl: any, timescalePass: any) => {

    const config = new Config()
    const suffix = config.require('suffix');

    const depName = `pg-bouncer-${suffix}`;

    const appLabels = {appClass: depName}


    const dep = new k8s.apps.v1.Deployment(`pg-bouncer-${suffix}`, {
        metadata: {
            labels: appLabels
        },
        spec: {
            selector: {
                matchLabels: appLabels
            },
            template: {
                
                metadata: {
                    labels: appLabels
                },
                spec: {
                    // priority: 50,
                    
                    containers: [
                        {
                            name: 'pgbouncer',
                            image: 'bitnami/pgbouncer:1.17.0',
                            imagePullPolicy: 'IfNotPresent',
                            ports: [
                                {
                                    name: 'pgbouncer',
                                    containerPort: 6432
                                }
                            ],
                            env: [
                                {
                                    name: 'POSTGRESQL_HOST',
                                    value: timescaleUrl
                                },
                                {
                                    name: 'POSTGRESQL_PASSWORD',
                                    value: timescalePass
                                },
                                {
                                    name: 'PGBOUNCER_POOL_MODE',
                                    value: 'transaction'
                                },
                                {
                                    name: 'POSTGRESQL_DATABASE',
                                    value: 'hivecommand'
                                },
                                {
                                    name: "PGBOUNCER_DATABASE",
                                    value: 'hivecommand'
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }, {
        provider
    })

    const svc = new k8s.core.v1.Service(`pg-bouncer-${suffix}-svc`, {
        metadata: {
            labels: appLabels,
        },
        spec: {
            type: "ClusterIP",
            ports: [{ name: "pgbouncer", port: 6432, targetPort: "pgbouncer" }],
            selector: appLabels,
        }
    }, {
        provider
    })

    return {
        service: svc,
        deployment: dep
    }
}