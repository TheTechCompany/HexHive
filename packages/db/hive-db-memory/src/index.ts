import { HiveDB, HiveDBFactory } from "@hexhive/db-types";
import { types } from '@hexhive/db-types';
import { nanoid } from "nanoid";
import crypto from 'crypto'
// const { Application, Organisation, User } = types;

export const HiveDBMemory : HiveDBFactory = (config) => {

    let applications : types.Application[] = [];
    let organisations : types.Organisation[] = [];
    let users : types.User[] = [];

    let trusts : types.Trust[] = [];

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
            const pass = crypto.createHash('sha256').update(password).digest('hex')

            return users.find((a) => a.email == username && a.password == pass) as any;
        },
        getUserRoles: function (id: string, organisationId: string): Promise<types.Role[]> {
            throw new Error("Function not implemented.");
        },
        getUserApplications: async (id: string, organisationId: string): Promise<types.Application[]> {
            // throw new Error("Function not implemented.");
            return applications;
        },
        createTrust: function (email: string, userId: string, organisationId: string, roles: string[], permissions: string[]): Promise<types.Trust> {
            throw new Error("Function not implemented.");
        },
        updateTrust: function (id: string, userId: string, organisationId: string, roles: string[], permissions: string[], inactive: boolean): Promise<types.Trust> {
            throw new Error("Function not implemented.");
        },
        getRoles: function (ids: string[], organisationId: string): void {
            throw new Error("Function not implemented.");
        },
        createRole: function (name: string, permissions: string[], applications: string[], organisationId: string): void {
            throw new Error("Function not implemented.");
        },
        updateRole: function (id: string, name: string, permissions: string[], applications: string[], organisationId: string): void {
            throw new Error("Function not implemented.");
        },
        deleteRole: function (id: string, organisationId: string): void {
            throw new Error("Function not implemented.");
        },
        getPermissions: function (ids: string[], organisationId: string): void {
            throw new Error("Function not implemented.");
        },
        createPermission: function (name: string, organisationId: string): void {
            throw new Error("Function not implemented.");
        },
        updatePermission: function (id: string, name: string, scopeId: string, organisationId: string): void {
            throw new Error("Function not implemented.");
        },
        deletePermission: function (id: string, organisationId: string): void {
            throw new Error("Function not implemented.");
        },
        createPermissionPolicy: function (permissionId: string, name: string, verbs: string[], resource: string, effect: string, conditions: any, organisationId: string): void {
            throw new Error("Function not implemented.");
        },
        updatePermissionPolicy: function (id: string, permissionId: string, name: string, verbs: string[], resource: string, effect: string, conditions: any, organisationId: string): void {
            throw new Error("Function not implemented.");
        },
        deletePermissionPolicy: function (id: string, permissionId: string, organisationId: string): void {
            throw new Error("Function not implemented.");
        }
    }
    return db;
} 