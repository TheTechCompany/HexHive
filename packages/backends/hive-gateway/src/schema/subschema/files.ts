export default `

type FileSystem {
    name: String!
    organisation: Organisation @relationship(type: "HAS_FS", direction: IN)
    files: [HiveFile!]! @relationship(type: "HAS_FILE", direction: OUT)
}

type HiveFile  @auth(rules: [
    {
        operations: [READ, DELETE],
        where: {OR: [{fs: {organisation: {id: "$jwt.organisation"}} }, {parent: {fs: {organisation: {id: "$jwt.organisation"}}}}]}
    },
    {
        operations: [UPDATE, CREATE],
        bind: {OR: [{fs: {organisation: {id: "$jwt.organisation"}} }, {parent: {fs: {organisation: {id: "$jwt.organisation"}}}}]}
    }]) {
    id: ID! @id
    name: String!
    cid: String
    size: Int
    mimetype: String
    
    path_id: String
        @cypher(
            statement: """
            MATCH path = (root:FileSystem)-[*1..]->(m:HiveFile)
            WHERE m.id = this.id AND NOT ()-[:HAS_FILE]->(root)
            WITH [node in nodes(path) | node.id] as trailNames
            RETURN COALESCE(\\"/\\" + apoc.text.join(trailNames, \\"/\\"), \\"/\\") 
            """
        )
    path: String
        @cypher(
            statement: """
            MATCH path = (root:FileSystem)-[*1..]->(m:HiveFile)
            WHERE m.id = this.id AND NOT ()-[:HAS_FILE]->(root)
            WITH [node in nodes(path) | node.name] as trailNames
            RETURN COALESCE(\\"/\\" + apoc.text.join(trailNames, \\"/\\"), \\"/\\") 
            """
        )
    fs: FileSystem @relationship(type: "HAS_FILE", direction: IN)
    isFolder: Boolean
    parent: HiveFile @relationship(type: "CONTAINS", direction: IN)
    children: [HiveFile] @relationship(type: "CONTAINS", direction: OUT)

    conversions: [HivePipelineRun]  @relationship(type: "USES", direction: IN)
    convertedBy: HiveFileProcess @relationship(type: "CONVERTED", direction: IN)

    convertedFrom: HiveFile @relationship(type: "HAS_VIEW", direction: IN)
    views: [HiveFile] @relationship(type: "HAS_VIEW", direction: OUT)
}`