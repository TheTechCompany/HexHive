import * as aws from "@pulumi/aws"
import { GetCallerIdentityResult } from "@pulumi/aws"
import * as eks from '@pulumi/eks'
import { all } from "@pulumi/pulumi"
import * as k8s from '@pulumi/kubernetes'

import elbIamPolicy from './iam_policy.json'

export default (cluster: eks.Cluster, account: GetCallerIdentityResult) => {

    const vpcId = cluster.core.vpcId;
    const oidcUrl = cluster.core.oidcProvider?.url

    //Add ELB Policy
    const elbPolicy = new aws.iam.Policy(`AWSLoadBalancerControllerIAMPolicy`, {
        policy: JSON.stringify(elbIamPolicy)
    })

    const elbSaName = 'aws-load-balancer-controller'

    // const elbAssume = all([oidcUrl, account.accountId ]).apply(([url, accountId]) => 

    //     aws.iam.getPolicyDocument({
    //         statements: [
    //             {
    //                 actions: ['sts:AssumeRoleWithWebIdentity'],
    //                 conditions: [
    //                     {
    //                         test: 'StringEquals',
    //                         values: [`system:serviceaccount:kube-system:${elbSaName}`],
    //                         variable: `${url.replace('https://', '')}:sub`
    //                     }
    //                 ],
    //                 effect: 'Allow',
    //                 principals: [{identifiers: [`arn:aws:iam::${accountId}:oidc-provider/${url.replace('https://', '')}`], type: 'Federated'}]
    //             }
    //         ]
    //     })
    // )


    // const elbRole = new aws.iam.Role(
    //     'AmazonEKS_ELB_Role',
    //     {
    //         assumeRolePolicy: elbAssume.json
    //     }
    // )

    // const elbInstanceRole = new aws.iam.RolePolicyAttachment(
    //     'AmazonEKS_ELB_Controller_Policy_Attachment',
    //     {
    //         policyArn: elbPolicy.arn,
    //         role: elbRole.name
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
    //     provider: cluster.provider
    // })

    //Add AWS ELB Controller
    
    // const loadBalancer = new k8s.helm.v3.Chart('aws-load-balancer-controller', {
    //     chart: 'aws-load-balancer-controller',
    //     namespace: 'kube-system',
    //     fetchOpts: {
    //         repo: 'https://aws.github.io/eks-charts',

    //     }, 
    //     values: {
    //         clusterName: cluster.eksCluster.name,
    //         region: 'ap-southeast-2',
    //         vpcId: vpcId,
    //         // 'serviceAccount.create': 'false',
    //         // 'serviceAccount.name': 'aws-load-balancer-controller',
    //         // serviceAccount: {
    //         //     create: 'false',
    //         //     name: 'aws-load-balancer-controller', //elbSa.metadata.name
    //         // }
    //     }
    // }, {
    //     provider: cluster.provider
    // })
}