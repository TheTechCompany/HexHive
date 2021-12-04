export default `
type LocationGroup {
	id: ID! @id
	name: String
	locations: [Location] @relationship(type: "HAS_LOCATION", direction: OUT)
}

type Location {
	id: ID! @id
	name: String
	lat: Float
	lng: Float
	elevation: Float

	groups: [LocationGroup] @relationship(type: "HAS_LOCATION", direction: IN)
	machines: [Machine] @relationship(type: "IN_LOCATION", direction: IN)
}

`