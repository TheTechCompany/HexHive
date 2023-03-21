import { print } from "graphql"
import { handleJSON } from "./json";
import fetch from 'node-fetch'
import { AbortController } from 'abort-controller'
import { handleMultipart } from "./multipart";
import { extractFiles, isMultipart } from "./multipart/utils";
import { nanoid } from "nanoid";

async function* generateJsonIterable(response: any){
	for await (const chunk of response){
		let data = chunk.toString();

		try{
			let substring = data.match(/data: (.+)/)?.[1]
			let jsonData = JSON.parse(`${substring}`);

			yield jsonData //chunk.toString();
		}catch(e){
			yield data;
		}
	}
}

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
				id: id,
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
		const id = nanoid();

		let response : any = '';

		let isStream = query.indexOf('subscription') == 0

		const controller = new AbortController();

		const signal = controller.signal;

		const fetchResult = await fetch(url, {
			method: "POST",
			headers,
			body: formData,
			signal: signal
		})

		if(isStream){

			const initialIterator = fetchResult.body[Symbol.asyncIterator]();
			const initialReturn = initialIterator.return;

			const jsonIterable = generateJsonIterable(initialIterator);

			const asyncReturn = jsonIterable.return;

			jsonIterable.return = () => {
				controller.abort()
				initialReturn ? initialReturn.call(initialIterator) : Promise.resolve({value: undefined, done: true});
			  return asyncReturn ? asyncReturn.call(jsonIterable) : Promise.resolve({ value: undefined, done: true });
			};

			return jsonIterable 
		}else{
			const result = await fetchResult.json();
			return result;
		}

	}
}
