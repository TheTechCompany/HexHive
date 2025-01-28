import * as types from './types';

export interface HiveDBConfig {

}

export interface HiveDB { 
    getApplications: (ids?: string[]) => Promise<types.Application[]>
    getApplicationByPublicKey: (publicKey: string) => Promise<types.Application>;
    getApplicationBySlug: (slug: string) => Promise<types.Application>;
    createApplication: (application: Partial<types.Application>) => Promise<types.Application>
    updateApplication: (id: string, application: Partial<types.Application>) => Promise<types.Application>
    deleteApplication: (id: string) => Promise<void>

    createApplicationChallenge: (publicKey: string, challenge: string, application: Partial<types.Application>) => Promise<types.ApplicationChallenge>
    getApplicationChallenge: (publicKey: string, challengeId: string, challenge: string) => Promise<types.ApplicationChallenge>;

    getOrganisations: (ids?: string[]) => Promise<types.Organisation[]>
    getOrganisationUsers: (ids: string[], organisationId: string) => Promise<types.User[]>;
    getOrganisationApplications: (id: string) => Promise<types.Application[]>;

    getApplicationServiceAccountByKey: (apiKey: string) => Promise<types.ApplicationServiceAccount>;

    getAPIKeysByOrganisation: (organisationId: string) => Promise<types.APIKey[]>;
    getAPIKeyByKey: (apiKey: string) => Promise<types.APIKey>;
    createAPIKey: (name: string, roles: string[], organisationId: string) => Promise<types.APIKey>;
    updateAPIKey: (id: string, name: string, roles: string[], organisationId: string) => Promise<types.APIKey>;
    deleteAPIKey: (id: string, organisationId: string) => Promise<void>;

    createOrganisation: (application: Partial<types.Organisation>) => Promise<types.Organisation>
    updateOrganisation: (id: string, application: Partial<types.Organisation>) => Promise<types.Organisation>
    deleteOrganisation: (id: string) => Promise<void>

    authenticateUser: (username: string, password: string) => Promise<types.User>; //username and password provided in cleartext, returns one User or throws an error
    getUsers: (ids?: string[]) => Promise<types.User[]>
    getUsersByEmail: (emails: string[]) => Promise<types.User[]>
    getUserRoles: (id: string, organisationId: string) => Promise<types.Role[]>
    getUserApplications: (id: string, organisationId: string) => Promise<types.Application[]>
    createUser: (user: Partial<types.User>) => Promise<types.User>
    updateUser: (id: string, user: Partial<types.User>) => Promise<types.User>
    deleteUser: (id: string) => Promise<void>

    //Trust relationships should be audited
    createTrust: (email: string, type: string, issuingUserId: string, organisationId: string, roles: string[], permissions: string[]) => Promise<types.Trust>;
    updateTrust: (id: string, type: string, modifierUserId: string, organisationId: string, roles: string[], permissions: string[], inactive: boolean) => Promise<types.Trust>
    acceptTrust: (id: string, organisation: string) => Promise<void>;

    getRoles: (ids: string[], organisationId: string) => void;
    createRole: (name: string, permissions: string[], applications: string[], organisationId: string) => void;
    updateRole: (id: string, name: string, permissions: string[], applications: string[], organisationId: string) => void;
    deleteRole: (id: string, organisationId: string) => void;
    
    getPermissions: (ids: string[], organisationId: string) => void;
    createPermission: (name: string, organisationId: string) => void;
    updatePermission: (id: string, name: string, scopeId: string, organisationId: string) => void;
    deletePermission: (id: string, organisationId: string) => void;

    createPermissionPolicy: (permissionId: string, name: string, verbs: string[], resource: string, effect: string, conditions: any, organisationId: string) => void;
    updatePermissionPolicy: (id: string, permissionId: string, name: string, verbs: string[], resource: string, effect: string, conditions: any, organisationId: string)  => void;
    deletePermissionPolicy: (id: string, permissionId: string, organisationId: string) => void;

}

export type HiveDBFactory = (config?: HiveDBConfig) => HiveDB

export { 
    types
}