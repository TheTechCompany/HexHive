export const getDevicesForNode = (node: any) => {
	if(node.nodes){
		return node.nodes?.map((x) => ({...x.devicePlaceholder}))
	}else{
		return [node?.devicePlaceholder];
	}
}