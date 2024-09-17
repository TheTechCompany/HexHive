import { Permission, Role } from "./access"
import { Organisation } from "./organisation"

export interface Application {
    id: string
    name: string

    slug: string

    publicKey: string

    backend_url: string

    entrypoint: string
    staging_entrypoint?: string

    users: Organisation[]
    usedInRoles: Role[]
    usedInPermissions: Permission[]

    serviceAccounts: ApplicationServiceAccount[]
}

export interface ApplicationChallenge {
    id: string;

    challenge: string;

    application: Partial<Application>;
}

//Investigate deletion, required for doing what for applications?
export interface ApplicationServiceAccount {
    id: string
    name: string
    apiKey: string

    application: Application
}