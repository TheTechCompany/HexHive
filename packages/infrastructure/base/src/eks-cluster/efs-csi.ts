import * as eks from '@pulumi/eks'
import * as aws from '@pulumi/aws'
import * as k8s from '@pulumi/kubernetes'

import efsIamPolicy from './iam_policy_efs.json'
import { GetCallerIdentityResult } from '@pulumi/aws';
import { all } from '@pulumi/pulumi';

export default (cluster: eks.Cluster, account: GetCallerIdentityResult) => {

    const oidcUrl = cluster.core.oidcProvider?.url

    //Add EFS policy
    const efsPolicy = new aws.iam.Policy(`AmazonEKS_EFS_CSI_Driver_Policy`, {
        policy: JSON.stringify(efsIamPolicy)
    })

    const efsSaName = 'efs-csi-controller'

    const efsAssume = all([oidcUrl, account.accountId ]).apply(([ url, accountId ]) => 

        aws.iam.getPolicyDocument({
            statements: [
                {
                    actions: ['sts:AssumeRoleWithWebIdentity'],
                    conditions: [
                        {
                            test: 'StringEquals',
                            values: [`system:serviceaccount:kube-system:${efsSaName}`],
                            variable: `${url.replace('https://', '')}:sub`
                        }
                    ],
                    effect: 'Allow',
                    principals: [{identifiers: [`arn:aws:iam::${accountId}:oidc-provider/${url.replace('https://', '')}`], type: 'Federated'}]
                }
            ]
        })
    )

    const efsRole = new aws.iam.Role(
        'AmazonEKS_EFS-CSI_Driver_Role',
        {
            assumeRolePolicy: efsAssume.json,
        }
    )

    const efsInstanceRole = new aws.iam.RolePolicyAttachment(
        'AmazonEKS_EFS_CSI_Driver_Policy_Attachment',
        {
            policyArn: efsPolicy.arn,
            role: efsRole.name
        }
    )

    const efsSa = new k8s.core.v1.ServiceAccount(efsSaName, {
        metadata: {
            name: efsSaName,
            namespace: 'kube-system',
            annotations: {
                'eks.amazonaws.com/role-arn': efsRole.arn
            }
        },
    }, {
        provider: cluster.provider
    })

    //Add AWS EFS Driver
    const efs = new k8s.helm.v3.Chart('aws-efs-csi-driver', {
        chart: 'aws-efs-csi-driver',
        namespace: 'kube-system',
        fetchOpts: {
            repo: 'https://kubernetes-sigs.github.io/aws-efs-csi-driver',
        },
        values: {
            'controller.serviceAccount.create': false,
            'controller.serviceAccount.name': efsSa.metadata.name,
        }
    }, {provider: cluster.provider})

}