export default `

	type Organisation @auth(rules: [
		{operations: [READ], where: {id: "$jwt.organisation"}},
		{operations: [UPDATE], bind: {id: "$jwt.organisation"}}
	]) {
		id: ID! @id
		name: String

		roles: [Role] @relationship(type: "USES_ROLE", direction: OUT)
		members: [User] @relationship(type: "TRUSTS", direction: OUT)
		filesystems: [FileSystem] @relationship(type: "HAS_FS", direction: OUT)
	}

	type User @auth(rules: [
		{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
		{operations: [UPDATE, CREATE], bind: {organisation: {id: "$jwt.organisation"}}}
	]) {
		id: ID! @id
		name: String
		email: String

		organisation: Organisation @relationship(type: "TRUSTS", direction: IN)
	}

	type Role {
		id: ID! @id
		name: String

		permissions: [Permission] @relationship(type: "USES_PERMISSION", direction: OUT)
		organisation: Organisation @relationship(type: "USES_ROLE", direction: IN)
	}


	type Permission {
		id: ID! @id
		name: String

		action: String
		scope: String

		roles: [Role] @relationship(type: "USES_PERMISSION", direction: IN)
	}
`