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

type HiveIntegration {
    id: ID! @id
    name: String
    description: String
}

type HiveIntegrationInstance {
    id: ID! @id
    name: String
    integration: HiveIntegration @relationship(type: "USES_INTEGRATION", direction: OUT)
    appliance: HiveAppliance @relationship(type: "USES_APPLIANCE", direction: OUT)
    config: String
    organisation: HiveOrganisation @relationship(type: "USES_INTEGRATION", direction: IN)
}
`