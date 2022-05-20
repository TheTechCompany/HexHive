import { all, Config, Output } from "@pulumi/pulumi";
import { Provider } from '@pulumi/kubernetes'
import { RabbitMQDeployment } from "./deployment"
import { RabbitMQService } from "./service"

import * as k8s from '@pulumi/kubernetes'
import { RabbitMQPersistence } from "./persistence";

export default async (provider: Provider, vpcId: Output<any>) => {

    const config = new Config();

    const suffix = config.require('suffix');

    const appName = `hive-command-mq-${suffix}`


    const { storageClaim } = await RabbitMQPersistence(provider, vpcId)
    const deployment = await RabbitMQDeployment(provider, appName, storageClaim);

    const service = await RabbitMQService(provider, appName)

    return {
        deployment,
        service,
        url: all([service.metadata.name, 'default']).apply(([name, namespace]) => `${name}.${namespace}.svc.cluster.local`),
    }
}