export const getFieldsForType = (type: string) => {
	switch(type.toLowerCase()){
		case "file":
			return ["id", "cid"]
		default:
			return undefined
	}
}
export const getSuggestions = (nodes: {runner: {ports: {type: string, name: string}[]}}[]) => {
	let suggestions = [];
	nodes.forEach((node) => {
		node.runner.ports.forEach((x) => {
			let fields = getFieldsForType(x.type)
			if(!fields) suggestions.push(`${x.name}`)
			if(fields) {
				fields.forEach((field) => {
					suggestions.push(`${x.name}.${field}`)
				})
			}
		})
	})
	return suggestions
}