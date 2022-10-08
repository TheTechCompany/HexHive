import * as aws from '@pulumi/aws'
import iamPolicy from './iam_policy.json'

export default () => {

    const k8sMasterRole = new aws.iam.Role(`k8s-master-role`, {
        name: 'k8s-master-role',
        // path: '/',
        assumeRolePolicy: `{
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Effect":"Allow",
                        "Principal":{"Service":"ec2.amazonaws.com"},
                        "Action":"sts:AssumeRole"
                    }
                ]
            }`,
        inlinePolicies: [
            {
                name: "lb",
                policy: JSON.stringify(iamPolicy)
            },
            {
                name: "master",
                policy: JSON.stringify({ 
                    "Version": "2012-10-17", 
                    "Statement": [{
                         "Sid": "K8sMasterDescribeResources", 
                         "Effect": "Allow", 
                         "Action": [
                            "ec2:DescribeInstances", 
                            "ec2:DescribeRegions", 
                            "ec2:DescribeRouteTables", 
                            "ec2:DescribeSecurityGroups", 
                            "ec2:DescribeSubnets", 
                            "ec2:DescribeVolumes"
                        ], "Resource": "*" }, 
                        { 
                            "Sid": "K8sMasterAllResourcesWriteable", 
                            "Effect": "Allow", 
                            "Action": [
                                "ec2:CreateRoute", 
                                "ec2:CreateSecurityGroup", 
                                "ec2:CreateTags", 
                                "ec2:CreateVolume", 
                                "ec2:ModifyInstanceAttribute"
                            ], "Resource": "*" }, 
                            { 
                                "Sid": "K8sMasterTaggedResourcesWritable", 
                                "Effect": "Allow", 
                                "Action": [
                                    "ec2:AttachVolume", 
                                    "ec2:AuthorizeSecurityGroupIngress", 
                                    "ec2:DeleteRoute", 
                                    "ec2:DeleteSecurityGroup", 
                                    "ec2:DeleteVolume", 
                                    "ec2:DetachVolume", 
                                    "ec2:RevokeSecurityGroupIngress"
                                ], "Resource": "*" }] })
            },
            {
                name: "ecr",
                policy: JSON.stringify({
                    "Version": "2012-10-17",
                    "Statement": [
                        {
                            "Sid": "K8sECR",
                            "Effect": "Allow",
                            "Action": [
                                "ecr:GetAuthorizationToken",
                                "ecr:BatchCheckLayerAvailability",
                                "ecr:GetDownloadUrlForLayer",
                                "ecr:GetRepositoryPolicy",
                                "ecr:DescribeRepositories",
                                "ecr:ListImages",
                                "ecr:DescribeImages",
                                "ecr:BatchGetImage",
                                "ecr:GetLifecyclePolicy",
                                "ecr:GetLifecyclePolicyPreview",
                                "ecr:ListTagsForResource",
                                "ecr:DescribeImageScanFindings"
                            ],
                            "Resource": "*"
                        }
                    ]
                })
            },
            {
                name: 'cni',
                policy: JSON.stringify({ "Version": "2012-10-17", "Statement": [{ "Sid": "K8sNodeAwsVpcCNI", "Effect": "Allow", "Action": ["ec2:CreateNetworkInterface", "ec2:AttachNetworkInterface", "ec2:DeleteNetworkInterface", "ec2:DetachNetworkInterface", "ec2:DescribeNetworkInterfaces", "ec2:DescribeInstances", "ec2:ModifyNetworkInterfaceAttribute", "ec2:AssignPrivateIpAddresses", "tag:TagResources"], "Resource": "*" }] })
            },
            {
                name: 'autoscaler',
                policy: JSON.stringify({ "Version": "2012-10-17", "Statement": [{ "Sid": "K8sClusterAutoscalerDescribe", "Effect": "Allow", "Action": ["autoscaling:DescribeAutoScalingGroups", "autoscaling:DescribeAutoScalingInstances", "autoscaling:DescribeTags", "autoscaling:DescribeLaunchConfigurations"], "Resource": "*" }, { "Sid": "K8sClusterAutoscalerTaggedResourcesWritable", "Effect": "Allow", "Action": ["autoscaling:SetDesiredCapacity", "autoscaling:TerminateInstanceInAutoScalingGroup", "autoscaling:UpdateAutoScalingGroup"], "Resource": "*" }] })
            },
            {
                name: 'loadbalancing',
                policy: JSON.stringify({ 
                    "Version": "2012-10-17", 
                    "Statement": [{ 
                        "Sid": "K8sELB", 
                        "Effect": "Allow", 
                        "Action": [
                            "elasticloadbalancing:AddTags", 
                            "elasticloadbalancing:AttachLoadBalancerToSubnets", 
                            "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer", 
                            "elasticloadbalancing:CreateLoadBalancer", 
                            "elasticloadbalancing:CreateLoadBalancerPolicy", 
                            "elasticloadbalancing:CreateLoadBalancerListeners", 
                            "elasticloadbalancing:ConfigureHealthCheck", 
                            "elasticloadbalancing:DeleteLoadBalancer", 
                            "elasticloadbalancing:DeleteLoadBalancerListeners", 
                            "elasticloadbalancing:DescribeLoadBalancers", 
                            "elasticloadbalancing:DescribeLoadBalancerAttributes", 
                            "elasticloadbalancing:DetachLoadBalancerFromSubnets", 
                            "elasticloadbalancing:DeregisterInstancesFromLoadBalancer", 
                            "elasticloadbalancing:ModifyLoadBalancerAttributes", 
                            "elasticloadbalancing:RegisterInstancesWithLoadBalancer", 
                            "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer"
                        ], 
                        "Resource": "*" 
                    }, { 
                        "Sid": "K8sNLB", 
                        "Effect": "Allow", 
                        "Action": [
                            "ec2:DescribeVpcs", 
                            "elasticloadbalancing:AddTags", 
                            "elasticloadbalancing:CreateListener", 
                            "elasticloadbalancing:CreateTargetGroup", 
                            "elasticloadbalancing:DeleteListener", 
                            "elasticloadbalancing:DeleteTargetGroup", 
                            "elasticloadbalancing:DescribeListeners", 
                            "elasticloadbalancing:DescribeLoadBalancerPolicies",
                            "elasticloadbalancing:DescribeTargetGroups", 
                            "elasticloadbalancing:DescribeTargetHealth", 
                            "elasticloadbalancing:ModifyListener", 
                            "elasticloadbalancing:ModifyTargetGroup",
                            "elasticloadbalancing:RegisterTargets", 
                            "elasticloadbalancing:SetLoadBalancerPoliciesOfListener"
                        ], "Resource": "*" }] })
            }
        ]
    });


    const k8sMasterProfile = new aws.iam.InstanceProfile('k8s-master-profile', {
        name: 'k8s-master-profile',
        role: k8sMasterRole
    })

    const k8sNodeRole = new aws.iam.Role('k8s-node-role', {
        name: 'k8s-node-role',
        assumeRolePolicy: `{
                "Version":"2012-10-17",
                "Statement":[{"Effect":"Allow","Principal":{"Service":"ec2.amazonaws.com"},"Action":"sts:AssumeRole"}]
            }`,
        inlinePolicies: [
            {
                name: 'node',
                policy: JSON.stringify({ "Version": "2012-10-17", "Statement": [{ "Sid": "K8sNodeDescribeResources", "Effect": "Allow", "Action": ["ec2:DescribeInstances", "ec2:DescribeRegions"], "Resource": "*" }] })
            },
            {
                name: 'ecr',
                policy: JSON.stringify({
                    "Version": "2012-10-17",
                    "Statement": [
                        {
                            "Sid": "K8sECR",
                            "Effect": "Allow",
                            "Action": [
                                "ecr:GetAuthorizationToken",
                                "ecr:BatchCheckLayerAvailability",
                                "ecr:GetDownloadUrlForLayer",
                                "ecr:GetRepositoryPolicy",
                                "ecr:DescribeRepositories",
                                "ecr:ListImages",
                                "ecr:DescribeImages",
                                "ecr:BatchGetImage",
                                "ecr:GetLifecyclePolicy",
                                "ecr:GetLifecyclePolicyPreview",
                                "ecr:ListTagsForResource",
                                "ecr:DescribeImageScanFindings"
                            ],
                            "Resource": "*"
                        }
                    ]
                })
            },
            {
                name: 'cni',
                policy: JSON.stringify({ "Version": "2012-10-17", "Statement": [{ "Sid": "K8sNodeAwsVpcCNI", "Effect": "Allow", "Action": ["ec2:CreateNetworkInterface", "ec2:AttachNetworkInterface", "ec2:DeleteNetworkInterface", "ec2:DetachNetworkInterface", "ec2:DescribeNetworkInterfaces", "ec2:DescribeInstances", "ec2:ModifyNetworkInterfaceAttribute", "ec2:AssignPrivateIpAddresses", "tag:TagResources"], "Resource": "*" }] })
            }
        ]
    })

    const k8sNodeProfile = new aws.iam.InstanceProfile('k8s-node-profile', {
        name: 'k8s-node-profile',
        role: k8sNodeRole
    })

    return {
        k8sMasterProfile,
        k8sMasterRole,
        k8sNodeProfile,
        k8sNodeRole
    }
}