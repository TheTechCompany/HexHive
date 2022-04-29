import { config } from 'dotenv'
config();
import * as k8s from "@pulumi/kubernetes";
import { Provider } from "@pulumi/kubernetes";
import * as kx from "@pulumi/kubernetesx";
import * as pulumi from '@pulumi/pulumi'
import { Config } from "@pulumi/pulumi";
import * as aws from '@pulumi/aws'
import * as awsx from '@pulumi/awsx'

import { ApplicationDB } from './src/db'
import { AdminPane } from './src/admin'

import { HiveFlow } from './src/hive-flow'
import { HiveCommand } from './src/hive-command'
import { GreenScreen } from './src/green-screen'

import { GatewayCluster } from './src/hexhive/gateway'
import { MicrofrontendCluster } from './src/hexhive/frontend'

import { HiveFlowIntegration } from './src/integration-clients'

const main = (async () => {
    const config = new Config();

    const org = config.require('org');

    const stackRef = new pulumi.StackReference(`${org}/base-infrastructure/prod`)

    const kubeconfig = stackRef.getOutput('kubeconfig');
    const vpcId = stackRef.getOutput('vpcId');
    
    const mongoUrl = stackRef.getOutput('mongoUrl');

    const provider = new Provider('eks', { kubeconfig });

    const hexhiveZone = await aws.route53.getZone({name: "hexhive.io"})

    // const greencoZone = await aws.route53.getZone({name: 'greenco.co.nz'});

    const vpc = await vpcId.apply(async (id) => await aws.ec2.getVpc({ id: id }));

    const { service: dbService, deployment: dbDeployment } = await ApplicationDB(provider, vpcId);

    const { deployment: adminDeployment } = await AdminPane(provider, dbService.metadata.name)

    const { url: gatewayUrl } = await GatewayCluster(provider, vpc.id, hexhiveZone, config.require('gateway-url'), config.require('frontend-url'), mongoUrl.apply(s => `${s}`), dbService.metadata.name);
    const { url: frontendUrl } = await MicrofrontendCluster(provider, hexhiveZone, config.require('frontend-url'), config.require('gateway-url'), mongoUrl.apply(s => `${s}`), dbService.metadata.name);


    // const greenScreen = await gatewayUrl.apply(async (url) => await GreenScreen(provider, vpc.id, config.require('greenco-api'), greencoZone, url));
    const hiveCommand = await gatewayUrl.apply(async (url) => await HiveCommand(provider, url, dbService.metadata.name));
    const hiveFlow = await gatewayUrl.apply(async (url) => await HiveFlow(provider, url, dbService.metadata.name));

    // const hiveFlowIntegration = await HiveFlowIntegration(provider);

    return {
        gatewayUrl,
        frontendUrl,
        // greenScreen,
        dbService,
        dbDeployment,
        dbPass: config.require('postgres-password'),
        adminDeployment,
        hiveCommand,
        hiveFlow,
        kubeconfig
    }
})()

export const gatewayUrl = main.then(result => result.gatewayUrl)
export const frontendUrl = main.then(result => result.frontendUrl)
// export const greenScreen = main.then(result => result.greenScreen.service.status.loadBalancer)
// export const greenScreenFs = main.then(result => result.greenScreen.efsVolume.id)
export const hiveCommand = main.then(result => result.hiveCommand.service.status.loadBalancer)
export const hiveFlow = main.then(result => result.hiveFlow.service.status.loadBalancer)

export const kubeconfig = main.then(result => result.kubeconfig)

export const postgres_name = main.then((result) => result.dbDeployment.metadata.name)
export const posgres_pass = main.then((result) => result.dbPass)

export const adminDeployment = main.then((result) => result.adminDeployment.metadata.name);