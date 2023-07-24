import { PrismaClient } from "@hexhive/data";
import { nanoid } from 'nanoid'
import { disconnect } from "process";
import { sendInvite } from "../../email";
import jwt from 'jsonwebtoken';

export default (prisma: PrismaClient) => {
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
			verb: String
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
				const trusts = await prisma.userTrust.findMany({
					where: {
						trustId: root.id,
						issuerId: context?.jwt?.organisation
					},
					include: {
						roles: true
					}
				})
				return trusts.map((x) => x.roles).reduce((prev, curr) => prev.concat(curr), [])
			}
		},
		HiveOrganisation: {
			members: async (root: any) => {

				const members = await prisma.user.findMany({where: {organisations: {some: {issuer: {id: root.id}}}}})
				return members;
			},
			applications: async (root: any, args: any, context: any) => {
				//Add route for checking rbac
				const applications = await prisma.application.findMany({
					where: {
						users: {
							some: {id: root.id}
						},
						usedInRoles: {
							some: {
								usedBy: {
									some: {trustId: context?.jwt?.id}
								}
							}
						}
					}
				})

				return applications;
			}
		},
		Query: {
			people: async (root: any, args: any, context: any) => {
				return await prisma.user.findMany({
					where: {
						organisations: {
							some: {issuerId: context?.jwt?.organisation || context?.user?.organisation}, 
						},
						// inactive: false
					},
					include: {
						organisations: true
					}
				})
			},
			permissions: async (root: any, args: any, context: any) => {
				return await prisma.permission.findMany({
					where: {
						id: args.input.ids ? {in: args.input.ids} : undefined,
						organisation: {
							id: context.jwt.organisation
						}
					},
					include: {
						policies: true,
						scope: true
					}
				});
			},
			roles: async (root: any, args: any, context: any) => {
				return await prisma.role.findMany({
					where: {organisation: {id: context.jwt.organisation}},
					include: {
						applications: true,
						permissions: true
					}
				});
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
			users: async (root: any, args: any, context: any) => {
				let query : any = {};
				if(args.ids){
					query.id = {in: args.ids}
				}
				if(args.active) query.inactive = false;
				
				const users = await prisma.user.findMany({
					where: {
						organisations: {
							some: {issuerId: context?.jwt?.organisation || context?.user?.organisation}, 
						},
						...query
					},
					include: {
						organisations: true
					}
				})

				if(args.ids){
					return args.ids.map((id: string) => users.find((a: any) => a.id == id))?.map((x: any) => ({...x, email: x.email || ''}))
				}else{
					return users?.map((x: any) => ({...x, email: x.email || ''}));
				}
			}
		
		},
		Mutation: {
			createUserTrust: async (root: any, args: any, context: any) => {

				let existingUser = await prisma.user.findFirst({
					where: {
						email: args.input.email
					}
				});

				const currentOrg = await prisma.organisation.findFirst({where: {id: context?.jwt?.organisation}})
				if(!currentOrg) throw new Error("Not authorized to invite new users");

				let user = {id: existingUser?.id}
				if(!user.id){
					user.id = nanoid();
					await prisma.user.create({
						data: {
							id: user.id,
							email: args.input.email,
							name: args.input.name,
							inactive: true
						}
					})
				}

				await prisma.userTrust.create({
					data: {
						id: nanoid(),
						issuerId: context.jwt.organisation,
						trustId: user.id,
						accepted: false,
						roles: {
							connect: args.input.roles?.map((x: any) => ({id: x})) || []
						},
						permissions: {
							connect: args.input.permissions?.map((x: any) => ({id: x})) || []
						}
					}
				})

				const token = jwt.sign({
					id: user.id
				}, 'sECRET')
				//Send transactional emails
				if(!existingUser){
					//Send invite to HexHive with organisation invite
					await sendInvite({
						to: args.input.email,
						receiver: args.input.name,
						sender: currentOrg.name,
						type: args.input.type,
						link: `https://go.hexhive.io/join/${currentOrg.id}?token=${token}`
					})
				}else{
					//Send invite to HexHive org to existing user
					await sendInvite({
						to: args.input.email,
						receiver: args.input.name,
						sender: currentOrg.name,
						type: args.input.type,
						link: `https://go.hexhive.io/join/${currentOrg.id}?token=${token}`
					})
				}

				return user;
			},
			updateUserTrust: async (root: any, args: any, context: any) => {

				const {id: userId, organisations} = await prisma.user.findFirst({
					where: {
						id: args.id,
						organisations: {
							some: {
								issuerId: context?.jwt?.organisation
							}
						}
					},
					include: {
						organisations: true
					}
				}) || {};

				if(!userId) throw new Error("No userId found");


				let update : any = {};

				if(args.input.roles){
					update['roles'] = {
						set: args.input.roles.map((x: string) => ({id: x}))
					}
				}


				if(args.input.permissions){
					update['permissions'] = {
						set: args.input.permissions.map((x: string) => ({id: x}))
					}
				}


				if(args.input.inactive != null){
					update['inactive'] =  args.input.inactive;

			
				}

				await prisma.userTrust.update({
					where: {
						trustId_issuerId: {
							trustId: args.id,
							issuerId: context?.jwt?.organisation
						}
					},
					data: update
				})

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
				// 		name: args.input.name,
				// 		email: args.input.email,
				// 		password: args.input.password,
				// 		inactive: args.input.inactive
					
				// 	}
				// })
			},
			createRole: async (root: any, args: any, context: any) => {
				return await prisma.role.create({
					data: {
						id: nanoid(),
						name: args.input.name,
						permissions: {
							connect: args.input.permissions?.map((x: string) => ({id: x}))
						},
						applications: {
							connect: args.input.applications.map((x: string) => ({id: x}))
						},
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
						name: args.input.name,
						permissions: {
							set: args.input.permissions?.map((x: string) => ({id: x}))
						},
						applications: {
							set: args.input.applications?.map((x: string) => ({id: x}))
						}
					}
				})
			},
			deleteRole: async (root: any, args: any, context: any) => {
				return await prisma.role.delete({where: {id: args.id}});
			},
			createPermission: async (root: any, args: any, context: any) => {
				return await prisma.permission.create({
					data: {
						id: nanoid(),
						name: args.input.name,
						
						organisation: {
							connect: {id: context.jwt.organisation}
						}
					}
				})
			},
			updatePermission: async (root: any, args: any, context: any) => {
				return await prisma.permission.update({
					where: {id: args.id},
					data: {
						name: args.input.name,
						scopeId: args.input.scopeId
						// applications: {
						// 	set: args.input.applications.map((x: string) => ({id: x}))
						// }
					}
				})
			},
			deletePermission: async (root: any, args: any, context: any) => {
				return await prisma.permission.delete({where: {id: args.id}});
			},
			createPermissionPolicy: async (root: any, args: any, context: any) => {
				const perm = await prisma.permission.findFirst({
					where: {
						id: args.permission,
						organisationId: context?.jwt?.organisation
					}
				})
				if(!perm) throw new Error("Not allowed");

				return await prisma.permissionPolicy.create({
					data: {
						id: nanoid(),
						name: args.input?.name || '',
						verbs: args.input?.verbs,
						resource: args.input?.resource,
						effect: args.input?.effect,
						conditions: args.input?.conditions,
						usedInPermissions: {
							connect: {
								id: perm.id
							}
						},
						organisationId: context?.jwt?.organisation
						
					}
				})
			},
			updatePermissionPolicy: async (root: any, args: any, context: any) => {
				const perm = await prisma.permission.findFirst({
					where: {
						id: args.permission,
						organisationId: context?.jwt?.organisation
					}
				})
				if(!perm) throw new Error("Not allowed");

				return await prisma.permissionPolicy.update({
					where: {
						id: args.id
					},
					data: {
						name: args.input?.name,
						verbs: args.input?.verbs,
						resource: args.input?.resource,
						effect: args.input?.effect,
						conditions: args.input?.conditions,
					}
				})
			},
			deletePermissionPolicy: async (root: any, args: any, context: any) => {
				const perm = await prisma.permission.findFirst({
					where: {
						id: args.permission,
						organisationId: context?.jwt?.organisation
					}
				})
				if(!perm) throw new Error("Not allowed");

				return await prisma.permissionPolicy.delete({
					where: {id: args.id}
				})
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