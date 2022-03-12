import { config } from 'dotenv'
config();

import * as awsx from "@pulumi/awsx";
import * as eks from '@pulumi/eks';
import * as aws from '@pulumi/aws'
import * as k8s from "@pulumi/kubernetes";

import { Neo4jCluster, MongoCluster } from './src/db';

import { all, Config, output } from "@pulumi/pulumi";
import EKSCluster from './src/eks-cluster'

const main = (async () => {

    const config = new Config();


    const deployment = "hexhive"


   
    const { cluster, vpc } = await EKSCluster(deployment)

    // const ipfsCluster = await IPFSCluster(cluster, vpc)

    const { url: mongoUrl } = MongoCluster(cluster);


    // // const { url: neo4Url } = Neo4jCluster(cluster)
    // const { url: mongoUrl } = MongoCluster(cluster)

    // const { url } = GatewayCluster(cluster, zone, 'staging-api.hexhive.io', mongoUrl);
    // const { url : frontend } = await MicrofrontendCluster(cluster, zone, 'next.hexhive.io', mongoUrl);

    return {
        mongoUrl,
        vpc,
        kubeconfig: cluster.kubeconfig
    }

})()

export const kubeconfig = main.then(result => result.kubeconfig)
export const vpcId = main.then(result => result.vpc.id);

export const mongoUrl = main.then(result => result.mongoUrl)
