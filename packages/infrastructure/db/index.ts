import { config } from 'dotenv'
config();
import { Provider } from "@pulumi/kubernetes";
import * as pulumi from '@pulumi/pulumi'
import { Config } from "@pulumi/pulumi";
import * as aws from '@pulumi/aws'
import RabbitMQ from './src/rabbitmq'
import { ApplicationDB } from './src/postgres'
import { TimescaleDB } from './src/timescaledb'

const main = (async () => {
    const config = new Config();
    const org = config.require('org');

    const stackRef = new pulumi.StackReference(`${org}/base-infrastructure/prod`)

    const kubeconfig = stackRef.getOutput('kubeconfig');
    const vpcId = stackRef.getOutput('vpcId');

    const provider = new Provider('eks', { kubeconfig });

    if(!process.env.POSTGRES_PASSWORD) throw new Error("no POSTGRES_PASSWORD env set");

    const { url: rabbitURL } = await RabbitMQ(provider, vpcId)

    const { service: timescale } = await TimescaleDB(provider, vpcId, process.env.POSTGRES_PASSWORD);
    const {service: dbService} = await ApplicationDB(provider, vpcId, process.env.POSTGRES_PASSWORD)

    return {
        rabbitURL,
        dbService,
        timescaleService: timescale,
        dbPass: process.env.POSTGRES_PASSWORD
    }
})()

export const rabbitURL = main.then((result) => result.rabbitURL);

export const timeseries_name = main.then((result) => result.timescaleService.metadata.name)

export const postgres_name = main.then((result) => result.dbService.metadata.name)

export const postgres_pass = main.then((result) => result.dbPass)
