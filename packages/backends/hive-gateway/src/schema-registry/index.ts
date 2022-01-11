import { GraphQLSchema } from "graphql";
import { remoteExecutor } from "./executor";
import { GraphQLServer } from "@hexhive/express-graphql";
import { stitchSchemas, ValidationLevel } from "@graphql-tools/stitch";
import { mergeSchemas } from '@graphql-tools/merge'
import { introspectSchema } from "@graphql-tools/wrap";
import { Router } from 'express'
import { getGraphQLParameters, processRequest, renderGraphiQL, sendResult, shouldRenderGraphiQL } from 'graphql-helix'
import { KeyManager } from "../keys";
import { DefaultContext, envelop, Maybe, useLazyLoadedSchema, useTiming } from '@envelop/core'

export interface SchemaEndpoint {
	url: string;
	key: string;
	status?: 'available' | 'unavailable' | 'error';
}

export interface SchemaRegistryOptions {
	initialEndpoints?: SchemaEndpoint[];
	internalSchema: GraphQLSchema;
	keyManager: (payload: any) => any;
}
export class SchemaRegistry {
	
	private endpoints : SchemaEndpoint[] = []
	private schemas : {[key: string]: GraphQLSchema} = {}

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
				useTiming()
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
				res.send(renderGraphiQL())
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

				sendResult(result, res)
			}
		})
	}

	get graphEndpoints(){
		return this.endpoints
	}

	public addEndpoint(url: string, key: string){
		this.endpoints.push({url, key})
	}

	public async getSchema(key: string){
		if(this.schemas[key] !== undefined){
			return this.schemas[key]
		}
		const schema = await this.loadSchema(key)
		if(schema){
			this.schemas[key] = schema
			return schema
		}
	}

	public async reload(){
		await Promise.all(this.endpoints.map(async (endpoint, ix) => {
			try{
				const schema = await this.loadSchema(endpoint.key)
				if(schema) this.schemas[endpoint.key] = schema;
				this.endpoints[ix].status = 'available'
				return schema;
			}catch(e){
				this.endpoints[ix].status = 'error'
				console.error(e)
			}
		}))
		this.updateSchema()
	}

	private async loadSchema(key: string){
		const schema = await this.loadSchemaFromEndpoint(key)
		return schema
	}

	private async loadSchemaFromEndpoint(key: string){
		let endpoint = this.endpoints.find((a) => a.key == key)
		if(!endpoint) return;
		return await introspectSchema(remoteExecutor(endpoint?.url, this.keyManager))
	}

	getLazySchema(context: any): GraphQLSchema{
		// console.log({schemas: this.schemas})

		let { query } = context.req
		
		if(query.appliance){
			const url = this.endpoints.find((a) => a.key == query.appliance)?.url || ''
			const preSchema = this.schemas[query.appliance]

			if(!preSchema) return this.internalSchema;
			const schema = stitchSchemas({
				subschemas: [
					{
						schema: preSchema,
						executor: remoteExecutor(url, this.keyManager)
					}
				]
			})
			return schema
		}

		return this.internalSchema
	}

	private updateSchema(){

		// const getEnveloped = 


		// const keys = Object.keys(this.schemas)

		// const remoteSchemas = Object.keys(this.schemas).filter((a) => this.schemas[a] !== undefined && a).map((x) => {
		// 	const url = this.endpoints.find((a) => a.key == x)?.url || ''
		// 	console.log(url, this.schemas[x] instanceof GraphQLSchema)
		// 	return {
		// 		schema: this.schemas[x], 
		// 		executor: remoteExecutor(url, this.keyManager),
				
		// 	}
		// })

		// console.log("Update", this.endpoints.find((a) => keys.indexOf(a.key) > -1))
		// const schema = stitchSchemas({
		// 	subschemas: [ {
		// 		schema: this.internalSchema, 
				
		// 	}, ...remoteSchemas],
		// 	typeMergingOptions: {
		// 		// validationSettings: {
		// 		// 	validationLevel: ValidationLevel.Off
		// 		// }

		// 		// inputFieldConfigMerger: (candidates) => {
		// 		// 	console.log(candidates.map((a) => a.inputFieldConfig))
		// 		// 	return candidates[candidates.length - 1].inputFieldConfig
		// 		// }
		// 	}
		// 	// typeMergingOptions: {
		// 	// 	validationSettings: {
		// 	// 		validationLevel: ValidationLevel.Off,
		// 	// 	}
			
		// 	// }
		// })

		// // const merged = mergeSchemas({schemas: [schema]})

		// //this.internalSchema,

		// const {schema} = getEnveloped()
		// this.server.setSchema(schema) //mergeSchemas({schemas: [schema, this.internalSchema]}))
	}

	middleware(){
		return this.server
	}
}