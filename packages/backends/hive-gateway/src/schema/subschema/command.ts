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
		
		organisation: HiveOrganisation @relationship(type: "HAS_DEVICE", direction: IN)
		online: Boolean
	}

`