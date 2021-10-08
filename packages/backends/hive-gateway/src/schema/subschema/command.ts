/*
 @auth(rules: [
		{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
		{operations: [UPDATE], bind: {organisation: {id: "$jwt.organisation"}}}
	]) 
*/
export default `

	type CommandDevice {
		id: ID! @id
		name: String

		network_name: String
		
		online: Boolean
		lastOnline: DateTime

		organisation: HiveOrganisation @relationship(type: "HAS_DEVICE", direction: IN)

	}

	type CommandProgram {
		id: ID! @id
		name: String

		program: [CommandProgramFlow] @relationship(type: "USES_FLOW", direction: OUT)
		hmi: [CommandProgramHMI] @relationship(type: "USES_HMI", direction: OUT)
		createdAt: DateTime @timestamp(operations: [CREATE])

		organisation: HiveOrganisation @relationship(type: "HAS_PROGRAM", direction: IN)

	}

	type CommandProgramFlow {
		id: ID! @id
		nodes: [CommandProgramNode] @relationship(type: "USES_NODE", direction: OUT)
		programs: [CommandProgram] @relationship(type: "USES_FLOW", direction: IN)
	}

	type CommandProgramHMI {
		id: ID! @id
		nodes: [CommandProgramNode] @relationship(type: "USES_NODE", direction: OUT)
		programs: [CommandProgram] @relationship(type: "USES_HMI", direction: IN)
	}


	type CommandProgramNode {
		id: ID! @id
		x: Float
		y: Float
		flow: [CommandProgramFlow] @relationship(type: "USES_NODE", direction: IN)
		previous: [CommandProgramNode] @relationship(type: "USE_NEXT", direction: IN)
		next: [CommandProgramNode] @relationship(type: "USE_NEXT", direction: OUT)
	}

	type CommandPlugin {
		id: ID! @id
		name: String
		items: [CommandPluginItem] @relationship(type: "HAS_PLUGIN_ITEM", direction: OUT)
		organisation: HiveOrganisation @relationship(type: "HAS_PLUGIN", direction: IN)

	}

	type CommandPluginItem {
		id: ID! @id
		name: String
		type: String
		value: String

		usedIn: [CommandPlugin] @relationship(type: "HAS_PLUGIN_ITEM", direction: IN)
	}

`