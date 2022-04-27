import { PrismaClient } from "@prisma/client"

export default (prisma: PrismaClient) => {
    const typeDefs = `

        type Query {
            hiveAppliances: [HiveAppliance!]!
        }

        type HiveAppliance {
            id: ID! 
            name: String!
            label: String
            description: String

            types: [HiveType!]! 
            
            permissions: [Permission!]! 
            services: [HiveService!]!

        }


        type HiveType {
            id: ID! 
            name: String
            fields: [HiveTypeField!]! 

            usedIn: [HiveAppliance!]! 
            
        }

        type HiveTypeField {
            id: ID! 
            name: String
            type: String
        }

        type HiveService {
            id: ID!
            name: String
        }


        type HiveIntegration {
            id: ID! 
            name: String
            description: String
        }

        type HiveIntegrationInstance {
            id: ID! 
            name: String
        
            isRunning: Boolean 
        
            connections: [HiveIntegrationPath!]!
            integration: HiveIntegration 
            appliances: [HiveAppliance!]! 
            config: String
            organisation: HiveOrganisation 
        }

        type HiveIntegrationPathCollection {
            name: String
        }
        
        type HiveIntegrationPath {
            id: ID! 
            name: String
            type: String
            collections: [HiveIntegrationPathCollection]
            connectionBlob: String
            instance: HiveIntegrationInstance 
        }
    `

    const resolvers = {
        Query: {
            hiveAppliances: async () => {
                const appliances = await prisma.application.findMany()

                return appliances
            }
        }
    }

    return {typeDefs, resolvers}
}

/*
extend type Mutation {
    updateHiveIntegrationInstanceState(id: ID, state: Boolean): Boolean
}

type HiveService {
    id: ID!
    name: String
}


type HiveType {
    id: ID! 
    name: String
    fields: [HiveTypeField!]! @relationship(type: "HAS_FIELD", direction: OUT)

    usedIn: [HiveAppliance!]! @relationship(type: "USES_TYPE", direction: IN)
    
}

type HiveTypeField {
    id: ID! 
    name: String
    type: String
}

type HiveAppliance {
    id: ID! 
    name: String!
    label: String
    description: String

    types: [HiveType!]! @relationship(type: "USES_TYPE", direction: OUT)
    
    permissions: [Permission!]! @relationship(type: "PROVIDES", direction: OUT)
    services: [HiveService!]! @relationship(type: "USES", direction: OUT)

}

type HiveIntegrationPathCollection {
    name: String
}

type HiveIntegrationPath {
    id: ID! 
    name: String
    type: String
    collections: [HiveIntegrationPathCollection]
    connectionBlob: String
    instance: HiveIntegrationInstance @relationship(type: "USES_CONNECTION", direction: IN)
}

type HiveIntegration {
    id: ID! 
    name: String
    description: String
}

type HiveIntegrationInstance {
    id: ID! 
    name: String

    isRunning: Boolean @readonly

    connections: [HiveIntegrationPath!]! @relationship(type: "USES_CONNECTION", direction: OUT)
    integration: HiveIntegration @relationship(type: "USES_INTEGRATION", direction: OUT)
    appliances: [HiveAppliance!]! @relationship(type: "USES_APPLIANCE", direction: OUT)
    config: String
    organisation: HiveOrganisation @relationship(type: "USES_INTEGRATION", direction: IN)
}
 */