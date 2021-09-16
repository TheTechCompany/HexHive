import ECS from 'aws-sdk/clients/ecs'
import tar from 'tar';
import EKS from 'aws-sdk/clients/eks';

const eks = new EKS({region: 'ap-southeast-2'})

const ecs = new ECS({region: 'ap-southeast-2'})


// eks.()

export interface Task {
  id?: string;
    name: string;
    task: string;
    inputs: [{source: string, sourceHandle: string, targetHandle: string}]
}

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
    //Creates curl requests for the specified files e.g. $(steps.$step_id.output.$id)
    //curl requests map to {source:, sourceHandle:, targetHandle}
    getPullJob(url: string, inputs: TaskInput[]){
        const file = inputs.filter((a) => a.type == "file").map((input) => {
            return `curl ${url}/$(params.JOB_ID)/$(params.STEP_ID) > /workspace/$(params.STEP_ID).tgz`
        })
        return `
          ${file.join(`\n`)}
          tar -xvf /workspace/$(params.STEP_ID).tgz
        `
    }

    getPostResults(url: string, outputs: TaskOutput[]){
        const files = outputs.map((output) => {
            switch(output.type){
                case 'file':
                   return `-F "${output.name}=@$(cat $(results.${output.name}.path))"`
                default:
                    return `-F "${output.name}=$(cat $(results.${output.name}.path))"`
            }
        })
        return `curl -XPOST ${files.join(' ')} ${url}`
    }

    formatPipelineDefinition(id: string, steps: Task[], inputs: TaskInput[]){

        const params = inputs.concat([{name: 'JOB_ID', type: 'string'}]).map((input) => {
            return `    - name: ${input.name}\n      type: string`
        }).join(`\n`)

        const tasks = steps.map((step) => {
            const STEP_ID = step.id;

const params = step.inputs.map((x) => `      
        - name: ${x.targetHandle}
          value: $(tasks.${x.source}.results.${x.sourceHandle})
`).join(`\n`)

            const runAfter = [...new Set(step.inputs.map((x) => x.source))].map((x) => `      - ${x}`).join(`\n`)
            return `
    - name: ${step.name}
      taskRef: 
        name: ${step.task}
      params: 
        - name: STEP_ID
          value: "${STEP_ID}"
        - name: JOB_ID
          value: $(params.JOB_ID)
  ${params}
    ${runAfter.length > 0 ? `
      runAfter:
  ${runAfter}
    ` : ''}
      `
        }).join(`\n`)

        return `
apiVersion: tekton.dev/v1beta1
kind: Pipeline
metadata:
  name: ${id}
spec:
${params.length > 0 ? `
  params:
${params}` : ''}
  tasks:
${tasks}
`
    }

    formatTaskDefinition(id: string, steps: string, inputs: TaskInput[], outputs: TaskOutput[]){

        const params = inputs.concat([
          {name: 'JOB_ID', type: 'string'},
          {name: 'STEP_ID', type: 'string'}
        ]).map((input) => {
            return `    - name: ${input.name}\n      type: string`
        }).join(`\n`)

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
      image: curlimages/curl:latest
      script: |
        #!/usr/bin/env sh

        ${this.getPullJob('https://staging-api.hexhive.io/api/pipelines', inputs)}
${steps}
    - name: push-results
      image: curlimages/curl:latest
      script: |
        #!/usr/bin/env sh

        ${this.getPostResults('https://staging-api.hexhive.io/api/pipelines', outputs)}
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

    async bundleRequirements(paths: string[], output: string, cwd?: string){
      return await tar.c({
        gzip: true,
        preservePaths: true,
        file: output,
        cwd: cwd
      }, paths)
    }
}