export default `

	extend type Mutation {
		inviteHiveUser(name: String, email: String): String
	}

	type HiveOrganisation @auth(rules: [
		{operations: [READ], where: {id: "$jwt.organisation"}},
		{operations: [UPDATE, DELETE], bind: {id: "$jwt.organisation"}}
	]) {
		id: ID! @id
		name: String

		roles: [Role] @relationship(type: "USES_ROLE", direction: OUT)
		members: [HiveUser] @relationship(type: "TRUSTS", direction: OUT)
		appliances: [HiveAppliance] @relationship(type: "USES_APP", direction: OUT)

		schedule: [ScheduleItem] @relationship(type: "SCHEDULE", direction: OUT)
		filesystems: [FileSystem] @relationship(type: "HAS_FS", direction: OUT)
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
`