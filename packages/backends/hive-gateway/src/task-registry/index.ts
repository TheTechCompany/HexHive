import ECS from 'aws-sdk/clients/ecs'

const ecs = new ECS({region: 'ap-southeast-2'})

export interface TaskInput {
    name: string;
    type: string;
}

export interface TaskOutput {
    name: string;
    type: string;
}

export class TaskRegistry {

    //URL should be the base artifact url for job
    getPullJob(url: string, inputs: TaskInput[]){
        const file = inputs.filter((a) => a.type == "file").map((input) => {
            return `curl ${url}/$(params.${input.name}) > /workspace/${input.name}`
        })
        return file.join(`\n`)
    }

    getPostResults(url: string, outputs: TaskOutput[]){
        const files = outputs.map((output) => {
            switch(output.type){
                case 'file':
                   return `-F "${output.name}=@$(cat results.${output.name}.path)"`
                default:
                    return `-F "${output.name}=$(cat results.${output.name}.path)"`
            }
        })
        return `curl -XPOST ${files.join(' ')} ${url}`
    }

    formatTaskDefinition(id: string, steps: string, inputs: TaskInput[], outputs: TaskOutput[]){

        const params = inputs.concat([{name: 'JOB_ID', type: 'string'}]).map((input) => {
            return `    - name: ${input.name}\n      type: string`
        })

        const results = outputs.map((output) => {
            return `    - name: ${output.name}`
        }).join(`\n`)

        return `
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: ${id}
spec:
${params.length > 0 ? `
  params:
${params}` : ''}
${results.length > 0 ? `
  results:
${results}
` : ''}
  steps:
    - name: pull-job
      image: alpine:edge
      script: |
        #!/usr/bin/env sh

        ${this.getPullJob('https://staging-api.hexhive.io/api/tasks', inputs)}
${steps}
    - name: push-results
      image: alpine:edge
      script: |
        #!/usr/bin/env sh

        ${this.getPostResults('https://staging-api.hexhive.io/api/tasks', outputs)}
`
    }

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