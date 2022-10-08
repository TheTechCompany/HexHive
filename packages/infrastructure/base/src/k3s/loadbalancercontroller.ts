import * as k8s from '@pulumi/kubernetes'
import * as aws from '@pulumi/aws'
import { Provider } from '@pulumi/kubernetes'
import elbIamPolicy from './iam_policy.json'
import { Input } from '@pulumi/pulumi'

export default (provider: Provider, vpcId: Input<string>) => {

    // const elbPolicy = new aws.iam.Policy(`AWSLoadBalancerControllerIAMPolicy`, {
    //     policy: JSON.stringify(elbIamPolicy)
    // })

    // const elbSaName = 'aws-load-balancer-controller'

    // const elbRole = new aws.iam.Role(
    //     'AmazonEKS_ELB_Role',
    //     {
    //         managedPolicyArns: [elbPolicy.arn],
    //         assumeRolePolicy: `{
    //             "Version": "2012-10-17",
    //             "Statement": [
    //                 {
    //                     "Effect":"Allow",
    //                     "Principal":{"Service":"ec2.amazonaws.com"},
    //                     "Action":"sts:AssumeRole"
    //                 }
    //             ]
    //         }`
    //     }
    // )

    // const elbSa = new k8s.core.v1.ServiceAccount(elbSaName, {
    //     metadata: {
    //         name: elbSaName,
    //         namespace: 'kube-system',
    //         annotations: {
    //             'eks.amazonaws.com/role-arn': elbRole.arn
    //         }
    //     }   
    // }, {
    //     provider: provider
    // })

    const loadBalancerChart = new k8s.helm.v3.Chart('load-balancer-controller', {
        fetchOpts: {
            repo: 'https://aws.github.io/eks-charts',

        },
        chart: 'aws-load-balancer-controller',
        values: {
            replicaCount: 1,
            hostNetwork: true,
            dnsPolicy: 'ClusterFirstWithHostNet',
            clusterName: 'hexhive-cluster',
            region: 'ap-southeast-2',
            vpcId: vpcId, //'vpc-7b212a1c',
            keepTLSSecret: true,
            image: {
                repository: 'amazon/aws-alb-ingress-controller'
                // repository: `602401143452.dkr.ecr.ap-southeast-2.amazonaws.com/amazon/aws-load-balancer-controller`
            },
            // serviceAccount: {
            //     create: false,
            //     name: elbSa.metadata.name //'aws-load-balancer-controller', //elbSa.metadata.name
            // }
        },
        namespace: 'kube-system'
    }, {
        provider
    })

    // const lbCrds = new k8s.yaml.ConfigFile('lb-crd', {
    //     file: './src/k3s/crds.yaml'
    // }, {
    //     provider
    // })
}