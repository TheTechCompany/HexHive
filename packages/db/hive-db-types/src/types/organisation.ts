import { Trust } from "./user"
import { Permission, PermissionPolicy, Role } from "./access"
import { Application } from "./application"

export interface Organisation {
    id: string
    name: string

    trustsUsers: Trust[]

    apiKeys: APIKey[]

    roles: Role[]
    applications: Application[]
    permissions: Permission[]
    policies: PermissionPolicy[]
}

export interface APIKey {
    id: string
    
    name: string
    apiKey: string

    organisation: Organisation
}
