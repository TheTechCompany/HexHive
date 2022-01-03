import { print } from "graphql"
import { fetch } from "cross-fetch"
import jwt from 'jsonwebtoken'
import { KeyManager } from "../keys"

export const remoteExecutor = (url: string, keyManager?: (payload: any) => any) => {
	return async ({ document, variables, context }: any) => {
		const query = print(document)


		let headers : any = { 
			"Content-Type": "application/json",
		}

		if(context?.user){
			console.log("REMOTE ", {keyManager})
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

		console.log({headers})
		

		const fetchResult = await fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify({ 
				query, 
				variables, 
				context: {
					// user: context?.user
				} 
			}),
		})
    
		return fetchResult.json()
 

	}
}
