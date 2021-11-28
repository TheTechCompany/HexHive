export default `

type Cluster {
	id: ID! @id
	label: String
	
	displays: [Display] @relationship(type: "IN_CLUSTER", direction: OUT) 
}
`