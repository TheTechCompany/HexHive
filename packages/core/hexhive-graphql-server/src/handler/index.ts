import { GraphQLSchema } from "graphql";
import { getGraphQLParameters, processRequest, renderGraphiQL, sendResult, shouldRenderGraphiQL } from "graphql-helix";

export const graphqlHTTP = (schema: GraphQLSchema, contextFactory?: (context: any) => any) => {
	return async (req: any, res: any, next: any) => {
		const request = {
			body: req.body,
			headers: req.headers,
			method: req.method,
			query: req.query,
		};
		
		// Determine whether we should render GraphiQL instead of returning an API response
		if (shouldRenderGraphiQL(request)) {
			res.send(renderGraphiQL());
		} else {
			// Extract the Graphql parameters from the request
			const { operationName, query, variables } = getGraphQLParameters(request);
		
			// Validate and execute the query
			const result = await processRequest({
				operationName,
				query,
				variables,
				request,
				schema,
				contextFactory: (context) => ({
					...contextFactory?.(context),
					...context,
					...req
				})
			});
		
			// processRequest returns one of three types of results depending on how the server should respond
			// 1) RESPONSE: a regular JSON payload
			// 2) MULTIPART RESPONSE: a multipart response (when @stream or @defer directives are used)
			// 3) PUSH: a stream of events to push back down the client for a subscription
			// The "sendResult" is a NodeJS-only shortcut for handling all possible types of Graphql responses,
			// See "Advanced Usage" below for more details and customizations available on that layer.
			sendResult(result, res);
		}
	}
}