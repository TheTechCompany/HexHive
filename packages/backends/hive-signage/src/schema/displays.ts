export default `
type Display {
	id: ID! @id
	label: String
	location: DisplayLocation @relationship(type: "IN_LOCATION", direction: OUT)
	
	computers: [Computer] @relationship(type: "HAS_COMPUTER", direction: OUT)
	screens: [DisplayScreen] @relationship(type: "HAS_SCREEN", direction: OUT)

	cluster: Cluster @relationship(type: "IN_CLUSTER", direction: IN)

	provisioned: Boolean
	provisionedAt: DateTime
	provisionedBy: ProvisionCode @relationship(type: "PROVISIONED", direction: IN)
}

type ProvisionCode {
	id: ID @id
	slug: String
	createdAt: DateTime

	display: Display @relationship(type: "PROVISIONED", direction: OUT)
}

type DisplayScreen {
	id: ID! @id
	width: Float
	height: Float
	resWidth: Float
	resHeight: Float
	orientation: Float
}

type DisplayLocation {
	id: ID! @id
	name: String
	lat: Float
	lng: Float
	elevation: Float
}
`