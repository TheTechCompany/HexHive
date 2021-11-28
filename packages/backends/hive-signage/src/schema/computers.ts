export default `
type Computer {
	id: ID! @id
	label: String
	os: String
	
	display: Display @relationship(type: "HAS_COMPUTER", direction: IN)
}
`