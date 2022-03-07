import { config } from 'dotenv'
config();
import * as k8s from "@pulumi/kubernetes";
import { Provider } from "@pulumi/kubernetes";
import * as kx from "@pulumi/kubernetesx";
import * as pulumi from '@pulumi/pulumi'
import { Config } from "@pulumi/pulumi";
import * as aws from '@pulumi/aws'
import * as awsx from '@pulumi/awsx'

import { HiveFlow } from './src/hive-flow'
import { HiveCommand } from './src/hive-command'
import { GreenScreen } from './src/green-screen'

import { GatewayCluster } from './src/hexhive/gateway'
import { MicrofrontendCluster } from './src/hexhive/frontend'

const main = (async () => {
    const config = new Config();

    const org = config.require('org');

    const stackRef = new pulumi.StackReference(`${org}/base-infrastructure/prod`)

    const kubeconfig = stackRef.getOutput('kubeconfig');
    const vpcId = stackRef.getOutput('vpcId');
    
    const mongoUrl = stackRef.getOutput('mongoUrl');

    const provider = new Provider('eks', { kubeconfig });

    const hexhiveZone = await aws.route53.getZone({name: "hexhive.io"})

    const greencoZone = await aws.route53.getZone({name: 'greenco.co.nz'});

    const vpc = await vpcId.apply(async (id) => await aws.ec2.getVpc({ id: id }));

    const { url: gatewayUrl } = await GatewayCluster(provider, vpc.id, hexhiveZone, config.require('gateway-url'), config.require('frontend-url'), mongoUrl.apply(s => `${s}`));
    const { url: frontendUrl } = await MicrofrontendCluster(provider, hexhiveZone, config.require('frontend-url'), config.require('gateway-url'), mongoUrl.apply(s => `${s}`));


    const greenScreen = await gatewayUrl.apply(async (url) => await GreenScreen(provider, vpc.id, config.require('greenco-api'), greencoZone, url));
    const hiveCommand = await gatewayUrl.apply(async (url) => await HiveCommand(provider, url));
    const hiveFlow = await gatewayUrl.apply(async (url) => await HiveFlow(provider, url));

    return {
        gatewayUrl,
        frontendUrl,
        greenScreen,
        hiveCommand,
        hiveFlow
    }
})()

export const gatewayUrl = main.then(result => result.gatewayUrl)
export const frontendUrl = main.then(result => result.frontendUrl)
export const greenScreen = main.then(result => result.greenScreen.service.status.loadBalancer)
export const greenScreenFs = main.then(result => result.greenScreen.efsVolume.id)
export const hiveCommand = main.then(result => result.hiveCommand.service.status.loadBalancer)
export const hiveFlow = main.then(result => result.hiveFlow.service.status.loadBalancer)
