import { print } from "graphql"
import { fetch } from "cross-fetch"

export const remoteExecutor = (url: string) => {
	return async ({ document, variables, context }: any) => {
		const query = print(document)

		const fetchResult = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ query, variables, context: {user: context?.user} }),
		})
    
		return fetchResult.json()
 

	}
}
