import { HiveDB, HiveDBFactory } from "@hexhive/db-types";
import { types } from '@hexhive/db-types';
import { nanoid } from "nanoid";
import crypto from 'crypto'
// const { Application, Organisation, User } = types;

export const HiveDBMemory : HiveDBFactory = (config) => {

    let applicationChallenges : types.ApplicationChallenge[] = [];
    let applications : types.Application[] = [];

    let organisations : types.Organisation[] = [];
    let users : types.User[] = [];

    let trusts : types.Trust[] = [];

    let permissions : types.Permission[] = [];
    let roles : types.Role[] = [];
    let permissionPolicies : types.PermissionPolicy[] = [];

    let db : HiveDB = {
        getOrganisationUsers: async (ids: string[], id) => {
            let trust_bonds = trusts.filter((trust) => trust.issuer.id == id && !trust.inactive && trust.accepted);
            return users.filter((a) => trust_bonds?.findIndex((b) => b.trust.id == a.id) > -1);
        },
        getApplications: async function (ids?: string[]): Promise<types.Application[]> {
            if (ids) {
                return applications.filter((a) => ids?.indexOf(a.id) > -1);
            }
            return applications;
        },
        createApplication: async function (application: Partial<types.Application>): Promise<types.Application> {
            let newApplication: any = { id: nanoid(), ...application };
            applications.push(newApplication);
            return newApplication;
        },
        updateApplication: async function (id: string, application: Partial<types.Application>): Promise<types.Application> {
            let ix = applications.findIndex((app) => app.id == id);
            if (ix < -1) throw new Error("No application found");
            let app = applications[ix];
            app = { ...app, ...application };
            applications[ix] = app;
            return app;
        },
        deleteApplication: async function (id: string): Promise<void> {
            let ix = applications.findIndex((app) => app.id == id);
            if (ix < -1) throw new Error("No application found");
            applications.splice(ix, 1);
        },
        getOrganisations: async function (ids?: string[]): Promise<types.Organisation[]> {
            if (ids) {
                return organisations.filter((a) => ids?.indexOf(a.id) > -1);
            }
            return organisations;
        },
        createOrganisation: function (organisation: Partial<types.Organisation>): Promise<types.Organisation> {
            let newOrganisation: any = { id: nanoid(), ...organisation };
            organisations.push(newOrganisation);
            return newOrganisation;
        },
        updateOrganisation: function (id: string, organisation: Partial<types.Organisation>): Promise<types.Organisation> {
            let ix = organisations.findIndex((org) => org.id == id);
            if (ix < -1) throw new Error("No organisation found");
            let org: any = organisations[ix];
            org = { ...org, ...organisation };
            organisations[ix] = org;
            return org;
        },
        deleteOrganisation: async (id: string) => {
            let ix = organisations.findIndex((org) => org.id == id);
            if (ix < -1) throw new Error("No organisation found");
            organisations.splice(ix, 1);
        },
        getUsers: async (ids?: string[]): Promise<types.User[]> => {
            if (ids) {
                return users.filter((a) => ids?.indexOf(a.id) > -1);
            }
            return users;
        },
        createUser: async (user: Partial<types.User>): Promise<types.User> => {
            let newUser: any = { id: nanoid(), ...user };
            users.push(newUser);
            return newUser;
        },
        updateUser: async (id: string, user: Partial<types.User>): Promise<types.User> => {
            let ix = users.findIndex((user) => user.id == id);
            if (ix < -1) throw new Error("No user found");
            let u: any = users[ix];
            u = { ...u, ...user };
            users[ix] = u;
            return u;
        },
        deleteUser: async (id: string): Promise<void> => {
            let ix = users.findIndex((user) => user.id == id);
            if (ix < -1) throw new Error("No user found");
            users.splice(ix, 1);
        },
        getOrganisationApplications: function (id: string): Promise<types.Application[]> {
            throw new Error("Function not implemented.");
        },
        authenticateUser: function (username: string, password: string): Promise<types.User> {
            const pass = crypto.createHash('sha256').update(password).digest('hex');

            return users.find((a) => a.email == username && a.password == pass) as any;
        },
        getUserRoles: async (id: string, organisationId: string): Promise<types.Role[]> => {
            const user = users.find((user) => user.id == id);

            return roles.filter((role) => {
                role.organisation.id == organisationId
            }).filter((role) => {
                return true;
            }) as any
        },
        getUserApplications: async (id: string, organisationId: string): Promise<types.Application[]> => {
            // throw new Error("Function not implemented.");
            return applications;
        },
        createTrust: function (email: string, userId: string, organisationId: string, roles: string[], permissions: string[]): Promise<types.Trust> {
            let newTrust : types.Trust = {
                id: nanoid(),
                type: 'User',
                accepted: true,
                inactive: false,
                createdAt: new Date(),
                issuer: organisations.find((org) => org.id == organisationId) as any,
                trust: users.find((user) => user.email == email) as any,
                roles: roles as any,
                permissions: permissions as any
            }
            trusts.push(newTrust)
            return newTrust as any;
        },
        updateTrust: function (id: string, userId: string, organisationId: string, roles: string[], permissions: string[], inactive: boolean): Promise<types.Trust> {
            let ix = trusts.findIndex((trust) => trust.id == id);
            trusts[ix] = {
                ...trusts[ix],
                roles: roles as any,
                permissions: permissions as any,
                inactive
            }
            return trusts[ix] as any
        },
        getRoles: async (ids: string[], organisationId: string) => {
            return roles.filter((role) => {
                if(ids && ids.length > 0){
                    return ids.indexOf(role.id) > -1
                }
                return true;
            }).filter((role) => role.organisation.id == organisationId) as any
        },
        createRole: async (name: string, permissions: string[], applications: string[], organisationId: string) => {
            
            let newRole : types.Role = {
                id: nanoid(),
                name,
                permissions: permissions as any,
                applications: applications as any,
                organisation: organisations.find((org) => org.id == organisationId) as any
            } as any;

            roles.push(newRole);
            return newRole;
        },
        updateRole: function (id: string, name: string, permissions: string[], applications: string[], organisationId: string): void {
            let ix = roles.findIndex((role) => role.id == id && role.organisation.id == organisationId);

            roles[ix] = {
                ...roles[ix],
                name,
                permissions: permissions as any,
                applications: applications as any,
            }
        },
        deleteRole: async (id: string, organisationId: string) => {
            let ix = roles.findIndex((role) => role.id == id);
            roles.splice(ix, 1)
        },
        getPermissions: async (ids: string[], organisationId: string) => {
            return permissions.filter((perm) => perm.organisation.id == organisationId)
        },
        createPermission: function (name: string, organisationId: string): void {
            let newPermission : types.Permission = {
                id: nanoid(),
                name,
                organisation: organisations.find((org) => org.id == organisationId) as any
            } as any
            permissions.push(newPermission)
            return newPermission as any
        },
        updatePermission: function (id: string, name: string, scopeId: string, organisationId: string): void {
            let ix = permissions.findIndex((perm) => perm.id == id && perm.organisation.id == organisationId);
            permissions[ix] = {
                ...permissions[ix],
                name
            }
            return permissions[ix] as any;
        },
        deletePermission: function (id: string, organisationId: string): void {
            let ix = permissions.findIndex((perm) => perm.id == id && perm.organisation.id == organisationId);
            permissions.splice(ix, 1)
        },
        createPermissionPolicy: function (permissionId: string, name: string, verbs: string[], resource: string, effect: string, conditions: any, organisationId: string): void {
            let newPermissionPolicy : types.PermissionPolicy = {
                id: nanoid(),
                name,
                verbs,
                resource,
                effect,
                conditions,
                organisation: organisations.find((org) => org.id == organisationId) as any
            }
            permissionPolicies.push(newPermissionPolicy)
            return newPermissionPolicy as any;
        },
        updatePermissionPolicy: function (id: string, permissionId: string, name: string, verbs: string[], resource: string, effect: string, conditions: any, organisationId: string): void {
            let ix = permissionPolicies.findIndex((perm) => perm.id == id && perm.organisation.id == organisationId);
            permissionPolicies[ix] = {
                ...permissionPolicies[ix],
                name,
                verbs,
                resource,
                effect,
                conditions
            }
            return permissionPolicies[ix] as any;
        },
        deletePermissionPolicy: function (id: string, permissionId: string, organisationId: string): void {
            let ix = permissionPolicies.findIndex((permissionPolicy) => permissionPolicy.id == id && permissionPolicy.organisation.id == organisationId);
            permissionPolicies.splice(ix, 1)
        },
        getApplicationByPublicKey: function (publicKey: string): Promise<types.Application> {
            return applications.find((app) => app.publicKey == publicKey) as any;
        },
        getApplicationBySlug: function (slug: string): Promise<types.Application> {
            return applications.find((app) => app.slug == slug) as any;
        },
        createApplicationChallenge: function (publicKey: string, challenge: string, application: Partial<types.Application>): Promise<types.ApplicationChallenge> {
            let newChallenge = {
                id: nanoid(),
                challenge,
                application: {
                    ...application,
                    publicKey
                }
            }
            applicationChallenges.push(newChallenge)
            return newChallenge as any;
        },
        getApplicationChallenge: function (publicKey: string, challengeId: string, _challenge: string): Promise<types.ApplicationChallenge> {
            return applicationChallenges.find((challenge) => {
                return challenge.application.publicKey == publicKey && challenge.id == challengeId && challenge.challenge == _challenge
            }) as any;
        }
    }
    return db;
} 