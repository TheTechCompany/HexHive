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
  /** A date and time, represented as an ISO-8601 string */
  DateTime: string;
}

export interface CampaignAnalyticCampaignAggregateInput {
  AND?: Maybe<Array<CampaignAnalyticCampaignAggregateInput>>;
  OR?: Maybe<Array<CampaignAnalyticCampaignAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<CampaignAnalyticCampaignNodeAggregationWhereInput>;
}

export interface CampaignAnalyticCampaignConnectFieldInput {
  connect?: Maybe<CampaignConnectInput>;
  where?: Maybe<CampaignConnectWhere>;
}

export interface CampaignAnalyticCampaignConnectionSort {
  node?: Maybe<CampaignSort>;
}

export interface CampaignAnalyticCampaignConnectionWhere {
  AND?: Maybe<Array<CampaignAnalyticCampaignConnectionWhere>>;
  OR?: Maybe<Array<CampaignAnalyticCampaignConnectionWhere>>;
  node?: Maybe<CampaignWhere>;
  node_NOT?: Maybe<CampaignWhere>;
}

export interface CampaignAnalyticCampaignCreateFieldInput {
  node: CampaignCreateInput;
}

export interface CampaignAnalyticCampaignDeleteFieldInput {
  delete?: Maybe<CampaignDeleteInput>;
  where?: Maybe<CampaignAnalyticCampaignConnectionWhere>;
}

export interface CampaignAnalyticCampaignDisconnectFieldInput {
  disconnect?: Maybe<CampaignDisconnectInput>;
  where?: Maybe<CampaignAnalyticCampaignConnectionWhere>;
}

export interface CampaignAnalyticCampaignFieldInput {
  connect?: Maybe<CampaignAnalyticCampaignConnectFieldInput>;
  create?: Maybe<CampaignAnalyticCampaignCreateFieldInput>;
}

export interface CampaignAnalyticCampaignNodeAggregationWhereInput {
  AND?: Maybe<Array<CampaignAnalyticCampaignNodeAggregationWhereInput>>;
  OR?: Maybe<Array<CampaignAnalyticCampaignNodeAggregationWhereInput>>;
  customer_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  customer_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  customer_EQUAL?: Maybe<Scalars["String"]>;
  customer_GT?: Maybe<Scalars["Int"]>;
  customer_GTE?: Maybe<Scalars["Int"]>;
  customer_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  customer_LONGEST_GT?: Maybe<Scalars["Int"]>;
  customer_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  customer_LONGEST_LT?: Maybe<Scalars["Int"]>;
  customer_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  customer_LT?: Maybe<Scalars["Int"]>;
  customer_LTE?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  customer_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  endDate_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_GT?: Maybe<Scalars["DateTime"]>;
  endDate_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_LT?: Maybe<Scalars["DateTime"]>;
  endDate_LTE?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_GT?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_LT?: Maybe<Scalars["DateTime"]>;
  endDate_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_GT?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_LT?: Maybe<Scalars["DateTime"]>;
  endDate_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  startDate_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_GT?: Maybe<Scalars["DateTime"]>;
  startDate_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_LT?: Maybe<Scalars["DateTime"]>;
  startDate_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_GT?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_LT?: Maybe<Scalars["DateTime"]>;
  startDate_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_GT?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_LT?: Maybe<Scalars["DateTime"]>;
  startDate_MIN_LTE?: Maybe<Scalars["DateTime"]>;
}

export interface CampaignAnalyticCampaignUpdateConnectionInput {
  node?: Maybe<CampaignUpdateInput>;
}

export interface CampaignAnalyticCampaignUpdateFieldInput {
  connect?: Maybe<CampaignAnalyticCampaignConnectFieldInput>;
  create?: Maybe<CampaignAnalyticCampaignCreateFieldInput>;
  delete?: Maybe<CampaignAnalyticCampaignDeleteFieldInput>;
  disconnect?: Maybe<CampaignAnalyticCampaignDisconnectFieldInput>;
  update?: Maybe<CampaignAnalyticCampaignUpdateConnectionInput>;
  where?: Maybe<CampaignAnalyticCampaignConnectionWhere>;
}

export interface CampaignAnalyticConnectInput {
  campaign?: Maybe<CampaignAnalyticCampaignConnectFieldInput>;
}

export interface CampaignAnalyticConnectWhere {
  node: CampaignAnalyticWhere;
}

export interface CampaignAnalyticCreateInput {
  campaign?: Maybe<CampaignAnalyticCampaignFieldInput>;
  ts?: Maybe<Scalars["DateTime"]>;
  type?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
}

export interface CampaignAnalyticDeleteInput {
  campaign?: Maybe<CampaignAnalyticCampaignDeleteFieldInput>;
}

export interface CampaignAnalyticDisconnectInput {
  campaign?: Maybe<CampaignAnalyticCampaignDisconnectFieldInput>;
}

export interface CampaignAnalyticOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more CampaignAnalyticSort objects to sort CampaignAnalytics by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<CampaignAnalyticSort>>>;
}

export interface CampaignAnalyticRelationInput {
  campaign?: Maybe<CampaignAnalyticCampaignCreateFieldInput>;
}

/** Fields to sort CampaignAnalytics by. The order in which sorts are applied is not guaranteed when specifying many fields in one CampaignAnalyticSort object. */
export interface CampaignAnalyticSort {
  id?: Maybe<SortDirection>;
  ts?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
  value?: Maybe<SortDirection>;
}

export interface CampaignAnalyticUpdateInput {
  campaign?: Maybe<CampaignAnalyticCampaignUpdateFieldInput>;
  ts?: Maybe<Scalars["DateTime"]>;
  type?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
}

export interface CampaignAnalyticWhere {
  AND?: Maybe<Array<CampaignAnalyticWhere>>;
  OR?: Maybe<Array<CampaignAnalyticWhere>>;
  campaign?: Maybe<CampaignWhere>;
  campaignAggregate?: Maybe<CampaignAnalyticCampaignAggregateInput>;
  campaignConnection?: Maybe<CampaignAnalyticCampaignConnectionWhere>;
  campaignConnection_NOT?: Maybe<CampaignAnalyticCampaignConnectionWhere>;
  campaign_NOT?: Maybe<CampaignWhere>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  ts?: Maybe<Scalars["DateTime"]>;
  ts_GT?: Maybe<Scalars["DateTime"]>;
  ts_GTE?: Maybe<Scalars["DateTime"]>;
  ts_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  ts_LT?: Maybe<Scalars["DateTime"]>;
  ts_LTE?: Maybe<Scalars["DateTime"]>;
  ts_NOT?: Maybe<Scalars["DateTime"]>;
  ts_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  type?: Maybe<Scalars["String"]>;
  type_CONTAINS?: Maybe<Scalars["String"]>;
  type_ENDS_WITH?: Maybe<Scalars["String"]>;
  type_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type_NOT?: Maybe<Scalars["String"]>;
  type_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  type_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  type_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  type_STARTS_WITH?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
  value_CONTAINS?: Maybe<Scalars["String"]>;
  value_ENDS_WITH?: Maybe<Scalars["String"]>;
  value_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  value_NOT?: Maybe<Scalars["String"]>;
  value_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  value_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  value_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  value_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  value_STARTS_WITH?: Maybe<Scalars["String"]>;
}

export interface CampaignAnalyticsAggregateInput {
  AND?: Maybe<Array<CampaignAnalyticsAggregateInput>>;
  OR?: Maybe<Array<CampaignAnalyticsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<CampaignAnalyticsNodeAggregationWhereInput>;
}

export interface CampaignAnalyticsConnectFieldInput {
  connect?: Maybe<Array<CampaignAnalyticConnectInput>>;
  where?: Maybe<CampaignAnalyticConnectWhere>;
}

export interface CampaignAnalyticsConnectionSort {
  node?: Maybe<CampaignAnalyticSort>;
}

export interface CampaignAnalyticsConnectionWhere {
  AND?: Maybe<Array<CampaignAnalyticsConnectionWhere>>;
  OR?: Maybe<Array<CampaignAnalyticsConnectionWhere>>;
  node?: Maybe<CampaignAnalyticWhere>;
  node_NOT?: Maybe<CampaignAnalyticWhere>;
}

export interface CampaignAnalyticsCreateFieldInput {
  node: CampaignAnalyticCreateInput;
}

export interface CampaignAnalyticsDeleteFieldInput {
  delete?: Maybe<CampaignAnalyticDeleteInput>;
  where?: Maybe<CampaignAnalyticsConnectionWhere>;
}

export interface CampaignAnalyticsDisconnectFieldInput {
  disconnect?: Maybe<CampaignAnalyticDisconnectInput>;
  where?: Maybe<CampaignAnalyticsConnectionWhere>;
}

export interface CampaignAnalyticsFieldInput {
  connect?: Maybe<Array<CampaignAnalyticsConnectFieldInput>>;
  create?: Maybe<Array<CampaignAnalyticsCreateFieldInput>>;
}

