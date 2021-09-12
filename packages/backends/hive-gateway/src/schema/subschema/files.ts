export default `

type FileSystem {
    name: String!
    files: [HiveFile!]! @relationship(type: "CONTAINS", direction: OUT)
}

type HiveFile {
    id: ID! @id
    name: String!
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

    conversions: [HiveFileProcess] @relationship(type: "CONVERTING", direction: IN)
    convertedBy: HiveFileProcess @relationship(type: "CONVERTED", direction: IN)

    convertedFrom: HiveFile @relationship(type: "CONVERSION", direction: IN)
    convertedTo: [HiveFile] @relationship(type: "CONVERSION", direction: OUT)
}`