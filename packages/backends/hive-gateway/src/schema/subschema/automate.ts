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
    nodes: [HivePipelineNode] @relationship(type: "HAS_NODE", direction: OUT)
}


type HivePipelineNode {
    id: ID! @id
    runner: HiveProcess @relationship(type: "USES_TASK", direction: OUT)
    x: Float
    y: Float

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