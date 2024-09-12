import { Permission, Role } from "./access"
import { Organisation } from "./organisation"

export interface User {
    id: string

    name: string

    email: string
    password: string

    inactive: boolean //User marked as do not trust by system

    organisations: Trust[];
}

export interface Trust {
    id: string

    trust: User;

    issuer: Organisation

    type: string //@default("User")

    accepted: boolean //has User accepted this relationship

    inactive: boolean //has Organisation removed this relationship

    roles: Role[]
    permissions: Permission[]

    createdAt: Date
}