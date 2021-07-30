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
  Date: any;
}

export interface ProjectInput {
  _id?: Maybe<Scalars["ID"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  files?: Maybe<Array<Maybe<FileInput>>>;
  status?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
}

export interface FileInput {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  mimeType?: Maybe<Scalars["String"]>;
}

export const scalarsEnumsHash: import("gqless").ScalarsEnumsHash = {
  ID: true,
  String: true,
  Date: true,
  Float: true,
  Boolean: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    ProjectById: { __type: "Project", __args: { id: "ID" } },
    ProjectMany: {
      __type: "[Project]",
      __args: { status: "String", startDate: "Date", endDate: "Date" },
    },
    FileMany: { __type: "[File]" },
    FileByProject: { __type: "[File]", __args: { id: "String" } },
    QuoteById: { __type: "Quote", __args: { id: "ID" } },
    QuoteMany: {
      __type: "[Quote]",
      __args: { status: "String", startDate: "Date", endDate: "Date" },
    },
  },
  mutation: {
    __typename: { __type: "String!" },
    addProject: { __type: "Project", __args: { project: "ProjectInput" } },
    updateProject: {
      __type: "Project",
      __args: { id: "String", project: "ProjectInput" },
    },
    removeFileFromProject: {
      __type: "Boolean",
      __args: { project: "String", id: "String" },
    },
    updateFile: {
      __type: "File",
      __args: { id: "String", name: "String", status: "String" },
    },
    updateFiles: {
      __type: "[File]",
      __args: { ids: "[String]", status: "String" },
    },
    removeProject: { __type: "Boolean" },
  },
  subscription: {},
  Project: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    name: { __type: "String" },
    files: { __type: "[File]" },
    status: { __type: "String" },
    startDate: { __type: "Date" },
    endDate: { __type: "Date" },
  },
  File: {
    __typename: { __type: "String!" },
    _id: { __type: "ID" },
    id: { __type: "String" },
    cid: { __type: "String" },
    name: { __type: "String" },
    extension: { __type: "String" },
    mimeType: { __type: "String" },
    timestamp: { __type: "Date" },
    status: { __type: "String" },
    owner: { __type: "User" },
  },
  User: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    name: { __type: "String" },
  },
  Quote: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    name: { __type: "String" },
    customer: { __type: "String" },
    date: { __type: "Date" },
    status: { __type: "String" },
    price: { __type: "Float" },
  },
  ProjectInput: {
    _id: { __type: "ID" },
    id: { __type: "String" },
    name: { __type: "String" },
    files: { __type: "[FileInput]" },
    status: { __type: "String" },
    startDate: { __type: "Date" },
    endDate: { __type: "Date" },
  },
  FileInput: {
    id: { __type: "ID" },
    name: { __type: "String" },
    extension: { __type: "String" },
    mimeType: { __type: "String" },
  },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  ProjectById: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Project>;
  ProjectMany: (args?: {
    status?: Maybe<Scalars["String"]>;
    startDate?: Maybe<Scalars["Date"]>;
    endDate?: Maybe<Scalars["Date"]>;
  }) => Maybe<Array<Maybe<Project>>>;
  FileMany?: Maybe<Array<Maybe<File>>>;
  FileByProject: (args?: {
    id?: Maybe<Scalars["String"]>;
  }) => Maybe<Array<Maybe<File>>>;
  QuoteById: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Quote>;
  QuoteMany: (args?: {
    status?: Maybe<Scalars["String"]>;
    startDate?: Maybe<Scalars["Date"]>;
    endDate?: Maybe<Scalars["Date"]>;
  }) => Maybe<Array<Maybe<Quote>>>;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
  addProject: (args?: { project?: Maybe<ProjectInput> }) => Maybe<Project>;
  updateProject: (args?: {
    id?: Maybe<Scalars["String"]>;
    project?: Maybe<ProjectInput>;
  }) => Maybe<Project>;
  removeFileFromProject: (args?: {
    project?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["String"]>;
  }) => Maybe<ScalarsEnums["Boolean"]>;
  updateFile: (args?: {
    id?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    status?: Maybe<Scalars["String"]>;
  }) => Maybe<File>;
  updateFiles: (args?: {
    ids?: Maybe<Array<Maybe<Scalars["String"]>>>;
    status?: Maybe<Scalars["String"]>;
  }) => Maybe<Array<Maybe<File>>>;
  removeProject?: Maybe<ScalarsEnums["Boolean"]>;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

export interface Project {
  __typename: "Project" | undefined;
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  files?: Maybe<Array<Maybe<File>>>;
  status?: Maybe<ScalarsEnums["String"]>;
  startDate?: Maybe<ScalarsEnums["Date"]>;
  endDate?: Maybe<ScalarsEnums["Date"]>;
}

export interface File {
  __typename: "File" | undefined;
  _id?: Maybe<ScalarsEnums["ID"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  cid?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  extension?: Maybe<ScalarsEnums["String"]>;
  mimeType?: Maybe<ScalarsEnums["String"]>;
  timestamp?: Maybe<ScalarsEnums["Date"]>;
  status?: Maybe<ScalarsEnums["String"]>;
  owner?: Maybe<User>;
}

export interface User {
  __typename: "User" | undefined;
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface Quote {
  __typename: "Quote" | undefined;
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  customer?: Maybe<ScalarsEnums["String"]>;
  date?: Maybe<ScalarsEnums["Date"]>;
  status?: Maybe<ScalarsEnums["String"]>;
  price?: Maybe<ScalarsEnums["Float"]>;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  Project: Project;
  File: File;
  User: User;
  Quote: Quote;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "Project"
  | "File"
  | "User"
  | "Quote";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
