import * as awsx from "@pulumi/awsx";
import * as eks from '@pulumi/eks';

const vpc = new awsx.ec2.Vpc("hexhive-app-backends-vpc", {
    
});

const cluster = new eks.Cluster('hexhive-app-backends', {
    fargate: true,
    vpcId: vpc.id,
    privateSubnetIds: vpc.privateSubnetIds
})

export const kubeconfig = cluster.kubeconfig