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
  assetFolder_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  assetFolder_EQUAL?: Maybe<Scalars["String"]>;
  assetFolder_GT?: Maybe<Scalars["Int"]>;
  assetFolder_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_GT?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_LT?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  assetFolder_LT?: Maybe<Scalars["Int"]>;
  assetFolder_LTE?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
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
  data?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
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
  data?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
}

export interface CampaignAnalyticUpdateInput {
  campaign?: Maybe<CampaignAnalyticCampaignUpdateFieldInput>;
  data?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface CampaignAnalyticWhere {
  AND?: Maybe<Array<CampaignAnalyticWhere>>;
  OR?: Maybe<Array<CampaignAnalyticWhere>>;
  campaign?: Maybe<CampaignWhere>;
  campaignAggregate?: Maybe<CampaignAnalyticCampaignAggregateInput>;
  campaignConnection?: Maybe<CampaignAnalyticCampaignConnectionWhere>;
  campaignConnection_NOT?: Maybe<CampaignAnalyticCampaignConnectionWhere>;
  campaign_NOT?: Maybe<CampaignWhere>;
  data?: Maybe<Scalars["String"]>;
  data_CONTAINS?: Maybe<Scalars["String"]>;
  data_ENDS_WITH?: Maybe<Scalars["String"]>;
  data_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  data_NOT?: Maybe<Scalars["String"]>;
  data_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  data_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  data_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  data_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  data_STARTS_WITH?: Maybe<Scalars["String"]>;
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
  data_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  data_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  data_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  data_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  data_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  data_EQUAL?: Maybe<Scalars["String"]>;
  data_GT?: Maybe<Scalars["Int"]>;
  data_GTE?: Maybe<Scalars["Int"]>;
  data_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  data_LONGEST_GT?: Maybe<Scalars["Int"]>;
  data_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  data_LONGEST_LT?: Maybe<Scalars["Int"]>;
  data_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  data_LT?: Maybe<Scalars["Int"]>;
  data_LTE?: Maybe<Scalars["Int"]>;
  data_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  data_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  data_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  data_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  data_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
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

export interface CampaignConnectInput {
  analytics?: Maybe<Array<CampaignAnalyticsConnectFieldInput>>;
}

export interface CampaignConnectWhere {
  node: CampaignWhere;
}

export interface CampaignCreateInput {
  analytics?: Maybe<CampaignAnalyticsFieldInput>;
  assetFolder?: Maybe<Scalars["String"]>;
  customer?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
}

export interface CampaignDeleteInput {
  analytics?: Maybe<Array<CampaignAnalyticsDeleteFieldInput>>;
}

export interface CampaignDisconnectInput {
  analytics?: Maybe<Array<CampaignAnalyticsDisconnectFieldInput>>;
}

export interface CampaignOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more CampaignSort objects to sort Campaigns by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<CampaignSort>>>;
}

export interface CampaignRelationInput {
  analytics?: Maybe<Array<CampaignAnalyticsCreateFieldInput>>;
}

/** Fields to sort Campaigns by. The order in which sorts are applied is not guaranteed when specifying many fields in one CampaignSort object. */
export interface CampaignSort {
  assetFolder?: Maybe<SortDirection>;
  customer?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface CampaignUpdateInput {
  analytics?: Maybe<Array<CampaignAnalyticsUpdateFieldInput>>;
  assetFolder?: Maybe<Scalars["String"]>;
  customer?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
}

export interface CampaignWhere {
  AND?: Maybe<Array<CampaignWhere>>;
  OR?: Maybe<Array<CampaignWhere>>;
  analytics?: Maybe<CampaignAnalyticWhere>;
  analyticsAggregate?: Maybe<CampaignAnalyticsAggregateInput>;
  analyticsConnection?: Maybe<CampaignAnalyticsConnectionWhere>;
  analyticsConnection_NOT?: Maybe<CampaignAnalyticsConnectionWhere>;
  analytics_NOT?: Maybe<CampaignAnalyticWhere>;
  assetFolder?: Maybe<Scalars["String"]>;
  assetFolder_CONTAINS?: Maybe<Scalars["String"]>;
  assetFolder_ENDS_WITH?: Maybe<Scalars["String"]>;
  assetFolder_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  assetFolder_NOT?: Maybe<Scalars["String"]>;
  assetFolder_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  assetFolder_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  assetFolder_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  assetFolder_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  assetFolder_STARTS_WITH?: Maybe<Scalars["String"]>;
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
}

export interface ClusterConnectInput {
  displays?: Maybe<Array<ClusterDisplaysConnectFieldInput>>;
  schedule?: Maybe<Array<ClusterScheduleConnectFieldInput>>;
  tiers?: Maybe<Array<ClusterTiersConnectFieldInput>>;
}

export interface ClusterConnectWhere {
  node: ClusterWhere;
}

export interface ClusterCreateInput {
  displays?: Maybe<ClusterDisplaysFieldInput>;
  label?: Maybe<Scalars["String"]>;
  schedule?: Maybe<ClusterScheduleFieldInput>;
  tiers?: Maybe<ClusterTiersFieldInput>;
}

export interface ClusterDeleteInput {
  displays?: Maybe<Array<ClusterDisplaysDeleteFieldInput>>;
  schedule?: Maybe<Array<ClusterScheduleDeleteFieldInput>>;
  tiers?: Maybe<Array<ClusterTiersDeleteFieldInput>>;
}

export interface ClusterDisconnectInput {
  displays?: Maybe<Array<ClusterDisplaysDisconnectFieldInput>>;
  schedule?: Maybe<Array<ClusterScheduleDisconnectFieldInput>>;
  tiers?: Maybe<Array<ClusterTiersDisconnectFieldInput>>;
}

export interface ClusterDisplaysAggregateInput {
  AND?: Maybe<Array<ClusterDisplaysAggregateInput>>;
  OR?: Maybe<Array<ClusterDisplaysAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ClusterDisplaysNodeAggregationWhereInput>;
}

export interface ClusterDisplaysConnectFieldInput {
  connect?: Maybe<Array<DisplayConnectInput>>;
  where?: Maybe<DisplayConnectWhere>;
}

export interface ClusterDisplaysConnectionSort {
  node?: Maybe<DisplaySort>;
}

export interface ClusterDisplaysConnectionWhere {
  AND?: Maybe<Array<ClusterDisplaysConnectionWhere>>;
  OR?: Maybe<Array<ClusterDisplaysConnectionWhere>>;
  node?: Maybe<DisplayWhere>;
  node_NOT?: Maybe<DisplayWhere>;
}

export interface ClusterDisplaysCreateFieldInput {
  node: DisplayCreateInput;
}

export interface ClusterDisplaysDeleteFieldInput {
  delete?: Maybe<DisplayDeleteInput>;
  where?: Maybe<ClusterDisplaysConnectionWhere>;
}

export interface ClusterDisplaysDisconnectFieldInput {
  disconnect?: Maybe<DisplayDisconnectInput>;
  where?: Maybe<ClusterDisplaysConnectionWhere>;
}

export interface ClusterDisplaysFieldInput {
  connect?: Maybe<Array<ClusterDisplaysConnectFieldInput>>;
  create?: Maybe<Array<ClusterDisplaysCreateFieldInput>>;
}

export interface ClusterDisplaysNodeAggregationWhereInput {
  AND?: Maybe<Array<ClusterDisplaysNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ClusterDisplaysNodeAggregationWhereInput>>;
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
  provisionedAt_EQUAL?: Maybe<Scalars["DateTime"]>;
  provisionedAt_GT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_GTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_LT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_LTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_GT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_LT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_GT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_LT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_LTE?: Maybe<Scalars["DateTime"]>;
}

export interface ClusterDisplaysUpdateConnectionInput {
  node?: Maybe<DisplayUpdateInput>;
}

export interface ClusterDisplaysUpdateFieldInput {
  connect?: Maybe<Array<ClusterDisplaysConnectFieldInput>>;
  create?: Maybe<Array<ClusterDisplaysCreateFieldInput>>;
  delete?: Maybe<Array<ClusterDisplaysDeleteFieldInput>>;
  disconnect?: Maybe<Array<ClusterDisplaysDisconnectFieldInput>>;
  update?: Maybe<ClusterDisplaysUpdateConnectionInput>;
  where?: Maybe<ClusterDisplaysConnectionWhere>;
}

export interface ClusterOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more ClusterSort objects to sort Clusters by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ClusterSort>>>;
}

export interface ClusterRelationInput {
  displays?: Maybe<Array<ClusterDisplaysCreateFieldInput>>;
  schedule?: Maybe<Array<ClusterScheduleCreateFieldInput>>;
  tiers?: Maybe<Array<ClusterTiersCreateFieldInput>>;
}

export interface ClusterScheduleAggregateInput {
  AND?: Maybe<Array<ClusterScheduleAggregateInput>>;
  OR?: Maybe<Array<ClusterScheduleAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ClusterScheduleNodeAggregationWhereInput>;
}

export interface ClusterScheduleCampaignAggregateInput {
  AND?: Maybe<Array<ClusterScheduleCampaignAggregateInput>>;
  OR?: Maybe<Array<ClusterScheduleCampaignAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ClusterScheduleCampaignNodeAggregationWhereInput>;
}

export interface ClusterScheduleCampaignConnectFieldInput {
  connect?: Maybe<CampaignConnectInput>;
  where?: Maybe<CampaignConnectWhere>;
}

export interface ClusterScheduleCampaignConnectionSort {
  node?: Maybe<CampaignSort>;
}

export interface ClusterScheduleCampaignConnectionWhere {
  AND?: Maybe<Array<ClusterScheduleCampaignConnectionWhere>>;
  OR?: Maybe<Array<ClusterScheduleCampaignConnectionWhere>>;
  node?: Maybe<CampaignWhere>;
  node_NOT?: Maybe<CampaignWhere>;
}

export interface ClusterScheduleCampaignCreateFieldInput {
  node: CampaignCreateInput;
}

export interface ClusterScheduleCampaignDeleteFieldInput {
  delete?: Maybe<CampaignDeleteInput>;
  where?: Maybe<ClusterScheduleCampaignConnectionWhere>;
}

export interface ClusterScheduleCampaignDisconnectFieldInput {
  disconnect?: Maybe<CampaignDisconnectInput>;
  where?: Maybe<ClusterScheduleCampaignConnectionWhere>;
}

export interface ClusterScheduleCampaignFieldInput {
  connect?: Maybe<ClusterScheduleCampaignConnectFieldInput>;
  create?: Maybe<ClusterScheduleCampaignCreateFieldInput>;
}

export interface ClusterScheduleCampaignNodeAggregationWhereInput {
  AND?: Maybe<Array<ClusterScheduleCampaignNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ClusterScheduleCampaignNodeAggregationWhereInput>>;
  assetFolder_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  assetFolder_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  assetFolder_EQUAL?: Maybe<Scalars["String"]>;
  assetFolder_GT?: Maybe<Scalars["Int"]>;
  assetFolder_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_GT?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_LT?: Maybe<Scalars["Int"]>;
  assetFolder_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  assetFolder_LT?: Maybe<Scalars["Int"]>;
  assetFolder_LTE?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  assetFolder_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
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
}

export interface ClusterScheduleCampaignUpdateConnectionInput {
  node?: Maybe<CampaignUpdateInput>;
}

export interface ClusterScheduleCampaignUpdateFieldInput {
  connect?: Maybe<ClusterScheduleCampaignConnectFieldInput>;
  create?: Maybe<ClusterScheduleCampaignCreateFieldInput>;
  delete?: Maybe<ClusterScheduleCampaignDeleteFieldInput>;
  disconnect?: Maybe<ClusterScheduleCampaignDisconnectFieldInput>;
  update?: Maybe<ClusterScheduleCampaignUpdateConnectionInput>;
  where?: Maybe<ClusterScheduleCampaignConnectionWhere>;
}

export interface ClusterScheduleClusterAggregateInput {
  AND?: Maybe<Array<ClusterScheduleClusterAggregateInput>>;
  OR?: Maybe<Array<ClusterScheduleClusterAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ClusterScheduleClusterNodeAggregationWhereInput>;
}

export interface ClusterScheduleClusterConnectFieldInput {
  connect?: Maybe<ClusterConnectInput>;
  where?: Maybe<ClusterConnectWhere>;
}

export interface ClusterScheduleClusterConnectionSort {
  node?: Maybe<ClusterSort>;
}

export interface ClusterScheduleClusterConnectionWhere {
  AND?: Maybe<Array<ClusterScheduleClusterConnectionWhere>>;
  OR?: Maybe<Array<ClusterScheduleClusterConnectionWhere>>;
  node?: Maybe<ClusterWhere>;
  node_NOT?: Maybe<ClusterWhere>;
}

export interface ClusterScheduleClusterCreateFieldInput {
  node: ClusterCreateInput;
}

export interface ClusterScheduleClusterDeleteFieldInput {
  delete?: Maybe<ClusterDeleteInput>;
  where?: Maybe<ClusterScheduleClusterConnectionWhere>;
}

export interface ClusterScheduleClusterDisconnectFieldInput {
  disconnect?: Maybe<ClusterDisconnectInput>;
  where?: Maybe<ClusterScheduleClusterConnectionWhere>;
}

export interface ClusterScheduleClusterFieldInput {
  connect?: Maybe<ClusterScheduleClusterConnectFieldInput>;
  create?: Maybe<ClusterScheduleClusterCreateFieldInput>;
}

export interface ClusterScheduleClusterNodeAggregationWhereInput {
  AND?: Maybe<Array<ClusterScheduleClusterNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ClusterScheduleClusterNodeAggregationWhereInput>>;
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

export interface ClusterScheduleClusterUpdateConnectionInput {
  node?: Maybe<ClusterUpdateInput>;
}

export interface ClusterScheduleClusterUpdateFieldInput {
  connect?: Maybe<ClusterScheduleClusterConnectFieldInput>;
  create?: Maybe<ClusterScheduleClusterCreateFieldInput>;
  delete?: Maybe<ClusterScheduleClusterDeleteFieldInput>;
  disconnect?: Maybe<ClusterScheduleClusterDisconnectFieldInput>;
  update?: Maybe<ClusterScheduleClusterUpdateConnectionInput>;
  where?: Maybe<ClusterScheduleClusterConnectionWhere>;
}

export interface ClusterScheduleConnectFieldInput {
  connect?: Maybe<Array<ClusterScheduleConnectInput>>;
  where?: Maybe<ClusterScheduleConnectWhere>;
}

export interface ClusterScheduleConnectInput {
  campaign?: Maybe<ClusterScheduleCampaignConnectFieldInput>;
  cluster?: Maybe<ClusterScheduleClusterConnectFieldInput>;
  tier?: Maybe<ClusterScheduleTierConnectFieldInput>;
}

export interface ClusterScheduleConnectWhere {
  node: ClusterScheduleWhere;
}

export interface ClusterScheduleConnectionSort {
  node?: Maybe<ClusterScheduleSort>;
}

export interface ClusterScheduleConnectionWhere {
  AND?: Maybe<Array<ClusterScheduleConnectionWhere>>;
  OR?: Maybe<Array<ClusterScheduleConnectionWhere>>;
  node?: Maybe<ClusterScheduleWhere>;
  node_NOT?: Maybe<ClusterScheduleWhere>;
}

export interface ClusterScheduleCreateFieldInput {
  node: ClusterScheduleCreateInput;
}

export interface ClusterScheduleCreateInput {
  campaign?: Maybe<ClusterScheduleCampaignFieldInput>;
  cluster?: Maybe<ClusterScheduleClusterFieldInput>;
  endDate?: Maybe<Scalars["DateTime"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  tier?: Maybe<ClusterScheduleTierFieldInput>;
}

export interface ClusterScheduleDeleteFieldInput {
  delete?: Maybe<ClusterScheduleDeleteInput>;
  where?: Maybe<ClusterScheduleConnectionWhere>;
}

export interface ClusterScheduleDeleteInput {
  campaign?: Maybe<ClusterScheduleCampaignDeleteFieldInput>;
  cluster?: Maybe<ClusterScheduleClusterDeleteFieldInput>;
  tier?: Maybe<ClusterScheduleTierDeleteFieldInput>;
}

export interface ClusterScheduleDisconnectFieldInput {
  disconnect?: Maybe<ClusterScheduleDisconnectInput>;
  where?: Maybe<ClusterScheduleConnectionWhere>;
}

export interface ClusterScheduleDisconnectInput {
  campaign?: Maybe<ClusterScheduleCampaignDisconnectFieldInput>;
  cluster?: Maybe<ClusterScheduleClusterDisconnectFieldInput>;
  tier?: Maybe<ClusterScheduleTierDisconnectFieldInput>;
}

export interface ClusterScheduleFieldInput {
  connect?: Maybe<Array<ClusterScheduleConnectFieldInput>>;
  create?: Maybe<Array<ClusterScheduleCreateFieldInput>>;
}

export interface ClusterScheduleNodeAggregationWhereInput {
  AND?: Maybe<Array<ClusterScheduleNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ClusterScheduleNodeAggregationWhereInput>>;
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

export interface ClusterScheduleOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more ClusterScheduleSort objects to sort ClusterSchedules by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ClusterScheduleSort>>>;
}

export interface ClusterScheduleRelationInput {
  campaign?: Maybe<ClusterScheduleCampaignCreateFieldInput>;
  cluster?: Maybe<ClusterScheduleClusterCreateFieldInput>;
  tier?: Maybe<ClusterScheduleTierCreateFieldInput>;
}

/** Fields to sort ClusterSchedules by. The order in which sorts are applied is not guaranteed when specifying many fields in one ClusterScheduleSort object. */
export interface ClusterScheduleSort {
  endDate?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  startDate?: Maybe<SortDirection>;
}

export interface ClusterScheduleTierAggregateInput {
  AND?: Maybe<Array<ClusterScheduleTierAggregateInput>>;
  OR?: Maybe<Array<ClusterScheduleTierAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ClusterScheduleTierNodeAggregationWhereInput>;
}

export interface ClusterScheduleTierConnectFieldInput {
  connect?: Maybe<ClusterTierConnectInput>;
  where?: Maybe<ClusterTierConnectWhere>;
}

export interface ClusterScheduleTierConnectionSort {
  node?: Maybe<ClusterTierSort>;
}

export interface ClusterScheduleTierConnectionWhere {
  AND?: Maybe<Array<ClusterScheduleTierConnectionWhere>>;
  OR?: Maybe<Array<ClusterScheduleTierConnectionWhere>>;
  node?: Maybe<ClusterTierWhere>;
  node_NOT?: Maybe<ClusterTierWhere>;
}

export interface ClusterScheduleTierCreateFieldInput {
  node: ClusterTierCreateInput;
}

export interface ClusterScheduleTierDeleteFieldInput {
  delete?: Maybe<ClusterTierDeleteInput>;
  where?: Maybe<ClusterScheduleTierConnectionWhere>;
}

export interface ClusterScheduleTierDisconnectFieldInput {
  disconnect?: Maybe<ClusterTierDisconnectInput>;
  where?: Maybe<ClusterScheduleTierConnectionWhere>;
}

export interface ClusterScheduleTierFieldInput {
  connect?: Maybe<ClusterScheduleTierConnectFieldInput>;
  create?: Maybe<ClusterScheduleTierCreateFieldInput>;
}

export interface ClusterScheduleTierNodeAggregationWhereInput {
  AND?: Maybe<Array<ClusterScheduleTierNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ClusterScheduleTierNodeAggregationWhereInput>>;
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
  percent_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  percent_EQUAL?: Maybe<Scalars["Float"]>;
  percent_GT?: Maybe<Scalars["Float"]>;
  percent_GTE?: Maybe<Scalars["Float"]>;
  percent_LT?: Maybe<Scalars["Float"]>;
  percent_LTE?: Maybe<Scalars["Float"]>;
  percent_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  percent_MAX_GT?: Maybe<Scalars["Float"]>;
  percent_MAX_GTE?: Maybe<Scalars["Float"]>;
  percent_MAX_LT?: Maybe<Scalars["Float"]>;
  percent_MAX_LTE?: Maybe<Scalars["Float"]>;
  percent_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  percent_MIN_GT?: Maybe<Scalars["Float"]>;
  percent_MIN_GTE?: Maybe<Scalars["Float"]>;
  percent_MIN_LT?: Maybe<Scalars["Float"]>;
  percent_MIN_LTE?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  slots_EQUAL?: Maybe<Scalars["Float"]>;
  slots_GT?: Maybe<Scalars["Float"]>;
  slots_GTE?: Maybe<Scalars["Float"]>;
  slots_LT?: Maybe<Scalars["Float"]>;
  slots_LTE?: Maybe<Scalars["Float"]>;
  slots_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  slots_MAX_GT?: Maybe<Scalars["Float"]>;
  slots_MAX_GTE?: Maybe<Scalars["Float"]>;
  slots_MAX_LT?: Maybe<Scalars["Float"]>;
  slots_MAX_LTE?: Maybe<Scalars["Float"]>;
  slots_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  slots_MIN_GT?: Maybe<Scalars["Float"]>;
  slots_MIN_GTE?: Maybe<Scalars["Float"]>;
  slots_MIN_LT?: Maybe<Scalars["Float"]>;
  slots_MIN_LTE?: Maybe<Scalars["Float"]>;
}

export interface ClusterScheduleTierUpdateConnectionInput {
  node?: Maybe<ClusterTierUpdateInput>;
}

export interface ClusterScheduleTierUpdateFieldInput {
  connect?: Maybe<ClusterScheduleTierConnectFieldInput>;
  create?: Maybe<ClusterScheduleTierCreateFieldInput>;
  delete?: Maybe<ClusterScheduleTierDeleteFieldInput>;
  disconnect?: Maybe<ClusterScheduleTierDisconnectFieldInput>;
  update?: Maybe<ClusterScheduleTierUpdateConnectionInput>;
  where?: Maybe<ClusterScheduleTierConnectionWhere>;
}

export interface ClusterScheduleUpdateConnectionInput {
  node?: Maybe<ClusterScheduleUpdateInput>;
}

export interface ClusterScheduleUpdateFieldInput {
  connect?: Maybe<Array<ClusterScheduleConnectFieldInput>>;
  create?: Maybe<Array<ClusterScheduleCreateFieldInput>>;
  delete?: Maybe<Array<ClusterScheduleDeleteFieldInput>>;
  disconnect?: Maybe<Array<ClusterScheduleDisconnectFieldInput>>;
  update?: Maybe<ClusterScheduleUpdateConnectionInput>;
  where?: Maybe<ClusterScheduleConnectionWhere>;
}

export interface ClusterScheduleUpdateInput {
  campaign?: Maybe<ClusterScheduleCampaignUpdateFieldInput>;
  cluster?: Maybe<ClusterScheduleClusterUpdateFieldInput>;
  endDate?: Maybe<Scalars["DateTime"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  tier?: Maybe<ClusterScheduleTierUpdateFieldInput>;
}

export interface ClusterScheduleWhere {
  AND?: Maybe<Array<ClusterScheduleWhere>>;
  OR?: Maybe<Array<ClusterScheduleWhere>>;
  campaign?: Maybe<CampaignWhere>;
  campaignAggregate?: Maybe<ClusterScheduleCampaignAggregateInput>;
  campaignConnection?: Maybe<ClusterScheduleCampaignConnectionWhere>;
  campaignConnection_NOT?: Maybe<ClusterScheduleCampaignConnectionWhere>;
  campaign_NOT?: Maybe<CampaignWhere>;
  cluster?: Maybe<ClusterWhere>;
  clusterAggregate?: Maybe<ClusterScheduleClusterAggregateInput>;
  clusterConnection?: Maybe<ClusterScheduleClusterConnectionWhere>;
  clusterConnection_NOT?: Maybe<ClusterScheduleClusterConnectionWhere>;
  cluster_NOT?: Maybe<ClusterWhere>;
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
  startDate?: Maybe<Scalars["DateTime"]>;
  startDate_GT?: Maybe<Scalars["DateTime"]>;
  startDate_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  startDate_LT?: Maybe<Scalars["DateTime"]>;
  startDate_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_NOT?: Maybe<Scalars["DateTime"]>;
  startDate_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  tier?: Maybe<ClusterTierWhere>;
  tierAggregate?: Maybe<ClusterScheduleTierAggregateInput>;
  tierConnection?: Maybe<ClusterScheduleTierConnectionWhere>;
  tierConnection_NOT?: Maybe<ClusterScheduleTierConnectionWhere>;
  tier_NOT?: Maybe<ClusterTierWhere>;
}

/** Fields to sort Clusters by. The order in which sorts are applied is not guaranteed when specifying many fields in one ClusterSort object. */
export interface ClusterSort {
  id?: Maybe<SortDirection>;
  label?: Maybe<SortDirection>;
}

export interface ClusterTierClusterAggregateInput {
  AND?: Maybe<Array<ClusterTierClusterAggregateInput>>;
  OR?: Maybe<Array<ClusterTierClusterAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ClusterTierClusterNodeAggregationWhereInput>;
}

export interface ClusterTierClusterConnectFieldInput {
  connect?: Maybe<ClusterConnectInput>;
  where?: Maybe<ClusterConnectWhere>;
}

export interface ClusterTierClusterConnectionSort {
  node?: Maybe<ClusterSort>;
}

export interface ClusterTierClusterConnectionWhere {
  AND?: Maybe<Array<ClusterTierClusterConnectionWhere>>;
  OR?: Maybe<Array<ClusterTierClusterConnectionWhere>>;
  node?: Maybe<ClusterWhere>;
  node_NOT?: Maybe<ClusterWhere>;
}

export interface ClusterTierClusterCreateFieldInput {
  node: ClusterCreateInput;
}

export interface ClusterTierClusterDeleteFieldInput {
  delete?: Maybe<ClusterDeleteInput>;
  where?: Maybe<ClusterTierClusterConnectionWhere>;
}

export interface ClusterTierClusterDisconnectFieldInput {
  disconnect?: Maybe<ClusterDisconnectInput>;
  where?: Maybe<ClusterTierClusterConnectionWhere>;
}

export interface ClusterTierClusterFieldInput {
  connect?: Maybe<ClusterTierClusterConnectFieldInput>;
  create?: Maybe<ClusterTierClusterCreateFieldInput>;
}

export interface ClusterTierClusterNodeAggregationWhereInput {
  AND?: Maybe<Array<ClusterTierClusterNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ClusterTierClusterNodeAggregationWhereInput>>;
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

export interface ClusterTierClusterUpdateConnectionInput {
  node?: Maybe<ClusterUpdateInput>;
}

export interface ClusterTierClusterUpdateFieldInput {
  connect?: Maybe<ClusterTierClusterConnectFieldInput>;
  create?: Maybe<ClusterTierClusterCreateFieldInput>;
  delete?: Maybe<ClusterTierClusterDeleteFieldInput>;
  disconnect?: Maybe<ClusterTierClusterDisconnectFieldInput>;
  update?: Maybe<ClusterTierClusterUpdateConnectionInput>;
  where?: Maybe<ClusterTierClusterConnectionWhere>;
}

export interface ClusterTierConnectInput {
  cluster?: Maybe<ClusterTierClusterConnectFieldInput>;
}

export interface ClusterTierConnectWhere {
  node: ClusterTierWhere;
}

export interface ClusterTierCreateInput {
  cluster?: Maybe<ClusterTierClusterFieldInput>;
  name?: Maybe<Scalars["String"]>;
  percent?: Maybe<Scalars["Float"]>;
  slots?: Maybe<Scalars["Float"]>;
}

export interface ClusterTierDeleteInput {
  cluster?: Maybe<ClusterTierClusterDeleteFieldInput>;
}

export interface ClusterTierDisconnectInput {
  cluster?: Maybe<ClusterTierClusterDisconnectFieldInput>;
}

export interface ClusterTierOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more ClusterTierSort objects to sort ClusterTiers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ClusterTierSort>>>;
}

export interface ClusterTierRelationInput {
  cluster?: Maybe<ClusterTierClusterCreateFieldInput>;
}

/** Fields to sort ClusterTiers by. The order in which sorts are applied is not guaranteed when specifying many fields in one ClusterTierSort object. */
export interface ClusterTierSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  percent?: Maybe<SortDirection>;
  slots?: Maybe<SortDirection>;
}

export interface ClusterTierUpdateInput {
  cluster?: Maybe<ClusterTierClusterUpdateFieldInput>;
  name?: Maybe<Scalars["String"]>;
  percent?: Maybe<Scalars["Float"]>;
  slots?: Maybe<Scalars["Float"]>;
}

export interface ClusterTierWhere {
  AND?: Maybe<Array<ClusterTierWhere>>;
  OR?: Maybe<Array<ClusterTierWhere>>;
  cluster?: Maybe<ClusterWhere>;
  clusterAggregate?: Maybe<ClusterTierClusterAggregateInput>;
  clusterConnection?: Maybe<ClusterTierClusterConnectionWhere>;
  clusterConnection_NOT?: Maybe<ClusterTierClusterConnectionWhere>;
  cluster_NOT?: Maybe<ClusterWhere>;
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
  percent?: Maybe<Scalars["Float"]>;
  percent_GT?: Maybe<Scalars["Float"]>;
  percent_GTE?: Maybe<Scalars["Float"]>;
  percent_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  percent_LT?: Maybe<Scalars["Float"]>;
  percent_LTE?: Maybe<Scalars["Float"]>;
  percent_NOT?: Maybe<Scalars["Float"]>;
  percent_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  slots?: Maybe<Scalars["Float"]>;
  slots_GT?: Maybe<Scalars["Float"]>;
  slots_GTE?: Maybe<Scalars["Float"]>;
  slots_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  slots_LT?: Maybe<Scalars["Float"]>;
  slots_LTE?: Maybe<Scalars["Float"]>;
  slots_NOT?: Maybe<Scalars["Float"]>;
  slots_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
}

export interface ClusterTiersAggregateInput {
  AND?: Maybe<Array<ClusterTiersAggregateInput>>;
  OR?: Maybe<Array<ClusterTiersAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ClusterTiersNodeAggregationWhereInput>;
}

export interface ClusterTiersConnectFieldInput {
  connect?: Maybe<Array<ClusterTierConnectInput>>;
  where?: Maybe<ClusterTierConnectWhere>;
}

export interface ClusterTiersConnectionSort {
  node?: Maybe<ClusterTierSort>;
}

export interface ClusterTiersConnectionWhere {
  AND?: Maybe<Array<ClusterTiersConnectionWhere>>;
  OR?: Maybe<Array<ClusterTiersConnectionWhere>>;
  node?: Maybe<ClusterTierWhere>;
  node_NOT?: Maybe<ClusterTierWhere>;
}

export interface ClusterTiersCreateFieldInput {
  node: ClusterTierCreateInput;
}

export interface ClusterTiersDeleteFieldInput {
  delete?: Maybe<ClusterTierDeleteInput>;
  where?: Maybe<ClusterTiersConnectionWhere>;
}

export interface ClusterTiersDisconnectFieldInput {
  disconnect?: Maybe<ClusterTierDisconnectInput>;
  where?: Maybe<ClusterTiersConnectionWhere>;
}

export interface ClusterTiersFieldInput {
  connect?: Maybe<Array<ClusterTiersConnectFieldInput>>;
  create?: Maybe<Array<ClusterTiersCreateFieldInput>>;
}

export interface ClusterTiersNodeAggregationWhereInput {
  AND?: Maybe<Array<ClusterTiersNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ClusterTiersNodeAggregationWhereInput>>;
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
  percent_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  percent_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  percent_EQUAL?: Maybe<Scalars["Float"]>;
  percent_GT?: Maybe<Scalars["Float"]>;
  percent_GTE?: Maybe<Scalars["Float"]>;
  percent_LT?: Maybe<Scalars["Float"]>;
  percent_LTE?: Maybe<Scalars["Float"]>;
  percent_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  percent_MAX_GT?: Maybe<Scalars["Float"]>;
  percent_MAX_GTE?: Maybe<Scalars["Float"]>;
  percent_MAX_LT?: Maybe<Scalars["Float"]>;
  percent_MAX_LTE?: Maybe<Scalars["Float"]>;
  percent_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  percent_MIN_GT?: Maybe<Scalars["Float"]>;
  percent_MIN_GTE?: Maybe<Scalars["Float"]>;
  percent_MIN_LT?: Maybe<Scalars["Float"]>;
  percent_MIN_LTE?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  slots_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  slots_EQUAL?: Maybe<Scalars["Float"]>;
  slots_GT?: Maybe<Scalars["Float"]>;
  slots_GTE?: Maybe<Scalars["Float"]>;
  slots_LT?: Maybe<Scalars["Float"]>;
  slots_LTE?: Maybe<Scalars["Float"]>;
  slots_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  slots_MAX_GT?: Maybe<Scalars["Float"]>;
  slots_MAX_GTE?: Maybe<Scalars["Float"]>;
  slots_MAX_LT?: Maybe<Scalars["Float"]>;
  slots_MAX_LTE?: Maybe<Scalars["Float"]>;
  slots_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  slots_MIN_GT?: Maybe<Scalars["Float"]>;
  slots_MIN_GTE?: Maybe<Scalars["Float"]>;
  slots_MIN_LT?: Maybe<Scalars["Float"]>;
  slots_MIN_LTE?: Maybe<Scalars["Float"]>;
}

export interface ClusterTiersUpdateConnectionInput {
  node?: Maybe<ClusterTierUpdateInput>;
}

export interface ClusterTiersUpdateFieldInput {
  connect?: Maybe<Array<ClusterTiersConnectFieldInput>>;
  create?: Maybe<Array<ClusterTiersCreateFieldInput>>;
  delete?: Maybe<Array<ClusterTiersDeleteFieldInput>>;
  disconnect?: Maybe<Array<ClusterTiersDisconnectFieldInput>>;
  update?: Maybe<ClusterTiersUpdateConnectionInput>;
  where?: Maybe<ClusterTiersConnectionWhere>;
}

export interface ClusterUpdateInput {
  displays?: Maybe<Array<ClusterDisplaysUpdateFieldInput>>;
  label?: Maybe<Scalars["String"]>;
  schedule?: Maybe<Array<ClusterScheduleUpdateFieldInput>>;
  tiers?: Maybe<Array<ClusterTiersUpdateFieldInput>>;
}

export interface ClusterWhere {
  AND?: Maybe<Array<ClusterWhere>>;
  OR?: Maybe<Array<ClusterWhere>>;
  displays?: Maybe<DisplayWhere>;
  displaysAggregate?: Maybe<ClusterDisplaysAggregateInput>;
  displaysConnection?: Maybe<ClusterDisplaysConnectionWhere>;
  displaysConnection_NOT?: Maybe<ClusterDisplaysConnectionWhere>;
  displays_NOT?: Maybe<DisplayWhere>;
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
  schedule?: Maybe<ClusterScheduleWhere>;
  scheduleAggregate?: Maybe<ClusterScheduleAggregateInput>;
  scheduleConnection?: Maybe<ClusterScheduleConnectionWhere>;
  scheduleConnection_NOT?: Maybe<ClusterScheduleConnectionWhere>;
  schedule_NOT?: Maybe<ClusterScheduleWhere>;
  tiers?: Maybe<ClusterTierWhere>;
  tiersAggregate?: Maybe<ClusterTiersAggregateInput>;
  tiersConnection?: Maybe<ClusterTiersConnectionWhere>;
  tiersConnection_NOT?: Maybe<ClusterTiersConnectionWhere>;
  tiers_NOT?: Maybe<ClusterTierWhere>;
}

export interface ComputerConnectInput {
  display?: Maybe<ComputerDisplayConnectFieldInput>;
}

export interface ComputerConnectWhere {
  node: ComputerWhere;
}

export interface ComputerCreateInput {
  display?: Maybe<ComputerDisplayFieldInput>;
  label?: Maybe<Scalars["String"]>;
  os?: Maybe<Scalars["String"]>;
}

export interface ComputerDeleteInput {
  display?: Maybe<ComputerDisplayDeleteFieldInput>;
}

export interface ComputerDisconnectInput {
  display?: Maybe<ComputerDisplayDisconnectFieldInput>;
}

export interface ComputerDisplayAggregateInput {
  AND?: Maybe<Array<ComputerDisplayAggregateInput>>;
  OR?: Maybe<Array<ComputerDisplayAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ComputerDisplayNodeAggregationWhereInput>;
}

export interface ComputerDisplayConnectFieldInput {
  connect?: Maybe<DisplayConnectInput>;
  where?: Maybe<DisplayConnectWhere>;
}

export interface ComputerDisplayConnectionSort {
  node?: Maybe<DisplaySort>;
}

export interface ComputerDisplayConnectionWhere {
  AND?: Maybe<Array<ComputerDisplayConnectionWhere>>;
  OR?: Maybe<Array<ComputerDisplayConnectionWhere>>;
  node?: Maybe<DisplayWhere>;
  node_NOT?: Maybe<DisplayWhere>;
}

export interface ComputerDisplayCreateFieldInput {
  node: DisplayCreateInput;
}

export interface ComputerDisplayDeleteFieldInput {
  delete?: Maybe<DisplayDeleteInput>;
  where?: Maybe<ComputerDisplayConnectionWhere>;
}

export interface ComputerDisplayDisconnectFieldInput {
  disconnect?: Maybe<DisplayDisconnectInput>;
  where?: Maybe<ComputerDisplayConnectionWhere>;
}

export interface ComputerDisplayFieldInput {
  connect?: Maybe<ComputerDisplayConnectFieldInput>;
  create?: Maybe<ComputerDisplayCreateFieldInput>;
}

export interface ComputerDisplayNodeAggregationWhereInput {
  AND?: Maybe<Array<ComputerDisplayNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ComputerDisplayNodeAggregationWhereInput>>;
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
  provisionedAt_EQUAL?: Maybe<Scalars["DateTime"]>;
  provisionedAt_GT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_GTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_LT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_LTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_GT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_LT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_GT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_LT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_LTE?: Maybe<Scalars["DateTime"]>;
}

export interface ComputerDisplayUpdateConnectionInput {
  node?: Maybe<DisplayUpdateInput>;
}

export interface ComputerDisplayUpdateFieldInput {
  connect?: Maybe<ComputerDisplayConnectFieldInput>;
  create?: Maybe<ComputerDisplayCreateFieldInput>;
  delete?: Maybe<ComputerDisplayDeleteFieldInput>;
  disconnect?: Maybe<ComputerDisplayDisconnectFieldInput>;
  update?: Maybe<ComputerDisplayUpdateConnectionInput>;
  where?: Maybe<ComputerDisplayConnectionWhere>;
}

export interface ComputerOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more ComputerSort objects to sort Computers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ComputerSort>>>;
}

export interface ComputerRelationInput {
  display?: Maybe<ComputerDisplayCreateFieldInput>;
}

/** Fields to sort Computers by. The order in which sorts are applied is not guaranteed when specifying many fields in one ComputerSort object. */
export interface ComputerSort {
  id?: Maybe<SortDirection>;
  label?: Maybe<SortDirection>;
  os?: Maybe<SortDirection>;
}

export interface ComputerUpdateInput {
  display?: Maybe<ComputerDisplayUpdateFieldInput>;
  label?: Maybe<Scalars["String"]>;
  os?: Maybe<Scalars["String"]>;
}

export interface ComputerWhere {
  AND?: Maybe<Array<ComputerWhere>>;
  OR?: Maybe<Array<ComputerWhere>>;
  display?: Maybe<DisplayWhere>;
  displayAggregate?: Maybe<ComputerDisplayAggregateInput>;
  displayConnection?: Maybe<ComputerDisplayConnectionWhere>;
  displayConnection_NOT?: Maybe<ComputerDisplayConnectionWhere>;
  display_NOT?: Maybe<DisplayWhere>;
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
  os?: Maybe<Scalars["String"]>;
  os_CONTAINS?: Maybe<Scalars["String"]>;
  os_ENDS_WITH?: Maybe<Scalars["String"]>;
  os_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  os_NOT?: Maybe<Scalars["String"]>;
  os_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  os_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  os_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  os_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  os_STARTS_WITH?: Maybe<Scalars["String"]>;
}

export interface DisplayClusterAggregateInput {
  AND?: Maybe<Array<DisplayClusterAggregateInput>>;
  OR?: Maybe<Array<DisplayClusterAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<DisplayClusterNodeAggregationWhereInput>;
}

export interface DisplayClusterConnectFieldInput {
  connect?: Maybe<ClusterConnectInput>;
  where?: Maybe<ClusterConnectWhere>;
}

export interface DisplayClusterConnectionSort {
  node?: Maybe<ClusterSort>;
}

export interface DisplayClusterConnectionWhere {
  AND?: Maybe<Array<DisplayClusterConnectionWhere>>;
  OR?: Maybe<Array<DisplayClusterConnectionWhere>>;
  node?: Maybe<ClusterWhere>;
  node_NOT?: Maybe<ClusterWhere>;
}

export interface DisplayClusterCreateFieldInput {
  node: ClusterCreateInput;
}

export interface DisplayClusterDeleteFieldInput {
  delete?: Maybe<ClusterDeleteInput>;
  where?: Maybe<DisplayClusterConnectionWhere>;
}

export interface DisplayClusterDisconnectFieldInput {
  disconnect?: Maybe<ClusterDisconnectInput>;
  where?: Maybe<DisplayClusterConnectionWhere>;
}

export interface DisplayClusterFieldInput {
  connect?: Maybe<DisplayClusterConnectFieldInput>;
  create?: Maybe<DisplayClusterCreateFieldInput>;
}

export interface DisplayClusterNodeAggregationWhereInput {
  AND?: Maybe<Array<DisplayClusterNodeAggregationWhereInput>>;
  OR?: Maybe<Array<DisplayClusterNodeAggregationWhereInput>>;
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

export interface DisplayClusterUpdateConnectionInput {
  node?: Maybe<ClusterUpdateInput>;
}

export interface DisplayClusterUpdateFieldInput {
  connect?: Maybe<DisplayClusterConnectFieldInput>;
  create?: Maybe<DisplayClusterCreateFieldInput>;
  delete?: Maybe<DisplayClusterDeleteFieldInput>;
  disconnect?: Maybe<DisplayClusterDisconnectFieldInput>;
  update?: Maybe<DisplayClusterUpdateConnectionInput>;
  where?: Maybe<DisplayClusterConnectionWhere>;
}

export interface DisplayComputersAggregateInput {
  AND?: Maybe<Array<DisplayComputersAggregateInput>>;
  OR?: Maybe<Array<DisplayComputersAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<DisplayComputersNodeAggregationWhereInput>;
}

export interface DisplayComputersConnectFieldInput {
  connect?: Maybe<Array<ComputerConnectInput>>;
  where?: Maybe<ComputerConnectWhere>;
}

export interface DisplayComputersConnectionSort {
  node?: Maybe<ComputerSort>;
}

export interface DisplayComputersConnectionWhere {
  AND?: Maybe<Array<DisplayComputersConnectionWhere>>;
  OR?: Maybe<Array<DisplayComputersConnectionWhere>>;
  node?: Maybe<ComputerWhere>;
  node_NOT?: Maybe<ComputerWhere>;
}

export interface DisplayComputersCreateFieldInput {
  node: ComputerCreateInput;
}

export interface DisplayComputersDeleteFieldInput {
  delete?: Maybe<ComputerDeleteInput>;
  where?: Maybe<DisplayComputersConnectionWhere>;
}

export interface DisplayComputersDisconnectFieldInput {
  disconnect?: Maybe<ComputerDisconnectInput>;
  where?: Maybe<DisplayComputersConnectionWhere>;
}

export interface DisplayComputersFieldInput {
  connect?: Maybe<Array<DisplayComputersConnectFieldInput>>;
  create?: Maybe<Array<DisplayComputersCreateFieldInput>>;
}

export interface DisplayComputersNodeAggregationWhereInput {
  AND?: Maybe<Array<DisplayComputersNodeAggregationWhereInput>>;
  OR?: Maybe<Array<DisplayComputersNodeAggregationWhereInput>>;
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
  os_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  os_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  os_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  os_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  os_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  os_EQUAL?: Maybe<Scalars["String"]>;
  os_GT?: Maybe<Scalars["Int"]>;
  os_GTE?: Maybe<Scalars["Int"]>;
  os_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  os_LONGEST_GT?: Maybe<Scalars["Int"]>;
  os_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  os_LONGEST_LT?: Maybe<Scalars["Int"]>;
  os_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  os_LT?: Maybe<Scalars["Int"]>;
  os_LTE?: Maybe<Scalars["Int"]>;
  os_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  os_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  os_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  os_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  os_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface DisplayComputersUpdateConnectionInput {
  node?: Maybe<ComputerUpdateInput>;
}

export interface DisplayComputersUpdateFieldInput {
  connect?: Maybe<Array<DisplayComputersConnectFieldInput>>;
  create?: Maybe<Array<DisplayComputersCreateFieldInput>>;
  delete?: Maybe<Array<DisplayComputersDeleteFieldInput>>;
  disconnect?: Maybe<Array<DisplayComputersDisconnectFieldInput>>;
  update?: Maybe<DisplayComputersUpdateConnectionInput>;
  where?: Maybe<DisplayComputersConnectionWhere>;
}

export interface DisplayConnectInput {
  cluster?: Maybe<DisplayClusterConnectFieldInput>;
  computers?: Maybe<Array<DisplayComputersConnectFieldInput>>;
  location?: Maybe<DisplayLocationConnectFieldInput>;
  provisionedBy?: Maybe<DisplayProvisionedByConnectFieldInput>;
  screens?: Maybe<Array<DisplayScreensConnectFieldInput>>;
}

export interface DisplayConnectWhere {
  node: DisplayWhere;
}

export interface DisplayCreateInput {
  cluster?: Maybe<DisplayClusterFieldInput>;
  computers?: Maybe<DisplayComputersFieldInput>;
  label?: Maybe<Scalars["String"]>;
  location?: Maybe<DisplayLocationFieldInput>;
  provisioned?: Maybe<Scalars["Boolean"]>;
  provisionedAt?: Maybe<Scalars["DateTime"]>;
  provisionedBy?: Maybe<DisplayProvisionedByFieldInput>;
  screens?: Maybe<DisplayScreensFieldInput>;
}

export interface DisplayDeleteInput {
  cluster?: Maybe<DisplayClusterDeleteFieldInput>;
  computers?: Maybe<Array<DisplayComputersDeleteFieldInput>>;
  location?: Maybe<DisplayLocationDeleteFieldInput>;
  provisionedBy?: Maybe<DisplayProvisionedByDeleteFieldInput>;
  screens?: Maybe<Array<DisplayScreensDeleteFieldInput>>;
}

export interface DisplayDisconnectInput {
  cluster?: Maybe<DisplayClusterDisconnectFieldInput>;
  computers?: Maybe<Array<DisplayComputersDisconnectFieldInput>>;
  location?: Maybe<DisplayLocationDisconnectFieldInput>;
  provisionedBy?: Maybe<DisplayProvisionedByDisconnectFieldInput>;
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
  where?: Maybe<DisplayLocationConnectWhere>;
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
  elevation?: Maybe<Scalars["Float"]>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
}

export interface DisplayLocationDeleteFieldInput {
  where?: Maybe<DisplayLocationConnectionWhere>;
}

export interface DisplayLocationDisconnectFieldInput {
  where?: Maybe<DisplayLocationConnectionWhere>;
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
  elevation?: Maybe<Scalars["Float"]>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
}

export interface DisplayLocationWhere {
  AND?: Maybe<Array<DisplayLocationWhere>>;
  OR?: Maybe<Array<DisplayLocationWhere>>;
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

export interface DisplayProvisionedByAggregateInput {
  AND?: Maybe<Array<DisplayProvisionedByAggregateInput>>;
  OR?: Maybe<Array<DisplayProvisionedByAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<DisplayProvisionedByNodeAggregationWhereInput>;
}

export interface DisplayProvisionedByConnectFieldInput {
  connect?: Maybe<ProvisionCodeConnectInput>;
  where?: Maybe<ProvisionCodeConnectWhere>;
}

export interface DisplayProvisionedByConnectionSort {
  node?: Maybe<ProvisionCodeSort>;
}

export interface DisplayProvisionedByConnectionWhere {
  AND?: Maybe<Array<DisplayProvisionedByConnectionWhere>>;
  OR?: Maybe<Array<DisplayProvisionedByConnectionWhere>>;
  node?: Maybe<ProvisionCodeWhere>;
  node_NOT?: Maybe<ProvisionCodeWhere>;
}

export interface DisplayProvisionedByCreateFieldInput {
  node: ProvisionCodeCreateInput;
}

export interface DisplayProvisionedByDeleteFieldInput {
  delete?: Maybe<ProvisionCodeDeleteInput>;
  where?: Maybe<DisplayProvisionedByConnectionWhere>;
}

export interface DisplayProvisionedByDisconnectFieldInput {
  disconnect?: Maybe<ProvisionCodeDisconnectInput>;
  where?: Maybe<DisplayProvisionedByConnectionWhere>;
}

export interface DisplayProvisionedByFieldInput {
  connect?: Maybe<DisplayProvisionedByConnectFieldInput>;
  create?: Maybe<DisplayProvisionedByCreateFieldInput>;
}

export interface DisplayProvisionedByNodeAggregationWhereInput {
  AND?: Maybe<Array<DisplayProvisionedByNodeAggregationWhereInput>>;
  OR?: Maybe<Array<DisplayProvisionedByNodeAggregationWhereInput>>;
  createdAt_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  slug_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  slug_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  slug_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  slug_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  slug_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  slug_EQUAL?: Maybe<Scalars["String"]>;
  slug_GT?: Maybe<Scalars["Int"]>;
  slug_GTE?: Maybe<Scalars["Int"]>;
  slug_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  slug_LONGEST_GT?: Maybe<Scalars["Int"]>;
  slug_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  slug_LONGEST_LT?: Maybe<Scalars["Int"]>;
  slug_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  slug_LT?: Maybe<Scalars["Int"]>;
  slug_LTE?: Maybe<Scalars["Int"]>;
  slug_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  slug_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  slug_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  slug_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  slug_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface DisplayProvisionedByUpdateConnectionInput {
  node?: Maybe<ProvisionCodeUpdateInput>;
}

export interface DisplayProvisionedByUpdateFieldInput {
  connect?: Maybe<DisplayProvisionedByConnectFieldInput>;
  create?: Maybe<DisplayProvisionedByCreateFieldInput>;
  delete?: Maybe<DisplayProvisionedByDeleteFieldInput>;
  disconnect?: Maybe<DisplayProvisionedByDisconnectFieldInput>;
  update?: Maybe<DisplayProvisionedByUpdateConnectionInput>;
  where?: Maybe<DisplayProvisionedByConnectionWhere>;
}

export interface DisplayRelationInput {
  cluster?: Maybe<DisplayClusterCreateFieldInput>;
  computers?: Maybe<Array<DisplayComputersCreateFieldInput>>;
  location?: Maybe<DisplayLocationCreateFieldInput>;
  provisionedBy?: Maybe<DisplayProvisionedByCreateFieldInput>;
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
  provisioned?: Maybe<SortDirection>;
  provisionedAt?: Maybe<SortDirection>;
}

export interface DisplayUpdateInput {
  cluster?: Maybe<DisplayClusterUpdateFieldInput>;
  computers?: Maybe<Array<DisplayComputersUpdateFieldInput>>;
  label?: Maybe<Scalars["String"]>;
  location?: Maybe<DisplayLocationUpdateFieldInput>;
  provisioned?: Maybe<Scalars["Boolean"]>;
  provisionedAt?: Maybe<Scalars["DateTime"]>;
  provisionedBy?: Maybe<DisplayProvisionedByUpdateFieldInput>;
  screens?: Maybe<Array<DisplayScreensUpdateFieldInput>>;
}

export interface DisplayWhere {
  AND?: Maybe<Array<DisplayWhere>>;
  OR?: Maybe<Array<DisplayWhere>>;
  cluster?: Maybe<ClusterWhere>;
  clusterAggregate?: Maybe<DisplayClusterAggregateInput>;
  clusterConnection?: Maybe<DisplayClusterConnectionWhere>;
  clusterConnection_NOT?: Maybe<DisplayClusterConnectionWhere>;
  cluster_NOT?: Maybe<ClusterWhere>;
  computers?: Maybe<ComputerWhere>;
  computersAggregate?: Maybe<DisplayComputersAggregateInput>;
  computersConnection?: Maybe<DisplayComputersConnectionWhere>;
  computersConnection_NOT?: Maybe<DisplayComputersConnectionWhere>;
  computers_NOT?: Maybe<ComputerWhere>;
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
  provisioned?: Maybe<Scalars["Boolean"]>;
  provisionedAt?: Maybe<Scalars["DateTime"]>;
  provisionedAt_GT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_GTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  provisionedAt_LT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_LTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_NOT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  provisionedBy?: Maybe<ProvisionCodeWhere>;
  provisionedByAggregate?: Maybe<DisplayProvisionedByAggregateInput>;
  provisionedByConnection?: Maybe<DisplayProvisionedByConnectionWhere>;
  provisionedByConnection_NOT?: Maybe<DisplayProvisionedByConnectionWhere>;
  provisionedBy_NOT?: Maybe<ProvisionCodeWhere>;
  provisioned_NOT?: Maybe<Scalars["Boolean"]>;
  screens?: Maybe<DisplayScreenWhere>;
  screensAggregate?: Maybe<DisplayScreensAggregateInput>;
  screensConnection?: Maybe<DisplayScreensConnectionWhere>;
  screensConnection_NOT?: Maybe<DisplayScreensConnectionWhere>;
  screens_NOT?: Maybe<DisplayScreenWhere>;
}

export interface ProvisionCodeConnectInput {
  display?: Maybe<ProvisionCodeDisplayConnectFieldInput>;
}

export interface ProvisionCodeConnectWhere {
  node: ProvisionCodeWhere;
}

export interface ProvisionCodeCreateInput {
  createdAt?: Maybe<Scalars["DateTime"]>;
  display?: Maybe<ProvisionCodeDisplayFieldInput>;
  slug?: Maybe<Scalars["String"]>;
}

export interface ProvisionCodeDeleteInput {
  display?: Maybe<ProvisionCodeDisplayDeleteFieldInput>;
}

export interface ProvisionCodeDisconnectInput {
  display?: Maybe<ProvisionCodeDisplayDisconnectFieldInput>;
}

export interface ProvisionCodeDisplayAggregateInput {
  AND?: Maybe<Array<ProvisionCodeDisplayAggregateInput>>;
  OR?: Maybe<Array<ProvisionCodeDisplayAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ProvisionCodeDisplayNodeAggregationWhereInput>;
}

export interface ProvisionCodeDisplayConnectFieldInput {
  connect?: Maybe<DisplayConnectInput>;
  where?: Maybe<DisplayConnectWhere>;
}

export interface ProvisionCodeDisplayConnectionSort {
  node?: Maybe<DisplaySort>;
}

export interface ProvisionCodeDisplayConnectionWhere {
  AND?: Maybe<Array<ProvisionCodeDisplayConnectionWhere>>;
  OR?: Maybe<Array<ProvisionCodeDisplayConnectionWhere>>;
  node?: Maybe<DisplayWhere>;
  node_NOT?: Maybe<DisplayWhere>;
}

export interface ProvisionCodeDisplayCreateFieldInput {
  node: DisplayCreateInput;
}

export interface ProvisionCodeDisplayDeleteFieldInput {
  delete?: Maybe<DisplayDeleteInput>;
  where?: Maybe<ProvisionCodeDisplayConnectionWhere>;
}

export interface ProvisionCodeDisplayDisconnectFieldInput {
  disconnect?: Maybe<DisplayDisconnectInput>;
  where?: Maybe<ProvisionCodeDisplayConnectionWhere>;
}

export interface ProvisionCodeDisplayFieldInput {
  connect?: Maybe<ProvisionCodeDisplayConnectFieldInput>;
  create?: Maybe<ProvisionCodeDisplayCreateFieldInput>;
}

export interface ProvisionCodeDisplayNodeAggregationWhereInput {
  AND?: Maybe<Array<ProvisionCodeDisplayNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ProvisionCodeDisplayNodeAggregationWhereInput>>;
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
  provisionedAt_EQUAL?: Maybe<Scalars["DateTime"]>;
  provisionedAt_GT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_GTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_LT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_LTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_GT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_LT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_GT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_LT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_MIN_LTE?: Maybe<Scalars["DateTime"]>;
}

export interface ProvisionCodeDisplayUpdateConnectionInput {
  node?: Maybe<DisplayUpdateInput>;
}

export interface ProvisionCodeDisplayUpdateFieldInput {
  connect?: Maybe<ProvisionCodeDisplayConnectFieldInput>;
  create?: Maybe<ProvisionCodeDisplayCreateFieldInput>;
  delete?: Maybe<ProvisionCodeDisplayDeleteFieldInput>;
  disconnect?: Maybe<ProvisionCodeDisplayDisconnectFieldInput>;
  update?: Maybe<ProvisionCodeDisplayUpdateConnectionInput>;
  where?: Maybe<ProvisionCodeDisplayConnectionWhere>;
}

export interface ProvisionCodeOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more ProvisionCodeSort objects to sort ProvisionCodes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ProvisionCodeSort>>>;
}

export interface ProvisionCodeRelationInput {
  display?: Maybe<ProvisionCodeDisplayCreateFieldInput>;
}

/** Fields to sort ProvisionCodes by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProvisionCodeSort object. */
export interface ProvisionCodeSort {
  createdAt?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  slug?: Maybe<SortDirection>;
}

export interface ProvisionCodeUpdateInput {
  createdAt?: Maybe<Scalars["DateTime"]>;
  display?: Maybe<ProvisionCodeDisplayUpdateFieldInput>;
  slug?: Maybe<Scalars["String"]>;
}

export interface ProvisionCodeWhere {
  AND?: Maybe<Array<ProvisionCodeWhere>>;
  OR?: Maybe<Array<ProvisionCodeWhere>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  createdAt_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_NOT?: Maybe<Scalars["DateTime"]>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  display?: Maybe<DisplayWhere>;
  displayAggregate?: Maybe<ProvisionCodeDisplayAggregateInput>;
  displayConnection?: Maybe<ProvisionCodeDisplayConnectionWhere>;
  displayConnection_NOT?: Maybe<ProvisionCodeDisplayConnectionWhere>;
  display_NOT?: Maybe<DisplayWhere>;
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
  slug?: Maybe<Scalars["String"]>;
  slug_CONTAINS?: Maybe<Scalars["String"]>;
  slug_ENDS_WITH?: Maybe<Scalars["String"]>;
  slug_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  slug_NOT?: Maybe<Scalars["String"]>;
  slug_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  slug_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  slug_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  slug_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  slug_STARTS_WITH?: Maybe<Scalars["String"]>;
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
    assetFolder: { __type: "String" },
    assets: { __type: "[CampaignAsset]" },
    customer: { __type: "String" },
    id: { __type: "ID!" },
    interactionTimeline: { __type: "[CampaignInteraction]" },
    interactions: { __type: "Int" },
    name: { __type: "String" },
    views: { __type: "Int" },
  },
  CampaignAggregateSelection: {
    __typename: { __type: "String!" },
    assetFolder: { __type: "StringAggregateSelection!" },
    count: { __type: "Int!" },
    customer: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
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
    data: { __type: "String" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  CampaignAnalyticAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    data: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
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
    assetFolder: { __type: "StringAggregateSelection!" },
    customer: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
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
    assetFolder_AVERAGE_EQUAL: { __type: "Float" },
    assetFolder_AVERAGE_GT: { __type: "Float" },
    assetFolder_AVERAGE_GTE: { __type: "Float" },
    assetFolder_AVERAGE_LT: { __type: "Float" },
    assetFolder_AVERAGE_LTE: { __type: "Float" },
    assetFolder_EQUAL: { __type: "String" },
    assetFolder_GT: { __type: "Int" },
    assetFolder_GTE: { __type: "Int" },
    assetFolder_LONGEST_EQUAL: { __type: "Int" },
    assetFolder_LONGEST_GT: { __type: "Int" },
    assetFolder_LONGEST_GTE: { __type: "Int" },
    assetFolder_LONGEST_LT: { __type: "Int" },
    assetFolder_LONGEST_LTE: { __type: "Int" },
    assetFolder_LT: { __type: "Int" },
    assetFolder_LTE: { __type: "Int" },
    assetFolder_SHORTEST_EQUAL: { __type: "Int" },
    assetFolder_SHORTEST_GT: { __type: "Int" },
    assetFolder_SHORTEST_GTE: { __type: "Int" },
    assetFolder_SHORTEST_LT: { __type: "Int" },
    assetFolder_SHORTEST_LTE: { __type: "Int" },
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
    data: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
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
    data: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    type: { __type: "SortDirection" },
  },
  CampaignAnalyticUpdateInput: {
    campaign: { __type: "CampaignAnalyticCampaignUpdateFieldInput" },
    data: { __type: "String" },
    name: { __type: "String" },
    type: { __type: "String" },
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
    data: { __type: "String" },
    data_CONTAINS: { __type: "String" },
    data_ENDS_WITH: { __type: "String" },
    data_IN: { __type: "[String]" },
    data_NOT: { __type: "String" },
    data_NOT_CONTAINS: { __type: "String" },
    data_NOT_ENDS_WITH: { __type: "String" },
    data_NOT_IN: { __type: "[String]" },
    data_NOT_STARTS_WITH: { __type: "String" },
    data_STARTS_WITH: { __type: "String" },
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
    data_AVERAGE_EQUAL: { __type: "Float" },
    data_AVERAGE_GT: { __type: "Float" },
    data_AVERAGE_GTE: { __type: "Float" },
    data_AVERAGE_LT: { __type: "Float" },
    data_AVERAGE_LTE: { __type: "Float" },
    data_EQUAL: { __type: "String" },
    data_GT: { __type: "Int" },
    data_GTE: { __type: "Int" },
    data_LONGEST_EQUAL: { __type: "Int" },
    data_LONGEST_GT: { __type: "Int" },
    data_LONGEST_GTE: { __type: "Int" },
    data_LONGEST_LT: { __type: "Int" },
    data_LONGEST_LTE: { __type: "Int" },
    data_LT: { __type: "Int" },
    data_LTE: { __type: "Int" },
    data_SHORTEST_EQUAL: { __type: "Int" },
    data_SHORTEST_GT: { __type: "Int" },
    data_SHORTEST_GTE: { __type: "Int" },
    data_SHORTEST_LT: { __type: "Int" },
    data_SHORTEST_LTE: { __type: "Int" },
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
    mode: { __type: "Int" },
    name: { __type: "String" },
    path: { __type: "String" },
    size: { __type: "Int" },
    type: { __type: "String" },
  },
  CampaignCampaignAnalyticAnalyticsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "CampaignCampaignAnalyticAnalyticsNodeAggregateSelection" },
  },
  CampaignCampaignAnalyticAnalyticsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    data: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  CampaignConnectInput: {
    analytics: { __type: "[CampaignAnalyticsConnectFieldInput!]" },
  },
  CampaignConnectWhere: { node: { __type: "CampaignWhere!" } },
  CampaignCreateInput: {
    analytics: { __type: "CampaignAnalyticsFieldInput" },
    assetFolder: { __type: "String" },
    customer: { __type: "String" },
    name: { __type: "String" },
  },
  CampaignDeleteInput: {
    analytics: { __type: "[CampaignAnalyticsDeleteFieldInput!]" },
  },
  CampaignDisconnectInput: {
    analytics: { __type: "[CampaignAnalyticsDisconnectFieldInput!]" },
  },
  CampaignInteraction: {
    __typename: { __type: "String!" },
    interactions: { __type: "Int" },
    time: { __type: "DateTime" },
  },
  CampaignOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[CampaignSort]" },
  },
  CampaignRelationInput: {
    analytics: { __type: "[CampaignAnalyticsCreateFieldInput!]" },
  },
  CampaignSort: {
    assetFolder: { __type: "SortDirection" },
    customer: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  CampaignUpdateInput: {
    analytics: { __type: "[CampaignAnalyticsUpdateFieldInput!]" },
    assetFolder: { __type: "String" },
    customer: { __type: "String" },
    name: { __type: "String" },
  },
  CampaignWhere: {
    AND: { __type: "[CampaignWhere!]" },
    OR: { __type: "[CampaignWhere!]" },
    analytics: { __type: "CampaignAnalyticWhere" },
    analyticsAggregate: { __type: "CampaignAnalyticsAggregateInput" },
    analyticsConnection: { __type: "CampaignAnalyticsConnectionWhere" },
    analyticsConnection_NOT: { __type: "CampaignAnalyticsConnectionWhere" },
    analytics_NOT: { __type: "CampaignAnalyticWhere" },
    assetFolder: { __type: "String" },
    assetFolder_CONTAINS: { __type: "String" },
    assetFolder_ENDS_WITH: { __type: "String" },
    assetFolder_IN: { __type: "[String]" },
    assetFolder_NOT: { __type: "String" },
    assetFolder_NOT_CONTAINS: { __type: "String" },
    assetFolder_NOT_ENDS_WITH: { __type: "String" },
    assetFolder_NOT_IN: { __type: "[String]" },
    assetFolder_NOT_STARTS_WITH: { __type: "String" },
    assetFolder_STARTS_WITH: { __type: "String" },
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
  },
  Cluster: {
    __typename: { __type: "String!" },
    displays: {
      __type: "[Display]",
      __args: { options: "DisplayOptions", where: "DisplayWhere" },
    },
    displaysAggregate: {
      __type: "ClusterDisplayDisplaysAggregationSelection",
      __args: { where: "DisplayWhere" },
    },
    displaysConnection: {
      __type: "ClusterDisplaysConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ClusterDisplaysConnectionSort!]",
        where: "ClusterDisplaysConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    label: { __type: "String" },
    schedule: {
      __type: "[ClusterSchedule]",
      __args: {
        options: "ClusterScheduleOptions",
        where: "ClusterScheduleWhere",
      },
    },
    scheduleAggregate: {
      __type: "ClusterClusterScheduleScheduleAggregationSelection",
      __args: { where: "ClusterScheduleWhere" },
    },
    scheduleConnection: {
      __type: "ClusterScheduleConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ClusterScheduleConnectionSort!]",
        where: "ClusterScheduleConnectionWhere",
      },
    },
    tiers: {
      __type: "[ClusterTier]",
      __args: { options: "ClusterTierOptions", where: "ClusterTierWhere" },
    },
    tiersAggregate: {
      __type: "ClusterClusterTierTiersAggregationSelection",
      __args: { where: "ClusterTierWhere" },
    },
    tiersConnection: {
      __type: "ClusterTiersConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ClusterTiersConnectionSort!]",
        where: "ClusterTiersConnectionWhere",
      },
    },
  },
  ClusterAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
  },
  ClusterClusterScheduleScheduleAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ClusterClusterScheduleScheduleNodeAggregateSelection" },
  },
  ClusterClusterScheduleScheduleNodeAggregateSelection: {
    __typename: { __type: "String!" },
    endDate: { __type: "DateTimeAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    startDate: { __type: "DateTimeAggregateSelection!" },
  },
  ClusterClusterTierTiersAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ClusterClusterTierTiersNodeAggregateSelection" },
  },
  ClusterClusterTierTiersNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    percent: { __type: "FloatAggregateSelection!" },
    slots: { __type: "FloatAggregateSelection!" },
  },
  ClusterConnectInput: {
    displays: { __type: "[ClusterDisplaysConnectFieldInput!]" },
    schedule: { __type: "[ClusterScheduleConnectFieldInput!]" },
    tiers: { __type: "[ClusterTiersConnectFieldInput!]" },
  },
  ClusterConnectWhere: { node: { __type: "ClusterWhere!" } },
  ClusterCreateInput: {
    displays: { __type: "ClusterDisplaysFieldInput" },
    label: { __type: "String" },
    schedule: { __type: "ClusterScheduleFieldInput" },
    tiers: { __type: "ClusterTiersFieldInput" },
  },
  ClusterDeleteInput: {
    displays: { __type: "[ClusterDisplaysDeleteFieldInput!]" },
    schedule: { __type: "[ClusterScheduleDeleteFieldInput!]" },
    tiers: { __type: "[ClusterTiersDeleteFieldInput!]" },
  },
  ClusterDisconnectInput: {
    displays: { __type: "[ClusterDisplaysDisconnectFieldInput!]" },
    schedule: { __type: "[ClusterScheduleDisconnectFieldInput!]" },
    tiers: { __type: "[ClusterTiersDisconnectFieldInput!]" },
  },
  ClusterDisplayDisplaysAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ClusterDisplayDisplaysNodeAggregateSelection" },
  },
  ClusterDisplayDisplaysNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    provisionedAt: { __type: "DateTimeAggregateSelection!" },
  },
  ClusterDisplaysAggregateInput: {
    AND: { __type: "[ClusterDisplaysAggregateInput!]" },
    OR: { __type: "[ClusterDisplaysAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ClusterDisplaysNodeAggregationWhereInput" },
  },
  ClusterDisplaysConnectFieldInput: {
    connect: { __type: "[DisplayConnectInput!]" },
    where: { __type: "DisplayConnectWhere" },
  },
  ClusterDisplaysConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ClusterDisplaysRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ClusterDisplaysConnectionSort: { node: { __type: "DisplaySort" } },
  ClusterDisplaysConnectionWhere: {
    AND: { __type: "[ClusterDisplaysConnectionWhere!]" },
    OR: { __type: "[ClusterDisplaysConnectionWhere!]" },
    node: { __type: "DisplayWhere" },
    node_NOT: { __type: "DisplayWhere" },
  },
  ClusterDisplaysCreateFieldInput: { node: { __type: "DisplayCreateInput!" } },
  ClusterDisplaysDeleteFieldInput: {
    delete: { __type: "DisplayDeleteInput" },
    where: { __type: "ClusterDisplaysConnectionWhere" },
  },
  ClusterDisplaysDisconnectFieldInput: {
    disconnect: { __type: "DisplayDisconnectInput" },
    where: { __type: "ClusterDisplaysConnectionWhere" },
  },
  ClusterDisplaysFieldInput: {
    connect: { __type: "[ClusterDisplaysConnectFieldInput!]" },
    create: { __type: "[ClusterDisplaysCreateFieldInput!]" },
  },
  ClusterDisplaysNodeAggregationWhereInput: {
    AND: { __type: "[ClusterDisplaysNodeAggregationWhereInput!]" },
    OR: { __type: "[ClusterDisplaysNodeAggregationWhereInput!]" },
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
    provisionedAt_EQUAL: { __type: "DateTime" },
    provisionedAt_GT: { __type: "DateTime" },
    provisionedAt_GTE: { __type: "DateTime" },
    provisionedAt_LT: { __type: "DateTime" },
    provisionedAt_LTE: { __type: "DateTime" },
    provisionedAt_MAX_EQUAL: { __type: "DateTime" },
    provisionedAt_MAX_GT: { __type: "DateTime" },
    provisionedAt_MAX_GTE: { __type: "DateTime" },
    provisionedAt_MAX_LT: { __type: "DateTime" },
    provisionedAt_MAX_LTE: { __type: "DateTime" },
    provisionedAt_MIN_EQUAL: { __type: "DateTime" },
    provisionedAt_MIN_GT: { __type: "DateTime" },
    provisionedAt_MIN_GTE: { __type: "DateTime" },
    provisionedAt_MIN_LT: { __type: "DateTime" },
    provisionedAt_MIN_LTE: { __type: "DateTime" },
  },
  ClusterDisplaysRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Display!" },
  },
  ClusterDisplaysUpdateConnectionInput: {
    node: { __type: "DisplayUpdateInput" },
  },
  ClusterDisplaysUpdateFieldInput: {
    connect: { __type: "[ClusterDisplaysConnectFieldInput!]" },
    create: { __type: "[ClusterDisplaysCreateFieldInput!]" },
    delete: { __type: "[ClusterDisplaysDeleteFieldInput!]" },
    disconnect: { __type: "[ClusterDisplaysDisconnectFieldInput!]" },
    update: { __type: "ClusterDisplaysUpdateConnectionInput" },
    where: { __type: "ClusterDisplaysConnectionWhere" },
  },
  ClusterOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[ClusterSort]" },
  },
  ClusterRelationInput: {
    displays: { __type: "[ClusterDisplaysCreateFieldInput!]" },
    schedule: { __type: "[ClusterScheduleCreateFieldInput!]" },
    tiers: { __type: "[ClusterTiersCreateFieldInput!]" },
  },
  ClusterSchedule: {
    __typename: { __type: "String!" },
    campaign: {
      __type: "Campaign",
      __args: { options: "CampaignOptions", where: "CampaignWhere" },
    },
    campaignAggregate: {
      __type: "ClusterScheduleCampaignCampaignAggregationSelection",
      __args: { where: "CampaignWhere" },
    },
    campaignConnection: {
      __type: "ClusterScheduleCampaignConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ClusterScheduleCampaignConnectionSort!]",
        where: "ClusterScheduleCampaignConnectionWhere",
      },
    },
    cluster: {
      __type: "Cluster",
      __args: { options: "ClusterOptions", where: "ClusterWhere" },
    },
    clusterAggregate: {
      __type: "ClusterScheduleClusterClusterAggregationSelection",
      __args: { where: "ClusterWhere" },
    },
    clusterConnection: {
      __type: "ClusterScheduleClusterConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ClusterScheduleClusterConnectionSort!]",
        where: "ClusterScheduleClusterConnectionWhere",
      },
    },
    endDate: { __type: "DateTime" },
    id: { __type: "ID!" },
    startDate: { __type: "DateTime" },
    tier: {
      __type: "ClusterTier",
      __args: { options: "ClusterTierOptions", where: "ClusterTierWhere" },
    },
    tierAggregate: {
      __type: "ClusterScheduleClusterTierTierAggregationSelection",
      __args: { where: "ClusterTierWhere" },
    },
    tierConnection: {
      __type: "ClusterScheduleTierConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ClusterScheduleTierConnectionSort!]",
        where: "ClusterScheduleTierConnectionWhere",
      },
    },
  },
  ClusterScheduleAggregateInput: {
    AND: { __type: "[ClusterScheduleAggregateInput!]" },
    OR: { __type: "[ClusterScheduleAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ClusterScheduleNodeAggregationWhereInput" },
  },
  ClusterScheduleAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    endDate: { __type: "DateTimeAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    startDate: { __type: "DateTimeAggregateSelection!" },
  },
  ClusterScheduleCampaignAggregateInput: {
    AND: { __type: "[ClusterScheduleCampaignAggregateInput!]" },
    OR: { __type: "[ClusterScheduleCampaignAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ClusterScheduleCampaignNodeAggregationWhereInput" },
  },
  ClusterScheduleCampaignCampaignAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ClusterScheduleCampaignCampaignNodeAggregateSelection" },
  },
  ClusterScheduleCampaignCampaignNodeAggregateSelection: {
    __typename: { __type: "String!" },
    assetFolder: { __type: "StringAggregateSelection!" },
    customer: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  ClusterScheduleCampaignConnectFieldInput: {
    connect: { __type: "CampaignConnectInput" },
    where: { __type: "CampaignConnectWhere" },
  },
  ClusterScheduleCampaignConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ClusterScheduleCampaignRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ClusterScheduleCampaignConnectionSort: { node: { __type: "CampaignSort" } },
  ClusterScheduleCampaignConnectionWhere: {
    AND: { __type: "[ClusterScheduleCampaignConnectionWhere!]" },
    OR: { __type: "[ClusterScheduleCampaignConnectionWhere!]" },
    node: { __type: "CampaignWhere" },
    node_NOT: { __type: "CampaignWhere" },
  },
  ClusterScheduleCampaignCreateFieldInput: {
    node: { __type: "CampaignCreateInput!" },
  },
  ClusterScheduleCampaignDeleteFieldInput: {
    delete: { __type: "CampaignDeleteInput" },
    where: { __type: "ClusterScheduleCampaignConnectionWhere" },
  },
  ClusterScheduleCampaignDisconnectFieldInput: {
    disconnect: { __type: "CampaignDisconnectInput" },
    where: { __type: "ClusterScheduleCampaignConnectionWhere" },
  },
  ClusterScheduleCampaignFieldInput: {
    connect: { __type: "ClusterScheduleCampaignConnectFieldInput" },
    create: { __type: "ClusterScheduleCampaignCreateFieldInput" },
  },
  ClusterScheduleCampaignNodeAggregationWhereInput: {
    AND: { __type: "[ClusterScheduleCampaignNodeAggregationWhereInput!]" },
    OR: { __type: "[ClusterScheduleCampaignNodeAggregationWhereInput!]" },
    assetFolder_AVERAGE_EQUAL: { __type: "Float" },
    assetFolder_AVERAGE_GT: { __type: "Float" },
    assetFolder_AVERAGE_GTE: { __type: "Float" },
    assetFolder_AVERAGE_LT: { __type: "Float" },
    assetFolder_AVERAGE_LTE: { __type: "Float" },
    assetFolder_EQUAL: { __type: "String" },
    assetFolder_GT: { __type: "Int" },
    assetFolder_GTE: { __type: "Int" },
    assetFolder_LONGEST_EQUAL: { __type: "Int" },
    assetFolder_LONGEST_GT: { __type: "Int" },
    assetFolder_LONGEST_GTE: { __type: "Int" },
    assetFolder_LONGEST_LT: { __type: "Int" },
    assetFolder_LONGEST_LTE: { __type: "Int" },
    assetFolder_LT: { __type: "Int" },
    assetFolder_LTE: { __type: "Int" },
    assetFolder_SHORTEST_EQUAL: { __type: "Int" },
    assetFolder_SHORTEST_GT: { __type: "Int" },
    assetFolder_SHORTEST_GTE: { __type: "Int" },
    assetFolder_SHORTEST_LT: { __type: "Int" },
    assetFolder_SHORTEST_LTE: { __type: "Int" },
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
  },
  ClusterScheduleCampaignRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Campaign!" },
  },
  ClusterScheduleCampaignUpdateConnectionInput: {
    node: { __type: "CampaignUpdateInput" },
  },
  ClusterScheduleCampaignUpdateFieldInput: {
    connect: { __type: "ClusterScheduleCampaignConnectFieldInput" },
    create: { __type: "ClusterScheduleCampaignCreateFieldInput" },
    delete: { __type: "ClusterScheduleCampaignDeleteFieldInput" },
    disconnect: { __type: "ClusterScheduleCampaignDisconnectFieldInput" },
    update: { __type: "ClusterScheduleCampaignUpdateConnectionInput" },
    where: { __type: "ClusterScheduleCampaignConnectionWhere" },
  },
  ClusterScheduleClusterAggregateInput: {
    AND: { __type: "[ClusterScheduleClusterAggregateInput!]" },
    OR: { __type: "[ClusterScheduleClusterAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ClusterScheduleClusterNodeAggregationWhereInput" },
  },
  ClusterScheduleClusterClusterAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ClusterScheduleClusterClusterNodeAggregateSelection" },
  },
  ClusterScheduleClusterClusterNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
  },
  ClusterScheduleClusterConnectFieldInput: {
    connect: { __type: "ClusterConnectInput" },
    where: { __type: "ClusterConnectWhere" },
  },
  ClusterScheduleClusterConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ClusterScheduleClusterRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ClusterScheduleClusterConnectionSort: { node: { __type: "ClusterSort" } },
  ClusterScheduleClusterConnectionWhere: {
    AND: { __type: "[ClusterScheduleClusterConnectionWhere!]" },
    OR: { __type: "[ClusterScheduleClusterConnectionWhere!]" },
    node: { __type: "ClusterWhere" },
    node_NOT: { __type: "ClusterWhere" },
  },
  ClusterScheduleClusterCreateFieldInput: {
    node: { __type: "ClusterCreateInput!" },
  },
  ClusterScheduleClusterDeleteFieldInput: {
    delete: { __type: "ClusterDeleteInput" },
    where: { __type: "ClusterScheduleClusterConnectionWhere" },
  },
  ClusterScheduleClusterDisconnectFieldInput: {
    disconnect: { __type: "ClusterDisconnectInput" },
    where: { __type: "ClusterScheduleClusterConnectionWhere" },
  },
  ClusterScheduleClusterFieldInput: {
    connect: { __type: "ClusterScheduleClusterConnectFieldInput" },
    create: { __type: "ClusterScheduleClusterCreateFieldInput" },
  },
  ClusterScheduleClusterNodeAggregationWhereInput: {
    AND: { __type: "[ClusterScheduleClusterNodeAggregationWhereInput!]" },
    OR: { __type: "[ClusterScheduleClusterNodeAggregationWhereInput!]" },
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
  ClusterScheduleClusterRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Cluster!" },
  },
  ClusterScheduleClusterTierTierAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ClusterScheduleClusterTierTierNodeAggregateSelection" },
  },
  ClusterScheduleClusterTierTierNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    percent: { __type: "FloatAggregateSelection!" },
    slots: { __type: "FloatAggregateSelection!" },
  },
  ClusterScheduleClusterUpdateConnectionInput: {
    node: { __type: "ClusterUpdateInput" },
  },
  ClusterScheduleClusterUpdateFieldInput: {
    connect: { __type: "ClusterScheduleClusterConnectFieldInput" },
    create: { __type: "ClusterScheduleClusterCreateFieldInput" },
    delete: { __type: "ClusterScheduleClusterDeleteFieldInput" },
    disconnect: { __type: "ClusterScheduleClusterDisconnectFieldInput" },
    update: { __type: "ClusterScheduleClusterUpdateConnectionInput" },
    where: { __type: "ClusterScheduleClusterConnectionWhere" },
  },
  ClusterScheduleConnectFieldInput: {
    connect: { __type: "[ClusterScheduleConnectInput!]" },
    where: { __type: "ClusterScheduleConnectWhere" },
  },
  ClusterScheduleConnectInput: {
    campaign: { __type: "ClusterScheduleCampaignConnectFieldInput" },
    cluster: { __type: "ClusterScheduleClusterConnectFieldInput" },
    tier: { __type: "ClusterScheduleTierConnectFieldInput" },
  },
  ClusterScheduleConnectWhere: { node: { __type: "ClusterScheduleWhere!" } },
  ClusterScheduleConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ClusterScheduleRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ClusterScheduleConnectionSort: { node: { __type: "ClusterScheduleSort" } },
  ClusterScheduleConnectionWhere: {
    AND: { __type: "[ClusterScheduleConnectionWhere!]" },
    OR: { __type: "[ClusterScheduleConnectionWhere!]" },
    node: { __type: "ClusterScheduleWhere" },
    node_NOT: { __type: "ClusterScheduleWhere" },
  },
  ClusterScheduleCreateFieldInput: {
    node: { __type: "ClusterScheduleCreateInput!" },
  },
  ClusterScheduleCreateInput: {
    campaign: { __type: "ClusterScheduleCampaignFieldInput" },
    cluster: { __type: "ClusterScheduleClusterFieldInput" },
    endDate: { __type: "DateTime" },
    startDate: { __type: "DateTime" },
    tier: { __type: "ClusterScheduleTierFieldInput" },
  },
  ClusterScheduleDeleteFieldInput: {
    delete: { __type: "ClusterScheduleDeleteInput" },
    where: { __type: "ClusterScheduleConnectionWhere" },
  },
  ClusterScheduleDeleteInput: {
    campaign: { __type: "ClusterScheduleCampaignDeleteFieldInput" },
    cluster: { __type: "ClusterScheduleClusterDeleteFieldInput" },
    tier: { __type: "ClusterScheduleTierDeleteFieldInput" },
  },
  ClusterScheduleDisconnectFieldInput: {
    disconnect: { __type: "ClusterScheduleDisconnectInput" },
    where: { __type: "ClusterScheduleConnectionWhere" },
  },
  ClusterScheduleDisconnectInput: {
    campaign: { __type: "ClusterScheduleCampaignDisconnectFieldInput" },
    cluster: { __type: "ClusterScheduleClusterDisconnectFieldInput" },
    tier: { __type: "ClusterScheduleTierDisconnectFieldInput" },
  },
  ClusterScheduleFieldInput: {
    connect: { __type: "[ClusterScheduleConnectFieldInput!]" },
    create: { __type: "[ClusterScheduleCreateFieldInput!]" },
  },
  ClusterScheduleNodeAggregationWhereInput: {
    AND: { __type: "[ClusterScheduleNodeAggregationWhereInput!]" },
    OR: { __type: "[ClusterScheduleNodeAggregationWhereInput!]" },
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
  ClusterScheduleOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[ClusterScheduleSort]" },
  },
  ClusterScheduleRelationInput: {
    campaign: { __type: "ClusterScheduleCampaignCreateFieldInput" },
    cluster: { __type: "ClusterScheduleClusterCreateFieldInput" },
    tier: { __type: "ClusterScheduleTierCreateFieldInput" },
  },
  ClusterScheduleRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ClusterSchedule!" },
  },
  ClusterScheduleSort: {
    endDate: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    startDate: { __type: "SortDirection" },
  },
  ClusterScheduleTierAggregateInput: {
    AND: { __type: "[ClusterScheduleTierAggregateInput!]" },
    OR: { __type: "[ClusterScheduleTierAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ClusterScheduleTierNodeAggregationWhereInput" },
  },
  ClusterScheduleTierConnectFieldInput: {
    connect: { __type: "ClusterTierConnectInput" },
    where: { __type: "ClusterTierConnectWhere" },
  },
  ClusterScheduleTierConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ClusterScheduleTierRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ClusterScheduleTierConnectionSort: { node: { __type: "ClusterTierSort" } },
  ClusterScheduleTierConnectionWhere: {
    AND: { __type: "[ClusterScheduleTierConnectionWhere!]" },
    OR: { __type: "[ClusterScheduleTierConnectionWhere!]" },
    node: { __type: "ClusterTierWhere" },
    node_NOT: { __type: "ClusterTierWhere" },
  },
  ClusterScheduleTierCreateFieldInput: {
    node: { __type: "ClusterTierCreateInput!" },
  },
  ClusterScheduleTierDeleteFieldInput: {
    delete: { __type: "ClusterTierDeleteInput" },
    where: { __type: "ClusterScheduleTierConnectionWhere" },
  },
  ClusterScheduleTierDisconnectFieldInput: {
    disconnect: { __type: "ClusterTierDisconnectInput" },
    where: { __type: "ClusterScheduleTierConnectionWhere" },
  },
  ClusterScheduleTierFieldInput: {
    connect: { __type: "ClusterScheduleTierConnectFieldInput" },
    create: { __type: "ClusterScheduleTierCreateFieldInput" },
  },
  ClusterScheduleTierNodeAggregationWhereInput: {
    AND: { __type: "[ClusterScheduleTierNodeAggregationWhereInput!]" },
    OR: { __type: "[ClusterScheduleTierNodeAggregationWhereInput!]" },
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
    percent_AVERAGE_EQUAL: { __type: "Float" },
    percent_AVERAGE_GT: { __type: "Float" },
    percent_AVERAGE_GTE: { __type: "Float" },
    percent_AVERAGE_LT: { __type: "Float" },
    percent_AVERAGE_LTE: { __type: "Float" },
    percent_EQUAL: { __type: "Float" },
    percent_GT: { __type: "Float" },
    percent_GTE: { __type: "Float" },
    percent_LT: { __type: "Float" },
    percent_LTE: { __type: "Float" },
    percent_MAX_EQUAL: { __type: "Float" },
    percent_MAX_GT: { __type: "Float" },
    percent_MAX_GTE: { __type: "Float" },
    percent_MAX_LT: { __type: "Float" },
    percent_MAX_LTE: { __type: "Float" },
    percent_MIN_EQUAL: { __type: "Float" },
    percent_MIN_GT: { __type: "Float" },
    percent_MIN_GTE: { __type: "Float" },
    percent_MIN_LT: { __type: "Float" },
    percent_MIN_LTE: { __type: "Float" },
    slots_AVERAGE_EQUAL: { __type: "Float" },
    slots_AVERAGE_GT: { __type: "Float" },
    slots_AVERAGE_GTE: { __type: "Float" },
    slots_AVERAGE_LT: { __type: "Float" },
    slots_AVERAGE_LTE: { __type: "Float" },
    slots_EQUAL: { __type: "Float" },
    slots_GT: { __type: "Float" },
    slots_GTE: { __type: "Float" },
    slots_LT: { __type: "Float" },
    slots_LTE: { __type: "Float" },
    slots_MAX_EQUAL: { __type: "Float" },
    slots_MAX_GT: { __type: "Float" },
    slots_MAX_GTE: { __type: "Float" },
    slots_MAX_LT: { __type: "Float" },
    slots_MAX_LTE: { __type: "Float" },
    slots_MIN_EQUAL: { __type: "Float" },
    slots_MIN_GT: { __type: "Float" },
    slots_MIN_GTE: { __type: "Float" },
    slots_MIN_LT: { __type: "Float" },
    slots_MIN_LTE: { __type: "Float" },
  },
  ClusterScheduleTierRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ClusterTier!" },
  },
  ClusterScheduleTierUpdateConnectionInput: {
    node: { __type: "ClusterTierUpdateInput" },
  },
  ClusterScheduleTierUpdateFieldInput: {
    connect: { __type: "ClusterScheduleTierConnectFieldInput" },
    create: { __type: "ClusterScheduleTierCreateFieldInput" },
    delete: { __type: "ClusterScheduleTierDeleteFieldInput" },
    disconnect: { __type: "ClusterScheduleTierDisconnectFieldInput" },
    update: { __type: "ClusterScheduleTierUpdateConnectionInput" },
    where: { __type: "ClusterScheduleTierConnectionWhere" },
  },
  ClusterScheduleUpdateConnectionInput: {
    node: { __type: "ClusterScheduleUpdateInput" },
  },
  ClusterScheduleUpdateFieldInput: {
    connect: { __type: "[ClusterScheduleConnectFieldInput!]" },
    create: { __type: "[ClusterScheduleCreateFieldInput!]" },
    delete: { __type: "[ClusterScheduleDeleteFieldInput!]" },
    disconnect: { __type: "[ClusterScheduleDisconnectFieldInput!]" },
    update: { __type: "ClusterScheduleUpdateConnectionInput" },
    where: { __type: "ClusterScheduleConnectionWhere" },
  },
  ClusterScheduleUpdateInput: {
    campaign: { __type: "ClusterScheduleCampaignUpdateFieldInput" },
    cluster: { __type: "ClusterScheduleClusterUpdateFieldInput" },
    endDate: { __type: "DateTime" },
    startDate: { __type: "DateTime" },
    tier: { __type: "ClusterScheduleTierUpdateFieldInput" },
  },
  ClusterScheduleWhere: {
    AND: { __type: "[ClusterScheduleWhere!]" },
    OR: { __type: "[ClusterScheduleWhere!]" },
    campaign: { __type: "CampaignWhere" },
    campaignAggregate: { __type: "ClusterScheduleCampaignAggregateInput" },
    campaignConnection: { __type: "ClusterScheduleCampaignConnectionWhere" },
    campaignConnection_NOT: {
      __type: "ClusterScheduleCampaignConnectionWhere",
    },
    campaign_NOT: { __type: "CampaignWhere" },
    cluster: { __type: "ClusterWhere" },
    clusterAggregate: { __type: "ClusterScheduleClusterAggregateInput" },
    clusterConnection: { __type: "ClusterScheduleClusterConnectionWhere" },
    clusterConnection_NOT: { __type: "ClusterScheduleClusterConnectionWhere" },
    cluster_NOT: { __type: "ClusterWhere" },
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
    startDate: { __type: "DateTime" },
    startDate_GT: { __type: "DateTime" },
    startDate_GTE: { __type: "DateTime" },
    startDate_IN: { __type: "[DateTime]" },
    startDate_LT: { __type: "DateTime" },
    startDate_LTE: { __type: "DateTime" },
    startDate_NOT: { __type: "DateTime" },
    startDate_NOT_IN: { __type: "[DateTime]" },
    tier: { __type: "ClusterTierWhere" },
    tierAggregate: { __type: "ClusterScheduleTierAggregateInput" },
    tierConnection: { __type: "ClusterScheduleTierConnectionWhere" },
    tierConnection_NOT: { __type: "ClusterScheduleTierConnectionWhere" },
    tier_NOT: { __type: "ClusterTierWhere" },
  },
  ClusterSort: {
    id: { __type: "SortDirection" },
    label: { __type: "SortDirection" },
  },
  ClusterTier: {
    __typename: { __type: "String!" },
    cluster: {
      __type: "Cluster",
      __args: { options: "ClusterOptions", where: "ClusterWhere" },
    },
    clusterAggregate: {
      __type: "ClusterTierClusterClusterAggregationSelection",
      __args: { where: "ClusterWhere" },
    },
    clusterConnection: {
      __type: "ClusterTierClusterConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ClusterTierClusterConnectionSort!]",
        where: "ClusterTierClusterConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    name: { __type: "String" },
    percent: { __type: "Float" },
    slots: { __type: "Float" },
  },
  ClusterTierAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    percent: { __type: "FloatAggregateSelection!" },
    slots: { __type: "FloatAggregateSelection!" },
  },
  ClusterTierClusterAggregateInput: {
    AND: { __type: "[ClusterTierClusterAggregateInput!]" },
    OR: { __type: "[ClusterTierClusterAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ClusterTierClusterNodeAggregationWhereInput" },
  },
  ClusterTierClusterClusterAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ClusterTierClusterClusterNodeAggregateSelection" },
  },
  ClusterTierClusterClusterNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
  },
  ClusterTierClusterConnectFieldInput: {
    connect: { __type: "ClusterConnectInput" },
    where: { __type: "ClusterConnectWhere" },
  },
  ClusterTierClusterConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ClusterTierClusterRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ClusterTierClusterConnectionSort: { node: { __type: "ClusterSort" } },
  ClusterTierClusterConnectionWhere: {
    AND: { __type: "[ClusterTierClusterConnectionWhere!]" },
    OR: { __type: "[ClusterTierClusterConnectionWhere!]" },
    node: { __type: "ClusterWhere" },
    node_NOT: { __type: "ClusterWhere" },
  },
  ClusterTierClusterCreateFieldInput: {
    node: { __type: "ClusterCreateInput!" },
  },
  ClusterTierClusterDeleteFieldInput: {
    delete: { __type: "ClusterDeleteInput" },
    where: { __type: "ClusterTierClusterConnectionWhere" },
  },
  ClusterTierClusterDisconnectFieldInput: {
    disconnect: { __type: "ClusterDisconnectInput" },
    where: { __type: "ClusterTierClusterConnectionWhere" },
  },
  ClusterTierClusterFieldInput: {
    connect: { __type: "ClusterTierClusterConnectFieldInput" },
    create: { __type: "ClusterTierClusterCreateFieldInput" },
  },
  ClusterTierClusterNodeAggregationWhereInput: {
    AND: { __type: "[ClusterTierClusterNodeAggregationWhereInput!]" },
    OR: { __type: "[ClusterTierClusterNodeAggregationWhereInput!]" },
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
  ClusterTierClusterRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Cluster!" },
  },
  ClusterTierClusterUpdateConnectionInput: {
    node: { __type: "ClusterUpdateInput" },
  },
  ClusterTierClusterUpdateFieldInput: {
    connect: { __type: "ClusterTierClusterConnectFieldInput" },
    create: { __type: "ClusterTierClusterCreateFieldInput" },
    delete: { __type: "ClusterTierClusterDeleteFieldInput" },
    disconnect: { __type: "ClusterTierClusterDisconnectFieldInput" },
    update: { __type: "ClusterTierClusterUpdateConnectionInput" },
    where: { __type: "ClusterTierClusterConnectionWhere" },
  },
  ClusterTierConnectInput: {
    cluster: { __type: "ClusterTierClusterConnectFieldInput" },
  },
  ClusterTierConnectWhere: { node: { __type: "ClusterTierWhere!" } },
  ClusterTierCreateInput: {
    cluster: { __type: "ClusterTierClusterFieldInput" },
    name: { __type: "String" },
    percent: { __type: "Float" },
    slots: { __type: "Float" },
  },
  ClusterTierDeleteInput: {
    cluster: { __type: "ClusterTierClusterDeleteFieldInput" },
  },
  ClusterTierDisconnectInput: {
    cluster: { __type: "ClusterTierClusterDisconnectFieldInput" },
  },
  ClusterTierOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[ClusterTierSort]" },
  },
  ClusterTierRelationInput: {
    cluster: { __type: "ClusterTierClusterCreateFieldInput" },
  },
  ClusterTierSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    percent: { __type: "SortDirection" },
    slots: { __type: "SortDirection" },
  },
  ClusterTierUpdateInput: {
    cluster: { __type: "ClusterTierClusterUpdateFieldInput" },
    name: { __type: "String" },
    percent: { __type: "Float" },
    slots: { __type: "Float" },
  },
  ClusterTierWhere: {
    AND: { __type: "[ClusterTierWhere!]" },
    OR: { __type: "[ClusterTierWhere!]" },
    cluster: { __type: "ClusterWhere" },
    clusterAggregate: { __type: "ClusterTierClusterAggregateInput" },
    clusterConnection: { __type: "ClusterTierClusterConnectionWhere" },
    clusterConnection_NOT: { __type: "ClusterTierClusterConnectionWhere" },
    cluster_NOT: { __type: "ClusterWhere" },
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
    percent: { __type: "Float" },
    percent_GT: { __type: "Float" },
    percent_GTE: { __type: "Float" },
    percent_IN: { __type: "[Float]" },
    percent_LT: { __type: "Float" },
    percent_LTE: { __type: "Float" },
    percent_NOT: { __type: "Float" },
    percent_NOT_IN: { __type: "[Float]" },
    slots: { __type: "Float" },
    slots_GT: { __type: "Float" },
    slots_GTE: { __type: "Float" },
    slots_IN: { __type: "[Float]" },
    slots_LT: { __type: "Float" },
    slots_LTE: { __type: "Float" },
    slots_NOT: { __type: "Float" },
    slots_NOT_IN: { __type: "[Float]" },
  },
  ClusterTiersAggregateInput: {
    AND: { __type: "[ClusterTiersAggregateInput!]" },
    OR: { __type: "[ClusterTiersAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ClusterTiersNodeAggregationWhereInput" },
  },
  ClusterTiersConnectFieldInput: {
    connect: { __type: "[ClusterTierConnectInput!]" },
    where: { __type: "ClusterTierConnectWhere" },
  },
  ClusterTiersConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ClusterTiersRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ClusterTiersConnectionSort: { node: { __type: "ClusterTierSort" } },
  ClusterTiersConnectionWhere: {
    AND: { __type: "[ClusterTiersConnectionWhere!]" },
    OR: { __type: "[ClusterTiersConnectionWhere!]" },
    node: { __type: "ClusterTierWhere" },
    node_NOT: { __type: "ClusterTierWhere" },
  },
  ClusterTiersCreateFieldInput: { node: { __type: "ClusterTierCreateInput!" } },
  ClusterTiersDeleteFieldInput: {
    delete: { __type: "ClusterTierDeleteInput" },
    where: { __type: "ClusterTiersConnectionWhere" },
  },
  ClusterTiersDisconnectFieldInput: {
    disconnect: { __type: "ClusterTierDisconnectInput" },
    where: { __type: "ClusterTiersConnectionWhere" },
  },
  ClusterTiersFieldInput: {
    connect: { __type: "[ClusterTiersConnectFieldInput!]" },
    create: { __type: "[ClusterTiersCreateFieldInput!]" },
  },
  ClusterTiersNodeAggregationWhereInput: {
    AND: { __type: "[ClusterTiersNodeAggregationWhereInput!]" },
    OR: { __type: "[ClusterTiersNodeAggregationWhereInput!]" },
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
    percent_AVERAGE_EQUAL: { __type: "Float" },
    percent_AVERAGE_GT: { __type: "Float" },
    percent_AVERAGE_GTE: { __type: "Float" },
    percent_AVERAGE_LT: { __type: "Float" },
    percent_AVERAGE_LTE: { __type: "Float" },
    percent_EQUAL: { __type: "Float" },
    percent_GT: { __type: "Float" },
    percent_GTE: { __type: "Float" },
    percent_LT: { __type: "Float" },
    percent_LTE: { __type: "Float" },
    percent_MAX_EQUAL: { __type: "Float" },
    percent_MAX_GT: { __type: "Float" },
    percent_MAX_GTE: { __type: "Float" },
    percent_MAX_LT: { __type: "Float" },
    percent_MAX_LTE: { __type: "Float" },
    percent_MIN_EQUAL: { __type: "Float" },
    percent_MIN_GT: { __type: "Float" },
    percent_MIN_GTE: { __type: "Float" },
    percent_MIN_LT: { __type: "Float" },
    percent_MIN_LTE: { __type: "Float" },
    slots_AVERAGE_EQUAL: { __type: "Float" },
    slots_AVERAGE_GT: { __type: "Float" },
    slots_AVERAGE_GTE: { __type: "Float" },
    slots_AVERAGE_LT: { __type: "Float" },
    slots_AVERAGE_LTE: { __type: "Float" },
    slots_EQUAL: { __type: "Float" },
    slots_GT: { __type: "Float" },
    slots_GTE: { __type: "Float" },
    slots_LT: { __type: "Float" },
    slots_LTE: { __type: "Float" },
    slots_MAX_EQUAL: { __type: "Float" },
    slots_MAX_GT: { __type: "Float" },
    slots_MAX_GTE: { __type: "Float" },
    slots_MAX_LT: { __type: "Float" },
    slots_MAX_LTE: { __type: "Float" },
    slots_MIN_EQUAL: { __type: "Float" },
    slots_MIN_GT: { __type: "Float" },
    slots_MIN_GTE: { __type: "Float" },
    slots_MIN_LT: { __type: "Float" },
    slots_MIN_LTE: { __type: "Float" },
  },
  ClusterTiersRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ClusterTier!" },
  },
  ClusterTiersUpdateConnectionInput: {
    node: { __type: "ClusterTierUpdateInput" },
  },
  ClusterTiersUpdateFieldInput: {
    connect: { __type: "[ClusterTiersConnectFieldInput!]" },
    create: { __type: "[ClusterTiersCreateFieldInput!]" },
    delete: { __type: "[ClusterTiersDeleteFieldInput!]" },
    disconnect: { __type: "[ClusterTiersDisconnectFieldInput!]" },
    update: { __type: "ClusterTiersUpdateConnectionInput" },
    where: { __type: "ClusterTiersConnectionWhere" },
  },
  ClusterUpdateInput: {
    displays: { __type: "[ClusterDisplaysUpdateFieldInput!]" },
    label: { __type: "String" },
    schedule: { __type: "[ClusterScheduleUpdateFieldInput!]" },
    tiers: { __type: "[ClusterTiersUpdateFieldInput!]" },
  },
  ClusterWhere: {
    AND: { __type: "[ClusterWhere!]" },
    OR: { __type: "[ClusterWhere!]" },
    displays: { __type: "DisplayWhere" },
    displaysAggregate: { __type: "ClusterDisplaysAggregateInput" },
    displaysConnection: { __type: "ClusterDisplaysConnectionWhere" },
    displaysConnection_NOT: { __type: "ClusterDisplaysConnectionWhere" },
    displays_NOT: { __type: "DisplayWhere" },
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
    schedule: { __type: "ClusterScheduleWhere" },
    scheduleAggregate: { __type: "ClusterScheduleAggregateInput" },
    scheduleConnection: { __type: "ClusterScheduleConnectionWhere" },
    scheduleConnection_NOT: { __type: "ClusterScheduleConnectionWhere" },
    schedule_NOT: { __type: "ClusterScheduleWhere" },
    tiers: { __type: "ClusterTierWhere" },
    tiersAggregate: { __type: "ClusterTiersAggregateInput" },
    tiersConnection: { __type: "ClusterTiersConnectionWhere" },
    tiersConnection_NOT: { __type: "ClusterTiersConnectionWhere" },
    tiers_NOT: { __type: "ClusterTierWhere" },
  },
  Computer: {
    __typename: { __type: "String!" },
    display: {
      __type: "Display",
      __args: { options: "DisplayOptions", where: "DisplayWhere" },
    },
    displayAggregate: {
      __type: "ComputerDisplayDisplayAggregationSelection",
      __args: { where: "DisplayWhere" },
    },
    displayConnection: {
      __type: "ComputerDisplayConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ComputerDisplayConnectionSort!]",
        where: "ComputerDisplayConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    label: { __type: "String" },
    os: { __type: "String" },
  },
  ComputerAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    os: { __type: "StringAggregateSelection!" },
  },
  ComputerConnectInput: {
    display: { __type: "ComputerDisplayConnectFieldInput" },
  },
  ComputerConnectWhere: { node: { __type: "ComputerWhere!" } },
  ComputerCreateInput: {
    display: { __type: "ComputerDisplayFieldInput" },
    label: { __type: "String" },
    os: { __type: "String" },
  },
  ComputerDeleteInput: {
    display: { __type: "ComputerDisplayDeleteFieldInput" },
  },
  ComputerDisconnectInput: {
    display: { __type: "ComputerDisplayDisconnectFieldInput" },
  },
  ComputerDisplayAggregateInput: {
    AND: { __type: "[ComputerDisplayAggregateInput!]" },
    OR: { __type: "[ComputerDisplayAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ComputerDisplayNodeAggregationWhereInput" },
  },
  ComputerDisplayConnectFieldInput: {
    connect: { __type: "DisplayConnectInput" },
    where: { __type: "DisplayConnectWhere" },
  },
  ComputerDisplayConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ComputerDisplayRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ComputerDisplayConnectionSort: { node: { __type: "DisplaySort" } },
  ComputerDisplayConnectionWhere: {
    AND: { __type: "[ComputerDisplayConnectionWhere!]" },
    OR: { __type: "[ComputerDisplayConnectionWhere!]" },
    node: { __type: "DisplayWhere" },
    node_NOT: { __type: "DisplayWhere" },
  },
  ComputerDisplayCreateFieldInput: { node: { __type: "DisplayCreateInput!" } },
  ComputerDisplayDeleteFieldInput: {
    delete: { __type: "DisplayDeleteInput" },
    where: { __type: "ComputerDisplayConnectionWhere" },
  },
  ComputerDisplayDisconnectFieldInput: {
    disconnect: { __type: "DisplayDisconnectInput" },
    where: { __type: "ComputerDisplayConnectionWhere" },
  },
  ComputerDisplayDisplayAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ComputerDisplayDisplayNodeAggregateSelection" },
  },
  ComputerDisplayDisplayNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    provisionedAt: { __type: "DateTimeAggregateSelection!" },
  },
  ComputerDisplayFieldInput: {
    connect: { __type: "ComputerDisplayConnectFieldInput" },
    create: { __type: "ComputerDisplayCreateFieldInput" },
  },
  ComputerDisplayNodeAggregationWhereInput: {
    AND: { __type: "[ComputerDisplayNodeAggregationWhereInput!]" },
    OR: { __type: "[ComputerDisplayNodeAggregationWhereInput!]" },
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
    provisionedAt_EQUAL: { __type: "DateTime" },
    provisionedAt_GT: { __type: "DateTime" },
    provisionedAt_GTE: { __type: "DateTime" },
    provisionedAt_LT: { __type: "DateTime" },
    provisionedAt_LTE: { __type: "DateTime" },
    provisionedAt_MAX_EQUAL: { __type: "DateTime" },
    provisionedAt_MAX_GT: { __type: "DateTime" },
    provisionedAt_MAX_GTE: { __type: "DateTime" },
    provisionedAt_MAX_LT: { __type: "DateTime" },
    provisionedAt_MAX_LTE: { __type: "DateTime" },
    provisionedAt_MIN_EQUAL: { __type: "DateTime" },
    provisionedAt_MIN_GT: { __type: "DateTime" },
    provisionedAt_MIN_GTE: { __type: "DateTime" },
    provisionedAt_MIN_LT: { __type: "DateTime" },
    provisionedAt_MIN_LTE: { __type: "DateTime" },
  },
  ComputerDisplayRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Display!" },
  },
  ComputerDisplayUpdateConnectionInput: {
    node: { __type: "DisplayUpdateInput" },
  },
  ComputerDisplayUpdateFieldInput: {
    connect: { __type: "ComputerDisplayConnectFieldInput" },
    create: { __type: "ComputerDisplayCreateFieldInput" },
    delete: { __type: "ComputerDisplayDeleteFieldInput" },
    disconnect: { __type: "ComputerDisplayDisconnectFieldInput" },
    update: { __type: "ComputerDisplayUpdateConnectionInput" },
    where: { __type: "ComputerDisplayConnectionWhere" },
  },
  ComputerOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[ComputerSort]" },
  },
  ComputerRelationInput: {
    display: { __type: "ComputerDisplayCreateFieldInput" },
  },
  ComputerSort: {
    id: { __type: "SortDirection" },
    label: { __type: "SortDirection" },
    os: { __type: "SortDirection" },
  },
  ComputerUpdateInput: {
    display: { __type: "ComputerDisplayUpdateFieldInput" },
    label: { __type: "String" },
    os: { __type: "String" },
  },
  ComputerWhere: {
    AND: { __type: "[ComputerWhere!]" },
    OR: { __type: "[ComputerWhere!]" },
    display: { __type: "DisplayWhere" },
    displayAggregate: { __type: "ComputerDisplayAggregateInput" },
    displayConnection: { __type: "ComputerDisplayConnectionWhere" },
    displayConnection_NOT: { __type: "ComputerDisplayConnectionWhere" },
    display_NOT: { __type: "DisplayWhere" },
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
    os: { __type: "String" },
    os_CONTAINS: { __type: "String" },
    os_ENDS_WITH: { __type: "String" },
    os_IN: { __type: "[String]" },
    os_NOT: { __type: "String" },
    os_NOT_CONTAINS: { __type: "String" },
    os_NOT_ENDS_WITH: { __type: "String" },
    os_NOT_IN: { __type: "[String]" },
    os_NOT_STARTS_WITH: { __type: "String" },
    os_STARTS_WITH: { __type: "String" },
  },
  CreateCampaignAnalyticsMutationResponse: {
    __typename: { __type: "String!" },
    campaignAnalytics: { __type: "[CampaignAnalytic!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateCampaignsMutationResponse: {
    __typename: { __type: "String!" },
    campaigns: { __type: "[Campaign!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateClusterSchedulesMutationResponse: {
    __typename: { __type: "String!" },
    clusterSchedules: { __type: "[ClusterSchedule!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateClusterTiersMutationResponse: {
    __typename: { __type: "String!" },
    clusterTiers: { __type: "[ClusterTier!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateClustersMutationResponse: {
    __typename: { __type: "String!" },
    clusters: { __type: "[Cluster!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateComputersMutationResponse: {
    __typename: { __type: "String!" },
    computers: { __type: "[Computer!]!" },
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
  CreateProvisionCodesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    provisionCodes: { __type: "[ProvisionCode!]!" },
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
    cluster: {
      __type: "Cluster",
      __args: { options: "ClusterOptions", where: "ClusterWhere" },
    },
    clusterAggregate: {
      __type: "DisplayClusterClusterAggregationSelection",
      __args: { where: "ClusterWhere" },
    },
    clusterConnection: {
      __type: "DisplayClusterConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[DisplayClusterConnectionSort!]",
        where: "DisplayClusterConnectionWhere",
      },
    },
    computers: {
      __type: "[Computer]",
      __args: { options: "ComputerOptions", where: "ComputerWhere" },
    },
    computersAggregate: {
      __type: "DisplayComputerComputersAggregationSelection",
      __args: { where: "ComputerWhere" },
    },
    computersConnection: {
      __type: "DisplayComputersConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[DisplayComputersConnectionSort!]",
        where: "DisplayComputersConnectionWhere",
      },
    },
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
    provisioned: { __type: "Boolean" },
    provisionedAt: { __type: "DateTime" },
    provisionedBy: {
      __type: "ProvisionCode",
      __args: { options: "ProvisionCodeOptions", where: "ProvisionCodeWhere" },
    },
    provisionedByAggregate: {
      __type: "DisplayProvisionCodeProvisionedByAggregationSelection",
      __args: { where: "ProvisionCodeWhere" },
    },
    provisionedByConnection: {
      __type: "DisplayProvisionedByConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[DisplayProvisionedByConnectionSort!]",
        where: "DisplayProvisionedByConnectionWhere",
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
    provisionedAt: { __type: "DateTimeAggregateSelection!" },
  },
  DisplayClusterAggregateInput: {
    AND: { __type: "[DisplayClusterAggregateInput!]" },
    OR: { __type: "[DisplayClusterAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "DisplayClusterNodeAggregationWhereInput" },
  },
  DisplayClusterClusterAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "DisplayClusterClusterNodeAggregateSelection" },
  },
  DisplayClusterClusterNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
  },
  DisplayClusterConnectFieldInput: {
    connect: { __type: "ClusterConnectInput" },
    where: { __type: "ClusterConnectWhere" },
  },
  DisplayClusterConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[DisplayClusterRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  DisplayClusterConnectionSort: { node: { __type: "ClusterSort" } },
  DisplayClusterConnectionWhere: {
    AND: { __type: "[DisplayClusterConnectionWhere!]" },
    OR: { __type: "[DisplayClusterConnectionWhere!]" },
    node: { __type: "ClusterWhere" },
    node_NOT: { __type: "ClusterWhere" },
  },
  DisplayClusterCreateFieldInput: { node: { __type: "ClusterCreateInput!" } },
  DisplayClusterDeleteFieldInput: {
    delete: { __type: "ClusterDeleteInput" },
    where: { __type: "DisplayClusterConnectionWhere" },
  },
  DisplayClusterDisconnectFieldInput: {
    disconnect: { __type: "ClusterDisconnectInput" },
    where: { __type: "DisplayClusterConnectionWhere" },
  },
  DisplayClusterFieldInput: {
    connect: { __type: "DisplayClusterConnectFieldInput" },
    create: { __type: "DisplayClusterCreateFieldInput" },
  },
  DisplayClusterNodeAggregationWhereInput: {
    AND: { __type: "[DisplayClusterNodeAggregationWhereInput!]" },
    OR: { __type: "[DisplayClusterNodeAggregationWhereInput!]" },
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
  DisplayClusterRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Cluster!" },
  },
  DisplayClusterUpdateConnectionInput: {
    node: { __type: "ClusterUpdateInput" },
  },
  DisplayClusterUpdateFieldInput: {
    connect: { __type: "DisplayClusterConnectFieldInput" },
    create: { __type: "DisplayClusterCreateFieldInput" },
    delete: { __type: "DisplayClusterDeleteFieldInput" },
    disconnect: { __type: "DisplayClusterDisconnectFieldInput" },
    update: { __type: "DisplayClusterUpdateConnectionInput" },
    where: { __type: "DisplayClusterConnectionWhere" },
  },
  DisplayComputerComputersAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "DisplayComputerComputersNodeAggregateSelection" },
  },
  DisplayComputerComputersNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    os: { __type: "StringAggregateSelection!" },
  },
  DisplayComputersAggregateInput: {
    AND: { __type: "[DisplayComputersAggregateInput!]" },
    OR: { __type: "[DisplayComputersAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "DisplayComputersNodeAggregationWhereInput" },
  },
  DisplayComputersConnectFieldInput: {
    connect: { __type: "[ComputerConnectInput!]" },
    where: { __type: "ComputerConnectWhere" },
  },
  DisplayComputersConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[DisplayComputersRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  DisplayComputersConnectionSort: { node: { __type: "ComputerSort" } },
  DisplayComputersConnectionWhere: {
    AND: { __type: "[DisplayComputersConnectionWhere!]" },
    OR: { __type: "[DisplayComputersConnectionWhere!]" },
    node: { __type: "ComputerWhere" },
    node_NOT: { __type: "ComputerWhere" },
  },
  DisplayComputersCreateFieldInput: {
    node: { __type: "ComputerCreateInput!" },
  },
  DisplayComputersDeleteFieldInput: {
    delete: { __type: "ComputerDeleteInput" },
    where: { __type: "DisplayComputersConnectionWhere" },
  },
  DisplayComputersDisconnectFieldInput: {
    disconnect: { __type: "ComputerDisconnectInput" },
    where: { __type: "DisplayComputersConnectionWhere" },
  },
  DisplayComputersFieldInput: {
    connect: { __type: "[DisplayComputersConnectFieldInput!]" },
    create: { __type: "[DisplayComputersCreateFieldInput!]" },
  },
  DisplayComputersNodeAggregationWhereInput: {
    AND: { __type: "[DisplayComputersNodeAggregationWhereInput!]" },
    OR: { __type: "[DisplayComputersNodeAggregationWhereInput!]" },
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
    os_AVERAGE_EQUAL: { __type: "Float" },
    os_AVERAGE_GT: { __type: "Float" },
    os_AVERAGE_GTE: { __type: "Float" },
    os_AVERAGE_LT: { __type: "Float" },
    os_AVERAGE_LTE: { __type: "Float" },
    os_EQUAL: { __type: "String" },
    os_GT: { __type: "Int" },
    os_GTE: { __type: "Int" },
    os_LONGEST_EQUAL: { __type: "Int" },
    os_LONGEST_GT: { __type: "Int" },
    os_LONGEST_GTE: { __type: "Int" },
    os_LONGEST_LT: { __type: "Int" },
    os_LONGEST_LTE: { __type: "Int" },
    os_LT: { __type: "Int" },
    os_LTE: { __type: "Int" },
    os_SHORTEST_EQUAL: { __type: "Int" },
    os_SHORTEST_GT: { __type: "Int" },
    os_SHORTEST_GTE: { __type: "Int" },
    os_SHORTEST_LT: { __type: "Int" },
    os_SHORTEST_LTE: { __type: "Int" },
  },
  DisplayComputersRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Computer!" },
  },
  DisplayComputersUpdateConnectionInput: {
    node: { __type: "ComputerUpdateInput" },
  },
  DisplayComputersUpdateFieldInput: {
    connect: { __type: "[DisplayComputersConnectFieldInput!]" },
    create: { __type: "[DisplayComputersCreateFieldInput!]" },
    delete: { __type: "[DisplayComputersDeleteFieldInput!]" },
    disconnect: { __type: "[DisplayComputersDisconnectFieldInput!]" },
    update: { __type: "DisplayComputersUpdateConnectionInput" },
    where: { __type: "DisplayComputersConnectionWhere" },
  },
  DisplayConnectInput: {
    cluster: { __type: "DisplayClusterConnectFieldInput" },
    computers: { __type: "[DisplayComputersConnectFieldInput!]" },
    location: { __type: "DisplayLocationConnectFieldInput" },
    provisionedBy: { __type: "DisplayProvisionedByConnectFieldInput" },
    screens: { __type: "[DisplayScreensConnectFieldInput!]" },
  },
  DisplayConnectWhere: { node: { __type: "DisplayWhere!" } },
  DisplayCreateInput: {
    cluster: { __type: "DisplayClusterFieldInput" },
    computers: { __type: "DisplayComputersFieldInput" },
    label: { __type: "String" },
    location: { __type: "DisplayLocationFieldInput" },
    provisioned: { __type: "Boolean" },
    provisionedAt: { __type: "DateTime" },
    provisionedBy: { __type: "DisplayProvisionedByFieldInput" },
    screens: { __type: "DisplayScreensFieldInput" },
  },
  DisplayDeleteInput: {
    cluster: { __type: "DisplayClusterDeleteFieldInput" },
    computers: { __type: "[DisplayComputersDeleteFieldInput!]" },
    location: { __type: "DisplayLocationDeleteFieldInput" },
    provisionedBy: { __type: "DisplayProvisionedByDeleteFieldInput" },
    screens: { __type: "[DisplayScreensDeleteFieldInput!]" },
  },
  DisplayDisconnectInput: {
    cluster: { __type: "DisplayClusterDisconnectFieldInput" },
    computers: { __type: "[DisplayComputersDisconnectFieldInput!]" },
    location: { __type: "DisplayLocationDisconnectFieldInput" },
    provisionedBy: { __type: "DisplayProvisionedByDisconnectFieldInput" },
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
    where: { __type: "DisplayLocationConnectWhere" },
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
    elevation: { __type: "Float" },
    lat: { __type: "Float" },
    lng: { __type: "Float" },
    name: { __type: "String" },
  },
  DisplayLocationDeleteFieldInput: {
    where: { __type: "DisplayLocationConnectionWhere" },
  },
  DisplayLocationDisconnectFieldInput: {
    where: { __type: "DisplayLocationConnectionWhere" },
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
    elevation: { __type: "Float" },
    lat: { __type: "Float" },
    lng: { __type: "Float" },
    name: { __type: "String" },
  },
  DisplayLocationWhere: {
    AND: { __type: "[DisplayLocationWhere!]" },
    OR: { __type: "[DisplayLocationWhere!]" },
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
  DisplayProvisionCodeProvisionedByAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "DisplayProvisionCodeProvisionedByNodeAggregateSelection" },
  },
  DisplayProvisionCodeProvisionedByNodeAggregateSelection: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTimeAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    slug: { __type: "StringAggregateSelection!" },
  },
  DisplayProvisionedByAggregateInput: {
    AND: { __type: "[DisplayProvisionedByAggregateInput!]" },
    OR: { __type: "[DisplayProvisionedByAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "DisplayProvisionedByNodeAggregationWhereInput" },
  },
  DisplayProvisionedByConnectFieldInput: {
    connect: { __type: "ProvisionCodeConnectInput" },
    where: { __type: "ProvisionCodeConnectWhere" },
  },
  DisplayProvisionedByConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[DisplayProvisionedByRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  DisplayProvisionedByConnectionSort: { node: { __type: "ProvisionCodeSort" } },
  DisplayProvisionedByConnectionWhere: {
    AND: { __type: "[DisplayProvisionedByConnectionWhere!]" },
    OR: { __type: "[DisplayProvisionedByConnectionWhere!]" },
    node: { __type: "ProvisionCodeWhere" },
    node_NOT: { __type: "ProvisionCodeWhere" },
  },
  DisplayProvisionedByCreateFieldInput: {
    node: { __type: "ProvisionCodeCreateInput!" },
  },
  DisplayProvisionedByDeleteFieldInput: {
    delete: { __type: "ProvisionCodeDeleteInput" },
    where: { __type: "DisplayProvisionedByConnectionWhere" },
  },
  DisplayProvisionedByDisconnectFieldInput: {
    disconnect: { __type: "ProvisionCodeDisconnectInput" },
    where: { __type: "DisplayProvisionedByConnectionWhere" },
  },
  DisplayProvisionedByFieldInput: {
    connect: { __type: "DisplayProvisionedByConnectFieldInput" },
    create: { __type: "DisplayProvisionedByCreateFieldInput" },
  },
  DisplayProvisionedByNodeAggregationWhereInput: {
    AND: { __type: "[DisplayProvisionedByNodeAggregationWhereInput!]" },
    OR: { __type: "[DisplayProvisionedByNodeAggregationWhereInput!]" },
    createdAt_EQUAL: { __type: "DateTime" },
    createdAt_GT: { __type: "DateTime" },
    createdAt_GTE: { __type: "DateTime" },
    createdAt_LT: { __type: "DateTime" },
    createdAt_LTE: { __type: "DateTime" },
    createdAt_MAX_EQUAL: { __type: "DateTime" },
    createdAt_MAX_GT: { __type: "DateTime" },
    createdAt_MAX_GTE: { __type: "DateTime" },
    createdAt_MAX_LT: { __type: "DateTime" },
    createdAt_MAX_LTE: { __type: "DateTime" },
    createdAt_MIN_EQUAL: { __type: "DateTime" },
    createdAt_MIN_GT: { __type: "DateTime" },
    createdAt_MIN_GTE: { __type: "DateTime" },
    createdAt_MIN_LT: { __type: "DateTime" },
    createdAt_MIN_LTE: { __type: "DateTime" },
    id_EQUAL: { __type: "ID" },
    slug_AVERAGE_EQUAL: { __type: "Float" },
    slug_AVERAGE_GT: { __type: "Float" },
    slug_AVERAGE_GTE: { __type: "Float" },
    slug_AVERAGE_LT: { __type: "Float" },
    slug_AVERAGE_LTE: { __type: "Float" },
    slug_EQUAL: { __type: "String" },
    slug_GT: { __type: "Int" },
    slug_GTE: { __type: "Int" },
    slug_LONGEST_EQUAL: { __type: "Int" },
    slug_LONGEST_GT: { __type: "Int" },
    slug_LONGEST_GTE: { __type: "Int" },
    slug_LONGEST_LT: { __type: "Int" },
    slug_LONGEST_LTE: { __type: "Int" },
    slug_LT: { __type: "Int" },
    slug_LTE: { __type: "Int" },
    slug_SHORTEST_EQUAL: { __type: "Int" },
    slug_SHORTEST_GT: { __type: "Int" },
    slug_SHORTEST_GTE: { __type: "Int" },
    slug_SHORTEST_LT: { __type: "Int" },
    slug_SHORTEST_LTE: { __type: "Int" },
  },
  DisplayProvisionedByRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ProvisionCode!" },
  },
  DisplayProvisionedByUpdateConnectionInput: {
    node: { __type: "ProvisionCodeUpdateInput" },
  },
  DisplayProvisionedByUpdateFieldInput: {
    connect: { __type: "DisplayProvisionedByConnectFieldInput" },
    create: { __type: "DisplayProvisionedByCreateFieldInput" },
    delete: { __type: "DisplayProvisionedByDeleteFieldInput" },
    disconnect: { __type: "DisplayProvisionedByDisconnectFieldInput" },
    update: { __type: "DisplayProvisionedByUpdateConnectionInput" },
    where: { __type: "DisplayProvisionedByConnectionWhere" },
  },
  DisplayRelationInput: {
    cluster: { __type: "DisplayClusterCreateFieldInput" },
    computers: { __type: "[DisplayComputersCreateFieldInput!]" },
    location: { __type: "DisplayLocationCreateFieldInput" },
    provisionedBy: { __type: "DisplayProvisionedByCreateFieldInput" },
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
    provisioned: { __type: "SortDirection" },
    provisionedAt: { __type: "SortDirection" },
  },
  DisplayUpdateInput: {
    cluster: { __type: "DisplayClusterUpdateFieldInput" },
    computers: { __type: "[DisplayComputersUpdateFieldInput!]" },
    label: { __type: "String" },
    location: { __type: "DisplayLocationUpdateFieldInput" },
    provisioned: { __type: "Boolean" },
    provisionedAt: { __type: "DateTime" },
    provisionedBy: { __type: "DisplayProvisionedByUpdateFieldInput" },
    screens: { __type: "[DisplayScreensUpdateFieldInput!]" },
  },
  DisplayWhere: {
    AND: { __type: "[DisplayWhere!]" },
    OR: { __type: "[DisplayWhere!]" },
    cluster: { __type: "ClusterWhere" },
    clusterAggregate: { __type: "DisplayClusterAggregateInput" },
    clusterConnection: { __type: "DisplayClusterConnectionWhere" },
    clusterConnection_NOT: { __type: "DisplayClusterConnectionWhere" },
    cluster_NOT: { __type: "ClusterWhere" },
    computers: { __type: "ComputerWhere" },
    computersAggregate: { __type: "DisplayComputersAggregateInput" },
    computersConnection: { __type: "DisplayComputersConnectionWhere" },
    computersConnection_NOT: { __type: "DisplayComputersConnectionWhere" },
    computers_NOT: { __type: "ComputerWhere" },
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
    provisioned: { __type: "Boolean" },
    provisionedAt: { __type: "DateTime" },
    provisionedAt_GT: { __type: "DateTime" },
    provisionedAt_GTE: { __type: "DateTime" },
    provisionedAt_IN: { __type: "[DateTime]" },
    provisionedAt_LT: { __type: "DateTime" },
    provisionedAt_LTE: { __type: "DateTime" },
    provisionedAt_NOT: { __type: "DateTime" },
    provisionedAt_NOT_IN: { __type: "[DateTime]" },
    provisionedBy: { __type: "ProvisionCodeWhere" },
    provisionedByAggregate: { __type: "DisplayProvisionedByAggregateInput" },
    provisionedByConnection: { __type: "DisplayProvisionedByConnectionWhere" },
    provisionedByConnection_NOT: {
      __type: "DisplayProvisionedByConnectionWhere",
    },
    provisionedBy_NOT: { __type: "ProvisionCodeWhere" },
    provisioned_NOT: { __type: "Boolean" },
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
  ProvisionCode: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    display: {
      __type: "Display",
      __args: { options: "DisplayOptions", where: "DisplayWhere" },
    },
    displayAggregate: {
      __type: "ProvisionCodeDisplayDisplayAggregationSelection",
      __args: { where: "DisplayWhere" },
    },
    displayConnection: {
      __type: "ProvisionCodeDisplayConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ProvisionCodeDisplayConnectionSort!]",
        where: "ProvisionCodeDisplayConnectionWhere",
      },
    },
    id: { __type: "ID" },
    slug: { __type: "String" },
  },
  ProvisionCodeAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    createdAt: { __type: "DateTimeAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    slug: { __type: "StringAggregateSelection!" },
  },
  ProvisionCodeConnectInput: {
    display: { __type: "ProvisionCodeDisplayConnectFieldInput" },
  },
  ProvisionCodeConnectWhere: { node: { __type: "ProvisionCodeWhere!" } },
  ProvisionCodeCreateInput: {
    createdAt: { __type: "DateTime" },
    display: { __type: "ProvisionCodeDisplayFieldInput" },
    slug: { __type: "String" },
  },
  ProvisionCodeDeleteInput: {
    display: { __type: "ProvisionCodeDisplayDeleteFieldInput" },
  },
  ProvisionCodeDisconnectInput: {
    display: { __type: "ProvisionCodeDisplayDisconnectFieldInput" },
  },
  ProvisionCodeDisplayAggregateInput: {
    AND: { __type: "[ProvisionCodeDisplayAggregateInput!]" },
    OR: { __type: "[ProvisionCodeDisplayAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ProvisionCodeDisplayNodeAggregationWhereInput" },
  },
  ProvisionCodeDisplayConnectFieldInput: {
    connect: { __type: "DisplayConnectInput" },
    where: { __type: "DisplayConnectWhere" },
  },
  ProvisionCodeDisplayConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ProvisionCodeDisplayRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ProvisionCodeDisplayConnectionSort: { node: { __type: "DisplaySort" } },
  ProvisionCodeDisplayConnectionWhere: {
    AND: { __type: "[ProvisionCodeDisplayConnectionWhere!]" },
    OR: { __type: "[ProvisionCodeDisplayConnectionWhere!]" },
    node: { __type: "DisplayWhere" },
    node_NOT: { __type: "DisplayWhere" },
  },
  ProvisionCodeDisplayCreateFieldInput: {
    node: { __type: "DisplayCreateInput!" },
  },
  ProvisionCodeDisplayDeleteFieldInput: {
    delete: { __type: "DisplayDeleteInput" },
    where: { __type: "ProvisionCodeDisplayConnectionWhere" },
  },
  ProvisionCodeDisplayDisconnectFieldInput: {
    disconnect: { __type: "DisplayDisconnectInput" },
    where: { __type: "ProvisionCodeDisplayConnectionWhere" },
  },
  ProvisionCodeDisplayDisplayAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ProvisionCodeDisplayDisplayNodeAggregateSelection" },
  },
  ProvisionCodeDisplayDisplayNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
    provisionedAt: { __type: "DateTimeAggregateSelection!" },
  },
  ProvisionCodeDisplayFieldInput: {
    connect: { __type: "ProvisionCodeDisplayConnectFieldInput" },
    create: { __type: "ProvisionCodeDisplayCreateFieldInput" },
  },
  ProvisionCodeDisplayNodeAggregationWhereInput: {
    AND: { __type: "[ProvisionCodeDisplayNodeAggregationWhereInput!]" },
    OR: { __type: "[ProvisionCodeDisplayNodeAggregationWhereInput!]" },
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
    provisionedAt_EQUAL: { __type: "DateTime" },
    provisionedAt_GT: { __type: "DateTime" },
    provisionedAt_GTE: { __type: "DateTime" },
    provisionedAt_LT: { __type: "DateTime" },
    provisionedAt_LTE: { __type: "DateTime" },
    provisionedAt_MAX_EQUAL: { __type: "DateTime" },
    provisionedAt_MAX_GT: { __type: "DateTime" },
    provisionedAt_MAX_GTE: { __type: "DateTime" },
    provisionedAt_MAX_LT: { __type: "DateTime" },
    provisionedAt_MAX_LTE: { __type: "DateTime" },
    provisionedAt_MIN_EQUAL: { __type: "DateTime" },
    provisionedAt_MIN_GT: { __type: "DateTime" },
    provisionedAt_MIN_GTE: { __type: "DateTime" },
    provisionedAt_MIN_LT: { __type: "DateTime" },
    provisionedAt_MIN_LTE: { __type: "DateTime" },
  },
  ProvisionCodeDisplayRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Display!" },
  },
  ProvisionCodeDisplayUpdateConnectionInput: {
    node: { __type: "DisplayUpdateInput" },
  },
  ProvisionCodeDisplayUpdateFieldInput: {
    connect: { __type: "ProvisionCodeDisplayConnectFieldInput" },
    create: { __type: "ProvisionCodeDisplayCreateFieldInput" },
    delete: { __type: "ProvisionCodeDisplayDeleteFieldInput" },
    disconnect: { __type: "ProvisionCodeDisplayDisconnectFieldInput" },
    update: { __type: "ProvisionCodeDisplayUpdateConnectionInput" },
    where: { __type: "ProvisionCodeDisplayConnectionWhere" },
  },
  ProvisionCodeOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[ProvisionCodeSort]" },
  },
  ProvisionCodeRelationInput: {
    display: { __type: "ProvisionCodeDisplayCreateFieldInput" },
  },
  ProvisionCodeSort: {
    createdAt: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    slug: { __type: "SortDirection" },
  },
  ProvisionCodeUpdateInput: {
    createdAt: { __type: "DateTime" },
    display: { __type: "ProvisionCodeDisplayUpdateFieldInput" },
    slug: { __type: "String" },
  },
  ProvisionCodeWhere: {
    AND: { __type: "[ProvisionCodeWhere!]" },
    OR: { __type: "[ProvisionCodeWhere!]" },
    createdAt: { __type: "DateTime" },
    createdAt_GT: { __type: "DateTime" },
    createdAt_GTE: { __type: "DateTime" },
    createdAt_IN: { __type: "[DateTime]" },
    createdAt_LT: { __type: "DateTime" },
    createdAt_LTE: { __type: "DateTime" },
    createdAt_NOT: { __type: "DateTime" },
    createdAt_NOT_IN: { __type: "[DateTime]" },
    display: { __type: "DisplayWhere" },
    displayAggregate: { __type: "ProvisionCodeDisplayAggregateInput" },
    displayConnection: { __type: "ProvisionCodeDisplayConnectionWhere" },
    displayConnection_NOT: { __type: "ProvisionCodeDisplayConnectionWhere" },
    display_NOT: { __type: "DisplayWhere" },
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
    slug: { __type: "String" },
    slug_CONTAINS: { __type: "String" },
    slug_ENDS_WITH: { __type: "String" },
    slug_IN: { __type: "[String]" },
    slug_NOT: { __type: "String" },
    slug_NOT_CONTAINS: { __type: "String" },
    slug_NOT_ENDS_WITH: { __type: "String" },
    slug_NOT_IN: { __type: "[String]" },
    slug_NOT_STARTS_WITH: { __type: "String" },
    slug_STARTS_WITH: { __type: "String" },
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
  UpdateCampaignsMutationResponse: {
    __typename: { __type: "String!" },
    campaigns: { __type: "[Campaign!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateClusterSchedulesMutationResponse: {
    __typename: { __type: "String!" },
    clusterSchedules: { __type: "[ClusterSchedule!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateClusterTiersMutationResponse: {
    __typename: { __type: "String!" },
    clusterTiers: { __type: "[ClusterTier!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateClustersMutationResponse: {
    __typename: { __type: "String!" },
    clusters: { __type: "[Cluster!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateComputersMutationResponse: {
    __typename: { __type: "String!" },
    computers: { __type: "[Computer!]!" },
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
  UpdateProvisionCodesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    provisionCodes: { __type: "[ProvisionCode!]!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    createCampaignAnalytics: {
      __type: "CreateCampaignAnalyticsMutationResponse!",
      __args: { input: "[CampaignAnalyticCreateInput!]!" },
    },
    createCampaigns: {
      __type: "CreateCampaignsMutationResponse!",
      __args: { input: "[CampaignCreateInput!]!" },
    },
    createClusterSchedules: {
      __type: "CreateClusterSchedulesMutationResponse!",
      __args: { input: "[ClusterScheduleCreateInput!]!" },
    },
    createClusterTiers: {
      __type: "CreateClusterTiersMutationResponse!",
      __args: { input: "[ClusterTierCreateInput!]!" },
    },
    createClusters: {
      __type: "CreateClustersMutationResponse!",
      __args: { input: "[ClusterCreateInput!]!" },
    },
    createComputers: {
      __type: "CreateComputersMutationResponse!",
      __args: { input: "[ComputerCreateInput!]!" },
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
    createProvisionCodes: {
      __type: "CreateProvisionCodesMutationResponse!",
      __args: { input: "[ProvisionCodeCreateInput!]!" },
    },
    deleteCampaignAnalytics: {
      __type: "DeleteInfo!",
      __args: {
        delete: "CampaignAnalyticDeleteInput",
        where: "CampaignAnalyticWhere",
      },
    },
    deleteCampaigns: {
      __type: "DeleteInfo!",
      __args: { delete: "CampaignDeleteInput", where: "CampaignWhere" },
    },
    deleteClusterSchedules: {
      __type: "DeleteInfo!",
      __args: {
        delete: "ClusterScheduleDeleteInput",
        where: "ClusterScheduleWhere",
      },
    },
    deleteClusterTiers: {
      __type: "DeleteInfo!",
      __args: { delete: "ClusterTierDeleteInput", where: "ClusterTierWhere" },
    },
    deleteClusters: {
      __type: "DeleteInfo!",
      __args: { delete: "ClusterDeleteInput", where: "ClusterWhere" },
    },
    deleteComputers: {
      __type: "DeleteInfo!",
      __args: { delete: "ComputerDeleteInput", where: "ComputerWhere" },
    },
    deleteDisplayLocations: {
      __type: "DeleteInfo!",
      __args: { where: "DisplayLocationWhere" },
    },
    deleteDisplayScreens: {
      __type: "DeleteInfo!",
      __args: { where: "DisplayScreenWhere" },
    },
    deleteDisplays: {
      __type: "DeleteInfo!",
      __args: { delete: "DisplayDeleteInput", where: "DisplayWhere" },
    },
    deleteProvisionCodes: {
      __type: "DeleteInfo!",
      __args: {
        delete: "ProvisionCodeDeleteInput",
        where: "ProvisionCodeWhere",
      },
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
    updateClusterSchedules: {
      __type: "UpdateClusterSchedulesMutationResponse!",
      __args: {
        connect: "ClusterScheduleConnectInput",
        create: "ClusterScheduleRelationInput",
        delete: "ClusterScheduleDeleteInput",
        disconnect: "ClusterScheduleDisconnectInput",
        update: "ClusterScheduleUpdateInput",
        where: "ClusterScheduleWhere",
      },
    },
    updateClusterTiers: {
      __type: "UpdateClusterTiersMutationResponse!",
      __args: {
        connect: "ClusterTierConnectInput",
        create: "ClusterTierRelationInput",
        delete: "ClusterTierDeleteInput",
        disconnect: "ClusterTierDisconnectInput",
        update: "ClusterTierUpdateInput",
        where: "ClusterTierWhere",
      },
    },
    updateClusters: {
      __type: "UpdateClustersMutationResponse!",
      __args: {
        connect: "ClusterConnectInput",
        create: "ClusterRelationInput",
        delete: "ClusterDeleteInput",
        disconnect: "ClusterDisconnectInput",
        update: "ClusterUpdateInput",
        where: "ClusterWhere",
      },
    },
    updateComputers: {
      __type: "UpdateComputersMutationResponse!",
      __args: {
        connect: "ComputerConnectInput",
        create: "ComputerRelationInput",
        delete: "ComputerDeleteInput",
        disconnect: "ComputerDisconnectInput",
        update: "ComputerUpdateInput",
        where: "ComputerWhere",
      },
    },
    updateDisplayLocations: {
      __type: "UpdateDisplayLocationsMutationResponse!",
      __args: {
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
    updateProvisionCodes: {
      __type: "UpdateProvisionCodesMutationResponse!",
      __args: {
        connect: "ProvisionCodeConnectInput",
        create: "ProvisionCodeRelationInput",
        delete: "ProvisionCodeDeleteInput",
        disconnect: "ProvisionCodeDisconnectInput",
        update: "ProvisionCodeUpdateInput",
        where: "ProvisionCodeWhere",
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
    campaigns: {
      __type: "[Campaign!]!",
      __args: { options: "CampaignOptions", where: "CampaignWhere" },
    },
    campaignsAggregate: {
      __type: "CampaignAggregateSelection!",
      __args: { where: "CampaignWhere" },
    },
    campaignsCount: { __type: "Int!", __args: { where: "CampaignWhere" } },
    clusterSchedules: {
      __type: "[ClusterSchedule!]!",
      __args: {
        options: "ClusterScheduleOptions",
        where: "ClusterScheduleWhere",
      },
    },
    clusterSchedulesAggregate: {
      __type: "ClusterScheduleAggregateSelection!",
      __args: { where: "ClusterScheduleWhere" },
    },
    clusterSchedulesCount: {
      __type: "Int!",
      __args: { where: "ClusterScheduleWhere" },
    },
    clusterTiers: {
      __type: "[ClusterTier!]!",
      __args: { options: "ClusterTierOptions", where: "ClusterTierWhere" },
    },
    clusterTiersAggregate: {
      __type: "ClusterTierAggregateSelection!",
      __args: { where: "ClusterTierWhere" },
    },
    clusterTiersCount: {
      __type: "Int!",
      __args: { where: "ClusterTierWhere" },
    },
    clusters: {
      __type: "[Cluster!]!",
      __args: { options: "ClusterOptions", where: "ClusterWhere" },
    },
    clustersAggregate: {
      __type: "ClusterAggregateSelection!",
      __args: { where: "ClusterWhere" },
    },
    clustersCount: { __type: "Int!", __args: { where: "ClusterWhere" } },
    computers: {
      __type: "[Computer!]!",
      __args: { options: "ComputerOptions", where: "ComputerWhere" },
    },
    computersAggregate: {
      __type: "ComputerAggregateSelection!",
      __args: { where: "ComputerWhere" },
    },
    computersCount: { __type: "Int!", __args: { where: "ComputerWhere" } },
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
    provisionCodes: {
      __type: "[ProvisionCode!]!",
      __args: { options: "ProvisionCodeOptions", where: "ProvisionCodeWhere" },
    },
    provisionCodesAggregate: {
      __type: "ProvisionCodeAggregateSelection!",
      __args: { where: "ProvisionCodeWhere" },
    },
    provisionCodesCount: {
      __type: "Int!",
      __args: { where: "ProvisionCodeWhere" },
    },
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
  assetFolder?: Maybe<ScalarsEnums["String"]>;
  assets?: Maybe<Array<Maybe<CampaignAsset>>>;
  customer?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  interactionTimeline?: Maybe<Array<Maybe<CampaignInteraction>>>;
  interactions?: Maybe<ScalarsEnums["Int"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  views?: Maybe<ScalarsEnums["Int"]>;
}

export interface CampaignAggregateSelection {
  __typename?: "CampaignAggregateSelection";
  assetFolder: StringAggregateSelection;
  count: ScalarsEnums["Int"];
  customer: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
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
  data?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface CampaignAnalyticAggregateSelection {
  __typename?: "CampaignAnalyticAggregateSelection";
  count: ScalarsEnums["Int"];
  data: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface CampaignAnalyticCampaignCampaignAggregationSelection {
  __typename?: "CampaignAnalyticCampaignCampaignAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<CampaignAnalyticCampaignCampaignNodeAggregateSelection>;
}

export interface CampaignAnalyticCampaignCampaignNodeAggregateSelection {
  __typename?: "CampaignAnalyticCampaignCampaignNodeAggregateSelection";
  assetFolder: StringAggregateSelection;
  customer: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
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
  mode?: Maybe<ScalarsEnums["Int"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  path?: Maybe<ScalarsEnums["String"]>;
  size?: Maybe<ScalarsEnums["Int"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface CampaignCampaignAnalyticAnalyticsAggregationSelection {
  __typename?: "CampaignCampaignAnalyticAnalyticsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<CampaignCampaignAnalyticAnalyticsNodeAggregateSelection>;
}

export interface CampaignCampaignAnalyticAnalyticsNodeAggregateSelection {
  __typename?: "CampaignCampaignAnalyticAnalyticsNodeAggregateSelection";
  data: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface CampaignInteraction {
  __typename?: "CampaignInteraction";
  interactions?: Maybe<ScalarsEnums["Int"]>;
  time?: Maybe<ScalarsEnums["DateTime"]>;
}

export interface Cluster {
  __typename?: "Cluster";
  displays: (args?: {
    options?: Maybe<DisplayOptions>;
    where?: Maybe<DisplayWhere>;
  }) => Maybe<Array<Maybe<Display>>>;
  displaysAggregate: (args?: {
    where?: Maybe<DisplayWhere>;
  }) => Maybe<ClusterDisplayDisplaysAggregationSelection>;
  displaysConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ClusterDisplaysConnectionSort>>;
    where?: Maybe<ClusterDisplaysConnectionWhere>;
  }) => ClusterDisplaysConnection;
  id: ScalarsEnums["ID"];
  label?: Maybe<ScalarsEnums["String"]>;
  schedule: (args?: {
    options?: Maybe<ClusterScheduleOptions>;
    where?: Maybe<ClusterScheduleWhere>;
  }) => Maybe<Array<Maybe<ClusterSchedule>>>;
  scheduleAggregate: (args?: {
    where?: Maybe<ClusterScheduleWhere>;
  }) => Maybe<ClusterClusterScheduleScheduleAggregationSelection>;
  scheduleConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ClusterScheduleConnectionSort>>;
    where?: Maybe<ClusterScheduleConnectionWhere>;
  }) => ClusterScheduleConnection;
  tiers: (args?: {
    options?: Maybe<ClusterTierOptions>;
    where?: Maybe<ClusterTierWhere>;
  }) => Maybe<Array<Maybe<ClusterTier>>>;
  tiersAggregate: (args?: {
    where?: Maybe<ClusterTierWhere>;
  }) => Maybe<ClusterClusterTierTiersAggregationSelection>;
  tiersConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ClusterTiersConnectionSort>>;
    where?: Maybe<ClusterTiersConnectionWhere>;
  }) => ClusterTiersConnection;
}

export interface ClusterAggregateSelection {
  __typename?: "ClusterAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  label: StringAggregateSelection;
}

export interface ClusterClusterScheduleScheduleAggregationSelection {
  __typename?: "ClusterClusterScheduleScheduleAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ClusterClusterScheduleScheduleNodeAggregateSelection>;
}

export interface ClusterClusterScheduleScheduleNodeAggregateSelection {
  __typename?: "ClusterClusterScheduleScheduleNodeAggregateSelection";
  endDate: DateTimeAggregateSelection;
  id: IDAggregateSelection;
  startDate: DateTimeAggregateSelection;
}

export interface ClusterClusterTierTiersAggregationSelection {
  __typename?: "ClusterClusterTierTiersAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ClusterClusterTierTiersNodeAggregateSelection>;
}

export interface ClusterClusterTierTiersNodeAggregateSelection {
  __typename?: "ClusterClusterTierTiersNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  percent: FloatAggregateSelection;
  slots: FloatAggregateSelection;
}

export interface ClusterDisplayDisplaysAggregationSelection {
  __typename?: "ClusterDisplayDisplaysAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ClusterDisplayDisplaysNodeAggregateSelection>;
}

export interface ClusterDisplayDisplaysNodeAggregateSelection {
  __typename?: "ClusterDisplayDisplaysNodeAggregateSelection";
  id: IDAggregateSelection;
  label: StringAggregateSelection;
  provisionedAt: DateTimeAggregateSelection;
}

export interface ClusterDisplaysConnection {
  __typename?: "ClusterDisplaysConnection";
  edges: Array<ClusterDisplaysRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ClusterDisplaysRelationship {
  __typename?: "ClusterDisplaysRelationship";
  cursor: ScalarsEnums["String"];
  node: Display;
}

export interface ClusterSchedule {
  __typename?: "ClusterSchedule";
  campaign: (args?: {
    options?: Maybe<CampaignOptions>;
    where?: Maybe<CampaignWhere>;
  }) => Maybe<Campaign>;
  campaignAggregate: (args?: {
    where?: Maybe<CampaignWhere>;
  }) => Maybe<ClusterScheduleCampaignCampaignAggregationSelection>;
  campaignConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ClusterScheduleCampaignConnectionSort>>;
    where?: Maybe<ClusterScheduleCampaignConnectionWhere>;
  }) => ClusterScheduleCampaignConnection;
  cluster: (args?: {
    options?: Maybe<ClusterOptions>;
    where?: Maybe<ClusterWhere>;
  }) => Maybe<Cluster>;
  clusterAggregate: (args?: {
    where?: Maybe<ClusterWhere>;
  }) => Maybe<ClusterScheduleClusterClusterAggregationSelection>;
  clusterConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ClusterScheduleClusterConnectionSort>>;
    where?: Maybe<ClusterScheduleClusterConnectionWhere>;
  }) => ClusterScheduleClusterConnection;
  endDate?: Maybe<ScalarsEnums["DateTime"]>;
  id: ScalarsEnums["ID"];
  startDate?: Maybe<ScalarsEnums["DateTime"]>;
  tier: (args?: {
    options?: Maybe<ClusterTierOptions>;
    where?: Maybe<ClusterTierWhere>;
  }) => Maybe<ClusterTier>;
  tierAggregate: (args?: {
    where?: Maybe<ClusterTierWhere>;
  }) => Maybe<ClusterScheduleClusterTierTierAggregationSelection>;
  tierConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ClusterScheduleTierConnectionSort>>;
    where?: Maybe<ClusterScheduleTierConnectionWhere>;
  }) => ClusterScheduleTierConnection;
}

export interface ClusterScheduleAggregateSelection {
  __typename?: "ClusterScheduleAggregateSelection";
  count: ScalarsEnums["Int"];
  endDate: DateTimeAggregateSelection;
  id: IDAggregateSelection;
  startDate: DateTimeAggregateSelection;
}

export interface ClusterScheduleCampaignCampaignAggregationSelection {
  __typename?: "ClusterScheduleCampaignCampaignAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ClusterScheduleCampaignCampaignNodeAggregateSelection>;
}

export interface ClusterScheduleCampaignCampaignNodeAggregateSelection {
  __typename?: "ClusterScheduleCampaignCampaignNodeAggregateSelection";
  assetFolder: StringAggregateSelection;
  customer: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface ClusterScheduleCampaignConnection {
  __typename?: "ClusterScheduleCampaignConnection";
  edges: Array<ClusterScheduleCampaignRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ClusterScheduleCampaignRelationship {
  __typename?: "ClusterScheduleCampaignRelationship";
  cursor: ScalarsEnums["String"];
  node: Campaign;
}

export interface ClusterScheduleClusterClusterAggregationSelection {
  __typename?: "ClusterScheduleClusterClusterAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ClusterScheduleClusterClusterNodeAggregateSelection>;
}

export interface ClusterScheduleClusterClusterNodeAggregateSelection {
  __typename?: "ClusterScheduleClusterClusterNodeAggregateSelection";
  id: IDAggregateSelection;
  label: StringAggregateSelection;
}

export interface ClusterScheduleClusterConnection {
  __typename?: "ClusterScheduleClusterConnection";
  edges: Array<ClusterScheduleClusterRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ClusterScheduleClusterRelationship {
  __typename?: "ClusterScheduleClusterRelationship";
  cursor: ScalarsEnums["String"];
  node: Cluster;
}

export interface ClusterScheduleClusterTierTierAggregationSelection {
  __typename?: "ClusterScheduleClusterTierTierAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ClusterScheduleClusterTierTierNodeAggregateSelection>;
}

export interface ClusterScheduleClusterTierTierNodeAggregateSelection {
  __typename?: "ClusterScheduleClusterTierTierNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  percent: FloatAggregateSelection;
  slots: FloatAggregateSelection;
}

export interface ClusterScheduleConnection {
  __typename?: "ClusterScheduleConnection";
  edges: Array<ClusterScheduleRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ClusterScheduleRelationship {
  __typename?: "ClusterScheduleRelationship";
  cursor: ScalarsEnums["String"];
  node: ClusterSchedule;
}

export interface ClusterScheduleTierConnection {
  __typename?: "ClusterScheduleTierConnection";
  edges: Array<ClusterScheduleTierRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ClusterScheduleTierRelationship {
  __typename?: "ClusterScheduleTierRelationship";
  cursor: ScalarsEnums["String"];
  node: ClusterTier;
}

export interface ClusterTier {
  __typename?: "ClusterTier";
  cluster: (args?: {
    options?: Maybe<ClusterOptions>;
    where?: Maybe<ClusterWhere>;
  }) => Maybe<Cluster>;
  clusterAggregate: (args?: {
    where?: Maybe<ClusterWhere>;
  }) => Maybe<ClusterTierClusterClusterAggregationSelection>;
  clusterConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ClusterTierClusterConnectionSort>>;
    where?: Maybe<ClusterTierClusterConnectionWhere>;
  }) => ClusterTierClusterConnection;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  percent?: Maybe<ScalarsEnums["Float"]>;
  slots?: Maybe<ScalarsEnums["Float"]>;
}

export interface ClusterTierAggregateSelection {
  __typename?: "ClusterTierAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  percent: FloatAggregateSelection;
  slots: FloatAggregateSelection;
}

export interface ClusterTierClusterClusterAggregationSelection {
  __typename?: "ClusterTierClusterClusterAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ClusterTierClusterClusterNodeAggregateSelection>;
}

export interface ClusterTierClusterClusterNodeAggregateSelection {
  __typename?: "ClusterTierClusterClusterNodeAggregateSelection";
  id: IDAggregateSelection;
  label: StringAggregateSelection;
}

export interface ClusterTierClusterConnection {
  __typename?: "ClusterTierClusterConnection";
  edges: Array<ClusterTierClusterRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ClusterTierClusterRelationship {
  __typename?: "ClusterTierClusterRelationship";
  cursor: ScalarsEnums["String"];
  node: Cluster;
}

export interface ClusterTiersConnection {
  __typename?: "ClusterTiersConnection";
  edges: Array<ClusterTiersRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ClusterTiersRelationship {
  __typename?: "ClusterTiersRelationship";
  cursor: ScalarsEnums["String"];
  node: ClusterTier;
}

export interface Computer {
  __typename?: "Computer";
  display: (args?: {
    options?: Maybe<DisplayOptions>;
    where?: Maybe<DisplayWhere>;
  }) => Maybe<Display>;
  displayAggregate: (args?: {
    where?: Maybe<DisplayWhere>;
  }) => Maybe<ComputerDisplayDisplayAggregationSelection>;
  displayConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ComputerDisplayConnectionSort>>;
    where?: Maybe<ComputerDisplayConnectionWhere>;
  }) => ComputerDisplayConnection;
  id: ScalarsEnums["ID"];
  label?: Maybe<ScalarsEnums["String"]>;
  os?: Maybe<ScalarsEnums["String"]>;
}

export interface ComputerAggregateSelection {
  __typename?: "ComputerAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  label: StringAggregateSelection;
  os: StringAggregateSelection;
}

export interface ComputerDisplayConnection {
  __typename?: "ComputerDisplayConnection";
  edges: Array<ComputerDisplayRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ComputerDisplayDisplayAggregationSelection {
  __typename?: "ComputerDisplayDisplayAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ComputerDisplayDisplayNodeAggregateSelection>;
}

export interface ComputerDisplayDisplayNodeAggregateSelection {
  __typename?: "ComputerDisplayDisplayNodeAggregateSelection";
  id: IDAggregateSelection;
  label: StringAggregateSelection;
  provisionedAt: DateTimeAggregateSelection;
}

export interface ComputerDisplayRelationship {
  __typename?: "ComputerDisplayRelationship";
  cursor: ScalarsEnums["String"];
  node: Display;
}

export interface CreateCampaignAnalyticsMutationResponse {
  __typename?: "CreateCampaignAnalyticsMutationResponse";
  campaignAnalytics: Array<CampaignAnalytic>;
  info: CreateInfo;
}

export interface CreateCampaignsMutationResponse {
  __typename?: "CreateCampaignsMutationResponse";
  campaigns: Array<Campaign>;
  info: CreateInfo;
}

export interface CreateClusterSchedulesMutationResponse {
  __typename?: "CreateClusterSchedulesMutationResponse";
  clusterSchedules: Array<ClusterSchedule>;
  info: CreateInfo;
}

export interface CreateClusterTiersMutationResponse {
  __typename?: "CreateClusterTiersMutationResponse";
  clusterTiers: Array<ClusterTier>;
  info: CreateInfo;
}

export interface CreateClustersMutationResponse {
  __typename?: "CreateClustersMutationResponse";
  clusters: Array<Cluster>;
  info: CreateInfo;
}

export interface CreateComputersMutationResponse {
  __typename?: "CreateComputersMutationResponse";
  computers: Array<Computer>;
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

export interface CreateProvisionCodesMutationResponse {
  __typename?: "CreateProvisionCodesMutationResponse";
  info: CreateInfo;
  provisionCodes: Array<ProvisionCode>;
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
  cluster: (args?: {
    options?: Maybe<ClusterOptions>;
    where?: Maybe<ClusterWhere>;
  }) => Maybe<Cluster>;
  clusterAggregate: (args?: {
    where?: Maybe<ClusterWhere>;
  }) => Maybe<DisplayClusterClusterAggregationSelection>;
  clusterConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<DisplayClusterConnectionSort>>;
    where?: Maybe<DisplayClusterConnectionWhere>;
  }) => DisplayClusterConnection;
  computers: (args?: {
    options?: Maybe<ComputerOptions>;
    where?: Maybe<ComputerWhere>;
  }) => Maybe<Array<Maybe<Computer>>>;
  computersAggregate: (args?: {
    where?: Maybe<ComputerWhere>;
  }) => Maybe<DisplayComputerComputersAggregationSelection>;
  computersConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<DisplayComputersConnectionSort>>;
    where?: Maybe<DisplayComputersConnectionWhere>;
  }) => DisplayComputersConnection;
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
  provisioned?: Maybe<ScalarsEnums["Boolean"]>;
  provisionedAt?: Maybe<ScalarsEnums["DateTime"]>;
  provisionedBy: (args?: {
    options?: Maybe<ProvisionCodeOptions>;
    where?: Maybe<ProvisionCodeWhere>;
  }) => Maybe<ProvisionCode>;
  provisionedByAggregate: (args?: {
    where?: Maybe<ProvisionCodeWhere>;
  }) => Maybe<DisplayProvisionCodeProvisionedByAggregationSelection>;
  provisionedByConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<DisplayProvisionedByConnectionSort>>;
    where?: Maybe<DisplayProvisionedByConnectionWhere>;
  }) => DisplayProvisionedByConnection;
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
  provisionedAt: DateTimeAggregateSelection;
}

export interface DisplayClusterClusterAggregationSelection {
  __typename?: "DisplayClusterClusterAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<DisplayClusterClusterNodeAggregateSelection>;
}

export interface DisplayClusterClusterNodeAggregateSelection {
  __typename?: "DisplayClusterClusterNodeAggregateSelection";
  id: IDAggregateSelection;
  label: StringAggregateSelection;
}

export interface DisplayClusterConnection {
  __typename?: "DisplayClusterConnection";
  edges: Array<DisplayClusterRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface DisplayClusterRelationship {
  __typename?: "DisplayClusterRelationship";
  cursor: ScalarsEnums["String"];
  node: Cluster;
}

export interface DisplayComputerComputersAggregationSelection {
  __typename?: "DisplayComputerComputersAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<DisplayComputerComputersNodeAggregateSelection>;
}

export interface DisplayComputerComputersNodeAggregateSelection {
  __typename?: "DisplayComputerComputersNodeAggregateSelection";
  id: IDAggregateSelection;
  label: StringAggregateSelection;
  os: StringAggregateSelection;
}

export interface DisplayComputersConnection {
  __typename?: "DisplayComputersConnection";
  edges: Array<DisplayComputersRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface DisplayComputersRelationship {
  __typename?: "DisplayComputersRelationship";
  cursor: ScalarsEnums["String"];
  node: Computer;
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

export interface DisplayLocationRelationship {
  __typename?: "DisplayLocationRelationship";
  cursor: ScalarsEnums["String"];
  node: DisplayLocation;
}

export interface DisplayProvisionCodeProvisionedByAggregationSelection {
  __typename?: "DisplayProvisionCodeProvisionedByAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<DisplayProvisionCodeProvisionedByNodeAggregateSelection>;
}

export interface DisplayProvisionCodeProvisionedByNodeAggregateSelection {
  __typename?: "DisplayProvisionCodeProvisionedByNodeAggregateSelection";
  createdAt: DateTimeAggregateSelection;
  id: IDAggregateSelection;
  slug: StringAggregateSelection;
}

export interface DisplayProvisionedByConnection {
  __typename?: "DisplayProvisionedByConnection";
  edges: Array<DisplayProvisionedByRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface DisplayProvisionedByRelationship {
  __typename?: "DisplayProvisionedByRelationship";
  cursor: ScalarsEnums["String"];
  node: ProvisionCode;
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

export interface ProvisionCode {
  __typename?: "ProvisionCode";
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  display: (args?: {
    options?: Maybe<DisplayOptions>;
    where?: Maybe<DisplayWhere>;
  }) => Maybe<Display>;
  displayAggregate: (args?: {
    where?: Maybe<DisplayWhere>;
  }) => Maybe<ProvisionCodeDisplayDisplayAggregationSelection>;
  displayConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ProvisionCodeDisplayConnectionSort>>;
    where?: Maybe<ProvisionCodeDisplayConnectionWhere>;
  }) => ProvisionCodeDisplayConnection;
  id?: Maybe<ScalarsEnums["ID"]>;
  slug?: Maybe<ScalarsEnums["String"]>;
}

export interface ProvisionCodeAggregateSelection {
  __typename?: "ProvisionCodeAggregateSelection";
  count: ScalarsEnums["Int"];
  createdAt: DateTimeAggregateSelection;
  id: IDAggregateSelection;
  slug: StringAggregateSelection;
}

export interface ProvisionCodeDisplayConnection {
  __typename?: "ProvisionCodeDisplayConnection";
  edges: Array<ProvisionCodeDisplayRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ProvisionCodeDisplayDisplayAggregationSelection {
  __typename?: "ProvisionCodeDisplayDisplayAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ProvisionCodeDisplayDisplayNodeAggregateSelection>;
}

export interface ProvisionCodeDisplayDisplayNodeAggregateSelection {
  __typename?: "ProvisionCodeDisplayDisplayNodeAggregateSelection";
  id: IDAggregateSelection;
  label: StringAggregateSelection;
  provisionedAt: DateTimeAggregateSelection;
}

export interface ProvisionCodeDisplayRelationship {
  __typename?: "ProvisionCodeDisplayRelationship";
  cursor: ScalarsEnums["String"];
  node: Display;
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

export interface UpdateCampaignsMutationResponse {
  __typename?: "UpdateCampaignsMutationResponse";
  campaigns: Array<Campaign>;
  info: UpdateInfo;
}

export interface UpdateClusterSchedulesMutationResponse {
  __typename?: "UpdateClusterSchedulesMutationResponse";
  clusterSchedules: Array<ClusterSchedule>;
  info: UpdateInfo;
}

export interface UpdateClusterTiersMutationResponse {
  __typename?: "UpdateClusterTiersMutationResponse";
  clusterTiers: Array<ClusterTier>;
  info: UpdateInfo;
}

export interface UpdateClustersMutationResponse {
  __typename?: "UpdateClustersMutationResponse";
  clusters: Array<Cluster>;
  info: UpdateInfo;
}

export interface UpdateComputersMutationResponse {
  __typename?: "UpdateComputersMutationResponse";
  computers: Array<Computer>;
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

export interface UpdateProvisionCodesMutationResponse {
  __typename?: "UpdateProvisionCodesMutationResponse";
  info: UpdateInfo;
  provisionCodes: Array<ProvisionCode>;
}

export interface Mutation {
  __typename?: "Mutation";
  createCampaignAnalytics: (args: {
    input: Array<CampaignAnalyticCreateInput>;
  }) => CreateCampaignAnalyticsMutationResponse;
  createCampaigns: (args: {
    input: Array<CampaignCreateInput>;
  }) => CreateCampaignsMutationResponse;
  createClusterSchedules: (args: {
    input: Array<ClusterScheduleCreateInput>;
  }) => CreateClusterSchedulesMutationResponse;
  createClusterTiers: (args: {
    input: Array<ClusterTierCreateInput>;
  }) => CreateClusterTiersMutationResponse;
  createClusters: (args: {
    input: Array<ClusterCreateInput>;
  }) => CreateClustersMutationResponse;
  createComputers: (args: {
    input: Array<ComputerCreateInput>;
  }) => CreateComputersMutationResponse;
  createDisplayLocations: (args: {
    input: Array<DisplayLocationCreateInput>;
  }) => CreateDisplayLocationsMutationResponse;
  createDisplayScreens: (args: {
    input: Array<DisplayScreenCreateInput>;
  }) => CreateDisplayScreensMutationResponse;
  createDisplays: (args: {
    input: Array<DisplayCreateInput>;
  }) => CreateDisplaysMutationResponse;
  createProvisionCodes: (args: {
    input: Array<ProvisionCodeCreateInput>;
  }) => CreateProvisionCodesMutationResponse;
  deleteCampaignAnalytics: (args?: {
    delete?: Maybe<CampaignAnalyticDeleteInput>;
    where?: Maybe<CampaignAnalyticWhere>;
  }) => DeleteInfo;
  deleteCampaigns: (args?: {
    delete?: Maybe<CampaignDeleteInput>;
    where?: Maybe<CampaignWhere>;
  }) => DeleteInfo;
  deleteClusterSchedules: (args?: {
    delete?: Maybe<ClusterScheduleDeleteInput>;
    where?: Maybe<ClusterScheduleWhere>;
  }) => DeleteInfo;
  deleteClusterTiers: (args?: {
    delete?: Maybe<ClusterTierDeleteInput>;
    where?: Maybe<ClusterTierWhere>;
  }) => DeleteInfo;
  deleteClusters: (args?: {
    delete?: Maybe<ClusterDeleteInput>;
    where?: Maybe<ClusterWhere>;
  }) => DeleteInfo;
  deleteComputers: (args?: {
    delete?: Maybe<ComputerDeleteInput>;
    where?: Maybe<ComputerWhere>;
  }) => DeleteInfo;
  deleteDisplayLocations: (args?: {
    where?: Maybe<DisplayLocationWhere>;
  }) => DeleteInfo;
  deleteDisplayScreens: (args?: {
    where?: Maybe<DisplayScreenWhere>;
  }) => DeleteInfo;
  deleteDisplays: (args?: {
    delete?: Maybe<DisplayDeleteInput>;
    where?: Maybe<DisplayWhere>;
  }) => DeleteInfo;
  deleteProvisionCodes: (args?: {
    delete?: Maybe<ProvisionCodeDeleteInput>;
    where?: Maybe<ProvisionCodeWhere>;
  }) => DeleteInfo;
  updateCampaignAnalytics: (args?: {
    connect?: Maybe<CampaignAnalyticConnectInput>;
    create?: Maybe<CampaignAnalyticRelationInput>;
    delete?: Maybe<CampaignAnalyticDeleteInput>;
    disconnect?: Maybe<CampaignAnalyticDisconnectInput>;
    update?: Maybe<CampaignAnalyticUpdateInput>;
    where?: Maybe<CampaignAnalyticWhere>;
  }) => UpdateCampaignAnalyticsMutationResponse;
  updateCampaigns: (args?: {
    connect?: Maybe<CampaignConnectInput>;
    create?: Maybe<CampaignRelationInput>;
    delete?: Maybe<CampaignDeleteInput>;
    disconnect?: Maybe<CampaignDisconnectInput>;
    update?: Maybe<CampaignUpdateInput>;
    where?: Maybe<CampaignWhere>;
  }) => UpdateCampaignsMutationResponse;
  updateClusterSchedules: (args?: {
    connect?: Maybe<ClusterScheduleConnectInput>;
    create?: Maybe<ClusterScheduleRelationInput>;
    delete?: Maybe<ClusterScheduleDeleteInput>;
    disconnect?: Maybe<ClusterScheduleDisconnectInput>;
    update?: Maybe<ClusterScheduleUpdateInput>;
    where?: Maybe<ClusterScheduleWhere>;
  }) => UpdateClusterSchedulesMutationResponse;
  updateClusterTiers: (args?: {
    connect?: Maybe<ClusterTierConnectInput>;
    create?: Maybe<ClusterTierRelationInput>;
    delete?: Maybe<ClusterTierDeleteInput>;
    disconnect?: Maybe<ClusterTierDisconnectInput>;
    update?: Maybe<ClusterTierUpdateInput>;
    where?: Maybe<ClusterTierWhere>;
  }) => UpdateClusterTiersMutationResponse;
  updateClusters: (args?: {
    connect?: Maybe<ClusterConnectInput>;
    create?: Maybe<ClusterRelationInput>;
    delete?: Maybe<ClusterDeleteInput>;
    disconnect?: Maybe<ClusterDisconnectInput>;
    update?: Maybe<ClusterUpdateInput>;
    where?: Maybe<ClusterWhere>;
  }) => UpdateClustersMutationResponse;
  updateComputers: (args?: {
    connect?: Maybe<ComputerConnectInput>;
    create?: Maybe<ComputerRelationInput>;
    delete?: Maybe<ComputerDeleteInput>;
    disconnect?: Maybe<ComputerDisconnectInput>;
    update?: Maybe<ComputerUpdateInput>;
    where?: Maybe<ComputerWhere>;
  }) => UpdateComputersMutationResponse;
  updateDisplayLocations: (args?: {
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
  updateProvisionCodes: (args?: {
    connect?: Maybe<ProvisionCodeConnectInput>;
    create?: Maybe<ProvisionCodeRelationInput>;
    delete?: Maybe<ProvisionCodeDeleteInput>;
    disconnect?: Maybe<ProvisionCodeDisconnectInput>;
    update?: Maybe<ProvisionCodeUpdateInput>;
    where?: Maybe<ProvisionCodeWhere>;
  }) => UpdateProvisionCodesMutationResponse;
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
  clusterSchedules: (args?: {
    options?: Maybe<ClusterScheduleOptions>;
    where?: Maybe<ClusterScheduleWhere>;
  }) => Array<ClusterSchedule>;
  clusterSchedulesAggregate: (args?: {
    where?: Maybe<ClusterScheduleWhere>;
  }) => ClusterScheduleAggregateSelection;
  clusterSchedulesCount: (args?: {
    where?: Maybe<ClusterScheduleWhere>;
  }) => ScalarsEnums["Int"];
  clusterTiers: (args?: {
    options?: Maybe<ClusterTierOptions>;
    where?: Maybe<ClusterTierWhere>;
  }) => Array<ClusterTier>;
  clusterTiersAggregate: (args?: {
    where?: Maybe<ClusterTierWhere>;
  }) => ClusterTierAggregateSelection;
  clusterTiersCount: (args?: {
    where?: Maybe<ClusterTierWhere>;
  }) => ScalarsEnums["Int"];
  clusters: (args?: {
    options?: Maybe<ClusterOptions>;
    where?: Maybe<ClusterWhere>;
  }) => Array<Cluster>;
  clustersAggregate: (args?: {
    where?: Maybe<ClusterWhere>;
  }) => ClusterAggregateSelection;
  clustersCount: (args?: {
    where?: Maybe<ClusterWhere>;
  }) => ScalarsEnums["Int"];
  computers: (args?: {
    options?: Maybe<ComputerOptions>;
    where?: Maybe<ComputerWhere>;
  }) => Array<Computer>;
  computersAggregate: (args?: {
    where?: Maybe<ComputerWhere>;
  }) => ComputerAggregateSelection;
  computersCount: (args?: {
    where?: Maybe<ComputerWhere>;
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
  provisionCodes: (args?: {
    options?: Maybe<ProvisionCodeOptions>;
    where?: Maybe<ProvisionCodeWhere>;
  }) => Array<ProvisionCode>;
  provisionCodesAggregate: (args?: {
    where?: Maybe<ProvisionCodeWhere>;
  }) => ProvisionCodeAggregateSelection;
  provisionCodesCount: (args?: {
    where?: Maybe<ProvisionCodeWhere>;
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
  CampaignCampaignAnalyticAnalyticsAggregationSelection: CampaignCampaignAnalyticAnalyticsAggregationSelection;
  CampaignCampaignAnalyticAnalyticsNodeAggregateSelection: CampaignCampaignAnalyticAnalyticsNodeAggregateSelection;
  CampaignInteraction: CampaignInteraction;
  Cluster: Cluster;
  ClusterAggregateSelection: ClusterAggregateSelection;
  ClusterClusterScheduleScheduleAggregationSelection: ClusterClusterScheduleScheduleAggregationSelection;
  ClusterClusterScheduleScheduleNodeAggregateSelection: ClusterClusterScheduleScheduleNodeAggregateSelection;
  ClusterClusterTierTiersAggregationSelection: ClusterClusterTierTiersAggregationSelection;
  ClusterClusterTierTiersNodeAggregateSelection: ClusterClusterTierTiersNodeAggregateSelection;
  ClusterDisplayDisplaysAggregationSelection: ClusterDisplayDisplaysAggregationSelection;
  ClusterDisplayDisplaysNodeAggregateSelection: ClusterDisplayDisplaysNodeAggregateSelection;
  ClusterDisplaysConnection: ClusterDisplaysConnection;
  ClusterDisplaysRelationship: ClusterDisplaysRelationship;
  ClusterSchedule: ClusterSchedule;
  ClusterScheduleAggregateSelection: ClusterScheduleAggregateSelection;
  ClusterScheduleCampaignCampaignAggregationSelection: ClusterScheduleCampaignCampaignAggregationSelection;
  ClusterScheduleCampaignCampaignNodeAggregateSelection: ClusterScheduleCampaignCampaignNodeAggregateSelection;
  ClusterScheduleCampaignConnection: ClusterScheduleCampaignConnection;
  ClusterScheduleCampaignRelationship: ClusterScheduleCampaignRelationship;
  ClusterScheduleClusterClusterAggregationSelection: ClusterScheduleClusterClusterAggregationSelection;
  ClusterScheduleClusterClusterNodeAggregateSelection: ClusterScheduleClusterClusterNodeAggregateSelection;
  ClusterScheduleClusterConnection: ClusterScheduleClusterConnection;
  ClusterScheduleClusterRelationship: ClusterScheduleClusterRelationship;
  ClusterScheduleClusterTierTierAggregationSelection: ClusterScheduleClusterTierTierAggregationSelection;
  ClusterScheduleClusterTierTierNodeAggregateSelection: ClusterScheduleClusterTierTierNodeAggregateSelection;
  ClusterScheduleConnection: ClusterScheduleConnection;
  ClusterScheduleRelationship: ClusterScheduleRelationship;
  ClusterScheduleTierConnection: ClusterScheduleTierConnection;
  ClusterScheduleTierRelationship: ClusterScheduleTierRelationship;
  ClusterTier: ClusterTier;
  ClusterTierAggregateSelection: ClusterTierAggregateSelection;
  ClusterTierClusterClusterAggregationSelection: ClusterTierClusterClusterAggregationSelection;
  ClusterTierClusterClusterNodeAggregateSelection: ClusterTierClusterClusterNodeAggregateSelection;
  ClusterTierClusterConnection: ClusterTierClusterConnection;
  ClusterTierClusterRelationship: ClusterTierClusterRelationship;
  ClusterTiersConnection: ClusterTiersConnection;
  ClusterTiersRelationship: ClusterTiersRelationship;
  Computer: Computer;
  ComputerAggregateSelection: ComputerAggregateSelection;
  ComputerDisplayConnection: ComputerDisplayConnection;
  ComputerDisplayDisplayAggregationSelection: ComputerDisplayDisplayAggregationSelection;
  ComputerDisplayDisplayNodeAggregateSelection: ComputerDisplayDisplayNodeAggregateSelection;
  ComputerDisplayRelationship: ComputerDisplayRelationship;
  CreateCampaignAnalyticsMutationResponse: CreateCampaignAnalyticsMutationResponse;
  CreateCampaignsMutationResponse: CreateCampaignsMutationResponse;
  CreateClusterSchedulesMutationResponse: CreateClusterSchedulesMutationResponse;
  CreateClusterTiersMutationResponse: CreateClusterTiersMutationResponse;
  CreateClustersMutationResponse: CreateClustersMutationResponse;
  CreateComputersMutationResponse: CreateComputersMutationResponse;
  CreateDisplayLocationsMutationResponse: CreateDisplayLocationsMutationResponse;
  CreateDisplayScreensMutationResponse: CreateDisplayScreensMutationResponse;
  CreateDisplaysMutationResponse: CreateDisplaysMutationResponse;
  CreateInfo: CreateInfo;
  CreateProvisionCodesMutationResponse: CreateProvisionCodesMutationResponse;
  DateTimeAggregateSelection: DateTimeAggregateSelection;
  DeleteInfo: DeleteInfo;
  Display: Display;
  DisplayAggregateSelection: DisplayAggregateSelection;
  DisplayClusterClusterAggregationSelection: DisplayClusterClusterAggregationSelection;
  DisplayClusterClusterNodeAggregateSelection: DisplayClusterClusterNodeAggregateSelection;
  DisplayClusterConnection: DisplayClusterConnection;
  DisplayClusterRelationship: DisplayClusterRelationship;
  DisplayComputerComputersAggregationSelection: DisplayComputerComputersAggregationSelection;
  DisplayComputerComputersNodeAggregateSelection: DisplayComputerComputersNodeAggregateSelection;
  DisplayComputersConnection: DisplayComputersConnection;
  DisplayComputersRelationship: DisplayComputersRelationship;
  DisplayDisplayLocationLocationAggregationSelection: DisplayDisplayLocationLocationAggregationSelection;
  DisplayDisplayLocationLocationNodeAggregateSelection: DisplayDisplayLocationLocationNodeAggregateSelection;
  DisplayDisplayScreenScreensAggregationSelection: DisplayDisplayScreenScreensAggregationSelection;
  DisplayDisplayScreenScreensNodeAggregateSelection: DisplayDisplayScreenScreensNodeAggregateSelection;
  DisplayLocation: DisplayLocation;
  DisplayLocationAggregateSelection: DisplayLocationAggregateSelection;
  DisplayLocationConnection: DisplayLocationConnection;
  DisplayLocationRelationship: DisplayLocationRelationship;
  DisplayProvisionCodeProvisionedByAggregationSelection: DisplayProvisionCodeProvisionedByAggregationSelection;
  DisplayProvisionCodeProvisionedByNodeAggregateSelection: DisplayProvisionCodeProvisionedByNodeAggregateSelection;
  DisplayProvisionedByConnection: DisplayProvisionedByConnection;
  DisplayProvisionedByRelationship: DisplayProvisionedByRelationship;
  DisplayScreen: DisplayScreen;
  DisplayScreenAggregateSelection: DisplayScreenAggregateSelection;
  DisplayScreensConnection: DisplayScreensConnection;
  DisplayScreensRelationship: DisplayScreensRelationship;
  FloatAggregateSelection: FloatAggregateSelection;
  IDAggregateSelection: IDAggregateSelection;
  Mutation: Mutation;
  PageInfo: PageInfo;
  ProvisionCode: ProvisionCode;
  ProvisionCodeAggregateSelection: ProvisionCodeAggregateSelection;
  ProvisionCodeDisplayConnection: ProvisionCodeDisplayConnection;
  ProvisionCodeDisplayDisplayAggregationSelection: ProvisionCodeDisplayDisplayAggregationSelection;
  ProvisionCodeDisplayDisplayNodeAggregateSelection: ProvisionCodeDisplayDisplayNodeAggregateSelection;
  ProvisionCodeDisplayRelationship: ProvisionCodeDisplayRelationship;
  Query: Query;
  StringAggregateSelection: StringAggregateSelection;
  Subscription: Subscription;
  UpdateCampaignAnalyticsMutationResponse: UpdateCampaignAnalyticsMutationResponse;
  UpdateCampaignsMutationResponse: UpdateCampaignsMutationResponse;
  UpdateClusterSchedulesMutationResponse: UpdateClusterSchedulesMutationResponse;
  UpdateClusterTiersMutationResponse: UpdateClusterTiersMutationResponse;
  UpdateClustersMutationResponse: UpdateClustersMutationResponse;
  UpdateComputersMutationResponse: UpdateComputersMutationResponse;
  UpdateDisplayLocationsMutationResponse: UpdateDisplayLocationsMutationResponse;
  UpdateDisplayScreensMutationResponse: UpdateDisplayScreensMutationResponse;
  UpdateDisplaysMutationResponse: UpdateDisplaysMutationResponse;
  UpdateInfo: UpdateInfo;
  UpdateProvisionCodesMutationResponse: UpdateProvisionCodesMutationResponse;
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
  | "CampaignCampaignAnalyticAnalyticsAggregationSelection"
  | "CampaignCampaignAnalyticAnalyticsNodeAggregateSelection"
  | "CampaignInteraction"
  | "Cluster"
  | "ClusterAggregateSelection"
  | "ClusterClusterScheduleScheduleAggregationSelection"
  | "ClusterClusterScheduleScheduleNodeAggregateSelection"
  | "ClusterClusterTierTiersAggregationSelection"
  | "ClusterClusterTierTiersNodeAggregateSelection"
  | "ClusterDisplayDisplaysAggregationSelection"
  | "ClusterDisplayDisplaysNodeAggregateSelection"
  | "ClusterDisplaysConnection"
  | "ClusterDisplaysRelationship"
  | "ClusterSchedule"
  | "ClusterScheduleAggregateSelection"
  | "ClusterScheduleCampaignCampaignAggregationSelection"
  | "ClusterScheduleCampaignCampaignNodeAggregateSelection"
  | "ClusterScheduleCampaignConnection"
  | "ClusterScheduleCampaignRelationship"
  | "ClusterScheduleClusterClusterAggregationSelection"
  | "ClusterScheduleClusterClusterNodeAggregateSelection"
  | "ClusterScheduleClusterConnection"
  | "ClusterScheduleClusterRelationship"
  | "ClusterScheduleClusterTierTierAggregationSelection"
  | "ClusterScheduleClusterTierTierNodeAggregateSelection"
  | "ClusterScheduleConnection"
  | "ClusterScheduleRelationship"
  | "ClusterScheduleTierConnection"
  | "ClusterScheduleTierRelationship"
  | "ClusterTier"
  | "ClusterTierAggregateSelection"
  | "ClusterTierClusterClusterAggregationSelection"
  | "ClusterTierClusterClusterNodeAggregateSelection"
  | "ClusterTierClusterConnection"
  | "ClusterTierClusterRelationship"
  | "ClusterTiersConnection"
  | "ClusterTiersRelationship"
  | "Computer"
  | "ComputerAggregateSelection"
  | "ComputerDisplayConnection"
  | "ComputerDisplayDisplayAggregationSelection"
  | "ComputerDisplayDisplayNodeAggregateSelection"
  | "ComputerDisplayRelationship"
  | "CreateCampaignAnalyticsMutationResponse"
  | "CreateCampaignsMutationResponse"
  | "CreateClusterSchedulesMutationResponse"
  | "CreateClusterTiersMutationResponse"
  | "CreateClustersMutationResponse"
  | "CreateComputersMutationResponse"
  | "CreateDisplayLocationsMutationResponse"
  | "CreateDisplayScreensMutationResponse"
  | "CreateDisplaysMutationResponse"
  | "CreateInfo"
  | "CreateProvisionCodesMutationResponse"
  | "DateTimeAggregateSelection"
  | "DeleteInfo"
  | "Display"
  | "DisplayAggregateSelection"
  | "DisplayClusterClusterAggregationSelection"
  | "DisplayClusterClusterNodeAggregateSelection"
  | "DisplayClusterConnection"
  | "DisplayClusterRelationship"
  | "DisplayComputerComputersAggregationSelection"
  | "DisplayComputerComputersNodeAggregateSelection"
  | "DisplayComputersConnection"
  | "DisplayComputersRelationship"
  | "DisplayDisplayLocationLocationAggregationSelection"
  | "DisplayDisplayLocationLocationNodeAggregateSelection"
  | "DisplayDisplayScreenScreensAggregationSelection"
  | "DisplayDisplayScreenScreensNodeAggregateSelection"
  | "DisplayLocation"
  | "DisplayLocationAggregateSelection"
  | "DisplayLocationConnection"
  | "DisplayLocationRelationship"
  | "DisplayProvisionCodeProvisionedByAggregationSelection"
  | "DisplayProvisionCodeProvisionedByNodeAggregateSelection"
  | "DisplayProvisionedByConnection"
  | "DisplayProvisionedByRelationship"
  | "DisplayScreen"
  | "DisplayScreenAggregateSelection"
  | "DisplayScreensConnection"
  | "DisplayScreensRelationship"
  | "FloatAggregateSelection"
  | "IDAggregateSelection"
  | "Mutation"
  | "PageInfo"
  | "ProvisionCode"
  | "ProvisionCodeAggregateSelection"
  | "ProvisionCodeDisplayConnection"
  | "ProvisionCodeDisplayDisplayAggregationSelection"
  | "ProvisionCodeDisplayDisplayNodeAggregateSelection"
  | "ProvisionCodeDisplayRelationship"
  | "Query"
  | "StringAggregateSelection"
  | "Subscription"
  | "UpdateCampaignAnalyticsMutationResponse"
  | "UpdateCampaignsMutationResponse"
  | "UpdateClusterSchedulesMutationResponse"
  | "UpdateClusterTiersMutationResponse"
  | "UpdateClustersMutationResponse"
  | "UpdateComputersMutationResponse"
  | "UpdateDisplayLocationsMutationResponse"
  | "UpdateDisplayScreensMutationResponse"
  | "UpdateDisplaysMutationResponse"
  | "UpdateInfo"
  | "UpdateProvisionCodesMutationResponse";

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
