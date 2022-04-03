export default `

	
`

/*
extend type Mutation {
		inviteHiveUser(name: String, email: String): String
	}

	type HiveOrganisation @auth(rules: [
		{operations: [READ], where: {id: "$jwt.organisation"}},
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
*/