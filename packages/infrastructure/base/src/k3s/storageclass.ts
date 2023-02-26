import * as k8s from '@pulumi/kubernetes'
import { Provider } from '@pulumi/kubernetes';

export default (provider: Provider) => {

    const ebsCsiChart = new k8s.helm.v3.Chart('ebs-csi', {
        fetchOpts: {
            repo: 'https://kubernetes-sigs.github.io/aws-ebs-csi-driver'
        },
        chart: 'aws-ebs-csi-driver',
        version: 'v2.12.0',
        namespace: 'kube-system',
        values: {
            enableVolumeScheduling: true,
            enableVolumeResizing: true,
            enableVolumeSnapshot: true,
            'cloud-provider': 'external',
            controller: {
                topologySpreadConstraints: [
                    {
                        maxSkew: 1,
                        topologyKey: 'topology.ebs.csi.aws.com/zone',
                        whenUnsatisfiable: 'ScheduleAnyway'
                    }
                ]
            }
        }
    }, {
        provider
    })

    const storageClass = new k8s.storage.v1.StorageClass('ebs', {
        metadata: {
            name: 'ebs'
        },
        provisioner: 'kubernetes.io/aws-ebs',
        volumeBindingMode: 'WaitForFirstConsumer',
        reclaimPolicy: 'Retain',
        parameters: {
            type: 'gp3',
            iopsPerGB: '10',
            fsType: 'xfs'
        }
    }, {
        provider,
        // deleteBeforeReplace: true
    })

    return storageClass;
}