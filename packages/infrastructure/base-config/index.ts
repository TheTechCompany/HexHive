import * as awsx from "@pulumi/awsx";
import * as eks from '@pulumi/eks';
import * as aws from '@pulumi/aws'
import * as k8s from "@pulumi/kubernetes";

import { GatewayCluster } from './roles/gateway';
import { MicrofrontendCluster } from './roles/microfrontend';
import { Neo4jCluster, MongoCluster } from './roles/db';

import { output } from "@pulumi/pulumi";

(async () => {

    const deployment = "hexhive"

    const zone = await aws.route53.getZone({name: "hexhive.io"})

    const vpc = new awsx.ec2.Vpc(`${deployment}-vpc`, {
        
    });

    
    const clusterName = `${deployment}-cluster`;

    const cluster = new eks.Cluster(clusterName, {
        fargate: true,
        vpcId: vpc.id,
        privateSubnetIds: vpc.privateSubnetIds
    })

    // const ingressController = new k8s.helm.v2.Chart(
    //     'alb',
    //     {
    //         chart:
    //         "aws-alb-ingress-controller",
    //       values: {
    //         clusterName: clusterName,
    //         autoDiscoverAwsRegion: "true",
    //         autoDiscoverAwsVpcID: "true"
    //       }
    //     },
    //     {provider: cluster.provider}
    // )

    // const ingressControllerPolicy = new aws.iam.Policy(
    //     'ingressController-iam-policy',
    //     {
    //         policy: {
    //             Version: "2012-10-17",
    //             Statement: [
    //               {
    //                 Effect: "Allow",
    //                 Action: [
    //                   "acm:DescribeCertificate",
    //                   "acm:ListCertificates",
    //                   "acm:GetCertificate"
    //                 ],
    //                 Resource: "*"
    //               },
    //               {
    //                 Effect: "Allow",
    //                 Action: [
    //                   "ec2:AuthorizeSecurityGroupIngress",
    //                   "ec2:CreateSecurityGroup",
    //                   "ec2:CreateTags",
    //                   "ec2:DeleteTags",
    //                   "ec2:DeleteSecurityGroup",
    //                   "ec2:DescribeInstances",
    //                   "ec2:DescribeInstanceStatus",
    //                   "ec2:DescribeSecurityGroups",
    //                   "ec2:DescribeSubnets",
    //                   "ec2:DescribeTags",
    //                   "ec2:DescribeVpcs",
    //                   "ec2:ModifyInstanceAttribute",
    //                   "ec2:ModifyNetworkInterfaceAttribute",
    //                   "ec2:RevokeSecurityGroupIngress"
    //                 ],
    //                 Resource: "*"
    //               },
    //               {
    //                 Effect: "Allow",
    //                 Action: [
    //                   "elasticloadbalancing:AddTags",
    //                   "elasticloadbalancing:CreateListener",
    //                   "elasticloadbalancing:CreateLoadBalancer",
    //                   "elasticloadbalancing:CreateRule",
    //                   "elasticloadbalancing:CreateTargetGroup",
    //                   "elasticloadbalancing:DeleteListener",
    //                   "elasticloadbalancing:DeleteLoadBalancer",
    //                   "elasticloadbalancing:DeleteRule",
    //                   "elasticloadbalancing:DeleteTargetGroup",
    //                   "elasticloadbalancing:DeregisterTargets",
    //                   "elasticloadbalancing:DescribeListeners",
    //                   "elasticloadbalancing:DescribeLoadBalancers",
    //                   "elasticloadbalancing:DescribeLoadBalancerAttributes",
    //                   "elasticloadbalancing:DescribeRules",
    //                   "elasticloadbalancing:DescribeSSLPolicies",
    //                   "elasticloadbalancing:DescribeTags",
    //                   "elasticloadbalancing:DescribeTargetGroups",
    //                   "elasticloadbalancing:DescribeTargetGroupAttributes",
    //                   "elasticloadbalancing:DescribeTargetHealth",
    //                   "elasticloadbalancing:ModifyListener",
    //                   "elasticloadbalancing:ModifyLoadBalancerAttributes",
    //                   "elasticloadbalancing:ModifyRule",
    //                   "elasticloadbalancing:ModifyTargetGroup",
    //                   "elasticloadbalancing:ModifyTargetGroupAttributes",
    //                   "elasticloadbalancing:RegisterTargets",
    //                   "elasticloadbalancing:RemoveTags",
    //                   "elasticloadbalancing:SetIpAddressType",
    //                   "elasticloadbalancing:SetSecurityGroups",
    //                   "elasticloadbalancing:SetSubnets",
    //                   "elasticloadbalancing:SetWebACL"
    //                 ],
    //                 Resource: "*"
    //               },
    //               {
    //                 Effect: "Allow",
    //                 Action: ["iam:GetServerCertificate", "iam:ListServerCertificates"],
    //                 Resource: "*"
    //               },
    //               {
    //                 Effect: "Allow",
    //                 Action: [
    //                   "waf-regional:GetWebACLForResource",
    //                   "waf-regional:GetWebACL",
    //                   "waf-regional:AssociateWebACL",
    //                   "waf-regional:DisassociateWebACL"
    //                 ],
    //                 Resource: "*"
    //               },
    //               {
    //                 Effect: "Allow",
    //                 Action: ["tag:GetResources", "tag:TagResources"],
    //                 Resource: "*"
    //               },
    //               {
    //                 Effect: "Allow",
    //                 Action: ["waf:GetWebACL"],
    //                 Resource: "*"
    //               }
    //             ]
    //           }
    //     }
    // )

    const { url: neo4Url } = Neo4jCluster(cluster)
    const { url: mongoUrl } = MongoCluster(cluster)

    const { url, urls } = GatewayCluster(cluster);
    const { url : frontend, dnsRecords } = await MicrofrontendCluster(cluster, zone, 'dev.hexhive.io', neo4Url, mongoUrl);

    return {
        gatewayUrl: url,
        frontendUrl: frontend,
        dnsRecords,
        mongoUrl,
        neo4Url,
        kubeconfig: cluster.kubeconfig
    }

})().then((result) => {
    output(result)
})