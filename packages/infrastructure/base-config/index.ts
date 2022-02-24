import { config } from 'dotenv'
config();

import * as awsx from "@pulumi/awsx";
import * as eks from '@pulumi/eks';
import * as aws from '@pulumi/aws'
import * as k8s from "@pulumi/kubernetes";

import { GatewayCluster } from './roles/gateway';
import { MicrofrontendCluster } from './roles/microfrontend';
import { Neo4jCluster, MongoCluster } from './roles/db';

import { all, output } from "@pulumi/pulumi";
import IPFSCluster from './roles/ipfs';
import EKSCluster from './roles/eks-cluster'
import { GreenScreen, HiveCommand, HiveFlow } from './roles/apps';

const main = (async () => {

    const deployment = "hexhive-dev"


    const zone = await aws.route53.getZone({name: "hexhive.io"})

   
    const { cluster, vpc } = await EKSCluster(deployment)

    // const ipfsCluster = await IPFSCluster(cluster, vpc)
    
    const hiveFlow = await HiveFlow(cluster)
    const hiveCommand = await HiveCommand(cluster)
    const greenScreen = await GreenScreen(cluster, vpc)


    // // const { url: neo4Url } = Neo4jCluster(cluster)
    // const { url: mongoUrl } = MongoCluster(cluster)

    // const { url } = GatewayCluster(cluster, zone, 'staging-api.hexhive.io', mongoUrl);
    // const { url : frontend } = await MicrofrontendCluster(cluster, zone, 'next.hexhive.io', mongoUrl);

    return {
        // gatewayUrl: url,
        // frontendUrl: frontend,
        // mongoUrl,
        // neo4Url,
        // ipfsCluster,
        hiveFlow,
        hiveCommand,
        greenScreen,
        kubeconfig: cluster.kubeconfig
    }

})()

export const kubeconfig = main.then(result => result.kubeconfig)
// export const ipfsCluster = main.then(result => result.ipfsCluster)

export const greenScreenUrl = main.then((result) => result.greenScreen?.service.status.loadBalancer.ingress)