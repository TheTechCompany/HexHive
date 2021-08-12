/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export const scalarsEnumsHash: import("gqless").ScalarsEnumsHash = {
  ID: true,
  String: true,
  Boolean: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    UserMany: { __type: "[User]" },
    UserById: { __type: "User" },
    OrganisationMany: { __type: "[Organisation]" },
    OrganisationById: { __type: "Organisation" },
    AppMany: { __type: "[App]" },
    AppById: { __type: "App" },
  },
  mutation: {
    __typename: { __type: "String!" },
    createOrganisation: {
      __type: "Organisation",
      __args: { name: "String", users: "[String]", apps: "[String]" },
    },
    updateOrganisation: {
      __type: "Boolean",
      __args: {
        id: "ID!",
        name: "String",
        users: "[String]",
        apps: "[String]",
      },
    },
    createUser: {
      __type: "User",
      __args: {
        username: "String",
        password: "String",
        name: "String",
        organisation: "String",
      },
    },
    updateUser: {
      __type: "Boolean",
      __args: {
        id: "ID",
        username: "String",
        password: "String",
        name: "String",
        organisation: "String",
      },
    },
    createApp: { __type: "App", __args: { name: "String" } },
    updateApp: { __type: "Boolean", __args: { id: "ID", name: "String" } },
  },
  subscription: {},
  User: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    name: { __type: "String" },
    username: { __type: "String" },
    password: { __type: "String" },
    organisation: { __type: "Organisation" },
  },
  Organisation: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    name: { __type: "String" },
    apps: { __type: "[App]" },
    users: { __type: "[User]" },
  },
  App: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    name: { __type: "String" },
  },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  UserMany?: Maybe<Array<Maybe<User>>>;
  UserById?: Maybe<User>;
  OrganisationMany?: Maybe<Array<Maybe<Organisation>>>;
  OrganisationById?: Maybe<Organisation>;
  AppMany?: Maybe<Array<Maybe<App>>>;
  AppById?: Maybe<App>;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
  createOrganisation: (args?: {
    name?: Maybe<Scalars["String"]>;
    users?: Maybe<Array<Maybe<Scalars["String"]>>>;
    apps?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<Organisation>;
  updateOrganisation: (args: {
    id: Scalars["ID"];
    name?: Maybe<Scalars["String"]>;
    users?: Maybe<Array<Maybe<Scalars["String"]>>>;
    apps?: Maybe<Array<Maybe<Scalars["String"]>>>;
  }) => Maybe<ScalarsEnums["Boolean"]>;
  createUser: (args?: {
    username?: Maybe<Scalars["String"]>;
    password?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    organisation?: Maybe<Scalars["String"]>;
  }) => Maybe<User>;
  updateUser: (args?: {
    id?: Maybe<Scalars["ID"]>;
    username?: Maybe<Scalars["String"]>;
    password?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    organisation?: Maybe<Scalars["String"]>;
  }) => Maybe<ScalarsEnums["Boolean"]>;
  createApp: (args?: { name?: Maybe<Scalars["String"]> }) => Maybe<App>;
  updateApp: (args?: {
    id?: Maybe<Scalars["ID"]>;
    name?: Maybe<Scalars["String"]>;
  }) => Maybe<ScalarsEnums["Boolean"]>;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

export interface User {
  __typename: "User" | undefined;
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  username?: Maybe<ScalarsEnums["String"]>;
  password?: Maybe<ScalarsEnums["String"]>;
  organisation?: Maybe<Organisation>;
}

export interface Organisation {
  __typename: "Organisation" | undefined;
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  apps?: Maybe<Array<Maybe<App>>>;
  users?: Maybe<Array<Maybe<User>>>;
}

export interface App {
  __typename: "App" | undefined;
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  User: User;
  Organisation: Organisation;
  App: App;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "User"
  | "Organisation"
  | "App";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
