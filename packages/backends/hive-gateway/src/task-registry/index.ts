import ECS from "aws-sdk/clients/ecs"
import tar from "tar"
import EKS from "aws-sdk/clients/eks"

const eks = new EKS({region: "ap-southeast-2"})

const ecs = new ECS({region: "ap-southeast-2"})


// eks.()

export interface Task {
  id?: string;
    name: string;
    task: string;
    inputs?: {source: string, sourceHandle: string, targetHandle: string}[]
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
   

    

	updateTask(id: string, containers: ECS.ContainerDefinition[]){
		return new Promise<ECS.RegisterTaskDefinitionResponse>((resolve, reject) => {
			ecs.registerTaskDefinition({
				requiresCompatibilities: ["FARGATE"],
				family: id,
				containerDefinitions: containers,
				volumes: [{
					name: "TaskFiles",
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