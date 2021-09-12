export default `


type HiveService {
    id: ID!
    name: String
}

union HiveIntegration = HiveService | HiveAppliance


type HiveAppliance {
    id: ID! @id
    name: String!
    description: String
    
    permissions: [HivePermission] @relationship(type: "USES", direction: OUT)
    services: [HiveService] @relationship(type: "USES", direction: OUT)
    brand_image: HiveFile @relationship(type: "USES", direction: OUT)

}
`