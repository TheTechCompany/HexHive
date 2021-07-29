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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
  Date: any;
}

export enum SortFindByIdsDeviceInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterFindOneDeviceInput {
  name?: Maybe<Scalars["String"]>;
  connected?: Maybe<Scalars["Boolean"]>;
  lastSeen?: Maybe<Scalars["Date"]>;
  network_name?: Maybe<Scalars["String"]>;
  did?: Maybe<Scalars["String"]>;
  program?: Maybe<Scalars["MongoID"]>;
  location?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneDeviceOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneDeviceInput>>;
  AND?: Maybe<Array<FilterFindOneDeviceInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindOneDeviceOperatorsInput {
  _id?: Maybe<FilterFindOneDevice_idOperatorsInput>;
}

export interface FilterFindOneDevice_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortFindOneDeviceInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterFindManyDeviceInput {
  name?: Maybe<Scalars["String"]>;
  connected?: Maybe<Scalars["Boolean"]>;
  lastSeen?: Maybe<Scalars["Date"]>;
  network_name?: Maybe<Scalars["String"]>;
  did?: Maybe<Scalars["String"]>;
  program?: Maybe<Scalars["MongoID"]>;
  location?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyDeviceOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyDeviceInput>>;
  AND?: Maybe<Array<FilterFindManyDeviceInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyDeviceOperatorsInput {
  _id?: Maybe<FilterFindManyDevice_idOperatorsInput>;
}

export interface FilterFindManyDevice_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortFindManyDeviceInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterCountDeviceInput {
  name?: Maybe<Scalars["String"]>;
  connected?: Maybe<Scalars["Boolean"]>;
  lastSeen?: Maybe<Scalars["Date"]>;
  network_name?: Maybe<Scalars["String"]>;
  did?: Maybe<Scalars["String"]>;
  program?: Maybe<Scalars["MongoID"]>;
  location?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountDeviceOperatorsInput>;
  OR?: Maybe<Array<FilterCountDeviceInput>>;
  AND?: Maybe<Array<FilterCountDeviceInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterCountDeviceOperatorsInput {
  _id?: Maybe<FilterCountDevice_idOperatorsInput>;
}

export interface FilterCountDevice_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortConnectionDeviceEnum {
  _ID_DESC = "_ID_DESC",
  _ID_ASC = "_ID_ASC",
}

export enum SortFindByIdsFlowShardInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterFindOneFlowShardInput {
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["MongoID"]>;
  program?: Maybe<Scalars["MongoID"]>;
  nodes?: Maybe<Array<Maybe<FilterFindOneFlowShardNodesInput>>>;
  paths?: Maybe<Array<Maybe<FilterFindOneFlowShardPathsInput>>>;
  items?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneFlowShardOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneFlowShardInput>>;
  AND?: Maybe<Array<FilterFindOneFlowShardInput>>;
}

export interface FilterFindOneFlowShardNodesInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterFindOneFlowShardPathsInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  sourceHandle?: Maybe<Scalars["String"]>;
  target?: Maybe<Scalars["String"]>;
  targetHandle?: Maybe<Scalars["String"]>;
  points?: Maybe<Array<Maybe<FilterFindOneFlowShardPathsPointsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterFindOneFlowShardPathsPointsInput {
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindOneFlowShardOperatorsInput {
  _id?: Maybe<FilterFindOneFlowShard_idOperatorsInput>;
}

export interface FilterFindOneFlowShard_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortFindOneFlowShardInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterFindManyFlowShardInput {
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["MongoID"]>;
  program?: Maybe<Scalars["MongoID"]>;
  nodes?: Maybe<Array<Maybe<FilterFindManyFlowShardNodesInput>>>;
  paths?: Maybe<Array<Maybe<FilterFindManyFlowShardPathsInput>>>;
  items?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyFlowShardOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyFlowShardInput>>;
  AND?: Maybe<Array<FilterFindManyFlowShardInput>>;
}

export interface FilterFindManyFlowShardNodesInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterFindManyFlowShardPathsInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  sourceHandle?: Maybe<Scalars["String"]>;
  target?: Maybe<Scalars["String"]>;
  targetHandle?: Maybe<Scalars["String"]>;
  points?: Maybe<Array<Maybe<FilterFindManyFlowShardPathsPointsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterFindManyFlowShardPathsPointsInput {
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyFlowShardOperatorsInput {
  _id?: Maybe<FilterFindManyFlowShard_idOperatorsInput>;
}

export interface FilterFindManyFlowShard_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortFindManyFlowShardInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterCountFlowShardInput {
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["MongoID"]>;
  program?: Maybe<Scalars["MongoID"]>;
  nodes?: Maybe<Array<Maybe<FilterCountFlowShardNodesInput>>>;
  paths?: Maybe<Array<Maybe<FilterCountFlowShardPathsInput>>>;
  items?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountFlowShardOperatorsInput>;
  OR?: Maybe<Array<FilterCountFlowShardInput>>;
  AND?: Maybe<Array<FilterCountFlowShardInput>>;
}

export interface FilterCountFlowShardNodesInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterCountFlowShardPathsInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  sourceHandle?: Maybe<Scalars["String"]>;
  target?: Maybe<Scalars["String"]>;
  targetHandle?: Maybe<Scalars["String"]>;
  points?: Maybe<Array<Maybe<FilterCountFlowShardPathsPointsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterCountFlowShardPathsPointsInput {
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterCountFlowShardOperatorsInput {
  _id?: Maybe<FilterCountFlowShard_idOperatorsInput>;
}

export interface FilterCountFlowShard_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortConnectionFlowShardEnum {
  _ID_DESC = "_ID_DESC",
  _ID_ASC = "_ID_ASC",
}

export enum SortFindByIdsProgramInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterFindOneProgramInput {
  name?: Maybe<Scalars["String"]>;
  plugins?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  hmi?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  program?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  io?: Maybe<Array<Maybe<FilterFindOneProgramIoInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneProgramOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneProgramInput>>;
  AND?: Maybe<Array<FilterFindOneProgramInput>>;
}

export interface FilterFindOneProgramIoInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindOneProgramOperatorsInput {
  _id?: Maybe<FilterFindOneProgram_idOperatorsInput>;
}

export interface FilterFindOneProgram_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortFindOneProgramInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterFindManyProgramInput {
  name?: Maybe<Scalars["String"]>;
  plugins?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  hmi?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  program?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  io?: Maybe<Array<Maybe<FilterFindManyProgramIoInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyProgramOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyProgramInput>>;
  AND?: Maybe<Array<FilterFindManyProgramInput>>;
}

export interface FilterFindManyProgramIoInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyProgramOperatorsInput {
  _id?: Maybe<FilterFindManyProgram_idOperatorsInput>;
}

export interface FilterFindManyProgram_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortFindManyProgramInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterCountProgramInput {
  name?: Maybe<Scalars["String"]>;
  plugins?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  hmi?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  program?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  io?: Maybe<Array<Maybe<FilterCountProgramIoInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountProgramOperatorsInput>;
  OR?: Maybe<Array<FilterCountProgramInput>>;
  AND?: Maybe<Array<FilterCountProgramInput>>;
}

export interface FilterCountProgramIoInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterCountProgramOperatorsInput {
  _id?: Maybe<FilterCountProgram_idOperatorsInput>;
}

export interface FilterCountProgram_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortConnectionProgramEnum {
  _ID_DESC = "_ID_DESC",
  _ID_ASC = "_ID_ASC",
}

export enum SortFindByIdsStackInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterFindOneStackInput {
  name?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<FilterFindOneStackItemsInput>>>;
  program?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneStackOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneStackInput>>;
  AND?: Maybe<Array<FilterFindOneStackInput>>;
}

export interface FilterFindOneStackItemsInput {
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<FilterFindOneStackItemsDimensionsInput>;
  inputs?: Maybe<Array<Maybe<FilterFindOneStackItemsInputsInput>>>;
  outputs?: Maybe<Array<Maybe<FilterFindOneStackItemsInputsInput>>>;
  actions?: Maybe<Scalars["String"]>;
  ui?: Maybe<Scalars["String"]>;
  ports?: Maybe<Array<Maybe<FilterFindOneStackItemsPortsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterFindOneStackItemsDimensionsInput {
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterFindOneStackItemsInputsInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  typeData?: Maybe<Scalars["JSON"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterFindOneStackItemsPortsInput {
  name?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindOneStackOperatorsInput {
  _id?: Maybe<FilterFindOneStack_idOperatorsInput>;
}

export interface FilterFindOneStack_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortFindOneStackInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterFindManyStackInput {
  name?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<FilterFindManyStackItemsInput>>>;
  program?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyStackOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyStackInput>>;
  AND?: Maybe<Array<FilterFindManyStackInput>>;
}

export interface FilterFindManyStackItemsInput {
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<FilterFindManyStackItemsDimensionsInput>;
  inputs?: Maybe<Array<Maybe<FilterFindManyStackItemsInputsInput>>>;
  outputs?: Maybe<Array<Maybe<FilterFindManyStackItemsInputsInput>>>;
  actions?: Maybe<Scalars["String"]>;
  ui?: Maybe<Scalars["String"]>;
  ports?: Maybe<Array<Maybe<FilterFindManyStackItemsPortsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterFindManyStackItemsDimensionsInput {
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterFindManyStackItemsInputsInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  typeData?: Maybe<Scalars["JSON"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterFindManyStackItemsPortsInput {
  name?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyStackOperatorsInput {
  _id?: Maybe<FilterFindManyStack_idOperatorsInput>;
}

export interface FilterFindManyStack_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortFindManyStackInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterCountStackInput {
  name?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<FilterCountStackItemsInput>>>;
  program?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountStackOperatorsInput>;
  OR?: Maybe<Array<FilterCountStackInput>>;
  AND?: Maybe<Array<FilterCountStackInput>>;
}

export interface FilterCountStackItemsInput {
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<FilterCountStackItemsDimensionsInput>;
  inputs?: Maybe<Array<Maybe<FilterCountStackItemsInputsInput>>>;
  outputs?: Maybe<Array<Maybe<FilterCountStackItemsInputsInput>>>;
  actions?: Maybe<Scalars["String"]>;
  ui?: Maybe<Scalars["String"]>;
  ports?: Maybe<Array<Maybe<FilterCountStackItemsPortsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterCountStackItemsDimensionsInput {
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterCountStackItemsInputsInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  typeData?: Maybe<Scalars["JSON"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterCountStackItemsPortsInput {
  name?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterCountStackOperatorsInput {
  _id?: Maybe<FilterCountStack_idOperatorsInput>;
}

export interface FilterCountStack_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortConnectionStackEnum {
  _ID_DESC = "_ID_DESC",
  _ID_ASC = "_ID_ASC",
}

export enum SortFindByIdsDNSRecordInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterFindOneDNSRecordInput {
  subdomain?: Maybe<Scalars["String"]>;
  domain?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneDNSRecordOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneDNSRecordInput>>;
  AND?: Maybe<Array<FilterFindOneDNSRecordInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindOneDNSRecordOperatorsInput {
  _id?: Maybe<FilterFindOneDNSRecord_idOperatorsInput>;
}

export interface FilterFindOneDNSRecord_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortFindOneDNSRecordInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterFindManyDNSRecordInput {
  subdomain?: Maybe<Scalars["String"]>;
  domain?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyDNSRecordOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyDNSRecordInput>>;
  AND?: Maybe<Array<FilterFindManyDNSRecordInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyDNSRecordOperatorsInput {
  _id?: Maybe<FilterFindManyDNSRecord_idOperatorsInput>;
}

export interface FilterFindManyDNSRecord_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortFindManyDNSRecordInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterCountDNSRecordInput {
  subdomain?: Maybe<Scalars["String"]>;
  domain?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountDNSRecordOperatorsInput>;
  OR?: Maybe<Array<FilterCountDNSRecordInput>>;
  AND?: Maybe<Array<FilterCountDNSRecordInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterCountDNSRecordOperatorsInput {
  _id?: Maybe<FilterCountDNSRecord_idOperatorsInput>;
}

export interface FilterCountDNSRecord_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortConnectionDNSRecordEnum {
  _ID_DESC = "_ID_DESC",
  _ID_ASC = "_ID_ASC",
}

export interface StackItemsInput {
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<StackItemsDimensionsInput>;
  inputs?: Maybe<Array<Maybe<StackItemsInputsInput>>>;
  outputs?: Maybe<Array<Maybe<StackItemsInputsInput>>>;
  actions?: Maybe<Scalars["String"]>;
  ui?: Maybe<Scalars["String"]>;
  ports?: Maybe<Array<Maybe<StackItemsPortsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface StackItemsDimensionsInput {
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface StackItemsInputsInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  typeData?: Maybe<Scalars["JSON"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface StackItemsPortsInput {
  name?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface CreateOneDeviceInput {
  name?: Maybe<Scalars["String"]>;
  connected?: Maybe<Scalars["Boolean"]>;
  lastSeen?: Maybe<Scalars["Date"]>;
  network_name?: Maybe<Scalars["String"]>;
  did?: Maybe<Scalars["String"]>;
  program?: Maybe<Scalars["MongoID"]>;
  location?: Maybe<Scalars["String"]>;
}

export interface CreateManyDeviceInput {
  name?: Maybe<Scalars["String"]>;
  connected?: Maybe<Scalars["Boolean"]>;
  lastSeen?: Maybe<Scalars["Date"]>;
  network_name?: Maybe<Scalars["String"]>;
  did?: Maybe<Scalars["String"]>;
  program?: Maybe<Scalars["MongoID"]>;
  location?: Maybe<Scalars["String"]>;
}

export interface UpdateByIdDeviceInput {
  name?: Maybe<Scalars["String"]>;
  connected?: Maybe<Scalars["Boolean"]>;
  lastSeen?: Maybe<Scalars["Date"]>;
  network_name?: Maybe<Scalars["String"]>;
  did?: Maybe<Scalars["String"]>;
  program?: Maybe<Scalars["MongoID"]>;
  location?: Maybe<Scalars["String"]>;
}

export interface UpdateOneDeviceInput {
  name?: Maybe<Scalars["String"]>;
  connected?: Maybe<Scalars["Boolean"]>;
  lastSeen?: Maybe<Scalars["Date"]>;
  network_name?: Maybe<Scalars["String"]>;
  did?: Maybe<Scalars["String"]>;
  program?: Maybe<Scalars["MongoID"]>;
  location?: Maybe<Scalars["String"]>;
}

export interface FilterUpdateOneDeviceInput {
  name?: Maybe<Scalars["String"]>;
  connected?: Maybe<Scalars["Boolean"]>;
  lastSeen?: Maybe<Scalars["Date"]>;
  network_name?: Maybe<Scalars["String"]>;
  did?: Maybe<Scalars["String"]>;
  program?: Maybe<Scalars["MongoID"]>;
  location?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneDeviceOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneDeviceInput>>;
  AND?: Maybe<Array<FilterUpdateOneDeviceInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateOneDeviceOperatorsInput {
  _id?: Maybe<FilterUpdateOneDevice_idOperatorsInput>;
}

export interface FilterUpdateOneDevice_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortUpdateOneDeviceInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface UpdateManyDeviceInput {
  name?: Maybe<Scalars["String"]>;
  connected?: Maybe<Scalars["Boolean"]>;
  lastSeen?: Maybe<Scalars["Date"]>;
  network_name?: Maybe<Scalars["String"]>;
  did?: Maybe<Scalars["String"]>;
  program?: Maybe<Scalars["MongoID"]>;
  location?: Maybe<Scalars["String"]>;
}

export interface FilterUpdateManyDeviceInput {
  name?: Maybe<Scalars["String"]>;
  connected?: Maybe<Scalars["Boolean"]>;
  lastSeen?: Maybe<Scalars["Date"]>;
  network_name?: Maybe<Scalars["String"]>;
  did?: Maybe<Scalars["String"]>;
  program?: Maybe<Scalars["MongoID"]>;
  location?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyDeviceOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyDeviceInput>>;
  AND?: Maybe<Array<FilterUpdateManyDeviceInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateManyDeviceOperatorsInput {
  _id?: Maybe<FilterUpdateManyDevice_idOperatorsInput>;
}

export interface FilterUpdateManyDevice_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortUpdateManyDeviceInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterRemoveOneDeviceInput {
  name?: Maybe<Scalars["String"]>;
  connected?: Maybe<Scalars["Boolean"]>;
  lastSeen?: Maybe<Scalars["Date"]>;
  network_name?: Maybe<Scalars["String"]>;
  did?: Maybe<Scalars["String"]>;
  program?: Maybe<Scalars["MongoID"]>;
  location?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneDeviceOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneDeviceInput>>;
  AND?: Maybe<Array<FilterRemoveOneDeviceInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterRemoveOneDeviceOperatorsInput {
  _id?: Maybe<FilterRemoveOneDevice_idOperatorsInput>;
}

export interface FilterRemoveOneDevice_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortRemoveOneDeviceInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterRemoveManyDeviceInput {
  name?: Maybe<Scalars["String"]>;
  connected?: Maybe<Scalars["Boolean"]>;
  lastSeen?: Maybe<Scalars["Date"]>;
  network_name?: Maybe<Scalars["String"]>;
  did?: Maybe<Scalars["String"]>;
  program?: Maybe<Scalars["MongoID"]>;
  location?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyDeviceOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyDeviceInput>>;
  AND?: Maybe<Array<FilterRemoveManyDeviceInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterRemoveManyDeviceOperatorsInput {
  _id?: Maybe<FilterRemoveManyDevice_idOperatorsInput>;
}

export interface FilterRemoveManyDevice_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export interface CreateOneFlowShardInput {
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["MongoID"]>;
  program?: Maybe<Scalars["MongoID"]>;
  nodes?: Maybe<Array<Maybe<FlowShardNodesInput>>>;
  paths?: Maybe<Array<Maybe<FlowShardPathsInput>>>;
  items?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
}

export interface FlowShardNodesInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FlowShardPathsInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  sourceHandle?: Maybe<Scalars["String"]>;
  target?: Maybe<Scalars["String"]>;
  targetHandle?: Maybe<Scalars["String"]>;
  points?: Maybe<Array<Maybe<FlowShardPathsPointsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FlowShardPathsPointsInput {
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface CreateManyFlowShardInput {
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["MongoID"]>;
  program?: Maybe<Scalars["MongoID"]>;
  nodes?: Maybe<Array<Maybe<FlowShardNodesInput>>>;
  paths?: Maybe<Array<Maybe<FlowShardPathsInput>>>;
  items?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
}

export interface UpdateByIdFlowShardInput {
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["MongoID"]>;
  program?: Maybe<Scalars["MongoID"]>;
  nodes?: Maybe<Array<Maybe<UpdateByIdFlowShardNodesInput>>>;
  paths?: Maybe<Array<Maybe<UpdateByIdFlowShardPathsInput>>>;
  items?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
}

export interface UpdateByIdFlowShardNodesInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateByIdFlowShardPathsInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  sourceHandle?: Maybe<Scalars["String"]>;
  target?: Maybe<Scalars["String"]>;
  targetHandle?: Maybe<Scalars["String"]>;
  points?: Maybe<Array<Maybe<UpdateByIdFlowShardPathsPointsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateByIdFlowShardPathsPointsInput {
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateOneFlowShardInput {
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["MongoID"]>;
  program?: Maybe<Scalars["MongoID"]>;
  nodes?: Maybe<Array<Maybe<UpdateOneFlowShardNodesInput>>>;
  paths?: Maybe<Array<Maybe<UpdateOneFlowShardPathsInput>>>;
  items?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
}

export interface UpdateOneFlowShardNodesInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateOneFlowShardPathsInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  sourceHandle?: Maybe<Scalars["String"]>;
  target?: Maybe<Scalars["String"]>;
  targetHandle?: Maybe<Scalars["String"]>;
  points?: Maybe<Array<Maybe<UpdateOneFlowShardPathsPointsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateOneFlowShardPathsPointsInput {
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateOneFlowShardInput {
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["MongoID"]>;
  program?: Maybe<Scalars["MongoID"]>;
  nodes?: Maybe<Array<Maybe<FilterUpdateOneFlowShardNodesInput>>>;
  paths?: Maybe<Array<Maybe<FilterUpdateOneFlowShardPathsInput>>>;
  items?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneFlowShardOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneFlowShardInput>>;
  AND?: Maybe<Array<FilterUpdateOneFlowShardInput>>;
}

export interface FilterUpdateOneFlowShardNodesInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateOneFlowShardPathsInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  sourceHandle?: Maybe<Scalars["String"]>;
  target?: Maybe<Scalars["String"]>;
  targetHandle?: Maybe<Scalars["String"]>;
  points?: Maybe<Array<Maybe<FilterUpdateOneFlowShardPathsPointsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateOneFlowShardPathsPointsInput {
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateOneFlowShardOperatorsInput {
  _id?: Maybe<FilterUpdateOneFlowShard_idOperatorsInput>;
}

export interface FilterUpdateOneFlowShard_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortUpdateOneFlowShardInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface UpdateManyFlowShardInput {
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["MongoID"]>;
  program?: Maybe<Scalars["MongoID"]>;
  nodes?: Maybe<Array<Maybe<UpdateManyFlowShardNodesInput>>>;
  paths?: Maybe<Array<Maybe<UpdateManyFlowShardPathsInput>>>;
  items?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
}

export interface UpdateManyFlowShardNodesInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateManyFlowShardPathsInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  sourceHandle?: Maybe<Scalars["String"]>;
  target?: Maybe<Scalars["String"]>;
  targetHandle?: Maybe<Scalars["String"]>;
  points?: Maybe<Array<Maybe<UpdateManyFlowShardPathsPointsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateManyFlowShardPathsPointsInput {
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateManyFlowShardInput {
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["MongoID"]>;
  program?: Maybe<Scalars["MongoID"]>;
  nodes?: Maybe<Array<Maybe<FilterUpdateManyFlowShardNodesInput>>>;
  paths?: Maybe<Array<Maybe<FilterUpdateManyFlowShardPathsInput>>>;
  items?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyFlowShardOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyFlowShardInput>>;
  AND?: Maybe<Array<FilterUpdateManyFlowShardInput>>;
}

export interface FilterUpdateManyFlowShardNodesInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateManyFlowShardPathsInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  sourceHandle?: Maybe<Scalars["String"]>;
  target?: Maybe<Scalars["String"]>;
  targetHandle?: Maybe<Scalars["String"]>;
  points?: Maybe<Array<Maybe<FilterUpdateManyFlowShardPathsPointsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateManyFlowShardPathsPointsInput {
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateManyFlowShardOperatorsInput {
  _id?: Maybe<FilterUpdateManyFlowShard_idOperatorsInput>;
}

export interface FilterUpdateManyFlowShard_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortUpdateManyFlowShardInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterRemoveOneFlowShardInput {
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["MongoID"]>;
  program?: Maybe<Scalars["MongoID"]>;
  nodes?: Maybe<Array<Maybe<FilterRemoveOneFlowShardNodesInput>>>;
  paths?: Maybe<Array<Maybe<FilterRemoveOneFlowShardPathsInput>>>;
  items?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneFlowShardOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneFlowShardInput>>;
  AND?: Maybe<Array<FilterRemoveOneFlowShardInput>>;
}

export interface FilterRemoveOneFlowShardNodesInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterRemoveOneFlowShardPathsInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  sourceHandle?: Maybe<Scalars["String"]>;
  target?: Maybe<Scalars["String"]>;
  targetHandle?: Maybe<Scalars["String"]>;
  points?: Maybe<Array<Maybe<FilterRemoveOneFlowShardPathsPointsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterRemoveOneFlowShardPathsPointsInput {
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterRemoveOneFlowShardOperatorsInput {
  _id?: Maybe<FilterRemoveOneFlowShard_idOperatorsInput>;
}

export interface FilterRemoveOneFlowShard_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortRemoveOneFlowShardInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterRemoveManyFlowShardInput {
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["MongoID"]>;
  program?: Maybe<Scalars["MongoID"]>;
  nodes?: Maybe<Array<Maybe<FilterRemoveManyFlowShardNodesInput>>>;
  paths?: Maybe<Array<Maybe<FilterRemoveManyFlowShardPathsInput>>>;
  items?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyFlowShardOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyFlowShardInput>>;
  AND?: Maybe<Array<FilterRemoveManyFlowShardInput>>;
}

export interface FilterRemoveManyFlowShardNodesInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterRemoveManyFlowShardPathsInput {
  id?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  sourceHandle?: Maybe<Scalars["String"]>;
  target?: Maybe<Scalars["String"]>;
  targetHandle?: Maybe<Scalars["String"]>;
  points?: Maybe<Array<Maybe<FilterRemoveManyFlowShardPathsPointsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterRemoveManyFlowShardPathsPointsInput {
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterRemoveManyFlowShardOperatorsInput {
  _id?: Maybe<FilterRemoveManyFlowShard_idOperatorsInput>;
}

export interface FilterRemoveManyFlowShard_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export interface CreateOneProgramInput {
  name?: Maybe<Scalars["String"]>;
  plugins?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  hmi?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  program?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  io?: Maybe<Array<Maybe<ProgramIoInput>>>;
}

export interface ProgramIoInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface CreateManyProgramInput {
  name?: Maybe<Scalars["String"]>;
  plugins?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  hmi?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  program?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  io?: Maybe<Array<Maybe<ProgramIoInput>>>;
}

export interface UpdateByIdProgramInput {
  name?: Maybe<Scalars["String"]>;
  plugins?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  hmi?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  program?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  io?: Maybe<Array<Maybe<UpdateByIdProgramIoInput>>>;
}

export interface UpdateByIdProgramIoInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateOneProgramInput {
  name?: Maybe<Scalars["String"]>;
  plugins?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  hmi?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  program?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  io?: Maybe<Array<Maybe<UpdateOneProgramIoInput>>>;
}

export interface UpdateOneProgramIoInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateOneProgramInput {
  name?: Maybe<Scalars["String"]>;
  plugins?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  hmi?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  program?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  io?: Maybe<Array<Maybe<FilterUpdateOneProgramIoInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneProgramOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneProgramInput>>;
  AND?: Maybe<Array<FilterUpdateOneProgramInput>>;
}

export interface FilterUpdateOneProgramIoInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateOneProgramOperatorsInput {
  _id?: Maybe<FilterUpdateOneProgram_idOperatorsInput>;
}

export interface FilterUpdateOneProgram_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortUpdateOneProgramInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface UpdateManyProgramInput {
  name?: Maybe<Scalars["String"]>;
  plugins?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  hmi?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  program?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  io?: Maybe<Array<Maybe<UpdateManyProgramIoInput>>>;
}

export interface UpdateManyProgramIoInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateManyProgramInput {
  name?: Maybe<Scalars["String"]>;
  plugins?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  hmi?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  program?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  io?: Maybe<Array<Maybe<FilterUpdateManyProgramIoInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyProgramOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyProgramInput>>;
  AND?: Maybe<Array<FilterUpdateManyProgramInput>>;
}

export interface FilterUpdateManyProgramIoInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateManyProgramOperatorsInput {
  _id?: Maybe<FilterUpdateManyProgram_idOperatorsInput>;
}

export interface FilterUpdateManyProgram_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortUpdateManyProgramInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterRemoveOneProgramInput {
  name?: Maybe<Scalars["String"]>;
  plugins?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  hmi?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  program?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  io?: Maybe<Array<Maybe<FilterRemoveOneProgramIoInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneProgramOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneProgramInput>>;
  AND?: Maybe<Array<FilterRemoveOneProgramInput>>;
}

export interface FilterRemoveOneProgramIoInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterRemoveOneProgramOperatorsInput {
  _id?: Maybe<FilterRemoveOneProgram_idOperatorsInput>;
}

export interface FilterRemoveOneProgram_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortRemoveOneProgramInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterRemoveManyProgramInput {
  name?: Maybe<Scalars["String"]>;
  plugins?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  hmi?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  program?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  io?: Maybe<Array<Maybe<FilterRemoveManyProgramIoInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyProgramOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyProgramInput>>;
  AND?: Maybe<Array<FilterRemoveManyProgramInput>>;
}

export interface FilterRemoveManyProgramIoInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterRemoveManyProgramOperatorsInput {
  _id?: Maybe<FilterRemoveManyProgram_idOperatorsInput>;
}

export interface FilterRemoveManyProgram_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export interface CreateOneStackInput {
  name?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<StackItemsInput>>>;
  program?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
}

export interface CreateManyStackInput {
  name?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<StackItemsInput>>>;
  program?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
}

export interface UpdateByIdStackInput {
  name?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<UpdateByIdStackItemsInput>>>;
  program?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
}

export interface UpdateByIdStackItemsInput {
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<UpdateByIdStackItemsDimensionsInput>;
  inputs?: Maybe<Array<Maybe<UpdateByIdStackItemsInputsInput>>>;
  outputs?: Maybe<Array<Maybe<UpdateByIdStackItemsInputsInput>>>;
  actions?: Maybe<Scalars["String"]>;
  ui?: Maybe<Scalars["String"]>;
  ports?: Maybe<Array<Maybe<UpdateByIdStackItemsPortsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateByIdStackItemsDimensionsInput {
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateByIdStackItemsInputsInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  typeData?: Maybe<Scalars["JSON"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateByIdStackItemsPortsInput {
  name?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateOneStackInput {
  name?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<UpdateOneStackItemsInput>>>;
  program?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
}

export interface UpdateOneStackItemsInput {
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<UpdateOneStackItemsDimensionsInput>;
  inputs?: Maybe<Array<Maybe<UpdateOneStackItemsInputsInput>>>;
  outputs?: Maybe<Array<Maybe<UpdateOneStackItemsInputsInput>>>;
  actions?: Maybe<Scalars["String"]>;
  ui?: Maybe<Scalars["String"]>;
  ports?: Maybe<Array<Maybe<UpdateOneStackItemsPortsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateOneStackItemsDimensionsInput {
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateOneStackItemsInputsInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  typeData?: Maybe<Scalars["JSON"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateOneStackItemsPortsInput {
  name?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateOneStackInput {
  name?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<FilterUpdateOneStackItemsInput>>>;
  program?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneStackOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneStackInput>>;
  AND?: Maybe<Array<FilterUpdateOneStackInput>>;
}

export interface FilterUpdateOneStackItemsInput {
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<FilterUpdateOneStackItemsDimensionsInput>;
  inputs?: Maybe<Array<Maybe<FilterUpdateOneStackItemsInputsInput>>>;
  outputs?: Maybe<Array<Maybe<FilterUpdateOneStackItemsInputsInput>>>;
  actions?: Maybe<Scalars["String"]>;
  ui?: Maybe<Scalars["String"]>;
  ports?: Maybe<Array<Maybe<FilterUpdateOneStackItemsPortsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateOneStackItemsDimensionsInput {
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateOneStackItemsInputsInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  typeData?: Maybe<Scalars["JSON"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateOneStackItemsPortsInput {
  name?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateOneStackOperatorsInput {
  _id?: Maybe<FilterUpdateOneStack_idOperatorsInput>;
}

export interface FilterUpdateOneStack_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortUpdateOneStackInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface UpdateManyStackInput {
  name?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<UpdateManyStackItemsInput>>>;
  program?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
}

export interface UpdateManyStackItemsInput {
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<UpdateManyStackItemsDimensionsInput>;
  inputs?: Maybe<Array<Maybe<UpdateManyStackItemsInputsInput>>>;
  outputs?: Maybe<Array<Maybe<UpdateManyStackItemsInputsInput>>>;
  actions?: Maybe<Scalars["String"]>;
  ui?: Maybe<Scalars["String"]>;
  ports?: Maybe<Array<Maybe<UpdateManyStackItemsPortsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateManyStackItemsDimensionsInput {
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateManyStackItemsInputsInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  typeData?: Maybe<Scalars["JSON"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateManyStackItemsPortsInput {
  name?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateManyStackInput {
  name?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<FilterUpdateManyStackItemsInput>>>;
  program?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyStackOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyStackInput>>;
  AND?: Maybe<Array<FilterUpdateManyStackInput>>;
}

export interface FilterUpdateManyStackItemsInput {
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<FilterUpdateManyStackItemsDimensionsInput>;
  inputs?: Maybe<Array<Maybe<FilterUpdateManyStackItemsInputsInput>>>;
  outputs?: Maybe<Array<Maybe<FilterUpdateManyStackItemsInputsInput>>>;
  actions?: Maybe<Scalars["String"]>;
  ui?: Maybe<Scalars["String"]>;
  ports?: Maybe<Array<Maybe<FilterUpdateManyStackItemsPortsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateManyStackItemsDimensionsInput {
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateManyStackItemsInputsInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  typeData?: Maybe<Scalars["JSON"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateManyStackItemsPortsInput {
  name?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateManyStackOperatorsInput {
  _id?: Maybe<FilterUpdateManyStack_idOperatorsInput>;
}

export interface FilterUpdateManyStack_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortUpdateManyStackInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterRemoveOneStackInput {
  name?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<FilterRemoveOneStackItemsInput>>>;
  program?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneStackOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneStackInput>>;
  AND?: Maybe<Array<FilterRemoveOneStackInput>>;
}

export interface FilterRemoveOneStackItemsInput {
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<FilterRemoveOneStackItemsDimensionsInput>;
  inputs?: Maybe<Array<Maybe<FilterRemoveOneStackItemsInputsInput>>>;
  outputs?: Maybe<Array<Maybe<FilterRemoveOneStackItemsInputsInput>>>;
  actions?: Maybe<Scalars["String"]>;
  ui?: Maybe<Scalars["String"]>;
  ports?: Maybe<Array<Maybe<FilterRemoveOneStackItemsPortsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterRemoveOneStackItemsDimensionsInput {
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterRemoveOneStackItemsInputsInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  typeData?: Maybe<Scalars["JSON"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterRemoveOneStackItemsPortsInput {
  name?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterRemoveOneStackOperatorsInput {
  _id?: Maybe<FilterRemoveOneStack_idOperatorsInput>;
}

export interface FilterRemoveOneStack_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortRemoveOneStackInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterRemoveManyStackInput {
  name?: Maybe<Scalars["String"]>;
  items?: Maybe<Array<Maybe<FilterRemoveManyStackItemsInput>>>;
  program?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyStackOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyStackInput>>;
  AND?: Maybe<Array<FilterRemoveManyStackInput>>;
}

export interface FilterRemoveManyStackItemsInput {
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<FilterRemoveManyStackItemsDimensionsInput>;
  inputs?: Maybe<Array<Maybe<FilterRemoveManyStackItemsInputsInput>>>;
  outputs?: Maybe<Array<Maybe<FilterRemoveManyStackItemsInputsInput>>>;
  actions?: Maybe<Scalars["String"]>;
  ui?: Maybe<Scalars["String"]>;
  ports?: Maybe<Array<Maybe<FilterRemoveManyStackItemsPortsInput>>>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterRemoveManyStackItemsDimensionsInput {
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterRemoveManyStackItemsInputsInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  typeData?: Maybe<Scalars["JSON"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterRemoveManyStackItemsPortsInput {
  name?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  rotation?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterRemoveManyStackOperatorsInput {
  _id?: Maybe<FilterRemoveManyStack_idOperatorsInput>;
}

export interface FilterRemoveManyStack_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export interface CreateOneDNSRecordInput {
  subdomain?: Maybe<Scalars["String"]>;
  domain?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
}

export interface CreateManyDNSRecordInput {
  subdomain?: Maybe<Scalars["String"]>;
  domain?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
}

export interface UpdateByIdDNSRecordInput {
  subdomain?: Maybe<Scalars["String"]>;
  domain?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
}

export interface UpdateOneDNSRecordInput {
  subdomain?: Maybe<Scalars["String"]>;
  domain?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
}

export interface FilterUpdateOneDNSRecordInput {
  subdomain?: Maybe<Scalars["String"]>;
  domain?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneDNSRecordOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneDNSRecordInput>>;
  AND?: Maybe<Array<FilterUpdateOneDNSRecordInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateOneDNSRecordOperatorsInput {
  _id?: Maybe<FilterUpdateOneDNSRecord_idOperatorsInput>;
}

export interface FilterUpdateOneDNSRecord_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortUpdateOneDNSRecordInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface UpdateManyDNSRecordInput {
  subdomain?: Maybe<Scalars["String"]>;
  domain?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
}

export interface FilterUpdateManyDNSRecordInput {
  subdomain?: Maybe<Scalars["String"]>;
  domain?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyDNSRecordOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyDNSRecordInput>>;
  AND?: Maybe<Array<FilterUpdateManyDNSRecordInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateManyDNSRecordOperatorsInput {
  _id?: Maybe<FilterUpdateManyDNSRecord_idOperatorsInput>;
}

export interface FilterUpdateManyDNSRecord_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortUpdateManyDNSRecordInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterRemoveOneDNSRecordInput {
  subdomain?: Maybe<Scalars["String"]>;
  domain?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneDNSRecordOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneDNSRecordInput>>;
  AND?: Maybe<Array<FilterRemoveOneDNSRecordInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterRemoveOneDNSRecordOperatorsInput {
  _id?: Maybe<FilterRemoveOneDNSRecord_idOperatorsInput>;
}

export interface FilterRemoveOneDNSRecord_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export enum SortRemoveOneDNSRecordInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterRemoveManyDNSRecordInput {
  subdomain?: Maybe<Scalars["String"]>;
  domain?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["MongoID"]>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyDNSRecordOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyDNSRecordInput>>;
  AND?: Maybe<Array<FilterRemoveManyDNSRecordInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterRemoveManyDNSRecordOperatorsInput {
  _id?: Maybe<FilterRemoveManyDNSRecord_idOperatorsInput>;
}

export interface FilterRemoveManyDNSRecord_idOperatorsInput {
  gt?: Maybe<Scalars["MongoID"]>;
  gte?: Maybe<Scalars["MongoID"]>;
  lt?: Maybe<Scalars["MongoID"]>;
  lte?: Maybe<Scalars["MongoID"]>;
  ne?: Maybe<Scalars["MongoID"]>;
  in?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
  exists?: Maybe<Scalars["Boolean"]>;
}

export const scalarsEnumsHash: import("gqless").ScalarsEnumsHash = {
  String: true,
  JSON: true,
  Int: true,
  MongoID: true,
  Boolean: true,
  Date: true,
  SortFindByIdsDeviceInput: true,
  SortFindOneDeviceInput: true,
  SortFindManyDeviceInput: true,
  SortConnectionDeviceEnum: true,
  Float: true,
  SortFindByIdsFlowShardInput: true,
  SortFindOneFlowShardInput: true,
  SortFindManyFlowShardInput: true,
  SortConnectionFlowShardEnum: true,
  SortFindByIdsProgramInput: true,
  SortFindOneProgramInput: true,
  SortFindManyProgramInput: true,
  SortConnectionProgramEnum: true,
  SortFindByIdsStackInput: true,
  SortFindOneStackInput: true,
  SortFindManyStackInput: true,
  SortConnectionStackEnum: true,
  SortFindByIdsDNSRecordInput: true,
  SortFindOneDNSRecordInput: true,
  SortFindManyDNSRecordInput: true,
  SortConnectionDNSRecordEnum: true,
  SortUpdateOneDeviceInput: true,
  SortUpdateManyDeviceInput: true,
  SortRemoveOneDeviceInput: true,
  SortUpdateOneFlowShardInput: true,
  SortUpdateManyFlowShardInput: true,
  SortRemoveOneFlowShardInput: true,
  SortUpdateOneProgramInput: true,
  SortUpdateManyProgramInput: true,
  SortRemoveOneProgramInput: true,
  SortUpdateOneStackInput: true,
  SortUpdateManyStackInput: true,
  SortRemoveOneStackInput: true,
  SortUpdateOneDNSRecordInput: true,
  SortUpdateManyDNSRecordInput: true,
  SortRemoveOneDNSRecordInput: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    ProgramShard: { __type: "Program", __args: { id: "String" } },
    ProgramShards: { __type: "[Program]" },
    DeviceById: { __type: "Device", __args: { _id: "MongoID!" } },
    DeviceByIds: {
      __type: "[Device!]!",
      __args: {
        _ids: "[MongoID!]!",
        limit: "Int",
        sort: "SortFindByIdsDeviceInput",
      },
    },
    DeviceOne: {
      __type: "Device",
      __args: {
        filter: "FilterFindOneDeviceInput",
        skip: "Int",
        sort: "SortFindOneDeviceInput",
      },
    },
    DeviceMany: {
      __type: "[Device!]!",
      __args: {
        filter: "FilterFindManyDeviceInput",
        skip: "Int",
        limit: "Int",
        sort: "SortFindManyDeviceInput",
      },
    },
    DeviceDataLoader: { __type: "Device", __args: { _id: "MongoID!" } },
    DeviceDataLoaderMany: {
      __type: "[Device]!",
      __args: { _ids: "[MongoID!]!" },
    },
    DeviceByIdLean: { __type: "Device", __args: { _id: "MongoID!" } },
    DeviceByIdsLean: {
      __type: "[Device!]!",
      __args: {
        _ids: "[MongoID!]!",
        limit: "Int",
        sort: "SortFindByIdsDeviceInput",
      },
    },
    DeviceOneLean: {
      __type: "Device",
      __args: {
        filter: "FilterFindOneDeviceInput",
        skip: "Int",
        sort: "SortFindOneDeviceInput",
      },
    },
    DeviceManyLean: {
      __type: "[Device!]!",
      __args: {
        filter: "FilterFindManyDeviceInput",
        skip: "Int",
        limit: "Int",
        sort: "SortFindManyDeviceInput",
      },
    },
    DeviceDataLoaderLean: { __type: "Device", __args: { _id: "MongoID!" } },
    DeviceDataLoaderManyLean: {
      __type: "[Device]!",
      __args: { _ids: "[MongoID!]!" },
    },
    DeviceCount: {
      __type: "Int",
      __args: { filter: "FilterCountDeviceInput" },
    },
    DeviceConnection: {
      __type: "DeviceConnection",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        filter: "FilterFindManyDeviceInput",
        sort: "SortConnectionDeviceEnum",
      },
    },
    DevicerPagination: {
      __type: "DevicePagination",
      __args: {
        page: "Int",
        perPage: "Int",
        filter: "FilterFindManyDeviceInput",
        sort: "SortFindManyDeviceInput",
      },
    },
    FlowShardById: { __type: "FlowShard", __args: { _id: "MongoID!" } },
    FlowShardByIds: {
      __type: "[FlowShard!]!",
      __args: {
        _ids: "[MongoID!]!",
        limit: "Int",
        sort: "SortFindByIdsFlowShardInput",
      },
    },
    FlowShardOne: {
      __type: "FlowShard",
      __args: {
        filter: "FilterFindOneFlowShardInput",
        skip: "Int",
        sort: "SortFindOneFlowShardInput",
      },
    },
    FlowShardMany: {
      __type: "[FlowShard!]!",
      __args: {
        filter: "FilterFindManyFlowShardInput",
        skip: "Int",
        limit: "Int",
        sort: "SortFindManyFlowShardInput",
      },
    },
    FlowShardDataLoader: { __type: "FlowShard", __args: { _id: "MongoID!" } },
    FlowShardDataLoaderMany: {
      __type: "[FlowShard]!",
      __args: { _ids: "[MongoID!]!" },
    },
    FlowShardByIdLean: { __type: "FlowShard", __args: { _id: "MongoID!" } },
    FlowShardByIdsLean: {
      __type: "[FlowShard!]!",
      __args: {
        _ids: "[MongoID!]!",
        limit: "Int",
        sort: "SortFindByIdsFlowShardInput",
      },
    },
    FlowShardOneLean: {
      __type: "FlowShard",
      __args: {
        filter: "FilterFindOneFlowShardInput",
        skip: "Int",
        sort: "SortFindOneFlowShardInput",
      },
    },
    FlowShardManyLean: {
      __type: "[FlowShard!]!",
      __args: {
        filter: "FilterFindManyFlowShardInput",
        skip: "Int",
        limit: "Int",
        sort: "SortFindManyFlowShardInput",
      },
    },
    FlowShardDataLoaderLean: {
      __type: "FlowShard",
      __args: { _id: "MongoID!" },
    },
    FlowShardDataLoaderManyLean: {
      __type: "[FlowShard]!",
      __args: { _ids: "[MongoID!]!" },
    },
    FlowShardCount: {
      __type: "Int",
      __args: { filter: "FilterCountFlowShardInput" },
    },
    FlowShardConnection: {
      __type: "FlowShardConnection",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        filter: "FilterFindManyFlowShardInput",
        sort: "SortConnectionFlowShardEnum",
      },
    },
    FlowShardrPagination: {
      __type: "FlowShardPagination",
      __args: {
        page: "Int",
        perPage: "Int",
        filter: "FilterFindManyFlowShardInput",
        sort: "SortFindManyFlowShardInput",
      },
    },
    ProgramById: { __type: "Program", __args: { _id: "MongoID!" } },
    ProgramByIds: {
      __type: "[Program!]!",
      __args: {
        _ids: "[MongoID!]!",
        limit: "Int",
        sort: "SortFindByIdsProgramInput",
      },
    },
    ProgramOne: {
      __type: "Program",
      __args: {
        filter: "FilterFindOneProgramInput",
        skip: "Int",
        sort: "SortFindOneProgramInput",
      },
    },
    ProgramMany: {
      __type: "[Program!]!",
      __args: {
        filter: "FilterFindManyProgramInput",
        skip: "Int",
        limit: "Int",
        sort: "SortFindManyProgramInput",
      },
    },
    ProgramDataLoader: { __type: "Program", __args: { _id: "MongoID!" } },
    ProgramDataLoaderMany: {
      __type: "[Program]!",
      __args: { _ids: "[MongoID!]!" },
    },
    ProgramByIdLean: { __type: "Program", __args: { _id: "MongoID!" } },
    ProgramByIdsLean: {
      __type: "[Program!]!",
      __args: {
        _ids: "[MongoID!]!",
        limit: "Int",
        sort: "SortFindByIdsProgramInput",
      },
    },
    ProgramOneLean: {
      __type: "Program",
      __args: {
        filter: "FilterFindOneProgramInput",
        skip: "Int",
        sort: "SortFindOneProgramInput",
      },
    },
    ProgramManyLean: {
      __type: "[Program!]!",
      __args: {
        filter: "FilterFindManyProgramInput",
        skip: "Int",
        limit: "Int",
        sort: "SortFindManyProgramInput",
      },
    },
    ProgramDataLoaderLean: { __type: "Program", __args: { _id: "MongoID!" } },
    ProgramDataLoaderManyLean: {
      __type: "[Program]!",
      __args: { _ids: "[MongoID!]!" },
    },
    ProgramCount: {
      __type: "Int",
      __args: { filter: "FilterCountProgramInput" },
    },
    ProgramConnection: {
      __type: "ProgramConnection",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        filter: "FilterFindManyProgramInput",
        sort: "SortConnectionProgramEnum",
      },
    },
    ProgramrPagination: {
      __type: "ProgramPagination",
      __args: {
        page: "Int",
        perPage: "Int",
        filter: "FilterFindManyProgramInput",
        sort: "SortFindManyProgramInput",
      },
    },
    StackById: { __type: "Stack", __args: { _id: "MongoID!" } },
    StackByIds: {
      __type: "[Stack!]!",
      __args: {
        _ids: "[MongoID!]!",
        limit: "Int",
        sort: "SortFindByIdsStackInput",
      },
    },
    StackOne: {
      __type: "Stack",
      __args: {
        filter: "FilterFindOneStackInput",
        skip: "Int",
        sort: "SortFindOneStackInput",
      },
    },
    StackMany: {
      __type: "[Stack!]!",
      __args: {
        filter: "FilterFindManyStackInput",
        skip: "Int",
        limit: "Int",
        sort: "SortFindManyStackInput",
      },
    },
    StackDataLoader: { __type: "Stack", __args: { _id: "MongoID!" } },
    StackDataLoaderMany: {
      __type: "[Stack]!",
      __args: { _ids: "[MongoID!]!" },
    },
    StackByIdLean: { __type: "Stack", __args: { _id: "MongoID!" } },
    StackByIdsLean: {
      __type: "[Stack!]!",
      __args: {
        _ids: "[MongoID!]!",
        limit: "Int",
        sort: "SortFindByIdsStackInput",
      },
    },
    StackOneLean: {
      __type: "Stack",
      __args: {
        filter: "FilterFindOneStackInput",
        skip: "Int",
        sort: "SortFindOneStackInput",
      },
    },
    StackManyLean: {
      __type: "[Stack!]!",
      __args: {
        filter: "FilterFindManyStackInput",
        skip: "Int",
        limit: "Int",
        sort: "SortFindManyStackInput",
      },
    },
    StackDataLoaderLean: { __type: "Stack", __args: { _id: "MongoID!" } },
    StackDataLoaderManyLean: {
      __type: "[Stack]!",
      __args: { _ids: "[MongoID!]!" },
    },
    StackCount: { __type: "Int", __args: { filter: "FilterCountStackInput" } },
    StackConnection: {
      __type: "StackConnection",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        filter: "FilterFindManyStackInput",
        sort: "SortConnectionStackEnum",
      },
    },
    StackrPagination: {
      __type: "StackPagination",
      __args: {
        page: "Int",
        perPage: "Int",
        filter: "FilterFindManyStackInput",
        sort: "SortFindManyStackInput",
      },
    },
    DNSRecordById: { __type: "DNSRecord", __args: { _id: "MongoID!" } },
    DNSRecordByIds: {
      __type: "[DNSRecord!]!",
      __args: {
        _ids: "[MongoID!]!",
        limit: "Int",
        sort: "SortFindByIdsDNSRecordInput",
      },
    },
    DNSRecordOne: {
      __type: "DNSRecord",
      __args: {
        filter: "FilterFindOneDNSRecordInput",
        skip: "Int",
        sort: "SortFindOneDNSRecordInput",
      },
    },
    DNSRecordMany: {
      __type: "[DNSRecord!]!",
      __args: {
        filter: "FilterFindManyDNSRecordInput",
        skip: "Int",
        limit: "Int",
        sort: "SortFindManyDNSRecordInput",
      },
    },
    DNSRecordDataLoader: { __type: "DNSRecord", __args: { _id: "MongoID!" } },
    DNSRecordDataLoaderMany: {
      __type: "[DNSRecord]!",
      __args: { _ids: "[MongoID!]!" },
    },
    DNSRecordByIdLean: { __type: "DNSRecord", __args: { _id: "MongoID!" } },
    DNSRecordByIdsLean: {
      __type: "[DNSRecord!]!",
      __args: {
        _ids: "[MongoID!]!",
        limit: "Int",
        sort: "SortFindByIdsDNSRecordInput",
      },
    },
    DNSRecordOneLean: {
      __type: "DNSRecord",
      __args: {
        filter: "FilterFindOneDNSRecordInput",
        skip: "Int",
        sort: "SortFindOneDNSRecordInput",
      },
    },
    DNSRecordManyLean: {
      __type: "[DNSRecord!]!",
      __args: {
        filter: "FilterFindManyDNSRecordInput",
        skip: "Int",
        limit: "Int",
        sort: "SortFindManyDNSRecordInput",
      },
    },
    DNSRecordDataLoaderLean: {
      __type: "DNSRecord",
      __args: { _id: "MongoID!" },
    },
    DNSRecordDataLoaderManyLean: {
      __type: "[DNSRecord]!",
      __args: { _ids: "[MongoID!]!" },
    },
    DNSRecordCount: {
      __type: "Int",
      __args: { filter: "FilterCountDNSRecordInput" },
    },
    DNSRecordConnection: {
      __type: "DNSRecordConnection",
      __args: {
        first: "Int",
        after: "String",
        last: "Int",
        before: "String",
        filter: "FilterFindManyDNSRecordInput",
        sort: "SortConnectionDNSRecordEnum",
      },
    },
    DNSRecordrPagination: {
      __type: "DNSRecordPagination",
      __args: {
        page: "Int",
        perPage: "Int",
        filter: "FilterFindManyDNSRecordInput",
        sort: "SortFindManyDNSRecordInput",
      },
    },
  },
  mutation: {
    __typename: { __type: "String!" },
    addProgramIO: {
      __type: "ProgramIo",
      __args: { program: "String", name: "String", type: "String" },
    },
    addHMIFlow: {
      __type: "FlowShard",
      __args: {
        program: "String",
        parent: "String",
        name: "String",
        nodes: "JSON",
        paths: "JSON",
      },
    },
    updateHMIFlow: {
      __type: "FlowShard",
      __args: { id: "String", name: "String", nodes: "JSON", paths: "JSON" },
    },
    addProgramFlow: {
      __type: "FlowShard",
      __args: {
        program: "String",
        parent: "String",
        name: "String",
        nodes: "JSON",
        paths: "JSON",
      },
    },
    updateProgramFlow: {
      __type: "FlowShard",
      __args: { id: "String", name: "String", nodes: "JSON", paths: "JSON" },
    },
    removeProgramFlow: {
      __type: "Program",
      __args: { id: "String", shard: "String" },
    },
    addStackItem: {
      __type: "StackItems",
      __args: { stack: "String", record: "StackItemsInput" },
    },
    DeviceCreateOne: {
      __type: "CreateOneDevicePayload",
      __args: { record: "CreateOneDeviceInput!" },
    },
    DeviceCreateMany: {
      __type: "CreateManyDevicePayload",
      __args: { records: "[CreateManyDeviceInput!]!" },
    },
    DeviceUpdateById: {
      __type: "UpdateByIdDevicePayload",
      __args: { _id: "MongoID!", record: "UpdateByIdDeviceInput!" },
    },
    DeviceUpdateOne: {
      __type: "UpdateOneDevicePayload",
      __args: {
        record: "UpdateOneDeviceInput!",
        filter: "FilterUpdateOneDeviceInput",
        sort: "SortUpdateOneDeviceInput",
        skip: "Int",
      },
    },
    DeviceUpdateMany: {
      __type: "UpdateManyDevicePayload",
      __args: {
        record: "UpdateManyDeviceInput!",
        filter: "FilterUpdateManyDeviceInput",
        sort: "SortUpdateManyDeviceInput",
        skip: "Int",
        limit: "Int",
      },
    },
    DeviceRemoveById: {
      __type: "RemoveByIdDevicePayload",
      __args: { _id: "MongoID!" },
    },
    DeviceRemoveOne: {
      __type: "RemoveOneDevicePayload",
      __args: {
        filter: "FilterRemoveOneDeviceInput",
        sort: "SortRemoveOneDeviceInput",
      },
    },
    DeviceRemoveMany: {
      __type: "RemoveManyDevicePayload",
      __args: { filter: "FilterRemoveManyDeviceInput!", limit: "Int" },
    },
    FlowShardCreateOne: {
      __type: "CreateOneFlowShardPayload",
      __args: { record: "CreateOneFlowShardInput!" },
    },
    FlowShardCreateMany: {
      __type: "CreateManyFlowShardPayload",
      __args: { records: "[CreateManyFlowShardInput!]!" },
    },
    FlowShardUpdateById: {
      __type: "UpdateByIdFlowShardPayload",
      __args: { _id: "MongoID!", record: "UpdateByIdFlowShardInput!" },
    },
    FlowShardUpdateOne: {
      __type: "UpdateOneFlowShardPayload",
      __args: {
        record: "UpdateOneFlowShardInput!",
        filter: "FilterUpdateOneFlowShardInput",
        sort: "SortUpdateOneFlowShardInput",
        skip: "Int",
      },
    },
    FlowShardUpdateMany: {
      __type: "UpdateManyFlowShardPayload",
      __args: {
        record: "UpdateManyFlowShardInput!",
        filter: "FilterUpdateManyFlowShardInput",
        sort: "SortUpdateManyFlowShardInput",
        skip: "Int",
        limit: "Int",
      },
    },
    FlowShardRemoveById: {
      __type: "RemoveByIdFlowShardPayload",
      __args: { _id: "MongoID!" },
    },
    FlowShardRemoveOne: {
      __type: "RemoveOneFlowShardPayload",
      __args: {
        filter: "FilterRemoveOneFlowShardInput",
        sort: "SortRemoveOneFlowShardInput",
      },
    },
    FlowShardRemoveMany: {
      __type: "RemoveManyFlowShardPayload",
      __args: { filter: "FilterRemoveManyFlowShardInput!", limit: "Int" },
    },
    ProgramCreateOne: {
      __type: "CreateOneProgramPayload",
      __args: { record: "CreateOneProgramInput!" },
    },
    ProgramCreateMany: {
      __type: "CreateManyProgramPayload",
      __args: { records: "[CreateManyProgramInput!]!" },
    },
    ProgramUpdateById: {
      __type: "UpdateByIdProgramPayload",
      __args: { _id: "MongoID!", record: "UpdateByIdProgramInput!" },
    },
    ProgramUpdateOne: {
      __type: "UpdateOneProgramPayload",
      __args: {
        record: "UpdateOneProgramInput!",
        filter: "FilterUpdateOneProgramInput",
        sort: "SortUpdateOneProgramInput",
        skip: "Int",
      },
    },
    ProgramUpdateMany: {
      __type: "UpdateManyProgramPayload",
      __args: {
        record: "UpdateManyProgramInput!",
        filter: "FilterUpdateManyProgramInput",
        sort: "SortUpdateManyProgramInput",
        skip: "Int",
        limit: "Int",
      },
    },
    ProgramRemoveById: {
      __type: "RemoveByIdProgramPayload",
      __args: { _id: "MongoID!" },
    },
    ProgramRemoveOne: {
      __type: "RemoveOneProgramPayload",
      __args: {
        filter: "FilterRemoveOneProgramInput",
        sort: "SortRemoveOneProgramInput",
      },
    },
    ProgramRemoveMany: {
      __type: "RemoveManyProgramPayload",
      __args: { filter: "FilterRemoveManyProgramInput!", limit: "Int" },
    },
    StackCreateOne: {
      __type: "CreateOneStackPayload",
      __args: { record: "CreateOneStackInput!" },
    },
    StackCreateMany: {
      __type: "CreateManyStackPayload",
      __args: { records: "[CreateManyStackInput!]!" },
    },
    StackUpdateById: {
      __type: "UpdateByIdStackPayload",
      __args: { _id: "MongoID!", record: "UpdateByIdStackInput!" },
    },
    StackUpdateOne: {
      __type: "UpdateOneStackPayload",
      __args: {
        record: "UpdateOneStackInput!",
        filter: "FilterUpdateOneStackInput",
        sort: "SortUpdateOneStackInput",
        skip: "Int",
      },
    },
    StackUpdateMany: {
      __type: "UpdateManyStackPayload",
      __args: {
        record: "UpdateManyStackInput!",
        filter: "FilterUpdateManyStackInput",
        sort: "SortUpdateManyStackInput",
        skip: "Int",
        limit: "Int",
      },
    },
    StackRemoveById: {
      __type: "RemoveByIdStackPayload",
      __args: { _id: "MongoID!" },
    },
    StackRemoveOne: {
      __type: "RemoveOneStackPayload",
      __args: {
        filter: "FilterRemoveOneStackInput",
        sort: "SortRemoveOneStackInput",
      },
    },
    StackRemoveMany: {
      __type: "RemoveManyStackPayload",
      __args: { filter: "FilterRemoveManyStackInput!", limit: "Int" },
    },
    DNSRecordCreateOne: {
      __type: "CreateOneDNSRecordPayload",
      __args: { record: "CreateOneDNSRecordInput!" },
    },
    DNSRecordCreateMany: {
      __type: "CreateManyDNSRecordPayload",
      __args: { records: "[CreateManyDNSRecordInput!]!" },
    },
    DNSRecordUpdateById: {
      __type: "UpdateByIdDNSRecordPayload",
      __args: { _id: "MongoID!", record: "UpdateByIdDNSRecordInput!" },
    },
    DNSRecordUpdateOne: {
      __type: "UpdateOneDNSRecordPayload",
      __args: {
        record: "UpdateOneDNSRecordInput!",
        filter: "FilterUpdateOneDNSRecordInput",
        sort: "SortUpdateOneDNSRecordInput",
        skip: "Int",
      },
    },
    DNSRecordUpdateMany: {
      __type: "UpdateManyDNSRecordPayload",
      __args: {
        record: "UpdateManyDNSRecordInput!",
        filter: "FilterUpdateManyDNSRecordInput",
        sort: "SortUpdateManyDNSRecordInput",
        skip: "Int",
        limit: "Int",
      },
    },
    DNSRecordRemoveById: {
      __type: "RemoveByIdDNSRecordPayload",
      __args: { _id: "MongoID!" },
    },
    DNSRecordRemoveOne: {
      __type: "RemoveOneDNSRecordPayload",
      __args: {
        filter: "FilterRemoveOneDNSRecordInput",
        sort: "SortRemoveOneDNSRecordInput",
      },
    },
    DNSRecordRemoveMany: {
      __type: "RemoveManyDNSRecordPayload",
      __args: { filter: "FilterRemoveManyDNSRecordInput!", limit: "Int" },
    },
  },
  subscription: {},
  ValidationError: {
    __typename: { __type: "String!" },
    message: { __type: "String" },
    errors: { __type: "[ValidatorError!]" },
  },
  ErrorInterface: {
    __typename: { __type: "String!" },
    message: { __type: "String" },
  },
  ValidatorError: {
    __typename: { __type: "String!" },
    message: { __type: "String" },
    path: { __type: "String" },
    value: { __type: "JSON" },
    idx: { __type: "Int!" },
  },
  MongoError: {
    __typename: { __type: "String!" },
    message: { __type: "String" },
    code: { __type: "Int" },
  },
  RuntimeError: {
    __typename: { __type: "String!" },
    message: { __type: "String" },
  },
  Program: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    plugins: { __type: "[JSON]" },
    hmi: { __type: "[JSON]" },
    program: { __type: "[JSON]" },
    io: { __type: "[ProgramIo]" },
    _id: { __type: "MongoID!" },
  },
  ProgramIo: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  Device: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    connected: { __type: "Boolean" },
    lastSeen: { __type: "Date" },
    network_name: { __type: "String" },
    did: { __type: "String" },
    program: { __type: "MongoID" },
    location: { __type: "String" },
    _id: { __type: "MongoID!" },
  },
  FilterFindOneDeviceInput: {
    name: { __type: "String" },
    connected: { __type: "Boolean" },
    lastSeen: { __type: "Date" },
    network_name: { __type: "String" },
    did: { __type: "String" },
    program: { __type: "MongoID" },
    location: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterFindOneDeviceOperatorsInput" },
    OR: { __type: "[FilterFindOneDeviceInput!]" },
    AND: { __type: "[FilterFindOneDeviceInput!]" },
  },
  FilterFindOneDeviceOperatorsInput: {
    _id: { __type: "FilterFindOneDevice_idOperatorsInput" },
  },
  FilterFindOneDevice_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  FilterFindManyDeviceInput: {
    name: { __type: "String" },
    connected: { __type: "Boolean" },
    lastSeen: { __type: "Date" },
    network_name: { __type: "String" },
    did: { __type: "String" },
    program: { __type: "MongoID" },
    location: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterFindManyDeviceOperatorsInput" },
    OR: { __type: "[FilterFindManyDeviceInput!]" },
    AND: { __type: "[FilterFindManyDeviceInput!]" },
  },
  FilterFindManyDeviceOperatorsInput: {
    _id: { __type: "FilterFindManyDevice_idOperatorsInput" },
  },
  FilterFindManyDevice_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  FilterCountDeviceInput: {
    name: { __type: "String" },
    connected: { __type: "Boolean" },
    lastSeen: { __type: "Date" },
    network_name: { __type: "String" },
    did: { __type: "String" },
    program: { __type: "MongoID" },
    location: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterCountDeviceOperatorsInput" },
    OR: { __type: "[FilterCountDeviceInput!]" },
    AND: { __type: "[FilterCountDeviceInput!]" },
  },
  FilterCountDeviceOperatorsInput: {
    _id: { __type: "FilterCountDevice_idOperatorsInput" },
  },
  FilterCountDevice_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  DeviceConnection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[DeviceEdge!]!" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "String" },
    endCursor: { __type: "String" },
  },
  DeviceEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Device!" },
    cursor: { __type: "String!" },
  },
  DevicePagination: {
    __typename: { __type: "String!" },
    count: { __type: "Int" },
    items: { __type: "[Device!]" },
    pageInfo: { __type: "PaginationInfo!" },
  },
  PaginationInfo: {
    __typename: { __type: "String!" },
    currentPage: { __type: "Int!" },
    perPage: { __type: "Int!" },
    pageCount: { __type: "Int" },
    itemCount: { __type: "Int" },
    hasNextPage: { __type: "Boolean" },
    hasPreviousPage: { __type: "Boolean" },
  },
  FlowShard: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    parent: { __type: "MongoID" },
    program: { __type: "MongoID" },
    nodes: { __type: "[FlowShardNodes]" },
    paths: { __type: "[FlowShardPaths]" },
    items: { __type: "[MongoID]" },
    _id: { __type: "MongoID!" },
  },
  FlowShardNodes: {
    __typename: { __type: "String!" },
    id: { __type: "String" },
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FlowShardPaths: {
    __typename: { __type: "String!" },
    id: { __type: "String" },
    type: { __type: "String" },
    source: { __type: "String" },
    sourceHandle: { __type: "String" },
    target: { __type: "String" },
    targetHandle: { __type: "String" },
    points: { __type: "[FlowShardPathsPoints]" },
    _id: { __type: "MongoID" },
  },
  FlowShardPathsPoints: {
    __typename: { __type: "String!" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterFindOneFlowShardInput: {
    name: { __type: "String" },
    parent: { __type: "MongoID" },
    program: { __type: "MongoID" },
    nodes: { __type: "[FilterFindOneFlowShardNodesInput]" },
    paths: { __type: "[FilterFindOneFlowShardPathsInput]" },
    items: { __type: "[MongoID]" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterFindOneFlowShardOperatorsInput" },
    OR: { __type: "[FilterFindOneFlowShardInput!]" },
    AND: { __type: "[FilterFindOneFlowShardInput!]" },
  },
  FilterFindOneFlowShardNodesInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterFindOneFlowShardPathsInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    source: { __type: "String" },
    sourceHandle: { __type: "String" },
    target: { __type: "String" },
    targetHandle: { __type: "String" },
    points: { __type: "[FilterFindOneFlowShardPathsPointsInput]" },
    _id: { __type: "MongoID" },
  },
  FilterFindOneFlowShardPathsPointsInput: {
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterFindOneFlowShardOperatorsInput: {
    _id: { __type: "FilterFindOneFlowShard_idOperatorsInput" },
  },
  FilterFindOneFlowShard_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  FilterFindManyFlowShardInput: {
    name: { __type: "String" },
    parent: { __type: "MongoID" },
    program: { __type: "MongoID" },
    nodes: { __type: "[FilterFindManyFlowShardNodesInput]" },
    paths: { __type: "[FilterFindManyFlowShardPathsInput]" },
    items: { __type: "[MongoID]" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterFindManyFlowShardOperatorsInput" },
    OR: { __type: "[FilterFindManyFlowShardInput!]" },
    AND: { __type: "[FilterFindManyFlowShardInput!]" },
  },
  FilterFindManyFlowShardNodesInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterFindManyFlowShardPathsInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    source: { __type: "String" },
    sourceHandle: { __type: "String" },
    target: { __type: "String" },
    targetHandle: { __type: "String" },
    points: { __type: "[FilterFindManyFlowShardPathsPointsInput]" },
    _id: { __type: "MongoID" },
  },
  FilterFindManyFlowShardPathsPointsInput: {
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterFindManyFlowShardOperatorsInput: {
    _id: { __type: "FilterFindManyFlowShard_idOperatorsInput" },
  },
  FilterFindManyFlowShard_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  FilterCountFlowShardInput: {
    name: { __type: "String" },
    parent: { __type: "MongoID" },
    program: { __type: "MongoID" },
    nodes: { __type: "[FilterCountFlowShardNodesInput]" },
    paths: { __type: "[FilterCountFlowShardPathsInput]" },
    items: { __type: "[MongoID]" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterCountFlowShardOperatorsInput" },
    OR: { __type: "[FilterCountFlowShardInput!]" },
    AND: { __type: "[FilterCountFlowShardInput!]" },
  },
  FilterCountFlowShardNodesInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterCountFlowShardPathsInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    source: { __type: "String" },
    sourceHandle: { __type: "String" },
    target: { __type: "String" },
    targetHandle: { __type: "String" },
    points: { __type: "[FilterCountFlowShardPathsPointsInput]" },
    _id: { __type: "MongoID" },
  },
  FilterCountFlowShardPathsPointsInput: {
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterCountFlowShardOperatorsInput: {
    _id: { __type: "FilterCountFlowShard_idOperatorsInput" },
  },
  FilterCountFlowShard_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  FlowShardConnection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[FlowShardEdge!]!" },
  },
  FlowShardEdge: {
    __typename: { __type: "String!" },
    node: { __type: "FlowShard!" },
    cursor: { __type: "String!" },
  },
  FlowShardPagination: {
    __typename: { __type: "String!" },
    count: { __type: "Int" },
    items: { __type: "[FlowShard!]" },
    pageInfo: { __type: "PaginationInfo!" },
  },
  FilterFindOneProgramInput: {
    name: { __type: "String" },
    plugins: { __type: "[JSON]" },
    hmi: { __type: "[JSON]" },
    program: { __type: "[JSON]" },
    io: { __type: "[FilterFindOneProgramIoInput]" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterFindOneProgramOperatorsInput" },
    OR: { __type: "[FilterFindOneProgramInput!]" },
    AND: { __type: "[FilterFindOneProgramInput!]" },
  },
  FilterFindOneProgramIoInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterFindOneProgramOperatorsInput: {
    _id: { __type: "FilterFindOneProgram_idOperatorsInput" },
  },
  FilterFindOneProgram_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  FilterFindManyProgramInput: {
    name: { __type: "String" },
    plugins: { __type: "[JSON]" },
    hmi: { __type: "[JSON]" },
    program: { __type: "[JSON]" },
    io: { __type: "[FilterFindManyProgramIoInput]" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterFindManyProgramOperatorsInput" },
    OR: { __type: "[FilterFindManyProgramInput!]" },
    AND: { __type: "[FilterFindManyProgramInput!]" },
  },
  FilterFindManyProgramIoInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterFindManyProgramOperatorsInput: {
    _id: { __type: "FilterFindManyProgram_idOperatorsInput" },
  },
  FilterFindManyProgram_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  FilterCountProgramInput: {
    name: { __type: "String" },
    plugins: { __type: "[JSON]" },
    hmi: { __type: "[JSON]" },
    program: { __type: "[JSON]" },
    io: { __type: "[FilterCountProgramIoInput]" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterCountProgramOperatorsInput" },
    OR: { __type: "[FilterCountProgramInput!]" },
    AND: { __type: "[FilterCountProgramInput!]" },
  },
  FilterCountProgramIoInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterCountProgramOperatorsInput: {
    _id: { __type: "FilterCountProgram_idOperatorsInput" },
  },
  FilterCountProgram_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  ProgramConnection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[ProgramEdge!]!" },
  },
  ProgramEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Program!" },
    cursor: { __type: "String!" },
  },
  ProgramPagination: {
    __typename: { __type: "String!" },
    count: { __type: "Int" },
    items: { __type: "[Program!]" },
    pageInfo: { __type: "PaginationInfo!" },
  },
  Stack: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    items: { __type: "[StackItems]" },
    program: { __type: "String" },
    location: { __type: "String" },
    _id: { __type: "MongoID!" },
  },
  StackItems: {
    __typename: { __type: "String!" },
    key: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
    dimensions: { __type: "StackItemsDimensions" },
    inputs: { __type: "[StackItemsInputs]" },
    outputs: { __type: "[StackItemsInputs]" },
    actions: { __type: "String" },
    ui: { __type: "String" },
    ports: { __type: "[StackItemsPorts]" },
    _id: { __type: "MongoID" },
  },
  StackItemsDimensions: {
    __typename: { __type: "String!" },
    width: { __type: "Float" },
    height: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  StackItemsInputs: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    type: { __type: "String" },
    typeData: { __type: "JSON" },
    _id: { __type: "MongoID" },
  },
  StackItemsPorts: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    rotation: { __type: "Float" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterFindOneStackInput: {
    name: { __type: "String" },
    items: { __type: "[FilterFindOneStackItemsInput]" },
    program: { __type: "String" },
    location: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterFindOneStackOperatorsInput" },
    OR: { __type: "[FilterFindOneStackInput!]" },
    AND: { __type: "[FilterFindOneStackInput!]" },
  },
  FilterFindOneStackItemsInput: {
    key: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
    dimensions: { __type: "FilterFindOneStackItemsDimensionsInput" },
    inputs: { __type: "[FilterFindOneStackItemsInputsInput]" },
    outputs: { __type: "[FilterFindOneStackItemsInputsInput]" },
    actions: { __type: "String" },
    ui: { __type: "String" },
    ports: { __type: "[FilterFindOneStackItemsPortsInput]" },
    _id: { __type: "MongoID" },
  },
  FilterFindOneStackItemsDimensionsInput: {
    width: { __type: "Float" },
    height: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterFindOneStackItemsInputsInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    typeData: { __type: "JSON" },
    _id: { __type: "MongoID" },
  },
  FilterFindOneStackItemsPortsInput: {
    name: { __type: "String" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    rotation: { __type: "Float" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterFindOneStackOperatorsInput: {
    _id: { __type: "FilterFindOneStack_idOperatorsInput" },
  },
  FilterFindOneStack_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  FilterFindManyStackInput: {
    name: { __type: "String" },
    items: { __type: "[FilterFindManyStackItemsInput]" },
    program: { __type: "String" },
    location: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterFindManyStackOperatorsInput" },
    OR: { __type: "[FilterFindManyStackInput!]" },
    AND: { __type: "[FilterFindManyStackInput!]" },
  },
  FilterFindManyStackItemsInput: {
    key: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
    dimensions: { __type: "FilterFindManyStackItemsDimensionsInput" },
    inputs: { __type: "[FilterFindManyStackItemsInputsInput]" },
    outputs: { __type: "[FilterFindManyStackItemsInputsInput]" },
    actions: { __type: "String" },
    ui: { __type: "String" },
    ports: { __type: "[FilterFindManyStackItemsPortsInput]" },
    _id: { __type: "MongoID" },
  },
  FilterFindManyStackItemsDimensionsInput: {
    width: { __type: "Float" },
    height: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterFindManyStackItemsInputsInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    typeData: { __type: "JSON" },
    _id: { __type: "MongoID" },
  },
  FilterFindManyStackItemsPortsInput: {
    name: { __type: "String" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    rotation: { __type: "Float" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterFindManyStackOperatorsInput: {
    _id: { __type: "FilterFindManyStack_idOperatorsInput" },
  },
  FilterFindManyStack_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  FilterCountStackInput: {
    name: { __type: "String" },
    items: { __type: "[FilterCountStackItemsInput]" },
    program: { __type: "String" },
    location: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterCountStackOperatorsInput" },
    OR: { __type: "[FilterCountStackInput!]" },
    AND: { __type: "[FilterCountStackInput!]" },
  },
  FilterCountStackItemsInput: {
    key: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
    dimensions: { __type: "FilterCountStackItemsDimensionsInput" },
    inputs: { __type: "[FilterCountStackItemsInputsInput]" },
    outputs: { __type: "[FilterCountStackItemsInputsInput]" },
    actions: { __type: "String" },
    ui: { __type: "String" },
    ports: { __type: "[FilterCountStackItemsPortsInput]" },
    _id: { __type: "MongoID" },
  },
  FilterCountStackItemsDimensionsInput: {
    width: { __type: "Float" },
    height: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterCountStackItemsInputsInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    typeData: { __type: "JSON" },
    _id: { __type: "MongoID" },
  },
  FilterCountStackItemsPortsInput: {
    name: { __type: "String" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    rotation: { __type: "Float" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterCountStackOperatorsInput: {
    _id: { __type: "FilterCountStack_idOperatorsInput" },
  },
  FilterCountStack_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  StackConnection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[StackEdge!]!" },
  },
  StackEdge: {
    __typename: { __type: "String!" },
    node: { __type: "Stack!" },
    cursor: { __type: "String!" },
  },
  StackPagination: {
    __typename: { __type: "String!" },
    count: { __type: "Int" },
    items: { __type: "[Stack!]" },
    pageInfo: { __type: "PaginationInfo!" },
  },
  DNSRecord: {
    __typename: { __type: "String!" },
    subdomain: { __type: "String" },
    domain: { __type: "String" },
    address: { __type: "String" },
    _id: { __type: "MongoID!" },
  },
  FilterFindOneDNSRecordInput: {
    subdomain: { __type: "String" },
    domain: { __type: "String" },
    address: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterFindOneDNSRecordOperatorsInput" },
    OR: { __type: "[FilterFindOneDNSRecordInput!]" },
    AND: { __type: "[FilterFindOneDNSRecordInput!]" },
  },
  FilterFindOneDNSRecordOperatorsInput: {
    _id: { __type: "FilterFindOneDNSRecord_idOperatorsInput" },
  },
  FilterFindOneDNSRecord_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  FilterFindManyDNSRecordInput: {
    subdomain: { __type: "String" },
    domain: { __type: "String" },
    address: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterFindManyDNSRecordOperatorsInput" },
    OR: { __type: "[FilterFindManyDNSRecordInput!]" },
    AND: { __type: "[FilterFindManyDNSRecordInput!]" },
  },
  FilterFindManyDNSRecordOperatorsInput: {
    _id: { __type: "FilterFindManyDNSRecord_idOperatorsInput" },
  },
  FilterFindManyDNSRecord_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  FilterCountDNSRecordInput: {
    subdomain: { __type: "String" },
    domain: { __type: "String" },
    address: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterCountDNSRecordOperatorsInput" },
    OR: { __type: "[FilterCountDNSRecordInput!]" },
    AND: { __type: "[FilterCountDNSRecordInput!]" },
  },
  FilterCountDNSRecordOperatorsInput: {
    _id: { __type: "FilterCountDNSRecord_idOperatorsInput" },
  },
  FilterCountDNSRecord_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  DNSRecordConnection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
    edges: { __type: "[DNSRecordEdge!]!" },
  },
  DNSRecordEdge: {
    __typename: { __type: "String!" },
    node: { __type: "DNSRecord!" },
    cursor: { __type: "String!" },
  },
  DNSRecordPagination: {
    __typename: { __type: "String!" },
    count: { __type: "Int" },
    items: { __type: "[DNSRecord!]" },
    pageInfo: { __type: "PaginationInfo!" },
  },
  StackItemsInput: {
    key: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
    dimensions: { __type: "StackItemsDimensionsInput" },
    inputs: { __type: "[StackItemsInputsInput]" },
    outputs: { __type: "[StackItemsInputsInput]" },
    actions: { __type: "String" },
    ui: { __type: "String" },
    ports: { __type: "[StackItemsPortsInput]" },
    _id: { __type: "MongoID" },
  },
  StackItemsDimensionsInput: {
    width: { __type: "Float" },
    height: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  StackItemsInputsInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    typeData: { __type: "JSON" },
    _id: { __type: "MongoID" },
  },
  StackItemsPortsInput: {
    name: { __type: "String" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    rotation: { __type: "Float" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  CreateOneDevicePayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Device" },
    error: { __type: "ErrorInterface" },
  },
  CreateOneDeviceInput: {
    name: { __type: "String" },
    connected: { __type: "Boolean" },
    lastSeen: { __type: "Date" },
    network_name: { __type: "String" },
    did: { __type: "String" },
    program: { __type: "MongoID" },
    location: { __type: "String" },
  },
  CreateManyDevicePayload: {
    __typename: { __type: "String!" },
    recordIds: { __type: "[MongoID!]!" },
    records: { __type: "[Device!]" },
    createdCount: { __type: "Int!" },
    error: { __type: "ErrorInterface" },
  },
  CreateManyDeviceInput: {
    name: { __type: "String" },
    connected: { __type: "Boolean" },
    lastSeen: { __type: "Date" },
    network_name: { __type: "String" },
    did: { __type: "String" },
    program: { __type: "MongoID" },
    location: { __type: "String" },
  },
  UpdateByIdDevicePayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Device" },
    error: { __type: "ErrorInterface" },
  },
  UpdateByIdDeviceInput: {
    name: { __type: "String" },
    connected: { __type: "Boolean" },
    lastSeen: { __type: "Date" },
    network_name: { __type: "String" },
    did: { __type: "String" },
    program: { __type: "MongoID" },
    location: { __type: "String" },
  },
  UpdateOneDevicePayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Device" },
    error: { __type: "ErrorInterface" },
  },
  UpdateOneDeviceInput: {
    name: { __type: "String" },
    connected: { __type: "Boolean" },
    lastSeen: { __type: "Date" },
    network_name: { __type: "String" },
    did: { __type: "String" },
    program: { __type: "MongoID" },
    location: { __type: "String" },
  },
  FilterUpdateOneDeviceInput: {
    name: { __type: "String" },
    connected: { __type: "Boolean" },
    lastSeen: { __type: "Date" },
    network_name: { __type: "String" },
    did: { __type: "String" },
    program: { __type: "MongoID" },
    location: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterUpdateOneDeviceOperatorsInput" },
    OR: { __type: "[FilterUpdateOneDeviceInput!]" },
    AND: { __type: "[FilterUpdateOneDeviceInput!]" },
  },
  FilterUpdateOneDeviceOperatorsInput: {
    _id: { __type: "FilterUpdateOneDevice_idOperatorsInput" },
  },
  FilterUpdateOneDevice_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  UpdateManyDevicePayload: {
    __typename: { __type: "String!" },
    numAffected: { __type: "Int" },
    error: { __type: "ErrorInterface" },
  },
  UpdateManyDeviceInput: {
    name: { __type: "String" },
    connected: { __type: "Boolean" },
    lastSeen: { __type: "Date" },
    network_name: { __type: "String" },
    did: { __type: "String" },
    program: { __type: "MongoID" },
    location: { __type: "String" },
  },
  FilterUpdateManyDeviceInput: {
    name: { __type: "String" },
    connected: { __type: "Boolean" },
    lastSeen: { __type: "Date" },
    network_name: { __type: "String" },
    did: { __type: "String" },
    program: { __type: "MongoID" },
    location: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterUpdateManyDeviceOperatorsInput" },
    OR: { __type: "[FilterUpdateManyDeviceInput!]" },
    AND: { __type: "[FilterUpdateManyDeviceInput!]" },
  },
  FilterUpdateManyDeviceOperatorsInput: {
    _id: { __type: "FilterUpdateManyDevice_idOperatorsInput" },
  },
  FilterUpdateManyDevice_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  RemoveByIdDevicePayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Device" },
    error: { __type: "ErrorInterface" },
  },
  RemoveOneDevicePayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Device" },
    error: { __type: "ErrorInterface" },
  },
  FilterRemoveOneDeviceInput: {
    name: { __type: "String" },
    connected: { __type: "Boolean" },
    lastSeen: { __type: "Date" },
    network_name: { __type: "String" },
    did: { __type: "String" },
    program: { __type: "MongoID" },
    location: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterRemoveOneDeviceOperatorsInput" },
    OR: { __type: "[FilterRemoveOneDeviceInput!]" },
    AND: { __type: "[FilterRemoveOneDeviceInput!]" },
  },
  FilterRemoveOneDeviceOperatorsInput: {
    _id: { __type: "FilterRemoveOneDevice_idOperatorsInput" },
  },
  FilterRemoveOneDevice_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  RemoveManyDevicePayload: {
    __typename: { __type: "String!" },
    numAffected: { __type: "Int" },
    error: { __type: "ErrorInterface" },
  },
  FilterRemoveManyDeviceInput: {
    name: { __type: "String" },
    connected: { __type: "Boolean" },
    lastSeen: { __type: "Date" },
    network_name: { __type: "String" },
    did: { __type: "String" },
    program: { __type: "MongoID" },
    location: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterRemoveManyDeviceOperatorsInput" },
    OR: { __type: "[FilterRemoveManyDeviceInput!]" },
    AND: { __type: "[FilterRemoveManyDeviceInput!]" },
  },
  FilterRemoveManyDeviceOperatorsInput: {
    _id: { __type: "FilterRemoveManyDevice_idOperatorsInput" },
  },
  FilterRemoveManyDevice_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  CreateOneFlowShardPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "FlowShard" },
    error: { __type: "ErrorInterface" },
  },
  CreateOneFlowShardInput: {
    name: { __type: "String" },
    parent: { __type: "MongoID" },
    program: { __type: "MongoID" },
    nodes: { __type: "[FlowShardNodesInput]" },
    paths: { __type: "[FlowShardPathsInput]" },
    items: { __type: "[MongoID]" },
  },
  FlowShardNodesInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FlowShardPathsInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    source: { __type: "String" },
    sourceHandle: { __type: "String" },
    target: { __type: "String" },
    targetHandle: { __type: "String" },
    points: { __type: "[FlowShardPathsPointsInput]" },
    _id: { __type: "MongoID" },
  },
  FlowShardPathsPointsInput: {
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  CreateManyFlowShardPayload: {
    __typename: { __type: "String!" },
    recordIds: { __type: "[MongoID!]!" },
    records: { __type: "[FlowShard!]" },
    createdCount: { __type: "Int!" },
    error: { __type: "ErrorInterface" },
  },
  CreateManyFlowShardInput: {
    name: { __type: "String" },
    parent: { __type: "MongoID" },
    program: { __type: "MongoID" },
    nodes: { __type: "[FlowShardNodesInput]" },
    paths: { __type: "[FlowShardPathsInput]" },
    items: { __type: "[MongoID]" },
  },
  UpdateByIdFlowShardPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "FlowShard" },
    error: { __type: "ErrorInterface" },
  },
  UpdateByIdFlowShardInput: {
    name: { __type: "String" },
    parent: { __type: "MongoID" },
    program: { __type: "MongoID" },
    nodes: { __type: "[UpdateByIdFlowShardNodesInput]" },
    paths: { __type: "[UpdateByIdFlowShardPathsInput]" },
    items: { __type: "[MongoID]" },
  },
  UpdateByIdFlowShardNodesInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  UpdateByIdFlowShardPathsInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    source: { __type: "String" },
    sourceHandle: { __type: "String" },
    target: { __type: "String" },
    targetHandle: { __type: "String" },
    points: { __type: "[UpdateByIdFlowShardPathsPointsInput]" },
    _id: { __type: "MongoID" },
  },
  UpdateByIdFlowShardPathsPointsInput: {
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  UpdateOneFlowShardPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "FlowShard" },
    error: { __type: "ErrorInterface" },
  },
  UpdateOneFlowShardInput: {
    name: { __type: "String" },
    parent: { __type: "MongoID" },
    program: { __type: "MongoID" },
    nodes: { __type: "[UpdateOneFlowShardNodesInput]" },
    paths: { __type: "[UpdateOneFlowShardPathsInput]" },
    items: { __type: "[MongoID]" },
  },
  UpdateOneFlowShardNodesInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  UpdateOneFlowShardPathsInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    source: { __type: "String" },
    sourceHandle: { __type: "String" },
    target: { __type: "String" },
    targetHandle: { __type: "String" },
    points: { __type: "[UpdateOneFlowShardPathsPointsInput]" },
    _id: { __type: "MongoID" },
  },
  UpdateOneFlowShardPathsPointsInput: {
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateOneFlowShardInput: {
    name: { __type: "String" },
    parent: { __type: "MongoID" },
    program: { __type: "MongoID" },
    nodes: { __type: "[FilterUpdateOneFlowShardNodesInput]" },
    paths: { __type: "[FilterUpdateOneFlowShardPathsInput]" },
    items: { __type: "[MongoID]" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterUpdateOneFlowShardOperatorsInput" },
    OR: { __type: "[FilterUpdateOneFlowShardInput!]" },
    AND: { __type: "[FilterUpdateOneFlowShardInput!]" },
  },
  FilterUpdateOneFlowShardNodesInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateOneFlowShardPathsInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    source: { __type: "String" },
    sourceHandle: { __type: "String" },
    target: { __type: "String" },
    targetHandle: { __type: "String" },
    points: { __type: "[FilterUpdateOneFlowShardPathsPointsInput]" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateOneFlowShardPathsPointsInput: {
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateOneFlowShardOperatorsInput: {
    _id: { __type: "FilterUpdateOneFlowShard_idOperatorsInput" },
  },
  FilterUpdateOneFlowShard_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  UpdateManyFlowShardPayload: {
    __typename: { __type: "String!" },
    numAffected: { __type: "Int" },
    error: { __type: "ErrorInterface" },
  },
  UpdateManyFlowShardInput: {
    name: { __type: "String" },
    parent: { __type: "MongoID" },
    program: { __type: "MongoID" },
    nodes: { __type: "[UpdateManyFlowShardNodesInput]" },
    paths: { __type: "[UpdateManyFlowShardPathsInput]" },
    items: { __type: "[MongoID]" },
  },
  UpdateManyFlowShardNodesInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  UpdateManyFlowShardPathsInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    source: { __type: "String" },
    sourceHandle: { __type: "String" },
    target: { __type: "String" },
    targetHandle: { __type: "String" },
    points: { __type: "[UpdateManyFlowShardPathsPointsInput]" },
    _id: { __type: "MongoID" },
  },
  UpdateManyFlowShardPathsPointsInput: {
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateManyFlowShardInput: {
    name: { __type: "String" },
    parent: { __type: "MongoID" },
    program: { __type: "MongoID" },
    nodes: { __type: "[FilterUpdateManyFlowShardNodesInput]" },
    paths: { __type: "[FilterUpdateManyFlowShardPathsInput]" },
    items: { __type: "[MongoID]" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterUpdateManyFlowShardOperatorsInput" },
    OR: { __type: "[FilterUpdateManyFlowShardInput!]" },
    AND: { __type: "[FilterUpdateManyFlowShardInput!]" },
  },
  FilterUpdateManyFlowShardNodesInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateManyFlowShardPathsInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    source: { __type: "String" },
    sourceHandle: { __type: "String" },
    target: { __type: "String" },
    targetHandle: { __type: "String" },
    points: { __type: "[FilterUpdateManyFlowShardPathsPointsInput]" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateManyFlowShardPathsPointsInput: {
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateManyFlowShardOperatorsInput: {
    _id: { __type: "FilterUpdateManyFlowShard_idOperatorsInput" },
  },
  FilterUpdateManyFlowShard_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  RemoveByIdFlowShardPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "FlowShard" },
    error: { __type: "ErrorInterface" },
  },
  RemoveOneFlowShardPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "FlowShard" },
    error: { __type: "ErrorInterface" },
  },
  FilterRemoveOneFlowShardInput: {
    name: { __type: "String" },
    parent: { __type: "MongoID" },
    program: { __type: "MongoID" },
    nodes: { __type: "[FilterRemoveOneFlowShardNodesInput]" },
    paths: { __type: "[FilterRemoveOneFlowShardPathsInput]" },
    items: { __type: "[MongoID]" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterRemoveOneFlowShardOperatorsInput" },
    OR: { __type: "[FilterRemoveOneFlowShardInput!]" },
    AND: { __type: "[FilterRemoveOneFlowShardInput!]" },
  },
  FilterRemoveOneFlowShardNodesInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveOneFlowShardPathsInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    source: { __type: "String" },
    sourceHandle: { __type: "String" },
    target: { __type: "String" },
    targetHandle: { __type: "String" },
    points: { __type: "[FilterRemoveOneFlowShardPathsPointsInput]" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveOneFlowShardPathsPointsInput: {
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveOneFlowShardOperatorsInput: {
    _id: { __type: "FilterRemoveOneFlowShard_idOperatorsInput" },
  },
  FilterRemoveOneFlowShard_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  RemoveManyFlowShardPayload: {
    __typename: { __type: "String!" },
    numAffected: { __type: "Int" },
    error: { __type: "ErrorInterface" },
  },
  FilterRemoveManyFlowShardInput: {
    name: { __type: "String" },
    parent: { __type: "MongoID" },
    program: { __type: "MongoID" },
    nodes: { __type: "[FilterRemoveManyFlowShardNodesInput]" },
    paths: { __type: "[FilterRemoveManyFlowShardPathsInput]" },
    items: { __type: "[MongoID]" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterRemoveManyFlowShardOperatorsInput" },
    OR: { __type: "[FilterRemoveManyFlowShardInput!]" },
    AND: { __type: "[FilterRemoveManyFlowShardInput!]" },
  },
  FilterRemoveManyFlowShardNodesInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveManyFlowShardPathsInput: {
    id: { __type: "String" },
    type: { __type: "String" },
    source: { __type: "String" },
    sourceHandle: { __type: "String" },
    target: { __type: "String" },
    targetHandle: { __type: "String" },
    points: { __type: "[FilterRemoveManyFlowShardPathsPointsInput]" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveManyFlowShardPathsPointsInput: {
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveManyFlowShardOperatorsInput: {
    _id: { __type: "FilterRemoveManyFlowShard_idOperatorsInput" },
  },
  FilterRemoveManyFlowShard_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  CreateOneProgramPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Program" },
    error: { __type: "ErrorInterface" },
  },
  CreateOneProgramInput: {
    name: { __type: "String" },
    plugins: { __type: "[JSON]" },
    hmi: { __type: "[JSON]" },
    program: { __type: "[JSON]" },
    io: { __type: "[ProgramIoInput]" },
  },
  ProgramIoInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  CreateManyProgramPayload: {
    __typename: { __type: "String!" },
    recordIds: { __type: "[MongoID!]!" },
    records: { __type: "[Program!]" },
    createdCount: { __type: "Int!" },
    error: { __type: "ErrorInterface" },
  },
  CreateManyProgramInput: {
    name: { __type: "String" },
    plugins: { __type: "[JSON]" },
    hmi: { __type: "[JSON]" },
    program: { __type: "[JSON]" },
    io: { __type: "[ProgramIoInput]" },
  },
  UpdateByIdProgramPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Program" },
    error: { __type: "ErrorInterface" },
  },
  UpdateByIdProgramInput: {
    name: { __type: "String" },
    plugins: { __type: "[JSON]" },
    hmi: { __type: "[JSON]" },
    program: { __type: "[JSON]" },
    io: { __type: "[UpdateByIdProgramIoInput]" },
  },
  UpdateByIdProgramIoInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  UpdateOneProgramPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Program" },
    error: { __type: "ErrorInterface" },
  },
  UpdateOneProgramInput: {
    name: { __type: "String" },
    plugins: { __type: "[JSON]" },
    hmi: { __type: "[JSON]" },
    program: { __type: "[JSON]" },
    io: { __type: "[UpdateOneProgramIoInput]" },
  },
  UpdateOneProgramIoInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateOneProgramInput: {
    name: { __type: "String" },
    plugins: { __type: "[JSON]" },
    hmi: { __type: "[JSON]" },
    program: { __type: "[JSON]" },
    io: { __type: "[FilterUpdateOneProgramIoInput]" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterUpdateOneProgramOperatorsInput" },
    OR: { __type: "[FilterUpdateOneProgramInput!]" },
    AND: { __type: "[FilterUpdateOneProgramInput!]" },
  },
  FilterUpdateOneProgramIoInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateOneProgramOperatorsInput: {
    _id: { __type: "FilterUpdateOneProgram_idOperatorsInput" },
  },
  FilterUpdateOneProgram_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  UpdateManyProgramPayload: {
    __typename: { __type: "String!" },
    numAffected: { __type: "Int" },
    error: { __type: "ErrorInterface" },
  },
  UpdateManyProgramInput: {
    name: { __type: "String" },
    plugins: { __type: "[JSON]" },
    hmi: { __type: "[JSON]" },
    program: { __type: "[JSON]" },
    io: { __type: "[UpdateManyProgramIoInput]" },
  },
  UpdateManyProgramIoInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateManyProgramInput: {
    name: { __type: "String" },
    plugins: { __type: "[JSON]" },
    hmi: { __type: "[JSON]" },
    program: { __type: "[JSON]" },
    io: { __type: "[FilterUpdateManyProgramIoInput]" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterUpdateManyProgramOperatorsInput" },
    OR: { __type: "[FilterUpdateManyProgramInput!]" },
    AND: { __type: "[FilterUpdateManyProgramInput!]" },
  },
  FilterUpdateManyProgramIoInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateManyProgramOperatorsInput: {
    _id: { __type: "FilterUpdateManyProgram_idOperatorsInput" },
  },
  FilterUpdateManyProgram_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  RemoveByIdProgramPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Program" },
    error: { __type: "ErrorInterface" },
  },
  RemoveOneProgramPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Program" },
    error: { __type: "ErrorInterface" },
  },
  FilterRemoveOneProgramInput: {
    name: { __type: "String" },
    plugins: { __type: "[JSON]" },
    hmi: { __type: "[JSON]" },
    program: { __type: "[JSON]" },
    io: { __type: "[FilterRemoveOneProgramIoInput]" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterRemoveOneProgramOperatorsInput" },
    OR: { __type: "[FilterRemoveOneProgramInput!]" },
    AND: { __type: "[FilterRemoveOneProgramInput!]" },
  },
  FilterRemoveOneProgramIoInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveOneProgramOperatorsInput: {
    _id: { __type: "FilterRemoveOneProgram_idOperatorsInput" },
  },
  FilterRemoveOneProgram_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  RemoveManyProgramPayload: {
    __typename: { __type: "String!" },
    numAffected: { __type: "Int" },
    error: { __type: "ErrorInterface" },
  },
  FilterRemoveManyProgramInput: {
    name: { __type: "String" },
    plugins: { __type: "[JSON]" },
    hmi: { __type: "[JSON]" },
    program: { __type: "[JSON]" },
    io: { __type: "[FilterRemoveManyProgramIoInput]" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterRemoveManyProgramOperatorsInput" },
    OR: { __type: "[FilterRemoveManyProgramInput!]" },
    AND: { __type: "[FilterRemoveManyProgramInput!]" },
  },
  FilterRemoveManyProgramIoInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveManyProgramOperatorsInput: {
    _id: { __type: "FilterRemoveManyProgram_idOperatorsInput" },
  },
  FilterRemoveManyProgram_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  CreateOneStackPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Stack" },
    error: { __type: "ErrorInterface" },
  },
  CreateOneStackInput: {
    name: { __type: "String" },
    items: { __type: "[StackItemsInput]" },
    program: { __type: "String" },
    location: { __type: "String" },
  },
  CreateManyStackPayload: {
    __typename: { __type: "String!" },
    recordIds: { __type: "[MongoID!]!" },
    records: { __type: "[Stack!]" },
    createdCount: { __type: "Int!" },
    error: { __type: "ErrorInterface" },
  },
  CreateManyStackInput: {
    name: { __type: "String" },
    items: { __type: "[StackItemsInput]" },
    program: { __type: "String" },
    location: { __type: "String" },
  },
  UpdateByIdStackPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Stack" },
    error: { __type: "ErrorInterface" },
  },
  UpdateByIdStackInput: {
    name: { __type: "String" },
    items: { __type: "[UpdateByIdStackItemsInput]" },
    program: { __type: "String" },
    location: { __type: "String" },
  },
  UpdateByIdStackItemsInput: {
    key: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
    dimensions: { __type: "UpdateByIdStackItemsDimensionsInput" },
    inputs: { __type: "[UpdateByIdStackItemsInputsInput]" },
    outputs: { __type: "[UpdateByIdStackItemsInputsInput]" },
    actions: { __type: "String" },
    ui: { __type: "String" },
    ports: { __type: "[UpdateByIdStackItemsPortsInput]" },
    _id: { __type: "MongoID" },
  },
  UpdateByIdStackItemsDimensionsInput: {
    width: { __type: "Float" },
    height: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  UpdateByIdStackItemsInputsInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    typeData: { __type: "JSON" },
    _id: { __type: "MongoID" },
  },
  UpdateByIdStackItemsPortsInput: {
    name: { __type: "String" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    rotation: { __type: "Float" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  UpdateOneStackPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Stack" },
    error: { __type: "ErrorInterface" },
  },
  UpdateOneStackInput: {
    name: { __type: "String" },
    items: { __type: "[UpdateOneStackItemsInput]" },
    program: { __type: "String" },
    location: { __type: "String" },
  },
  UpdateOneStackItemsInput: {
    key: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
    dimensions: { __type: "UpdateOneStackItemsDimensionsInput" },
    inputs: { __type: "[UpdateOneStackItemsInputsInput]" },
    outputs: { __type: "[UpdateOneStackItemsInputsInput]" },
    actions: { __type: "String" },
    ui: { __type: "String" },
    ports: { __type: "[UpdateOneStackItemsPortsInput]" },
    _id: { __type: "MongoID" },
  },
  UpdateOneStackItemsDimensionsInput: {
    width: { __type: "Float" },
    height: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  UpdateOneStackItemsInputsInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    typeData: { __type: "JSON" },
    _id: { __type: "MongoID" },
  },
  UpdateOneStackItemsPortsInput: {
    name: { __type: "String" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    rotation: { __type: "Float" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateOneStackInput: {
    name: { __type: "String" },
    items: { __type: "[FilterUpdateOneStackItemsInput]" },
    program: { __type: "String" },
    location: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterUpdateOneStackOperatorsInput" },
    OR: { __type: "[FilterUpdateOneStackInput!]" },
    AND: { __type: "[FilterUpdateOneStackInput!]" },
  },
  FilterUpdateOneStackItemsInput: {
    key: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
    dimensions: { __type: "FilterUpdateOneStackItemsDimensionsInput" },
    inputs: { __type: "[FilterUpdateOneStackItemsInputsInput]" },
    outputs: { __type: "[FilterUpdateOneStackItemsInputsInput]" },
    actions: { __type: "String" },
    ui: { __type: "String" },
    ports: { __type: "[FilterUpdateOneStackItemsPortsInput]" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateOneStackItemsDimensionsInput: {
    width: { __type: "Float" },
    height: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateOneStackItemsInputsInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    typeData: { __type: "JSON" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateOneStackItemsPortsInput: {
    name: { __type: "String" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    rotation: { __type: "Float" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateOneStackOperatorsInput: {
    _id: { __type: "FilterUpdateOneStack_idOperatorsInput" },
  },
  FilterUpdateOneStack_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  UpdateManyStackPayload: {
    __typename: { __type: "String!" },
    numAffected: { __type: "Int" },
    error: { __type: "ErrorInterface" },
  },
  UpdateManyStackInput: {
    name: { __type: "String" },
    items: { __type: "[UpdateManyStackItemsInput]" },
    program: { __type: "String" },
    location: { __type: "String" },
  },
  UpdateManyStackItemsInput: {
    key: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
    dimensions: { __type: "UpdateManyStackItemsDimensionsInput" },
    inputs: { __type: "[UpdateManyStackItemsInputsInput]" },
    outputs: { __type: "[UpdateManyStackItemsInputsInput]" },
    actions: { __type: "String" },
    ui: { __type: "String" },
    ports: { __type: "[UpdateManyStackItemsPortsInput]" },
    _id: { __type: "MongoID" },
  },
  UpdateManyStackItemsDimensionsInput: {
    width: { __type: "Float" },
    height: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  UpdateManyStackItemsInputsInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    typeData: { __type: "JSON" },
    _id: { __type: "MongoID" },
  },
  UpdateManyStackItemsPortsInput: {
    name: { __type: "String" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    rotation: { __type: "Float" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateManyStackInput: {
    name: { __type: "String" },
    items: { __type: "[FilterUpdateManyStackItemsInput]" },
    program: { __type: "String" },
    location: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterUpdateManyStackOperatorsInput" },
    OR: { __type: "[FilterUpdateManyStackInput!]" },
    AND: { __type: "[FilterUpdateManyStackInput!]" },
  },
  FilterUpdateManyStackItemsInput: {
    key: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
    dimensions: { __type: "FilterUpdateManyStackItemsDimensionsInput" },
    inputs: { __type: "[FilterUpdateManyStackItemsInputsInput]" },
    outputs: { __type: "[FilterUpdateManyStackItemsInputsInput]" },
    actions: { __type: "String" },
    ui: { __type: "String" },
    ports: { __type: "[FilterUpdateManyStackItemsPortsInput]" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateManyStackItemsDimensionsInput: {
    width: { __type: "Float" },
    height: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateManyStackItemsInputsInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    typeData: { __type: "JSON" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateManyStackItemsPortsInput: {
    name: { __type: "String" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    rotation: { __type: "Float" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateManyStackOperatorsInput: {
    _id: { __type: "FilterUpdateManyStack_idOperatorsInput" },
  },
  FilterUpdateManyStack_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  RemoveByIdStackPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Stack" },
    error: { __type: "ErrorInterface" },
  },
  RemoveOneStackPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "Stack" },
    error: { __type: "ErrorInterface" },
  },
  FilterRemoveOneStackInput: {
    name: { __type: "String" },
    items: { __type: "[FilterRemoveOneStackItemsInput]" },
    program: { __type: "String" },
    location: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterRemoveOneStackOperatorsInput" },
    OR: { __type: "[FilterRemoveOneStackInput!]" },
    AND: { __type: "[FilterRemoveOneStackInput!]" },
  },
  FilterRemoveOneStackItemsInput: {
    key: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
    dimensions: { __type: "FilterRemoveOneStackItemsDimensionsInput" },
    inputs: { __type: "[FilterRemoveOneStackItemsInputsInput]" },
    outputs: { __type: "[FilterRemoveOneStackItemsInputsInput]" },
    actions: { __type: "String" },
    ui: { __type: "String" },
    ports: { __type: "[FilterRemoveOneStackItemsPortsInput]" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveOneStackItemsDimensionsInput: {
    width: { __type: "Float" },
    height: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveOneStackItemsInputsInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    typeData: { __type: "JSON" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveOneStackItemsPortsInput: {
    name: { __type: "String" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    rotation: { __type: "Float" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveOneStackOperatorsInput: {
    _id: { __type: "FilterRemoveOneStack_idOperatorsInput" },
  },
  FilterRemoveOneStack_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  RemoveManyStackPayload: {
    __typename: { __type: "String!" },
    numAffected: { __type: "Int" },
    error: { __type: "ErrorInterface" },
  },
  FilterRemoveManyStackInput: {
    name: { __type: "String" },
    items: { __type: "[FilterRemoveManyStackItemsInput]" },
    program: { __type: "String" },
    location: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterRemoveManyStackOperatorsInput" },
    OR: { __type: "[FilterRemoveManyStackInput!]" },
    AND: { __type: "[FilterRemoveManyStackInput!]" },
  },
  FilterRemoveManyStackItemsInput: {
    key: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
    dimensions: { __type: "FilterRemoveManyStackItemsDimensionsInput" },
    inputs: { __type: "[FilterRemoveManyStackItemsInputsInput]" },
    outputs: { __type: "[FilterRemoveManyStackItemsInputsInput]" },
    actions: { __type: "String" },
    ui: { __type: "String" },
    ports: { __type: "[FilterRemoveManyStackItemsPortsInput]" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveManyStackItemsDimensionsInput: {
    width: { __type: "Float" },
    height: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveManyStackItemsInputsInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    typeData: { __type: "JSON" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveManyStackItemsPortsInput: {
    name: { __type: "String" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    rotation: { __type: "Float" },
    type: { __type: "String" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveManyStackOperatorsInput: {
    _id: { __type: "FilterRemoveManyStack_idOperatorsInput" },
  },
  FilterRemoveManyStack_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  CreateOneDNSRecordPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "DNSRecord" },
    error: { __type: "ErrorInterface" },
  },
  CreateOneDNSRecordInput: {
    subdomain: { __type: "String" },
    domain: { __type: "String" },
    address: { __type: "String" },
  },
  CreateManyDNSRecordPayload: {
    __typename: { __type: "String!" },
    recordIds: { __type: "[MongoID!]!" },
    records: { __type: "[DNSRecord!]" },
    createdCount: { __type: "Int!" },
    error: { __type: "ErrorInterface" },
  },
  CreateManyDNSRecordInput: {
    subdomain: { __type: "String" },
    domain: { __type: "String" },
    address: { __type: "String" },
  },
  UpdateByIdDNSRecordPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "DNSRecord" },
    error: { __type: "ErrorInterface" },
  },
  UpdateByIdDNSRecordInput: {
    subdomain: { __type: "String" },
    domain: { __type: "String" },
    address: { __type: "String" },
  },
  UpdateOneDNSRecordPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "DNSRecord" },
    error: { __type: "ErrorInterface" },
  },
  UpdateOneDNSRecordInput: {
    subdomain: { __type: "String" },
    domain: { __type: "String" },
    address: { __type: "String" },
  },
  FilterUpdateOneDNSRecordInput: {
    subdomain: { __type: "String" },
    domain: { __type: "String" },
    address: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterUpdateOneDNSRecordOperatorsInput" },
    OR: { __type: "[FilterUpdateOneDNSRecordInput!]" },
    AND: { __type: "[FilterUpdateOneDNSRecordInput!]" },
  },
  FilterUpdateOneDNSRecordOperatorsInput: {
    _id: { __type: "FilterUpdateOneDNSRecord_idOperatorsInput" },
  },
  FilterUpdateOneDNSRecord_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  UpdateManyDNSRecordPayload: {
    __typename: { __type: "String!" },
    numAffected: { __type: "Int" },
    error: { __type: "ErrorInterface" },
  },
  UpdateManyDNSRecordInput: {
    subdomain: { __type: "String" },
    domain: { __type: "String" },
    address: { __type: "String" },
  },
  FilterUpdateManyDNSRecordInput: {
    subdomain: { __type: "String" },
    domain: { __type: "String" },
    address: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterUpdateManyDNSRecordOperatorsInput" },
    OR: { __type: "[FilterUpdateManyDNSRecordInput!]" },
    AND: { __type: "[FilterUpdateManyDNSRecordInput!]" },
  },
  FilterUpdateManyDNSRecordOperatorsInput: {
    _id: { __type: "FilterUpdateManyDNSRecord_idOperatorsInput" },
  },
  FilterUpdateManyDNSRecord_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  RemoveByIdDNSRecordPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "DNSRecord" },
    error: { __type: "ErrorInterface" },
  },
  RemoveOneDNSRecordPayload: {
    __typename: { __type: "String!" },
    recordId: { __type: "MongoID" },
    record: { __type: "DNSRecord" },
    error: { __type: "ErrorInterface" },
  },
  FilterRemoveOneDNSRecordInput: {
    subdomain: { __type: "String" },
    domain: { __type: "String" },
    address: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterRemoveOneDNSRecordOperatorsInput" },
    OR: { __type: "[FilterRemoveOneDNSRecordInput!]" },
    AND: { __type: "[FilterRemoveOneDNSRecordInput!]" },
  },
  FilterRemoveOneDNSRecordOperatorsInput: {
    _id: { __type: "FilterRemoveOneDNSRecord_idOperatorsInput" },
  },
  FilterRemoveOneDNSRecord_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
  RemoveManyDNSRecordPayload: {
    __typename: { __type: "String!" },
    numAffected: { __type: "Int" },
    error: { __type: "ErrorInterface" },
  },
  FilterRemoveManyDNSRecordInput: {
    subdomain: { __type: "String" },
    domain: { __type: "String" },
    address: { __type: "String" },
    _id: { __type: "MongoID" },
    _operators: { __type: "FilterRemoveManyDNSRecordOperatorsInput" },
    OR: { __type: "[FilterRemoveManyDNSRecordInput!]" },
    AND: { __type: "[FilterRemoveManyDNSRecordInput!]" },
  },
  FilterRemoveManyDNSRecordOperatorsInput: {
    _id: { __type: "FilterRemoveManyDNSRecord_idOperatorsInput" },
  },
  FilterRemoveManyDNSRecord_idOperatorsInput: {
    gt: { __type: "MongoID" },
    gte: { __type: "MongoID" },
    lt: { __type: "MongoID" },
    lte: { __type: "MongoID" },
    ne: { __type: "MongoID" },
    in: { __type: "[MongoID]" },
    nin: { __type: "[MongoID]" },
    exists: { __type: "Boolean" },
  },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  ProgramShard: (args?: { id?: Maybe<Scalars["String"]> }) => Maybe<Program>;
  ProgramShards?: Maybe<Array<Maybe<Program>>>;
  DeviceById: (args: { _id: Scalars["MongoID"] }) => Maybe<Device>;
  DeviceByIds: (args: {
    _ids: Array<Scalars["MongoID"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindByIdsDeviceInput>;
  }) => Array<Device>;
  DeviceOne: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindOneDeviceInput>;
    skip?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindOneDeviceInput>;
  }) => Maybe<Device>;
  DeviceMany: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManyDeviceInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindManyDeviceInput>;
  }) => Array<Device>;
  DeviceDataLoader: (args: { _id: Scalars["MongoID"] }) => Maybe<Device>;
  DeviceDataLoaderMany: (args: {
    _ids: Array<Scalars["MongoID"]>;
  }) => Array<Maybe<Device>>;
  DeviceByIdLean: (args: { _id: Scalars["MongoID"] }) => Maybe<Device>;
  DeviceByIdsLean: (args: {
    _ids: Array<Scalars["MongoID"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindByIdsDeviceInput>;
  }) => Array<Device>;
  DeviceOneLean: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindOneDeviceInput>;
    skip?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindOneDeviceInput>;
  }) => Maybe<Device>;
  DeviceManyLean: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManyDeviceInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindManyDeviceInput>;
  }) => Array<Device>;
  DeviceDataLoaderLean: (args: { _id: Scalars["MongoID"] }) => Maybe<Device>;
  DeviceDataLoaderManyLean: (args: {
    _ids: Array<Scalars["MongoID"]>;
  }) => Array<Maybe<Device>>;
  DeviceCount: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterCountDeviceInput>;
  }) => Maybe<ScalarsEnums["Int"]>;
  DeviceConnection: (args?: {
    /**
     * Forward pagination argument for returning at most first edges
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Forward pagination argument for returning at most first edges
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Backward pagination argument for returning at most last edges
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Backward pagination argument for returning at most last edges
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManyDeviceInput>
    /**
     * Sort argument for data ordering
     * @defaultValue `"_ID_DESC"`
     */;
    sort?: Maybe<SortConnectionDeviceEnum>;
  }) => Maybe<DeviceConnection>;
  DevicerPagination: (args?: {
    /**
     * Page number for displaying
     */
    page?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `20`
     */;
    perPage?: Maybe<Scalars["Int"]>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManyDeviceInput>;
    sort?: Maybe<SortFindManyDeviceInput>;
  }) => Maybe<DevicePagination>;
  FlowShardById: (args: { _id: Scalars["MongoID"] }) => Maybe<FlowShard>;
  FlowShardByIds: (args: {
    _ids: Array<Scalars["MongoID"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindByIdsFlowShardInput>;
  }) => Array<FlowShard>;
  FlowShardOne: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindOneFlowShardInput>;
    skip?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindOneFlowShardInput>;
  }) => Maybe<FlowShard>;
  FlowShardMany: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManyFlowShardInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindManyFlowShardInput>;
  }) => Array<FlowShard>;
  FlowShardDataLoader: (args: { _id: Scalars["MongoID"] }) => Maybe<FlowShard>;
  FlowShardDataLoaderMany: (args: {
    _ids: Array<Scalars["MongoID"]>;
  }) => Array<Maybe<FlowShard>>;
  FlowShardByIdLean: (args: { _id: Scalars["MongoID"] }) => Maybe<FlowShard>;
  FlowShardByIdsLean: (args: {
    _ids: Array<Scalars["MongoID"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindByIdsFlowShardInput>;
  }) => Array<FlowShard>;
  FlowShardOneLean: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindOneFlowShardInput>;
    skip?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindOneFlowShardInput>;
  }) => Maybe<FlowShard>;
  FlowShardManyLean: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManyFlowShardInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindManyFlowShardInput>;
  }) => Array<FlowShard>;
  FlowShardDataLoaderLean: (args: {
    _id: Scalars["MongoID"];
  }) => Maybe<FlowShard>;
  FlowShardDataLoaderManyLean: (args: {
    _ids: Array<Scalars["MongoID"]>;
  }) => Array<Maybe<FlowShard>>;
  FlowShardCount: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterCountFlowShardInput>;
  }) => Maybe<ScalarsEnums["Int"]>;
  FlowShardConnection: (args?: {
    /**
     * Forward pagination argument for returning at most first edges
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Forward pagination argument for returning at most first edges
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Backward pagination argument for returning at most last edges
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Backward pagination argument for returning at most last edges
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManyFlowShardInput>
    /**
     * Sort argument for data ordering
     * @defaultValue `"_ID_DESC"`
     */;
    sort?: Maybe<SortConnectionFlowShardEnum>;
  }) => Maybe<FlowShardConnection>;
  FlowShardrPagination: (args?: {
    /**
     * Page number for displaying
     */
    page?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `20`
     */;
    perPage?: Maybe<Scalars["Int"]>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManyFlowShardInput>;
    sort?: Maybe<SortFindManyFlowShardInput>;
  }) => Maybe<FlowShardPagination>;
  ProgramById: (args: { _id: Scalars["MongoID"] }) => Maybe<Program>;
  ProgramByIds: (args: {
    _ids: Array<Scalars["MongoID"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindByIdsProgramInput>;
  }) => Array<Program>;
  ProgramOne: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindOneProgramInput>;
    skip?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindOneProgramInput>;
  }) => Maybe<Program>;
  ProgramMany: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManyProgramInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindManyProgramInput>;
  }) => Array<Program>;
  ProgramDataLoader: (args: { _id: Scalars["MongoID"] }) => Maybe<Program>;
  ProgramDataLoaderMany: (args: {
    _ids: Array<Scalars["MongoID"]>;
  }) => Array<Maybe<Program>>;
  ProgramByIdLean: (args: { _id: Scalars["MongoID"] }) => Maybe<Program>;
  ProgramByIdsLean: (args: {
    _ids: Array<Scalars["MongoID"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindByIdsProgramInput>;
  }) => Array<Program>;
  ProgramOneLean: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindOneProgramInput>;
    skip?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindOneProgramInput>;
  }) => Maybe<Program>;
  ProgramManyLean: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManyProgramInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindManyProgramInput>;
  }) => Array<Program>;
  ProgramDataLoaderLean: (args: { _id: Scalars["MongoID"] }) => Maybe<Program>;
  ProgramDataLoaderManyLean: (args: {
    _ids: Array<Scalars["MongoID"]>;
  }) => Array<Maybe<Program>>;
  ProgramCount: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterCountProgramInput>;
  }) => Maybe<ScalarsEnums["Int"]>;
  ProgramConnection: (args?: {
    /**
     * Forward pagination argument for returning at most first edges
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Forward pagination argument for returning at most first edges
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Backward pagination argument for returning at most last edges
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Backward pagination argument for returning at most last edges
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManyProgramInput>
    /**
     * Sort argument for data ordering
     * @defaultValue `"_ID_DESC"`
     */;
    sort?: Maybe<SortConnectionProgramEnum>;
  }) => Maybe<ProgramConnection>;
  ProgramrPagination: (args?: {
    /**
     * Page number for displaying
     */
    page?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `20`
     */;
    perPage?: Maybe<Scalars["Int"]>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManyProgramInput>;
    sort?: Maybe<SortFindManyProgramInput>;
  }) => Maybe<ProgramPagination>;
  StackById: (args: { _id: Scalars["MongoID"] }) => Maybe<Stack>;
  StackByIds: (args: {
    _ids: Array<Scalars["MongoID"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindByIdsStackInput>;
  }) => Array<Stack>;
  StackOne: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindOneStackInput>;
    skip?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindOneStackInput>;
  }) => Maybe<Stack>;
  StackMany: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManyStackInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindManyStackInput>;
  }) => Array<Stack>;
  StackDataLoader: (args: { _id: Scalars["MongoID"] }) => Maybe<Stack>;
  StackDataLoaderMany: (args: {
    _ids: Array<Scalars["MongoID"]>;
  }) => Array<Maybe<Stack>>;
  StackByIdLean: (args: { _id: Scalars["MongoID"] }) => Maybe<Stack>;
  StackByIdsLean: (args: {
    _ids: Array<Scalars["MongoID"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindByIdsStackInput>;
  }) => Array<Stack>;
  StackOneLean: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindOneStackInput>;
    skip?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindOneStackInput>;
  }) => Maybe<Stack>;
  StackManyLean: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManyStackInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindManyStackInput>;
  }) => Array<Stack>;
  StackDataLoaderLean: (args: { _id: Scalars["MongoID"] }) => Maybe<Stack>;
  StackDataLoaderManyLean: (args: {
    _ids: Array<Scalars["MongoID"]>;
  }) => Array<Maybe<Stack>>;
  StackCount: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterCountStackInput>;
  }) => Maybe<ScalarsEnums["Int"]>;
  StackConnection: (args?: {
    /**
     * Forward pagination argument for returning at most first edges
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Forward pagination argument for returning at most first edges
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Backward pagination argument for returning at most last edges
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Backward pagination argument for returning at most last edges
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManyStackInput>
    /**
     * Sort argument for data ordering
     * @defaultValue `"_ID_DESC"`
     */;
    sort?: Maybe<SortConnectionStackEnum>;
  }) => Maybe<StackConnection>;
  StackrPagination: (args?: {
    /**
     * Page number for displaying
     */
    page?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `20`
     */;
    perPage?: Maybe<Scalars["Int"]>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManyStackInput>;
    sort?: Maybe<SortFindManyStackInput>;
  }) => Maybe<StackPagination>;
  DNSRecordById: (args: { _id: Scalars["MongoID"] }) => Maybe<DNSRecord>;
  DNSRecordByIds: (args: {
    _ids: Array<Scalars["MongoID"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindByIdsDNSRecordInput>;
  }) => Array<DNSRecord>;
  DNSRecordOne: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindOneDNSRecordInput>;
    skip?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindOneDNSRecordInput>;
  }) => Maybe<DNSRecord>;
  DNSRecordMany: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManyDNSRecordInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindManyDNSRecordInput>;
  }) => Array<DNSRecord>;
  DNSRecordDataLoader: (args: { _id: Scalars["MongoID"] }) => Maybe<DNSRecord>;
  DNSRecordDataLoaderMany: (args: {
    _ids: Array<Scalars["MongoID"]>;
  }) => Array<Maybe<DNSRecord>>;
  DNSRecordByIdLean: (args: { _id: Scalars["MongoID"] }) => Maybe<DNSRecord>;
  DNSRecordByIdsLean: (args: {
    _ids: Array<Scalars["MongoID"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindByIdsDNSRecordInput>;
  }) => Array<DNSRecord>;
  DNSRecordOneLean: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindOneDNSRecordInput>;
    skip?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindOneDNSRecordInput>;
  }) => Maybe<DNSRecord>;
  DNSRecordManyLean: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManyDNSRecordInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<SortFindManyDNSRecordInput>;
  }) => Array<DNSRecord>;
  DNSRecordDataLoaderLean: (args: {
    _id: Scalars["MongoID"];
  }) => Maybe<DNSRecord>;
  DNSRecordDataLoaderManyLean: (args: {
    _ids: Array<Scalars["MongoID"]>;
  }) => Array<Maybe<DNSRecord>>;
  DNSRecordCount: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterCountDNSRecordInput>;
  }) => Maybe<ScalarsEnums["Int"]>;
  DNSRecordConnection: (args?: {
    /**
     * Forward pagination argument for returning at most first edges
     */
    first?: Maybe<Scalars["Int"]>
    /**
     * Forward pagination argument for returning at most first edges
     */;
    after?: Maybe<Scalars["String"]>
    /**
     * Backward pagination argument for returning at most last edges
     */;
    last?: Maybe<Scalars["Int"]>
    /**
     * Backward pagination argument for returning at most last edges
     */;
    before?: Maybe<Scalars["String"]>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManyDNSRecordInput>
    /**
     * Sort argument for data ordering
     * @defaultValue `"_ID_DESC"`
     */;
    sort?: Maybe<SortConnectionDNSRecordEnum>;
  }) => Maybe<DNSRecordConnection>;
  DNSRecordrPagination: (args?: {
    /**
     * Page number for displaying
     */
    page?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `20`
     */;
    perPage?: Maybe<Scalars["Int"]>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManyDNSRecordInput>;
    sort?: Maybe<SortFindManyDNSRecordInput>;
  }) => Maybe<DNSRecordPagination>;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
  addProgramIO: (args?: {
    program?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
  }) => Maybe<ProgramIo>;
  addHMIFlow: (args?: {
    program?: Maybe<Scalars["String"]>;
    parent?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    nodes?: Maybe<Scalars["JSON"]>;
    paths?: Maybe<Scalars["JSON"]>;
  }) => Maybe<FlowShard>;
  updateHMIFlow: (args?: {
    id?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    nodes?: Maybe<Scalars["JSON"]>;
    paths?: Maybe<Scalars["JSON"]>;
  }) => Maybe<FlowShard>;
  addProgramFlow: (args?: {
    program?: Maybe<Scalars["String"]>;
    parent?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    nodes?: Maybe<Scalars["JSON"]>;
    paths?: Maybe<Scalars["JSON"]>;
  }) => Maybe<FlowShard>;
  updateProgramFlow: (args?: {
    id?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    nodes?: Maybe<Scalars["JSON"]>;
    paths?: Maybe<Scalars["JSON"]>;
  }) => Maybe<FlowShard>;
  removeProgramFlow: (args?: {
    id?: Maybe<Scalars["String"]>;
    shard?: Maybe<Scalars["String"]>;
  }) => Maybe<Program>;
  addStackItem: (args?: {
    stack?: Maybe<Scalars["String"]>;
    record?: Maybe<StackItemsInput>;
  }) => Maybe<StackItems>;
  /**
   * Create one document with mongoose defaults, setters, hooks and validation
   */
  DeviceCreateOne: (args: {
    record: CreateOneDeviceInput;
  }) => Maybe<CreateOneDevicePayload>;
  /**
   * Creates Many documents with mongoose defaults, setters, hooks and validation
   */
  DeviceCreateMany: (args: {
    records: Array<CreateManyDeviceInput>;
  }) => Maybe<CreateManyDevicePayload>;
  /**
   * Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  DeviceUpdateById: (args: {
    _id: Scalars["MongoID"];
    record: UpdateByIdDeviceInput;
  }) => Maybe<UpdateByIdDevicePayload>;
  /**
   * Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  DeviceUpdateOne: (args: {
    record: UpdateOneDeviceInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateOneDeviceInput>;
    sort?: Maybe<SortUpdateOneDeviceInput>;
    skip?: Maybe<Scalars["Int"]>;
  }) => Maybe<UpdateOneDevicePayload>;
  /**
   * Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.
   */
  DeviceUpdateMany: (args: {
    record: UpdateManyDeviceInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateManyDeviceInput>;
    sort?: Maybe<SortUpdateManyDeviceInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
  }) => Maybe<UpdateManyDevicePayload>;
  /**
   * Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document.
   */
  DeviceRemoveById: (args: {
    _id: Scalars["MongoID"];
  }) => Maybe<RemoveByIdDevicePayload>;
  /**
   * Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document.
   */
  DeviceRemoveOne: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterRemoveOneDeviceInput>;
    sort?: Maybe<SortRemoveOneDeviceInput>;
  }) => Maybe<RemoveOneDevicePayload>;
  /**
   * Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.
   */
  DeviceRemoveMany: (args: {
    /**
     * Filter by fields
     */
    filter: FilterRemoveManyDeviceInput
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
  }) => Maybe<RemoveManyDevicePayload>;
  /**
   * Create one document with mongoose defaults, setters, hooks and validation
   */
  FlowShardCreateOne: (args: {
    record: CreateOneFlowShardInput;
  }) => Maybe<CreateOneFlowShardPayload>;
  /**
   * Creates Many documents with mongoose defaults, setters, hooks and validation
   */
  FlowShardCreateMany: (args: {
    records: Array<CreateManyFlowShardInput>;
  }) => Maybe<CreateManyFlowShardPayload>;
  /**
   * Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  FlowShardUpdateById: (args: {
    _id: Scalars["MongoID"];
    record: UpdateByIdFlowShardInput;
  }) => Maybe<UpdateByIdFlowShardPayload>;
  /**
   * Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  FlowShardUpdateOne: (args: {
    record: UpdateOneFlowShardInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateOneFlowShardInput>;
    sort?: Maybe<SortUpdateOneFlowShardInput>;
    skip?: Maybe<Scalars["Int"]>;
  }) => Maybe<UpdateOneFlowShardPayload>;
  /**
   * Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.
   */
  FlowShardUpdateMany: (args: {
    record: UpdateManyFlowShardInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateManyFlowShardInput>;
    sort?: Maybe<SortUpdateManyFlowShardInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
  }) => Maybe<UpdateManyFlowShardPayload>;
  /**
   * Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document.
   */
  FlowShardRemoveById: (args: {
    _id: Scalars["MongoID"];
  }) => Maybe<RemoveByIdFlowShardPayload>;
  /**
   * Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document.
   */
  FlowShardRemoveOne: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterRemoveOneFlowShardInput>;
    sort?: Maybe<SortRemoveOneFlowShardInput>;
  }) => Maybe<RemoveOneFlowShardPayload>;
  /**
   * Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.
   */
  FlowShardRemoveMany: (args: {
    /**
     * Filter by fields
     */
    filter: FilterRemoveManyFlowShardInput
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
  }) => Maybe<RemoveManyFlowShardPayload>;
  /**
   * Create one document with mongoose defaults, setters, hooks and validation
   */
  ProgramCreateOne: (args: {
    record: CreateOneProgramInput;
  }) => Maybe<CreateOneProgramPayload>;
  /**
   * Creates Many documents with mongoose defaults, setters, hooks and validation
   */
  ProgramCreateMany: (args: {
    records: Array<CreateManyProgramInput>;
  }) => Maybe<CreateManyProgramPayload>;
  /**
   * Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  ProgramUpdateById: (args: {
    _id: Scalars["MongoID"];
    record: UpdateByIdProgramInput;
  }) => Maybe<UpdateByIdProgramPayload>;
  /**
   * Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  ProgramUpdateOne: (args: {
    record: UpdateOneProgramInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateOneProgramInput>;
    sort?: Maybe<SortUpdateOneProgramInput>;
    skip?: Maybe<Scalars["Int"]>;
  }) => Maybe<UpdateOneProgramPayload>;
  /**
   * Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.
   */
  ProgramUpdateMany: (args: {
    record: UpdateManyProgramInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateManyProgramInput>;
    sort?: Maybe<SortUpdateManyProgramInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
  }) => Maybe<UpdateManyProgramPayload>;
  /**
   * Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document.
   */
  ProgramRemoveById: (args: {
    _id: Scalars["MongoID"];
  }) => Maybe<RemoveByIdProgramPayload>;
  /**
   * Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document.
   */
  ProgramRemoveOne: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterRemoveOneProgramInput>;
    sort?: Maybe<SortRemoveOneProgramInput>;
  }) => Maybe<RemoveOneProgramPayload>;
  /**
   * Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.
   */
  ProgramRemoveMany: (args: {
    /**
     * Filter by fields
     */
    filter: FilterRemoveManyProgramInput
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
  }) => Maybe<RemoveManyProgramPayload>;
  /**
   * Create one document with mongoose defaults, setters, hooks and validation
   */
  StackCreateOne: (args: {
    record: CreateOneStackInput;
  }) => Maybe<CreateOneStackPayload>;
  /**
   * Creates Many documents with mongoose defaults, setters, hooks and validation
   */
  StackCreateMany: (args: {
    records: Array<CreateManyStackInput>;
  }) => Maybe<CreateManyStackPayload>;
  /**
   * Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  StackUpdateById: (args: {
    _id: Scalars["MongoID"];
    record: UpdateByIdStackInput;
  }) => Maybe<UpdateByIdStackPayload>;
  /**
   * Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  StackUpdateOne: (args: {
    record: UpdateOneStackInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateOneStackInput>;
    sort?: Maybe<SortUpdateOneStackInput>;
    skip?: Maybe<Scalars["Int"]>;
  }) => Maybe<UpdateOneStackPayload>;
  /**
   * Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.
   */
  StackUpdateMany: (args: {
    record: UpdateManyStackInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateManyStackInput>;
    sort?: Maybe<SortUpdateManyStackInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
  }) => Maybe<UpdateManyStackPayload>;
  /**
   * Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document.
   */
  StackRemoveById: (args: {
    _id: Scalars["MongoID"];
  }) => Maybe<RemoveByIdStackPayload>;
  /**
   * Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document.
   */
  StackRemoveOne: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterRemoveOneStackInput>;
    sort?: Maybe<SortRemoveOneStackInput>;
  }) => Maybe<RemoveOneStackPayload>;
  /**
   * Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.
   */
  StackRemoveMany: (args: {
    /**
     * Filter by fields
     */
    filter: FilterRemoveManyStackInput
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
  }) => Maybe<RemoveManyStackPayload>;
  /**
   * Create one document with mongoose defaults, setters, hooks and validation
   */
  DNSRecordCreateOne: (args: {
    record: CreateOneDNSRecordInput;
  }) => Maybe<CreateOneDNSRecordPayload>;
  /**
   * Creates Many documents with mongoose defaults, setters, hooks and validation
   */
  DNSRecordCreateMany: (args: {
    records: Array<CreateManyDNSRecordInput>;
  }) => Maybe<CreateManyDNSRecordPayload>;
  /**
   * Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  DNSRecordUpdateById: (args: {
    _id: Scalars["MongoID"];
    record: UpdateByIdDNSRecordInput;
  }) => Maybe<UpdateByIdDNSRecordPayload>;
  /**
   * Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  DNSRecordUpdateOne: (args: {
    record: UpdateOneDNSRecordInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateOneDNSRecordInput>;
    sort?: Maybe<SortUpdateOneDNSRecordInput>;
    skip?: Maybe<Scalars["Int"]>;
  }) => Maybe<UpdateOneDNSRecordPayload>;
  /**
   * Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.
   */
  DNSRecordUpdateMany: (args: {
    record: UpdateManyDNSRecordInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateManyDNSRecordInput>;
    sort?: Maybe<SortUpdateManyDNSRecordInput>;
    skip?: Maybe<Scalars["Int"]>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
  }) => Maybe<UpdateManyDNSRecordPayload>;
  /**
   * Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document.
   */
  DNSRecordRemoveById: (args: {
    _id: Scalars["MongoID"];
  }) => Maybe<RemoveByIdDNSRecordPayload>;
  /**
   * Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document.
   */
  DNSRecordRemoveOne: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterRemoveOneDNSRecordInput>;
    sort?: Maybe<SortRemoveOneDNSRecordInput>;
  }) => Maybe<RemoveOneDNSRecordPayload>;
  /**
   * Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.
   */
  DNSRecordRemoveMany: (args: {
    /**
     * Filter by fields
     */
    filter: FilterRemoveManyDNSRecordInput
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars["Int"]>;
  }) => Maybe<RemoveManyDNSRecordPayload>;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

export interface ValidationError extends Omit<ErrorInterface, "__typename"> {
  __typename: "ValidationError" | undefined;
  /**
   * Combined error message from all validators
   */
  message?: Maybe<ScalarsEnums["String"]>;
  /**
   * List of validator errors
   */
  errors?: Maybe<Array<ValidatorError>>;
}

export interface ErrorInterface {
  __typename: "ErrorInterface" | undefined;
  /**
   * Generic error message
   */
  message?: Maybe<ScalarsEnums["String"]>;
}

export interface ValidatorError {
  __typename: "ValidatorError" | undefined;
  /**
   * Validation error message
   */
  message?: Maybe<ScalarsEnums["String"]>;
  /**
   * Source of the validation error from the model path
   */
  path?: Maybe<ScalarsEnums["String"]>;
  /**
   * Field value which occurs the validation error
   */
  value?: Maybe<ScalarsEnums["JSON"]>;
  /**
   * Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user.
   */
  idx: ScalarsEnums["Int"];
}

export interface MongoError extends Omit<ErrorInterface, "__typename"> {
  __typename: "MongoError" | undefined;
  /**
   * MongoDB error message
   */
  message?: Maybe<ScalarsEnums["String"]>;
  /**
   * MongoDB error code
   */
  code?: Maybe<ScalarsEnums["Int"]>;
}

export interface RuntimeError extends Omit<ErrorInterface, "__typename"> {
  __typename: "RuntimeError" | undefined;
  /**
   * Runtime error message
   */
  message?: Maybe<ScalarsEnums["String"]>;
}

export interface Program {
  __typename: "Program" | undefined;
  name?: Maybe<ScalarsEnums["String"]>;
  plugins?: Maybe<Array<Maybe<ScalarsEnums["JSON"]>>>;
  hmi?: Maybe<Array<Maybe<ScalarsEnums["JSON"]>>>;
  program?: Maybe<Array<Maybe<ScalarsEnums["JSON"]>>>;
  io?: Maybe<Array<Maybe<ProgramIo>>>;
  _id: ScalarsEnums["MongoID"];
}

export interface ProgramIo {
  __typename: "ProgramIo" | undefined;
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
  _id?: Maybe<ScalarsEnums["MongoID"]>;
}

export interface Device {
  __typename: "Device" | undefined;
  name?: Maybe<ScalarsEnums["String"]>;
  connected?: Maybe<ScalarsEnums["Boolean"]>;
  lastSeen?: Maybe<ScalarsEnums["Date"]>;
  network_name?: Maybe<ScalarsEnums["String"]>;
  did?: Maybe<ScalarsEnums["String"]>;
  program?: Maybe<ScalarsEnums["MongoID"]>;
  location?: Maybe<ScalarsEnums["String"]>;
  _id: ScalarsEnums["MongoID"];
}

/**
 * A connection to a list of items.
 */
export interface DeviceConnection {
  __typename: "DeviceConnection" | undefined;
  /**
   * Total object count.
   */
  count: ScalarsEnums["Int"];
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * Information to aid in pagination.
   */
  edges: Array<DeviceEdge>;
}

/**
 * Information about pagination in a connection.
 */
export interface PageInfo {
  __typename: "PageInfo" | undefined;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: ScalarsEnums["Boolean"];
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: ScalarsEnums["Boolean"];
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor?: Maybe<ScalarsEnums["String"]>;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor?: Maybe<ScalarsEnums["String"]>;
}

/**
 * An edge in a connection.
 */
export interface DeviceEdge {
  __typename: "DeviceEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node: Device;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * List of items with pagination.
 */
export interface DevicePagination {
  __typename: "DevicePagination" | undefined;
  /**
   * Total object count.
   */
  count?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Array of objects.
   */
  items?: Maybe<Array<Device>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PaginationInfo;
}

export interface PaginationInfo {
  __typename: "PaginationInfo" | undefined;
  currentPage: ScalarsEnums["Int"];
  perPage: ScalarsEnums["Int"];
  pageCount?: Maybe<ScalarsEnums["Int"]>;
  itemCount?: Maybe<ScalarsEnums["Int"]>;
  hasNextPage?: Maybe<ScalarsEnums["Boolean"]>;
  hasPreviousPage?: Maybe<ScalarsEnums["Boolean"]>;
}

export interface FlowShard {
  __typename: "FlowShard" | undefined;
  name?: Maybe<ScalarsEnums["String"]>;
  parent?: Maybe<ScalarsEnums["MongoID"]>;
  program?: Maybe<ScalarsEnums["MongoID"]>;
  nodes?: Maybe<Array<Maybe<FlowShardNodes>>>;
  paths?: Maybe<Array<Maybe<FlowShardPaths>>>;
  items?: Maybe<Array<Maybe<ScalarsEnums["MongoID"]>>>;
  _id: ScalarsEnums["MongoID"];
}

export interface FlowShardNodes {
  __typename: "FlowShardNodes" | undefined;
  id?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
  extras?: Maybe<ScalarsEnums["JSON"]>;
  ports?: Maybe<ScalarsEnums["JSON"]>;
  x?: Maybe<ScalarsEnums["Float"]>;
  y?: Maybe<ScalarsEnums["Float"]>;
  _id?: Maybe<ScalarsEnums["MongoID"]>;
}

export interface FlowShardPaths {
  __typename: "FlowShardPaths" | undefined;
  id?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
  source?: Maybe<ScalarsEnums["String"]>;
  sourceHandle?: Maybe<ScalarsEnums["String"]>;
  target?: Maybe<ScalarsEnums["String"]>;
  targetHandle?: Maybe<ScalarsEnums["String"]>;
  points?: Maybe<Array<Maybe<FlowShardPathsPoints>>>;
  _id?: Maybe<ScalarsEnums["MongoID"]>;
}

export interface FlowShardPathsPoints {
  __typename: "FlowShardPathsPoints" | undefined;
  x?: Maybe<ScalarsEnums["Float"]>;
  y?: Maybe<ScalarsEnums["Float"]>;
  _id?: Maybe<ScalarsEnums["MongoID"]>;
}

/**
 * A connection to a list of items.
 */
export interface FlowShardConnection {
  __typename: "FlowShardConnection" | undefined;
  /**
   * Total object count.
   */
  count: ScalarsEnums["Int"];
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * Information to aid in pagination.
   */
  edges: Array<FlowShardEdge>;
}

/**
 * An edge in a connection.
 */
export interface FlowShardEdge {
  __typename: "FlowShardEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node: FlowShard;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * List of items with pagination.
 */
export interface FlowShardPagination {
  __typename: "FlowShardPagination" | undefined;
  /**
   * Total object count.
   */
  count?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Array of objects.
   */
  items?: Maybe<Array<FlowShard>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PaginationInfo;
}

/**
 * A connection to a list of items.
 */
export interface ProgramConnection {
  __typename: "ProgramConnection" | undefined;
  /**
   * Total object count.
   */
  count: ScalarsEnums["Int"];
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * Information to aid in pagination.
   */
  edges: Array<ProgramEdge>;
}

/**
 * An edge in a connection.
 */
export interface ProgramEdge {
  __typename: "ProgramEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node: Program;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * List of items with pagination.
 */
export interface ProgramPagination {
  __typename: "ProgramPagination" | undefined;
  /**
   * Total object count.
   */
  count?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Array of objects.
   */
  items?: Maybe<Array<Program>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PaginationInfo;
}

export interface Stack {
  __typename: "Stack" | undefined;
  name?: Maybe<ScalarsEnums["String"]>;
  items?: Maybe<Array<Maybe<StackItems>>>;
  program?: Maybe<ScalarsEnums["String"]>;
  location?: Maybe<ScalarsEnums["String"]>;
  _id: ScalarsEnums["MongoID"];
}

export interface StackItems {
  __typename: "StackItems" | undefined;
  key?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
  dimensions?: Maybe<StackItemsDimensions>;
  inputs?: Maybe<Array<Maybe<StackItemsInputs>>>;
  outputs?: Maybe<Array<Maybe<StackItemsInputs>>>;
  actions?: Maybe<ScalarsEnums["String"]>;
  ui?: Maybe<ScalarsEnums["String"]>;
  ports?: Maybe<Array<Maybe<StackItemsPorts>>>;
  _id?: Maybe<ScalarsEnums["MongoID"]>;
}

export interface StackItemsDimensions {
  __typename: "StackItemsDimensions" | undefined;
  width?: Maybe<ScalarsEnums["Float"]>;
  height?: Maybe<ScalarsEnums["Float"]>;
  _id?: Maybe<ScalarsEnums["MongoID"]>;
}

export interface StackItemsInputs {
  __typename: "StackItemsInputs" | undefined;
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
  typeData?: Maybe<ScalarsEnums["JSON"]>;
  _id?: Maybe<ScalarsEnums["MongoID"]>;
}

export interface StackItemsPorts {
  __typename: "StackItemsPorts" | undefined;
  name?: Maybe<ScalarsEnums["String"]>;
  x?: Maybe<ScalarsEnums["Float"]>;
  y?: Maybe<ScalarsEnums["Float"]>;
  rotation?: Maybe<ScalarsEnums["Float"]>;
  type?: Maybe<ScalarsEnums["String"]>;
  _id?: Maybe<ScalarsEnums["MongoID"]>;
}

/**
 * A connection to a list of items.
 */
export interface StackConnection {
  __typename: "StackConnection" | undefined;
  /**
   * Total object count.
   */
  count: ScalarsEnums["Int"];
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * Information to aid in pagination.
   */
  edges: Array<StackEdge>;
}

/**
 * An edge in a connection.
 */
export interface StackEdge {
  __typename: "StackEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node: Stack;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * List of items with pagination.
 */
export interface StackPagination {
  __typename: "StackPagination" | undefined;
  /**
   * Total object count.
   */
  count?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Array of objects.
   */
  items?: Maybe<Array<Stack>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PaginationInfo;
}

export interface DNSRecord {
  __typename: "DNSRecord" | undefined;
  subdomain?: Maybe<ScalarsEnums["String"]>;
  domain?: Maybe<ScalarsEnums["String"]>;
  address?: Maybe<ScalarsEnums["String"]>;
  _id: ScalarsEnums["MongoID"];
}

/**
 * A connection to a list of items.
 */
export interface DNSRecordConnection {
  __typename: "DNSRecordConnection" | undefined;
  /**
   * Total object count.
   */
  count: ScalarsEnums["Int"];
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * Information to aid in pagination.
   */
  edges: Array<DNSRecordEdge>;
}

/**
 * An edge in a connection.
 */
export interface DNSRecordEdge {
  __typename: "DNSRecordEdge" | undefined;
  /**
   * The item at the end of the edge
   */
  node: DNSRecord;
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
}

/**
 * List of items with pagination.
 */
export interface DNSRecordPagination {
  __typename: "DNSRecordPagination" | undefined;
  /**
   * Total object count.
   */
  count?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Array of objects.
   */
  items?: Maybe<Array<DNSRecord>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PaginationInfo;
}

export interface CreateOneDevicePayload {
  __typename: "CreateOneDevicePayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Created document
   */
  record?: Maybe<Device>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface CreateManyDevicePayload {
  __typename: "CreateManyDevicePayload" | undefined;
  /**
   * Documents IDs
   */
  recordIds: Array<ScalarsEnums["MongoID"]>;
  /**
   * Created documents
   */
  records?: Maybe<Array<Device>>;
  /**
   * Number of created documents
   */
  createdCount: ScalarsEnums["Int"];
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateByIdDevicePayload {
  __typename: "UpdateByIdDevicePayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Updated document
   */
  record?: Maybe<Device>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateOneDevicePayload {
  __typename: "UpdateOneDevicePayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Updated document
   */
  record?: Maybe<Device>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateManyDevicePayload {
  __typename: "UpdateManyDevicePayload" | undefined;
  /**
   * Affected documents number
   */
  numAffected?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveByIdDevicePayload {
  __typename: "RemoveByIdDevicePayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Removed document
   */
  record?: Maybe<Device>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveOneDevicePayload {
  __typename: "RemoveOneDevicePayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Removed document
   */
  record?: Maybe<Device>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveManyDevicePayload {
  __typename: "RemoveManyDevicePayload" | undefined;
  /**
   * Affected documents number
   */
  numAffected?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface CreateOneFlowShardPayload {
  __typename: "CreateOneFlowShardPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Created document
   */
  record?: Maybe<FlowShard>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface CreateManyFlowShardPayload {
  __typename: "CreateManyFlowShardPayload" | undefined;
  /**
   * Documents IDs
   */
  recordIds: Array<ScalarsEnums["MongoID"]>;
  /**
   * Created documents
   */
  records?: Maybe<Array<FlowShard>>;
  /**
   * Number of created documents
   */
  createdCount: ScalarsEnums["Int"];
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateByIdFlowShardPayload {
  __typename: "UpdateByIdFlowShardPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Updated document
   */
  record?: Maybe<FlowShard>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateOneFlowShardPayload {
  __typename: "UpdateOneFlowShardPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Updated document
   */
  record?: Maybe<FlowShard>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateManyFlowShardPayload {
  __typename: "UpdateManyFlowShardPayload" | undefined;
  /**
   * Affected documents number
   */
  numAffected?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveByIdFlowShardPayload {
  __typename: "RemoveByIdFlowShardPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Removed document
   */
  record?: Maybe<FlowShard>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveOneFlowShardPayload {
  __typename: "RemoveOneFlowShardPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Removed document
   */
  record?: Maybe<FlowShard>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveManyFlowShardPayload {
  __typename: "RemoveManyFlowShardPayload" | undefined;
  /**
   * Affected documents number
   */
  numAffected?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface CreateOneProgramPayload {
  __typename: "CreateOneProgramPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Created document
   */
  record?: Maybe<Program>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface CreateManyProgramPayload {
  __typename: "CreateManyProgramPayload" | undefined;
  /**
   * Documents IDs
   */
  recordIds: Array<ScalarsEnums["MongoID"]>;
  /**
   * Created documents
   */
  records?: Maybe<Array<Program>>;
  /**
   * Number of created documents
   */
  createdCount: ScalarsEnums["Int"];
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateByIdProgramPayload {
  __typename: "UpdateByIdProgramPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Updated document
   */
  record?: Maybe<Program>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateOneProgramPayload {
  __typename: "UpdateOneProgramPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Updated document
   */
  record?: Maybe<Program>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateManyProgramPayload {
  __typename: "UpdateManyProgramPayload" | undefined;
  /**
   * Affected documents number
   */
  numAffected?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveByIdProgramPayload {
  __typename: "RemoveByIdProgramPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Removed document
   */
  record?: Maybe<Program>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveOneProgramPayload {
  __typename: "RemoveOneProgramPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Removed document
   */
  record?: Maybe<Program>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveManyProgramPayload {
  __typename: "RemoveManyProgramPayload" | undefined;
  /**
   * Affected documents number
   */
  numAffected?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface CreateOneStackPayload {
  __typename: "CreateOneStackPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Created document
   */
  record?: Maybe<Stack>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface CreateManyStackPayload {
  __typename: "CreateManyStackPayload" | undefined;
  /**
   * Documents IDs
   */
  recordIds: Array<ScalarsEnums["MongoID"]>;
  /**
   * Created documents
   */
  records?: Maybe<Array<Stack>>;
  /**
   * Number of created documents
   */
  createdCount: ScalarsEnums["Int"];
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateByIdStackPayload {
  __typename: "UpdateByIdStackPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Updated document
   */
  record?: Maybe<Stack>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateOneStackPayload {
  __typename: "UpdateOneStackPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Updated document
   */
  record?: Maybe<Stack>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateManyStackPayload {
  __typename: "UpdateManyStackPayload" | undefined;
  /**
   * Affected documents number
   */
  numAffected?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveByIdStackPayload {
  __typename: "RemoveByIdStackPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Removed document
   */
  record?: Maybe<Stack>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveOneStackPayload {
  __typename: "RemoveOneStackPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Removed document
   */
  record?: Maybe<Stack>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveManyStackPayload {
  __typename: "RemoveManyStackPayload" | undefined;
  /**
   * Affected documents number
   */
  numAffected?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface CreateOneDNSRecordPayload {
  __typename: "CreateOneDNSRecordPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Created document
   */
  record?: Maybe<DNSRecord>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface CreateManyDNSRecordPayload {
  __typename: "CreateManyDNSRecordPayload" | undefined;
  /**
   * Documents IDs
   */
  recordIds: Array<ScalarsEnums["MongoID"]>;
  /**
   * Created documents
   */
  records?: Maybe<Array<DNSRecord>>;
  /**
   * Number of created documents
   */
  createdCount: ScalarsEnums["Int"];
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateByIdDNSRecordPayload {
  __typename: "UpdateByIdDNSRecordPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Updated document
   */
  record?: Maybe<DNSRecord>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateOneDNSRecordPayload {
  __typename: "UpdateOneDNSRecordPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Updated document
   */
  record?: Maybe<DNSRecord>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateManyDNSRecordPayload {
  __typename: "UpdateManyDNSRecordPayload" | undefined;
  /**
   * Affected documents number
   */
  numAffected?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveByIdDNSRecordPayload {
  __typename: "RemoveByIdDNSRecordPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Removed document
   */
  record?: Maybe<DNSRecord>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveOneDNSRecordPayload {
  __typename: "RemoveOneDNSRecordPayload" | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums["MongoID"]>;
  /**
   * Removed document
   */
  record?: Maybe<DNSRecord>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveManyDNSRecordPayload {
  __typename: "RemoveManyDNSRecordPayload" | undefined;
  /**
   * Affected documents number
   */
  numAffected?: Maybe<ScalarsEnums["Int"]>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  ValidationError: ValidationError;
  ErrorInterface: ErrorInterface;
  ValidatorError: ValidatorError;
  MongoError: MongoError;
  RuntimeError: RuntimeError;
  Program: Program;
  ProgramIo: ProgramIo;
  Device: Device;
  DeviceConnection: DeviceConnection;
  PageInfo: PageInfo;
  DeviceEdge: DeviceEdge;
  DevicePagination: DevicePagination;
  PaginationInfo: PaginationInfo;
  FlowShard: FlowShard;
  FlowShardNodes: FlowShardNodes;
  FlowShardPaths: FlowShardPaths;
  FlowShardPathsPoints: FlowShardPathsPoints;
  FlowShardConnection: FlowShardConnection;
  FlowShardEdge: FlowShardEdge;
  FlowShardPagination: FlowShardPagination;
  ProgramConnection: ProgramConnection;
  ProgramEdge: ProgramEdge;
  ProgramPagination: ProgramPagination;
  Stack: Stack;
  StackItems: StackItems;
  StackItemsDimensions: StackItemsDimensions;
  StackItemsInputs: StackItemsInputs;
  StackItemsPorts: StackItemsPorts;
  StackConnection: StackConnection;
  StackEdge: StackEdge;
  StackPagination: StackPagination;
  DNSRecord: DNSRecord;
  DNSRecordConnection: DNSRecordConnection;
  DNSRecordEdge: DNSRecordEdge;
  DNSRecordPagination: DNSRecordPagination;
  CreateOneDevicePayload: CreateOneDevicePayload;
  CreateManyDevicePayload: CreateManyDevicePayload;
  UpdateByIdDevicePayload: UpdateByIdDevicePayload;
  UpdateOneDevicePayload: UpdateOneDevicePayload;
  UpdateManyDevicePayload: UpdateManyDevicePayload;
  RemoveByIdDevicePayload: RemoveByIdDevicePayload;
  RemoveOneDevicePayload: RemoveOneDevicePayload;
  RemoveManyDevicePayload: RemoveManyDevicePayload;
  CreateOneFlowShardPayload: CreateOneFlowShardPayload;
  CreateManyFlowShardPayload: CreateManyFlowShardPayload;
  UpdateByIdFlowShardPayload: UpdateByIdFlowShardPayload;
  UpdateOneFlowShardPayload: UpdateOneFlowShardPayload;
  UpdateManyFlowShardPayload: UpdateManyFlowShardPayload;
  RemoveByIdFlowShardPayload: RemoveByIdFlowShardPayload;
  RemoveOneFlowShardPayload: RemoveOneFlowShardPayload;
  RemoveManyFlowShardPayload: RemoveManyFlowShardPayload;
  CreateOneProgramPayload: CreateOneProgramPayload;
  CreateManyProgramPayload: CreateManyProgramPayload;
  UpdateByIdProgramPayload: UpdateByIdProgramPayload;
  UpdateOneProgramPayload: UpdateOneProgramPayload;
  UpdateManyProgramPayload: UpdateManyProgramPayload;
  RemoveByIdProgramPayload: RemoveByIdProgramPayload;
  RemoveOneProgramPayload: RemoveOneProgramPayload;
  RemoveManyProgramPayload: RemoveManyProgramPayload;
  CreateOneStackPayload: CreateOneStackPayload;
  CreateManyStackPayload: CreateManyStackPayload;
  UpdateByIdStackPayload: UpdateByIdStackPayload;
  UpdateOneStackPayload: UpdateOneStackPayload;
  UpdateManyStackPayload: UpdateManyStackPayload;
  RemoveByIdStackPayload: RemoveByIdStackPayload;
  RemoveOneStackPayload: RemoveOneStackPayload;
  RemoveManyStackPayload: RemoveManyStackPayload;
  CreateOneDNSRecordPayload: CreateOneDNSRecordPayload;
  CreateManyDNSRecordPayload: CreateManyDNSRecordPayload;
  UpdateByIdDNSRecordPayload: UpdateByIdDNSRecordPayload;
  UpdateOneDNSRecordPayload: UpdateOneDNSRecordPayload;
  UpdateManyDNSRecordPayload: UpdateManyDNSRecordPayload;
  RemoveByIdDNSRecordPayload: RemoveByIdDNSRecordPayload;
  RemoveOneDNSRecordPayload: RemoveOneDNSRecordPayload;
  RemoveManyDNSRecordPayload: RemoveManyDNSRecordPayload;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "ValidationError"
  | "ErrorInterface"
  | "ValidatorError"
  | "MongoError"
  | "RuntimeError"
  | "Program"
  | "ProgramIo"
  | "Device"
  | "DeviceConnection"
  | "PageInfo"
  | "DeviceEdge"
  | "DevicePagination"
  | "PaginationInfo"
  | "FlowShard"
  | "FlowShardNodes"
  | "FlowShardPaths"
  | "FlowShardPathsPoints"
  | "FlowShardConnection"
  | "FlowShardEdge"
  | "FlowShardPagination"
  | "ProgramConnection"
  | "ProgramEdge"
  | "ProgramPagination"
  | "Stack"
  | "StackItems"
  | "StackItemsDimensions"
  | "StackItemsInputs"
  | "StackItemsPorts"
  | "StackConnection"
  | "StackEdge"
  | "StackPagination"
  | "DNSRecord"
  | "DNSRecordConnection"
  | "DNSRecordEdge"
  | "DNSRecordPagination"
  | "CreateOneDevicePayload"
  | "CreateManyDevicePayload"
  | "UpdateByIdDevicePayload"
  | "UpdateOneDevicePayload"
  | "UpdateManyDevicePayload"
  | "RemoveByIdDevicePayload"
  | "RemoveOneDevicePayload"
  | "RemoveManyDevicePayload"
  | "CreateOneFlowShardPayload"
  | "CreateManyFlowShardPayload"
  | "UpdateByIdFlowShardPayload"
  | "UpdateOneFlowShardPayload"
  | "UpdateManyFlowShardPayload"
  | "RemoveByIdFlowShardPayload"
  | "RemoveOneFlowShardPayload"
  | "RemoveManyFlowShardPayload"
  | "CreateOneProgramPayload"
  | "CreateManyProgramPayload"
  | "UpdateByIdProgramPayload"
  | "UpdateOneProgramPayload"
  | "UpdateManyProgramPayload"
  | "RemoveByIdProgramPayload"
  | "RemoveOneProgramPayload"
  | "RemoveManyProgramPayload"
  | "CreateOneStackPayload"
  | "CreateManyStackPayload"
  | "UpdateByIdStackPayload"
  | "UpdateOneStackPayload"
  | "UpdateManyStackPayload"
  | "RemoveByIdStackPayload"
  | "RemoveOneStackPayload"
  | "RemoveManyStackPayload"
  | "CreateOneDNSRecordPayload"
  | "CreateManyDNSRecordPayload"
  | "UpdateByIdDNSRecordPayload"
  | "UpdateOneDNSRecordPayload"
  | "UpdateManyDNSRecordPayload"
  | "RemoveByIdDNSRecordPayload"
  | "RemoveOneDNSRecordPayload"
  | "RemoveManyDNSRecordPayload";

export interface ErrorInterface {
  /**
   * Generic error message
   */
  message?: Maybe<ScalarsEnums["String"]>;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  SortFindByIdsDeviceInput: SortFindByIdsDeviceInput | undefined;
  SortFindOneDeviceInput: SortFindOneDeviceInput | undefined;
  SortFindManyDeviceInput: SortFindManyDeviceInput | undefined;
  SortConnectionDeviceEnum: SortConnectionDeviceEnum | undefined;
  SortFindByIdsFlowShardInput: SortFindByIdsFlowShardInput | undefined;
  SortFindOneFlowShardInput: SortFindOneFlowShardInput | undefined;
  SortFindManyFlowShardInput: SortFindManyFlowShardInput | undefined;
  SortConnectionFlowShardEnum: SortConnectionFlowShardEnum | undefined;
  SortFindByIdsProgramInput: SortFindByIdsProgramInput | undefined;
  SortFindOneProgramInput: SortFindOneProgramInput | undefined;
  SortFindManyProgramInput: SortFindManyProgramInput | undefined;
  SortConnectionProgramEnum: SortConnectionProgramEnum | undefined;
  SortFindByIdsStackInput: SortFindByIdsStackInput | undefined;
  SortFindOneStackInput: SortFindOneStackInput | undefined;
  SortFindManyStackInput: SortFindManyStackInput | undefined;
  SortConnectionStackEnum: SortConnectionStackEnum | undefined;
  SortFindByIdsDNSRecordInput: SortFindByIdsDNSRecordInput | undefined;
  SortFindOneDNSRecordInput: SortFindOneDNSRecordInput | undefined;
  SortFindManyDNSRecordInput: SortFindManyDNSRecordInput | undefined;
  SortConnectionDNSRecordEnum: SortConnectionDNSRecordEnum | undefined;
  SortUpdateOneDeviceInput: SortUpdateOneDeviceInput | undefined;
  SortUpdateManyDeviceInput: SortUpdateManyDeviceInput | undefined;
  SortRemoveOneDeviceInput: SortRemoveOneDeviceInput | undefined;
  SortUpdateOneFlowShardInput: SortUpdateOneFlowShardInput | undefined;
  SortUpdateManyFlowShardInput: SortUpdateManyFlowShardInput | undefined;
  SortRemoveOneFlowShardInput: SortRemoveOneFlowShardInput | undefined;
  SortUpdateOneProgramInput: SortUpdateOneProgramInput | undefined;
  SortUpdateManyProgramInput: SortUpdateManyProgramInput | undefined;
  SortRemoveOneProgramInput: SortRemoveOneProgramInput | undefined;
  SortUpdateOneStackInput: SortUpdateOneStackInput | undefined;
  SortUpdateManyStackInput: SortUpdateManyStackInput | undefined;
  SortRemoveOneStackInput: SortRemoveOneStackInput | undefined;
  SortUpdateOneDNSRecordInput: SortUpdateOneDNSRecordInput | undefined;
  SortUpdateManyDNSRecordInput: SortUpdateManyDNSRecordInput | undefined;
  SortRemoveOneDNSRecordInput: SortRemoveOneDNSRecordInput | undefined;
}
