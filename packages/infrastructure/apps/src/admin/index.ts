import * as k8s from '@pulumi/kubernetes'
import { Config, Output } from '@pulumi/pulumi';

export const AdminPane = async (provider: k8s.Provider, dbUrl: Output<string>) => {
    const config = new Config();

    let suffix = config.require('suffix');
    let imageTag = config.require('image-tag');

    let redundancy = config.require('redundancy');

    const appName = `admin-panel-${suffix}`;
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
                        image: `thetechcompany/hexhive-admin:${imageTag}`,
                        ports: [{ name: "http", containerPort: 9011 }],
                        volumeMounts: [
                        ],
                        env: [
                            { name: 'NODE_ENV', value: 'production' },
                            { name: 'VERSION_SHIM', value: '1.0.6' },
                            { name: "DATABASE_URL", value: dbUrl.apply((url) => `postgresql://postgres:${config.require('postgres-password')}@${url}.default.svc.cluster.local:5432/public`) },
                        ],
                        resources: {
                            limits: {
                                cpu: "0.25",
                            }
                        }
                    }],
                }
            }
        },
    }, { provider: provider });


    return {
        deployment,
        // service
    }
}