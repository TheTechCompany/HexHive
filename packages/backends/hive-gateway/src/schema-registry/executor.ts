import { print } from "graphql"
import fetch from "node-fetch";

import { KeyManager } from "../keys"
import FormData from 'form-data'
import { Upload } from "graphql-upload"
// const fetch = (url: RequestInfo, init?: RequestInit) =>  import("node-fetch").then(({ default: fetch }) => fetch(url, init));import jwt from 'jsonwebtoken'

const isMultipart = (variables: any) => {
	for(var k in variables){
		let item = variables[k];
		if(isUpload(item) || (Array.isArray(item) && item.map((x) => isUpload(x)).indexOf(true) > -1)) return true
	}
	return false;
}

const isUpload = (variable: any) => {
	return variable instanceof Promise || variable instanceof Upload
}

const extractFiles = (variables: any) => {
	let files = [];
	for(var k in variables){
		console.log({k, array: Array.isArray(variables[k]), upload: Array.isArray(variables[k]) && variables[k].map((x: any) => isUpload(x))})
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

export const remoteExecutor = (url: string, keyManager?: (payload: any) => any) => {
	return async ({ document, variables, context }: any) => {
		const query = print(document)

		const multipart = isMultipart(variables);

		let headers : any = { 
			// "Content-Type": multipart ? 'multipart/form-data' : "application/json",
		}

		if(!multipart){
			headers['Content-Type'] = 'application/json'

		}else{
			console.log({context})
		}


		console.log({user: context?.user})

		if(context?.user){

			const { sub, email, name, organisation } = context.user
			headers["X-Hive-JWT"] = keyManager?.({
				sub,
				email,
				name,
				organisation
			}) || '';

		}else{
			headers["X-Hive-JWT"] = keyManager?.({
				sub: 'anonymous'
			})
		}		

		let formData : any;

		if(multipart){

			const {files, variables: newVariables} = extractFiles(variables)

			formData = new FormData();
			formData.append('operations', JSON.stringify({query, variables: newVariables}));

			let map : any = {};
			files.forEach((path, ix) => {
				map[ix+1] = [`variables.${path.key}`]
				
			})
			formData.append('map', JSON.stringify(map));

			await Promise.all(files.map(async (path, ix) => {
				const {createReadStream, filename, mimetype: contentType } = await path.file;
				formData.append(`${ix + 1}`, createReadStream(), {
					contentType,
					filename,
					/*
					  Set knownLength to NaN so node-fetch does not set the
					  Content-Length header and properly set the enconding
					  to chunked.
					  https://github.com/form-data/form-data/pull/397#issuecomment-471976669
					*/
					knownLength: Number.NaN,
				})
			}));

			// headers['Content-Type'] = formData.getHeaders()['content-type']
			
			
			// files.forEach((path, ix) => {
			// 	formData.append(ix + 1, path.file);
			// })
			// formData.append('variables', variables);
			// formData = formData.getBuffer()
		}else{
			formData = JSON.stringify({
				query,
				variables,
				context: {

				}
			})
		}
		console.log({query, variables})

		for(var k in variables){
			if(variables[k] instanceof Upload){
				console.log({k})
				//	variables[k] = variables[k].name
			}
		}

		const fetchResult = await fetch(url, {
			method: "POST",
			headers,
			body: formData
		})
		// const fetchResult = await fetch(url, formData, {
		// 	headers: headers,
		// })
    
		return await fetchResult.json() as any
 

	}
}
