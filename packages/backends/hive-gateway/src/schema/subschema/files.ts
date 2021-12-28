export default `

extend type Query {
    resolveFS(appId: String, mountPath: String): HiveFile
}

type FileSystem {
    name: String!
    organisation: HiveOrganisation @relationship(type: "HAS_FS", direction: IN)
    files: [HiveFile!]! @relationship(type: "HAS_FILE", direction: OUT)
}

type HiveFile  @auth(rules: [
    {
        operations: [READ, DELETE],
        where: {OR: [{convertedFrom: {parent: {fs: {organisation: {id: "$jwt.organisation"}}}}}, {fs: {organisation: {id: "$jwt.organisation"}} }, {parent: {fs: {organisation: {id: "$jwt.organisation"}}}}]}
    },
    {
        operations: [UPDATE],
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
            MATCH path = (root:FileSystem)-[*..]->(m:HiveFile {id: this.id})
            OPTIONAL MATCH real = (root)-[:HAS_FILE]->(rootFolder)-[:CONTAINS *..]->(m)
            WHERE NOT ()-[:CONTAINS]->(rootFolder)
        
            WITH [node in nodes(COALESCE(real, path)) | node.id] as trailNames
            RETURN COALESCE(\\"/\\" + apoc.text.join(trailNames, \\"/\\"), \\"/\\") 
            """
        )
    path: String
        @cypher(
            statement: """
            MATCH path = (root:FileSystem)-[*..]->(m:HiveFile {id: this.id})
            OPTIONAL MATCH real = (root)-[:HAS_FILE]->(rootFolder)-[:CONTAINS *..]->(m)
            WHERE NOT ()-[:CONTAINS]->(rootFolder)
        
            WITH [node in nodes(COALESCE(real, path)) | node.name] as trailNames
            RETURN COALESCE(\\"/\\" + apoc.text.join(trailNames, \\"/\\"), \\"/\\") 
            """
        )
    fs: FileSystem @relationship(type: "HAS_FILE", direction: IN)
    isFolder: Boolean
    parent: HiveFile @relationship(type: "CONTAINS", direction: IN)
    children: [HiveFile] @relationship(type: "CONTAINS", direction: OUT)


    convertedFrom: HiveFile @relationship(type: "HAS_VIEW", direction: IN)
    views: [HiveFile] @relationship(type: "HAS_VIEW", direction: OUT)
}`

//    conversions: [HivePipelineRun]  @relationship(type: "USES", direction: IN)
//convertedBy: HiveFileProcess @relationship(type: "CONVERTED", direction: IN)
