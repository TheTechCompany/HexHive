import { config } from 'dotenv'
config();
import { Provider } from "@pulumi/kubernetes";
import * as pulumi from '@pulumi/pulumi'
import { Config } from "@pulumi/pulumi";
import * as aws from '@pulumi/aws'
import { ApplicationDB } from './src/postgres'
import { TimescaleDB } from './src/timescaledb'
import { PgBouncer } from './src/pgbouncer'
import { RedisDB } from './src/redis'

import * as k8s from '@pulumi/kubernetes'

const main = (async () => {
    const config = new Config();
    const org = config.require('org');

    const stackRef = new pulumi.StackReference(`${org}/base-infrastructure/prod`)

    const kubeconfig = stackRef.getOutput('k3sconfig');
    const vpcId = stackRef.getOutput('vpcId');

    if(!kubeconfig) throw new Error("no kubeconfig");
    const provider = new Provider('eks', { kubeconfig });

    if(!process.env.POSTGRES_PASSWORD) throw new Error("no POSTGRES_PASSWORD env set");

    let suffix = config.require('suffix');
    
    const ns = new k8s.core.v1.Namespace(`db-${suffix}`, {
        metadata: {
            name: `db-${suffix}`
        }
    }, {provider})

    const { url: redisUrl } = await RedisDB(provider, vpcId, ns);

    const { service: timescale, url: timescaleUrl } = await TimescaleDB(provider, vpcId, ns, process.env.POSTGRES_PASSWORD);

    const {service: dbService} = await ApplicationDB(provider, vpcId, ns, process.env.POSTGRES_PASSWORD)

    
    // const timescaleUrl = timescale.metadata.name.apply((name) => `${name}.default.svc.cluster.local`)
    // const { service: bouncerService } = await PgBouncer(provider, timescaleUrl, process.env.POSTGRES_PASSWORD);


    return {
        redisUrl,
        dbService,
        timescaleService: timescale,
        timescaleUrl,
        dbPass: process.env.POSTGRES_PASSWORD
    }
})()

export const redisUrl = main.then((result) => result.redisUrl);

export const timescale_url = main.then((result) => result.timescaleUrl);

export const timeseries_name = main.then((result) => result.timescaleService.metadata.name)

export const postgres_name = main.then((result) => result.dbService.metadata.name)

export const postgres_pass = main.then((result) => result.dbPass)
