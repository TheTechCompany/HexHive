import gql from "graphql-tag";
import { stitchingDirectives } from '@graphql-tools/stitching-directives'
import { DateTimeTypeDefinition, DateTypeDefinition, JSONDefinition, JSONObjectDefinition } from 'graphql-scalars'
const { allStitchingDirectivesTypeDefs } = stitchingDirectives();


export default (options: {uploads: boolean}) => `

${allStitchingDirectivesTypeDefs}

${DateTimeTypeDefinition}
${DateTypeDefinition}

${JSONDefinition}
${JSONObjectDefinition}

scalar Hash
${options.uploads ? 'scalar Upload' : ''}

type Query {
    hash(input: String!): Hash
    _sdl: String!
}

type HiveUser {
    id: ID!
}

type HiveOrganisation {
    id: ID!
}
`

export const ACL_Schema = `
    type GraphResource {
        name: String
	    fields: [String]
	    actions: [String]
    }

    type Query {
        _resources: [GraphResource]
    }
`

/*

type HiveOrganisation @auth(rules: [
	{operations: [READ, UPDATE], where: {id: "$jwt.organisation"}},
	{operations: [UPDATE, DELETE], bind: {id: "$jwt.organisation"}}
]) {
	id: ID! @id
	name: String

	roles: [Role!]! @relationship(type: "USES_ROLE", direction: OUT)
	members: [HiveUser!]! @relationship(type: "TRUSTS", direction: OUT)

	appliances: [HiveAppliance!]! @relationship(type: "USES_APP", direction: OUT)
	integrations: [HiveIntegrationInstance!]! @relationship(type: "USES_INTEGRATION", direction: OUT)

    subscriptions: [HiveApplianceConfiguration!]! @relationship(type: "HAS_APP_CONFIG", direction: OUT)
}

type HiveApplianceConfiguration @auth(rules: [
    {operations: [READ, UPDATE], where: {organisation: {id: "$jwt.organisation"}}},
	{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
]) {
    id: ID! @id
    key: String

    permissions: [HiveTypePermission!]! @relationship(type: "HAS_TYPE_PERMISSION", direction: OUT)

    appliance: HiveAppliance @relationship(type: "HAS_APP", direction: OUT)

    organisation: HiveOrganisation @relationship(type: "HAS_APP_CONFIG", direction: IN)
}

type HiveTypePermission @auth(rules: [
	{operations: [READ, UPDATE], where: {configuration: { organisation: {id: "$jwt.organisation" }}} },
	{operations: [UPDATE, DELETE], bind: {configuration: { organisation: {id: "$jwt.organisation" }}} }
]) {
    id: ID! @id
    type: String

    create: Boolean
    read: Boolean
    update: Boolean
    delete: Boolean

    configuration: HiveApplianceConfiguration @relationship(type: "HAS_TYPE_PERMISSION", direction: IN)
}

type HiveUser @auth(rules: [
	{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
	{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
]) {
	id: ID! @id
	name: String
	username: String
	password: String
	roles: [Role!]! @relationship(type: "HAS_ROLE", direction: OUT)
	organisation: HiveOrganisation @relationship(type: "TRUSTS", direction: IN)
}

type Role  @auth(rules: [
	{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
	{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
]) {
	id: ID! @id
	name: String

	appliances: [HiveAppliance!]! @relationship(type: "USES_APP", direction: OUT)
	permissions: [Permission!]! @relationship(type: "USES_PERMISSION", direction: OUT)
	organisation: HiveOrganisation @relationship(type: "USES_ROLE", direction: IN)
}
				
type Permission {
	id: ID! @id
	name: String

	action: String
	scope: String

	roles: [Role!]! @relationship(type: "USES_PERMISSION", direction: IN)
}


type HiveService {
    id: ID!
    name: String
}


type HiveType {
    id: ID! @id
    name: String
    fields: [HiveTypeField!]! @relationship(type: "HAS_FIELD", direction: OUT)

    usedIn: [HiveAppliance!]! @relationship(type: "USES_TYPE", direction: IN)
    
}

type HiveTypeField {
    id: ID! @id
    name: String
    type: String
}

type HiveAppliance {
    id: ID! @id
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
    id: ID! @id
    name: String
    type: String
    collections: [HiveIntegrationPathCollection]
    connectionBlob: String
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

    connections: [HiveIntegrationPath!]! @relationship(type: "USES_CONNECTION", direction: OUT)
    integration: HiveIntegration @relationship(type: "USES_INTEGRATION", direction: OUT)
    appliances: [HiveAppliance!]! @relationship(type: "USES_APPLIANCE", direction: OUT)
    config: String
    organisation: HiveOrganisation @relationship(type: "USES_INTEGRATION", direction: IN)
}
*/