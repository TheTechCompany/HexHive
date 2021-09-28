export default `

type FileSystem {
    name: String!
    organisation: Organisation @relationship(type: "HAS_FS", direction: IN)
    files: [HiveFile!]! @relationship(type: "CONTAINS", direction: OUT)
}

type HiveFile  @auth(rules: [
    {
        operations: [READ, DELETE],
        where: {fs: {organisation: {id: "$jwt.organisation"}} }
    },
    {
        operations: [UPDATE, CREATE],
        bind: {fs: {organisation: {id: "$jwt.organisation"}} }
    }
]) {
    id: ID! @id
    name: String!
    cid: String
    size: Int
    mimetype: String
    
    path_id: String
        @cypher(
            statement: """
            MATCH path = (root:FileSystem)-[:CONTAINS *1..]->(m:HiveFile)
            WHERE m.id = this.id AND NOT ()-[:CONTAINS]->(root)
            WITH [node in nodes(path) | node.id] as trailNames
            RETURN COALESCE(\\"/\\" + apoc.text.join(trailNames, \\"/\\"), \\"/\\") 
            """
        )
    path: String
        @cypher(
            statement: """
            MATCH path = (root:FileSystem)-[:CONTAINS *1..]->(m:HiveFile)
            WHERE m.id = this.id AND NOT ()-[:CONTAINS]->(root)
            WITH [node in nodes(path) | node.name] as trailNames
            RETURN COALESCE(\\"/\\" + apoc.text.join(trailNames, \\"/\\"), \\"/\\") 
            """
        )
    fs: FileSystem @relationship(type: "CONTAINS", direction: IN)
    isFolder: Boolean
    parent: HiveFile @relationship(type: "CONTAINS", direction: IN)
    children: [HiveFile] @relationship(type: "CONTAINS", direction: OUT)

    conversions: [HivePipelineRun]  @relationship(type: "USES", direction: IN)
    convertedBy: HiveFileProcess @relationship(type: "CONVERTED", direction: IN)

    convertedFrom: HiveFile @relationship(type: "HAS_VIEW", direction: IN)
    views: [HiveFile] @relationship(type: "HAS_VIEW", direction: OUT)
}`