import { GraphQLSchema } from "graphql";
import { remoteExecutor } from "./executor";
import { introspectSchema } from "@graphql-tools/wrap"
import { GraphQLServer } from "@hexhive/express-graphql";
import { stitchSchemas } from "@graphql-tools/stitch";

export interface SchemaEndpoint {
	url: string;
	key: string;
	status?: 'available' | 'unavailable' | 'error';
}

export interface SchemaRegistryOptions {
	initialEndpoints?: SchemaEndpoint[];
}
export class SchemaRegistry {
	
	private endpoints : SchemaEndpoint[] = []
	private schemas : {[key: string]: GraphQLSchema} = {}

	private server: GraphQLServer;

	constructor(opts: SchemaRegistryOptions){
		this.endpoints = opts.initialEndpoints || []
		this.schemas = {};

		this.server = new GraphQLServer({})
	}

	public addEndpoint(url: string, key: string){
		this.endpoints.push({url, key})
	}

	public async getSchema(key: string){
		if(this.schemas[key]){
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
		return await introspectSchema(remoteExecutor(endpoint?.url))
	}

	private updateSchema(){
		const schema = stitchSchemas({
			subschemas: Object.keys(this.schemas).map((x) => this.schemas[x]),
		})

		this.server.setSchema(schema)
	}

	middleware(){
		return this.server.http({})
	}
}