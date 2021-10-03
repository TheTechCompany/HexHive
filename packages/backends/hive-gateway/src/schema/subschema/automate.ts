/*

HiveFileProcess: Workflow run with file as arg
HiveProcessResult: Result of HiveFileProcess

HivePipeline: Layout + config for workflow
HivePipelineNode: layout for nodes -> rel to HiveProcess
HivePipelineFlowPath: Edge props for node relationships

HiveProcess: Task definition
HiveProcessPort: Ports for task

*/

export default `

type HivePipeline {
    id: ID! @id
    name: String
    inputs: [HivePipelineResource] @relationship(type: "CAN_USE", direction: OUT)
    nodes: [HivePipelineNode] @relationship(type: "HAS_NODE", direction: OUT)
}

type HivePipelineResource {
    key: String
    type: String
    urn: String
}

input HivePipelineResourceInput {
    key: String
    type: String
    urn: String
}
type HivePipelineTrigger {
    id: ID! @id
    name: String
    createdAt: DateTime @timestamp(operations: [CREATE])
    
    event: String
    produces: [HiveProcessPort] @relationship(type: "HAS_PORT", direction: OUT)
}

type HivePipelineRun {
    id: ID! @id
    createdAt: DateTime @timestamp(operations: [CREATE])

    startedAt: DateTime
    completedAt: DateTime

    pipeline: HivePipeline @relationship(type: "ACTIVE_PIPELINE", direction: OUT)
    inputs: [HivePipelineResource] @relationship(type: "USES", direction: OUT)
}

type HivePipelineStepResult {
    id: ID! @id
    run: HivePipelineRun @relationship(type: "ACTIVE_RUN", direction: OUT)
    step: String
    artifacts: [HivePipelineResource] @relationship(type: "PROVIDED", direction: OUT)
}

union HivePipelineRunner = HiveProcess | HivePipelineTrigger

type HivePipelineNode {
    id: ID! @id
    runner: HivePipelineRunner @relationship(type: "USES_TASK", direction: OUT)
    x: Float
    y: Float

    options: String

    pipeline: HivePipeline @relationship(type: "HAS_NODE", direction: IN)
    caller: [HivePipelineNode] @relationship(type: "RUN_NEXT", properties: "HivePipelineFlowPath", direction: IN) 
    next: [HivePipelineNode] @relationship(type: "RUN_NEXT", properties: "HivePipelineFlowPath", direction: OUT)
}

interface HivePipelineFlowPath @relationshipProperties {
    id: ID @id
    source: String
    target: String
}

type HiveProcess {
    id: ID! @id
    name: String
    ports: [HiveProcessPort] @relationship(type: "HAS_PORT", direction: OUT)
    task: String
}

type HiveProcessPort {
    id: ID! @id
    process: HiveProcess @relationship(type: "HAS_PORT", direction: IN)
    direction: String
    name: String
    type: String
}

type HiveFileProcess @exclude {
    id: ID!
    createdAt: DateTime @timestamp(operations: [CREATE])
    completedAt: DateTime
    
    pipeline: HivePipeline @relationship(type: "ACTIVE_PIPELINE", direction: OUT)

    result: HiveProcessResult @relationship(type: "RESULT_OF", direction: IN)

    inputs: [HiveFile] @relationship(type: "CONVERTING", direction: OUT)
    outputs: [HiveFile] @relationship(type: "CONVERTED", direction: OUT)
}

type HiveProcessResult {
    id: ID! @id
    completedAt: DateTime @timestamp
    process: HiveFileProcess @relationship(type: "RESULT_OF", direction: OUT)
    results: String
}
`