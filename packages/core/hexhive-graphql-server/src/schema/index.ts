import gql from "graphql-tag";

export default gql`

type HiveOrganisation @auth(rules: [
	{operations: [READ, UPDATE], where: {id: "$jwt.organisation"}},
	{operations: [UPDATE, DELETE], bind: {id: "$jwt.organisation"}}
]) {
	id: ID! @id
	name: String

	roles: [Role] @relationship(type: "USES_ROLE", direction: OUT)
	members: [HiveUser] @relationship(type: "TRUSTS", direction: OUT)

	appliances: [HiveAppliance] @relationship(type: "USES_APP", direction: OUT)
	integrations: [HiveIntegrationInstance] @relationship(type: "USES_INTEGRATION", direction: OUT)

}

type HiveUser @auth(rules: [
	{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
	{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
]) {
	id: ID! @id
	name: String
	username: String
	password: String
	roles: [Role] @relationship(type: "HAS_ROLE", direction: OUT)
	organisation: HiveOrganisation @relationship(type: "TRUSTS", direction: IN)
}

type Role  @auth(rules: [
	{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
	{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
]) {
	id: ID! @id
	name: String

	appliances: [HiveAppliance] @relationship(type: "USES_APP", direction: OUT)
	permissions: [Permission] @relationship(type: "USES_PERMISSION", direction: OUT)
	organisation: HiveOrganisation @relationship(type: "USES_ROLE", direction: IN)
}
				
type Permission {
	id: ID! @id
	name: String

	action: String
	scope: String

	roles: [Role] @relationship(type: "USES_PERMISSION", direction: IN)
}


type HiveService {
    id: ID!
    name: String
}


type HiveType {
    id: ID! @id
    name: String
    fields: [HiveTypeField] @relationship(type: "HAS_FIELD", direction: OUT)

    usedIn: [HiveAppliance] @relationship(type: "USES_TYPE", direction: IN)
    
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

    types: [HiveType] @relationship(type: "USES_TYPE", direction: OUT)
    
    permissions: [Permission] @relationship(type: "PROVIDES", direction: OUT)
    services: [HiveService] @relationship(type: "USES", direction: OUT)
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

    connections: [HiveIntegrationPath] @relationship(type: "USES_CONNECTION", direction: OUT)
    integration: HiveIntegration @relationship(type: "USES_INTEGRATION", direction: OUT)
    appliances: [HiveAppliance] @relationship(type: "USES_APPLIANCE", direction: OUT)
    config: String
    organisation: HiveOrganisation @relationship(type: "USES_INTEGRATION", direction: IN)
}
`