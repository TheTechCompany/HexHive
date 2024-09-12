import { Trust } from "./user"
import { Application } from "./application"
import { Organisation } from "./organisation"


export interface Role {
    id: string
    name: string

    applications: Application[]
    permissions: Permission[]

    usedBy: Trust[]

    organisation: Organisation
}

export interface Permission {
    id: string
    name: string

    scope: Application
    policies: PermissionPolicy[]

    usedInRoles: Role[]
    usedInTrust: Trust[]

    organisation: Organisation
}

export interface PermissionPolicy {
    id: string
    name: string

    verbs: string[]
    resource?: string
    conditions?: any,
    effect: string //Allow | Deny

    usedInPermissions?: Permission[]

    organisation: Organisation
}