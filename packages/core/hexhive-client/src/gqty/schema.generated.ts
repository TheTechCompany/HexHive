/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface RoleInput {
  name?: InputMaybe<Scalars["String"]>;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  ID: true,
  String: true,
};
export const generatedSchema = {
  HiveAppliance: {
    __typename: { __type: "String!" },
    description: { __type: "String" },
    id: { __type: "ID!" },
    label: { __type: "String" },
    name: { __type: "String!" },
    permissions: { __type: "[Permission!]!" },
    services: { __type: "[HiveService!]!" },
    types: { __type: "[HiveType!]!" },
  },
  HiveApplianceConfiguration: {
    __typename: { __type: "String!" },
    appliance: { __type: "HiveAppliance" },
    id: { __type: "ID!" },
    key: { __type: "String" },
    organisation: { __type: "HiveOrganisation" },
    permissions: { __type: "[HiveTypePermission!]!" },
  },
  HiveIntegration: {
    __typename: { __type: "String!" },
    description: { __type: "String" },
    id: { __type: "ID!" },
    name: { __type: "String" },
  },
  HiveIntegrationInstance: {
    __typename: { __type: "String!" },
    appliances: { __type: "[HiveAppliance!]!" },
    config: { __type: "String" },
    connections: { __type: "[HiveIntegrationPath!]!" },
    id: { __type: "ID!" },
    integration: { __type: "HiveIntegration" },
    isRunning: { __type: "Boolean" },
    name: { __type: "String" },
    organisation: { __type: "HiveOrganisation" },
  },
  HiveIntegrationPath: {
    __typename: { __type: "String!" },
    collections: { __type: "[HiveIntegrationPathCollection]" },
    connectionBlob: { __type: "String" },
    id: { __type: "ID!" },
    instance: { __type: "HiveIntegrationInstance" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveIntegrationPathCollection: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
  },
  HiveOrganisation: {
    __typename: { __type: "String!" },
    appliances: { __type: "[HiveAppliance!]!" },
    id: { __type: "ID!" },
    integrations: { __type: "[HiveIntegrationInstance!]!" },
    members: { __type: "[HiveUser!]!" },
    name: { __type: "String" },
    roles: { __type: "[Role!]!" },
    subscriptions: { __type: "[HiveApplianceConfiguration!]!" },
  },
  HiveService: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
  },
  HiveType: {
    __typename: { __type: "String!" },
    fields: { __type: "[HiveTypeField!]!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    usedIn: { __type: "[HiveAppliance!]!" },
  },
  HiveTypeField: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveTypePermission: {
    __typename: { __type: "String!" },
    configuration: { __type: "HiveApplianceConfiguration" },
    create: { __type: "Boolean" },
    delete: { __type: "Boolean" },
    id: { __type: "ID!" },
    read: { __type: "Boolean" },
    type: { __type: "String" },
    update: { __type: "Boolean" },
  },
  HiveUser: {
    __typename: { __type: "String!" },
    email: { __type: "String" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    organisation: { __type: "HiveOrganisation" },
    password: { __type: "String" },
    roles: { __type: "[Role!]!" },
  },
  Permission: {
    __typename: { __type: "String!" },
    action: { __type: "String" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    roles: { __type: "[Role!]!" },
    scope: { __type: "String" },
  },
  Role: {
    __typename: { __type: "String!" },
    appliances: { __type: "[HiveAppliance!]!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    organisation: { __type: "HiveOrganisation" },
    permissions: { __type: "[Permission!]!" },
  },
  RoleInput: { name: { __type: "String" } },
  mutation: {
    __typename: { __type: "String!" },
    createRole: { __type: "Role", __args: { input: "RoleInput" } },
    deleteRole: { __type: "Role", __args: { id: "ID" } },
    empty: { __type: "String" },
    updateRole: { __type: "Role", __args: { id: "ID", input: "RoleInput" } },
  },
  query: {
    __typename: { __type: "String!" },
    empty: { __type: "String" },
    hiveAppliances: { __type: "[HiveAppliance!]!" },
    organisation: { __type: "HiveOrganisation" },
    users: { __type: "[HiveUser]", __args: { ids: "[ID]" } },
  },
  subscription: {},
} as const;

export interface HiveAppliance {
  __typename?: "HiveAppliance";
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  label?: Maybe<ScalarsEnums["String"]>;
  name: ScalarsEnums["String"];
  permissions: Array<Permission>;
  services: Array<HiveService>;
  types: Array<HiveType>;
}

export interface HiveApplianceConfiguration {
  __typename?: "HiveApplianceConfiguration";
  appliance?: Maybe<HiveAppliance>;
  id: ScalarsEnums["ID"];
  key?: Maybe<ScalarsEnums["String"]>;
  organisation?: Maybe<HiveOrganisation>;
  permissions: Array<HiveTypePermission>;
}

export interface HiveIntegration {
  __typename?: "HiveIntegration";
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveIntegrationInstance {
  __typename?: "HiveIntegrationInstance";
  appliances: Array<HiveAppliance>;
  config?: Maybe<ScalarsEnums["String"]>;
  connections: Array<HiveIntegrationPath>;
  id: ScalarsEnums["ID"];
  integration?: Maybe<HiveIntegration>;
  isRunning?: Maybe<ScalarsEnums["Boolean"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  organisation?: Maybe<HiveOrganisation>;
}

export interface HiveIntegrationPath {
  __typename?: "HiveIntegrationPath";
  collections?: Maybe<Array<Maybe<HiveIntegrationPathCollection>>>;
  connectionBlob?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  instance?: Maybe<HiveIntegrationInstance>;
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveIntegrationPathCollection {
  __typename?: "HiveIntegrationPathCollection";
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveOrganisation {
  __typename?: "HiveOrganisation";
  appliances: Array<HiveAppliance>;
  id: ScalarsEnums["ID"];
  integrations: Array<HiveIntegrationInstance>;
  members: Array<HiveUser>;
  name?: Maybe<ScalarsEnums["String"]>;
  roles: Array<Role>;
  subscriptions: Array<HiveApplianceConfiguration>;
}

export interface HiveService {
  __typename?: "HiveService";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveType {
  __typename?: "HiveType";
  fields: Array<HiveTypeField>;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  usedIn: Array<HiveAppliance>;
}

export interface HiveTypeField {
  __typename?: "HiveTypeField";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveTypePermission {
  __typename?: "HiveTypePermission";
  configuration?: Maybe<HiveApplianceConfiguration>;
  create?: Maybe<ScalarsEnums["Boolean"]>;
  delete?: Maybe<ScalarsEnums["Boolean"]>;
  id: ScalarsEnums["ID"];
  read?: Maybe<ScalarsEnums["Boolean"]>;
  type?: Maybe<ScalarsEnums["String"]>;
  update?: Maybe<ScalarsEnums["Boolean"]>;
}

export interface HiveUser {
  __typename?: "HiveUser";
  email?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  organisation?: Maybe<HiveOrganisation>;
  password?: Maybe<ScalarsEnums["String"]>;
  roles: Array<Role>;
}

export interface Permission {
  __typename?: "Permission";
  action?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  roles: Array<Role>;
  scope?: Maybe<ScalarsEnums["String"]>;
}

export interface Role {
  __typename?: "Role";
  appliances: Array<HiveAppliance>;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  organisation?: Maybe<HiveOrganisation>;
  permissions: Array<Permission>;
}

export interface Mutation {
  __typename?: "Mutation";
  createRole: (args?: { input?: Maybe<RoleInput> }) => Maybe<Role>;
  deleteRole: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Role>;
  empty?: Maybe<ScalarsEnums["String"]>;
  updateRole: (args?: {
    id?: Maybe<Scalars["ID"]>;
    input?: Maybe<RoleInput>;
  }) => Maybe<Role>;
}

export interface Query {
  __typename?: "Query";
  empty?: Maybe<ScalarsEnums["String"]>;
  hiveAppliances: Array<HiveAppliance>;
  organisation?: Maybe<HiveOrganisation>;
  users: (args?: {
    ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  }) => Maybe<Array<Maybe<HiveUser>>>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  HiveAppliance: HiveAppliance;
  HiveApplianceConfiguration: HiveApplianceConfiguration;
  HiveIntegration: HiveIntegration;
  HiveIntegrationInstance: HiveIntegrationInstance;
  HiveIntegrationPath: HiveIntegrationPath;
  HiveIntegrationPathCollection: HiveIntegrationPathCollection;
  HiveOrganisation: HiveOrganisation;
  HiveService: HiveService;
  HiveType: HiveType;
  HiveTypeField: HiveTypeField;
  HiveTypePermission: HiveTypePermission;
  HiveUser: HiveUser;
  Mutation: Mutation;
  Permission: Permission;
  Query: Query;
  Role: Role;
  Subscription: Subscription;
}
export type SchemaObjectTypesNames =
  | "HiveAppliance"
  | "HiveApplianceConfiguration"
  | "HiveIntegration"
  | "HiveIntegrationInstance"
  | "HiveIntegrationPath"
  | "HiveIntegrationPathCollection"
  | "HiveOrganisation"
  | "HiveService"
  | "HiveType"
  | "HiveTypeField"
  | "HiveTypePermission"
  | "HiveUser"
  | "Mutation"
  | "Permission"
  | "Query"
  | "Role"
  | "Subscription";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
