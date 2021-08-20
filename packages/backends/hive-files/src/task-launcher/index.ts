import ECS from 'aws-sdk/clients/ecs';
import SQS from 'aws-sdk/clients/sqs';

import { nanoid } from 'nanoid';

const ecs = new ECS({region: 'ap-southeast-2'});

ecs.listTaskDefinitions((err, data) => {
    console.log(err, data)
})


const sqs = new SQS({region: 'ap-southeast-2'});

export const addTaskToQueue = (opts: {task: string}) => {
    return new Promise((resolve, reject) => {
        const id = nanoid();
        sqs.sendMessage({
            QueueUrl: 'https://sqs.ap-southeast-2.amazonaws.com/471796009502/ConvertFiles.fifo',
            MessageBody: JSON.stringify({
                task: opts.task,
                container: "GLTF-Fixes" || opts.task,
                file: 'QmXQYW8pacQtcNJR5brxDZSQWR3antGfPWejhDvBumw8XG',
                jobId: id
            }),
            MessageGroupId: 'run-tasks',
            MessageDeduplicationId: nanoid()
        }, (err, data) => {
            if(err) return reject(err)
            resolve(data)
        })
    })
}

export const runTask = (image: string) => {
    return new Promise((resolve, reject) => {
        ecs.runTask({
            cluster: 'default', 
            launchType: "FARGATE",
            taskDefinition: image, 
            networkConfiguration: {
                awsvpcConfiguration: {  subnets: ["subnet-2953be61"]}
            }
        }, (err, data) => {
            if(err) return reject(err);
            resolve({data})
        })
    })
}

export const createTaskDefinition = (name: string, docker_image: string) : Promise<{data: any, id: any}> => {
    return new Promise((resolve, reject) => {
        const id = nanoid();

        ecs.registerTaskDefinition({
            requiresCompatibilities: ["FARGATE"],
            family: id,
            volumes: [  {
                "efsVolumeConfiguration": {
                    "rootDirectory": "/",
                    "transitEncryption": "DISABLED",
                    "authorizationConfig": {
                        "iam": "DISABLED",
                    },
                    "fileSystemId": "fs-a1d5db99"
                },
                "name": "pipeline_files"
            }
            ],
            containerDefinitions: [{
                name: name,
                image: docker_image,
                mountPoints: [
                    {
                        sourceVolume: "pipeline_files",
                        containerPath: "/var/scratch"
                    }
                ],
            }],
            networkMode: "awsvpc",
            cpu: "1vCPU",
            memory: "2048"
        }, (err, data) => {
            if(err) return reject(err);
            resolve({data, id})
        })
    })
}