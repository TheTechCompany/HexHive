import { config } from 'dotenv'
config();

import * as awsx from "@pulumi/awsx";
import * as eks from '@pulumi/eks';
import * as aws from '@pulumi/aws'
import * as k8s from "@pulumi/kubernetes";

import { GatewayCluster } from './roles/gateway';
import { MicrofrontendCluster } from './roles/microfrontend';
import { Neo4jCluster, MongoCluster } from './roles/db';

import { all, Config, output } from "@pulumi/pulumi";
import IPFSCluster from './roles/ipfs';
import EKSCluster from './roles/eks-cluster'
import { GreenScreen, HiveCommand, HiveFlow } from './roles/apps';

const main = (async () => {

    const config = new Config();


    const deployment = "hexhive"


    const zone = await aws.route53.getZone({name: "hexhive.io"})
    const greencoZone = await aws.route53.getZone({name: 'greenco.co.nz'});
   
    const { cluster, vpc } = await EKSCluster(deployment)

    // const ipfsCluster = await IPFSCluster(cluster, vpc)

    const { url: mongoUrl } = MongoCluster(cluster);

    const { url: gatewayUrl } = await GatewayCluster(cluster, vpc, zone, config.require('gateway-url'), config.require('frontend-url'), mongoUrl);
    const { url: frontendUrl } = await MicrofrontendCluster(cluster, zone, config.require('frontend-url'), config.require('gateway-url'), mongoUrl);

    // const hiveFlow = await HiveFlow(cluster)
    // const hiveCommand = await HiveCommand(cluster)
    const greenScreen = await gatewayUrl.apply(async (url) => await GreenScreen(cluster, vpc, config.require('greenco-api'), greencoZone, url))


    // // const { url: neo4Url } = Neo4jCluster(cluster)
    // const { url: mongoUrl } = MongoCluster(cluster)

    // const { url } = GatewayCluster(cluster, zone, 'staging-api.hexhive.io', mongoUrl);
    // const { url : frontend } = await MicrofrontendCluster(cluster, zone, 'next.hexhive.io', mongoUrl);

    return {
        gatewayUrl,
        frontendUrl,
        mongoUrl,

        // hiveFlow,
        // hiveCommand,
        greenScreen,
        kubeconfig: cluster.kubeconfig
    }

})()

export const kubeconfig = main.then(result => result.kubeconfig)

export const gatewayUrl = main.then(result => result.gatewayUrl)
export const frontendUrl = main.then(result => result.frontendUrl)
export const mongoUrl = main.then(result => result.mongoUrl)

export const greenScreenUrl = main.then((result) => result.greenScreen?.service.status.loadBalancer.ingress)