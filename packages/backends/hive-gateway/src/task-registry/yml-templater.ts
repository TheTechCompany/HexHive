import { dump, load } from "js-yaml"
import { Task, TaskInput, TaskOutput } from "."

console.log(load(`
script: |2-
    #!/usr/bin/env sh
    astasddas
`))

const getPullJob = (url: string, inputs: TaskInput[]) => {
	const file = inputs.filter((a) => a.type.toLowerCase() == "file").map((input) => {
		return `curl "${url}/$(params.JOB_ID)/$(params.STEP_ID)" > "/workspace/$(params.STEP_ID).tgz";`
	})
	return file.length > 0 ? `${file.join("\n")}
cd /workspace/;
tar -xvf "/workspace/$(params.STEP_ID).tgz"` : ""
}

const getPostResults = (url: string, outputs: TaskOutput[]) => {
	const files = outputs.map((output) => {
		switch (output.type.toLowerCase()) {
		case "file":
			return `-F "files=@$(cat $(results.${output.name}.path))"`
		default:
			return `-F "${output.name}=$(cat $(results.${output.name}.path))"`
		}
	})
	return files.length > 0 ? `curl -XPOST ${files.join(" ")} ${url}/$(params.JOB_ID)/$(params.STEP_ID)` : ""
}

export const createTask = (id: string, steps: string, inputs: TaskInput[], outputs: TaskOutput[]) => {

	const params = inputs.concat([
		{ name: "JOB_ID", type: "string" },
		{ name: "STEP_ID", type: "string" }
	]).map((input) => {
		return { name: input.name, type: "string", default: "empty" }
	})

	const results = outputs.map((output) => {
		return { name: output.name }
	})

	const step_yaml = load(steps)
	console.log(step_yaml)

	const task = {
		apiVersion: "tekton.dev/v1beta1",
		kind: "Task",
		metadata: {
			name: id,
		},
		spec: {
			params: params,
			results: results,
			steps: [
				{
					name: "pull-job",
					image: "curlimages/curl:latest",
					script: `#!/usr/bin/env sh
${getPullJob("https://staging-api.hexhive.io/api/pipelines", inputs)}`
				},
				...step_yaml as any[],
				{
					name: "push-results",
					image: "curlimages/curl:latest",
					script: `#!/usr/bin/env sh
${getPostResults("https://staging-api.hexhive.io/api/pipelines", outputs)}`
				}
			]
		}
	}

	return dump(task)
}


export const createWorkflow = (id: string, steps: Task[], inputs: TaskInput[]) => {
	const params = inputs.concat([{name: "JOB_ID", type: "string"}]).map((input) => {
		return {name: input.name, type: "string"}
	})

	const tasks = steps.map((step) => {
		const STEP_ID = step.id

		const params = step.inputs?.map((x) => ({name: x.targetHandle, value: `$(tasks.${x.source}.results.${x.sourceHandle})`})) || []
		const runAfter = [...new Set(step.inputs?.map((x) => x.source))]

		return {
			name: step.name,
			taskRef: {
				name: step.task
			},
			params: [
				{name: "STEP_ID", value: STEP_ID},
				{name: "JOB_ID", value: "$(params.JOB_ID)"}
			].concat(params),
			runAfter: runAfter,
		}
	})

	const pipeline = {
		apiVersion: "tekton.dev/v1beta1",
		kind: "Pipeline",
		metadata: {
			name: id,
		},
		spec: {
			params: params,
			tasks: tasks
		}
	}

	return dump(pipeline)
}
