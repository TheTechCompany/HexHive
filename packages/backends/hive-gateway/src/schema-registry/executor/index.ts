import { print } from "graphql"
import { handleJSON } from "./json";
import fetch from 'node-fetch'
import { handleMultipart } from "./multipart";
import { extractFiles, isMultipart } from "./multipart/utils";

export const remoteExecutor = (url: string, keyManager?: (payload: any) => any) => {
	return async ({ document, variables, context }: any) => {
		const query = typeof document === 'string' ? document : print(document)

		const multipart = isMultipart(variables);

		let headers : any = { 
			'X-Hive-Gateway': process.env.GATEWAY_URL || 'http://localhost:7000/graphql'
		}

		if(!multipart){
			headers['Content-Type'] = 'application/json'
		}
        
		if(context?.user){
			const { id, email, name, organisation } = context.user
			headers["X-Hive-JWT"] = keyManager?.({
				sub: id,
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
            formData = await handleMultipart(query, variables);
		}else{
			formData = await handleJSON(query, variables)
		}

		const fetchResult = await fetch(url, {
			method: "POST",
			headers,
			body: formData
		})

		return await fetchResult.json() as any
 

	}
}
