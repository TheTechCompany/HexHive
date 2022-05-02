import { config } from 'dotenv'
config();
import { Provider } from "@pulumi/kubernetes";
import * as pulumi from '@pulumi/pulumi'
import { Config } from "@pulumi/pulumi";
import * as aws from '@pulumi/aws'

import { ApplicationDB } from './src/db'
import { AdminPane } from './src/admin'


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

    // const greencoZone = await aws.route53.getZone({name: 'greenco.co.nz'});

    const vpc = await vpcId.apply(async (id) => await aws.ec2.getVpc({ id: id }));

    const { service: dbService, deployment: dbDeployment } = await ApplicationDB(provider, vpcId);

    const { deployment: adminDeployment } = await AdminPane(provider, dbService.metadata.name)

    const { url: gatewayUrl } = await GatewayCluster(provider, vpc.id, hexhiveZone, config.require('gateway-url'), config.require('frontend-url'), mongoUrl.apply(s => `${s}`), dbService.metadata.name);
    const { url: frontendUrl } = await MicrofrontendCluster(provider, hexhiveZone, config.require('frontend-url'), config.require('gateway-url'), mongoUrl.apply(s => `${s}`), dbService.metadata.name);

    return {
        gatewayUrl,
        frontendUrl,

        dbService,
        dbDeployment,
        dbPass: config.require('postgres-password'),
        adminDeployment,
        kubeconfig
    }
})()

export const gatewayUrl = main.then(result => result.gatewayUrl)
export const frontendUrl = main.then(result => result.frontendUrl)
// export const greenScreen = main.then(result => result.greenScreen.service.status.loadBalancer)
// export const greenScreenFs = main.then(result => result.greenScreen.efsVolume.id)
// export const hiveFlow = main.then(result => result.hiveFlow.service.status.loadBalancer)

export const kubeconfig = main.then(result => result.kubeconfig)

export const postgres_name = main.then((result) => result.dbService.metadata.name)
export const posgres_pass = main.then((result) => result.dbPass)

export const adminDeployment = main.then((result) => result.adminDeployment.metadata.name);