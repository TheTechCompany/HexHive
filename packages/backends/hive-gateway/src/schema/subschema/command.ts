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

		activeProgram: CommandProgram @relationship(type: "RUNNING_PROGRAM", direction: OUT)

		network_name: String

		peripherals: [CommandDevicePeripheral] @relationship(type: "HAS_PERIPHERAL", direction: OUT)
		
		online: Boolean
		lastOnline: DateTime

		organisation: HiveOrganisation @relationship(type: "HAS_DEVICE", direction: IN)

	}

	type CommandDevicePeripheral {
		id: ID! @id
		name: String
		type: String
		
		ports: Int

		mappedDevices: [CommandProgramDevicePlaceholder] @relationship(type: "PROVIDES_REALITY", direction: OUT, properties: "CommandDevicePeripheralPort")

		device: CommandDevice @relationship(type: "HAS_PERIPHERAL", direction: IN)
	}


	interface CommandDevicePeripheralPort @relationshipProperties {
		port: String
	}

	type CommandProgram {
		id: ID! @id
		name: String

		documentation: [CommandProgramDocumentation] @relationship(type: "HAS_DOCS", direction: OUT)
		program: [CommandProgramFlow] @relationship(type: "USES_FLOW", direction: OUT)
		hmi: [CommandProgramHMI] @relationship(type: "USES_HMI", direction: OUT)
		devices: [CommandProgramDevicePlaceholder] @relationship(type: "USES_DEVICE", direction: OUT)
		alarms: [CommandProgramAlarm] @relationship(type: "HAS_ALARM", direction: OUT)

		createdAt: DateTime @timestamp(operations: [CREATE])

		organisation: HiveOrganisation @relationship(type: "HAS_PROGRAM", direction: IN)

		usedOn: CommandDevice @relationship(type: "RUNNING_PROGRAM", direction: IN)
	}

	type CommandProgramAlarm {
		id: ID! @id
		name: String
		trigger: String
	}

	type CommandProgramDevicePlaceholder {
		id: ID! @id
		name: String
		type: CommandProgramDevice @relationship(type: "USES_TEMPLATE", direction: OUT)
	}

	type CommandProgramDevice {
		id: ID! @id
		name: String
		type: String
	}


	type CommandProgramDocumentation {
		id: ID! @id
		name: String
		blocks: [String]

		program: CommandProgram @relationship(type: "HAS_DOCS", direction: IN)
	}

	type CommandProgramFlow {
		id: ID! @id
		name: String
		nodes: [CommandProgramNode] @relationship(type: "USES_NODE", direction: OUT)
		programs: [CommandProgram] @relationship(type: "USES_FLOW", direction: IN)
	}

	type CommandProgramHMI {
		id: ID! @id
		name: String
		nodes: [CommandHMINode] @relationship(type: "USES_NODE", direction: OUT)
		programs: [CommandProgram] @relationship(type: "USES_HMI", direction: IN)
	}


	type CommandProgramNode {
		id: ID! @id
		x: Float
		y: Float
		type: String
		flow: [CommandProgramFlow] @relationship(type: "USES_NODE", direction: IN)
		previous: [CommandProgramNode] @relationship(type: "USE_NEXT", direction: IN)
		next: [CommandProgramNode] @relationship(type: "USE_NEXT", direction: OUT)
	}


	type CommandHMINode {
		id: ID! @id
		x: Float
		y: Float
		type: String

		devicePlaceholder: CommandProgramDevicePlaceholder @relationship(type: "REPRESENTS", direction: OUT)

		flow: [CommandProgramHMI] @relationship(type: "USES_NODE", direction: IN)
		previous: [CommandHMINode] @relationship(type: "USE_NEXT", direction: IN)
		next: [CommandHMINode] @relationship(type: "USE_NEXT", direction: OUT)
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