export interface CampaignAnalyticsNodeAggregationWhereInput {
  AND?: Maybe<Array<CampaignAnalyticsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<CampaignAnalyticsNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  ts_EQUAL?: Maybe<Scalars["DateTime"]>;
  ts_GT?: Maybe<Scalars["DateTime"]>;
  ts_GTE?: Maybe<Scalars["DateTime"]>;
  ts_LT?: Maybe<Scalars["DateTime"]>;
  ts_LTE?: Maybe<Scalars["DateTime"]>;
  ts_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  ts_MAX_GT?: Maybe<Scalars["DateTime"]>;
  ts_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  ts_MAX_LT?: Maybe<Scalars["DateTime"]>;
  ts_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  ts_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  ts_MIN_GT?: Maybe<Scalars["DateTime"]>;
  ts_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  ts_MIN_LT?: Maybe<Scalars["DateTime"]>;
  ts_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  type_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  type_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  type_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  type_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  type_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  type_EQUAL?: Maybe<Scalars["String"]>;
  type_GT?: Maybe<Scalars["Int"]>;
  type_GTE?: Maybe<Scalars["Int"]>;
  type_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  type_LONGEST_GT?: Maybe<Scalars["Int"]>;
  type_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  type_LONGEST_LT?: Maybe<Scalars["Int"]>;
  type_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  type_LT?: Maybe<Scalars["Int"]>;
  type_LTE?: Maybe<Scalars["Int"]>;
  type_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  type_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  type_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  type_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  type_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  value_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  value_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  value_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  value_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  value_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  value_EQUAL?: Maybe<Scalars["String"]>;
  value_GT?: Maybe<Scalars["Int"]>;
  value_GTE?: Maybe<Scalars["Int"]>;
  value_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  value_LONGEST_GT?: Maybe<Scalars["Int"]>;
  value_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  value_LONGEST_LT?: Maybe<Scalars["Int"]>;
  value_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  value_LT?: Maybe<Scalars["Int"]>;
  value_LTE?: Maybe<Scalars["Int"]>;
  value_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  value_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  value_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  value_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  value_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface CampaignAnalyticsUpdateConnectionInput {
  node?: Maybe<CampaignAnalyticUpdateInput>;
}

export interface CampaignAnalyticsUpdateFieldInput {
  connect?: Maybe<Array<CampaignAnalyticsConnectFieldInput>>;
  create?: Maybe<Array<CampaignAnalyticsCreateFieldInput>>;
  delete?: Maybe<Array<CampaignAnalyticsDeleteFieldInput>>;
  disconnect?: Maybe<Array<CampaignAnalyticsDisconnectFieldInput>>;
  update?: Maybe<CampaignAnalyticsUpdateConnectionInput>;
  where?: Maybe<CampaignAnalyticsConnectionWhere>;
}

export interface CampaignAssetConnectWhere {
  node: CampaignAssetWhere;
}

export interface CampaignAssetCreateInput {
  cid?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface CampaignAssetOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more CampaignAssetSort objects to sort CampaignAssets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<CampaignAssetSort>>>;
}

/** Fields to sort CampaignAssets by. The order in which sorts are applied is not guaranteed when specifying many fields in one CampaignAssetSort object. */
export interface CampaignAssetSort {
  cid?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
}

export interface CampaignAssetUpdateInput {
  cid?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface CampaignAssetWhere {
  AND?: Maybe<Array<CampaignAssetWhere>>;
  OR?: Maybe<Array<CampaignAssetWhere>>;
  cid?: Maybe<Scalars["String"]>;
  cid_CONTAINS?: Maybe<Scalars["String"]>;
  cid_ENDS_WITH?: Maybe<Scalars["String"]>;
  cid_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  cid_NOT?: Maybe<Scalars["String"]>;
  cid_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  cid_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  cid_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  cid_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  cid_STARTS_WITH?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  type_CONTAINS?: Maybe<Scalars["String"]>;
  type_ENDS_WITH?: Maybe<Scalars["String"]>;
  type_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type_NOT?: Maybe<Scalars["String"]>;
  type_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  type_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  type_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  type_STARTS_WITH?: Maybe<Scalars["String"]>;
}

export interface CampaignAssetsAggregateInput {
  AND?: Maybe<Array<CampaignAssetsAggregateInput>>;
  OR?: Maybe<Array<CampaignAssetsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<CampaignAssetsNodeAggregationWhereInput>;
}

export interface CampaignAssetsConnectFieldInput {
  where?: Maybe<CampaignAssetConnectWhere>;
}

export interface CampaignAssetsConnectionSort {
  node?: Maybe<CampaignAssetSort>;
}

export interface CampaignAssetsConnectionWhere {
  AND?: Maybe<Array<CampaignAssetsConnectionWhere>>;
  OR?: Maybe<Array<CampaignAssetsConnectionWhere>>;
  node?: Maybe<CampaignAssetWhere>;
  node_NOT?: Maybe<CampaignAssetWhere>;
}

export interface CampaignAssetsCreateFieldInput {
  node: CampaignAssetCreateInput;
}

export interface CampaignAssetsDeleteFieldInput {
  where?: Maybe<CampaignAssetsConnectionWhere>;
}

export interface CampaignAssetsDisconnectFieldInput {
  where?: Maybe<CampaignAssetsConnectionWhere>;
}

export interface CampaignAssetsFieldInput {
  connect?: Maybe<Array<CampaignAssetsConnectFieldInput>>;
  create?: Maybe<Array<CampaignAssetsCreateFieldInput>>;
}

export interface CampaignAssetsNodeAggregationWhereInput {
  AND?: Maybe<Array<CampaignAssetsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<CampaignAssetsNodeAggregationWhereInput>>;
  cid_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  cid_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  cid_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  cid_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  cid_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  cid_EQUAL?: Maybe<Scalars["String"]>;
  cid_GT?: Maybe<Scalars["Int"]>;
  cid_GTE?: Maybe<Scalars["Int"]>;
  cid_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  cid_LONGEST_GT?: Maybe<Scalars["Int"]>;
  cid_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  cid_LONGEST_LT?: Maybe<Scalars["Int"]>;
  cid_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  cid_LT?: Maybe<Scalars["Int"]>;
  cid_LTE?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  cid_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  type_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  type_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  type_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  type_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  type_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  type_EQUAL?: Maybe<Scalars["String"]>;
  type_GT?: Maybe<Scalars["Int"]>;
  type_GTE?: Maybe<Scalars["Int"]>;
  type_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  type_LONGEST_GT?: Maybe<Scalars["Int"]>;
  type_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  type_LONGEST_LT?: Maybe<Scalars["Int"]>;
  type_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  type_LT?: Maybe<Scalars["Int"]>;
  type_LTE?: Maybe<Scalars["Int"]>;
  type_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  type_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  type_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  type_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  type_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface CampaignAssetsUpdateConnectionInput {
  node?: Maybe<CampaignAssetUpdateInput>;
}

export interface CampaignAssetsUpdateFieldInput {
  connect?: Maybe<Array<CampaignAssetsConnectFieldInput>>;
  create?: Maybe<Array<CampaignAssetsCreateFieldInput>>;
  delete?: Maybe<Array<CampaignAssetsDeleteFieldInput>>;
  disconnect?: Maybe<Array<CampaignAssetsDisconnectFieldInput>>;
  update?: Maybe<CampaignAssetsUpdateConnectionInput>;
  where?: Maybe<CampaignAssetsConnectionWhere>;
}

export interface CampaignConnectInput {
  analytics?: Maybe<Array<CampaignAnalyticsConnectFieldInput>>;
  assets?: Maybe<Array<CampaignAssetsConnectFieldInput>>;
}

export interface CampaignConnectWhere {
  node: CampaignWhere;
}

export interface CampaignCreateInput {
  analytics?: Maybe<CampaignAnalyticsFieldInput>;
  assets?: Maybe<CampaignAssetsFieldInput>;
  customer?: Maybe<Scalars["String"]>;
  endDate?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
}

export interface CampaignDeleteInput {
  analytics?: Maybe<Array<CampaignAnalyticsDeleteFieldInput>>;
  assets?: Maybe<Array<CampaignAssetsDeleteFieldInput>>;
}

export interface CampaignDisconnectInput {
  analytics?: Maybe<Array<CampaignAnalyticsDisconnectFieldInput>>;
  assets?: Maybe<Array<CampaignAssetsDisconnectFieldInput>>;
}

export interface CampaignOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more CampaignSort objects to sort Campaigns by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<CampaignSort>>>;
}

export interface CampaignRelationInput {
  analytics?: Maybe<Array<CampaignAnalyticsCreateFieldInput>>;
  assets?: Maybe<Array<CampaignAssetsCreateFieldInput>>;
}

/** Fields to sort Campaigns by. The order in which sorts are applied is not guaranteed when specifying many fields in one CampaignSort object. */
export interface CampaignSort {
  customer?: Maybe<SortDirection>;
  endDate?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  startDate?: Maybe<SortDirection>;
}

export interface CampaignUpdateInput {
  analytics?: Maybe<Array<CampaignAnalyticsUpdateFieldInput>>;
  assets?: Maybe<Array<CampaignAssetsUpdateFieldInput>>;
  customer?: Maybe<Scalars["String"]>;
  endDate?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
}

export interface CampaignWhere {
  AND?: Maybe<Array<CampaignWhere>>;
  OR?: Maybe<Array<CampaignWhere>>;
  analytics?: Maybe<CampaignAnalyticWhere>;
  analyticsAggregate?: Maybe<CampaignAnalyticsAggregateInput>;
  analyticsConnection?: Maybe<CampaignAnalyticsConnectionWhere>;
  analyticsConnection_NOT?: Maybe<CampaignAnalyticsConnectionWhere>;
  analytics_NOT?: Maybe<CampaignAnalyticWhere>;
  assets?: Maybe<CampaignAssetWhere>;
  assetsAggregate?: Maybe<CampaignAssetsAggregateInput>;
  assetsConnection?: Maybe<CampaignAssetsConnectionWhere>;
  assetsConnection_NOT?: Maybe<CampaignAssetsConnectionWhere>;
  assets_NOT?: Maybe<CampaignAssetWhere>;
  customer?: Maybe<Scalars["String"]>;
  customer_CONTAINS?: Maybe<Scalars["String"]>;
  customer_ENDS_WITH?: Maybe<Scalars["String"]>;
  customer_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  customer_NOT?: Maybe<Scalars["String"]>;
  customer_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  customer_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  customer_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  customer_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  customer_STARTS_WITH?: Maybe<Scalars["String"]>;
  endDate?: Maybe<Scalars["DateTime"]>;
  endDate_GT?: Maybe<Scalars["DateTime"]>;
  endDate_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  endDate_LT?: Maybe<Scalars["DateTime"]>;
  endDate_LTE?: Maybe<Scalars["DateTime"]>;
  endDate_NOT?: Maybe<Scalars["DateTime"]>;
  endDate_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  startDate_GT?: Maybe<Scalars["DateTime"]>;
  startDate_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  startDate_LT?: Maybe<Scalars["DateTime"]>;
  startDate_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_NOT?: Maybe<Scalars["DateTime"]>;
  startDate_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
}

export interface DisplayConnectInput {
  location?: Maybe<DisplayLocationConnectFieldInput>;
  screens?: Maybe<Array<DisplayScreensConnectFieldInput>>;
}

export interface DisplayConnectWhere {
  node: DisplayWhere;
}

export interface DisplayCreateInput {
  label?: Maybe<Scalars["String"]>;
  location?: Maybe<DisplayLocationFieldInput>;
  screens?: Maybe<DisplayScreensFieldInput>;
}

export interface DisplayDeleteInput {
  location?: Maybe<DisplayLocationDeleteFieldInput>;
  screens?: Maybe<Array<DisplayScreensDeleteFieldInput>>;
}

export interface DisplayDisconnectInput {
  location?: Maybe<DisplayLocationDisconnectFieldInput>;
  screens?: Maybe<Array<DisplayScreensDisconnectFieldInput>>;
}

export interface DisplayLocationAggregateInput {
  AND?: Maybe<Array<DisplayLocationAggregateInput>>;
  OR?: Maybe<Array<DisplayLocationAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<DisplayLocationNodeAggregationWhereInput>;
}

export interface DisplayLocationConnectFieldInput {
  connect?: Maybe<DisplayLocationConnectInput>;
  where?: Maybe<DisplayLocationConnectWhere>;
}

export interface DisplayLocationConnectInput {
  displays?: Maybe<Array<DisplayLocationDisplaysConnectFieldInput>>;
}

export interface DisplayLocationConnectWhere {
  node: DisplayLocationWhere;
}

export interface DisplayLocationConnectionSort {
  node?: Maybe<DisplayLocationSort>;
}

export interface DisplayLocationConnectionWhere {
  AND?: Maybe<Array<DisplayLocationConnectionWhere>>;
  OR?: Maybe<Array<DisplayLocationConnectionWhere>>;
  node?: Maybe<DisplayLocationWhere>;
  node_NOT?: Maybe<DisplayLocationWhere>;
}

export interface DisplayLocationCreateFieldInput {
  node: DisplayLocationCreateInput;
}

export interface DisplayLocationCreateInput {
  displays?: Maybe<DisplayLocationDisplaysFieldInput>;
  elevation?: Maybe<Scalars["Float"]>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
}

export interface DisplayLocationDeleteFieldInput {
  delete?: Maybe<DisplayLocationDeleteInput>;
  where?: Maybe<DisplayLocationConnectionWhere>;
}

export interface DisplayLocationDeleteInput {
  displays?: Maybe<Array<DisplayLocationDisplaysDeleteFieldInput>>;
}

export interface DisplayLocationDisconnectFieldInput {
  disconnect?: Maybe<DisplayLocationDisconnectInput>;
  where?: Maybe<DisplayLocationConnectionWhere>;
}

export interface DisplayLocationDisconnectInput {
  displays?: Maybe<Array<DisplayLocationDisplaysDisconnectFieldInput>>;
}

export interface DisplayLocationDisplaysAggregateInput {
  AND?: Maybe<Array<DisplayLocationDisplaysAggregateInput>>;
  OR?: Maybe<Array<DisplayLocationDisplaysAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<DisplayLocationDisplaysNodeAggregationWhereInput>;
}

export interface DisplayLocationDisplaysConnectFieldInput {
  connect?: Maybe<Array<DisplayConnectInput>>;
  where?: Maybe<DisplayConnectWhere>;
}

export interface DisplayLocationDisplaysConnectionSort {
  node?: Maybe<DisplaySort>;
}

export interface DisplayLocationDisplaysConnectionWhere {
  AND?: Maybe<Array<DisplayLocationDisplaysConnectionWhere>>;
  OR?: Maybe<Array<DisplayLocationDisplaysConnectionWhere>>;
  node?: Maybe<DisplayWhere>;
  node_NOT?: Maybe<DisplayWhere>;
}

export interface DisplayLocationDisplaysCreateFieldInput {
  node: DisplayCreateInput;
}

export interface DisplayLocationDisplaysDeleteFieldInput {
  delete?: Maybe<DisplayDeleteInput>;
  where?: Maybe<DisplayLocationDisplaysConnectionWhere>;
}

export interface DisplayLocationDisplaysDisconnectFieldInput {
  disconnect?: Maybe<DisplayDisconnectInput>;
  where?: Maybe<DisplayLocationDisplaysConnectionWhere>;
}

export interface DisplayLocationDisplaysFieldInput {
  connect?: Maybe<Array<DisplayLocationDisplaysConnectFieldInput>>;
  create?: Maybe<Array<DisplayLocationDisplaysCreateFieldInput>>;
}

export interface DisplayLocationDisplaysNodeAggregationWhereInput {
  AND?: Maybe<Array<DisplayLocationDisplaysNodeAggregationWhereInput>>;
  OR?: Maybe<Array<DisplayLocationDisplaysNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  label_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  label_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  label_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  label_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  label_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  label_EQUAL?: Maybe<Scalars["String"]>;
  label_GT?: Maybe<Scalars["Int"]>;
  label_GTE?: Maybe<Scalars["Int"]>;
  label_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_LONGEST_GT?: Maybe<Scalars["Int"]>;
  label_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  label_LONGEST_LT?: Maybe<Scalars["Int"]>;
  label_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  label_LT?: Maybe<Scalars["Int"]>;
  label_LTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  label_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface DisplayLocationDisplaysUpdateConnectionInput {
  node?: Maybe<DisplayUpdateInput>;
}

export interface DisplayLocationDisplaysUpdateFieldInput {
  connect?: Maybe<Array<DisplayLocationDisplaysConnectFieldInput>>;
  create?: Maybe<Array<DisplayLocationDisplaysCreateFieldInput>>;
  delete?: Maybe<Array<DisplayLocationDisplaysDeleteFieldInput>>;
  disconnect?: Maybe<Array<DisplayLocationDisplaysDisconnectFieldInput>>;
  update?: Maybe<DisplayLocationDisplaysUpdateConnectionInput>;
  where?: Maybe<DisplayLocationDisplaysConnectionWhere>;
}

export interface DisplayLocationFieldInput {
  connect?: Maybe<DisplayLocationConnectFieldInput>;
  create?: Maybe<DisplayLocationCreateFieldInput>;
}

export interface DisplayLocationNodeAggregationWhereInput {
  AND?: Maybe<Array<DisplayLocationNodeAggregationWhereInput>>;
  OR?: Maybe<Array<DisplayLocationNodeAggregationWhereInput>>;
  elevation_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  elevation_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  elevation_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  elevation_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  elevation_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  elevation_EQUAL?: Maybe<Scalars["Float"]>;
  elevation_GT?: Maybe<Scalars["Float"]>;
  elevation_GTE?: Maybe<Scalars["Float"]>;
  elevation_LT?: Maybe<Scalars["Float"]>;
  elevation_LTE?: Maybe<Scalars["Float"]>;
  elevation_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  elevation_MAX_GT?: Maybe<Scalars["Float"]>;
  elevation_MAX_GTE?: Maybe<Scalars["Float"]>;
  elevation_MAX_LT?: Maybe<Scalars["Float"]>;
  elevation_MAX_LTE?: Maybe<Scalars["Float"]>;
  elevation_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  elevation_MIN_GT?: Maybe<Scalars["Float"]>;
  elevation_MIN_GTE?: Maybe<Scalars["Float"]>;
  elevation_MIN_LT?: Maybe<Scalars["Float"]>;
  elevation_MIN_LTE?: Maybe<Scalars["Float"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  lat_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  lat_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  lat_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  lat_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  lat_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  lat_EQUAL?: Maybe<Scalars["Float"]>;
  lat_GT?: Maybe<Scalars["Float"]>;
  lat_GTE?: Maybe<Scalars["Float"]>;
  lat_LT?: Maybe<Scalars["Float"]>;
  lat_LTE?: Maybe<Scalars["Float"]>;
  lat_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  lat_MAX_GT?: Maybe<Scalars["Float"]>;
  lat_MAX_GTE?: Maybe<Scalars["Float"]>;
  lat_MAX_LT?: Maybe<Scalars["Float"]>;
  lat_MAX_LTE?: Maybe<Scalars["Float"]>;
  lat_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  lat_MIN_GT?: Maybe<Scalars["Float"]>;
  lat_MIN_GTE?: Maybe<Scalars["Float"]>;
  lat_MIN_LT?: Maybe<Scalars["Float"]>;
  lat_MIN_LTE?: Maybe<Scalars["Float"]>;
  lng_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  lng_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  lng_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  lng_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  lng_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  lng_EQUAL?: Maybe<Scalars["Float"]>;
  lng_GT?: Maybe<Scalars["Float"]>;
  lng_GTE?: Maybe<Scalars["Float"]>;
  lng_LT?: Maybe<Scalars["Float"]>;
  lng_LTE?: Maybe<Scalars["Float"]>;
  lng_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  lng_MAX_GT?: Maybe<Scalars["Float"]>;
  lng_MAX_GTE?: Maybe<Scalars["Float"]>;
  lng_MAX_LT?: Maybe<Scalars["Float"]>;
  lng_MAX_LTE?: Maybe<Scalars["Float"]>;
  lng_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  lng_MIN_GT?: Maybe<Scalars["Float"]>;
  lng_MIN_GTE?: Maybe<Scalars["Float"]>;
  lng_MIN_LT?: Maybe<Scalars["Float"]>;
  lng_MIN_LTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  name_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  name_EQUAL?: Maybe<Scalars["String"]>;
  name_GT?: Maybe<Scalars["Int"]>;
  name_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_LONGEST_GT?: Maybe<Scalars["Int"]>;
  name_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  name_LONGEST_LT?: Maybe<Scalars["Int"]>;
  name_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  name_LT?: Maybe<Scalars["Int"]>;
  name_LTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface DisplayLocationOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more DisplayLocationSort objects to sort DisplayLocations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<DisplayLocationSort>>>;
}

export interface DisplayLocationRelationInput {
  displays?: Maybe<Array<DisplayLocationDisplaysCreateFieldInput>>;
}

/** Fields to sort DisplayLocations by. The order in which sorts are applied is not guaranteed when specifying many fields in one DisplayLocationSort object. */
export interface DisplayLocationSort {
  elevation?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  lat?: Maybe<SortDirection>;
  lng?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface DisplayLocationUpdateConnectionInput {
  node?: Maybe<DisplayLocationUpdateInput>;
}

export interface DisplayLocationUpdateFieldInput {
  connect?: Maybe<DisplayLocationConnectFieldInput>;
  create?: Maybe<DisplayLocationCreateFieldInput>;
  delete?: Maybe<DisplayLocationDeleteFieldInput>;
  disconnect?: Maybe<DisplayLocationDisconnectFieldInput>;
  update?: Maybe<DisplayLocationUpdateConnectionInput>;
  where?: Maybe<DisplayLocationConnectionWhere>;
}

export interface DisplayLocationUpdateInput {
  displays?: Maybe<Array<DisplayLocationDisplaysUpdateFieldInput>>;
  elevation?: Maybe<Scalars["Float"]>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
}

export interface DisplayLocationWhere {
  AND?: Maybe<Array<DisplayLocationWhere>>;
  OR?: Maybe<Array<DisplayLocationWhere>>;
  displays?: Maybe<DisplayWhere>;
  displaysAggregate?: Maybe<DisplayLocationDisplaysAggregateInput>;
  displaysConnection?: Maybe<DisplayLocationDisplaysConnectionWhere>;
  displaysConnection_NOT?: Maybe<DisplayLocationDisplaysConnectionWhere>;
  displays_NOT?: Maybe<DisplayWhere>;
  elevation?: Maybe<Scalars["Float"]>;
  elevation_GT?: Maybe<Scalars["Float"]>;
  elevation_GTE?: Maybe<Scalars["Float"]>;
  elevation_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  elevation_LT?: Maybe<Scalars["Float"]>;
  elevation_LTE?: Maybe<Scalars["Float"]>;
  elevation_NOT?: Maybe<Scalars["Float"]>;
  elevation_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  lat?: Maybe<Scalars["Float"]>;
  lat_GT?: Maybe<Scalars["Float"]>;
  lat_GTE?: Maybe<Scalars["Float"]>;
  lat_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  lat_LT?: Maybe<Scalars["Float"]>;
  lat_LTE?: Maybe<Scalars["Float"]>;
  lat_NOT?: Maybe<Scalars["Float"]>;
  lat_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  lng?: Maybe<Scalars["Float"]>;
  lng_GT?: Maybe<Scalars["Float"]>;
  lng_GTE?: Maybe<Scalars["Float"]>;
  lng_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  lng_LT?: Maybe<Scalars["Float"]>;
  lng_LTE?: Maybe<Scalars["Float"]>;
  lng_NOT?: Maybe<Scalars["Float"]>;
  lng_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  name?: Maybe<Scalars["String"]>;
  name_CONTAINS?: Maybe<Scalars["String"]>;
  name_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT?: Maybe<Scalars["String"]>;
  name_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  name_STARTS_WITH?: Maybe<Scalars["String"]>;
}

export interface DisplayOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more DisplaySort objects to sort Displays by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<DisplaySort>>>;
}

export interface DisplayRelationInput {
  location?: Maybe<DisplayLocationCreateFieldInput>;
  screens?: Maybe<Array<DisplayScreensCreateFieldInput>>;
}

export interface DisplayScreenConnectWhere {
  node: DisplayScreenWhere;
}

export interface DisplayScreenCreateInput {
  height?: Maybe<Scalars["Float"]>;
  orientation?: Maybe<Scalars["Float"]>;
  resHeight?: Maybe<Scalars["Float"]>;
  resWidth?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
}

export interface DisplayScreenOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more DisplayScreenSort objects to sort DisplayScreens by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<DisplayScreenSort>>>;
}

/** Fields to sort DisplayScreens by. The order in which sorts are applied is not guaranteed when specifying many fields in one DisplayScreenSort object. */
export interface DisplayScreenSort {
  height?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  orientation?: Maybe<SortDirection>;
  resHeight?: Maybe<SortDirection>;
  resWidth?: Maybe<SortDirection>;
  width?: Maybe<SortDirection>;
}

export interface DisplayScreenUpdateInput {
  height?: Maybe<Scalars["Float"]>;
  orientation?: Maybe<Scalars["Float"]>;
  resHeight?: Maybe<Scalars["Float"]>;
  resWidth?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
}

export interface DisplayScreenWhere {
  AND?: Maybe<Array<DisplayScreenWhere>>;
  OR?: Maybe<Array<DisplayScreenWhere>>;
  height?: Maybe<Scalars["Float"]>;
  height_GT?: Maybe<Scalars["Float"]>;
  height_GTE?: Maybe<Scalars["Float"]>;
  height_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  height_LT?: Maybe<Scalars["Float"]>;
  height_LTE?: Maybe<Scalars["Float"]>;
  height_NOT?: Maybe<Scalars["Float"]>;
  height_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  orientation?: Maybe<Scalars["Float"]>;
  orientation_GT?: Maybe<Scalars["Float"]>;
  orientation_GTE?: Maybe<Scalars["Float"]>;
  orientation_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  orientation_LT?: Maybe<Scalars["Float"]>;
  orientation_LTE?: Maybe<Scalars["Float"]>;
  orientation_NOT?: Maybe<Scalars["Float"]>;
  orientation_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  resHeight?: Maybe<Scalars["Float"]>;
  resHeight_GT?: Maybe<Scalars["Float"]>;
  resHeight_GTE?: Maybe<Scalars["Float"]>;
  resHeight_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  resHeight_LT?: Maybe<Scalars["Float"]>;
  resHeight_LTE?: Maybe<Scalars["Float"]>;
  resHeight_NOT?: Maybe<Scalars["Float"]>;
  resHeight_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  resWidth?: Maybe<Scalars["Float"]>;
  resWidth_GT?: Maybe<Scalars["Float"]>;
  resWidth_GTE?: Maybe<Scalars["Float"]>;
  resWidth_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  resWidth_LT?: Maybe<Scalars["Float"]>;
  resWidth_LTE?: Maybe<Scalars["Float"]>;
  resWidth_NOT?: Maybe<Scalars["Float"]>;
  resWidth_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  width?: Maybe<Scalars["Float"]>;
  width_GT?: Maybe<Scalars["Float"]>;
  width_GTE?: Maybe<Scalars["Float"]>;
  width_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  width_LT?: Maybe<Scalars["Float"]>;
  width_LTE?: Maybe<Scalars["Float"]>;
  width_NOT?: Maybe<Scalars["Float"]>;
  width_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
}

export interface DisplayScreensAggregateInput {
  AND?: Maybe<Array<DisplayScreensAggregateInput>>;
  OR?: Maybe<Array<DisplayScreensAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<DisplayScreensNodeAggregationWhereInput>;
}

export interface DisplayScreensConnectFieldInput {
  where?: Maybe<DisplayScreenConnectWhere>;
}

export interface DisplayScreensConnectionSort {
  node?: Maybe<DisplayScreenSort>;
}

export interface DisplayScreensConnectionWhere {
  AND?: Maybe<Array<DisplayScreensConnectionWhere>>;
  OR?: Maybe<Array<DisplayScreensConnectionWhere>>;
  node?: Maybe<DisplayScreenWhere>;
  node_NOT?: Maybe<DisplayScreenWhere>;
}

export interface DisplayScreensCreateFieldInput {
  node: DisplayScreenCreateInput;
}

export interface DisplayScreensDeleteFieldInput {
  where?: Maybe<DisplayScreensConnectionWhere>;
}

export interface DisplayScreensDisconnectFieldInput {
  where?: Maybe<DisplayScreensConnectionWhere>;
}

export interface DisplayScreensFieldInput {
  connect?: Maybe<Array<DisplayScreensConnectFieldInput>>;
  create?: Maybe<Array<DisplayScreensCreateFieldInput>>;
}

export interface DisplayScreensNodeAggregationWhereInput {
  AND?: Maybe<Array<DisplayScreensNodeAggregationWhereInput>>;
  OR?: Maybe<Array<DisplayScreensNodeAggregationWhereInput>>;
  height_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  height_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  height_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  height_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  height_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  height_EQUAL?: Maybe<Scalars["Float"]>;
  height_GT?: Maybe<Scalars["Float"]>;
  height_GTE?: Maybe<Scalars["Float"]>;
  height_LT?: Maybe<Scalars["Float"]>;
  height_LTE?: Maybe<Scalars["Float"]>;
  height_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  height_MAX_GT?: Maybe<Scalars["Float"]>;
  height_MAX_GTE?: Maybe<Scalars["Float"]>;
  height_MAX_LT?: Maybe<Scalars["Float"]>;
  height_MAX_LTE?: Maybe<Scalars["Float"]>;
  height_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  height_MIN_GT?: Maybe<Scalars["Float"]>;
  height_MIN_GTE?: Maybe<Scalars["Float"]>;
  height_MIN_LT?: Maybe<Scalars["Float"]>;
  height_MIN_LTE?: Maybe<Scalars["Float"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  orientation_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  orientation_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  orientation_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  orientation_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  orientation_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  orientation_EQUAL?: Maybe<Scalars["Float"]>;
  orientation_GT?: Maybe<Scalars["Float"]>;
  orientation_GTE?: Maybe<Scalars["Float"]>;
  orientation_LT?: Maybe<Scalars["Float"]>;
  orientation_LTE?: Maybe<Scalars["Float"]>;
  orientation_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  orientation_MAX_GT?: Maybe<Scalars["Float"]>;
  orientation_MAX_GTE?: Maybe<Scalars["Float"]>;
  orientation_MAX_LT?: Maybe<Scalars["Float"]>;
  orientation_MAX_LTE?: Maybe<Scalars["Float"]>;
  orientation_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  orientation_MIN_GT?: Maybe<Scalars["Float"]>;
  orientation_MIN_GTE?: Maybe<Scalars["Float"]>;
  orientation_MIN_LT?: Maybe<Scalars["Float"]>;
  orientation_MIN_LTE?: Maybe<Scalars["Float"]>;
  resHeight_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  resHeight_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  resHeight_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  resHeight_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  resHeight_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  resHeight_EQUAL?: Maybe<Scalars["Float"]>;
  resHeight_GT?: Maybe<Scalars["Float"]>;
  resHeight_GTE?: Maybe<Scalars["Float"]>;
  resHeight_LT?: Maybe<Scalars["Float"]>;
  resHeight_LTE?: Maybe<Scalars["Float"]>;
  resHeight_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  resHeight_MAX_GT?: Maybe<Scalars["Float"]>;
  resHeight_MAX_GTE?: Maybe<Scalars["Float"]>;
  resHeight_MAX_LT?: Maybe<Scalars["Float"]>;
  resHeight_MAX_LTE?: Maybe<Scalars["Float"]>;
  resHeight_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  resHeight_MIN_GT?: Maybe<Scalars["Float"]>;
  resHeight_MIN_GTE?: Maybe<Scalars["Float"]>;
  resHeight_MIN_LT?: Maybe<Scalars["Float"]>;
  resHeight_MIN_LTE?: Maybe<Scalars["Float"]>;
  resWidth_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  resWidth_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  resWidth_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  resWidth_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  resWidth_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  resWidth_EQUAL?: Maybe<Scalars["Float"]>;
  resWidth_GT?: Maybe<Scalars["Float"]>;
  resWidth_GTE?: Maybe<Scalars["Float"]>;
  resWidth_LT?: Maybe<Scalars["Float"]>;
  resWidth_LTE?: Maybe<Scalars["Float"]>;
  resWidth_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  resWidth_MAX_GT?: Maybe<Scalars["Float"]>;
  resWidth_MAX_GTE?: Maybe<Scalars["Float"]>;
  resWidth_MAX_LT?: Maybe<Scalars["Float"]>;
  resWidth_MAX_LTE?: Maybe<Scalars["Float"]>;
  resWidth_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  resWidth_MIN_GT?: Maybe<Scalars["Float"]>;
  resWidth_MIN_GTE?: Maybe<Scalars["Float"]>;
  resWidth_MIN_LT?: Maybe<Scalars["Float"]>;
  resWidth_MIN_LTE?: Maybe<Scalars["Float"]>;
  width_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  width_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  width_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  width_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  width_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  width_EQUAL?: Maybe<Scalars["Float"]>;
  width_GT?: Maybe<Scalars["Float"]>;
  width_GTE?: Maybe<Scalars["Float"]>;
  width_LT?: Maybe<Scalars["Float"]>;
  width_LTE?: Maybe<Scalars["Float"]>;
  width_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  width_MAX_GT?: Maybe<Scalars["Float"]>;
  width_MAX_GTE?: Maybe<Scalars["Float"]>;
  width_MAX_LT?: Maybe<Scalars["Float"]>;
  width_MAX_LTE?: Maybe<Scalars["Float"]>;
  width_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  width_MIN_GT?: Maybe<Scalars["Float"]>;
  width_MIN_GTE?: Maybe<Scalars["Float"]>;
  width_MIN_LT?: Maybe<Scalars["Float"]>;
  width_MIN_LTE?: Maybe<Scalars["Float"]>;
}

export interface DisplayScreensUpdateConnectionInput {
  node?: Maybe<DisplayScreenUpdateInput>;
}

export interface DisplayScreensUpdateFieldInput {
  connect?: Maybe<Array<DisplayScreensConnectFieldInput>>;
  create?: Maybe<Array<DisplayScreensCreateFieldInput>>;
  delete?: Maybe<Array<DisplayScreensDeleteFieldInput>>;
  disconnect?: Maybe<Array<DisplayScreensDisconnectFieldInput>>;
  update?: Maybe<DisplayScreensUpdateConnectionInput>;
  where?: Maybe<DisplayScreensConnectionWhere>;
}

/** Fields to sort Displays by. The order in which sorts are applied is not guaranteed when specifying many fields in one DisplaySort object. */
export interface DisplaySort {
  id?: Maybe<SortDirection>;
  label?: Maybe<SortDirection>;
}

export interface DisplayUpdateInput {
  label?: Maybe<Scalars["String"]>;
  location?: Maybe<DisplayLocationUpdateFieldInput>;
  screens?: Maybe<Array<DisplayScreensUpdateFieldInput>>;
}

export interface DisplayWhere {
  AND?: Maybe<Array<DisplayWhere>>;
  OR?: Maybe<Array<DisplayWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  label?: Maybe<Scalars["String"]>;
  label_CONTAINS?: Maybe<Scalars["String"]>;
  label_ENDS_WITH?: Maybe<Scalars["String"]>;
  label_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  label_NOT?: Maybe<Scalars["String"]>;
  label_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  label_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  label_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  label_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  label_STARTS_WITH?: Maybe<Scalars["String"]>;
  location?: Maybe<DisplayLocationWhere>;
  locationAggregate?: Maybe<DisplayLocationAggregateInput>;
  locationConnection?: Maybe<DisplayLocationConnectionWhere>;
  locationConnection_NOT?: Maybe<DisplayLocationConnectionWhere>;
  location_NOT?: Maybe<DisplayLocationWhere>;
  screens?: Maybe<DisplayScreenWhere>;
  screensAggregate?: Maybe<DisplayScreensAggregateInput>;
  screensConnection?: Maybe<DisplayScreensConnectionWhere>;
  screensConnection_NOT?: Maybe<DisplayScreensConnectionWhere>;
  screens_NOT?: Maybe<DisplayScreenWhere>;
}

export enum SortDirection {
  /** Sort by field values in ascending order. */
  ASC = "ASC",
  /** Sort by field values in descending order. */
  DESC = "DESC",
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  DateTime: true,
  Float: true,
  ID: true,
  Int: true,
  SortDirection: true,
  String: true,
};
export const generatedSchema = {
  Campaign: {
    __typename: { __type: "String!" },
    analytics: {
      __type: "[CampaignAnalytic]",
      __args: {
        options: "CampaignAnalyticOptions",
        where: "CampaignAnalyticWhere",
      },
    },
    analyticsAggregate: {
      __type: "CampaignCampaignAnalyticAnalyticsAggregationSelection",
      __args: { where: "CampaignAnalyticWhere" },
    },
    analyticsConnection: {
      __type: "CampaignAnalyticsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[CampaignAnalyticsConnectionSort!]",
        where: "CampaignAnalyticsConnectionWhere",
      },
    },
    assets: {
      __type: "[CampaignAsset]",
      __args: { options: "CampaignAssetOptions", where: "CampaignAssetWhere" },
    },
    assetsAggregate: {
      __type: "CampaignCampaignAssetAssetsAggregationSelection",
      __args: { where: "CampaignAssetWhere" },
    },
    assetsConnection: {
      __type: "CampaignAssetsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[CampaignAssetsConnectionSort!]",
        where: "CampaignAssetsConnectionWhere",
      },
    },
    customer: { __type: "String" },
    endDate: { __type: "DateTime" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    startDate: { __type: "DateTime" },
  },
  CampaignAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    customer: { __type: "StringAggregateSelection!" },
    endDate: { __type: "DateTimeAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    startDate: { __type: "DateTimeAggregateSelection!" },
  },
  CampaignAnalytic: {
    __typename: { __type: "String!" },
    campaign: {
      __type: "Campaign",
      __args: { options: "CampaignOptions", where: "CampaignWhere" },
    },
    campaignAggregate: {
      __type: "CampaignAnalyticCampaignCampaignAggregationSelection",
      __args: { where: "CampaignWhere" },
    },
    campaignConnection: {
      __type: "CampaignAnalyticCampaignConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[CampaignAnalyticCampaignConnectionSort!]",
        where: "CampaignAnalyticCampaignConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    ts: { __type: "DateTime" },
    type: { __type: "String" },
    value: { __type: "String" },
  },
  CampaignAnalyticAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    ts: { __type: "DateTimeAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
    value: { __type: "StringAggregateSelection!" },
  },
  CampaignAnalyticCampaignAggregateInput: {
    AND: { __type: "[CampaignAnalyticCampaignAggregateInput!]" },
    OR: { __type: "[CampaignAnalyticCampaignAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "CampaignAnalyticCampaignNodeAggregationWhereInput" },
  },
  CampaignAnalyticCampaignCampaignAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "CampaignAnalyticCampaignCampaignNodeAggregateSelection" },
  },
  CampaignAnalyticCampaignCampaignNodeAggregateSelection: {
    __typename: { __type: "String!" },
    customer: { __type: "StringAggregateSelection!" },
    endDate: { __type: "DateTimeAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    startDate: { __type: "DateTimeAggregateSelection!" },
  },
  CampaignAnalyticCampaignConnectFieldInput: {
    connect: { __type: "CampaignConnectInput" },
    where: { __type: "CampaignConnectWhere" },
  },
  CampaignAnalyticCampaignConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[CampaignAnalyticCampaignRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  CampaignAnalyticCampaignConnectionSort: { node: { __type: "CampaignSort" } },
  CampaignAnalyticCampaignConnectionWhere: {
    AND: { __type: "[CampaignAnalyticCampaignConnectionWhere!]" },
    OR: { __type: "[CampaignAnalyticCampaignConnectionWhere!]" },
    node: { __type: "CampaignWhere" },
    node_NOT: { __type: "CampaignWhere" },
  },
  CampaignAnalyticCampaignCreateFieldInput: {
    node: { __type: "CampaignCreateInput!" },
  },
  CampaignAnalyticCampaignDeleteFieldInput: {
    delete: { __type: "CampaignDeleteInput" },
    where: { __type: "CampaignAnalyticCampaignConnectionWhere" },
  },
  CampaignAnalyticCampaignDisconnectFieldInput: {
    disconnect: { __type: "CampaignDisconnectInput" },
    where: { __type: "CampaignAnalyticCampaignConnectionWhere" },
  },
  CampaignAnalyticCampaignFieldInput: {
    connect: { __type: "CampaignAnalyticCampaignConnectFieldInput" },
    create: { __type: "CampaignAnalyticCampaignCreateFieldInput" },
  },
  CampaignAnalyticCampaignNodeAggregationWhereInput: {
    AND: { __type: "[CampaignAnalyticCampaignNodeAggregationWhereInput!]" },
    OR: { __type: "[CampaignAnalyticCampaignNodeAggregationWhereInput!]" },
    customer_AVERAGE_EQUAL: { __type: "Float" },
    customer_AVERAGE_GT: { __type: "Float" },
    customer_AVERAGE_GTE: { __type: "Float" },
    customer_AVERAGE_LT: { __type: "Float" },
    customer_AVERAGE_LTE: { __type: "Float" },
    customer_EQUAL: { __type: "String" },
    customer_GT: { __type: "Int" },
    customer_GTE: { __type: "Int" },
    customer_LONGEST_EQUAL: { __type: "Int" },
    customer_LONGEST_GT: { __type: "Int" },
    customer_LONGEST_GTE: { __type: "Int" },
    customer_LONGEST_LT: { __type: "Int" },
    customer_LONGEST_LTE: { __type: "Int" },
    customer_LT: { __type: "Int" },
    customer_LTE: { __type: "Int" },
    customer_SHORTEST_EQUAL: { __type: "Int" },
    customer_SHORTEST_GT: { __type: "Int" },
    customer_SHORTEST_GTE: { __type: "Int" },
    customer_SHORTEST_LT: { __type: "Int" },
    customer_SHORTEST_LTE: { __type: "Int" },
    endDate_EQUAL: { __type: "DateTime" },
    endDate_GT: { __type: "DateTime" },
    endDate_GTE: { __type: "DateTime" },
    endDate_LT: { __type: "DateTime" },
    endDate_LTE: { __type: "DateTime" },
    endDate_MAX_EQUAL: { __type: "DateTime" },
    endDate_MAX_GT: { __type: "DateTime" },
    endDate_MAX_GTE: { __type: "DateTime" },
    endDate_MAX_LT: { __type: "DateTime" },
    endDate_MAX_LTE: { __type: "DateTime" },
    endDate_MIN_EQUAL: { __type: "DateTime" },
    endDate_MIN_GT: { __type: "DateTime" },
    endDate_MIN_GTE: { __type: "DateTime" },
    endDate_MIN_LT: { __type: "DateTime" },
    endDate_MIN_LTE: { __type: "DateTime" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    startDate_EQUAL: { __type: "DateTime" },
    startDate_GT: { __type: "DateTime" },
    startDate_GTE: { __type: "DateTime" },
    startDate_LT: { __type: "DateTime" },
    startDate_LTE: { __type: "DateTime" },
    startDate_MAX_EQUAL: { __type: "DateTime" },
    startDate_MAX_GT: { __type: "DateTime" },
    startDate_MAX_GTE: { __type: "DateTime" },
    startDate_MAX_LT: { __type: "DateTime" },
    startDate_MAX_LTE: { __type: "DateTime" },
    startDate_MIN_EQUAL: { __type: "DateTime" },
    startDate_MIN_GT: { __type: "DateTime" },
    startDate_MIN_GTE: { __type: "DateTime" },
    startDate_MIN_LT: { __type: "DateTime" },
    startDate_MIN_LTE: { __type: "DateTime" },
  },
  CampaignAnalyticCampaignRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Campaign!" },
  },
  CampaignAnalyticCampaignUpdateConnectionInput: {
    node: { __type: "CampaignUpdateInput" },
  },
  CampaignAnalyticCampaignUpdateFieldInput: {
    connect: { __type: "CampaignAnalyticCampaignConnectFieldInput" },
    create: { __type: "CampaignAnalyticCampaignCreateFieldInput" },
    delete: { __type: "CampaignAnalyticCampaignDeleteFieldInput" },
    disconnect: { __type: "CampaignAnalyticCampaignDisconnectFieldInput" },
    update: { __type: "CampaignAnalyticCampaignUpdateConnectionInput" },
    where: { __type: "CampaignAnalyticCampaignConnectionWhere" },
  },
  CampaignAnalyticConnectInput: {
    campaign: { __type: "CampaignAnalyticCampaignConnectFieldInput" },
  },
  CampaignAnalyticConnectWhere: { node: { __type: "CampaignAnalyticWhere!" } },
  CampaignAnalyticCreateInput: {
    campaign: { __type: "CampaignAnalyticCampaignFieldInput" },
    ts: { __type: "DateTime" },
    type: { __type: "String" },
    value: { __type: "String" },
  },
  CampaignAnalyticDeleteInput: {
    campaign: { __type: "CampaignAnalyticCampaignDeleteFieldInput" },
  },
  CampaignAnalyticDisconnectInput: {
    campaign: { __type: "CampaignAnalyticCampaignDisconnectFieldInput" },
  },
  CampaignAnalyticOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[CampaignAnalyticSort]" },
  },
  CampaignAnalyticRelationInput: {
    campaign: { __type: "CampaignAnalyticCampaignCreateFieldInput" },
  },
  CampaignAnalyticSort: {
    id: { __type: "SortDirection" },
    ts: { __type: "SortDirection" },
    type: { __type: "SortDirection" },
    value: { __type: "SortDirection" },
  },
  CampaignAnalyticUpdateInput: {
    campaign: { __type: "CampaignAnalyticCampaignUpdateFieldInput" },
    ts: { __type: "DateTime" },
    type: { __type: "String" },
    value: { __type: "String" },
  },
  CampaignAnalyticWhere: {
    AND: { __type: "[CampaignAnalyticWhere!]" },
    OR: { __type: "[CampaignAnalyticWhere!]" },
    campaign: { __type: "CampaignWhere" },
    campaignAggregate: { __type: "CampaignAnalyticCampaignAggregateInput" },
    campaignConnection: { __type: "CampaignAnalyticCampaignConnectionWhere" },
    campaignConnection_NOT: {
      __type: "CampaignAnalyticCampaignConnectionWhere",
    },
    campaign_NOT: { __type: "CampaignWhere" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    ts: { __type: "DateTime" },
    ts_GT: { __type: "DateTime" },
    ts_GTE: { __type: "DateTime" },
    ts_IN: { __type: "[DateTime]" },
    ts_LT: { __type: "DateTime" },
    ts_LTE: { __type: "DateTime" },
    ts_NOT: { __type: "DateTime" },
    ts_NOT_IN: { __type: "[DateTime]" },
    type: { __type: "String" },
    type_CONTAINS: { __type: "String" },
    type_ENDS_WITH: { __type: "String" },
    type_IN: { __type: "[String]" },
    type_NOT: { __type: "String" },
    type_NOT_CONTAINS: { __type: "String" },
    type_NOT_ENDS_WITH: { __type: "String" },
    type_NOT_IN: { __type: "[String]" },
    type_NOT_STARTS_WITH: { __type: "String" },
    type_STARTS_WITH: { __type: "String" },
    value: { __type: "String" },
    value_CONTAINS: { __type: "String" },
    value_ENDS_WITH: { __type: "String" },
    value_IN: { __type: "[String]" },
    value_NOT: { __type: "String" },
    value_NOT_CONTAINS: { __type: "String" },
    value_NOT_ENDS_WITH: { __type: "String" },
    value_NOT_IN: { __type: "[String]" },
    value_NOT_STARTS_WITH: { __type: "String" },
    value_STARTS_WITH: { __type: "String" },
  },
  CampaignAnalyticsAggregateInput: {
    AND: { __type: "[CampaignAnalyticsAggregateInput!]" },
    OR: { __type: "[CampaignAnalyticsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "CampaignAnalyticsNodeAggregationWhereInput" },
  },
  CampaignAnalyticsConnectFieldInput: {
    connect: { __type: "[CampaignAnalyticConnectInput!]" },
    where: { __type: "CampaignAnalyticConnectWhere" },
  },
  CampaignAnalyticsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[CampaignAnalyticsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  CampaignAnalyticsConnectionSort: { node: { __type: "CampaignAnalyticSort" } },
  CampaignAnalyticsConnectionWhere: {
    AND: { __type: "[CampaignAnalyticsConnectionWhere!]" },
    OR: { __type: "[CampaignAnalyticsConnectionWhere!]" },
    node: { __type: "CampaignAnalyticWhere" },
    node_NOT: { __type: "CampaignAnalyticWhere" },
  },
  CampaignAnalyticsCreateFieldInput: {
    node: { __type: "CampaignAnalyticCreateInput!" },
  },
  CampaignAnalyticsDeleteFieldInput: {
    delete: { __type: "CampaignAnalyticDeleteInput" },
    where: { __type: "CampaignAnalyticsConnectionWhere" },
  },
  CampaignAnalyticsDisconnectFieldInput: {
    disconnect: { __type: "CampaignAnalyticDisconnectInput" },
    where: { __type: "CampaignAnalyticsConnectionWhere" },
  },
  CampaignAnalyticsFieldInput: {
    connect: { __type: "[CampaignAnalyticsConnectFieldInput!]" },
    create: { __type: "[CampaignAnalyticsCreateFieldInput!]" },
  },
  CampaignAnalyticsNodeAggregationWhereInput: {
    AND: { __type: "[CampaignAnalyticsNodeAggregationWhereInput!]" },
    OR: { __type: "[CampaignAnalyticsNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    ts_EQUAL: { __type: "DateTime" },
    ts_GT: { __type: "DateTime" },
    ts_GTE: { __type: "DateTime" },
    ts_LT: { __type: "DateTime" },
    ts_LTE: { __type: "DateTime" },
    ts_MAX_EQUAL: { __type: "DateTime" },
    ts_MAX_GT: { __type: "DateTime" },
    ts_MAX_GTE: { __type: "DateTime" },
    ts_MAX_LT: { __type: "DateTime" },
    ts_MAX_LTE: { __type: "DateTime" },
    ts_MIN_EQUAL: { __type: "DateTime" },
    ts_MIN_GT: { __type: "DateTime" },
    ts_MIN_GTE: { __type: "DateTime" },
    ts_MIN_LT: { __type: "DateTime" },
    ts_MIN_LTE: { __type: "DateTime" },
    type_AVERAGE_EQUAL: { __type: "Float" },
    type_AVERAGE_GT: { __type: "Float" },
    type_AVERAGE_GTE: { __type: "Float" },
    type_AVERAGE_LT: { __type: "Float" },
    type_AVERAGE_LTE: { __type: "Float" },
    type_EQUAL: { __type: "String" },
    type_GT: { __type: "Int" },
    type_GTE: { __type: "Int" },
    type_LONGEST_EQUAL: { __type: "Int" },
    type_LONGEST_GT: { __type: "Int" },
    type_LONGEST_GTE: { __type: "Int" },
    type_LONGEST_LT: { __type: "Int" },
    type_LONGEST_LTE: { __type: "Int" },
    type_LT: { __type: "Int" },
    type_LTE: { __type: "Int" },
    type_SHORTEST_EQUAL: { __type: "Int" },
    type_SHORTEST_GT: { __type: "Int" },
    type_SHORTEST_GTE: { __type: "Int" },
    type_SHORTEST_LT: { __type: "Int" },
    type_SHORTEST_LTE: { __type: "Int" },
    value_AVERAGE_EQUAL: { __type: "Float" },
    value_AVERAGE_GT: { __type: "Float" },
    value_AVERAGE_GTE: { __type: "Float" },
    value_AVERAGE_LT: { __type: "Float" },
    value_AVERAGE_LTE: { __type: "Float" },
    value_EQUAL: { __type: "String" },
    value_GT: { __type: "Int" },
    value_GTE: { __type: "Int" },
    value_LONGEST_EQUAL: { __type: "Int" },
    value_LONGEST_GT: { __type: "Int" },
    value_LONGEST_GTE: { __type: "Int" },
    value_LONGEST_LT: { __type: "Int" },
    value_LONGEST_LTE: { __type: "Int" },
    value_LT: { __type: "Int" },
    value_LTE: { __type: "Int" },
    value_SHORTEST_EQUAL: { __type: "Int" },
    value_SHORTEST_GT: { __type: "Int" },
    value_SHORTEST_GTE: { __type: "Int" },
    value_SHORTEST_LT: { __type: "Int" },
    value_SHORTEST_LTE: { __type: "Int" },
  },
  CampaignAnalyticsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "CampaignAnalytic!" },
  },
  CampaignAnalyticsUpdateConnectionInput: {
    node: { __type: "CampaignAnalyticUpdateInput" },
  },
  CampaignAnalyticsUpdateFieldInput: {
    connect: { __type: "[CampaignAnalyticsConnectFieldInput!]" },
    create: { __type: "[CampaignAnalyticsCreateFieldInput!]" },
    delete: { __type: "[CampaignAnalyticsDeleteFieldInput!]" },
    disconnect: { __type: "[CampaignAnalyticsDisconnectFieldInput!]" },
    update: { __type: "CampaignAnalyticsUpdateConnectionInput" },
    where: { __type: "CampaignAnalyticsConnectionWhere" },
  },
  CampaignAsset: {
    __typename: { __type: "String!" },
    cid: { __type: "String" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  CampaignAssetAggregateSelection: {
    __typename: { __type: "String!" },
    cid: { __type: "StringAggregateSelection!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  CampaignAssetConnectWhere: { node: { __type: "CampaignAssetWhere!" } },
  CampaignAssetCreateInput: {
    cid: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  CampaignAssetOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[CampaignAssetSort]" },
  },
  CampaignAssetSort: {
    cid: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    type: { __type: "SortDirection" },
  },
  CampaignAssetUpdateInput: {
    cid: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  CampaignAssetWhere: {
    AND: { __type: "[CampaignAssetWhere!]" },
    OR: { __type: "[CampaignAssetWhere!]" },
    cid: { __type: "String" },
    cid_CONTAINS: { __type: "String" },
    cid_ENDS_WITH: { __type: "String" },
    cid_IN: { __type: "[String]" },
    cid_NOT: { __type: "String" },
    cid_NOT_CONTAINS: { __type: "String" },
    cid_NOT_ENDS_WITH: { __type: "String" },
    cid_NOT_IN: { __type: "[String]" },
    cid_NOT_STARTS_WITH: { __type: "String" },
    cid_STARTS_WITH: { __type: "String" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    type: { __type: "String" },
    type_CONTAINS: { __type: "String" },
    type_ENDS_WITH: { __type: "String" },
    type_IN: { __type: "[String]" },
    type_NOT: { __type: "String" },
    type_NOT_CONTAINS: { __type: "String" },
    type_NOT_ENDS_WITH: { __type: "String" },
    type_NOT_IN: { __type: "[String]" },
    type_NOT_STARTS_WITH: { __type: "String" },
    type_STARTS_WITH: { __type: "String" },
  },
  CampaignAssetsAggregateInput: {
    AND: { __type: "[CampaignAssetsAggregateInput!]" },
    OR: { __type: "[CampaignAssetsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "CampaignAssetsNodeAggregationWhereInput" },
  },
  CampaignAssetsConnectFieldInput: {
    where: { __type: "CampaignAssetConnectWhere" },
  },
  CampaignAssetsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[CampaignAssetsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  CampaignAssetsConnectionSort: { node: { __type: "CampaignAssetSort" } },
  CampaignAssetsConnectionWhere: {
    AND: { __type: "[CampaignAssetsConnectionWhere!]" },
    OR: { __type: "[CampaignAssetsConnectionWhere!]" },
    node: { __type: "CampaignAssetWhere" },
    node_NOT: { __type: "CampaignAssetWhere" },
  },
  CampaignAssetsCreateFieldInput: {
    node: { __type: "CampaignAssetCreateInput!" },
  },
  CampaignAssetsDeleteFieldInput: {
    where: { __type: "CampaignAssetsConnectionWhere" },
  },
  CampaignAssetsDisconnectFieldInput: {
    where: { __type: "CampaignAssetsConnectionWhere" },
  },
  CampaignAssetsFieldInput: {
    connect: { __type: "[CampaignAssetsConnectFieldInput!]" },
    create: { __type: "[CampaignAssetsCreateFieldInput!]" },
  },
  CampaignAssetsNodeAggregationWhereInput: {
    AND: { __type: "[CampaignAssetsNodeAggregationWhereInput!]" },
    OR: { __type: "[CampaignAssetsNodeAggregationWhereInput!]" },
    cid_AVERAGE_EQUAL: { __type: "Float" },
    cid_AVERAGE_GT: { __type: "Float" },
    cid_AVERAGE_GTE: { __type: "Float" },
    cid_AVERAGE_LT: { __type: "Float" },
    cid_AVERAGE_LTE: { __type: "Float" },
    cid_EQUAL: { __type: "String" },
    cid_GT: { __type: "Int" },
    cid_GTE: { __type: "Int" },
    cid_LONGEST_EQUAL: { __type: "Int" },
    cid_LONGEST_GT: { __type: "Int" },
    cid_LONGEST_GTE: { __type: "Int" },
    cid_LONGEST_LT: { __type: "Int" },
    cid_LONGEST_LTE: { __type: "Int" },
    cid_LT: { __type: "Int" },
    cid_LTE: { __type: "Int" },
    cid_SHORTEST_EQUAL: { __type: "Int" },
    cid_SHORTEST_GT: { __type: "Int" },
    cid_SHORTEST_GTE: { __type: "Int" },
    cid_SHORTEST_LT: { __type: "Int" },
    cid_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
    type_AVERAGE_EQUAL: { __type: "Float" },
    type_AVERAGE_GT: { __type: "Float" },
    type_AVERAGE_GTE: { __type: "Float" },
    type_AVERAGE_LT: { __type: "Float" },
    type_AVERAGE_LTE: { __type: "Float" },
    type_EQUAL: { __type: "String" },
    type_GT: { __type: "Int" },
    type_GTE: { __type: "Int" },
    type_LONGEST_EQUAL: { __type: "Int" },
    type_LONGEST_GT: { __type: "Int" },
    type_LONGEST_GTE: { __type: "Int" },
    type_LONGEST_LT: { __type: "Int" },
    type_LONGEST_LTE: { __type: "Int" },
    type_LT: { __type: "Int" },
    type_LTE: { __type: "Int" },
    type_SHORTEST_EQUAL: { __type: "Int" },
    type_SHORTEST_GT: { __type: "Int" },
    type_SHORTEST_GTE: { __type: "Int" },
    type_SHORTEST_LT: { __type: "Int" },
    type_SHORTEST_LTE: { __type: "Int" },
  },
  CampaignAssetsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "CampaignAsset!" },
  },
  CampaignAssetsUpdateConnectionInput: {
    node: { __type: "CampaignAssetUpdateInput" },
  },
  CampaignAssetsUpdateFieldInput: {
    connect: { __type: "[CampaignAssetsConnectFieldInput!]" },
    create: { __type: "[CampaignAssetsCreateFieldInput!]" },
    delete: { __type: "[CampaignAssetsDeleteFieldInput!]" },
    disconnect: { __type: "[CampaignAssetsDisconnectFieldInput!]" },
    update: { __type: "CampaignAssetsUpdateConnectionInput" },
    where: { __type: "CampaignAssetsConnectionWhere" },
  },
  CampaignCampaignAnalyticAnalyticsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "CampaignCampaignAnalyticAnalyticsNodeAggregateSelection" },
  },
  CampaignCampaignAnalyticAnalyticsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    ts: { __type: "DateTimeAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
    value: { __type: "StringAggregateSelection!" },
  },
  CampaignCampaignAssetAssetsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "CampaignCampaignAssetAssetsNodeAggregateSelection" },
  },
  CampaignCampaignAssetAssetsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    cid: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  CampaignConnectInput: {
    analytics: { __type: "[CampaignAnalyticsConnectFieldInput!]" },
    assets: { __type: "[CampaignAssetsConnectFieldInput!]" },
  },
  CampaignConnectWhere: { node: { __type: "CampaignWhere!" } },
  CampaignCreateInput: {
    analytics: { __type: "CampaignAnalyticsFieldInput" },
    assets: { __type: "CampaignAssetsFieldInput" },
    customer: { __type: "String" },
    endDate: { __type: "DateTime" },
    name: { __type: "String" },
    startDate: { __type: "DateTime" },
  },
  CampaignDeleteInput: {
    analytics: { __type: "[CampaignAnalyticsDeleteFieldInput!]" },
    assets: { __type: "[CampaignAssetsDeleteFieldInput!]" },
  },
  CampaignDisconnectInput: {
    analytics: { __type: "[CampaignAnalyticsDisconnectFieldInput!]" },
    assets: { __type: "[CampaignAssetsDisconnectFieldInput!]" },
  },
  CampaignOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[CampaignSort]" },
  },
  CampaignRelationInput: {
    analytics: { __type: "[CampaignAnalyticsCreateFieldInput!]" },
    assets: { __type: "[CampaignAssetsCreateFieldInput!]" },
  },
  CampaignSort: {
    customer: { __type: "SortDirection" },
    endDate: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    startDate: { __type: "SortDirection" },
  },
  CampaignUpdateInput: {
    analytics: { __type: "[CampaignAnalyticsUpdateFieldInput!]" },
    assets: { __type: "[CampaignAssetsUpdateFieldInput!]" },
    customer: { __type: "String" },
    endDate: { __type: "DateTime" },
    name: { __type: "String" },
    startDate: { __type: "DateTime" },
  },
  CampaignWhere: {
    AND: { __type: "[CampaignWhere!]" },
    OR: { __type: "[CampaignWhere!]" },
    analytics: { __type: "CampaignAnalyticWhere" },
    analyticsAggregate: { __type: "CampaignAnalyticsAggregateInput" },
    analyticsConnection: { __type: "CampaignAnalyticsConnectionWhere" },
    analyticsConnection_NOT: { __type: "CampaignAnalyticsConnectionWhere" },
    analytics_NOT: { __type: "CampaignAnalyticWhere" },
    assets: { __type: "CampaignAssetWhere" },
    assetsAggregate: { __type: "CampaignAssetsAggregateInput" },
    assetsConnection: { __type: "CampaignAssetsConnectionWhere" },
    assetsConnection_NOT: { __type: "CampaignAssetsConnectionWhere" },
    assets_NOT: { __type: "CampaignAssetWhere" },
    customer: { __type: "String" },
    customer_CONTAINS: { __type: "String" },
    customer_ENDS_WITH: { __type: "String" },
    customer_IN: { __type: "[String]" },
    customer_NOT: { __type: "String" },
    customer_NOT_CONTAINS: { __type: "String" },
    customer_NOT_ENDS_WITH: { __type: "String" },
    customer_NOT_IN: { __type: "[String]" },
    customer_NOT_STARTS_WITH: { __type: "String" },
    customer_STARTS_WITH: { __type: "String" },
    endDate: { __type: "DateTime" },
    endDate_GT: { __type: "DateTime" },
    endDate_GTE: { __type: "DateTime" },
    endDate_IN: { __type: "[DateTime]" },
    endDate_LT: { __type: "DateTime" },
    endDate_LTE: { __type: "DateTime" },
    endDate_NOT: { __type: "DateTime" },
    endDate_NOT_IN: { __type: "[DateTime]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
    startDate: { __type: "DateTime" },
    startDate_GT: { __type: "DateTime" },
    startDate_GTE: { __type: "DateTime" },
    startDate_IN: { __type: "[DateTime]" },
    startDate_LT: { __type: "DateTime" },
    startDate_LTE: { __type: "DateTime" },
    startDate_NOT: { __type: "DateTime" },
    startDate_NOT_IN: { __type: "[DateTime]" },
  },
  CreateCampaignAnalyticsMutationResponse: {
    __typename: { __type: "String!" },
    campaignAnalytics: { __type: "[CampaignAnalytic!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateCampaignAssetsMutationResponse: {
    __typename: { __type: "String!" },
    campaignAssets: { __type: "[CampaignAsset!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateCampaignsMutationResponse: {
    __typename: { __type: "String!" },
    campaigns: { __type: "[Campaign!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateDisplayLocationsMutationResponse: {
    __typename: { __type: "String!" },
    displayLocations: { __type: "[DisplayLocation!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateDisplayScreensMutationResponse: {
    __typename: { __type: "String!" },
    displayScreens: { __type: "[DisplayScreen!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateDisplaysMutationResponse: {
    __typename: { __type: "String!" },
    displays: { __type: "[Display!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesCreated: { __type: "Int!" },
    relationshipsCreated: { __type: "Int!" },
  },
  DateTimeAggregateSelection: {
    __typename: { __type: "String!" },
    max: { __type: "DateTime!" },
    min: { __type: "DateTime!" },
  },
  DeleteInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesDeleted: { __type: "Int!" },
    relationshipsDeleted: { __type: "Int!" },
  },
  Display: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    label: { __type: "String" },
    location: {
      __type: "DisplayLocation",
      __args: {
        options: "DisplayLocationOptions",
        where: "DisplayLocationWhere",
      },
    },
    locationAggregate: {
      __type: "DisplayDisplayLocationLocationAggregationSelection",
      __args: { where: "DisplayLocationWhere" },
    },
    locationConnection: {
      __type: "DisplayLocationConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[DisplayLocationConnectionSort!]",
        where: "DisplayLocationConnectionWhere",
      },
    },
    screens: {
      __type: "[DisplayScreen]",
      __args: { options: "DisplayScreenOptions", where: "DisplayScreenWhere" },
    },
    screensAggregate: {
      __type: "DisplayDisplayScreenScreensAggregationSelection",
      __args: { where: "DisplayScreenWhere" },
    },
    screensConnection: {
      __type: "DisplayScreensConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[DisplayScreensConnectionSort!]",
        where: "DisplayScreensConnectionWhere",
      },
    },
  },
  DisplayAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
  },
  DisplayConnectInput: {
    location: { __type: "DisplayLocationConnectFieldInput" },
    screens: { __type: "[DisplayScreensConnectFieldInput!]" },
  },
  DisplayConnectWhere: { node: { __type: "DisplayWhere!" } },
  DisplayCreateInput: {
    label: { __type: "String" },
    location: { __type: "DisplayLocationFieldInput" },
    screens: { __type: "DisplayScreensFieldInput" },
  },
  DisplayDeleteInput: {
    location: { __type: "DisplayLocationDeleteFieldInput" },
    screens: { __type: "[DisplayScreensDeleteFieldInput!]" },
  },
  DisplayDisconnectInput: {
    location: { __type: "DisplayLocationDisconnectFieldInput" },
    screens: { __type: "[DisplayScreensDisconnectFieldInput!]" },
  },
  DisplayDisplayLocationLocationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "DisplayDisplayLocationLocationNodeAggregateSelection" },
  },
  DisplayDisplayLocationLocationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    elevation: { __type: "FloatAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    lat: { __type: "FloatAggregateSelection!" },
    lng: { __type: "FloatAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  DisplayDisplayScreenScreensAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "DisplayDisplayScreenScreensNodeAggregateSelection" },
  },
  DisplayDisplayScreenScreensNodeAggregateSelection: {
    __typename: { __type: "String!" },
    height: { __type: "FloatAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    orientation: { __type: "FloatAggregateSelection!" },
    resHeight: { __type: "FloatAggregateSelection!" },
    resWidth: { __type: "FloatAggregateSelection!" },
    width: { __type: "FloatAggregateSelection!" },
  },
  DisplayLocation: {
    __typename: { __type: "String!" },
    displays: {
      __type: "[Display]",
      __args: { options: "DisplayOptions", where: "DisplayWhere" },
    },
    displaysAggregate: {
      __type: "DisplayLocationDisplayDisplaysAggregationSelection",
      __args: { where: "DisplayWhere" },
    },
    displaysConnection: {
      __type: "DisplayLocationDisplaysConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[DisplayLocationDisplaysConnectionSort!]",
        where: "DisplayLocationDisplaysConnectionWhere",
      },
    },
    elevation: { __type: "Float" },
    id: { __type: "ID!" },
    lat: { __type: "Float" },
    lng: { __type: "Float" },
    name: { __type: "String" },
  },
  DisplayLocationAggregateInput: {
    AND: { __type: "[DisplayLocationAggregateInput!]" },
    OR: { __type: "[DisplayLocationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "DisplayLocationNodeAggregationWhereInput" },
  },
  DisplayLocationAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    elevation: { __type: "FloatAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    lat: { __type: "FloatAggregateSelection!" },
    lng: { __type: "FloatAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  DisplayLocationConnectFieldInput: {
    connect: { __type: "DisplayLocationConnectInput" },
    where: { __type: "DisplayLocationConnectWhere" },
  },
  DisplayLocationConnectInput: {
    displays: { __type: "[DisplayLocationDisplaysConnectFieldInput!]" },
  },
  DisplayLocationConnectWhere: { node: { __type: "DisplayLocationWhere!" } },
  DisplayLocationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[DisplayLocationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  DisplayLocationConnectionSort: { node: { __type: "DisplayLocationSort" } },
  DisplayLocationConnectionWhere: {
    AND: { __type: "[DisplayLocationConnectionWhere!]" },
    OR: { __type: "[DisplayLocationConnectionWhere!]" },
    node: { __type: "DisplayLocationWhere" },
    node_NOT: { __type: "DisplayLocationWhere" },
  },
  DisplayLocationCreateFieldInput: {
    node: { __type: "DisplayLocationCreateInput!" },
  },
  DisplayLocationCreateInput: {
    displays: { __type: "DisplayLocationDisplaysFieldInput" },
    elevation: { __type: "Float" },
    lat: { __type: "Float" },
    lng: { __type: "Float" },
    name: { __type: "String" },
  },
  DisplayLocationDeleteFieldInput: {
    delete: { __type: "DisplayLocationDeleteInput" },
    where: { __type: "DisplayLocationConnectionWhere" },
  },
  DisplayLocationDeleteInput: {
    displays: { __type: "[DisplayLocationDisplaysDeleteFieldInput!]" },
  },
  DisplayLocationDisconnectFieldInput: {
    disconnect: { __type: "DisplayLocationDisconnectInput" },
    where: { __type: "DisplayLocationConnectionWhere" },
  },
  DisplayLocationDisconnectInput: {
    displays: { __type: "[DisplayLocationDisplaysDisconnectFieldInput!]" },
  },
  DisplayLocationDisplayDisplaysAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "DisplayLocationDisplayDisplaysNodeAggregateSelection" },
  },
  DisplayLocationDisplayDisplaysNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
  },
  DisplayLocationDisplaysAggregateInput: {
    AND: { __type: "[DisplayLocationDisplaysAggregateInput!]" },
    OR: { __type: "[DisplayLocationDisplaysAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "DisplayLocationDisplaysNodeAggregationWhereInput" },
  },
  DisplayLocationDisplaysConnectFieldInput: {
    connect: { __type: "[DisplayConnectInput!]" },
    where: { __type: "DisplayConnectWhere" },
  },
  DisplayLocationDisplaysConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[DisplayLocationDisplaysRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  DisplayLocationDisplaysConnectionSort: { node: { __type: "DisplaySort" } },
  DisplayLocationDisplaysConnectionWhere: {
    AND: { __type: "[DisplayLocationDisplaysConnectionWhere!]" },
    OR: { __type: "[DisplayLocationDisplaysConnectionWhere!]" },
    node: { __type: "DisplayWhere" },
    node_NOT: { __type: "DisplayWhere" },
  },
  DisplayLocationDisplaysCreateFieldInput: {
    node: { __type: "DisplayCreateInput!" },
  },
  DisplayLocationDisplaysDeleteFieldInput: {
    delete: { __type: "DisplayDeleteInput" },
    where: { __type: "DisplayLocationDisplaysConnectionWhere" },
  },
  DisplayLocationDisplaysDisconnectFieldInput: {
    disconnect: { __type: "DisplayDisconnectInput" },
    where: { __type: "DisplayLocationDisplaysConnectionWhere" },
  },
  DisplayLocationDisplaysFieldInput: {
    connect: { __type: "[DisplayLocationDisplaysConnectFieldInput!]" },
    create: { __type: "[DisplayLocationDisplaysCreateFieldInput!]" },
  },
  DisplayLocationDisplaysNodeAggregationWhereInput: {
    AND: { __type: "[DisplayLocationDisplaysNodeAggregationWhereInput!]" },
    OR: { __type: "[DisplayLocationDisplaysNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    label_AVERAGE_EQUAL: { __type: "Float" },
    label_AVERAGE_GT: { __type: "Float" },
    label_AVERAGE_GTE: { __type: "Float" },
    label_AVERAGE_LT: { __type: "Float" },
    label_AVERAGE_LTE: { __type: "Float" },
    label_EQUAL: { __type: "String" },
    label_GT: { __type: "Int" },
    label_GTE: { __type: "Int" },
    label_LONGEST_EQUAL: { __type: "Int" },
    label_LONGEST_GT: { __type: "Int" },
    label_LONGEST_GTE: { __type: "Int" },
    label_LONGEST_LT: { __type: "Int" },
    label_LONGEST_LTE: { __type: "Int" },
    label_LT: { __type: "Int" },
    label_LTE: { __type: "Int" },
    label_SHORTEST_EQUAL: { __type: "Int" },
    label_SHORTEST_GT: { __type: "Int" },
    label_SHORTEST_GTE: { __type: "Int" },
    label_SHORTEST_LT: { __type: "Int" },
    label_SHORTEST_LTE: { __type: "Int" },
  },
  DisplayLocationDisplaysRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Display!" },
  },
  DisplayLocationDisplaysUpdateConnectionInput: {
    node: { __type: "DisplayUpdateInput" },
  },
  DisplayLocationDisplaysUpdateFieldInput: {
    connect: { __type: "[DisplayLocationDisplaysConnectFieldInput!]" },
    create: { __type: "[DisplayLocationDisplaysCreateFieldInput!]" },
    delete: { __type: "[DisplayLocationDisplaysDeleteFieldInput!]" },
    disconnect: { __type: "[DisplayLocationDisplaysDisconnectFieldInput!]" },
    update: { __type: "DisplayLocationDisplaysUpdateConnectionInput" },
    where: { __type: "DisplayLocationDisplaysConnectionWhere" },
  },
  DisplayLocationFieldInput: {
    connect: { __type: "DisplayLocationConnectFieldInput" },
    create: { __type: "DisplayLocationCreateFieldInput" },
  },
  DisplayLocationNodeAggregationWhereInput: {
    AND: { __type: "[DisplayLocationNodeAggregationWhereInput!]" },
    OR: { __type: "[DisplayLocationNodeAggregationWhereInput!]" },
    elevation_AVERAGE_EQUAL: { __type: "Float" },
    elevation_AVERAGE_GT: { __type: "Float" },
    elevation_AVERAGE_GTE: { __type: "Float" },
    elevation_AVERAGE_LT: { __type: "Float" },
    elevation_AVERAGE_LTE: { __type: "Float" },
    elevation_EQUAL: { __type: "Float" },
    elevation_GT: { __type: "Float" },
    elevation_GTE: { __type: "Float" },
    elevation_LT: { __type: "Float" },
    elevation_LTE: { __type: "Float" },
    elevation_MAX_EQUAL: { __type: "Float" },
    elevation_MAX_GT: { __type: "Float" },
    elevation_MAX_GTE: { __type: "Float" },
    elevation_MAX_LT: { __type: "Float" },
    elevation_MAX_LTE: { __type: "Float" },
    elevation_MIN_EQUAL: { __type: "Float" },
    elevation_MIN_GT: { __type: "Float" },
    elevation_MIN_GTE: { __type: "Float" },
    elevation_MIN_LT: { __type: "Float" },
    elevation_MIN_LTE: { __type: "Float" },
    id_EQUAL: { __type: "ID" },
    lat_AVERAGE_EQUAL: { __type: "Float" },
    lat_AVERAGE_GT: { __type: "Float" },
    lat_AVERAGE_GTE: { __type: "Float" },
    lat_AVERAGE_LT: { __type: "Float" },
    lat_AVERAGE_LTE: { __type: "Float" },
    lat_EQUAL: { __type: "Float" },
    lat_GT: { __type: "Float" },
    lat_GTE: { __type: "Float" },
    lat_LT: { __type: "Float" },
    lat_LTE: { __type: "Float" },
    lat_MAX_EQUAL: { __type: "Float" },
    lat_MAX_GT: { __type: "Float" },
    lat_MAX_GTE: { __type: "Float" },
    lat_MAX_LT: { __type: "Float" },
    lat_MAX_LTE: { __type: "Float" },
    lat_MIN_EQUAL: { __type: "Float" },
    lat_MIN_GT: { __type: "Float" },
    lat_MIN_GTE: { __type: "Float" },
    lat_MIN_LT: { __type: "Float" },
    lat_MIN_LTE: { __type: "Float" },
    lng_AVERAGE_EQUAL: { __type: "Float" },
    lng_AVERAGE_GT: { __type: "Float" },
    lng_AVERAGE_GTE: { __type: "Float" },
    lng_AVERAGE_LT: { __type: "Float" },
    lng_AVERAGE_LTE: { __type: "Float" },
    lng_EQUAL: { __type: "Float" },
    lng_GT: { __type: "Float" },
    lng_GTE: { __type: "Float" },
    lng_LT: { __type: "Float" },
    lng_LTE: { __type: "Float" },
    lng_MAX_EQUAL: { __type: "Float" },
    lng_MAX_GT: { __type: "Float" },
    lng_MAX_GTE: { __type: "Float" },
    lng_MAX_LT: { __type: "Float" },
    lng_MAX_LTE: { __type: "Float" },
    lng_MIN_EQUAL: { __type: "Float" },
    lng_MIN_GT: { __type: "Float" },
    lng_MIN_GTE: { __type: "Float" },
    lng_MIN_LT: { __type: "Float" },
    lng_MIN_LTE: { __type: "Float" },
    name_AVERAGE_EQUAL: { __type: "Float" },
    name_AVERAGE_GT: { __type: "Float" },
    name_AVERAGE_GTE: { __type: "Float" },
    name_AVERAGE_LT: { __type: "Float" },
    name_AVERAGE_LTE: { __type: "Float" },
    name_EQUAL: { __type: "String" },
    name_GT: { __type: "Int" },
    name_GTE: { __type: "Int" },
    name_LONGEST_EQUAL: { __type: "Int" },
    name_LONGEST_GT: { __type: "Int" },
    name_LONGEST_GTE: { __type: "Int" },
    name_LONGEST_LT: { __type: "Int" },
    name_LONGEST_LTE: { __type: "Int" },
    name_LT: { __type: "Int" },
    name_LTE: { __type: "Int" },
    name_SHORTEST_EQUAL: { __type: "Int" },
    name_SHORTEST_GT: { __type: "Int" },
    name_SHORTEST_GTE: { __type: "Int" },
    name_SHORTEST_LT: { __type: "Int" },
    name_SHORTEST_LTE: { __type: "Int" },
  },
  DisplayLocationOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[DisplayLocationSort]" },
  },
  DisplayLocationRelationInput: {
    displays: { __type: "[DisplayLocationDisplaysCreateFieldInput!]" },
  },
  DisplayLocationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "DisplayLocation!" },
  },
  DisplayLocationSort: {
    elevation: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    lat: { __type: "SortDirection" },
    lng: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  DisplayLocationUpdateConnectionInput: {
    node: { __type: "DisplayLocationUpdateInput" },
  },
  DisplayLocationUpdateFieldInput: {
    connect: { __type: "DisplayLocationConnectFieldInput" },
    create: { __type: "DisplayLocationCreateFieldInput" },
    delete: { __type: "DisplayLocationDeleteFieldInput" },
    disconnect: { __type: "DisplayLocationDisconnectFieldInput" },
    update: { __type: "DisplayLocationUpdateConnectionInput" },
    where: { __type: "DisplayLocationConnectionWhere" },
  },
  DisplayLocationUpdateInput: {
    displays: { __type: "[DisplayLocationDisplaysUpdateFieldInput!]" },
    elevation: { __type: "Float" },
    lat: { __type: "Float" },
    lng: { __type: "Float" },
    name: { __type: "String" },
  },
  DisplayLocationWhere: {
    AND: { __type: "[DisplayLocationWhere!]" },
    OR: { __type: "[DisplayLocationWhere!]" },
    displays: { __type: "DisplayWhere" },
    displaysAggregate: { __type: "DisplayLocationDisplaysAggregateInput" },
    displaysConnection: { __type: "DisplayLocationDisplaysConnectionWhere" },
    displaysConnection_NOT: {
      __type: "DisplayLocationDisplaysConnectionWhere",
    },
    displays_NOT: { __type: "DisplayWhere" },
    elevation: { __type: "Float" },
    elevation_GT: { __type: "Float" },
    elevation_GTE: { __type: "Float" },
    elevation_IN: { __type: "[Float]" },
    elevation_LT: { __type: "Float" },
    elevation_LTE: { __type: "Float" },
    elevation_NOT: { __type: "Float" },
    elevation_NOT_IN: { __type: "[Float]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    lat: { __type: "Float" },
    lat_GT: { __type: "Float" },
    lat_GTE: { __type: "Float" },
    lat_IN: { __type: "[Float]" },
    lat_LT: { __type: "Float" },
    lat_LTE: { __type: "Float" },
    lat_NOT: { __type: "Float" },
    lat_NOT_IN: { __type: "[Float]" },
    lng: { __type: "Float" },
    lng_GT: { __type: "Float" },
    lng_GTE: { __type: "Float" },
    lng_IN: { __type: "[Float]" },
    lng_LT: { __type: "Float" },
    lng_LTE: { __type: "Float" },
    lng_NOT: { __type: "Float" },
    lng_NOT_IN: { __type: "[Float]" },
    name: { __type: "String" },
    name_CONTAINS: { __type: "String" },
    name_ENDS_WITH: { __type: "String" },
    name_IN: { __type: "[String]" },
    name_NOT: { __type: "String" },
    name_NOT_CONTAINS: { __type: "String" },
    name_NOT_ENDS_WITH: { __type: "String" },
    name_NOT_IN: { __type: "[String]" },
    name_NOT_STARTS_WITH: { __type: "String" },
    name_STARTS_WITH: { __type: "String" },
  },
  DisplayOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[DisplaySort]" },
  },
  DisplayRelationInput: {
    location: { __type: "DisplayLocationCreateFieldInput" },
    screens: { __type: "[DisplayScreensCreateFieldInput!]" },
  },
  DisplayScreen: {
    __typename: { __type: "String!" },
    height: { __type: "Float" },
    id: { __type: "ID!" },
    orientation: { __type: "Float" },
    resHeight: { __type: "Float" },
    resWidth: { __type: "Float" },
    width: { __type: "Float" },
  },
  DisplayScreenAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    height: { __type: "FloatAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    orientation: { __type: "FloatAggregateSelection!" },
    resHeight: { __type: "FloatAggregateSelection!" },
    resWidth: { __type: "FloatAggregateSelection!" },
    width: { __type: "FloatAggregateSelection!" },
  },
  DisplayScreenConnectWhere: { node: { __type: "DisplayScreenWhere!" } },
  DisplayScreenCreateInput: {
    height: { __type: "Float" },
    orientation: { __type: "Float" },
    resHeight: { __type: "Float" },
    resWidth: { __type: "Float" },
    width: { __type: "Float" },
  },
  DisplayScreenOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[DisplayScreenSort]" },
  },
  DisplayScreenSort: {
    height: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    orientation: { __type: "SortDirection" },
    resHeight: { __type: "SortDirection" },
    resWidth: { __type: "SortDirection" },
    width: { __type: "SortDirection" },
  },
  DisplayScreenUpdateInput: {
    height: { __type: "Float" },
    orientation: { __type: "Float" },
    resHeight: { __type: "Float" },
    resWidth: { __type: "Float" },
    width: { __type: "Float" },
  },
  DisplayScreenWhere: {
    AND: { __type: "[DisplayScreenWhere!]" },
    OR: { __type: "[DisplayScreenWhere!]" },
    height: { __type: "Float" },
    height_GT: { __type: "Float" },
    height_GTE: { __type: "Float" },
    height_IN: { __type: "[Float]" },
    height_LT: { __type: "Float" },
    height_LTE: { __type: "Float" },
    height_NOT: { __type: "Float" },
    height_NOT_IN: { __type: "[Float]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    orientation: { __type: "Float" },
    orientation_GT: { __type: "Float" },
    orientation_GTE: { __type: "Float" },
    orientation_IN: { __type: "[Float]" },
    orientation_LT: { __type: "Float" },
    orientation_LTE: { __type: "Float" },
    orientation_NOT: { __type: "Float" },
    orientation_NOT_IN: { __type: "[Float]" },
    resHeight: { __type: "Float" },
    resHeight_GT: { __type: "Float" },
    resHeight_GTE: { __type: "Float" },
    resHeight_IN: { __type: "[Float]" },
    resHeight_LT: { __type: "Float" },
    resHeight_LTE: { __type: "Float" },
    resHeight_NOT: { __type: "Float" },
    resHeight_NOT_IN: { __type: "[Float]" },
    resWidth: { __type: "Float" },
    resWidth_GT: { __type: "Float" },
    resWidth_GTE: { __type: "Float" },
    resWidth_IN: { __type: "[Float]" },
    resWidth_LT: { __type: "Float" },
    resWidth_LTE: { __type: "Float" },
    resWidth_NOT: { __type: "Float" },
    resWidth_NOT_IN: { __type: "[Float]" },
    width: { __type: "Float" },
    width_GT: { __type: "Float" },
    width_GTE: { __type: "Float" },
    width_IN: { __type: "[Float]" },
    width_LT: { __type: "Float" },
    width_LTE: { __type: "Float" },
    width_NOT: { __type: "Float" },
    width_NOT_IN: { __type: "[Float]" },
  },
  DisplayScreensAggregateInput: {
    AND: { __type: "[DisplayScreensAggregateInput!]" },
    OR: { __type: "[DisplayScreensAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "DisplayScreensNodeAggregationWhereInput" },
  },
  DisplayScreensConnectFieldInput: {
    where: { __type: "DisplayScreenConnectWhere" },
  },
  DisplayScreensConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[DisplayScreensRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  DisplayScreensConnectionSort: { node: { __type: "DisplayScreenSort" } },
  DisplayScreensConnectionWhere: {
    AND: { __type: "[DisplayScreensConnectionWhere!]" },
    OR: { __type: "[DisplayScreensConnectionWhere!]" },
    node: { __type: "DisplayScreenWhere" },
    node_NOT: { __type: "DisplayScreenWhere" },
  },
  DisplayScreensCreateFieldInput: {
    node: { __type: "DisplayScreenCreateInput!" },
  },
  DisplayScreensDeleteFieldInput: {
    where: { __type: "DisplayScreensConnectionWhere" },
  },
  DisplayScreensDisconnectFieldInput: {
    where: { __type: "DisplayScreensConnectionWhere" },
  },
  DisplayScreensFieldInput: {
    connect: { __type: "[DisplayScreensConnectFieldInput!]" },
    create: { __type: "[DisplayScreensCreateFieldInput!]" },
  },
  DisplayScreensNodeAggregationWhereInput: {
    AND: { __type: "[DisplayScreensNodeAggregationWhereInput!]" },
    OR: { __type: "[DisplayScreensNodeAggregationWhereInput!]" },
    height_AVERAGE_EQUAL: { __type: "Float" },
    height_AVERAGE_GT: { __type: "Float" },
    height_AVERAGE_GTE: { __type: "Float" },
    height_AVERAGE_LT: { __type: "Float" },
    height_AVERAGE_LTE: { __type: "Float" },
    height_EQUAL: { __type: "Float" },
    height_GT: { __type: "Float" },
    height_GTE: { __type: "Float" },
    height_LT: { __type: "Float" },
    height_LTE: { __type: "Float" },
    height_MAX_EQUAL: { __type: "Float" },
    height_MAX_GT: { __type: "Float" },
    height_MAX_GTE: { __type: "Float" },
    height_MAX_LT: { __type: "Float" },
    height_MAX_LTE: { __type: "Float" },
    height_MIN_EQUAL: { __type: "Float" },
    height_MIN_GT: { __type: "Float" },
    height_MIN_GTE: { __type: "Float" },
    height_MIN_LT: { __type: "Float" },
    height_MIN_LTE: { __type: "Float" },
    id_EQUAL: { __type: "ID" },
    orientation_AVERAGE_EQUAL: { __type: "Float" },
    orientation_AVERAGE_GT: { __type: "Float" },
    orientation_AVERAGE_GTE: { __type: "Float" },
    orientation_AVERAGE_LT: { __type: "Float" },
    orientation_AVERAGE_LTE: { __type: "Float" },
    orientation_EQUAL: { __type: "Float" },
    orientation_GT: { __type: "Float" },
    orientation_GTE: { __type: "Float" },
    orientation_LT: { __type: "Float" },
    orientation_LTE: { __type: "Float" },
    orientation_MAX_EQUAL: { __type: "Float" },
    orientation_MAX_GT: { __type: "Float" },
    orientation_MAX_GTE: { __type: "Float" },
    orientation_MAX_LT: { __type: "Float" },
    orientation_MAX_LTE: { __type: "Float" },
    orientation_MIN_EQUAL: { __type: "Float" },
    orientation_MIN_GT: { __type: "Float" },
    orientation_MIN_GTE: { __type: "Float" },
    orientation_MIN_LT: { __type: "Float" },
    orientation_MIN_LTE: { __type: "Float" },
    resHeight_AVERAGE_EQUAL: { __type: "Float" },
    resHeight_AVERAGE_GT: { __type: "Float" },
    resHeight_AVERAGE_GTE: { __type: "Float" },
    resHeight_AVERAGE_LT: { __type: "Float" },
    resHeight_AVERAGE_LTE: { __type: "Float" },
    resHeight_EQUAL: { __type: "Float" },
    resHeight_GT: { __type: "Float" },
    resHeight_GTE: { __type: "Float" },
    resHeight_LT: { __type: "Float" },
    resHeight_LTE: { __type: "Float" },
    resHeight_MAX_EQUAL: { __type: "Float" },
    resHeight_MAX_GT: { __type: "Float" },
    resHeight_MAX_GTE: { __type: "Float" },
    resHeight_MAX_LT: { __type: "Float" },
    resHeight_MAX_LTE: { __type: "Float" },
    resHeight_MIN_EQUAL: { __type: "Float" },
    resHeight_MIN_GT: { __type: "Float" },
    resHeight_MIN_GTE: { __type: "Float" },
    resHeight_MIN_LT: { __type: "Float" },
    resHeight_MIN_LTE: { __type: "Float" },
    resWidth_AVERAGE_EQUAL: { __type: "Float" },
    resWidth_AVERAGE_GT: { __type: "Float" },
    resWidth_AVERAGE_GTE: { __type: "Float" },
    resWidth_AVERAGE_LT: { __type: "Float" },
    resWidth_AVERAGE_LTE: { __type: "Float" },
    resWidth_EQUAL: { __type: "Float" },
    resWidth_GT: { __type: "Float" },
    resWidth_GTE: { __type: "Float" },
    resWidth_LT: { __type: "Float" },
    resWidth_LTE: { __type: "Float" },
    resWidth_MAX_EQUAL: { __type: "Float" },
    resWidth_MAX_GT: { __type: "Float" },
    resWidth_MAX_GTE: { __type: "Float" },
    resWidth_MAX_LT: { __type: "Float" },
    resWidth_MAX_LTE: { __type: "Float" },
    resWidth_MIN_EQUAL: { __type: "Float" },
    resWidth_MIN_GT: { __type: "Float" },
    resWidth_MIN_GTE: { __type: "Float" },
    resWidth_MIN_LT: { __type: "Float" },
    resWidth_MIN_LTE: { __type: "Float" },
    width_AVERAGE_EQUAL: { __type: "Float" },
    width_AVERAGE_GT: { __type: "Float" },
    width_AVERAGE_GTE: { __type: "Float" },
    width_AVERAGE_LT: { __type: "Float" },
    width_AVERAGE_LTE: { __type: "Float" },
    width_EQUAL: { __type: "Float" },
    width_GT: { __type: "Float" },
    width_GTE: { __type: "Float" },
    width_LT: { __type: "Float" },
    width_LTE: { __type: "Float" },
    width_MAX_EQUAL: { __type: "Float" },
    width_MAX_GT: { __type: "Float" },
    width_MAX_GTE: { __type: "Float" },
    width_MAX_LT: { __type: "Float" },
    width_MAX_LTE: { __type: "Float" },
    width_MIN_EQUAL: { __type: "Float" },
    width_MIN_GT: { __type: "Float" },
    width_MIN_GTE: { __type: "Float" },
    width_MIN_LT: { __type: "Float" },
    width_MIN_LTE: { __type: "Float" },
  },
  DisplayScreensRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "DisplayScreen!" },
  },
  DisplayScreensUpdateConnectionInput: {
    node: { __type: "DisplayScreenUpdateInput" },
  },
  DisplayScreensUpdateFieldInput: {
    connect: { __type: "[DisplayScreensConnectFieldInput!]" },
    create: { __type: "[DisplayScreensCreateFieldInput!]" },
    delete: { __type: "[DisplayScreensDeleteFieldInput!]" },
    disconnect: { __type: "[DisplayScreensDisconnectFieldInput!]" },
    update: { __type: "DisplayScreensUpdateConnectionInput" },
    where: { __type: "DisplayScreensConnectionWhere" },
  },
  DisplaySort: {
    id: { __type: "SortDirection" },
    label: { __type: "SortDirection" },
  },
  DisplayUpdateInput: {
    label: { __type: "String" },
    location: { __type: "DisplayLocationUpdateFieldInput" },
    screens: { __type: "[DisplayScreensUpdateFieldInput!]" },
  },
  DisplayWhere: {
    AND: { __type: "[DisplayWhere!]" },
    OR: { __type: "[DisplayWhere!]" },
    id: { __type: "ID" },
    id_CONTAINS: { __type: "ID" },
    id_ENDS_WITH: { __type: "ID" },
    id_IN: { __type: "[ID]" },
    id_NOT: { __type: "ID" },
    id_NOT_CONTAINS: { __type: "ID" },
    id_NOT_ENDS_WITH: { __type: "ID" },
    id_NOT_IN: { __type: "[ID]" },
    id_NOT_STARTS_WITH: { __type: "ID" },
    id_STARTS_WITH: { __type: "ID" },
    label: { __type: "String" },
    label_CONTAINS: { __type: "String" },
    label_ENDS_WITH: { __type: "String" },
    label_IN: { __type: "[String]" },
    label_NOT: { __type: "String" },
    label_NOT_CONTAINS: { __type: "String" },
    label_NOT_ENDS_WITH: { __type: "String" },
    label_NOT_IN: { __type: "[String]" },
    label_NOT_STARTS_WITH: { __type: "String" },
    label_STARTS_WITH: { __type: "String" },
    location: { __type: "DisplayLocationWhere" },
    locationAggregate: { __type: "DisplayLocationAggregateInput" },
    locationConnection: { __type: "DisplayLocationConnectionWhere" },
    locationConnection_NOT: { __type: "DisplayLocationConnectionWhere" },
    location_NOT: { __type: "DisplayLocationWhere" },
    screens: { __type: "DisplayScreenWhere" },
    screensAggregate: { __type: "DisplayScreensAggregateInput" },
    screensConnection: { __type: "DisplayScreensConnectionWhere" },
    screensConnection_NOT: { __type: "DisplayScreensConnectionWhere" },
    screens_NOT: { __type: "DisplayScreenWhere" },
  },
  FloatAggregateSelection: {
    __typename: { __type: "String!" },
    average: { __type: "Float!" },
    max: { __type: "Float!" },
    min: { __type: "Float!" },
  },
  IDAggregateSelection: {
    __typename: { __type: "String!" },
    longest: { __type: "ID!" },
    shortest: { __type: "ID!" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    endCursor: { __type: "String" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "String" },
  },
  StringAggregateSelection: {
    __typename: { __type: "String!" },
    longest: { __type: "String!" },
    shortest: { __type: "String!" },
  },
  UpdateCampaignAnalyticsMutationResponse: {
    __typename: { __type: "String!" },
    campaignAnalytics: { __type: "[CampaignAnalytic!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateCampaignAssetsMutationResponse: {
    __typename: { __type: "String!" },
    campaignAssets: { __type: "[CampaignAsset!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateCampaignsMutationResponse: {
    __typename: { __type: "String!" },
    campaigns: { __type: "[Campaign!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateDisplayLocationsMutationResponse: {
    __typename: { __type: "String!" },
    displayLocations: { __type: "[DisplayLocation!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateDisplayScreensMutationResponse: {
    __typename: { __type: "String!" },
    displayScreens: { __type: "[DisplayScreen!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateDisplaysMutationResponse: {
    __typename: { __type: "String!" },
    displays: { __type: "[Display!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesCreated: { __type: "Int!" },
    nodesDeleted: { __type: "Int!" },
    relationshipsCreated: { __type: "Int!" },
    relationshipsDeleted: { __type: "Int!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    createCampaignAnalytics: {
      __type: "CreateCampaignAnalyticsMutationResponse!",
      __args: { input: "[CampaignAnalyticCreateInput!]!" },
    },
    createCampaignAssets: {
      __type: "CreateCampaignAssetsMutationResponse!",
      __args: { input: "[CampaignAssetCreateInput!]!" },
    },
    createCampaigns: {
      __type: "CreateCampaignsMutationResponse!",
      __args: { input: "[CampaignCreateInput!]!" },
    },
    createDisplayLocations: {
      __type: "CreateDisplayLocationsMutationResponse!",
      __args: { input: "[DisplayLocationCreateInput!]!" },
    },
    createDisplayScreens: {
      __type: "CreateDisplayScreensMutationResponse!",
      __args: { input: "[DisplayScreenCreateInput!]!" },
    },
    createDisplays: {
      __type: "CreateDisplaysMutationResponse!",
      __args: { input: "[DisplayCreateInput!]!" },
    },
    deleteCampaignAnalytics: {
      __type: "DeleteInfo!",
      __args: {
        delete: "CampaignAnalyticDeleteInput",
        where: "CampaignAnalyticWhere",
      },
    },
    deleteCampaignAssets: {
      __type: "DeleteInfo!",
      __args: { where: "CampaignAssetWhere" },
    },
    deleteCampaigns: {
      __type: "DeleteInfo!",
      __args: { delete: "CampaignDeleteInput", where: "CampaignWhere" },
    },
    deleteDisplayLocations: {
      __type: "DeleteInfo!",
      __args: {
        delete: "DisplayLocationDeleteInput",
        where: "DisplayLocationWhere",
      },
    },
    deleteDisplayScreens: {
      __type: "DeleteInfo!",
      __args: { where: "DisplayScreenWhere" },
    },
    deleteDisplays: {
      __type: "DeleteInfo!",
      __args: { delete: "DisplayDeleteInput", where: "DisplayWhere" },
    },
    updateCampaignAnalytics: {
      __type: "UpdateCampaignAnalyticsMutationResponse!",
      __args: {
        connect: "CampaignAnalyticConnectInput",
        create: "CampaignAnalyticRelationInput",
        delete: "CampaignAnalyticDeleteInput",
        disconnect: "CampaignAnalyticDisconnectInput",
        update: "CampaignAnalyticUpdateInput",
        where: "CampaignAnalyticWhere",
      },
    },
    updateCampaignAssets: {
      __type: "UpdateCampaignAssetsMutationResponse!",
      __args: {
        update: "CampaignAssetUpdateInput",
        where: "CampaignAssetWhere",
      },
    },
    updateCampaigns: {
      __type: "UpdateCampaignsMutationResponse!",
      __args: {
        connect: "CampaignConnectInput",
        create: "CampaignRelationInput",
        delete: "CampaignDeleteInput",
        disconnect: "CampaignDisconnectInput",
        update: "CampaignUpdateInput",
        where: "CampaignWhere",
      },
    },
    updateDisplayLocations: {
      __type: "UpdateDisplayLocationsMutationResponse!",
      __args: {
        connect: "DisplayLocationConnectInput",
        create: "DisplayLocationRelationInput",
        delete: "DisplayLocationDeleteInput",
        disconnect: "DisplayLocationDisconnectInput",
        update: "DisplayLocationUpdateInput",
        where: "DisplayLocationWhere",
      },
    },
    updateDisplayScreens: {
      __type: "UpdateDisplayScreensMutationResponse!",
      __args: {
        update: "DisplayScreenUpdateInput",
        where: "DisplayScreenWhere",
      },
    },
    updateDisplays: {
      __type: "UpdateDisplaysMutationResponse!",
      __args: {
        connect: "DisplayConnectInput",
        create: "DisplayRelationInput",
        delete: "DisplayDeleteInput",
        disconnect: "DisplayDisconnectInput",
        update: "DisplayUpdateInput",
        where: "DisplayWhere",
      },
    },
  },
  query: {
    __typename: { __type: "String!" },
    campaignAnalytics: {
      __type: "[CampaignAnalytic!]!",
      __args: {
        options: "CampaignAnalyticOptions",
        where: "CampaignAnalyticWhere",
      },
    },
    campaignAnalyticsAggregate: {
      __type: "CampaignAnalyticAggregateSelection!",
      __args: { where: "CampaignAnalyticWhere" },
    },
    campaignAnalyticsCount: {
      __type: "Int!",
      __args: { where: "CampaignAnalyticWhere" },
    },
    campaignAssets: {
      __type: "[CampaignAsset!]!",
      __args: { options: "CampaignAssetOptions", where: "CampaignAssetWhere" },
    },
    campaignAssetsAggregate: {
      __type: "CampaignAssetAggregateSelection!",
      __args: { where: "CampaignAssetWhere" },
    },
    campaignAssetsCount: {
      __type: "Int!",
      __args: { where: "CampaignAssetWhere" },
    },
    campaigns: {
      __type: "[Campaign!]!",
      __args: { options: "CampaignOptions", where: "CampaignWhere" },
    },
    campaignsAggregate: {
      __type: "CampaignAggregateSelection!",
      __args: { where: "CampaignWhere" },
    },
    campaignsCount: { __type: "Int!", __args: { where: "CampaignWhere" } },
    displayLocations: {
      __type: "[DisplayLocation!]!",
      __args: {
        options: "DisplayLocationOptions",
        where: "DisplayLocationWhere",
      },
    },
    displayLocationsAggregate: {
      __type: "DisplayLocationAggregateSelection!",
      __args: { where: "DisplayLocationWhere" },
    },
    displayLocationsCount: {
      __type: "Int!",
      __args: { where: "DisplayLocationWhere" },
    },
    displayScreens: {
      __type: "[DisplayScreen!]!",
      __args: { options: "DisplayScreenOptions", where: "DisplayScreenWhere" },
    },
    displayScreensAggregate: {
      __type: "DisplayScreenAggregateSelection!",
      __args: { where: "DisplayScreenWhere" },
    },
    displayScreensCount: {
      __type: "Int!",
      __args: { where: "DisplayScreenWhere" },
    },
    displays: {
      __type: "[Display!]!",
      __args: { options: "DisplayOptions", where: "DisplayWhere" },
    },
    displaysAggregate: {
      __type: "DisplayAggregateSelection!",
      __args: { where: "DisplayWhere" },
    },
    displaysCount: { __type: "Int!", __args: { where: "DisplayWhere" } },
  },
  subscription: {},
} as const;

export interface Campaign {
  __typename?: "Campaign";
  analytics: (args?: {
    options?: Maybe<CampaignAnalyticOptions>;
    where?: Maybe<CampaignAnalyticWhere>;
  }) => Maybe<Array<Maybe<CampaignAnalytic>>>;
  analyticsAggregate: (args?: {
    where?: Maybe<CampaignAnalyticWhere>;
  }) => Maybe<CampaignCampaignAnalyticAnalyticsAggregationSelection>;
  analyticsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<CampaignAnalyticsConnectionSort>>;
    where?: Maybe<CampaignAnalyticsConnectionWhere>;
  }) => CampaignAnalyticsConnection;
  assets: (args?: {
    options?: Maybe<CampaignAssetOptions>;
    where?: Maybe<CampaignAssetWhere>;
  }) => Maybe<Array<Maybe<CampaignAsset>>>;
  assetsAggregate: (args?: {
    where?: Maybe<CampaignAssetWhere>;
  }) => Maybe<CampaignCampaignAssetAssetsAggregationSelection>;
  assetsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<CampaignAssetsConnectionSort>>;
    where?: Maybe<CampaignAssetsConnectionWhere>;
  }) => CampaignAssetsConnection;
  customer?: Maybe<ScalarsEnums["String"]>;
  endDate?: Maybe<ScalarsEnums["DateTime"]>;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  startDate?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface CampaignAggregateSelection {
  __typename?: "CampaignAggregateSelection";
  count: ScalarsEnums["Int"];
  customer: StringAggregateSelection;
  endDate: DateTimeAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  startDate: DateTimeAggregateSelection;
}

export interface CampaignAnalytic {
  __typename?: "CampaignAnalytic";
  campaign: (args?: {
    options?: Maybe<CampaignOptions>;
    where?: Maybe<CampaignWhere>;
  }) => Maybe<Campaign>;
  campaignAggregate: (args?: {
    where?: Maybe<CampaignWhere>;
  }) => Maybe<CampaignAnalyticCampaignCampaignAggregationSelection>;
  campaignConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<CampaignAnalyticCampaignConnectionSort>>;
    where?: Maybe<CampaignAnalyticCampaignConnectionWhere>;
  }) => CampaignAnalyticCampaignConnection;
  id: ScalarsEnums["ID"];
  ts?: Maybe<ScalarsEnums["DateTime"]>;
  type?: Maybe<ScalarsEnums["String"]>;
  value?: Maybe<ScalarsEnums["String"]>;
}

export interface CampaignAnalyticAggregateSelection {
  __typename?: "CampaignAnalyticAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  ts: DateTimeAggregateSelection;
  type: StringAggregateSelection;
  value: StringAggregateSelection;
}

export interface CampaignAnalyticCampaignCampaignAggregationSelection {
  __typename?: "CampaignAnalyticCampaignCampaignAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<CampaignAnalyticCampaignCampaignNodeAggregateSelection>;
}

export interface CampaignAnalyticCampaignCampaignNodeAggregateSelection {
  __typename?: "CampaignAnalyticCampaignCampaignNodeAggregateSelection";
  customer: StringAggregateSelection;
  endDate: DateTimeAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  startDate: DateTimeAggregateSelection;
}

export interface CampaignAnalyticCampaignConnection {
  __typename?: "CampaignAnalyticCampaignConnection";
  edges: Array<CampaignAnalyticCampaignRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface CampaignAnalyticCampaignRelationship {
  __typename?: "CampaignAnalyticCampaignRelationship";
  cursor: ScalarsEnums["String"];
  node: Campaign;
}

export interface CampaignAnalyticsConnection {
  __typename?: "CampaignAnalyticsConnection";
  edges: Array<CampaignAnalyticsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface CampaignAnalyticsRelationship {
  __typename?: "CampaignAnalyticsRelationship";
  cursor: ScalarsEnums["String"];
  node: CampaignAnalytic;
}

export interface CampaignAsset {
  __typename?: "CampaignAsset";
  cid?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface CampaignAssetAggregateSelection {
  __typename?: "CampaignAssetAggregateSelection";
  cid: StringAggregateSelection;
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface CampaignAssetsConnection {
  __typename?: "CampaignAssetsConnection";
  edges: Array<CampaignAssetsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface CampaignAssetsRelationship {
  __typename?: "CampaignAssetsRelationship";
  cursor: ScalarsEnums["String"];
  node: CampaignAsset;
}

export interface CampaignCampaignAnalyticAnalyticsAggregationSelection {
  __typename?: "CampaignCampaignAnalyticAnalyticsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<CampaignCampaignAnalyticAnalyticsNodeAggregateSelection>;
}

export interface CampaignCampaignAnalyticAnalyticsNodeAggregateSelection {
  __typename?: "CampaignCampaignAnalyticAnalyticsNodeAggregateSelection";
  id: IDAggregateSelection;
  ts: DateTimeAggregateSelection;
  type: StringAggregateSelection;
  value: StringAggregateSelection;
}

export interface CampaignCampaignAssetAssetsAggregationSelection {
  __typename?: "CampaignCampaignAssetAssetsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<CampaignCampaignAssetAssetsNodeAggregateSelection>;
}

export interface CampaignCampaignAssetAssetsNodeAggregateSelection {
  __typename?: "CampaignCampaignAssetAssetsNodeAggregateSelection";
  cid: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface CreateCampaignAnalyticsMutationResponse {
  __typename?: "CreateCampaignAnalyticsMutationResponse";
  campaignAnalytics: Array<CampaignAnalytic>;
  info: CreateInfo;
}

export interface CreateCampaignAssetsMutationResponse {
  __typename?: "CreateCampaignAssetsMutationResponse";
  campaignAssets: Array<CampaignAsset>;
  info: CreateInfo;
}

export interface CreateCampaignsMutationResponse {
  __typename?: "CreateCampaignsMutationResponse";
  campaigns: Array<Campaign>;
  info: CreateInfo;
}

export interface CreateDisplayLocationsMutationResponse {
  __typename?: "CreateDisplayLocationsMutationResponse";
  displayLocations: Array<DisplayLocation>;
  info: CreateInfo;
}

export interface CreateDisplayScreensMutationResponse {
  __typename?: "CreateDisplayScreensMutationResponse";
  displayScreens: Array<DisplayScreen>;
  info: CreateInfo;
}

export interface CreateDisplaysMutationResponse {
  __typename?: "CreateDisplaysMutationResponse";
  displays: Array<Display>;
  info: CreateInfo;
}

export interface CreateInfo {
  __typename?: "CreateInfo";
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesCreated: ScalarsEnums["Int"];
  relationshipsCreated: ScalarsEnums["Int"];
}

export interface DateTimeAggregateSelection {
  __typename?: "DateTimeAggregateSelection";
  max: ScalarsEnums["DateTime"];
  min: ScalarsEnums["DateTime"];
}

export interface DeleteInfo {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesDeleted: ScalarsEnums["Int"];
  relationshipsDeleted: ScalarsEnums["Int"];
}

export interface Display {
  __typename?: "Display";
  id: ScalarsEnums["ID"];
  label?: Maybe<ScalarsEnums["String"]>;
  location: (args?: {
    options?: Maybe<DisplayLocationOptions>;
    where?: Maybe<DisplayLocationWhere>;
  }) => Maybe<DisplayLocation>;
  locationAggregate: (args?: {
    where?: Maybe<DisplayLocationWhere>;
  }) => Maybe<DisplayDisplayLocationLocationAggregationSelection>;
  locationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<DisplayLocationConnectionSort>>;
    where?: Maybe<DisplayLocationConnectionWhere>;
  }) => DisplayLocationConnection;
  screens: (args?: {
    options?: Maybe<DisplayScreenOptions>;
    where?: Maybe<DisplayScreenWhere>;
  }) => Maybe<Array<Maybe<DisplayScreen>>>;
  screensAggregate: (args?: {
    where?: Maybe<DisplayScreenWhere>;
  }) => Maybe<DisplayDisplayScreenScreensAggregationSelection>;
  screensConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<DisplayScreensConnectionSort>>;
    where?: Maybe<DisplayScreensConnectionWhere>;
  }) => DisplayScreensConnection;
}

export interface DisplayAggregateSelection {
  __typename?: "DisplayAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  label: StringAggregateSelection;
}

export interface DisplayDisplayLocationLocationAggregationSelection {
  __typename?: "DisplayDisplayLocationLocationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<DisplayDisplayLocationLocationNodeAggregateSelection>;
}

export interface DisplayDisplayLocationLocationNodeAggregateSelection {
  __typename?: "DisplayDisplayLocationLocationNodeAggregateSelection";
  elevation: FloatAggregateSelection;
  id: IDAggregateSelection;
  lat: FloatAggregateSelection;
  lng: FloatAggregateSelection;
  name: StringAggregateSelection;
}

export interface DisplayDisplayScreenScreensAggregationSelection {
  __typename?: "DisplayDisplayScreenScreensAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<DisplayDisplayScreenScreensNodeAggregateSelection>;
}

export interface DisplayDisplayScreenScreensNodeAggregateSelection {
  __typename?: "DisplayDisplayScreenScreensNodeAggregateSelection";
  height: FloatAggregateSelection;
  id: IDAggregateSelection;
  orientation: FloatAggregateSelection;
  resHeight: FloatAggregateSelection;
  resWidth: FloatAggregateSelection;
  width: FloatAggregateSelection;
}

export interface DisplayLocation {
  __typename?: "DisplayLocation";
  displays: (args?: {
    options?: Maybe<DisplayOptions>;
    where?: Maybe<DisplayWhere>;
  }) => Maybe<Array<Maybe<Display>>>;
  displaysAggregate: (args?: {
    where?: Maybe<DisplayWhere>;
  }) => Maybe<DisplayLocationDisplayDisplaysAggregationSelection>;
  displaysConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<DisplayLocationDisplaysConnectionSort>>;
    where?: Maybe<DisplayLocationDisplaysConnectionWhere>;
  }) => DisplayLocationDisplaysConnection;
  elevation?: Maybe<ScalarsEnums["Float"]>;
  id: ScalarsEnums["ID"];
  lat?: Maybe<ScalarsEnums["Float"]>;
  lng?: Maybe<ScalarsEnums["Float"]>;
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface DisplayLocationAggregateSelection {
  __typename?: "DisplayLocationAggregateSelection";
  count: ScalarsEnums["Int"];
  elevation: FloatAggregateSelection;
  id: IDAggregateSelection;
  lat: FloatAggregateSelection;
  lng: FloatAggregateSelection;
  name: StringAggregateSelection;
}

export interface DisplayLocationConnection {
  __typename?: "DisplayLocationConnection";
  edges: Array<DisplayLocationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface DisplayLocationDisplayDisplaysAggregationSelection {
  __typename?: "DisplayLocationDisplayDisplaysAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<DisplayLocationDisplayDisplaysNodeAggregateSelection>;
}

export interface DisplayLocationDisplayDisplaysNodeAggregateSelection {
  __typename?: "DisplayLocationDisplayDisplaysNodeAggregateSelection";
  id: IDAggregateSelection;
  label: StringAggregateSelection;
}

export interface DisplayLocationDisplaysConnection {
  __typename?: "DisplayLocationDisplaysConnection";
  edges: Array<DisplayLocationDisplaysRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface DisplayLocationDisplaysRelationship {
  __typename?: "DisplayLocationDisplaysRelationship";
  cursor: ScalarsEnums["String"];
  node: Display;
}

export interface DisplayLocationRelationship {
  __typename?: "DisplayLocationRelationship";
  cursor: ScalarsEnums["String"];
  node: DisplayLocation;
}

export interface DisplayScreen {
  __typename?: "DisplayScreen";
  height?: Maybe<ScalarsEnums["Float"]>;
  id: ScalarsEnums["ID"];
  orientation?: Maybe<ScalarsEnums["Float"]>;
  resHeight?: Maybe<ScalarsEnums["Float"]>;
  resWidth?: Maybe<ScalarsEnums["Float"]>;
  width?: Maybe<ScalarsEnums["Float"]>;
}

export interface DisplayScreenAggregateSelection {
  __typename?: "DisplayScreenAggregateSelection";
  count: ScalarsEnums["Int"];
  height: FloatAggregateSelection;
  id: IDAggregateSelection;
  orientation: FloatAggregateSelection;
  resHeight: FloatAggregateSelection;
  resWidth: FloatAggregateSelection;
  width: FloatAggregateSelection;
}

export interface DisplayScreensConnection {
  __typename?: "DisplayScreensConnection";
  edges: Array<DisplayScreensRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface DisplayScreensRelationship {
  __typename?: "DisplayScreensRelationship";
  cursor: ScalarsEnums["String"];
  node: DisplayScreen;
}

export interface FloatAggregateSelection {
  __typename?: "FloatAggregateSelection";
  average: ScalarsEnums["Float"];
  max: ScalarsEnums["Float"];
  min: ScalarsEnums["Float"];
}

export interface IDAggregateSelection {
  __typename?: "IDAggregateSelection";
  longest: ScalarsEnums["ID"];
  shortest: ScalarsEnums["ID"];
}

/**
 * Pagination information (Relay)
 */
export interface PageInfo {
  __typename?: "PageInfo";
  endCursor?: Maybe<ScalarsEnums["String"]>;
  hasNextPage: ScalarsEnums["Boolean"];
  hasPreviousPage: ScalarsEnums["Boolean"];
  startCursor?: Maybe<ScalarsEnums["String"]>;
}

export interface StringAggregateSelection {
  __typename?: "StringAggregateSelection";
  longest: ScalarsEnums["String"];
  shortest: ScalarsEnums["String"];
}

export interface UpdateCampaignAnalyticsMutationResponse {
  __typename?: "UpdateCampaignAnalyticsMutationResponse";
  campaignAnalytics: Array<CampaignAnalytic>;
  info: UpdateInfo;
}

export interface UpdateCampaignAssetsMutationResponse {
  __typename?: "UpdateCampaignAssetsMutationResponse";
  campaignAssets: Array<CampaignAsset>;
  info: UpdateInfo;
}

export interface UpdateCampaignsMutationResponse {
  __typename?: "UpdateCampaignsMutationResponse";
  campaigns: Array<Campaign>;
  info: UpdateInfo;
}

export interface UpdateDisplayLocationsMutationResponse {
  __typename?: "UpdateDisplayLocationsMutationResponse";
  displayLocations: Array<DisplayLocation>;
  info: UpdateInfo;
}

export interface UpdateDisplayScreensMutationResponse {
  __typename?: "UpdateDisplayScreensMutationResponse";
  displayScreens: Array<DisplayScreen>;
  info: UpdateInfo;
}

export interface UpdateDisplaysMutationResponse {
  __typename?: "UpdateDisplaysMutationResponse";
  displays: Array<Display>;
  info: UpdateInfo;
}

export interface UpdateInfo {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesCreated: ScalarsEnums["Int"];
  nodesDeleted: ScalarsEnums["Int"];
  relationshipsCreated: ScalarsEnums["Int"];
  relationshipsDeleted: ScalarsEnums["Int"];
}

export interface Mutation {
  __typename?: "Mutation";
  createCampaignAnalytics: (args: {
    input: Array<CampaignAnalyticCreateInput>;
  }) => CreateCampaignAnalyticsMutationResponse;
  createCampaignAssets: (args: {
    input: Array<CampaignAssetCreateInput>;
  }) => CreateCampaignAssetsMutationResponse;
  createCampaigns: (args: {
    input: Array<CampaignCreateInput>;
  }) => CreateCampaignsMutationResponse;
  createDisplayLocations: (args: {
    input: Array<DisplayLocationCreateInput>;
  }) => CreateDisplayLocationsMutationResponse;
  createDisplayScreens: (args: {
    input: Array<DisplayScreenCreateInput>;
  }) => CreateDisplayScreensMutationResponse;
  createDisplays: (args: {
    input: Array<DisplayCreateInput>;
  }) => CreateDisplaysMutationResponse;
  deleteCampaignAnalytics: (args?: {
    delete?: Maybe<CampaignAnalyticDeleteInput>;
    where?: Maybe<CampaignAnalyticWhere>;
  }) => DeleteInfo;
  deleteCampaignAssets: (args?: {
    where?: Maybe<CampaignAssetWhere>;
  }) => DeleteInfo;
  deleteCampaigns: (args?: {
    delete?: Maybe<CampaignDeleteInput>;
    where?: Maybe<CampaignWhere>;
  }) => DeleteInfo;
  deleteDisplayLocations: (args?: {
    delete?: Maybe<DisplayLocationDeleteInput>;
    where?: Maybe<DisplayLocationWhere>;
  }) => DeleteInfo;
  deleteDisplayScreens: (args?: {
    where?: Maybe<DisplayScreenWhere>;
  }) => DeleteInfo;
  deleteDisplays: (args?: {
    delete?: Maybe<DisplayDeleteInput>;
    where?: Maybe<DisplayWhere>;
  }) => DeleteInfo;
  updateCampaignAnalytics: (args?: {
    connect?: Maybe<CampaignAnalyticConnectInput>;
    create?: Maybe<CampaignAnalyticRelationInput>;
    delete?: Maybe<CampaignAnalyticDeleteInput>;
    disconnect?: Maybe<CampaignAnalyticDisconnectInput>;
    update?: Maybe<CampaignAnalyticUpdateInput>;
    where?: Maybe<CampaignAnalyticWhere>;
  }) => UpdateCampaignAnalyticsMutationResponse;
  updateCampaignAssets: (args?: {
    update?: Maybe<CampaignAssetUpdateInput>;
    where?: Maybe<CampaignAssetWhere>;
  }) => UpdateCampaignAssetsMutationResponse;
  updateCampaigns: (args?: {
    connect?: Maybe<CampaignConnectInput>;
    create?: Maybe<CampaignRelationInput>;
    delete?: Maybe<CampaignDeleteInput>;
    disconnect?: Maybe<CampaignDisconnectInput>;
    update?: Maybe<CampaignUpdateInput>;
    where?: Maybe<CampaignWhere>;
  }) => UpdateCampaignsMutationResponse;
  updateDisplayLocations: (args?: {
    connect?: Maybe<DisplayLocationConnectInput>;
    create?: Maybe<DisplayLocationRelationInput>;
    delete?: Maybe<DisplayLocationDeleteInput>;
    disconnect?: Maybe<DisplayLocationDisconnectInput>;
    update?: Maybe<DisplayLocationUpdateInput>;
    where?: Maybe<DisplayLocationWhere>;
  }) => UpdateDisplayLocationsMutationResponse;
  updateDisplayScreens: (args?: {
    update?: Maybe<DisplayScreenUpdateInput>;
    where?: Maybe<DisplayScreenWhere>;
  }) => UpdateDisplayScreensMutationResponse;
  updateDisplays: (args?: {
    connect?: Maybe<DisplayConnectInput>;
    create?: Maybe<DisplayRelationInput>;
    delete?: Maybe<DisplayDeleteInput>;
    disconnect?: Maybe<DisplayDisconnectInput>;
    update?: Maybe<DisplayUpdateInput>;
    where?: Maybe<DisplayWhere>;
  }) => UpdateDisplaysMutationResponse;
}

export interface Query {
  __typename?: "Query";
  campaignAnalytics: (args?: {
    options?: Maybe<CampaignAnalyticOptions>;
    where?: Maybe<CampaignAnalyticWhere>;
  }) => Array<CampaignAnalytic>;
  campaignAnalyticsAggregate: (args?: {
    where?: Maybe<CampaignAnalyticWhere>;
  }) => CampaignAnalyticAggregateSelection;
  campaignAnalyticsCount: (args?: {
    where?: Maybe<CampaignAnalyticWhere>;
  }) => ScalarsEnums["Int"];
  campaignAssets: (args?: {
    options?: Maybe<CampaignAssetOptions>;
    where?: Maybe<CampaignAssetWhere>;
  }) => Array<CampaignAsset>;
  campaignAssetsAggregate: (args?: {
    where?: Maybe<CampaignAssetWhere>;
  }) => CampaignAssetAggregateSelection;
  campaignAssetsCount: (args?: {
    where?: Maybe<CampaignAssetWhere>;
  }) => ScalarsEnums["Int"];
  campaigns: (args?: {
    options?: Maybe<CampaignOptions>;
    where?: Maybe<CampaignWhere>;
  }) => Array<Campaign>;
  campaignsAggregate: (args?: {
    where?: Maybe<CampaignWhere>;
  }) => CampaignAggregateSelection;
  campaignsCount: (args?: {
    where?: Maybe<CampaignWhere>;
  }) => ScalarsEnums["Int"];
  displayLocations: (args?: {
    options?: Maybe<DisplayLocationOptions>;
    where?: Maybe<DisplayLocationWhere>;
  }) => Array<DisplayLocation>;
  displayLocationsAggregate: (args?: {
    where?: Maybe<DisplayLocationWhere>;
  }) => DisplayLocationAggregateSelection;
  displayLocationsCount: (args?: {
    where?: Maybe<DisplayLocationWhere>;
  }) => ScalarsEnums["Int"];
  displayScreens: (args?: {
    options?: Maybe<DisplayScreenOptions>;
    where?: Maybe<DisplayScreenWhere>;
  }) => Array<DisplayScreen>;
  displayScreensAggregate: (args?: {
    where?: Maybe<DisplayScreenWhere>;
  }) => DisplayScreenAggregateSelection;
  displayScreensCount: (args?: {
    where?: Maybe<DisplayScreenWhere>;
  }) => ScalarsEnums["Int"];
  displays: (args?: {
    options?: Maybe<DisplayOptions>;
    where?: Maybe<DisplayWhere>;
  }) => Array<Display>;
  displaysAggregate: (args?: {
    where?: Maybe<DisplayWhere>;
  }) => DisplayAggregateSelection;
  displaysCount: (args?: {
    where?: Maybe<DisplayWhere>;
  }) => ScalarsEnums["Int"];
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  Campaign: Campaign;
  CampaignAggregateSelection: CampaignAggregateSelection;
  CampaignAnalytic: CampaignAnalytic;
  CampaignAnalyticAggregateSelection: CampaignAnalyticAggregateSelection;
  CampaignAnalyticCampaignCampaignAggregationSelection: CampaignAnalyticCampaignCampaignAggregationSelection;
  CampaignAnalyticCampaignCampaignNodeAggregateSelection: CampaignAnalyticCampaignCampaignNodeAggregateSelection;
  CampaignAnalyticCampaignConnection: CampaignAnalyticCampaignConnection;
  CampaignAnalyticCampaignRelationship: CampaignAnalyticCampaignRelationship;
  CampaignAnalyticsConnection: CampaignAnalyticsConnection;
  CampaignAnalyticsRelationship: CampaignAnalyticsRelationship;
  CampaignAsset: CampaignAsset;
  CampaignAssetAggregateSelection: CampaignAssetAggregateSelection;
  CampaignAssetsConnection: CampaignAssetsConnection;
  CampaignAssetsRelationship: CampaignAssetsRelationship;
  CampaignCampaignAnalyticAnalyticsAggregationSelection: CampaignCampaignAnalyticAnalyticsAggregationSelection;
  CampaignCampaignAnalyticAnalyticsNodeAggregateSelection: CampaignCampaignAnalyticAnalyticsNodeAggregateSelection;
  CampaignCampaignAssetAssetsAggregationSelection: CampaignCampaignAssetAssetsAggregationSelection;
  CampaignCampaignAssetAssetsNodeAggregateSelection: CampaignCampaignAssetAssetsNodeAggregateSelection;
  CreateCampaignAnalyticsMutationResponse: CreateCampaignAnalyticsMutationResponse;
  CreateCampaignAssetsMutationResponse: CreateCampaignAssetsMutationResponse;
  CreateCampaignsMutationResponse: CreateCampaignsMutationResponse;
  CreateDisplayLocationsMutationResponse: CreateDisplayLocationsMutationResponse;
  CreateDisplayScreensMutationResponse: CreateDisplayScreensMutationResponse;
  CreateDisplaysMutationResponse: CreateDisplaysMutationResponse;
  CreateInfo: CreateInfo;
  DateTimeAggregateSelection: DateTimeAggregateSelection;
  DeleteInfo: DeleteInfo;
  Display: Display;
  DisplayAggregateSelection: DisplayAggregateSelection;
  DisplayDisplayLocationLocationAggregationSelection: DisplayDisplayLocationLocationAggregationSelection;
  DisplayDisplayLocationLocationNodeAggregateSelection: DisplayDisplayLocationLocationNodeAggregateSelection;
  DisplayDisplayScreenScreensAggregationSelection: DisplayDisplayScreenScreensAggregationSelection;
  DisplayDisplayScreenScreensNodeAggregateSelection: DisplayDisplayScreenScreensNodeAggregateSelection;
  DisplayLocation: DisplayLocation;
  DisplayLocationAggregateSelection: DisplayLocationAggregateSelection;
  DisplayLocationConnection: DisplayLocationConnection;
  DisplayLocationDisplayDisplaysAggregationSelection: DisplayLocationDisplayDisplaysAggregationSelection;
  DisplayLocationDisplayDisplaysNodeAggregateSelection: DisplayLocationDisplayDisplaysNodeAggregateSelection;
  DisplayLocationDisplaysConnection: DisplayLocationDisplaysConnection;
  DisplayLocationDisplaysRelationship: DisplayLocationDisplaysRelationship;
  DisplayLocationRelationship: DisplayLocationRelationship;
  DisplayScreen: DisplayScreen;
  DisplayScreenAggregateSelection: DisplayScreenAggregateSelection;
  DisplayScreensConnection: DisplayScreensConnection;
  DisplayScreensRelationship: DisplayScreensRelationship;
  FloatAggregateSelection: FloatAggregateSelection;
  IDAggregateSelection: IDAggregateSelection;
  Mutation: Mutation;
  PageInfo: PageInfo;
  Query: Query;
  StringAggregateSelection: StringAggregateSelection;
  Subscription: Subscription;
  UpdateCampaignAnalyticsMutationResponse: UpdateCampaignAnalyticsMutationResponse;
  UpdateCampaignAssetsMutationResponse: UpdateCampaignAssetsMutationResponse;
  UpdateCampaignsMutationResponse: UpdateCampaignsMutationResponse;
  UpdateDisplayLocationsMutationResponse: UpdateDisplayLocationsMutationResponse;
  UpdateDisplayScreensMutationResponse: UpdateDisplayScreensMutationResponse;
  UpdateDisplaysMutationResponse: UpdateDisplaysMutationResponse;
  UpdateInfo: UpdateInfo;
}
export type SchemaObjectTypesNames =
  | "Campaign"
  | "CampaignAggregateSelection"
  | "CampaignAnalytic"
  | "CampaignAnalyticAggregateSelection"
  | "CampaignAnalyticCampaignCampaignAggregationSelection"
  | "CampaignAnalyticCampaignCampaignNodeAggregateSelection"
  | "CampaignAnalyticCampaignConnection"
  | "CampaignAnalyticCampaignRelationship"
  | "CampaignAnalyticsConnection"
  | "CampaignAnalyticsRelationship"
  | "CampaignAsset"
  | "CampaignAssetAggregateSelection"
  | "CampaignAssetsConnection"
  | "CampaignAssetsRelationship"
  | "CampaignCampaignAnalyticAnalyticsAggregationSelection"
  | "CampaignCampaignAnalyticAnalyticsNodeAggregateSelection"
  | "CampaignCampaignAssetAssetsAggregationSelection"
  | "CampaignCampaignAssetAssetsNodeAggregateSelection"
  | "CreateCampaignAnalyticsMutationResponse"
  | "CreateCampaignAssetsMutationResponse"
  | "CreateCampaignsMutationResponse"
  | "CreateDisplayLocationsMutationResponse"
  | "CreateDisplayScreensMutationResponse"
  | "CreateDisplaysMutationResponse"
  | "CreateInfo"
  | "DateTimeAggregateSelection"
  | "DeleteInfo"
  | "Display"
  | "DisplayAggregateSelection"
  | "DisplayDisplayLocationLocationAggregationSelection"
  | "DisplayDisplayLocationLocationNodeAggregateSelection"
  | "DisplayDisplayScreenScreensAggregationSelection"
  | "DisplayDisplayScreenScreensNodeAggregateSelection"
  | "DisplayLocation"
  | "DisplayLocationAggregateSelection"
  | "DisplayLocationConnection"
  | "DisplayLocationDisplayDisplaysAggregationSelection"
  | "DisplayLocationDisplayDisplaysNodeAggregateSelection"
  | "DisplayLocationDisplaysConnection"
  | "DisplayLocationDisplaysRelationship"
  | "DisplayLocationRelationship"
  | "DisplayScreen"
  | "DisplayScreenAggregateSelection"
  | "DisplayScreensConnection"
  | "DisplayScreensRelationship"
  | "FloatAggregateSelection"
  | "IDAggregateSelection"
  | "Mutation"
  | "PageInfo"
  | "Query"
  | "StringAggregateSelection"
  | "Subscription"
  | "UpdateCampaignAnalyticsMutationResponse"
  | "UpdateCampaignAssetsMutationResponse"
  | "UpdateCampaignsMutationResponse"
  | "UpdateDisplayLocationsMutationResponse"
  | "UpdateDisplayScreensMutationResponse"
  | "UpdateDisplaysMutationResponse"
  | "UpdateInfo";

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
