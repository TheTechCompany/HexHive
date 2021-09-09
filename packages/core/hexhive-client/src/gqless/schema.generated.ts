/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from "gqless";

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
  /** A date and time, represented as an ISO-8601 string */
  DateTime: string;
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
}

export enum SortDirection {
  /** Sort by field values in ascending order. */
  ASC = "ASC",
  /** Sort by field values in descending order. */
  DESC = "DESC",
}

export interface FileSystemConnectInput {
  files?: Maybe<Array<FileSystemFilesConnectFieldInput>>;
}

export interface FileSystemConnectWhere {
  node: FileSystemWhere;
}

export interface FileSystemCreateInput {
  name: Scalars["String"];
  files?: Maybe<FileSystemFilesFieldInput>;
}

export interface FileSystemDeleteInput {
  files?: Maybe<Array<FileSystemFilesDeleteFieldInput>>;
}

export interface FileSystemDisconnectInput {
  files?: Maybe<Array<FileSystemFilesDisconnectFieldInput>>;
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
}

export interface FileSystemOptions {
  /** Specify one or more FileSystemSort objects to sort FileSystems by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<FileSystemSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

export interface FileSystemRelationInput {
  files?: Maybe<Array<FileSystemFilesCreateFieldInput>>;
}

/** Fields to sort FileSystems by. The order in which sorts are applied is not guaranteed when specifying many fields in one FileSystemSort object. */
export interface FileSystemSort {
  name?: Maybe<SortDirection>;
}

export interface FileSystemUpdateInput {
  name?: Maybe<Scalars["String"]>;
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
  files?: Maybe<HiveFileWhere>;
  files_NOT?: Maybe<HiveFileWhere>;
  filesConnection?: Maybe<FileSystemFilesConnectionWhere>;
  filesConnection_NOT?: Maybe<FileSystemFilesConnectionWhere>;
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
}

export interface HiveApplianceConnectInput {
  permissions?: Maybe<Array<HiveAppliancePermissionsConnectFieldInput>>;
  services?: Maybe<Array<HiveApplianceServicesConnectFieldInput>>;
  brand_image?: Maybe<HiveApplianceBrand_imageConnectFieldInput>;
}

export interface HiveApplianceCreateInput {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  permissions?: Maybe<HiveAppliancePermissionsFieldInput>;
  services?: Maybe<HiveApplianceServicesFieldInput>;
  brand_image?: Maybe<HiveApplianceBrand_imageFieldInput>;
}

export interface HiveApplianceDeleteInput {
  permissions?: Maybe<Array<HiveAppliancePermissionsDeleteFieldInput>>;
  services?: Maybe<Array<HiveApplianceServicesDeleteFieldInput>>;
  brand_image?: Maybe<HiveApplianceBrand_imageDeleteFieldInput>;
}

export interface HiveApplianceDisconnectInput {
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

export interface HiveAppliancePermissionsConnectFieldInput {
  where?: Maybe<HivePermissionConnectWhere>;
}

export interface HiveAppliancePermissionsConnectionSort {
  node?: Maybe<HivePermissionSort>;
}

export interface HiveAppliancePermissionsConnectionWhere {
  AND?: Maybe<Array<HiveAppliancePermissionsConnectionWhere>>;
  OR?: Maybe<Array<HiveAppliancePermissionsConnectionWhere>>;
  node?: Maybe<HivePermissionWhere>;
  node_NOT?: Maybe<HivePermissionWhere>;
}

export interface HiveAppliancePermissionsCreateFieldInput {
  node: HivePermissionCreateInput;
}

export interface HiveAppliancePermissionsDeleteFieldInput {
  where?: Maybe<HiveAppliancePermissionsConnectionWhere>;
}

export interface HiveAppliancePermissionsDisconnectFieldInput {
  where?: Maybe<HiveAppliancePermissionsConnectionWhere>;
}

export interface HiveAppliancePermissionsFieldInput {
  create?: Maybe<Array<HiveAppliancePermissionsCreateFieldInput>>;
  connect?: Maybe<Array<HiveAppliancePermissionsConnectFieldInput>>;
}

export interface HiveAppliancePermissionsUpdateConnectionInput {
  node?: Maybe<HivePermissionUpdateInput>;
}

export interface HiveAppliancePermissionsUpdateFieldInput {
  where?: Maybe<HiveAppliancePermissionsConnectionWhere>;
  update?: Maybe<HiveAppliancePermissionsUpdateConnectionInput>;
  connect?: Maybe<Array<HiveAppliancePermissionsConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveAppliancePermissionsDisconnectFieldInput>>;
  create?: Maybe<Array<HiveAppliancePermissionsCreateFieldInput>>;
  delete?: Maybe<Array<HiveAppliancePermissionsDeleteFieldInput>>;
}

export interface HiveApplianceRelationInput {
  permissions?: Maybe<Array<HiveAppliancePermissionsCreateFieldInput>>;
  services?: Maybe<Array<HiveApplianceServicesCreateFieldInput>>;
  brand_image?: Maybe<HiveApplianceBrand_imageCreateFieldInput>;
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
  description?: Maybe<SortDirection>;
}

export interface HiveApplianceUpdateInput {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
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
  permissions?: Maybe<HivePermissionWhere>;
  permissions_NOT?: Maybe<HivePermissionWhere>;
  services?: Maybe<HiveServiceWhere>;
  services_NOT?: Maybe<HiveServiceWhere>;
  brand_image?: Maybe<HiveFileWhere>;
  brand_image_NOT?: Maybe<HiveFileWhere>;
  permissionsConnection?: Maybe<HiveAppliancePermissionsConnectionWhere>;
  permissionsConnection_NOT?: Maybe<HiveAppliancePermissionsConnectionWhere>;
  servicesConnection?: Maybe<HiveApplianceServicesConnectionWhere>;
  servicesConnection_NOT?: Maybe<HiveApplianceServicesConnectionWhere>;
  brand_imageConnection?: Maybe<HiveApplianceBrand_imageConnectionWhere>;
  brand_imageConnection_NOT?: Maybe<HiveApplianceBrand_imageConnectionWhere>;
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
}

export interface HiveFileConnectInput {
  fs?: Maybe<HiveFileFsConnectFieldInput>;
  parent?: Maybe<HiveFileParentConnectFieldInput>;
  children?: Maybe<Array<HiveFileChildrenConnectFieldInput>>;
  conversions?: Maybe<Array<HiveFileConversionsConnectFieldInput>>;
  convertedBy?: Maybe<HiveFileConvertedByConnectFieldInput>;
  convertedFrom?: Maybe<HiveFileConvertedFromConnectFieldInput>;
  convertedTo?: Maybe<Array<HiveFileConvertedToConnectFieldInput>>;
}

export interface HiveFileConnectWhere {
  node: HiveFileWhere;
}

export interface HiveFileConversionsConnectFieldInput {
  where?: Maybe<HiveFileProcessConnectWhere>;
  connect?: Maybe<Array<HiveFileProcessConnectInput>>;
}

export interface HiveFileConversionsConnectionSort {
  node?: Maybe<HiveFileProcessSort>;
}

export interface HiveFileConversionsConnectionWhere {
  AND?: Maybe<Array<HiveFileConversionsConnectionWhere>>;
  OR?: Maybe<Array<HiveFileConversionsConnectionWhere>>;
  node?: Maybe<HiveFileProcessWhere>;
  node_NOT?: Maybe<HiveFileProcessWhere>;
}

export interface HiveFileConversionsCreateFieldInput {
  node: HiveFileProcessCreateInput;
}

export interface HiveFileConversionsDeleteFieldInput {
  where?: Maybe<HiveFileConversionsConnectionWhere>;
  delete?: Maybe<HiveFileProcessDeleteInput>;
}

export interface HiveFileConversionsDisconnectFieldInput {
  where?: Maybe<HiveFileConversionsConnectionWhere>;
  disconnect?: Maybe<HiveFileProcessDisconnectInput>;
}

export interface HiveFileConversionsFieldInput {
  create?: Maybe<Array<HiveFileConversionsCreateFieldInput>>;
  connect?: Maybe<Array<HiveFileConversionsConnectFieldInput>>;
}

export interface HiveFileConversionsUpdateConnectionInput {
  node?: Maybe<HiveFileProcessUpdateInput>;
}

export interface HiveFileConversionsUpdateFieldInput {
  where?: Maybe<HiveFileConversionsConnectionWhere>;
  update?: Maybe<HiveFileConversionsUpdateConnectionInput>;
  connect?: Maybe<Array<HiveFileConversionsConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveFileConversionsDisconnectFieldInput>>;
  create?: Maybe<Array<HiveFileConversionsCreateFieldInput>>;
  delete?: Maybe<Array<HiveFileConversionsDeleteFieldInput>>;
}

export interface HiveFileConvertedByConnectFieldInput {
  where?: Maybe<HiveFileProcessConnectWhere>;
  connect?: Maybe<HiveFileProcessConnectInput>;
}

export interface HiveFileConvertedByConnectionSort {
  node?: Maybe<HiveFileProcessSort>;
}

export interface HiveFileConvertedByConnectionWhere {
  AND?: Maybe<Array<HiveFileConvertedByConnectionWhere>>;
  OR?: Maybe<Array<HiveFileConvertedByConnectionWhere>>;
  node?: Maybe<HiveFileProcessWhere>;
  node_NOT?: Maybe<HiveFileProcessWhere>;
}

export interface HiveFileConvertedByCreateFieldInput {
  node: HiveFileProcessCreateInput;
}

export interface HiveFileConvertedByDeleteFieldInput {
  where?: Maybe<HiveFileConvertedByConnectionWhere>;
  delete?: Maybe<HiveFileProcessDeleteInput>;
}

export interface HiveFileConvertedByDisconnectFieldInput {
  where?: Maybe<HiveFileConvertedByConnectionWhere>;
  disconnect?: Maybe<HiveFileProcessDisconnectInput>;
}

export interface HiveFileConvertedByFieldInput {
  create?: Maybe<HiveFileConvertedByCreateFieldInput>;
  connect?: Maybe<HiveFileConvertedByConnectFieldInput>;
}

export interface HiveFileConvertedByUpdateConnectionInput {
  node?: Maybe<HiveFileProcessUpdateInput>;
}

export interface HiveFileConvertedByUpdateFieldInput {
  where?: Maybe<HiveFileConvertedByConnectionWhere>;
  update?: Maybe<HiveFileConvertedByUpdateConnectionInput>;
  connect?: Maybe<HiveFileConvertedByConnectFieldInput>;
  disconnect?: Maybe<HiveFileConvertedByDisconnectFieldInput>;
  create?: Maybe<HiveFileConvertedByCreateFieldInput>;
  delete?: Maybe<HiveFileConvertedByDeleteFieldInput>;
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
}

export interface HiveFileConvertedToConnectFieldInput {
  where?: Maybe<HiveFileConnectWhere>;
  connect?: Maybe<Array<HiveFileConnectInput>>;
}

export interface HiveFileConvertedToConnectionSort {
  node?: Maybe<HiveFileSort>;
}

export interface HiveFileConvertedToConnectionWhere {
  AND?: Maybe<Array<HiveFileConvertedToConnectionWhere>>;
  OR?: Maybe<Array<HiveFileConvertedToConnectionWhere>>;
  node?: Maybe<HiveFileWhere>;
  node_NOT?: Maybe<HiveFileWhere>;
}

export interface HiveFileConvertedToCreateFieldInput {
  node: HiveFileCreateInput;
}

export interface HiveFileConvertedToDeleteFieldInput {
  where?: Maybe<HiveFileConvertedToConnectionWhere>;
  delete?: Maybe<HiveFileDeleteInput>;
}

export interface HiveFileConvertedToDisconnectFieldInput {
  where?: Maybe<HiveFileConvertedToConnectionWhere>;
  disconnect?: Maybe<HiveFileDisconnectInput>;
}

export interface HiveFileConvertedToFieldInput {
  create?: Maybe<Array<HiveFileConvertedToCreateFieldInput>>;
  connect?: Maybe<Array<HiveFileConvertedToConnectFieldInput>>;
}

export interface HiveFileConvertedToUpdateConnectionInput {
  node?: Maybe<HiveFileUpdateInput>;
}

export interface HiveFileConvertedToUpdateFieldInput {
  where?: Maybe<HiveFileConvertedToConnectionWhere>;
  update?: Maybe<HiveFileConvertedToUpdateConnectionInput>;
  connect?: Maybe<Array<HiveFileConvertedToConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveFileConvertedToDisconnectFieldInput>>;
  create?: Maybe<Array<HiveFileConvertedToCreateFieldInput>>;
  delete?: Maybe<Array<HiveFileConvertedToDeleteFieldInput>>;
}

export interface HiveFileCreateInput {
  name: Scalars["String"];
  isFolder?: Maybe<Scalars["Boolean"]>;
  fs?: Maybe<HiveFileFsFieldInput>;
  parent?: Maybe<HiveFileParentFieldInput>;
  children?: Maybe<HiveFileChildrenFieldInput>;
  conversions?: Maybe<HiveFileConversionsFieldInput>;
  convertedBy?: Maybe<HiveFileConvertedByFieldInput>;
  convertedFrom?: Maybe<HiveFileConvertedFromFieldInput>;
  convertedTo?: Maybe<HiveFileConvertedToFieldInput>;
}

export interface HiveFileDeleteInput {
  fs?: Maybe<HiveFileFsDeleteFieldInput>;
  parent?: Maybe<HiveFileParentDeleteFieldInput>;
  children?: Maybe<Array<HiveFileChildrenDeleteFieldInput>>;
  conversions?: Maybe<Array<HiveFileConversionsDeleteFieldInput>>;
  convertedBy?: Maybe<HiveFileConvertedByDeleteFieldInput>;
  convertedFrom?: Maybe<HiveFileConvertedFromDeleteFieldInput>;
  convertedTo?: Maybe<Array<HiveFileConvertedToDeleteFieldInput>>;
}

export interface HiveFileDisconnectInput {
  fs?: Maybe<HiveFileFsDisconnectFieldInput>;
  parent?: Maybe<HiveFileParentDisconnectFieldInput>;
  children?: Maybe<Array<HiveFileChildrenDisconnectFieldInput>>;
  conversions?: Maybe<Array<HiveFileConversionsDisconnectFieldInput>>;
  convertedBy?: Maybe<HiveFileConvertedByDisconnectFieldInput>;
  convertedFrom?: Maybe<HiveFileConvertedFromDisconnectFieldInput>;
  convertedTo?: Maybe<Array<HiveFileConvertedToDisconnectFieldInput>>;
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
}

export interface HiveFileProcessConnectInput {
  inputs?: Maybe<Array<HiveFileProcessInputsConnectFieldInput>>;
  outputs?: Maybe<Array<HiveFileProcessOutputsConnectFieldInput>>;
}

export interface HiveFileProcessConnectWhere {
  node: HiveFileProcessWhere;
}

export interface HiveFileProcessCreateInput {
  id: Scalars["ID"];
  completedAt?: Maybe<Scalars["DateTime"]>;
  inputs?: Maybe<HiveFileProcessInputsFieldInput>;
  outputs?: Maybe<HiveFileProcessOutputsFieldInput>;
}

export interface HiveFileProcessDeleteInput {
  inputs?: Maybe<Array<HiveFileProcessInputsDeleteFieldInput>>;
  outputs?: Maybe<Array<HiveFileProcessOutputsDeleteFieldInput>>;
}

export interface HiveFileProcessDisconnectInput {
  inputs?: Maybe<Array<HiveFileProcessInputsDisconnectFieldInput>>;
  outputs?: Maybe<Array<HiveFileProcessOutputsDisconnectFieldInput>>;
}

export interface HiveFileProcessInputsConnectFieldInput {
  where?: Maybe<HiveFileConnectWhere>;
  connect?: Maybe<Array<HiveFileConnectInput>>;
}

export interface HiveFileProcessInputsConnectionSort {
  node?: Maybe<HiveFileSort>;
}

export interface HiveFileProcessInputsConnectionWhere {
  AND?: Maybe<Array<HiveFileProcessInputsConnectionWhere>>;
  OR?: Maybe<Array<HiveFileProcessInputsConnectionWhere>>;
  node?: Maybe<HiveFileWhere>;
  node_NOT?: Maybe<HiveFileWhere>;
}

export interface HiveFileProcessInputsCreateFieldInput {
  node: HiveFileCreateInput;
}

export interface HiveFileProcessInputsDeleteFieldInput {
  where?: Maybe<HiveFileProcessInputsConnectionWhere>;
  delete?: Maybe<HiveFileDeleteInput>;
}

export interface HiveFileProcessInputsDisconnectFieldInput {
  where?: Maybe<HiveFileProcessInputsConnectionWhere>;
  disconnect?: Maybe<HiveFileDisconnectInput>;
}

export interface HiveFileProcessInputsFieldInput {
  create?: Maybe<Array<HiveFileProcessInputsCreateFieldInput>>;
  connect?: Maybe<Array<HiveFileProcessInputsConnectFieldInput>>;
}

export interface HiveFileProcessInputsUpdateConnectionInput {
  node?: Maybe<HiveFileUpdateInput>;
}

export interface HiveFileProcessInputsUpdateFieldInput {
  where?: Maybe<HiveFileProcessInputsConnectionWhere>;
  update?: Maybe<HiveFileProcessInputsUpdateConnectionInput>;
  connect?: Maybe<Array<HiveFileProcessInputsConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveFileProcessInputsDisconnectFieldInput>>;
  create?: Maybe<Array<HiveFileProcessInputsCreateFieldInput>>;
  delete?: Maybe<Array<HiveFileProcessInputsDeleteFieldInput>>;
}

export interface HiveFileProcessOptions {
  /** Specify one or more HiveFileProcessSort objects to sort HiveFileProcesses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HiveFileProcessSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

export interface HiveFileProcessOutputsConnectFieldInput {
  where?: Maybe<HiveFileConnectWhere>;
  connect?: Maybe<Array<HiveFileConnectInput>>;
}

export interface HiveFileProcessOutputsConnectionSort {
  node?: Maybe<HiveFileSort>;
}

export interface HiveFileProcessOutputsConnectionWhere {
  AND?: Maybe<Array<HiveFileProcessOutputsConnectionWhere>>;
  OR?: Maybe<Array<HiveFileProcessOutputsConnectionWhere>>;
  node?: Maybe<HiveFileWhere>;
  node_NOT?: Maybe<HiveFileWhere>;
}

export interface HiveFileProcessOutputsCreateFieldInput {
  node: HiveFileCreateInput;
}

export interface HiveFileProcessOutputsDeleteFieldInput {
  where?: Maybe<HiveFileProcessOutputsConnectionWhere>;
  delete?: Maybe<HiveFileDeleteInput>;
}

export interface HiveFileProcessOutputsDisconnectFieldInput {
  where?: Maybe<HiveFileProcessOutputsConnectionWhere>;
  disconnect?: Maybe<HiveFileDisconnectInput>;
}

export interface HiveFileProcessOutputsFieldInput {
  create?: Maybe<Array<HiveFileProcessOutputsCreateFieldInput>>;
  connect?: Maybe<Array<HiveFileProcessOutputsConnectFieldInput>>;
}

export interface HiveFileProcessOutputsUpdateConnectionInput {
  node?: Maybe<HiveFileUpdateInput>;
}

export interface HiveFileProcessOutputsUpdateFieldInput {
  where?: Maybe<HiveFileProcessOutputsConnectionWhere>;
  update?: Maybe<HiveFileProcessOutputsUpdateConnectionInput>;
  connect?: Maybe<Array<HiveFileProcessOutputsConnectFieldInput>>;
  disconnect?: Maybe<Array<HiveFileProcessOutputsDisconnectFieldInput>>;
  create?: Maybe<Array<HiveFileProcessOutputsCreateFieldInput>>;
  delete?: Maybe<Array<HiveFileProcessOutputsDeleteFieldInput>>;
}

/** Fields to sort HiveFileProcesses by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveFileProcessSort object. */
export interface HiveFileProcessSort {
  id?: Maybe<SortDirection>;
  createdAt?: Maybe<SortDirection>;
  completedAt?: Maybe<SortDirection>;
}

export interface HiveFileProcessUpdateInput {
  id?: Maybe<Scalars["ID"]>;
  completedAt?: Maybe<Scalars["DateTime"]>;
  inputs?: Maybe<Array<HiveFileProcessInputsUpdateFieldInput>>;
  outputs?: Maybe<Array<HiveFileProcessOutputsUpdateFieldInput>>;
}

export interface HiveFileProcessWhere {
  OR?: Maybe<Array<HiveFileProcessWhere>>;
  AND?: Maybe<Array<HiveFileProcessWhere>>;
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
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_NOT?: Maybe<Scalars["DateTime"]>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  createdAt_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_GTE?: Maybe<Scalars["DateTime"]>;
  completedAt?: Maybe<Scalars["DateTime"]>;
  completedAt_NOT?: Maybe<Scalars["DateTime"]>;
  completedAt_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  completedAt_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  completedAt_LT?: Maybe<Scalars["DateTime"]>;
  completedAt_LTE?: Maybe<Scalars["DateTime"]>;
  completedAt_GT?: Maybe<Scalars["DateTime"]>;
  completedAt_GTE?: Maybe<Scalars["DateTime"]>;
  inputs?: Maybe<HiveFileWhere>;
  inputs_NOT?: Maybe<HiveFileWhere>;
  outputs?: Maybe<HiveFileWhere>;
  outputs_NOT?: Maybe<HiveFileWhere>;
  inputsConnection?: Maybe<HiveFileProcessInputsConnectionWhere>;
  inputsConnection_NOT?: Maybe<HiveFileProcessInputsConnectionWhere>;
  outputsConnection?: Maybe<HiveFileProcessOutputsConnectionWhere>;
  outputsConnection_NOT?: Maybe<HiveFileProcessOutputsConnectionWhere>;
}

export interface HiveFileRelationInput {
  fs?: Maybe<HiveFileFsCreateFieldInput>;
  parent?: Maybe<HiveFileParentCreateFieldInput>;
  children?: Maybe<Array<HiveFileChildrenCreateFieldInput>>;
  conversions?: Maybe<Array<HiveFileConversionsCreateFieldInput>>;
  convertedBy?: Maybe<HiveFileConvertedByCreateFieldInput>;
  convertedFrom?: Maybe<HiveFileConvertedFromCreateFieldInput>;
  convertedTo?: Maybe<Array<HiveFileConvertedToCreateFieldInput>>;
}

/** Fields to sort HiveFiles by. The order in which sorts are applied is not guaranteed when specifying many fields in one HiveFileSort object. */
export interface HiveFileSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  isFolder?: Maybe<SortDirection>;
}

export interface HiveFileUpdateInput {
  name?: Maybe<Scalars["String"]>;
  isFolder?: Maybe<Scalars["Boolean"]>;
  fs?: Maybe<HiveFileFsUpdateFieldInput>;
  parent?: Maybe<HiveFileParentUpdateFieldInput>;
  children?: Maybe<Array<HiveFileChildrenUpdateFieldInput>>;
  conversions?: Maybe<Array<HiveFileConversionsUpdateFieldInput>>;
  convertedBy?: Maybe<HiveFileConvertedByUpdateFieldInput>;
  convertedFrom?: Maybe<HiveFileConvertedFromUpdateFieldInput>;
  convertedTo?: Maybe<Array<HiveFileConvertedToUpdateFieldInput>>;
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
  isFolder?: Maybe<Scalars["Boolean"]>;
  isFolder_NOT?: Maybe<Scalars["Boolean"]>;
  fs?: Maybe<FileSystemWhere>;
  fs_NOT?: Maybe<FileSystemWhere>;
  parent?: Maybe<HiveFileWhere>;
  parent_NOT?: Maybe<HiveFileWhere>;
  children?: Maybe<HiveFileWhere>;
  children_NOT?: Maybe<HiveFileWhere>;
  conversions?: Maybe<HiveFileProcessWhere>;
  conversions_NOT?: Maybe<HiveFileProcessWhere>;
  convertedBy?: Maybe<HiveFileProcessWhere>;
  convertedBy_NOT?: Maybe<HiveFileProcessWhere>;
  convertedFrom?: Maybe<HiveFileWhere>;
  convertedFrom_NOT?: Maybe<HiveFileWhere>;
  convertedTo?: Maybe<HiveFileWhere>;
  convertedTo_NOT?: Maybe<HiveFileWhere>;
  fsConnection?: Maybe<HiveFileFsConnectionWhere>;
  fsConnection_NOT?: Maybe<HiveFileFsConnectionWhere>;
  parentConnection?: Maybe<HiveFileParentConnectionWhere>;
  parentConnection_NOT?: Maybe<HiveFileParentConnectionWhere>;
  childrenConnection?: Maybe<HiveFileChildrenConnectionWhere>;
  childrenConnection_NOT?: Maybe<HiveFileChildrenConnectionWhere>;
  conversionsConnection?: Maybe<HiveFileConversionsConnectionWhere>;
  conversionsConnection_NOT?: Maybe<HiveFileConversionsConnectionWhere>;
  convertedByConnection?: Maybe<HiveFileConvertedByConnectionWhere>;
  convertedByConnection_NOT?: Maybe<HiveFileConvertedByConnectionWhere>;
  convertedFromConnection?: Maybe<HiveFileConvertedFromConnectionWhere>;
  convertedFromConnection_NOT?: Maybe<HiveFileConvertedFromConnectionWhere>;
  convertedToConnection?: Maybe<HiveFileConvertedToConnectionWhere>;
  convertedToConnection_NOT?: Maybe<HiveFileConvertedToConnectionWhere>;
}

export interface HivePermissionConnectWhere {
  node: HivePermissionWhere;
}

export interface HivePermissionCreateInput {
  name?: Maybe<Scalars["String"]>;
}

export interface HivePermissionOptions {
  /** Specify one or more HivePermissionSort objects to sort HivePermissions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<HivePermissionSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}

/** Fields to sort HivePermissions by. The order in which sorts are applied is not guaranteed when specifying many fields in one HivePermissionSort object. */
export interface HivePermissionSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface HivePermissionUpdateInput {
  name?: Maybe<Scalars["String"]>;
}

export interface HivePermissionWhere {
  OR?: Maybe<Array<HivePermissionWhere>>;
  AND?: Maybe<Array<HivePermissionWhere>>;
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
  notes?: Maybe<Scalars["String"]>;
  project?: Maybe<TimelineProjectInput>;
  items?: Maybe<Array<Maybe<TimelineItemItemsInput>>>;
}

export interface TimelineProjectInput {
  id?: Maybe<Scalars["ID"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface TimelineItemItemsInput {
  type?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  estimate?: Maybe<Scalars["Float"]>;
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
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterFindOneFlowShardPathsInput {
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
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterFindManyFlowShardPathsInput {
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
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterCountFlowShardPathsInput {
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

export interface CreateOneFlowShardInput {
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["MongoID"]>;
  program?: Maybe<Scalars["MongoID"]>;
  nodes?: Maybe<Array<Maybe<FlowShardNodesInput>>>;
  paths?: Maybe<Array<Maybe<FlowShardPathsInput>>>;
  items?: Maybe<Array<Maybe<Scalars["MongoID"]>>>;
}

export interface FlowShardNodesInput {
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FlowShardPathsInput {
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
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateByIdFlowShardPathsInput {
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
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateOneFlowShardPathsInput {
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
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateOneFlowShardPathsInput {
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
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface UpdateManyFlowShardPathsInput {
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
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterUpdateManyFlowShardPathsInput {
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
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterRemoveOneFlowShardPathsInput {
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
  type?: Maybe<Scalars["String"]>;
  extras?: Maybe<Scalars["JSON"]>;
  ports?: Maybe<Scalars["JSON"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["MongoID"]>;
}

export interface FilterRemoveManyFlowShardPathsInput {
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

export const scalarsEnumsHash: import("gqless").ScalarsEnumsHash = {
  ID: true,
  Int: true,
  String: true,
  Float: true,
  Boolean: true,
  DateTime: true,
  SortDirection: true,
  Date: true,
  JSON: true,
  MongoID: true,
  SortFindByIdsDeviceInput: true,
  SortFindOneDeviceInput: true,
  SortFindManyDeviceInput: true,
  SortConnectionDeviceEnum: true,
  SortFindByIdsDNSRecordInput: true,
  SortFindOneDNSRecordInput: true,
  SortFindManyDNSRecordInput: true,
  SortConnectionDNSRecordEnum: true,
  SortFindByIdsProgramInput: true,
  SortFindOneProgramInput: true,
  SortFindManyProgramInput: true,
  SortConnectionProgramEnum: true,
  SortFindByIdsFlowShardInput: true,
  SortFindOneFlowShardInput: true,
  SortFindManyFlowShardInput: true,
  SortConnectionFlowShardEnum: true,
  SortFindByIdsStackInput: true,
  SortFindOneStackInput: true,
  SortFindManyStackInput: true,
  SortConnectionStackEnum: true,
  SortUpdateOneDeviceInput: true,
  SortUpdateManyDeviceInput: true,
  SortRemoveOneDeviceInput: true,
  SortUpdateOneDNSRecordInput: true,
  SortUpdateManyDNSRecordInput: true,
  SortRemoveOneDNSRecordInput: true,
  SortUpdateOneProgramInput: true,
  SortUpdateManyProgramInput: true,
  SortRemoveOneProgramInput: true,
  SortUpdateOneFlowShardInput: true,
  SortUpdateManyFlowShardInput: true,
  SortRemoveOneFlowShardInput: true,
  SortUpdateOneStackInput: true,
  SortUpdateManyStackInput: true,
  SortRemoveOneStackInput: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    printer: { __type: "Printer", __args: { id: "ID" } },
    hiveServices: {
      __type: "[HiveService!]!",
      __args: { where: "HiveServiceWhere", options: "HiveServiceOptions" },
    },
    hiveServicesCount: {
      __type: "Int!",
      __args: { where: "HiveServiceWhere" },
    },
    hivePermissions: {
      __type: "[HivePermission!]!",
      __args: {
        where: "HivePermissionWhere",
        options: "HivePermissionOptions",
      },
    },
    hivePermissionsCount: {
      __type: "Int!",
      __args: { where: "HivePermissionWhere" },
    },
    hiveAppliances: {
      __type: "[HiveAppliance!]!",
      __args: { where: "HiveApplianceWhere", options: "HiveApplianceOptions" },
    },
    hiveAppliancesCount: {
      __type: "Int!",
      __args: { where: "HiveApplianceWhere" },
    },
    fileSystems: {
      __type: "[FileSystem!]!",
      __args: { where: "FileSystemWhere", options: "FileSystemOptions" },
    },
    fileSystemsCount: { __type: "Int!", __args: { where: "FileSystemWhere" } },
    hiveFiles: {
      __type: "[HiveFile!]!",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    hiveFilesCount: { __type: "Int!", __args: { where: "HiveFileWhere" } },
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
      __args: {
        project: "String",
        status: "String",
        startDate: "Date",
        endDate: "Date",
      },
    },
    TimelineItemById: { __type: "TimelineItem", __args: { id: "ID" } },
    TimelineItemMany: {
      __type: "[TimelineItem]",
      __args: { timeline: "String", startDate: "Date", endDate: "Date" },
    },
    PeopleById: { __type: "People", __args: { id: "ID" } },
    PeopleMany: { __type: "[People]", __args: { status: "String" } },
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
  },
  mutation: {
    __typename: { __type: "String!" },
    convertFiles: { __type: "HiveFileProcess", __args: { files: "[ID]" } },
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
    createHivePermissions: {
      __type: "CreateHivePermissionsMutationResponse!",
      __args: { input: "[HivePermissionCreateInput!]!" },
    },
    deleteHivePermissions: {
      __type: "DeleteInfo!",
      __args: { where: "HivePermissionWhere" },
    },
    updateHivePermissions: {
      __type: "UpdateHivePermissionsMutationResponse!",
      __args: {
        where: "HivePermissionWhere",
        update: "HivePermissionUpdateInput",
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
      },
    },
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
  },
  subscription: {},
  Printer: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    accessKey: { __type: "String" },
    temperature: { __type: "PrinterTemperature" },
    temperatureHistory: { __type: "[PrinterTemperature]" },
    jobs: { __type: "[OctoPrintJob]" },
  },
  PrinterTemperature: {
    __typename: { __type: "String!" },
    time: { __type: "Int" },
    toolActual: { __type: "Float" },
    toolTarget: { __type: "Float" },
    bedActual: { __type: "Float" },
    bedTarget: { __type: "Float" },
  },
  OctoPrintJob: {
    __typename: { __type: "String!" },
    state: { __type: "String" },
    progress: { __type: "OctoPrintProgress" },
    estimatedPrintTime: { __type: "Float" },
    filament: { __type: "OctoPrintFilament" },
    file: { __type: "OctoPrintFile" },
    user: { __type: "String" },
  },
  OctoPrintProgress: {
    __typename: { __type: "String!" },
    completion: { __type: "Float" },
    filepos: { __type: "Int" },
    printTime: { __type: "Int" },
    printTimeLeft: { __type: "Int" },
  },
  OctoPrintFilament: {
    __typename: { __type: "String!" },
    length: { __type: "Float" },
    volume: { __type: "Float" },
  },
  OctoPrintFile: {
    __typename: { __type: "String!" },
    name: { __type: "String" },
    origin: { __type: "String" },
    size: { __type: "Int" },
    date: { __type: "Int" },
  },
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
  CreateHivePermissionsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    hivePermissions: { __type: "[HivePermission!]!" },
  },
  CreateHiveServicesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    hiveServices: { __type: "[HiveService!]!" },
  },
  CreateInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesCreated: { __type: "Int!" },
    relationshipsCreated: { __type: "Int!" },
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
    files: {
      __type: "[HiveFile!]!",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    filesConnection: {
      __type: "FileSystemFilesConnection!",
      __args: {
        where: "FileSystemFilesConnectionWhere",
        first: "Int",
        after: "String",
        sort: "[FileSystemFilesConnectionSort!]",
      },
    },
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
  HiveAppliance: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    description: { __type: "String" },
    permissions: {
      __type: "[HivePermission]",
      __args: {
        where: "HivePermissionWhere",
        options: "HivePermissionOptions",
      },
    },
    services: {
      __type: "[HiveService]",
      __args: { where: "HiveServiceWhere", options: "HiveServiceOptions" },
    },
    brand_image: {
      __type: "HiveFile",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    permissionsConnection: {
      __type: "HiveAppliancePermissionsConnection!",
      __args: {
        where: "HiveAppliancePermissionsConnectionWhere",
        first: "Int",
        after: "String",
        sort: "[HiveAppliancePermissionsConnectionSort!]",
      },
    },
    servicesConnection: {
      __type: "HiveApplianceServicesConnection!",
      __args: {
        where: "HiveApplianceServicesConnectionWhere",
        first: "Int",
        after: "String",
        sort: "[HiveApplianceServicesConnectionSort!]",
      },
    },
    brand_imageConnection: {
      __type: "HiveApplianceBrand_imageConnection!",
      __args: {
        where: "HiveApplianceBrand_imageConnectionWhere",
        first: "Int",
        after: "String",
        sort: "[HiveApplianceBrand_imageConnectionSort!]",
      },
    },
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
  HiveAppliancePermissionsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveAppliancePermissionsRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveAppliancePermissionsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HivePermission!" },
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
  HiveFile: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    isFolder: { __type: "Boolean" },
    path_id: { __type: "String" },
    path: { __type: "String" },
    fs: {
      __type: "FileSystem",
      __args: { where: "FileSystemWhere", options: "FileSystemOptions" },
    },
    parent: {
      __type: "HiveFile",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    children: {
      __type: "[HiveFile]",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    conversions: {
      __type: "[HiveFileProcess]",
      __args: {
        where: "HiveFileProcessWhere",
        options: "HiveFileProcessOptions",
      },
    },
    convertedBy: {
      __type: "HiveFileProcess",
      __args: {
        where: "HiveFileProcessWhere",
        options: "HiveFileProcessOptions",
      },
    },
    convertedFrom: {
      __type: "HiveFile",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    convertedTo: {
      __type: "[HiveFile]",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    fsConnection: {
      __type: "HiveFileFsConnection!",
      __args: {
        where: "HiveFileFsConnectionWhere",
        first: "Int",
        after: "String",
        sort: "[HiveFileFsConnectionSort!]",
      },
    },
    parentConnection: {
      __type: "HiveFileParentConnection!",
      __args: {
        where: "HiveFileParentConnectionWhere",
        first: "Int",
        after: "String",
        sort: "[HiveFileParentConnectionSort!]",
      },
    },
    childrenConnection: {
      __type: "HiveFileChildrenConnection!",
      __args: {
        where: "HiveFileChildrenConnectionWhere",
        first: "Int",
        after: "String",
        sort: "[HiveFileChildrenConnectionSort!]",
      },
    },
    conversionsConnection: {
      __type: "HiveFileConversionsConnection!",
      __args: {
        where: "HiveFileConversionsConnectionWhere",
        first: "Int",
        after: "String",
        sort: "[HiveFileConversionsConnectionSort!]",
      },
    },
    convertedByConnection: {
      __type: "HiveFileConvertedByConnection!",
      __args: {
        where: "HiveFileConvertedByConnectionWhere",
        first: "Int",
        after: "String",
        sort: "[HiveFileConvertedByConnectionSort!]",
      },
    },
    convertedFromConnection: {
      __type: "HiveFileConvertedFromConnection!",
      __args: {
        where: "HiveFileConvertedFromConnectionWhere",
        first: "Int",
        after: "String",
        sort: "[HiveFileConvertedFromConnectionSort!]",
      },
    },
    convertedToConnection: {
      __type: "HiveFileConvertedToConnection!",
      __args: {
        where: "HiveFileConvertedToConnectionWhere",
        first: "Int",
        after: "String",
        sort: "[HiveFileConvertedToConnectionSort!]",
      },
    },
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
  HiveFileConversionsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveFileConversionsRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveFileConversionsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveFileProcess!" },
  },
  HiveFileConvertedByConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveFileConvertedByRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveFileConvertedByRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveFileProcess!" },
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
  HiveFileConvertedToConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveFileConvertedToRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveFileConvertedToRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveFile!" },
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
  HiveFileProcess: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    createdAt: { __type: "DateTime" },
    completedAt: { __type: "DateTime" },
    inputs: {
      __type: "[HiveFile]",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    outputs: {
      __type: "[HiveFile]",
      __args: { where: "HiveFileWhere", options: "HiveFileOptions" },
    },
    inputsConnection: {
      __type: "HiveFileProcessInputsConnection!",
      __args: {
        where: "HiveFileProcessInputsConnectionWhere",
        first: "Int",
        after: "String",
        sort: "[HiveFileProcessInputsConnectionSort!]",
      },
    },
    outputsConnection: {
      __type: "HiveFileProcessOutputsConnection!",
      __args: {
        where: "HiveFileProcessOutputsConnectionWhere",
        first: "Int",
        after: "String",
        sort: "[HiveFileProcessOutputsConnectionSort!]",
      },
    },
  },
  HiveFileProcessInputsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveFileProcessInputsRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveFileProcessInputsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveFile!" },
  },
  HiveFileProcessOutputsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[HiveFileProcessOutputsRelationship!]!" },
    totalCount: { __type: "Int!" },
    pageInfo: { __type: "PageInfo!" },
  },
  HiveFileProcessOutputsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "HiveFile!" },
  },
  HivePermission: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    create: { __type: "[HiveIntegration]" },
    read: { __type: "[HiveIntegration]" },
    update: { __type: "[HiveIntegration]" },
    remove: { __type: "[HiveIntegration]" },
  },
  HiveService: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "String" },
    endCursor: { __type: "String" },
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
  UpdateHivePermissionsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    hivePermissions: { __type: "[HivePermission!]!" },
  },
  UpdateHiveServicesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    hiveServices: { __type: "[HiveService!]!" },
  },
  UpdateInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesCreated: { __type: "Int!" },
    nodesDeleted: { __type: "Int!" },
    relationshipsCreated: { __type: "Int!" },
    relationshipsDeleted: { __type: "Int!" },
  },
  FileSystemConnectInput: {
    files: { __type: "[FileSystemFilesConnectFieldInput!]" },
  },
  FileSystemConnectWhere: { node: { __type: "FileSystemWhere!" } },
  FileSystemCreateInput: {
    name: { __type: "String!" },
    files: { __type: "FileSystemFilesFieldInput" },
  },
  FileSystemDeleteInput: {
    files: { __type: "[FileSystemFilesDeleteFieldInput!]" },
  },
  FileSystemDisconnectInput: {
    files: { __type: "[FileSystemFilesDisconnectFieldInput!]" },
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
  },
  FileSystemOptions: {
    sort: { __type: "[FileSystemSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  FileSystemRelationInput: {
    files: { __type: "[FileSystemFilesCreateFieldInput!]" },
  },
  FileSystemSort: { name: { __type: "SortDirection" } },
  FileSystemUpdateInput: {
    name: { __type: "String" },
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
    files: { __type: "HiveFileWhere" },
    files_NOT: { __type: "HiveFileWhere" },
    filesConnection: { __type: "FileSystemFilesConnectionWhere" },
    filesConnection_NOT: { __type: "FileSystemFilesConnectionWhere" },
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
  },
  HiveApplianceConnectInput: {
    permissions: { __type: "[HiveAppliancePermissionsConnectFieldInput!]" },
    services: { __type: "[HiveApplianceServicesConnectFieldInput!]" },
    brand_image: { __type: "HiveApplianceBrand_imageConnectFieldInput" },
  },
  HiveApplianceCreateInput: {
    name: { __type: "String!" },
    description: { __type: "String" },
    permissions: { __type: "HiveAppliancePermissionsFieldInput" },
    services: { __type: "HiveApplianceServicesFieldInput" },
    brand_image: { __type: "HiveApplianceBrand_imageFieldInput" },
  },
  HiveApplianceDeleteInput: {
    permissions: { __type: "[HiveAppliancePermissionsDeleteFieldInput!]" },
    services: { __type: "[HiveApplianceServicesDeleteFieldInput!]" },
    brand_image: { __type: "HiveApplianceBrand_imageDeleteFieldInput" },
  },
  HiveApplianceDisconnectInput: {
    permissions: { __type: "[HiveAppliancePermissionsDisconnectFieldInput!]" },
    services: { __type: "[HiveApplianceServicesDisconnectFieldInput!]" },
    brand_image: { __type: "HiveApplianceBrand_imageDisconnectFieldInput" },
  },
  HiveApplianceOptions: {
    sort: { __type: "[HiveApplianceSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  HiveAppliancePermissionsConnectFieldInput: {
    where: { __type: "HivePermissionConnectWhere" },
  },
  HiveAppliancePermissionsConnectionSort: {
    node: { __type: "HivePermissionSort" },
  },
  HiveAppliancePermissionsConnectionWhere: {
    AND: { __type: "[HiveAppliancePermissionsConnectionWhere!]" },
    OR: { __type: "[HiveAppliancePermissionsConnectionWhere!]" },
    node: { __type: "HivePermissionWhere" },
    node_NOT: { __type: "HivePermissionWhere" },
  },
  HiveAppliancePermissionsCreateFieldInput: {
    node: { __type: "HivePermissionCreateInput!" },
  },
  HiveAppliancePermissionsDeleteFieldInput: {
    where: { __type: "HiveAppliancePermissionsConnectionWhere" },
  },
  HiveAppliancePermissionsDisconnectFieldInput: {
    where: { __type: "HiveAppliancePermissionsConnectionWhere" },
  },
  HiveAppliancePermissionsFieldInput: {
    create: { __type: "[HiveAppliancePermissionsCreateFieldInput!]" },
    connect: { __type: "[HiveAppliancePermissionsConnectFieldInput!]" },
  },
  HiveAppliancePermissionsUpdateConnectionInput: {
    node: { __type: "HivePermissionUpdateInput" },
  },
  HiveAppliancePermissionsUpdateFieldInput: {
    where: { __type: "HiveAppliancePermissionsConnectionWhere" },
    update: { __type: "HiveAppliancePermissionsUpdateConnectionInput" },
    connect: { __type: "[HiveAppliancePermissionsConnectFieldInput!]" },
    disconnect: { __type: "[HiveAppliancePermissionsDisconnectFieldInput!]" },
    create: { __type: "[HiveAppliancePermissionsCreateFieldInput!]" },
    delete: { __type: "[HiveAppliancePermissionsDeleteFieldInput!]" },
  },
  HiveApplianceRelationInput: {
    permissions: { __type: "[HiveAppliancePermissionsCreateFieldInput!]" },
    services: { __type: "[HiveApplianceServicesCreateFieldInput!]" },
    brand_image: { __type: "HiveApplianceBrand_imageCreateFieldInput" },
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
    description: { __type: "SortDirection" },
  },
  HiveApplianceUpdateInput: {
    name: { __type: "String" },
    description: { __type: "String" },
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
    permissions: { __type: "HivePermissionWhere" },
    permissions_NOT: { __type: "HivePermissionWhere" },
    services: { __type: "HiveServiceWhere" },
    services_NOT: { __type: "HiveServiceWhere" },
    brand_image: { __type: "HiveFileWhere" },
    brand_image_NOT: { __type: "HiveFileWhere" },
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
  },
  HiveFileConnectInput: {
    fs: { __type: "HiveFileFsConnectFieldInput" },
    parent: { __type: "HiveFileParentConnectFieldInput" },
    children: { __type: "[HiveFileChildrenConnectFieldInput!]" },
    conversions: { __type: "[HiveFileConversionsConnectFieldInput!]" },
    convertedBy: { __type: "HiveFileConvertedByConnectFieldInput" },
    convertedFrom: { __type: "HiveFileConvertedFromConnectFieldInput" },
    convertedTo: { __type: "[HiveFileConvertedToConnectFieldInput!]" },
  },
  HiveFileConnectWhere: { node: { __type: "HiveFileWhere!" } },
  HiveFileConversionsConnectFieldInput: {
    where: { __type: "HiveFileProcessConnectWhere" },
    connect: { __type: "[HiveFileProcessConnectInput!]" },
  },
  HiveFileConversionsConnectionSort: {
    node: { __type: "HiveFileProcessSort" },
  },
  HiveFileConversionsConnectionWhere: {
    AND: { __type: "[HiveFileConversionsConnectionWhere!]" },
    OR: { __type: "[HiveFileConversionsConnectionWhere!]" },
    node: { __type: "HiveFileProcessWhere" },
    node_NOT: { __type: "HiveFileProcessWhere" },
  },
  HiveFileConversionsCreateFieldInput: {
    node: { __type: "HiveFileProcessCreateInput!" },
  },
  HiveFileConversionsDeleteFieldInput: {
    where: { __type: "HiveFileConversionsConnectionWhere" },
    delete: { __type: "HiveFileProcessDeleteInput" },
  },
  HiveFileConversionsDisconnectFieldInput: {
    where: { __type: "HiveFileConversionsConnectionWhere" },
    disconnect: { __type: "HiveFileProcessDisconnectInput" },
  },
  HiveFileConversionsFieldInput: {
    create: { __type: "[HiveFileConversionsCreateFieldInput!]" },
    connect: { __type: "[HiveFileConversionsConnectFieldInput!]" },
  },
  HiveFileConversionsUpdateConnectionInput: {
    node: { __type: "HiveFileProcessUpdateInput" },
  },
  HiveFileConversionsUpdateFieldInput: {
    where: { __type: "HiveFileConversionsConnectionWhere" },
    update: { __type: "HiveFileConversionsUpdateConnectionInput" },
    connect: { __type: "[HiveFileConversionsConnectFieldInput!]" },
    disconnect: { __type: "[HiveFileConversionsDisconnectFieldInput!]" },
    create: { __type: "[HiveFileConversionsCreateFieldInput!]" },
    delete: { __type: "[HiveFileConversionsDeleteFieldInput!]" },
  },
  HiveFileConvertedByConnectFieldInput: {
    where: { __type: "HiveFileProcessConnectWhere" },
    connect: { __type: "HiveFileProcessConnectInput" },
  },
  HiveFileConvertedByConnectionSort: {
    node: { __type: "HiveFileProcessSort" },
  },
  HiveFileConvertedByConnectionWhere: {
    AND: { __type: "[HiveFileConvertedByConnectionWhere!]" },
    OR: { __type: "[HiveFileConvertedByConnectionWhere!]" },
    node: { __type: "HiveFileProcessWhere" },
    node_NOT: { __type: "HiveFileProcessWhere" },
  },
  HiveFileConvertedByCreateFieldInput: {
    node: { __type: "HiveFileProcessCreateInput!" },
  },
  HiveFileConvertedByDeleteFieldInput: {
    where: { __type: "HiveFileConvertedByConnectionWhere" },
    delete: { __type: "HiveFileProcessDeleteInput" },
  },
  HiveFileConvertedByDisconnectFieldInput: {
    where: { __type: "HiveFileConvertedByConnectionWhere" },
    disconnect: { __type: "HiveFileProcessDisconnectInput" },
  },
  HiveFileConvertedByFieldInput: {
    create: { __type: "HiveFileConvertedByCreateFieldInput" },
    connect: { __type: "HiveFileConvertedByConnectFieldInput" },
  },
  HiveFileConvertedByUpdateConnectionInput: {
    node: { __type: "HiveFileProcessUpdateInput" },
  },
  HiveFileConvertedByUpdateFieldInput: {
    where: { __type: "HiveFileConvertedByConnectionWhere" },
    update: { __type: "HiveFileConvertedByUpdateConnectionInput" },
    connect: { __type: "HiveFileConvertedByConnectFieldInput" },
    disconnect: { __type: "HiveFileConvertedByDisconnectFieldInput" },
    create: { __type: "HiveFileConvertedByCreateFieldInput" },
    delete: { __type: "HiveFileConvertedByDeleteFieldInput" },
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
  },
  HiveFileConvertedToConnectFieldInput: {
    where: { __type: "HiveFileConnectWhere" },
    connect: { __type: "[HiveFileConnectInput!]" },
  },
  HiveFileConvertedToConnectionSort: { node: { __type: "HiveFileSort" } },
  HiveFileConvertedToConnectionWhere: {
    AND: { __type: "[HiveFileConvertedToConnectionWhere!]" },
    OR: { __type: "[HiveFileConvertedToConnectionWhere!]" },
    node: { __type: "HiveFileWhere" },
    node_NOT: { __type: "HiveFileWhere" },
  },
  HiveFileConvertedToCreateFieldInput: {
    node: { __type: "HiveFileCreateInput!" },
  },
  HiveFileConvertedToDeleteFieldInput: {
    where: { __type: "HiveFileConvertedToConnectionWhere" },
    delete: { __type: "HiveFileDeleteInput" },
  },
  HiveFileConvertedToDisconnectFieldInput: {
    where: { __type: "HiveFileConvertedToConnectionWhere" },
    disconnect: { __type: "HiveFileDisconnectInput" },
  },
  HiveFileConvertedToFieldInput: {
    create: { __type: "[HiveFileConvertedToCreateFieldInput!]" },
    connect: { __type: "[HiveFileConvertedToConnectFieldInput!]" },
  },
  HiveFileConvertedToUpdateConnectionInput: {
    node: { __type: "HiveFileUpdateInput" },
  },
  HiveFileConvertedToUpdateFieldInput: {
    where: { __type: "HiveFileConvertedToConnectionWhere" },
    update: { __type: "HiveFileConvertedToUpdateConnectionInput" },
    connect: { __type: "[HiveFileConvertedToConnectFieldInput!]" },
    disconnect: { __type: "[HiveFileConvertedToDisconnectFieldInput!]" },
    create: { __type: "[HiveFileConvertedToCreateFieldInput!]" },
    delete: { __type: "[HiveFileConvertedToDeleteFieldInput!]" },
  },
  HiveFileCreateInput: {
    name: { __type: "String!" },
    isFolder: { __type: "Boolean" },
    fs: { __type: "HiveFileFsFieldInput" },
    parent: { __type: "HiveFileParentFieldInput" },
    children: { __type: "HiveFileChildrenFieldInput" },
    conversions: { __type: "HiveFileConversionsFieldInput" },
    convertedBy: { __type: "HiveFileConvertedByFieldInput" },
    convertedFrom: { __type: "HiveFileConvertedFromFieldInput" },
    convertedTo: { __type: "HiveFileConvertedToFieldInput" },
  },
  HiveFileDeleteInput: {
    fs: { __type: "HiveFileFsDeleteFieldInput" },
    parent: { __type: "HiveFileParentDeleteFieldInput" },
    children: { __type: "[HiveFileChildrenDeleteFieldInput!]" },
    conversions: { __type: "[HiveFileConversionsDeleteFieldInput!]" },
    convertedBy: { __type: "HiveFileConvertedByDeleteFieldInput" },
    convertedFrom: { __type: "HiveFileConvertedFromDeleteFieldInput" },
    convertedTo: { __type: "[HiveFileConvertedToDeleteFieldInput!]" },
  },
  HiveFileDisconnectInput: {
    fs: { __type: "HiveFileFsDisconnectFieldInput" },
    parent: { __type: "HiveFileParentDisconnectFieldInput" },
    children: { __type: "[HiveFileChildrenDisconnectFieldInput!]" },
    conversions: { __type: "[HiveFileConversionsDisconnectFieldInput!]" },
    convertedBy: { __type: "HiveFileConvertedByDisconnectFieldInput" },
    convertedFrom: { __type: "HiveFileConvertedFromDisconnectFieldInput" },
    convertedTo: { __type: "[HiveFileConvertedToDisconnectFieldInput!]" },
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
  },
  HiveFileProcessConnectInput: {
    inputs: { __type: "[HiveFileProcessInputsConnectFieldInput!]" },
    outputs: { __type: "[HiveFileProcessOutputsConnectFieldInput!]" },
  },
  HiveFileProcessConnectWhere: { node: { __type: "HiveFileProcessWhere!" } },
  HiveFileProcessCreateInput: {
    id: { __type: "ID!" },
    completedAt: { __type: "DateTime" },
    inputs: { __type: "HiveFileProcessInputsFieldInput" },
    outputs: { __type: "HiveFileProcessOutputsFieldInput" },
  },
  HiveFileProcessDeleteInput: {
    inputs: { __type: "[HiveFileProcessInputsDeleteFieldInput!]" },
    outputs: { __type: "[HiveFileProcessOutputsDeleteFieldInput!]" },
  },
  HiveFileProcessDisconnectInput: {
    inputs: { __type: "[HiveFileProcessInputsDisconnectFieldInput!]" },
    outputs: { __type: "[HiveFileProcessOutputsDisconnectFieldInput!]" },
  },
  HiveFileProcessInputsConnectFieldInput: {
    where: { __type: "HiveFileConnectWhere" },
    connect: { __type: "[HiveFileConnectInput!]" },
  },
  HiveFileProcessInputsConnectionSort: { node: { __type: "HiveFileSort" } },
  HiveFileProcessInputsConnectionWhere: {
    AND: { __type: "[HiveFileProcessInputsConnectionWhere!]" },
    OR: { __type: "[HiveFileProcessInputsConnectionWhere!]" },
    node: { __type: "HiveFileWhere" },
    node_NOT: { __type: "HiveFileWhere" },
  },
  HiveFileProcessInputsCreateFieldInput: {
    node: { __type: "HiveFileCreateInput!" },
  },
  HiveFileProcessInputsDeleteFieldInput: {
    where: { __type: "HiveFileProcessInputsConnectionWhere" },
    delete: { __type: "HiveFileDeleteInput" },
  },
  HiveFileProcessInputsDisconnectFieldInput: {
    where: { __type: "HiveFileProcessInputsConnectionWhere" },
    disconnect: { __type: "HiveFileDisconnectInput" },
  },
  HiveFileProcessInputsFieldInput: {
    create: { __type: "[HiveFileProcessInputsCreateFieldInput!]" },
    connect: { __type: "[HiveFileProcessInputsConnectFieldInput!]" },
  },
  HiveFileProcessInputsUpdateConnectionInput: {
    node: { __type: "HiveFileUpdateInput" },
  },
  HiveFileProcessInputsUpdateFieldInput: {
    where: { __type: "HiveFileProcessInputsConnectionWhere" },
    update: { __type: "HiveFileProcessInputsUpdateConnectionInput" },
    connect: { __type: "[HiveFileProcessInputsConnectFieldInput!]" },
    disconnect: { __type: "[HiveFileProcessInputsDisconnectFieldInput!]" },
    create: { __type: "[HiveFileProcessInputsCreateFieldInput!]" },
    delete: { __type: "[HiveFileProcessInputsDeleteFieldInput!]" },
  },
  HiveFileProcessOptions: {
    sort: { __type: "[HiveFileProcessSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  HiveFileProcessOutputsConnectFieldInput: {
    where: { __type: "HiveFileConnectWhere" },
    connect: { __type: "[HiveFileConnectInput!]" },
  },
  HiveFileProcessOutputsConnectionSort: { node: { __type: "HiveFileSort" } },
  HiveFileProcessOutputsConnectionWhere: {
    AND: { __type: "[HiveFileProcessOutputsConnectionWhere!]" },
    OR: { __type: "[HiveFileProcessOutputsConnectionWhere!]" },
    node: { __type: "HiveFileWhere" },
    node_NOT: { __type: "HiveFileWhere" },
  },
  HiveFileProcessOutputsCreateFieldInput: {
    node: { __type: "HiveFileCreateInput!" },
  },
  HiveFileProcessOutputsDeleteFieldInput: {
    where: { __type: "HiveFileProcessOutputsConnectionWhere" },
    delete: { __type: "HiveFileDeleteInput" },
  },
  HiveFileProcessOutputsDisconnectFieldInput: {
    where: { __type: "HiveFileProcessOutputsConnectionWhere" },
    disconnect: { __type: "HiveFileDisconnectInput" },
  },
  HiveFileProcessOutputsFieldInput: {
    create: { __type: "[HiveFileProcessOutputsCreateFieldInput!]" },
    connect: { __type: "[HiveFileProcessOutputsConnectFieldInput!]" },
  },
  HiveFileProcessOutputsUpdateConnectionInput: {
    node: { __type: "HiveFileUpdateInput" },
  },
  HiveFileProcessOutputsUpdateFieldInput: {
    where: { __type: "HiveFileProcessOutputsConnectionWhere" },
    update: { __type: "HiveFileProcessOutputsUpdateConnectionInput" },
    connect: { __type: "[HiveFileProcessOutputsConnectFieldInput!]" },
    disconnect: { __type: "[HiveFileProcessOutputsDisconnectFieldInput!]" },
    create: { __type: "[HiveFileProcessOutputsCreateFieldInput!]" },
    delete: { __type: "[HiveFileProcessOutputsDeleteFieldInput!]" },
  },
  HiveFileProcessSort: {
    id: { __type: "SortDirection" },
    createdAt: { __type: "SortDirection" },
    completedAt: { __type: "SortDirection" },
  },
  HiveFileProcessUpdateInput: {
    id: { __type: "ID" },
    completedAt: { __type: "DateTime" },
    inputs: { __type: "[HiveFileProcessInputsUpdateFieldInput!]" },
    outputs: { __type: "[HiveFileProcessOutputsUpdateFieldInput!]" },
  },
  HiveFileProcessWhere: {
    OR: { __type: "[HiveFileProcessWhere!]" },
    AND: { __type: "[HiveFileProcessWhere!]" },
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
    createdAt: { __type: "DateTime" },
    createdAt_NOT: { __type: "DateTime" },
    createdAt_IN: { __type: "[DateTime]" },
    createdAt_NOT_IN: { __type: "[DateTime]" },
    createdAt_LT: { __type: "DateTime" },
    createdAt_LTE: { __type: "DateTime" },
    createdAt_GT: { __type: "DateTime" },
    createdAt_GTE: { __type: "DateTime" },
    completedAt: { __type: "DateTime" },
    completedAt_NOT: { __type: "DateTime" },
    completedAt_IN: { __type: "[DateTime]" },
    completedAt_NOT_IN: { __type: "[DateTime]" },
    completedAt_LT: { __type: "DateTime" },
    completedAt_LTE: { __type: "DateTime" },
    completedAt_GT: { __type: "DateTime" },
    completedAt_GTE: { __type: "DateTime" },
    inputs: { __type: "HiveFileWhere" },
    inputs_NOT: { __type: "HiveFileWhere" },
    outputs: { __type: "HiveFileWhere" },
    outputs_NOT: { __type: "HiveFileWhere" },
    inputsConnection: { __type: "HiveFileProcessInputsConnectionWhere" },
    inputsConnection_NOT: { __type: "HiveFileProcessInputsConnectionWhere" },
    outputsConnection: { __type: "HiveFileProcessOutputsConnectionWhere" },
    outputsConnection_NOT: { __type: "HiveFileProcessOutputsConnectionWhere" },
  },
  HiveFileRelationInput: {
    fs: { __type: "HiveFileFsCreateFieldInput" },
    parent: { __type: "HiveFileParentCreateFieldInput" },
    children: { __type: "[HiveFileChildrenCreateFieldInput!]" },
    conversions: { __type: "[HiveFileConversionsCreateFieldInput!]" },
    convertedBy: { __type: "HiveFileConvertedByCreateFieldInput" },
    convertedFrom: { __type: "HiveFileConvertedFromCreateFieldInput" },
    convertedTo: { __type: "[HiveFileConvertedToCreateFieldInput!]" },
  },
  HiveFileSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    isFolder: { __type: "SortDirection" },
  },
  HiveFileUpdateInput: {
    name: { __type: "String" },
    isFolder: { __type: "Boolean" },
    fs: { __type: "HiveFileFsUpdateFieldInput" },
    parent: { __type: "HiveFileParentUpdateFieldInput" },
    children: { __type: "[HiveFileChildrenUpdateFieldInput!]" },
    conversions: { __type: "[HiveFileConversionsUpdateFieldInput!]" },
    convertedBy: { __type: "HiveFileConvertedByUpdateFieldInput" },
    convertedFrom: { __type: "HiveFileConvertedFromUpdateFieldInput" },
    convertedTo: { __type: "[HiveFileConvertedToUpdateFieldInput!]" },
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
    isFolder: { __type: "Boolean" },
    isFolder_NOT: { __type: "Boolean" },
    fs: { __type: "FileSystemWhere" },
    fs_NOT: { __type: "FileSystemWhere" },
    parent: { __type: "HiveFileWhere" },
    parent_NOT: { __type: "HiveFileWhere" },
    children: { __type: "HiveFileWhere" },
    children_NOT: { __type: "HiveFileWhere" },
    conversions: { __type: "HiveFileProcessWhere" },
    conversions_NOT: { __type: "HiveFileProcessWhere" },
    convertedBy: { __type: "HiveFileProcessWhere" },
    convertedBy_NOT: { __type: "HiveFileProcessWhere" },
    convertedFrom: { __type: "HiveFileWhere" },
    convertedFrom_NOT: { __type: "HiveFileWhere" },
    convertedTo: { __type: "HiveFileWhere" },
    convertedTo_NOT: { __type: "HiveFileWhere" },
    fsConnection: { __type: "HiveFileFsConnectionWhere" },
    fsConnection_NOT: { __type: "HiveFileFsConnectionWhere" },
    parentConnection: { __type: "HiveFileParentConnectionWhere" },
    parentConnection_NOT: { __type: "HiveFileParentConnectionWhere" },
    childrenConnection: { __type: "HiveFileChildrenConnectionWhere" },
    childrenConnection_NOT: { __type: "HiveFileChildrenConnectionWhere" },
    conversionsConnection: { __type: "HiveFileConversionsConnectionWhere" },
    conversionsConnection_NOT: { __type: "HiveFileConversionsConnectionWhere" },
    convertedByConnection: { __type: "HiveFileConvertedByConnectionWhere" },
    convertedByConnection_NOT: { __type: "HiveFileConvertedByConnectionWhere" },
    convertedFromConnection: { __type: "HiveFileConvertedFromConnectionWhere" },
    convertedFromConnection_NOT: {
      __type: "HiveFileConvertedFromConnectionWhere",
    },
    convertedToConnection: { __type: "HiveFileConvertedToConnectionWhere" },
    convertedToConnection_NOT: { __type: "HiveFileConvertedToConnectionWhere" },
  },
  HivePermissionConnectWhere: { node: { __type: "HivePermissionWhere!" } },
  HivePermissionCreateInput: { name: { __type: "String" } },
  HivePermissionOptions: {
    sort: { __type: "[HivePermissionSort]" },
    limit: { __type: "Int" },
    offset: { __type: "Int" },
  },
  HivePermissionSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  HivePermissionUpdateInput: { name: { __type: "String" } },
  HivePermissionWhere: {
    OR: { __type: "[HivePermissionWhere!]" },
    AND: { __type: "[HivePermissionWhere!]" },
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
    notes: { __type: "String" },
    items: { __type: "[TimelineItemItems]" },
    project: { __type: "TimelineProject" },
  },
  TimelineItemItems: {
    __typename: { __type: "String!" },
    type: { __type: "String" },
    location: { __type: "String" },
    estimate: { __type: "Float" },
  },
  TimelineProject: {
    __typename: { __type: "String!" },
    id: { __type: "ID" },
    name: { __type: "String" },
    type: { __type: "String" },
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
    notes: { __type: "String" },
    project: { __type: "TimelineProjectInput" },
    items: { __type: "[TimelineItemItemsInput]" },
  },
  TimelineProjectInput: { id: { __type: "ID" }, type: { __type: "String" } },
  TimelineItemItemsInput: {
    type: { __type: "String" },
    location: { __type: "String" },
    estimate: { __type: "Float" },
  },
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
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FlowShardPaths: {
    __typename: { __type: "String!" },
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
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterFindOneFlowShardPathsInput: {
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
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterFindManyFlowShardPathsInput: {
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
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterCountFlowShardPathsInput: {
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
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FlowShardPathsInput: {
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
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  UpdateByIdFlowShardPathsInput: {
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
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  UpdateOneFlowShardPathsInput: {
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
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateOneFlowShardPathsInput: {
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
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  UpdateManyFlowShardPathsInput: {
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
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterUpdateManyFlowShardPathsInput: {
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
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveOneFlowShardPathsInput: {
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
    type: { __type: "String" },
    extras: { __type: "JSON" },
    ports: { __type: "JSON" },
    x: { __type: "Float" },
    y: { __type: "Float" },
    _id: { __type: "MongoID" },
  },
  FilterRemoveManyFlowShardPathsInput: {
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
  [SchemaUnionsKey]: { HiveIntegration: ["HiveService", "HiveAppliance"] },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  printer: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Printer>;
  hiveServices: (args?: {
    where?: Maybe<HiveServiceWhere>;
    options?: Maybe<HiveServiceOptions>;
  }) => Array<HiveService>;
  hiveServicesCount: (args?: {
    where?: Maybe<HiveServiceWhere>;
  }) => ScalarsEnums["Int"];
  hivePermissions: (args?: {
    where?: Maybe<HivePermissionWhere>;
    options?: Maybe<HivePermissionOptions>;
  }) => Array<HivePermission>;
  hivePermissionsCount: (args?: {
    where?: Maybe<HivePermissionWhere>;
  }) => ScalarsEnums["Int"];
  hiveAppliances: (args?: {
    where?: Maybe<HiveApplianceWhere>;
    options?: Maybe<HiveApplianceOptions>;
  }) => Array<HiveAppliance>;
  hiveAppliancesCount: (args?: {
    where?: Maybe<HiveApplianceWhere>;
  }) => ScalarsEnums["Int"];
  fileSystems: (args?: {
    where?: Maybe<FileSystemWhere>;
    options?: Maybe<FileSystemOptions>;
  }) => Array<FileSystem>;
  fileSystemsCount: (args?: {
    where?: Maybe<FileSystemWhere>;
  }) => ScalarsEnums["Int"];
  hiveFiles: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Array<HiveFile>;
  hiveFilesCount: (args?: {
    where?: Maybe<HiveFileWhere>;
  }) => ScalarsEnums["Int"];
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
    project?: Maybe<Scalars["String"]>;
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
}

export interface Mutation {
  __typename: "Mutation" | undefined;
  convertFiles: (args?: {
    files?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  }) => Maybe<HiveFileProcess>;
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
  createHivePermissions: (args: {
    input: Array<HivePermissionCreateInput>;
  }) => CreateHivePermissionsMutationResponse;
  deleteHivePermissions: (args?: {
    where?: Maybe<HivePermissionWhere>;
  }) => DeleteInfo;
  updateHivePermissions: (args?: {
    where?: Maybe<HivePermissionWhere>;
    update?: Maybe<HivePermissionUpdateInput>;
  }) => UpdateHivePermissionsMutationResponse;
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
  }) => UpdateHiveAppliancesMutationResponse;
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
  }) => UpdateHiveFilesMutationResponse;
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
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

export interface Printer {
  __typename: "Printer" | undefined;
  name?: Maybe<ScalarsEnums["String"]>;
  accessKey?: Maybe<ScalarsEnums["String"]>;
  temperature?: Maybe<PrinterTemperature>;
  temperatureHistory?: Maybe<Array<Maybe<PrinterTemperature>>>;
  jobs?: Maybe<Array<Maybe<OctoPrintJob>>>;
}

export interface PrinterTemperature {
  __typename: "PrinterTemperature" | undefined;
  time?: Maybe<ScalarsEnums["Int"]>;
  toolActual?: Maybe<ScalarsEnums["Float"]>;
  toolTarget?: Maybe<ScalarsEnums["Float"]>;
  bedActual?: Maybe<ScalarsEnums["Float"]>;
  bedTarget?: Maybe<ScalarsEnums["Float"]>;
}

export interface OctoPrintJob {
  __typename: "OctoPrintJob" | undefined;
  state?: Maybe<ScalarsEnums["String"]>;
  progress?: Maybe<OctoPrintProgress>;
  estimatedPrintTime?: Maybe<ScalarsEnums["Float"]>;
  filament?: Maybe<OctoPrintFilament>;
  file?: Maybe<OctoPrintFile>;
  user?: Maybe<ScalarsEnums["String"]>;
}

export interface OctoPrintProgress {
  __typename: "OctoPrintProgress" | undefined;
  completion?: Maybe<ScalarsEnums["Float"]>;
  filepos?: Maybe<ScalarsEnums["Int"]>;
  printTime?: Maybe<ScalarsEnums["Int"]>;
  printTimeLeft?: Maybe<ScalarsEnums["Int"]>;
}

export interface OctoPrintFilament {
  __typename: "OctoPrintFilament" | undefined;
  length?: Maybe<ScalarsEnums["Float"]>;
  volume?: Maybe<ScalarsEnums["Float"]>;
}

export interface OctoPrintFile {
  __typename: "OctoPrintFile" | undefined;
  name?: Maybe<ScalarsEnums["String"]>;
  origin?: Maybe<ScalarsEnums["String"]>;
  size?: Maybe<ScalarsEnums["Int"]>;
  date?: Maybe<ScalarsEnums["Int"]>;
}

export interface CreateFileSystemsMutationResponse {
  __typename: "CreateFileSystemsMutationResponse" | undefined;
  info: CreateInfo;
  fileSystems: Array<FileSystem>;
}

export interface CreateHiveAppliancesMutationResponse {
  __typename: "CreateHiveAppliancesMutationResponse" | undefined;
  info: CreateInfo;
  hiveAppliances: Array<HiveAppliance>;
}

export interface CreateHiveFilesMutationResponse {
  __typename: "CreateHiveFilesMutationResponse" | undefined;
  info: CreateInfo;
  hiveFiles: Array<HiveFile>;
}

export interface CreateHivePermissionsMutationResponse {
  __typename: "CreateHivePermissionsMutationResponse" | undefined;
  info: CreateInfo;
  hivePermissions: Array<HivePermission>;
}

export interface CreateHiveServicesMutationResponse {
  __typename: "CreateHiveServicesMutationResponse" | undefined;
  info: CreateInfo;
  hiveServices: Array<HiveService>;
}

export interface CreateInfo {
  __typename: "CreateInfo" | undefined;
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesCreated: ScalarsEnums["Int"];
  relationshipsCreated: ScalarsEnums["Int"];
}

export interface DeleteInfo {
  __typename: "DeleteInfo" | undefined;
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesDeleted: ScalarsEnums["Int"];
  relationshipsDeleted: ScalarsEnums["Int"];
}

export interface FileSystem {
  __typename: "FileSystem" | undefined;
  name: ScalarsEnums["String"];
  files: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Array<HiveFile>;
  filesConnection: (args?: {
    where?: Maybe<FileSystemFilesConnectionWhere>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    sort?: Maybe<Array<FileSystemFilesConnectionSort>>;
  }) => FileSystemFilesConnection;
}

export interface FileSystemFilesConnection {
  __typename: "FileSystemFilesConnection" | undefined;
  edges: Array<FileSystemFilesRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface FileSystemFilesRelationship {
  __typename: "FileSystemFilesRelationship" | undefined;
  cursor: ScalarsEnums["String"];
  node: HiveFile;
}

export interface HiveAppliance {
  __typename: "HiveAppliance" | undefined;
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  description?: Maybe<ScalarsEnums["String"]>;
  permissions: (args?: {
    where?: Maybe<HivePermissionWhere>;
    options?: Maybe<HivePermissionOptions>;
  }) => Maybe<Array<Maybe<HivePermission>>>;
  services: (args?: {
    where?: Maybe<HiveServiceWhere>;
    options?: Maybe<HiveServiceOptions>;
  }) => Maybe<Array<Maybe<HiveService>>>;
  brand_image: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Maybe<HiveFile>;
  permissionsConnection: (args?: {
    where?: Maybe<HiveAppliancePermissionsConnectionWhere>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    sort?: Maybe<Array<HiveAppliancePermissionsConnectionSort>>;
  }) => HiveAppliancePermissionsConnection;
  servicesConnection: (args?: {
    where?: Maybe<HiveApplianceServicesConnectionWhere>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    sort?: Maybe<Array<HiveApplianceServicesConnectionSort>>;
  }) => HiveApplianceServicesConnection;
  brand_imageConnection: (args?: {
    where?: Maybe<HiveApplianceBrand_imageConnectionWhere>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    sort?: Maybe<Array<HiveApplianceBrand_imageConnectionSort>>;
  }) => HiveApplianceBrand_imageConnection;
}

export interface HiveApplianceBrand_imageConnection {
  __typename: "HiveApplianceBrand_imageConnection" | undefined;
  edges: Array<HiveApplianceBrand_imageRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveApplianceBrand_imageRelationship {
  __typename: "HiveApplianceBrand_imageRelationship" | undefined;
  cursor: ScalarsEnums["String"];
  node: HiveFile;
}

export interface HiveAppliancePermissionsConnection {
  __typename: "HiveAppliancePermissionsConnection" | undefined;
  edges: Array<HiveAppliancePermissionsRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveAppliancePermissionsRelationship {
  __typename: "HiveAppliancePermissionsRelationship" | undefined;
  cursor: ScalarsEnums["String"];
  node: HivePermission;
}

export interface HiveApplianceServicesConnection {
  __typename: "HiveApplianceServicesConnection" | undefined;
  edges: Array<HiveApplianceServicesRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveApplianceServicesRelationship {
  __typename: "HiveApplianceServicesRelationship" | undefined;
  cursor: ScalarsEnums["String"];
  node: HiveService;
}

export interface HiveFile {
  __typename: "HiveFile" | undefined;
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  isFolder?: Maybe<ScalarsEnums["Boolean"]>;
  path_id?: Maybe<ScalarsEnums["String"]>;
  path?: Maybe<ScalarsEnums["String"]>;
  fs: (args?: {
    where?: Maybe<FileSystemWhere>;
    options?: Maybe<FileSystemOptions>;
  }) => Maybe<FileSystem>;
  parent: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Maybe<HiveFile>;
  children: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Maybe<Array<Maybe<HiveFile>>>;
  conversions: (args?: {
    where?: Maybe<HiveFileProcessWhere>;
    options?: Maybe<HiveFileProcessOptions>;
  }) => Maybe<Array<Maybe<HiveFileProcess>>>;
  convertedBy: (args?: {
    where?: Maybe<HiveFileProcessWhere>;
    options?: Maybe<HiveFileProcessOptions>;
  }) => Maybe<HiveFileProcess>;
  convertedFrom: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Maybe<HiveFile>;
  convertedTo: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Maybe<Array<Maybe<HiveFile>>>;
  fsConnection: (args?: {
    where?: Maybe<HiveFileFsConnectionWhere>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    sort?: Maybe<Array<HiveFileFsConnectionSort>>;
  }) => HiveFileFsConnection;
  parentConnection: (args?: {
    where?: Maybe<HiveFileParentConnectionWhere>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    sort?: Maybe<Array<HiveFileParentConnectionSort>>;
  }) => HiveFileParentConnection;
  childrenConnection: (args?: {
    where?: Maybe<HiveFileChildrenConnectionWhere>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    sort?: Maybe<Array<HiveFileChildrenConnectionSort>>;
  }) => HiveFileChildrenConnection;
  conversionsConnection: (args?: {
    where?: Maybe<HiveFileConversionsConnectionWhere>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    sort?: Maybe<Array<HiveFileConversionsConnectionSort>>;
  }) => HiveFileConversionsConnection;
  convertedByConnection: (args?: {
    where?: Maybe<HiveFileConvertedByConnectionWhere>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    sort?: Maybe<Array<HiveFileConvertedByConnectionSort>>;
  }) => HiveFileConvertedByConnection;
  convertedFromConnection: (args?: {
    where?: Maybe<HiveFileConvertedFromConnectionWhere>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    sort?: Maybe<Array<HiveFileConvertedFromConnectionSort>>;
  }) => HiveFileConvertedFromConnection;
  convertedToConnection: (args?: {
    where?: Maybe<HiveFileConvertedToConnectionWhere>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    sort?: Maybe<Array<HiveFileConvertedToConnectionSort>>;
  }) => HiveFileConvertedToConnection;
}

export interface HiveFileChildrenConnection {
  __typename: "HiveFileChildrenConnection" | undefined;
  edges: Array<HiveFileChildrenRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveFileChildrenRelationship {
  __typename: "HiveFileChildrenRelationship" | undefined;
  cursor: ScalarsEnums["String"];
  node: HiveFile;
}

export interface HiveFileConversionsConnection {
  __typename: "HiveFileConversionsConnection" | undefined;
  edges: Array<HiveFileConversionsRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveFileConversionsRelationship {
  __typename: "HiveFileConversionsRelationship" | undefined;
  cursor: ScalarsEnums["String"];
  node: HiveFileProcess;
}

export interface HiveFileConvertedByConnection {
  __typename: "HiveFileConvertedByConnection" | undefined;
  edges: Array<HiveFileConvertedByRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveFileConvertedByRelationship {
  __typename: "HiveFileConvertedByRelationship" | undefined;
  cursor: ScalarsEnums["String"];
  node: HiveFileProcess;
}

export interface HiveFileConvertedFromConnection {
  __typename: "HiveFileConvertedFromConnection" | undefined;
  edges: Array<HiveFileConvertedFromRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveFileConvertedFromRelationship {
  __typename: "HiveFileConvertedFromRelationship" | undefined;
  cursor: ScalarsEnums["String"];
  node: HiveFile;
}

export interface HiveFileConvertedToConnection {
  __typename: "HiveFileConvertedToConnection" | undefined;
  edges: Array<HiveFileConvertedToRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveFileConvertedToRelationship {
  __typename: "HiveFileConvertedToRelationship" | undefined;
  cursor: ScalarsEnums["String"];
  node: HiveFile;
}

export interface HiveFileFsConnection {
  __typename: "HiveFileFsConnection" | undefined;
  edges: Array<HiveFileFsRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveFileFsRelationship {
  __typename: "HiveFileFsRelationship" | undefined;
  cursor: ScalarsEnums["String"];
  node: FileSystem;
}

export interface HiveFileParentConnection {
  __typename: "HiveFileParentConnection" | undefined;
  edges: Array<HiveFileParentRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveFileParentRelationship {
  __typename: "HiveFileParentRelationship" | undefined;
  cursor: ScalarsEnums["String"];
  node: HiveFile;
}

export interface HiveFileProcess {
  __typename: "HiveFileProcess" | undefined;
  id: ScalarsEnums["ID"];
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  completedAt?: Maybe<ScalarsEnums["DateTime"]>;
  inputs: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Maybe<Array<Maybe<HiveFile>>>;
  outputs: (args?: {
    where?: Maybe<HiveFileWhere>;
    options?: Maybe<HiveFileOptions>;
  }) => Maybe<Array<Maybe<HiveFile>>>;
  inputsConnection: (args?: {
    where?: Maybe<HiveFileProcessInputsConnectionWhere>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    sort?: Maybe<Array<HiveFileProcessInputsConnectionSort>>;
  }) => HiveFileProcessInputsConnection;
  outputsConnection: (args?: {
    where?: Maybe<HiveFileProcessOutputsConnectionWhere>;
    first?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    sort?: Maybe<Array<HiveFileProcessOutputsConnectionSort>>;
  }) => HiveFileProcessOutputsConnection;
}

export interface HiveFileProcessInputsConnection {
  __typename: "HiveFileProcessInputsConnection" | undefined;
  edges: Array<HiveFileProcessInputsRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveFileProcessInputsRelationship {
  __typename: "HiveFileProcessInputsRelationship" | undefined;
  cursor: ScalarsEnums["String"];
  node: HiveFile;
}

export interface HiveFileProcessOutputsConnection {
  __typename: "HiveFileProcessOutputsConnection" | undefined;
  edges: Array<HiveFileProcessOutputsRelationship>;
  totalCount: ScalarsEnums["Int"];
  pageInfo: PageInfo;
}

export interface HiveFileProcessOutputsRelationship {
  __typename: "HiveFileProcessOutputsRelationship" | undefined;
  cursor: ScalarsEnums["String"];
  node: HiveFile;
}

export interface HivePermission {
  __typename: "HivePermission" | undefined;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  create?: Maybe<Array<Maybe<HiveIntegration>>>;
  read?: Maybe<Array<Maybe<HiveIntegration>>>;
  update?: Maybe<Array<Maybe<HiveIntegration>>>;
  remove?: Maybe<Array<Maybe<HiveIntegration>>>;
}

export interface HiveService {
  __typename: "HiveService" | undefined;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
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

export interface UpdateFileSystemsMutationResponse {
  __typename: "UpdateFileSystemsMutationResponse" | undefined;
  info: UpdateInfo;
  fileSystems: Array<FileSystem>;
}

export interface UpdateHiveAppliancesMutationResponse {
  __typename: "UpdateHiveAppliancesMutationResponse" | undefined;
  info: UpdateInfo;
  hiveAppliances: Array<HiveAppliance>;
}

export interface UpdateHiveFilesMutationResponse {
  __typename: "UpdateHiveFilesMutationResponse" | undefined;
  info: UpdateInfo;
  hiveFiles: Array<HiveFile>;
}

export interface UpdateHivePermissionsMutationResponse {
  __typename: "UpdateHivePermissionsMutationResponse" | undefined;
  info: UpdateInfo;
  hivePermissions: Array<HivePermission>;
}

export interface UpdateHiveServicesMutationResponse {
  __typename: "UpdateHiveServicesMutationResponse" | undefined;
  info: UpdateInfo;
  hiveServices: Array<HiveService>;
}

export interface UpdateInfo {
  __typename: "UpdateInfo" | undefined;
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesCreated: ScalarsEnums["Int"];
  nodesDeleted: ScalarsEnums["Int"];
  relationshipsCreated: ScalarsEnums["Int"];
  relationshipsDeleted: ScalarsEnums["Int"];
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
  notes?: Maybe<ScalarsEnums["String"]>;
  items?: Maybe<Array<Maybe<TimelineItemItems>>>;
  project?: Maybe<TimelineProject>;
}

export interface TimelineItemItems {
  __typename: "TimelineItemItems" | undefined;
  type?: Maybe<ScalarsEnums["String"]>;
  location?: Maybe<ScalarsEnums["String"]>;
  estimate?: Maybe<ScalarsEnums["Float"]>;
}

export interface TimelineProject {
  __typename: "TimelineProject" | undefined;
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface People {
  __typename: "People" | undefined;
  id?: Maybe<ScalarsEnums["ID"]>;
  name?: Maybe<ScalarsEnums["String"]>;
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
  type?: Maybe<ScalarsEnums["String"]>;
  extras?: Maybe<ScalarsEnums["JSON"]>;
  ports?: Maybe<ScalarsEnums["JSON"]>;
  x?: Maybe<ScalarsEnums["Float"]>;
  y?: Maybe<ScalarsEnums["Float"]>;
  _id?: Maybe<ScalarsEnums["MongoID"]>;
}

export interface FlowShardPaths {
  __typename: "FlowShardPaths" | undefined;
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

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  Printer: Printer;
  PrinterTemperature: PrinterTemperature;
  OctoPrintJob: OctoPrintJob;
  OctoPrintProgress: OctoPrintProgress;
  OctoPrintFilament: OctoPrintFilament;
  OctoPrintFile: OctoPrintFile;
  CreateFileSystemsMutationResponse: CreateFileSystemsMutationResponse;
  CreateHiveAppliancesMutationResponse: CreateHiveAppliancesMutationResponse;
  CreateHiveFilesMutationResponse: CreateHiveFilesMutationResponse;
  CreateHivePermissionsMutationResponse: CreateHivePermissionsMutationResponse;
  CreateHiveServicesMutationResponse: CreateHiveServicesMutationResponse;
  CreateInfo: CreateInfo;
  DeleteInfo: DeleteInfo;
  FileSystem: FileSystem;
  FileSystemFilesConnection: FileSystemFilesConnection;
  FileSystemFilesRelationship: FileSystemFilesRelationship;
  HiveAppliance: HiveAppliance;
  HiveApplianceBrand_imageConnection: HiveApplianceBrand_imageConnection;
  HiveApplianceBrand_imageRelationship: HiveApplianceBrand_imageRelationship;
  HiveAppliancePermissionsConnection: HiveAppliancePermissionsConnection;
  HiveAppliancePermissionsRelationship: HiveAppliancePermissionsRelationship;
  HiveApplianceServicesConnection: HiveApplianceServicesConnection;
  HiveApplianceServicesRelationship: HiveApplianceServicesRelationship;
  HiveFile: HiveFile;
  HiveFileChildrenConnection: HiveFileChildrenConnection;
  HiveFileChildrenRelationship: HiveFileChildrenRelationship;
  HiveFileConversionsConnection: HiveFileConversionsConnection;
  HiveFileConversionsRelationship: HiveFileConversionsRelationship;
  HiveFileConvertedByConnection: HiveFileConvertedByConnection;
  HiveFileConvertedByRelationship: HiveFileConvertedByRelationship;
  HiveFileConvertedFromConnection: HiveFileConvertedFromConnection;
  HiveFileConvertedFromRelationship: HiveFileConvertedFromRelationship;
  HiveFileConvertedToConnection: HiveFileConvertedToConnection;
  HiveFileConvertedToRelationship: HiveFileConvertedToRelationship;
  HiveFileFsConnection: HiveFileFsConnection;
  HiveFileFsRelationship: HiveFileFsRelationship;
  HiveFileParentConnection: HiveFileParentConnection;
  HiveFileParentRelationship: HiveFileParentRelationship;
  HiveFileProcess: HiveFileProcess;
  HiveFileProcessInputsConnection: HiveFileProcessInputsConnection;
  HiveFileProcessInputsRelationship: HiveFileProcessInputsRelationship;
  HiveFileProcessOutputsConnection: HiveFileProcessOutputsConnection;
  HiveFileProcessOutputsRelationship: HiveFileProcessOutputsRelationship;
  HivePermission: HivePermission;
  HiveService: HiveService;
  PageInfo: PageInfo;
  UpdateFileSystemsMutationResponse: UpdateFileSystemsMutationResponse;
  UpdateHiveAppliancesMutationResponse: UpdateHiveAppliancesMutationResponse;
  UpdateHiveFilesMutationResponse: UpdateHiveFilesMutationResponse;
  UpdateHivePermissionsMutationResponse: UpdateHivePermissionsMutationResponse;
  UpdateHiveServicesMutationResponse: UpdateHiveServicesMutationResponse;
  UpdateInfo: UpdateInfo;
  Project: Project;
  File: File;
  User: User;
  Quote: Quote;
  Equipment: Equipment;
  ScheduleItem: ScheduleItem;
  TimelineItem: TimelineItem;
  TimelineItemItems: TimelineItemItems;
  TimelineProject: TimelineProject;
  People: People;
  ValidationError: ValidationError;
  ErrorInterface: ErrorInterface;
  ValidatorError: ValidatorError;
  MongoError: MongoError;
  RuntimeError: RuntimeError;
  Program: Program;
  ProgramIo: ProgramIo;
  Device: Device;
  DeviceConnection: DeviceConnection;
  DeviceEdge: DeviceEdge;
  DevicePagination: DevicePagination;
  PaginationInfo: PaginationInfo;
  DNSRecord: DNSRecord;
  DNSRecordConnection: DNSRecordConnection;
  DNSRecordEdge: DNSRecordEdge;
  DNSRecordPagination: DNSRecordPagination;
  ProgramConnection: ProgramConnection;
  ProgramEdge: ProgramEdge;
  ProgramPagination: ProgramPagination;
  FlowShard: FlowShard;
  FlowShardNodes: FlowShardNodes;
  FlowShardPaths: FlowShardPaths;
  FlowShardPathsPoints: FlowShardPathsPoints;
  FlowShardConnection: FlowShardConnection;
  FlowShardEdge: FlowShardEdge;
  FlowShardPagination: FlowShardPagination;
  Stack: Stack;
  StackItems: StackItems;
  StackItemsDimensions: StackItemsDimensions;
  StackItemsInputs: StackItemsInputs;
  StackItemsPorts: StackItemsPorts;
  StackConnection: StackConnection;
  StackEdge: StackEdge;
  StackPagination: StackPagination;
  CreateOneDevicePayload: CreateOneDevicePayload;
  CreateManyDevicePayload: CreateManyDevicePayload;
  UpdateByIdDevicePayload: UpdateByIdDevicePayload;
  UpdateOneDevicePayload: UpdateOneDevicePayload;
  UpdateManyDevicePayload: UpdateManyDevicePayload;
  RemoveByIdDevicePayload: RemoveByIdDevicePayload;
  RemoveOneDevicePayload: RemoveOneDevicePayload;
  RemoveManyDevicePayload: RemoveManyDevicePayload;
  CreateOneDNSRecordPayload: CreateOneDNSRecordPayload;
  CreateManyDNSRecordPayload: CreateManyDNSRecordPayload;
  UpdateByIdDNSRecordPayload: UpdateByIdDNSRecordPayload;
  UpdateOneDNSRecordPayload: UpdateOneDNSRecordPayload;
  UpdateManyDNSRecordPayload: UpdateManyDNSRecordPayload;
  RemoveByIdDNSRecordPayload: RemoveByIdDNSRecordPayload;
  RemoveOneDNSRecordPayload: RemoveOneDNSRecordPayload;
  RemoveManyDNSRecordPayload: RemoveManyDNSRecordPayload;
  CreateOneProgramPayload: CreateOneProgramPayload;
  CreateManyProgramPayload: CreateManyProgramPayload;
  UpdateByIdProgramPayload: UpdateByIdProgramPayload;
  UpdateOneProgramPayload: UpdateOneProgramPayload;
  UpdateManyProgramPayload: UpdateManyProgramPayload;
  RemoveByIdProgramPayload: RemoveByIdProgramPayload;
  RemoveOneProgramPayload: RemoveOneProgramPayload;
  RemoveManyProgramPayload: RemoveManyProgramPayload;
  CreateOneFlowShardPayload: CreateOneFlowShardPayload;
  CreateManyFlowShardPayload: CreateManyFlowShardPayload;
  UpdateByIdFlowShardPayload: UpdateByIdFlowShardPayload;
  UpdateOneFlowShardPayload: UpdateOneFlowShardPayload;
  UpdateManyFlowShardPayload: UpdateManyFlowShardPayload;
  RemoveByIdFlowShardPayload: RemoveByIdFlowShardPayload;
  RemoveOneFlowShardPayload: RemoveOneFlowShardPayload;
  RemoveManyFlowShardPayload: RemoveManyFlowShardPayload;
  CreateOneStackPayload: CreateOneStackPayload;
  CreateManyStackPayload: CreateManyStackPayload;
  UpdateByIdStackPayload: UpdateByIdStackPayload;
  UpdateOneStackPayload: UpdateOneStackPayload;
  UpdateManyStackPayload: UpdateManyStackPayload;
  RemoveByIdStackPayload: RemoveByIdStackPayload;
  RemoveOneStackPayload: RemoveOneStackPayload;
  RemoveManyStackPayload: RemoveManyStackPayload;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "Printer"
  | "PrinterTemperature"
  | "OctoPrintJob"
  | "OctoPrintProgress"
  | "OctoPrintFilament"
  | "OctoPrintFile"
  | "CreateFileSystemsMutationResponse"
  | "CreateHiveAppliancesMutationResponse"
  | "CreateHiveFilesMutationResponse"
  | "CreateHivePermissionsMutationResponse"
  | "CreateHiveServicesMutationResponse"
  | "CreateInfo"
  | "DeleteInfo"
  | "FileSystem"
  | "FileSystemFilesConnection"
  | "FileSystemFilesRelationship"
  | "HiveAppliance"
  | "HiveApplianceBrand_imageConnection"
  | "HiveApplianceBrand_imageRelationship"
  | "HiveAppliancePermissionsConnection"
  | "HiveAppliancePermissionsRelationship"
  | "HiveApplianceServicesConnection"
  | "HiveApplianceServicesRelationship"
  | "HiveFile"
  | "HiveFileChildrenConnection"
  | "HiveFileChildrenRelationship"
  | "HiveFileConversionsConnection"
  | "HiveFileConversionsRelationship"
  | "HiveFileConvertedByConnection"
  | "HiveFileConvertedByRelationship"
  | "HiveFileConvertedFromConnection"
  | "HiveFileConvertedFromRelationship"
  | "HiveFileConvertedToConnection"
  | "HiveFileConvertedToRelationship"
  | "HiveFileFsConnection"
  | "HiveFileFsRelationship"
  | "HiveFileParentConnection"
  | "HiveFileParentRelationship"
  | "HiveFileProcess"
  | "HiveFileProcessInputsConnection"
  | "HiveFileProcessInputsRelationship"
  | "HiveFileProcessOutputsConnection"
  | "HiveFileProcessOutputsRelationship"
  | "HivePermission"
  | "HiveService"
  | "PageInfo"
  | "UpdateFileSystemsMutationResponse"
  | "UpdateHiveAppliancesMutationResponse"
  | "UpdateHiveFilesMutationResponse"
  | "UpdateHivePermissionsMutationResponse"
  | "UpdateHiveServicesMutationResponse"
  | "UpdateInfo"
  | "Project"
  | "File"
  | "User"
  | "Quote"
  | "Equipment"
  | "ScheduleItem"
  | "TimelineItem"
  | "TimelineItemItems"
  | "TimelineProject"
  | "People"
  | "ValidationError"
  | "ErrorInterface"
  | "ValidatorError"
  | "MongoError"
  | "RuntimeError"
  | "Program"
  | "ProgramIo"
  | "Device"
  | "DeviceConnection"
  | "DeviceEdge"
  | "DevicePagination"
  | "PaginationInfo"
  | "DNSRecord"
  | "DNSRecordConnection"
  | "DNSRecordEdge"
  | "DNSRecordPagination"
  | "ProgramConnection"
  | "ProgramEdge"
  | "ProgramPagination"
  | "FlowShard"
  | "FlowShardNodes"
  | "FlowShardPaths"
  | "FlowShardPathsPoints"
  | "FlowShardConnection"
  | "FlowShardEdge"
  | "FlowShardPagination"
  | "Stack"
  | "StackItems"
  | "StackItemsDimensions"
  | "StackItemsInputs"
  | "StackItemsPorts"
  | "StackConnection"
  | "StackEdge"
  | "StackPagination"
  | "CreateOneDevicePayload"
  | "CreateManyDevicePayload"
  | "UpdateByIdDevicePayload"
  | "UpdateOneDevicePayload"
  | "UpdateManyDevicePayload"
  | "RemoveByIdDevicePayload"
  | "RemoveOneDevicePayload"
  | "RemoveManyDevicePayload"
  | "CreateOneDNSRecordPayload"
  | "CreateManyDNSRecordPayload"
  | "UpdateByIdDNSRecordPayload"
  | "UpdateOneDNSRecordPayload"
  | "UpdateManyDNSRecordPayload"
  | "RemoveByIdDNSRecordPayload"
  | "RemoveOneDNSRecordPayload"
  | "RemoveManyDNSRecordPayload"
  | "CreateOneProgramPayload"
  | "CreateManyProgramPayload"
  | "UpdateByIdProgramPayload"
  | "UpdateOneProgramPayload"
  | "UpdateManyProgramPayload"
  | "RemoveByIdProgramPayload"
  | "RemoveOneProgramPayload"
  | "RemoveManyProgramPayload"
  | "CreateOneFlowShardPayload"
  | "CreateManyFlowShardPayload"
  | "UpdateByIdFlowShardPayload"
  | "UpdateOneFlowShardPayload"
  | "UpdateManyFlowShardPayload"
  | "RemoveByIdFlowShardPayload"
  | "RemoveOneFlowShardPayload"
  | "RemoveManyFlowShardPayload"
  | "CreateOneStackPayload"
  | "CreateManyStackPayload"
  | "UpdateByIdStackPayload"
  | "UpdateOneStackPayload"
  | "UpdateManyStackPayload"
  | "RemoveByIdStackPayload"
  | "RemoveOneStackPayload"
  | "RemoveManyStackPayload";

export type HiveIntegration =
  | {
      __typename: "HiveService" | undefined;
      brand_image?: undefined;
      brand_imageConnection?: undefined;
      description?: undefined;
      id: ScalarsEnums["ID"];
      name?: Maybe<ScalarsEnums["String"]>;
      permissions?: undefined;
      permissionsConnection?: undefined;
      services?: undefined;
      servicesConnection?: undefined;
    }
  | {
      __typename: "HiveAppliance" | undefined;
      brand_image: (args?: {
        where?: Maybe<HiveFileWhere>;
        options?: Maybe<HiveFileOptions>;
      }) => Maybe<HiveFile>;
      brand_imageConnection: (args?: {
        where?: Maybe<HiveApplianceBrand_imageConnectionWhere>;
        first?: Maybe<Scalars["Int"]>;
        after?: Maybe<Scalars["String"]>;
        sort?: Maybe<Array<HiveApplianceBrand_imageConnectionSort>>;
      }) => HiveApplianceBrand_imageConnection;
      description?: Maybe<ScalarsEnums["String"]>;
      id: ScalarsEnums["ID"];
      name: ScalarsEnums["String"];
      permissions: (args?: {
        where?: Maybe<HivePermissionWhere>;
        options?: Maybe<HivePermissionOptions>;
      }) => Maybe<Array<Maybe<HivePermission>>>;
      permissionsConnection: (args?: {
        where?: Maybe<HiveAppliancePermissionsConnectionWhere>;
        first?: Maybe<Scalars["Int"]>;
        after?: Maybe<Scalars["String"]>;
        sort?: Maybe<Array<HiveAppliancePermissionsConnectionSort>>;
      }) => HiveAppliancePermissionsConnection;
      services: (args?: {
        where?: Maybe<HiveServiceWhere>;
        options?: Maybe<HiveServiceOptions>;
      }) => Maybe<Array<Maybe<HiveService>>>;
      servicesConnection: (args?: {
        where?: Maybe<HiveApplianceServicesConnectionWhere>;
        first?: Maybe<Scalars["Int"]>;
        after?: Maybe<Scalars["String"]>;
        sort?: Maybe<Array<HiveApplianceServicesConnectionSort>>;
      }) => HiveApplianceServicesConnection;
    };

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
  SortDirection: SortDirection | undefined;
  SortFindByIdsDeviceInput: SortFindByIdsDeviceInput | undefined;
  SortFindOneDeviceInput: SortFindOneDeviceInput | undefined;
  SortFindManyDeviceInput: SortFindManyDeviceInput | undefined;
  SortConnectionDeviceEnum: SortConnectionDeviceEnum | undefined;
  SortFindByIdsDNSRecordInput: SortFindByIdsDNSRecordInput | undefined;
  SortFindOneDNSRecordInput: SortFindOneDNSRecordInput | undefined;
  SortFindManyDNSRecordInput: SortFindManyDNSRecordInput | undefined;
  SortConnectionDNSRecordEnum: SortConnectionDNSRecordEnum | undefined;
  SortFindByIdsProgramInput: SortFindByIdsProgramInput | undefined;
  SortFindOneProgramInput: SortFindOneProgramInput | undefined;
  SortFindManyProgramInput: SortFindManyProgramInput | undefined;
  SortConnectionProgramEnum: SortConnectionProgramEnum | undefined;
  SortFindByIdsFlowShardInput: SortFindByIdsFlowShardInput | undefined;
  SortFindOneFlowShardInput: SortFindOneFlowShardInput | undefined;
  SortFindManyFlowShardInput: SortFindManyFlowShardInput | undefined;
  SortConnectionFlowShardEnum: SortConnectionFlowShardEnum | undefined;
  SortFindByIdsStackInput: SortFindByIdsStackInput | undefined;
  SortFindOneStackInput: SortFindOneStackInput | undefined;
  SortFindManyStackInput: SortFindManyStackInput | undefined;
  SortConnectionStackEnum: SortConnectionStackEnum | undefined;
  SortUpdateOneDeviceInput: SortUpdateOneDeviceInput | undefined;
  SortUpdateManyDeviceInput: SortUpdateManyDeviceInput | undefined;
  SortRemoveOneDeviceInput: SortRemoveOneDeviceInput | undefined;
  SortUpdateOneDNSRecordInput: SortUpdateOneDNSRecordInput | undefined;
  SortUpdateManyDNSRecordInput: SortUpdateManyDNSRecordInput | undefined;
  SortRemoveOneDNSRecordInput: SortRemoveOneDNSRecordInput | undefined;
  SortUpdateOneProgramInput: SortUpdateOneProgramInput | undefined;
  SortUpdateManyProgramInput: SortUpdateManyProgramInput | undefined;
  SortRemoveOneProgramInput: SortRemoveOneProgramInput | undefined;
  SortUpdateOneFlowShardInput: SortUpdateOneFlowShardInput | undefined;
  SortUpdateManyFlowShardInput: SortUpdateManyFlowShardInput | undefined;
  SortRemoveOneFlowShardInput: SortRemoveOneFlowShardInput | undefined;
  SortUpdateOneStackInput: SortUpdateOneStackInput | undefined;
  SortUpdateManyStackInput: SortUpdateManyStackInput | undefined;
  SortRemoveOneStackInput: SortRemoveOneStackInput | undefined;
}
