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

export interface ScheduleItemInput {
  project?: Maybe<Scalars["String"]>;
  people?: Maybe<Array<Maybe<Scalars["String"]>>>;
  equipment?: Maybe<Array<Maybe<Scalars["String"]>>>;
  notes?: Maybe<Array<Maybe<Scalars["String"]>>>;
  managers?: Maybe<Array<Maybe<Scalars["String"]>>>;
  owner?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["Date"]>;
}

export interface TimelineItemInput {
  timeline?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  project?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<TimelineItemItemsInput>>>;
}

export interface TimelineItemItemsInput {
  type?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  estimate?: Maybe<Scalars["Float"]>;
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
      __args: {
        status: "String",
        statusList: "[String]",
        startDate: "Date",
        endDate: "Date",
      },
    },
    UserMany: { __type: "[User]" },
    FileMany: { __type: "[File]" },
    FileByProject: { __type: "[File]", __args: { id: "String" } },
    QuoteById: { __type: "Quote", __args: { id: "ID" } },
    QuoteMany: {
      __type: "[Quote]",
      __args: { status: "String", startDate: "Date", endDate: "Date" },
    },
    EquipmentById: { __type: "Equipment", __args: { id: "ID" } },
    EquipmentMany: { __type: "[Equipment]", __args: { status: "String" } },
    ScheduleById: { __type: "ScheduleItem", __args: { id: "ID" } },
    ScheduleMany: {
      __type: "[ScheduleItem]",
      __args: { status: "String", startDate: "Date", endDate: "Date" },
    },
    TimelineItemById: { __type: "TimelineItem", __args: { id: "ID" } },
    TimelineItemMany: {
      __type: "[TimelineItem]",
      __args: { timeline: "String", startDate: "Date", endDate: "Date" },
    },
    PeopleById: { __type: "People", __args: { id: "ID" } },
    PeopleMany: { __type: "[People]", __args: { status: "String" } },
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
    createScheduleItem: {
      __type: "ScheduleItem",
      __args: { item: "ScheduleItemInput" },
    },
    updateScheduleItem: {
      __type: "ScheduleItem",
      __args: { id: "String", item: "ScheduleItemInput" },
    },
    removeScheduleItem: { __type: "Boolean", __args: { id: "String" } },
    joinScheduleItem: { __type: "Boolean", __args: { id: "String" } },
    leaveScheduleItem: { __type: "Boolean", __args: { id: "String" } },
    cloneScheduleItem: {
      __type: "Boolean",
      __args: { id: "String", cloneTo: "[Date]" },
    },
    createTimelineItem: {
      __type: "TimelineItem",
      __args: { item: "TimelineItemInput" },
    },
    updateTimelineItem: {
      __type: "TimelineItem",
      __args: { id: "String", item: "TimelineItemInput" },
    },
    removeTimelineItem: { __type: "Boolean", __args: { id: "String" } },
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
    id: { __type: "ID" },
    cid: { __type: "String" },
    name: { __type: "String" },
    extension: { __type: "String" },
    mimeType: { __type: "String" },
    timestamp: { __type: "Date" },
    status: { __type: "String" },
    owner: { __type: "User" },
    url: { __type: "String" },
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
  Equipment: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    name: { __type: "String" },
    registration: { __type: "String" },
    status: { __type: "String" },
  },
  ScheduleItem: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    date: { __type: "Date" },
    project: { __type: "Project" },
    people: { __type: "[String]" },
    managers: { __type: "[String]" },
    owner: { __type: "User" },
    notes: { __type: "[String]" },
    equipment: { __type: "[String]" },
  },
  TimelineItem: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    timeline: { __type: "String" },
    startDate: { __type: "Date" },
    endDate: { __type: "Date" },
    items: { __type: "[TimelineItemItems]" },
    project: { __type: "Project" },
  },
  TimelineItemItems: {
    __typename: { __type: "String!" },
    type: { __type: "String" },
    location: { __type: "String" },
    estimate: { __type: "Float" },
  },
  People: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    name: { __type: "String" },
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
  ScheduleItemInput: {
    project: { __type: "String" },
    people: { __type: "[String]" },
    equipment: { __type: "[String]" },
    notes: { __type: "[String]" },
    managers: { __type: "[String]" },
    owner: { __type: "String" },
    date: { __type: "Date" },
  },
  TimelineItemInput: {
    timeline: { __type: "String" },
    startDate: { __type: "Date" },
    endDate: { __type: "Date" },
    project: { __type: "String" },
    items: { __type: "[TimelineItemItemsInput]" },
  },
  TimelineItemItemsInput: {
    type: { __type: "String" },
    location: { __type: "String" },
    estimate: { __type: "Float" },
  },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  ProjectById: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Project>;
  ProjectMany: (args?: {
    status?: Maybe<Scalars["String"]>;
    statusList?: Maybe<Array<Maybe<Scalars["String"]>>>;
    startDate?: Maybe<Scalars["Date"]>;
    endDate?: Maybe<Scalars["Date"]>;
  }) => Maybe<Array<Maybe<Project>>>;
  UserMany?: Maybe<Array<Maybe<User>>>;
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
  EquipmentById: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Equipment>;
  EquipmentMany: (args?: {
    status?: Maybe<Scalars["String"]>;
  }) => Maybe<Array<Maybe<Equipment>>>;
  ScheduleById: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<ScheduleItem>;
  ScheduleMany: (args?: {
    status?: Maybe<Scalars["String"]>;
    startDate?: Maybe<Scalars["Date"]>;
    endDate?: Maybe<Scalars["Date"]>;
  }) => Maybe<Array<Maybe<ScheduleItem>>>;
  TimelineItemById: (args?: {
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<TimelineItem>;
  TimelineItemMany: (args?: {
    timeline?: Maybe<Scalars["String"]>;
    startDate?: Maybe<Scalars["Date"]>;
    endDate?: Maybe<Scalars["Date"]>;
  }) => Maybe<Array<Maybe<TimelineItem>>>;
  PeopleById: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<People>;
  PeopleMany: (args?: {
    status?: Maybe<Scalars["String"]>;
  }) => Maybe<Array<Maybe<People>>>;
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
  createScheduleItem: (args?: {
    item?: Maybe<ScheduleItemInput>;
  }) => Maybe<ScheduleItem>;
  updateScheduleItem: (args?: {
    id?: Maybe<Scalars["String"]>;
    item?: Maybe<ScheduleItemInput>;
  }) => Maybe<ScheduleItem>;
  removeScheduleItem: (args?: {
    id?: Maybe<Scalars["String"]>;
  }) => Maybe<ScalarsEnums["Boolean"]>;
  joinScheduleItem: (args?: {
    id?: Maybe<Scalars["String"]>;
  }) => Maybe<ScalarsEnums["Boolean"]>;
  leaveScheduleItem: (args?: {
    id?: Maybe<Scalars["String"]>;
  }) => Maybe<ScalarsEnums["Boolean"]>;
  cloneScheduleItem: (args?: {
    id?: Maybe<Scalars["String"]>;
    cloneTo?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  }) => Maybe<ScalarsEnums["Boolean"]>;
  createTimelineItem: (args?: {
    item?: Maybe<TimelineItemInput>;
  }) => Maybe<TimelineItem>;
  updateTimelineItem: (args?: {
    id?: Maybe<Scalars["String"]>;
    item?: Maybe<TimelineItemInput>;
  }) => Maybe<TimelineItem>;
  removeTimelineItem: (args?: {
    id?: Maybe<Scalars["String"]>;
  }) => Maybe<ScalarsEnums["Boolean"]>;
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
  id?: Maybe<ScalarsEnums["ID"]>;
  cid?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  extension?: Maybe<ScalarsEnums["String"]>;
  mimeType?: Maybe<ScalarsEnums["String"]>;
  timestamp?: Maybe<ScalarsEnums["Date"]>;
  status?: Maybe<ScalarsEnums["String"]>;
  owner?: Maybe<User>;
  url?: Maybe<ScalarsEnums["String"]>;
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

export interface Equipment {
  __typename: "Equipment" | undefined;
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  registration?: Maybe<ScalarsEnums["String"]>;
  status?: Maybe<ScalarsEnums["String"]>;
}

export interface ScheduleItem {
  __typename: "ScheduleItem" | undefined;
  id?: Maybe<ScalarsEnums["ID"]>;
  date?: Maybe<ScalarsEnums["Date"]>;
  project?: Maybe<Project>;
  people?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  managers?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  owner?: Maybe<User>;
  notes?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  equipment?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
}

export interface TimelineItem {
  __typename: "TimelineItem" | undefined;
  id?: Maybe<ScalarsEnums["ID"]>;
  timeline?: Maybe<ScalarsEnums["String"]>;
  startDate?: Maybe<ScalarsEnums["Date"]>;
  endDate?: Maybe<ScalarsEnums["Date"]>;
  items?: Maybe<Array<Maybe<TimelineItemItems>>>;
  project?: Maybe<Project>;
}

export interface TimelineItemItems {
  __typename: "TimelineItemItems" | undefined;
  type?: Maybe<ScalarsEnums["String"]>;
  location?: Maybe<ScalarsEnums["String"]>;
  estimate?: Maybe<ScalarsEnums["Float"]>;
}

export interface People {
  __typename: "People" | undefined;
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  Project: Project;
  File: File;
  User: User;
  Quote: Quote;
  Equipment: Equipment;
  ScheduleItem: ScheduleItem;
  TimelineItem: TimelineItem;
  TimelineItemItems: TimelineItemItems;
  People: People;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "Project"
  | "File"
  | "User"
  | "Quote"
  | "Equipment"
  | "ScheduleItem"
  | "TimelineItem"
  | "TimelineItemItems"
  | "People";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
