/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
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

export enum SortDirection {
  /** Sort by field values in ascending order. */
  ASC = "ASC",
  /** Sort by field values in descending order. */
  DESC = "DESC",
}

export interface FileSystemConnectInput {
  organisation?: Maybe<FileSystemOrganisationConnectFieldInput>;
  files?: Maybe<Array<FileSystemFilesConnectFieldInput>>;
}

export interface FileSystemConnectOrCreateInput {
  organisation?: Maybe<FileSystemOrganisationConnectOrCreateFieldInput>;
  files?: Maybe<Array<FileSystemFilesConnectOrCreateFieldInput>>;
}

export interface FileSystemConnectWhere {
  node: FileSystemWhere;
}

export interface FileSystemCreateInput {
  name: Scalars["String"];
  organisation?: Maybe<FileSystemOrganisationFieldInput>;
  files?: Maybe<FileSystemFilesFieldInput>;
}

export interface FileSystemDeleteInput {
  organisation?: Maybe<FileSystemOrganisationDeleteFieldInput>;
  files?: Maybe<Array<FileSystemFilesDeleteFieldInput>>;
}

export interface FileSystemDisconnectInput {
  organisation?: Maybe<FileSystemOrganisationDisconnectFieldInput>;
  files?: Maybe<Array<FileSystemFilesDisconnectFieldInput>>;
}

export interface FileSystemFilesAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<FileSystemFilesAggregateInput>>;
  OR?: Maybe<Array<FileSystemFilesAggregateInput>>;
  node?: Maybe<FileSystemFilesNodeAggregationWhereInput>;
}

export interface FileSystemFilesConnectFieldInput {
  where?: Maybe<HiveFileConnectWhere>;
  connect?: Maybe<Array<HiveFileConnectInput>>;
}

export interface FileSystemFilesConnectionSort {
  node?: Maybe<HiveFileSort>;
}

export interface FileSystemFilesConnectionWhere {
  AND?: Maybe<Array<FileSystemFilesConnectionWhere>>;
  OR?: Maybe<Array<FileSystemFilesConnectionWhere>>;
  node?: Maybe<HiveFileWhere>;
  node_NOT?: Maybe<HiveFileWhere>;
}

export interface FileSystemFilesConnectOrCreateFieldInput {
  where: HiveFileConnectOrCreateWhere;
  onCreate: FileSystemFilesConnectOrCreateFieldInputOnCreate;
}

export interface FileSystemFilesConnectOrCreateFieldInputOnCreate {
  node: HiveFileCreateInput;
}

export interface FileSystemFilesCreateFieldInput {
  node: HiveFileCreateInput;
}

export interface FileSystemFilesDeleteFieldInput {
  where?: Maybe<FileSystemFilesConnectionWhere>;
  delete?: Maybe<HiveFileDeleteInput>;
}

export interface FileSystemFilesDisconnectFieldInput {
  where?: Maybe<FileSystemFilesConnectionWhere>;
  disconnect?: Maybe<HiveFileDisconnectInput>;
}

export interface FileSystemFilesFieldInput {
  create?: Maybe<Array<FileSystemFilesCreateFieldInput>>;
  connect?: Maybe<Array<FileSystemFilesConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<FileSystemFilesConnectOrCreateFieldInput>>;
}

export interface FileSystemFilesNodeAggregationWhereInput {
  AND?: Maybe<Array<FileSystemFilesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<FileSystemFilesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  cid_EQUAL?: Maybe<Scalars["String"]>;
  cid_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  cid_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  cid_GT?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  cid_LONGEST_GT?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  cid_GTE?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  cid_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  cid_LT?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  cid_LONGEST_LT?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  cid_LTE?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  cid_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  mimetype_EQUAL?: Maybe<Scalars["String"]>;
  mimetype_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  mimetype_GT?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_GT?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  mimetype_GTE?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  mimetype_LT?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_LT?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  mimetype_LTE?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  size_EQUAL?: Maybe<Scalars["Int"]>;
  size_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  size_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  size_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  size_SUM_EQUAL?: Maybe<Scalars["Int"]>;
  size_GT?: Maybe<Scalars["Int"]>;
  size_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  size_MIN_GT?: Maybe<Scalars["Int"]>;
  size_MAX_GT?: Maybe<Scalars["Int"]>;
  size_SUM_GT?: Maybe<Scalars["Int"]>;
  size_GTE?: Maybe<Scalars["Int"]>;
  size_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  size_MIN_GTE?: Maybe<Scalars["Int"]>;
  size_MAX_GTE?: Maybe<Scalars["Int"]>;
  size_SUM_GTE?: Maybe<Scalars["Int"]>;
  size_LT?: Maybe<Scalars["Int"]>;
  size_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  size_MIN_LT?: Maybe<Scalars["Int"]>;
  size_MAX_LT?: Maybe<Scalars["Int"]>;
  size_SUM_LT?: Maybe<Scalars["Int"]>;
  size_LTE?: Maybe<Scalars["Int"]>;
  size_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  size_MIN_LTE?: Maybe<Scalars["Int"]>;
  size_MAX_LTE?: Maybe<Scalars["Int"]>;
  size_SUM_LTE?: Maybe<Scalars["Int"]>;
}

export interface FileSystemFilesUpdateConnectionInput {
  node?: Maybe<HiveFileUpdateInput>;
}

export interface FileSystemFilesUpdateFieldInput {
  where?: Maybe<FileSystemFilesConnectionWhere>;
  update?: Maybe<FileSystemFilesUpdateConnectionInput>;
  connect?: Maybe<Array<FileSystemFilesConnectFieldInput>>;
  disconnect?: Maybe<Array<FileSystemFilesDisconnectFieldInput>>;
  create?: Maybe<Array<FileSystemFilesCreateFieldInput>>;
  delete?: Maybe<Array<FileSystemFilesDeleteFieldInput>>;
  connectOrCreate?: Maybe<Array<FileSystemFilesConnectOrCreateFieldInput>>;
}

export interface FileSystemOptions {
  /** Specify one or more FileSystemSort objects to sort FileSystems by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<FileSystemSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

export interface FileSystemOrganisationAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<FileSystemOrganisationAggregateInput>>;
  OR?: Maybe<Array<FileSystemOrganisationAggregateInput>>;
  node?: Maybe<FileSystemOrganisationNodeAggregationWhereInput>;
}

export interface FileSystemOrganisationConnectFieldInput {
  where?: Maybe<HiveOrganisationConnectWhere>;
  connect?: Maybe<HiveOrganisationConnectInput>;
}

export interface FileSystemOrganisationConnectionSort {
  node?: Maybe<HiveOrganisationSort>;
}

export interface FileSystemOrganisationConnectionWhere {
  AND?: Maybe<Array<FileSystemOrganisationConnectionWhere>>;
  OR?: Maybe<Array<FileSystemOrganisationConnectionWhere>>;
  node?: Maybe<HiveOrganisationWhere>;
  node_NOT?: Maybe<HiveOrganisationWhere>;
}

export interface FileSystemOrganisationConnectOrCreateFieldInput {
  where: HiveOrganisationConnectOrCreateWhere;
  onCreate: FileSystemOrganisationConnectOrCreateFieldInputOnCreate;
}

export interface FileSystemOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationCreateInput;
}

export interface FileSystemOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface FileSystemOrganisationDeleteFieldInput {
  where?: Maybe<FileSystemOrganisationConnectionWhere>;
  delete?: Maybe<HiveOrganisationDeleteInput>;
}

export interface FileSystemOrganisationDisconnectFieldInput {
  where?: Maybe<FileSystemOrganisationConnectionWhere>;
  disconnect?: Maybe<HiveOrganisationDisconnectInput>;
}

export interface FileSystemOrganisationFieldInput {
  create?: Maybe<FileSystemOrganisationCreateFieldInput>;
  connect?: Maybe<FileSystemOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<FileSystemOrganisationConnectOrCreateFieldInput>;
}

export interface FileSystemOrganisationNodeAggregationWhereInput {
  AND?: Maybe<Array<FileSystemOrganisationNodeAggregationWhereInput>>;
  OR?: Maybe<Array<FileSystemOrganisationNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface FileSystemOrganisationUpdateConnectionInput {
  node?: Maybe<HiveOrganisationUpdateInput>;
}

export interface FileSystemOrganisationUpdateFieldInput {
  where?: Maybe<FileSystemOrganisationConnectionWhere>;
  update?: Maybe<FileSystemOrganisationUpdateConnectionInput>;
  connect?: Maybe<FileSystemOrganisationConnectFieldInput>;
  disconnect?: Maybe<FileSystemOrganisationDisconnectFieldInput>;
  create?: Maybe<FileSystemOrganisationCreateFieldInput>;
  delete?: Maybe<FileSystemOrganisationDeleteFieldInput>;
  connectOrCreate?: Maybe<FileSystemOrganisationConnectOrCreateFieldInput>;
}

export interface FileSystemRelationInput {
  organisation?: Maybe<FileSystemOrganisationCreateFieldInput>;
  files?: Maybe<Array<FileSystemFilesCreateFieldInput>>;
}

/** Fields to sort FileSystems by. The order in which sorts are applied is not guaranteed when specifying many fields in one FileSystemSort object. */
export interface FileSystemSort {
  name?: Maybe<SortDirection>;
}

export interface FileSystemUpdateInput {
  name?: Maybe<Scalars["String"]>;
  organisation?: Maybe<FileSystemOrganisationUpdateFieldInput>;
  files?: Maybe<Array<FileSystemFilesUpdateFieldInput>>;
}

export interface FileSystemWhere {
  OR?: Maybe<Array<FileSystemWhere>>;
  AND?: Maybe<Array<FileSystemWhere>>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  organisation?: Maybe<HiveOrganisationWhere>;
  organisation_NOT?: Maybe<HiveOrganisationWhere>;
  organisationAggregate?: Maybe<FileSystemOrganisationAggregateInput>;
  files?: Maybe<HiveFileWhere>;
  files_NOT?: Maybe<HiveFileWhere>;
  filesAggregate?: Maybe<FileSystemFilesAggregateInput>;
  organisationConnection?: Maybe<FileSystemOrganisationConnectionWhere>;
  organisationConnection_NOT?: Maybe<FileSystemOrganisationConnectionWhere>;
  filesConnection?: Maybe<FileSystemFilesConnectionWhere>;
  filesConnection_NOT?: Maybe<FileSystemFilesConnectionWhere>;
}

export interface HiveApplianceBrand_imageAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveApplianceBrand_imageAggregateInput>>;
  OR?: Maybe<Array<HiveApplianceBrand_imageAggregateInput>>;
  node?: Maybe<HiveApplianceBrand_imageNodeAggregationWhereInput>;
}

export interface HiveApplianceBrand_imageConnectFieldInput {
  where?: Maybe<HiveFileConnectWhere>;
  connect?: Maybe<HiveFileConnectInput>;
}

export interface HiveApplianceBrand_imageConnectionSort {
  node?: Maybe<HiveFileSort>;
}

export interface HiveApplianceBrand_imageConnectionWhere {
  AND?: Maybe<Array<HiveApplianceBrand_imageConnectionWhere>>;
  OR?: Maybe<Array<HiveApplianceBrand_imageConnectionWhere>>;
  node?: Maybe<HiveFileWhere>;
  node_NOT?: Maybe<HiveFileWhere>;
}

export interface HiveApplianceBrand_imageConnectOrCreateFieldInput {
  where: HiveFileConnectOrCreateWhere;
  onCreate: HiveApplianceBrand_imageConnectOrCreateFieldInputOnCreate;
}

export interface HiveApplianceBrand_imageConnectOrCreateFieldInputOnCreate {
  node: HiveFileCreateInput;
}

export interface HiveApplianceBrand_imageCreateFieldInput {
  node: HiveFileCreateInput;
}

export interface HiveApplianceBrand_imageDeleteFieldInput {
  where?: Maybe<HiveApplianceBrand_imageConnectionWhere>;
  delete?: Maybe<HiveFileDeleteInput>;
}

export interface HiveApplianceBrand_imageDisconnectFieldInput {
  where?: Maybe<HiveApplianceBrand_imageConnectionWhere>;
  disconnect?: Maybe<HiveFileDisconnectInput>;
}

export interface HiveApplianceBrand_imageFieldInput {
  create?: Maybe<HiveApplianceBrand_imageCreateFieldInput>;
  connect?: Maybe<HiveApplianceBrand_imageConnectFieldInput>;
  connectOrCreate?: Maybe<HiveApplianceBrand_imageConnectOrCreateFieldInput>;
}

export interface HiveApplianceBrand_imageNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveApplianceBrand_imageNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveApplianceBrand_imageNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  cid_EQUAL?: Maybe<Scalars["String"]>;
  cid_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  cid_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  cid_GT?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  cid_LONGEST_GT?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  cid_GTE?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  cid_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  cid_LT?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  cid_LONGEST_LT?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  cid_LTE?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  cid_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  mimetype_EQUAL?: Maybe<Scalars["String"]>;
  mimetype_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  mimetype_GT?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_GT?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  mimetype_GTE?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  mimetype_LT?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_LT?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  mimetype_LTE?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  size_EQUAL?: Maybe<Scalars["Int"]>;
  size_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  size_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  size_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  size_SUM_EQUAL?: Maybe<Scalars["Int"]>;
  size_GT?: Maybe<Scalars["Int"]>;
  size_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  size_MIN_GT?: Maybe<Scalars["Int"]>;
  size_MAX_GT?: Maybe<Scalars["Int"]>;
  size_SUM_GT?: Maybe<Scalars["Int"]>;
  size_GTE?: Maybe<Scalars["Int"]>;
  size_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  size_MIN_GTE?: Maybe<Scalars["Int"]>;
  size_MAX_GTE?: Maybe<Scalars["Int"]>;
  size_SUM_GTE?: Maybe<Scalars["Int"]>;
  size_LT?: Maybe<Scalars["Int"]>;
  size_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  size_MIN_LT?: Maybe<Scalars["Int"]>;
  size_MAX_LT?: Maybe<Scalars["Int"]>;
  size_SUM_LT?: Maybe<Scalars["Int"]>;
  size_LTE?: Maybe<Scalars["Int"]>;
  size_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  size_MIN_LTE?: Maybe<Scalars["Int"]>;
  size_MAX_LTE?: Maybe<Scalars["Int"]>;
  size_SUM_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveApplianceBrand_imageUpdateConnectionInput {
  node?: Maybe<HiveFileUpdateInput>;
}

export interface HiveApplianceBrand_imageUpdateFieldInput {
  where?: Maybe<HiveApplianceBrand_imageConnectionWhere>;
  update?: Maybe<HiveApplianceBrand_imageUpdateConnectionInput>;
  connect?: Maybe<HiveApplianceBrand_imageConnectFieldInput>;
  disconnect?: Maybe<HiveApplianceBrand_imageDisconnectFieldInput>;
  create?: Maybe<HiveApplianceBrand_imageCreateFieldInput>;
  delete?: Maybe<HiveApplianceBrand_imageDeleteFieldInput>;
  connectOrCreate?: Maybe<HiveApplianceBrand_imageConnectOrCreateFieldInput>;
}

export interface HiveApplianceConnectInput {
  types?: Maybe<Array<HiveApplianceTypesConnectFieldInput>>;
  permissions?: Maybe<Array<HiveAppliancePermissionsConnectFieldInput>>;
  services?: Maybe<Array<HiveApplianceServicesConnectFieldInput>>;
  brand_image?: Maybe<HiveApplianceBrand_imageConnectFieldInput>;
}

export interface HiveApplianceConnectOrCreateInput {
  types?: Maybe<Array<HiveApplianceTypesConnectOrCreateFieldInput>>;
  permissions?: Maybe<Array<HiveAppliancePermissionsConnectOrCreateFieldInput>>;
  brand_image?: Maybe<HiveApplianceBrand_imageConnectOrCreateFieldInput>;
}

export interface HiveApplianceConnectOrCreateWhere {
  node: HiveApplianceUniqueWhere;
}

export interface HiveApplianceConnectWhere {
  node: HiveApplianceWhere;
}

export interface HiveApplianceCreateInput {
  name: Scalars["String"];
  label?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  types?: Maybe<HiveApplianceTypesFieldInput>;
  permissions?: Maybe<HiveAppliancePermissionsFieldInput>;
  services?: Maybe<HiveApplianceServicesFieldInput>;
  brand_image?: Maybe<HiveApplianceBrand_imageFieldInput>;
}

export interface HiveApplianceDeleteInput {
  types?: Maybe<Array<HiveApplianceTypesDeleteFieldInput>>;
  permissions?: Maybe<Array<HiveAppliancePermissionsDeleteFieldInput>>;
  services?: Maybe<Array<HiveApplianceServicesDeleteFieldInput>>;
  brand_image?: Maybe<HiveApplianceBrand_imageDeleteFieldInput>;
}

export interface HiveApplianceDisconnectInput {
  types?: Maybe<Array<HiveApplianceTypesDisconnectFieldInput>>;
  permissions?: Maybe<Array<HiveAppliancePermissionsDisconnectFieldInput>>;
  services?: Maybe<Array<HiveApplianceServicesDisconnectFieldInput>>;
  brand_image?: Maybe<HiveApplianceBrand_imageDisconnectFieldInput>;
}

export interface HiveApplianceOptions {
  /** Specify one or more HiveApplianceSort objects to sort HiveAppliances by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveApplianceSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

export interface HiveAppliancePermissionsAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveAppliancePermissionsAggregateInput>>;
  OR?: Maybe<Array<HiveAppliancePermissionsAggregateInput>>;
  node?: Maybe<HiveAppliancePermissionsNodeAggregationWhereInput>;
}

export interface HiveAppliancePermissionsConnectFieldInput {
  where?: Maybe<PermissionConnectWhere>;
  connect?: Maybe<Array<PermissionConnectInput>>;
}

export interface HiveAppliancePermissionsConnectionSort {
  node?: Maybe<PermissionSort>;
}

export interface HiveAppliancePermissionsConnectionWhere {
  AND?: Maybe<Array<HiveAppliancePermissionsConnectionWhere>>;
  OR?: Maybe<Array<HiveAppliancePermissionsConnectionWhere>>;
  node?: Maybe<PermissionWhere>;
  node_NOT?: Maybe<PermissionWhere>;
}

export interface HiveAppliancePermissionsConnectOrCreateFieldInput {
  where: PermissionConnectOrCreateWhere;
  onCreate: HiveAppliancePermissionsConnectOrCreateFieldInputOnCreate;
}

export interface HiveAppliancePermissionsConnectOrCreateFieldInputOnCreate {
  node: PermissionCreateInput;
}

export interface HiveAppliancePermissionsCreateFieldInput {
  node: PermissionCreateInput;
}

export interface HiveAppliancePermissionsDeleteFieldInput {
  where?: Maybe<HiveAppliancePermissionsConnectionWhere>;
  delete?: Maybe<PermissionDeleteInput>;
}

export interface HiveAppliancePermissionsDisconnectFieldInput {
  where?: Maybe<HiveAppliancePermissionsConnectionWhere>;
  disconnect?: Maybe<PermissionDisconnectInput>;
}

export interface HiveAppliancePermissionsFieldInput {
  create?: Maybe<Array<HiveAppliancePermissionsCreateFieldInput>>;
  connect?: Maybe<Array<HiveAppliancePermissionsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveAppliancePermissionsConnectOrCreateFieldInput>
  >;
}

export interface HiveAppliancePermissionsNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveAppliancePermissionsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveAppliancePermissionsNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  action_EQUAL?: Maybe<Scalars["String"]>;
  action_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  action_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  action_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  action_GT?: Maybe<Scalars["Int"]>;
  action_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  action_LONGEST_GT?: Maybe<Scalars["Int"]>;
  action_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  action_GTE?: Maybe<Scalars["Int"]>;
  action_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  action_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  action_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  action_LT?: Maybe<Scalars["Int"]>;
  action_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  action_LONGEST_LT?: Maybe<Scalars["Int"]>;
  action_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  action_LTE?: Maybe<Scalars["Int"]>;
  action_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  action_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  action_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  scope_EQUAL?: Maybe<Scalars["String"]>;
  scope_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  scope_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  scope_GT?: Maybe<Scalars["Int"]>;
  scope_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  scope_LONGEST_GT?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  scope_GTE?: Maybe<Scalars["Int"]>;
  scope_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  scope_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  scope_LT?: Maybe<Scalars["Int"]>;
  scope_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  scope_LONGEST_LT?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  scope_LTE?: Maybe<Scalars["Int"]>;
  scope_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  scope_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveAppliancePermissionsUpdateConnectionInput {
  node?: Maybe<PermissionUpdateInput>;
}

export interface HiveAppliancePermissionsUpdateFieldInput {
  where?: Maybe<HiveAppliancePermissionsConnectionWhere>;
  update?: Maybe<HiveAppliancePermissionsUpdateConnectionInput>;
  connect?: Maybe<Array<HiveAppliancePermissionsConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveAppliancePermissionsDisconnectFieldInput>>;
  create?: Maybe<Array<HiveAppliancePermissionsCreateFieldInput>>;
  delete?: Maybe<Array<HiveAppliancePermissionsDeleteFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveAppliancePermissionsConnectOrCreateFieldInput>
  >;
}

export interface HiveApplianceRelationInput {
  types?: Maybe<Array<HiveApplianceTypesCreateFieldInput>>;
  permissions?: Maybe<Array<HiveAppliancePermissionsCreateFieldInput>>;
  services?: Maybe<Array<HiveApplianceServicesCreateFieldInput>>;
  brand_image?: Maybe<HiveApplianceBrand_imageCreateFieldInput>;
}

export interface HiveApplianceServicesAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveApplianceServicesAggregateInput>>;
  OR?: Maybe<Array<HiveApplianceServicesAggregateInput>>;
  node?: Maybe<HiveApplianceServicesNodeAggregationWhereInput>;
}

export interface HiveApplianceServicesConnectFieldInput {
  where?: Maybe<HiveServiceConnectWhere>;
}

export interface HiveApplianceServicesConnectionSort {
  node?: Maybe<HiveServiceSort>;
}

export interface HiveApplianceServicesConnectionWhere {
  AND?: Maybe<Array<HiveApplianceServicesConnectionWhere>>;
  OR?: Maybe<Array<HiveApplianceServicesConnectionWhere>>;
  node?: Maybe<HiveServiceWhere>;
  node_NOT?: Maybe<HiveServiceWhere>;
}

export interface HiveApplianceServicesCreateFieldInput {
  node: HiveServiceCreateInput;
}

export interface HiveApplianceServicesDeleteFieldInput {
  where?: Maybe<HiveApplianceServicesConnectionWhere>;
}

export interface HiveApplianceServicesDisconnectFieldInput {
  where?: Maybe<HiveApplianceServicesConnectionWhere>;
}

export interface HiveApplianceServicesFieldInput {
  create?: Maybe<Array<HiveApplianceServicesCreateFieldInput>>;
  connect?: Maybe<Array<HiveApplianceServicesConnectFieldInput>>;
}

export interface HiveApplianceServicesNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveApplianceServicesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveApplianceServicesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveApplianceServicesUpdateConnectionInput {
  node?: Maybe<HiveServiceUpdateInput>;
}

export interface HiveApplianceServicesUpdateFieldInput {
  where?: Maybe<HiveApplianceServicesConnectionWhere>;
  update?: Maybe<HiveApplianceServicesUpdateConnectionInput>;
  connect?: Maybe<Array<HiveApplianceServicesConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveApplianceServicesDisconnectFieldInput>>;
  create?: Maybe<Array<HiveApplianceServicesCreateFieldInput>>;
  delete?: Maybe<Array<HiveApplianceServicesDeleteFieldInput>>;
}

/** Fields to sort HiveAppliances by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveApplianceSort object. */
export interface HiveApplianceSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  label?: Maybe<SortDirection>;
  description?: Maybe<SortDirection>;
}

export interface HiveApplianceTypesAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveApplianceTypesAggregateInput>>;
  OR?: Maybe<Array<HiveApplianceTypesAggregateInput>>;
  node?: Maybe<HiveApplianceTypesNodeAggregationWhereInput>;
}

export interface HiveApplianceTypesConnectFieldInput {
  where?: Maybe<HiveTypeConnectWhere>;
  connect?: Maybe<Array<HiveTypeConnectInput>>;
}

export interface HiveApplianceTypesConnectionSort {
  node?: Maybe<HiveTypeSort>;
}

export interface HiveApplianceTypesConnectionWhere {
  AND?: Maybe<Array<HiveApplianceTypesConnectionWhere>>;
  OR?: Maybe<Array<HiveApplianceTypesConnectionWhere>>;
  node?: Maybe<HiveTypeWhere>;
  node_NOT?: Maybe<HiveTypeWhere>;
}

export interface HiveApplianceTypesConnectOrCreateFieldInput {
  where: HiveTypeConnectOrCreateWhere;
  onCreate: HiveApplianceTypesConnectOrCreateFieldInputOnCreate;
}

export interface HiveApplianceTypesConnectOrCreateFieldInputOnCreate {
  node: HiveTypeCreateInput;
}

export interface HiveApplianceTypesCreateFieldInput {
  node: HiveTypeCreateInput;
}

export interface HiveApplianceTypesDeleteFieldInput {
  where?: Maybe<HiveApplianceTypesConnectionWhere>;
  delete?: Maybe<HiveTypeDeleteInput>;
}

export interface HiveApplianceTypesDisconnectFieldInput {
  where?: Maybe<HiveApplianceTypesConnectionWhere>;
  disconnect?: Maybe<HiveTypeDisconnectInput>;
}

export interface HiveApplianceTypesFieldInput {
  create?: Maybe<Array<HiveApplianceTypesCreateFieldInput>>;
  connect?: Maybe<Array<HiveApplianceTypesConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveApplianceTypesConnectOrCreateFieldInput>>;
}

export interface HiveApplianceTypesNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveApplianceTypesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveApplianceTypesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveApplianceTypesUpdateConnectionInput {
  node?: Maybe<HiveTypeUpdateInput>;
}

export interface HiveApplianceTypesUpdateFieldInput {
  where?: Maybe<HiveApplianceTypesConnectionWhere>;
  update?: Maybe<HiveApplianceTypesUpdateConnectionInput>;
  connect?: Maybe<Array<HiveApplianceTypesConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveApplianceTypesDisconnectFieldInput>>;
  create?: Maybe<Array<HiveApplianceTypesCreateFieldInput>>;
  delete?: Maybe<Array<HiveApplianceTypesDeleteFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveApplianceTypesConnectOrCreateFieldInput>>;
}

export interface HiveApplianceUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveApplianceUpdateInput {
  name?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  types?: Maybe<Array<HiveApplianceTypesUpdateFieldInput>>;
  permissions?: Maybe<Array<HiveAppliancePermissionsUpdateFieldInput>>;
  services?: Maybe<Array<HiveApplianceServicesUpdateFieldInput>>;
  brand_image?: Maybe<HiveApplianceBrand_imageUpdateFieldInput>;
}

export interface HiveApplianceWhere {
  OR?: Maybe<Array<HiveApplianceWhere>>;
  AND?: Maybe<Array<HiveApplianceWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  label_NOT?: Maybe<Scalars["String"]>;
  label_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  label_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  label_CONTAINS?: Maybe<Scalars["String"]>;
  label_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  label_STARTS_WITH?: Maybe<Scalars["String"]>;
  label_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  label_ENDS_WITH?: Maybe<Scalars["String"]>;
  label_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_NOT?: Maybe<Scalars["String"]>;
  description_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_CONTAINS?: Maybe<Scalars["String"]>;
  description_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  description_STARTS_WITH?: Maybe<Scalars["String"]>;
  description_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  description_ENDS_WITH?: Maybe<Scalars["String"]>;
  description_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  types?: Maybe<HiveTypeWhere>;
  types_NOT?: Maybe<HiveTypeWhere>;
  typesAggregate?: Maybe<HiveApplianceTypesAggregateInput>;
  permissions?: Maybe<PermissionWhere>;
  permissions_NOT?: Maybe<PermissionWhere>;
  permissionsAggregate?: Maybe<HiveAppliancePermissionsAggregateInput>;
  services?: Maybe<HiveServiceWhere>;
  services_NOT?: Maybe<HiveServiceWhere>;
  servicesAggregate?: Maybe<HiveApplianceServicesAggregateInput>;
  brand_image?: Maybe<HiveFileWhere>;
  brand_image_NOT?: Maybe<HiveFileWhere>;
  brand_imageAggregate?: Maybe<HiveApplianceBrand_imageAggregateInput>;
  typesConnection?: Maybe<HiveApplianceTypesConnectionWhere>;
  typesConnection_NOT?: Maybe<HiveApplianceTypesConnectionWhere>;
  permissionsConnection?: Maybe<HiveAppliancePermissionsConnectionWhere>;
  permissionsConnection_NOT?: Maybe<HiveAppliancePermissionsConnectionWhere>;
  servicesConnection?: Maybe<HiveApplianceServicesConnectionWhere>;
  servicesConnection_NOT?: Maybe<HiveApplianceServicesConnectionWhere>;
  brand_imageConnection?: Maybe<HiveApplianceBrand_imageConnectionWhere>;
  brand_imageConnection_NOT?: Maybe<HiveApplianceBrand_imageConnectionWhere>;
}

export interface HiveFileChildrenAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveFileChildrenAggregateInput>>;
  OR?: Maybe<Array<HiveFileChildrenAggregateInput>>;
  node?: Maybe<HiveFileChildrenNodeAggregationWhereInput>;
}

export interface HiveFileChildrenConnectFieldInput {
  where?: Maybe<HiveFileConnectWhere>;
  connect?: Maybe<Array<HiveFileConnectInput>>;
}

export interface HiveFileChildrenConnectionSort {
  node?: Maybe<HiveFileSort>;
}

export interface HiveFileChildrenConnectionWhere {
  AND?: Maybe<Array<HiveFileChildrenConnectionWhere>>;
  OR?: Maybe<Array<HiveFileChildrenConnectionWhere>>;
  node?: Maybe<HiveFileWhere>;
  node_NOT?: Maybe<HiveFileWhere>;
}

export interface HiveFileChildrenConnectOrCreateFieldInput {
  where: HiveFileConnectOrCreateWhere;
  onCreate: HiveFileChildrenConnectOrCreateFieldInputOnCreate;
}

export interface HiveFileChildrenConnectOrCreateFieldInputOnCreate {
  node: HiveFileCreateInput;
}

export interface HiveFileChildrenCreateFieldInput {
  node: HiveFileCreateInput;
}

export interface HiveFileChildrenDeleteFieldInput {
  where?: Maybe<HiveFileChildrenConnectionWhere>;
  delete?: Maybe<HiveFileDeleteInput>;
}

export interface HiveFileChildrenDisconnectFieldInput {
  where?: Maybe<HiveFileChildrenConnectionWhere>;
  disconnect?: Maybe<HiveFileDisconnectInput>;
}

export interface HiveFileChildrenFieldInput {
  create?: Maybe<Array<HiveFileChildrenCreateFieldInput>>;
  connect?: Maybe<Array<HiveFileChildrenConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveFileChildrenConnectOrCreateFieldInput>>;
}

export interface HiveFileChildrenNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveFileChildrenNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveFileChildrenNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  cid_EQUAL?: Maybe<Scalars["String"]>;
  cid_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  cid_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  cid_GT?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  cid_LONGEST_GT?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  cid_GTE?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  cid_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  cid_LT?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  cid_LONGEST_LT?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  cid_LTE?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  cid_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  mimetype_EQUAL?: Maybe<Scalars["String"]>;
  mimetype_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  mimetype_GT?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_GT?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  mimetype_GTE?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  mimetype_LT?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_LT?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  mimetype_LTE?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  size_EQUAL?: Maybe<Scalars["Int"]>;
  size_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  size_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  size_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  size_SUM_EQUAL?: Maybe<Scalars["Int"]>;
  size_GT?: Maybe<Scalars["Int"]>;
  size_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  size_MIN_GT?: Maybe<Scalars["Int"]>;
  size_MAX_GT?: Maybe<Scalars["Int"]>;
  size_SUM_GT?: Maybe<Scalars["Int"]>;
  size_GTE?: Maybe<Scalars["Int"]>;
  size_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  size_MIN_GTE?: Maybe<Scalars["Int"]>;
  size_MAX_GTE?: Maybe<Scalars["Int"]>;
  size_SUM_GTE?: Maybe<Scalars["Int"]>;
  size_LT?: Maybe<Scalars["Int"]>;
  size_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  size_MIN_LT?: Maybe<Scalars["Int"]>;
  size_MAX_LT?: Maybe<Scalars["Int"]>;
  size_SUM_LT?: Maybe<Scalars["Int"]>;
  size_LTE?: Maybe<Scalars["Int"]>;
  size_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  size_MIN_LTE?: Maybe<Scalars["Int"]>;
  size_MAX_LTE?: Maybe<Scalars["Int"]>;
  size_SUM_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveFileChildrenUpdateConnectionInput {
  node?: Maybe<HiveFileUpdateInput>;
}

export interface HiveFileChildrenUpdateFieldInput {
  where?: Maybe<HiveFileChildrenConnectionWhere>;
  update?: Maybe<HiveFileChildrenUpdateConnectionInput>;
  connect?: Maybe<Array<HiveFileChildrenConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveFileChildrenDisconnectFieldInput>>;
  create?: Maybe<Array<HiveFileChildrenCreateFieldInput>>;
  delete?: Maybe<Array<HiveFileChildrenDeleteFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveFileChildrenConnectOrCreateFieldInput>>;
}

export interface HiveFileConnectInput {
  fs?: Maybe<HiveFileFsConnectFieldInput>;
  parent?: Maybe<HiveFileParentConnectFieldInput>;
  children?: Maybe<Array<HiveFileChildrenConnectFieldInput>>;
  convertedFrom?: Maybe<HiveFileConvertedFromConnectFieldInput>;
  views?: Maybe<Array<HiveFileViewsConnectFieldInput>>;
}

export interface HiveFileConnectOrCreateInput {
  parent?: Maybe<HiveFileParentConnectOrCreateFieldInput>;
  children?: Maybe<Array<HiveFileChildrenConnectOrCreateFieldInput>>;
  convertedFrom?: Maybe<HiveFileConvertedFromConnectOrCreateFieldInput>;
  views?: Maybe<Array<HiveFileViewsConnectOrCreateFieldInput>>;
}

export interface HiveFileConnectOrCreateWhere {
  node: HiveFileUniqueWhere;
}

export interface HiveFileConnectWhere {
  node: HiveFileWhere;
}

export interface HiveFileConvertedFromAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveFileConvertedFromAggregateInput>>;
  OR?: Maybe<Array<HiveFileConvertedFromAggregateInput>>;
  node?: Maybe<HiveFileConvertedFromNodeAggregationWhereInput>;
}

export interface HiveFileConvertedFromConnectFieldInput {
  where?: Maybe<HiveFileConnectWhere>;
  connect?: Maybe<HiveFileConnectInput>;
}

export interface HiveFileConvertedFromConnectionSort {
  node?: Maybe<HiveFileSort>;
}

export interface HiveFileConvertedFromConnectionWhere {
  AND?: Maybe<Array<HiveFileConvertedFromConnectionWhere>>;
  OR?: Maybe<Array<HiveFileConvertedFromConnectionWhere>>;
  node?: Maybe<HiveFileWhere>;
  node_NOT?: Maybe<HiveFileWhere>;
}

export interface HiveFileConvertedFromConnectOrCreateFieldInput {
  where: HiveFileConnectOrCreateWhere;
  onCreate: HiveFileConvertedFromConnectOrCreateFieldInputOnCreate;
}

export interface HiveFileConvertedFromConnectOrCreateFieldInputOnCreate {
  node: HiveFileCreateInput;
}

export interface HiveFileConvertedFromCreateFieldInput {
  node: HiveFileCreateInput;
}

export interface HiveFileConvertedFromDeleteFieldInput {
  where?: Maybe<HiveFileConvertedFromConnectionWhere>;
  delete?: Maybe<HiveFileDeleteInput>;
}

export interface HiveFileConvertedFromDisconnectFieldInput {
  where?: Maybe<HiveFileConvertedFromConnectionWhere>;
  disconnect?: Maybe<HiveFileDisconnectInput>;
}

export interface HiveFileConvertedFromFieldInput {
  create?: Maybe<HiveFileConvertedFromCreateFieldInput>;
  connect?: Maybe<HiveFileConvertedFromConnectFieldInput>;
  connectOrCreate?: Maybe<HiveFileConvertedFromConnectOrCreateFieldInput>;
}

export interface HiveFileConvertedFromNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveFileConvertedFromNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveFileConvertedFromNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  cid_EQUAL?: Maybe<Scalars["String"]>;
  cid_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  cid_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  cid_GT?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  cid_LONGEST_GT?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  cid_GTE?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  cid_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  cid_LT?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  cid_LONGEST_LT?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  cid_LTE?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  cid_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  mimetype_EQUAL?: Maybe<Scalars["String"]>;
  mimetype_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  mimetype_GT?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_GT?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  mimetype_GTE?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  mimetype_LT?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_LT?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  mimetype_LTE?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  size_EQUAL?: Maybe<Scalars["Int"]>;
  size_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  size_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  size_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  size_SUM_EQUAL?: Maybe<Scalars["Int"]>;
  size_GT?: Maybe<Scalars["Int"]>;
  size_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  size_MIN_GT?: Maybe<Scalars["Int"]>;
  size_MAX_GT?: Maybe<Scalars["Int"]>;
  size_SUM_GT?: Maybe<Scalars["Int"]>;
  size_GTE?: Maybe<Scalars["Int"]>;
  size_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  size_MIN_GTE?: Maybe<Scalars["Int"]>;
  size_MAX_GTE?: Maybe<Scalars["Int"]>;
  size_SUM_GTE?: Maybe<Scalars["Int"]>;
  size_LT?: Maybe<Scalars["Int"]>;
  size_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  size_MIN_LT?: Maybe<Scalars["Int"]>;
  size_MAX_LT?: Maybe<Scalars["Int"]>;
  size_SUM_LT?: Maybe<Scalars["Int"]>;
  size_LTE?: Maybe<Scalars["Int"]>;
  size_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  size_MIN_LTE?: Maybe<Scalars["Int"]>;
  size_MAX_LTE?: Maybe<Scalars["Int"]>;
  size_SUM_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveFileConvertedFromUpdateConnectionInput {
  node?: Maybe<HiveFileUpdateInput>;
}

export interface HiveFileConvertedFromUpdateFieldInput {
  where?: Maybe<HiveFileConvertedFromConnectionWhere>;
  update?: Maybe<HiveFileConvertedFromUpdateConnectionInput>;
  connect?: Maybe<HiveFileConvertedFromConnectFieldInput>;
  disconnect?: Maybe<HiveFileConvertedFromDisconnectFieldInput>;
  create?: Maybe<HiveFileConvertedFromCreateFieldInput>;
  delete?: Maybe<HiveFileConvertedFromDeleteFieldInput>;
  connectOrCreate?: Maybe<HiveFileConvertedFromConnectOrCreateFieldInput>;
}

export interface HiveFileCreateInput {
  name: Scalars["String"];
  cid?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  mimetype?: Maybe<Scalars["String"]>;
  isFolder?: Maybe<Scalars["Boolean"]>;
  fs?: Maybe<HiveFileFsFieldInput>;
  parent?: Maybe<HiveFileParentFieldInput>;
  children?: Maybe<HiveFileChildrenFieldInput>;
  convertedFrom?: Maybe<HiveFileConvertedFromFieldInput>;
  views?: Maybe<HiveFileViewsFieldInput>;
}

export interface HiveFileDeleteInput {
  fs?: Maybe<HiveFileFsDeleteFieldInput>;
  parent?: Maybe<HiveFileParentDeleteFieldInput>;
  children?: Maybe<Array<HiveFileChildrenDeleteFieldInput>>;
  convertedFrom?: Maybe<HiveFileConvertedFromDeleteFieldInput>;
  views?: Maybe<Array<HiveFileViewsDeleteFieldInput>>;
}

export interface HiveFileDisconnectInput {
  fs?: Maybe<HiveFileFsDisconnectFieldInput>;
  parent?: Maybe<HiveFileParentDisconnectFieldInput>;
  children?: Maybe<Array<HiveFileChildrenDisconnectFieldInput>>;
  convertedFrom?: Maybe<HiveFileConvertedFromDisconnectFieldInput>;
  views?: Maybe<Array<HiveFileViewsDisconnectFieldInput>>;
}

export interface HiveFileFsAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveFileFsAggregateInput>>;
  OR?: Maybe<Array<HiveFileFsAggregateInput>>;
  node?: Maybe<HiveFileFsNodeAggregationWhereInput>;
}

export interface HiveFileFsConnectFieldInput {
  where?: Maybe<FileSystemConnectWhere>;
  connect?: Maybe<FileSystemConnectInput>;
}

export interface HiveFileFsConnectionSort {
  node?: Maybe<FileSystemSort>;
}

export interface HiveFileFsConnectionWhere {
  AND?: Maybe<Array<HiveFileFsConnectionWhere>>;
  OR?: Maybe<Array<HiveFileFsConnectionWhere>>;
  node?: Maybe<FileSystemWhere>;
  node_NOT?: Maybe<FileSystemWhere>;
}

export interface HiveFileFsCreateFieldInput {
  node: FileSystemCreateInput;
}

export interface HiveFileFsDeleteFieldInput {
  where?: Maybe<HiveFileFsConnectionWhere>;
  delete?: Maybe<FileSystemDeleteInput>;
}

export interface HiveFileFsDisconnectFieldInput {
  where?: Maybe<HiveFileFsConnectionWhere>;
  disconnect?: Maybe<FileSystemDisconnectInput>;
}

export interface HiveFileFsFieldInput {
  create?: Maybe<HiveFileFsCreateFieldInput>;
  connect?: Maybe<HiveFileFsConnectFieldInput>;
}

export interface HiveFileFsNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveFileFsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveFileFsNodeAggregationWhereInput>>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveFileFsUpdateConnectionInput {
  node?: Maybe<FileSystemUpdateInput>;
}

export interface HiveFileFsUpdateFieldInput {
  where?: Maybe<HiveFileFsConnectionWhere>;
  update?: Maybe<HiveFileFsUpdateConnectionInput>;
  connect?: Maybe<HiveFileFsConnectFieldInput>;
  disconnect?: Maybe<HiveFileFsDisconnectFieldInput>;
  create?: Maybe<HiveFileFsCreateFieldInput>;
  delete?: Maybe<HiveFileFsDeleteFieldInput>;
}

export interface HiveFileOptions {
  /** Specify one or more HiveFileSort objects to sort HiveFiles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveFileSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

export interface HiveFileParentAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveFileParentAggregateInput>>;
  OR?: Maybe<Array<HiveFileParentAggregateInput>>;
  node?: Maybe<HiveFileParentNodeAggregationWhereInput>;
}

export interface HiveFileParentConnectFieldInput {
  where?: Maybe<HiveFileConnectWhere>;
  connect?: Maybe<HiveFileConnectInput>;
}

export interface HiveFileParentConnectionSort {
  node?: Maybe<HiveFileSort>;
}

export interface HiveFileParentConnectionWhere {
  AND?: Maybe<Array<HiveFileParentConnectionWhere>>;
  OR?: Maybe<Array<HiveFileParentConnectionWhere>>;
  node?: Maybe<HiveFileWhere>;
  node_NOT?: Maybe<HiveFileWhere>;
}

export interface HiveFileParentConnectOrCreateFieldInput {
  where: HiveFileConnectOrCreateWhere;
  onCreate: HiveFileParentConnectOrCreateFieldInputOnCreate;
}

export interface HiveFileParentConnectOrCreateFieldInputOnCreate {
  node: HiveFileCreateInput;
}

export interface HiveFileParentCreateFieldInput {
  node: HiveFileCreateInput;
}

export interface HiveFileParentDeleteFieldInput {
  where?: Maybe<HiveFileParentConnectionWhere>;
  delete?: Maybe<HiveFileDeleteInput>;
}

export interface HiveFileParentDisconnectFieldInput {
  where?: Maybe<HiveFileParentConnectionWhere>;
  disconnect?: Maybe<HiveFileDisconnectInput>;
}

export interface HiveFileParentFieldInput {
  create?: Maybe<HiveFileParentCreateFieldInput>;
  connect?: Maybe<HiveFileParentConnectFieldInput>;
  connectOrCreate?: Maybe<HiveFileParentConnectOrCreateFieldInput>;
}

export interface HiveFileParentNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveFileParentNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveFileParentNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  cid_EQUAL?: Maybe<Scalars["String"]>;
  cid_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  cid_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  cid_GT?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  cid_LONGEST_GT?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  cid_GTE?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  cid_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  cid_LT?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  cid_LONGEST_LT?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  cid_LTE?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  cid_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  mimetype_EQUAL?: Maybe<Scalars["String"]>;
  mimetype_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  mimetype_GT?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_GT?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  mimetype_GTE?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  mimetype_LT?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_LT?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  mimetype_LTE?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  size_EQUAL?: Maybe<Scalars["Int"]>;
  size_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  size_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  size_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  size_SUM_EQUAL?: Maybe<Scalars["Int"]>;
  size_GT?: Maybe<Scalars["Int"]>;
  size_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  size_MIN_GT?: Maybe<Scalars["Int"]>;
  size_MAX_GT?: Maybe<Scalars["Int"]>;
  size_SUM_GT?: Maybe<Scalars["Int"]>;
  size_GTE?: Maybe<Scalars["Int"]>;
  size_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  size_MIN_GTE?: Maybe<Scalars["Int"]>;
  size_MAX_GTE?: Maybe<Scalars["Int"]>;
  size_SUM_GTE?: Maybe<Scalars["Int"]>;
  size_LT?: Maybe<Scalars["Int"]>;
  size_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  size_MIN_LT?: Maybe<Scalars["Int"]>;
  size_MAX_LT?: Maybe<Scalars["Int"]>;
  size_SUM_LT?: Maybe<Scalars["Int"]>;
  size_LTE?: Maybe<Scalars["Int"]>;
  size_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  size_MIN_LTE?: Maybe<Scalars["Int"]>;
  size_MAX_LTE?: Maybe<Scalars["Int"]>;
  size_SUM_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveFileParentUpdateConnectionInput {
  node?: Maybe<HiveFileUpdateInput>;
}

export interface HiveFileParentUpdateFieldInput {
  where?: Maybe<HiveFileParentConnectionWhere>;
  update?: Maybe<HiveFileParentUpdateConnectionInput>;
  connect?: Maybe<HiveFileParentConnectFieldInput>;
  disconnect?: Maybe<HiveFileParentDisconnectFieldInput>;
  create?: Maybe<HiveFileParentCreateFieldInput>;
  delete?: Maybe<HiveFileParentDeleteFieldInput>;
  connectOrCreate?: Maybe<HiveFileParentConnectOrCreateFieldInput>;
}

export interface HiveFileRelationInput {
  fs?: Maybe<HiveFileFsCreateFieldInput>;
  parent?: Maybe<HiveFileParentCreateFieldInput>;
  children?: Maybe<Array<HiveFileChildrenCreateFieldInput>>;
  convertedFrom?: Maybe<HiveFileConvertedFromCreateFieldInput>;
  views?: Maybe<Array<HiveFileViewsCreateFieldInput>>;
}

/** Fields to sort HiveFiles by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveFileSort object. */
export interface HiveFileSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  cid?: Maybe<SortDirection>;
  size?: Maybe<SortDirection>;
  mimetype?: Maybe<SortDirection>;
  isFolder?: Maybe<SortDirection>;
  path_id?: Maybe<SortDirection>;
  path?: Maybe<SortDirection>;
}

export interface HiveFileUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveFileUpdateInput {
  name?: Maybe<Scalars["String"]>;
  cid?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  mimetype?: Maybe<Scalars["String"]>;
  isFolder?: Maybe<Scalars["Boolean"]>;
  fs?: Maybe<HiveFileFsUpdateFieldInput>;
  parent?: Maybe<HiveFileParentUpdateFieldInput>;
  children?: Maybe<Array<HiveFileChildrenUpdateFieldInput>>;
  convertedFrom?: Maybe<HiveFileConvertedFromUpdateFieldInput>;
  views?: Maybe<Array<HiveFileViewsUpdateFieldInput>>;
}

export interface HiveFileViewsAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveFileViewsAggregateInput>>;
  OR?: Maybe<Array<HiveFileViewsAggregateInput>>;
  node?: Maybe<HiveFileViewsNodeAggregationWhereInput>;
}

export interface HiveFileViewsConnectFieldInput {
  where?: Maybe<HiveFileConnectWhere>;
  connect?: Maybe<Array<HiveFileConnectInput>>;
}

export interface HiveFileViewsConnectionSort {
  node?: Maybe<HiveFileSort>;
}

export interface HiveFileViewsConnectionWhere {
  AND?: Maybe<Array<HiveFileViewsConnectionWhere>>;
  OR?: Maybe<Array<HiveFileViewsConnectionWhere>>;
  node?: Maybe<HiveFileWhere>;
  node_NOT?: Maybe<HiveFileWhere>;
}

export interface HiveFileViewsConnectOrCreateFieldInput {
  where: HiveFileConnectOrCreateWhere;
  onCreate: HiveFileViewsConnectOrCreateFieldInputOnCreate;
}

export interface HiveFileViewsConnectOrCreateFieldInputOnCreate {
  node: HiveFileCreateInput;
}

export interface HiveFileViewsCreateFieldInput {
  node: HiveFileCreateInput;
}

export interface HiveFileViewsDeleteFieldInput {
  where?: Maybe<HiveFileViewsConnectionWhere>;
  delete?: Maybe<HiveFileDeleteInput>;
}

export interface HiveFileViewsDisconnectFieldInput {
  where?: Maybe<HiveFileViewsConnectionWhere>;
  disconnect?: Maybe<HiveFileDisconnectInput>;
}

export interface HiveFileViewsFieldInput {
  create?: Maybe<Array<HiveFileViewsCreateFieldInput>>;
  connect?: Maybe<Array<HiveFileViewsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveFileViewsConnectOrCreateFieldInput>>;
}

export interface HiveFileViewsNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveFileViewsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveFileViewsNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  cid_EQUAL?: Maybe<Scalars["String"]>;
  cid_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  cid_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  cid_GT?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  cid_LONGEST_GT?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  cid_GTE?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  cid_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  cid_LT?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  cid_LONGEST_LT?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  cid_LTE?: Maybe<Scalars["Int"]>;
  cid_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  cid_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  mimetype_EQUAL?: Maybe<Scalars["String"]>;
  mimetype_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  mimetype_GT?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_GT?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  mimetype_GTE?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  mimetype_LT?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_LT?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  mimetype_LTE?: Maybe<Scalars["Int"]>;
  mimetype_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  mimetype_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  mimetype_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  size_EQUAL?: Maybe<Scalars["Int"]>;
  size_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  size_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  size_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  size_SUM_EQUAL?: Maybe<Scalars["Int"]>;
  size_GT?: Maybe<Scalars["Int"]>;
  size_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  size_MIN_GT?: Maybe<Scalars["Int"]>;
  size_MAX_GT?: Maybe<Scalars["Int"]>;
  size_SUM_GT?: Maybe<Scalars["Int"]>;
  size_GTE?: Maybe<Scalars["Int"]>;
  size_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  size_MIN_GTE?: Maybe<Scalars["Int"]>;
  size_MAX_GTE?: Maybe<Scalars["Int"]>;
  size_SUM_GTE?: Maybe<Scalars["Int"]>;
  size_LT?: Maybe<Scalars["Int"]>;
  size_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  size_MIN_LT?: Maybe<Scalars["Int"]>;
  size_MAX_LT?: Maybe<Scalars["Int"]>;
  size_SUM_LT?: Maybe<Scalars["Int"]>;
  size_LTE?: Maybe<Scalars["Int"]>;
  size_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  size_MIN_LTE?: Maybe<Scalars["Int"]>;
  size_MAX_LTE?: Maybe<Scalars["Int"]>;
  size_SUM_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveFileViewsUpdateConnectionInput {
  node?: Maybe<HiveFileUpdateInput>;
}

export interface HiveFileViewsUpdateFieldInput {
  where?: Maybe<HiveFileViewsConnectionWhere>;
  update?: Maybe<HiveFileViewsUpdateConnectionInput>;
  connect?: Maybe<Array<HiveFileViewsConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveFileViewsDisconnectFieldInput>>;
  create?: Maybe<Array<HiveFileViewsCreateFieldInput>>;
  delete?: Maybe<Array<HiveFileViewsDeleteFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveFileViewsConnectOrCreateFieldInput>>;
}

export interface HiveFileWhere {
  OR?: Maybe<Array<HiveFileWhere>>;
  AND?: Maybe<Array<HiveFileWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  cid?: Maybe<Scalars["String"]>;
  cid_NOT?: Maybe<Scalars["String"]>;
  cid_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  cid_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  cid_CONTAINS?: Maybe<Scalars["String"]>;
  cid_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  cid_STARTS_WITH?: Maybe<Scalars["String"]>;
  cid_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  cid_ENDS_WITH?: Maybe<Scalars["String"]>;
  cid_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  size_NOT?: Maybe<Scalars["Int"]>;
  size_IN?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  size_NOT_IN?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  size_LT?: Maybe<Scalars["Int"]>;
  size_LTE?: Maybe<Scalars["Int"]>;
  size_GT?: Maybe<Scalars["Int"]>;
  size_GTE?: Maybe<Scalars["Int"]>;
  mimetype?: Maybe<Scalars["String"]>;
  mimetype_NOT?: Maybe<Scalars["String"]>;
  mimetype_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  mimetype_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  mimetype_CONTAINS?: Maybe<Scalars["String"]>;
  mimetype_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  mimetype_STARTS_WITH?: Maybe<Scalars["String"]>;
  mimetype_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  mimetype_ENDS_WITH?: Maybe<Scalars["String"]>;
  mimetype_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  isFolder?: Maybe<Scalars["Boolean"]>;
  isFolder_NOT?: Maybe<Scalars["Boolean"]>;
  fs?: Maybe<FileSystemWhere>;
  fs_NOT?: Maybe<FileSystemWhere>;
  fsAggregate?: Maybe<HiveFileFsAggregateInput>;
  parent?: Maybe<HiveFileWhere>;
  parent_NOT?: Maybe<HiveFileWhere>;
  parentAggregate?: Maybe<HiveFileParentAggregateInput>;
  children?: Maybe<HiveFileWhere>;
  children_NOT?: Maybe<HiveFileWhere>;
  childrenAggregate?: Maybe<HiveFileChildrenAggregateInput>;
  convertedFrom?: Maybe<HiveFileWhere>;
  convertedFrom_NOT?: Maybe<HiveFileWhere>;
  convertedFromAggregate?: Maybe<HiveFileConvertedFromAggregateInput>;
  views?: Maybe<HiveFileWhere>;
  views_NOT?: Maybe<HiveFileWhere>;
  viewsAggregate?: Maybe<HiveFileViewsAggregateInput>;
  fsConnection?: Maybe<HiveFileFsConnectionWhere>;
  fsConnection_NOT?: Maybe<HiveFileFsConnectionWhere>;
  parentConnection?: Maybe<HiveFileParentConnectionWhere>;
  parentConnection_NOT?: Maybe<HiveFileParentConnectionWhere>;
  childrenConnection?: Maybe<HiveFileChildrenConnectionWhere>;
  childrenConnection_NOT?: Maybe<HiveFileChildrenConnectionWhere>;
  convertedFromConnection?: Maybe<HiveFileConvertedFromConnectionWhere>;
  convertedFromConnection_NOT?: Maybe<HiveFileConvertedFromConnectionWhere>;
  viewsConnection?: Maybe<HiveFileViewsConnectionWhere>;
  viewsConnection_NOT?: Maybe<HiveFileViewsConnectionWhere>;
}

export interface HiveIntegrationConnectOrCreateWhere {
  node: HiveIntegrationUniqueWhere;
}

export interface HiveIntegrationConnectWhere {
  node: HiveIntegrationWhere;
}

export interface HiveIntegrationCreateInput {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
}

export interface HiveIntegrationInstanceAppliancesAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveIntegrationInstanceAppliancesAggregateInput>>;
  OR?: Maybe<Array<HiveIntegrationInstanceAppliancesAggregateInput>>;
  node?: Maybe<HiveIntegrationInstanceAppliancesNodeAggregationWhereInput>;
}

export interface HiveIntegrationInstanceAppliancesConnectFieldInput {
  where?: Maybe<HiveApplianceConnectWhere>;
  connect?: Maybe<Array<HiveApplianceConnectInput>>;
}

export interface HiveIntegrationInstanceAppliancesConnectionSort {
  node?: Maybe<HiveApplianceSort>;
}

export interface HiveIntegrationInstanceAppliancesConnectionWhere {
  AND?: Maybe<Array<HiveIntegrationInstanceAppliancesConnectionWhere>>;
  OR?: Maybe<Array<HiveIntegrationInstanceAppliancesConnectionWhere>>;
  node?: Maybe<HiveApplianceWhere>;
  node_NOT?: Maybe<HiveApplianceWhere>;
}

export interface HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput {
  where: HiveApplianceConnectOrCreateWhere;
  onCreate: HiveIntegrationInstanceAppliancesConnectOrCreateFieldInputOnCreate;
}

export interface HiveIntegrationInstanceAppliancesConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceCreateInput;
}

export interface HiveIntegrationInstanceAppliancesCreateFieldInput {
  node: HiveApplianceCreateInput;
}

export interface HiveIntegrationInstanceAppliancesDeleteFieldInput {
  where?: Maybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
  delete?: Maybe<HiveApplianceDeleteInput>;
}

export interface HiveIntegrationInstanceAppliancesDisconnectFieldInput {
  where?: Maybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
  disconnect?: Maybe<HiveApplianceDisconnectInput>;
}

export interface HiveIntegrationInstanceAppliancesFieldInput {
  create?: Maybe<Array<HiveIntegrationInstanceAppliancesCreateFieldInput>>;
  connect?: Maybe<Array<HiveIntegrationInstanceAppliancesConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput>
  >;
}

export interface HiveIntegrationInstanceAppliancesNodeAggregationWhereInput {
  AND?: Maybe<
    Array<HiveIntegrationInstanceAppliancesNodeAggregationWhereInput>
  >;
  OR?: Maybe<Array<HiveIntegrationInstanceAppliancesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  label_EQUAL?: Maybe<Scalars["String"]>;
  label_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  label_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_GT?: Maybe<Scalars["Int"]>;
  label_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  label_LONGEST_GT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  label_GTE?: Maybe<Scalars["Int"]>;
  label_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  label_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  label_LT?: Maybe<Scalars["Int"]>;
  label_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  label_LONGEST_LT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  label_LTE?: Maybe<Scalars["Int"]>;
  label_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  label_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  description_EQUAL?: Maybe<Scalars["String"]>;
  description_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  description_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_GT?: Maybe<Scalars["Int"]>;
  description_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  description_LONGEST_GT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  description_GTE?: Maybe<Scalars["Int"]>;
  description_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  description_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  description_LT?: Maybe<Scalars["Int"]>;
  description_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  description_LONGEST_LT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  description_LTE?: Maybe<Scalars["Int"]>;
  description_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  description_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveIntegrationInstanceAppliancesUpdateConnectionInput {
  node?: Maybe<HiveApplianceUpdateInput>;
}

export interface HiveIntegrationInstanceAppliancesUpdateFieldInput {
  where?: Maybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
  update?: Maybe<HiveIntegrationInstanceAppliancesUpdateConnectionInput>;
  connect?: Maybe<Array<HiveIntegrationInstanceAppliancesConnectFieldInput>>;
  disconnect?: Maybe<
    Array<HiveIntegrationInstanceAppliancesDisconnectFieldInput>
  >;
  create?: Maybe<Array<HiveIntegrationInstanceAppliancesCreateFieldInput>>;
  delete?: Maybe<Array<HiveIntegrationInstanceAppliancesDeleteFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput>
  >;
}

export interface HiveIntegrationInstanceConnectInput {
  connections?: Maybe<
    Array<HiveIntegrationInstanceConnectionsConnectFieldInput>
  >;
  integration?: Maybe<HiveIntegrationInstanceIntegrationConnectFieldInput>;
  appliances?: Maybe<Array<HiveIntegrationInstanceAppliancesConnectFieldInput>>;
  organisation?: Maybe<HiveIntegrationInstanceOrganisationConnectFieldInput>;
}

export interface HiveIntegrationInstanceConnectionsAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveIntegrationInstanceConnectionsAggregateInput>>;
  OR?: Maybe<Array<HiveIntegrationInstanceConnectionsAggregateInput>>;
  node?: Maybe<HiveIntegrationInstanceConnectionsNodeAggregationWhereInput>;
}

export interface HiveIntegrationInstanceConnectionsConnectFieldInput {
  where?: Maybe<HiveIntegrationPathConnectWhere>;
  connect?: Maybe<Array<HiveIntegrationPathConnectInput>>;
}

export interface HiveIntegrationInstanceConnectionsConnectionSort {
  node?: Maybe<HiveIntegrationPathSort>;
}

export interface HiveIntegrationInstanceConnectionsConnectionWhere {
  AND?: Maybe<Array<HiveIntegrationInstanceConnectionsConnectionWhere>>;
  OR?: Maybe<Array<HiveIntegrationInstanceConnectionsConnectionWhere>>;
  node?: Maybe<HiveIntegrationPathWhere>;
  node_NOT?: Maybe<HiveIntegrationPathWhere>;
}

export interface HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput {
  where: HiveIntegrationPathConnectOrCreateWhere;
  onCreate: HiveIntegrationInstanceConnectionsConnectOrCreateFieldInputOnCreate;
}

export interface HiveIntegrationInstanceConnectionsConnectOrCreateFieldInputOnCreate {
  node: HiveIntegrationPathCreateInput;
}

export interface HiveIntegrationInstanceConnectionsCreateFieldInput {
  node: HiveIntegrationPathCreateInput;
}

export interface HiveIntegrationInstanceConnectionsDeleteFieldInput {
  where?: Maybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
  delete?: Maybe<HiveIntegrationPathDeleteInput>;
}

export interface HiveIntegrationInstanceConnectionsDisconnectFieldInput {
  where?: Maybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
  disconnect?: Maybe<HiveIntegrationPathDisconnectInput>;
}

export interface HiveIntegrationInstanceConnectionsFieldInput {
  create?: Maybe<Array<HiveIntegrationInstanceConnectionsCreateFieldInput>>;
  connect?: Maybe<Array<HiveIntegrationInstanceConnectionsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput>
  >;
}

export interface HiveIntegrationInstanceConnectionsNodeAggregationWhereInput {
  AND?: Maybe<
    Array<HiveIntegrationInstanceConnectionsNodeAggregationWhereInput>
  >;
  OR?: Maybe<
    Array<HiveIntegrationInstanceConnectionsNodeAggregationWhereInput>
  >;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  type_EQUAL?: Maybe<Scalars["String"]>;
  type_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  type_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  type_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  type_GT?: Maybe<Scalars["Int"]>;
  type_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  type_LONGEST_GT?: Maybe<Scalars["Int"]>;
  type_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  type_GTE?: Maybe<Scalars["Int"]>;
  type_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  type_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  type_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  type_LT?: Maybe<Scalars["Int"]>;
  type_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  type_LONGEST_LT?: Maybe<Scalars["Int"]>;
  type_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  type_LTE?: Maybe<Scalars["Int"]>;
  type_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  type_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  type_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  connectionBlob_EQUAL?: Maybe<Scalars["String"]>;
  connectionBlob_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  connectionBlob_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  connectionBlob_GT?: Maybe<Scalars["Int"]>;
  connectionBlob_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  connectionBlob_LONGEST_GT?: Maybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  connectionBlob_GTE?: Maybe<Scalars["Int"]>;
  connectionBlob_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  connectionBlob_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  connectionBlob_LT?: Maybe<Scalars["Int"]>;
  connectionBlob_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  connectionBlob_LONGEST_LT?: Maybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  connectionBlob_LTE?: Maybe<Scalars["Int"]>;
  connectionBlob_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  connectionBlob_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  connectionBlob_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveIntegrationInstanceConnectionsUpdateConnectionInput {
  node?: Maybe<HiveIntegrationPathUpdateInput>;
}

export interface HiveIntegrationInstanceConnectionsUpdateFieldInput {
  where?: Maybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
  update?: Maybe<HiveIntegrationInstanceConnectionsUpdateConnectionInput>;
  connect?: Maybe<Array<HiveIntegrationInstanceConnectionsConnectFieldInput>>;
  disconnect?: Maybe<
    Array<HiveIntegrationInstanceConnectionsDisconnectFieldInput>
  >;
  create?: Maybe<Array<HiveIntegrationInstanceConnectionsCreateFieldInput>>;
  delete?: Maybe<Array<HiveIntegrationInstanceConnectionsDeleteFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput>
  >;
}

export interface HiveIntegrationInstanceConnectOrCreateInput {
  connections?: Maybe<
    Array<HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput>
  >;
  integration?: Maybe<HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput>;
  appliances?: Maybe<
    Array<HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput>
  >;
  organisation?: Maybe<HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput>;
}

export interface HiveIntegrationInstanceConnectOrCreateWhere {
  node: HiveIntegrationInstanceUniqueWhere;
}

export interface HiveIntegrationInstanceConnectWhere {
  node: HiveIntegrationInstanceWhere;
}

export interface HiveIntegrationInstanceCreateInput {
  name?: Maybe<Scalars["String"]>;
  isRunning?: Maybe<Scalars["Boolean"]>;
  config?: Maybe<Scalars["String"]>;
  connections?: Maybe<HiveIntegrationInstanceConnectionsFieldInput>;
  integration?: Maybe<HiveIntegrationInstanceIntegrationFieldInput>;
  appliances?: Maybe<HiveIntegrationInstanceAppliancesFieldInput>;
  organisation?: Maybe<HiveIntegrationInstanceOrganisationFieldInput>;
}

export interface HiveIntegrationInstanceDeleteInput {
  connections?: Maybe<
    Array<HiveIntegrationInstanceConnectionsDeleteFieldInput>
  >;
  integration?: Maybe<HiveIntegrationInstanceIntegrationDeleteFieldInput>;
  appliances?: Maybe<Array<HiveIntegrationInstanceAppliancesDeleteFieldInput>>;
  organisation?: Maybe<HiveIntegrationInstanceOrganisationDeleteFieldInput>;
}

export interface HiveIntegrationInstanceDisconnectInput {
  connections?: Maybe<
    Array<HiveIntegrationInstanceConnectionsDisconnectFieldInput>
  >;
  integration?: Maybe<HiveIntegrationInstanceIntegrationDisconnectFieldInput>;
  appliances?: Maybe<
    Array<HiveIntegrationInstanceAppliancesDisconnectFieldInput>
  >;
  organisation?: Maybe<HiveIntegrationInstanceOrganisationDisconnectFieldInput>;
}

export interface HiveIntegrationInstanceIntegrationAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveIntegrationInstanceIntegrationAggregateInput>>;
  OR?: Maybe<Array<HiveIntegrationInstanceIntegrationAggregateInput>>;
  node?: Maybe<HiveIntegrationInstanceIntegrationNodeAggregationWhereInput>;
}

export interface HiveIntegrationInstanceIntegrationConnectFieldInput {
  where?: Maybe<HiveIntegrationConnectWhere>;
}

export interface HiveIntegrationInstanceIntegrationConnectionSort {
  node?: Maybe<HiveIntegrationSort>;
}

export interface HiveIntegrationInstanceIntegrationConnectionWhere {
  AND?: Maybe<Array<HiveIntegrationInstanceIntegrationConnectionWhere>>;
  OR?: Maybe<Array<HiveIntegrationInstanceIntegrationConnectionWhere>>;
  node?: Maybe<HiveIntegrationWhere>;
  node_NOT?: Maybe<HiveIntegrationWhere>;
}

export interface HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput {
  where: HiveIntegrationConnectOrCreateWhere;
  onCreate: HiveIntegrationInstanceIntegrationConnectOrCreateFieldInputOnCreate;
}

export interface HiveIntegrationInstanceIntegrationConnectOrCreateFieldInputOnCreate {
  node: HiveIntegrationCreateInput;
}

export interface HiveIntegrationInstanceIntegrationCreateFieldInput {
  node: HiveIntegrationCreateInput;
}

export interface HiveIntegrationInstanceIntegrationDeleteFieldInput {
  where?: Maybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
}

export interface HiveIntegrationInstanceIntegrationDisconnectFieldInput {
  where?: Maybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
}

export interface HiveIntegrationInstanceIntegrationFieldInput {
  create?: Maybe<HiveIntegrationInstanceIntegrationCreateFieldInput>;
  connect?: Maybe<HiveIntegrationInstanceIntegrationConnectFieldInput>;
  connectOrCreate?: Maybe<HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput>;
}

export interface HiveIntegrationInstanceIntegrationNodeAggregationWhereInput {
  AND?: Maybe<
    Array<HiveIntegrationInstanceIntegrationNodeAggregationWhereInput>
  >;
  OR?: Maybe<
    Array<HiveIntegrationInstanceIntegrationNodeAggregationWhereInput>
  >;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  description_EQUAL?: Maybe<Scalars["String"]>;
  description_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  description_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_GT?: Maybe<Scalars["Int"]>;
  description_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  description_LONGEST_GT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  description_GTE?: Maybe<Scalars["Int"]>;
  description_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  description_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  description_LT?: Maybe<Scalars["Int"]>;
  description_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  description_LONGEST_LT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  description_LTE?: Maybe<Scalars["Int"]>;
  description_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  description_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveIntegrationInstanceIntegrationUpdateConnectionInput {
  node?: Maybe<HiveIntegrationUpdateInput>;
}

export interface HiveIntegrationInstanceIntegrationUpdateFieldInput {
  where?: Maybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
  update?: Maybe<HiveIntegrationInstanceIntegrationUpdateConnectionInput>;
  connect?: Maybe<HiveIntegrationInstanceIntegrationConnectFieldInput>;
  disconnect?: Maybe<HiveIntegrationInstanceIntegrationDisconnectFieldInput>;
  create?: Maybe<HiveIntegrationInstanceIntegrationCreateFieldInput>;
  delete?: Maybe<HiveIntegrationInstanceIntegrationDeleteFieldInput>;
  connectOrCreate?: Maybe<HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput>;
}

export interface HiveIntegrationInstanceOptions {
  /** Specify one or more HiveIntegrationInstanceSort objects to sort HiveIntegrationInstances by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveIntegrationInstanceSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

export interface HiveIntegrationInstanceOrganisationAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveIntegrationInstanceOrganisationAggregateInput>>;
  OR?: Maybe<Array<HiveIntegrationInstanceOrganisationAggregateInput>>;
  node?: Maybe<HiveIntegrationInstanceOrganisationNodeAggregationWhereInput>;
}

export interface HiveIntegrationInstanceOrganisationConnectFieldInput {
  where?: Maybe<HiveOrganisationConnectWhere>;
  connect?: Maybe<HiveOrganisationConnectInput>;
}

export interface HiveIntegrationInstanceOrganisationConnectionSort {
  node?: Maybe<HiveOrganisationSort>;
}

export interface HiveIntegrationInstanceOrganisationConnectionWhere {
  AND?: Maybe<Array<HiveIntegrationInstanceOrganisationConnectionWhere>>;
  OR?: Maybe<Array<HiveIntegrationInstanceOrganisationConnectionWhere>>;
  node?: Maybe<HiveOrganisationWhere>;
  node_NOT?: Maybe<HiveOrganisationWhere>;
}

export interface HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput {
  where: HiveOrganisationConnectOrCreateWhere;
  onCreate: HiveIntegrationInstanceOrganisationConnectOrCreateFieldInputOnCreate;
}

export interface HiveIntegrationInstanceOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationCreateInput;
}

export interface HiveIntegrationInstanceOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface HiveIntegrationInstanceOrganisationDeleteFieldInput {
  where?: Maybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
  delete?: Maybe<HiveOrganisationDeleteInput>;
}

export interface HiveIntegrationInstanceOrganisationDisconnectFieldInput {
  where?: Maybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
  disconnect?: Maybe<HiveOrganisationDisconnectInput>;
}

export interface HiveIntegrationInstanceOrganisationFieldInput {
  create?: Maybe<HiveIntegrationInstanceOrganisationCreateFieldInput>;
  connect?: Maybe<HiveIntegrationInstanceOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput>;
}

export interface HiveIntegrationInstanceOrganisationNodeAggregationWhereInput {
  AND?: Maybe<
    Array<HiveIntegrationInstanceOrganisationNodeAggregationWhereInput>
  >;
  OR?: Maybe<
    Array<HiveIntegrationInstanceOrganisationNodeAggregationWhereInput>
  >;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveIntegrationInstanceOrganisationUpdateConnectionInput {
  node?: Maybe<HiveOrganisationUpdateInput>;
}

export interface HiveIntegrationInstanceOrganisationUpdateFieldInput {
  where?: Maybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
  update?: Maybe<HiveIntegrationInstanceOrganisationUpdateConnectionInput>;
  connect?: Maybe<HiveIntegrationInstanceOrganisationConnectFieldInput>;
  disconnect?: Maybe<HiveIntegrationInstanceOrganisationDisconnectFieldInput>;
  create?: Maybe<HiveIntegrationInstanceOrganisationCreateFieldInput>;
  delete?: Maybe<HiveIntegrationInstanceOrganisationDeleteFieldInput>;
  connectOrCreate?: Maybe<HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput>;
}

export interface HiveIntegrationInstanceRelationInput {
  connections?: Maybe<
    Array<HiveIntegrationInstanceConnectionsCreateFieldInput>
  >;
  integration?: Maybe<HiveIntegrationInstanceIntegrationCreateFieldInput>;
  appliances?: Maybe<Array<HiveIntegrationInstanceAppliancesCreateFieldInput>>;
  organisation?: Maybe<HiveIntegrationInstanceOrganisationCreateFieldInput>;
}

/** Fields to sort HiveIntegrationInstances by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveIntegrationInstanceSort object. */
export interface HiveIntegrationInstanceSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  isRunning?: Maybe<SortDirection>;
  config?: Maybe<SortDirection>;
}

export interface HiveIntegrationInstanceUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveIntegrationInstanceUpdateInput {
  name?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["String"]>;
  connections?: Maybe<
    Array<HiveIntegrationInstanceConnectionsUpdateFieldInput>
  >;
  integration?: Maybe<HiveIntegrationInstanceIntegrationUpdateFieldInput>;
  appliances?: Maybe<Array<HiveIntegrationInstanceAppliancesUpdateFieldInput>>;
  organisation?: Maybe<HiveIntegrationInstanceOrganisationUpdateFieldInput>;
}

export interface HiveIntegrationInstanceWhere {
  OR?: Maybe<Array<HiveIntegrationInstanceWhere>>;
  AND?: Maybe<Array<HiveIntegrationInstanceWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  isRunning?: Maybe<Scalars["Boolean"]>;
  isRunning_NOT?: Maybe<Scalars["Boolean"]>;
  config?: Maybe<Scalars["String"]>;
  config_NOT?: Maybe<Scalars["String"]>;
  config_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  config_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  config_CONTAINS?: Maybe<Scalars["String"]>;
  config_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  config_STARTS_WITH?: Maybe<Scalars["String"]>;
  config_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  config_ENDS_WITH?: Maybe<Scalars["String"]>;
  config_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  connections?: Maybe<HiveIntegrationPathWhere>;
  connections_NOT?: Maybe<HiveIntegrationPathWhere>;
  connectionsAggregate?: Maybe<HiveIntegrationInstanceConnectionsAggregateInput>;
  integration?: Maybe<HiveIntegrationWhere>;
  integration_NOT?: Maybe<HiveIntegrationWhere>;
  integrationAggregate?: Maybe<HiveIntegrationInstanceIntegrationAggregateInput>;
  appliances?: Maybe<HiveApplianceWhere>;
  appliances_NOT?: Maybe<HiveApplianceWhere>;
  appliancesAggregate?: Maybe<HiveIntegrationInstanceAppliancesAggregateInput>;
  organisation?: Maybe<HiveOrganisationWhere>;
  organisation_NOT?: Maybe<HiveOrganisationWhere>;
  organisationAggregate?: Maybe<HiveIntegrationInstanceOrganisationAggregateInput>;
  connectionsConnection?: Maybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
  connectionsConnection_NOT?: Maybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
  integrationConnection?: Maybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
  integrationConnection_NOT?: Maybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
  appliancesConnection?: Maybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
  appliancesConnection_NOT?: Maybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
  organisationConnection?: Maybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
  organisationConnection_NOT?: Maybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
}

export interface HiveIntegrationOptions {
  /** Specify one or more HiveIntegrationSort objects to sort HiveIntegrations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveIntegrationSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

export interface HiveIntegrationPathCollectionCreateInput {
  name?: Maybe<Scalars["String"]>;
}

export interface HiveIntegrationPathCollectionOptions {
  /** Specify one or more HiveIntegrationPathCollectionSort objects to sort HiveIntegrationPathCollections by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveIntegrationPathCollectionSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

/** Fields to sort HiveIntegrationPathCollections by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveIntegrationPathCollectionSort object. */
export interface HiveIntegrationPathCollectionSort {
  name?: Maybe<SortDirection>;
}

export interface HiveIntegrationPathCollectionUpdateInput {
  name?: Maybe<Scalars["String"]>;
}

export interface HiveIntegrationPathCollectionWhere {
  OR?: Maybe<Array<HiveIntegrationPathCollectionWhere>>;
  AND?: Maybe<Array<HiveIntegrationPathCollectionWhere>>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
}

export interface HiveIntegrationPathConnectInput {
  instance?: Maybe<HiveIntegrationPathInstanceConnectFieldInput>;
}

export interface HiveIntegrationPathConnectOrCreateInput {
  instance?: Maybe<HiveIntegrationPathInstanceConnectOrCreateFieldInput>;
}

export interface HiveIntegrationPathConnectOrCreateWhere {
  node: HiveIntegrationPathUniqueWhere;
}

export interface HiveIntegrationPathConnectWhere {
  node: HiveIntegrationPathWhere;
}

export interface HiveIntegrationPathCreateInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  connectionBlob?: Maybe<Scalars["String"]>;
  instance?: Maybe<HiveIntegrationPathInstanceFieldInput>;
}

export interface HiveIntegrationPathDeleteInput {
  instance?: Maybe<HiveIntegrationPathInstanceDeleteFieldInput>;
}

export interface HiveIntegrationPathDisconnectInput {
  instance?: Maybe<HiveIntegrationPathInstanceDisconnectFieldInput>;
}

export interface HiveIntegrationPathInstanceAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveIntegrationPathInstanceAggregateInput>>;
  OR?: Maybe<Array<HiveIntegrationPathInstanceAggregateInput>>;
  node?: Maybe<HiveIntegrationPathInstanceNodeAggregationWhereInput>;
}

export interface HiveIntegrationPathInstanceConnectFieldInput {
  where?: Maybe<HiveIntegrationInstanceConnectWhere>;
  connect?: Maybe<HiveIntegrationInstanceConnectInput>;
}

export interface HiveIntegrationPathInstanceConnectionSort {
  node?: Maybe<HiveIntegrationInstanceSort>;
}

export interface HiveIntegrationPathInstanceConnectionWhere {
  AND?: Maybe<Array<HiveIntegrationPathInstanceConnectionWhere>>;
  OR?: Maybe<Array<HiveIntegrationPathInstanceConnectionWhere>>;
  node?: Maybe<HiveIntegrationInstanceWhere>;
  node_NOT?: Maybe<HiveIntegrationInstanceWhere>;
}

export interface HiveIntegrationPathInstanceConnectOrCreateFieldInput {
  where: HiveIntegrationInstanceConnectOrCreateWhere;
  onCreate: HiveIntegrationPathInstanceConnectOrCreateFieldInputOnCreate;
}

export interface HiveIntegrationPathInstanceConnectOrCreateFieldInputOnCreate {
  node: HiveIntegrationInstanceCreateInput;
}

export interface HiveIntegrationPathInstanceCreateFieldInput {
  node: HiveIntegrationInstanceCreateInput;
}

export interface HiveIntegrationPathInstanceDeleteFieldInput {
  where?: Maybe<HiveIntegrationPathInstanceConnectionWhere>;
  delete?: Maybe<HiveIntegrationInstanceDeleteInput>;
}

export interface HiveIntegrationPathInstanceDisconnectFieldInput {
  where?: Maybe<HiveIntegrationPathInstanceConnectionWhere>;
  disconnect?: Maybe<HiveIntegrationInstanceDisconnectInput>;
}

export interface HiveIntegrationPathInstanceFieldInput {
  create?: Maybe<HiveIntegrationPathInstanceCreateFieldInput>;
  connect?: Maybe<HiveIntegrationPathInstanceConnectFieldInput>;
  connectOrCreate?: Maybe<HiveIntegrationPathInstanceConnectOrCreateFieldInput>;
}

export interface HiveIntegrationPathInstanceNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveIntegrationPathInstanceNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveIntegrationPathInstanceNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  config_EQUAL?: Maybe<Scalars["String"]>;
  config_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  config_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  config_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  config_GT?: Maybe<Scalars["Int"]>;
  config_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  config_LONGEST_GT?: Maybe<Scalars["Int"]>;
  config_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  config_GTE?: Maybe<Scalars["Int"]>;
  config_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  config_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  config_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  config_LT?: Maybe<Scalars["Int"]>;
  config_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  config_LONGEST_LT?: Maybe<Scalars["Int"]>;
  config_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  config_LTE?: Maybe<Scalars["Int"]>;
  config_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  config_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  config_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveIntegrationPathInstanceUpdateConnectionInput {
  node?: Maybe<HiveIntegrationInstanceUpdateInput>;
}

export interface HiveIntegrationPathInstanceUpdateFieldInput {
  where?: Maybe<HiveIntegrationPathInstanceConnectionWhere>;
  update?: Maybe<HiveIntegrationPathInstanceUpdateConnectionInput>;
  connect?: Maybe<HiveIntegrationPathInstanceConnectFieldInput>;
  disconnect?: Maybe<HiveIntegrationPathInstanceDisconnectFieldInput>;
  create?: Maybe<HiveIntegrationPathInstanceCreateFieldInput>;
  delete?: Maybe<HiveIntegrationPathInstanceDeleteFieldInput>;
  connectOrCreate?: Maybe<HiveIntegrationPathInstanceConnectOrCreateFieldInput>;
}

export interface HiveIntegrationPathOptions {
  /** Specify one or more HiveIntegrationPathSort objects to sort HiveIntegrationPaths by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveIntegrationPathSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

export interface HiveIntegrationPathRelationInput {
  instance?: Maybe<HiveIntegrationPathInstanceCreateFieldInput>;
}

/** Fields to sort HiveIntegrationPaths by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveIntegrationPathSort object. */
export interface HiveIntegrationPathSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
  connectionBlob?: Maybe<SortDirection>;
}

export interface HiveIntegrationPathUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveIntegrationPathUpdateInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  connectionBlob?: Maybe<Scalars["String"]>;
  instance?: Maybe<HiveIntegrationPathInstanceUpdateFieldInput>;
}

export interface HiveIntegrationPathWhere {
  OR?: Maybe<Array<HiveIntegrationPathWhere>>;
  AND?: Maybe<Array<HiveIntegrationPathWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  type_NOT?: Maybe<Scalars["String"]>;
  type_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type_CONTAINS?: Maybe<Scalars["String"]>;
  type_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  type_STARTS_WITH?: Maybe<Scalars["String"]>;
  type_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  type_ENDS_WITH?: Maybe<Scalars["String"]>;
  type_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  connectionBlob?: Maybe<Scalars["String"]>;
  connectionBlob_NOT?: Maybe<Scalars["String"]>;
  connectionBlob_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  connectionBlob_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  connectionBlob_CONTAINS?: Maybe<Scalars["String"]>;
  connectionBlob_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  connectionBlob_STARTS_WITH?: Maybe<Scalars["String"]>;
  connectionBlob_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  connectionBlob_ENDS_WITH?: Maybe<Scalars["String"]>;
  connectionBlob_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  instance?: Maybe<HiveIntegrationInstanceWhere>;
  instance_NOT?: Maybe<HiveIntegrationInstanceWhere>;
  instanceAggregate?: Maybe<HiveIntegrationPathInstanceAggregateInput>;
  instanceConnection?: Maybe<HiveIntegrationPathInstanceConnectionWhere>;
  instanceConnection_NOT?: Maybe<HiveIntegrationPathInstanceConnectionWhere>;
}

/** Fields to sort HiveIntegrations by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveIntegrationSort object. */
export interface HiveIntegrationSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  description?: Maybe<SortDirection>;
}

export interface HiveIntegrationUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveIntegrationUpdateInput {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
}

export interface HiveIntegrationWhere {
  OR?: Maybe<Array<HiveIntegrationWhere>>;
  AND?: Maybe<Array<HiveIntegrationWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_NOT?: Maybe<Scalars["String"]>;
  description_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_CONTAINS?: Maybe<Scalars["String"]>;
  description_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  description_STARTS_WITH?: Maybe<Scalars["String"]>;
  description_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  description_ENDS_WITH?: Maybe<Scalars["String"]>;
  description_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
}

export interface HiveOrganisationAppliancesAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveOrganisationAppliancesAggregateInput>>;
  OR?: Maybe<Array<HiveOrganisationAppliancesAggregateInput>>;
  node?: Maybe<HiveOrganisationAppliancesNodeAggregationWhereInput>;
}

export interface HiveOrganisationAppliancesConnectFieldInput {
  where?: Maybe<HiveApplianceConnectWhere>;
  connect?: Maybe<Array<HiveApplianceConnectInput>>;
}

export interface HiveOrganisationAppliancesConnectionSort {
  node?: Maybe<HiveApplianceSort>;
}

export interface HiveOrganisationAppliancesConnectionWhere {
  AND?: Maybe<Array<HiveOrganisationAppliancesConnectionWhere>>;
  OR?: Maybe<Array<HiveOrganisationAppliancesConnectionWhere>>;
  node?: Maybe<HiveApplianceWhere>;
  node_NOT?: Maybe<HiveApplianceWhere>;
}

export interface HiveOrganisationAppliancesConnectOrCreateFieldInput {
  where: HiveApplianceConnectOrCreateWhere;
  onCreate: HiveOrganisationAppliancesConnectOrCreateFieldInputOnCreate;
}

export interface HiveOrganisationAppliancesConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceCreateInput;
}

export interface HiveOrganisationAppliancesCreateFieldInput {
  node: HiveApplianceCreateInput;
}

export interface HiveOrganisationAppliancesDeleteFieldInput {
  where?: Maybe<HiveOrganisationAppliancesConnectionWhere>;
  delete?: Maybe<HiveApplianceDeleteInput>;
}

export interface HiveOrganisationAppliancesDisconnectFieldInput {
  where?: Maybe<HiveOrganisationAppliancesConnectionWhere>;
  disconnect?: Maybe<HiveApplianceDisconnectInput>;
}

export interface HiveOrganisationAppliancesFieldInput {
  create?: Maybe<Array<HiveOrganisationAppliancesCreateFieldInput>>;
  connect?: Maybe<Array<HiveOrganisationAppliancesConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationAppliancesConnectOrCreateFieldInput>
  >;
}

export interface HiveOrganisationAppliancesNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveOrganisationAppliancesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveOrganisationAppliancesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  label_EQUAL?: Maybe<Scalars["String"]>;
  label_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  label_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_GT?: Maybe<Scalars["Int"]>;
  label_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  label_LONGEST_GT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  label_GTE?: Maybe<Scalars["Int"]>;
  label_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  label_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  label_LT?: Maybe<Scalars["Int"]>;
  label_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  label_LONGEST_LT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  label_LTE?: Maybe<Scalars["Int"]>;
  label_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  label_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  description_EQUAL?: Maybe<Scalars["String"]>;
  description_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  description_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_GT?: Maybe<Scalars["Int"]>;
  description_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  description_LONGEST_GT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  description_GTE?: Maybe<Scalars["Int"]>;
  description_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  description_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  description_LT?: Maybe<Scalars["Int"]>;
  description_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  description_LONGEST_LT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  description_LTE?: Maybe<Scalars["Int"]>;
  description_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  description_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveOrganisationAppliancesUpdateConnectionInput {
  node?: Maybe<HiveApplianceUpdateInput>;
}

export interface HiveOrganisationAppliancesUpdateFieldInput {
  where?: Maybe<HiveOrganisationAppliancesConnectionWhere>;
  update?: Maybe<HiveOrganisationAppliancesUpdateConnectionInput>;
  connect?: Maybe<Array<HiveOrganisationAppliancesConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveOrganisationAppliancesDisconnectFieldInput>>;
  create?: Maybe<Array<HiveOrganisationAppliancesCreateFieldInput>>;
  delete?: Maybe<Array<HiveOrganisationAppliancesDeleteFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationAppliancesConnectOrCreateFieldInput>
  >;
}

export interface HiveOrganisationConnectInput {
  roles?: Maybe<Array<HiveOrganisationRolesConnectFieldInput>>;
  members?: Maybe<Array<HiveOrganisationMembersConnectFieldInput>>;
  appliances?: Maybe<Array<HiveOrganisationAppliancesConnectFieldInput>>;
  integrations?: Maybe<Array<HiveOrganisationIntegrationsConnectFieldInput>>;
}

export interface HiveOrganisationConnectOrCreateInput {
  roles?: Maybe<Array<HiveOrganisationRolesConnectOrCreateFieldInput>>;
  members?: Maybe<Array<HiveOrganisationMembersConnectOrCreateFieldInput>>;
  appliances?: Maybe<
    Array<HiveOrganisationAppliancesConnectOrCreateFieldInput>
  >;
  integrations?: Maybe<
    Array<HiveOrganisationIntegrationsConnectOrCreateFieldInput>
  >;
}

export interface HiveOrganisationConnectOrCreateWhere {
  node: HiveOrganisationUniqueWhere;
}

export interface HiveOrganisationConnectWhere {
  node: HiveOrganisationWhere;
}

export interface HiveOrganisationCreateInput {
  name?: Maybe<Scalars["String"]>;
  roles?: Maybe<HiveOrganisationRolesFieldInput>;
  members?: Maybe<HiveOrganisationMembersFieldInput>;
  appliances?: Maybe<HiveOrganisationAppliancesFieldInput>;
  integrations?: Maybe<HiveOrganisationIntegrationsFieldInput>;
}

export interface HiveOrganisationDeleteInput {
  roles?: Maybe<Array<HiveOrganisationRolesDeleteFieldInput>>;
  members?: Maybe<Array<HiveOrganisationMembersDeleteFieldInput>>;
  appliances?: Maybe<Array<HiveOrganisationAppliancesDeleteFieldInput>>;
  integrations?: Maybe<Array<HiveOrganisationIntegrationsDeleteFieldInput>>;
}

export interface HiveOrganisationDisconnectInput {
  roles?: Maybe<Array<HiveOrganisationRolesDisconnectFieldInput>>;
  members?: Maybe<Array<HiveOrganisationMembersDisconnectFieldInput>>;
  appliances?: Maybe<Array<HiveOrganisationAppliancesDisconnectFieldInput>>;
  integrations?: Maybe<Array<HiveOrganisationIntegrationsDisconnectFieldInput>>;
}

export interface HiveOrganisationIntegrationsAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveOrganisationIntegrationsAggregateInput>>;
  OR?: Maybe<Array<HiveOrganisationIntegrationsAggregateInput>>;
  node?: Maybe<HiveOrganisationIntegrationsNodeAggregationWhereInput>;
}

export interface HiveOrganisationIntegrationsConnectFieldInput {
  where?: Maybe<HiveIntegrationInstanceConnectWhere>;
  connect?: Maybe<Array<HiveIntegrationInstanceConnectInput>>;
}

export interface HiveOrganisationIntegrationsConnectionSort {
  node?: Maybe<HiveIntegrationInstanceSort>;
}

export interface HiveOrganisationIntegrationsConnectionWhere {
  AND?: Maybe<Array<HiveOrganisationIntegrationsConnectionWhere>>;
  OR?: Maybe<Array<HiveOrganisationIntegrationsConnectionWhere>>;
  node?: Maybe<HiveIntegrationInstanceWhere>;
  node_NOT?: Maybe<HiveIntegrationInstanceWhere>;
}

export interface HiveOrganisationIntegrationsConnectOrCreateFieldInput {
  where: HiveIntegrationInstanceConnectOrCreateWhere;
  onCreate: HiveOrganisationIntegrationsConnectOrCreateFieldInputOnCreate;
}

export interface HiveOrganisationIntegrationsConnectOrCreateFieldInputOnCreate {
  node: HiveIntegrationInstanceCreateInput;
}

export interface HiveOrganisationIntegrationsCreateFieldInput {
  node: HiveIntegrationInstanceCreateInput;
}

export interface HiveOrganisationIntegrationsDeleteFieldInput {
  where?: Maybe<HiveOrganisationIntegrationsConnectionWhere>;
  delete?: Maybe<HiveIntegrationInstanceDeleteInput>;
}

export interface HiveOrganisationIntegrationsDisconnectFieldInput {
  where?: Maybe<HiveOrganisationIntegrationsConnectionWhere>;
  disconnect?: Maybe<HiveIntegrationInstanceDisconnectInput>;
}

export interface HiveOrganisationIntegrationsFieldInput {
  create?: Maybe<Array<HiveOrganisationIntegrationsCreateFieldInput>>;
  connect?: Maybe<Array<HiveOrganisationIntegrationsConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationIntegrationsConnectOrCreateFieldInput>
  >;
}

export interface HiveOrganisationIntegrationsNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveOrganisationIntegrationsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveOrganisationIntegrationsNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  config_EQUAL?: Maybe<Scalars["String"]>;
  config_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  config_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  config_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  config_GT?: Maybe<Scalars["Int"]>;
  config_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  config_LONGEST_GT?: Maybe<Scalars["Int"]>;
  config_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  config_GTE?: Maybe<Scalars["Int"]>;
  config_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  config_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  config_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  config_LT?: Maybe<Scalars["Int"]>;
  config_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  config_LONGEST_LT?: Maybe<Scalars["Int"]>;
  config_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  config_LTE?: Maybe<Scalars["Int"]>;
  config_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  config_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  config_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveOrganisationIntegrationsUpdateConnectionInput {
  node?: Maybe<HiveIntegrationInstanceUpdateInput>;
}

export interface HiveOrganisationIntegrationsUpdateFieldInput {
  where?: Maybe<HiveOrganisationIntegrationsConnectionWhere>;
  update?: Maybe<HiveOrganisationIntegrationsUpdateConnectionInput>;
  connect?: Maybe<Array<HiveOrganisationIntegrationsConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveOrganisationIntegrationsDisconnectFieldInput>>;
  create?: Maybe<Array<HiveOrganisationIntegrationsCreateFieldInput>>;
  delete?: Maybe<Array<HiveOrganisationIntegrationsDeleteFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationIntegrationsConnectOrCreateFieldInput>
  >;
}

export interface HiveOrganisationMembersAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveOrganisationMembersAggregateInput>>;
  OR?: Maybe<Array<HiveOrganisationMembersAggregateInput>>;
  node?: Maybe<HiveOrganisationMembersNodeAggregationWhereInput>;
}

export interface HiveOrganisationMembersConnectFieldInput {
  where?: Maybe<HiveUserConnectWhere>;
  connect?: Maybe<Array<HiveUserConnectInput>>;
}

export interface HiveOrganisationMembersConnectionSort {
  node?: Maybe<HiveUserSort>;
}

export interface HiveOrganisationMembersConnectionWhere {
  AND?: Maybe<Array<HiveOrganisationMembersConnectionWhere>>;
  OR?: Maybe<Array<HiveOrganisationMembersConnectionWhere>>;
  node?: Maybe<HiveUserWhere>;
  node_NOT?: Maybe<HiveUserWhere>;
}

export interface HiveOrganisationMembersConnectOrCreateFieldInput {
  where: HiveUserConnectOrCreateWhere;
  onCreate: HiveOrganisationMembersConnectOrCreateFieldInputOnCreate;
}

export interface HiveOrganisationMembersConnectOrCreateFieldInputOnCreate {
  node: HiveUserCreateInput;
}

export interface HiveOrganisationMembersCreateFieldInput {
  node: HiveUserCreateInput;
}

export interface HiveOrganisationMembersDeleteFieldInput {
  where?: Maybe<HiveOrganisationMembersConnectionWhere>;
  delete?: Maybe<HiveUserDeleteInput>;
}

export interface HiveOrganisationMembersDisconnectFieldInput {
  where?: Maybe<HiveOrganisationMembersConnectionWhere>;
  disconnect?: Maybe<HiveUserDisconnectInput>;
}

export interface HiveOrganisationMembersFieldInput {
  create?: Maybe<Array<HiveOrganisationMembersCreateFieldInput>>;
  connect?: Maybe<Array<HiveOrganisationMembersConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationMembersConnectOrCreateFieldInput>
  >;
}

export interface HiveOrganisationMembersNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveOrganisationMembersNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveOrganisationMembersNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  username_EQUAL?: Maybe<Scalars["String"]>;
  username_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  username_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  username_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  username_GT?: Maybe<Scalars["Int"]>;
  username_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  username_LONGEST_GT?: Maybe<Scalars["Int"]>;
  username_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  username_GTE?: Maybe<Scalars["Int"]>;
  username_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  username_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  username_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  username_LT?: Maybe<Scalars["Int"]>;
  username_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  username_LONGEST_LT?: Maybe<Scalars["Int"]>;
  username_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  username_LTE?: Maybe<Scalars["Int"]>;
  username_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  username_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  username_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  password_EQUAL?: Maybe<Scalars["String"]>;
  password_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  password_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  password_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  password_GT?: Maybe<Scalars["Int"]>;
  password_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  password_LONGEST_GT?: Maybe<Scalars["Int"]>;
  password_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  password_GTE?: Maybe<Scalars["Int"]>;
  password_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  password_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  password_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  password_LT?: Maybe<Scalars["Int"]>;
  password_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  password_LONGEST_LT?: Maybe<Scalars["Int"]>;
  password_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  password_LTE?: Maybe<Scalars["Int"]>;
  password_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  password_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  password_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveOrganisationMembersUpdateConnectionInput {
  node?: Maybe<HiveUserUpdateInput>;
}

export interface HiveOrganisationMembersUpdateFieldInput {
  where?: Maybe<HiveOrganisationMembersConnectionWhere>;
  update?: Maybe<HiveOrganisationMembersUpdateConnectionInput>;
  connect?: Maybe<Array<HiveOrganisationMembersConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveOrganisationMembersDisconnectFieldInput>>;
  create?: Maybe<Array<HiveOrganisationMembersCreateFieldInput>>;
  delete?: Maybe<Array<HiveOrganisationMembersDeleteFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationMembersConnectOrCreateFieldInput>
  >;
}

export interface HiveOrganisationOptions {
  /** Specify one or more HiveOrganisationSort objects to sort HiveOrganisations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveOrganisationSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

export interface HiveOrganisationRelationInput {
  roles?: Maybe<Array<HiveOrganisationRolesCreateFieldInput>>;
  members?: Maybe<Array<HiveOrganisationMembersCreateFieldInput>>;
  appliances?: Maybe<Array<HiveOrganisationAppliancesCreateFieldInput>>;
  integrations?: Maybe<Array<HiveOrganisationIntegrationsCreateFieldInput>>;
}

export interface HiveOrganisationRolesAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveOrganisationRolesAggregateInput>>;
  OR?: Maybe<Array<HiveOrganisationRolesAggregateInput>>;
  node?: Maybe<HiveOrganisationRolesNodeAggregationWhereInput>;
}

export interface HiveOrganisationRolesConnectFieldInput {
  where?: Maybe<RoleConnectWhere>;
  connect?: Maybe<Array<RoleConnectInput>>;
}

export interface HiveOrganisationRolesConnectionSort {
  node?: Maybe<RoleSort>;
}

export interface HiveOrganisationRolesConnectionWhere {
  AND?: Maybe<Array<HiveOrganisationRolesConnectionWhere>>;
  OR?: Maybe<Array<HiveOrganisationRolesConnectionWhere>>;
  node?: Maybe<RoleWhere>;
  node_NOT?: Maybe<RoleWhere>;
}

export interface HiveOrganisationRolesConnectOrCreateFieldInput {
  where: RoleConnectOrCreateWhere;
  onCreate: HiveOrganisationRolesConnectOrCreateFieldInputOnCreate;
}

export interface HiveOrganisationRolesConnectOrCreateFieldInputOnCreate {
  node: RoleCreateInput;
}

export interface HiveOrganisationRolesCreateFieldInput {
  node: RoleCreateInput;
}

export interface HiveOrganisationRolesDeleteFieldInput {
  where?: Maybe<HiveOrganisationRolesConnectionWhere>;
  delete?: Maybe<RoleDeleteInput>;
}

export interface HiveOrganisationRolesDisconnectFieldInput {
  where?: Maybe<HiveOrganisationRolesConnectionWhere>;
  disconnect?: Maybe<RoleDisconnectInput>;
}

export interface HiveOrganisationRolesFieldInput {
  create?: Maybe<Array<HiveOrganisationRolesCreateFieldInput>>;
  connect?: Maybe<Array<HiveOrganisationRolesConnectFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationRolesConnectOrCreateFieldInput>
  >;
}

export interface HiveOrganisationRolesNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveOrganisationRolesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveOrganisationRolesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveOrganisationRolesUpdateConnectionInput {
  node?: Maybe<RoleUpdateInput>;
}

export interface HiveOrganisationRolesUpdateFieldInput {
  where?: Maybe<HiveOrganisationRolesConnectionWhere>;
  update?: Maybe<HiveOrganisationRolesUpdateConnectionInput>;
  connect?: Maybe<Array<HiveOrganisationRolesConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveOrganisationRolesDisconnectFieldInput>>;
  create?: Maybe<Array<HiveOrganisationRolesCreateFieldInput>>;
  delete?: Maybe<Array<HiveOrganisationRolesDeleteFieldInput>>;
  connectOrCreate?: Maybe<
    Array<HiveOrganisationRolesConnectOrCreateFieldInput>
  >;
}

/** Fields to sort HiveOrganisations by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveOrganisationSort object. */
export interface HiveOrganisationSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface HiveOrganisationUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveOrganisationUpdateInput {
  name?: Maybe<Scalars["String"]>;
  roles?: Maybe<Array<HiveOrganisationRolesUpdateFieldInput>>;
  members?: Maybe<Array<HiveOrganisationMembersUpdateFieldInput>>;
  appliances?: Maybe<Array<HiveOrganisationAppliancesUpdateFieldInput>>;
  integrations?: Maybe<Array<HiveOrganisationIntegrationsUpdateFieldInput>>;
}

export interface HiveOrganisationWhere {
  OR?: Maybe<Array<HiveOrganisationWhere>>;
  AND?: Maybe<Array<HiveOrganisationWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  roles?: Maybe<RoleWhere>;
  roles_NOT?: Maybe<RoleWhere>;
  rolesAggregate?: Maybe<HiveOrganisationRolesAggregateInput>;
  members?: Maybe<HiveUserWhere>;
  members_NOT?: Maybe<HiveUserWhere>;
  membersAggregate?: Maybe<HiveOrganisationMembersAggregateInput>;
  appliances?: Maybe<HiveApplianceWhere>;
  appliances_NOT?: Maybe<HiveApplianceWhere>;
  appliancesAggregate?: Maybe<HiveOrganisationAppliancesAggregateInput>;
  integrations?: Maybe<HiveIntegrationInstanceWhere>;
  integrations_NOT?: Maybe<HiveIntegrationInstanceWhere>;
  integrationsAggregate?: Maybe<HiveOrganisationIntegrationsAggregateInput>;
  rolesConnection?: Maybe<HiveOrganisationRolesConnectionWhere>;
  rolesConnection_NOT?: Maybe<HiveOrganisationRolesConnectionWhere>;
  membersConnection?: Maybe<HiveOrganisationMembersConnectionWhere>;
  membersConnection_NOT?: Maybe<HiveOrganisationMembersConnectionWhere>;
  appliancesConnection?: Maybe<HiveOrganisationAppliancesConnectionWhere>;
  appliancesConnection_NOT?: Maybe<HiveOrganisationAppliancesConnectionWhere>;
  integrationsConnection?: Maybe<HiveOrganisationIntegrationsConnectionWhere>;
  integrationsConnection_NOT?: Maybe<HiveOrganisationIntegrationsConnectionWhere>;
}

export interface HiveServiceConnectWhere {
  node: HiveServiceWhere;
}

export interface HiveServiceCreateInput {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
}

export interface HiveServiceOptions {
  /** Specify one or more HiveServiceSort objects to sort HiveServices by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveServiceSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

/** Fields to sort HiveServices by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveServiceSort object. */
export interface HiveServiceSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface HiveServiceUpdateInput {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
}

export interface HiveServiceWhere {
  OR?: Maybe<Array<HiveServiceWhere>>;
  AND?: Maybe<Array<HiveServiceWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
}

export interface HiveTypeConnectInput {
  fields?: Maybe<Array<HiveTypeFieldsConnectFieldInput>>;
  usedIn?: Maybe<Array<HiveTypeUsedInConnectFieldInput>>;
}

export interface HiveTypeConnectOrCreateInput {
  fields?: Maybe<Array<HiveTypeFieldsConnectOrCreateFieldInput>>;
  usedIn?: Maybe<Array<HiveTypeUsedInConnectOrCreateFieldInput>>;
}

export interface HiveTypeConnectOrCreateWhere {
  node: HiveTypeUniqueWhere;
}

export interface HiveTypeConnectWhere {
  node: HiveTypeWhere;
}

export interface HiveTypeCreateInput {
  name?: Maybe<Scalars["String"]>;
  fields?: Maybe<HiveTypeFieldsFieldInput>;
  usedIn?: Maybe<HiveTypeUsedInFieldInput>;
}

export interface HiveTypeDeleteInput {
  fields?: Maybe<Array<HiveTypeFieldsDeleteFieldInput>>;
  usedIn?: Maybe<Array<HiveTypeUsedInDeleteFieldInput>>;
}

export interface HiveTypeDisconnectInput {
  fields?: Maybe<Array<HiveTypeFieldsDisconnectFieldInput>>;
  usedIn?: Maybe<Array<HiveTypeUsedInDisconnectFieldInput>>;
}

export interface HiveTypeFieldConnectOrCreateWhere {
  node: HiveTypeFieldUniqueWhere;
}

export interface HiveTypeFieldConnectWhere {
  node: HiveTypeFieldWhere;
}

export interface HiveTypeFieldCreateInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface HiveTypeFieldOptions {
  /** Specify one or more HiveTypeFieldSort objects to sort HiveTypeFields by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveTypeFieldSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

export interface HiveTypeFieldsAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveTypeFieldsAggregateInput>>;
  OR?: Maybe<Array<HiveTypeFieldsAggregateInput>>;
  node?: Maybe<HiveTypeFieldsNodeAggregationWhereInput>;
}

export interface HiveTypeFieldsConnectFieldInput {
  where?: Maybe<HiveTypeFieldConnectWhere>;
}

export interface HiveTypeFieldsConnectionSort {
  node?: Maybe<HiveTypeFieldSort>;
}

export interface HiveTypeFieldsConnectionWhere {
  AND?: Maybe<Array<HiveTypeFieldsConnectionWhere>>;
  OR?: Maybe<Array<HiveTypeFieldsConnectionWhere>>;
  node?: Maybe<HiveTypeFieldWhere>;
  node_NOT?: Maybe<HiveTypeFieldWhere>;
}

export interface HiveTypeFieldsConnectOrCreateFieldInput {
  where: HiveTypeFieldConnectOrCreateWhere;
  onCreate: HiveTypeFieldsConnectOrCreateFieldInputOnCreate;
}

export interface HiveTypeFieldsConnectOrCreateFieldInputOnCreate {
  node: HiveTypeFieldCreateInput;
}

export interface HiveTypeFieldsCreateFieldInput {
  node: HiveTypeFieldCreateInput;
}

export interface HiveTypeFieldsDeleteFieldInput {
  where?: Maybe<HiveTypeFieldsConnectionWhere>;
}

export interface HiveTypeFieldsDisconnectFieldInput {
  where?: Maybe<HiveTypeFieldsConnectionWhere>;
}

export interface HiveTypeFieldsFieldInput {
  create?: Maybe<Array<HiveTypeFieldsCreateFieldInput>>;
  connect?: Maybe<Array<HiveTypeFieldsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveTypeFieldsConnectOrCreateFieldInput>>;
}

export interface HiveTypeFieldsNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveTypeFieldsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveTypeFieldsNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  type_EQUAL?: Maybe<Scalars["String"]>;
  type_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  type_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  type_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  type_GT?: Maybe<Scalars["Int"]>;
  type_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  type_LONGEST_GT?: Maybe<Scalars["Int"]>;
  type_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  type_GTE?: Maybe<Scalars["Int"]>;
  type_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  type_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  type_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  type_LT?: Maybe<Scalars["Int"]>;
  type_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  type_LONGEST_LT?: Maybe<Scalars["Int"]>;
  type_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  type_LTE?: Maybe<Scalars["Int"]>;
  type_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  type_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  type_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

/** Fields to sort HiveTypeFields by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveTypeFieldSort object. */
export interface HiveTypeFieldSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
}

export interface HiveTypeFieldsUpdateConnectionInput {
  node?: Maybe<HiveTypeFieldUpdateInput>;
}

export interface HiveTypeFieldsUpdateFieldInput {
  where?: Maybe<HiveTypeFieldsConnectionWhere>;
  update?: Maybe<HiveTypeFieldsUpdateConnectionInput>;
  connect?: Maybe<Array<HiveTypeFieldsConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveTypeFieldsDisconnectFieldInput>>;
  create?: Maybe<Array<HiveTypeFieldsCreateFieldInput>>;
  delete?: Maybe<Array<HiveTypeFieldsDeleteFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveTypeFieldsConnectOrCreateFieldInput>>;
}

export interface HiveTypeFieldUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveTypeFieldUpdateInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface HiveTypeFieldWhere {
  OR?: Maybe<Array<HiveTypeFieldWhere>>;
  AND?: Maybe<Array<HiveTypeFieldWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  type_NOT?: Maybe<Scalars["String"]>;
  type_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type_CONTAINS?: Maybe<Scalars["String"]>;
  type_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  type_STARTS_WITH?: Maybe<Scalars["String"]>;
  type_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  type_ENDS_WITH?: Maybe<Scalars["String"]>;
  type_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
}

export interface HiveTypeOptions {
  /** Specify one or more HiveTypeSort objects to sort HiveTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveTypeSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

export interface HiveTypeRelationInput {
  fields?: Maybe<Array<HiveTypeFieldsCreateFieldInput>>;
  usedIn?: Maybe<Array<HiveTypeUsedInCreateFieldInput>>;
}

/** Fields to sort HiveTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveTypeSort object. */
export interface HiveTypeSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface HiveTypeUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveTypeUpdateInput {
  name?: Maybe<Scalars["String"]>;
  fields?: Maybe<Array<HiveTypeFieldsUpdateFieldInput>>;
  usedIn?: Maybe<Array<HiveTypeUsedInUpdateFieldInput>>;
}

export interface HiveTypeUsedInAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveTypeUsedInAggregateInput>>;
  OR?: Maybe<Array<HiveTypeUsedInAggregateInput>>;
  node?: Maybe<HiveTypeUsedInNodeAggregationWhereInput>;
}

export interface HiveTypeUsedInConnectFieldInput {
  where?: Maybe<HiveApplianceConnectWhere>;
  connect?: Maybe<Array<HiveApplianceConnectInput>>;
}

export interface HiveTypeUsedInConnectionSort {
  node?: Maybe<HiveApplianceSort>;
}

export interface HiveTypeUsedInConnectionWhere {
  AND?: Maybe<Array<HiveTypeUsedInConnectionWhere>>;
  OR?: Maybe<Array<HiveTypeUsedInConnectionWhere>>;
  node?: Maybe<HiveApplianceWhere>;
  node_NOT?: Maybe<HiveApplianceWhere>;
}

export interface HiveTypeUsedInConnectOrCreateFieldInput {
  where: HiveApplianceConnectOrCreateWhere;
  onCreate: HiveTypeUsedInConnectOrCreateFieldInputOnCreate;
}

export interface HiveTypeUsedInConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceCreateInput;
}

export interface HiveTypeUsedInCreateFieldInput {
  node: HiveApplianceCreateInput;
}

export interface HiveTypeUsedInDeleteFieldInput {
  where?: Maybe<HiveTypeUsedInConnectionWhere>;
  delete?: Maybe<HiveApplianceDeleteInput>;
}

export interface HiveTypeUsedInDisconnectFieldInput {
  where?: Maybe<HiveTypeUsedInConnectionWhere>;
  disconnect?: Maybe<HiveApplianceDisconnectInput>;
}

export interface HiveTypeUsedInFieldInput {
  create?: Maybe<Array<HiveTypeUsedInCreateFieldInput>>;
  connect?: Maybe<Array<HiveTypeUsedInConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveTypeUsedInConnectOrCreateFieldInput>>;
}

export interface HiveTypeUsedInNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveTypeUsedInNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveTypeUsedInNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  label_EQUAL?: Maybe<Scalars["String"]>;
  label_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  label_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_GT?: Maybe<Scalars["Int"]>;
  label_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  label_LONGEST_GT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  label_GTE?: Maybe<Scalars["Int"]>;
  label_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  label_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  label_LT?: Maybe<Scalars["Int"]>;
  label_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  label_LONGEST_LT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  label_LTE?: Maybe<Scalars["Int"]>;
  label_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  label_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  description_EQUAL?: Maybe<Scalars["String"]>;
  description_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  description_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_GT?: Maybe<Scalars["Int"]>;
  description_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  description_LONGEST_GT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  description_GTE?: Maybe<Scalars["Int"]>;
  description_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  description_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  description_LT?: Maybe<Scalars["Int"]>;
  description_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  description_LONGEST_LT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  description_LTE?: Maybe<Scalars["Int"]>;
  description_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  description_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveTypeUsedInUpdateConnectionInput {
  node?: Maybe<HiveApplianceUpdateInput>;
}

export interface HiveTypeUsedInUpdateFieldInput {
  where?: Maybe<HiveTypeUsedInConnectionWhere>;
  update?: Maybe<HiveTypeUsedInUpdateConnectionInput>;
  connect?: Maybe<Array<HiveTypeUsedInConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveTypeUsedInDisconnectFieldInput>>;
  create?: Maybe<Array<HiveTypeUsedInCreateFieldInput>>;
  delete?: Maybe<Array<HiveTypeUsedInDeleteFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveTypeUsedInConnectOrCreateFieldInput>>;
}

export interface HiveTypeWhere {
  OR?: Maybe<Array<HiveTypeWhere>>;
  AND?: Maybe<Array<HiveTypeWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  fields?: Maybe<HiveTypeFieldWhere>;
  fields_NOT?: Maybe<HiveTypeFieldWhere>;
  fieldsAggregate?: Maybe<HiveTypeFieldsAggregateInput>;
  usedIn?: Maybe<HiveApplianceWhere>;
  usedIn_NOT?: Maybe<HiveApplianceWhere>;
  usedInAggregate?: Maybe<HiveTypeUsedInAggregateInput>;
  fieldsConnection?: Maybe<HiveTypeFieldsConnectionWhere>;
  fieldsConnection_NOT?: Maybe<HiveTypeFieldsConnectionWhere>;
  usedInConnection?: Maybe<HiveTypeUsedInConnectionWhere>;
  usedInConnection_NOT?: Maybe<HiveTypeUsedInConnectionWhere>;
}

export interface HiveUserConnectInput {
  roles?: Maybe<Array<HiveUserRolesConnectFieldInput>>;
  organisation?: Maybe<HiveUserOrganisationConnectFieldInput>;
}

export interface HiveUserConnectOrCreateInput {
  roles?: Maybe<Array<HiveUserRolesConnectOrCreateFieldInput>>;
  organisation?: Maybe<HiveUserOrganisationConnectOrCreateFieldInput>;
}

export interface HiveUserConnectOrCreateWhere {
  node: HiveUserUniqueWhere;
}

export interface HiveUserConnectWhere {
  node: HiveUserWhere;
}

export interface HiveUserCreateInput {
  name?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  roles?: Maybe<HiveUserRolesFieldInput>;
  organisation?: Maybe<HiveUserOrganisationFieldInput>;
}

export interface HiveUserDeleteInput {
  roles?: Maybe<Array<HiveUserRolesDeleteFieldInput>>;
  organisation?: Maybe<HiveUserOrganisationDeleteFieldInput>;
}

export interface HiveUserDisconnectInput {
  roles?: Maybe<Array<HiveUserRolesDisconnectFieldInput>>;
  organisation?: Maybe<HiveUserOrganisationDisconnectFieldInput>;
}

export interface HiveUserOptions {
  /** Specify one or more HiveUserSort objects to sort HiveUsers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveUserSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

export interface HiveUserOrganisationAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveUserOrganisationAggregateInput>>;
  OR?: Maybe<Array<HiveUserOrganisationAggregateInput>>;
  node?: Maybe<HiveUserOrganisationNodeAggregationWhereInput>;
}

export interface HiveUserOrganisationConnectFieldInput {
  where?: Maybe<HiveOrganisationConnectWhere>;
  connect?: Maybe<HiveOrganisationConnectInput>;
}

export interface HiveUserOrganisationConnectionSort {
  node?: Maybe<HiveOrganisationSort>;
}

export interface HiveUserOrganisationConnectionWhere {
  AND?: Maybe<Array<HiveUserOrganisationConnectionWhere>>;
  OR?: Maybe<Array<HiveUserOrganisationConnectionWhere>>;
  node?: Maybe<HiveOrganisationWhere>;
  node_NOT?: Maybe<HiveOrganisationWhere>;
}

export interface HiveUserOrganisationConnectOrCreateFieldInput {
  where: HiveOrganisationConnectOrCreateWhere;
  onCreate: HiveUserOrganisationConnectOrCreateFieldInputOnCreate;
}

export interface HiveUserOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationCreateInput;
}

export interface HiveUserOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface HiveUserOrganisationDeleteFieldInput {
  where?: Maybe<HiveUserOrganisationConnectionWhere>;
  delete?: Maybe<HiveOrganisationDeleteInput>;
}

export interface HiveUserOrganisationDisconnectFieldInput {
  where?: Maybe<HiveUserOrganisationConnectionWhere>;
  disconnect?: Maybe<HiveOrganisationDisconnectInput>;
}

export interface HiveUserOrganisationFieldInput {
  create?: Maybe<HiveUserOrganisationCreateFieldInput>;
  connect?: Maybe<HiveUserOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<HiveUserOrganisationConnectOrCreateFieldInput>;
}

export interface HiveUserOrganisationNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveUserOrganisationNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveUserOrganisationNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveUserOrganisationUpdateConnectionInput {
  node?: Maybe<HiveOrganisationUpdateInput>;
}

export interface HiveUserOrganisationUpdateFieldInput {
  where?: Maybe<HiveUserOrganisationConnectionWhere>;
  update?: Maybe<HiveUserOrganisationUpdateConnectionInput>;
  connect?: Maybe<HiveUserOrganisationConnectFieldInput>;
  disconnect?: Maybe<HiveUserOrganisationDisconnectFieldInput>;
  create?: Maybe<HiveUserOrganisationCreateFieldInput>;
  delete?: Maybe<HiveUserOrganisationDeleteFieldInput>;
  connectOrCreate?: Maybe<HiveUserOrganisationConnectOrCreateFieldInput>;
}

export interface HiveUserRelationInput {
  roles?: Maybe<Array<HiveUserRolesCreateFieldInput>>;
  organisation?: Maybe<HiveUserOrganisationCreateFieldInput>;
}

export interface HiveUserRolesAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<HiveUserRolesAggregateInput>>;
  OR?: Maybe<Array<HiveUserRolesAggregateInput>>;
  node?: Maybe<HiveUserRolesNodeAggregationWhereInput>;
}

export interface HiveUserRolesConnectFieldInput {
  where?: Maybe<RoleConnectWhere>;
  connect?: Maybe<Array<RoleConnectInput>>;
}

export interface HiveUserRolesConnectionSort {
  node?: Maybe<RoleSort>;
}

export interface HiveUserRolesConnectionWhere {
  AND?: Maybe<Array<HiveUserRolesConnectionWhere>>;
  OR?: Maybe<Array<HiveUserRolesConnectionWhere>>;
  node?: Maybe<RoleWhere>;
  node_NOT?: Maybe<RoleWhere>;
}

export interface HiveUserRolesConnectOrCreateFieldInput {
  where: RoleConnectOrCreateWhere;
  onCreate: HiveUserRolesConnectOrCreateFieldInputOnCreate;
}

export interface HiveUserRolesConnectOrCreateFieldInputOnCreate {
  node: RoleCreateInput;
}

export interface HiveUserRolesCreateFieldInput {
  node: RoleCreateInput;
}

export interface HiveUserRolesDeleteFieldInput {
  where?: Maybe<HiveUserRolesConnectionWhere>;
  delete?: Maybe<RoleDeleteInput>;
}

export interface HiveUserRolesDisconnectFieldInput {
  where?: Maybe<HiveUserRolesConnectionWhere>;
  disconnect?: Maybe<RoleDisconnectInput>;
}

export interface HiveUserRolesFieldInput {
  create?: Maybe<Array<HiveUserRolesCreateFieldInput>>;
  connect?: Maybe<Array<HiveUserRolesConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveUserRolesConnectOrCreateFieldInput>>;
}

export interface HiveUserRolesNodeAggregationWhereInput {
  AND?: Maybe<Array<HiveUserRolesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<HiveUserRolesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface HiveUserRolesUpdateConnectionInput {
  node?: Maybe<RoleUpdateInput>;
}

export interface HiveUserRolesUpdateFieldInput {
  where?: Maybe<HiveUserRolesConnectionWhere>;
  update?: Maybe<HiveUserRolesUpdateConnectionInput>;
  connect?: Maybe<Array<HiveUserRolesConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveUserRolesDisconnectFieldInput>>;
  create?: Maybe<Array<HiveUserRolesCreateFieldInput>>;
  delete?: Maybe<Array<HiveUserRolesDeleteFieldInput>>;
  connectOrCreate?: Maybe<Array<HiveUserRolesConnectOrCreateFieldInput>>;
}

/** Fields to sort HiveUsers by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveUserSort object. */
export interface HiveUserSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  username?: Maybe<SortDirection>;
  password?: Maybe<SortDirection>;
}

export interface HiveUserUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface HiveUserUpdateInput {
  name?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  roles?: Maybe<Array<HiveUserRolesUpdateFieldInput>>;
  organisation?: Maybe<HiveUserOrganisationUpdateFieldInput>;
}

export interface HiveUserWhere {
  OR?: Maybe<Array<HiveUserWhere>>;
  AND?: Maybe<Array<HiveUserWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  username_NOT?: Maybe<Scalars["String"]>;
  username_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  username_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  username_CONTAINS?: Maybe<Scalars["String"]>;
  username_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  username_STARTS_WITH?: Maybe<Scalars["String"]>;
  username_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  username_ENDS_WITH?: Maybe<Scalars["String"]>;
  username_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  password_NOT?: Maybe<Scalars["String"]>;
  password_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  password_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  password_CONTAINS?: Maybe<Scalars["String"]>;
  password_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  password_STARTS_WITH?: Maybe<Scalars["String"]>;
  password_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  password_ENDS_WITH?: Maybe<Scalars["String"]>;
  password_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  roles?: Maybe<RoleWhere>;
  roles_NOT?: Maybe<RoleWhere>;
  rolesAggregate?: Maybe<HiveUserRolesAggregateInput>;
  organisation?: Maybe<HiveOrganisationWhere>;
  organisation_NOT?: Maybe<HiveOrganisationWhere>;
  organisationAggregate?: Maybe<HiveUserOrganisationAggregateInput>;
  rolesConnection?: Maybe<HiveUserRolesConnectionWhere>;
  rolesConnection_NOT?: Maybe<HiveUserRolesConnectionWhere>;
  organisationConnection?: Maybe<HiveUserOrganisationConnectionWhere>;
  organisationConnection_NOT?: Maybe<HiveUserOrganisationConnectionWhere>;
}

export interface PermissionConnectInput {
  roles?: Maybe<Array<PermissionRolesConnectFieldInput>>;
}

export interface PermissionConnectOrCreateInput {
  roles?: Maybe<Array<PermissionRolesConnectOrCreateFieldInput>>;
}

export interface PermissionConnectOrCreateWhere {
  node: PermissionUniqueWhere;
}

export interface PermissionConnectWhere {
  node: PermissionWhere;
}

export interface PermissionCreateInput {
  name?: Maybe<Scalars["String"]>;
  action?: Maybe<Scalars["String"]>;
  scope?: Maybe<Scalars["String"]>;
  roles?: Maybe<PermissionRolesFieldInput>;
}

export interface PermissionDeleteInput {
  roles?: Maybe<Array<PermissionRolesDeleteFieldInput>>;
}

export interface PermissionDisconnectInput {
  roles?: Maybe<Array<PermissionRolesDisconnectFieldInput>>;
}

export interface PermissionOptions {
  /** Specify one or more PermissionSort objects to sort Permissions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<PermissionSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

export interface PermissionRelationInput {
  roles?: Maybe<Array<PermissionRolesCreateFieldInput>>;
}

export interface PermissionRolesAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<PermissionRolesAggregateInput>>;
  OR?: Maybe<Array<PermissionRolesAggregateInput>>;
  node?: Maybe<PermissionRolesNodeAggregationWhereInput>;
}

export interface PermissionRolesConnectFieldInput {
  where?: Maybe<RoleConnectWhere>;
  connect?: Maybe<Array<RoleConnectInput>>;
}

export interface PermissionRolesConnectionSort {
  node?: Maybe<RoleSort>;
}

export interface PermissionRolesConnectionWhere {
  AND?: Maybe<Array<PermissionRolesConnectionWhere>>;
  OR?: Maybe<Array<PermissionRolesConnectionWhere>>;
  node?: Maybe<RoleWhere>;
  node_NOT?: Maybe<RoleWhere>;
}

export interface PermissionRolesConnectOrCreateFieldInput {
  where: RoleConnectOrCreateWhere;
  onCreate: PermissionRolesConnectOrCreateFieldInputOnCreate;
}

export interface PermissionRolesConnectOrCreateFieldInputOnCreate {
  node: RoleCreateInput;
}

export interface PermissionRolesCreateFieldInput {
  node: RoleCreateInput;
}

export interface PermissionRolesDeleteFieldInput {
  where?: Maybe<PermissionRolesConnectionWhere>;
  delete?: Maybe<RoleDeleteInput>;
}

export interface PermissionRolesDisconnectFieldInput {
  where?: Maybe<PermissionRolesConnectionWhere>;
  disconnect?: Maybe<RoleDisconnectInput>;
}

export interface PermissionRolesFieldInput {
  create?: Maybe<Array<PermissionRolesCreateFieldInput>>;
  connect?: Maybe<Array<PermissionRolesConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<PermissionRolesConnectOrCreateFieldInput>>;
}

export interface PermissionRolesNodeAggregationWhereInput {
  AND?: Maybe<Array<PermissionRolesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<PermissionRolesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface PermissionRolesUpdateConnectionInput {
  node?: Maybe<RoleUpdateInput>;
}

export interface PermissionRolesUpdateFieldInput {
  where?: Maybe<PermissionRolesConnectionWhere>;
  update?: Maybe<PermissionRolesUpdateConnectionInput>;
  connect?: Maybe<Array<PermissionRolesConnectFieldInput>>;
  disconnect?: Maybe<Array<PermissionRolesDisconnectFieldInput>>;
  create?: Maybe<Array<PermissionRolesCreateFieldInput>>;
  delete?: Maybe<Array<PermissionRolesDeleteFieldInput>>;
  connectOrCreate?: Maybe<Array<PermissionRolesConnectOrCreateFieldInput>>;
}

/** Fields to sort Permissions by. The order in which sorts are applied is not guaranteed when specifying many fields in one PermissionSort object. */
export interface PermissionSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  action?: Maybe<SortDirection>;
  scope?: Maybe<SortDirection>;
}

export interface PermissionUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface PermissionUpdateInput {
  name?: Maybe<Scalars["String"]>;
  action?: Maybe<Scalars["String"]>;
  scope?: Maybe<Scalars["String"]>;
  roles?: Maybe<Array<PermissionRolesUpdateFieldInput>>;
}

export interface PermissionWhere {
  OR?: Maybe<Array<PermissionWhere>>;
  AND?: Maybe<Array<PermissionWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  action?: Maybe<Scalars["String"]>;
  action_NOT?: Maybe<Scalars["String"]>;
  action_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  action_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  action_CONTAINS?: Maybe<Scalars["String"]>;
  action_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  action_STARTS_WITH?: Maybe<Scalars["String"]>;
  action_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  action_ENDS_WITH?: Maybe<Scalars["String"]>;
  action_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  scope?: Maybe<Scalars["String"]>;
  scope_NOT?: Maybe<Scalars["String"]>;
  scope_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  scope_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  scope_CONTAINS?: Maybe<Scalars["String"]>;
  scope_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  scope_STARTS_WITH?: Maybe<Scalars["String"]>;
  scope_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  scope_ENDS_WITH?: Maybe<Scalars["String"]>;
  scope_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  roles?: Maybe<RoleWhere>;
  roles_NOT?: Maybe<RoleWhere>;
  rolesAggregate?: Maybe<PermissionRolesAggregateInput>;
  rolesConnection?: Maybe<PermissionRolesConnectionWhere>;
  rolesConnection_NOT?: Maybe<PermissionRolesConnectionWhere>;
}

export interface RoleAppliancesAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<RoleAppliancesAggregateInput>>;
  OR?: Maybe<Array<RoleAppliancesAggregateInput>>;
  node?: Maybe<RoleAppliancesNodeAggregationWhereInput>;
}

export interface RoleAppliancesConnectFieldInput {
  where?: Maybe<HiveApplianceConnectWhere>;
  connect?: Maybe<Array<HiveApplianceConnectInput>>;
}

export interface RoleAppliancesConnectionSort {
  node?: Maybe<HiveApplianceSort>;
}

export interface RoleAppliancesConnectionWhere {
  AND?: Maybe<Array<RoleAppliancesConnectionWhere>>;
  OR?: Maybe<Array<RoleAppliancesConnectionWhere>>;
  node?: Maybe<HiveApplianceWhere>;
  node_NOT?: Maybe<HiveApplianceWhere>;
}

export interface RoleAppliancesConnectOrCreateFieldInput {
  where: HiveApplianceConnectOrCreateWhere;
  onCreate: RoleAppliancesConnectOrCreateFieldInputOnCreate;
}

export interface RoleAppliancesConnectOrCreateFieldInputOnCreate {
  node: HiveApplianceCreateInput;
}

export interface RoleAppliancesCreateFieldInput {
  node: HiveApplianceCreateInput;
}

export interface RoleAppliancesDeleteFieldInput {
  where?: Maybe<RoleAppliancesConnectionWhere>;
  delete?: Maybe<HiveApplianceDeleteInput>;
}

export interface RoleAppliancesDisconnectFieldInput {
  where?: Maybe<RoleAppliancesConnectionWhere>;
  disconnect?: Maybe<HiveApplianceDisconnectInput>;
}

export interface RoleAppliancesFieldInput {
  create?: Maybe<Array<RoleAppliancesCreateFieldInput>>;
  connect?: Maybe<Array<RoleAppliancesConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<RoleAppliancesConnectOrCreateFieldInput>>;
}

export interface RoleAppliancesNodeAggregationWhereInput {
  AND?: Maybe<Array<RoleAppliancesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<RoleAppliancesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  label_EQUAL?: Maybe<Scalars["String"]>;
  label_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  label_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_GT?: Maybe<Scalars["Int"]>;
  label_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  label_LONGEST_GT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  label_GTE?: Maybe<Scalars["Int"]>;
  label_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  label_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  label_LT?: Maybe<Scalars["Int"]>;
  label_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  label_LONGEST_LT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  label_LTE?: Maybe<Scalars["Int"]>;
  label_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  label_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  description_EQUAL?: Maybe<Scalars["String"]>;
  description_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  description_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_GT?: Maybe<Scalars["Int"]>;
  description_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  description_LONGEST_GT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  description_GTE?: Maybe<Scalars["Int"]>;
  description_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  description_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  description_LT?: Maybe<Scalars["Int"]>;
  description_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  description_LONGEST_LT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  description_LTE?: Maybe<Scalars["Int"]>;
  description_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  description_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface RoleAppliancesUpdateConnectionInput {
  node?: Maybe<HiveApplianceUpdateInput>;
}

export interface RoleAppliancesUpdateFieldInput {
  where?: Maybe<RoleAppliancesConnectionWhere>;
  update?: Maybe<RoleAppliancesUpdateConnectionInput>;
  connect?: Maybe<Array<RoleAppliancesConnectFieldInput>>;
  disconnect?: Maybe<Array<RoleAppliancesDisconnectFieldInput>>;
  create?: Maybe<Array<RoleAppliancesCreateFieldInput>>;
  delete?: Maybe<Array<RoleAppliancesDeleteFieldInput>>;
  connectOrCreate?: Maybe<Array<RoleAppliancesConnectOrCreateFieldInput>>;
}

export interface RoleConnectInput {
  appliances?: Maybe<Array<RoleAppliancesConnectFieldInput>>;
  permissions?: Maybe<Array<RolePermissionsConnectFieldInput>>;
  organisation?: Maybe<RoleOrganisationConnectFieldInput>;
}

export interface RoleConnectOrCreateInput {
  appliances?: Maybe<Array<RoleAppliancesConnectOrCreateFieldInput>>;
  permissions?: Maybe<Array<RolePermissionsConnectOrCreateFieldInput>>;
  organisation?: Maybe<RoleOrganisationConnectOrCreateFieldInput>;
}

export interface RoleConnectOrCreateWhere {
  node: RoleUniqueWhere;
}

export interface RoleConnectWhere {
  node: RoleWhere;
}

export interface RoleCreateInput {
  name?: Maybe<Scalars["String"]>;
  appliances?: Maybe<RoleAppliancesFieldInput>;
  permissions?: Maybe<RolePermissionsFieldInput>;
  organisation?: Maybe<RoleOrganisationFieldInput>;
}

export interface RoleDeleteInput {
  appliances?: Maybe<Array<RoleAppliancesDeleteFieldInput>>;
  permissions?: Maybe<Array<RolePermissionsDeleteFieldInput>>;
  organisation?: Maybe<RoleOrganisationDeleteFieldInput>;
}

export interface RoleDisconnectInput {
  appliances?: Maybe<Array<RoleAppliancesDisconnectFieldInput>>;
  permissions?: Maybe<Array<RolePermissionsDisconnectFieldInput>>;
  organisation?: Maybe<RoleOrganisationDisconnectFieldInput>;
}

export interface RoleOptions {
  /** Specify one or more RoleSort objects to sort Roles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<RoleSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

export interface RoleOrganisationAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<RoleOrganisationAggregateInput>>;
  OR?: Maybe<Array<RoleOrganisationAggregateInput>>;
  node?: Maybe<RoleOrganisationNodeAggregationWhereInput>;
}

export interface RoleOrganisationConnectFieldInput {
  where?: Maybe<HiveOrganisationConnectWhere>;
  connect?: Maybe<HiveOrganisationConnectInput>;
}

export interface RoleOrganisationConnectionSort {
  node?: Maybe<HiveOrganisationSort>;
}

export interface RoleOrganisationConnectionWhere {
  AND?: Maybe<Array<RoleOrganisationConnectionWhere>>;
  OR?: Maybe<Array<RoleOrganisationConnectionWhere>>;
  node?: Maybe<HiveOrganisationWhere>;
  node_NOT?: Maybe<HiveOrganisationWhere>;
}

export interface RoleOrganisationConnectOrCreateFieldInput {
  where: HiveOrganisationConnectOrCreateWhere;
  onCreate: RoleOrganisationConnectOrCreateFieldInputOnCreate;
}

export interface RoleOrganisationConnectOrCreateFieldInputOnCreate {
  node: HiveOrganisationCreateInput;
}

export interface RoleOrganisationCreateFieldInput {
  node: HiveOrganisationCreateInput;
}

export interface RoleOrganisationDeleteFieldInput {
  where?: Maybe<RoleOrganisationConnectionWhere>;
  delete?: Maybe<HiveOrganisationDeleteInput>;
}

export interface RoleOrganisationDisconnectFieldInput {
  where?: Maybe<RoleOrganisationConnectionWhere>;
  disconnect?: Maybe<HiveOrganisationDisconnectInput>;
}

export interface RoleOrganisationFieldInput {
  create?: Maybe<RoleOrganisationCreateFieldInput>;
  connect?: Maybe<RoleOrganisationConnectFieldInput>;
  connectOrCreate?: Maybe<RoleOrganisationConnectOrCreateFieldInput>;
}

export interface RoleOrganisationNodeAggregationWhereInput {
  AND?: Maybe<Array<RoleOrganisationNodeAggregationWhereInput>>;
  OR?: Maybe<Array<RoleOrganisationNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface RoleOrganisationUpdateConnectionInput {
  node?: Maybe<HiveOrganisationUpdateInput>;
}

export interface RoleOrganisationUpdateFieldInput {
  where?: Maybe<RoleOrganisationConnectionWhere>;
  update?: Maybe<RoleOrganisationUpdateConnectionInput>;
  connect?: Maybe<RoleOrganisationConnectFieldInput>;
  disconnect?: Maybe<RoleOrganisationDisconnectFieldInput>;
  create?: Maybe<RoleOrganisationCreateFieldInput>;
  delete?: Maybe<RoleOrganisationDeleteFieldInput>;
  connectOrCreate?: Maybe<RoleOrganisationConnectOrCreateFieldInput>;
}

export interface RolePermissionsAggregateInput {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<RolePermissionsAggregateInput>>;
  OR?: Maybe<Array<RolePermissionsAggregateInput>>;
  node?: Maybe<RolePermissionsNodeAggregationWhereInput>;
}

export interface RolePermissionsConnectFieldInput {
  where?: Maybe<PermissionConnectWhere>;
  connect?: Maybe<Array<PermissionConnectInput>>;
}

export interface RolePermissionsConnectionSort {
  node?: Maybe<PermissionSort>;
}

export interface RolePermissionsConnectionWhere {
  AND?: Maybe<Array<RolePermissionsConnectionWhere>>;
  OR?: Maybe<Array<RolePermissionsConnectionWhere>>;
  node?: Maybe<PermissionWhere>;
  node_NOT?: Maybe<PermissionWhere>;
}

export interface RolePermissionsConnectOrCreateFieldInput {
  where: PermissionConnectOrCreateWhere;
  onCreate: RolePermissionsConnectOrCreateFieldInputOnCreate;
}

export interface RolePermissionsConnectOrCreateFieldInputOnCreate {
  node: PermissionCreateInput;
}

export interface RolePermissionsCreateFieldInput {
  node: PermissionCreateInput;
}

export interface RolePermissionsDeleteFieldInput {
  where?: Maybe<RolePermissionsConnectionWhere>;
  delete?: Maybe<PermissionDeleteInput>;
}

export interface RolePermissionsDisconnectFieldInput {
  where?: Maybe<RolePermissionsConnectionWhere>;
  disconnect?: Maybe<PermissionDisconnectInput>;
}

export interface RolePermissionsFieldInput {
  create?: Maybe<Array<RolePermissionsCreateFieldInput>>;
  connect?: Maybe<Array<RolePermissionsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<RolePermissionsConnectOrCreateFieldInput>>;
}

export interface RolePermissionsNodeAggregationWhereInput {
  AND?: Maybe<Array<RolePermissionsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<RolePermissionsNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  action_EQUAL?: Maybe<Scalars["String"]>;
  action_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  action_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  action_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  action_GT?: Maybe<Scalars["Int"]>;
  action_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  action_LONGEST_GT?: Maybe<Scalars["Int"]>;
  action_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  action_GTE?: Maybe<Scalars["Int"]>;
  action_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  action_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  action_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  action_LT?: Maybe<Scalars["Int"]>;
  action_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  action_LONGEST_LT?: Maybe<Scalars["Int"]>;
  action_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  action_LTE?: Maybe<Scalars["Int"]>;
  action_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  action_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  action_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  scope_EQUAL?: Maybe<Scalars["String"]>;
  scope_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  scope_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  scope_GT?: Maybe<Scalars["Int"]>;
  scope_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  scope_LONGEST_GT?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  scope_GTE?: Maybe<Scalars["Int"]>;
  scope_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  scope_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  scope_LT?: Maybe<Scalars["Int"]>;
  scope_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  scope_LONGEST_LT?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  scope_LTE?: Maybe<Scalars["Int"]>;
  scope_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  scope_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  scope_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface RolePermissionsUpdateConnectionInput {
  node?: Maybe<PermissionUpdateInput>;
}

export interface RolePermissionsUpdateFieldInput {
  where?: Maybe<RolePermissionsConnectionWhere>;
  update?: Maybe<RolePermissionsUpdateConnectionInput>;
  connect?: Maybe<Array<RolePermissionsConnectFieldInput>>;
  disconnect?: Maybe<Array<RolePermissionsDisconnectFieldInput>>;
  create?: Maybe<Array<RolePermissionsCreateFieldInput>>;
  delete?: Maybe<Array<RolePermissionsDeleteFieldInput>>;
  connectOrCreate?: Maybe<Array<RolePermissionsConnectOrCreateFieldInput>>;
}

export interface RoleRelationInput {
  appliances?: Maybe<Array<RoleAppliancesCreateFieldInput>>;
  permissions?: Maybe<Array<RolePermissionsCreateFieldInput>>;
  organisation?: Maybe<RoleOrganisationCreateFieldInput>;
}

/** Fields to sort Roles by. The order in which sorts are applied is not guaranteed when specifying many fields in one RoleSort object. */
export interface RoleSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface RoleUniqueWhere {
  id?: Maybe<Scalars["ID"]>;
}

export interface RoleUpdateInput {
  name?: Maybe<Scalars["String"]>;
  appliances?: Maybe<Array<RoleAppliancesUpdateFieldInput>>;
  permissions?: Maybe<Array<RolePermissionsUpdateFieldInput>>;
  organisation?: Maybe<RoleOrganisationUpdateFieldInput>;
}

export interface RoleWhere {
  OR?: Maybe<Array<RoleWhere>>;
  AND?: Maybe<Array<RoleWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  appliances?: Maybe<HiveApplianceWhere>;
  appliances_NOT?: Maybe<HiveApplianceWhere>;
  appliancesAggregate?: Maybe<RoleAppliancesAggregateInput>;
  permissions?: Maybe<PermissionWhere>;
  permissions_NOT?: Maybe<PermissionWhere>;
  permissionsAggregate?: Maybe<RolePermissionsAggregateInput>;
  organisation?: Maybe<HiveOrganisationWhere>;
  organisation_NOT?: Maybe<HiveOrganisationWhere>;
  organisationAggregate?: Maybe<RoleOrganisationAggregateInput>;
  appliancesConnection?: Maybe<RoleAppliancesConnectionWhere>;
  appliancesConnection_NOT?: Maybe<RoleAppliancesConnectionWhere>;
  permissionsConnection?: Maybe<RolePermissionsConnectionWhere>;
  permissionsConnection_NOT?: Maybe<RolePermissionsConnectionWhere>;
  organisationConnection?: Maybe<RoleOrganisationConnectionWhere>;
  organisationConnection_NOT?: Maybe<RoleOrganisationConnectionWhere>;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  String: true,
  Int: true,
  Boolean: true,
  ID: true,
  SortDirection: true,
  Float: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    empty: { __type: "String" },
    resolveFS: {
      __type: "HiveFile",
      __args: { appId: "String", mountPath: "String" },
    },
    hiveServices: {
      __type: "[HiveService!]!",
      __args: { where: "HiveServiceWhere", options: "HiveServiceOptions" },
    },
    hiveServicesCount: {
      __type: "Int!",
      __args: { where: "HiveServiceWhere" },
    },
    hiveServicesAggregate: {
      __type: "HiveServiceAggregateSelection!",
      __args: { where: "HiveServiceWhere" },
    },
    hiveTypes: {
      __type: "[HiveType!]!",
      __args: { where: "HiveTypeWhere", options: "HiveTypeOptions" },
    },
    hiveTypesCount: { __type: "Int!", __args: { where: "HiveTypeWhere" } },
    hiveTypesAggregate: {
      __type: "HiveTypeAggregateSelection!",
      __args: { where: "HiveTypeWhere" },
    },
    hiveTypeFields: {
      __type: "[HiveTypeField!]!",
      __args: { where: "HiveTypeFieldWhere", options: "HiveTypeFieldOptions" },
    },
    hiveTypeFieldsCount: {
      __type: "Int!",
      __args: { where: "HiveTypeFieldWhere" },
    },
    hiveTypeFieldsAggregate: {
      __type: "HiveTypeFieldAggregateSelection!",
      __args: { where: "HiveTypeFieldWhere" },
    },
    hiveAppliances: {
      __type: "[HiveAppliance!]!",
      __args: { where: "HiveApplianceWhere", options: "HiveApplianceOptions" },
    },
    hiveAppliancesCount: {
      __type: "Int!",
      __args: { where: "HiveApplianceWhere" },
    },
    hiveAppliancesAggregate: {
      __type: "HiveApplianceAggregateSelection!",
      __args: { where: "HiveApplianceWhere" },
    },
    hiveIntegrationPathCollections: {
      __type: "[HiveIntegrationPathCollection!]!",
      __args: {
        where: "HiveIntegrationPathCollectionWhere",
        options: "HiveIntegrationPathCollectionOptions",
      },
    },
    hiveIntegrationPathCollectionsCount: {
      __type: "Int!",
      __args: { where: "HiveIntegrationPathCollectionWhere" },
    },
    hiveIntegrationPathCollectionsAggregate: {
      __type: "HiveIntegrationPathCollectionAggregateSelection!",
      __args: { where: "HiveIntegrationPathCollectionWhere" },
    },
    hiveIntegrationPaths: {
      __type: "[HiveIntegrationPath!]!",
      __args: {
        where: "HiveIntegrationPathWhere",
        options: "HiveIntegrationPathOptions",
      },
    },
    hiveIntegrationPathsCount: {
      __type: "Int!",
      __args: { where: "HiveIntegrationPathWhere" },
    },
    hiveIntegrationPathsAggregate: {
      __type: "HiveIntegrationPathAggregateSelection!",
      __args: { where: "HiveIntegrationPathWhere" },
    },
    hiveIntegrations: {
      __type: "[HiveIntegration!]!",
      __args: {
        where: "HiveIntegrationWhere",
        options: "HiveIntegrationOptions",
      },
    },
    hiveIntegrationsCount: {
      __type: "Int!",
      __args: { where: "HiveIntegrationWhere" },
    },
    hiveIntegrationsAggregate: {
      __type: "HiveIntegrationAggregateSelection!",
      __args: { where: "HiveIntegrationWhere" },
    },
    hiveIntegrationInstances: {
      __type: "[HiveIntegrationInstance!]!",
      __args: {
        where: "HiveIntegrationInstanceWhere",
        options: "HiveIntegrationInstanceOptions",
      },
    },
    hiveIntegrationInstancesCount: {
      __type: "Int!",
      __args: { where: "HiveIntegrationInstanceWhere" },
    },
    hiveIntegrationInstancesAggregate: {
      __type: "HiveIntegrationInstanceAggregateSelection!",
      __args: { where: "HiveIntegrationInstanceWhere" },
    },
    fileSystems: {
      __type: "[FileSystem!]!",
      __args: { where: "FileSystemWhere", options: "FileSystemOptions" },
    },
    fileSystemsCount: { __type: "Int!", __args: { where: "FileSystemWhere" } },
    fileSystemsAggregate: {
      __type: "FileSystemAggregateSelection!",
      __args: { where: "FileSystemWhere" },
    },
    hiveFiles: {
      __type: "[HiveFile!]!",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    hiveFilesCount: { __type: "Int!", __args: { where: "HiveFileWhere" } },
    hiveFilesAggregate: {
      __type: "HiveFileAggregateSelection!",
      __args: { where: "HiveFileWhere" },
    },
    hiveOrganisations: {
      __type: "[HiveOrganisation!]!",
      __args: {
        where: "HiveOrganisationWhere",
        options: "HiveOrganisationOptions",
      },
    },
    hiveOrganisationsCount: {
      __type: "Int!",
      __args: { where: "HiveOrganisationWhere" },
    },
    hiveOrganisationsAggregate: {
      __type: "HiveOrganisationAggregateSelection!",
      __args: { where: "HiveOrganisationWhere" },
    },
    hiveUsers: {
      __type: "[HiveUser!]!",
      __args: { where: "HiveUserWhere", options: "HiveUserOptions" },
    },
    hiveUsersCount: { __type: "Int!", __args: { where: "HiveUserWhere" } },
    hiveUsersAggregate: {
      __type: "HiveUserAggregateSelection!",
      __args: { where: "HiveUserWhere" },
    },
    roles: {
      __type: "[Role!]!",
      __args: { where: "RoleWhere", options: "RoleOptions" },
    },
    rolesCount: { __type: "Int!", __args: { where: "RoleWhere" } },
    rolesAggregate: {
      __type: "RoleAggregateSelection!",
      __args: { where: "RoleWhere" },
    },
    permissions: {
      __type: "[Permission!]!",
      __args: { where: "PermissionWhere", options: "PermissionOptions" },
    },
    permissionsCount: { __type: "Int!", __args: { where: "PermissionWhere" } },
    permissionsAggregate: {
      __type: "PermissionAggregateSelection!",
      __args: { where: "PermissionWhere" },
    },
  },
  mutation: {
    __typename: { __type: "String!" },
    empty: { __type: "String" },
    updateHiveIntegrationInstanceState: {
      __type: "Boolean",
      __args: { id: "ID", state: "Boolean" },
    },
    inviteHiveUser: {
      __type: "String",
      __args: { name: "String", email: "String" },
    },
    createHiveServices: {
      __type: "CreateHiveServicesMutationResponse!",
      __args: { input: "[HiveServiceCreateInput!]!" },
    },
    deleteHiveServices: {
      __type: "DeleteInfo!",
      __args: { where: "HiveServiceWhere" },
    },
    updateHiveServices: {
      __type: "UpdateHiveServicesMutationResponse!",
      __args: { where: "HiveServiceWhere", update: "HiveServiceUpdateInput" },
    },
    createHiveTypes: {
      __type: "CreateHiveTypesMutationResponse!",
      __args: { input: "[HiveTypeCreateInput!]!" },
    },
    deleteHiveTypes: {
      __type: "DeleteInfo!",
      __args: { where: "HiveTypeWhere", delete: "HiveTypeDeleteInput" },
    },
    updateHiveTypes: {
      __type: "UpdateHiveTypesMutationResponse!",
      __args: {
        where: "HiveTypeWhere",
        update: "HiveTypeUpdateInput",
        connect: "HiveTypeConnectInput",
        disconnect: "HiveTypeDisconnectInput",
        create: "HiveTypeRelationInput",
        delete: "HiveTypeDeleteInput",
        connectOrCreate: "HiveTypeConnectOrCreateInput",
      },
    },
    createHiveTypeFields: {
      __type: "CreateHiveTypeFieldsMutationResponse!",
      __args: { input: "[HiveTypeFieldCreateInput!]!" },
    },
    deleteHiveTypeFields: {
      __type: "DeleteInfo!",
      __args: { where: "HiveTypeFieldWhere" },
    },
    updateHiveTypeFields: {
      __type: "UpdateHiveTypeFieldsMutationResponse!",
      __args: {
        where: "HiveTypeFieldWhere",
        update: "HiveTypeFieldUpdateInput",
      },
    },
    createHiveAppliances: {
      __type: "CreateHiveAppliancesMutationResponse!",
      __args: { input: "[HiveApplianceCreateInput!]!" },
    },
    deleteHiveAppliances: {
      __type: "DeleteInfo!",
      __args: {
        where: "HiveApplianceWhere",
        delete: "HiveApplianceDeleteInput",
      },
    },
    updateHiveAppliances: {
      __type: "UpdateHiveAppliancesMutationResponse!",
      __args: {
        where: "HiveApplianceWhere",
        update: "HiveApplianceUpdateInput",
        connect: "HiveApplianceConnectInput",
        disconnect: "HiveApplianceDisconnectInput",
        create: "HiveApplianceRelationInput",
        delete: "HiveApplianceDeleteInput",
        connectOrCreate: "HiveApplianceConnectOrCreateInput",
      },
    },
    createHiveIntegrationPathCollections: {
      __type: "CreateHiveIntegrationPathCollectionsMutationResponse!",
      __args: { input: "[HiveIntegrationPathCollectionCreateInput!]!" },
    },
    deleteHiveIntegrationPathCollections: {
      __type: "DeleteInfo!",
      __args: { where: "HiveIntegrationPathCollectionWhere" },
    },
    updateHiveIntegrationPathCollections: {
      __type: "UpdateHiveIntegrationPathCollectionsMutationResponse!",
      __args: {
        where: "HiveIntegrationPathCollectionWhere",
        update: "HiveIntegrationPathCollectionUpdateInput",
      },
    },
    createHiveIntegrationPaths: {
      __type: "CreateHiveIntegrationPathsMutationResponse!",
      __args: { input: "[HiveIntegrationPathCreateInput!]!" },
    },
    deleteHiveIntegrationPaths: {
      __type: "DeleteInfo!",
      __args: {
        where: "HiveIntegrationPathWhere",
        delete: "HiveIntegrationPathDeleteInput",
      },
    },
    updateHiveIntegrationPaths: {
      __type: "UpdateHiveIntegrationPathsMutationResponse!",
      __args: {
        where: "HiveIntegrationPathWhere",
        update: "HiveIntegrationPathUpdateInput",
        connect: "HiveIntegrationPathConnectInput",
        disconnect: "HiveIntegrationPathDisconnectInput",
        create: "HiveIntegrationPathRelationInput",
        delete: "HiveIntegrationPathDeleteInput",
        connectOrCreate: "HiveIntegrationPathConnectOrCreateInput",
      },
    },
    createHiveIntegrations: {
      __type: "CreateHiveIntegrationsMutationResponse!",
      __args: { input: "[HiveIntegrationCreateInput!]!" },
    },
    deleteHiveIntegrations: {
      __type: "DeleteInfo!",
      __args: { where: "HiveIntegrationWhere" },
    },
    updateHiveIntegrations: {
      __type: "UpdateHiveIntegrationsMutationResponse!",
      __args: {
        where: "HiveIntegrationWhere",
        update: "HiveIntegrationUpdateInput",
      },
    },
    createHiveIntegrationInstances: {
      __type: "CreateHiveIntegrationInstancesMutationResponse!",
      __args: { input: "[HiveIntegrationInstanceCreateInput!]!" },
    },
    deleteHiveIntegrationInstances: {
      __type: "DeleteInfo!",
      __args: {
        where: "HiveIntegrationInstanceWhere",
        delete: "HiveIntegrationInstanceDeleteInput",
      },
    },
    updateHiveIntegrationInstances: {
      __type: "UpdateHiveIntegrationInstancesMutationResponse!",
      __args: {
        where: "HiveIntegrationInstanceWhere",
        update: "HiveIntegrationInstanceUpdateInput",
        connect: "HiveIntegrationInstanceConnectInput",
        disconnect: "HiveIntegrationInstanceDisconnectInput",
        create: "HiveIntegrationInstanceRelationInput",
        delete: "HiveIntegrationInstanceDeleteInput",
        connectOrCreate: "HiveIntegrationInstanceConnectOrCreateInput",
      },
    },
    createFileSystems: {
      __type: "CreateFileSystemsMutationResponse!",
      __args: { input: "[FileSystemCreateInput!]!" },
    },
    deleteFileSystems: {
      __type: "DeleteInfo!",
      __args: { where: "FileSystemWhere", delete: "FileSystemDeleteInput" },
    },
    updateFileSystems: {
      __type: "UpdateFileSystemsMutationResponse!",
      __args: {
        where: "FileSystemWhere",
        update: "FileSystemUpdateInput",
        connect: "FileSystemConnectInput",
        disconnect: "FileSystemDisconnectInput",
        create: "FileSystemRelationInput",
        delete: "FileSystemDeleteInput",
        connectOrCreate: "FileSystemConnectOrCreateInput",
      },
    },
    createHiveFiles: {
      __type: "CreateHiveFilesMutationResponse!",
      __args: { input: "[HiveFileCreateInput!]!" },
    },
    deleteHiveFiles: {
      __type: "DeleteInfo!",
      __args: { where: "HiveFileWhere", delete: "HiveFileDeleteInput" },
    },
    updateHiveFiles: {
      __type: "UpdateHiveFilesMutationResponse!",
      __args: {
        where: "HiveFileWhere",
        update: "HiveFileUpdateInput",
        connect: "HiveFileConnectInput",
        disconnect: "HiveFileDisconnectInput",
        create: "HiveFileRelationInput",
        delete: "HiveFileDeleteInput",
        connectOrCreate: "HiveFileConnectOrCreateInput",
      },
    },
    createHiveOrganisations: {
      __type: "CreateHiveOrganisationsMutationResponse!",
      __args: { input: "[HiveOrganisationCreateInput!]!" },
    },
    deleteHiveOrganisations: {
      __type: "DeleteInfo!",
      __args: {
        where: "HiveOrganisationWhere",
        delete: "HiveOrganisationDeleteInput",
      },
    },
    updateHiveOrganisations: {
      __type: "UpdateHiveOrganisationsMutationResponse!",
      __args: {
        where: "HiveOrganisationWhere",
        update: "HiveOrganisationUpdateInput",
        connect: "HiveOrganisationConnectInput",
        disconnect: "HiveOrganisationDisconnectInput",
        create: "HiveOrganisationRelationInput",
        delete: "HiveOrganisationDeleteInput",
        connectOrCreate: "HiveOrganisationConnectOrCreateInput",
      },
    },
    createHiveUsers: {
      __type: "CreateHiveUsersMutationResponse!",
      __args: { input: "[HiveUserCreateInput!]!" },
    },
    deleteHiveUsers: {
      __type: "DeleteInfo!",
      __args: { where: "HiveUserWhere", delete: "HiveUserDeleteInput" },
    },
    updateHiveUsers: {
      __type: "UpdateHiveUsersMutationResponse!",
      __args: {
        where: "HiveUserWhere",
        update: "HiveUserUpdateInput",
        connect: "HiveUserConnectInput",
        disconnect: "HiveUserDisconnectInput",
        create: "HiveUserRelationInput",
        delete: "HiveUserDeleteInput",
        connectOrCreate: "HiveUserConnectOrCreateInput",
      },
    },
    createRoles: {
      __type: "CreateRolesMutationResponse!",
      __args: { input: "[RoleCreateInput!]!" },
    },
    deleteRoles: {
      __type: "DeleteInfo!",
      __args: { where: "RoleWhere", delete: "RoleDeleteInput" },
    },
    updateRoles: {
      __type: "UpdateRolesMutationResponse!",
      __args: {
        where: "RoleWhere",
        update: "RoleUpdateInput",
        connect: "RoleConnectInput",
        disconnect: "RoleDisconnectInput",
        create: "RoleRelationInput",
        delete: "RoleDeleteInput",
        connectOrCreate: "RoleConnectOrCreateInput",
      },
    },
    createPermissions: {
      __type: "CreatePermissionsMutationResponse!",
      __args: { input: "[PermissionCreateInput!]!" },
    },
    deletePermissions: {
      __type: "DeleteInfo!",
      __args: { where: "PermissionWhere", delete: "PermissionDeleteInput" },
    },
    updatePermissions: {
      __type: "UpdatePermissionsMutationResponse!",
      __args: {
        where: "PermissionWhere",
        update: "PermissionUpdateInput",
        connect: "PermissionConnectInput",
        disconnect: "PermissionDisconnectInput",
        create: "PermissionRelationInput",
        delete: "PermissionDeleteInput",
        connectOrCreate: "PermissionConnectOrCreateInput",
      },
    },
  },
  subscription: {},
  CreateFileSystemsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    fileSystems: { __type: "[FileSystem!]!" },
  },
  CreateHiveAppliancesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    hiveAppliances: { __type: "[HiveAppliance!]!" },
  },
  CreateHiveFilesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    hiveFiles: { __type: "[HiveFile!]!" },
  },
  CreateHiveIntegrationInstancesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    hiveIntegrationInstances: { __type: "[HiveIntegrationInstance!]!" },
  },
  CreateHiveIntegrationPathCollectionsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    hiveIntegrationPathCollections: {
      __type: "[HiveIntegrationPathCollection!]!",
    },
  },
  CreateHiveIntegrationPathsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    hiveIntegrationPaths: { __type: "[HiveIntegrationPath!]!" },
  },
  CreateHiveIntegrationsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    hiveIntegrations: { __type: "[HiveIntegration!]!" },
  },
  CreateHiveOrganisationsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    hiveOrganisations: { __type: "[HiveOrganisation!]!" },
  },
  CreateHiveServicesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    hiveServices: { __type: "[HiveService!]!" },
  },
  CreateHiveTypeFieldsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    hiveTypeFields: { __type: "[HiveTypeField!]!" },
  },
  CreateHiveTypesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    hiveTypes: { __type: "[HiveType!]!" },
  },
  CreateHiveUsersMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    hiveUsers: { __type: "[HiveUser!]!" },
  },
  CreateInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesCreated: { __type: "Int!" },
    relationshipsCreated: { __type: "Int!" },
  },
  CreatePermissionsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    permissions: { __type: "[Permission!]!" },
  },
  CreateRolesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    roles: { __type: "[Role!]!" },
  },
  DeleteInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesDeleted: { __type: "Int!" },
    relationshipsDeleted: { __type: "Int!" },
  },
  FileSystem: {
    __typename: { __type: "String!" },
    name: { __type: "String!" },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        where: "HiveOrganisationWhere",
        options: "HiveOrganisationOptions",
      },
    },
    organisationAggregate: {
      __type: "FileSystemHiveOrganisationOrganisationAggregationSelection",
      __args: { where: "HiveOrganisationWhere" },
    },
    files: {
      __type: "[HiveFile!]!",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    filesAggregate: {
      __type: "FileSystemHiveFileFilesAggregationSelection",
      __args: { where: "HiveFileWhere" },
    },
    organisationConnection: {
      __type: "FileSystemOrganisationConnection!",
      __args: {
        where: "FileSystemOrganisationConnectionWhere",
        sort: "[FileSystemOrganisationConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    filesConnection: {
      __type: "FileSystemFilesConnection!",
      __args: {
        where: "FileSystemFilesConnectionWhere",
        sort: "[FileSystemFilesConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
  },
  FileSystemAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    name: { __type: "StringAggregateSelection!" },
  },
  FileSystemFilesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[FileSystemFilesRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  FileSystemFilesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveFile!" },
  },
  FileSystemHiveFileFilesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "FileSystemHiveFileFilesNodeAggregateSelection" },
  },
  FileSystemHiveFileFilesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    cid: { __type: "StringAggregateSelection!" },
    size: { __type: "IntAggregateSelection!" },
    mimetype: { __type: "StringAggregateSelection!" },
  },
  FileSystemHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "FileSystemHiveOrganisationOrganisationNodeAggregateSelection",
    },
  },
  FileSystemHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  FileSystemOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[FileSystemOrganisationRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  FileSystemOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  HiveAppliance: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    label: { __type: "String" },
    description: { __type: "String" },
    types: {
      __type: "[HiveType]",
      __args: { where: "HiveTypeWhere", options: "HiveTypeOptions" },
    },
    typesAggregate: {
      __type: "HiveApplianceHiveTypeTypesAggregationSelection",
      __args: { where: "HiveTypeWhere" },
    },
    permissions: {
      __type: "[Permission]",
      __args: { where: "PermissionWhere", options: "PermissionOptions" },
    },
    permissionsAggregate: {
      __type: "HiveAppliancePermissionPermissionsAggregationSelection",
      __args: { where: "PermissionWhere" },
    },
    services: {
      __type: "[HiveService]",
      __args: { where: "HiveServiceWhere", options: "HiveServiceOptions" },
    },
    servicesAggregate: {
      __type: "HiveApplianceHiveServiceServicesAggregationSelection",
      __args: { where: "HiveServiceWhere" },
    },
    brand_image: {
      __type: "HiveFile",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    brand_imageAggregate: {
      __type: "HiveApplianceHiveFileBrand_imageAggregationSelection",
      __args: { where: "HiveFileWhere" },
    },
    typesConnection: {
      __type: "HiveApplianceTypesConnection!",
      __args: {
        where: "HiveApplianceTypesConnectionWhere",
        sort: "[HiveApplianceTypesConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    permissionsConnection: {
      __type: "HiveAppliancePermissionsConnection!",
      __args: {
        where: "HiveAppliancePermissionsConnectionWhere",
        sort: "[HiveAppliancePermissionsConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    servicesConnection: {
      __type: "HiveApplianceServicesConnection!",
      __args: {
        where: "HiveApplianceServicesConnectionWhere",
        sort: "[HiveApplianceServicesConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    brand_imageConnection: {
      __type: "HiveApplianceBrand_imageConnection!",
      __args: {
        where: "HiveApplianceBrand_imageConnectionWhere",
        sort: "[HiveApplianceBrand_imageConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
  },
  HiveApplianceAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    description: { __type: "StringAggregateSelection!" },
  },
  HiveApplianceBrand_imageConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveApplianceBrand_imageRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveApplianceBrand_imageRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveFile!" },
  },
  HiveApplianceHiveFileBrand_imageAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveApplianceHiveFileBrand_imageNodeAggregateSelection" },
  },
  HiveApplianceHiveFileBrand_imageNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    cid: { __type: "StringAggregateSelection!" },
    size: { __type: "IntAggregateSelection!" },
    mimetype: { __type: "StringAggregateSelection!" },
  },
  HiveApplianceHiveServiceServicesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveApplianceHiveServiceServicesNodeAggregateSelection" },
  },
  HiveApplianceHiveServiceServicesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveApplianceHiveTypeTypesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveApplianceHiveTypeTypesNodeAggregateSelection" },
  },
  HiveApplianceHiveTypeTypesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveAppliancePermissionPermissionsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "HiveAppliancePermissionPermissionsNodeAggregateSelection",
    },
  },
  HiveAppliancePermissionPermissionsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    action: { __type: "StringAggregateSelection!" },
    scope: { __type: "StringAggregateSelection!" },
  },
  HiveAppliancePermissionsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveAppliancePermissionsRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveAppliancePermissionsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Permission!" },
  },
  HiveApplianceServicesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveApplianceServicesRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveApplianceServicesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveService!" },
  },
  HiveApplianceTypesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveApplianceTypesRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveApplianceTypesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveType!" },
  },
  HiveFile: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    cid: { __type: "String" },
    size: { __type: "Int" },
    mimetype: { __type: "String" },
    isFolder: { __type: "Boolean" },
    path_id: { __type: "String" },
    path: { __type: "String" },
    fs: {
      __type: "FileSystem",
      __args: { where: "FileSystemWhere", options: "FileSystemOptions" },
    },
    fsAggregate: {
      __type: "HiveFileFileSystemFsAggregationSelection",
      __args: { where: "FileSystemWhere" },
    },
    parent: {
      __type: "HiveFile",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    parentAggregate: {
      __type: "HiveFileHiveFileParentAggregationSelection",
      __args: { where: "HiveFileWhere" },
    },
    children: {
      __type: "[HiveFile]",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    childrenAggregate: {
      __type: "HiveFileHiveFileChildrenAggregationSelection",
      __args: { where: "HiveFileWhere" },
    },
    convertedFrom: {
      __type: "HiveFile",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    convertedFromAggregate: {
      __type: "HiveFileHiveFileConvertedFromAggregationSelection",
      __args: { where: "HiveFileWhere" },
    },
    views: {
      __type: "[HiveFile]",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    viewsAggregate: {
      __type: "HiveFileHiveFileViewsAggregationSelection",
      __args: { where: "HiveFileWhere" },
    },
    fsConnection: {
      __type: "HiveFileFsConnection!",
      __args: {
        where: "HiveFileFsConnectionWhere",
        sort: "[HiveFileFsConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    parentConnection: {
      __type: "HiveFileParentConnection!",
      __args: {
        where: "HiveFileParentConnectionWhere",
        sort: "[HiveFileParentConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    childrenConnection: {
      __type: "HiveFileChildrenConnection!",
      __args: {
        where: "HiveFileChildrenConnectionWhere",
        sort: "[HiveFileChildrenConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    convertedFromConnection: {
      __type: "HiveFileConvertedFromConnection!",
      __args: {
        where: "HiveFileConvertedFromConnectionWhere",
        sort: "[HiveFileConvertedFromConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    viewsConnection: {
      __type: "HiveFileViewsConnection!",
      __args: {
        where: "HiveFileViewsConnectionWhere",
        sort: "[HiveFileViewsConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
  },
  HiveFileAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    cid: { __type: "StringAggregateSelection!" },
    size: { __type: "IntAggregateSelection!" },
    mimetype: { __type: "StringAggregateSelection!" },
  },
  HiveFileChildrenConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveFileChildrenRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveFileChildrenRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveFile!" },
  },
  HiveFileConvertedFromConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveFileConvertedFromRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveFileConvertedFromRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveFile!" },
  },
  HiveFileFileSystemFsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveFileFileSystemFsNodeAggregateSelection" },
  },
  HiveFileFileSystemFsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveFileFsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveFileFsRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveFileFsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "FileSystem!" },
  },
  HiveFileHiveFileChildrenAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveFileHiveFileChildrenNodeAggregateSelection" },
  },
  HiveFileHiveFileChildrenNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    cid: { __type: "StringAggregateSelection!" },
    size: { __type: "IntAggregateSelection!" },
    mimetype: { __type: "StringAggregateSelection!" },
  },
  HiveFileHiveFileConvertedFromAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveFileHiveFileConvertedFromNodeAggregateSelection" },
  },
  HiveFileHiveFileConvertedFromNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    cid: { __type: "StringAggregateSelection!" },
    size: { __type: "IntAggregateSelection!" },
    mimetype: { __type: "StringAggregateSelection!" },
  },
  HiveFileHiveFileParentAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveFileHiveFileParentNodeAggregateSelection" },
  },
  HiveFileHiveFileParentNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    cid: { __type: "StringAggregateSelection!" },
    size: { __type: "IntAggregateSelection!" },
    mimetype: { __type: "StringAggregateSelection!" },
  },
  HiveFileHiveFileViewsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveFileHiveFileViewsNodeAggregateSelection" },
  },
  HiveFileHiveFileViewsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    cid: { __type: "StringAggregateSelection!" },
    size: { __type: "IntAggregateSelection!" },
    mimetype: { __type: "StringAggregateSelection!" },
  },
  HiveFileParentConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveFileParentRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveFileParentRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveFile!" },
  },
  HiveFileViewsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveFileViewsRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveFileViewsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveFile!" },
  },
  HiveIntegration: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    description: { __type: "String" },
  },
  HiveIntegrationAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    description: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationInstance: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    isRunning: { __type: "Boolean" },
    config: { __type: "String" },
    connections: {
      __type: "[HiveIntegrationPath]",
      __args: {
        where: "HiveIntegrationPathWhere",
        options: "HiveIntegrationPathOptions",
      },
    },
    connectionsAggregate: {
      __type:
        "HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection",
      __args: { where: "HiveIntegrationPathWhere" },
    },
    integration: {
      __type: "HiveIntegration",
      __args: {
        where: "HiveIntegrationWhere",
        options: "HiveIntegrationOptions",
      },
    },
    integrationAggregate: {
      __type:
        "HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection",
      __args: { where: "HiveIntegrationWhere" },
    },
    appliances: {
      __type: "[HiveAppliance]",
      __args: { where: "HiveApplianceWhere", options: "HiveApplianceOptions" },
    },
    appliancesAggregate: {
      __type:
        "HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection",
      __args: { where: "HiveApplianceWhere" },
    },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        where: "HiveOrganisationWhere",
        options: "HiveOrganisationOptions",
      },
    },
    organisationAggregate: {
      __type:
        "HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection",
      __args: { where: "HiveOrganisationWhere" },
    },
    connectionsConnection: {
      __type: "HiveIntegrationInstanceConnectionsConnection!",
      __args: {
        where: "HiveIntegrationInstanceConnectionsConnectionWhere",
        sort: "[HiveIntegrationInstanceConnectionsConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    integrationConnection: {
      __type: "HiveIntegrationInstanceIntegrationConnection!",
      __args: {
        where: "HiveIntegrationInstanceIntegrationConnectionWhere",
        sort: "[HiveIntegrationInstanceIntegrationConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    appliancesConnection: {
      __type: "HiveIntegrationInstanceAppliancesConnection!",
      __args: {
        where: "HiveIntegrationInstanceAppliancesConnectionWhere",
        sort: "[HiveIntegrationInstanceAppliancesConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    organisationConnection: {
      __type: "HiveIntegrationInstanceOrganisationConnection!",
      __args: {
        where: "HiveIntegrationInstanceOrganisationConnectionWhere",
        sort: "[HiveIntegrationInstanceOrganisationConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
  },
  HiveIntegrationInstanceAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    config: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationInstanceAppliancesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationInstanceAppliancesRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveIntegrationInstanceAppliancesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveAppliance!" },
  },
  HiveIntegrationInstanceConnectionsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationInstanceConnectionsRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveIntegrationInstanceConnectionsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveIntegrationPath!" },
  },
  HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection",
    },
  },
  HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    description: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection",
    },
  },
  HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    description: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection",
    },
  },
  HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
    connectionBlob: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection",
    },
  },
  HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationInstanceIntegrationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationInstanceIntegrationRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveIntegrationInstanceIntegrationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveIntegration!" },
  },
  HiveIntegrationInstanceOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationInstanceOrganisationRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveIntegrationInstanceOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  HiveIntegrationPath: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    type: { __type: "String" },
    connectionBlob: { __type: "String" },
    collections: { __type: "[HiveIntegrationPathCollection]" },
    instance: {
      __type: "HiveIntegrationInstance",
      __args: {
        where: "HiveIntegrationInstanceWhere",
        options: "HiveIntegrationInstanceOptions",
      },
    },
    instanceAggregate: {
      __type:
        "HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection",
      __args: { where: "HiveIntegrationInstanceWhere" },
    },
    instanceConnection: {
      __type: "HiveIntegrationPathInstanceConnection!",
      __args: {
        where: "HiveIntegrationPathInstanceConnectionWhere",
        sort: "[HiveIntegrationPathInstanceConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
  },
  HiveIntegrationPathAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
    connectionBlob: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationPathCollection: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
  },
  HiveIntegrationPathCollectionAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection",
    },
  },
  HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    config: { __type: "StringAggregateSelection!" },
  },
  HiveIntegrationPathInstanceConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveIntegrationPathInstanceRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveIntegrationPathInstanceRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveIntegrationInstance!" },
  },
  HiveOrganisation: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    roles: {
      __type: "[Role]",
      __args: { where: "RoleWhere", options: "RoleOptions" },
    },
    rolesAggregate: {
      __type: "HiveOrganisationRoleRolesAggregationSelection",
      __args: { where: "RoleWhere" },
    },
    members: {
      __type: "[HiveUser]",
      __args: { where: "HiveUserWhere", options: "HiveUserOptions" },
    },
    membersAggregate: {
      __type: "HiveOrganisationHiveUserMembersAggregationSelection",
      __args: { where: "HiveUserWhere" },
    },
    appliances: {
      __type: "[HiveAppliance]",
      __args: { where: "HiveApplianceWhere", options: "HiveApplianceOptions" },
    },
    appliancesAggregate: {
      __type: "HiveOrganisationHiveApplianceAppliancesAggregationSelection",
      __args: { where: "HiveApplianceWhere" },
    },
    integrations: {
      __type: "[HiveIntegrationInstance]",
      __args: {
        where: "HiveIntegrationInstanceWhere",
        options: "HiveIntegrationInstanceOptions",
      },
    },
    integrationsAggregate: {
      __type:
        "HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection",
      __args: { where: "HiveIntegrationInstanceWhere" },
    },
    rolesConnection: {
      __type: "HiveOrganisationRolesConnection!",
      __args: {
        where: "HiveOrganisationRolesConnectionWhere",
        sort: "[HiveOrganisationRolesConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    membersConnection: {
      __type: "HiveOrganisationMembersConnection!",
      __args: {
        where: "HiveOrganisationMembersConnectionWhere",
        sort: "[HiveOrganisationMembersConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    appliancesConnection: {
      __type: "HiveOrganisationAppliancesConnection!",
      __args: {
        where: "HiveOrganisationAppliancesConnectionWhere",
        sort: "[HiveOrganisationAppliancesConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    integrationsConnection: {
      __type: "HiveOrganisationIntegrationsConnection!",
      __args: {
        where: "HiveOrganisationIntegrationsConnectionWhere",
        sort: "[HiveOrganisationIntegrationsConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
  },
  HiveOrganisationAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveOrganisationAppliancesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationAppliancesRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveOrganisationAppliancesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveAppliance!" },
  },
  HiveOrganisationHiveApplianceAppliancesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection",
    },
  },
  HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    description: { __type: "StringAggregateSelection!" },
  },
  HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection",
    },
  },
  HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    config: { __type: "StringAggregateSelection!" },
  },
  HiveOrganisationHiveUserMembersAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveOrganisationHiveUserMembersNodeAggregateSelection" },
  },
  HiveOrganisationHiveUserMembersNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    username: { __type: "StringAggregateSelection!" },
    password: { __type: "StringAggregateSelection!" },
  },
  HiveOrganisationIntegrationsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationIntegrationsRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveOrganisationIntegrationsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveIntegrationInstance!" },
  },
  HiveOrganisationMembersConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationMembersRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveOrganisationMembersRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveUser!" },
  },
  HiveOrganisationRoleRolesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveOrganisationRoleRolesNodeAggregateSelection" },
  },
  HiveOrganisationRoleRolesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveOrganisationRolesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveOrganisationRolesRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveOrganisationRolesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Role!" },
  },
  HiveService: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
  },
  HiveServiceAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveType: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    fields: {
      __type: "[HiveTypeField]",
      __args: { where: "HiveTypeFieldWhere", options: "HiveTypeFieldOptions" },
    },
    fieldsAggregate: {
      __type: "HiveTypeHiveTypeFieldFieldsAggregationSelection",
      __args: { where: "HiveTypeFieldWhere" },
    },
    usedIn: {
      __type: "[HiveAppliance]",
      __args: { where: "HiveApplianceWhere", options: "HiveApplianceOptions" },
    },
    usedInAggregate: {
      __type: "HiveTypeHiveApplianceUsedInAggregationSelection",
      __args: { where: "HiveApplianceWhere" },
    },
    fieldsConnection: {
      __type: "HiveTypeFieldsConnection!",
      __args: {
        where: "HiveTypeFieldsConnectionWhere",
        sort: "[HiveTypeFieldsConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    usedInConnection: {
      __type: "HiveTypeUsedInConnection!",
      __args: {
        where: "HiveTypeUsedInConnectionWhere",
        sort: "[HiveTypeUsedInConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
  },
  HiveTypeAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveTypeField: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveTypeFieldAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  HiveTypeFieldsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveTypeFieldsRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveTypeFieldsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveTypeField!" },
  },
  HiveTypeHiveApplianceUsedInAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveTypeHiveApplianceUsedInNodeAggregateSelection" },
  },
  HiveTypeHiveApplianceUsedInNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    description: { __type: "StringAggregateSelection!" },
  },
  HiveTypeHiveTypeFieldFieldsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveTypeHiveTypeFieldFieldsNodeAggregateSelection" },
  },
  HiveTypeHiveTypeFieldFieldsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  HiveTypeUsedInConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveTypeUsedInRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveTypeUsedInRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveAppliance!" },
  },
  HiveUser: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    username: { __type: "String" },
    password: { __type: "String" },
    roles: {
      __type: "[Role]",
      __args: { where: "RoleWhere", options: "RoleOptions" },
    },
    rolesAggregate: {
      __type: "HiveUserRoleRolesAggregationSelection",
      __args: { where: "RoleWhere" },
    },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        where: "HiveOrganisationWhere",
        options: "HiveOrganisationOptions",
      },
    },
    organisationAggregate: {
      __type: "HiveUserHiveOrganisationOrganisationAggregationSelection",
      __args: { where: "HiveOrganisationWhere" },
    },
    rolesConnection: {
      __type: "HiveUserRolesConnection!",
      __args: {
        where: "HiveUserRolesConnectionWhere",
        sort: "[HiveUserRolesConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    organisationConnection: {
      __type: "HiveUserOrganisationConnection!",
      __args: {
        where: "HiveUserOrganisationConnectionWhere",
        sort: "[HiveUserOrganisationConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
  },
  HiveUserAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    username: { __type: "StringAggregateSelection!" },
    password: { __type: "StringAggregateSelection!" },
  },
  HiveUserHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "HiveUserHiveOrganisationOrganisationNodeAggregateSelection",
    },
  },
  HiveUserHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveUserOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveUserOrganisationRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveUserOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  HiveUserRoleRolesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "HiveUserRoleRolesNodeAggregateSelection" },
  },
  HiveUserRoleRolesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  HiveUserRolesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveUserRolesRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveUserRolesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Role!" },
  },
  IDAggregateSelection: {
    __typename: { __type: "String!" },
    shortest: { __type: "ID" },
    longest: { __type: "ID" },
  },
  IntAggregateSelection: {
    __typename: { __type: "String!" },
    max: { __type: "Int" },
    min: { __type: "Int" },
    average: { __type: "Float" },
    sum: { __type: "Int" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "String" },
    endCursor: { __type: "String" },
  },
  Permission: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    action: { __type: "String" },
    scope: { __type: "String" },
    roles: {
      __type: "[Role]",
      __args: { where: "RoleWhere", options: "RoleOptions" },
    },
    rolesAggregate: {
      __type: "PermissionRoleRolesAggregationSelection",
      __args: { where: "RoleWhere" },
    },
    rolesConnection: {
      __type: "PermissionRolesConnection!",
      __args: {
        where: "PermissionRolesConnectionWhere",
        sort: "[PermissionRolesConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
  },
  PermissionAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    action: { __type: "StringAggregateSelection!" },
    scope: { __type: "StringAggregateSelection!" },
  },
  PermissionRoleRolesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "PermissionRoleRolesNodeAggregateSelection" },
  },
  PermissionRoleRolesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  PermissionRolesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[PermissionRolesRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  PermissionRolesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Role!" },
  },
  Role: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    appliances: {
      __type: "[HiveAppliance]",
      __args: { where: "HiveApplianceWhere", options: "HiveApplianceOptions" },
    },
    appliancesAggregate: {
      __type: "RoleHiveApplianceAppliancesAggregationSelection",
      __args: { where: "HiveApplianceWhere" },
    },
    permissions: {
      __type: "[Permission]",
      __args: { where: "PermissionWhere", options: "PermissionOptions" },
    },
    permissionsAggregate: {
      __type: "RolePermissionPermissionsAggregationSelection",
      __args: { where: "PermissionWhere" },
    },
    organisation: {
      __type: "HiveOrganisation",
      __args: {
        where: "HiveOrganisationWhere",
        options: "HiveOrganisationOptions",
      },
    },
    organisationAggregate: {
      __type: "RoleHiveOrganisationOrganisationAggregationSelection",
      __args: { where: "HiveOrganisationWhere" },
    },
    appliancesConnection: {
      __type: "RoleAppliancesConnection!",
      __args: {
        where: "RoleAppliancesConnectionWhere",
        sort: "[RoleAppliancesConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    permissionsConnection: {
      __type: "RolePermissionsConnection!",
      __args: {
        where: "RolePermissionsConnectionWhere",
        sort: "[RolePermissionsConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
    organisationConnection: {
      __type: "RoleOrganisationConnection!",
      __args: {
        where: "RoleOrganisationConnectionWhere",
        sort: "[RoleOrganisationConnectionSort!]",
        first: "Int",
        after: "String",
      },
    },
  },
  RoleAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  RoleAppliancesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[RoleAppliancesRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  RoleAppliancesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveAppliance!" },
  },
  RoleHiveApplianceAppliancesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "RoleHiveApplianceAppliancesNodeAggregateSelection" },
  },
  RoleHiveApplianceAppliancesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    description: { __type: "StringAggregateSelection!" },
  },
  RoleHiveOrganisationOrganisationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "RoleHiveOrganisationOrganisationNodeAggregateSelection" },
  },
  RoleHiveOrganisationOrganisationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  RoleOrganisationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[RoleOrganisationRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  RoleOrganisationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveOrganisation!" },
  },
  RolePermissionPermissionsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "RolePermissionPermissionsNodeAggregateSelection" },
  },
  RolePermissionPermissionsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    action: { __type: "StringAggregateSelection!" },
    scope: { __type: "StringAggregateSelection!" },
  },
  RolePermissionsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[RolePermissionsRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  RolePermissionsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Permission!" },
  },
  StringAggregateSelection: {
    __typename: { __type: "String!" },
    shortest: { __type: "String" },
    longest: { __type: "String" },
  },
  UpdateFileSystemsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    fileSystems: { __type: "[FileSystem!]!" },
  },
  UpdateHiveAppliancesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    hiveAppliances: { __type: "[HiveAppliance!]!" },
  },
  UpdateHiveFilesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    hiveFiles: { __type: "[HiveFile!]!" },
  },
  UpdateHiveIntegrationInstancesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    hiveIntegrationInstances: { __type: "[HiveIntegrationInstance!]!" },
  },
  UpdateHiveIntegrationPathCollectionsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    hiveIntegrationPathCollections: {
      __type: "[HiveIntegrationPathCollection!]!",
    },
  },
  UpdateHiveIntegrationPathsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    hiveIntegrationPaths: { __type: "[HiveIntegrationPath!]!" },
  },
  UpdateHiveIntegrationsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    hiveIntegrations: { __type: "[HiveIntegration!]!" },
  },
  UpdateHiveOrganisationsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    hiveOrganisations: { __type: "[HiveOrganisation!]!" },
  },
  UpdateHiveServicesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    hiveServices: { __type: "[HiveService!]!" },
  },
  UpdateHiveTypeFieldsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    hiveTypeFields: { __type: "[HiveTypeField!]!" },
  },
  UpdateHiveTypesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    hiveTypes: { __type: "[HiveType!]!" },
  },
  UpdateHiveUsersMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    hiveUsers: { __type: "[HiveUser!]!" },
  },
  UpdateInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesCreated: { __type: "Int!" },
    nodesDeleted: { __type: "Int!" },
    relationshipsCreated: { __type: "Int!" },
    relationshipsDeleted: { __type: "Int!" },
  },
  UpdatePermissionsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    permissions: { __type: "[Permission!]!" },
  },
  UpdateRolesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    roles: { __type: "[Role!]!" },
  },
  FileSystemConnectInput: {
    organisation: { __type: "FileSystemOrganisationConnectFieldInput" },
    files: { __type: "[FileSystemFilesConnectFieldInput!]" },
  },
  FileSystemConnectOrCreateInput: {
    organisation: { __type: "FileSystemOrganisationConnectOrCreateFieldInput" },
    files: { __type: "[FileSystemFilesConnectOrCreateFieldInput!]" },
  },
  FileSystemConnectWhere: { node: { __type: "FileSystemWhere!" } },
  FileSystemCreateInput: {
    name: { __type: "String!" },
    organisation: { __type: "FileSystemOrganisationFieldInput" },
    files: { __type: "FileSystemFilesFieldInput" },
  },
  FileSystemDeleteInput: {
    organisation: { __type: "FileSystemOrganisationDeleteFieldInput" },
    files: { __type: "[FileSystemFilesDeleteFieldInput!]" },
  },
  FileSystemDisconnectInput: {
    organisation: { __type: "FileSystemOrganisationDisconnectFieldInput" },
    files: { __type: "[FileSystemFilesDisconnectFieldInput!]" },
  },
  FileSystemFilesAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[FileSystemFilesAggregateInput!]" },
    OR: { __type: "[FileSystemFilesAggregateInput!]" },
    node: { __type: "FileSystemFilesNodeAggregationWhereInput" },
  },
  FileSystemFilesConnectFieldInput: {
    where: { __type: "HiveFileConnectWhere" },
    connect: { __type: "[HiveFileConnectInput!]" },
  },
  FileSystemFilesConnectionSort: { node: { __type: "HiveFileSort" } },
  FileSystemFilesConnectionWhere: {
    AND: { __type: "[FileSystemFilesConnectionWhere!]" },
    OR: { __type: "[FileSystemFilesConnectionWhere!]" },
    node: { __type: "HiveFileWhere" },
    node_NOT: { __type: "HiveFileWhere" },
  },
  FileSystemFilesConnectOrCreateFieldInput: {
    where: { __type: "HiveFileConnectOrCreateWhere!" },
    onCreate: { __type: "FileSystemFilesConnectOrCreateFieldInputOnCreate!" },
  },
  FileSystemFilesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveFileCreateInput!" },
  },
  FileSystemFilesCreateFieldInput: { node: { __type: "HiveFileCreateInput!" } },
  FileSystemFilesDeleteFieldInput: {
    where: { __type: "FileSystemFilesConnectionWhere" },
    delete: { __type: "HiveFileDeleteInput" },
  },
  FileSystemFilesDisconnectFieldInput: {
    where: { __type: "FileSystemFilesConnectionWhere" },
    disconnect: { __type: "HiveFileDisconnectInput" },
  },
  FileSystemFilesFieldInput: {
    create: { __type: "[FileSystemFilesCreateFieldInput!]" },
    connect: { __type: "[FileSystemFilesConnectFieldInput!]" },
    connectOrCreate: { __type: "[FileSystemFilesConnectOrCreateFieldInput!]" },
  },
  FileSystemFilesNodeAggregationWhereInput: {
    AND: { __type: "[FileSystemFilesNodeAggregationWhereInput!]" },
    OR: { __type: "[FileSystemFilesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    cid_EQUAL: { __type: "String" },
    cid_AVERAGE_EQUAL: { __type: "Float" },
    cid_LONGEST_EQUAL: { __type: "Int" },
    cid_SHORTEST_EQUAL: { __type: "Int" },
    cid_GT: { __type: "Int" },
    cid_AVERAGE_GT: { __type: "Float" },
    cid_LONGEST_GT: { __type: "Int" },
    cid_SHORTEST_GT: { __type: "Int" },
    cid_GTE: { __type: "Int" },
    cid_AVERAGE_GTE: { __type: "Float" },
    cid_LONGEST_GTE: { __type: "Int" },
    cid_SHORTEST_GTE: { __type: "Int" },
    cid_LT: { __type: "Int" },
    cid_AVERAGE_LT: { __type: "Float" },
    cid_LONGEST_LT: { __type: "Int" },
    cid_SHORTEST_LT: { __type: "Int" },
    cid_LTE: { __type: "Int" },
    cid_AVERAGE_LTE: { __type: "Float" },
    cid_LONGEST_LTE: { __type: "Int" },
    cid_SHORTEST_LTE: { __type: "Int" },
    mimetype_EQUAL: { __type: "String" },
    mimetype_AVERAGE_EQUAL: { __type: "Float" },
    mimetype_LONGEST_EQUAL: { __type: "Int" },
    mimetype_SHORTEST_EQUAL: { __type: "Int" },
    mimetype_GT: { __type: "Int" },
    mimetype_AVERAGE_GT: { __type: "Float" },
    mimetype_LONGEST_GT: { __type: "Int" },
    mimetype_SHORTEST_GT: { __type: "Int" },
    mimetype_GTE: { __type: "Int" },
    mimetype_AVERAGE_GTE: { __type: "Float" },
    mimetype_LONGEST_GTE: { __type: "Int" },
    mimetype_SHORTEST_GTE: { __type: "Int" },
    mimetype_LT: { __type: "Int" },
    mimetype_AVERAGE_LT: { __type: "Float" },
    mimetype_LONGEST_LT: { __type: "Int" },
    mimetype_SHORTEST_LT: { __type: "Int" },
    mimetype_LTE: { __type: "Int" },
    mimetype_AVERAGE_LTE: { __type: "Float" },
    mimetype_LONGEST_LTE: { __type: "Int" },
    mimetype_SHORTEST_LTE: { __type: "Int" },
    size_EQUAL: { __type: "Int" },
    size_AVERAGE_EQUAL: { __type: "Float" },
    size_MIN_EQUAL: { __type: "Int" },
    size_MAX_EQUAL: { __type: "Int" },
    size_SUM_EQUAL: { __type: "Int" },
    size_GT: { __type: "Int" },
    size_AVERAGE_GT: { __type: "Float" },
    size_MIN_GT: { __type: "Int" },
    size_MAX_GT: { __type: "Int" },
    size_SUM_GT: { __type: "Int" },
    size_GTE: { __type: "Int" },
    size_AVERAGE_GTE: { __type: "Float" },
    size_MIN_GTE: { __type: "Int" },
    size_MAX_GTE: { __type: "Int" },
    size_SUM_GTE: { __type: "Int" },
    size_LT: { __type: "Int" },
    size_AVERAGE_LT: { __type: "Float" },
    size_MIN_LT: { __type: "Int" },
    size_MAX_LT: { __type: "Int" },
    size_SUM_LT: { __type: "Int" },
    size_LTE: { __type: "Int" },
    size_AVERAGE_LTE: { __type: "Float" },
    size_MIN_LTE: { __type: "Int" },
    size_MAX_LTE: { __type: "Int" },
    size_SUM_LTE: { __type: "Int" },
  },
  FileSystemFilesUpdateConnectionInput: {
    node: { __type: "HiveFileUpdateInput" },
  },
  FileSystemFilesUpdateFieldInput: {
    where: { __type: "FileSystemFilesConnectionWhere" },
    update: { __type: "FileSystemFilesUpdateConnectionInput" },
    connect: { __type: "[FileSystemFilesConnectFieldInput!]" },
    disconnect: { __type: "[FileSystemFilesDisconnectFieldInput!]" },
    create: { __type: "[FileSystemFilesCreateFieldInput!]" },
    delete: { __type: "[FileSystemFilesDeleteFieldInput!]" },
    connectOrCreate: { __type: "[FileSystemFilesConnectOrCreateFieldInput!]" },
  },
  FileSystemOptions: {
    sort: { __type: "[FileSystemSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  FileSystemOrganisationAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[FileSystemOrganisationAggregateInput!]" },
    OR: { __type: "[FileSystemOrganisationAggregateInput!]" },
    node: { __type: "FileSystemOrganisationNodeAggregationWhereInput" },
  },
  FileSystemOrganisationConnectFieldInput: {
    where: { __type: "HiveOrganisationConnectWhere" },
    connect: { __type: "HiveOrganisationConnectInput" },
  },
  FileSystemOrganisationConnectionSort: {
    node: { __type: "HiveOrganisationSort" },
  },
  FileSystemOrganisationConnectionWhere: {
    AND: { __type: "[FileSystemOrganisationConnectionWhere!]" },
    OR: { __type: "[FileSystemOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  FileSystemOrganisationConnectOrCreateFieldInput: {
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
    onCreate: {
      __type: "FileSystemOrganisationConnectOrCreateFieldInputOnCreate!",
    },
  },
  FileSystemOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  FileSystemOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  FileSystemOrganisationDeleteFieldInput: {
    where: { __type: "FileSystemOrganisationConnectionWhere" },
    delete: { __type: "HiveOrganisationDeleteInput" },
  },
  FileSystemOrganisationDisconnectFieldInput: {
    where: { __type: "FileSystemOrganisationConnectionWhere" },
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
  },
  FileSystemOrganisationFieldInput: {
    create: { __type: "FileSystemOrganisationCreateFieldInput" },
    connect: { __type: "FileSystemOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "FileSystemOrganisationConnectOrCreateFieldInput",
    },
  },
  FileSystemOrganisationNodeAggregationWhereInput: {
    AND: { __type: "[FileSystemOrganisationNodeAggregationWhereInput!]" },
    OR: { __type: "[FileSystemOrganisationNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  FileSystemOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  FileSystemOrganisationUpdateFieldInput: {
    where: { __type: "FileSystemOrganisationConnectionWhere" },
    update: { __type: "FileSystemOrganisationUpdateConnectionInput" },
    connect: { __type: "FileSystemOrganisationConnectFieldInput" },
    disconnect: { __type: "FileSystemOrganisationDisconnectFieldInput" },
    create: { __type: "FileSystemOrganisationCreateFieldInput" },
    delete: { __type: "FileSystemOrganisationDeleteFieldInput" },
    connectOrCreate: {
      __type: "FileSystemOrganisationConnectOrCreateFieldInput",
    },
  },
  FileSystemRelationInput: {
    organisation: { __type: "FileSystemOrganisationCreateFieldInput" },
    files: { __type: "[FileSystemFilesCreateFieldInput!]" },
  },
  FileSystemSort: { name: { __type: "SortDirection" } },
  FileSystemUpdateInput: {
    name: { __type: "String" },
    organisation: { __type: "FileSystemOrganisationUpdateFieldInput" },
    files: { __type: "[FileSystemFilesUpdateFieldInput!]" },
  },
  FileSystemWhere: {
    OR: { __type: "[FileSystemWhere!]" },
    AND: { __type: "[FileSystemWhere!]" },
    name: { __type: "String" },
    name_NOT: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT_IN: { __type: "[String]" },
    name_CONTAINS: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
    organisationAggregate: { __type: "FileSystemOrganisationAggregateInput" },
    files: { __type: "HiveFileWhere" },
    files_NOT: { __type: "HiveFileWhere" },
    filesAggregate: { __type: "FileSystemFilesAggregateInput" },
    organisationConnection: { __type: "FileSystemOrganisationConnectionWhere" },
    organisationConnection_NOT: {
      __type: "FileSystemOrganisationConnectionWhere",
    },
    filesConnection: { __type: "FileSystemFilesConnectionWhere" },
    filesConnection_NOT: { __type: "FileSystemFilesConnectionWhere" },
  },
  HiveApplianceBrand_imageAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveApplianceBrand_imageAggregateInput!]" },
    OR: { __type: "[HiveApplianceBrand_imageAggregateInput!]" },
    node: { __type: "HiveApplianceBrand_imageNodeAggregationWhereInput" },
  },
  HiveApplianceBrand_imageConnectFieldInput: {
    where: { __type: "HiveFileConnectWhere" },
    connect: { __type: "HiveFileConnectInput" },
  },
  HiveApplianceBrand_imageConnectionSort: { node: { __type: "HiveFileSort" } },
  HiveApplianceBrand_imageConnectionWhere: {
    AND: { __type: "[HiveApplianceBrand_imageConnectionWhere!]" },
    OR: { __type: "[HiveApplianceBrand_imageConnectionWhere!]" },
    node: { __type: "HiveFileWhere" },
    node_NOT: { __type: "HiveFileWhere" },
  },
  HiveApplianceBrand_imageConnectOrCreateFieldInput: {
    where: { __type: "HiveFileConnectOrCreateWhere!" },
    onCreate: {
      __type: "HiveApplianceBrand_imageConnectOrCreateFieldInputOnCreate!",
    },
  },
  HiveApplianceBrand_imageConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveFileCreateInput!" },
  },
  HiveApplianceBrand_imageCreateFieldInput: {
    node: { __type: "HiveFileCreateInput!" },
  },
  HiveApplianceBrand_imageDeleteFieldInput: {
    where: { __type: "HiveApplianceBrand_imageConnectionWhere" },
    delete: { __type: "HiveFileDeleteInput" },
  },
  HiveApplianceBrand_imageDisconnectFieldInput: {
    where: { __type: "HiveApplianceBrand_imageConnectionWhere" },
    disconnect: { __type: "HiveFileDisconnectInput" },
  },
  HiveApplianceBrand_imageFieldInput: {
    create: { __type: "HiveApplianceBrand_imageCreateFieldInput" },
    connect: { __type: "HiveApplianceBrand_imageConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveApplianceBrand_imageConnectOrCreateFieldInput",
    },
  },
  HiveApplianceBrand_imageNodeAggregationWhereInput: {
    AND: { __type: "[HiveApplianceBrand_imageNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveApplianceBrand_imageNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    cid_EQUAL: { __type: "String" },
    cid_AVERAGE_EQUAL: { __type: "Float" },
    cid_LONGEST_EQUAL: { __type: "Int" },
    cid_SHORTEST_EQUAL: { __type: "Int" },
    cid_GT: { __type: "Int" },
    cid_AVERAGE_GT: { __type: "Float" },
    cid_LONGEST_GT: { __type: "Int" },
    cid_SHORTEST_GT: { __type: "Int" },
    cid_GTE: { __type: "Int" },
    cid_AVERAGE_GTE: { __type: "Float" },
    cid_LONGEST_GTE: { __type: "Int" },
    cid_SHORTEST_GTE: { __type: "Int" },
    cid_LT: { __type: "Int" },
    cid_AVERAGE_LT: { __type: "Float" },
    cid_LONGEST_LT: { __type: "Int" },
    cid_SHORTEST_LT: { __type: "Int" },
    cid_LTE: { __type: "Int" },
    cid_AVERAGE_LTE: { __type: "Float" },
    cid_LONGEST_LTE: { __type: "Int" },
    cid_SHORTEST_LTE: { __type: "Int" },
    mimetype_EQUAL: { __type: "String" },
    mimetype_AVERAGE_EQUAL: { __type: "Float" },
    mimetype_LONGEST_EQUAL: { __type: "Int" },
    mimetype_SHORTEST_EQUAL: { __type: "Int" },
    mimetype_GT: { __type: "Int" },
    mimetype_AVERAGE_GT: { __type: "Float" },
    mimetype_LONGEST_GT: { __type: "Int" },
    mimetype_SHORTEST_GT: { __type: "Int" },
    mimetype_GTE: { __type: "Int" },
    mimetype_AVERAGE_GTE: { __type: "Float" },
    mimetype_LONGEST_GTE: { __type: "Int" },
    mimetype_SHORTEST_GTE: { __type: "Int" },
    mimetype_LT: { __type: "Int" },
    mimetype_AVERAGE_LT: { __type: "Float" },
    mimetype_LONGEST_LT: { __type: "Int" },
    mimetype_SHORTEST_LT: { __type: "Int" },
    mimetype_LTE: { __type: "Int" },
    mimetype_AVERAGE_LTE: { __type: "Float" },
    mimetype_LONGEST_LTE: { __type: "Int" },
    mimetype_SHORTEST_LTE: { __type: "Int" },
    size_EQUAL: { __type: "Int" },
    size_AVERAGE_EQUAL: { __type: "Float" },
    size_MIN_EQUAL: { __type: "Int" },
    size_MAX_EQUAL: { __type: "Int" },
    size_SUM_EQUAL: { __type: "Int" },
    size_GT: { __type: "Int" },
    size_AVERAGE_GT: { __type: "Float" },
    size_MIN_GT: { __type: "Int" },
    size_MAX_GT: { __type: "Int" },
    size_SUM_GT: { __type: "Int" },
    size_GTE: { __type: "Int" },
    size_AVERAGE_GTE: { __type: "Float" },
    size_MIN_GTE: { __type: "Int" },
    size_MAX_GTE: { __type: "Int" },
    size_SUM_GTE: { __type: "Int" },
    size_LT: { __type: "Int" },
    size_AVERAGE_LT: { __type: "Float" },
    size_MIN_LT: { __type: "Int" },
    size_MAX_LT: { __type: "Int" },
    size_SUM_LT: { __type: "Int" },
    size_LTE: { __type: "Int" },
    size_AVERAGE_LTE: { __type: "Float" },
    size_MIN_LTE: { __type: "Int" },
    size_MAX_LTE: { __type: "Int" },
    size_SUM_LTE: { __type: "Int" },
  },
  HiveApplianceBrand_imageUpdateConnectionInput: {
    node: { __type: "HiveFileUpdateInput" },
  },
  HiveApplianceBrand_imageUpdateFieldInput: {
    where: { __type: "HiveApplianceBrand_imageConnectionWhere" },
    update: { __type: "HiveApplianceBrand_imageUpdateConnectionInput" },
    connect: { __type: "HiveApplianceBrand_imageConnectFieldInput" },
    disconnect: { __type: "HiveApplianceBrand_imageDisconnectFieldInput" },
    create: { __type: "HiveApplianceBrand_imageCreateFieldInput" },
    delete: { __type: "HiveApplianceBrand_imageDeleteFieldInput" },
    connectOrCreate: {
      __type: "HiveApplianceBrand_imageConnectOrCreateFieldInput",
    },
  },
  HiveApplianceConnectInput: {
    types: { __type: "[HiveApplianceTypesConnectFieldInput!]" },
    permissions: { __type: "[HiveAppliancePermissionsConnectFieldInput!]" },
    services: { __type: "[HiveApplianceServicesConnectFieldInput!]" },
    brand_image: { __type: "HiveApplianceBrand_imageConnectFieldInput" },
  },
  HiveApplianceConnectOrCreateInput: {
    types: { __type: "[HiveApplianceTypesConnectOrCreateFieldInput!]" },
    permissions: {
      __type: "[HiveAppliancePermissionsConnectOrCreateFieldInput!]",
    },
    brand_image: {
      __type: "HiveApplianceBrand_imageConnectOrCreateFieldInput",
    },
  },
  HiveApplianceConnectOrCreateWhere: {
    node: { __type: "HiveApplianceUniqueWhere!" },
  },
  HiveApplianceConnectWhere: { node: { __type: "HiveApplianceWhere!" } },
  HiveApplianceCreateInput: {
    name: { __type: "String!" },
    label: { __type: "String" },
    description: { __type: "String" },
    types: { __type: "HiveApplianceTypesFieldInput" },
    permissions: { __type: "HiveAppliancePermissionsFieldInput" },
    services: { __type: "HiveApplianceServicesFieldInput" },
    brand_image: { __type: "HiveApplianceBrand_imageFieldInput" },
  },
  HiveApplianceDeleteInput: {
    types: { __type: "[HiveApplianceTypesDeleteFieldInput!]" },
    permissions: { __type: "[HiveAppliancePermissionsDeleteFieldInput!]" },
    services: { __type: "[HiveApplianceServicesDeleteFieldInput!]" },
    brand_image: { __type: "HiveApplianceBrand_imageDeleteFieldInput" },
  },
  HiveApplianceDisconnectInput: {
    types: { __type: "[HiveApplianceTypesDisconnectFieldInput!]" },
    permissions: { __type: "[HiveAppliancePermissionsDisconnectFieldInput!]" },
    services: { __type: "[HiveApplianceServicesDisconnectFieldInput!]" },
    brand_image: { __type: "HiveApplianceBrand_imageDisconnectFieldInput" },
  },
  HiveApplianceOptions: {
    sort: { __type: "[HiveApplianceSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  HiveAppliancePermissionsAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveAppliancePermissionsAggregateInput!]" },
    OR: { __type: "[HiveAppliancePermissionsAggregateInput!]" },
    node: { __type: "HiveAppliancePermissionsNodeAggregationWhereInput" },
  },
  HiveAppliancePermissionsConnectFieldInput: {
    where: { __type: "PermissionConnectWhere" },
    connect: { __type: "[PermissionConnectInput!]" },
  },
  HiveAppliancePermissionsConnectionSort: {
    node: { __type: "PermissionSort" },
  },
  HiveAppliancePermissionsConnectionWhere: {
    AND: { __type: "[HiveAppliancePermissionsConnectionWhere!]" },
    OR: { __type: "[HiveAppliancePermissionsConnectionWhere!]" },
    node: { __type: "PermissionWhere" },
    node_NOT: { __type: "PermissionWhere" },
  },
  HiveAppliancePermissionsConnectOrCreateFieldInput: {
    where: { __type: "PermissionConnectOrCreateWhere!" },
    onCreate: {
      __type: "HiveAppliancePermissionsConnectOrCreateFieldInputOnCreate!",
    },
  },
  HiveAppliancePermissionsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "PermissionCreateInput!" },
  },
  HiveAppliancePermissionsCreateFieldInput: {
    node: { __type: "PermissionCreateInput!" },
  },
  HiveAppliancePermissionsDeleteFieldInput: {
    where: { __type: "HiveAppliancePermissionsConnectionWhere" },
    delete: { __type: "PermissionDeleteInput" },
  },
  HiveAppliancePermissionsDisconnectFieldInput: {
    where: { __type: "HiveAppliancePermissionsConnectionWhere" },
    disconnect: { __type: "PermissionDisconnectInput" },
  },
  HiveAppliancePermissionsFieldInput: {
    create: { __type: "[HiveAppliancePermissionsCreateFieldInput!]" },
    connect: { __type: "[HiveAppliancePermissionsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveAppliancePermissionsConnectOrCreateFieldInput!]",
    },
  },
  HiveAppliancePermissionsNodeAggregationWhereInput: {
    AND: { __type: "[HiveAppliancePermissionsNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveAppliancePermissionsNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    action_EQUAL: { __type: "String" },
    action_AVERAGE_EQUAL: { __type: "Float" },
    action_LONGEST_EQUAL: { __type: "Int" },
    action_SHORTEST_EQUAL: { __type: "Int" },
    action_GT: { __type: "Int" },
    action_AVERAGE_GT: { __type: "Float" },
    action_LONGEST_GT: { __type: "Int" },
    action_SHORTEST_GT: { __type: "Int" },
    action_GTE: { __type: "Int" },
    action_AVERAGE_GTE: { __type: "Float" },
    action_LONGEST_GTE: { __type: "Int" },
    action_SHORTEST_GTE: { __type: "Int" },
    action_LT: { __type: "Int" },
    action_AVERAGE_LT: { __type: "Float" },
    action_LONGEST_LT: { __type: "Int" },
    action_SHORTEST_LT: { __type: "Int" },
    action_LTE: { __type: "Int" },
    action_AVERAGE_LTE: { __type: "Float" },
    action_LONGEST_LTE: { __type: "Int" },
    action_SHORTEST_LTE: { __type: "Int" },
    scope_EQUAL: { __type: "String" },
    scope_AVERAGE_EQUAL: { __type: "Float" },
    scope_LONGEST_EQUAL: { __type: "Int" },
    scope_SHORTEST_EQUAL: { __type: "Int" },
    scope_GT: { __type: "Int" },
    scope_AVERAGE_GT: { __type: "Float" },
    scope_LONGEST_GT: { __type: "Int" },
    scope_SHORTEST_GT: { __type: "Int" },
    scope_GTE: { __type: "Int" },
    scope_AVERAGE_GTE: { __type: "Float" },
    scope_LONGEST_GTE: { __type: "Int" },
    scope_SHORTEST_GTE: { __type: "Int" },
    scope_LT: { __type: "Int" },
    scope_AVERAGE_LT: { __type: "Float" },
    scope_LONGEST_LT: { __type: "Int" },
    scope_SHORTEST_LT: { __type: "Int" },
    scope_LTE: { __type: "Int" },
    scope_AVERAGE_LTE: { __type: "Float" },
    scope_LONGEST_LTE: { __type: "Int" },
    scope_SHORTEST_LTE: { __type: "Int" },
  },
  HiveAppliancePermissionsUpdateConnectionInput: {
    node: { __type: "PermissionUpdateInput" },
  },
  HiveAppliancePermissionsUpdateFieldInput: {
    where: { __type: "HiveAppliancePermissionsConnectionWhere" },
    update: { __type: "HiveAppliancePermissionsUpdateConnectionInput" },
    connect: { __type: "[HiveAppliancePermissionsConnectFieldInput!]" },
    disconnect: { __type: "[HiveAppliancePermissionsDisconnectFieldInput!]" },
    create: { __type: "[HiveAppliancePermissionsCreateFieldInput!]" },
    delete: { __type: "[HiveAppliancePermissionsDeleteFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveAppliancePermissionsConnectOrCreateFieldInput!]",
    },
  },
  HiveApplianceRelationInput: {
    types: { __type: "[HiveApplianceTypesCreateFieldInput!]" },
    permissions: { __type: "[HiveAppliancePermissionsCreateFieldInput!]" },
    services: { __type: "[HiveApplianceServicesCreateFieldInput!]" },
    brand_image: { __type: "HiveApplianceBrand_imageCreateFieldInput" },
  },
  HiveApplianceServicesAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveApplianceServicesAggregateInput!]" },
    OR: { __type: "[HiveApplianceServicesAggregateInput!]" },
    node: { __type: "HiveApplianceServicesNodeAggregationWhereInput" },
  },
  HiveApplianceServicesConnectFieldInput: {
    where: { __type: "HiveServiceConnectWhere" },
  },
  HiveApplianceServicesConnectionSort: { node: { __type: "HiveServiceSort" } },
  HiveApplianceServicesConnectionWhere: {
    AND: { __type: "[HiveApplianceServicesConnectionWhere!]" },
    OR: { __type: "[HiveApplianceServicesConnectionWhere!]" },
    node: { __type: "HiveServiceWhere" },
    node_NOT: { __type: "HiveServiceWhere" },
  },
  HiveApplianceServicesCreateFieldInput: {
    node: { __type: "HiveServiceCreateInput!" },
  },
  HiveApplianceServicesDeleteFieldInput: {
    where: { __type: "HiveApplianceServicesConnectionWhere" },
  },
  HiveApplianceServicesDisconnectFieldInput: {
    where: { __type: "HiveApplianceServicesConnectionWhere" },
  },
  HiveApplianceServicesFieldInput: {
    create: { __type: "[HiveApplianceServicesCreateFieldInput!]" },
    connect: { __type: "[HiveApplianceServicesConnectFieldInput!]" },
  },
  HiveApplianceServicesNodeAggregationWhereInput: {
    AND: { __type: "[HiveApplianceServicesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveApplianceServicesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveApplianceServicesUpdateConnectionInput: {
    node: { __type: "HiveServiceUpdateInput" },
  },
  HiveApplianceServicesUpdateFieldInput: {
    where: { __type: "HiveApplianceServicesConnectionWhere" },
    update: { __type: "HiveApplianceServicesUpdateConnectionInput" },
    connect: { __type: "[HiveApplianceServicesConnectFieldInput!]" },
    disconnect: { __type: "[HiveApplianceServicesDisconnectFieldInput!]" },
    create: { __type: "[HiveApplianceServicesCreateFieldInput!]" },
    delete: { __type: "[HiveApplianceServicesDeleteFieldInput!]" },
  },
  HiveApplianceSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    label: { __type: "SortDirection" },
    description: { __type: "SortDirection" },
  },
  HiveApplianceTypesAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveApplianceTypesAggregateInput!]" },
    OR: { __type: "[HiveApplianceTypesAggregateInput!]" },
    node: { __type: "HiveApplianceTypesNodeAggregationWhereInput" },
  },
  HiveApplianceTypesConnectFieldInput: {
    where: { __type: "HiveTypeConnectWhere" },
    connect: { __type: "[HiveTypeConnectInput!]" },
  },
  HiveApplianceTypesConnectionSort: { node: { __type: "HiveTypeSort" } },
  HiveApplianceTypesConnectionWhere: {
    AND: { __type: "[HiveApplianceTypesConnectionWhere!]" },
    OR: { __type: "[HiveApplianceTypesConnectionWhere!]" },
    node: { __type: "HiveTypeWhere" },
    node_NOT: { __type: "HiveTypeWhere" },
  },
  HiveApplianceTypesConnectOrCreateFieldInput: {
    where: { __type: "HiveTypeConnectOrCreateWhere!" },
    onCreate: {
      __type: "HiveApplianceTypesConnectOrCreateFieldInputOnCreate!",
    },
  },
  HiveApplianceTypesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveTypeCreateInput!" },
  },
  HiveApplianceTypesCreateFieldInput: {
    node: { __type: "HiveTypeCreateInput!" },
  },
  HiveApplianceTypesDeleteFieldInput: {
    where: { __type: "HiveApplianceTypesConnectionWhere" },
    delete: { __type: "HiveTypeDeleteInput" },
  },
  HiveApplianceTypesDisconnectFieldInput: {
    where: { __type: "HiveApplianceTypesConnectionWhere" },
    disconnect: { __type: "HiveTypeDisconnectInput" },
  },
  HiveApplianceTypesFieldInput: {
    create: { __type: "[HiveApplianceTypesCreateFieldInput!]" },
    connect: { __type: "[HiveApplianceTypesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveApplianceTypesConnectOrCreateFieldInput!]",
    },
  },
  HiveApplianceTypesNodeAggregationWhereInput: {
    AND: { __type: "[HiveApplianceTypesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveApplianceTypesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveApplianceTypesUpdateConnectionInput: {
    node: { __type: "HiveTypeUpdateInput" },
  },
  HiveApplianceTypesUpdateFieldInput: {
    where: { __type: "HiveApplianceTypesConnectionWhere" },
    update: { __type: "HiveApplianceTypesUpdateConnectionInput" },
    connect: { __type: "[HiveApplianceTypesConnectFieldInput!]" },
    disconnect: { __type: "[HiveApplianceTypesDisconnectFieldInput!]" },
    create: { __type: "[HiveApplianceTypesCreateFieldInput!]" },
    delete: { __type: "[HiveApplianceTypesDeleteFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveApplianceTypesConnectOrCreateFieldInput!]",
    },
  },
  HiveApplianceUniqueWhere: { id: { __type: "ID" } },
  HiveApplianceUpdateInput: {
    name: { __type: "String" },
    label: { __type: "String" },
    description: { __type: "String" },
    types: { __type: "[HiveApplianceTypesUpdateFieldInput!]" },
    permissions: { __type: "[HiveAppliancePermissionsUpdateFieldInput!]" },
    services: { __type: "[HiveApplianceServicesUpdateFieldInput!]" },
    brand_image: { __type: "HiveApplianceBrand_imageUpdateFieldInput" },
  },
  HiveApplianceWhere: {
    OR: { __type: "[HiveApplianceWhere!]" },
    AND: { __type: "[HiveApplianceWhere!]" },
    id: { __type: "ID" },
    id_NOT: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT_IN: { __type: "[ID]" },
    id_CONTAINS: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_NOT: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT_IN: { __type: "[String]" },
    name_CONTAINS: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    label: { __type: "String" },
    label_NOT: { __type: "String" },
    label_IN: { __type: "[String]" },
    label_NOT_IN: { __type: "[String]" },
    label_CONTAINS: { __type: "String" },
    label_NOT_CONTAINS: { __type: "String" },
    label_STARTS_WITH: { __type: "String" },
    label_NOT_STARTS_WITH: { __type: "String" },
    label_ENDS_WITH: { __type: "String" },
    label_NOT_ENDS_WITH: { __type: "String" },
    description: { __type: "String" },
    description_NOT: { __type: "String" },
    description_IN: { __type: "[String]" },
    description_NOT_IN: { __type: "[String]" },
    description_CONTAINS: { __type: "String" },
    description_NOT_CONTAINS: { __type: "String" },
    description_STARTS_WITH: { __type: "String" },
    description_NOT_STARTS_WITH: { __type: "String" },
    description_ENDS_WITH: { __type: "String" },
    description_NOT_ENDS_WITH: { __type: "String" },
    types: { __type: "HiveTypeWhere" },
    types_NOT: { __type: "HiveTypeWhere" },
    typesAggregate: { __type: "HiveApplianceTypesAggregateInput" },
    permissions: { __type: "PermissionWhere" },
    permissions_NOT: { __type: "PermissionWhere" },
    permissionsAggregate: { __type: "HiveAppliancePermissionsAggregateInput" },
    services: { __type: "HiveServiceWhere" },
    services_NOT: { __type: "HiveServiceWhere" },
    servicesAggregate: { __type: "HiveApplianceServicesAggregateInput" },
    brand_image: { __type: "HiveFileWhere" },
    brand_image_NOT: { __type: "HiveFileWhere" },
    brand_imageAggregate: { __type: "HiveApplianceBrand_imageAggregateInput" },
    typesConnection: { __type: "HiveApplianceTypesConnectionWhere" },
    typesConnection_NOT: { __type: "HiveApplianceTypesConnectionWhere" },
    permissionsConnection: {
      __type: "HiveAppliancePermissionsConnectionWhere",
    },
    permissionsConnection_NOT: {
      __type: "HiveAppliancePermissionsConnectionWhere",
    },
    servicesConnection: { __type: "HiveApplianceServicesConnectionWhere" },
    servicesConnection_NOT: { __type: "HiveApplianceServicesConnectionWhere" },
    brand_imageConnection: {
      __type: "HiveApplianceBrand_imageConnectionWhere",
    },
    brand_imageConnection_NOT: {
      __type: "HiveApplianceBrand_imageConnectionWhere",
    },
  },
  HiveFileChildrenAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveFileChildrenAggregateInput!]" },
    OR: { __type: "[HiveFileChildrenAggregateInput!]" },
    node: { __type: "HiveFileChildrenNodeAggregationWhereInput" },
  },
  HiveFileChildrenConnectFieldInput: {
    where: { __type: "HiveFileConnectWhere" },
    connect: { __type: "[HiveFileConnectInput!]" },
  },
  HiveFileChildrenConnectionSort: { node: { __type: "HiveFileSort" } },
  HiveFileChildrenConnectionWhere: {
    AND: { __type: "[HiveFileChildrenConnectionWhere!]" },
    OR: { __type: "[HiveFileChildrenConnectionWhere!]" },
    node: { __type: "HiveFileWhere" },
    node_NOT: { __type: "HiveFileWhere" },
  },
  HiveFileChildrenConnectOrCreateFieldInput: {
    where: { __type: "HiveFileConnectOrCreateWhere!" },
    onCreate: { __type: "HiveFileChildrenConnectOrCreateFieldInputOnCreate!" },
  },
  HiveFileChildrenConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveFileCreateInput!" },
  },
  HiveFileChildrenCreateFieldInput: {
    node: { __type: "HiveFileCreateInput!" },
  },
  HiveFileChildrenDeleteFieldInput: {
    where: { __type: "HiveFileChildrenConnectionWhere" },
    delete: { __type: "HiveFileDeleteInput" },
  },
  HiveFileChildrenDisconnectFieldInput: {
    where: { __type: "HiveFileChildrenConnectionWhere" },
    disconnect: { __type: "HiveFileDisconnectInput" },
  },
  HiveFileChildrenFieldInput: {
    create: { __type: "[HiveFileChildrenCreateFieldInput!]" },
    connect: { __type: "[HiveFileChildrenConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveFileChildrenConnectOrCreateFieldInput!]" },
  },
  HiveFileChildrenNodeAggregationWhereInput: {
    AND: { __type: "[HiveFileChildrenNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveFileChildrenNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    cid_EQUAL: { __type: "String" },
    cid_AVERAGE_EQUAL: { __type: "Float" },
    cid_LONGEST_EQUAL: { __type: "Int" },
    cid_SHORTEST_EQUAL: { __type: "Int" },
    cid_GT: { __type: "Int" },
    cid_AVERAGE_GT: { __type: "Float" },
    cid_LONGEST_GT: { __type: "Int" },
    cid_SHORTEST_GT: { __type: "Int" },
    cid_GTE: { __type: "Int" },
    cid_AVERAGE_GTE: { __type: "Float" },
    cid_LONGEST_GTE: { __type: "Int" },
    cid_SHORTEST_GTE: { __type: "Int" },
    cid_LT: { __type: "Int" },
    cid_AVERAGE_LT: { __type: "Float" },
    cid_LONGEST_LT: { __type: "Int" },
    cid_SHORTEST_LT: { __type: "Int" },
    cid_LTE: { __type: "Int" },
    cid_AVERAGE_LTE: { __type: "Float" },
    cid_LONGEST_LTE: { __type: "Int" },
    cid_SHORTEST_LTE: { __type: "Int" },
    mimetype_EQUAL: { __type: "String" },
    mimetype_AVERAGE_EQUAL: { __type: "Float" },
    mimetype_LONGEST_EQUAL: { __type: "Int" },
    mimetype_SHORTEST_EQUAL: { __type: "Int" },
    mimetype_GT: { __type: "Int" },
    mimetype_AVERAGE_GT: { __type: "Float" },
    mimetype_LONGEST_GT: { __type: "Int" },
    mimetype_SHORTEST_GT: { __type: "Int" },
    mimetype_GTE: { __type: "Int" },
    mimetype_AVERAGE_GTE: { __type: "Float" },
    mimetype_LONGEST_GTE: { __type: "Int" },
    mimetype_SHORTEST_GTE: { __type: "Int" },
    mimetype_LT: { __type: "Int" },
    mimetype_AVERAGE_LT: { __type: "Float" },
    mimetype_LONGEST_LT: { __type: "Int" },
    mimetype_SHORTEST_LT: { __type: "Int" },
    mimetype_LTE: { __type: "Int" },
    mimetype_AVERAGE_LTE: { __type: "Float" },
    mimetype_LONGEST_LTE: { __type: "Int" },
    mimetype_SHORTEST_LTE: { __type: "Int" },
    size_EQUAL: { __type: "Int" },
    size_AVERAGE_EQUAL: { __type: "Float" },
    size_MIN_EQUAL: { __type: "Int" },
    size_MAX_EQUAL: { __type: "Int" },
    size_SUM_EQUAL: { __type: "Int" },
    size_GT: { __type: "Int" },
    size_AVERAGE_GT: { __type: "Float" },
    size_MIN_GT: { __type: "Int" },
    size_MAX_GT: { __type: "Int" },
    size_SUM_GT: { __type: "Int" },
    size_GTE: { __type: "Int" },
    size_AVERAGE_GTE: { __type: "Float" },
    size_MIN_GTE: { __type: "Int" },
    size_MAX_GTE: { __type: "Int" },
    size_SUM_GTE: { __type: "Int" },
    size_LT: { __type: "Int" },
    size_AVERAGE_LT: { __type: "Float" },
    size_MIN_LT: { __type: "Int" },
    size_MAX_LT: { __type: "Int" },
    size_SUM_LT: { __type: "Int" },
    size_LTE: { __type: "Int" },
    size_AVERAGE_LTE: { __type: "Float" },
    size_MIN_LTE: { __type: "Int" },
    size_MAX_LTE: { __type: "Int" },
    size_SUM_LTE: { __type: "Int" },
  },
  HiveFileChildrenUpdateConnectionInput: {
    node: { __type: "HiveFileUpdateInput" },
  },
  HiveFileChildrenUpdateFieldInput: {
    where: { __type: "HiveFileChildrenConnectionWhere" },
    update: { __type: "HiveFileChildrenUpdateConnectionInput" },
    connect: { __type: "[HiveFileChildrenConnectFieldInput!]" },
    disconnect: { __type: "[HiveFileChildrenDisconnectFieldInput!]" },
    create: { __type: "[HiveFileChildrenCreateFieldInput!]" },
    delete: { __type: "[HiveFileChildrenDeleteFieldInput!]" },
    connectOrCreate: { __type: "[HiveFileChildrenConnectOrCreateFieldInput!]" },
  },
  HiveFileConnectInput: {
    fs: { __type: "HiveFileFsConnectFieldInput" },
    parent: { __type: "HiveFileParentConnectFieldInput" },
    children: { __type: "[HiveFileChildrenConnectFieldInput!]" },
    convertedFrom: { __type: "HiveFileConvertedFromConnectFieldInput" },
    views: { __type: "[HiveFileViewsConnectFieldInput!]" },
  },
  HiveFileConnectOrCreateInput: {
    parent: { __type: "HiveFileParentConnectOrCreateFieldInput" },
    children: { __type: "[HiveFileChildrenConnectOrCreateFieldInput!]" },
    convertedFrom: { __type: "HiveFileConvertedFromConnectOrCreateFieldInput" },
    views: { __type: "[HiveFileViewsConnectOrCreateFieldInput!]" },
  },
  HiveFileConnectOrCreateWhere: { node: { __type: "HiveFileUniqueWhere!" } },
  HiveFileConnectWhere: { node: { __type: "HiveFileWhere!" } },
  HiveFileConvertedFromAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveFileConvertedFromAggregateInput!]" },
    OR: { __type: "[HiveFileConvertedFromAggregateInput!]" },
    node: { __type: "HiveFileConvertedFromNodeAggregationWhereInput" },
  },
  HiveFileConvertedFromConnectFieldInput: {
    where: { __type: "HiveFileConnectWhere" },
    connect: { __type: "HiveFileConnectInput" },
  },
  HiveFileConvertedFromConnectionSort: { node: { __type: "HiveFileSort" } },
  HiveFileConvertedFromConnectionWhere: {
    AND: { __type: "[HiveFileConvertedFromConnectionWhere!]" },
    OR: { __type: "[HiveFileConvertedFromConnectionWhere!]" },
    node: { __type: "HiveFileWhere" },
    node_NOT: { __type: "HiveFileWhere" },
  },
  HiveFileConvertedFromConnectOrCreateFieldInput: {
    where: { __type: "HiveFileConnectOrCreateWhere!" },
    onCreate: {
      __type: "HiveFileConvertedFromConnectOrCreateFieldInputOnCreate!",
    },
  },
  HiveFileConvertedFromConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveFileCreateInput!" },
  },
  HiveFileConvertedFromCreateFieldInput: {
    node: { __type: "HiveFileCreateInput!" },
  },
  HiveFileConvertedFromDeleteFieldInput: {
    where: { __type: "HiveFileConvertedFromConnectionWhere" },
    delete: { __type: "HiveFileDeleteInput" },
  },
  HiveFileConvertedFromDisconnectFieldInput: {
    where: { __type: "HiveFileConvertedFromConnectionWhere" },
    disconnect: { __type: "HiveFileDisconnectInput" },
  },
  HiveFileConvertedFromFieldInput: {
    create: { __type: "HiveFileConvertedFromCreateFieldInput" },
    connect: { __type: "HiveFileConvertedFromConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveFileConvertedFromConnectOrCreateFieldInput",
    },
  },
  HiveFileConvertedFromNodeAggregationWhereInput: {
    AND: { __type: "[HiveFileConvertedFromNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveFileConvertedFromNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    cid_EQUAL: { __type: "String" },
    cid_AVERAGE_EQUAL: { __type: "Float" },
    cid_LONGEST_EQUAL: { __type: "Int" },
    cid_SHORTEST_EQUAL: { __type: "Int" },
    cid_GT: { __type: "Int" },
    cid_AVERAGE_GT: { __type: "Float" },
    cid_LONGEST_GT: { __type: "Int" },
    cid_SHORTEST_GT: { __type: "Int" },
    cid_GTE: { __type: "Int" },
    cid_AVERAGE_GTE: { __type: "Float" },
    cid_LONGEST_GTE: { __type: "Int" },
    cid_SHORTEST_GTE: { __type: "Int" },
    cid_LT: { __type: "Int" },
    cid_AVERAGE_LT: { __type: "Float" },
    cid_LONGEST_LT: { __type: "Int" },
    cid_SHORTEST_LT: { __type: "Int" },
    cid_LTE: { __type: "Int" },
    cid_AVERAGE_LTE: { __type: "Float" },
    cid_LONGEST_LTE: { __type: "Int" },
    cid_SHORTEST_LTE: { __type: "Int" },
    mimetype_EQUAL: { __type: "String" },
    mimetype_AVERAGE_EQUAL: { __type: "Float" },
    mimetype_LONGEST_EQUAL: { __type: "Int" },
    mimetype_SHORTEST_EQUAL: { __type: "Int" },
    mimetype_GT: { __type: "Int" },
    mimetype_AVERAGE_GT: { __type: "Float" },
    mimetype_LONGEST_GT: { __type: "Int" },
    mimetype_SHORTEST_GT: { __type: "Int" },
    mimetype_GTE: { __type: "Int" },
    mimetype_AVERAGE_GTE: { __type: "Float" },
    mimetype_LONGEST_GTE: { __type: "Int" },
    mimetype_SHORTEST_GTE: { __type: "Int" },
    mimetype_LT: { __type: "Int" },
    mimetype_AVERAGE_LT: { __type: "Float" },
    mimetype_LONGEST_LT: { __type: "Int" },
    mimetype_SHORTEST_LT: { __type: "Int" },
    mimetype_LTE: { __type: "Int" },
    mimetype_AVERAGE_LTE: { __type: "Float" },
    mimetype_LONGEST_LTE: { __type: "Int" },
    mimetype_SHORTEST_LTE: { __type: "Int" },
    size_EQUAL: { __type: "Int" },
    size_AVERAGE_EQUAL: { __type: "Float" },
    size_MIN_EQUAL: { __type: "Int" },
    size_MAX_EQUAL: { __type: "Int" },
    size_SUM_EQUAL: { __type: "Int" },
    size_GT: { __type: "Int" },
    size_AVERAGE_GT: { __type: "Float" },
    size_MIN_GT: { __type: "Int" },
    size_MAX_GT: { __type: "Int" },
    size_SUM_GT: { __type: "Int" },
    size_GTE: { __type: "Int" },
    size_AVERAGE_GTE: { __type: "Float" },
    size_MIN_GTE: { __type: "Int" },
    size_MAX_GTE: { __type: "Int" },
    size_SUM_GTE: { __type: "Int" },
    size_LT: { __type: "Int" },
    size_AVERAGE_LT: { __type: "Float" },
    size_MIN_LT: { __type: "Int" },
    size_MAX_LT: { __type: "Int" },
    size_SUM_LT: { __type: "Int" },
    size_LTE: { __type: "Int" },
    size_AVERAGE_LTE: { __type: "Float" },
    size_MIN_LTE: { __type: "Int" },
    size_MAX_LTE: { __type: "Int" },
    size_SUM_LTE: { __type: "Int" },
  },
  HiveFileConvertedFromUpdateConnectionInput: {
    node: { __type: "HiveFileUpdateInput" },
  },
  HiveFileConvertedFromUpdateFieldInput: {
    where: { __type: "HiveFileConvertedFromConnectionWhere" },
    update: { __type: "HiveFileConvertedFromUpdateConnectionInput" },
    connect: { __type: "HiveFileConvertedFromConnectFieldInput" },
    disconnect: { __type: "HiveFileConvertedFromDisconnectFieldInput" },
    create: { __type: "HiveFileConvertedFromCreateFieldInput" },
    delete: { __type: "HiveFileConvertedFromDeleteFieldInput" },
    connectOrCreate: {
      __type: "HiveFileConvertedFromConnectOrCreateFieldInput",
    },
  },
  HiveFileCreateInput: {
    name: { __type: "String!" },
    cid: { __type: "String" },
    size: { __type: "Int" },
    mimetype: { __type: "String" },
    isFolder: { __type: "Boolean" },
    fs: { __type: "HiveFileFsFieldInput" },
    parent: { __type: "HiveFileParentFieldInput" },
    children: { __type: "HiveFileChildrenFieldInput" },
    convertedFrom: { __type: "HiveFileConvertedFromFieldInput" },
    views: { __type: "HiveFileViewsFieldInput" },
  },
  HiveFileDeleteInput: {
    fs: { __type: "HiveFileFsDeleteFieldInput" },
    parent: { __type: "HiveFileParentDeleteFieldInput" },
    children: { __type: "[HiveFileChildrenDeleteFieldInput!]" },
    convertedFrom: { __type: "HiveFileConvertedFromDeleteFieldInput" },
    views: { __type: "[HiveFileViewsDeleteFieldInput!]" },
  },
  HiveFileDisconnectInput: {
    fs: { __type: "HiveFileFsDisconnectFieldInput" },
    parent: { __type: "HiveFileParentDisconnectFieldInput" },
    children: { __type: "[HiveFileChildrenDisconnectFieldInput!]" },
    convertedFrom: { __type: "HiveFileConvertedFromDisconnectFieldInput" },
    views: { __type: "[HiveFileViewsDisconnectFieldInput!]" },
  },
  HiveFileFsAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveFileFsAggregateInput!]" },
    OR: { __type: "[HiveFileFsAggregateInput!]" },
    node: { __type: "HiveFileFsNodeAggregationWhereInput" },
  },
  HiveFileFsConnectFieldInput: {
    where: { __type: "FileSystemConnectWhere" },
    connect: { __type: "FileSystemConnectInput" },
  },
  HiveFileFsConnectionSort: { node: { __type: "FileSystemSort" } },
  HiveFileFsConnectionWhere: {
    AND: { __type: "[HiveFileFsConnectionWhere!]" },
    OR: { __type: "[HiveFileFsConnectionWhere!]" },
    node: { __type: "FileSystemWhere" },
    node_NOT: { __type: "FileSystemWhere" },
  },
  HiveFileFsCreateFieldInput: { node: { __type: "FileSystemCreateInput!" } },
  HiveFileFsDeleteFieldInput: {
    where: { __type: "HiveFileFsConnectionWhere" },
    delete: { __type: "FileSystemDeleteInput" },
  },
  HiveFileFsDisconnectFieldInput: {
    where: { __type: "HiveFileFsConnectionWhere" },
    disconnect: { __type: "FileSystemDisconnectInput" },
  },
  HiveFileFsFieldInput: {
    create: { __type: "HiveFileFsCreateFieldInput" },
    connect: { __type: "HiveFileFsConnectFieldInput" },
  },
  HiveFileFsNodeAggregationWhereInput: {
    AND: { __type: "[HiveFileFsNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveFileFsNodeAggregationWhereInput!]" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveFileFsUpdateConnectionInput: {
    node: { __type: "FileSystemUpdateInput" },
  },
  HiveFileFsUpdateFieldInput: {
    where: { __type: "HiveFileFsConnectionWhere" },
    update: { __type: "HiveFileFsUpdateConnectionInput" },
    connect: { __type: "HiveFileFsConnectFieldInput" },
    disconnect: { __type: "HiveFileFsDisconnectFieldInput" },
    create: { __type: "HiveFileFsCreateFieldInput" },
    delete: { __type: "HiveFileFsDeleteFieldInput" },
  },
  HiveFileOptions: {
    sort: { __type: "[HiveFileSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  HiveFileParentAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveFileParentAggregateInput!]" },
    OR: { __type: "[HiveFileParentAggregateInput!]" },
    node: { __type: "HiveFileParentNodeAggregationWhereInput" },
  },
  HiveFileParentConnectFieldInput: {
    where: { __type: "HiveFileConnectWhere" },
    connect: { __type: "HiveFileConnectInput" },
  },
  HiveFileParentConnectionSort: { node: { __type: "HiveFileSort" } },
  HiveFileParentConnectionWhere: {
    AND: { __type: "[HiveFileParentConnectionWhere!]" },
    OR: { __type: "[HiveFileParentConnectionWhere!]" },
    node: { __type: "HiveFileWhere" },
    node_NOT: { __type: "HiveFileWhere" },
  },
  HiveFileParentConnectOrCreateFieldInput: {
    where: { __type: "HiveFileConnectOrCreateWhere!" },
    onCreate: { __type: "HiveFileParentConnectOrCreateFieldInputOnCreate!" },
  },
  HiveFileParentConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveFileCreateInput!" },
  },
  HiveFileParentCreateFieldInput: { node: { __type: "HiveFileCreateInput!" } },
  HiveFileParentDeleteFieldInput: {
    where: { __type: "HiveFileParentConnectionWhere" },
    delete: { __type: "HiveFileDeleteInput" },
  },
  HiveFileParentDisconnectFieldInput: {
    where: { __type: "HiveFileParentConnectionWhere" },
    disconnect: { __type: "HiveFileDisconnectInput" },
  },
  HiveFileParentFieldInput: {
    create: { __type: "HiveFileParentCreateFieldInput" },
    connect: { __type: "HiveFileParentConnectFieldInput" },
    connectOrCreate: { __type: "HiveFileParentConnectOrCreateFieldInput" },
  },
  HiveFileParentNodeAggregationWhereInput: {
    AND: { __type: "[HiveFileParentNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveFileParentNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    cid_EQUAL: { __type: "String" },
    cid_AVERAGE_EQUAL: { __type: "Float" },
    cid_LONGEST_EQUAL: { __type: "Int" },
    cid_SHORTEST_EQUAL: { __type: "Int" },
    cid_GT: { __type: "Int" },
    cid_AVERAGE_GT: { __type: "Float" },
    cid_LONGEST_GT: { __type: "Int" },
    cid_SHORTEST_GT: { __type: "Int" },
    cid_GTE: { __type: "Int" },
    cid_AVERAGE_GTE: { __type: "Float" },
    cid_LONGEST_GTE: { __type: "Int" },
    cid_SHORTEST_GTE: { __type: "Int" },
    cid_LT: { __type: "Int" },
    cid_AVERAGE_LT: { __type: "Float" },
    cid_LONGEST_LT: { __type: "Int" },
    cid_SHORTEST_LT: { __type: "Int" },
    cid_LTE: { __type: "Int" },
    cid_AVERAGE_LTE: { __type: "Float" },
    cid_LONGEST_LTE: { __type: "Int" },
    cid_SHORTEST_LTE: { __type: "Int" },
    mimetype_EQUAL: { __type: "String" },
    mimetype_AVERAGE_EQUAL: { __type: "Float" },
    mimetype_LONGEST_EQUAL: { __type: "Int" },
    mimetype_SHORTEST_EQUAL: { __type: "Int" },
    mimetype_GT: { __type: "Int" },
    mimetype_AVERAGE_GT: { __type: "Float" },
    mimetype_LONGEST_GT: { __type: "Int" },
    mimetype_SHORTEST_GT: { __type: "Int" },
    mimetype_GTE: { __type: "Int" },
    mimetype_AVERAGE_GTE: { __type: "Float" },
    mimetype_LONGEST_GTE: { __type: "Int" },
    mimetype_SHORTEST_GTE: { __type: "Int" },
    mimetype_LT: { __type: "Int" },
    mimetype_AVERAGE_LT: { __type: "Float" },
    mimetype_LONGEST_LT: { __type: "Int" },
    mimetype_SHORTEST_LT: { __type: "Int" },
    mimetype_LTE: { __type: "Int" },
    mimetype_AVERAGE_LTE: { __type: "Float" },
    mimetype_LONGEST_LTE: { __type: "Int" },
    mimetype_SHORTEST_LTE: { __type: "Int" },
    size_EQUAL: { __type: "Int" },
    size_AVERAGE_EQUAL: { __type: "Float" },
    size_MIN_EQUAL: { __type: "Int" },
    size_MAX_EQUAL: { __type: "Int" },
    size_SUM_EQUAL: { __type: "Int" },
    size_GT: { __type: "Int" },
    size_AVERAGE_GT: { __type: "Float" },
    size_MIN_GT: { __type: "Int" },
    size_MAX_GT: { __type: "Int" },
    size_SUM_GT: { __type: "Int" },
    size_GTE: { __type: "Int" },
    size_AVERAGE_GTE: { __type: "Float" },
    size_MIN_GTE: { __type: "Int" },
    size_MAX_GTE: { __type: "Int" },
    size_SUM_GTE: { __type: "Int" },
    size_LT: { __type: "Int" },
    size_AVERAGE_LT: { __type: "Float" },
    size_MIN_LT: { __type: "Int" },
    size_MAX_LT: { __type: "Int" },
    size_SUM_LT: { __type: "Int" },
    size_LTE: { __type: "Int" },
    size_AVERAGE_LTE: { __type: "Float" },
    size_MIN_LTE: { __type: "Int" },
    size_MAX_LTE: { __type: "Int" },
    size_SUM_LTE: { __type: "Int" },
  },
  HiveFileParentUpdateConnectionInput: {
    node: { __type: "HiveFileUpdateInput" },
  },
  HiveFileParentUpdateFieldInput: {
    where: { __type: "HiveFileParentConnectionWhere" },
    update: { __type: "HiveFileParentUpdateConnectionInput" },
    connect: { __type: "HiveFileParentConnectFieldInput" },
    disconnect: { __type: "HiveFileParentDisconnectFieldInput" },
    create: { __type: "HiveFileParentCreateFieldInput" },
    delete: { __type: "HiveFileParentDeleteFieldInput" },
    connectOrCreate: { __type: "HiveFileParentConnectOrCreateFieldInput" },
  },
  HiveFileRelationInput: {
    fs: { __type: "HiveFileFsCreateFieldInput" },
    parent: { __type: "HiveFileParentCreateFieldInput" },
    children: { __type: "[HiveFileChildrenCreateFieldInput!]" },
    convertedFrom: { __type: "HiveFileConvertedFromCreateFieldInput" },
    views: { __type: "[HiveFileViewsCreateFieldInput!]" },
  },
  HiveFileSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    cid: { __type: "SortDirection" },
    size: { __type: "SortDirection" },
    mimetype: { __type: "SortDirection" },
    isFolder: { __type: "SortDirection" },
    path_id: { __type: "SortDirection" },
    path: { __type: "SortDirection" },
  },
  HiveFileUniqueWhere: { id: { __type: "ID" } },
  HiveFileUpdateInput: {
    name: { __type: "String" },
    cid: { __type: "String" },
    size: { __type: "Int" },
    mimetype: { __type: "String" },
    isFolder: { __type: "Boolean" },
    fs: { __type: "HiveFileFsUpdateFieldInput" },
    parent: { __type: "HiveFileParentUpdateFieldInput" },
    children: { __type: "[HiveFileChildrenUpdateFieldInput!]" },
    convertedFrom: { __type: "HiveFileConvertedFromUpdateFieldInput" },
    views: { __type: "[HiveFileViewsUpdateFieldInput!]" },
  },
  HiveFileViewsAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveFileViewsAggregateInput!]" },
    OR: { __type: "[HiveFileViewsAggregateInput!]" },
    node: { __type: "HiveFileViewsNodeAggregationWhereInput" },
  },
  HiveFileViewsConnectFieldInput: {
    where: { __type: "HiveFileConnectWhere" },
    connect: { __type: "[HiveFileConnectInput!]" },
  },
  HiveFileViewsConnectionSort: { node: { __type: "HiveFileSort" } },
  HiveFileViewsConnectionWhere: {
    AND: { __type: "[HiveFileViewsConnectionWhere!]" },
    OR: { __type: "[HiveFileViewsConnectionWhere!]" },
    node: { __type: "HiveFileWhere" },
    node_NOT: { __type: "HiveFileWhere" },
  },
  HiveFileViewsConnectOrCreateFieldInput: {
    where: { __type: "HiveFileConnectOrCreateWhere!" },
    onCreate: { __type: "HiveFileViewsConnectOrCreateFieldInputOnCreate!" },
  },
  HiveFileViewsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveFileCreateInput!" },
  },
  HiveFileViewsCreateFieldInput: { node: { __type: "HiveFileCreateInput!" } },
  HiveFileViewsDeleteFieldInput: {
    where: { __type: "HiveFileViewsConnectionWhere" },
    delete: { __type: "HiveFileDeleteInput" },
  },
  HiveFileViewsDisconnectFieldInput: {
    where: { __type: "HiveFileViewsConnectionWhere" },
    disconnect: { __type: "HiveFileDisconnectInput" },
  },
  HiveFileViewsFieldInput: {
    create: { __type: "[HiveFileViewsCreateFieldInput!]" },
    connect: { __type: "[HiveFileViewsConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveFileViewsConnectOrCreateFieldInput!]" },
  },
  HiveFileViewsNodeAggregationWhereInput: {
    AND: { __type: "[HiveFileViewsNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveFileViewsNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    cid_EQUAL: { __type: "String" },
    cid_AVERAGE_EQUAL: { __type: "Float" },
    cid_LONGEST_EQUAL: { __type: "Int" },
    cid_SHORTEST_EQUAL: { __type: "Int" },
    cid_GT: { __type: "Int" },
    cid_AVERAGE_GT: { __type: "Float" },
    cid_LONGEST_GT: { __type: "Int" },
    cid_SHORTEST_GT: { __type: "Int" },
    cid_GTE: { __type: "Int" },
    cid_AVERAGE_GTE: { __type: "Float" },
    cid_LONGEST_GTE: { __type: "Int" },
    cid_SHORTEST_GTE: { __type: "Int" },
    cid_LT: { __type: "Int" },
    cid_AVERAGE_LT: { __type: "Float" },
    cid_LONGEST_LT: { __type: "Int" },
    cid_SHORTEST_LT: { __type: "Int" },
    cid_LTE: { __type: "Int" },
    cid_AVERAGE_LTE: { __type: "Float" },
    cid_LONGEST_LTE: { __type: "Int" },
    cid_SHORTEST_LTE: { __type: "Int" },
    mimetype_EQUAL: { __type: "String" },
    mimetype_AVERAGE_EQUAL: { __type: "Float" },
    mimetype_LONGEST_EQUAL: { __type: "Int" },
    mimetype_SHORTEST_EQUAL: { __type: "Int" },
    mimetype_GT: { __type: "Int" },
    mimetype_AVERAGE_GT: { __type: "Float" },
    mimetype_LONGEST_GT: { __type: "Int" },
    mimetype_SHORTEST_GT: { __type: "Int" },
    mimetype_GTE: { __type: "Int" },
    mimetype_AVERAGE_GTE: { __type: "Float" },
    mimetype_LONGEST_GTE: { __type: "Int" },
    mimetype_SHORTEST_GTE: { __type: "Int" },
    mimetype_LT: { __type: "Int" },
    mimetype_AVERAGE_LT: { __type: "Float" },
    mimetype_LONGEST_LT: { __type: "Int" },
    mimetype_SHORTEST_LT: { __type: "Int" },
    mimetype_LTE: { __type: "Int" },
    mimetype_AVERAGE_LTE: { __type: "Float" },
    mimetype_LONGEST_LTE: { __type: "Int" },
    mimetype_SHORTEST_LTE: { __type: "Int" },
    size_EQUAL: { __type: "Int" },
    size_AVERAGE_EQUAL: { __type: "Float" },
    size_MIN_EQUAL: { __type: "Int" },
    size_MAX_EQUAL: { __type: "Int" },
    size_SUM_EQUAL: { __type: "Int" },
    size_GT: { __type: "Int" },
    size_AVERAGE_GT: { __type: "Float" },
    size_MIN_GT: { __type: "Int" },
    size_MAX_GT: { __type: "Int" },
    size_SUM_GT: { __type: "Int" },
    size_GTE: { __type: "Int" },
    size_AVERAGE_GTE: { __type: "Float" },
    size_MIN_GTE: { __type: "Int" },
    size_MAX_GTE: { __type: "Int" },
    size_SUM_GTE: { __type: "Int" },
    size_LT: { __type: "Int" },
    size_AVERAGE_LT: { __type: "Float" },
    size_MIN_LT: { __type: "Int" },
    size_MAX_LT: { __type: "Int" },
    size_SUM_LT: { __type: "Int" },
    size_LTE: { __type: "Int" },
    size_AVERAGE_LTE: { __type: "Float" },
    size_MIN_LTE: { __type: "Int" },
    size_MAX_LTE: { __type: "Int" },
    size_SUM_LTE: { __type: "Int" },
  },
  HiveFileViewsUpdateConnectionInput: {
    node: { __type: "HiveFileUpdateInput" },
  },
  HiveFileViewsUpdateFieldInput: {
    where: { __type: "HiveFileViewsConnectionWhere" },
    update: { __type: "HiveFileViewsUpdateConnectionInput" },
    connect: { __type: "[HiveFileViewsConnectFieldInput!]" },
    disconnect: { __type: "[HiveFileViewsDisconnectFieldInput!]" },
    create: { __type: "[HiveFileViewsCreateFieldInput!]" },
    delete: { __type: "[HiveFileViewsDeleteFieldInput!]" },
    connectOrCreate: { __type: "[HiveFileViewsConnectOrCreateFieldInput!]" },
  },
  HiveFileWhere: {
    OR: { __type: "[HiveFileWhere!]" },
    AND: { __type: "[HiveFileWhere!]" },
    id: { __type: "ID" },
    id_NOT: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT_IN: { __type: "[ID]" },
    id_CONTAINS: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_NOT: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT_IN: { __type: "[String]" },
    name_CONTAINS: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    cid: { __type: "String" },
    cid_NOT: { __type: "String" },
    cid_IN: { __type: "[String]" },
    cid_NOT_IN: { __type: "[String]" },
    cid_CONTAINS: { __type: "String" },
    cid_NOT_CONTAINS: { __type: "String" },
    cid_STARTS_WITH: { __type: "String" },
    cid_NOT_STARTS_WITH: { __type: "String" },
    cid_ENDS_WITH: { __type: "String" },
    cid_NOT_ENDS_WITH: { __type: "String" },
    size: { __type: "Int" },
    size_NOT: { __type: "Int" },
    size_IN: { __type: "[Int]" },
    size_NOT_IN: { __type: "[Int]" },
    size_LT: { __type: "Int" },
    size_LTE: { __type: "Int" },
    size_GT: { __type: "Int" },
    size_GTE: { __type: "Int" },
    mimetype: { __type: "String" },
    mimetype_NOT: { __type: "String" },
    mimetype_IN: { __type: "[String]" },
    mimetype_NOT_IN: { __type: "[String]" },
    mimetype_CONTAINS: { __type: "String" },
    mimetype_NOT_CONTAINS: { __type: "String" },
    mimetype_STARTS_WITH: { __type: "String" },
    mimetype_NOT_STARTS_WITH: { __type: "String" },
    mimetype_ENDS_WITH: { __type: "String" },
    mimetype_NOT_ENDS_WITH: { __type: "String" },
    isFolder: { __type: "Boolean" },
    isFolder_NOT: { __type: "Boolean" },
    fs: { __type: "FileSystemWhere" },
    fs_NOT: { __type: "FileSystemWhere" },
    fsAggregate: { __type: "HiveFileFsAggregateInput" },
    parent: { __type: "HiveFileWhere" },
    parent_NOT: { __type: "HiveFileWhere" },
    parentAggregate: { __type: "HiveFileParentAggregateInput" },
    children: { __type: "HiveFileWhere" },
    children_NOT: { __type: "HiveFileWhere" },
    childrenAggregate: { __type: "HiveFileChildrenAggregateInput" },
    convertedFrom: { __type: "HiveFileWhere" },
    convertedFrom_NOT: { __type: "HiveFileWhere" },
    convertedFromAggregate: { __type: "HiveFileConvertedFromAggregateInput" },
    views: { __type: "HiveFileWhere" },
    views_NOT: { __type: "HiveFileWhere" },
    viewsAggregate: { __type: "HiveFileViewsAggregateInput" },
    fsConnection: { __type: "HiveFileFsConnectionWhere" },
    fsConnection_NOT: { __type: "HiveFileFsConnectionWhere" },
    parentConnection: { __type: "HiveFileParentConnectionWhere" },
    parentConnection_NOT: { __type: "HiveFileParentConnectionWhere" },
    childrenConnection: { __type: "HiveFileChildrenConnectionWhere" },
    childrenConnection_NOT: { __type: "HiveFileChildrenConnectionWhere" },
    convertedFromConnection: { __type: "HiveFileConvertedFromConnectionWhere" },
    convertedFromConnection_NOT: {
      __type: "HiveFileConvertedFromConnectionWhere",
    },
    viewsConnection: { __type: "HiveFileViewsConnectionWhere" },
    viewsConnection_NOT: { __type: "HiveFileViewsConnectionWhere" },
  },
  HiveIntegrationConnectOrCreateWhere: {
    node: { __type: "HiveIntegrationUniqueWhere!" },
  },
  HiveIntegrationConnectWhere: { node: { __type: "HiveIntegrationWhere!" } },
  HiveIntegrationCreateInput: {
    name: { __type: "String" },
    description: { __type: "String" },
  },
  HiveIntegrationInstanceAppliancesAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveIntegrationInstanceAppliancesAggregateInput!]" },
    OR: { __type: "[HiveIntegrationInstanceAppliancesAggregateInput!]" },
    node: {
      __type: "HiveIntegrationInstanceAppliancesNodeAggregationWhereInput",
    },
  },
  HiveIntegrationInstanceAppliancesConnectFieldInput: {
    where: { __type: "HiveApplianceConnectWhere" },
    connect: { __type: "[HiveApplianceConnectInput!]" },
  },
  HiveIntegrationInstanceAppliancesConnectionSort: {
    node: { __type: "HiveApplianceSort" },
  },
  HiveIntegrationInstanceAppliancesConnectionWhere: {
    AND: { __type: "[HiveIntegrationInstanceAppliancesConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationInstanceAppliancesConnectionWhere!]" },
    node: { __type: "HiveApplianceWhere" },
    node_NOT: { __type: "HiveApplianceWhere" },
  },
  HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput: {
    where: { __type: "HiveApplianceConnectOrCreateWhere!" },
    onCreate: {
      __type:
        "HiveIntegrationInstanceAppliancesConnectOrCreateFieldInputOnCreate!",
    },
  },
  HiveIntegrationInstanceAppliancesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveIntegrationInstanceAppliancesCreateFieldInput: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveIntegrationInstanceAppliancesDeleteFieldInput: {
    where: { __type: "HiveIntegrationInstanceAppliancesConnectionWhere" },
    delete: { __type: "HiveApplianceDeleteInput" },
  },
  HiveIntegrationInstanceAppliancesDisconnectFieldInput: {
    where: { __type: "HiveIntegrationInstanceAppliancesConnectionWhere" },
    disconnect: { __type: "HiveApplianceDisconnectInput" },
  },
  HiveIntegrationInstanceAppliancesFieldInput: {
    create: { __type: "[HiveIntegrationInstanceAppliancesCreateFieldInput!]" },
    connect: {
      __type: "[HiveIntegrationInstanceAppliancesConnectFieldInput!]",
    },
    connectOrCreate: {
      __type: "[HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput!]",
    },
  },
  HiveIntegrationInstanceAppliancesNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveIntegrationInstanceAppliancesNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveIntegrationInstanceAppliancesNodeAggregationWhereInput!]",
    },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    label_EQUAL: { __type: "String" },
    label_AVERAGE_EQUAL: { __type: "Float" },
    label_LONGEST_EQUAL: { __type: "Int" },
    label_SHORTEST_EQUAL: { __type: "Int" },
    label_GT: { __type: "Int" },
    label_AVERAGE_GT: { __type: "Float" },
    label_LONGEST_GT: { __type: "Int" },
    label_SHORTEST_GT: { __type: "Int" },
    label_GTE: { __type: "Int" },
    label_AVERAGE_GTE: { __type: "Float" },
    label_LONGEST_GTE: { __type: "Int" },
    label_SHORTEST_GTE: { __type: "Int" },
    label_LT: { __type: "Int" },
    label_AVERAGE_LT: { __type: "Float" },
    label_LONGEST_LT: { __type: "Int" },
    label_SHORTEST_LT: { __type: "Int" },
    label_LTE: { __type: "Int" },
    label_AVERAGE_LTE: { __type: "Float" },
    label_LONGEST_LTE: { __type: "Int" },
    label_SHORTEST_LTE: { __type: "Int" },
    description_EQUAL: { __type: "String" },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_GT: { __type: "Int" },
    description_AVERAGE_GT: { __type: "Float" },
    description_LONGEST_GT: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_LONGEST_GTE: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_AVERAGE_LT: { __type: "Float" },
    description_LONGEST_LT: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_LONGEST_LTE: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationInstanceAppliancesUpdateConnectionInput: {
    node: { __type: "HiveApplianceUpdateInput" },
  },
  HiveIntegrationInstanceAppliancesUpdateFieldInput: {
    where: { __type: "HiveIntegrationInstanceAppliancesConnectionWhere" },
    update: {
      __type: "HiveIntegrationInstanceAppliancesUpdateConnectionInput",
    },
    connect: {
      __type: "[HiveIntegrationInstanceAppliancesConnectFieldInput!]",
    },
    disconnect: {
      __type: "[HiveIntegrationInstanceAppliancesDisconnectFieldInput!]",
    },
    create: { __type: "[HiveIntegrationInstanceAppliancesCreateFieldInput!]" },
    delete: { __type: "[HiveIntegrationInstanceAppliancesDeleteFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput!]",
    },
  },
  HiveIntegrationInstanceConnectInput: {
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsConnectFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationConnectFieldInput",
    },
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesConnectFieldInput!]",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationConnectFieldInput",
    },
  },
  HiveIntegrationInstanceConnectionsAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveIntegrationInstanceConnectionsAggregateInput!]" },
    OR: { __type: "[HiveIntegrationInstanceConnectionsAggregateInput!]" },
    node: {
      __type: "HiveIntegrationInstanceConnectionsNodeAggregationWhereInput",
    },
  },
  HiveIntegrationInstanceConnectionsConnectFieldInput: {
    where: { __type: "HiveIntegrationPathConnectWhere" },
    connect: { __type: "[HiveIntegrationPathConnectInput!]" },
  },
  HiveIntegrationInstanceConnectionsConnectionSort: {
    node: { __type: "HiveIntegrationPathSort" },
  },
  HiveIntegrationInstanceConnectionsConnectionWhere: {
    AND: { __type: "[HiveIntegrationInstanceConnectionsConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationInstanceConnectionsConnectionWhere!]" },
    node: { __type: "HiveIntegrationPathWhere" },
    node_NOT: { __type: "HiveIntegrationPathWhere" },
  },
  HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput: {
    where: { __type: "HiveIntegrationPathConnectOrCreateWhere!" },
    onCreate: {
      __type:
        "HiveIntegrationInstanceConnectionsConnectOrCreateFieldInputOnCreate!",
    },
  },
  HiveIntegrationInstanceConnectionsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveIntegrationPathCreateInput!" },
  },
  HiveIntegrationInstanceConnectionsCreateFieldInput: {
    node: { __type: "HiveIntegrationPathCreateInput!" },
  },
  HiveIntegrationInstanceConnectionsDeleteFieldInput: {
    where: { __type: "HiveIntegrationInstanceConnectionsConnectionWhere" },
    delete: { __type: "HiveIntegrationPathDeleteInput" },
  },
  HiveIntegrationInstanceConnectionsDisconnectFieldInput: {
    where: { __type: "HiveIntegrationInstanceConnectionsConnectionWhere" },
    disconnect: { __type: "HiveIntegrationPathDisconnectInput" },
  },
  HiveIntegrationInstanceConnectionsFieldInput: {
    create: { __type: "[HiveIntegrationInstanceConnectionsCreateFieldInput!]" },
    connect: {
      __type: "[HiveIntegrationInstanceConnectionsConnectFieldInput!]",
    },
    connectOrCreate: {
      __type: "[HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput!]",
    },
  },
  HiveIntegrationInstanceConnectionsNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveIntegrationInstanceConnectionsNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveIntegrationInstanceConnectionsNodeAggregationWhereInput!]",
    },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    type_EQUAL: { __type: "String" },
    type_AVERAGE_EQUAL: { __type: "Float" },
    type_LONGEST_EQUAL: { __type: "Int" },
    type_SHORTEST_EQUAL: { __type: "Int" },
    type_GT: { __type: "Int" },
    type_AVERAGE_GT: { __type: "Float" },
    type_LONGEST_GT: { __type: "Int" },
    type_SHORTEST_GT: { __type: "Int" },
    type_GTE: { __type: "Int" },
    type_AVERAGE_GTE: { __type: "Float" },
    type_LONGEST_GTE: { __type: "Int" },
    type_SHORTEST_GTE: { __type: "Int" },
    type_LT: { __type: "Int" },
    type_AVERAGE_LT: { __type: "Float" },
    type_LONGEST_LT: { __type: "Int" },
    type_SHORTEST_LT: { __type: "Int" },
    type_LTE: { __type: "Int" },
    type_AVERAGE_LTE: { __type: "Float" },
    type_LONGEST_LTE: { __type: "Int" },
    type_SHORTEST_LTE: { __type: "Int" },
    connectionBlob_EQUAL: { __type: "String" },
    connectionBlob_AVERAGE_EQUAL: { __type: "Float" },
    connectionBlob_LONGEST_EQUAL: { __type: "Int" },
    connectionBlob_SHORTEST_EQUAL: { __type: "Int" },
    connectionBlob_GT: { __type: "Int" },
    connectionBlob_AVERAGE_GT: { __type: "Float" },
    connectionBlob_LONGEST_GT: { __type: "Int" },
    connectionBlob_SHORTEST_GT: { __type: "Int" },
    connectionBlob_GTE: { __type: "Int" },
    connectionBlob_AVERAGE_GTE: { __type: "Float" },
    connectionBlob_LONGEST_GTE: { __type: "Int" },
    connectionBlob_SHORTEST_GTE: { __type: "Int" },
    connectionBlob_LT: { __type: "Int" },
    connectionBlob_AVERAGE_LT: { __type: "Float" },
    connectionBlob_LONGEST_LT: { __type: "Int" },
    connectionBlob_SHORTEST_LT: { __type: "Int" },
    connectionBlob_LTE: { __type: "Int" },
    connectionBlob_AVERAGE_LTE: { __type: "Float" },
    connectionBlob_LONGEST_LTE: { __type: "Int" },
    connectionBlob_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationInstanceConnectionsUpdateConnectionInput: {
    node: { __type: "HiveIntegrationPathUpdateInput" },
  },
  HiveIntegrationInstanceConnectionsUpdateFieldInput: {
    where: { __type: "HiveIntegrationInstanceConnectionsConnectionWhere" },
    update: {
      __type: "HiveIntegrationInstanceConnectionsUpdateConnectionInput",
    },
    connect: {
      __type: "[HiveIntegrationInstanceConnectionsConnectFieldInput!]",
    },
    disconnect: {
      __type: "[HiveIntegrationInstanceConnectionsDisconnectFieldInput!]",
    },
    create: { __type: "[HiveIntegrationInstanceConnectionsCreateFieldInput!]" },
    delete: { __type: "[HiveIntegrationInstanceConnectionsDeleteFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput!]",
    },
  },
  HiveIntegrationInstanceConnectOrCreateInput: {
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsConnectOrCreateFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput",
    },
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesConnectOrCreateFieldInput!]",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput",
    },
  },
  HiveIntegrationInstanceConnectOrCreateWhere: {
    node: { __type: "HiveIntegrationInstanceUniqueWhere!" },
  },
  HiveIntegrationInstanceConnectWhere: {
    node: { __type: "HiveIntegrationInstanceWhere!" },
  },
  HiveIntegrationInstanceCreateInput: {
    name: { __type: "String" },
    isRunning: { __type: "Boolean" },
    config: { __type: "String" },
    connections: { __type: "HiveIntegrationInstanceConnectionsFieldInput" },
    integration: { __type: "HiveIntegrationInstanceIntegrationFieldInput" },
    appliances: { __type: "HiveIntegrationInstanceAppliancesFieldInput" },
    organisation: { __type: "HiveIntegrationInstanceOrganisationFieldInput" },
  },
  HiveIntegrationInstanceDeleteInput: {
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsDeleteFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationDeleteFieldInput",
    },
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesDeleteFieldInput!]",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationDeleteFieldInput",
    },
  },
  HiveIntegrationInstanceDisconnectInput: {
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsDisconnectFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationDisconnectFieldInput",
    },
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesDisconnectFieldInput!]",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationDisconnectFieldInput",
    },
  },
  HiveIntegrationInstanceIntegrationAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveIntegrationInstanceIntegrationAggregateInput!]" },
    OR: { __type: "[HiveIntegrationInstanceIntegrationAggregateInput!]" },
    node: {
      __type: "HiveIntegrationInstanceIntegrationNodeAggregationWhereInput",
    },
  },
  HiveIntegrationInstanceIntegrationConnectFieldInput: {
    where: { __type: "HiveIntegrationConnectWhere" },
  },
  HiveIntegrationInstanceIntegrationConnectionSort: {
    node: { __type: "HiveIntegrationSort" },
  },
  HiveIntegrationInstanceIntegrationConnectionWhere: {
    AND: { __type: "[HiveIntegrationInstanceIntegrationConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationInstanceIntegrationConnectionWhere!]" },
    node: { __type: "HiveIntegrationWhere" },
    node_NOT: { __type: "HiveIntegrationWhere" },
  },
  HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput: {
    where: { __type: "HiveIntegrationConnectOrCreateWhere!" },
    onCreate: {
      __type:
        "HiveIntegrationInstanceIntegrationConnectOrCreateFieldInputOnCreate!",
    },
  },
  HiveIntegrationInstanceIntegrationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveIntegrationCreateInput!" },
  },
  HiveIntegrationInstanceIntegrationCreateFieldInput: {
    node: { __type: "HiveIntegrationCreateInput!" },
  },
  HiveIntegrationInstanceIntegrationDeleteFieldInput: {
    where: { __type: "HiveIntegrationInstanceIntegrationConnectionWhere" },
  },
  HiveIntegrationInstanceIntegrationDisconnectFieldInput: {
    where: { __type: "HiveIntegrationInstanceIntegrationConnectionWhere" },
  },
  HiveIntegrationInstanceIntegrationFieldInput: {
    create: { __type: "HiveIntegrationInstanceIntegrationCreateFieldInput" },
    connect: { __type: "HiveIntegrationInstanceIntegrationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput",
    },
  },
  HiveIntegrationInstanceIntegrationNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveIntegrationInstanceIntegrationNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveIntegrationInstanceIntegrationNodeAggregationWhereInput!]",
    },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    description_EQUAL: { __type: "String" },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_GT: { __type: "Int" },
    description_AVERAGE_GT: { __type: "Float" },
    description_LONGEST_GT: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_LONGEST_GTE: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_AVERAGE_LT: { __type: "Float" },
    description_LONGEST_LT: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_LONGEST_LTE: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationInstanceIntegrationUpdateConnectionInput: {
    node: { __type: "HiveIntegrationUpdateInput" },
  },
  HiveIntegrationInstanceIntegrationUpdateFieldInput: {
    where: { __type: "HiveIntegrationInstanceIntegrationConnectionWhere" },
    update: {
      __type: "HiveIntegrationInstanceIntegrationUpdateConnectionInput",
    },
    connect: { __type: "HiveIntegrationInstanceIntegrationConnectFieldInput" },
    disconnect: {
      __type: "HiveIntegrationInstanceIntegrationDisconnectFieldInput",
    },
    create: { __type: "HiveIntegrationInstanceIntegrationCreateFieldInput" },
    delete: { __type: "HiveIntegrationInstanceIntegrationDeleteFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationInstanceIntegrationConnectOrCreateFieldInput",
    },
  },
  HiveIntegrationInstanceOptions: {
    sort: { __type: "[HiveIntegrationInstanceSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  HiveIntegrationInstanceOrganisationAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveIntegrationInstanceOrganisationAggregateInput!]" },
    OR: { __type: "[HiveIntegrationInstanceOrganisationAggregateInput!]" },
    node: {
      __type: "HiveIntegrationInstanceOrganisationNodeAggregationWhereInput",
    },
  },
  HiveIntegrationInstanceOrganisationConnectFieldInput: {
    where: { __type: "HiveOrganisationConnectWhere" },
    connect: { __type: "HiveOrganisationConnectInput" },
  },
  HiveIntegrationInstanceOrganisationConnectionSort: {
    node: { __type: "HiveOrganisationSort" },
  },
  HiveIntegrationInstanceOrganisationConnectionWhere: {
    AND: { __type: "[HiveIntegrationInstanceOrganisationConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationInstanceOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput: {
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
    onCreate: {
      __type:
        "HiveIntegrationInstanceOrganisationConnectOrCreateFieldInputOnCreate!",
    },
  },
  HiveIntegrationInstanceOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  HiveIntegrationInstanceOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  HiveIntegrationInstanceOrganisationDeleteFieldInput: {
    where: { __type: "HiveIntegrationInstanceOrganisationConnectionWhere" },
    delete: { __type: "HiveOrganisationDeleteInput" },
  },
  HiveIntegrationInstanceOrganisationDisconnectFieldInput: {
    where: { __type: "HiveIntegrationInstanceOrganisationConnectionWhere" },
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
  },
  HiveIntegrationInstanceOrganisationFieldInput: {
    create: { __type: "HiveIntegrationInstanceOrganisationCreateFieldInput" },
    connect: { __type: "HiveIntegrationInstanceOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput",
    },
  },
  HiveIntegrationInstanceOrganisationNodeAggregationWhereInput: {
    AND: {
      __type: "[HiveIntegrationInstanceOrganisationNodeAggregationWhereInput!]",
    },
    OR: {
      __type: "[HiveIntegrationInstanceOrganisationNodeAggregationWhereInput!]",
    },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationInstanceOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  HiveIntegrationInstanceOrganisationUpdateFieldInput: {
    where: { __type: "HiveIntegrationInstanceOrganisationConnectionWhere" },
    update: {
      __type: "HiveIntegrationInstanceOrganisationUpdateConnectionInput",
    },
    connect: { __type: "HiveIntegrationInstanceOrganisationConnectFieldInput" },
    disconnect: {
      __type: "HiveIntegrationInstanceOrganisationDisconnectFieldInput",
    },
    create: { __type: "HiveIntegrationInstanceOrganisationCreateFieldInput" },
    delete: { __type: "HiveIntegrationInstanceOrganisationDeleteFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationInstanceOrganisationConnectOrCreateFieldInput",
    },
  },
  HiveIntegrationInstanceRelationInput: {
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsCreateFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationCreateFieldInput",
    },
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesCreateFieldInput!]",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationCreateFieldInput",
    },
  },
  HiveIntegrationInstanceSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    isRunning: { __type: "SortDirection" },
    config: { __type: "SortDirection" },
  },
  HiveIntegrationInstanceUniqueWhere: { id: { __type: "ID" } },
  HiveIntegrationInstanceUpdateInput: {
    name: { __type: "String" },
    config: { __type: "String" },
    connections: {
      __type: "[HiveIntegrationInstanceConnectionsUpdateFieldInput!]",
    },
    integration: {
      __type: "HiveIntegrationInstanceIntegrationUpdateFieldInput",
    },
    appliances: {
      __type: "[HiveIntegrationInstanceAppliancesUpdateFieldInput!]",
    },
    organisation: {
      __type: "HiveIntegrationInstanceOrganisationUpdateFieldInput",
    },
  },
  HiveIntegrationInstanceWhere: {
    OR: { __type: "[HiveIntegrationInstanceWhere!]" },
    AND: { __type: "[HiveIntegrationInstanceWhere!]" },
    id: { __type: "ID" },
    id_NOT: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT_IN: { __type: "[ID]" },
    id_CONTAINS: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_NOT: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT_IN: { __type: "[String]" },
    name_CONTAINS: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    isRunning: { __type: "Boolean" },
    isRunning_NOT: { __type: "Boolean" },
    config: { __type: "String" },
    config_NOT: { __type: "String" },
    config_IN: { __type: "[String]" },
    config_NOT_IN: { __type: "[String]" },
    config_CONTAINS: { __type: "String" },
    config_NOT_CONTAINS: { __type: "String" },
    config_STARTS_WITH: { __type: "String" },
    config_NOT_STARTS_WITH: { __type: "String" },
    config_ENDS_WITH: { __type: "String" },
    config_NOT_ENDS_WITH: { __type: "String" },
    connections: { __type: "HiveIntegrationPathWhere" },
    connections_NOT: { __type: "HiveIntegrationPathWhere" },
    connectionsAggregate: {
      __type: "HiveIntegrationInstanceConnectionsAggregateInput",
    },
    integration: { __type: "HiveIntegrationWhere" },
    integration_NOT: { __type: "HiveIntegrationWhere" },
    integrationAggregate: {
      __type: "HiveIntegrationInstanceIntegrationAggregateInput",
    },
    appliances: { __type: "HiveApplianceWhere" },
    appliances_NOT: { __type: "HiveApplianceWhere" },
    appliancesAggregate: {
      __type: "HiveIntegrationInstanceAppliancesAggregateInput",
    },
    organisation: { __type: "HiveOrganisationWhere" },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
    organisationAggregate: {
      __type: "HiveIntegrationInstanceOrganisationAggregateInput",
    },
    connectionsConnection: {
      __type: "HiveIntegrationInstanceConnectionsConnectionWhere",
    },
    connectionsConnection_NOT: {
      __type: "HiveIntegrationInstanceConnectionsConnectionWhere",
    },
    integrationConnection: {
      __type: "HiveIntegrationInstanceIntegrationConnectionWhere",
    },
    integrationConnection_NOT: {
      __type: "HiveIntegrationInstanceIntegrationConnectionWhere",
    },
    appliancesConnection: {
      __type: "HiveIntegrationInstanceAppliancesConnectionWhere",
    },
    appliancesConnection_NOT: {
      __type: "HiveIntegrationInstanceAppliancesConnectionWhere",
    },
    organisationConnection: {
      __type: "HiveIntegrationInstanceOrganisationConnectionWhere",
    },
    organisationConnection_NOT: {
      __type: "HiveIntegrationInstanceOrganisationConnectionWhere",
    },
  },
  HiveIntegrationOptions: {
    sort: { __type: "[HiveIntegrationSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  HiveIntegrationPathCollectionCreateInput: { name: { __type: "String" } },
  HiveIntegrationPathCollectionOptions: {
    sort: { __type: "[HiveIntegrationPathCollectionSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  HiveIntegrationPathCollectionSort: { name: { __type: "SortDirection" } },
  HiveIntegrationPathCollectionUpdateInput: { name: { __type: "String" } },
  HiveIntegrationPathCollectionWhere: {
    OR: { __type: "[HiveIntegrationPathCollectionWhere!]" },
    AND: { __type: "[HiveIntegrationPathCollectionWhere!]" },
    name: { __type: "String" },
    name_NOT: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT_IN: { __type: "[String]" },
    name_CONTAINS: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
  },
  HiveIntegrationPathConnectInput: {
    instance: { __type: "HiveIntegrationPathInstanceConnectFieldInput" },
  },
  HiveIntegrationPathConnectOrCreateInput: {
    instance: {
      __type: "HiveIntegrationPathInstanceConnectOrCreateFieldInput",
    },
  },
  HiveIntegrationPathConnectOrCreateWhere: {
    node: { __type: "HiveIntegrationPathUniqueWhere!" },
  },
  HiveIntegrationPathConnectWhere: {
    node: { __type: "HiveIntegrationPathWhere!" },
  },
  HiveIntegrationPathCreateInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    connectionBlob: { __type: "String" },
    instance: { __type: "HiveIntegrationPathInstanceFieldInput" },
  },
  HiveIntegrationPathDeleteInput: {
    instance: { __type: "HiveIntegrationPathInstanceDeleteFieldInput" },
  },
  HiveIntegrationPathDisconnectInput: {
    instance: { __type: "HiveIntegrationPathInstanceDisconnectFieldInput" },
  },
  HiveIntegrationPathInstanceAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveIntegrationPathInstanceAggregateInput!]" },
    OR: { __type: "[HiveIntegrationPathInstanceAggregateInput!]" },
    node: { __type: "HiveIntegrationPathInstanceNodeAggregationWhereInput" },
  },
  HiveIntegrationPathInstanceConnectFieldInput: {
    where: { __type: "HiveIntegrationInstanceConnectWhere" },
    connect: { __type: "HiveIntegrationInstanceConnectInput" },
  },
  HiveIntegrationPathInstanceConnectionSort: {
    node: { __type: "HiveIntegrationInstanceSort" },
  },
  HiveIntegrationPathInstanceConnectionWhere: {
    AND: { __type: "[HiveIntegrationPathInstanceConnectionWhere!]" },
    OR: { __type: "[HiveIntegrationPathInstanceConnectionWhere!]" },
    node: { __type: "HiveIntegrationInstanceWhere" },
    node_NOT: { __type: "HiveIntegrationInstanceWhere" },
  },
  HiveIntegrationPathInstanceConnectOrCreateFieldInput: {
    where: { __type: "HiveIntegrationInstanceConnectOrCreateWhere!" },
    onCreate: {
      __type: "HiveIntegrationPathInstanceConnectOrCreateFieldInputOnCreate!",
    },
  },
  HiveIntegrationPathInstanceConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveIntegrationInstanceCreateInput!" },
  },
  HiveIntegrationPathInstanceCreateFieldInput: {
    node: { __type: "HiveIntegrationInstanceCreateInput!" },
  },
  HiveIntegrationPathInstanceDeleteFieldInput: {
    where: { __type: "HiveIntegrationPathInstanceConnectionWhere" },
    delete: { __type: "HiveIntegrationInstanceDeleteInput" },
  },
  HiveIntegrationPathInstanceDisconnectFieldInput: {
    where: { __type: "HiveIntegrationPathInstanceConnectionWhere" },
    disconnect: { __type: "HiveIntegrationInstanceDisconnectInput" },
  },
  HiveIntegrationPathInstanceFieldInput: {
    create: { __type: "HiveIntegrationPathInstanceCreateFieldInput" },
    connect: { __type: "HiveIntegrationPathInstanceConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationPathInstanceConnectOrCreateFieldInput",
    },
  },
  HiveIntegrationPathInstanceNodeAggregationWhereInput: {
    AND: { __type: "[HiveIntegrationPathInstanceNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveIntegrationPathInstanceNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    config_EQUAL: { __type: "String" },
    config_AVERAGE_EQUAL: { __type: "Float" },
    config_LONGEST_EQUAL: { __type: "Int" },
    config_SHORTEST_EQUAL: { __type: "Int" },
    config_GT: { __type: "Int" },
    config_AVERAGE_GT: { __type: "Float" },
    config_LONGEST_GT: { __type: "Int" },
    config_SHORTEST_GT: { __type: "Int" },
    config_GTE: { __type: "Int" },
    config_AVERAGE_GTE: { __type: "Float" },
    config_LONGEST_GTE: { __type: "Int" },
    config_SHORTEST_GTE: { __type: "Int" },
    config_LT: { __type: "Int" },
    config_AVERAGE_LT: { __type: "Float" },
    config_LONGEST_LT: { __type: "Int" },
    config_SHORTEST_LT: { __type: "Int" },
    config_LTE: { __type: "Int" },
    config_AVERAGE_LTE: { __type: "Float" },
    config_LONGEST_LTE: { __type: "Int" },
    config_SHORTEST_LTE: { __type: "Int" },
  },
  HiveIntegrationPathInstanceUpdateConnectionInput: {
    node: { __type: "HiveIntegrationInstanceUpdateInput" },
  },
  HiveIntegrationPathInstanceUpdateFieldInput: {
    where: { __type: "HiveIntegrationPathInstanceConnectionWhere" },
    update: { __type: "HiveIntegrationPathInstanceUpdateConnectionInput" },
    connect: { __type: "HiveIntegrationPathInstanceConnectFieldInput" },
    disconnect: { __type: "HiveIntegrationPathInstanceDisconnectFieldInput" },
    create: { __type: "HiveIntegrationPathInstanceCreateFieldInput" },
    delete: { __type: "HiveIntegrationPathInstanceDeleteFieldInput" },
    connectOrCreate: {
      __type: "HiveIntegrationPathInstanceConnectOrCreateFieldInput",
    },
  },
  HiveIntegrationPathOptions: {
    sort: { __type: "[HiveIntegrationPathSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  HiveIntegrationPathRelationInput: {
    instance: { __type: "HiveIntegrationPathInstanceCreateFieldInput" },
  },
  HiveIntegrationPathSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    type: { __type: "SortDirection" },
    connectionBlob: { __type: "SortDirection" },
  },
  HiveIntegrationPathUniqueWhere: { id: { __type: "ID" } },
  HiveIntegrationPathUpdateInput: {
    name: { __type: "String" },
    type: { __type: "String" },
    connectionBlob: { __type: "String" },
    instance: { __type: "HiveIntegrationPathInstanceUpdateFieldInput" },
  },
  HiveIntegrationPathWhere: {
    OR: { __type: "[HiveIntegrationPathWhere!]" },
    AND: { __type: "[HiveIntegrationPathWhere!]" },
    id: { __type: "ID" },
    id_NOT: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT_IN: { __type: "[ID]" },
    id_CONTAINS: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_NOT: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT_IN: { __type: "[String]" },
    name_CONTAINS: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    type: { __type: "String" },
    type_NOT: { __type: "String" },
    type_IN: { __type: "[String]" },
    type_NOT_IN: { __type: "[String]" },
    type_CONTAINS: { __type: "String" },
    type_NOT_CONTAINS: { __type: "String" },
    type_STARTS_WITH: { __type: "String" },
    type_NOT_STARTS_WITH: { __type: "String" },
    type_ENDS_WITH: { __type: "String" },
    type_NOT_ENDS_WITH: { __type: "String" },
    connectionBlob: { __type: "String" },
    connectionBlob_NOT: { __type: "String" },
    connectionBlob_IN: { __type: "[String]" },
    connectionBlob_NOT_IN: { __type: "[String]" },
    connectionBlob_CONTAINS: { __type: "String" },
    connectionBlob_NOT_CONTAINS: { __type: "String" },
    connectionBlob_STARTS_WITH: { __type: "String" },
    connectionBlob_NOT_STARTS_WITH: { __type: "String" },
    connectionBlob_ENDS_WITH: { __type: "String" },
    connectionBlob_NOT_ENDS_WITH: { __type: "String" },
    instance: { __type: "HiveIntegrationInstanceWhere" },
    instance_NOT: { __type: "HiveIntegrationInstanceWhere" },
    instanceAggregate: { __type: "HiveIntegrationPathInstanceAggregateInput" },
    instanceConnection: {
      __type: "HiveIntegrationPathInstanceConnectionWhere",
    },
    instanceConnection_NOT: {
      __type: "HiveIntegrationPathInstanceConnectionWhere",
    },
  },
  HiveIntegrationSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    description: { __type: "SortDirection" },
  },
  HiveIntegrationUniqueWhere: { id: { __type: "ID" } },
  HiveIntegrationUpdateInput: {
    name: { __type: "String" },
    description: { __type: "String" },
  },
  HiveIntegrationWhere: {
    OR: { __type: "[HiveIntegrationWhere!]" },
    AND: { __type: "[HiveIntegrationWhere!]" },
    id: { __type: "ID" },
    id_NOT: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT_IN: { __type: "[ID]" },
    id_CONTAINS: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_NOT: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT_IN: { __type: "[String]" },
    name_CONTAINS: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    description: { __type: "String" },
    description_NOT: { __type: "String" },
    description_IN: { __type: "[String]" },
    description_NOT_IN: { __type: "[String]" },
    description_CONTAINS: { __type: "String" },
    description_NOT_CONTAINS: { __type: "String" },
    description_STARTS_WITH: { __type: "String" },
    description_NOT_STARTS_WITH: { __type: "String" },
    description_ENDS_WITH: { __type: "String" },
    description_NOT_ENDS_WITH: { __type: "String" },
  },
  HiveOrganisationAppliancesAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveOrganisationAppliancesAggregateInput!]" },
    OR: { __type: "[HiveOrganisationAppliancesAggregateInput!]" },
    node: { __type: "HiveOrganisationAppliancesNodeAggregationWhereInput" },
  },
  HiveOrganisationAppliancesConnectFieldInput: {
    where: { __type: "HiveApplianceConnectWhere" },
    connect: { __type: "[HiveApplianceConnectInput!]" },
  },
  HiveOrganisationAppliancesConnectionSort: {
    node: { __type: "HiveApplianceSort" },
  },
  HiveOrganisationAppliancesConnectionWhere: {
    AND: { __type: "[HiveOrganisationAppliancesConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationAppliancesConnectionWhere!]" },
    node: { __type: "HiveApplianceWhere" },
    node_NOT: { __type: "HiveApplianceWhere" },
  },
  HiveOrganisationAppliancesConnectOrCreateFieldInput: {
    where: { __type: "HiveApplianceConnectOrCreateWhere!" },
    onCreate: {
      __type: "HiveOrganisationAppliancesConnectOrCreateFieldInputOnCreate!",
    },
  },
  HiveOrganisationAppliancesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveOrganisationAppliancesCreateFieldInput: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveOrganisationAppliancesDeleteFieldInput: {
    where: { __type: "HiveOrganisationAppliancesConnectionWhere" },
    delete: { __type: "HiveApplianceDeleteInput" },
  },
  HiveOrganisationAppliancesDisconnectFieldInput: {
    where: { __type: "HiveOrganisationAppliancesConnectionWhere" },
    disconnect: { __type: "HiveApplianceDisconnectInput" },
  },
  HiveOrganisationAppliancesFieldInput: {
    create: { __type: "[HiveOrganisationAppliancesCreateFieldInput!]" },
    connect: { __type: "[HiveOrganisationAppliancesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationAppliancesConnectOrCreateFieldInput!]",
    },
  },
  HiveOrganisationAppliancesNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationAppliancesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationAppliancesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    label_EQUAL: { __type: "String" },
    label_AVERAGE_EQUAL: { __type: "Float" },
    label_LONGEST_EQUAL: { __type: "Int" },
    label_SHORTEST_EQUAL: { __type: "Int" },
    label_GT: { __type: "Int" },
    label_AVERAGE_GT: { __type: "Float" },
    label_LONGEST_GT: { __type: "Int" },
    label_SHORTEST_GT: { __type: "Int" },
    label_GTE: { __type: "Int" },
    label_AVERAGE_GTE: { __type: "Float" },
    label_LONGEST_GTE: { __type: "Int" },
    label_SHORTEST_GTE: { __type: "Int" },
    label_LT: { __type: "Int" },
    label_AVERAGE_LT: { __type: "Float" },
    label_LONGEST_LT: { __type: "Int" },
    label_SHORTEST_LT: { __type: "Int" },
    label_LTE: { __type: "Int" },
    label_AVERAGE_LTE: { __type: "Float" },
    label_LONGEST_LTE: { __type: "Int" },
    label_SHORTEST_LTE: { __type: "Int" },
    description_EQUAL: { __type: "String" },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_GT: { __type: "Int" },
    description_AVERAGE_GT: { __type: "Float" },
    description_LONGEST_GT: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_LONGEST_GTE: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_AVERAGE_LT: { __type: "Float" },
    description_LONGEST_LT: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_LONGEST_LTE: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationAppliancesUpdateConnectionInput: {
    node: { __type: "HiveApplianceUpdateInput" },
  },
  HiveOrganisationAppliancesUpdateFieldInput: {
    where: { __type: "HiveOrganisationAppliancesConnectionWhere" },
    update: { __type: "HiveOrganisationAppliancesUpdateConnectionInput" },
    connect: { __type: "[HiveOrganisationAppliancesConnectFieldInput!]" },
    disconnect: { __type: "[HiveOrganisationAppliancesDisconnectFieldInput!]" },
    create: { __type: "[HiveOrganisationAppliancesCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationAppliancesDeleteFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationAppliancesConnectOrCreateFieldInput!]",
    },
  },
  HiveOrganisationConnectInput: {
    roles: { __type: "[HiveOrganisationRolesConnectFieldInput!]" },
    members: { __type: "[HiveOrganisationMembersConnectFieldInput!]" },
    appliances: { __type: "[HiveOrganisationAppliancesConnectFieldInput!]" },
    integrations: {
      __type: "[HiveOrganisationIntegrationsConnectFieldInput!]",
    },
  },
  HiveOrganisationConnectOrCreateInput: {
    roles: { __type: "[HiveOrganisationRolesConnectOrCreateFieldInput!]" },
    members: { __type: "[HiveOrganisationMembersConnectOrCreateFieldInput!]" },
    appliances: {
      __type: "[HiveOrganisationAppliancesConnectOrCreateFieldInput!]",
    },
    integrations: {
      __type: "[HiveOrganisationIntegrationsConnectOrCreateFieldInput!]",
    },
  },
  HiveOrganisationConnectOrCreateWhere: {
    node: { __type: "HiveOrganisationUniqueWhere!" },
  },
  HiveOrganisationConnectWhere: { node: { __type: "HiveOrganisationWhere!" } },
  HiveOrganisationCreateInput: {
    name: { __type: "String" },
    roles: { __type: "HiveOrganisationRolesFieldInput" },
    members: { __type: "HiveOrganisationMembersFieldInput" },
    appliances: { __type: "HiveOrganisationAppliancesFieldInput" },
    integrations: { __type: "HiveOrganisationIntegrationsFieldInput" },
  },
  HiveOrganisationDeleteInput: {
    roles: { __type: "[HiveOrganisationRolesDeleteFieldInput!]" },
    members: { __type: "[HiveOrganisationMembersDeleteFieldInput!]" },
    appliances: { __type: "[HiveOrganisationAppliancesDeleteFieldInput!]" },
    integrations: { __type: "[HiveOrganisationIntegrationsDeleteFieldInput!]" },
  },
  HiveOrganisationDisconnectInput: {
    roles: { __type: "[HiveOrganisationRolesDisconnectFieldInput!]" },
    members: { __type: "[HiveOrganisationMembersDisconnectFieldInput!]" },
    appliances: { __type: "[HiveOrganisationAppliancesDisconnectFieldInput!]" },
    integrations: {
      __type: "[HiveOrganisationIntegrationsDisconnectFieldInput!]",
    },
  },
  HiveOrganisationIntegrationsAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveOrganisationIntegrationsAggregateInput!]" },
    OR: { __type: "[HiveOrganisationIntegrationsAggregateInput!]" },
    node: { __type: "HiveOrganisationIntegrationsNodeAggregationWhereInput" },
  },
  HiveOrganisationIntegrationsConnectFieldInput: {
    where: { __type: "HiveIntegrationInstanceConnectWhere" },
    connect: { __type: "[HiveIntegrationInstanceConnectInput!]" },
  },
  HiveOrganisationIntegrationsConnectionSort: {
    node: { __type: "HiveIntegrationInstanceSort" },
  },
  HiveOrganisationIntegrationsConnectionWhere: {
    AND: { __type: "[HiveOrganisationIntegrationsConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationIntegrationsConnectionWhere!]" },
    node: { __type: "HiveIntegrationInstanceWhere" },
    node_NOT: { __type: "HiveIntegrationInstanceWhere" },
  },
  HiveOrganisationIntegrationsConnectOrCreateFieldInput: {
    where: { __type: "HiveIntegrationInstanceConnectOrCreateWhere!" },
    onCreate: {
      __type: "HiveOrganisationIntegrationsConnectOrCreateFieldInputOnCreate!",
    },
  },
  HiveOrganisationIntegrationsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveIntegrationInstanceCreateInput!" },
  },
  HiveOrganisationIntegrationsCreateFieldInput: {
    node: { __type: "HiveIntegrationInstanceCreateInput!" },
  },
  HiveOrganisationIntegrationsDeleteFieldInput: {
    where: { __type: "HiveOrganisationIntegrationsConnectionWhere" },
    delete: { __type: "HiveIntegrationInstanceDeleteInput" },
  },
  HiveOrganisationIntegrationsDisconnectFieldInput: {
    where: { __type: "HiveOrganisationIntegrationsConnectionWhere" },
    disconnect: { __type: "HiveIntegrationInstanceDisconnectInput" },
  },
  HiveOrganisationIntegrationsFieldInput: {
    create: { __type: "[HiveOrganisationIntegrationsCreateFieldInput!]" },
    connect: { __type: "[HiveOrganisationIntegrationsConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationIntegrationsConnectOrCreateFieldInput!]",
    },
  },
  HiveOrganisationIntegrationsNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationIntegrationsNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationIntegrationsNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    config_EQUAL: { __type: "String" },
    config_AVERAGE_EQUAL: { __type: "Float" },
    config_LONGEST_EQUAL: { __type: "Int" },
    config_SHORTEST_EQUAL: { __type: "Int" },
    config_GT: { __type: "Int" },
    config_AVERAGE_GT: { __type: "Float" },
    config_LONGEST_GT: { __type: "Int" },
    config_SHORTEST_GT: { __type: "Int" },
    config_GTE: { __type: "Int" },
    config_AVERAGE_GTE: { __type: "Float" },
    config_LONGEST_GTE: { __type: "Int" },
    config_SHORTEST_GTE: { __type: "Int" },
    config_LT: { __type: "Int" },
    config_AVERAGE_LT: { __type: "Float" },
    config_LONGEST_LT: { __type: "Int" },
    config_SHORTEST_LT: { __type: "Int" },
    config_LTE: { __type: "Int" },
    config_AVERAGE_LTE: { __type: "Float" },
    config_LONGEST_LTE: { __type: "Int" },
    config_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationIntegrationsUpdateConnectionInput: {
    node: { __type: "HiveIntegrationInstanceUpdateInput" },
  },
  HiveOrganisationIntegrationsUpdateFieldInput: {
    where: { __type: "HiveOrganisationIntegrationsConnectionWhere" },
    update: { __type: "HiveOrganisationIntegrationsUpdateConnectionInput" },
    connect: { __type: "[HiveOrganisationIntegrationsConnectFieldInput!]" },
    disconnect: {
      __type: "[HiveOrganisationIntegrationsDisconnectFieldInput!]",
    },
    create: { __type: "[HiveOrganisationIntegrationsCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationIntegrationsDeleteFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationIntegrationsConnectOrCreateFieldInput!]",
    },
  },
  HiveOrganisationMembersAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveOrganisationMembersAggregateInput!]" },
    OR: { __type: "[HiveOrganisationMembersAggregateInput!]" },
    node: { __type: "HiveOrganisationMembersNodeAggregationWhereInput" },
  },
  HiveOrganisationMembersConnectFieldInput: {
    where: { __type: "HiveUserConnectWhere" },
    connect: { __type: "[HiveUserConnectInput!]" },
  },
  HiveOrganisationMembersConnectionSort: { node: { __type: "HiveUserSort" } },
  HiveOrganisationMembersConnectionWhere: {
    AND: { __type: "[HiveOrganisationMembersConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationMembersConnectionWhere!]" },
    node: { __type: "HiveUserWhere" },
    node_NOT: { __type: "HiveUserWhere" },
  },
  HiveOrganisationMembersConnectOrCreateFieldInput: {
    where: { __type: "HiveUserConnectOrCreateWhere!" },
    onCreate: {
      __type: "HiveOrganisationMembersConnectOrCreateFieldInputOnCreate!",
    },
  },
  HiveOrganisationMembersConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveUserCreateInput!" },
  },
  HiveOrganisationMembersCreateFieldInput: {
    node: { __type: "HiveUserCreateInput!" },
  },
  HiveOrganisationMembersDeleteFieldInput: {
    where: { __type: "HiveOrganisationMembersConnectionWhere" },
    delete: { __type: "HiveUserDeleteInput" },
  },
  HiveOrganisationMembersDisconnectFieldInput: {
    where: { __type: "HiveOrganisationMembersConnectionWhere" },
    disconnect: { __type: "HiveUserDisconnectInput" },
  },
  HiveOrganisationMembersFieldInput: {
    create: { __type: "[HiveOrganisationMembersCreateFieldInput!]" },
    connect: { __type: "[HiveOrganisationMembersConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationMembersConnectOrCreateFieldInput!]",
    },
  },
  HiveOrganisationMembersNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationMembersNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationMembersNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    username_EQUAL: { __type: "String" },
    username_AVERAGE_EQUAL: { __type: "Float" },
    username_LONGEST_EQUAL: { __type: "Int" },
    username_SHORTEST_EQUAL: { __type: "Int" },
    username_GT: { __type: "Int" },
    username_AVERAGE_GT: { __type: "Float" },
    username_LONGEST_GT: { __type: "Int" },
    username_SHORTEST_GT: { __type: "Int" },
    username_GTE: { __type: "Int" },
    username_AVERAGE_GTE: { __type: "Float" },
    username_LONGEST_GTE: { __type: "Int" },
    username_SHORTEST_GTE: { __type: "Int" },
    username_LT: { __type: "Int" },
    username_AVERAGE_LT: { __type: "Float" },
    username_LONGEST_LT: { __type: "Int" },
    username_SHORTEST_LT: { __type: "Int" },
    username_LTE: { __type: "Int" },
    username_AVERAGE_LTE: { __type: "Float" },
    username_LONGEST_LTE: { __type: "Int" },
    username_SHORTEST_LTE: { __type: "Int" },
    password_EQUAL: { __type: "String" },
    password_AVERAGE_EQUAL: { __type: "Float" },
    password_LONGEST_EQUAL: { __type: "Int" },
    password_SHORTEST_EQUAL: { __type: "Int" },
    password_GT: { __type: "Int" },
    password_AVERAGE_GT: { __type: "Float" },
    password_LONGEST_GT: { __type: "Int" },
    password_SHORTEST_GT: { __type: "Int" },
    password_GTE: { __type: "Int" },
    password_AVERAGE_GTE: { __type: "Float" },
    password_LONGEST_GTE: { __type: "Int" },
    password_SHORTEST_GTE: { __type: "Int" },
    password_LT: { __type: "Int" },
    password_AVERAGE_LT: { __type: "Float" },
    password_LONGEST_LT: { __type: "Int" },
    password_SHORTEST_LT: { __type: "Int" },
    password_LTE: { __type: "Int" },
    password_AVERAGE_LTE: { __type: "Float" },
    password_LONGEST_LTE: { __type: "Int" },
    password_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationMembersUpdateConnectionInput: {
    node: { __type: "HiveUserUpdateInput" },
  },
  HiveOrganisationMembersUpdateFieldInput: {
    where: { __type: "HiveOrganisationMembersConnectionWhere" },
    update: { __type: "HiveOrganisationMembersUpdateConnectionInput" },
    connect: { __type: "[HiveOrganisationMembersConnectFieldInput!]" },
    disconnect: { __type: "[HiveOrganisationMembersDisconnectFieldInput!]" },
    create: { __type: "[HiveOrganisationMembersCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationMembersDeleteFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationMembersConnectOrCreateFieldInput!]",
    },
  },
  HiveOrganisationOptions: {
    sort: { __type: "[HiveOrganisationSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  HiveOrganisationRelationInput: {
    roles: { __type: "[HiveOrganisationRolesCreateFieldInput!]" },
    members: { __type: "[HiveOrganisationMembersCreateFieldInput!]" },
    appliances: { __type: "[HiveOrganisationAppliancesCreateFieldInput!]" },
    integrations: { __type: "[HiveOrganisationIntegrationsCreateFieldInput!]" },
  },
  HiveOrganisationRolesAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveOrganisationRolesAggregateInput!]" },
    OR: { __type: "[HiveOrganisationRolesAggregateInput!]" },
    node: { __type: "HiveOrganisationRolesNodeAggregationWhereInput" },
  },
  HiveOrganisationRolesConnectFieldInput: {
    where: { __type: "RoleConnectWhere" },
    connect: { __type: "[RoleConnectInput!]" },
  },
  HiveOrganisationRolesConnectionSort: { node: { __type: "RoleSort" } },
  HiveOrganisationRolesConnectionWhere: {
    AND: { __type: "[HiveOrganisationRolesConnectionWhere!]" },
    OR: { __type: "[HiveOrganisationRolesConnectionWhere!]" },
    node: { __type: "RoleWhere" },
    node_NOT: { __type: "RoleWhere" },
  },
  HiveOrganisationRolesConnectOrCreateFieldInput: {
    where: { __type: "RoleConnectOrCreateWhere!" },
    onCreate: {
      __type: "HiveOrganisationRolesConnectOrCreateFieldInputOnCreate!",
    },
  },
  HiveOrganisationRolesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "RoleCreateInput!" },
  },
  HiveOrganisationRolesCreateFieldInput: {
    node: { __type: "RoleCreateInput!" },
  },
  HiveOrganisationRolesDeleteFieldInput: {
    where: { __type: "HiveOrganisationRolesConnectionWhere" },
    delete: { __type: "RoleDeleteInput" },
  },
  HiveOrganisationRolesDisconnectFieldInput: {
    where: { __type: "HiveOrganisationRolesConnectionWhere" },
    disconnect: { __type: "RoleDisconnectInput" },
  },
  HiveOrganisationRolesFieldInput: {
    create: { __type: "[HiveOrganisationRolesCreateFieldInput!]" },
    connect: { __type: "[HiveOrganisationRolesConnectFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationRolesConnectOrCreateFieldInput!]",
    },
  },
  HiveOrganisationRolesNodeAggregationWhereInput: {
    AND: { __type: "[HiveOrganisationRolesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveOrganisationRolesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveOrganisationRolesUpdateConnectionInput: {
    node: { __type: "RoleUpdateInput" },
  },
  HiveOrganisationRolesUpdateFieldInput: {
    where: { __type: "HiveOrganisationRolesConnectionWhere" },
    update: { __type: "HiveOrganisationRolesUpdateConnectionInput" },
    connect: { __type: "[HiveOrganisationRolesConnectFieldInput!]" },
    disconnect: { __type: "[HiveOrganisationRolesDisconnectFieldInput!]" },
    create: { __type: "[HiveOrganisationRolesCreateFieldInput!]" },
    delete: { __type: "[HiveOrganisationRolesDeleteFieldInput!]" },
    connectOrCreate: {
      __type: "[HiveOrganisationRolesConnectOrCreateFieldInput!]",
    },
  },
  HiveOrganisationSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveOrganisationUniqueWhere: { id: { __type: "ID" } },
  HiveOrganisationUpdateInput: {
    name: { __type: "String" },
    roles: { __type: "[HiveOrganisationRolesUpdateFieldInput!]" },
    members: { __type: "[HiveOrganisationMembersUpdateFieldInput!]" },
    appliances: { __type: "[HiveOrganisationAppliancesUpdateFieldInput!]" },
    integrations: { __type: "[HiveOrganisationIntegrationsUpdateFieldInput!]" },
  },
  HiveOrganisationWhere: {
    OR: { __type: "[HiveOrganisationWhere!]" },
    AND: { __type: "[HiveOrganisationWhere!]" },
    id: { __type: "ID" },
    id_NOT: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT_IN: { __type: "[ID]" },
    id_CONTAINS: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_NOT: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT_IN: { __type: "[String]" },
    name_CONTAINS: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    roles: { __type: "RoleWhere" },
    roles_NOT: { __type: "RoleWhere" },
    rolesAggregate: { __type: "HiveOrganisationRolesAggregateInput" },
    members: { __type: "HiveUserWhere" },
    members_NOT: { __type: "HiveUserWhere" },
    membersAggregate: { __type: "HiveOrganisationMembersAggregateInput" },
    appliances: { __type: "HiveApplianceWhere" },
    appliances_NOT: { __type: "HiveApplianceWhere" },
    appliancesAggregate: { __type: "HiveOrganisationAppliancesAggregateInput" },
    integrations: { __type: "HiveIntegrationInstanceWhere" },
    integrations_NOT: { __type: "HiveIntegrationInstanceWhere" },
    integrationsAggregate: {
      __type: "HiveOrganisationIntegrationsAggregateInput",
    },
    rolesConnection: { __type: "HiveOrganisationRolesConnectionWhere" },
    rolesConnection_NOT: { __type: "HiveOrganisationRolesConnectionWhere" },
    membersConnection: { __type: "HiveOrganisationMembersConnectionWhere" },
    membersConnection_NOT: { __type: "HiveOrganisationMembersConnectionWhere" },
    appliancesConnection: {
      __type: "HiveOrganisationAppliancesConnectionWhere",
    },
    appliancesConnection_NOT: {
      __type: "HiveOrganisationAppliancesConnectionWhere",
    },
    integrationsConnection: {
      __type: "HiveOrganisationIntegrationsConnectionWhere",
    },
    integrationsConnection_NOT: {
      __type: "HiveOrganisationIntegrationsConnectionWhere",
    },
  },
  HiveServiceConnectWhere: { node: { __type: "HiveServiceWhere!" } },
  HiveServiceCreateInput: { id: { __type: "ID!" }, name: { __type: "String" } },
  HiveServiceOptions: {
    sort: { __type: "[HiveServiceSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  HiveServiceSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveServiceUpdateInput: { id: { __type: "ID" }, name: { __type: "String" } },
  HiveServiceWhere: {
    OR: { __type: "[HiveServiceWhere!]" },
    AND: { __type: "[HiveServiceWhere!]" },
    id: { __type: "ID" },
    id_NOT: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT_IN: { __type: "[ID]" },
    id_CONTAINS: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_NOT: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT_IN: { __type: "[String]" },
    name_CONTAINS: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
  },
  HiveTypeConnectInput: {
    fields: { __type: "[HiveTypeFieldsConnectFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInConnectFieldInput!]" },
  },
  HiveTypeConnectOrCreateInput: {
    fields: { __type: "[HiveTypeFieldsConnectOrCreateFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInConnectOrCreateFieldInput!]" },
  },
  HiveTypeConnectOrCreateWhere: { node: { __type: "HiveTypeUniqueWhere!" } },
  HiveTypeConnectWhere: { node: { __type: "HiveTypeWhere!" } },
  HiveTypeCreateInput: {
    name: { __type: "String" },
    fields: { __type: "HiveTypeFieldsFieldInput" },
    usedIn: { __type: "HiveTypeUsedInFieldInput" },
  },
  HiveTypeDeleteInput: {
    fields: { __type: "[HiveTypeFieldsDeleteFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInDeleteFieldInput!]" },
  },
  HiveTypeDisconnectInput: {
    fields: { __type: "[HiveTypeFieldsDisconnectFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInDisconnectFieldInput!]" },
  },
  HiveTypeFieldConnectOrCreateWhere: {
    node: { __type: "HiveTypeFieldUniqueWhere!" },
  },
  HiveTypeFieldConnectWhere: { node: { __type: "HiveTypeFieldWhere!" } },
  HiveTypeFieldCreateInput: {
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveTypeFieldOptions: {
    sort: { __type: "[HiveTypeFieldSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  HiveTypeFieldsAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveTypeFieldsAggregateInput!]" },
    OR: { __type: "[HiveTypeFieldsAggregateInput!]" },
    node: { __type: "HiveTypeFieldsNodeAggregationWhereInput" },
  },
  HiveTypeFieldsConnectFieldInput: {
    where: { __type: "HiveTypeFieldConnectWhere" },
  },
  HiveTypeFieldsConnectionSort: { node: { __type: "HiveTypeFieldSort" } },
  HiveTypeFieldsConnectionWhere: {
    AND: { __type: "[HiveTypeFieldsConnectionWhere!]" },
    OR: { __type: "[HiveTypeFieldsConnectionWhere!]" },
    node: { __type: "HiveTypeFieldWhere" },
    node_NOT: { __type: "HiveTypeFieldWhere" },
  },
  HiveTypeFieldsConnectOrCreateFieldInput: {
    where: { __type: "HiveTypeFieldConnectOrCreateWhere!" },
    onCreate: { __type: "HiveTypeFieldsConnectOrCreateFieldInputOnCreate!" },
  },
  HiveTypeFieldsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveTypeFieldCreateInput!" },
  },
  HiveTypeFieldsCreateFieldInput: {
    node: { __type: "HiveTypeFieldCreateInput!" },
  },
  HiveTypeFieldsDeleteFieldInput: {
    where: { __type: "HiveTypeFieldsConnectionWhere" },
  },
  HiveTypeFieldsDisconnectFieldInput: {
    where: { __type: "HiveTypeFieldsConnectionWhere" },
  },
  HiveTypeFieldsFieldInput: {
    create: { __type: "[HiveTypeFieldsCreateFieldInput!]" },
    connect: { __type: "[HiveTypeFieldsConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveTypeFieldsConnectOrCreateFieldInput!]" },
  },
  HiveTypeFieldsNodeAggregationWhereInput: {
    AND: { __type: "[HiveTypeFieldsNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveTypeFieldsNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    type_EQUAL: { __type: "String" },
    type_AVERAGE_EQUAL: { __type: "Float" },
    type_LONGEST_EQUAL: { __type: "Int" },
    type_SHORTEST_EQUAL: { __type: "Int" },
    type_GT: { __type: "Int" },
    type_AVERAGE_GT: { __type: "Float" },
    type_LONGEST_GT: { __type: "Int" },
    type_SHORTEST_GT: { __type: "Int" },
    type_GTE: { __type: "Int" },
    type_AVERAGE_GTE: { __type: "Float" },
    type_LONGEST_GTE: { __type: "Int" },
    type_SHORTEST_GTE: { __type: "Int" },
    type_LT: { __type: "Int" },
    type_AVERAGE_LT: { __type: "Float" },
    type_LONGEST_LT: { __type: "Int" },
    type_SHORTEST_LT: { __type: "Int" },
    type_LTE: { __type: "Int" },
    type_AVERAGE_LTE: { __type: "Float" },
    type_LONGEST_LTE: { __type: "Int" },
    type_SHORTEST_LTE: { __type: "Int" },
  },
  HiveTypeFieldSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    type: { __type: "SortDirection" },
  },
  HiveTypeFieldsUpdateConnectionInput: {
    node: { __type: "HiveTypeFieldUpdateInput" },
  },
  HiveTypeFieldsUpdateFieldInput: {
    where: { __type: "HiveTypeFieldsConnectionWhere" },
    update: { __type: "HiveTypeFieldsUpdateConnectionInput" },
    connect: { __type: "[HiveTypeFieldsConnectFieldInput!]" },
    disconnect: { __type: "[HiveTypeFieldsDisconnectFieldInput!]" },
    create: { __type: "[HiveTypeFieldsCreateFieldInput!]" },
    delete: { __type: "[HiveTypeFieldsDeleteFieldInput!]" },
    connectOrCreate: { __type: "[HiveTypeFieldsConnectOrCreateFieldInput!]" },
  },
  HiveTypeFieldUniqueWhere: { id: { __type: "ID" } },
  HiveTypeFieldUpdateInput: {
    name: { __type: "String" },
    type: { __type: "String" },
  },
  HiveTypeFieldWhere: {
    OR: { __type: "[HiveTypeFieldWhere!]" },
    AND: { __type: "[HiveTypeFieldWhere!]" },
    id: { __type: "ID" },
    id_NOT: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT_IN: { __type: "[ID]" },
    id_CONTAINS: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_NOT: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT_IN: { __type: "[String]" },
    name_CONTAINS: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    type: { __type: "String" },
    type_NOT: { __type: "String" },
    type_IN: { __type: "[String]" },
    type_NOT_IN: { __type: "[String]" },
    type_CONTAINS: { __type: "String" },
    type_NOT_CONTAINS: { __type: "String" },
    type_STARTS_WITH: { __type: "String" },
    type_NOT_STARTS_WITH: { __type: "String" },
    type_ENDS_WITH: { __type: "String" },
    type_NOT_ENDS_WITH: { __type: "String" },
  },
  HiveTypeOptions: {
    sort: { __type: "[HiveTypeSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  HiveTypeRelationInput: {
    fields: { __type: "[HiveTypeFieldsCreateFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInCreateFieldInput!]" },
  },
  HiveTypeSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HiveTypeUniqueWhere: { id: { __type: "ID" } },
  HiveTypeUpdateInput: {
    name: { __type: "String" },
    fields: { __type: "[HiveTypeFieldsUpdateFieldInput!]" },
    usedIn: { __type: "[HiveTypeUsedInUpdateFieldInput!]" },
  },
  HiveTypeUsedInAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveTypeUsedInAggregateInput!]" },
    OR: { __type: "[HiveTypeUsedInAggregateInput!]" },
    node: { __type: "HiveTypeUsedInNodeAggregationWhereInput" },
  },
  HiveTypeUsedInConnectFieldInput: {
    where: { __type: "HiveApplianceConnectWhere" },
    connect: { __type: "[HiveApplianceConnectInput!]" },
  },
  HiveTypeUsedInConnectionSort: { node: { __type: "HiveApplianceSort" } },
  HiveTypeUsedInConnectionWhere: {
    AND: { __type: "[HiveTypeUsedInConnectionWhere!]" },
    OR: { __type: "[HiveTypeUsedInConnectionWhere!]" },
    node: { __type: "HiveApplianceWhere" },
    node_NOT: { __type: "HiveApplianceWhere" },
  },
  HiveTypeUsedInConnectOrCreateFieldInput: {
    where: { __type: "HiveApplianceConnectOrCreateWhere!" },
    onCreate: { __type: "HiveTypeUsedInConnectOrCreateFieldInputOnCreate!" },
  },
  HiveTypeUsedInConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveTypeUsedInCreateFieldInput: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  HiveTypeUsedInDeleteFieldInput: {
    where: { __type: "HiveTypeUsedInConnectionWhere" },
    delete: { __type: "HiveApplianceDeleteInput" },
  },
  HiveTypeUsedInDisconnectFieldInput: {
    where: { __type: "HiveTypeUsedInConnectionWhere" },
    disconnect: { __type: "HiveApplianceDisconnectInput" },
  },
  HiveTypeUsedInFieldInput: {
    create: { __type: "[HiveTypeUsedInCreateFieldInput!]" },
    connect: { __type: "[HiveTypeUsedInConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveTypeUsedInConnectOrCreateFieldInput!]" },
  },
  HiveTypeUsedInNodeAggregationWhereInput: {
    AND: { __type: "[HiveTypeUsedInNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveTypeUsedInNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    label_EQUAL: { __type: "String" },
    label_AVERAGE_EQUAL: { __type: "Float" },
    label_LONGEST_EQUAL: { __type: "Int" },
    label_SHORTEST_EQUAL: { __type: "Int" },
    label_GT: { __type: "Int" },
    label_AVERAGE_GT: { __type: "Float" },
    label_LONGEST_GT: { __type: "Int" },
    label_SHORTEST_GT: { __type: "Int" },
    label_GTE: { __type: "Int" },
    label_AVERAGE_GTE: { __type: "Float" },
    label_LONGEST_GTE: { __type: "Int" },
    label_SHORTEST_GTE: { __type: "Int" },
    label_LT: { __type: "Int" },
    label_AVERAGE_LT: { __type: "Float" },
    label_LONGEST_LT: { __type: "Int" },
    label_SHORTEST_LT: { __type: "Int" },
    label_LTE: { __type: "Int" },
    label_AVERAGE_LTE: { __type: "Float" },
    label_LONGEST_LTE: { __type: "Int" },
    label_SHORTEST_LTE: { __type: "Int" },
    description_EQUAL: { __type: "String" },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_GT: { __type: "Int" },
    description_AVERAGE_GT: { __type: "Float" },
    description_LONGEST_GT: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_LONGEST_GTE: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_AVERAGE_LT: { __type: "Float" },
    description_LONGEST_LT: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_LONGEST_LTE: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
  },
  HiveTypeUsedInUpdateConnectionInput: {
    node: { __type: "HiveApplianceUpdateInput" },
  },
  HiveTypeUsedInUpdateFieldInput: {
    where: { __type: "HiveTypeUsedInConnectionWhere" },
    update: { __type: "HiveTypeUsedInUpdateConnectionInput" },
    connect: { __type: "[HiveTypeUsedInConnectFieldInput!]" },
    disconnect: { __type: "[HiveTypeUsedInDisconnectFieldInput!]" },
    create: { __type: "[HiveTypeUsedInCreateFieldInput!]" },
    delete: { __type: "[HiveTypeUsedInDeleteFieldInput!]" },
    connectOrCreate: { __type: "[HiveTypeUsedInConnectOrCreateFieldInput!]" },
  },
  HiveTypeWhere: {
    OR: { __type: "[HiveTypeWhere!]" },
    AND: { __type: "[HiveTypeWhere!]" },
    id: { __type: "ID" },
    id_NOT: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT_IN: { __type: "[ID]" },
    id_CONTAINS: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_NOT: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT_IN: { __type: "[String]" },
    name_CONTAINS: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    fields: { __type: "HiveTypeFieldWhere" },
    fields_NOT: { __type: "HiveTypeFieldWhere" },
    fieldsAggregate: { __type: "HiveTypeFieldsAggregateInput" },
    usedIn: { __type: "HiveApplianceWhere" },
    usedIn_NOT: { __type: "HiveApplianceWhere" },
    usedInAggregate: { __type: "HiveTypeUsedInAggregateInput" },
    fieldsConnection: { __type: "HiveTypeFieldsConnectionWhere" },
    fieldsConnection_NOT: { __type: "HiveTypeFieldsConnectionWhere" },
    usedInConnection: { __type: "HiveTypeUsedInConnectionWhere" },
    usedInConnection_NOT: { __type: "HiveTypeUsedInConnectionWhere" },
  },
  HiveUserConnectInput: {
    roles: { __type: "[HiveUserRolesConnectFieldInput!]" },
    organisation: { __type: "HiveUserOrganisationConnectFieldInput" },
  },
  HiveUserConnectOrCreateInput: {
    roles: { __type: "[HiveUserRolesConnectOrCreateFieldInput!]" },
    organisation: { __type: "HiveUserOrganisationConnectOrCreateFieldInput" },
  },
  HiveUserConnectOrCreateWhere: { node: { __type: "HiveUserUniqueWhere!" } },
  HiveUserConnectWhere: { node: { __type: "HiveUserWhere!" } },
  HiveUserCreateInput: {
    name: { __type: "String" },
    username: { __type: "String" },
    password: { __type: "String" },
    roles: { __type: "HiveUserRolesFieldInput" },
    organisation: { __type: "HiveUserOrganisationFieldInput" },
  },
  HiveUserDeleteInput: {
    roles: { __type: "[HiveUserRolesDeleteFieldInput!]" },
    organisation: { __type: "HiveUserOrganisationDeleteFieldInput" },
  },
  HiveUserDisconnectInput: {
    roles: { __type: "[HiveUserRolesDisconnectFieldInput!]" },
    organisation: { __type: "HiveUserOrganisationDisconnectFieldInput" },
  },
  HiveUserOptions: {
    sort: { __type: "[HiveUserSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  HiveUserOrganisationAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveUserOrganisationAggregateInput!]" },
    OR: { __type: "[HiveUserOrganisationAggregateInput!]" },
    node: { __type: "HiveUserOrganisationNodeAggregationWhereInput" },
  },
  HiveUserOrganisationConnectFieldInput: {
    where: { __type: "HiveOrganisationConnectWhere" },
    connect: { __type: "HiveOrganisationConnectInput" },
  },
  HiveUserOrganisationConnectionSort: {
    node: { __type: "HiveOrganisationSort" },
  },
  HiveUserOrganisationConnectionWhere: {
    AND: { __type: "[HiveUserOrganisationConnectionWhere!]" },
    OR: { __type: "[HiveUserOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  HiveUserOrganisationConnectOrCreateFieldInput: {
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
    onCreate: {
      __type: "HiveUserOrganisationConnectOrCreateFieldInputOnCreate!",
    },
  },
  HiveUserOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  HiveUserOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  HiveUserOrganisationDeleteFieldInput: {
    where: { __type: "HiveUserOrganisationConnectionWhere" },
    delete: { __type: "HiveOrganisationDeleteInput" },
  },
  HiveUserOrganisationDisconnectFieldInput: {
    where: { __type: "HiveUserOrganisationConnectionWhere" },
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
  },
  HiveUserOrganisationFieldInput: {
    create: { __type: "HiveUserOrganisationCreateFieldInput" },
    connect: { __type: "HiveUserOrganisationConnectFieldInput" },
    connectOrCreate: {
      __type: "HiveUserOrganisationConnectOrCreateFieldInput",
    },
  },
  HiveUserOrganisationNodeAggregationWhereInput: {
    AND: { __type: "[HiveUserOrganisationNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveUserOrganisationNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveUserOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  HiveUserOrganisationUpdateFieldInput: {
    where: { __type: "HiveUserOrganisationConnectionWhere" },
    update: { __type: "HiveUserOrganisationUpdateConnectionInput" },
    connect: { __type: "HiveUserOrganisationConnectFieldInput" },
    disconnect: { __type: "HiveUserOrganisationDisconnectFieldInput" },
    create: { __type: "HiveUserOrganisationCreateFieldInput" },
    delete: { __type: "HiveUserOrganisationDeleteFieldInput" },
    connectOrCreate: {
      __type: "HiveUserOrganisationConnectOrCreateFieldInput",
    },
  },
  HiveUserRelationInput: {
    roles: { __type: "[HiveUserRolesCreateFieldInput!]" },
    organisation: { __type: "HiveUserOrganisationCreateFieldInput" },
  },
  HiveUserRolesAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[HiveUserRolesAggregateInput!]" },
    OR: { __type: "[HiveUserRolesAggregateInput!]" },
    node: { __type: "HiveUserRolesNodeAggregationWhereInput" },
  },
  HiveUserRolesConnectFieldInput: {
    where: { __type: "RoleConnectWhere" },
    connect: { __type: "[RoleConnectInput!]" },
  },
  HiveUserRolesConnectionSort: { node: { __type: "RoleSort" } },
  HiveUserRolesConnectionWhere: {
    AND: { __type: "[HiveUserRolesConnectionWhere!]" },
    OR: { __type: "[HiveUserRolesConnectionWhere!]" },
    node: { __type: "RoleWhere" },
    node_NOT: { __type: "RoleWhere" },
  },
  HiveUserRolesConnectOrCreateFieldInput: {
    where: { __type: "RoleConnectOrCreateWhere!" },
    onCreate: { __type: "HiveUserRolesConnectOrCreateFieldInputOnCreate!" },
  },
  HiveUserRolesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "RoleCreateInput!" },
  },
  HiveUserRolesCreateFieldInput: { node: { __type: "RoleCreateInput!" } },
  HiveUserRolesDeleteFieldInput: {
    where: { __type: "HiveUserRolesConnectionWhere" },
    delete: { __type: "RoleDeleteInput" },
  },
  HiveUserRolesDisconnectFieldInput: {
    where: { __type: "HiveUserRolesConnectionWhere" },
    disconnect: { __type: "RoleDisconnectInput" },
  },
  HiveUserRolesFieldInput: {
    create: { __type: "[HiveUserRolesCreateFieldInput!]" },
    connect: { __type: "[HiveUserRolesConnectFieldInput!]" },
    connectOrCreate: { __type: "[HiveUserRolesConnectOrCreateFieldInput!]" },
  },
  HiveUserRolesNodeAggregationWhereInput: {
    AND: { __type: "[HiveUserRolesNodeAggregationWhereInput!]" },
    OR: { __type: "[HiveUserRolesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  HiveUserRolesUpdateConnectionInput: { node: { __type: "RoleUpdateInput" } },
  HiveUserRolesUpdateFieldInput: {
    where: { __type: "HiveUserRolesConnectionWhere" },
    update: { __type: "HiveUserRolesUpdateConnectionInput" },
    connect: { __type: "[HiveUserRolesConnectFieldInput!]" },
    disconnect: { __type: "[HiveUserRolesDisconnectFieldInput!]" },
    create: { __type: "[HiveUserRolesCreateFieldInput!]" },
    delete: { __type: "[HiveUserRolesDeleteFieldInput!]" },
    connectOrCreate: { __type: "[HiveUserRolesConnectOrCreateFieldInput!]" },
  },
  HiveUserSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    username: { __type: "SortDirection" },
    password: { __type: "SortDirection" },
  },
  HiveUserUniqueWhere: { id: { __type: "ID" } },
  HiveUserUpdateInput: {
    name: { __type: "String" },
    username: { __type: "String" },
    password: { __type: "String" },
    roles: { __type: "[HiveUserRolesUpdateFieldInput!]" },
    organisation: { __type: "HiveUserOrganisationUpdateFieldInput" },
  },
  HiveUserWhere: {
    OR: { __type: "[HiveUserWhere!]" },
    AND: { __type: "[HiveUserWhere!]" },
    id: { __type: "ID" },
    id_NOT: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT_IN: { __type: "[ID]" },
    id_CONTAINS: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_NOT: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT_IN: { __type: "[String]" },
    name_CONTAINS: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    username: { __type: "String" },
    username_NOT: { __type: "String" },
    username_IN: { __type: "[String]" },
    username_NOT_IN: { __type: "[String]" },
    username_CONTAINS: { __type: "String" },
    username_NOT_CONTAINS: { __type: "String" },
    username_STARTS_WITH: { __type: "String" },
    username_NOT_STARTS_WITH: { __type: "String" },
    username_ENDS_WITH: { __type: "String" },
    username_NOT_ENDS_WITH: { __type: "String" },
    password: { __type: "String" },
    password_NOT: { __type: "String" },
    password_IN: { __type: "[String]" },
    password_NOT_IN: { __type: "[String]" },
    password_CONTAINS: { __type: "String" },
    password_NOT_CONTAINS: { __type: "String" },
    password_STARTS_WITH: { __type: "String" },
    password_NOT_STARTS_WITH: { __type: "String" },
    password_ENDS_WITH: { __type: "String" },
    password_NOT_ENDS_WITH: { __type: "String" },
    roles: { __type: "RoleWhere" },
    roles_NOT: { __type: "RoleWhere" },
    rolesAggregate: { __type: "HiveUserRolesAggregateInput" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
    organisationAggregate: { __type: "HiveUserOrganisationAggregateInput" },
    rolesConnection: { __type: "HiveUserRolesConnectionWhere" },
    rolesConnection_NOT: { __type: "HiveUserRolesConnectionWhere" },
    organisationConnection: { __type: "HiveUserOrganisationConnectionWhere" },
    organisationConnection_NOT: {
      __type: "HiveUserOrganisationConnectionWhere",
    },
  },
  PermissionConnectInput: {
    roles: { __type: "[PermissionRolesConnectFieldInput!]" },
  },
  PermissionConnectOrCreateInput: {
    roles: { __type: "[PermissionRolesConnectOrCreateFieldInput!]" },
  },
  PermissionConnectOrCreateWhere: {
    node: { __type: "PermissionUniqueWhere!" },
  },
  PermissionConnectWhere: { node: { __type: "PermissionWhere!" } },
  PermissionCreateInput: {
    name: { __type: "String" },
    action: { __type: "String" },
    scope: { __type: "String" },
    roles: { __type: "PermissionRolesFieldInput" },
  },
  PermissionDeleteInput: {
    roles: { __type: "[PermissionRolesDeleteFieldInput!]" },
  },
  PermissionDisconnectInput: {
    roles: { __type: "[PermissionRolesDisconnectFieldInput!]" },
  },
  PermissionOptions: {
    sort: { __type: "[PermissionSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  PermissionRelationInput: {
    roles: { __type: "[PermissionRolesCreateFieldInput!]" },
  },
  PermissionRolesAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[PermissionRolesAggregateInput!]" },
    OR: { __type: "[PermissionRolesAggregateInput!]" },
    node: { __type: "PermissionRolesNodeAggregationWhereInput" },
  },
  PermissionRolesConnectFieldInput: {
    where: { __type: "RoleConnectWhere" },
    connect: { __type: "[RoleConnectInput!]" },
  },
  PermissionRolesConnectionSort: { node: { __type: "RoleSort" } },
  PermissionRolesConnectionWhere: {
    AND: { __type: "[PermissionRolesConnectionWhere!]" },
    OR: { __type: "[PermissionRolesConnectionWhere!]" },
    node: { __type: "RoleWhere" },
    node_NOT: { __type: "RoleWhere" },
  },
  PermissionRolesConnectOrCreateFieldInput: {
    where: { __type: "RoleConnectOrCreateWhere!" },
    onCreate: { __type: "PermissionRolesConnectOrCreateFieldInputOnCreate!" },
  },
  PermissionRolesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "RoleCreateInput!" },
  },
  PermissionRolesCreateFieldInput: { node: { __type: "RoleCreateInput!" } },
  PermissionRolesDeleteFieldInput: {
    where: { __type: "PermissionRolesConnectionWhere" },
    delete: { __type: "RoleDeleteInput" },
  },
  PermissionRolesDisconnectFieldInput: {
    where: { __type: "PermissionRolesConnectionWhere" },
    disconnect: { __type: "RoleDisconnectInput" },
  },
  PermissionRolesFieldInput: {
    create: { __type: "[PermissionRolesCreateFieldInput!]" },
    connect: { __type: "[PermissionRolesConnectFieldInput!]" },
    connectOrCreate: { __type: "[PermissionRolesConnectOrCreateFieldInput!]" },
  },
  PermissionRolesNodeAggregationWhereInput: {
    AND: { __type: "[PermissionRolesNodeAggregationWhereInput!]" },
    OR: { __type: "[PermissionRolesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  PermissionRolesUpdateConnectionInput: { node: { __type: "RoleUpdateInput" } },
  PermissionRolesUpdateFieldInput: {
    where: { __type: "PermissionRolesConnectionWhere" },
    update: { __type: "PermissionRolesUpdateConnectionInput" },
    connect: { __type: "[PermissionRolesConnectFieldInput!]" },
    disconnect: { __type: "[PermissionRolesDisconnectFieldInput!]" },
    create: { __type: "[PermissionRolesCreateFieldInput!]" },
    delete: { __type: "[PermissionRolesDeleteFieldInput!]" },
    connectOrCreate: { __type: "[PermissionRolesConnectOrCreateFieldInput!]" },
  },
  PermissionSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    action: { __type: "SortDirection" },
    scope: { __type: "SortDirection" },
  },
  PermissionUniqueWhere: { id: { __type: "ID" } },
  PermissionUpdateInput: {
    name: { __type: "String" },
    action: { __type: "String" },
    scope: { __type: "String" },
    roles: { __type: "[PermissionRolesUpdateFieldInput!]" },
  },
  PermissionWhere: {
    OR: { __type: "[PermissionWhere!]" },
    AND: { __type: "[PermissionWhere!]" },
    id: { __type: "ID" },
    id_NOT: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT_IN: { __type: "[ID]" },
    id_CONTAINS: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_NOT: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT_IN: { __type: "[String]" },
    name_CONTAINS: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    action: { __type: "String" },
    action_NOT: { __type: "String" },
    action_IN: { __type: "[String]" },
    action_NOT_IN: { __type: "[String]" },
    action_CONTAINS: { __type: "String" },
    action_NOT_CONTAINS: { __type: "String" },
    action_STARTS_WITH: { __type: "String" },
    action_NOT_STARTS_WITH: { __type: "String" },
    action_ENDS_WITH: { __type: "String" },
    action_NOT_ENDS_WITH: { __type: "String" },
    scope: { __type: "String" },
    scope_NOT: { __type: "String" },
    scope_IN: { __type: "[String]" },
    scope_NOT_IN: { __type: "[String]" },
    scope_CONTAINS: { __type: "String" },
    scope_NOT_CONTAINS: { __type: "String" },
    scope_STARTS_WITH: { __type: "String" },
    scope_NOT_STARTS_WITH: { __type: "String" },
    scope_ENDS_WITH: { __type: "String" },
    scope_NOT_ENDS_WITH: { __type: "String" },
    roles: { __type: "RoleWhere" },
    roles_NOT: { __type: "RoleWhere" },
    rolesAggregate: { __type: "PermissionRolesAggregateInput" },
    rolesConnection: { __type: "PermissionRolesConnectionWhere" },
    rolesConnection_NOT: { __type: "PermissionRolesConnectionWhere" },
  },
  RoleAppliancesAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[RoleAppliancesAggregateInput!]" },
    OR: { __type: "[RoleAppliancesAggregateInput!]" },
    node: { __type: "RoleAppliancesNodeAggregationWhereInput" },
  },
  RoleAppliancesConnectFieldInput: {
    where: { __type: "HiveApplianceConnectWhere" },
    connect: { __type: "[HiveApplianceConnectInput!]" },
  },
  RoleAppliancesConnectionSort: { node: { __type: "HiveApplianceSort" } },
  RoleAppliancesConnectionWhere: {
    AND: { __type: "[RoleAppliancesConnectionWhere!]" },
    OR: { __type: "[RoleAppliancesConnectionWhere!]" },
    node: { __type: "HiveApplianceWhere" },
    node_NOT: { __type: "HiveApplianceWhere" },
  },
  RoleAppliancesConnectOrCreateFieldInput: {
    where: { __type: "HiveApplianceConnectOrCreateWhere!" },
    onCreate: { __type: "RoleAppliancesConnectOrCreateFieldInputOnCreate!" },
  },
  RoleAppliancesConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  RoleAppliancesCreateFieldInput: {
    node: { __type: "HiveApplianceCreateInput!" },
  },
  RoleAppliancesDeleteFieldInput: {
    where: { __type: "RoleAppliancesConnectionWhere" },
    delete: { __type: "HiveApplianceDeleteInput" },
  },
  RoleAppliancesDisconnectFieldInput: {
    where: { __type: "RoleAppliancesConnectionWhere" },
    disconnect: { __type: "HiveApplianceDisconnectInput" },
  },
  RoleAppliancesFieldInput: {
    create: { __type: "[RoleAppliancesCreateFieldInput!]" },
    connect: { __type: "[RoleAppliancesConnectFieldInput!]" },
    connectOrCreate: { __type: "[RoleAppliancesConnectOrCreateFieldInput!]" },
  },
  RoleAppliancesNodeAggregationWhereInput: {
    AND: { __type: "[RoleAppliancesNodeAggregationWhereInput!]" },
    OR: { __type: "[RoleAppliancesNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    label_EQUAL: { __type: "String" },
    label_AVERAGE_EQUAL: { __type: "Float" },
    label_LONGEST_EQUAL: { __type: "Int" },
    label_SHORTEST_EQUAL: { __type: "Int" },
    label_GT: { __type: "Int" },
    label_AVERAGE_GT: { __type: "Float" },
    label_LONGEST_GT: { __type: "Int" },
    label_SHORTEST_GT: { __type: "Int" },
    label_GTE: { __type: "Int" },
    label_AVERAGE_GTE: { __type: "Float" },
    label_LONGEST_GTE: { __type: "Int" },
    label_SHORTEST_GTE: { __type: "Int" },
    label_LT: { __type: "Int" },
    label_AVERAGE_LT: { __type: "Float" },
    label_LONGEST_LT: { __type: "Int" },
    label_SHORTEST_LT: { __type: "Int" },
    label_LTE: { __type: "Int" },
    label_AVERAGE_LTE: { __type: "Float" },
    label_LONGEST_LTE: { __type: "Int" },
    label_SHORTEST_LTE: { __type: "Int" },
    description_EQUAL: { __type: "String" },
    description_AVERAGE_EQUAL: { __type: "Float" },
    description_LONGEST_EQUAL: { __type: "Int" },
    description_SHORTEST_EQUAL: { __type: "Int" },
    description_GT: { __type: "Int" },
    description_AVERAGE_GT: { __type: "Float" },
    description_LONGEST_GT: { __type: "Int" },
    description_SHORTEST_GT: { __type: "Int" },
    description_GTE: { __type: "Int" },
    description_AVERAGE_GTE: { __type: "Float" },
    description_LONGEST_GTE: { __type: "Int" },
    description_SHORTEST_GTE: { __type: "Int" },
    description_LT: { __type: "Int" },
    description_AVERAGE_LT: { __type: "Float" },
    description_LONGEST_LT: { __type: "Int" },
    description_SHORTEST_LT: { __type: "Int" },
    description_LTE: { __type: "Int" },
    description_AVERAGE_LTE: { __type: "Float" },
    description_LONGEST_LTE: { __type: "Int" },
    description_SHORTEST_LTE: { __type: "Int" },
  },
  RoleAppliancesUpdateConnectionInput: {
    node: { __type: "HiveApplianceUpdateInput" },
  },
  RoleAppliancesUpdateFieldInput: {
    where: { __type: "RoleAppliancesConnectionWhere" },
    update: { __type: "RoleAppliancesUpdateConnectionInput" },
    connect: { __type: "[RoleAppliancesConnectFieldInput!]" },
    disconnect: { __type: "[RoleAppliancesDisconnectFieldInput!]" },
    create: { __type: "[RoleAppliancesCreateFieldInput!]" },
    delete: { __type: "[RoleAppliancesDeleteFieldInput!]" },
    connectOrCreate: { __type: "[RoleAppliancesConnectOrCreateFieldInput!]" },
  },
  RoleConnectInput: {
    appliances: { __type: "[RoleAppliancesConnectFieldInput!]" },
    permissions: { __type: "[RolePermissionsConnectFieldInput!]" },
    organisation: { __type: "RoleOrganisationConnectFieldInput" },
  },
  RoleConnectOrCreateInput: {
    appliances: { __type: "[RoleAppliancesConnectOrCreateFieldInput!]" },
    permissions: { __type: "[RolePermissionsConnectOrCreateFieldInput!]" },
    organisation: { __type: "RoleOrganisationConnectOrCreateFieldInput" },
  },
  RoleConnectOrCreateWhere: { node: { __type: "RoleUniqueWhere!" } },
  RoleConnectWhere: { node: { __type: "RoleWhere!" } },
  RoleCreateInput: {
    name: { __type: "String" },
    appliances: { __type: "RoleAppliancesFieldInput" },
    permissions: { __type: "RolePermissionsFieldInput" },
    organisation: { __type: "RoleOrganisationFieldInput" },
  },
  RoleDeleteInput: {
    appliances: { __type: "[RoleAppliancesDeleteFieldInput!]" },
    permissions: { __type: "[RolePermissionsDeleteFieldInput!]" },
    organisation: { __type: "RoleOrganisationDeleteFieldInput" },
  },
  RoleDisconnectInput: {
    appliances: { __type: "[RoleAppliancesDisconnectFieldInput!]" },
    permissions: { __type: "[RolePermissionsDisconnectFieldInput!]" },
    organisation: { __type: "RoleOrganisationDisconnectFieldInput" },
  },
  RoleOptions: {
    sort: { __type: "[RoleSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  RoleOrganisationAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[RoleOrganisationAggregateInput!]" },
    OR: { __type: "[RoleOrganisationAggregateInput!]" },
    node: { __type: "RoleOrganisationNodeAggregationWhereInput" },
  },
  RoleOrganisationConnectFieldInput: {
    where: { __type: "HiveOrganisationConnectWhere" },
    connect: { __type: "HiveOrganisationConnectInput" },
  },
  RoleOrganisationConnectionSort: { node: { __type: "HiveOrganisationSort" } },
  RoleOrganisationConnectionWhere: {
    AND: { __type: "[RoleOrganisationConnectionWhere!]" },
    OR: { __type: "[RoleOrganisationConnectionWhere!]" },
    node: { __type: "HiveOrganisationWhere" },
    node_NOT: { __type: "HiveOrganisationWhere" },
  },
  RoleOrganisationConnectOrCreateFieldInput: {
    where: { __type: "HiveOrganisationConnectOrCreateWhere!" },
    onCreate: { __type: "RoleOrganisationConnectOrCreateFieldInputOnCreate!" },
  },
  RoleOrganisationConnectOrCreateFieldInputOnCreate: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  RoleOrganisationCreateFieldInput: {
    node: { __type: "HiveOrganisationCreateInput!" },
  },
  RoleOrganisationDeleteFieldInput: {
    where: { __type: "RoleOrganisationConnectionWhere" },
    delete: { __type: "HiveOrganisationDeleteInput" },
  },
  RoleOrganisationDisconnectFieldInput: {
    where: { __type: "RoleOrganisationConnectionWhere" },
    disconnect: { __type: "HiveOrganisationDisconnectInput" },
  },
  RoleOrganisationFieldInput: {
    create: { __type: "RoleOrganisationCreateFieldInput" },
    connect: { __type: "RoleOrganisationConnectFieldInput" },
    connectOrCreate: { __type: "RoleOrganisationConnectOrCreateFieldInput" },
  },
  RoleOrganisationNodeAggregationWhereInput: {
    AND: { __type: "[RoleOrganisationNodeAggregationWhereInput!]" },
    OR: { __type: "[RoleOrganisationNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  RoleOrganisationUpdateConnectionInput: {
    node: { __type: "HiveOrganisationUpdateInput" },
  },
  RoleOrganisationUpdateFieldInput: {
    where: { __type: "RoleOrganisationConnectionWhere" },
    update: { __type: "RoleOrganisationUpdateConnectionInput" },
    connect: { __type: "RoleOrganisationConnectFieldInput" },
    disconnect: { __type: "RoleOrganisationDisconnectFieldInput" },
    create: { __type: "RoleOrganisationCreateFieldInput" },
    delete: { __type: "RoleOrganisationDeleteFieldInput" },
    connectOrCreate: { __type: "RoleOrganisationConnectOrCreateFieldInput" },
  },
  RolePermissionsAggregateInput: {
    count: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    AND: { __type: "[RolePermissionsAggregateInput!]" },
    OR: { __type: "[RolePermissionsAggregateInput!]" },
    node: { __type: "RolePermissionsNodeAggregationWhereInput" },
  },
  RolePermissionsConnectFieldInput: {
    where: { __type: "PermissionConnectWhere" },
    connect: { __type: "[PermissionConnectInput!]" },
  },
  RolePermissionsConnectionSort: { node: { __type: "PermissionSort" } },
  RolePermissionsConnectionWhere: {
    AND: { __type: "[RolePermissionsConnectionWhere!]" },
    OR: { __type: "[RolePermissionsConnectionWhere!]" },
    node: { __type: "PermissionWhere" },
    node_NOT: { __type: "PermissionWhere" },
  },
  RolePermissionsConnectOrCreateFieldInput: {
    where: { __type: "PermissionConnectOrCreateWhere!" },
    onCreate: { __type: "RolePermissionsConnectOrCreateFieldInputOnCreate!" },
  },
  RolePermissionsConnectOrCreateFieldInputOnCreate: {
    node: { __type: "PermissionCreateInput!" },
  },
  RolePermissionsCreateFieldInput: {
    node: { __type: "PermissionCreateInput!" },
  },
  RolePermissionsDeleteFieldInput: {
    where: { __type: "RolePermissionsConnectionWhere" },
    delete: { __type: "PermissionDeleteInput" },
  },
  RolePermissionsDisconnectFieldInput: {
    where: { __type: "RolePermissionsConnectionWhere" },
    disconnect: { __type: "PermissionDisconnectInput" },
  },
  RolePermissionsFieldInput: {
    create: { __type: "[RolePermissionsCreateFieldInput!]" },
    connect: { __type: "[RolePermissionsConnectFieldInput!]" },
    connectOrCreate: { __type: "[RolePermissionsConnectOrCreateFieldInput!]" },
  },
  RolePermissionsNodeAggregationWhereInput: {
    AND: { __type: "[RolePermissionsNodeAggregationWhereInput!]" },
    OR: { __type: "[RolePermissionsNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    name_EQUAL: { __type: "String" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_GT: { __type: "Int" },
    name_AVERAGE_GT: { __type: "Float" },
    name_LONGEST_GT: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_LONGEST_GTE: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_AVERAGE_LT: { __type: "Float" },
    name_LONGEST_LT: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_LONGEST_LTE: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    action_EQUAL: { __type: "String" },
    action_AVERAGE_EQUAL: { __type: "Float" },
    action_LONGEST_EQUAL: { __type: "Int" },
    action_SHORTEST_EQUAL: { __type: "Int" },
    action_GT: { __type: "Int" },
    action_AVERAGE_GT: { __type: "Float" },
    action_LONGEST_GT: { __type: "Int" },
    action_SHORTEST_GT: { __type: "Int" },
    action_GTE: { __type: "Int" },
    action_AVERAGE_GTE: { __type: "Float" },
    action_LONGEST_GTE: { __type: "Int" },
    action_SHORTEST_GTE: { __type: "Int" },
    action_LT: { __type: "Int" },
    action_AVERAGE_LT: { __type: "Float" },
    action_LONGEST_LT: { __type: "Int" },
    action_SHORTEST_LT: { __type: "Int" },
    action_LTE: { __type: "Int" },
    action_AVERAGE_LTE: { __type: "Float" },
    action_LONGEST_LTE: { __type: "Int" },
    action_SHORTEST_LTE: { __type: "Int" },
    scope_EQUAL: { __type: "String" },
    scope_AVERAGE_EQUAL: { __type: "Float" },
    scope_LONGEST_EQUAL: { __type: "Int" },
    scope_SHORTEST_EQUAL: { __type: "Int" },
    scope_GT: { __type: "Int" },
    scope_AVERAGE_GT: { __type: "Float" },
    scope_LONGEST_GT: { __type: "Int" },
    scope_SHORTEST_GT: { __type: "Int" },
    scope_GTE: { __type: "Int" },
    scope_AVERAGE_GTE: { __type: "Float" },
    scope_LONGEST_GTE: { __type: "Int" },
    scope_SHORTEST_GTE: { __type: "Int" },
    scope_LT: { __type: "Int" },
    scope_AVERAGE_LT: { __type: "Float" },
    scope_LONGEST_LT: { __type: "Int" },
    scope_SHORTEST_LT: { __type: "Int" },
    scope_LTE: { __type: "Int" },
    scope_AVERAGE_LTE: { __type: "Float" },
    scope_LONGEST_LTE: { __type: "Int" },
    scope_SHORTEST_LTE: { __type: "Int" },
  },
  RolePermissionsUpdateConnectionInput: {
    node: { __type: "PermissionUpdateInput" },
  },
  RolePermissionsUpdateFieldInput: {
    where: { __type: "RolePermissionsConnectionWhere" },
    update: { __type: "RolePermissionsUpdateConnectionInput" },
    connect: { __type: "[RolePermissionsConnectFieldInput!]" },
    disconnect: { __type: "[RolePermissionsDisconnectFieldInput!]" },
    create: { __type: "[RolePermissionsCreateFieldInput!]" },
    delete: { __type: "[RolePermissionsDeleteFieldInput!]" },
    connectOrCreate: { __type: "[RolePermissionsConnectOrCreateFieldInput!]" },
  },
  RoleRelationInput: {
    appliances: { __type: "[RoleAppliancesCreateFieldInput!]" },
    permissions: { __type: "[RolePermissionsCreateFieldInput!]" },
    organisation: { __type: "RoleOrganisationCreateFieldInput" },
  },
  RoleSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  RoleUniqueWhere: { id: { __type: "ID" } },
  RoleUpdateInput: {
    name: { __type: "String" },
    appliances: { __type: "[RoleAppliancesUpdateFieldInput!]" },
    permissions: { __type: "[RolePermissionsUpdateFieldInput!]" },
    organisation: { __type: "RoleOrganisationUpdateFieldInput" },
  },
  RoleWhere: {
    OR: { __type: "[RoleWhere!]" },
    AND: { __type: "[RoleWhere!]" },
    id: { __type: "ID" },
    id_NOT: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT_IN: { __type: "[ID]" },
    id_CONTAINS: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_NOT: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT_IN: { __type: "[String]" },
    name_CONTAINS: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    appliances: { __type: "HiveApplianceWhere" },
    appliances_NOT: { __type: "HiveApplianceWhere" },
    appliancesAggregate: { __type: "RoleAppliancesAggregateInput" },
    permissions: { __type: "PermissionWhere" },
    permissions_NOT: { __type: "PermissionWhere" },
    permissionsAggregate: { __type: "RolePermissionsAggregateInput" },
    organisation: { __type: "HiveOrganisationWhere" },
    organisation_NOT: { __type: "HiveOrganisationWhere" },
    organisationAggregate: { __type: "RoleOrganisationAggregateInput" },
    appliancesConnection: { __type: "RoleAppliancesConnectionWhere" },
    appliancesConnection_NOT: { __type: "RoleAppliancesConnectionWhere" },
    permissionsConnection: { __type: "RolePermissionsConnectionWhere" },
    permissionsConnection_NOT: { __type: "RolePermissionsConnectionWhere" },
    organisationConnection: { __type: "RoleOrganisationConnectionWhere" },
    organisationConnection_NOT: { __type: "RoleOrganisationConnectionWhere" },
  },
} as const;

export interface Query {
  __typename?: "Query";
  empty?: Maybe<ScalarsEnums["String"]>;
  resolveFS: (args?: {
    appId?: Maybe<Scalars["String"]>;
    mountPath?: Maybe<Scalars["String"]>;
  }) => Maybe<HiveFile>;
  hiveServices: (args?: {
    where?: Maybe<HiveServiceWhere>;
    options?: Maybe<HiveServiceOptions>;
  }) => Array<HiveService>;
  hiveServicesCount: (args?: {
    where?: Maybe<HiveServiceWhere>;
  }) => ScalarsEnums["Int"];
  hiveServicesAggregate: (args?: {
    where?: Maybe<HiveServiceWhere>;
  }) => HiveServiceAggregateSelection;
  hiveTypes: (args?: {
    where?: Maybe<HiveTypeWhere>;
    options?: Maybe<HiveTypeOptions>;
  }) => Array<HiveType>;
  hiveTypesCount: (args?: {
    where?: Maybe<HiveTypeWhere>;
  }) => ScalarsEnums["Int"];
  hiveTypesAggregate: (args?: {
    where?: Maybe<HiveTypeWhere>;
  }) => HiveTypeAggregateSelection;
  hiveTypeFields: (args?: {
    where?: Maybe<HiveTypeFieldWhere>;
    options?: Maybe<HiveTypeFieldOptions>;
  }) => Array<HiveTypeField>;
  hiveTypeFieldsCount: (args?: {
    where?: Maybe<HiveTypeFieldWhere>;
  }) => ScalarsEnums["Int"];
  hiveTypeFieldsAggregate: (args?: {
    where?: Maybe<HiveTypeFieldWhere>;
  }) => HiveTypeFieldAggregateSelection;
  hiveAppliances: (args?: {
    where?: Maybe<HiveApplianceWhere>;
    options?: Maybe<HiveApplianceOptions>;
  }) => Array<HiveAppliance>;
  hiveAppliancesCount: (args?: {
    where?: Maybe<HiveApplianceWhere>;
  }) => ScalarsEnums["Int"];
  hiveAppliancesAggregate: (args?: {
    where?: Maybe<HiveApplianceWhere>;
  }) => HiveApplianceAggregateSelection;
  hiveIntegrationPathCollections: (args?: {
    where?: Maybe<HiveIntegrationPathCollectionWhere>;
    options?: Maybe<HiveIntegrationPathCollectionOptions>;
  }) => Array<HiveIntegrationPathCollection>;
  hiveIntegrationPathCollectionsCount: (args?: {
    where?: Maybe<HiveIntegrationPathCollectionWhere>;
  }) => ScalarsEnums["Int"];
  hiveIntegrationPathCollectionsAggregate: (args?: {
    where?: Maybe<HiveIntegrationPathCollectionWhere>;
  }) => HiveIntegrationPathCollectionAggregateSelection;
  hiveIntegrationPaths: (args?: {
    where?: Maybe<HiveIntegrationPathWhere>;
    options?: Maybe<HiveIntegrationPathOptions>;
  }) => Array<HiveIntegrationPath>;
  hiveIntegrationPathsCount: (args?: {
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => ScalarsEnums["Int"];
  hiveIntegrationPathsAggregate: (args?: {
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => HiveIntegrationPathAggregateSelection;
  hiveIntegrations: (args?: {
    where?: Maybe<HiveIntegrationWhere>;
    options?: Maybe<HiveIntegrationOptions>;
  }) => Array<HiveIntegration>;
  hiveIntegrationsCount: (args?: {
    where?: Maybe<HiveIntegrationWhere>;
  }) => ScalarsEnums["Int"];
  hiveIntegrationsAggregate: (args?: {
    where?: Maybe<HiveIntegrationWhere>;
  }) => HiveIntegrationAggregateSelection;
  hiveIntegrationInstances: (args?: {
    where?: Maybe<HiveIntegrationInstanceWhere>;
    options?: Maybe<HiveIntegrationInstanceOptions>;
  }) => Array<HiveIntegrationInstance>;
  hiveIntegrationInstancesCount: (args?: {
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => ScalarsEnums["Int"];
  hiveIntegrationInstancesAggregate: (args?: {
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => HiveIntegrationInstanceAggregateSelection;
  fileSystems: (args?: {
    where?: Maybe<FileSystemWhere>;
    options?: Maybe<FileSystemOptions>;
  }) => Array<FileSystem>;
  fileSystemsCount: (args?: {
    where?: Maybe<FileSystemWhere>;
  }) => ScalarsEnums["Int"];
  fileSystemsAggregate: (args?: {
    where?: Maybe<FileSystemWhere>;
  }) => FileSystemAggregateSelection;
  hiveFiles: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Array<HiveFile>;
  hiveFilesCount: (args?: {
    where?: Maybe<HiveFileWhere>;
  }) => ScalarsEnums["Int"];
  hiveFilesAggregate: (args?: {
    where?: Maybe<HiveFileWhere>;
  }) => HiveFileAggregateSelection;
  hiveOrganisations: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
    options?: Maybe<HiveOrganisationOptions>;
  }) => Array<HiveOrganisation>;
  hiveOrganisationsCount: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => ScalarsEnums["Int"];
  hiveOrganisationsAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => HiveOrganisationAggregateSelection;
  hiveUsers: (args?: {
    where?: Maybe<HiveUserWhere>;
    options?: Maybe<HiveUserOptions>;
  }) => Array<HiveUser>;
  hiveUsersCount: (args?: {
    where?: Maybe<HiveUserWhere>;
  }) => ScalarsEnums["Int"];
  hiveUsersAggregate: (args?: {
    where?: Maybe<HiveUserWhere>;
  }) => HiveUserAggregateSelection;
  roles: (args?: {
    where?: Maybe<RoleWhere>;
    options?: Maybe<RoleOptions>;
  }) => Array<Role>;
  rolesCount: (args?: { where?: Maybe<RoleWhere> }) => ScalarsEnums["Int"];
  rolesAggregate: (args?: {
    where?: Maybe<RoleWhere>;
  }) => RoleAggregateSelection;
  permissions: (args?: {
    where?: Maybe<PermissionWhere>;
    options?: Maybe<PermissionOptions>;
  }) => Array<Permission>;
  permissionsCount: (args?: {
    where?: Maybe<PermissionWhere>;
  }) => ScalarsEnums["Int"];
  permissionsAggregate: (args?: {
    where?: Maybe<PermissionWhere>;
  }) => PermissionAggregateSelection;
}

export interface Mutation {
  __typename?: "Mutation";
  empty?: Maybe<ScalarsEnums["String"]>;
  updateHiveIntegrationInstanceState: (args?: {
    id?: Maybe<Scalars["ID"]>;
    state?: Maybe<Scalars["Boolean"]>;
  }) => Maybe<ScalarsEnums["Boolean"]>;
  inviteHiveUser: (args?: {
    name?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
  }) => Maybe<ScalarsEnums["String"]>;
  createHiveServices: (args: {
    input: Array<HiveServiceCreateInput>;
  }) => CreateHiveServicesMutationResponse;
  deleteHiveServices: (args?: {
    where?: Maybe<HiveServiceWhere>;
  }) => DeleteInfo;
  updateHiveServices: (args?: {
    where?: Maybe<HiveServiceWhere>;
    update?: Maybe<HiveServiceUpdateInput>;
  }) => UpdateHiveServicesMutationResponse;
  createHiveTypes: (args: {
    input: Array<HiveTypeCreateInput>;
  }) => CreateHiveTypesMutationResponse;
  deleteHiveTypes: (args?: {
    where?: Maybe<HiveTypeWhere>;
    delete?: Maybe<HiveTypeDeleteInput>;
  }) => DeleteInfo;
  updateHiveTypes: (args?: {
    where?: Maybe<HiveTypeWhere>;
    update?: Maybe<HiveTypeUpdateInput>;
    connect?: Maybe<HiveTypeConnectInput>;
    disconnect?: Maybe<HiveTypeDisconnectInput>;
    create?: Maybe<HiveTypeRelationInput>;
    delete?: Maybe<HiveTypeDeleteInput>;
    connectOrCreate?: Maybe<HiveTypeConnectOrCreateInput>;
  }) => UpdateHiveTypesMutationResponse;
  createHiveTypeFields: (args: {
    input: Array<HiveTypeFieldCreateInput>;
  }) => CreateHiveTypeFieldsMutationResponse;
  deleteHiveTypeFields: (args?: {
    where?: Maybe<HiveTypeFieldWhere>;
  }) => DeleteInfo;
  updateHiveTypeFields: (args?: {
    where?: Maybe<HiveTypeFieldWhere>;
    update?: Maybe<HiveTypeFieldUpdateInput>;
  }) => UpdateHiveTypeFieldsMutationResponse;
  createHiveAppliances: (args: {
    input: Array<HiveApplianceCreateInput>;
  }) => CreateHiveAppliancesMutationResponse;
  deleteHiveAppliances: (args?: {
    where?: Maybe<HiveApplianceWhere>;
    delete?: Maybe<HiveApplianceDeleteInput>;
  }) => DeleteInfo;
  updateHiveAppliances: (args?: {
    where?: Maybe<HiveApplianceWhere>;
    update?: Maybe<HiveApplianceUpdateInput>;
    connect?: Maybe<HiveApplianceConnectInput>;
    disconnect?: Maybe<HiveApplianceDisconnectInput>;
    create?: Maybe<HiveApplianceRelationInput>;
    delete?: Maybe<HiveApplianceDeleteInput>;
    connectOrCreate?: Maybe<HiveApplianceConnectOrCreateInput>;
  }) => UpdateHiveAppliancesMutationResponse;
  createHiveIntegrationPathCollections: (args: {
    input: Array<HiveIntegrationPathCollectionCreateInput>;
  }) => CreateHiveIntegrationPathCollectionsMutationResponse;
  deleteHiveIntegrationPathCollections: (args?: {
    where?: Maybe<HiveIntegrationPathCollectionWhere>;
  }) => DeleteInfo;
  updateHiveIntegrationPathCollections: (args?: {
    where?: Maybe<HiveIntegrationPathCollectionWhere>;
    update?: Maybe<HiveIntegrationPathCollectionUpdateInput>;
  }) => UpdateHiveIntegrationPathCollectionsMutationResponse;
  createHiveIntegrationPaths: (args: {
    input: Array<HiveIntegrationPathCreateInput>;
  }) => CreateHiveIntegrationPathsMutationResponse;
  deleteHiveIntegrationPaths: (args?: {
    where?: Maybe<HiveIntegrationPathWhere>;
    delete?: Maybe<HiveIntegrationPathDeleteInput>;
  }) => DeleteInfo;
  updateHiveIntegrationPaths: (args?: {
    where?: Maybe<HiveIntegrationPathWhere>;
    update?: Maybe<HiveIntegrationPathUpdateInput>;
    connect?: Maybe<HiveIntegrationPathConnectInput>;
    disconnect?: Maybe<HiveIntegrationPathDisconnectInput>;
    create?: Maybe<HiveIntegrationPathRelationInput>;
    delete?: Maybe<HiveIntegrationPathDeleteInput>;
    connectOrCreate?: Maybe<HiveIntegrationPathConnectOrCreateInput>;
  }) => UpdateHiveIntegrationPathsMutationResponse;
  createHiveIntegrations: (args: {
    input: Array<HiveIntegrationCreateInput>;
  }) => CreateHiveIntegrationsMutationResponse;
  deleteHiveIntegrations: (args?: {
    where?: Maybe<HiveIntegrationWhere>;
  }) => DeleteInfo;
  updateHiveIntegrations: (args?: {
    where?: Maybe<HiveIntegrationWhere>;
    update?: Maybe<HiveIntegrationUpdateInput>;
  }) => UpdateHiveIntegrationsMutationResponse;
  createHiveIntegrationInstances: (args: {
    input: Array<HiveIntegrationInstanceCreateInput>;
  }) => CreateHiveIntegrationInstancesMutationResponse;
  deleteHiveIntegrationInstances: (args?: {
    where?: Maybe<HiveIntegrationInstanceWhere>;
    delete?: Maybe<HiveIntegrationInstanceDeleteInput>;
  }) => DeleteInfo;
  updateHiveIntegrationInstances: (args?: {
    where?: Maybe<HiveIntegrationInstanceWhere>;
    update?: Maybe<HiveIntegrationInstanceUpdateInput>;
    connect?: Maybe<HiveIntegrationInstanceConnectInput>;
    disconnect?: Maybe<HiveIntegrationInstanceDisconnectInput>;
    create?: Maybe<HiveIntegrationInstanceRelationInput>;
    delete?: Maybe<HiveIntegrationInstanceDeleteInput>;
    connectOrCreate?: Maybe<HiveIntegrationInstanceConnectOrCreateInput>;
  }) => UpdateHiveIntegrationInstancesMutationResponse;
  createFileSystems: (args: {
    input: Array<FileSystemCreateInput>;
  }) => CreateFileSystemsMutationResponse;
  deleteFileSystems: (args?: {
    where?: Maybe<FileSystemWhere>;
    delete?: Maybe<FileSystemDeleteInput>;
  }) => DeleteInfo;
  updateFileSystems: (args?: {
    where?: Maybe<FileSystemWhere>;
    update?: Maybe<FileSystemUpdateInput>;
    connect?: Maybe<FileSystemConnectInput>;
    disconnect?: Maybe<FileSystemDisconnectInput>;
    create?: Maybe<FileSystemRelationInput>;
    delete?: Maybe<FileSystemDeleteInput>;
    connectOrCreate?: Maybe<FileSystemConnectOrCreateInput>;
  }) => UpdateFileSystemsMutationResponse;
  createHiveFiles: (args: {
    input: Array<HiveFileCreateInput>;
  }) => CreateHiveFilesMutationResponse;
  deleteHiveFiles: (args?: {
    where?: Maybe<HiveFileWhere>;
    delete?: Maybe<HiveFileDeleteInput>;
  }) => DeleteInfo;
  updateHiveFiles: (args?: {
    where?: Maybe<HiveFileWhere>;
    update?: Maybe<HiveFileUpdateInput>;
    connect?: Maybe<HiveFileConnectInput>;
    disconnect?: Maybe<HiveFileDisconnectInput>;
    create?: Maybe<HiveFileRelationInput>;
    delete?: Maybe<HiveFileDeleteInput>;
    connectOrCreate?: Maybe<HiveFileConnectOrCreateInput>;
  }) => UpdateHiveFilesMutationResponse;
  createHiveOrganisations: (args: {
    input: Array<HiveOrganisationCreateInput>;
  }) => CreateHiveOrganisationsMutationResponse;
  deleteHiveOrganisations: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
    delete?: Maybe<HiveOrganisationDeleteInput>;
  }) => DeleteInfo;
  updateHiveOrganisations: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
    update?: Maybe<HiveOrganisationUpdateInput>;
    connect?: Maybe<HiveOrganisationConnectInput>;
    disconnect?: Maybe<HiveOrganisationDisconnectInput>;
    create?: Maybe<HiveOrganisationRelationInput>;
    delete?: Maybe<HiveOrganisationDeleteInput>;
    connectOrCreate?: Maybe<HiveOrganisationConnectOrCreateInput>;
  }) => UpdateHiveOrganisationsMutationResponse;
  createHiveUsers: (args: {
    input: Array<HiveUserCreateInput>;
  }) => CreateHiveUsersMutationResponse;
  deleteHiveUsers: (args?: {
    where?: Maybe<HiveUserWhere>;
    delete?: Maybe<HiveUserDeleteInput>;
  }) => DeleteInfo;
  updateHiveUsers: (args?: {
    where?: Maybe<HiveUserWhere>;
    update?: Maybe<HiveUserUpdateInput>;
    connect?: Maybe<HiveUserConnectInput>;
    disconnect?: Maybe<HiveUserDisconnectInput>;
    create?: Maybe<HiveUserRelationInput>;
    delete?: Maybe<HiveUserDeleteInput>;
    connectOrCreate?: Maybe<HiveUserConnectOrCreateInput>;
  }) => UpdateHiveUsersMutationResponse;
  createRoles: (args: {
    input: Array<RoleCreateInput>;
  }) => CreateRolesMutationResponse;
  deleteRoles: (args?: {
    where?: Maybe<RoleWhere>;
    delete?: Maybe<RoleDeleteInput>;
  }) => DeleteInfo;
  updateRoles: (args?: {
    where?: Maybe<RoleWhere>;
    update?: Maybe<RoleUpdateInput>;
    connect?: Maybe<RoleConnectInput>;
    disconnect?: Maybe<RoleDisconnectInput>;
    create?: Maybe<RoleRelationInput>;
    delete?: Maybe<RoleDeleteInput>;
    connectOrCreate?: Maybe<RoleConnectOrCreateInput>;
  }) => UpdateRolesMutationResponse;
  createPermissions: (args: {
    input: Array<PermissionCreateInput>;
  }) => CreatePermissionsMutationResponse;
  deletePermissions: (args?: {
    where?: Maybe<PermissionWhere>;
    delete?: Maybe<PermissionDeleteInput>;
  }) => DeleteInfo;
  updatePermissions: (args?: {
    where?: Maybe<PermissionWhere>;
    update?: Maybe<PermissionUpdateInput>;
    connect?: Maybe<PermissionConnectInput>;
    disconnect?: Maybe<PermissionDisconnectInput>;
    create?: Maybe<PermissionRelationInput>;
    delete?: Maybe<PermissionDeleteInput>;
    connectOrCreate?: Maybe<PermissionConnectOrCreateInput>;
  }) => UpdatePermissionsMutationResponse;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface CreateFileSystemsMutationResponse {
  __typename?: "CreateFileSystemsMutationResponse";
  info: CreateInfo;
  fileSystems: Array<FileSystem>;
}

export interface CreateHiveAppliancesMutationResponse {
  __typename?: "CreateHiveAppliancesMutationResponse";
  info: CreateInfo;
  hiveAppliances: Array<HiveAppliance>;
}

export interface CreateHiveFilesMutationResponse {
  __typename?: "CreateHiveFilesMutationResponse";
  info: CreateInfo;
  hiveFiles: Array<HiveFile>;
}

export interface CreateHiveIntegrationInstancesMutationResponse {
  __typename?: "CreateHiveIntegrationInstancesMutationResponse";
  info: CreateInfo;
  hiveIntegrationInstances: Array<HiveIntegrationInstance>;
}

export interface CreateHiveIntegrationPathCollectionsMutationResponse {
  __typename?: "CreateHiveIntegrationPathCollectionsMutationResponse";
  info: CreateInfo;
  hiveIntegrationPathCollections: Array<HiveIntegrationPathCollection>;
}

export interface CreateHiveIntegrationPathsMutationResponse {
  __typename?: "CreateHiveIntegrationPathsMutationResponse";
  info: CreateInfo;
  hiveIntegrationPaths: Array<HiveIntegrationPath>;
}

export interface CreateHiveIntegrationsMutationResponse {
  __typename?: "CreateHiveIntegrationsMutationResponse";
  info: CreateInfo;
  hiveIntegrations: Array<HiveIntegration>;
}

export interface CreateHiveOrganisationsMutationResponse {
  __typename?: "CreateHiveOrganisationsMutationResponse";
  info: CreateInfo;
  hiveOrganisations: Array<HiveOrganisation>;
}

export interface CreateHiveServicesMutationResponse {
  __typename?: "CreateHiveServicesMutationResponse";
  info: CreateInfo;
  hiveServices: Array<HiveService>;
}

export interface CreateHiveTypeFieldsMutationResponse {
  __typename?: "CreateHiveTypeFieldsMutationResponse";
  info: CreateInfo;
  hiveTypeFields: Array<HiveTypeField>;
}

export interface CreateHiveTypesMutationResponse {
  __typename?: "CreateHiveTypesMutationResponse";
  info: CreateInfo;
  hiveTypes: Array<HiveType>;
}

export interface CreateHiveUsersMutationResponse {
  __typename?: "CreateHiveUsersMutationResponse";
  info: CreateInfo;
  hiveUsers: Array<HiveUser>;
}

export interface CreateInfo {
  __typename?: "CreateInfo";
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesCreated: ScalarsEnums["Int"];
  relationshipsCreated: ScalarsEnums["Int"];
}

export interface CreatePermissionsMutationResponse {
  __typename?: "CreatePermissionsMutationResponse";
  info: CreateInfo;
  permissions: Array<Permission>;
}

export interface CreateRolesMutationResponse {
  __typename?: "CreateRolesMutationResponse";
  info: CreateInfo;
  roles: Array<Role>;
}

export interface DeleteInfo {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesDeleted: ScalarsEnums["Int"];
  relationshipsDeleted: ScalarsEnums["Int"];
}

export interface FileSystem {
  __typename?: "FileSystem";
  name: ScalarsEnums["String"];
  organisation: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
    options?: Maybe<HiveOrganisationOptions>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<FileSystemHiveOrganisationOrganisationAggregationSelection>;
  files: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Array<HiveFile>;
  filesAggregate: (args?: {
    where?: Maybe<HiveFileWhere>;
  }) => Maybe<FileSystemHiveFileFilesAggregationSelection>;
  organisationConnection: (args?: {
    where?: Maybe<FileSystemOrganisationConnectionWhere>;
    sort?: Maybe<Array<FileSystemOrganisationConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => FileSystemOrganisationConnection;
  filesConnection: (args?: {
    where?: Maybe<FileSystemFilesConnectionWhere>;
    sort?: Maybe<Array<FileSystemFilesConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => FileSystemFilesConnection;
}

export interface FileSystemAggregateSelection {
  __typename?: "FileSystemAggregateSelection";
  count: ScalarsEnums["Int"];
  name: StringAggregateSelection;
}

export interface FileSystemFilesConnection {
  __typename?: "FileSystemFilesConnection";
  edges: Array<FileSystemFilesRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface FileSystemFilesRelationship {
  __typename?: "FileSystemFilesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveFile;
}

export interface FileSystemHiveFileFilesAggregationSelection {
  __typename?: "FileSystemHiveFileFilesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<FileSystemHiveFileFilesNodeAggregateSelection>;
}

export interface FileSystemHiveFileFilesNodeAggregateSelection {
  __typename?: "FileSystemHiveFileFilesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  cid: StringAggregateSelection;
  size: IntAggregateSelection;
  mimetype: StringAggregateSelection;
}

export interface FileSystemHiveOrganisationOrganisationAggregationSelection {
  __typename?: "FileSystemHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<FileSystemHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface FileSystemHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "FileSystemHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface FileSystemOrganisationConnection {
  __typename?: "FileSystemOrganisationConnection";
  edges: Array<FileSystemOrganisationRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface FileSystemOrganisationRelationship {
  __typename?: "FileSystemOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface HiveAppliance {
  __typename?: "HiveAppliance";
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  label?: Maybe<ScalarsEnums["String"]>;
  description?: Maybe<ScalarsEnums["String"]>;
  types: (args?: {
    where?: Maybe<HiveTypeWhere>;
    options?: Maybe<HiveTypeOptions>;
  }) => Maybe<Array<Maybe<HiveType>>>;
  typesAggregate: (args?: {
    where?: Maybe<HiveTypeWhere>;
  }) => Maybe<HiveApplianceHiveTypeTypesAggregationSelection>;
  permissions: (args?: {
    where?: Maybe<PermissionWhere>;
    options?: Maybe<PermissionOptions>;
  }) => Maybe<Array<Maybe<Permission>>>;
  permissionsAggregate: (args?: {
    where?: Maybe<PermissionWhere>;
  }) => Maybe<HiveAppliancePermissionPermissionsAggregationSelection>;
  services: (args?: {
    where?: Maybe<HiveServiceWhere>;
    options?: Maybe<HiveServiceOptions>;
  }) => Maybe<Array<Maybe<HiveService>>>;
  servicesAggregate: (args?: {
    where?: Maybe<HiveServiceWhere>;
  }) => Maybe<HiveApplianceHiveServiceServicesAggregationSelection>;
  brand_image: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Maybe<HiveFile>;
  brand_imageAggregate: (args?: {
    where?: Maybe<HiveFileWhere>;
  }) => Maybe<HiveApplianceHiveFileBrand_imageAggregationSelection>;
  typesConnection: (args?: {
    where?: Maybe<HiveApplianceTypesConnectionWhere>;
    sort?: Maybe<Array<HiveApplianceTypesConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveApplianceTypesConnection;
  permissionsConnection: (args?: {
    where?: Maybe<HiveAppliancePermissionsConnectionWhere>;
    sort?: Maybe<Array<HiveAppliancePermissionsConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveAppliancePermissionsConnection;
  servicesConnection: (args?: {
    where?: Maybe<HiveApplianceServicesConnectionWhere>;
    sort?: Maybe<Array<HiveApplianceServicesConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveApplianceServicesConnection;
  brand_imageConnection: (args?: {
    where?: Maybe<HiveApplianceBrand_imageConnectionWhere>;
    sort?: Maybe<Array<HiveApplianceBrand_imageConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveApplianceBrand_imageConnection;
}

export interface HiveApplianceAggregateSelection {
  __typename?: "HiveApplianceAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  label: StringAggregateSelection;
  description: StringAggregateSelection;
}

export interface HiveApplianceBrand_imageConnection {
  __typename?: "HiveApplianceBrand_imageConnection";
  edges: Array<HiveApplianceBrand_imageRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveApplianceBrand_imageRelationship {
  __typename?: "HiveApplianceBrand_imageRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveFile;
}

export interface HiveApplianceHiveFileBrand_imageAggregationSelection {
  __typename?: "HiveApplianceHiveFileBrand_imageAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveApplianceHiveFileBrand_imageNodeAggregateSelection>;
}

export interface HiveApplianceHiveFileBrand_imageNodeAggregateSelection {
  __typename?: "HiveApplianceHiveFileBrand_imageNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  cid: StringAggregateSelection;
  size: IntAggregateSelection;
  mimetype: StringAggregateSelection;
}

export interface HiveApplianceHiveServiceServicesAggregationSelection {
  __typename?: "HiveApplianceHiveServiceServicesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveApplianceHiveServiceServicesNodeAggregateSelection>;
}

export interface HiveApplianceHiveServiceServicesNodeAggregateSelection {
  __typename?: "HiveApplianceHiveServiceServicesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveApplianceHiveTypeTypesAggregationSelection {
  __typename?: "HiveApplianceHiveTypeTypesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveApplianceHiveTypeTypesNodeAggregateSelection>;
}

export interface HiveApplianceHiveTypeTypesNodeAggregateSelection {
  __typename?: "HiveApplianceHiveTypeTypesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveAppliancePermissionPermissionsAggregationSelection {
  __typename?: "HiveAppliancePermissionPermissionsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveAppliancePermissionPermissionsNodeAggregateSelection>;
}

export interface HiveAppliancePermissionPermissionsNodeAggregateSelection {
  __typename?: "HiveAppliancePermissionPermissionsNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  action: StringAggregateSelection;
  scope: StringAggregateSelection;
}

export interface HiveAppliancePermissionsConnection {
  __typename?: "HiveAppliancePermissionsConnection";
  edges: Array<HiveAppliancePermissionsRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveAppliancePermissionsRelationship {
  __typename?: "HiveAppliancePermissionsRelationship";
  cursor: ScalarsEnums["String"];
  node: Permission;
}

export interface HiveApplianceServicesConnection {
  __typename?: "HiveApplianceServicesConnection";
  edges: Array<HiveApplianceServicesRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveApplianceServicesRelationship {
  __typename?: "HiveApplianceServicesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveService;
}

export interface HiveApplianceTypesConnection {
  __typename?: "HiveApplianceTypesConnection";
  edges: Array<HiveApplianceTypesRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveApplianceTypesRelationship {
  __typename?: "HiveApplianceTypesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveType;
}

export interface HiveFile {
  __typename?: "HiveFile";
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  cid?: Maybe<ScalarsEnums["String"]>;
  size?: Maybe<ScalarsEnums["Int"]>;
  mimetype?: Maybe<ScalarsEnums["String"]>;
  isFolder?: Maybe<ScalarsEnums["Boolean"]>;
  path_id?: Maybe<ScalarsEnums["String"]>;
  path?: Maybe<ScalarsEnums["String"]>;
  fs: (args?: {
    where?: Maybe<FileSystemWhere>;
    options?: Maybe<FileSystemOptions>;
  }) => Maybe<FileSystem>;
  fsAggregate: (args?: {
    where?: Maybe<FileSystemWhere>;
  }) => Maybe<HiveFileFileSystemFsAggregationSelection>;
  parent: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Maybe<HiveFile>;
  parentAggregate: (args?: {
    where?: Maybe<HiveFileWhere>;
  }) => Maybe<HiveFileHiveFileParentAggregationSelection>;
  children: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Maybe<Array<Maybe<HiveFile>>>;
  childrenAggregate: (args?: {
    where?: Maybe<HiveFileWhere>;
  }) => Maybe<HiveFileHiveFileChildrenAggregationSelection>;
  convertedFrom: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Maybe<HiveFile>;
  convertedFromAggregate: (args?: {
    where?: Maybe<HiveFileWhere>;
  }) => Maybe<HiveFileHiveFileConvertedFromAggregationSelection>;
  views: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Maybe<Array<Maybe<HiveFile>>>;
  viewsAggregate: (args?: {
    where?: Maybe<HiveFileWhere>;
  }) => Maybe<HiveFileHiveFileViewsAggregationSelection>;
  fsConnection: (args?: {
    where?: Maybe<HiveFileFsConnectionWhere>;
    sort?: Maybe<Array<HiveFileFsConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveFileFsConnection;
  parentConnection: (args?: {
    where?: Maybe<HiveFileParentConnectionWhere>;
    sort?: Maybe<Array<HiveFileParentConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveFileParentConnection;
  childrenConnection: (args?: {
    where?: Maybe<HiveFileChildrenConnectionWhere>;
    sort?: Maybe<Array<HiveFileChildrenConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveFileChildrenConnection;
  convertedFromConnection: (args?: {
    where?: Maybe<HiveFileConvertedFromConnectionWhere>;
    sort?: Maybe<Array<HiveFileConvertedFromConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveFileConvertedFromConnection;
  viewsConnection: (args?: {
    where?: Maybe<HiveFileViewsConnectionWhere>;
    sort?: Maybe<Array<HiveFileViewsConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveFileViewsConnection;
}

export interface HiveFileAggregateSelection {
  __typename?: "HiveFileAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  cid: StringAggregateSelection;
  size: IntAggregateSelection;
  mimetype: StringAggregateSelection;
}

export interface HiveFileChildrenConnection {
  __typename?: "HiveFileChildrenConnection";
  edges: Array<HiveFileChildrenRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveFileChildrenRelationship {
  __typename?: "HiveFileChildrenRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveFile;
}

export interface HiveFileConvertedFromConnection {
  __typename?: "HiveFileConvertedFromConnection";
  edges: Array<HiveFileConvertedFromRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveFileConvertedFromRelationship {
  __typename?: "HiveFileConvertedFromRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveFile;
}

export interface HiveFileFileSystemFsAggregationSelection {
  __typename?: "HiveFileFileSystemFsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveFileFileSystemFsNodeAggregateSelection>;
}

export interface HiveFileFileSystemFsNodeAggregateSelection {
  __typename?: "HiveFileFileSystemFsNodeAggregateSelection";
  name: StringAggregateSelection;
}

export interface HiveFileFsConnection {
  __typename?: "HiveFileFsConnection";
  edges: Array<HiveFileFsRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveFileFsRelationship {
  __typename?: "HiveFileFsRelationship";
  cursor: ScalarsEnums["String"];
  node: FileSystem;
}

export interface HiveFileHiveFileChildrenAggregationSelection {
  __typename?: "HiveFileHiveFileChildrenAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveFileHiveFileChildrenNodeAggregateSelection>;
}

export interface HiveFileHiveFileChildrenNodeAggregateSelection {
  __typename?: "HiveFileHiveFileChildrenNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  cid: StringAggregateSelection;
  size: IntAggregateSelection;
  mimetype: StringAggregateSelection;
}

export interface HiveFileHiveFileConvertedFromAggregationSelection {
  __typename?: "HiveFileHiveFileConvertedFromAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveFileHiveFileConvertedFromNodeAggregateSelection>;
}

export interface HiveFileHiveFileConvertedFromNodeAggregateSelection {
  __typename?: "HiveFileHiveFileConvertedFromNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  cid: StringAggregateSelection;
  size: IntAggregateSelection;
  mimetype: StringAggregateSelection;
}

export interface HiveFileHiveFileParentAggregationSelection {
  __typename?: "HiveFileHiveFileParentAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveFileHiveFileParentNodeAggregateSelection>;
}

export interface HiveFileHiveFileParentNodeAggregateSelection {
  __typename?: "HiveFileHiveFileParentNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  cid: StringAggregateSelection;
  size: IntAggregateSelection;
  mimetype: StringAggregateSelection;
}

export interface HiveFileHiveFileViewsAggregationSelection {
  __typename?: "HiveFileHiveFileViewsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveFileHiveFileViewsNodeAggregateSelection>;
}

export interface HiveFileHiveFileViewsNodeAggregateSelection {
  __typename?: "HiveFileHiveFileViewsNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  cid: StringAggregateSelection;
  size: IntAggregateSelection;
  mimetype: StringAggregateSelection;
}

export interface HiveFileParentConnection {
  __typename?: "HiveFileParentConnection";
  edges: Array<HiveFileParentRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveFileParentRelationship {
  __typename?: "HiveFileParentRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveFile;
}

export interface HiveFileViewsConnection {
  __typename?: "HiveFileViewsConnection";
  edges: Array<HiveFileViewsRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveFileViewsRelationship {
  __typename?: "HiveFileViewsRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveFile;
}

export interface HiveIntegration {
  __typename?: "HiveIntegration";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  description?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveIntegrationAggregateSelection {
  __typename?: "HiveIntegrationAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  description: StringAggregateSelection;
}

export interface HiveIntegrationInstance {
  __typename?: "HiveIntegrationInstance";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  isRunning?: Maybe<ScalarsEnums["Boolean"]>;
  config?: Maybe<ScalarsEnums["String"]>;
  connections: (args?: {
    where?: Maybe<HiveIntegrationPathWhere>;
    options?: Maybe<HiveIntegrationPathOptions>;
  }) => Maybe<Array<Maybe<HiveIntegrationPath>>>;
  connectionsAggregate: (args?: {
    where?: Maybe<HiveIntegrationPathWhere>;
  }) => Maybe<HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection>;
  integration: (args?: {
    where?: Maybe<HiveIntegrationWhere>;
    options?: Maybe<HiveIntegrationOptions>;
  }) => Maybe<HiveIntegration>;
  integrationAggregate: (args?: {
    where?: Maybe<HiveIntegrationWhere>;
  }) => Maybe<HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection>;
  appliances: (args?: {
    where?: Maybe<HiveApplianceWhere>;
    options?: Maybe<HiveApplianceOptions>;
  }) => Maybe<Array<Maybe<HiveAppliance>>>;
  appliancesAggregate: (args?: {
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection>;
  organisation: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
    options?: Maybe<HiveOrganisationOptions>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection>;
  connectionsConnection: (args?: {
    where?: Maybe<HiveIntegrationInstanceConnectionsConnectionWhere>;
    sort?: Maybe<Array<HiveIntegrationInstanceConnectionsConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveIntegrationInstanceConnectionsConnection;
  integrationConnection: (args?: {
    where?: Maybe<HiveIntegrationInstanceIntegrationConnectionWhere>;
    sort?: Maybe<Array<HiveIntegrationInstanceIntegrationConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveIntegrationInstanceIntegrationConnection;
  appliancesConnection: (args?: {
    where?: Maybe<HiveIntegrationInstanceAppliancesConnectionWhere>;
    sort?: Maybe<Array<HiveIntegrationInstanceAppliancesConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveIntegrationInstanceAppliancesConnection;
  organisationConnection: (args?: {
    where?: Maybe<HiveIntegrationInstanceOrganisationConnectionWhere>;
    sort?: Maybe<Array<HiveIntegrationInstanceOrganisationConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveIntegrationInstanceOrganisationConnection;
}

export interface HiveIntegrationInstanceAggregateSelection {
  __typename?: "HiveIntegrationInstanceAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  config: StringAggregateSelection;
}

export interface HiveIntegrationInstanceAppliancesConnection {
  __typename?: "HiveIntegrationInstanceAppliancesConnection";
  edges: Array<HiveIntegrationInstanceAppliancesRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveIntegrationInstanceAppliancesRelationship {
  __typename?: "HiveIntegrationInstanceAppliancesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveAppliance;
}

export interface HiveIntegrationInstanceConnectionsConnection {
  __typename?: "HiveIntegrationInstanceConnectionsConnection";
  edges: Array<HiveIntegrationInstanceConnectionsRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveIntegrationInstanceConnectionsRelationship {
  __typename?: "HiveIntegrationInstanceConnectionsRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveIntegrationPath;
}

export interface HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection {
  __typename?: "HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection>;
}

export interface HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection {
  __typename?: "HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  label: StringAggregateSelection;
  description: StringAggregateSelection;
}

export interface HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection {
  __typename?: "HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection>;
}

export interface HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection {
  __typename?: "HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  description: StringAggregateSelection;
}

export interface HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection {
  __typename?: "HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection>;
}

export interface HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection {
  __typename?: "HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
  connectionBlob: StringAggregateSelection;
}

export interface HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection {
  __typename?: "HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveIntegrationInstanceIntegrationConnection {
  __typename?: "HiveIntegrationInstanceIntegrationConnection";
  edges: Array<HiveIntegrationInstanceIntegrationRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveIntegrationInstanceIntegrationRelationship {
  __typename?: "HiveIntegrationInstanceIntegrationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveIntegration;
}

export interface HiveIntegrationInstanceOrganisationConnection {
  __typename?: "HiveIntegrationInstanceOrganisationConnection";
  edges: Array<HiveIntegrationInstanceOrganisationRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveIntegrationInstanceOrganisationRelationship {
  __typename?: "HiveIntegrationInstanceOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface HiveIntegrationPath {
  __typename?: "HiveIntegrationPath";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
  connectionBlob?: Maybe<ScalarsEnums["String"]>;
  collections?: Maybe<Array<Maybe<HiveIntegrationPathCollection>>>;
  instance: (args?: {
    where?: Maybe<HiveIntegrationInstanceWhere>;
    options?: Maybe<HiveIntegrationInstanceOptions>;
  }) => Maybe<HiveIntegrationInstance>;
  instanceAggregate: (args?: {
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => Maybe<HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection>;
  instanceConnection: (args?: {
    where?: Maybe<HiveIntegrationPathInstanceConnectionWhere>;
    sort?: Maybe<Array<HiveIntegrationPathInstanceConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveIntegrationPathInstanceConnection;
}

export interface HiveIntegrationPathAggregateSelection {
  __typename?: "HiveIntegrationPathAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
  connectionBlob: StringAggregateSelection;
}

export interface HiveIntegrationPathCollection {
  __typename?: "HiveIntegrationPathCollection";
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveIntegrationPathCollectionAggregateSelection {
  __typename?: "HiveIntegrationPathCollectionAggregateSelection";
  count: ScalarsEnums["Int"];
  name: StringAggregateSelection;
}

export interface HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection {
  __typename?: "HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection>;
}

export interface HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection {
  __typename?: "HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  config: StringAggregateSelection;
}

export interface HiveIntegrationPathInstanceConnection {
  __typename?: "HiveIntegrationPathInstanceConnection";
  edges: Array<HiveIntegrationPathInstanceRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveIntegrationPathInstanceRelationship {
  __typename?: "HiveIntegrationPathInstanceRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveIntegrationInstance;
}

export interface HiveOrganisation {
  __typename?: "HiveOrganisation";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  roles: (args?: {
    where?: Maybe<RoleWhere>;
    options?: Maybe<RoleOptions>;
  }) => Maybe<Array<Maybe<Role>>>;
  rolesAggregate: (args?: {
    where?: Maybe<RoleWhere>;
  }) => Maybe<HiveOrganisationRoleRolesAggregationSelection>;
  members: (args?: {
    where?: Maybe<HiveUserWhere>;
    options?: Maybe<HiveUserOptions>;
  }) => Maybe<Array<Maybe<HiveUser>>>;
  membersAggregate: (args?: {
    where?: Maybe<HiveUserWhere>;
  }) => Maybe<HiveOrganisationHiveUserMembersAggregationSelection>;
  appliances: (args?: {
    where?: Maybe<HiveApplianceWhere>;
    options?: Maybe<HiveApplianceOptions>;
  }) => Maybe<Array<Maybe<HiveAppliance>>>;
  appliancesAggregate: (args?: {
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<HiveOrganisationHiveApplianceAppliancesAggregationSelection>;
  integrations: (args?: {
    where?: Maybe<HiveIntegrationInstanceWhere>;
    options?: Maybe<HiveIntegrationInstanceOptions>;
  }) => Maybe<Array<Maybe<HiveIntegrationInstance>>>;
  integrationsAggregate: (args?: {
    where?: Maybe<HiveIntegrationInstanceWhere>;
  }) => Maybe<HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection>;
  rolesConnection: (args?: {
    where?: Maybe<HiveOrganisationRolesConnectionWhere>;
    sort?: Maybe<Array<HiveOrganisationRolesConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveOrganisationRolesConnection;
  membersConnection: (args?: {
    where?: Maybe<HiveOrganisationMembersConnectionWhere>;
    sort?: Maybe<Array<HiveOrganisationMembersConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveOrganisationMembersConnection;
  appliancesConnection: (args?: {
    where?: Maybe<HiveOrganisationAppliancesConnectionWhere>;
    sort?: Maybe<Array<HiveOrganisationAppliancesConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveOrganisationAppliancesConnection;
  integrationsConnection: (args?: {
    where?: Maybe<HiveOrganisationIntegrationsConnectionWhere>;
    sort?: Maybe<Array<HiveOrganisationIntegrationsConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveOrganisationIntegrationsConnection;
}

export interface HiveOrganisationAggregateSelection {
  __typename?: "HiveOrganisationAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveOrganisationAppliancesConnection {
  __typename?: "HiveOrganisationAppliancesConnection";
  edges: Array<HiveOrganisationAppliancesRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveOrganisationAppliancesRelationship {
  __typename?: "HiveOrganisationAppliancesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveAppliance;
}

export interface HiveOrganisationHiveApplianceAppliancesAggregationSelection {
  __typename?: "HiveOrganisationHiveApplianceAppliancesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection>;
}

export interface HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection {
  __typename?: "HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  label: StringAggregateSelection;
  description: StringAggregateSelection;
}

export interface HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection {
  __typename?: "HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection>;
}

export interface HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection {
  __typename?: "HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  config: StringAggregateSelection;
}

export interface HiveOrganisationHiveUserMembersAggregationSelection {
  __typename?: "HiveOrganisationHiveUserMembersAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationHiveUserMembersNodeAggregateSelection>;
}

export interface HiveOrganisationHiveUserMembersNodeAggregateSelection {
  __typename?: "HiveOrganisationHiveUserMembersNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  username: StringAggregateSelection;
  password: StringAggregateSelection;
}

export interface HiveOrganisationIntegrationsConnection {
  __typename?: "HiveOrganisationIntegrationsConnection";
  edges: Array<HiveOrganisationIntegrationsRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveOrganisationIntegrationsRelationship {
  __typename?: "HiveOrganisationIntegrationsRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveIntegrationInstance;
}

export interface HiveOrganisationMembersConnection {
  __typename?: "HiveOrganisationMembersConnection";
  edges: Array<HiveOrganisationMembersRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveOrganisationMembersRelationship {
  __typename?: "HiveOrganisationMembersRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveUser;
}

export interface HiveOrganisationRoleRolesAggregationSelection {
  __typename?: "HiveOrganisationRoleRolesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveOrganisationRoleRolesNodeAggregateSelection>;
}

export interface HiveOrganisationRoleRolesNodeAggregateSelection {
  __typename?: "HiveOrganisationRoleRolesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveOrganisationRolesConnection {
  __typename?: "HiveOrganisationRolesConnection";
  edges: Array<HiveOrganisationRolesRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveOrganisationRolesRelationship {
  __typename?: "HiveOrganisationRolesRelationship";
  cursor: ScalarsEnums["String"];
  node: Role;
}

export interface HiveService {
  __typename?: "HiveService";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveServiceAggregateSelection {
  __typename?: "HiveServiceAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveType {
  __typename?: "HiveType";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  fields: (args?: {
    where?: Maybe<HiveTypeFieldWhere>;
    options?: Maybe<HiveTypeFieldOptions>;
  }) => Maybe<Array<Maybe<HiveTypeField>>>;
  fieldsAggregate: (args?: {
    where?: Maybe<HiveTypeFieldWhere>;
  }) => Maybe<HiveTypeHiveTypeFieldFieldsAggregationSelection>;
  usedIn: (args?: {
    where?: Maybe<HiveApplianceWhere>;
    options?: Maybe<HiveApplianceOptions>;
  }) => Maybe<Array<Maybe<HiveAppliance>>>;
  usedInAggregate: (args?: {
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<HiveTypeHiveApplianceUsedInAggregationSelection>;
  fieldsConnection: (args?: {
    where?: Maybe<HiveTypeFieldsConnectionWhere>;
    sort?: Maybe<Array<HiveTypeFieldsConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveTypeFieldsConnection;
  usedInConnection: (args?: {
    where?: Maybe<HiveTypeUsedInConnectionWhere>;
    sort?: Maybe<Array<HiveTypeUsedInConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveTypeUsedInConnection;
}

export interface HiveTypeAggregateSelection {
  __typename?: "HiveTypeAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveTypeField {
  __typename?: "HiveTypeField";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface HiveTypeFieldAggregateSelection {
  __typename?: "HiveTypeFieldAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface HiveTypeFieldsConnection {
  __typename?: "HiveTypeFieldsConnection";
  edges: Array<HiveTypeFieldsRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveTypeFieldsRelationship {
  __typename?: "HiveTypeFieldsRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveTypeField;
}

export interface HiveTypeHiveApplianceUsedInAggregationSelection {
  __typename?: "HiveTypeHiveApplianceUsedInAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveTypeHiveApplianceUsedInNodeAggregateSelection>;
}

export interface HiveTypeHiveApplianceUsedInNodeAggregateSelection {
  __typename?: "HiveTypeHiveApplianceUsedInNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  label: StringAggregateSelection;
  description: StringAggregateSelection;
}

export interface HiveTypeHiveTypeFieldFieldsAggregationSelection {
  __typename?: "HiveTypeHiveTypeFieldFieldsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveTypeHiveTypeFieldFieldsNodeAggregateSelection>;
}

export interface HiveTypeHiveTypeFieldFieldsNodeAggregateSelection {
  __typename?: "HiveTypeHiveTypeFieldFieldsNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface HiveTypeUsedInConnection {
  __typename?: "HiveTypeUsedInConnection";
  edges: Array<HiveTypeUsedInRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveTypeUsedInRelationship {
  __typename?: "HiveTypeUsedInRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveAppliance;
}

export interface HiveUser {
  __typename?: "HiveUser";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  username?: Maybe<ScalarsEnums["String"]>;
  password?: Maybe<ScalarsEnums["String"]>;
  roles: (args?: {
    where?: Maybe<RoleWhere>;
    options?: Maybe<RoleOptions>;
  }) => Maybe<Array<Maybe<Role>>>;
  rolesAggregate: (args?: {
    where?: Maybe<RoleWhere>;
  }) => Maybe<HiveUserRoleRolesAggregationSelection>;
  organisation: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
    options?: Maybe<HiveOrganisationOptions>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<HiveUserHiveOrganisationOrganisationAggregationSelection>;
  rolesConnection: (args?: {
    where?: Maybe<HiveUserRolesConnectionWhere>;
    sort?: Maybe<Array<HiveUserRolesConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveUserRolesConnection;
  organisationConnection: (args?: {
    where?: Maybe<HiveUserOrganisationConnectionWhere>;
    sort?: Maybe<Array<HiveUserOrganisationConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => HiveUserOrganisationConnection;
}

export interface HiveUserAggregateSelection {
  __typename?: "HiveUserAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  username: StringAggregateSelection;
  password: StringAggregateSelection;
}

export interface HiveUserHiveOrganisationOrganisationAggregationSelection {
  __typename?: "HiveUserHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveUserHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface HiveUserHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "HiveUserHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveUserOrganisationConnection {
  __typename?: "HiveUserOrganisationConnection";
  edges: Array<HiveUserOrganisationRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveUserOrganisationRelationship {
  __typename?: "HiveUserOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface HiveUserRoleRolesAggregationSelection {
  __typename?: "HiveUserRoleRolesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<HiveUserRoleRolesNodeAggregateSelection>;
}

export interface HiveUserRoleRolesNodeAggregateSelection {
  __typename?: "HiveUserRoleRolesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface HiveUserRolesConnection {
  __typename?: "HiveUserRolesConnection";
  edges: Array<HiveUserRolesRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveUserRolesRelationship {
  __typename?: "HiveUserRolesRelationship";
  cursor: ScalarsEnums["String"];
  node: Role;
}

export interface IDAggregateSelection {
  __typename?: "IDAggregateSelection";
  shortest?: Maybe<ScalarsEnums["ID"]>;
  longest?: Maybe<ScalarsEnums["ID"]>;
}

export interface IntAggregateSelection {
  __typename?: "IntAggregateSelection";
  max?: Maybe<ScalarsEnums["Int"]>;
  min?: Maybe<ScalarsEnums["Int"]>;
  average?: Maybe<ScalarsEnums["Float"]>;
  sum?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * Pagination information (Relay)
 */
export interface PageInfo {
  __typename?: "PageInfo";
  hasNextPage: ScalarsEnums["Boolean"];
  hasPreviousPage: ScalarsEnums["Boolean"];
  startCursor?: Maybe<ScalarsEnums["String"]>;
  endCursor?: Maybe<ScalarsEnums["String"]>;
}

export interface Permission {
  __typename?: "Permission";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  action?: Maybe<ScalarsEnums["String"]>;
  scope?: Maybe<ScalarsEnums["String"]>;
  roles: (args?: {
    where?: Maybe<RoleWhere>;
    options?: Maybe<RoleOptions>;
  }) => Maybe<Array<Maybe<Role>>>;
  rolesAggregate: (args?: {
    where?: Maybe<RoleWhere>;
  }) => Maybe<PermissionRoleRolesAggregationSelection>;
  rolesConnection: (args?: {
    where?: Maybe<PermissionRolesConnectionWhere>;
    sort?: Maybe<Array<PermissionRolesConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => PermissionRolesConnection;
}

export interface PermissionAggregateSelection {
  __typename?: "PermissionAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  action: StringAggregateSelection;
  scope: StringAggregateSelection;
}

export interface PermissionRoleRolesAggregationSelection {
  __typename?: "PermissionRoleRolesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<PermissionRoleRolesNodeAggregateSelection>;
}

export interface PermissionRoleRolesNodeAggregateSelection {
  __typename?: "PermissionRoleRolesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface PermissionRolesConnection {
  __typename?: "PermissionRolesConnection";
  edges: Array<PermissionRolesRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface PermissionRolesRelationship {
  __typename?: "PermissionRolesRelationship";
  cursor: ScalarsEnums["String"];
  node: Role;
}

export interface Role {
  __typename?: "Role";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  appliances: (args?: {
    where?: Maybe<HiveApplianceWhere>;
    options?: Maybe<HiveApplianceOptions>;
  }) => Maybe<Array<Maybe<HiveAppliance>>>;
  appliancesAggregate: (args?: {
    where?: Maybe<HiveApplianceWhere>;
  }) => Maybe<RoleHiveApplianceAppliancesAggregationSelection>;
  permissions: (args?: {
    where?: Maybe<PermissionWhere>;
    options?: Maybe<PermissionOptions>;
  }) => Maybe<Array<Maybe<Permission>>>;
  permissionsAggregate: (args?: {
    where?: Maybe<PermissionWhere>;
  }) => Maybe<RolePermissionPermissionsAggregationSelection>;
  organisation: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
    options?: Maybe<HiveOrganisationOptions>;
  }) => Maybe<HiveOrganisation>;
  organisationAggregate: (args?: {
    where?: Maybe<HiveOrganisationWhere>;
  }) => Maybe<RoleHiveOrganisationOrganisationAggregationSelection>;
  appliancesConnection: (args?: {
    where?: Maybe<RoleAppliancesConnectionWhere>;
    sort?: Maybe<Array<RoleAppliancesConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => RoleAppliancesConnection;
  permissionsConnection: (args?: {
    where?: Maybe<RolePermissionsConnectionWhere>;
    sort?: Maybe<Array<RolePermissionsConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => RolePermissionsConnection;
  organisationConnection: (args?: {
    where?: Maybe<RoleOrganisationConnectionWhere>;
    sort?: Maybe<Array<RoleOrganisationConnectionSort>>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
  }) => RoleOrganisationConnection;
}

export interface RoleAggregateSelection {
  __typename?: "RoleAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface RoleAppliancesConnection {
  __typename?: "RoleAppliancesConnection";
  edges: Array<RoleAppliancesRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface RoleAppliancesRelationship {
  __typename?: "RoleAppliancesRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveAppliance;
}

export interface RoleHiveApplianceAppliancesAggregationSelection {
  __typename?: "RoleHiveApplianceAppliancesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<RoleHiveApplianceAppliancesNodeAggregateSelection>;
}

export interface RoleHiveApplianceAppliancesNodeAggregateSelection {
  __typename?: "RoleHiveApplianceAppliancesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  label: StringAggregateSelection;
  description: StringAggregateSelection;
}

export interface RoleHiveOrganisationOrganisationAggregationSelection {
  __typename?: "RoleHiveOrganisationOrganisationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<RoleHiveOrganisationOrganisationNodeAggregateSelection>;
}

export interface RoleHiveOrganisationOrganisationNodeAggregateSelection {
  __typename?: "RoleHiveOrganisationOrganisationNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface RoleOrganisationConnection {
  __typename?: "RoleOrganisationConnection";
  edges: Array<RoleOrganisationRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface RoleOrganisationRelationship {
  __typename?: "RoleOrganisationRelationship";
  cursor: ScalarsEnums["String"];
  node: HiveOrganisation;
}

export interface RolePermissionPermissionsAggregationSelection {
  __typename?: "RolePermissionPermissionsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<RolePermissionPermissionsNodeAggregateSelection>;
}

export interface RolePermissionPermissionsNodeAggregateSelection {
  __typename?: "RolePermissionPermissionsNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  action: StringAggregateSelection;
  scope: StringAggregateSelection;
}

export interface RolePermissionsConnection {
  __typename?: "RolePermissionsConnection";
  edges: Array<RolePermissionsRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface RolePermissionsRelationship {
  __typename?: "RolePermissionsRelationship";
  cursor: ScalarsEnums["String"];
  node: Permission;
}

export interface StringAggregateSelection {
  __typename?: "StringAggregateSelection";
  shortest?: Maybe<ScalarsEnums["String"]>;
  longest?: Maybe<ScalarsEnums["String"]>;
}

export interface UpdateFileSystemsMutationResponse {
  __typename?: "UpdateFileSystemsMutationResponse";
  info: UpdateInfo;
  fileSystems: Array<FileSystem>;
}

export interface UpdateHiveAppliancesMutationResponse {
  __typename?: "UpdateHiveAppliancesMutationResponse";
  info: UpdateInfo;
  hiveAppliances: Array<HiveAppliance>;
}

export interface UpdateHiveFilesMutationResponse {
  __typename?: "UpdateHiveFilesMutationResponse";
  info: UpdateInfo;
  hiveFiles: Array<HiveFile>;
}

export interface UpdateHiveIntegrationInstancesMutationResponse {
  __typename?: "UpdateHiveIntegrationInstancesMutationResponse";
  info: UpdateInfo;
  hiveIntegrationInstances: Array<HiveIntegrationInstance>;
}

export interface UpdateHiveIntegrationPathCollectionsMutationResponse {
  __typename?: "UpdateHiveIntegrationPathCollectionsMutationResponse";
  info: UpdateInfo;
  hiveIntegrationPathCollections: Array<HiveIntegrationPathCollection>;
}

export interface UpdateHiveIntegrationPathsMutationResponse {
  __typename?: "UpdateHiveIntegrationPathsMutationResponse";
  info: UpdateInfo;
  hiveIntegrationPaths: Array<HiveIntegrationPath>;
}

export interface UpdateHiveIntegrationsMutationResponse {
  __typename?: "UpdateHiveIntegrationsMutationResponse";
  info: UpdateInfo;
  hiveIntegrations: Array<HiveIntegration>;
}

export interface UpdateHiveOrganisationsMutationResponse {
  __typename?: "UpdateHiveOrganisationsMutationResponse";
  info: UpdateInfo;
  hiveOrganisations: Array<HiveOrganisation>;
}

export interface UpdateHiveServicesMutationResponse {
  __typename?: "UpdateHiveServicesMutationResponse";
  info: UpdateInfo;
  hiveServices: Array<HiveService>;
}

export interface UpdateHiveTypeFieldsMutationResponse {
  __typename?: "UpdateHiveTypeFieldsMutationResponse";
  info: UpdateInfo;
  hiveTypeFields: Array<HiveTypeField>;
}

export interface UpdateHiveTypesMutationResponse {
  __typename?: "UpdateHiveTypesMutationResponse";
  info: UpdateInfo;
  hiveTypes: Array<HiveType>;
}

export interface UpdateHiveUsersMutationResponse {
  __typename?: "UpdateHiveUsersMutationResponse";
  info: UpdateInfo;
  hiveUsers: Array<HiveUser>;
}

export interface UpdateInfo {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesCreated: ScalarsEnums["Int"];
  nodesDeleted: ScalarsEnums["Int"];
  relationshipsCreated: ScalarsEnums["Int"];
  relationshipsDeleted: ScalarsEnums["Int"];
}

export interface UpdatePermissionsMutationResponse {
  __typename?: "UpdatePermissionsMutationResponse";
  info: UpdateInfo;
  permissions: Array<Permission>;
}

export interface UpdateRolesMutationResponse {
  __typename?: "UpdateRolesMutationResponse";
  info: UpdateInfo;
  roles: Array<Role>;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  CreateFileSystemsMutationResponse: CreateFileSystemsMutationResponse;
  CreateHiveAppliancesMutationResponse: CreateHiveAppliancesMutationResponse;
  CreateHiveFilesMutationResponse: CreateHiveFilesMutationResponse;
  CreateHiveIntegrationInstancesMutationResponse: CreateHiveIntegrationInstancesMutationResponse;
  CreateHiveIntegrationPathCollectionsMutationResponse: CreateHiveIntegrationPathCollectionsMutationResponse;
  CreateHiveIntegrationPathsMutationResponse: CreateHiveIntegrationPathsMutationResponse;
  CreateHiveIntegrationsMutationResponse: CreateHiveIntegrationsMutationResponse;
  CreateHiveOrganisationsMutationResponse: CreateHiveOrganisationsMutationResponse;
  CreateHiveServicesMutationResponse: CreateHiveServicesMutationResponse;
  CreateHiveTypeFieldsMutationResponse: CreateHiveTypeFieldsMutationResponse;
  CreateHiveTypesMutationResponse: CreateHiveTypesMutationResponse;
  CreateHiveUsersMutationResponse: CreateHiveUsersMutationResponse;
  CreateInfo: CreateInfo;
  CreatePermissionsMutationResponse: CreatePermissionsMutationResponse;
  CreateRolesMutationResponse: CreateRolesMutationResponse;
  DeleteInfo: DeleteInfo;
  FileSystem: FileSystem;
  FileSystemAggregateSelection: FileSystemAggregateSelection;
  FileSystemFilesConnection: FileSystemFilesConnection;
  FileSystemFilesRelationship: FileSystemFilesRelationship;
  FileSystemHiveFileFilesAggregationSelection: FileSystemHiveFileFilesAggregationSelection;
  FileSystemHiveFileFilesNodeAggregateSelection: FileSystemHiveFileFilesNodeAggregateSelection;
  FileSystemHiveOrganisationOrganisationAggregationSelection: FileSystemHiveOrganisationOrganisationAggregationSelection;
  FileSystemHiveOrganisationOrganisationNodeAggregateSelection: FileSystemHiveOrganisationOrganisationNodeAggregateSelection;
  FileSystemOrganisationConnection: FileSystemOrganisationConnection;
  FileSystemOrganisationRelationship: FileSystemOrganisationRelationship;
  HiveAppliance: HiveAppliance;
  HiveApplianceAggregateSelection: HiveApplianceAggregateSelection;
  HiveApplianceBrand_imageConnection: HiveApplianceBrand_imageConnection;
  HiveApplianceBrand_imageRelationship: HiveApplianceBrand_imageRelationship;
  HiveApplianceHiveFileBrand_imageAggregationSelection: HiveApplianceHiveFileBrand_imageAggregationSelection;
  HiveApplianceHiveFileBrand_imageNodeAggregateSelection: HiveApplianceHiveFileBrand_imageNodeAggregateSelection;
  HiveApplianceHiveServiceServicesAggregationSelection: HiveApplianceHiveServiceServicesAggregationSelection;
  HiveApplianceHiveServiceServicesNodeAggregateSelection: HiveApplianceHiveServiceServicesNodeAggregateSelection;
  HiveApplianceHiveTypeTypesAggregationSelection: HiveApplianceHiveTypeTypesAggregationSelection;
  HiveApplianceHiveTypeTypesNodeAggregateSelection: HiveApplianceHiveTypeTypesNodeAggregateSelection;
  HiveAppliancePermissionPermissionsAggregationSelection: HiveAppliancePermissionPermissionsAggregationSelection;
  HiveAppliancePermissionPermissionsNodeAggregateSelection: HiveAppliancePermissionPermissionsNodeAggregateSelection;
  HiveAppliancePermissionsConnection: HiveAppliancePermissionsConnection;
  HiveAppliancePermissionsRelationship: HiveAppliancePermissionsRelationship;
  HiveApplianceServicesConnection: HiveApplianceServicesConnection;
  HiveApplianceServicesRelationship: HiveApplianceServicesRelationship;
  HiveApplianceTypesConnection: HiveApplianceTypesConnection;
  HiveApplianceTypesRelationship: HiveApplianceTypesRelationship;
  HiveFile: HiveFile;
  HiveFileAggregateSelection: HiveFileAggregateSelection;
  HiveFileChildrenConnection: HiveFileChildrenConnection;
  HiveFileChildrenRelationship: HiveFileChildrenRelationship;
  HiveFileConvertedFromConnection: HiveFileConvertedFromConnection;
  HiveFileConvertedFromRelationship: HiveFileConvertedFromRelationship;
  HiveFileFileSystemFsAggregationSelection: HiveFileFileSystemFsAggregationSelection;
  HiveFileFileSystemFsNodeAggregateSelection: HiveFileFileSystemFsNodeAggregateSelection;
  HiveFileFsConnection: HiveFileFsConnection;
  HiveFileFsRelationship: HiveFileFsRelationship;
  HiveFileHiveFileChildrenAggregationSelection: HiveFileHiveFileChildrenAggregationSelection;
  HiveFileHiveFileChildrenNodeAggregateSelection: HiveFileHiveFileChildrenNodeAggregateSelection;
  HiveFileHiveFileConvertedFromAggregationSelection: HiveFileHiveFileConvertedFromAggregationSelection;
  HiveFileHiveFileConvertedFromNodeAggregateSelection: HiveFileHiveFileConvertedFromNodeAggregateSelection;
  HiveFileHiveFileParentAggregationSelection: HiveFileHiveFileParentAggregationSelection;
  HiveFileHiveFileParentNodeAggregateSelection: HiveFileHiveFileParentNodeAggregateSelection;
  HiveFileHiveFileViewsAggregationSelection: HiveFileHiveFileViewsAggregationSelection;
  HiveFileHiveFileViewsNodeAggregateSelection: HiveFileHiveFileViewsNodeAggregateSelection;
  HiveFileParentConnection: HiveFileParentConnection;
  HiveFileParentRelationship: HiveFileParentRelationship;
  HiveFileViewsConnection: HiveFileViewsConnection;
  HiveFileViewsRelationship: HiveFileViewsRelationship;
  HiveIntegration: HiveIntegration;
  HiveIntegrationAggregateSelection: HiveIntegrationAggregateSelection;
  HiveIntegrationInstance: HiveIntegrationInstance;
  HiveIntegrationInstanceAggregateSelection: HiveIntegrationInstanceAggregateSelection;
  HiveIntegrationInstanceAppliancesConnection: HiveIntegrationInstanceAppliancesConnection;
  HiveIntegrationInstanceAppliancesRelationship: HiveIntegrationInstanceAppliancesRelationship;
  HiveIntegrationInstanceConnectionsConnection: HiveIntegrationInstanceConnectionsConnection;
  HiveIntegrationInstanceConnectionsRelationship: HiveIntegrationInstanceConnectionsRelationship;
  HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection: HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection;
  HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection: HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection;
  HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection: HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection;
  HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection: HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection;
  HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection: HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection;
  HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection: HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection;
  HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection: HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection;
  HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection: HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection;
  HiveIntegrationInstanceIntegrationConnection: HiveIntegrationInstanceIntegrationConnection;
  HiveIntegrationInstanceIntegrationRelationship: HiveIntegrationInstanceIntegrationRelationship;
  HiveIntegrationInstanceOrganisationConnection: HiveIntegrationInstanceOrganisationConnection;
  HiveIntegrationInstanceOrganisationRelationship: HiveIntegrationInstanceOrganisationRelationship;
  HiveIntegrationPath: HiveIntegrationPath;
  HiveIntegrationPathAggregateSelection: HiveIntegrationPathAggregateSelection;
  HiveIntegrationPathCollection: HiveIntegrationPathCollection;
  HiveIntegrationPathCollectionAggregateSelection: HiveIntegrationPathCollectionAggregateSelection;
  HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection: HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection;
  HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection: HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection;
  HiveIntegrationPathInstanceConnection: HiveIntegrationPathInstanceConnection;
  HiveIntegrationPathInstanceRelationship: HiveIntegrationPathInstanceRelationship;
  HiveOrganisation: HiveOrganisation;
  HiveOrganisationAggregateSelection: HiveOrganisationAggregateSelection;
  HiveOrganisationAppliancesConnection: HiveOrganisationAppliancesConnection;
  HiveOrganisationAppliancesRelationship: HiveOrganisationAppliancesRelationship;
  HiveOrganisationHiveApplianceAppliancesAggregationSelection: HiveOrganisationHiveApplianceAppliancesAggregationSelection;
  HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection: HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection;
  HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection: HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection;
  HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection: HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection;
  HiveOrganisationHiveUserMembersAggregationSelection: HiveOrganisationHiveUserMembersAggregationSelection;
  HiveOrganisationHiveUserMembersNodeAggregateSelection: HiveOrganisationHiveUserMembersNodeAggregateSelection;
  HiveOrganisationIntegrationsConnection: HiveOrganisationIntegrationsConnection;
  HiveOrganisationIntegrationsRelationship: HiveOrganisationIntegrationsRelationship;
  HiveOrganisationMembersConnection: HiveOrganisationMembersConnection;
  HiveOrganisationMembersRelationship: HiveOrganisationMembersRelationship;
  HiveOrganisationRoleRolesAggregationSelection: HiveOrganisationRoleRolesAggregationSelection;
  HiveOrganisationRoleRolesNodeAggregateSelection: HiveOrganisationRoleRolesNodeAggregateSelection;
  HiveOrganisationRolesConnection: HiveOrganisationRolesConnection;
  HiveOrganisationRolesRelationship: HiveOrganisationRolesRelationship;
  HiveService: HiveService;
  HiveServiceAggregateSelection: HiveServiceAggregateSelection;
  HiveType: HiveType;
  HiveTypeAggregateSelection: HiveTypeAggregateSelection;
  HiveTypeField: HiveTypeField;
  HiveTypeFieldAggregateSelection: HiveTypeFieldAggregateSelection;
  HiveTypeFieldsConnection: HiveTypeFieldsConnection;
  HiveTypeFieldsRelationship: HiveTypeFieldsRelationship;
  HiveTypeHiveApplianceUsedInAggregationSelection: HiveTypeHiveApplianceUsedInAggregationSelection;
  HiveTypeHiveApplianceUsedInNodeAggregateSelection: HiveTypeHiveApplianceUsedInNodeAggregateSelection;
  HiveTypeHiveTypeFieldFieldsAggregationSelection: HiveTypeHiveTypeFieldFieldsAggregationSelection;
  HiveTypeHiveTypeFieldFieldsNodeAggregateSelection: HiveTypeHiveTypeFieldFieldsNodeAggregateSelection;
  HiveTypeUsedInConnection: HiveTypeUsedInConnection;
  HiveTypeUsedInRelationship: HiveTypeUsedInRelationship;
  HiveUser: HiveUser;
  HiveUserAggregateSelection: HiveUserAggregateSelection;
  HiveUserHiveOrganisationOrganisationAggregationSelection: HiveUserHiveOrganisationOrganisationAggregationSelection;
  HiveUserHiveOrganisationOrganisationNodeAggregateSelection: HiveUserHiveOrganisationOrganisationNodeAggregateSelection;
  HiveUserOrganisationConnection: HiveUserOrganisationConnection;
  HiveUserOrganisationRelationship: HiveUserOrganisationRelationship;
  HiveUserRoleRolesAggregationSelection: HiveUserRoleRolesAggregationSelection;
  HiveUserRoleRolesNodeAggregateSelection: HiveUserRoleRolesNodeAggregateSelection;
  HiveUserRolesConnection: HiveUserRolesConnection;
  HiveUserRolesRelationship: HiveUserRolesRelationship;
  IDAggregateSelection: IDAggregateSelection;
  IntAggregateSelection: IntAggregateSelection;
  PageInfo: PageInfo;
  Permission: Permission;
  PermissionAggregateSelection: PermissionAggregateSelection;
  PermissionRoleRolesAggregationSelection: PermissionRoleRolesAggregationSelection;
  PermissionRoleRolesNodeAggregateSelection: PermissionRoleRolesNodeAggregateSelection;
  PermissionRolesConnection: PermissionRolesConnection;
  PermissionRolesRelationship: PermissionRolesRelationship;
  Role: Role;
  RoleAggregateSelection: RoleAggregateSelection;
  RoleAppliancesConnection: RoleAppliancesConnection;
  RoleAppliancesRelationship: RoleAppliancesRelationship;
  RoleHiveApplianceAppliancesAggregationSelection: RoleHiveApplianceAppliancesAggregationSelection;
  RoleHiveApplianceAppliancesNodeAggregateSelection: RoleHiveApplianceAppliancesNodeAggregateSelection;
  RoleHiveOrganisationOrganisationAggregationSelection: RoleHiveOrganisationOrganisationAggregationSelection;
  RoleHiveOrganisationOrganisationNodeAggregateSelection: RoleHiveOrganisationOrganisationNodeAggregateSelection;
  RoleOrganisationConnection: RoleOrganisationConnection;
  RoleOrganisationRelationship: RoleOrganisationRelationship;
  RolePermissionPermissionsAggregationSelection: RolePermissionPermissionsAggregationSelection;
  RolePermissionPermissionsNodeAggregateSelection: RolePermissionPermissionsNodeAggregateSelection;
  RolePermissionsConnection: RolePermissionsConnection;
  RolePermissionsRelationship: RolePermissionsRelationship;
  StringAggregateSelection: StringAggregateSelection;
  UpdateFileSystemsMutationResponse: UpdateFileSystemsMutationResponse;
  UpdateHiveAppliancesMutationResponse: UpdateHiveAppliancesMutationResponse;
  UpdateHiveFilesMutationResponse: UpdateHiveFilesMutationResponse;
  UpdateHiveIntegrationInstancesMutationResponse: UpdateHiveIntegrationInstancesMutationResponse;
  UpdateHiveIntegrationPathCollectionsMutationResponse: UpdateHiveIntegrationPathCollectionsMutationResponse;
  UpdateHiveIntegrationPathsMutationResponse: UpdateHiveIntegrationPathsMutationResponse;
  UpdateHiveIntegrationsMutationResponse: UpdateHiveIntegrationsMutationResponse;
  UpdateHiveOrganisationsMutationResponse: UpdateHiveOrganisationsMutationResponse;
  UpdateHiveServicesMutationResponse: UpdateHiveServicesMutationResponse;
  UpdateHiveTypeFieldsMutationResponse: UpdateHiveTypeFieldsMutationResponse;
  UpdateHiveTypesMutationResponse: UpdateHiveTypesMutationResponse;
  UpdateHiveUsersMutationResponse: UpdateHiveUsersMutationResponse;
  UpdateInfo: UpdateInfo;
  UpdatePermissionsMutationResponse: UpdatePermissionsMutationResponse;
  UpdateRolesMutationResponse: UpdateRolesMutationResponse;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "CreateFileSystemsMutationResponse"
  | "CreateHiveAppliancesMutationResponse"
  | "CreateHiveFilesMutationResponse"
  | "CreateHiveIntegrationInstancesMutationResponse"
  | "CreateHiveIntegrationPathCollectionsMutationResponse"
  | "CreateHiveIntegrationPathsMutationResponse"
  | "CreateHiveIntegrationsMutationResponse"
  | "CreateHiveOrganisationsMutationResponse"
  | "CreateHiveServicesMutationResponse"
  | "CreateHiveTypeFieldsMutationResponse"
  | "CreateHiveTypesMutationResponse"
  | "CreateHiveUsersMutationResponse"
  | "CreateInfo"
  | "CreatePermissionsMutationResponse"
  | "CreateRolesMutationResponse"
  | "DeleteInfo"
  | "FileSystem"
  | "FileSystemAggregateSelection"
  | "FileSystemFilesConnection"
  | "FileSystemFilesRelationship"
  | "FileSystemHiveFileFilesAggregationSelection"
  | "FileSystemHiveFileFilesNodeAggregateSelection"
  | "FileSystemHiveOrganisationOrganisationAggregationSelection"
  | "FileSystemHiveOrganisationOrganisationNodeAggregateSelection"
  | "FileSystemOrganisationConnection"
  | "FileSystemOrganisationRelationship"
  | "HiveAppliance"
  | "HiveApplianceAggregateSelection"
  | "HiveApplianceBrand_imageConnection"
  | "HiveApplianceBrand_imageRelationship"
  | "HiveApplianceHiveFileBrand_imageAggregationSelection"
  | "HiveApplianceHiveFileBrand_imageNodeAggregateSelection"
  | "HiveApplianceHiveServiceServicesAggregationSelection"
  | "HiveApplianceHiveServiceServicesNodeAggregateSelection"
  | "HiveApplianceHiveTypeTypesAggregationSelection"
  | "HiveApplianceHiveTypeTypesNodeAggregateSelection"
  | "HiveAppliancePermissionPermissionsAggregationSelection"
  | "HiveAppliancePermissionPermissionsNodeAggregateSelection"
  | "HiveAppliancePermissionsConnection"
  | "HiveAppliancePermissionsRelationship"
  | "HiveApplianceServicesConnection"
  | "HiveApplianceServicesRelationship"
  | "HiveApplianceTypesConnection"
  | "HiveApplianceTypesRelationship"
  | "HiveFile"
  | "HiveFileAggregateSelection"
  | "HiveFileChildrenConnection"
  | "HiveFileChildrenRelationship"
  | "HiveFileConvertedFromConnection"
  | "HiveFileConvertedFromRelationship"
  | "HiveFileFileSystemFsAggregationSelection"
  | "HiveFileFileSystemFsNodeAggregateSelection"
  | "HiveFileFsConnection"
  | "HiveFileFsRelationship"
  | "HiveFileHiveFileChildrenAggregationSelection"
  | "HiveFileHiveFileChildrenNodeAggregateSelection"
  | "HiveFileHiveFileConvertedFromAggregationSelection"
  | "HiveFileHiveFileConvertedFromNodeAggregateSelection"
  | "HiveFileHiveFileParentAggregationSelection"
  | "HiveFileHiveFileParentNodeAggregateSelection"
  | "HiveFileHiveFileViewsAggregationSelection"
  | "HiveFileHiveFileViewsNodeAggregateSelection"
  | "HiveFileParentConnection"
  | "HiveFileParentRelationship"
  | "HiveFileViewsConnection"
  | "HiveFileViewsRelationship"
  | "HiveIntegration"
  | "HiveIntegrationAggregateSelection"
  | "HiveIntegrationInstance"
  | "HiveIntegrationInstanceAggregateSelection"
  | "HiveIntegrationInstanceAppliancesConnection"
  | "HiveIntegrationInstanceAppliancesRelationship"
  | "HiveIntegrationInstanceConnectionsConnection"
  | "HiveIntegrationInstanceConnectionsRelationship"
  | "HiveIntegrationInstanceHiveApplianceAppliancesAggregationSelection"
  | "HiveIntegrationInstanceHiveApplianceAppliancesNodeAggregateSelection"
  | "HiveIntegrationInstanceHiveIntegrationIntegrationAggregationSelection"
  | "HiveIntegrationInstanceHiveIntegrationIntegrationNodeAggregateSelection"
  | "HiveIntegrationInstanceHiveIntegrationPathConnectionsAggregationSelection"
  | "HiveIntegrationInstanceHiveIntegrationPathConnectionsNodeAggregateSelection"
  | "HiveIntegrationInstanceHiveOrganisationOrganisationAggregationSelection"
  | "HiveIntegrationInstanceHiveOrganisationOrganisationNodeAggregateSelection"
  | "HiveIntegrationInstanceIntegrationConnection"
  | "HiveIntegrationInstanceIntegrationRelationship"
  | "HiveIntegrationInstanceOrganisationConnection"
  | "HiveIntegrationInstanceOrganisationRelationship"
  | "HiveIntegrationPath"
  | "HiveIntegrationPathAggregateSelection"
  | "HiveIntegrationPathCollection"
  | "HiveIntegrationPathCollectionAggregateSelection"
  | "HiveIntegrationPathHiveIntegrationInstanceInstanceAggregationSelection"
  | "HiveIntegrationPathHiveIntegrationInstanceInstanceNodeAggregateSelection"
  | "HiveIntegrationPathInstanceConnection"
  | "HiveIntegrationPathInstanceRelationship"
  | "HiveOrganisation"
  | "HiveOrganisationAggregateSelection"
  | "HiveOrganisationAppliancesConnection"
  | "HiveOrganisationAppliancesRelationship"
  | "HiveOrganisationHiveApplianceAppliancesAggregationSelection"
  | "HiveOrganisationHiveApplianceAppliancesNodeAggregateSelection"
  | "HiveOrganisationHiveIntegrationInstanceIntegrationsAggregationSelection"
  | "HiveOrganisationHiveIntegrationInstanceIntegrationsNodeAggregateSelection"
  | "HiveOrganisationHiveUserMembersAggregationSelection"
  | "HiveOrganisationHiveUserMembersNodeAggregateSelection"
  | "HiveOrganisationIntegrationsConnection"
  | "HiveOrganisationIntegrationsRelationship"
  | "HiveOrganisationMembersConnection"
  | "HiveOrganisationMembersRelationship"
  | "HiveOrganisationRoleRolesAggregationSelection"
  | "HiveOrganisationRoleRolesNodeAggregateSelection"
  | "HiveOrganisationRolesConnection"
  | "HiveOrganisationRolesRelationship"
  | "HiveService"
  | "HiveServiceAggregateSelection"
  | "HiveType"
  | "HiveTypeAggregateSelection"
  | "HiveTypeField"
  | "HiveTypeFieldAggregateSelection"
  | "HiveTypeFieldsConnection"
  | "HiveTypeFieldsRelationship"
  | "HiveTypeHiveApplianceUsedInAggregationSelection"
  | "HiveTypeHiveApplianceUsedInNodeAggregateSelection"
  | "HiveTypeHiveTypeFieldFieldsAggregationSelection"
  | "HiveTypeHiveTypeFieldFieldsNodeAggregateSelection"
  | "HiveTypeUsedInConnection"
  | "HiveTypeUsedInRelationship"
  | "HiveUser"
  | "HiveUserAggregateSelection"
  | "HiveUserHiveOrganisationOrganisationAggregationSelection"
  | "HiveUserHiveOrganisationOrganisationNodeAggregateSelection"
  | "HiveUserOrganisationConnection"
  | "HiveUserOrganisationRelationship"
  | "HiveUserRoleRolesAggregationSelection"
  | "HiveUserRoleRolesNodeAggregateSelection"
  | "HiveUserRolesConnection"
  | "HiveUserRolesRelationship"
  | "IDAggregateSelection"
  | "IntAggregateSelection"
  | "PageInfo"
  | "Permission"
  | "PermissionAggregateSelection"
  | "PermissionRoleRolesAggregationSelection"
  | "PermissionRoleRolesNodeAggregateSelection"
  | "PermissionRolesConnection"
  | "PermissionRolesRelationship"
  | "Role"
  | "RoleAggregateSelection"
  | "RoleAppliancesConnection"
  | "RoleAppliancesRelationship"
  | "RoleHiveApplianceAppliancesAggregationSelection"
  | "RoleHiveApplianceAppliancesNodeAggregateSelection"
  | "RoleHiveOrganisationOrganisationAggregationSelection"
  | "RoleHiveOrganisationOrganisationNodeAggregateSelection"
  | "RoleOrganisationConnection"
  | "RoleOrganisationRelationship"
  | "RolePermissionPermissionsAggregationSelection"
  | "RolePermissionPermissionsNodeAggregateSelection"
  | "RolePermissionsConnection"
  | "RolePermissionsRelationship"
  | "StringAggregateSelection"
  | "UpdateFileSystemsMutationResponse"
  | "UpdateHiveAppliancesMutationResponse"
  | "UpdateHiveFilesMutationResponse"
  | "UpdateHiveIntegrationInstancesMutationResponse"
  | "UpdateHiveIntegrationPathCollectionsMutationResponse"
  | "UpdateHiveIntegrationPathsMutationResponse"
  | "UpdateHiveIntegrationsMutationResponse"
  | "UpdateHiveOrganisationsMutationResponse"
  | "UpdateHiveServicesMutationResponse"
  | "UpdateHiveTypeFieldsMutationResponse"
  | "UpdateHiveTypesMutationResponse"
  | "UpdateHiveUsersMutationResponse"
  | "UpdateInfo"
  | "UpdatePermissionsMutationResponse"
  | "UpdateRolesMutationResponse";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  SortDirection: SortDirection | undefined;
}
