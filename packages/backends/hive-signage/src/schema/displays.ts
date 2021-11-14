export default `
type Display {
	id: ID! @id
	label: String
	location: DisplayLocation @relationship(type: "IN_LOCATION", direction: IN)
	
	screens: [DisplayScreen] @relationship(type: "HAS_SCREEN", direction: OUT)
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

	displays: [Display] @relationship(type: "IN_LOCATION", direction: OUT)
}
`