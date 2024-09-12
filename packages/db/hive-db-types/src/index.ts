import * as types from './types';

export interface HiveDBConfig {

}

export interface HiveDB { 
    getApplications: (ids?: string[]) => Promise<types.Application[]>
    createApplication: (application: Partial<types.Application>) => Promise<types.Application>
    updateApplication: (id: string, application: Partial<types.Application>) => Promise<types.Application>
    deleteApplication: (id: string) => Promise<void>

    getOrganisations: (ids?: string[]) => Promise<types.Organisation[]>
    createOrganisation: (application: Partial<types.Organisation>) => Promise<types.Organisation>
    updateOrganisation: (id: string, application: Partial<types.Organisation>) => Promise<types.Organisation>
    deleteOrganisation: (id: string) => Promise<void>

    getUsers: (ids?: string[]) => Promise<types.User[]>
    createUser: (application: Partial<types.User>) => Promise<types.User>
    updateUser: (id: string, application: Partial<types.User>) => Promise<types.Application>
    deleteUser: (id: string) => Promise<void>
}

export type HiveDBFactory = (config?: HiveDBConfig) => HiveDB

export { 
    types
}