export default `
type Machine {
	id: ID! @id
	name: String
	location: Location @relationship(type: "IN_LOCATION", direction: OUT)
	
	computers: Computer @relationship(type: "HAS_COMPUTER", direction: OUT)
	
	template: MachineTemplate @relationship(type: "USES_TEMPLATE", direction: OUT)
	
	provisioned: Boolean
	provisionedAt: DateTime

	networkName: String
}

type MachineTemplate {
	id: ID! @id
	name: String

	computers: [ComputerTemplate] @relationship(type: "HAS_COMPUTER", direction: OUT)
	displays: [ScreenTemplate] @relationship(type: "HAS_SCREEN", direction: OUT)
	peripherals: [PeripheralTemplate] @relationship(type: "HAS_PERIPHERAL", direction: OUT)
	plugins: [MachinePlugin] @relationship(type: "HAS_PLUGIN", direction: OUT)
}

type ComputerTemplate {
	id: ID! @id
	name: String
	
	plugins: [MachinePlugin] @relationship(type: "HAS_PLUGIN", direction: OUT)
	peripherals: [PeripheralTemplate] @relationship(type: "HAS_PERIPHERAL", direction: OUT)
	storage: [StorageTemplate] @relationship(type: "HAS_STORAGE", direction: OUT)
	screens: [ScreenTemplate] @relationship(type: "DISPLAYS_ON", direction: OUT)
}

type StorageTemplate {
	id: ID! @id
	name: String
	min: Float
	max: Float
	type: String
}

type ScreenTemplate {
	id: ID! @id
	name: String
	private: Boolean
	width: Int
	height: Int
	rotation: Int

	computer: ComputerTemplate @relationship(type: "DISPLAYS_ON", direction: IN)
}

type PeripheralTemplate {
	id: ID! @id
	name: String
	type: String
	private: Boolean

	computer: ComputerTemplate @relationship(type: "HAS_PERIPHERAL", direction: IN)
	
}

type MachinePlugin {
	id: ID! @id
	name: String
	type: String
}



type ProvisionCode {
	id: ID @id
	slug: String
	createdAt: DateTime

	display: Machine @relationship(type: "PROVISIONED", direction: OUT)
}

type Screen {
	id: ID! @id
	width: Float
	height: Float
	resWidth: Float
	resHeight: Float
	orientation: Float
}

type Computer {
	id: ID! @id
	name: String
	hostname: String
	cpu: Float
	memory: Float
	os: String
	agentVersion: String

	template: ComputerTemplate @relationship(type: "IS_COMPUTER", direction: OUT)
}
`