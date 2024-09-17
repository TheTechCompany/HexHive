import { PrismaClient } from "@hexhive/data";
import { nanoid } from 'nanoid'
import { disconnect } from "process";
import { sendInvite } from "../../email";
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer'
import { HiveDB } from "@hexhive/db-types";

export default (db: HiveDB, transporter?: nodemailer.Transporter) => {
	const typeDefs = `

		extend type Query {
			organisation: HiveOrganisation @merge(keyField: "id", keyArg: "ids")

			users(ids: [ID], active: Boolean): [HiveUser] @merge(keyField: "id", keyArg: "ids")

			people: [Person]

			permissions(ids: [ID]): [Permission] @merge(keyField: "id", keyArg: "ids")
			roles(ids: [ID]): [Role] @merge(keyField: "id", keyArg:"ids")
		}

		type Mutation {
			createUserTrust(input: UserTrustInput): HiveUser
			updateUserTrust(id: ID, input: UserTrustInput): HiveUser

			createRole(input: RoleInput): Role
			updateRole(id: ID, input: RoleInput): Role
			deleteRole(id: ID): Role

			createPermission(input: PermissionInput): Permission
			updatePermission(id: ID, input: PermissionInput): Permission
			deletePermission(id: ID): Permission

			createPermissionPolicy(permission: ID, input: PermissionPolicyInput): PermissionPolicy
			updatePermissionPolicy(permission: ID, id: ID, input: PermissionPolicyInput): PermissionPolicy
			deletePermissionPolicy(permission: ID, id: ID): PermissionPolicy
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

		input UserTrustInput {
			id: ID

			name: String
			type: String

			email: String

			inactive: Boolean

			roles: [String]
			permissions: [String]
		}

		type Person {
			id: ID

			displayId: String

			name: String
		}


		type HiveUser  {
			id: ID! 

			displayId: String

			name: String
			
			email: String
			password: String

			inactive: Boolean

			roles: [Role]
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

			permissions: [String]
			applications: [String]
		}

		type Role {
			id: ID! 
			name: String

			applications: [HiveAppliance!]
			permissions: [Permission!] 
			organisation: HiveOrganisation 
		}

		input PermissionInput {
			name: String
			scopeId: String
		}

		type Permission {
			id: ID
			name: String

			policies: [PermissionPolicy]

			scope: HiveAppliance
		}

		input PermissionPolicyInput {
			name: String
			resource: String
			verbs: [String]
			effect: String
			conditions: JSON
		}
		type PermissionPolicy {
			id: ID
			name: String
			resource: String
			verbs: [String]
			effect: String
			conditions: JSON		
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

	
	`

	const resolvers = {
		HiveUser: {
			roles: async (root: any, args: any, context: any) => {
				return await db.getUserRoles(root.id, context?.jwt?.organisation)
			}
		},
		HiveOrganisation: {
			members: async (root: any) => {
				return await db.getOrganisationUsers([], root.id)
			},
			applications: async (root: any, args: any, context: any) => {
				//Gets the applications that the organisation has installed that are also accessible by this user privilege

				//Add route for checking rbac
				
				//Get org applications
				//Get roles user is in for org
				//Get applications that are compatible with that role
				const applications = await db.getOrganisationApplications(context?.jwt?.organisation)

				const roles = await db.getUserRoles(context?.jwt?.id, context?.jwt?.organisation)

				return applications?.filter((application) => {
					return roles?.findIndex((role) => role?.applications?.findIndex((app) => app.id == application.id) > -1) > -1
				})
				
			}
		},
		Query: {
			people: async (root: any, args: any, context: any) => {
				const users = await db.getOrganisationUsers([], context?.jwt?.organisation)
				return users;
				// return await prisma.user.findMany({
				// 	where: {
				// 		organisations: {
				// 			some: {issuerId: context?.jwt?.organisation || context?.user?.organisation}, 
				// 		},
				// 		// inactive: false
				// 	},
				// 	include: {
				// 		organisations: true
				// 	}
				// })
			},
			permissions: async (root: any, args: any, context: any) => {
				return await db.getPermissions(args.ids, context?.jwt?.organisation)
			},
			roles: async (root: any, args: any, context: any) => {
				return await db.getRoles(args.ids, context?.jwt?.organisation)
			},
			organisation: async (root: any, args: any, context: any) => {

				const [org] = await db.getOrganisations([context?.jwt?.organisation])

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
			users: async (root: any, args: any, context: any) => {
				let query : any = {};
				
				let orgQuery : any = {};

				if(args.ids){
					query.id = {in: args.ids}
				}
				
				if(args.active) {
					query.inactive = false;
					orgQuery.inactive = false;
				}

				let users = await db.getOrganisationUsers(args.ids, context?.jwt?.organisation)

				users = users.filter((user) => {
					if(query.inactive == false && user.inactive){
						return false;
					}
					if(orgQuery.inactive == false && user.organisations?.find((a) => a.issuer.id == context?.jwt?.organisation)?.inactive){
						return false;
					}
					return true;
				})
				
				// const users = await prisma.user.findMany({
				// 	where: {
				// 		organisations: {
				// 			some: {
				// 				issuerId: context?.jwt?.organisation || context?.user?.organisation,
				// 				...orgQuery
				// 			}, 
				// 		},
				// 		...query
				// 	},
				// 	include: {
				// 		organisations: true
				// 	}
				// })

				//Inactive users might still show up
				if(args.ids){
					return args.ids.map((id: string) => users.find((a: any) => a.id == id))?.map((x: any) => ({...x, inactive: x.organisations?.find((a: any) => a.issuerId == context?.jwt?.organisation)?.inactive, email: x.email || ''}))
				}else{
					return users?.map((x: any) => ({...x, inactive: x.organisations?.find((a: any) => a.issuerId == context?.jwt?.organisation)?.inactive, email: x.email || ''}));
				}
			}
		
		},
		Mutation: {
			createUserTrust: async (root: any, args: any, context: any) => {

				try{
					const userTrust = await db.createTrust(args.input?.email, context?.jwt?.id, context?.jwt?.organisation, args.input?.roles, args.input?.permissions)
					return userTrust;
				}catch(e){
					console.log(e);
				}
				//If fail invite user

				// if (!user.id) {
				// 	user.id = nanoid();
				// 	const u = await prisma.user.create({
				// 		data: {
				// 			id: user.id,
				// 			email: args.input?.email,
				// 			name: args.input?.name,
				// 			inactive: true
				// 		}
				// 	})
				// 	console.log({ u })
				// }
				
				// const token = jwt.sign({
				// 	id: user.id
				// }, 'sECRET')

				// if(!transporter) throw new Error('No SMTP transporter provided');
				
				// if(user.email){
				// 	//Send transactional emails
				// 	if(!existingUser){
				// 		//Send invite to HexHive with organisation invite
				// 		await sendInvite(
				// 			transporter,
				// 		{
				// 			to: args.input?.email,
				// 			receiver: args.input?.name,
				// 			sender: currentOrg.name,
				// 			type: args.input?.type,
				// 			link: `https://go.hexhive.io/join/${currentOrg.id}?token=${token}`
				// 		})
				// 	}else{
				// 		//Send invite to HexHive org to existing user
				// 		await sendInvite(
				// 			transporter,
				// 		{
				// 			to: args.input?.email,
				// 			receiver: args.input?.name,
				// 			sender: currentOrg.name,
				// 			type: args.input?.type,
				// 			link: `https://go.hexhive.io/join/${currentOrg.id}?token=${token}`
				// 		})
				// 	}

				// }
			},
			updateUserTrust: async (root: any, args: any, context: any) => {

				return await db.updateTrust(args.id, context?.jwt?.id, context?.jwt?.organisation, args.input?.roles, args.input?.permissions, args.input?.inactive)
			

				// return await prisma.user.update({
				// 	where: {
				// 		id: args.id,
				// 		// organisations: {
				// 		// 	some: {
				// 		// 		issuerId: context?.jwt?.organisation || context?.user?.organisation
				// 		// 	}
				// 		// }
				// 	},
				// 	data: {
				// 		name: args.input?.name,
				// 		email: args.input?.email,
				// 		password: args.input?.password,
				// 		inactive: args.input?.inactive
					
				// 	}
				// })
			},
			createRole: async (root: any, args: any, context: any) => {
				return await db.createRole(args.input?.name, args.input?.permissions, args.input?.applications, context?.jwt.organisation)
			},
			updateRole: async (root: any, args: any, context: any) => {
				return await db.updateRole(args.id, args.input?.name, args.input?.permissions, args.input?.applications, context?.jwt?.organisation)
			},
			deleteRole: async (root: any, args: any, context: any) => {
				return await db.deleteRole(args.id, context?.jwt?.organisation)
			},
			createPermission: async (root: any, args: any, context: any) => {
				return await db.createPermission(args.input?.name, context?.jwt.organisation)
			},
			updatePermission: async (root: any, args: any, context: any) => {
				return await db.updatePermission(args.id, args.input?.name, args.input?.scopeId, context?.jwt?.organisation)
			},
			deletePermission: async (root: any, args: any, context: any) => {
				return await db.deletePermission(args.id, context?.jwt?.organisation)
			},
			createPermissionPolicy: async (root: any, args: any, context: any) => {
				return await db.createPermissionPolicy(args.permission, args.input?.name, args.input?.verbs, args.input?.resource, args.input?.effect, args.input?.conditions, context?.jwt?.organisation)
			},
			updatePermissionPolicy: async (root: any, args: any, context: any) => {
				return await db.updatePermissionPolicy(args.id, args.permission, args.input?.name, args.input?.verbs, args.input?.resource, args.input?.effect, args.input?.conditions, context?.jwt?.organisation)
		
			},
			deletePermissionPolicy: async (root: any, args: any, context: any) => {
				return await db.deletePermissionPolicy(args.id, args.permission, context?.jwt?.organisation)
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