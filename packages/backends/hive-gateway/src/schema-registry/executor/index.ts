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
			console.log({substring})
			console.log({typeof: typeof(data), substring})
			let jsonData = JSON.parse(`${substring}`);
			console.log("CHUNK", jsonData)

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

		console.time('Start query ' + id)
		console.log("Before response", {id, query})
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

	
		console.timeEnd('Start query ' + id)

			// console.log("After fetch")

		if(isStream){
			console.log("IS STREAM");

			// const iterable = {
			// 	[Symbol.asyncIterator]: () => ({
			// 		next: () => fetchResult.body.
			// 	})
			// }
			// fetchResult.body
		

			const initialIterator = fetchResult.body[Symbol.asyncIterator]();
			const initialReturn = initialIterator.return;

			const jsonIterable = generateJsonIterable(initialIterator);

			const asyncReturn = jsonIterable.return;

			jsonIterable.return = () => {
				console.log("Async Cancel")
				controller.abort()
				initialReturn ? initialReturn.call(initialIterator) : Promise.resolve({value: undefined, done: true});
			  return asyncReturn ? asyncReturn.call(jsonIterable) : Promise.resolve({ value: undefined, done: true });
			};

			return jsonIterable //generateJsonIterable(fetchResult.body);

			// for await (const chunk of fetchResult.body){
			// 	console.log("CHUNK OF STREAM", chunk.toString())
			// 	return JSON.parse(chunk.toString())
			// }
			// return fetchResult.body
		}else{
			const result = await fetchResult.json();
			return result;
		}

		// 	try{
		// 		// response = await fetchResult.json();

		// 		for await (const chunk of fetchResult.body){
		// 			let data = chunk;
		// 			console.dir("Chunk " + data)
		// 			response += data
		// 		}
		// 	}catch(e){
		// 		console.log("ERROR");
		// 	}
			
		// 	// console.log("After response")

		
		// 	// console.log("HAS", {response})
			
	
		// return JSON.parse(response || '{}') //await fetchResult.json() as any
	}
}
