export default `

	type Project {
		id: ID! @id
		name: String

		roles: [Role] @relationship(type: "USES_ROLE", direction: OUT)
		members: [HiveUser] @relationship(type: "TRUSTS", direction: OUT)
		appliances: [HiveAppliance] @relationship(type: "USES_APP", direction: OUT)

		filesystems: [FileSystem] @relationship(type: "HAS_FS", direction: OUT)
	}

`