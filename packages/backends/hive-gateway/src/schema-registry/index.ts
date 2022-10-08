import { GraphQLSchema, buildSchema } from "graphql";
import { remoteExecutor } from "./executor";
import { stitchSchemas, ValidationLevel } from "@graphql-tools/stitch";
import { introspectSchema, wrapSchema } from "@graphql-tools/wrap";
import { Router } from 'express'
import { getGraphQLParameters, processRequest, renderGraphiQL, sendResult, shouldRenderGraphiQL } from 'graphql-helix'
import { KeyManager } from "../keys";
import { DefaultContext, envelop, Maybe, useLazyLoadedSchema, useTiming } from '@envelop/core'
import { stitchingDirectives } from "@graphql-tools/stitching-directives";

const { stitchingDirectivesTransformer } = stitchingDirectives()

export interface SchemaEndpoint {
	url: string;
	key: string;
	provides?: string[];
	status?: 'available' | 'unavailable' | 'error';
}

export interface SchemaRegistryOptions {
	initialEndpoints?: SchemaEndpoint[];
	internalSchema: GraphQLSchema;
	keyManager: (payload: any) => any;
}
export class SchemaRegistry {
	
	private endpoints : SchemaEndpoint[] = []
	private schemas : {[key: string]: {schema: GraphQLSchema, executor: any}} = {}

	private mergedSchema?: GraphQLSchema;

	private internalSchema : GraphQLSchema;

	private keyManager: (payload: any) => any;

	private server: Router;

	private getEnveloped: Function;

	constructor(opts: SchemaRegistryOptions){
		this.endpoints = opts.initialEndpoints || []
		this.schemas = {};

		this.keyManager = opts.keyManager

		this.internalSchema = opts.internalSchema;

		this.server = Router()

		this.getEnveloped = envelop({
			plugins: [
				useLazyLoadedSchema(this.getLazySchema.bind(this)),
				// useTiming()
			],
			
		})

		this.initRouter()
	}

	initRouter(){
		this.server.use('/', async (req, res) => {

			const { parse, validate, contextFactory, execute, schema } = this.getEnveloped({req})


			const request = {
				body: req.body,
				headers: req.headers,
				method: req.method,
				query: req.query
			}

			if(shouldRenderGraphiQL(request)){
				return res.send(renderGraphiQL())
			}else{
				const { operationName, query, variables } = getGraphQLParameters(request)

				const result = await processRequest({
					operationName,
					query,
					variables,
					request,
					schema,
					parse,
					validate,
					contextFactory: async (executionContext) => {
						const context = await contextFactory(executionContext)
						return {
							context,
							user: req.user,
							jwt: (req as any).jwt
						}
					},
					execute
				})

				if(result.type == "PUSH"){

				
					res.writeHead(200, {
						'Content-Type': 'text/event-stream',
						// Connection: 'keep-alive',
						'Cache-Control': 'no-cache'
					});

					// setInterval(() => {
					// 	res.write('data: {}')
					// }, 1000)

					req.socket.on('close', () => {
						console.log("Connection close socket")
						result.unsubscribe();
					})


					await result.subscribe((result) => {
						console.log("Subscription result", result);
						res.write(`data: ${JSON.stringify(result)}`);
					})
				}else{
					// console.log(result.type, result);

					sendResult(result, res)
				}

			}
		})
	}

	get graphEndpoints(){
		return this.endpoints
	}

	public addEndpoint(url: string, key: string){
		this.endpoints.push({url, key})
	}

	public async reload(){
		await Promise.all(this.endpoints.map(async (endpoint, ix) => {
			try{
				const schema = await this.loadSchema(endpoint.key)
				if(schema) this.schemas[endpoint.key] = {
					schema,
					executor: remoteExecutor(endpoint.url, this.keyManager)
				}
				
				this.endpoints[ix].status = 'available'
				return schema;
			}catch(e){
				this.endpoints[ix].status = 'error'
				console.error(e)
			}
		}))
		await this.updateSchema()
	}

	private async loadSchema(key: string){
		const schema = await this.loadSchemaFromEndpoint(key)
		return schema
	}

	private async loadSchemaFromEndpoint(key: string){
		let endpoint = this.endpoints.find((a) => a.key == key)
		if(!endpoint) return;

		const result = await remoteExecutor(endpoint?.url, this.keyManager)({ document: '{_sdl}'})

		return buildSchema(result.data._sdl)
	}

	getLazySchema(context: any): GraphQLSchema{
		let { query } = context.req
	

		return this.mergedSchema || this.internalSchema
	}

	private updateSchema(){

		const remoteSchemas = Object.keys(this.schemas).filter((a) => this.schemas[a] !== undefined && a).map((schema) => {
			const url = this.endpoints.find((a) => a.key == schema)?.url || '';
			return this.schemas[schema]
			
		})

		const schema = stitchSchemas({
			subschemaConfigTransforms: [stitchingDirectivesTransformer],
			subschemas: [
				{
					schema: this.internalSchema,
				},
				...remoteSchemas
			]
		})

		this.mergedSchema = schema;
	
	}

	middleware(){
		return this.server
	}
}