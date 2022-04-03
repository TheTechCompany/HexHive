import { print } from "graphql"
import { handleJSON } from "./json";
import fetch from 'node-fetch'
import { handleMultipart } from "./multipart";
import { extractFiles, isMultipart } from "./multipart/utils";

export const remoteExecutor = (url: string, keyManager?: (payload: any) => any) => {
	return async ({ document, variables, context }: any) => {
		const query = print(document)

		const multipart = isMultipart(variables);

		let headers : any = { 
		}

		if(!multipart){
			headers['Content-Type'] = 'application/json'
		}
        
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
