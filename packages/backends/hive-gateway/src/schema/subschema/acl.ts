import { PrismaClient } from "@prisma/client";
import { nanoid } from 'nanoid'

export default (prisma: PrismaClient) => {
	const typeDefs = `

		extend type Query {
			organisation: HiveOrganisation @merge(keyField: "id", keyArg: "ids")

			users(ids: [ID]): [HiveUser] @merge(keyField: "id", keyArg: "ids")

			roles(ids: [ID]): [Role] @merge(keyField: "id", keyArg:"ids")
		}

		type Mutation {
			createRole(input: RoleInput): Role
			updateRole(id: ID, input: RoleInput): Role
			deleteRole(id: ID): Role
		}

		type HiveOrganisation {
			id: ID! 
			name: String

			roles: [Role!]!
			members: [HiveUser!]! 

			applications: [HiveAppliance!]! 
			integrations: [HiveIntegrationInstance!]! 

			subscriptions: [HiveApplianceConfiguration!]!

		}


		type HiveUser  {
			id: ID! 
			name: String
			
			email: String
			password: String

			roles: [Role!]! 
			organisation: HiveOrganisation
		}


		type HiveApplianceConfiguration {
			id: ID! 
			key: String

			permissions: [HiveTypePermission!]! 

			appliance: HiveAppliance 
			organisation: HiveOrganisation 
		}

		input RoleInput {
			name: String
		}

		type Role {
			id: ID! 
			name: String

			appliances: [HiveAppliance!]! 
			permissions: [Permission!]! 
			organisation: HiveOrganisation 
		}

		type HiveTypePermission {
			id: ID! 
			type: String

			create: Boolean
			read: Boolean
			update: Boolean
			delete: Boolean

			configuration: HiveApplianceConfiguration
		}

		type Permission {
			id: ID! 
			name: String

			action: String
			scope: String

			roles: [Role!]! 
		}
		
	`

	const resolvers = {
		HiveOrganisation: {
			members: async (root: any) => {

				const members = await prisma.user.findMany()
				return members;
			}
		},
		Query: {
			roles: async (root: any, args: any, context: any) => {
				return await prisma.role.findMany({where: {organisation: {id: context.jwt.organisation}}});
			},
			organisation: async (root: any, args: any, context: any) => {

				const org = await prisma.organisation.findFirst({
					where: {
						id: context.user.organisation
					},
					include: {
						applications: true
					}
				})

				return org;
				// console.log({context})
				// const result = await pool.query(
				// 	`SELECT * FROM organisation WHERE id=$1`,
				// 	[context.user.organisation]
				// )
				// console.log({rows: result.rows})

				// const res = result?.rows?.[0];

				// return {
				// 	...res,
				// 	members: res.users?.map((x: any) => ({id: x}))
				// }

				// return result.rows?.[0].map((x) => ({
				// 	...x,
				// 	members: x.users.map((y: any) => ({id: y}))
				// }))
			},
			users: async () => {
				const users = await prisma.user.findMany()
		
				return users;
			}
		
		},
		Mutation: {
			createRole: async (root: any, args: any, context: any) => {
				return await prisma.role.create({
					data: {
						id: nanoid(),
						name: args.input.name,
						organisation: {
							connect: {id: context.jwt.organisation}
						}
					}
				})
			},
			updateRole: async (root: any, args: any, context: any) => {
				return await prisma.role.update({
					where: {id: args.id},
					data: {
						name: args.input.name
					}
				})
			},
			deleteRole: async (root: any, args: any, context: any) => {
				return await prisma.role.delete({where: {id: args.id}});
			}
		}
	}

	return {typeDefs, resolvers}
}

/*
extend type Mutation {
		inviteHiveUser(name: String, email: String): String
	}

	type HiveOrganisation @auth(rules: [
		{operations: [READ], where: {id: "$jwt.organisation"}},
		{operations: [UPDATE, DELETE], bind: {id: "$jwt.organisation"}}
	]) {
		id: ID! 
		name: String

		roles: [Role!]! @relationship(type: "USES_ROLE", direction: OUT)
		members: [HiveUser!]! @relationship(type: "TRUSTS", direction: OUT)

		appliances: [HiveAppliance!]! @relationship(type: "USES_APP", direction: OUT)
		integrations: [HiveIntegrationInstance!]! @relationship(type: "USES_INTEGRATION", direction: OUT)

		subscriptions: [HiveApplianceConfiguration!]! @relationship(type: "HAS_APP_CONFIG", direction: OUT)

	}


	type HiveApplianceConfiguration @auth(rules: [
		{operations: [READ, UPDATE], where: {organisation: {id: "$jwt.organisation"}}},
		{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
	]) {
		id: ID! 
		key: String

		permissions: [HiveTypePermission!]! @relationship(type: "HAS_TYPE_PERMISSION", direction: OUT)

		appliance: HiveAppliance @relationship(type: "HAS_APP", direction: OUT)

		organisation: HiveOrganisation @relationship(type: "HAS_APP_CONFIG", direction: IN)
	}

	type HiveTypePermission @auth(rules: [
		{operations: [READ, UPDATE], where: {configuration: { organisation: {id: "$jwt.organisation" }}} },
		{operations: [UPDATE, DELETE], bind: {configuration: { organisation: {id: "$jwt.organisation" }}} }
	]) {
		id: ID! 
		type: String

		create: Boolean
		read: Boolean
		update: Boolean
		delete: Boolean

		configuration: HiveApplianceConfiguration @relationship(type: "HAS_TYPE_PERMISSION", direction: IN)
	}


	type HiveUser @auth(rules: [
		{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
		{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
	]) {
		id: ID! 
		name: String
		username: String
		password: String
		roles: [Role!]! @relationship(type: "HAS_ROLE", direction: OUT)
		organisation: HiveOrganisation @relationship(type: "TRUSTS", direction: IN)
	}

	type Role  @auth(rules: [
		{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
		{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
	]) {
		id: ID! 
		name: String

		appliances: [HiveAppliance!]! @relationship(type: "USES_APP", direction: OUT)
		permissions: [Permission!]! @relationship(type: "USES_PERMISSION", direction: OUT)
		organisation: HiveOrganisation @relationship(type: "USES_ROLE", direction: IN)
	}


	type Permission {
		id: ID! 
		name: String

		action: String
		scope: String

		roles: [Role!]! @relationship(type: "USES_PERMISSION", direction: IN)
	}
*/