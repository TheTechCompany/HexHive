/*
 @auth(rules: [
		{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
		{operations: [UPDATE], bind: {organisation: {id: "$jwt.organisation"}}}
	]) 
*/
export default `


	extend type Query {
		commandDeviceValue(device: String, bus : String, port : String): [CommandDeviceValue]

	}

	extend type Mutation {
		performDeviceAction(device: String, action: String): CommandDeviceResponse
		changeDeviceValue(device: String, bus: String, port: String, key: String, value: String): CommandDeviceResponse
	}

	type CommandDeviceResponse {
		success: Boolean
	}

	type CommandDeviceValue {
		device: String
		deviceId: String
		value: String
		valueKey: String
	}

	type CommandDevice {
		id: ID! @id
		name: String

		activeProgram: CommandProgram @relationship(type: "RUNNING_PROGRAM", direction: OUT)

		network_name: String

		configuredDevices: [CommandProgramPeripheralConfiguration] @relationship(type: "HAS_CONF", direction: OUT, properties: "CommandDevicePeripheralPort")

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

		connectedDevices: [CommandDevicePeripheralProduct] @relationship(type: "IS_CONNECTED", direction: IN, properties: "CommandDevicePeripheralPort")
		mappedDevices: [CommandDevicePeripheralMap] @relationship(type: "HAS_MAPPING", direction: OUT, properties: "CommandDevicePeripheralPort")

		device: CommandDevice @relationship(type: "HAS_PERIPHERAL", direction: IN)
	}
	
	type CommandProgramPeripheralConfiguration {
		id: ID @id
		device: CommandProgramDevicePlaceholder @relationship(type: "USES_DEVICE", direction: OUT)
		conf: CommandProgramDeviceConfiguration @relationship(type: "CONF_KEY", direction: OUT)
		value: String
	}

	type CommandDevicePeripheralProduct {
		id:ID @id
		deviceId: String
		vendorId: String
		name: String

		peripheral: CommandDevicePeripheral @relationship(type: "IS_CONNECTED", direction: OUT, properties: "CommandDevicePeripheralPort")

		connections: [CommandPeripheralProductDatapoint] @relationship(type: "HAS_VARIABLE", direction: OUT)
	}

	type CommandPeripheralProductDatapoint {
		direction: String
		key: String
		type: String

		product: CommandDevicePeripheralProduct  @relationship(type: "HAS_VARIABLE", direction: IN)
	}

	type CommandDevicePeripheralMap {
		id: ID! @id
		key: CommandPeripheralProductDatapoint @relationship(type: "USES_VARIABLE", direction: OUT)
		device: CommandProgramDevicePlaceholder @relationship(type: "USES_DEVICE", direction: OUT)
		value: CommandProgramDeviceState @relationship(type: "USES_STATE", direction: OUT)
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

	type CommandHMIDevice {
		id: ID! @id
		name: String

		ports: [CommandHMIDevicePort] @relationship(type: "HAS_PORT", direction: OUT)
	}

	type CommandHMIDevicePort {
		id: ID! @id
		x: Float
		y: Float
		key: String
		rotation: Float
	}

	type CommandProgramDevice {
		id: ID! @id
		name: String
		type: String

		configuration: [CommandProgramDeviceConfiguration] @relationship(type: "HAS_CONFIGURATION", direction: OUT)

		usedIn: [CommandProgramDevicePlaceholder] @relationship(type: "USES_TEMPLATE", direction: IN)

		state: [CommandProgramDeviceState] @relationship(type: "HAS_STATE", direction: OUT)
		actions: [CommandProgramDeviceAction] @relationship(type: "HAS_ACTION", direction: OUT)
	}

	type CommandProgramDeviceConfiguration {
		id: ID! @id
		key: String
		type: String
	}

	type CommandProgramDeviceAction {
		id: ID! @id
		key: String

		device: CommandProgramDevice @relationship(type: "HAS_ACTION", direction: IN)

	}

	type CommandProgramDeviceState {
		id: ID! @id
		key: String
		type: String

		device: CommandProgramDevice @relationship(type: "HAS_STATE", direction: IN)
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
		conditions: [CommandProgramNodeFlowConfiguration] @relationship(type: "HAS_CONDITION", direction: OUT)
		programs: [CommandProgram] @relationship(type: "USES_FLOW", direction: IN)
	}

	type CommandProgramHMI {
		id: ID! @id
		name: String
		nodes: [CommandHMINode] @relationship(type: "USES_NODE", direction: OUT)
		programs: [CommandProgram] @relationship(type: "USES_HMI", direction: IN)
	}

	type CommandActionItem {
		id: ID! @id
		device: CommandProgramDevicePlaceholder @relationship(type: "ACTIONS", direction: OUT)
		request: CommandProgramDeviceAction @relationship(type: "USES_ACTION", direction: OUT)
	}

	type PIDTarget {
		value: String
		device: [CommandProgramDevicePlaceholder] @relationship(type: "TARGET", direction: OUT)
		ratio: String
	}

	type PIDConfiguration {
		p: String
		i: String
		d: String
		actuator: [CommandProgramDevicePlaceholder] @relationship(type: "ACTUATOR", direction: OUT)
		target: [PIDTarget] @relationship(type: "TARGET", direction: OUT)
	}
	

	type CommandProgramNodeConfiguration {
		id: ID! @id

		key: String
		value: String
	} 

	type CommandProgramNode {
		id: ID! @id
		x: Float
		y: Float
		type: String
		flow: [CommandProgramFlow] @relationship(type: "USES_NODE", direction: IN)

		actions: [CommandActionItem] @relationship(type: "HAS_ACTION", direction: OUT)

		configuration: [CommandProgramNodeConfiguration] @relationship(type: "HAS_CONF", direction: OUT)


		previous: [CommandProgramNode] @relationship(type: "USE_NEXT", direction: IN, properties: "CommandProgramNodeFlow")
		next: [CommandProgramNode] @relationship(type: "USE_NEXT", direction: OUT, properties: "CommandProgramNodeFlow")
	}


	type CommandProgramNodeFlowConfiguration {
		id: ID!
		input: String
		comparator: String
		assertion: String

		flow: CommandProgramFlow @relationship(type: "HAS_CONDITION", direction: IN)
	}

	interface CommandProgramNodeFlow @relationshipProperties {
		id: ID @id
		sourceHandle: String
		targetHandle: String

		conditions: [String]
		points: [CartesianPoint]
	}


	type CommandHMINode {
		id: ID! @id
		x: Float
		y: Float
		
		type: CommandHMIDevice @relationship(type: "USES_VISUAL", direction: OUT)

		devicePlaceholder: CommandProgramDevicePlaceholder @relationship(type: "REPRESENTS", direction: OUT)

		flow: [CommandProgramHMI] @relationship(type: "USES_NODE", direction: IN)

		inputs: [CommandHMINode] @relationship(type: "USE_NEXT", direction: IN, properties: "CommandHMINodeFlow")
		outputs: [CommandHMINode] @relationship(type: "USE_NEXT", direction: OUT, properties: "CommandHMINodeFlow")
	}


	interface CommandHMINodeFlow @relationshipProperties {
		id: ID @id
		sourceHandle: String
		targetHandle: String
		points: [CartesianPoint]
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