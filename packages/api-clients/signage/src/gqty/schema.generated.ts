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

export interface CampaignConnectInput {
  analytics?: Maybe<Array<CampaignAnalyticsConnectFieldInput>>;
}

export interface CampaignConnectWhere {
  node: CampaignWhere;
}

export interface CampaignCreateInput {
  analytics?: Maybe<CampaignAnalyticsFieldInput>;
  customer?: Maybe<Scalars["String"]>;
  endDate?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
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
  customer?: Maybe<SortDirection>;
  endDate?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  startDate?: Maybe<SortDirection>;
}

export interface CampaignUpdateInput {
  analytics?: Maybe<Array<CampaignAnalyticsUpdateFieldInput>>;
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

export interface ClusterConnectInput {
  displays?: Maybe<Array<ClusterDisplaysConnectFieldInput>>;
}

export interface ClusterConnectWhere {
  node: ClusterWhere;
}

export interface ClusterCreateInput {
  displays?: Maybe<ClusterDisplaysFieldInput>;
  label?: Maybe<Scalars["String"]>;
}

export interface ClusterDeleteInput {
  displays?: Maybe<Array<ClusterDisplaysDeleteFieldInput>>;
}

export interface ClusterDisconnectInput {
  displays?: Maybe<Array<ClusterDisplaysDisconnectFieldInput>>;
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
}

/** Fields to sort Clusters by. The order in which sorts are applied is not guaranteed when specifying many fields in one ClusterSort object. */
export interface ClusterSort {
  id?: Maybe<SortDirection>;
  label?: Maybe<SortDirection>;
}

export interface ClusterUpdateInput {
  displays?: Maybe<Array<ClusterDisplaysUpdateFieldInput>>;
  label?: Maybe<Scalars["String"]>;
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
  screens?: Maybe<DisplayScreensFieldInput>;
}

export interface DisplayDeleteInput {
  cluster?: Maybe<DisplayClusterDeleteFieldInput>;
  computers?: Maybe<Array<DisplayComputersDeleteFieldInput>>;
  location?: Maybe<DisplayLocationDeleteFieldInput>;
  screens?: Maybe<Array<DisplayScreensDeleteFieldInput>>;
}

export interface DisplayDisconnectInput {
  cluster?: Maybe<DisplayClusterDisconnectFieldInput>;
  computers?: Maybe<Array<DisplayComputersDisconnectFieldInput>>;
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

export interface DisplayRelationInput {
  cluster?: Maybe<DisplayClusterCreateFieldInput>;
  computers?: Maybe<Array<DisplayComputersCreateFieldInput>>;
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
  cluster?: Maybe<DisplayClusterUpdateFieldInput>;
  computers?: Maybe<Array<DisplayComputersUpdateFieldInput>>;
  label?: Maybe<Scalars["String"]>;
  location?: Maybe<DisplayLocationUpdateFieldInput>;
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
    assets: { __type: "[CampaignAsset]" },
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
    id: { __type: "IDAggregateSelection!" },
    ts: { __type: "DateTimeAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
    value: { __type: "StringAggregateSelection!" },
  },
  CampaignConnectInput: {
    analytics: { __type: "[CampaignAnalyticsConnectFieldInput!]" },
  },
  CampaignConnectWhere: { node: { __type: "CampaignWhere!" } },
  CampaignCreateInput: {
    analytics: { __type: "CampaignAnalyticsFieldInput" },
    customer: { __type: "String" },
    endDate: { __type: "DateTime" },
    name: { __type: "String" },
    startDate: { __type: "DateTime" },
  },
  CampaignDeleteInput: {
    analytics: { __type: "[CampaignAnalyticsDeleteFieldInput!]" },
  },
  CampaignDisconnectInput: {
    analytics: { __type: "[CampaignAnalyticsDisconnectFieldInput!]" },
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
    customer: { __type: "SortDirection" },
    endDate: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    startDate: { __type: "SortDirection" },
  },
  CampaignUpdateInput: {
    analytics: { __type: "[CampaignAnalyticsUpdateFieldInput!]" },
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
  },
  ClusterAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    label: { __type: "StringAggregateSelection!" },
  },
  ClusterConnectInput: {
    displays: { __type: "[ClusterDisplaysConnectFieldInput!]" },
  },
  ClusterConnectWhere: { node: { __type: "ClusterWhere!" } },
  ClusterCreateInput: {
    displays: { __type: "ClusterDisplaysFieldInput" },
    label: { __type: "String" },
  },
  ClusterDeleteInput: {
    displays: { __type: "[ClusterDisplaysDeleteFieldInput!]" },
  },
  ClusterDisconnectInput: {
    displays: { __type: "[ClusterDisplaysDisconnectFieldInput!]" },
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
  },
  ClusterSort: {
    id: { __type: "SortDirection" },
    label: { __type: "SortDirection" },
  },
  ClusterUpdateInput: {
    displays: { __type: "[ClusterDisplaysUpdateFieldInput!]" },
    label: { __type: "String" },
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
    screens: { __type: "[DisplayScreensConnectFieldInput!]" },
  },
  DisplayConnectWhere: { node: { __type: "DisplayWhere!" } },
  DisplayCreateInput: {
    cluster: { __type: "DisplayClusterFieldInput" },
    computers: { __type: "DisplayComputersFieldInput" },
    label: { __type: "String" },
    location: { __type: "DisplayLocationFieldInput" },
    screens: { __type: "DisplayScreensFieldInput" },
  },
  DisplayDeleteInput: {
    cluster: { __type: "DisplayClusterDeleteFieldInput" },
    computers: { __type: "[DisplayComputersDeleteFieldInput!]" },
    location: { __type: "DisplayLocationDeleteFieldInput" },
    screens: { __type: "[DisplayScreensDeleteFieldInput!]" },
  },
  DisplayDisconnectInput: {
    cluster: { __type: "DisplayClusterDisconnectFieldInput" },
    computers: { __type: "[DisplayComputersDisconnectFieldInput!]" },
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
  DisplayRelationInput: {
    cluster: { __type: "DisplayClusterCreateFieldInput" },
    computers: { __type: "[DisplayComputersCreateFieldInput!]" },
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
    cluster: { __type: "DisplayClusterUpdateFieldInput" },
    computers: { __type: "[DisplayComputersUpdateFieldInput!]" },
    label: { __type: "String" },
    location: { __type: "DisplayLocationUpdateFieldInput" },
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
  UpdateCampaignsMutationResponse: {
    __typename: { __type: "String!" },
    campaigns: { __type: "[Campaign!]!" },
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
  assets?: Maybe<Array<Maybe<CampaignAsset>>>;
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
  id: IDAggregateSelection;
  ts: DateTimeAggregateSelection;
  type: StringAggregateSelection;
  value: StringAggregateSelection;
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
}

export interface ClusterAggregateSelection {
  __typename?: "ClusterAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  label: StringAggregateSelection;
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

export interface UpdateCampaignsMutationResponse {
  __typename?: "UpdateCampaignsMutationResponse";
  campaigns: Array<Campaign>;
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

export interface Mutation {
  __typename?: "Mutation";
  createCampaignAnalytics: (args: {
    input: Array<CampaignAnalyticCreateInput>;
  }) => CreateCampaignAnalyticsMutationResponse;
  createCampaigns: (args: {
    input: Array<CampaignCreateInput>;
  }) => CreateCampaignsMutationResponse;
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
  deleteCampaignAnalytics: (args?: {
    delete?: Maybe<CampaignAnalyticDeleteInput>;
    where?: Maybe<CampaignAnalyticWhere>;
  }) => DeleteInfo;
  deleteCampaigns: (args?: {
    delete?: Maybe<CampaignDeleteInput>;
    where?: Maybe<CampaignWhere>;
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
  Cluster: Cluster;
  ClusterAggregateSelection: ClusterAggregateSelection;
  ClusterDisplayDisplaysAggregationSelection: ClusterDisplayDisplaysAggregationSelection;
  ClusterDisplayDisplaysNodeAggregateSelection: ClusterDisplayDisplaysNodeAggregateSelection;
  ClusterDisplaysConnection: ClusterDisplaysConnection;
  ClusterDisplaysRelationship: ClusterDisplaysRelationship;
  Computer: Computer;
  ComputerAggregateSelection: ComputerAggregateSelection;
  ComputerDisplayConnection: ComputerDisplayConnection;
  ComputerDisplayDisplayAggregationSelection: ComputerDisplayDisplayAggregationSelection;
  ComputerDisplayDisplayNodeAggregateSelection: ComputerDisplayDisplayNodeAggregateSelection;
  ComputerDisplayRelationship: ComputerDisplayRelationship;
  CreateCampaignAnalyticsMutationResponse: CreateCampaignAnalyticsMutationResponse;
  CreateCampaignsMutationResponse: CreateCampaignsMutationResponse;
  CreateClustersMutationResponse: CreateClustersMutationResponse;
  CreateComputersMutationResponse: CreateComputersMutationResponse;
  CreateDisplayLocationsMutationResponse: CreateDisplayLocationsMutationResponse;
  CreateDisplayScreensMutationResponse: CreateDisplayScreensMutationResponse;
  CreateDisplaysMutationResponse: CreateDisplaysMutationResponse;
  CreateInfo: CreateInfo;
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
  UpdateCampaignsMutationResponse: UpdateCampaignsMutationResponse;
  UpdateClustersMutationResponse: UpdateClustersMutationResponse;
  UpdateComputersMutationResponse: UpdateComputersMutationResponse;
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
  | "CampaignCampaignAnalyticAnalyticsAggregationSelection"
  | "CampaignCampaignAnalyticAnalyticsNodeAggregateSelection"
  | "Cluster"
  | "ClusterAggregateSelection"
  | "ClusterDisplayDisplaysAggregationSelection"
  | "ClusterDisplayDisplaysNodeAggregateSelection"
  | "ClusterDisplaysConnection"
  | "ClusterDisplaysRelationship"
  | "Computer"
  | "ComputerAggregateSelection"
  | "ComputerDisplayConnection"
  | "ComputerDisplayDisplayAggregationSelection"
  | "ComputerDisplayDisplayNodeAggregateSelection"
  | "ComputerDisplayRelationship"
  | "CreateCampaignAnalyticsMutationResponse"
  | "CreateCampaignsMutationResponse"
  | "CreateClustersMutationResponse"
  | "CreateComputersMutationResponse"
  | "CreateDisplayLocationsMutationResponse"
  | "CreateDisplayScreensMutationResponse"
  | "CreateDisplaysMutationResponse"
  | "CreateInfo"
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
  | "UpdateCampaignsMutationResponse"
  | "UpdateClustersMutationResponse"
  | "UpdateComputersMutationResponse"
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
