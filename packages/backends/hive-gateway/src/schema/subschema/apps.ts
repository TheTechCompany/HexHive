export default `


type HiveService {
    id: ID!
    name: String
}


type HiveAppliance {
    id: ID! @id
    name: String!
    label: String
    description: String
    
    permissions: [Permission] @relationship(type: "PROVIDES", direction: OUT)
    services: [HiveService] @relationship(type: "USES", direction: OUT)
    brand_image: HiveFile @relationship(type: "BRANDING", direction: OUT)

}
`