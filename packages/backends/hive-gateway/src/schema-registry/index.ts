import { GraphQLSchema, buildSchema } from "graphql";
import { remoteExecutor } from "./executor";
import { stitchSchemas } from "@graphql-tools/stitch";
import { Router } from 'express'
import { getGraphQLParameters, processRequest, renderGraphiQL, sendResult, shouldRenderGraphiQL } from 'graphql-helix'
import { envelop, useLazyLoadedSchema } from '@envelop/core'
import { stitchingDirectives } from "@graphql-tools/stitching-directives";
import { Application } from "@hexhive/data";
import nodemailer from 'nodemailer'
import { HiveDB } from '@hexhive/db-types'

const { stitchingDirectivesTransformer } = stitchingDirectives()

export interface SchemaEndpoint extends Application {
	// provides?: string[];
	status?: 'available' | 'unavailable' | 'error';
}

export type SchemaFactory = (db: HiveDB, schemas: { [key: string]: {schema: GraphQLSchema, acl: any[]} }, transporter?: nodemailer.Transporter ) => GraphQLSchema;

export interface SchemaRegistryOptions {
	initialEndpoints?: SchemaEndpoint[];
	transporter?: nodemailer.Transporter;
	schemaFactory?: SchemaFactory;
	keyManager: (payload: any) => any;
	db: HiveDB;
}
export class SchemaRegistry {
	
	private endpoints : SchemaEndpoint[] = []
	private schemas : {[key: string]: {schema: GraphQLSchema, executor: any, acl: any[]}} = {}

	private mergedSchema?: GraphQLSchema;

	// private internalSchema : GraphQLSchema;
	private schemaFactory?: SchemaFactory

	private transporter?: nodemailer.Transporter;

	private keyManager: (payload: any) => any;

	private server: Router;

	private getEnveloped: Function;

	private db : HiveDB;

	constructor(opts: SchemaRegistryOptions){
		this.endpoints = opts.initialEndpoints || []
		this.schemas = {};

		this.db = opts.db;

		this.keyManager = opts.keyManager

		// this.internalSchema = opts.internalSchema;
		this.schemaFactory = opts.schemaFactory;

		this.transporter = opts.transporter;

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

						console.log({user: req.user, jwt: (req as any).jwt})
						return {
							context,
							user: req.user,
							jwt: req.user
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

	public getSchemaList(){
		return this.schemas;
	}

	public async reload(){
		
		this.endpoints = (await this.db.getApplications()) as any[]
		
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
	

		return this.mergedSchema || this.schemaFactory?.(this.db, this.schemas, this.transporter)
	}

	private updateSchema(){

		const remoteSchemas = Object.keys(this.schemas).filter((a) => this.schemas[a] !== undefined && a).map((schema) => {
			const url = this.endpoints.find((a) => a.id == schema)?.backend_url || '';
			return this.schemas[schema]	
		})

		const internalSchema = this.schemaFactory?.(this.db, this.schemas, this.transporter);

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