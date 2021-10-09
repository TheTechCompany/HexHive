export default `

extend type Mutation {
    updateHiveIntegrationInstanceState(id: ID, state: Boolean): Boolean
}

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

type HiveIntegrationPath {
    id: ID! @id
    name: String
    data: String
    instance: HiveIntegrationInstance @relationship(type: "USES_CONNECTION", direction: IN)
}

type HiveIntegration {
    id: ID! @id
    name: String
    description: String
}

type HiveIntegrationInstance {
    id: ID! @id
    name: String

    isRunning: Boolean @readonly

    connections: [HiveIntegrationPath] @relationship(type: "USES_CONNECTION", direction: OUT)
    integration: HiveIntegration @relationship(type: "USES_INTEGRATION", direction: OUT)
    appliances: [HiveAppliance] @relationship(type: "USES_APPLIANCE", direction: OUT)
    config: String
    organisation: HiveOrganisation @relationship(type: "USES_INTEGRATION", direction: IN)
}
`