import ECS from 'aws-sdk/clients/ecs'

const ecs = new ECS({region: 'ap-southeast-2'})

export class TaskRegistry {

    updateTask(id: string, containers: ECS.ContainerDefinition[]){
        return new Promise<ECS.RegisterTaskDefinitionResponse>((resolve, reject) => {
            ecs.registerTaskDefinition({
                requiresCompatibilities: ["FARGATE"],
                family: id,
                containerDefinitions: containers,
                volumes: [{
                    name: 'TaskFiles',
                    host: {
                    }
                }],
                networkMode: "awsvpc",
                cpu: "1vCPU",
                memory: "2048"
            }, (err, data) => {
                console.log(err, data)
                if(err) return reject(err)
                resolve(data)
            })
        })
    }
}