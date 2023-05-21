import { Upload } from "graphql-upload";

export const isMultipart = (variables: any) => {
	for(var k in variables){
		let item = variables[k];
		if(isUpload(item) || (Array.isArray(item) && item.map((x) => isUpload(x)).indexOf(true) > -1)) return true
	}
	return false;
}

export const isUpload = (variable: any) => {
	return variable instanceof Promise || variable instanceof Upload
}

export const extractFiles = (variables: any) => {
	let files = [];
	for(var k in variables){
		if(isUpload(variables[k]) || (Array.isArray(variables[k]) && variables[k].map((x: any) => isUpload(x)).indexOf(true) > -1 )){
			if(Array.isArray(variables[k])){
				variables[k].forEach((v: any, ix: number) => {
					files.push({file: v.promise, key: `${k}.${ix}`})
				})
				variables[k] = variables[k].map(() => null)
			}else{
				files.push({file: variables[k].promise, key: k})
				variables[k] = null;

			}

		}
	}
	return {files, variables};
}