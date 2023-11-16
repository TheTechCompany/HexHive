import { JwksClient } from 'jwks-rsa'
import { Router, json } from 'express';
import { verify } from 'jsonwebtoken';
import { GraphQLSchema, print } from 'graphql'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { GraphQLUpload, graphqlUploadExpress } from 'graphql-upload'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { stitchSchemas } from '@graphql-tools/stitch'
import { HashType } from './directives/hash'
import schema, { ACL_Schema } from './schema';
import { graphqlHTTP } from './handler';
import { DateResolver, DateTimeResolver, GraphQLJSON, GraphQLJSONObject } from 'graphql-scalars';
import { AbilityBuilder, buildMongoQueryMatcher, createMongoAbility } from '@casl/ability'
import { $and, and, $or, or } from '@ucast/mongo2js';
import { DocumentCondition } from '@ucast/core';

const $expr = {
	type: 'document',
	validate(instruction: any, value: any) {
		if (value == null || typeof value !== 'boolean') {
			throw new Error(`"$${instruction.name}" expects to receive a boolean`)
		}
	},
	parse(instruction: any, schema: any) {
		return new DocumentCondition(instruction.name, schema);
	}
};
const expr = (condition: DocumentCondition<any>, object: any) => {
	return condition.value //(object)
};

const conditionsMatcher = buildMongoQueryMatcher({ $and, $or, $expr }, { and, or, expr });

export interface GraphResource {
	name: string; //Name of resource in GraphQL
	fields?: string[]; //Optional list of fields to use for condition builder
	actions: string[]; //Action verbs that can be used with this resource
}

export interface HiveGraphOptions {
	rootServer: string;
	schema: GraphQLSchema | { typeDefs: any, resolvers: any };

	resources: GraphResource[];

	contextFactory?: (context: any) => any;
	dev?: boolean;
	uploads?: boolean;
}

export class HiveGraph {

	private dev: boolean;

	private router: Router;

	private rootServer?: string;

	private scalarSchema: GraphQLSchema;

	private schema: GraphQLSchema;

	private resources: GraphResource[];

	private jwksClient?: JwksClient;

	private keys?: string[] = [];

	private contextFactory?: (context: any) => any;

	constructor(options: HiveGraphOptions) {
		this.rootServer = options.rootServer;
		this.dev = options.dev || false

		this.resources = options.resources || [];

		this.contextFactory = options.contextFactory;
		this.schema = new GraphQLSchema({})

		this.scalarSchema = makeExecutableSchema({
			typeDefs: `
				scalar Upload
				scalar JSON
				scalar JSONObject
			`,
			resolvers: {
				Upload: GraphQLUpload,
				JSON: GraphQLJSON,
				JSONObject: GraphQLJSONObject
			}
		})

		if (options.schema instanceof GraphQLSchema) {
			this.schema = stitchSchemas({ subschemas: [options.schema, this.scalarSchema] });
		} else {
			const { typeDefs, resolvers = {} } = options.schema;

			console.log('=> HiveGraph: Setting up schema')

			let ScalarTypes: any = {}
			if (options.uploads) ScalarTypes['Upload'] = GraphQLUpload;
			ScalarTypes['JSON'] = GraphQLJSON
			ScalarTypes['JSONObject'] = GraphQLJSONObject

			const mergedTypeDefs = mergeTypeDefs([
				schema({ uploads: options.uploads || false }),
				typeDefs
			])

			const mergedResolvers = mergeResolvers([
				resolvers,
				{
					Hash: HashType,
					DateTime: DateTimeResolver,
					Date: DateResolver,
					...ScalarTypes
				},
				{
					Query: {
						_sdl: () => print(mergedTypeDefs),
						_resources: () => this.resources
					}
				}
			])
			console.log('=> HiveGraph: Merged TypeDefs')

			this.schema = makeExecutableSchema({
				typeDefs: mergeTypeDefs([mergedTypeDefs, ACL_Schema]),
				resolvers: mergedResolvers
			})

			console.log(`=> HiveGraph : Schema setup`)
		}

		this.jwksClient = new JwksClient({
			jwksUri: `${this.rootServer}/.well-known/jwks.json`
		})

		this.router = Router()
	}

	get isDev() {
		return process.env.NODE_ENV === 'development' || this.dev
	}

	async init() {
		await this.getRootConfiguration()

		if (this.schema) {
			this.router.use(json());
			if (!this.isDev) this.router.use('/graphql', this.isAuthenticated.bind(this))
			this.router.use(
				'/graphql',
				graphqlUploadExpress({ maxFileSize: 10 * 1024 * 1024, maxFiles: 20 }),
				graphqlHTTP(this.schema, this.contextFactory)
			)
		}
	}


	definePermissions(user: { permissions: { policies: { effect: string, verbs: string[], resource: string, conditions?: string }[] }[] }) {

		const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

		user?.permissions?.map((perm) => {
			perm.policies.map((policy) => {
				policy.verbs.map((verb) => {
					if (policy.effect == 'Allow') {
						can(verb, policy.resource, policy.conditions ? JSON.parse(policy.conditions) : undefined)
					} else if (policy.effect == 'Deny') {
						cannot(verb, policy.resource, policy.conditions ? JSON.parse(policy.conditions) : undefined)
					}
				})

			})
		})

		return build({ conditionsMatcher })
	}

	isAuthenticated(req: any, res: any, next: any) {
		const hiveJwt = req.headers["x-hive-jwt"]?.toString();

		const gatewayUrl = req.headers['x-hive-gateway']?.toString();

		if (hiveJwt) {
			const verified = verify(
				hiveJwt,
				this.keys?.[0] || '',
				{ algorithms: ["RS256"] }
			);

			(req as any).token = hiveJwt;

			(req as any).gatewayUrl = gatewayUrl;

			(req as any).jwt = {
				...(verified as any || {}),
				id: (verified as any)?.sub || (verified as any)?.id,
				acl: this.definePermissions(verified as any)
			};

			next();
		} else {
			res.send({ error: "No JWT" });
		}
	}

	async getRootConfiguration() {
		const keys = await this.jwksClient?.getSigningKeys()
		this.keys = keys?.map((x) => x.getPublicKey())
	}

	get middleware() {
		return this.router
	}

}
