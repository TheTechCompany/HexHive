import { gql } from 'graphql-tag'

export const AutomergeSchema = gql`
	type CommandProgramFlow {
		id: ID! @id
		name: String
		nodes: [CommandProgramNode] @relationship(type: "USES_NODE", direction: OUT)
		paths: [CommandProgramPath] @relationship(type: "USES_PATH", direction: OUT)
	}

	type CommandProgramNode {
		id: ID! @id
		x: Float
		y: Float
		type: String
		
	}

	type CommandProgramPath {
		id: ID! @id
		source: String
		sourceHandle: String
		target: String
		targetHandle: String
		points: [CartesianPoint]
	}

	interface CommandProgramNodeFlow @relationshipProperties {
		id: ID @id
		sourceHandle: String
		targetHandle: String

		points: [CartesianPoint]
	}

	type CartesianPoint {
		x: Float
		y: Float
	}
`

/*

/flow: [CommandProgramFlow] @relationship(type: "USES_NODE", direction: IN)

		previous: [CommandProgramNode] @relationship(type: "USE_NEXT", direction: IN, properties: "CommandProgramNodeFlow")
		next: [CommandProgramNode] @relationship(type: "USE_NEXT", direction: OUT, properties: "CommandProgramNodeFlow")



/CommandProgramNodeFlow
		conditions: [String]
		points: [CartesianPoint]

/ProgramNod
		actions: [CommandActionItem] @relationship(type: "HAS_ACTION", direction: OUT)
		configuration: [CommandProgramNodeConfiguration] @relationship(type: "HAS_CONF", direction: OUT)


	conditions: [CommandProgramNodeFlowConfiguration] @relationship(type: "HAS_CONDITION", direction: OUT)
	programs: [CommandProgram] @relationship(type: "USES_FLOW", direction: IN)


type CommandActionItem {
	id: ID! @id
	device: CommandProgramDevicePlaceholder @relationship(type: "ACTIONS", direction: OUT)
	request: CommandProgramDeviceAction @relationship(type: "USES_ACTION", direction: OUT)
}

type CommandProgramNodeConfiguration {
	id: ID! @id

	key: String
	value: String
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
*/
