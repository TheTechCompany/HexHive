import { GraphQLSchema, buildSchema } from "graphql";
import { remoteExecutor } from "./executor";
import { stitchSchemas, ValidationLevel } from "@graphql-tools/stitch";
import { introspectSchema, wrapSchema } from "@graphql-tools/wrap";
import { Router } from 'express'
import { getGraphQLParameters, processRequest, renderGraphiQL, sendResult, shouldRenderGraphiQL } from 'graphql-helix'
import { KeyManager } from "../keys";
import { envelop, useLazyLoadedSchema } from '@envelop/core'
import { stitchingDirectives } from "@graphql-tools/stitching-directives";
import { Application, PrismaClient } from "@hexhive/data";

const { stitchingDirectivesTransformer } = stitchingDirectives()

export interface SchemaEndpoint extends Application {
	// provides?: string[];
	status?: 'available' | 'unavailable' | 'error';
}

export interface SchemaRegistryOptions {
	initialEndpoints?: SchemaEndpoint[];
	schemaFactory?: (prisma: PrismaClient, schemas: { [key: string]: {schema: GraphQLSchema, acl: any[]} } ) => GraphQLSchema;
	keyManager: (payload: any) => any;
	prisma: PrismaClient;
}
export class SchemaRegistry {
	
	private endpoints : SchemaEndpoint[] = []
	private schemas : {[key: string]: {schema: GraphQLSchema, executor: any, acl: any[]}} = {}

	private mergedSchema?: GraphQLSchema;

	// private internalSchema : GraphQLSchema;
	private schemaFactory?: (prisma: PrismaClient, schemas: { [key: string]: {schema: GraphQLSchema, acl: any[]} } ) => GraphQLSchema;

	private keyManager: (payload: any) => any;

	private server: Router;

	private getEnveloped: Function;

	private prisma : PrismaClient;

	constructor(opts: SchemaRegistryOptions){
		this.endpoints = opts.initialEndpoints || []
		this.schemas = {};

		this.prisma = opts.prisma;

		this.keyManager = opts.keyManager

		// this.internalSchema = opts.internalSchema;
		this.schemaFactory = opts.schemaFactory;

		this.server = Router()

		this.getEnveloped = envelop({
			plugins: [
				useLazyLoadedSchema(this.getLazySchema.bind(this) as any),
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

					req.socket.on('close', () => {
						result.unsubscribe();
					})


					await result.subscribe((result) => {
						res.write(`data: ${JSON.stringify(result)}`);
					})
				}else{
					sendResult(result, res)
				}

			}
		})
	}

	get graphEndpoints(){
		return this.endpoints
	}

	// public addEndpoint(url: string, key: string){
	// 	this.endpoints.push({backend_url: url, id: key})
	// }

	public async reload(){
		this.endpoints = await this.prisma.application.findMany({

		});

		await Promise.all(this.endpoints.map(async (endpoint, ix) => {
			try{
				const {schema, acl} = await this.loadSchemaFromEndpoint(endpoint.id) || {}
				console.log({acl})

				if(!endpoint.backend_url) return;
				if(schema) this.schemas[endpoint.id] = {
					schema,
					acl: acl,
					executor: remoteExecutor(endpoint.id, endpoint.backend_url, this.keyManager)
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

	// private async loadSchema(key: string){
	// 	const schema = await this.loadSchemaFromEndpoint(key)
	// 	return schema
	// }

	private async loadSchemaFromEndpoint(id: string){
		let endpoint = this.endpoints.find((a) => a.id == id)
		if(!endpoint) return;
		if(!endpoint.backend_url) return;
		
		const result = await remoteExecutor(endpoint.id, endpoint.backend_url, this.keyManager)({ 
			document: `{
				_sdl
			}`
		})
		
		const aclResult = await remoteExecutor(endpoint.id, endpoint.backend_url, this.keyManager)({ 
			document: `{
				_resources {
					name
					actions
					fields
				}

				__schema {
					types {
					  name
					  kind
					  fields{
						name
						type {
							name
							kind
							ofType {
								name
							}
						}
					  }
					}
				}
			}`
		})

		const schemaTypes = aclResult.data?.__schema?.types?.filter((a: any) => a.kind == 'OBJECT');

		const types = schemaTypes?.filter((a: any) => aclResult.data._resources.map((x: any) => x.name)?.indexOf(a.name) > -1);

		// console.log(types.map((type: any) => type.fields?.filter((a: any) => {
		// 		let fields = aclResult.data._resources.find((a: any) => a.name == type.name).fields
		// 		if(!fields) return true;
		// 		return fields?.indexOf(a.name) > -1
		// 	}).map((x: any) => 
		// 		`${x.name}: ${x.type?.name || (x.type.kind == 'LIST' ? ('[' + x.type?.ofType?.name + ']') : x.type?.ofType?.name ) }`
		// 	)
		// ))
		
		const acl = aclResult?.data?._resources?.map((resource: any) => {
			let type = types?.find((a: any) => a.name == resource.name);
			return {
				...resource,
				fields: type?.fields?.filter((a: any) => {
					let fields = aclResult?.data?._resources?.find((a: any) => a.name == type.name)?.fields
					if(!fields) return true;
					return fields?.indexOf(a.name) > -1
				}).map((x: any) => x.name)
					// ({[x.name]: x.type?.name || (x.type.kind == 'LIST' ? ('[' + x.type?.ofType?.name + ']') : x.type?.ofType?.name )})
				// )
			}
		});

		return {schema: buildSchema(result.data._sdl), acl}
	}

	getLazySchema(context: any): GraphQLSchema | undefined{
		let { query } = context.req
	

		return this.mergedSchema || this.schemaFactory?.(this.prisma, this.schemas)
	}

	private updateSchema(){

		const remoteSchemas = Object.keys(this.schemas).filter((a) => this.schemas[a] !== undefined && a).map((schema) => {
			const url = this.endpoints.find((a) => a.id == schema)?.backend_url || '';
			return this.schemas[schema]	
		})

		const internalSchema = this.schemaFactory?.(this.prisma, this.schemas);

		const schema = stitchSchemas({
			subschemaConfigTransforms: [stitchingDirectivesTransformer],
			subschemas: remoteSchemas.concat(internalSchema ? [{schema: internalSchema}] as any : [])
		})

		this.mergedSchema = schema;
	
	}

	middleware(){
		return this.server
	}
}