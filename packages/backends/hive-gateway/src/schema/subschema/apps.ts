import { PrismaClient } from "@hexhive/data"
import { nanoid } from "nanoid"

export default (prisma: PrismaClient) => {
    const typeDefs = `

        type Query {
            hiveAppliances: [HiveAppliance!]!
        }

        type Mutation {
            createAppServiceAccount(app: ID, input: ServiceAccountInput): ServiceAccount
            updateAppServiceAccount(app: ID, id: ID, input: ServiceAccountInput): ServiceAccount
            deleteAppServiceAccount(app: ID, id: ID): ServiceAccount
        }

        type HiveAppliance {
            id: ID! 
            name: String!

            slug: String

            label: String
            description: String

            types: [HiveType!]! 
            
            permissions: [Permission!]! 
            services: [HiveService!]!

            serviceAccounts: [ServiceAccount]
        }

        input ServiceAccountInput {
            name: String
        }

        type ServiceAccount {
            id: ID!
            name: String
            apiKey: String
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
        },
        Mutation: {
            createAppServiceAccount: async (root: any, args: any, context: any) => {
                return await prisma.applicationServiceAccount.create({
                    data: {
                        id: nanoid(),
                        name: args.input.name,
                        apiKey: nanoid(),
                        application: {
                            connect: {id: args.app}
                        }
                    }
                })
            },
            updateAppServiceAccount: async (root: any, args: any, context: any) => {
                return await prisma.applicationServiceAccount.update({
                    where: {id: args.id},
                    data: {
                        name: args.input.name
                    }
                })
            },
            deleteAppServiceAccount: async (root: any, args: any, context: any) => {
                return await prisma.applicationServiceAccount.delete({where: {id: args.id}})   
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