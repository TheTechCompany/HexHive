import * as k8s from '@pulumi/kubernetes'
import { Provider } from '@pulumi/kubernetes'
import { all, Input, Output } from '@pulumi/pulumi';

export default (provider: Provider, cidrBlocks: Input<string>[]) => {

    const chart = new k8s.helm.v3.Chart('aws-cloud-controller', {
        fetchOpts: {
            repo: 'https://kubernetes.github.io/cloud-provider-aws'
        },
        
        chart: 'aws-cloud-controller-manager',
        namespace: 'kube-system',
        
        values: {
            hostNetworking: true,
            nodeSelector: {
                'node-role.kubernetes.io/master': 'true' ,
                'node-role.kubernetes.io/control-plane': 'true'
            },
            args: all(cidrBlocks).apply((blocks) => [
                '--allocate-node-cidrs=false',
                ...blocks.map((x) => `--cluster-cidr=${x}`),
                '--cloud-provider=aws',
                '--cluster-name=hexhive-cluster'
            ])
        }
        // '--cluster-cidr=172.20.0.0/16',
    }, {
        provider
    })
    return chart;
}