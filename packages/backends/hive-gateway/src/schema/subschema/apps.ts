import { HiveDB } from "@hexhive/db-types"
import { nanoid } from "nanoid"

export default (db: HiveDB, schemas: { [key: string]: {acl: any[]} }) => {
    const typeDefs = `

        type Query {
            hiveAppliances(where: HiveApplianceWhere, owned: Boolean): [HiveAppliance!]!
        }

        type Mutation {
            createAppServiceAccount(app: ID, input: ServiceAccountInput): ServiceAccount
            updateAppServiceAccount(app: ID, id: ID, input: ServiceAccountInput): ServiceAccount
            deleteAppServiceAccount(app: ID, id: ID): ServiceAccount

            createOrganisationApp(app: ID): Boolean
            deleteOrganisationApp(app: ID): Boolean
        }


        input HiveApplianceWhere {
            ids: ID
        }

        type HiveAppliance {
            id: ID! 
            name: String!

            slug: String

            label: String
            description: String

            types: [HiveType!]! 
            
            resources: [HiveApplianceResource]

            services: [HiveService!]!

            serviceAccounts: [ServiceAccount]
        }


        type HiveApplianceResource {
            name: String
            fields: [String]
            actions: [String]
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
        HiveAppliance: {
            resources: (root: any) => {
                console.log("HiveAppliance perms", root);
                return schemas[root.id]?.acl;
            }
        },
        Query: {
            hiveAppliances: async (root: any, args: any, context: any) => {

                let query : any = {};

                // if(args.owned != null){
                //     let key = args.owned ? 'some' : 'none';
                //     query['users'] = {
                //         [key]: {
                //             id: context?.jwt?.organisation
                //         }
                //     }
                // }
                // if(args.where?.id){
                //     query['id'] = args.where?.id
                // }

                
                // const appliances = await prisma.application.findMany({
                //     where: query
                // })

                let appliances = await db.getApplications(args?.where?.ids);
                console.log(appliances, args)

                if(args.owned != null){
                    appliances = appliances.filter((app) => {
                        if(args.owned){
                            return app?.users?.find((a) => a.id == context?.jwt?.organisation)
                        }else{
                            return app?.users?.find((a) => a.id == context?.jwt?.organisation) == null
                        }
                    })
                }

                console.log(appliances, args)

                return appliances
            }
        },
        Mutation: {
            createOrganisationApp: async (root: any, args: any, context: any) => {
                return await db.attachOrganisationApp(context?.jwt?.organisation, args.app) != null;
                // return await prisma.organisation.update({
                //     where: {
                //         id: context?.jwt?.organisation
                //     },
                //     data: {
                //         applications: {
                //             connect: {
                //                 id: args.app
                //             }
                //         }
                //     }
                // }) != null;
            },
            deleteOrganisationApp: async (root: any, args: any, context: any) => {
                return await db.detachOrganisationApp(context?.jwt?.organisation, args.app) != null;

                // return await prisma.organisation.update({
                //     where: {
                //         id: context?.jwt?.organisation,
                //     },
                //     data: {
                //         applications: {
                //             disconnect: {
                //                 id: args.app
                //             }
                //         }
                //     }
                // }) != null;
            },

            createAppServiceAccount: async (root: any, args: any, context: any) => {
                // return await prisma.applicationServiceAccount.create({
                //     data: {
                //         id: nanoid(),
                //         name: args.input.name,
                //         apiKey: nanoid(),
                //         application: {
                //             connect: {id: args.app}
                //         }
                //     }
                // })
            },
            updateAppServiceAccount: async (root: any, args: any, context: any) => {
                // return await prisma.applicationServiceAccount.update({
                //     where: {id: args.id},
                //     data: {
                //         name: args.input.name
                //     }
                // })
            },
            deleteAppServiceAccount: async (root: any, args: any, context: any) => {
                // return await prisma.applicationServiceAccount.delete({where: {id: args.id}})   
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