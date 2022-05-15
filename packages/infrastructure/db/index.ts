import { Provider } from "@pulumi/kubernetes";
import * as pulumi from '@pulumi/pulumi'
import { Config } from "@pulumi/pulumi";
import * as aws from '@pulumi/aws'

import { ApplicationDB } from './src'

const main = (async () => {
    const config = new Config();
    const org = config.require('org');

    const stackRef = new pulumi.StackReference(`${org}/base-infrastructure/prod`)

    const kubeconfig = stackRef.getOutput('kubeconfig');
    const vpcId = stackRef.getOutput('vpcId');

    const provider = new Provider('eks', { kubeconfig });

    if(!process.env.POSTGRES_PASSWORD) throw new Error("no POSTGRES_PASSWORD env set");

    const { service: dbService } = await ApplicationDB(provider, vpcId, process.env.POSTGRES_PASSWORD)
    return {
        dbService,
        dbPass: process.env.POSTGRES_PASSWORD
    }
})()

export const postgres_name = main.then((result) => result.dbService.metadata.name)

export const postgres_pass = main.then((result) => result.dbPass)
