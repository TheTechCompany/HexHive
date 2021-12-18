/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from "gqty";

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

export interface ComputerConnectInput {
  template?: Maybe<ComputerTemplateConnectFieldInput>;
}

export interface ComputerConnectWhere {
  node: ComputerWhere;
}

export interface ComputerCreateInput {
  agentVersion?: Maybe<Scalars["String"]>;
  cpu?: Maybe<Scalars["Float"]>;
  hostname?: Maybe<Scalars["String"]>;
  memory?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  os?: Maybe<Scalars["String"]>;
  template?: Maybe<ComputerTemplateFieldInput>;
}

export interface ComputerDeleteInput {
  template?: Maybe<ComputerTemplateDeleteFieldInput>;
}

export interface ComputerDisconnectInput {
  template?: Maybe<ComputerTemplateDisconnectFieldInput>;
}

export interface ComputerOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more ComputerSort objects to sort Computers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ComputerSort>>>;
}

export interface ComputerRelationInput {
  template?: Maybe<ComputerTemplateCreateFieldInput>;
}

/** Fields to sort Computers by. The order in which sorts are applied is not guaranteed when specifying many fields in one ComputerSort object. */
export interface ComputerSort {
  agentVersion?: Maybe<SortDirection>;
  cpu?: Maybe<SortDirection>;
  hostname?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  memory?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  os?: Maybe<SortDirection>;
}

export interface ComputerTemplateAggregateInput {
  AND?: Maybe<Array<ComputerTemplateAggregateInput>>;
  OR?: Maybe<Array<ComputerTemplateAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ComputerTemplateNodeAggregationWhereInput>;
}

export interface ComputerTemplateConnectFieldInput {
  connect?: Maybe<ComputerTemplateConnectInput>;
  where?: Maybe<ComputerTemplateConnectWhere>;
}

export interface ComputerTemplateConnectInput {
  peripherals?: Maybe<Array<ComputerTemplatePeripheralsConnectFieldInput>>;
  plugins?: Maybe<Array<ComputerTemplatePluginsConnectFieldInput>>;
  screens?: Maybe<Array<ComputerTemplateScreensConnectFieldInput>>;
  storage?: Maybe<Array<ComputerTemplateStorageConnectFieldInput>>;
}

export interface ComputerTemplateConnectWhere {
  node: ComputerTemplateWhere;
}

export interface ComputerTemplateConnectionSort {
  node?: Maybe<ComputerTemplateSort>;
}

export interface ComputerTemplateConnectionWhere {
  AND?: Maybe<Array<ComputerTemplateConnectionWhere>>;
  OR?: Maybe<Array<ComputerTemplateConnectionWhere>>;
  node?: Maybe<ComputerTemplateWhere>;
  node_NOT?: Maybe<ComputerTemplateWhere>;
}

export interface ComputerTemplateCreateFieldInput {
  node: ComputerTemplateCreateInput;
}

export interface ComputerTemplateCreateInput {
  name?: Maybe<Scalars["String"]>;
  peripherals?: Maybe<ComputerTemplatePeripheralsFieldInput>;
  plugins?: Maybe<ComputerTemplatePluginsFieldInput>;
  screens?: Maybe<ComputerTemplateScreensFieldInput>;
  storage?: Maybe<ComputerTemplateStorageFieldInput>;
}

export interface ComputerTemplateDeleteFieldInput {
  delete?: Maybe<ComputerTemplateDeleteInput>;
  where?: Maybe<ComputerTemplateConnectionWhere>;
}

export interface ComputerTemplateDeleteInput {
  peripherals?: Maybe<Array<ComputerTemplatePeripheralsDeleteFieldInput>>;
  plugins?: Maybe<Array<ComputerTemplatePluginsDeleteFieldInput>>;
  screens?: Maybe<Array<ComputerTemplateScreensDeleteFieldInput>>;
  storage?: Maybe<Array<ComputerTemplateStorageDeleteFieldInput>>;
}

export interface ComputerTemplateDisconnectFieldInput {
  disconnect?: Maybe<ComputerTemplateDisconnectInput>;
  where?: Maybe<ComputerTemplateConnectionWhere>;
}

export interface ComputerTemplateDisconnectInput {
  peripherals?: Maybe<Array<ComputerTemplatePeripheralsDisconnectFieldInput>>;
  plugins?: Maybe<Array<ComputerTemplatePluginsDisconnectFieldInput>>;
  screens?: Maybe<Array<ComputerTemplateScreensDisconnectFieldInput>>;
  storage?: Maybe<Array<ComputerTemplateStorageDisconnectFieldInput>>;
}

export interface ComputerTemplateFieldInput {
  connect?: Maybe<ComputerTemplateConnectFieldInput>;
  create?: Maybe<ComputerTemplateCreateFieldInput>;
}

export interface ComputerTemplateNodeAggregationWhereInput {
  AND?: Maybe<Array<ComputerTemplateNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ComputerTemplateNodeAggregationWhereInput>>;
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

export interface ComputerTemplateOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more ComputerTemplateSort objects to sort ComputerTemplates by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ComputerTemplateSort>>>;
}

export interface ComputerTemplatePeripheralsAggregateInput {
  AND?: Maybe<Array<ComputerTemplatePeripheralsAggregateInput>>;
  OR?: Maybe<Array<ComputerTemplatePeripheralsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ComputerTemplatePeripheralsNodeAggregationWhereInput>;
}

export interface ComputerTemplatePeripheralsConnectFieldInput {
  connect?: Maybe<Array<PeripheralTemplateConnectInput>>;
  where?: Maybe<PeripheralTemplateConnectWhere>;
}

export interface ComputerTemplatePeripheralsConnectionSort {
  node?: Maybe<PeripheralTemplateSort>;
}

export interface ComputerTemplatePeripheralsConnectionWhere {
  AND?: Maybe<Array<ComputerTemplatePeripheralsConnectionWhere>>;
  OR?: Maybe<Array<ComputerTemplatePeripheralsConnectionWhere>>;
  node?: Maybe<PeripheralTemplateWhere>;
  node_NOT?: Maybe<PeripheralTemplateWhere>;
}

export interface ComputerTemplatePeripheralsCreateFieldInput {
  node: PeripheralTemplateCreateInput;
}

export interface ComputerTemplatePeripheralsDeleteFieldInput {
  delete?: Maybe<PeripheralTemplateDeleteInput>;
  where?: Maybe<ComputerTemplatePeripheralsConnectionWhere>;
}

export interface ComputerTemplatePeripheralsDisconnectFieldInput {
  disconnect?: Maybe<PeripheralTemplateDisconnectInput>;
  where?: Maybe<ComputerTemplatePeripheralsConnectionWhere>;
}

export interface ComputerTemplatePeripheralsFieldInput {
  connect?: Maybe<Array<ComputerTemplatePeripheralsConnectFieldInput>>;
  create?: Maybe<Array<ComputerTemplatePeripheralsCreateFieldInput>>;
}

export interface ComputerTemplatePeripheralsNodeAggregationWhereInput {
  AND?: Maybe<Array<ComputerTemplatePeripheralsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ComputerTemplatePeripheralsNodeAggregationWhereInput>>;
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

export interface ComputerTemplatePeripheralsUpdateConnectionInput {
  node?: Maybe<PeripheralTemplateUpdateInput>;
}

export interface ComputerTemplatePeripheralsUpdateFieldInput {
  connect?: Maybe<Array<ComputerTemplatePeripheralsConnectFieldInput>>;
  create?: Maybe<Array<ComputerTemplatePeripheralsCreateFieldInput>>;
  delete?: Maybe<Array<ComputerTemplatePeripheralsDeleteFieldInput>>;
  disconnect?: Maybe<Array<ComputerTemplatePeripheralsDisconnectFieldInput>>;
  update?: Maybe<ComputerTemplatePeripheralsUpdateConnectionInput>;
  where?: Maybe<ComputerTemplatePeripheralsConnectionWhere>;
}

export interface ComputerTemplatePluginsAggregateInput {
  AND?: Maybe<Array<ComputerTemplatePluginsAggregateInput>>;
  OR?: Maybe<Array<ComputerTemplatePluginsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ComputerTemplatePluginsNodeAggregationWhereInput>;
}

export interface ComputerTemplatePluginsConnectFieldInput {
  where?: Maybe<MachinePluginConnectWhere>;
}

export interface ComputerTemplatePluginsConnectionSort {
  node?: Maybe<MachinePluginSort>;
}

export interface ComputerTemplatePluginsConnectionWhere {
  AND?: Maybe<Array<ComputerTemplatePluginsConnectionWhere>>;
  OR?: Maybe<Array<ComputerTemplatePluginsConnectionWhere>>;
  node?: Maybe<MachinePluginWhere>;
  node_NOT?: Maybe<MachinePluginWhere>;
}

export interface ComputerTemplatePluginsCreateFieldInput {
  node: MachinePluginCreateInput;
}

export interface ComputerTemplatePluginsDeleteFieldInput {
  where?: Maybe<ComputerTemplatePluginsConnectionWhere>;
}

export interface ComputerTemplatePluginsDisconnectFieldInput {
  where?: Maybe<ComputerTemplatePluginsConnectionWhere>;
}

export interface ComputerTemplatePluginsFieldInput {
  connect?: Maybe<Array<ComputerTemplatePluginsConnectFieldInput>>;
  create?: Maybe<Array<ComputerTemplatePluginsCreateFieldInput>>;
}

export interface ComputerTemplatePluginsNodeAggregationWhereInput {
  AND?: Maybe<Array<ComputerTemplatePluginsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ComputerTemplatePluginsNodeAggregationWhereInput>>;
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

export interface ComputerTemplatePluginsUpdateConnectionInput {
  node?: Maybe<MachinePluginUpdateInput>;
}

export interface ComputerTemplatePluginsUpdateFieldInput {
  connect?: Maybe<Array<ComputerTemplatePluginsConnectFieldInput>>;
  create?: Maybe<Array<ComputerTemplatePluginsCreateFieldInput>>;
  delete?: Maybe<Array<ComputerTemplatePluginsDeleteFieldInput>>;
  disconnect?: Maybe<Array<ComputerTemplatePluginsDisconnectFieldInput>>;
  update?: Maybe<ComputerTemplatePluginsUpdateConnectionInput>;
  where?: Maybe<ComputerTemplatePluginsConnectionWhere>;
}

export interface ComputerTemplateRelationInput {
  peripherals?: Maybe<Array<ComputerTemplatePeripheralsCreateFieldInput>>;
  plugins?: Maybe<Array<ComputerTemplatePluginsCreateFieldInput>>;
  screens?: Maybe<Array<ComputerTemplateScreensCreateFieldInput>>;
  storage?: Maybe<Array<ComputerTemplateStorageCreateFieldInput>>;
}

export interface ComputerTemplateScreensAggregateInput {
  AND?: Maybe<Array<ComputerTemplateScreensAggregateInput>>;
  OR?: Maybe<Array<ComputerTemplateScreensAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ComputerTemplateScreensNodeAggregationWhereInput>;
}

export interface ComputerTemplateScreensConnectFieldInput {
  connect?: Maybe<Array<ScreenTemplateConnectInput>>;
  where?: Maybe<ScreenTemplateConnectWhere>;
}

export interface ComputerTemplateScreensConnectionSort {
  node?: Maybe<ScreenTemplateSort>;
}

export interface ComputerTemplateScreensConnectionWhere {
  AND?: Maybe<Array<ComputerTemplateScreensConnectionWhere>>;
  OR?: Maybe<Array<ComputerTemplateScreensConnectionWhere>>;
  node?: Maybe<ScreenTemplateWhere>;
  node_NOT?: Maybe<ScreenTemplateWhere>;
}

export interface ComputerTemplateScreensCreateFieldInput {
  node: ScreenTemplateCreateInput;
}

export interface ComputerTemplateScreensDeleteFieldInput {
  delete?: Maybe<ScreenTemplateDeleteInput>;
  where?: Maybe<ComputerTemplateScreensConnectionWhere>;
}

export interface ComputerTemplateScreensDisconnectFieldInput {
  disconnect?: Maybe<ScreenTemplateDisconnectInput>;
  where?: Maybe<ComputerTemplateScreensConnectionWhere>;
}

export interface ComputerTemplateScreensFieldInput {
  connect?: Maybe<Array<ComputerTemplateScreensConnectFieldInput>>;
  create?: Maybe<Array<ComputerTemplateScreensCreateFieldInput>>;
}

export interface ComputerTemplateScreensNodeAggregationWhereInput {
  AND?: Maybe<Array<ComputerTemplateScreensNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ComputerTemplateScreensNodeAggregationWhereInput>>;
  height_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  height_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  height_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  height_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  height_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  height_EQUAL?: Maybe<Scalars["Int"]>;
  height_GT?: Maybe<Scalars["Int"]>;
  height_GTE?: Maybe<Scalars["Int"]>;
  height_LT?: Maybe<Scalars["Int"]>;
  height_LTE?: Maybe<Scalars["Int"]>;
  height_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  height_MAX_GT?: Maybe<Scalars["Int"]>;
  height_MAX_GTE?: Maybe<Scalars["Int"]>;
  height_MAX_LT?: Maybe<Scalars["Int"]>;
  height_MAX_LTE?: Maybe<Scalars["Int"]>;
  height_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  height_MIN_GT?: Maybe<Scalars["Int"]>;
  height_MIN_GTE?: Maybe<Scalars["Int"]>;
  height_MIN_LT?: Maybe<Scalars["Int"]>;
  height_MIN_LTE?: Maybe<Scalars["Int"]>;
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
  rotation_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  rotation_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  rotation_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  rotation_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  rotation_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  rotation_EQUAL?: Maybe<Scalars["Int"]>;
  rotation_GT?: Maybe<Scalars["Int"]>;
  rotation_GTE?: Maybe<Scalars["Int"]>;
  rotation_LT?: Maybe<Scalars["Int"]>;
  rotation_LTE?: Maybe<Scalars["Int"]>;
  rotation_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  rotation_MAX_GT?: Maybe<Scalars["Int"]>;
  rotation_MAX_GTE?: Maybe<Scalars["Int"]>;
  rotation_MAX_LT?: Maybe<Scalars["Int"]>;
  rotation_MAX_LTE?: Maybe<Scalars["Int"]>;
  rotation_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  rotation_MIN_GT?: Maybe<Scalars["Int"]>;
  rotation_MIN_GTE?: Maybe<Scalars["Int"]>;
  rotation_MIN_LT?: Maybe<Scalars["Int"]>;
  rotation_MIN_LTE?: Maybe<Scalars["Int"]>;
  width_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  width_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  width_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  width_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  width_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  width_EQUAL?: Maybe<Scalars["Int"]>;
  width_GT?: Maybe<Scalars["Int"]>;
  width_GTE?: Maybe<Scalars["Int"]>;
  width_LT?: Maybe<Scalars["Int"]>;
  width_LTE?: Maybe<Scalars["Int"]>;
  width_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  width_MAX_GT?: Maybe<Scalars["Int"]>;
  width_MAX_GTE?: Maybe<Scalars["Int"]>;
  width_MAX_LT?: Maybe<Scalars["Int"]>;
  width_MAX_LTE?: Maybe<Scalars["Int"]>;
  width_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  width_MIN_GT?: Maybe<Scalars["Int"]>;
  width_MIN_GTE?: Maybe<Scalars["Int"]>;
  width_MIN_LT?: Maybe<Scalars["Int"]>;
  width_MIN_LTE?: Maybe<Scalars["Int"]>;
}

export interface ComputerTemplateScreensUpdateConnectionInput {
  node?: Maybe<ScreenTemplateUpdateInput>;
}

export interface ComputerTemplateScreensUpdateFieldInput {
  connect?: Maybe<Array<ComputerTemplateScreensConnectFieldInput>>;
  create?: Maybe<Array<ComputerTemplateScreensCreateFieldInput>>;
  delete?: Maybe<Array<ComputerTemplateScreensDeleteFieldInput>>;
  disconnect?: Maybe<Array<ComputerTemplateScreensDisconnectFieldInput>>;
  update?: Maybe<ComputerTemplateScreensUpdateConnectionInput>;
  where?: Maybe<ComputerTemplateScreensConnectionWhere>;
}

/** Fields to sort ComputerTemplates by. The order in which sorts are applied is not guaranteed when specifying many fields in one ComputerTemplateSort object. */
export interface ComputerTemplateSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface ComputerTemplateStorageAggregateInput {
  AND?: Maybe<Array<ComputerTemplateStorageAggregateInput>>;
  OR?: Maybe<Array<ComputerTemplateStorageAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ComputerTemplateStorageNodeAggregationWhereInput>;
}

export interface ComputerTemplateStorageConnectFieldInput {
  where?: Maybe<StorageTemplateConnectWhere>;
}

export interface ComputerTemplateStorageConnectionSort {
  node?: Maybe<StorageTemplateSort>;
}

export interface ComputerTemplateStorageConnectionWhere {
  AND?: Maybe<Array<ComputerTemplateStorageConnectionWhere>>;
  OR?: Maybe<Array<ComputerTemplateStorageConnectionWhere>>;
  node?: Maybe<StorageTemplateWhere>;
  node_NOT?: Maybe<StorageTemplateWhere>;
}

export interface ComputerTemplateStorageCreateFieldInput {
  node: StorageTemplateCreateInput;
}

export interface ComputerTemplateStorageDeleteFieldInput {
  where?: Maybe<ComputerTemplateStorageConnectionWhere>;
}

export interface ComputerTemplateStorageDisconnectFieldInput {
  where?: Maybe<ComputerTemplateStorageConnectionWhere>;
}

export interface ComputerTemplateStorageFieldInput {
  connect?: Maybe<Array<ComputerTemplateStorageConnectFieldInput>>;
  create?: Maybe<Array<ComputerTemplateStorageCreateFieldInput>>;
}

export interface ComputerTemplateStorageNodeAggregationWhereInput {
  AND?: Maybe<Array<ComputerTemplateStorageNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ComputerTemplateStorageNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  max_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  max_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  max_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  max_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  max_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  max_EQUAL?: Maybe<Scalars["Float"]>;
  max_GT?: Maybe<Scalars["Float"]>;
  max_GTE?: Maybe<Scalars["Float"]>;
  max_LT?: Maybe<Scalars["Float"]>;
  max_LTE?: Maybe<Scalars["Float"]>;
  max_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  max_MAX_GT?: Maybe<Scalars["Float"]>;
  max_MAX_GTE?: Maybe<Scalars["Float"]>;
  max_MAX_LT?: Maybe<Scalars["Float"]>;
  max_MAX_LTE?: Maybe<Scalars["Float"]>;
  max_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  max_MIN_GT?: Maybe<Scalars["Float"]>;
  max_MIN_GTE?: Maybe<Scalars["Float"]>;
  max_MIN_LT?: Maybe<Scalars["Float"]>;
  max_MIN_LTE?: Maybe<Scalars["Float"]>;
  min_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  min_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  min_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  min_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  min_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  min_EQUAL?: Maybe<Scalars["Float"]>;
  min_GT?: Maybe<Scalars["Float"]>;
  min_GTE?: Maybe<Scalars["Float"]>;
  min_LT?: Maybe<Scalars["Float"]>;
  min_LTE?: Maybe<Scalars["Float"]>;
  min_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  min_MAX_GT?: Maybe<Scalars["Float"]>;
  min_MAX_GTE?: Maybe<Scalars["Float"]>;
  min_MAX_LT?: Maybe<Scalars["Float"]>;
  min_MAX_LTE?: Maybe<Scalars["Float"]>;
  min_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  min_MIN_GT?: Maybe<Scalars["Float"]>;
  min_MIN_GTE?: Maybe<Scalars["Float"]>;
  min_MIN_LT?: Maybe<Scalars["Float"]>;
  min_MIN_LTE?: Maybe<Scalars["Float"]>;
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

export interface ComputerTemplateStorageUpdateConnectionInput {
  node?: Maybe<StorageTemplateUpdateInput>;
}

export interface ComputerTemplateStorageUpdateFieldInput {
  connect?: Maybe<Array<ComputerTemplateStorageConnectFieldInput>>;
  create?: Maybe<Array<ComputerTemplateStorageCreateFieldInput>>;
  delete?: Maybe<Array<ComputerTemplateStorageDeleteFieldInput>>;
  disconnect?: Maybe<Array<ComputerTemplateStorageDisconnectFieldInput>>;
  update?: Maybe<ComputerTemplateStorageUpdateConnectionInput>;
  where?: Maybe<ComputerTemplateStorageConnectionWhere>;
}

export interface ComputerTemplateUpdateConnectionInput {
  node?: Maybe<ComputerTemplateUpdateInput>;
}

export interface ComputerTemplateUpdateFieldInput {
  connect?: Maybe<ComputerTemplateConnectFieldInput>;
  create?: Maybe<ComputerTemplateCreateFieldInput>;
  delete?: Maybe<ComputerTemplateDeleteFieldInput>;
  disconnect?: Maybe<ComputerTemplateDisconnectFieldInput>;
  update?: Maybe<ComputerTemplateUpdateConnectionInput>;
  where?: Maybe<ComputerTemplateConnectionWhere>;
}

export interface ComputerTemplateUpdateInput {
  name?: Maybe<Scalars["String"]>;
  peripherals?: Maybe<Array<ComputerTemplatePeripheralsUpdateFieldInput>>;
  plugins?: Maybe<Array<ComputerTemplatePluginsUpdateFieldInput>>;
  screens?: Maybe<Array<ComputerTemplateScreensUpdateFieldInput>>;
  storage?: Maybe<Array<ComputerTemplateStorageUpdateFieldInput>>;
}

export interface ComputerTemplateWhere {
  AND?: Maybe<Array<ComputerTemplateWhere>>;
  OR?: Maybe<Array<ComputerTemplateWhere>>;
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
  peripherals?: Maybe<PeripheralTemplateWhere>;
  peripheralsAggregate?: Maybe<ComputerTemplatePeripheralsAggregateInput>;
  peripheralsConnection?: Maybe<ComputerTemplatePeripheralsConnectionWhere>;
  peripheralsConnection_NOT?: Maybe<ComputerTemplatePeripheralsConnectionWhere>;
  peripherals_NOT?: Maybe<PeripheralTemplateWhere>;
  plugins?: Maybe<MachinePluginWhere>;
  pluginsAggregate?: Maybe<ComputerTemplatePluginsAggregateInput>;
  pluginsConnection?: Maybe<ComputerTemplatePluginsConnectionWhere>;
  pluginsConnection_NOT?: Maybe<ComputerTemplatePluginsConnectionWhere>;
  plugins_NOT?: Maybe<MachinePluginWhere>;
  screens?: Maybe<ScreenTemplateWhere>;
  screensAggregate?: Maybe<ComputerTemplateScreensAggregateInput>;
  screensConnection?: Maybe<ComputerTemplateScreensConnectionWhere>;
  screensConnection_NOT?: Maybe<ComputerTemplateScreensConnectionWhere>;
  screens_NOT?: Maybe<ScreenTemplateWhere>;
  storage?: Maybe<StorageTemplateWhere>;
  storageAggregate?: Maybe<ComputerTemplateStorageAggregateInput>;
  storageConnection?: Maybe<ComputerTemplateStorageConnectionWhere>;
  storageConnection_NOT?: Maybe<ComputerTemplateStorageConnectionWhere>;
  storage_NOT?: Maybe<StorageTemplateWhere>;
}

export interface ComputerUpdateInput {
  agentVersion?: Maybe<Scalars["String"]>;
  cpu?: Maybe<Scalars["Float"]>;
  hostname?: Maybe<Scalars["String"]>;
  memory?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  os?: Maybe<Scalars["String"]>;
  template?: Maybe<ComputerTemplateUpdateFieldInput>;
}

export interface ComputerWhere {
  AND?: Maybe<Array<ComputerWhere>>;
  OR?: Maybe<Array<ComputerWhere>>;
  agentVersion?: Maybe<Scalars["String"]>;
  agentVersion_CONTAINS?: Maybe<Scalars["String"]>;
  agentVersion_ENDS_WITH?: Maybe<Scalars["String"]>;
  agentVersion_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  agentVersion_NOT?: Maybe<Scalars["String"]>;
  agentVersion_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  agentVersion_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  agentVersion_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  agentVersion_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  agentVersion_STARTS_WITH?: Maybe<Scalars["String"]>;
  cpu?: Maybe<Scalars["Float"]>;
  cpu_GT?: Maybe<Scalars["Float"]>;
  cpu_GTE?: Maybe<Scalars["Float"]>;
  cpu_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  cpu_LT?: Maybe<Scalars["Float"]>;
  cpu_LTE?: Maybe<Scalars["Float"]>;
  cpu_NOT?: Maybe<Scalars["Float"]>;
  cpu_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  hostname?: Maybe<Scalars["String"]>;
  hostname_CONTAINS?: Maybe<Scalars["String"]>;
  hostname_ENDS_WITH?: Maybe<Scalars["String"]>;
  hostname_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  hostname_NOT?: Maybe<Scalars["String"]>;
  hostname_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  hostname_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  hostname_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  hostname_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  hostname_STARTS_WITH?: Maybe<Scalars["String"]>;
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
  memory?: Maybe<Scalars["Float"]>;
  memory_GT?: Maybe<Scalars["Float"]>;
  memory_GTE?: Maybe<Scalars["Float"]>;
  memory_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  memory_LT?: Maybe<Scalars["Float"]>;
  memory_LTE?: Maybe<Scalars["Float"]>;
  memory_NOT?: Maybe<Scalars["Float"]>;
  memory_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
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
  template?: Maybe<ComputerTemplateWhere>;
  templateAggregate?: Maybe<ComputerTemplateAggregateInput>;
  templateConnection?: Maybe<ComputerTemplateConnectionWhere>;
  templateConnection_NOT?: Maybe<ComputerTemplateConnectionWhere>;
  template_NOT?: Maybe<ComputerTemplateWhere>;
}

export interface LocationConnectInput {
  groups?: Maybe<Array<LocationGroupsConnectFieldInput>>;
  machines?: Maybe<Array<LocationMachinesConnectFieldInput>>;
}

export interface LocationConnectWhere {
  node: LocationWhere;
}

export interface LocationCreateInput {
  elevation?: Maybe<Scalars["Float"]>;
  groups?: Maybe<LocationGroupsFieldInput>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
  machines?: Maybe<LocationMachinesFieldInput>;
  name?: Maybe<Scalars["String"]>;
}

export interface LocationDeleteInput {
  groups?: Maybe<Array<LocationGroupsDeleteFieldInput>>;
  machines?: Maybe<Array<LocationMachinesDeleteFieldInput>>;
}

export interface LocationDisconnectInput {
  groups?: Maybe<Array<LocationGroupsDisconnectFieldInput>>;
  machines?: Maybe<Array<LocationMachinesDisconnectFieldInput>>;
}

export interface LocationGroupConnectInput {
  locations?: Maybe<Array<LocationGroupLocationsConnectFieldInput>>;
}

export interface LocationGroupConnectWhere {
  node: LocationGroupWhere;
}

export interface LocationGroupCreateInput {
  locations?: Maybe<LocationGroupLocationsFieldInput>;
  name?: Maybe<Scalars["String"]>;
}

export interface LocationGroupDeleteInput {
  locations?: Maybe<Array<LocationGroupLocationsDeleteFieldInput>>;
}

export interface LocationGroupDisconnectInput {
  locations?: Maybe<Array<LocationGroupLocationsDisconnectFieldInput>>;
}

export interface LocationGroupLocationsAggregateInput {
  AND?: Maybe<Array<LocationGroupLocationsAggregateInput>>;
  OR?: Maybe<Array<LocationGroupLocationsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<LocationGroupLocationsNodeAggregationWhereInput>;
}

export interface LocationGroupLocationsConnectFieldInput {
  connect?: Maybe<Array<LocationConnectInput>>;
  where?: Maybe<LocationConnectWhere>;
}

export interface LocationGroupLocationsConnectionSort {
  node?: Maybe<LocationSort>;
}

export interface LocationGroupLocationsConnectionWhere {
  AND?: Maybe<Array<LocationGroupLocationsConnectionWhere>>;
  OR?: Maybe<Array<LocationGroupLocationsConnectionWhere>>;
  node?: Maybe<LocationWhere>;
  node_NOT?: Maybe<LocationWhere>;
}

export interface LocationGroupLocationsCreateFieldInput {
  node: LocationCreateInput;
}

export interface LocationGroupLocationsDeleteFieldInput {
  delete?: Maybe<LocationDeleteInput>;
  where?: Maybe<LocationGroupLocationsConnectionWhere>;
}

export interface LocationGroupLocationsDisconnectFieldInput {
  disconnect?: Maybe<LocationDisconnectInput>;
  where?: Maybe<LocationGroupLocationsConnectionWhere>;
}

export interface LocationGroupLocationsFieldInput {
  connect?: Maybe<Array<LocationGroupLocationsConnectFieldInput>>;
  create?: Maybe<Array<LocationGroupLocationsCreateFieldInput>>;
}

export interface LocationGroupLocationsNodeAggregationWhereInput {
  AND?: Maybe<Array<LocationGroupLocationsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<LocationGroupLocationsNodeAggregationWhereInput>>;
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

export interface LocationGroupLocationsUpdateConnectionInput {
  node?: Maybe<LocationUpdateInput>;
}

export interface LocationGroupLocationsUpdateFieldInput {
  connect?: Maybe<Array<LocationGroupLocationsConnectFieldInput>>;
  create?: Maybe<Array<LocationGroupLocationsCreateFieldInput>>;
  delete?: Maybe<Array<LocationGroupLocationsDeleteFieldInput>>;
  disconnect?: Maybe<Array<LocationGroupLocationsDisconnectFieldInput>>;
  update?: Maybe<LocationGroupLocationsUpdateConnectionInput>;
  where?: Maybe<LocationGroupLocationsConnectionWhere>;
}

export interface LocationGroupOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more LocationGroupSort objects to sort LocationGroups by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<LocationGroupSort>>>;
}

export interface LocationGroupRelationInput {
  locations?: Maybe<Array<LocationGroupLocationsCreateFieldInput>>;
}

/** Fields to sort LocationGroups by. The order in which sorts are applied is not guaranteed when specifying many fields in one LocationGroupSort object. */
export interface LocationGroupSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface LocationGroupUpdateInput {
  locations?: Maybe<Array<LocationGroupLocationsUpdateFieldInput>>;
  name?: Maybe<Scalars["String"]>;
}

export interface LocationGroupWhere {
  AND?: Maybe<Array<LocationGroupWhere>>;
  OR?: Maybe<Array<LocationGroupWhere>>;
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
  locations?: Maybe<LocationWhere>;
  locationsAggregate?: Maybe<LocationGroupLocationsAggregateInput>;
  locationsConnection?: Maybe<LocationGroupLocationsConnectionWhere>;
  locationsConnection_NOT?: Maybe<LocationGroupLocationsConnectionWhere>;
  locations_NOT?: Maybe<LocationWhere>;
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

export interface LocationGroupsAggregateInput {
  AND?: Maybe<Array<LocationGroupsAggregateInput>>;
  OR?: Maybe<Array<LocationGroupsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<LocationGroupsNodeAggregationWhereInput>;
}

export interface LocationGroupsConnectFieldInput {
  connect?: Maybe<Array<LocationGroupConnectInput>>;
  where?: Maybe<LocationGroupConnectWhere>;
}

export interface LocationGroupsConnectionSort {
  node?: Maybe<LocationGroupSort>;
}

export interface LocationGroupsConnectionWhere {
  AND?: Maybe<Array<LocationGroupsConnectionWhere>>;
  OR?: Maybe<Array<LocationGroupsConnectionWhere>>;
  node?: Maybe<LocationGroupWhere>;
  node_NOT?: Maybe<LocationGroupWhere>;
}

export interface LocationGroupsCreateFieldInput {
  node: LocationGroupCreateInput;
}

export interface LocationGroupsDeleteFieldInput {
  delete?: Maybe<LocationGroupDeleteInput>;
  where?: Maybe<LocationGroupsConnectionWhere>;
}

export interface LocationGroupsDisconnectFieldInput {
  disconnect?: Maybe<LocationGroupDisconnectInput>;
  where?: Maybe<LocationGroupsConnectionWhere>;
}

export interface LocationGroupsFieldInput {
  connect?: Maybe<Array<LocationGroupsConnectFieldInput>>;
  create?: Maybe<Array<LocationGroupsCreateFieldInput>>;
}

export interface LocationGroupsNodeAggregationWhereInput {
  AND?: Maybe<Array<LocationGroupsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<LocationGroupsNodeAggregationWhereInput>>;
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

export interface LocationGroupsUpdateConnectionInput {
  node?: Maybe<LocationGroupUpdateInput>;
}

export interface LocationGroupsUpdateFieldInput {
  connect?: Maybe<Array<LocationGroupsConnectFieldInput>>;
  create?: Maybe<Array<LocationGroupsCreateFieldInput>>;
  delete?: Maybe<Array<LocationGroupsDeleteFieldInput>>;
  disconnect?: Maybe<Array<LocationGroupsDisconnectFieldInput>>;
  update?: Maybe<LocationGroupsUpdateConnectionInput>;
  where?: Maybe<LocationGroupsConnectionWhere>;
}

export interface LocationMachinesAggregateInput {
  AND?: Maybe<Array<LocationMachinesAggregateInput>>;
  OR?: Maybe<Array<LocationMachinesAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<LocationMachinesNodeAggregationWhereInput>;
}

export interface LocationMachinesConnectFieldInput {
  connect?: Maybe<Array<MachineConnectInput>>;
  where?: Maybe<MachineConnectWhere>;
}

export interface LocationMachinesConnectionSort {
  node?: Maybe<MachineSort>;
}

export interface LocationMachinesConnectionWhere {
  AND?: Maybe<Array<LocationMachinesConnectionWhere>>;
  OR?: Maybe<Array<LocationMachinesConnectionWhere>>;
  node?: Maybe<MachineWhere>;
  node_NOT?: Maybe<MachineWhere>;
}

export interface LocationMachinesCreateFieldInput {
  node: MachineCreateInput;
}

export interface LocationMachinesDeleteFieldInput {
  delete?: Maybe<MachineDeleteInput>;
  where?: Maybe<LocationMachinesConnectionWhere>;
}

export interface LocationMachinesDisconnectFieldInput {
  disconnect?: Maybe<MachineDisconnectInput>;
  where?: Maybe<LocationMachinesConnectionWhere>;
}

export interface LocationMachinesFieldInput {
  connect?: Maybe<Array<LocationMachinesConnectFieldInput>>;
  create?: Maybe<Array<LocationMachinesCreateFieldInput>>;
}

export interface LocationMachinesNodeAggregationWhereInput {
  AND?: Maybe<Array<LocationMachinesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<LocationMachinesNodeAggregationWhereInput>>;
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
  networkName_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  networkName_EQUAL?: Maybe<Scalars["String"]>;
  networkName_GT?: Maybe<Scalars["Int"]>;
  networkName_GTE?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_GT?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_LT?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  networkName_LT?: Maybe<Scalars["Int"]>;
  networkName_LTE?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
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

export interface LocationMachinesUpdateConnectionInput {
  node?: Maybe<MachineUpdateInput>;
}

export interface LocationMachinesUpdateFieldInput {
  connect?: Maybe<Array<LocationMachinesConnectFieldInput>>;
  create?: Maybe<Array<LocationMachinesCreateFieldInput>>;
  delete?: Maybe<Array<LocationMachinesDeleteFieldInput>>;
  disconnect?: Maybe<Array<LocationMachinesDisconnectFieldInput>>;
  update?: Maybe<LocationMachinesUpdateConnectionInput>;
  where?: Maybe<LocationMachinesConnectionWhere>;
}

export interface LocationOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more LocationSort objects to sort Locations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<LocationSort>>>;
}

export interface LocationRelationInput {
  groups?: Maybe<Array<LocationGroupsCreateFieldInput>>;
  machines?: Maybe<Array<LocationMachinesCreateFieldInput>>;
}

/** Fields to sort Locations by. The order in which sorts are applied is not guaranteed when specifying many fields in one LocationSort object. */
export interface LocationSort {
  elevation?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  lat?: Maybe<SortDirection>;
  lng?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface LocationUpdateInput {
  elevation?: Maybe<Scalars["Float"]>;
  groups?: Maybe<Array<LocationGroupsUpdateFieldInput>>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
  machines?: Maybe<Array<LocationMachinesUpdateFieldInput>>;
  name?: Maybe<Scalars["String"]>;
}

export interface LocationWhere {
  AND?: Maybe<Array<LocationWhere>>;
  OR?: Maybe<Array<LocationWhere>>;
  elevation?: Maybe<Scalars["Float"]>;
  elevation_GT?: Maybe<Scalars["Float"]>;
  elevation_GTE?: Maybe<Scalars["Float"]>;
  elevation_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  elevation_LT?: Maybe<Scalars["Float"]>;
  elevation_LTE?: Maybe<Scalars["Float"]>;
  elevation_NOT?: Maybe<Scalars["Float"]>;
  elevation_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  groups?: Maybe<LocationGroupWhere>;
  groupsAggregate?: Maybe<LocationGroupsAggregateInput>;
  groupsConnection?: Maybe<LocationGroupsConnectionWhere>;
  groupsConnection_NOT?: Maybe<LocationGroupsConnectionWhere>;
  groups_NOT?: Maybe<LocationGroupWhere>;
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
  machines?: Maybe<MachineWhere>;
  machinesAggregate?: Maybe<LocationMachinesAggregateInput>;
  machinesConnection?: Maybe<LocationMachinesConnectionWhere>;
  machinesConnection_NOT?: Maybe<LocationMachinesConnectionWhere>;
  machines_NOT?: Maybe<MachineWhere>;
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

export interface MachineComputersAggregateInput {
  AND?: Maybe<Array<MachineComputersAggregateInput>>;
  OR?: Maybe<Array<MachineComputersAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<MachineComputersNodeAggregationWhereInput>;
}

export interface MachineComputersConnectFieldInput {
  connect?: Maybe<ComputerConnectInput>;
  where?: Maybe<ComputerConnectWhere>;
}

export interface MachineComputersConnectionSort {
  node?: Maybe<ComputerSort>;
}

export interface MachineComputersConnectionWhere {
  AND?: Maybe<Array<MachineComputersConnectionWhere>>;
  OR?: Maybe<Array<MachineComputersConnectionWhere>>;
  node?: Maybe<ComputerWhere>;
  node_NOT?: Maybe<ComputerWhere>;
}

export interface MachineComputersCreateFieldInput {
  node: ComputerCreateInput;
}

export interface MachineComputersDeleteFieldInput {
  delete?: Maybe<ComputerDeleteInput>;
  where?: Maybe<MachineComputersConnectionWhere>;
}

export interface MachineComputersDisconnectFieldInput {
  disconnect?: Maybe<ComputerDisconnectInput>;
  where?: Maybe<MachineComputersConnectionWhere>;
}

export interface MachineComputersFieldInput {
  connect?: Maybe<MachineComputersConnectFieldInput>;
  create?: Maybe<MachineComputersCreateFieldInput>;
}

export interface MachineComputersNodeAggregationWhereInput {
  AND?: Maybe<Array<MachineComputersNodeAggregationWhereInput>>;
  OR?: Maybe<Array<MachineComputersNodeAggregationWhereInput>>;
  agentVersion_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  agentVersion_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  agentVersion_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  agentVersion_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  agentVersion_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  agentVersion_EQUAL?: Maybe<Scalars["String"]>;
  agentVersion_GT?: Maybe<Scalars["Int"]>;
  agentVersion_GTE?: Maybe<Scalars["Int"]>;
  agentVersion_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  agentVersion_LONGEST_GT?: Maybe<Scalars["Int"]>;
  agentVersion_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  agentVersion_LONGEST_LT?: Maybe<Scalars["Int"]>;
  agentVersion_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  agentVersion_LT?: Maybe<Scalars["Int"]>;
  agentVersion_LTE?: Maybe<Scalars["Int"]>;
  agentVersion_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  agentVersion_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  agentVersion_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  agentVersion_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  agentVersion_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  cpu_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  cpu_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  cpu_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  cpu_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  cpu_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  cpu_EQUAL?: Maybe<Scalars["Float"]>;
  cpu_GT?: Maybe<Scalars["Float"]>;
  cpu_GTE?: Maybe<Scalars["Float"]>;
  cpu_LT?: Maybe<Scalars["Float"]>;
  cpu_LTE?: Maybe<Scalars["Float"]>;
  cpu_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  cpu_MAX_GT?: Maybe<Scalars["Float"]>;
  cpu_MAX_GTE?: Maybe<Scalars["Float"]>;
  cpu_MAX_LT?: Maybe<Scalars["Float"]>;
  cpu_MAX_LTE?: Maybe<Scalars["Float"]>;
  cpu_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  cpu_MIN_GT?: Maybe<Scalars["Float"]>;
  cpu_MIN_GTE?: Maybe<Scalars["Float"]>;
  cpu_MIN_LT?: Maybe<Scalars["Float"]>;
  cpu_MIN_LTE?: Maybe<Scalars["Float"]>;
  hostname_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  hostname_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  hostname_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  hostname_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  hostname_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  hostname_EQUAL?: Maybe<Scalars["String"]>;
  hostname_GT?: Maybe<Scalars["Int"]>;
  hostname_GTE?: Maybe<Scalars["Int"]>;
  hostname_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  hostname_LONGEST_GT?: Maybe<Scalars["Int"]>;
  hostname_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  hostname_LONGEST_LT?: Maybe<Scalars["Int"]>;
  hostname_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  hostname_LT?: Maybe<Scalars["Int"]>;
  hostname_LTE?: Maybe<Scalars["Int"]>;
  hostname_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  hostname_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  hostname_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  hostname_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  hostname_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  memory_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  memory_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  memory_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  memory_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  memory_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  memory_EQUAL?: Maybe<Scalars["Float"]>;
  memory_GT?: Maybe<Scalars["Float"]>;
  memory_GTE?: Maybe<Scalars["Float"]>;
  memory_LT?: Maybe<Scalars["Float"]>;
  memory_LTE?: Maybe<Scalars["Float"]>;
  memory_MAX_EQUAL?: Maybe<Scalars["Float"]>;
  memory_MAX_GT?: Maybe<Scalars["Float"]>;
  memory_MAX_GTE?: Maybe<Scalars["Float"]>;
  memory_MAX_LT?: Maybe<Scalars["Float"]>;
  memory_MAX_LTE?: Maybe<Scalars["Float"]>;
  memory_MIN_EQUAL?: Maybe<Scalars["Float"]>;
  memory_MIN_GT?: Maybe<Scalars["Float"]>;
  memory_MIN_GTE?: Maybe<Scalars["Float"]>;
  memory_MIN_LT?: Maybe<Scalars["Float"]>;
  memory_MIN_LTE?: Maybe<Scalars["Float"]>;
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

export interface MachineComputersUpdateConnectionInput {
  node?: Maybe<ComputerUpdateInput>;
}

export interface MachineComputersUpdateFieldInput {
  connect?: Maybe<MachineComputersConnectFieldInput>;
  create?: Maybe<MachineComputersCreateFieldInput>;
  delete?: Maybe<MachineComputersDeleteFieldInput>;
  disconnect?: Maybe<MachineComputersDisconnectFieldInput>;
  update?: Maybe<MachineComputersUpdateConnectionInput>;
  where?: Maybe<MachineComputersConnectionWhere>;
}

export interface MachineConnectInput {
  computers?: Maybe<MachineComputersConnectFieldInput>;
  location?: Maybe<MachineLocationConnectFieldInput>;
  template?: Maybe<MachineTemplateConnectFieldInput>;
}

export interface MachineConnectWhere {
  node: MachineWhere;
}

export interface MachineCreateInput {
  computers?: Maybe<MachineComputersFieldInput>;
  location?: Maybe<MachineLocationFieldInput>;
  name?: Maybe<Scalars["String"]>;
  networkName?: Maybe<Scalars["String"]>;
  provisioned?: Maybe<Scalars["Boolean"]>;
  provisionedAt?: Maybe<Scalars["DateTime"]>;
  template?: Maybe<MachineTemplateFieldInput>;
}

export interface MachineDeleteInput {
  computers?: Maybe<MachineComputersDeleteFieldInput>;
  location?: Maybe<MachineLocationDeleteFieldInput>;
  template?: Maybe<MachineTemplateDeleteFieldInput>;
}

export interface MachineDisconnectInput {
  computers?: Maybe<MachineComputersDisconnectFieldInput>;
  location?: Maybe<MachineLocationDisconnectFieldInput>;
  template?: Maybe<MachineTemplateDisconnectFieldInput>;
}

export interface MachineLocationAggregateInput {
  AND?: Maybe<Array<MachineLocationAggregateInput>>;
  OR?: Maybe<Array<MachineLocationAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<MachineLocationNodeAggregationWhereInput>;
}

export interface MachineLocationConnectFieldInput {
  connect?: Maybe<LocationConnectInput>;
  where?: Maybe<LocationConnectWhere>;
}

export interface MachineLocationConnectionSort {
  node?: Maybe<LocationSort>;
}

export interface MachineLocationConnectionWhere {
  AND?: Maybe<Array<MachineLocationConnectionWhere>>;
  OR?: Maybe<Array<MachineLocationConnectionWhere>>;
  node?: Maybe<LocationWhere>;
  node_NOT?: Maybe<LocationWhere>;
}

export interface MachineLocationCreateFieldInput {
  node: LocationCreateInput;
}

export interface MachineLocationDeleteFieldInput {
  delete?: Maybe<LocationDeleteInput>;
  where?: Maybe<MachineLocationConnectionWhere>;
}

export interface MachineLocationDisconnectFieldInput {
  disconnect?: Maybe<LocationDisconnectInput>;
  where?: Maybe<MachineLocationConnectionWhere>;
}

export interface MachineLocationFieldInput {
  connect?: Maybe<MachineLocationConnectFieldInput>;
  create?: Maybe<MachineLocationCreateFieldInput>;
}

export interface MachineLocationNodeAggregationWhereInput {
  AND?: Maybe<Array<MachineLocationNodeAggregationWhereInput>>;
  OR?: Maybe<Array<MachineLocationNodeAggregationWhereInput>>;
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

export interface MachineLocationUpdateConnectionInput {
  node?: Maybe<LocationUpdateInput>;
}

export interface MachineLocationUpdateFieldInput {
  connect?: Maybe<MachineLocationConnectFieldInput>;
  create?: Maybe<MachineLocationCreateFieldInput>;
  delete?: Maybe<MachineLocationDeleteFieldInput>;
  disconnect?: Maybe<MachineLocationDisconnectFieldInput>;
  update?: Maybe<MachineLocationUpdateConnectionInput>;
  where?: Maybe<MachineLocationConnectionWhere>;
}

export interface MachineOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more MachineSort objects to sort Machines by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<MachineSort>>>;
}

export interface MachinePluginConnectWhere {
  node: MachinePluginWhere;
}

export interface MachinePluginCreateInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface MachinePluginOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more MachinePluginSort objects to sort MachinePlugins by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<MachinePluginSort>>>;
}

/** Fields to sort MachinePlugins by. The order in which sorts are applied is not guaranteed when specifying many fields in one MachinePluginSort object. */
export interface MachinePluginSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
}

export interface MachinePluginUpdateInput {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface MachinePluginWhere {
  AND?: Maybe<Array<MachinePluginWhere>>;
  OR?: Maybe<Array<MachinePluginWhere>>;
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

export interface MachineRelationInput {
  computers?: Maybe<MachineComputersCreateFieldInput>;
  location?: Maybe<MachineLocationCreateFieldInput>;
  template?: Maybe<MachineTemplateCreateFieldInput>;
}

/** Fields to sort Machines by. The order in which sorts are applied is not guaranteed when specifying many fields in one MachineSort object. */
export interface MachineSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  networkName?: Maybe<SortDirection>;
  provisioned?: Maybe<SortDirection>;
  provisionedAt?: Maybe<SortDirection>;
}

export interface MachineTemplateAggregateInput {
  AND?: Maybe<Array<MachineTemplateAggregateInput>>;
  OR?: Maybe<Array<MachineTemplateAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<MachineTemplateNodeAggregationWhereInput>;
}

export interface MachineTemplateComputersAggregateInput {
  AND?: Maybe<Array<MachineTemplateComputersAggregateInput>>;
  OR?: Maybe<Array<MachineTemplateComputersAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<MachineTemplateComputersNodeAggregationWhereInput>;
}

export interface MachineTemplateComputersConnectFieldInput {
  connect?: Maybe<Array<ComputerTemplateConnectInput>>;
  where?: Maybe<ComputerTemplateConnectWhere>;
}

export interface MachineTemplateComputersConnectionSort {
  node?: Maybe<ComputerTemplateSort>;
}

export interface MachineTemplateComputersConnectionWhere {
  AND?: Maybe<Array<MachineTemplateComputersConnectionWhere>>;
  OR?: Maybe<Array<MachineTemplateComputersConnectionWhere>>;
  node?: Maybe<ComputerTemplateWhere>;
  node_NOT?: Maybe<ComputerTemplateWhere>;
}

export interface MachineTemplateComputersCreateFieldInput {
  node: ComputerTemplateCreateInput;
}

export interface MachineTemplateComputersDeleteFieldInput {
  delete?: Maybe<ComputerTemplateDeleteInput>;
  where?: Maybe<MachineTemplateComputersConnectionWhere>;
}

export interface MachineTemplateComputersDisconnectFieldInput {
  disconnect?: Maybe<ComputerTemplateDisconnectInput>;
  where?: Maybe<MachineTemplateComputersConnectionWhere>;
}

export interface MachineTemplateComputersFieldInput {
  connect?: Maybe<Array<MachineTemplateComputersConnectFieldInput>>;
  create?: Maybe<Array<MachineTemplateComputersCreateFieldInput>>;
}

export interface MachineTemplateComputersNodeAggregationWhereInput {
  AND?: Maybe<Array<MachineTemplateComputersNodeAggregationWhereInput>>;
  OR?: Maybe<Array<MachineTemplateComputersNodeAggregationWhereInput>>;
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

export interface MachineTemplateComputersUpdateConnectionInput {
  node?: Maybe<ComputerTemplateUpdateInput>;
}

export interface MachineTemplateComputersUpdateFieldInput {
  connect?: Maybe<Array<MachineTemplateComputersConnectFieldInput>>;
  create?: Maybe<Array<MachineTemplateComputersCreateFieldInput>>;
  delete?: Maybe<Array<MachineTemplateComputersDeleteFieldInput>>;
  disconnect?: Maybe<Array<MachineTemplateComputersDisconnectFieldInput>>;
  update?: Maybe<MachineTemplateComputersUpdateConnectionInput>;
  where?: Maybe<MachineTemplateComputersConnectionWhere>;
}

export interface MachineTemplateConnectFieldInput {
  connect?: Maybe<MachineTemplateConnectInput>;
  where?: Maybe<MachineTemplateConnectWhere>;
}

export interface MachineTemplateConnectInput {
  computers?: Maybe<Array<MachineTemplateComputersConnectFieldInput>>;
  displays?: Maybe<Array<MachineTemplateDisplaysConnectFieldInput>>;
  peripherals?: Maybe<Array<MachineTemplatePeripheralsConnectFieldInput>>;
  plugins?: Maybe<Array<MachineTemplatePluginsConnectFieldInput>>;
}

export interface MachineTemplateConnectWhere {
  node: MachineTemplateWhere;
}

export interface MachineTemplateConnectionSort {
  node?: Maybe<MachineTemplateSort>;
}

export interface MachineTemplateConnectionWhere {
  AND?: Maybe<Array<MachineTemplateConnectionWhere>>;
  OR?: Maybe<Array<MachineTemplateConnectionWhere>>;
  node?: Maybe<MachineTemplateWhere>;
  node_NOT?: Maybe<MachineTemplateWhere>;
}

export interface MachineTemplateCreateFieldInput {
  node: MachineTemplateCreateInput;
}

export interface MachineTemplateCreateInput {
  computers?: Maybe<MachineTemplateComputersFieldInput>;
  displays?: Maybe<MachineTemplateDisplaysFieldInput>;
  name?: Maybe<Scalars["String"]>;
  peripherals?: Maybe<MachineTemplatePeripheralsFieldInput>;
  plugins?: Maybe<MachineTemplatePluginsFieldInput>;
}

export interface MachineTemplateDeleteFieldInput {
  delete?: Maybe<MachineTemplateDeleteInput>;
  where?: Maybe<MachineTemplateConnectionWhere>;
}

export interface MachineTemplateDeleteInput {
  computers?: Maybe<Array<MachineTemplateComputersDeleteFieldInput>>;
  displays?: Maybe<Array<MachineTemplateDisplaysDeleteFieldInput>>;
  peripherals?: Maybe<Array<MachineTemplatePeripheralsDeleteFieldInput>>;
  plugins?: Maybe<Array<MachineTemplatePluginsDeleteFieldInput>>;
}

export interface MachineTemplateDisconnectFieldInput {
  disconnect?: Maybe<MachineTemplateDisconnectInput>;
  where?: Maybe<MachineTemplateConnectionWhere>;
}

export interface MachineTemplateDisconnectInput {
  computers?: Maybe<Array<MachineTemplateComputersDisconnectFieldInput>>;
  displays?: Maybe<Array<MachineTemplateDisplaysDisconnectFieldInput>>;
  peripherals?: Maybe<Array<MachineTemplatePeripheralsDisconnectFieldInput>>;
  plugins?: Maybe<Array<MachineTemplatePluginsDisconnectFieldInput>>;
}

export interface MachineTemplateDisplaysAggregateInput {
  AND?: Maybe<Array<MachineTemplateDisplaysAggregateInput>>;
  OR?: Maybe<Array<MachineTemplateDisplaysAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<MachineTemplateDisplaysNodeAggregationWhereInput>;
}

export interface MachineTemplateDisplaysConnectFieldInput {
  connect?: Maybe<Array<ScreenTemplateConnectInput>>;
  where?: Maybe<ScreenTemplateConnectWhere>;
}

export interface MachineTemplateDisplaysConnectionSort {
  node?: Maybe<ScreenTemplateSort>;
}

export interface MachineTemplateDisplaysConnectionWhere {
  AND?: Maybe<Array<MachineTemplateDisplaysConnectionWhere>>;
  OR?: Maybe<Array<MachineTemplateDisplaysConnectionWhere>>;
  node?: Maybe<ScreenTemplateWhere>;
  node_NOT?: Maybe<ScreenTemplateWhere>;
}

export interface MachineTemplateDisplaysCreateFieldInput {
  node: ScreenTemplateCreateInput;
}

export interface MachineTemplateDisplaysDeleteFieldInput {
  delete?: Maybe<ScreenTemplateDeleteInput>;
  where?: Maybe<MachineTemplateDisplaysConnectionWhere>;
}

export interface MachineTemplateDisplaysDisconnectFieldInput {
  disconnect?: Maybe<ScreenTemplateDisconnectInput>;
  where?: Maybe<MachineTemplateDisplaysConnectionWhere>;
}

export interface MachineTemplateDisplaysFieldInput {
  connect?: Maybe<Array<MachineTemplateDisplaysConnectFieldInput>>;
  create?: Maybe<Array<MachineTemplateDisplaysCreateFieldInput>>;
}

export interface MachineTemplateDisplaysNodeAggregationWhereInput {
  AND?: Maybe<Array<MachineTemplateDisplaysNodeAggregationWhereInput>>;
  OR?: Maybe<Array<MachineTemplateDisplaysNodeAggregationWhereInput>>;
  height_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  height_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  height_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  height_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  height_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  height_EQUAL?: Maybe<Scalars["Int"]>;
  height_GT?: Maybe<Scalars["Int"]>;
  height_GTE?: Maybe<Scalars["Int"]>;
  height_LT?: Maybe<Scalars["Int"]>;
  height_LTE?: Maybe<Scalars["Int"]>;
  height_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  height_MAX_GT?: Maybe<Scalars["Int"]>;
  height_MAX_GTE?: Maybe<Scalars["Int"]>;
  height_MAX_LT?: Maybe<Scalars["Int"]>;
  height_MAX_LTE?: Maybe<Scalars["Int"]>;
  height_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  height_MIN_GT?: Maybe<Scalars["Int"]>;
  height_MIN_GTE?: Maybe<Scalars["Int"]>;
  height_MIN_LT?: Maybe<Scalars["Int"]>;
  height_MIN_LTE?: Maybe<Scalars["Int"]>;
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
  rotation_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  rotation_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  rotation_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  rotation_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  rotation_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  rotation_EQUAL?: Maybe<Scalars["Int"]>;
  rotation_GT?: Maybe<Scalars["Int"]>;
  rotation_GTE?: Maybe<Scalars["Int"]>;
  rotation_LT?: Maybe<Scalars["Int"]>;
  rotation_LTE?: Maybe<Scalars["Int"]>;
  rotation_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  rotation_MAX_GT?: Maybe<Scalars["Int"]>;
  rotation_MAX_GTE?: Maybe<Scalars["Int"]>;
  rotation_MAX_LT?: Maybe<Scalars["Int"]>;
  rotation_MAX_LTE?: Maybe<Scalars["Int"]>;
  rotation_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  rotation_MIN_GT?: Maybe<Scalars["Int"]>;
  rotation_MIN_GTE?: Maybe<Scalars["Int"]>;
  rotation_MIN_LT?: Maybe<Scalars["Int"]>;
  rotation_MIN_LTE?: Maybe<Scalars["Int"]>;
  width_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  width_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  width_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  width_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  width_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  width_EQUAL?: Maybe<Scalars["Int"]>;
  width_GT?: Maybe<Scalars["Int"]>;
  width_GTE?: Maybe<Scalars["Int"]>;
  width_LT?: Maybe<Scalars["Int"]>;
  width_LTE?: Maybe<Scalars["Int"]>;
  width_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  width_MAX_GT?: Maybe<Scalars["Int"]>;
  width_MAX_GTE?: Maybe<Scalars["Int"]>;
  width_MAX_LT?: Maybe<Scalars["Int"]>;
  width_MAX_LTE?: Maybe<Scalars["Int"]>;
  width_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  width_MIN_GT?: Maybe<Scalars["Int"]>;
  width_MIN_GTE?: Maybe<Scalars["Int"]>;
  width_MIN_LT?: Maybe<Scalars["Int"]>;
  width_MIN_LTE?: Maybe<Scalars["Int"]>;
}

export interface MachineTemplateDisplaysUpdateConnectionInput {
  node?: Maybe<ScreenTemplateUpdateInput>;
}

export interface MachineTemplateDisplaysUpdateFieldInput {
  connect?: Maybe<Array<MachineTemplateDisplaysConnectFieldInput>>;
  create?: Maybe<Array<MachineTemplateDisplaysCreateFieldInput>>;
  delete?: Maybe<Array<MachineTemplateDisplaysDeleteFieldInput>>;
  disconnect?: Maybe<Array<MachineTemplateDisplaysDisconnectFieldInput>>;
  update?: Maybe<MachineTemplateDisplaysUpdateConnectionInput>;
  where?: Maybe<MachineTemplateDisplaysConnectionWhere>;
}

export interface MachineTemplateFieldInput {
  connect?: Maybe<MachineTemplateConnectFieldInput>;
  create?: Maybe<MachineTemplateCreateFieldInput>;
}

export interface MachineTemplateNodeAggregationWhereInput {
  AND?: Maybe<Array<MachineTemplateNodeAggregationWhereInput>>;
  OR?: Maybe<Array<MachineTemplateNodeAggregationWhereInput>>;
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

export interface MachineTemplateOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more MachineTemplateSort objects to sort MachineTemplates by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<MachineTemplateSort>>>;
}

export interface MachineTemplatePeripheralsAggregateInput {
  AND?: Maybe<Array<MachineTemplatePeripheralsAggregateInput>>;
  OR?: Maybe<Array<MachineTemplatePeripheralsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<MachineTemplatePeripheralsNodeAggregationWhereInput>;
}

export interface MachineTemplatePeripheralsConnectFieldInput {
  connect?: Maybe<Array<PeripheralTemplateConnectInput>>;
  where?: Maybe<PeripheralTemplateConnectWhere>;
}

export interface MachineTemplatePeripheralsConnectionSort {
  node?: Maybe<PeripheralTemplateSort>;
}

export interface MachineTemplatePeripheralsConnectionWhere {
  AND?: Maybe<Array<MachineTemplatePeripheralsConnectionWhere>>;
  OR?: Maybe<Array<MachineTemplatePeripheralsConnectionWhere>>;
  node?: Maybe<PeripheralTemplateWhere>;
  node_NOT?: Maybe<PeripheralTemplateWhere>;
}

export interface MachineTemplatePeripheralsCreateFieldInput {
  node: PeripheralTemplateCreateInput;
}

export interface MachineTemplatePeripheralsDeleteFieldInput {
  delete?: Maybe<PeripheralTemplateDeleteInput>;
  where?: Maybe<MachineTemplatePeripheralsConnectionWhere>;
}

export interface MachineTemplatePeripheralsDisconnectFieldInput {
  disconnect?: Maybe<PeripheralTemplateDisconnectInput>;
  where?: Maybe<MachineTemplatePeripheralsConnectionWhere>;
}

export interface MachineTemplatePeripheralsFieldInput {
  connect?: Maybe<Array<MachineTemplatePeripheralsConnectFieldInput>>;
  create?: Maybe<Array<MachineTemplatePeripheralsCreateFieldInput>>;
}

export interface MachineTemplatePeripheralsNodeAggregationWhereInput {
  AND?: Maybe<Array<MachineTemplatePeripheralsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<MachineTemplatePeripheralsNodeAggregationWhereInput>>;
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

export interface MachineTemplatePeripheralsUpdateConnectionInput {
  node?: Maybe<PeripheralTemplateUpdateInput>;
}

export interface MachineTemplatePeripheralsUpdateFieldInput {
  connect?: Maybe<Array<MachineTemplatePeripheralsConnectFieldInput>>;
  create?: Maybe<Array<MachineTemplatePeripheralsCreateFieldInput>>;
  delete?: Maybe<Array<MachineTemplatePeripheralsDeleteFieldInput>>;
  disconnect?: Maybe<Array<MachineTemplatePeripheralsDisconnectFieldInput>>;
  update?: Maybe<MachineTemplatePeripheralsUpdateConnectionInput>;
  where?: Maybe<MachineTemplatePeripheralsConnectionWhere>;
}

export interface MachineTemplatePluginsAggregateInput {
  AND?: Maybe<Array<MachineTemplatePluginsAggregateInput>>;
  OR?: Maybe<Array<MachineTemplatePluginsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<MachineTemplatePluginsNodeAggregationWhereInput>;
}

export interface MachineTemplatePluginsConnectFieldInput {
  where?: Maybe<MachinePluginConnectWhere>;
}

export interface MachineTemplatePluginsConnectionSort {
  node?: Maybe<MachinePluginSort>;
}

export interface MachineTemplatePluginsConnectionWhere {
  AND?: Maybe<Array<MachineTemplatePluginsConnectionWhere>>;
  OR?: Maybe<Array<MachineTemplatePluginsConnectionWhere>>;
  node?: Maybe<MachinePluginWhere>;
  node_NOT?: Maybe<MachinePluginWhere>;
}

export interface MachineTemplatePluginsCreateFieldInput {
  node: MachinePluginCreateInput;
}

export interface MachineTemplatePluginsDeleteFieldInput {
  where?: Maybe<MachineTemplatePluginsConnectionWhere>;
}

export interface MachineTemplatePluginsDisconnectFieldInput {
  where?: Maybe<MachineTemplatePluginsConnectionWhere>;
}

export interface MachineTemplatePluginsFieldInput {
  connect?: Maybe<Array<MachineTemplatePluginsConnectFieldInput>>;
  create?: Maybe<Array<MachineTemplatePluginsCreateFieldInput>>;
}

export interface MachineTemplatePluginsNodeAggregationWhereInput {
  AND?: Maybe<Array<MachineTemplatePluginsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<MachineTemplatePluginsNodeAggregationWhereInput>>;
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

export interface MachineTemplatePluginsUpdateConnectionInput {
  node?: Maybe<MachinePluginUpdateInput>;
}

export interface MachineTemplatePluginsUpdateFieldInput {
  connect?: Maybe<Array<MachineTemplatePluginsConnectFieldInput>>;
  create?: Maybe<Array<MachineTemplatePluginsCreateFieldInput>>;
  delete?: Maybe<Array<MachineTemplatePluginsDeleteFieldInput>>;
  disconnect?: Maybe<Array<MachineTemplatePluginsDisconnectFieldInput>>;
  update?: Maybe<MachineTemplatePluginsUpdateConnectionInput>;
  where?: Maybe<MachineTemplatePluginsConnectionWhere>;
}

export interface MachineTemplateRelationInput {
  computers?: Maybe<Array<MachineTemplateComputersCreateFieldInput>>;
  displays?: Maybe<Array<MachineTemplateDisplaysCreateFieldInput>>;
  peripherals?: Maybe<Array<MachineTemplatePeripheralsCreateFieldInput>>;
  plugins?: Maybe<Array<MachineTemplatePluginsCreateFieldInput>>;
}

/** Fields to sort MachineTemplates by. The order in which sorts are applied is not guaranteed when specifying many fields in one MachineTemplateSort object. */
export interface MachineTemplateSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
}

export interface MachineTemplateUpdateConnectionInput {
  node?: Maybe<MachineTemplateUpdateInput>;
}

export interface MachineTemplateUpdateFieldInput {
  connect?: Maybe<MachineTemplateConnectFieldInput>;
  create?: Maybe<MachineTemplateCreateFieldInput>;
  delete?: Maybe<MachineTemplateDeleteFieldInput>;
  disconnect?: Maybe<MachineTemplateDisconnectFieldInput>;
  update?: Maybe<MachineTemplateUpdateConnectionInput>;
  where?: Maybe<MachineTemplateConnectionWhere>;
}

export interface MachineTemplateUpdateInput {
  computers?: Maybe<Array<MachineTemplateComputersUpdateFieldInput>>;
  displays?: Maybe<Array<MachineTemplateDisplaysUpdateFieldInput>>;
  name?: Maybe<Scalars["String"]>;
  peripherals?: Maybe<Array<MachineTemplatePeripheralsUpdateFieldInput>>;
  plugins?: Maybe<Array<MachineTemplatePluginsUpdateFieldInput>>;
}

export interface MachineTemplateWhere {
  AND?: Maybe<Array<MachineTemplateWhere>>;
  OR?: Maybe<Array<MachineTemplateWhere>>;
  computers?: Maybe<ComputerTemplateWhere>;
  computersAggregate?: Maybe<MachineTemplateComputersAggregateInput>;
  computersConnection?: Maybe<MachineTemplateComputersConnectionWhere>;
  computersConnection_NOT?: Maybe<MachineTemplateComputersConnectionWhere>;
  computers_NOT?: Maybe<ComputerTemplateWhere>;
  displays?: Maybe<ScreenTemplateWhere>;
  displaysAggregate?: Maybe<MachineTemplateDisplaysAggregateInput>;
  displaysConnection?: Maybe<MachineTemplateDisplaysConnectionWhere>;
  displaysConnection_NOT?: Maybe<MachineTemplateDisplaysConnectionWhere>;
  displays_NOT?: Maybe<ScreenTemplateWhere>;
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
  peripherals?: Maybe<PeripheralTemplateWhere>;
  peripheralsAggregate?: Maybe<MachineTemplatePeripheralsAggregateInput>;
  peripheralsConnection?: Maybe<MachineTemplatePeripheralsConnectionWhere>;
  peripheralsConnection_NOT?: Maybe<MachineTemplatePeripheralsConnectionWhere>;
  peripherals_NOT?: Maybe<PeripheralTemplateWhere>;
  plugins?: Maybe<MachinePluginWhere>;
  pluginsAggregate?: Maybe<MachineTemplatePluginsAggregateInput>;
  pluginsConnection?: Maybe<MachineTemplatePluginsConnectionWhere>;
  pluginsConnection_NOT?: Maybe<MachineTemplatePluginsConnectionWhere>;
  plugins_NOT?: Maybe<MachinePluginWhere>;
}

export interface MachineUpdateInput {
  computers?: Maybe<MachineComputersUpdateFieldInput>;
  location?: Maybe<MachineLocationUpdateFieldInput>;
  name?: Maybe<Scalars["String"]>;
  networkName?: Maybe<Scalars["String"]>;
  provisioned?: Maybe<Scalars["Boolean"]>;
  provisionedAt?: Maybe<Scalars["DateTime"]>;
  template?: Maybe<MachineTemplateUpdateFieldInput>;
}

export interface MachineWhere {
  AND?: Maybe<Array<MachineWhere>>;
  OR?: Maybe<Array<MachineWhere>>;
  computers?: Maybe<ComputerWhere>;
  computersAggregate?: Maybe<MachineComputersAggregateInput>;
  computersConnection?: Maybe<MachineComputersConnectionWhere>;
  computersConnection_NOT?: Maybe<MachineComputersConnectionWhere>;
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
  location?: Maybe<LocationWhere>;
  locationAggregate?: Maybe<MachineLocationAggregateInput>;
  locationConnection?: Maybe<MachineLocationConnectionWhere>;
  locationConnection_NOT?: Maybe<MachineLocationConnectionWhere>;
  location_NOT?: Maybe<LocationWhere>;
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
  networkName?: Maybe<Scalars["String"]>;
  networkName_CONTAINS?: Maybe<Scalars["String"]>;
  networkName_ENDS_WITH?: Maybe<Scalars["String"]>;
  networkName_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  networkName_NOT?: Maybe<Scalars["String"]>;
  networkName_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  networkName_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  networkName_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  networkName_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  networkName_STARTS_WITH?: Maybe<Scalars["String"]>;
  provisioned?: Maybe<Scalars["Boolean"]>;
  provisionedAt?: Maybe<Scalars["DateTime"]>;
  provisionedAt_GT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_GTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  provisionedAt_LT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_LTE?: Maybe<Scalars["DateTime"]>;
  provisionedAt_NOT?: Maybe<Scalars["DateTime"]>;
  provisionedAt_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  provisioned_NOT?: Maybe<Scalars["Boolean"]>;
  template?: Maybe<MachineTemplateWhere>;
  templateAggregate?: Maybe<MachineTemplateAggregateInput>;
  templateConnection?: Maybe<MachineTemplateConnectionWhere>;
  templateConnection_NOT?: Maybe<MachineTemplateConnectionWhere>;
  template_NOT?: Maybe<MachineTemplateWhere>;
}

export interface PeripheralTemplateComputerAggregateInput {
  AND?: Maybe<Array<PeripheralTemplateComputerAggregateInput>>;
  OR?: Maybe<Array<PeripheralTemplateComputerAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<PeripheralTemplateComputerNodeAggregationWhereInput>;
}

export interface PeripheralTemplateComputerConnectFieldInput {
  connect?: Maybe<ComputerTemplateConnectInput>;
  where?: Maybe<ComputerTemplateConnectWhere>;
}

export interface PeripheralTemplateComputerConnectionSort {
  node?: Maybe<ComputerTemplateSort>;
}

export interface PeripheralTemplateComputerConnectionWhere {
  AND?: Maybe<Array<PeripheralTemplateComputerConnectionWhere>>;
  OR?: Maybe<Array<PeripheralTemplateComputerConnectionWhere>>;
  node?: Maybe<ComputerTemplateWhere>;
  node_NOT?: Maybe<ComputerTemplateWhere>;
}

export interface PeripheralTemplateComputerCreateFieldInput {
  node: ComputerTemplateCreateInput;
}

export interface PeripheralTemplateComputerDeleteFieldInput {
  delete?: Maybe<ComputerTemplateDeleteInput>;
  where?: Maybe<PeripheralTemplateComputerConnectionWhere>;
}

export interface PeripheralTemplateComputerDisconnectFieldInput {
  disconnect?: Maybe<ComputerTemplateDisconnectInput>;
  where?: Maybe<PeripheralTemplateComputerConnectionWhere>;
}

export interface PeripheralTemplateComputerFieldInput {
  connect?: Maybe<PeripheralTemplateComputerConnectFieldInput>;
  create?: Maybe<PeripheralTemplateComputerCreateFieldInput>;
}

export interface PeripheralTemplateComputerNodeAggregationWhereInput {
  AND?: Maybe<Array<PeripheralTemplateComputerNodeAggregationWhereInput>>;
  OR?: Maybe<Array<PeripheralTemplateComputerNodeAggregationWhereInput>>;
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

export interface PeripheralTemplateComputerUpdateConnectionInput {
  node?: Maybe<ComputerTemplateUpdateInput>;
}

export interface PeripheralTemplateComputerUpdateFieldInput {
  connect?: Maybe<PeripheralTemplateComputerConnectFieldInput>;
  create?: Maybe<PeripheralTemplateComputerCreateFieldInput>;
  delete?: Maybe<PeripheralTemplateComputerDeleteFieldInput>;
  disconnect?: Maybe<PeripheralTemplateComputerDisconnectFieldInput>;
  update?: Maybe<PeripheralTemplateComputerUpdateConnectionInput>;
  where?: Maybe<PeripheralTemplateComputerConnectionWhere>;
}

export interface PeripheralTemplateConnectInput {
  computer?: Maybe<PeripheralTemplateComputerConnectFieldInput>;
}

export interface PeripheralTemplateConnectWhere {
  node: PeripheralTemplateWhere;
}

export interface PeripheralTemplateCreateInput {
  computer?: Maybe<PeripheralTemplateComputerFieldInput>;
  name?: Maybe<Scalars["String"]>;
  private?: Maybe<Scalars["Boolean"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface PeripheralTemplateDeleteInput {
  computer?: Maybe<PeripheralTemplateComputerDeleteFieldInput>;
}

export interface PeripheralTemplateDisconnectInput {
  computer?: Maybe<PeripheralTemplateComputerDisconnectFieldInput>;
}

export interface PeripheralTemplateOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more PeripheralTemplateSort objects to sort PeripheralTemplates by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<PeripheralTemplateSort>>>;
}

export interface PeripheralTemplateRelationInput {
  computer?: Maybe<PeripheralTemplateComputerCreateFieldInput>;
}

/** Fields to sort PeripheralTemplates by. The order in which sorts are applied is not guaranteed when specifying many fields in one PeripheralTemplateSort object. */
export interface PeripheralTemplateSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  private?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
}

export interface PeripheralTemplateUpdateInput {
  computer?: Maybe<PeripheralTemplateComputerUpdateFieldInput>;
  name?: Maybe<Scalars["String"]>;
  private?: Maybe<Scalars["Boolean"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface PeripheralTemplateWhere {
  AND?: Maybe<Array<PeripheralTemplateWhere>>;
  OR?: Maybe<Array<PeripheralTemplateWhere>>;
  computer?: Maybe<ComputerTemplateWhere>;
  computerAggregate?: Maybe<PeripheralTemplateComputerAggregateInput>;
  computerConnection?: Maybe<PeripheralTemplateComputerConnectionWhere>;
  computerConnection_NOT?: Maybe<PeripheralTemplateComputerConnectionWhere>;
  computer_NOT?: Maybe<ComputerTemplateWhere>;
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
  private?: Maybe<Scalars["Boolean"]>;
  private_NOT?: Maybe<Scalars["Boolean"]>;
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

export interface ProvisionCodeConnectInput {
  display?: Maybe<ProvisionCodeDisplayConnectFieldInput>;
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
  connect?: Maybe<MachineConnectInput>;
  where?: Maybe<MachineConnectWhere>;
}

export interface ProvisionCodeDisplayConnectionSort {
  node?: Maybe<MachineSort>;
}

export interface ProvisionCodeDisplayConnectionWhere {
  AND?: Maybe<Array<ProvisionCodeDisplayConnectionWhere>>;
  OR?: Maybe<Array<ProvisionCodeDisplayConnectionWhere>>;
  node?: Maybe<MachineWhere>;
  node_NOT?: Maybe<MachineWhere>;
}

export interface ProvisionCodeDisplayCreateFieldInput {
  node: MachineCreateInput;
}

export interface ProvisionCodeDisplayDeleteFieldInput {
  delete?: Maybe<MachineDeleteInput>;
  where?: Maybe<ProvisionCodeDisplayConnectionWhere>;
}

export interface ProvisionCodeDisplayDisconnectFieldInput {
  disconnect?: Maybe<MachineDisconnectInput>;
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
  networkName_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  networkName_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  networkName_EQUAL?: Maybe<Scalars["String"]>;
  networkName_GT?: Maybe<Scalars["Int"]>;
  networkName_GTE?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_GT?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_LT?: Maybe<Scalars["Int"]>;
  networkName_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  networkName_LT?: Maybe<Scalars["Int"]>;
  networkName_LTE?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  networkName_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
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
  node?: Maybe<MachineUpdateInput>;
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
  display?: Maybe<MachineWhere>;
  displayAggregate?: Maybe<ProvisionCodeDisplayAggregateInput>;
  displayConnection?: Maybe<ProvisionCodeDisplayConnectionWhere>;
  displayConnection_NOT?: Maybe<ProvisionCodeDisplayConnectionWhere>;
  display_NOT?: Maybe<MachineWhere>;
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

export interface ScheduleCampaignsAggregateInput {
  AND?: Maybe<Array<ScheduleCampaignsAggregateInput>>;
  OR?: Maybe<Array<ScheduleCampaignsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  edge?: Maybe<ScheduleCampaignsEdgeAggregationWhereInput>;
  node?: Maybe<ScheduleCampaignsNodeAggregationWhereInput>;
}

export interface ScheduleCampaignsConnectFieldInput {
  connect?: Maybe<Array<CampaignConnectInput>>;
  edge?: Maybe<ScheduleItemPropertiesCreateInput>;
  where?: Maybe<CampaignConnectWhere>;
}

export interface ScheduleCampaignsConnectionSort {
  edge?: Maybe<ScheduleItemPropertiesSort>;
  node?: Maybe<CampaignSort>;
}

export interface ScheduleCampaignsConnectionWhere {
  AND?: Maybe<Array<ScheduleCampaignsConnectionWhere>>;
  OR?: Maybe<Array<ScheduleCampaignsConnectionWhere>>;
  edge?: Maybe<ScheduleItemPropertiesWhere>;
  edge_NOT?: Maybe<ScheduleItemPropertiesWhere>;
  node?: Maybe<CampaignWhere>;
  node_NOT?: Maybe<CampaignWhere>;
}

export interface ScheduleCampaignsCreateFieldInput {
  edge?: Maybe<ScheduleItemPropertiesCreateInput>;
  node: CampaignCreateInput;
}

export interface ScheduleCampaignsDeleteFieldInput {
  delete?: Maybe<CampaignDeleteInput>;
  where?: Maybe<ScheduleCampaignsConnectionWhere>;
}

export interface ScheduleCampaignsDisconnectFieldInput {
  disconnect?: Maybe<CampaignDisconnectInput>;
  where?: Maybe<ScheduleCampaignsConnectionWhere>;
}

export interface ScheduleCampaignsEdgeAggregationWhereInput {
  AND?: Maybe<Array<ScheduleCampaignsEdgeAggregationWhereInput>>;
  OR?: Maybe<Array<ScheduleCampaignsEdgeAggregationWhereInput>>;
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
  screen_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  screen_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  screen_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  screen_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  screen_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  screen_EQUAL?: Maybe<Scalars["String"]>;
  screen_GT?: Maybe<Scalars["Int"]>;
  screen_GTE?: Maybe<Scalars["Int"]>;
  screen_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  screen_LONGEST_GT?: Maybe<Scalars["Int"]>;
  screen_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  screen_LONGEST_LT?: Maybe<Scalars["Int"]>;
  screen_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  screen_LT?: Maybe<Scalars["Int"]>;
  screen_LTE?: Maybe<Scalars["Int"]>;
  screen_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  screen_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  screen_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  screen_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  screen_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
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
  tier_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  tier_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  tier_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  tier_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  tier_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  tier_EQUAL?: Maybe<Scalars["String"]>;
  tier_GT?: Maybe<Scalars["Int"]>;
  tier_GTE?: Maybe<Scalars["Int"]>;
  tier_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  tier_LONGEST_GT?: Maybe<Scalars["Int"]>;
  tier_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  tier_LONGEST_LT?: Maybe<Scalars["Int"]>;
  tier_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  tier_LT?: Maybe<Scalars["Int"]>;
  tier_LTE?: Maybe<Scalars["Int"]>;
  tier_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  tier_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  tier_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  tier_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  tier_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
}

export interface ScheduleCampaignsFieldInput {
  connect?: Maybe<Array<ScheduleCampaignsConnectFieldInput>>;
  create?: Maybe<Array<ScheduleCampaignsCreateFieldInput>>;
}

export interface ScheduleCampaignsNodeAggregationWhereInput {
  AND?: Maybe<Array<ScheduleCampaignsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ScheduleCampaignsNodeAggregationWhereInput>>;
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

export interface ScheduleCampaignsUpdateConnectionInput {
  edge?: Maybe<ScheduleItemPropertiesUpdateInput>;
  node?: Maybe<CampaignUpdateInput>;
}

export interface ScheduleCampaignsUpdateFieldInput {
  connect?: Maybe<Array<ScheduleCampaignsConnectFieldInput>>;
  create?: Maybe<Array<ScheduleCampaignsCreateFieldInput>>;
  delete?: Maybe<Array<ScheduleCampaignsDeleteFieldInput>>;
  disconnect?: Maybe<Array<ScheduleCampaignsDisconnectFieldInput>>;
  update?: Maybe<ScheduleCampaignsUpdateConnectionInput>;
  where?: Maybe<ScheduleCampaignsConnectionWhere>;
}

export interface ScheduleConnectInput {
  campaigns?: Maybe<Array<ScheduleCampaignsConnectFieldInput>>;
  locations?: Maybe<Array<ScheduleLocationsConnectFieldInput>>;
  screens?: Maybe<Array<ScheduleScreensConnectFieldInput>>;
  tiers?: Maybe<Array<ScheduleTiersConnectFieldInput>>;
}

export interface ScheduleConnectWhere {
  node: ScheduleWhere;
}

export interface ScheduleCreateInput {
  campaigns?: Maybe<ScheduleCampaignsFieldInput>;
  endDate?: Maybe<Scalars["DateTime"]>;
  locations?: Maybe<ScheduleLocationsFieldInput>;
  name?: Maybe<Scalars["String"]>;
  screens?: Maybe<ScheduleScreensFieldInput>;
  startDate?: Maybe<Scalars["DateTime"]>;
  tiers?: Maybe<ScheduleTiersFieldInput>;
}

export interface ScheduleDeleteInput {
  campaigns?: Maybe<Array<ScheduleCampaignsDeleteFieldInput>>;
  locations?: Maybe<Array<ScheduleLocationsDeleteFieldInput>>;
  screens?: Maybe<Array<ScheduleScreensDeleteFieldInput>>;
  tiers?: Maybe<Array<ScheduleTiersDeleteFieldInput>>;
}

export interface ScheduleDisconnectInput {
  campaigns?: Maybe<Array<ScheduleCampaignsDisconnectFieldInput>>;
  locations?: Maybe<Array<ScheduleLocationsDisconnectFieldInput>>;
  screens?: Maybe<Array<ScheduleScreensDisconnectFieldInput>>;
  tiers?: Maybe<Array<ScheduleTiersDisconnectFieldInput>>;
}

export interface ScheduleItemPropertiesCreateInput {
  endDate?: Maybe<Scalars["DateTime"]>;
  screen?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  tier?: Maybe<Scalars["String"]>;
}

export interface ScheduleItemPropertiesSort {
  endDate?: Maybe<SortDirection>;
  screen?: Maybe<SortDirection>;
  startDate?: Maybe<SortDirection>;
  tier?: Maybe<SortDirection>;
}

export interface ScheduleItemPropertiesUpdateInput {
  endDate?: Maybe<Scalars["DateTime"]>;
  screen?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  tier?: Maybe<Scalars["String"]>;
}

export interface ScheduleItemPropertiesWhere {
  AND?: Maybe<Array<ScheduleItemPropertiesWhere>>;
  OR?: Maybe<Array<ScheduleItemPropertiesWhere>>;
  endDate?: Maybe<Scalars["DateTime"]>;
  endDate_GT?: Maybe<Scalars["DateTime"]>;
  endDate_GTE?: Maybe<Scalars["DateTime"]>;
  endDate_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  endDate_LT?: Maybe<Scalars["DateTime"]>;
  endDate_LTE?: Maybe<Scalars["DateTime"]>;
  endDate_NOT?: Maybe<Scalars["DateTime"]>;
  endDate_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  screen?: Maybe<Scalars["String"]>;
  screen_CONTAINS?: Maybe<Scalars["String"]>;
  screen_ENDS_WITH?: Maybe<Scalars["String"]>;
  screen_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  screen_NOT?: Maybe<Scalars["String"]>;
  screen_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  screen_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  screen_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  screen_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  screen_STARTS_WITH?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  startDate_GT?: Maybe<Scalars["DateTime"]>;
  startDate_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  startDate_LT?: Maybe<Scalars["DateTime"]>;
  startDate_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_NOT?: Maybe<Scalars["DateTime"]>;
  startDate_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  tier?: Maybe<Scalars["String"]>;
  tier_CONTAINS?: Maybe<Scalars["String"]>;
  tier_ENDS_WITH?: Maybe<Scalars["String"]>;
  tier_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  tier_NOT?: Maybe<Scalars["String"]>;
  tier_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  tier_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  tier_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  tier_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  tier_STARTS_WITH?: Maybe<Scalars["String"]>;
}

export interface ScheduleLocationsAggregateInput {
  AND?: Maybe<Array<ScheduleLocationsAggregateInput>>;
  OR?: Maybe<Array<ScheduleLocationsAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ScheduleLocationsNodeAggregationWhereInput>;
}

export interface ScheduleLocationsConnectFieldInput {
  connect?: Maybe<Array<LocationConnectInput>>;
  where?: Maybe<LocationConnectWhere>;
}

export interface ScheduleLocationsConnectionSort {
  node?: Maybe<LocationSort>;
}

export interface ScheduleLocationsConnectionWhere {
  AND?: Maybe<Array<ScheduleLocationsConnectionWhere>>;
  OR?: Maybe<Array<ScheduleLocationsConnectionWhere>>;
  node?: Maybe<LocationWhere>;
  node_NOT?: Maybe<LocationWhere>;
}

export interface ScheduleLocationsCreateFieldInput {
  node: LocationCreateInput;
}

export interface ScheduleLocationsDeleteFieldInput {
  delete?: Maybe<LocationDeleteInput>;
  where?: Maybe<ScheduleLocationsConnectionWhere>;
}

export interface ScheduleLocationsDisconnectFieldInput {
  disconnect?: Maybe<LocationDisconnectInput>;
  where?: Maybe<ScheduleLocationsConnectionWhere>;
}

export interface ScheduleLocationsFieldInput {
  connect?: Maybe<Array<ScheduleLocationsConnectFieldInput>>;
  create?: Maybe<Array<ScheduleLocationsCreateFieldInput>>;
}

export interface ScheduleLocationsNodeAggregationWhereInput {
  AND?: Maybe<Array<ScheduleLocationsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ScheduleLocationsNodeAggregationWhereInput>>;
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

export interface ScheduleLocationsUpdateConnectionInput {
  node?: Maybe<LocationUpdateInput>;
}

export interface ScheduleLocationsUpdateFieldInput {
  connect?: Maybe<Array<ScheduleLocationsConnectFieldInput>>;
  create?: Maybe<Array<ScheduleLocationsCreateFieldInput>>;
  delete?: Maybe<Array<ScheduleLocationsDeleteFieldInput>>;
  disconnect?: Maybe<Array<ScheduleLocationsDisconnectFieldInput>>;
  update?: Maybe<ScheduleLocationsUpdateConnectionInput>;
  where?: Maybe<ScheduleLocationsConnectionWhere>;
}

export interface ScheduleOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more ScheduleSort objects to sort Schedules by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ScheduleSort>>>;
}

export interface ScheduleRelationInput {
  campaigns?: Maybe<Array<ScheduleCampaignsCreateFieldInput>>;
  locations?: Maybe<Array<ScheduleLocationsCreateFieldInput>>;
  screens?: Maybe<Array<ScheduleScreensCreateFieldInput>>;
  tiers?: Maybe<Array<ScheduleTiersCreateFieldInput>>;
}

export interface ScheduleScreensAggregateInput {
  AND?: Maybe<Array<ScheduleScreensAggregateInput>>;
  OR?: Maybe<Array<ScheduleScreensAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ScheduleScreensNodeAggregationWhereInput>;
}

export interface ScheduleScreensConnectFieldInput {
  connect?: Maybe<Array<ScreenTemplateConnectInput>>;
  where?: Maybe<ScreenTemplateConnectWhere>;
}

export interface ScheduleScreensConnectionSort {
  node?: Maybe<ScreenTemplateSort>;
}

export interface ScheduleScreensConnectionWhere {
  AND?: Maybe<Array<ScheduleScreensConnectionWhere>>;
  OR?: Maybe<Array<ScheduleScreensConnectionWhere>>;
  node?: Maybe<ScreenTemplateWhere>;
  node_NOT?: Maybe<ScreenTemplateWhere>;
}

export interface ScheduleScreensCreateFieldInput {
  node: ScreenTemplateCreateInput;
}

export interface ScheduleScreensDeleteFieldInput {
  delete?: Maybe<ScreenTemplateDeleteInput>;
  where?: Maybe<ScheduleScreensConnectionWhere>;
}

export interface ScheduleScreensDisconnectFieldInput {
  disconnect?: Maybe<ScreenTemplateDisconnectInput>;
  where?: Maybe<ScheduleScreensConnectionWhere>;
}

export interface ScheduleScreensFieldInput {
  connect?: Maybe<Array<ScheduleScreensConnectFieldInput>>;
  create?: Maybe<Array<ScheduleScreensCreateFieldInput>>;
}

export interface ScheduleScreensNodeAggregationWhereInput {
  AND?: Maybe<Array<ScheduleScreensNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ScheduleScreensNodeAggregationWhereInput>>;
  height_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  height_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  height_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  height_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  height_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  height_EQUAL?: Maybe<Scalars["Int"]>;
  height_GT?: Maybe<Scalars["Int"]>;
  height_GTE?: Maybe<Scalars["Int"]>;
  height_LT?: Maybe<Scalars["Int"]>;
  height_LTE?: Maybe<Scalars["Int"]>;
  height_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  height_MAX_GT?: Maybe<Scalars["Int"]>;
  height_MAX_GTE?: Maybe<Scalars["Int"]>;
  height_MAX_LT?: Maybe<Scalars["Int"]>;
  height_MAX_LTE?: Maybe<Scalars["Int"]>;
  height_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  height_MIN_GT?: Maybe<Scalars["Int"]>;
  height_MIN_GTE?: Maybe<Scalars["Int"]>;
  height_MIN_LT?: Maybe<Scalars["Int"]>;
  height_MIN_LTE?: Maybe<Scalars["Int"]>;
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
  rotation_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  rotation_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  rotation_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  rotation_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  rotation_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  rotation_EQUAL?: Maybe<Scalars["Int"]>;
  rotation_GT?: Maybe<Scalars["Int"]>;
  rotation_GTE?: Maybe<Scalars["Int"]>;
  rotation_LT?: Maybe<Scalars["Int"]>;
  rotation_LTE?: Maybe<Scalars["Int"]>;
  rotation_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  rotation_MAX_GT?: Maybe<Scalars["Int"]>;
  rotation_MAX_GTE?: Maybe<Scalars["Int"]>;
  rotation_MAX_LT?: Maybe<Scalars["Int"]>;
  rotation_MAX_LTE?: Maybe<Scalars["Int"]>;
  rotation_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  rotation_MIN_GT?: Maybe<Scalars["Int"]>;
  rotation_MIN_GTE?: Maybe<Scalars["Int"]>;
  rotation_MIN_LT?: Maybe<Scalars["Int"]>;
  rotation_MIN_LTE?: Maybe<Scalars["Int"]>;
  width_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  width_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  width_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  width_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  width_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  width_EQUAL?: Maybe<Scalars["Int"]>;
  width_GT?: Maybe<Scalars["Int"]>;
  width_GTE?: Maybe<Scalars["Int"]>;
  width_LT?: Maybe<Scalars["Int"]>;
  width_LTE?: Maybe<Scalars["Int"]>;
  width_MAX_EQUAL?: Maybe<Scalars["Int"]>;
  width_MAX_GT?: Maybe<Scalars["Int"]>;
  width_MAX_GTE?: Maybe<Scalars["Int"]>;
  width_MAX_LT?: Maybe<Scalars["Int"]>;
  width_MAX_LTE?: Maybe<Scalars["Int"]>;
  width_MIN_EQUAL?: Maybe<Scalars["Int"]>;
  width_MIN_GT?: Maybe<Scalars["Int"]>;
  width_MIN_GTE?: Maybe<Scalars["Int"]>;
  width_MIN_LT?: Maybe<Scalars["Int"]>;
  width_MIN_LTE?: Maybe<Scalars["Int"]>;
}

export interface ScheduleScreensUpdateConnectionInput {
  node?: Maybe<ScreenTemplateUpdateInput>;
}

export interface ScheduleScreensUpdateFieldInput {
  connect?: Maybe<Array<ScheduleScreensConnectFieldInput>>;
  create?: Maybe<Array<ScheduleScreensCreateFieldInput>>;
  delete?: Maybe<Array<ScheduleScreensDeleteFieldInput>>;
  disconnect?: Maybe<Array<ScheduleScreensDisconnectFieldInput>>;
  update?: Maybe<ScheduleScreensUpdateConnectionInput>;
  where?: Maybe<ScheduleScreensConnectionWhere>;
}

/** Fields to sort Schedules by. The order in which sorts are applied is not guaranteed when specifying many fields in one ScheduleSort object. */
export interface ScheduleSort {
  endDate?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  startDate?: Maybe<SortDirection>;
}

export interface ScheduleTierConnectInput {
  schedule?: Maybe<ScheduleTierScheduleConnectFieldInput>;
}

export interface ScheduleTierConnectWhere {
  node: ScheduleTierWhere;
}

export interface ScheduleTierCreateInput {
  name?: Maybe<Scalars["String"]>;
  percent?: Maybe<Scalars["Float"]>;
  schedule?: Maybe<ScheduleTierScheduleFieldInput>;
  slots?: Maybe<Scalars["Float"]>;
}

export interface ScheduleTierDeleteInput {
  schedule?: Maybe<ScheduleTierScheduleDeleteFieldInput>;
}

export interface ScheduleTierDisconnectInput {
  schedule?: Maybe<ScheduleTierScheduleDisconnectFieldInput>;
}

export interface ScheduleTierOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more ScheduleTierSort objects to sort ScheduleTiers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ScheduleTierSort>>>;
}

export interface ScheduleTierRelationInput {
  schedule?: Maybe<ScheduleTierScheduleCreateFieldInput>;
}

export interface ScheduleTierScheduleAggregateInput {
  AND?: Maybe<Array<ScheduleTierScheduleAggregateInput>>;
  OR?: Maybe<Array<ScheduleTierScheduleAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ScheduleTierScheduleNodeAggregationWhereInput>;
}

export interface ScheduleTierScheduleConnectFieldInput {
  connect?: Maybe<ScheduleConnectInput>;
  where?: Maybe<ScheduleConnectWhere>;
}

export interface ScheduleTierScheduleConnectionSort {
  node?: Maybe<ScheduleSort>;
}

export interface ScheduleTierScheduleConnectionWhere {
  AND?: Maybe<Array<ScheduleTierScheduleConnectionWhere>>;
  OR?: Maybe<Array<ScheduleTierScheduleConnectionWhere>>;
  node?: Maybe<ScheduleWhere>;
  node_NOT?: Maybe<ScheduleWhere>;
}

export interface ScheduleTierScheduleCreateFieldInput {
  node: ScheduleCreateInput;
}

export interface ScheduleTierScheduleDeleteFieldInput {
  delete?: Maybe<ScheduleDeleteInput>;
  where?: Maybe<ScheduleTierScheduleConnectionWhere>;
}

export interface ScheduleTierScheduleDisconnectFieldInput {
  disconnect?: Maybe<ScheduleDisconnectInput>;
  where?: Maybe<ScheduleTierScheduleConnectionWhere>;
}

export interface ScheduleTierScheduleFieldInput {
  connect?: Maybe<ScheduleTierScheduleConnectFieldInput>;
  create?: Maybe<ScheduleTierScheduleCreateFieldInput>;
}

export interface ScheduleTierScheduleNodeAggregationWhereInput {
  AND?: Maybe<Array<ScheduleTierScheduleNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ScheduleTierScheduleNodeAggregationWhereInput>>;
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

export interface ScheduleTierScheduleUpdateConnectionInput {
  node?: Maybe<ScheduleUpdateInput>;
}

export interface ScheduleTierScheduleUpdateFieldInput {
  connect?: Maybe<ScheduleTierScheduleConnectFieldInput>;
  create?: Maybe<ScheduleTierScheduleCreateFieldInput>;
  delete?: Maybe<ScheduleTierScheduleDeleteFieldInput>;
  disconnect?: Maybe<ScheduleTierScheduleDisconnectFieldInput>;
  update?: Maybe<ScheduleTierScheduleUpdateConnectionInput>;
  where?: Maybe<ScheduleTierScheduleConnectionWhere>;
}

/** Fields to sort ScheduleTiers by. The order in which sorts are applied is not guaranteed when specifying many fields in one ScheduleTierSort object. */
export interface ScheduleTierSort {
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  percent?: Maybe<SortDirection>;
  slots?: Maybe<SortDirection>;
}

export interface ScheduleTierUpdateInput {
  name?: Maybe<Scalars["String"]>;
  percent?: Maybe<Scalars["Float"]>;
  schedule?: Maybe<ScheduleTierScheduleUpdateFieldInput>;
  slots?: Maybe<Scalars["Float"]>;
}

export interface ScheduleTierWhere {
  AND?: Maybe<Array<ScheduleTierWhere>>;
  OR?: Maybe<Array<ScheduleTierWhere>>;
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
  schedule?: Maybe<ScheduleWhere>;
  scheduleAggregate?: Maybe<ScheduleTierScheduleAggregateInput>;
  scheduleConnection?: Maybe<ScheduleTierScheduleConnectionWhere>;
  scheduleConnection_NOT?: Maybe<ScheduleTierScheduleConnectionWhere>;
  schedule_NOT?: Maybe<ScheduleWhere>;
  slots?: Maybe<Scalars["Float"]>;
  slots_GT?: Maybe<Scalars["Float"]>;
  slots_GTE?: Maybe<Scalars["Float"]>;
  slots_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  slots_LT?: Maybe<Scalars["Float"]>;
  slots_LTE?: Maybe<Scalars["Float"]>;
  slots_NOT?: Maybe<Scalars["Float"]>;
  slots_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
}

export interface ScheduleTiersAggregateInput {
  AND?: Maybe<Array<ScheduleTiersAggregateInput>>;
  OR?: Maybe<Array<ScheduleTiersAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ScheduleTiersNodeAggregationWhereInput>;
}

export interface ScheduleTiersConnectFieldInput {
  connect?: Maybe<Array<ScheduleTierConnectInput>>;
  where?: Maybe<ScheduleTierConnectWhere>;
}

export interface ScheduleTiersConnectionSort {
  node?: Maybe<ScheduleTierSort>;
}

export interface ScheduleTiersConnectionWhere {
  AND?: Maybe<Array<ScheduleTiersConnectionWhere>>;
  OR?: Maybe<Array<ScheduleTiersConnectionWhere>>;
  node?: Maybe<ScheduleTierWhere>;
  node_NOT?: Maybe<ScheduleTierWhere>;
}

export interface ScheduleTiersCreateFieldInput {
  node: ScheduleTierCreateInput;
}

export interface ScheduleTiersDeleteFieldInput {
  delete?: Maybe<ScheduleTierDeleteInput>;
  where?: Maybe<ScheduleTiersConnectionWhere>;
}

export interface ScheduleTiersDisconnectFieldInput {
  disconnect?: Maybe<ScheduleTierDisconnectInput>;
  where?: Maybe<ScheduleTiersConnectionWhere>;
}

export interface ScheduleTiersFieldInput {
  connect?: Maybe<Array<ScheduleTiersConnectFieldInput>>;
  create?: Maybe<Array<ScheduleTiersCreateFieldInput>>;
}

export interface ScheduleTiersNodeAggregationWhereInput {
  AND?: Maybe<Array<ScheduleTiersNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ScheduleTiersNodeAggregationWhereInput>>;
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

export interface ScheduleTiersUpdateConnectionInput {
  node?: Maybe<ScheduleTierUpdateInput>;
}

export interface ScheduleTiersUpdateFieldInput {
  connect?: Maybe<Array<ScheduleTiersConnectFieldInput>>;
  create?: Maybe<Array<ScheduleTiersCreateFieldInput>>;
  delete?: Maybe<Array<ScheduleTiersDeleteFieldInput>>;
  disconnect?: Maybe<Array<ScheduleTiersDisconnectFieldInput>>;
  update?: Maybe<ScheduleTiersUpdateConnectionInput>;
  where?: Maybe<ScheduleTiersConnectionWhere>;
}

export interface ScheduleUpdateInput {
  campaigns?: Maybe<Array<ScheduleCampaignsUpdateFieldInput>>;
  endDate?: Maybe<Scalars["DateTime"]>;
  locations?: Maybe<Array<ScheduleLocationsUpdateFieldInput>>;
  name?: Maybe<Scalars["String"]>;
  screens?: Maybe<Array<ScheduleScreensUpdateFieldInput>>;
  startDate?: Maybe<Scalars["DateTime"]>;
  tiers?: Maybe<Array<ScheduleTiersUpdateFieldInput>>;
}

export interface ScheduleWhere {
  AND?: Maybe<Array<ScheduleWhere>>;
  OR?: Maybe<Array<ScheduleWhere>>;
  campaigns?: Maybe<CampaignWhere>;
  campaignsAggregate?: Maybe<ScheduleCampaignsAggregateInput>;
  campaignsConnection?: Maybe<ScheduleCampaignsConnectionWhere>;
  campaignsConnection_NOT?: Maybe<ScheduleCampaignsConnectionWhere>;
  campaigns_NOT?: Maybe<CampaignWhere>;
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
  locations?: Maybe<LocationWhere>;
  locationsAggregate?: Maybe<ScheduleLocationsAggregateInput>;
  locationsConnection?: Maybe<ScheduleLocationsConnectionWhere>;
  locationsConnection_NOT?: Maybe<ScheduleLocationsConnectionWhere>;
  locations_NOT?: Maybe<LocationWhere>;
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
  screens?: Maybe<ScreenTemplateWhere>;
  screensAggregate?: Maybe<ScheduleScreensAggregateInput>;
  screensConnection?: Maybe<ScheduleScreensConnectionWhere>;
  screensConnection_NOT?: Maybe<ScheduleScreensConnectionWhere>;
  screens_NOT?: Maybe<ScreenTemplateWhere>;
  startDate?: Maybe<Scalars["DateTime"]>;
  startDate_GT?: Maybe<Scalars["DateTime"]>;
  startDate_GTE?: Maybe<Scalars["DateTime"]>;
  startDate_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  startDate_LT?: Maybe<Scalars["DateTime"]>;
  startDate_LTE?: Maybe<Scalars["DateTime"]>;
  startDate_NOT?: Maybe<Scalars["DateTime"]>;
  startDate_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  tiers?: Maybe<ScheduleTierWhere>;
  tiersAggregate?: Maybe<ScheduleTiersAggregateInput>;
  tiersConnection?: Maybe<ScheduleTiersConnectionWhere>;
  tiersConnection_NOT?: Maybe<ScheduleTiersConnectionWhere>;
  tiers_NOT?: Maybe<ScheduleTierWhere>;
}

export interface ScreenCreateInput {
  height?: Maybe<Scalars["Float"]>;
  orientation?: Maybe<Scalars["Float"]>;
  resHeight?: Maybe<Scalars["Float"]>;
  resWidth?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
}

export interface ScreenOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more ScreenSort objects to sort Screens by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ScreenSort>>>;
}

/** Fields to sort Screens by. The order in which sorts are applied is not guaranteed when specifying many fields in one ScreenSort object. */
export interface ScreenSort {
  height?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  orientation?: Maybe<SortDirection>;
  resHeight?: Maybe<SortDirection>;
  resWidth?: Maybe<SortDirection>;
  width?: Maybe<SortDirection>;
}

export interface ScreenTemplateComputerAggregateInput {
  AND?: Maybe<Array<ScreenTemplateComputerAggregateInput>>;
  OR?: Maybe<Array<ScreenTemplateComputerAggregateInput>>;
  count?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  node?: Maybe<ScreenTemplateComputerNodeAggregationWhereInput>;
}

export interface ScreenTemplateComputerConnectFieldInput {
  connect?: Maybe<ComputerTemplateConnectInput>;
  where?: Maybe<ComputerTemplateConnectWhere>;
}

export interface ScreenTemplateComputerConnectionSort {
  node?: Maybe<ComputerTemplateSort>;
}

export interface ScreenTemplateComputerConnectionWhere {
  AND?: Maybe<Array<ScreenTemplateComputerConnectionWhere>>;
  OR?: Maybe<Array<ScreenTemplateComputerConnectionWhere>>;
  node?: Maybe<ComputerTemplateWhere>;
  node_NOT?: Maybe<ComputerTemplateWhere>;
}

export interface ScreenTemplateComputerCreateFieldInput {
  node: ComputerTemplateCreateInput;
}

export interface ScreenTemplateComputerDeleteFieldInput {
  delete?: Maybe<ComputerTemplateDeleteInput>;
  where?: Maybe<ScreenTemplateComputerConnectionWhere>;
}

export interface ScreenTemplateComputerDisconnectFieldInput {
  disconnect?: Maybe<ComputerTemplateDisconnectInput>;
  where?: Maybe<ScreenTemplateComputerConnectionWhere>;
}

export interface ScreenTemplateComputerFieldInput {
  connect?: Maybe<ScreenTemplateComputerConnectFieldInput>;
  create?: Maybe<ScreenTemplateComputerCreateFieldInput>;
}

export interface ScreenTemplateComputerNodeAggregationWhereInput {
  AND?: Maybe<Array<ScreenTemplateComputerNodeAggregationWhereInput>>;
  OR?: Maybe<Array<ScreenTemplateComputerNodeAggregationWhereInput>>;
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

export interface ScreenTemplateComputerUpdateConnectionInput {
  node?: Maybe<ComputerTemplateUpdateInput>;
}

export interface ScreenTemplateComputerUpdateFieldInput {
  connect?: Maybe<ScreenTemplateComputerConnectFieldInput>;
  create?: Maybe<ScreenTemplateComputerCreateFieldInput>;
  delete?: Maybe<ScreenTemplateComputerDeleteFieldInput>;
  disconnect?: Maybe<ScreenTemplateComputerDisconnectFieldInput>;
  update?: Maybe<ScreenTemplateComputerUpdateConnectionInput>;
  where?: Maybe<ScreenTemplateComputerConnectionWhere>;
}

export interface ScreenTemplateConnectInput {
  computer?: Maybe<ScreenTemplateComputerConnectFieldInput>;
}

export interface ScreenTemplateConnectWhere {
  node: ScreenTemplateWhere;
}

export interface ScreenTemplateCreateInput {
  computer?: Maybe<ScreenTemplateComputerFieldInput>;
  height?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  private?: Maybe<Scalars["Boolean"]>;
  rotation?: Maybe<Scalars["Int"]>;
  width?: Maybe<Scalars["Int"]>;
}

export interface ScreenTemplateDeleteInput {
  computer?: Maybe<ScreenTemplateComputerDeleteFieldInput>;
}

export interface ScreenTemplateDisconnectInput {
  computer?: Maybe<ScreenTemplateComputerDisconnectFieldInput>;
}

export interface ScreenTemplateOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more ScreenTemplateSort objects to sort ScreenTemplates by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<ScreenTemplateSort>>>;
}

export interface ScreenTemplateRelationInput {
  computer?: Maybe<ScreenTemplateComputerCreateFieldInput>;
}

/** Fields to sort ScreenTemplates by. The order in which sorts are applied is not guaranteed when specifying many fields in one ScreenTemplateSort object. */
export interface ScreenTemplateSort {
  height?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  private?: Maybe<SortDirection>;
  rotation?: Maybe<SortDirection>;
  width?: Maybe<SortDirection>;
}

export interface ScreenTemplateUpdateInput {
  computer?: Maybe<ScreenTemplateComputerUpdateFieldInput>;
  height?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  private?: Maybe<Scalars["Boolean"]>;
  rotation?: Maybe<Scalars["Int"]>;
  width?: Maybe<Scalars["Int"]>;
}

export interface ScreenTemplateWhere {
  AND?: Maybe<Array<ScreenTemplateWhere>>;
  OR?: Maybe<Array<ScreenTemplateWhere>>;
  computer?: Maybe<ComputerTemplateWhere>;
  computerAggregate?: Maybe<ScreenTemplateComputerAggregateInput>;
  computerConnection?: Maybe<ScreenTemplateComputerConnectionWhere>;
  computerConnection_NOT?: Maybe<ScreenTemplateComputerConnectionWhere>;
  computer_NOT?: Maybe<ComputerTemplateWhere>;
  height?: Maybe<Scalars["Int"]>;
  height_GT?: Maybe<Scalars["Int"]>;
  height_GTE?: Maybe<Scalars["Int"]>;
  height_IN?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  height_LT?: Maybe<Scalars["Int"]>;
  height_LTE?: Maybe<Scalars["Int"]>;
  height_NOT?: Maybe<Scalars["Int"]>;
  height_NOT_IN?: Maybe<Array<Maybe<Scalars["Int"]>>>;
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
  private?: Maybe<Scalars["Boolean"]>;
  private_NOT?: Maybe<Scalars["Boolean"]>;
  rotation?: Maybe<Scalars["Int"]>;
  rotation_GT?: Maybe<Scalars["Int"]>;
  rotation_GTE?: Maybe<Scalars["Int"]>;
  rotation_IN?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  rotation_LT?: Maybe<Scalars["Int"]>;
  rotation_LTE?: Maybe<Scalars["Int"]>;
  rotation_NOT?: Maybe<Scalars["Int"]>;
  rotation_NOT_IN?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  width?: Maybe<Scalars["Int"]>;
  width_GT?: Maybe<Scalars["Int"]>;
  width_GTE?: Maybe<Scalars["Int"]>;
  width_IN?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  width_LT?: Maybe<Scalars["Int"]>;
  width_LTE?: Maybe<Scalars["Int"]>;
  width_NOT?: Maybe<Scalars["Int"]>;
  width_NOT_IN?: Maybe<Array<Maybe<Scalars["Int"]>>>;
}

export interface ScreenUpdateInput {
  height?: Maybe<Scalars["Float"]>;
  orientation?: Maybe<Scalars["Float"]>;
  resHeight?: Maybe<Scalars["Float"]>;
  resWidth?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
}

export interface ScreenWhere {
  AND?: Maybe<Array<ScreenWhere>>;
  OR?: Maybe<Array<ScreenWhere>>;
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

export enum SortDirection {
  /** Sort by field values in ascending order. */
  ASC = "ASC",
  /** Sort by field values in descending order. */
  DESC = "DESC",
}

export interface StorageTemplateConnectWhere {
  node: StorageTemplateWhere;
}

export interface StorageTemplateCreateInput {
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface StorageTemplateOptions {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  /** Specify one or more StorageTemplateSort objects to sort StorageTemplates by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<StorageTemplateSort>>>;
}

/** Fields to sort StorageTemplates by. The order in which sorts are applied is not guaranteed when specifying many fields in one StorageTemplateSort object. */
export interface StorageTemplateSort {
  id?: Maybe<SortDirection>;
  max?: Maybe<SortDirection>;
  min?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  type?: Maybe<SortDirection>;
}

export interface StorageTemplateUpdateInput {
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
}

export interface StorageTemplateWhere {
  AND?: Maybe<Array<StorageTemplateWhere>>;
  OR?: Maybe<Array<StorageTemplateWhere>>;
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
  max?: Maybe<Scalars["Float"]>;
  max_GT?: Maybe<Scalars["Float"]>;
  max_GTE?: Maybe<Scalars["Float"]>;
  max_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  max_LT?: Maybe<Scalars["Float"]>;
  max_LTE?: Maybe<Scalars["Float"]>;
  max_NOT?: Maybe<Scalars["Float"]>;
  max_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  min?: Maybe<Scalars["Float"]>;
  min_GT?: Maybe<Scalars["Float"]>;
  min_GTE?: Maybe<Scalars["Float"]>;
  min_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  min_LT?: Maybe<Scalars["Float"]>;
  min_LTE?: Maybe<Scalars["Float"]>;
  min_NOT?: Maybe<Scalars["Float"]>;
  min_NOT_IN?: Maybe<Array<Maybe<Scalars["Float"]>>>;
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
  Computer: {
    __typename: { __type: "String!" },
    agentVersion: { __type: "String" },
    cpu: { __type: "Float" },
    hostname: { __type: "String" },
    id: { __type: "ID!" },
    memory: { __type: "Float" },
    name: { __type: "String" },
    os: { __type: "String" },
    template: {
      __type: "ComputerTemplate",
      __args: {
        options: "ComputerTemplateOptions",
        where: "ComputerTemplateWhere",
      },
    },
    templateAggregate: {
      __type: "ComputerComputerTemplateTemplateAggregationSelection",
      __args: { where: "ComputerTemplateWhere" },
    },
    templateConnection: {
      __type: "ComputerTemplateConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ComputerTemplateConnectionSort!]",
        where: "ComputerTemplateConnectionWhere",
      },
    },
  },
  ComputerAggregateSelection: {
    __typename: { __type: "String!" },
    agentVersion: { __type: "StringAggregateSelection!" },
    count: { __type: "Int!" },
    cpu: { __type: "FloatAggregateSelection!" },
    hostname: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    memory: { __type: "FloatAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    os: { __type: "StringAggregateSelection!" },
  },
  ComputerComputerTemplateTemplateAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ComputerComputerTemplateTemplateNodeAggregateSelection" },
  },
  ComputerComputerTemplateTemplateNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  ComputerConnectInput: {
    template: { __type: "ComputerTemplateConnectFieldInput" },
  },
  ComputerConnectWhere: { node: { __type: "ComputerWhere!" } },
  ComputerCreateInput: {
    agentVersion: { __type: "String" },
    cpu: { __type: "Float" },
    hostname: { __type: "String" },
    memory: { __type: "Float" },
    name: { __type: "String" },
    os: { __type: "String" },
    template: { __type: "ComputerTemplateFieldInput" },
  },
  ComputerDeleteInput: {
    template: { __type: "ComputerTemplateDeleteFieldInput" },
  },
  ComputerDisconnectInput: {
    template: { __type: "ComputerTemplateDisconnectFieldInput" },
  },
  ComputerOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[ComputerSort]" },
  },
  ComputerRelationInput: {
    template: { __type: "ComputerTemplateCreateFieldInput" },
  },
  ComputerSort: {
    agentVersion: { __type: "SortDirection" },
    cpu: { __type: "SortDirection" },
    hostname: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    memory: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    os: { __type: "SortDirection" },
  },
  ComputerTemplate: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    peripherals: {
      __type: "[PeripheralTemplate]",
      __args: {
        options: "PeripheralTemplateOptions",
        where: "PeripheralTemplateWhere",
      },
    },
    peripheralsAggregate: {
      __type:
        "ComputerTemplatePeripheralTemplatePeripheralsAggregationSelection",
      __args: { where: "PeripheralTemplateWhere" },
    },
    peripheralsConnection: {
      __type: "ComputerTemplatePeripheralsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ComputerTemplatePeripheralsConnectionSort!]",
        where: "ComputerTemplatePeripheralsConnectionWhere",
      },
    },
    plugins: {
      __type: "[MachinePlugin]",
      __args: { options: "MachinePluginOptions", where: "MachinePluginWhere" },
    },
    pluginsAggregate: {
      __type: "ComputerTemplateMachinePluginPluginsAggregationSelection",
      __args: { where: "MachinePluginWhere" },
    },
    pluginsConnection: {
      __type: "ComputerTemplatePluginsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ComputerTemplatePluginsConnectionSort!]",
        where: "ComputerTemplatePluginsConnectionWhere",
      },
    },
    screens: {
      __type: "[ScreenTemplate]",
      __args: {
        options: "ScreenTemplateOptions",
        where: "ScreenTemplateWhere",
      },
    },
    screensAggregate: {
      __type: "ComputerTemplateScreenTemplateScreensAggregationSelection",
      __args: { where: "ScreenTemplateWhere" },
    },
    screensConnection: {
      __type: "ComputerTemplateScreensConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ComputerTemplateScreensConnectionSort!]",
        where: "ComputerTemplateScreensConnectionWhere",
      },
    },
    storage: {
      __type: "[StorageTemplate]",
      __args: {
        options: "StorageTemplateOptions",
        where: "StorageTemplateWhere",
      },
    },
    storageAggregate: {
      __type: "ComputerTemplateStorageTemplateStorageAggregationSelection",
      __args: { where: "StorageTemplateWhere" },
    },
    storageConnection: {
      __type: "ComputerTemplateStorageConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ComputerTemplateStorageConnectionSort!]",
        where: "ComputerTemplateStorageConnectionWhere",
      },
    },
  },
  ComputerTemplateAggregateInput: {
    AND: { __type: "[ComputerTemplateAggregateInput!]" },
    OR: { __type: "[ComputerTemplateAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ComputerTemplateNodeAggregationWhereInput" },
  },
  ComputerTemplateAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  ComputerTemplateConnectFieldInput: {
    connect: { __type: "ComputerTemplateConnectInput" },
    where: { __type: "ComputerTemplateConnectWhere" },
  },
  ComputerTemplateConnectInput: {
    peripherals: { __type: "[ComputerTemplatePeripheralsConnectFieldInput!]" },
    plugins: { __type: "[ComputerTemplatePluginsConnectFieldInput!]" },
    screens: { __type: "[ComputerTemplateScreensConnectFieldInput!]" },
    storage: { __type: "[ComputerTemplateStorageConnectFieldInput!]" },
  },
  ComputerTemplateConnectWhere: { node: { __type: "ComputerTemplateWhere!" } },
  ComputerTemplateConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ComputerTemplateRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ComputerTemplateConnectionSort: { node: { __type: "ComputerTemplateSort" } },
  ComputerTemplateConnectionWhere: {
    AND: { __type: "[ComputerTemplateConnectionWhere!]" },
    OR: { __type: "[ComputerTemplateConnectionWhere!]" },
    node: { __type: "ComputerTemplateWhere" },
    node_NOT: { __type: "ComputerTemplateWhere" },
  },
  ComputerTemplateCreateFieldInput: {
    node: { __type: "ComputerTemplateCreateInput!" },
  },
  ComputerTemplateCreateInput: {
    name: { __type: "String" },
    peripherals: { __type: "ComputerTemplatePeripheralsFieldInput" },
    plugins: { __type: "ComputerTemplatePluginsFieldInput" },
    screens: { __type: "ComputerTemplateScreensFieldInput" },
    storage: { __type: "ComputerTemplateStorageFieldInput" },
  },
  ComputerTemplateDeleteFieldInput: {
    delete: { __type: "ComputerTemplateDeleteInput" },
    where: { __type: "ComputerTemplateConnectionWhere" },
  },
  ComputerTemplateDeleteInput: {
    peripherals: { __type: "[ComputerTemplatePeripheralsDeleteFieldInput!]" },
    plugins: { __type: "[ComputerTemplatePluginsDeleteFieldInput!]" },
    screens: { __type: "[ComputerTemplateScreensDeleteFieldInput!]" },
    storage: { __type: "[ComputerTemplateStorageDeleteFieldInput!]" },
  },
  ComputerTemplateDisconnectFieldInput: {
    disconnect: { __type: "ComputerTemplateDisconnectInput" },
    where: { __type: "ComputerTemplateConnectionWhere" },
  },
  ComputerTemplateDisconnectInput: {
    peripherals: {
      __type: "[ComputerTemplatePeripheralsDisconnectFieldInput!]",
    },
    plugins: { __type: "[ComputerTemplatePluginsDisconnectFieldInput!]" },
    screens: { __type: "[ComputerTemplateScreensDisconnectFieldInput!]" },
    storage: { __type: "[ComputerTemplateStorageDisconnectFieldInput!]" },
  },
  ComputerTemplateFieldInput: {
    connect: { __type: "ComputerTemplateConnectFieldInput" },
    create: { __type: "ComputerTemplateCreateFieldInput" },
  },
  ComputerTemplateMachinePluginPluginsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "ComputerTemplateMachinePluginPluginsNodeAggregateSelection",
    },
  },
  ComputerTemplateMachinePluginPluginsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  ComputerTemplateNodeAggregationWhereInput: {
    AND: { __type: "[ComputerTemplateNodeAggregationWhereInput!]" },
    OR: { __type: "[ComputerTemplateNodeAggregationWhereInput!]" },
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
  ComputerTemplateOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[ComputerTemplateSort]" },
  },
  ComputerTemplatePeripheralTemplatePeripheralsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "ComputerTemplatePeripheralTemplatePeripheralsNodeAggregateSelection",
    },
  },
  ComputerTemplatePeripheralTemplatePeripheralsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  ComputerTemplatePeripheralsAggregateInput: {
    AND: { __type: "[ComputerTemplatePeripheralsAggregateInput!]" },
    OR: { __type: "[ComputerTemplatePeripheralsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ComputerTemplatePeripheralsNodeAggregationWhereInput" },
  },
  ComputerTemplatePeripheralsConnectFieldInput: {
    connect: { __type: "[PeripheralTemplateConnectInput!]" },
    where: { __type: "PeripheralTemplateConnectWhere" },
  },
  ComputerTemplatePeripheralsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ComputerTemplatePeripheralsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ComputerTemplatePeripheralsConnectionSort: {
    node: { __type: "PeripheralTemplateSort" },
  },
  ComputerTemplatePeripheralsConnectionWhere: {
    AND: { __type: "[ComputerTemplatePeripheralsConnectionWhere!]" },
    OR: { __type: "[ComputerTemplatePeripheralsConnectionWhere!]" },
    node: { __type: "PeripheralTemplateWhere" },
    node_NOT: { __type: "PeripheralTemplateWhere" },
  },
  ComputerTemplatePeripheralsCreateFieldInput: {
    node: { __type: "PeripheralTemplateCreateInput!" },
  },
  ComputerTemplatePeripheralsDeleteFieldInput: {
    delete: { __type: "PeripheralTemplateDeleteInput" },
    where: { __type: "ComputerTemplatePeripheralsConnectionWhere" },
  },
  ComputerTemplatePeripheralsDisconnectFieldInput: {
    disconnect: { __type: "PeripheralTemplateDisconnectInput" },
    where: { __type: "ComputerTemplatePeripheralsConnectionWhere" },
  },
  ComputerTemplatePeripheralsFieldInput: {
    connect: { __type: "[ComputerTemplatePeripheralsConnectFieldInput!]" },
    create: { __type: "[ComputerTemplatePeripheralsCreateFieldInput!]" },
  },
  ComputerTemplatePeripheralsNodeAggregationWhereInput: {
    AND: { __type: "[ComputerTemplatePeripheralsNodeAggregationWhereInput!]" },
    OR: { __type: "[ComputerTemplatePeripheralsNodeAggregationWhereInput!]" },
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
  ComputerTemplatePeripheralsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "PeripheralTemplate!" },
  },
  ComputerTemplatePeripheralsUpdateConnectionInput: {
    node: { __type: "PeripheralTemplateUpdateInput" },
  },
  ComputerTemplatePeripheralsUpdateFieldInput: {
    connect: { __type: "[ComputerTemplatePeripheralsConnectFieldInput!]" },
    create: { __type: "[ComputerTemplatePeripheralsCreateFieldInput!]" },
    delete: { __type: "[ComputerTemplatePeripheralsDeleteFieldInput!]" },
    disconnect: {
      __type: "[ComputerTemplatePeripheralsDisconnectFieldInput!]",
    },
    update: { __type: "ComputerTemplatePeripheralsUpdateConnectionInput" },
    where: { __type: "ComputerTemplatePeripheralsConnectionWhere" },
  },
  ComputerTemplatePluginsAggregateInput: {
    AND: { __type: "[ComputerTemplatePluginsAggregateInput!]" },
    OR: { __type: "[ComputerTemplatePluginsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ComputerTemplatePluginsNodeAggregationWhereInput" },
  },
  ComputerTemplatePluginsConnectFieldInput: {
    where: { __type: "MachinePluginConnectWhere" },
  },
  ComputerTemplatePluginsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ComputerTemplatePluginsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ComputerTemplatePluginsConnectionSort: {
    node: { __type: "MachinePluginSort" },
  },
  ComputerTemplatePluginsConnectionWhere: {
    AND: { __type: "[ComputerTemplatePluginsConnectionWhere!]" },
    OR: { __type: "[ComputerTemplatePluginsConnectionWhere!]" },
    node: { __type: "MachinePluginWhere" },
    node_NOT: { __type: "MachinePluginWhere" },
  },
  ComputerTemplatePluginsCreateFieldInput: {
    node: { __type: "MachinePluginCreateInput!" },
  },
  ComputerTemplatePluginsDeleteFieldInput: {
    where: { __type: "ComputerTemplatePluginsConnectionWhere" },
  },
  ComputerTemplatePluginsDisconnectFieldInput: {
    where: { __type: "ComputerTemplatePluginsConnectionWhere" },
  },
  ComputerTemplatePluginsFieldInput: {
    connect: { __type: "[ComputerTemplatePluginsConnectFieldInput!]" },
    create: { __type: "[ComputerTemplatePluginsCreateFieldInput!]" },
  },
  ComputerTemplatePluginsNodeAggregationWhereInput: {
    AND: { __type: "[ComputerTemplatePluginsNodeAggregationWhereInput!]" },
    OR: { __type: "[ComputerTemplatePluginsNodeAggregationWhereInput!]" },
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
  ComputerTemplatePluginsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "MachinePlugin!" },
  },
  ComputerTemplatePluginsUpdateConnectionInput: {
    node: { __type: "MachinePluginUpdateInput" },
  },
  ComputerTemplatePluginsUpdateFieldInput: {
    connect: { __type: "[ComputerTemplatePluginsConnectFieldInput!]" },
    create: { __type: "[ComputerTemplatePluginsCreateFieldInput!]" },
    delete: { __type: "[ComputerTemplatePluginsDeleteFieldInput!]" },
    disconnect: { __type: "[ComputerTemplatePluginsDisconnectFieldInput!]" },
    update: { __type: "ComputerTemplatePluginsUpdateConnectionInput" },
    where: { __type: "ComputerTemplatePluginsConnectionWhere" },
  },
  ComputerTemplateRelationInput: {
    peripherals: { __type: "[ComputerTemplatePeripheralsCreateFieldInput!]" },
    plugins: { __type: "[ComputerTemplatePluginsCreateFieldInput!]" },
    screens: { __type: "[ComputerTemplateScreensCreateFieldInput!]" },
    storage: { __type: "[ComputerTemplateStorageCreateFieldInput!]" },
  },
  ComputerTemplateRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ComputerTemplate!" },
  },
  ComputerTemplateScreenTemplateScreensAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "ComputerTemplateScreenTemplateScreensNodeAggregateSelection",
    },
  },
  ComputerTemplateScreenTemplateScreensNodeAggregateSelection: {
    __typename: { __type: "String!" },
    height: { __type: "IntAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    rotation: { __type: "IntAggregateSelection!" },
    width: { __type: "IntAggregateSelection!" },
  },
  ComputerTemplateScreensAggregateInput: {
    AND: { __type: "[ComputerTemplateScreensAggregateInput!]" },
    OR: { __type: "[ComputerTemplateScreensAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ComputerTemplateScreensNodeAggregationWhereInput" },
  },
  ComputerTemplateScreensConnectFieldInput: {
    connect: { __type: "[ScreenTemplateConnectInput!]" },
    where: { __type: "ScreenTemplateConnectWhere" },
  },
  ComputerTemplateScreensConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ComputerTemplateScreensRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ComputerTemplateScreensConnectionSort: {
    node: { __type: "ScreenTemplateSort" },
  },
  ComputerTemplateScreensConnectionWhere: {
    AND: { __type: "[ComputerTemplateScreensConnectionWhere!]" },
    OR: { __type: "[ComputerTemplateScreensConnectionWhere!]" },
    node: { __type: "ScreenTemplateWhere" },
    node_NOT: { __type: "ScreenTemplateWhere" },
  },
  ComputerTemplateScreensCreateFieldInput: {
    node: { __type: "ScreenTemplateCreateInput!" },
  },
  ComputerTemplateScreensDeleteFieldInput: {
    delete: { __type: "ScreenTemplateDeleteInput" },
    where: { __type: "ComputerTemplateScreensConnectionWhere" },
  },
  ComputerTemplateScreensDisconnectFieldInput: {
    disconnect: { __type: "ScreenTemplateDisconnectInput" },
    where: { __type: "ComputerTemplateScreensConnectionWhere" },
  },
  ComputerTemplateScreensFieldInput: {
    connect: { __type: "[ComputerTemplateScreensConnectFieldInput!]" },
    create: { __type: "[ComputerTemplateScreensCreateFieldInput!]" },
  },
  ComputerTemplateScreensNodeAggregationWhereInput: {
    AND: { __type: "[ComputerTemplateScreensNodeAggregationWhereInput!]" },
    OR: { __type: "[ComputerTemplateScreensNodeAggregationWhereInput!]" },
    height_AVERAGE_EQUAL: { __type: "Float" },
    height_AVERAGE_GT: { __type: "Float" },
    height_AVERAGE_GTE: { __type: "Float" },
    height_AVERAGE_LT: { __type: "Float" },
    height_AVERAGE_LTE: { __type: "Float" },
    height_EQUAL: { __type: "Int" },
    height_GT: { __type: "Int" },
    height_GTE: { __type: "Int" },
    height_LT: { __type: "Int" },
    height_LTE: { __type: "Int" },
    height_MAX_EQUAL: { __type: "Int" },
    height_MAX_GT: { __type: "Int" },
    height_MAX_GTE: { __type: "Int" },
    height_MAX_LT: { __type: "Int" },
    height_MAX_LTE: { __type: "Int" },
    height_MIN_EQUAL: { __type: "Int" },
    height_MIN_GT: { __type: "Int" },
    height_MIN_GTE: { __type: "Int" },
    height_MIN_LT: { __type: "Int" },
    height_MIN_LTE: { __type: "Int" },
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
    rotation_AVERAGE_EQUAL: { __type: "Float" },
    rotation_AVERAGE_GT: { __type: "Float" },
    rotation_AVERAGE_GTE: { __type: "Float" },
    rotation_AVERAGE_LT: { __type: "Float" },
    rotation_AVERAGE_LTE: { __type: "Float" },
    rotation_EQUAL: { __type: "Int" },
    rotation_GT: { __type: "Int" },
    rotation_GTE: { __type: "Int" },
    rotation_LT: { __type: "Int" },
    rotation_LTE: { __type: "Int" },
    rotation_MAX_EQUAL: { __type: "Int" },
    rotation_MAX_GT: { __type: "Int" },
    rotation_MAX_GTE: { __type: "Int" },
    rotation_MAX_LT: { __type: "Int" },
    rotation_MAX_LTE: { __type: "Int" },
    rotation_MIN_EQUAL: { __type: "Int" },
    rotation_MIN_GT: { __type: "Int" },
    rotation_MIN_GTE: { __type: "Int" },
    rotation_MIN_LT: { __type: "Int" },
    rotation_MIN_LTE: { __type: "Int" },
    width_AVERAGE_EQUAL: { __type: "Float" },
    width_AVERAGE_GT: { __type: "Float" },
    width_AVERAGE_GTE: { __type: "Float" },
    width_AVERAGE_LT: { __type: "Float" },
    width_AVERAGE_LTE: { __type: "Float" },
    width_EQUAL: { __type: "Int" },
    width_GT: { __type: "Int" },
    width_GTE: { __type: "Int" },
    width_LT: { __type: "Int" },
    width_LTE: { __type: "Int" },
    width_MAX_EQUAL: { __type: "Int" },
    width_MAX_GT: { __type: "Int" },
    width_MAX_GTE: { __type: "Int" },
    width_MAX_LT: { __type: "Int" },
    width_MAX_LTE: { __type: "Int" },
    width_MIN_EQUAL: { __type: "Int" },
    width_MIN_GT: { __type: "Int" },
    width_MIN_GTE: { __type: "Int" },
    width_MIN_LT: { __type: "Int" },
    width_MIN_LTE: { __type: "Int" },
  },
  ComputerTemplateScreensRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ScreenTemplate!" },
  },
  ComputerTemplateScreensUpdateConnectionInput: {
    node: { __type: "ScreenTemplateUpdateInput" },
  },
  ComputerTemplateScreensUpdateFieldInput: {
    connect: { __type: "[ComputerTemplateScreensConnectFieldInput!]" },
    create: { __type: "[ComputerTemplateScreensCreateFieldInput!]" },
    delete: { __type: "[ComputerTemplateScreensDeleteFieldInput!]" },
    disconnect: { __type: "[ComputerTemplateScreensDisconnectFieldInput!]" },
    update: { __type: "ComputerTemplateScreensUpdateConnectionInput" },
    where: { __type: "ComputerTemplateScreensConnectionWhere" },
  },
  ComputerTemplateSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  ComputerTemplateStorageAggregateInput: {
    AND: { __type: "[ComputerTemplateStorageAggregateInput!]" },
    OR: { __type: "[ComputerTemplateStorageAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ComputerTemplateStorageNodeAggregationWhereInput" },
  },
  ComputerTemplateStorageConnectFieldInput: {
    where: { __type: "StorageTemplateConnectWhere" },
  },
  ComputerTemplateStorageConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ComputerTemplateStorageRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ComputerTemplateStorageConnectionSort: {
    node: { __type: "StorageTemplateSort" },
  },
  ComputerTemplateStorageConnectionWhere: {
    AND: { __type: "[ComputerTemplateStorageConnectionWhere!]" },
    OR: { __type: "[ComputerTemplateStorageConnectionWhere!]" },
    node: { __type: "StorageTemplateWhere" },
    node_NOT: { __type: "StorageTemplateWhere" },
  },
  ComputerTemplateStorageCreateFieldInput: {
    node: { __type: "StorageTemplateCreateInput!" },
  },
  ComputerTemplateStorageDeleteFieldInput: {
    where: { __type: "ComputerTemplateStorageConnectionWhere" },
  },
  ComputerTemplateStorageDisconnectFieldInput: {
    where: { __type: "ComputerTemplateStorageConnectionWhere" },
  },
  ComputerTemplateStorageFieldInput: {
    connect: { __type: "[ComputerTemplateStorageConnectFieldInput!]" },
    create: { __type: "[ComputerTemplateStorageCreateFieldInput!]" },
  },
  ComputerTemplateStorageNodeAggregationWhereInput: {
    AND: { __type: "[ComputerTemplateStorageNodeAggregationWhereInput!]" },
    OR: { __type: "[ComputerTemplateStorageNodeAggregationWhereInput!]" },
    id_EQUAL: { __type: "ID" },
    max_AVERAGE_EQUAL: { __type: "Float" },
    max_AVERAGE_GT: { __type: "Float" },
    max_AVERAGE_GTE: { __type: "Float" },
    max_AVERAGE_LT: { __type: "Float" },
    max_AVERAGE_LTE: { __type: "Float" },
    max_EQUAL: { __type: "Float" },
    max_GT: { __type: "Float" },
    max_GTE: { __type: "Float" },
    max_LT: { __type: "Float" },
    max_LTE: { __type: "Float" },
    max_MAX_EQUAL: { __type: "Float" },
    max_MAX_GT: { __type: "Float" },
    max_MAX_GTE: { __type: "Float" },
    max_MAX_LT: { __type: "Float" },
    max_MAX_LTE: { __type: "Float" },
    max_MIN_EQUAL: { __type: "Float" },
    max_MIN_GT: { __type: "Float" },
    max_MIN_GTE: { __type: "Float" },
    max_MIN_LT: { __type: "Float" },
    max_MIN_LTE: { __type: "Float" },
    min_AVERAGE_EQUAL: { __type: "Float" },
    min_AVERAGE_GT: { __type: "Float" },
    min_AVERAGE_GTE: { __type: "Float" },
    min_AVERAGE_LT: { __type: "Float" },
    min_AVERAGE_LTE: { __type: "Float" },
    min_EQUAL: { __type: "Float" },
    min_GT: { __type: "Float" },
    min_GTE: { __type: "Float" },
    min_LT: { __type: "Float" },
    min_LTE: { __type: "Float" },
    min_MAX_EQUAL: { __type: "Float" },
    min_MAX_GT: { __type: "Float" },
    min_MAX_GTE: { __type: "Float" },
    min_MAX_LT: { __type: "Float" },
    min_MAX_LTE: { __type: "Float" },
    min_MIN_EQUAL: { __type: "Float" },
    min_MIN_GT: { __type: "Float" },
    min_MIN_GTE: { __type: "Float" },
    min_MIN_LT: { __type: "Float" },
    min_MIN_LTE: { __type: "Float" },
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
  ComputerTemplateStorageRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "StorageTemplate!" },
  },
  ComputerTemplateStorageTemplateStorageAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "ComputerTemplateStorageTemplateStorageNodeAggregateSelection",
    },
  },
  ComputerTemplateStorageTemplateStorageNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    max: { __type: "FloatAggregateSelection!" },
    min: { __type: "FloatAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  ComputerTemplateStorageUpdateConnectionInput: {
    node: { __type: "StorageTemplateUpdateInput" },
  },
  ComputerTemplateStorageUpdateFieldInput: {
    connect: { __type: "[ComputerTemplateStorageConnectFieldInput!]" },
    create: { __type: "[ComputerTemplateStorageCreateFieldInput!]" },
    delete: { __type: "[ComputerTemplateStorageDeleteFieldInput!]" },
    disconnect: { __type: "[ComputerTemplateStorageDisconnectFieldInput!]" },
    update: { __type: "ComputerTemplateStorageUpdateConnectionInput" },
    where: { __type: "ComputerTemplateStorageConnectionWhere" },
  },
  ComputerTemplateUpdateConnectionInput: {
    node: { __type: "ComputerTemplateUpdateInput" },
  },
  ComputerTemplateUpdateFieldInput: {
    connect: { __type: "ComputerTemplateConnectFieldInput" },
    create: { __type: "ComputerTemplateCreateFieldInput" },
    delete: { __type: "ComputerTemplateDeleteFieldInput" },
    disconnect: { __type: "ComputerTemplateDisconnectFieldInput" },
    update: { __type: "ComputerTemplateUpdateConnectionInput" },
    where: { __type: "ComputerTemplateConnectionWhere" },
  },
  ComputerTemplateUpdateInput: {
    name: { __type: "String" },
    peripherals: { __type: "[ComputerTemplatePeripheralsUpdateFieldInput!]" },
    plugins: { __type: "[ComputerTemplatePluginsUpdateFieldInput!]" },
    screens: { __type: "[ComputerTemplateScreensUpdateFieldInput!]" },
    storage: { __type: "[ComputerTemplateStorageUpdateFieldInput!]" },
  },
  ComputerTemplateWhere: {
    AND: { __type: "[ComputerTemplateWhere!]" },
    OR: { __type: "[ComputerTemplateWhere!]" },
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
    peripherals: { __type: "PeripheralTemplateWhere" },
    peripheralsAggregate: {
      __type: "ComputerTemplatePeripheralsAggregateInput",
    },
    peripheralsConnection: {
      __type: "ComputerTemplatePeripheralsConnectionWhere",
    },
    peripheralsConnection_NOT: {
      __type: "ComputerTemplatePeripheralsConnectionWhere",
    },
    peripherals_NOT: { __type: "PeripheralTemplateWhere" },
    plugins: { __type: "MachinePluginWhere" },
    pluginsAggregate: { __type: "ComputerTemplatePluginsAggregateInput" },
    pluginsConnection: { __type: "ComputerTemplatePluginsConnectionWhere" },
    pluginsConnection_NOT: { __type: "ComputerTemplatePluginsConnectionWhere" },
    plugins_NOT: { __type: "MachinePluginWhere" },
    screens: { __type: "ScreenTemplateWhere" },
    screensAggregate: { __type: "ComputerTemplateScreensAggregateInput" },
    screensConnection: { __type: "ComputerTemplateScreensConnectionWhere" },
    screensConnection_NOT: { __type: "ComputerTemplateScreensConnectionWhere" },
    screens_NOT: { __type: "ScreenTemplateWhere" },
    storage: { __type: "StorageTemplateWhere" },
    storageAggregate: { __type: "ComputerTemplateStorageAggregateInput" },
    storageConnection: { __type: "ComputerTemplateStorageConnectionWhere" },
    storageConnection_NOT: { __type: "ComputerTemplateStorageConnectionWhere" },
    storage_NOT: { __type: "StorageTemplateWhere" },
  },
  ComputerUpdateInput: {
    agentVersion: { __type: "String" },
    cpu: { __type: "Float" },
    hostname: { __type: "String" },
    memory: { __type: "Float" },
    name: { __type: "String" },
    os: { __type: "String" },
    template: { __type: "ComputerTemplateUpdateFieldInput" },
  },
  ComputerWhere: {
    AND: { __type: "[ComputerWhere!]" },
    OR: { __type: "[ComputerWhere!]" },
    agentVersion: { __type: "String" },
    agentVersion_CONTAINS: { __type: "String" },
    agentVersion_ENDS_WITH: { __type: "String" },
    agentVersion_IN: { __type: "[String]" },
    agentVersion_NOT: { __type: "String" },
    agentVersion_NOT_CONTAINS: { __type: "String" },
    agentVersion_NOT_ENDS_WITH: { __type: "String" },
    agentVersion_NOT_IN: { __type: "[String]" },
    agentVersion_NOT_STARTS_WITH: { __type: "String" },
    agentVersion_STARTS_WITH: { __type: "String" },
    cpu: { __type: "Float" },
    cpu_GT: { __type: "Float" },
    cpu_GTE: { __type: "Float" },
    cpu_IN: { __type: "[Float]" },
    cpu_LT: { __type: "Float" },
    cpu_LTE: { __type: "Float" },
    cpu_NOT: { __type: "Float" },
    cpu_NOT_IN: { __type: "[Float]" },
    hostname: { __type: "String" },
    hostname_CONTAINS: { __type: "String" },
    hostname_ENDS_WITH: { __type: "String" },
    hostname_IN: { __type: "[String]" },
    hostname_NOT: { __type: "String" },
    hostname_NOT_CONTAINS: { __type: "String" },
    hostname_NOT_ENDS_WITH: { __type: "String" },
    hostname_NOT_IN: { __type: "[String]" },
    hostname_NOT_STARTS_WITH: { __type: "String" },
    hostname_STARTS_WITH: { __type: "String" },
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
    memory: { __type: "Float" },
    memory_GT: { __type: "Float" },
    memory_GTE: { __type: "Float" },
    memory_IN: { __type: "[Float]" },
    memory_LT: { __type: "Float" },
    memory_LTE: { __type: "Float" },
    memory_NOT: { __type: "Float" },
    memory_NOT_IN: { __type: "[Float]" },
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
    template: { __type: "ComputerTemplateWhere" },
    templateAggregate: { __type: "ComputerTemplateAggregateInput" },
    templateConnection: { __type: "ComputerTemplateConnectionWhere" },
    templateConnection_NOT: { __type: "ComputerTemplateConnectionWhere" },
    template_NOT: { __type: "ComputerTemplateWhere" },
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
  CreateComputerTemplatesMutationResponse: {
    __typename: { __type: "String!" },
    computerTemplates: { __type: "[ComputerTemplate!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateComputersMutationResponse: {
    __typename: { __type: "String!" },
    computers: { __type: "[Computer!]!" },
    info: { __type: "CreateInfo!" },
  },
  CreateInfo: {
    __typename: { __type: "String!" },
    bookmark: { __type: "String" },
    nodesCreated: { __type: "Int!" },
    relationshipsCreated: { __type: "Int!" },
  },
  CreateLocationGroupsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    locationGroups: { __type: "[LocationGroup!]!" },
  },
  CreateLocationsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    locations: { __type: "[Location!]!" },
  },
  CreateMachinePluginsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    machinePlugins: { __type: "[MachinePlugin!]!" },
  },
  CreateMachineTemplatesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    machineTemplates: { __type: "[MachineTemplate!]!" },
  },
  CreateMachinesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    machines: { __type: "[Machine!]!" },
  },
  CreatePeripheralTemplatesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    peripheralTemplates: { __type: "[PeripheralTemplate!]!" },
  },
  CreateProvisionCodesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    provisionCodes: { __type: "[ProvisionCode!]!" },
  },
  CreateScheduleTiersMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    scheduleTiers: { __type: "[ScheduleTier!]!" },
  },
  CreateSchedulesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    schedules: { __type: "[Schedule!]!" },
  },
  CreateScreenTemplatesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    screenTemplates: { __type: "[ScreenTemplate!]!" },
  },
  CreateScreensMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    screens: { __type: "[Screen!]!" },
  },
  CreateStorageTemplatesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "CreateInfo!" },
    storageTemplates: { __type: "[StorageTemplate!]!" },
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
  IntAggregateSelection: {
    __typename: { __type: "String!" },
    average: { __type: "Float!" },
    max: { __type: "Int!" },
    min: { __type: "Int!" },
  },
  Location: {
    __typename: { __type: "String!" },
    elevation: { __type: "Float" },
    groups: {
      __type: "[LocationGroup]",
      __args: { options: "LocationGroupOptions", where: "LocationGroupWhere" },
    },
    groupsAggregate: {
      __type: "LocationLocationGroupGroupsAggregationSelection",
      __args: { where: "LocationGroupWhere" },
    },
    groupsConnection: {
      __type: "LocationGroupsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[LocationGroupsConnectionSort!]",
        where: "LocationGroupsConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    lat: { __type: "Float" },
    lng: { __type: "Float" },
    machines: {
      __type: "[Machine]",
      __args: { options: "MachineOptions", where: "MachineWhere" },
    },
    machinesAggregate: {
      __type: "LocationMachineMachinesAggregationSelection",
      __args: { where: "MachineWhere" },
    },
    machinesConnection: {
      __type: "LocationMachinesConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[LocationMachinesConnectionSort!]",
        where: "LocationMachinesConnectionWhere",
      },
    },
    name: { __type: "String" },
  },
  LocationAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    elevation: { __type: "FloatAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    lat: { __type: "FloatAggregateSelection!" },
    lng: { __type: "FloatAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  LocationConnectInput: {
    groups: { __type: "[LocationGroupsConnectFieldInput!]" },
    machines: { __type: "[LocationMachinesConnectFieldInput!]" },
  },
  LocationConnectWhere: { node: { __type: "LocationWhere!" } },
  LocationCreateInput: {
    elevation: { __type: "Float" },
    groups: { __type: "LocationGroupsFieldInput" },
    lat: { __type: "Float" },
    lng: { __type: "Float" },
    machines: { __type: "LocationMachinesFieldInput" },
    name: { __type: "String" },
  },
  LocationDeleteInput: {
    groups: { __type: "[LocationGroupsDeleteFieldInput!]" },
    machines: { __type: "[LocationMachinesDeleteFieldInput!]" },
  },
  LocationDisconnectInput: {
    groups: { __type: "[LocationGroupsDisconnectFieldInput!]" },
    machines: { __type: "[LocationMachinesDisconnectFieldInput!]" },
  },
  LocationGroup: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    locations: {
      __type: "[Location]",
      __args: { options: "LocationOptions", where: "LocationWhere" },
    },
    locationsAggregate: {
      __type: "LocationGroupLocationLocationsAggregationSelection",
      __args: { where: "LocationWhere" },
    },
    locationsConnection: {
      __type: "LocationGroupLocationsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[LocationGroupLocationsConnectionSort!]",
        where: "LocationGroupLocationsConnectionWhere",
      },
    },
    name: { __type: "String" },
  },
  LocationGroupAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  LocationGroupConnectInput: {
    locations: { __type: "[LocationGroupLocationsConnectFieldInput!]" },
  },
  LocationGroupConnectWhere: { node: { __type: "LocationGroupWhere!" } },
  LocationGroupCreateInput: {
    locations: { __type: "LocationGroupLocationsFieldInput" },
    name: { __type: "String" },
  },
  LocationGroupDeleteInput: {
    locations: { __type: "[LocationGroupLocationsDeleteFieldInput!]" },
  },
  LocationGroupDisconnectInput: {
    locations: { __type: "[LocationGroupLocationsDisconnectFieldInput!]" },
  },
  LocationGroupLocationLocationsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "LocationGroupLocationLocationsNodeAggregateSelection" },
  },
  LocationGroupLocationLocationsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    elevation: { __type: "FloatAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    lat: { __type: "FloatAggregateSelection!" },
    lng: { __type: "FloatAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  LocationGroupLocationsAggregateInput: {
    AND: { __type: "[LocationGroupLocationsAggregateInput!]" },
    OR: { __type: "[LocationGroupLocationsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "LocationGroupLocationsNodeAggregationWhereInput" },
  },
  LocationGroupLocationsConnectFieldInput: {
    connect: { __type: "[LocationConnectInput!]" },
    where: { __type: "LocationConnectWhere" },
  },
  LocationGroupLocationsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[LocationGroupLocationsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  LocationGroupLocationsConnectionSort: { node: { __type: "LocationSort" } },
  LocationGroupLocationsConnectionWhere: {
    AND: { __type: "[LocationGroupLocationsConnectionWhere!]" },
    OR: { __type: "[LocationGroupLocationsConnectionWhere!]" },
    node: { __type: "LocationWhere" },
    node_NOT: { __type: "LocationWhere" },
  },
  LocationGroupLocationsCreateFieldInput: {
    node: { __type: "LocationCreateInput!" },
  },
  LocationGroupLocationsDeleteFieldInput: {
    delete: { __type: "LocationDeleteInput" },
    where: { __type: "LocationGroupLocationsConnectionWhere" },
  },
  LocationGroupLocationsDisconnectFieldInput: {
    disconnect: { __type: "LocationDisconnectInput" },
    where: { __type: "LocationGroupLocationsConnectionWhere" },
  },
  LocationGroupLocationsFieldInput: {
    connect: { __type: "[LocationGroupLocationsConnectFieldInput!]" },
    create: { __type: "[LocationGroupLocationsCreateFieldInput!]" },
  },
  LocationGroupLocationsNodeAggregationWhereInput: {
    AND: { __type: "[LocationGroupLocationsNodeAggregationWhereInput!]" },
    OR: { __type: "[LocationGroupLocationsNodeAggregationWhereInput!]" },
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
  LocationGroupLocationsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Location!" },
  },
  LocationGroupLocationsUpdateConnectionInput: {
    node: { __type: "LocationUpdateInput" },
  },
  LocationGroupLocationsUpdateFieldInput: {
    connect: { __type: "[LocationGroupLocationsConnectFieldInput!]" },
    create: { __type: "[LocationGroupLocationsCreateFieldInput!]" },
    delete: { __type: "[LocationGroupLocationsDeleteFieldInput!]" },
    disconnect: { __type: "[LocationGroupLocationsDisconnectFieldInput!]" },
    update: { __type: "LocationGroupLocationsUpdateConnectionInput" },
    where: { __type: "LocationGroupLocationsConnectionWhere" },
  },
  LocationGroupOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[LocationGroupSort]" },
  },
  LocationGroupRelationInput: {
    locations: { __type: "[LocationGroupLocationsCreateFieldInput!]" },
  },
  LocationGroupSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  LocationGroupUpdateInput: {
    locations: { __type: "[LocationGroupLocationsUpdateFieldInput!]" },
    name: { __type: "String" },
  },
  LocationGroupWhere: {
    AND: { __type: "[LocationGroupWhere!]" },
    OR: { __type: "[LocationGroupWhere!]" },
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
    locations: { __type: "LocationWhere" },
    locationsAggregate: { __type: "LocationGroupLocationsAggregateInput" },
    locationsConnection: { __type: "LocationGroupLocationsConnectionWhere" },
    locationsConnection_NOT: {
      __type: "LocationGroupLocationsConnectionWhere",
    },
    locations_NOT: { __type: "LocationWhere" },
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
  LocationGroupsAggregateInput: {
    AND: { __type: "[LocationGroupsAggregateInput!]" },
    OR: { __type: "[LocationGroupsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "LocationGroupsNodeAggregationWhereInput" },
  },
  LocationGroupsConnectFieldInput: {
    connect: { __type: "[LocationGroupConnectInput!]" },
    where: { __type: "LocationGroupConnectWhere" },
  },
  LocationGroupsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[LocationGroupsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  LocationGroupsConnectionSort: { node: { __type: "LocationGroupSort" } },
  LocationGroupsConnectionWhere: {
    AND: { __type: "[LocationGroupsConnectionWhere!]" },
    OR: { __type: "[LocationGroupsConnectionWhere!]" },
    node: { __type: "LocationGroupWhere" },
    node_NOT: { __type: "LocationGroupWhere" },
  },
  LocationGroupsCreateFieldInput: {
    node: { __type: "LocationGroupCreateInput!" },
  },
  LocationGroupsDeleteFieldInput: {
    delete: { __type: "LocationGroupDeleteInput" },
    where: { __type: "LocationGroupsConnectionWhere" },
  },
  LocationGroupsDisconnectFieldInput: {
    disconnect: { __type: "LocationGroupDisconnectInput" },
    where: { __type: "LocationGroupsConnectionWhere" },
  },
  LocationGroupsFieldInput: {
    connect: { __type: "[LocationGroupsConnectFieldInput!]" },
    create: { __type: "[LocationGroupsCreateFieldInput!]" },
  },
  LocationGroupsNodeAggregationWhereInput: {
    AND: { __type: "[LocationGroupsNodeAggregationWhereInput!]" },
    OR: { __type: "[LocationGroupsNodeAggregationWhereInput!]" },
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
  LocationGroupsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "LocationGroup!" },
  },
  LocationGroupsUpdateConnectionInput: {
    node: { __type: "LocationGroupUpdateInput" },
  },
  LocationGroupsUpdateFieldInput: {
    connect: { __type: "[LocationGroupsConnectFieldInput!]" },
    create: { __type: "[LocationGroupsCreateFieldInput!]" },
    delete: { __type: "[LocationGroupsDeleteFieldInput!]" },
    disconnect: { __type: "[LocationGroupsDisconnectFieldInput!]" },
    update: { __type: "LocationGroupsUpdateConnectionInput" },
    where: { __type: "LocationGroupsConnectionWhere" },
  },
  LocationLocationGroupGroupsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "LocationLocationGroupGroupsNodeAggregateSelection" },
  },
  LocationLocationGroupGroupsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  LocationMachineMachinesAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "LocationMachineMachinesNodeAggregateSelection" },
  },
  LocationMachineMachinesNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    networkName: { __type: "StringAggregateSelection!" },
    provisionedAt: { __type: "DateTimeAggregateSelection!" },
  },
  LocationMachinesAggregateInput: {
    AND: { __type: "[LocationMachinesAggregateInput!]" },
    OR: { __type: "[LocationMachinesAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "LocationMachinesNodeAggregationWhereInput" },
  },
  LocationMachinesConnectFieldInput: {
    connect: { __type: "[MachineConnectInput!]" },
    where: { __type: "MachineConnectWhere" },
  },
  LocationMachinesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[LocationMachinesRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  LocationMachinesConnectionSort: { node: { __type: "MachineSort" } },
  LocationMachinesConnectionWhere: {
    AND: { __type: "[LocationMachinesConnectionWhere!]" },
    OR: { __type: "[LocationMachinesConnectionWhere!]" },
    node: { __type: "MachineWhere" },
    node_NOT: { __type: "MachineWhere" },
  },
  LocationMachinesCreateFieldInput: { node: { __type: "MachineCreateInput!" } },
  LocationMachinesDeleteFieldInput: {
    delete: { __type: "MachineDeleteInput" },
    where: { __type: "LocationMachinesConnectionWhere" },
  },
  LocationMachinesDisconnectFieldInput: {
    disconnect: { __type: "MachineDisconnectInput" },
    where: { __type: "LocationMachinesConnectionWhere" },
  },
  LocationMachinesFieldInput: {
    connect: { __type: "[LocationMachinesConnectFieldInput!]" },
    create: { __type: "[LocationMachinesCreateFieldInput!]" },
  },
  LocationMachinesNodeAggregationWhereInput: {
    AND: { __type: "[LocationMachinesNodeAggregationWhereInput!]" },
    OR: { __type: "[LocationMachinesNodeAggregationWhereInput!]" },
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
    networkName_AVERAGE_EQUAL: { __type: "Float" },
    networkName_AVERAGE_GT: { __type: "Float" },
    networkName_AVERAGE_GTE: { __type: "Float" },
    networkName_AVERAGE_LT: { __type: "Float" },
    networkName_AVERAGE_LTE: { __type: "Float" },
    networkName_EQUAL: { __type: "String" },
    networkName_GT: { __type: "Int" },
    networkName_GTE: { __type: "Int" },
    networkName_LONGEST_EQUAL: { __type: "Int" },
    networkName_LONGEST_GT: { __type: "Int" },
    networkName_LONGEST_GTE: { __type: "Int" },
    networkName_LONGEST_LT: { __type: "Int" },
    networkName_LONGEST_LTE: { __type: "Int" },
    networkName_LT: { __type: "Int" },
    networkName_LTE: { __type: "Int" },
    networkName_SHORTEST_EQUAL: { __type: "Int" },
    networkName_SHORTEST_GT: { __type: "Int" },
    networkName_SHORTEST_GTE: { __type: "Int" },
    networkName_SHORTEST_LT: { __type: "Int" },
    networkName_SHORTEST_LTE: { __type: "Int" },
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
  LocationMachinesRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Machine!" },
  },
  LocationMachinesUpdateConnectionInput: {
    node: { __type: "MachineUpdateInput" },
  },
  LocationMachinesUpdateFieldInput: {
    connect: { __type: "[LocationMachinesConnectFieldInput!]" },
    create: { __type: "[LocationMachinesCreateFieldInput!]" },
    delete: { __type: "[LocationMachinesDeleteFieldInput!]" },
    disconnect: { __type: "[LocationMachinesDisconnectFieldInput!]" },
    update: { __type: "LocationMachinesUpdateConnectionInput" },
    where: { __type: "LocationMachinesConnectionWhere" },
  },
  LocationOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[LocationSort]" },
  },
  LocationRelationInput: {
    groups: { __type: "[LocationGroupsCreateFieldInput!]" },
    machines: { __type: "[LocationMachinesCreateFieldInput!]" },
  },
  LocationSort: {
    elevation: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    lat: { __type: "SortDirection" },
    lng: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  LocationUpdateInput: {
    elevation: { __type: "Float" },
    groups: { __type: "[LocationGroupsUpdateFieldInput!]" },
    lat: { __type: "Float" },
    lng: { __type: "Float" },
    machines: { __type: "[LocationMachinesUpdateFieldInput!]" },
    name: { __type: "String" },
  },
  LocationWhere: {
    AND: { __type: "[LocationWhere!]" },
    OR: { __type: "[LocationWhere!]" },
    elevation: { __type: "Float" },
    elevation_GT: { __type: "Float" },
    elevation_GTE: { __type: "Float" },
    elevation_IN: { __type: "[Float]" },
    elevation_LT: { __type: "Float" },
    elevation_LTE: { __type: "Float" },
    elevation_NOT: { __type: "Float" },
    elevation_NOT_IN: { __type: "[Float]" },
    groups: { __type: "LocationGroupWhere" },
    groupsAggregate: { __type: "LocationGroupsAggregateInput" },
    groupsConnection: { __type: "LocationGroupsConnectionWhere" },
    groupsConnection_NOT: { __type: "LocationGroupsConnectionWhere" },
    groups_NOT: { __type: "LocationGroupWhere" },
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
    machines: { __type: "MachineWhere" },
    machinesAggregate: { __type: "LocationMachinesAggregateInput" },
    machinesConnection: { __type: "LocationMachinesConnectionWhere" },
    machinesConnection_NOT: { __type: "LocationMachinesConnectionWhere" },
    machines_NOT: { __type: "MachineWhere" },
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
  Machine: {
    __typename: { __type: "String!" },
    computers: {
      __type: "Computer",
      __args: { options: "ComputerOptions", where: "ComputerWhere" },
    },
    computersAggregate: {
      __type: "MachineComputerComputersAggregationSelection",
      __args: { where: "ComputerWhere" },
    },
    computersConnection: {
      __type: "MachineComputersConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[MachineComputersConnectionSort!]",
        where: "MachineComputersConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    location: {
      __type: "Location",
      __args: { options: "LocationOptions", where: "LocationWhere" },
    },
    locationAggregate: {
      __type: "MachineLocationLocationAggregationSelection",
      __args: { where: "LocationWhere" },
    },
    locationConnection: {
      __type: "MachineLocationConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[MachineLocationConnectionSort!]",
        where: "MachineLocationConnectionWhere",
      },
    },
    name: { __type: "String" },
    networkName: { __type: "String" },
    provisioned: { __type: "Boolean" },
    provisionedAt: { __type: "DateTime" },
    template: {
      __type: "MachineTemplate",
      __args: {
        options: "MachineTemplateOptions",
        where: "MachineTemplateWhere",
      },
    },
    templateAggregate: {
      __type: "MachineMachineTemplateTemplateAggregationSelection",
      __args: { where: "MachineTemplateWhere" },
    },
    templateConnection: {
      __type: "MachineTemplateConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[MachineTemplateConnectionSort!]",
        where: "MachineTemplateConnectionWhere",
      },
    },
  },
  MachineAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    networkName: { __type: "StringAggregateSelection!" },
    provisionedAt: { __type: "DateTimeAggregateSelection!" },
  },
  MachineComputerComputersAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "MachineComputerComputersNodeAggregateSelection" },
  },
  MachineComputerComputersNodeAggregateSelection: {
    __typename: { __type: "String!" },
    agentVersion: { __type: "StringAggregateSelection!" },
    cpu: { __type: "FloatAggregateSelection!" },
    hostname: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    memory: { __type: "FloatAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    os: { __type: "StringAggregateSelection!" },
  },
  MachineComputersAggregateInput: {
    AND: { __type: "[MachineComputersAggregateInput!]" },
    OR: { __type: "[MachineComputersAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "MachineComputersNodeAggregationWhereInput" },
  },
  MachineComputersConnectFieldInput: {
    connect: { __type: "ComputerConnectInput" },
    where: { __type: "ComputerConnectWhere" },
  },
  MachineComputersConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[MachineComputersRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  MachineComputersConnectionSort: { node: { __type: "ComputerSort" } },
  MachineComputersConnectionWhere: {
    AND: { __type: "[MachineComputersConnectionWhere!]" },
    OR: { __type: "[MachineComputersConnectionWhere!]" },
    node: { __type: "ComputerWhere" },
    node_NOT: { __type: "ComputerWhere" },
  },
  MachineComputersCreateFieldInput: {
    node: { __type: "ComputerCreateInput!" },
  },
  MachineComputersDeleteFieldInput: {
    delete: { __type: "ComputerDeleteInput" },
    where: { __type: "MachineComputersConnectionWhere" },
  },
  MachineComputersDisconnectFieldInput: {
    disconnect: { __type: "ComputerDisconnectInput" },
    where: { __type: "MachineComputersConnectionWhere" },
  },
  MachineComputersFieldInput: {
    connect: { __type: "MachineComputersConnectFieldInput" },
    create: { __type: "MachineComputersCreateFieldInput" },
  },
  MachineComputersNodeAggregationWhereInput: {
    AND: { __type: "[MachineComputersNodeAggregationWhereInput!]" },
    OR: { __type: "[MachineComputersNodeAggregationWhereInput!]" },
    agentVersion_AVERAGE_EQUAL: { __type: "Float" },
    agentVersion_AVERAGE_GT: { __type: "Float" },
    agentVersion_AVERAGE_GTE: { __type: "Float" },
    agentVersion_AVERAGE_LT: { __type: "Float" },
    agentVersion_AVERAGE_LTE: { __type: "Float" },
    agentVersion_EQUAL: { __type: "String" },
    agentVersion_GT: { __type: "Int" },
    agentVersion_GTE: { __type: "Int" },
    agentVersion_LONGEST_EQUAL: { __type: "Int" },
    agentVersion_LONGEST_GT: { __type: "Int" },
    agentVersion_LONGEST_GTE: { __type: "Int" },
    agentVersion_LONGEST_LT: { __type: "Int" },
    agentVersion_LONGEST_LTE: { __type: "Int" },
    agentVersion_LT: { __type: "Int" },
    agentVersion_LTE: { __type: "Int" },
    agentVersion_SHORTEST_EQUAL: { __type: "Int" },
    agentVersion_SHORTEST_GT: { __type: "Int" },
    agentVersion_SHORTEST_GTE: { __type: "Int" },
    agentVersion_SHORTEST_LT: { __type: "Int" },
    agentVersion_SHORTEST_LTE: { __type: "Int" },
    cpu_AVERAGE_EQUAL: { __type: "Float" },
    cpu_AVERAGE_GT: { __type: "Float" },
    cpu_AVERAGE_GTE: { __type: "Float" },
    cpu_AVERAGE_LT: { __type: "Float" },
    cpu_AVERAGE_LTE: { __type: "Float" },
    cpu_EQUAL: { __type: "Float" },
    cpu_GT: { __type: "Float" },
    cpu_GTE: { __type: "Float" },
    cpu_LT: { __type: "Float" },
    cpu_LTE: { __type: "Float" },
    cpu_MAX_EQUAL: { __type: "Float" },
    cpu_MAX_GT: { __type: "Float" },
    cpu_MAX_GTE: { __type: "Float" },
    cpu_MAX_LT: { __type: "Float" },
    cpu_MAX_LTE: { __type: "Float" },
    cpu_MIN_EQUAL: { __type: "Float" },
    cpu_MIN_GT: { __type: "Float" },
    cpu_MIN_GTE: { __type: "Float" },
    cpu_MIN_LT: { __type: "Float" },
    cpu_MIN_LTE: { __type: "Float" },
    hostname_AVERAGE_EQUAL: { __type: "Float" },
    hostname_AVERAGE_GT: { __type: "Float" },
    hostname_AVERAGE_GTE: { __type: "Float" },
    hostname_AVERAGE_LT: { __type: "Float" },
    hostname_AVERAGE_LTE: { __type: "Float" },
    hostname_EQUAL: { __type: "String" },
    hostname_GT: { __type: "Int" },
    hostname_GTE: { __type: "Int" },
    hostname_LONGEST_EQUAL: { __type: "Int" },
    hostname_LONGEST_GT: { __type: "Int" },
    hostname_LONGEST_GTE: { __type: "Int" },
    hostname_LONGEST_LT: { __type: "Int" },
    hostname_LONGEST_LTE: { __type: "Int" },
    hostname_LT: { __type: "Int" },
    hostname_LTE: { __type: "Int" },
    hostname_SHORTEST_EQUAL: { __type: "Int" },
    hostname_SHORTEST_GT: { __type: "Int" },
    hostname_SHORTEST_GTE: { __type: "Int" },
    hostname_SHORTEST_LT: { __type: "Int" },
    hostname_SHORTEST_LTE: { __type: "Int" },
    id_EQUAL: { __type: "ID" },
    memory_AVERAGE_EQUAL: { __type: "Float" },
    memory_AVERAGE_GT: { __type: "Float" },
    memory_AVERAGE_GTE: { __type: "Float" },
    memory_AVERAGE_LT: { __type: "Float" },
    memory_AVERAGE_LTE: { __type: "Float" },
    memory_EQUAL: { __type: "Float" },
    memory_GT: { __type: "Float" },
    memory_GTE: { __type: "Float" },
    memory_LT: { __type: "Float" },
    memory_LTE: { __type: "Float" },
    memory_MAX_EQUAL: { __type: "Float" },
    memory_MAX_GT: { __type: "Float" },
    memory_MAX_GTE: { __type: "Float" },
    memory_MAX_LT: { __type: "Float" },
    memory_MAX_LTE: { __type: "Float" },
    memory_MIN_EQUAL: { __type: "Float" },
    memory_MIN_GT: { __type: "Float" },
    memory_MIN_GTE: { __type: "Float" },
    memory_MIN_LT: { __type: "Float" },
    memory_MIN_LTE: { __type: "Float" },
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
  MachineComputersRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Computer!" },
  },
  MachineComputersUpdateConnectionInput: {
    node: { __type: "ComputerUpdateInput" },
  },
  MachineComputersUpdateFieldInput: {
    connect: { __type: "MachineComputersConnectFieldInput" },
    create: { __type: "MachineComputersCreateFieldInput" },
    delete: { __type: "MachineComputersDeleteFieldInput" },
    disconnect: { __type: "MachineComputersDisconnectFieldInput" },
    update: { __type: "MachineComputersUpdateConnectionInput" },
    where: { __type: "MachineComputersConnectionWhere" },
  },
  MachineConnectInput: {
    computers: { __type: "MachineComputersConnectFieldInput" },
    location: { __type: "MachineLocationConnectFieldInput" },
    template: { __type: "MachineTemplateConnectFieldInput" },
  },
  MachineConnectWhere: { node: { __type: "MachineWhere!" } },
  MachineCreateInput: {
    computers: { __type: "MachineComputersFieldInput" },
    location: { __type: "MachineLocationFieldInput" },
    name: { __type: "String" },
    networkName: { __type: "String" },
    provisioned: { __type: "Boolean" },
    provisionedAt: { __type: "DateTime" },
    template: { __type: "MachineTemplateFieldInput" },
  },
  MachineDeleteInput: {
    computers: { __type: "MachineComputersDeleteFieldInput" },
    location: { __type: "MachineLocationDeleteFieldInput" },
    template: { __type: "MachineTemplateDeleteFieldInput" },
  },
  MachineDisconnectInput: {
    computers: { __type: "MachineComputersDisconnectFieldInput" },
    location: { __type: "MachineLocationDisconnectFieldInput" },
    template: { __type: "MachineTemplateDisconnectFieldInput" },
  },
  MachineLocationAggregateInput: {
    AND: { __type: "[MachineLocationAggregateInput!]" },
    OR: { __type: "[MachineLocationAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "MachineLocationNodeAggregationWhereInput" },
  },
  MachineLocationConnectFieldInput: {
    connect: { __type: "LocationConnectInput" },
    where: { __type: "LocationConnectWhere" },
  },
  MachineLocationConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[MachineLocationRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  MachineLocationConnectionSort: { node: { __type: "LocationSort" } },
  MachineLocationConnectionWhere: {
    AND: { __type: "[MachineLocationConnectionWhere!]" },
    OR: { __type: "[MachineLocationConnectionWhere!]" },
    node: { __type: "LocationWhere" },
    node_NOT: { __type: "LocationWhere" },
  },
  MachineLocationCreateFieldInput: { node: { __type: "LocationCreateInput!" } },
  MachineLocationDeleteFieldInput: {
    delete: { __type: "LocationDeleteInput" },
    where: { __type: "MachineLocationConnectionWhere" },
  },
  MachineLocationDisconnectFieldInput: {
    disconnect: { __type: "LocationDisconnectInput" },
    where: { __type: "MachineLocationConnectionWhere" },
  },
  MachineLocationFieldInput: {
    connect: { __type: "MachineLocationConnectFieldInput" },
    create: { __type: "MachineLocationCreateFieldInput" },
  },
  MachineLocationLocationAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "MachineLocationLocationNodeAggregateSelection" },
  },
  MachineLocationLocationNodeAggregateSelection: {
    __typename: { __type: "String!" },
    elevation: { __type: "FloatAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    lat: { __type: "FloatAggregateSelection!" },
    lng: { __type: "FloatAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  MachineLocationNodeAggregationWhereInput: {
    AND: { __type: "[MachineLocationNodeAggregationWhereInput!]" },
    OR: { __type: "[MachineLocationNodeAggregationWhereInput!]" },
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
  MachineLocationRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Location!" },
  },
  MachineLocationUpdateConnectionInput: {
    node: { __type: "LocationUpdateInput" },
  },
  MachineLocationUpdateFieldInput: {
    connect: { __type: "MachineLocationConnectFieldInput" },
    create: { __type: "MachineLocationCreateFieldInput" },
    delete: { __type: "MachineLocationDeleteFieldInput" },
    disconnect: { __type: "MachineLocationDisconnectFieldInput" },
    update: { __type: "MachineLocationUpdateConnectionInput" },
    where: { __type: "MachineLocationConnectionWhere" },
  },
  MachineMachineTemplateTemplateAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "MachineMachineTemplateTemplateNodeAggregateSelection" },
  },
  MachineMachineTemplateTemplateNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  MachineOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[MachineSort]" },
  },
  MachinePlugin: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  MachinePluginAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  MachinePluginConnectWhere: { node: { __type: "MachinePluginWhere!" } },
  MachinePluginCreateInput: {
    name: { __type: "String" },
    type: { __type: "String" },
  },
  MachinePluginOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[MachinePluginSort]" },
  },
  MachinePluginSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    type: { __type: "SortDirection" },
  },
  MachinePluginUpdateInput: {
    name: { __type: "String" },
    type: { __type: "String" },
  },
  MachinePluginWhere: {
    AND: { __type: "[MachinePluginWhere!]" },
    OR: { __type: "[MachinePluginWhere!]" },
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
  MachineRelationInput: {
    computers: { __type: "MachineComputersCreateFieldInput" },
    location: { __type: "MachineLocationCreateFieldInput" },
    template: { __type: "MachineTemplateCreateFieldInput" },
  },
  MachineSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    networkName: { __type: "SortDirection" },
    provisioned: { __type: "SortDirection" },
    provisionedAt: { __type: "SortDirection" },
  },
  MachineTemplate: {
    __typename: { __type: "String!" },
    computers: {
      __type: "[ComputerTemplate]",
      __args: {
        options: "ComputerTemplateOptions",
        where: "ComputerTemplateWhere",
      },
    },
    computersAggregate: {
      __type: "MachineTemplateComputerTemplateComputersAggregationSelection",
      __args: { where: "ComputerTemplateWhere" },
    },
    computersConnection: {
      __type: "MachineTemplateComputersConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[MachineTemplateComputersConnectionSort!]",
        where: "MachineTemplateComputersConnectionWhere",
      },
    },
    displays: {
      __type: "[ScreenTemplate]",
      __args: {
        options: "ScreenTemplateOptions",
        where: "ScreenTemplateWhere",
      },
    },
    displaysAggregate: {
      __type: "MachineTemplateScreenTemplateDisplaysAggregationSelection",
      __args: { where: "ScreenTemplateWhere" },
    },
    displaysConnection: {
      __type: "MachineTemplateDisplaysConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[MachineTemplateDisplaysConnectionSort!]",
        where: "MachineTemplateDisplaysConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    name: { __type: "String" },
    peripherals: {
      __type: "[PeripheralTemplate]",
      __args: {
        options: "PeripheralTemplateOptions",
        where: "PeripheralTemplateWhere",
      },
    },
    peripheralsAggregate: {
      __type:
        "MachineTemplatePeripheralTemplatePeripheralsAggregationSelection",
      __args: { where: "PeripheralTemplateWhere" },
    },
    peripheralsConnection: {
      __type: "MachineTemplatePeripheralsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[MachineTemplatePeripheralsConnectionSort!]",
        where: "MachineTemplatePeripheralsConnectionWhere",
      },
    },
    plugins: {
      __type: "[MachinePlugin]",
      __args: { options: "MachinePluginOptions", where: "MachinePluginWhere" },
    },
    pluginsAggregate: {
      __type: "MachineTemplateMachinePluginPluginsAggregationSelection",
      __args: { where: "MachinePluginWhere" },
    },
    pluginsConnection: {
      __type: "MachineTemplatePluginsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[MachineTemplatePluginsConnectionSort!]",
        where: "MachineTemplatePluginsConnectionWhere",
      },
    },
  },
  MachineTemplateAggregateInput: {
    AND: { __type: "[MachineTemplateAggregateInput!]" },
    OR: { __type: "[MachineTemplateAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "MachineTemplateNodeAggregationWhereInput" },
  },
  MachineTemplateAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  MachineTemplateComputerTemplateComputersAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "MachineTemplateComputerTemplateComputersNodeAggregateSelection",
    },
  },
  MachineTemplateComputerTemplateComputersNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  MachineTemplateComputersAggregateInput: {
    AND: { __type: "[MachineTemplateComputersAggregateInput!]" },
    OR: { __type: "[MachineTemplateComputersAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "MachineTemplateComputersNodeAggregationWhereInput" },
  },
  MachineTemplateComputersConnectFieldInput: {
    connect: { __type: "[ComputerTemplateConnectInput!]" },
    where: { __type: "ComputerTemplateConnectWhere" },
  },
  MachineTemplateComputersConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[MachineTemplateComputersRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  MachineTemplateComputersConnectionSort: {
    node: { __type: "ComputerTemplateSort" },
  },
  MachineTemplateComputersConnectionWhere: {
    AND: { __type: "[MachineTemplateComputersConnectionWhere!]" },
    OR: { __type: "[MachineTemplateComputersConnectionWhere!]" },
    node: { __type: "ComputerTemplateWhere" },
    node_NOT: { __type: "ComputerTemplateWhere" },
  },
  MachineTemplateComputersCreateFieldInput: {
    node: { __type: "ComputerTemplateCreateInput!" },
  },
  MachineTemplateComputersDeleteFieldInput: {
    delete: { __type: "ComputerTemplateDeleteInput" },
    where: { __type: "MachineTemplateComputersConnectionWhere" },
  },
  MachineTemplateComputersDisconnectFieldInput: {
    disconnect: { __type: "ComputerTemplateDisconnectInput" },
    where: { __type: "MachineTemplateComputersConnectionWhere" },
  },
  MachineTemplateComputersFieldInput: {
    connect: { __type: "[MachineTemplateComputersConnectFieldInput!]" },
    create: { __type: "[MachineTemplateComputersCreateFieldInput!]" },
  },
  MachineTemplateComputersNodeAggregationWhereInput: {
    AND: { __type: "[MachineTemplateComputersNodeAggregationWhereInput!]" },
    OR: { __type: "[MachineTemplateComputersNodeAggregationWhereInput!]" },
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
  MachineTemplateComputersRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ComputerTemplate!" },
  },
  MachineTemplateComputersUpdateConnectionInput: {
    node: { __type: "ComputerTemplateUpdateInput" },
  },
  MachineTemplateComputersUpdateFieldInput: {
    connect: { __type: "[MachineTemplateComputersConnectFieldInput!]" },
    create: { __type: "[MachineTemplateComputersCreateFieldInput!]" },
    delete: { __type: "[MachineTemplateComputersDeleteFieldInput!]" },
    disconnect: { __type: "[MachineTemplateComputersDisconnectFieldInput!]" },
    update: { __type: "MachineTemplateComputersUpdateConnectionInput" },
    where: { __type: "MachineTemplateComputersConnectionWhere" },
  },
  MachineTemplateConnectFieldInput: {
    connect: { __type: "MachineTemplateConnectInput" },
    where: { __type: "MachineTemplateConnectWhere" },
  },
  MachineTemplateConnectInput: {
    computers: { __type: "[MachineTemplateComputersConnectFieldInput!]" },
    displays: { __type: "[MachineTemplateDisplaysConnectFieldInput!]" },
    peripherals: { __type: "[MachineTemplatePeripheralsConnectFieldInput!]" },
    plugins: { __type: "[MachineTemplatePluginsConnectFieldInput!]" },
  },
  MachineTemplateConnectWhere: { node: { __type: "MachineTemplateWhere!" } },
  MachineTemplateConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[MachineTemplateRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  MachineTemplateConnectionSort: { node: { __type: "MachineTemplateSort" } },
  MachineTemplateConnectionWhere: {
    AND: { __type: "[MachineTemplateConnectionWhere!]" },
    OR: { __type: "[MachineTemplateConnectionWhere!]" },
    node: { __type: "MachineTemplateWhere" },
    node_NOT: { __type: "MachineTemplateWhere" },
  },
  MachineTemplateCreateFieldInput: {
    node: { __type: "MachineTemplateCreateInput!" },
  },
  MachineTemplateCreateInput: {
    computers: { __type: "MachineTemplateComputersFieldInput" },
    displays: { __type: "MachineTemplateDisplaysFieldInput" },
    name: { __type: "String" },
    peripherals: { __type: "MachineTemplatePeripheralsFieldInput" },
    plugins: { __type: "MachineTemplatePluginsFieldInput" },
  },
  MachineTemplateDeleteFieldInput: {
    delete: { __type: "MachineTemplateDeleteInput" },
    where: { __type: "MachineTemplateConnectionWhere" },
  },
  MachineTemplateDeleteInput: {
    computers: { __type: "[MachineTemplateComputersDeleteFieldInput!]" },
    displays: { __type: "[MachineTemplateDisplaysDeleteFieldInput!]" },
    peripherals: { __type: "[MachineTemplatePeripheralsDeleteFieldInput!]" },
    plugins: { __type: "[MachineTemplatePluginsDeleteFieldInput!]" },
  },
  MachineTemplateDisconnectFieldInput: {
    disconnect: { __type: "MachineTemplateDisconnectInput" },
    where: { __type: "MachineTemplateConnectionWhere" },
  },
  MachineTemplateDisconnectInput: {
    computers: { __type: "[MachineTemplateComputersDisconnectFieldInput!]" },
    displays: { __type: "[MachineTemplateDisplaysDisconnectFieldInput!]" },
    peripherals: {
      __type: "[MachineTemplatePeripheralsDisconnectFieldInput!]",
    },
    plugins: { __type: "[MachineTemplatePluginsDisconnectFieldInput!]" },
  },
  MachineTemplateDisplaysAggregateInput: {
    AND: { __type: "[MachineTemplateDisplaysAggregateInput!]" },
    OR: { __type: "[MachineTemplateDisplaysAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "MachineTemplateDisplaysNodeAggregationWhereInput" },
  },
  MachineTemplateDisplaysConnectFieldInput: {
    connect: { __type: "[ScreenTemplateConnectInput!]" },
    where: { __type: "ScreenTemplateConnectWhere" },
  },
  MachineTemplateDisplaysConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[MachineTemplateDisplaysRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  MachineTemplateDisplaysConnectionSort: {
    node: { __type: "ScreenTemplateSort" },
  },
  MachineTemplateDisplaysConnectionWhere: {
    AND: { __type: "[MachineTemplateDisplaysConnectionWhere!]" },
    OR: { __type: "[MachineTemplateDisplaysConnectionWhere!]" },
    node: { __type: "ScreenTemplateWhere" },
    node_NOT: { __type: "ScreenTemplateWhere" },
  },
  MachineTemplateDisplaysCreateFieldInput: {
    node: { __type: "ScreenTemplateCreateInput!" },
  },
  MachineTemplateDisplaysDeleteFieldInput: {
    delete: { __type: "ScreenTemplateDeleteInput" },
    where: { __type: "MachineTemplateDisplaysConnectionWhere" },
  },
  MachineTemplateDisplaysDisconnectFieldInput: {
    disconnect: { __type: "ScreenTemplateDisconnectInput" },
    where: { __type: "MachineTemplateDisplaysConnectionWhere" },
  },
  MachineTemplateDisplaysFieldInput: {
    connect: { __type: "[MachineTemplateDisplaysConnectFieldInput!]" },
    create: { __type: "[MachineTemplateDisplaysCreateFieldInput!]" },
  },
  MachineTemplateDisplaysNodeAggregationWhereInput: {
    AND: { __type: "[MachineTemplateDisplaysNodeAggregationWhereInput!]" },
    OR: { __type: "[MachineTemplateDisplaysNodeAggregationWhereInput!]" },
    height_AVERAGE_EQUAL: { __type: "Float" },
    height_AVERAGE_GT: { __type: "Float" },
    height_AVERAGE_GTE: { __type: "Float" },
    height_AVERAGE_LT: { __type: "Float" },
    height_AVERAGE_LTE: { __type: "Float" },
    height_EQUAL: { __type: "Int" },
    height_GT: { __type: "Int" },
    height_GTE: { __type: "Int" },
    height_LT: { __type: "Int" },
    height_LTE: { __type: "Int" },
    height_MAX_EQUAL: { __type: "Int" },
    height_MAX_GT: { __type: "Int" },
    height_MAX_GTE: { __type: "Int" },
    height_MAX_LT: { __type: "Int" },
    height_MAX_LTE: { __type: "Int" },
    height_MIN_EQUAL: { __type: "Int" },
    height_MIN_GT: { __type: "Int" },
    height_MIN_GTE: { __type: "Int" },
    height_MIN_LT: { __type: "Int" },
    height_MIN_LTE: { __type: "Int" },
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
    rotation_AVERAGE_EQUAL: { __type: "Float" },
    rotation_AVERAGE_GT: { __type: "Float" },
    rotation_AVERAGE_GTE: { __type: "Float" },
    rotation_AVERAGE_LT: { __type: "Float" },
    rotation_AVERAGE_LTE: { __type: "Float" },
    rotation_EQUAL: { __type: "Int" },
    rotation_GT: { __type: "Int" },
    rotation_GTE: { __type: "Int" },
    rotation_LT: { __type: "Int" },
    rotation_LTE: { __type: "Int" },
    rotation_MAX_EQUAL: { __type: "Int" },
    rotation_MAX_GT: { __type: "Int" },
    rotation_MAX_GTE: { __type: "Int" },
    rotation_MAX_LT: { __type: "Int" },
    rotation_MAX_LTE: { __type: "Int" },
    rotation_MIN_EQUAL: { __type: "Int" },
    rotation_MIN_GT: { __type: "Int" },
    rotation_MIN_GTE: { __type: "Int" },
    rotation_MIN_LT: { __type: "Int" },
    rotation_MIN_LTE: { __type: "Int" },
    width_AVERAGE_EQUAL: { __type: "Float" },
    width_AVERAGE_GT: { __type: "Float" },
    width_AVERAGE_GTE: { __type: "Float" },
    width_AVERAGE_LT: { __type: "Float" },
    width_AVERAGE_LTE: { __type: "Float" },
    width_EQUAL: { __type: "Int" },
    width_GT: { __type: "Int" },
    width_GTE: { __type: "Int" },
    width_LT: { __type: "Int" },
    width_LTE: { __type: "Int" },
    width_MAX_EQUAL: { __type: "Int" },
    width_MAX_GT: { __type: "Int" },
    width_MAX_GTE: { __type: "Int" },
    width_MAX_LT: { __type: "Int" },
    width_MAX_LTE: { __type: "Int" },
    width_MIN_EQUAL: { __type: "Int" },
    width_MIN_GT: { __type: "Int" },
    width_MIN_GTE: { __type: "Int" },
    width_MIN_LT: { __type: "Int" },
    width_MIN_LTE: { __type: "Int" },
  },
  MachineTemplateDisplaysRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ScreenTemplate!" },
  },
  MachineTemplateDisplaysUpdateConnectionInput: {
    node: { __type: "ScreenTemplateUpdateInput" },
  },
  MachineTemplateDisplaysUpdateFieldInput: {
    connect: { __type: "[MachineTemplateDisplaysConnectFieldInput!]" },
    create: { __type: "[MachineTemplateDisplaysCreateFieldInput!]" },
    delete: { __type: "[MachineTemplateDisplaysDeleteFieldInput!]" },
    disconnect: { __type: "[MachineTemplateDisplaysDisconnectFieldInput!]" },
    update: { __type: "MachineTemplateDisplaysUpdateConnectionInput" },
    where: { __type: "MachineTemplateDisplaysConnectionWhere" },
  },
  MachineTemplateFieldInput: {
    connect: { __type: "MachineTemplateConnectFieldInput" },
    create: { __type: "MachineTemplateCreateFieldInput" },
  },
  MachineTemplateMachinePluginPluginsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "MachineTemplateMachinePluginPluginsNodeAggregateSelection",
    },
  },
  MachineTemplateMachinePluginPluginsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  MachineTemplateNodeAggregationWhereInput: {
    AND: { __type: "[MachineTemplateNodeAggregationWhereInput!]" },
    OR: { __type: "[MachineTemplateNodeAggregationWhereInput!]" },
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
  MachineTemplateOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[MachineTemplateSort]" },
  },
  MachineTemplatePeripheralTemplatePeripheralsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "MachineTemplatePeripheralTemplatePeripheralsNodeAggregateSelection",
    },
  },
  MachineTemplatePeripheralTemplatePeripheralsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  MachineTemplatePeripheralsAggregateInput: {
    AND: { __type: "[MachineTemplatePeripheralsAggregateInput!]" },
    OR: { __type: "[MachineTemplatePeripheralsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "MachineTemplatePeripheralsNodeAggregationWhereInput" },
  },
  MachineTemplatePeripheralsConnectFieldInput: {
    connect: { __type: "[PeripheralTemplateConnectInput!]" },
    where: { __type: "PeripheralTemplateConnectWhere" },
  },
  MachineTemplatePeripheralsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[MachineTemplatePeripheralsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  MachineTemplatePeripheralsConnectionSort: {
    node: { __type: "PeripheralTemplateSort" },
  },
  MachineTemplatePeripheralsConnectionWhere: {
    AND: { __type: "[MachineTemplatePeripheralsConnectionWhere!]" },
    OR: { __type: "[MachineTemplatePeripheralsConnectionWhere!]" },
    node: { __type: "PeripheralTemplateWhere" },
    node_NOT: { __type: "PeripheralTemplateWhere" },
  },
  MachineTemplatePeripheralsCreateFieldInput: {
    node: { __type: "PeripheralTemplateCreateInput!" },
  },
  MachineTemplatePeripheralsDeleteFieldInput: {
    delete: { __type: "PeripheralTemplateDeleteInput" },
    where: { __type: "MachineTemplatePeripheralsConnectionWhere" },
  },
  MachineTemplatePeripheralsDisconnectFieldInput: {
    disconnect: { __type: "PeripheralTemplateDisconnectInput" },
    where: { __type: "MachineTemplatePeripheralsConnectionWhere" },
  },
  MachineTemplatePeripheralsFieldInput: {
    connect: { __type: "[MachineTemplatePeripheralsConnectFieldInput!]" },
    create: { __type: "[MachineTemplatePeripheralsCreateFieldInput!]" },
  },
  MachineTemplatePeripheralsNodeAggregationWhereInput: {
    AND: { __type: "[MachineTemplatePeripheralsNodeAggregationWhereInput!]" },
    OR: { __type: "[MachineTemplatePeripheralsNodeAggregationWhereInput!]" },
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
  MachineTemplatePeripheralsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "PeripheralTemplate!" },
  },
  MachineTemplatePeripheralsUpdateConnectionInput: {
    node: { __type: "PeripheralTemplateUpdateInput" },
  },
  MachineTemplatePeripheralsUpdateFieldInput: {
    connect: { __type: "[MachineTemplatePeripheralsConnectFieldInput!]" },
    create: { __type: "[MachineTemplatePeripheralsCreateFieldInput!]" },
    delete: { __type: "[MachineTemplatePeripheralsDeleteFieldInput!]" },
    disconnect: { __type: "[MachineTemplatePeripheralsDisconnectFieldInput!]" },
    update: { __type: "MachineTemplatePeripheralsUpdateConnectionInput" },
    where: { __type: "MachineTemplatePeripheralsConnectionWhere" },
  },
  MachineTemplatePluginsAggregateInput: {
    AND: { __type: "[MachineTemplatePluginsAggregateInput!]" },
    OR: { __type: "[MachineTemplatePluginsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "MachineTemplatePluginsNodeAggregationWhereInput" },
  },
  MachineTemplatePluginsConnectFieldInput: {
    where: { __type: "MachinePluginConnectWhere" },
  },
  MachineTemplatePluginsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[MachineTemplatePluginsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  MachineTemplatePluginsConnectionSort: {
    node: { __type: "MachinePluginSort" },
  },
  MachineTemplatePluginsConnectionWhere: {
    AND: { __type: "[MachineTemplatePluginsConnectionWhere!]" },
    OR: { __type: "[MachineTemplatePluginsConnectionWhere!]" },
    node: { __type: "MachinePluginWhere" },
    node_NOT: { __type: "MachinePluginWhere" },
  },
  MachineTemplatePluginsCreateFieldInput: {
    node: { __type: "MachinePluginCreateInput!" },
  },
  MachineTemplatePluginsDeleteFieldInput: {
    where: { __type: "MachineTemplatePluginsConnectionWhere" },
  },
  MachineTemplatePluginsDisconnectFieldInput: {
    where: { __type: "MachineTemplatePluginsConnectionWhere" },
  },
  MachineTemplatePluginsFieldInput: {
    connect: { __type: "[MachineTemplatePluginsConnectFieldInput!]" },
    create: { __type: "[MachineTemplatePluginsCreateFieldInput!]" },
  },
  MachineTemplatePluginsNodeAggregationWhereInput: {
    AND: { __type: "[MachineTemplatePluginsNodeAggregationWhereInput!]" },
    OR: { __type: "[MachineTemplatePluginsNodeAggregationWhereInput!]" },
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
  MachineTemplatePluginsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "MachinePlugin!" },
  },
  MachineTemplatePluginsUpdateConnectionInput: {
    node: { __type: "MachinePluginUpdateInput" },
  },
  MachineTemplatePluginsUpdateFieldInput: {
    connect: { __type: "[MachineTemplatePluginsConnectFieldInput!]" },
    create: { __type: "[MachineTemplatePluginsCreateFieldInput!]" },
    delete: { __type: "[MachineTemplatePluginsDeleteFieldInput!]" },
    disconnect: { __type: "[MachineTemplatePluginsDisconnectFieldInput!]" },
    update: { __type: "MachineTemplatePluginsUpdateConnectionInput" },
    where: { __type: "MachineTemplatePluginsConnectionWhere" },
  },
  MachineTemplateRelationInput: {
    computers: { __type: "[MachineTemplateComputersCreateFieldInput!]" },
    displays: { __type: "[MachineTemplateDisplaysCreateFieldInput!]" },
    peripherals: { __type: "[MachineTemplatePeripheralsCreateFieldInput!]" },
    plugins: { __type: "[MachineTemplatePluginsCreateFieldInput!]" },
  },
  MachineTemplateRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "MachineTemplate!" },
  },
  MachineTemplateScreenTemplateDisplaysAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "MachineTemplateScreenTemplateDisplaysNodeAggregateSelection",
    },
  },
  MachineTemplateScreenTemplateDisplaysNodeAggregateSelection: {
    __typename: { __type: "String!" },
    height: { __type: "IntAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    rotation: { __type: "IntAggregateSelection!" },
    width: { __type: "IntAggregateSelection!" },
  },
  MachineTemplateSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
  },
  MachineTemplateUpdateConnectionInput: {
    node: { __type: "MachineTemplateUpdateInput" },
  },
  MachineTemplateUpdateFieldInput: {
    connect: { __type: "MachineTemplateConnectFieldInput" },
    create: { __type: "MachineTemplateCreateFieldInput" },
    delete: { __type: "MachineTemplateDeleteFieldInput" },
    disconnect: { __type: "MachineTemplateDisconnectFieldInput" },
    update: { __type: "MachineTemplateUpdateConnectionInput" },
    where: { __type: "MachineTemplateConnectionWhere" },
  },
  MachineTemplateUpdateInput: {
    computers: { __type: "[MachineTemplateComputersUpdateFieldInput!]" },
    displays: { __type: "[MachineTemplateDisplaysUpdateFieldInput!]" },
    name: { __type: "String" },
    peripherals: { __type: "[MachineTemplatePeripheralsUpdateFieldInput!]" },
    plugins: { __type: "[MachineTemplatePluginsUpdateFieldInput!]" },
  },
  MachineTemplateWhere: {
    AND: { __type: "[MachineTemplateWhere!]" },
    OR: { __type: "[MachineTemplateWhere!]" },
    computers: { __type: "ComputerTemplateWhere" },
    computersAggregate: { __type: "MachineTemplateComputersAggregateInput" },
    computersConnection: { __type: "MachineTemplateComputersConnectionWhere" },
    computersConnection_NOT: {
      __type: "MachineTemplateComputersConnectionWhere",
    },
    computers_NOT: { __type: "ComputerTemplateWhere" },
    displays: { __type: "ScreenTemplateWhere" },
    displaysAggregate: { __type: "MachineTemplateDisplaysAggregateInput" },
    displaysConnection: { __type: "MachineTemplateDisplaysConnectionWhere" },
    displaysConnection_NOT: {
      __type: "MachineTemplateDisplaysConnectionWhere",
    },
    displays_NOT: { __type: "ScreenTemplateWhere" },
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
    peripherals: { __type: "PeripheralTemplateWhere" },
    peripheralsAggregate: {
      __type: "MachineTemplatePeripheralsAggregateInput",
    },
    peripheralsConnection: {
      __type: "MachineTemplatePeripheralsConnectionWhere",
    },
    peripheralsConnection_NOT: {
      __type: "MachineTemplatePeripheralsConnectionWhere",
    },
    peripherals_NOT: { __type: "PeripheralTemplateWhere" },
    plugins: { __type: "MachinePluginWhere" },
    pluginsAggregate: { __type: "MachineTemplatePluginsAggregateInput" },
    pluginsConnection: { __type: "MachineTemplatePluginsConnectionWhere" },
    pluginsConnection_NOT: { __type: "MachineTemplatePluginsConnectionWhere" },
    plugins_NOT: { __type: "MachinePluginWhere" },
  },
  MachineUpdateInput: {
    computers: { __type: "MachineComputersUpdateFieldInput" },
    location: { __type: "MachineLocationUpdateFieldInput" },
    name: { __type: "String" },
    networkName: { __type: "String" },
    provisioned: { __type: "Boolean" },
    provisionedAt: { __type: "DateTime" },
    template: { __type: "MachineTemplateUpdateFieldInput" },
  },
  MachineWhere: {
    AND: { __type: "[MachineWhere!]" },
    OR: { __type: "[MachineWhere!]" },
    computers: { __type: "ComputerWhere" },
    computersAggregate: { __type: "MachineComputersAggregateInput" },
    computersConnection: { __type: "MachineComputersConnectionWhere" },
    computersConnection_NOT: { __type: "MachineComputersConnectionWhere" },
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
    location: { __type: "LocationWhere" },
    locationAggregate: { __type: "MachineLocationAggregateInput" },
    locationConnection: { __type: "MachineLocationConnectionWhere" },
    locationConnection_NOT: { __type: "MachineLocationConnectionWhere" },
    location_NOT: { __type: "LocationWhere" },
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
    networkName: { __type: "String" },
    networkName_CONTAINS: { __type: "String" },
    networkName_ENDS_WITH: { __type: "String" },
    networkName_IN: { __type: "[String]" },
    networkName_NOT: { __type: "String" },
    networkName_NOT_CONTAINS: { __type: "String" },
    networkName_NOT_ENDS_WITH: { __type: "String" },
    networkName_NOT_IN: { __type: "[String]" },
    networkName_NOT_STARTS_WITH: { __type: "String" },
    networkName_STARTS_WITH: { __type: "String" },
    provisioned: { __type: "Boolean" },
    provisionedAt: { __type: "DateTime" },
    provisionedAt_GT: { __type: "DateTime" },
    provisionedAt_GTE: { __type: "DateTime" },
    provisionedAt_IN: { __type: "[DateTime]" },
    provisionedAt_LT: { __type: "DateTime" },
    provisionedAt_LTE: { __type: "DateTime" },
    provisionedAt_NOT: { __type: "DateTime" },
    provisionedAt_NOT_IN: { __type: "[DateTime]" },
    provisioned_NOT: { __type: "Boolean" },
    template: { __type: "MachineTemplateWhere" },
    templateAggregate: { __type: "MachineTemplateAggregateInput" },
    templateConnection: { __type: "MachineTemplateConnectionWhere" },
    templateConnection_NOT: { __type: "MachineTemplateConnectionWhere" },
    template_NOT: { __type: "MachineTemplateWhere" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    endCursor: { __type: "String" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "String" },
  },
  PeripheralTemplate: {
    __typename: { __type: "String!" },
    computer: {
      __type: "ComputerTemplate",
      __args: {
        options: "ComputerTemplateOptions",
        where: "ComputerTemplateWhere",
      },
    },
    computerAggregate: {
      __type: "PeripheralTemplateComputerTemplateComputerAggregationSelection",
      __args: { where: "ComputerTemplateWhere" },
    },
    computerConnection: {
      __type: "PeripheralTemplateComputerConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[PeripheralTemplateComputerConnectionSort!]",
        where: "PeripheralTemplateComputerConnectionWhere",
      },
    },
    id: { __type: "ID!" },
    name: { __type: "String" },
    private: { __type: "Boolean" },
    type: { __type: "String" },
  },
  PeripheralTemplateAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  PeripheralTemplateComputerAggregateInput: {
    AND: { __type: "[PeripheralTemplateComputerAggregateInput!]" },
    OR: { __type: "[PeripheralTemplateComputerAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "PeripheralTemplateComputerNodeAggregationWhereInput" },
  },
  PeripheralTemplateComputerConnectFieldInput: {
    connect: { __type: "ComputerTemplateConnectInput" },
    where: { __type: "ComputerTemplateConnectWhere" },
  },
  PeripheralTemplateComputerConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[PeripheralTemplateComputerRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  PeripheralTemplateComputerConnectionSort: {
    node: { __type: "ComputerTemplateSort" },
  },
  PeripheralTemplateComputerConnectionWhere: {
    AND: { __type: "[PeripheralTemplateComputerConnectionWhere!]" },
    OR: { __type: "[PeripheralTemplateComputerConnectionWhere!]" },
    node: { __type: "ComputerTemplateWhere" },
    node_NOT: { __type: "ComputerTemplateWhere" },
  },
  PeripheralTemplateComputerCreateFieldInput: {
    node: { __type: "ComputerTemplateCreateInput!" },
  },
  PeripheralTemplateComputerDeleteFieldInput: {
    delete: { __type: "ComputerTemplateDeleteInput" },
    where: { __type: "PeripheralTemplateComputerConnectionWhere" },
  },
  PeripheralTemplateComputerDisconnectFieldInput: {
    disconnect: { __type: "ComputerTemplateDisconnectInput" },
    where: { __type: "PeripheralTemplateComputerConnectionWhere" },
  },
  PeripheralTemplateComputerFieldInput: {
    connect: { __type: "PeripheralTemplateComputerConnectFieldInput" },
    create: { __type: "PeripheralTemplateComputerCreateFieldInput" },
  },
  PeripheralTemplateComputerNodeAggregationWhereInput: {
    AND: { __type: "[PeripheralTemplateComputerNodeAggregationWhereInput!]" },
    OR: { __type: "[PeripheralTemplateComputerNodeAggregationWhereInput!]" },
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
  PeripheralTemplateComputerRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ComputerTemplate!" },
  },
  PeripheralTemplateComputerTemplateComputerAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type:
        "PeripheralTemplateComputerTemplateComputerNodeAggregateSelection",
    },
  },
  PeripheralTemplateComputerTemplateComputerNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  PeripheralTemplateComputerUpdateConnectionInput: {
    node: { __type: "ComputerTemplateUpdateInput" },
  },
  PeripheralTemplateComputerUpdateFieldInput: {
    connect: { __type: "PeripheralTemplateComputerConnectFieldInput" },
    create: { __type: "PeripheralTemplateComputerCreateFieldInput" },
    delete: { __type: "PeripheralTemplateComputerDeleteFieldInput" },
    disconnect: { __type: "PeripheralTemplateComputerDisconnectFieldInput" },
    update: { __type: "PeripheralTemplateComputerUpdateConnectionInput" },
    where: { __type: "PeripheralTemplateComputerConnectionWhere" },
  },
  PeripheralTemplateConnectInput: {
    computer: { __type: "PeripheralTemplateComputerConnectFieldInput" },
  },
  PeripheralTemplateConnectWhere: {
    node: { __type: "PeripheralTemplateWhere!" },
  },
  PeripheralTemplateCreateInput: {
    computer: { __type: "PeripheralTemplateComputerFieldInput" },
    name: { __type: "String" },
    private: { __type: "Boolean" },
    type: { __type: "String" },
  },
  PeripheralTemplateDeleteInput: {
    computer: { __type: "PeripheralTemplateComputerDeleteFieldInput" },
  },
  PeripheralTemplateDisconnectInput: {
    computer: { __type: "PeripheralTemplateComputerDisconnectFieldInput" },
  },
  PeripheralTemplateOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[PeripheralTemplateSort]" },
  },
  PeripheralTemplateRelationInput: {
    computer: { __type: "PeripheralTemplateComputerCreateFieldInput" },
  },
  PeripheralTemplateSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    private: { __type: "SortDirection" },
    type: { __type: "SortDirection" },
  },
  PeripheralTemplateUpdateInput: {
    computer: { __type: "PeripheralTemplateComputerUpdateFieldInput" },
    name: { __type: "String" },
    private: { __type: "Boolean" },
    type: { __type: "String" },
  },
  PeripheralTemplateWhere: {
    AND: { __type: "[PeripheralTemplateWhere!]" },
    OR: { __type: "[PeripheralTemplateWhere!]" },
    computer: { __type: "ComputerTemplateWhere" },
    computerAggregate: { __type: "PeripheralTemplateComputerAggregateInput" },
    computerConnection: { __type: "PeripheralTemplateComputerConnectionWhere" },
    computerConnection_NOT: {
      __type: "PeripheralTemplateComputerConnectionWhere",
    },
    computer_NOT: { __type: "ComputerTemplateWhere" },
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
    private: { __type: "Boolean" },
    private_NOT: { __type: "Boolean" },
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
  ProvisionCode: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime" },
    display: {
      __type: "Machine",
      __args: { options: "MachineOptions", where: "MachineWhere" },
    },
    displayAggregate: {
      __type: "ProvisionCodeMachineDisplayAggregationSelection",
      __args: { where: "MachineWhere" },
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
    connect: { __type: "MachineConnectInput" },
    where: { __type: "MachineConnectWhere" },
  },
  ProvisionCodeDisplayConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ProvisionCodeDisplayRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ProvisionCodeDisplayConnectionSort: { node: { __type: "MachineSort" } },
  ProvisionCodeDisplayConnectionWhere: {
    AND: { __type: "[ProvisionCodeDisplayConnectionWhere!]" },
    OR: { __type: "[ProvisionCodeDisplayConnectionWhere!]" },
    node: { __type: "MachineWhere" },
    node_NOT: { __type: "MachineWhere" },
  },
  ProvisionCodeDisplayCreateFieldInput: {
    node: { __type: "MachineCreateInput!" },
  },
  ProvisionCodeDisplayDeleteFieldInput: {
    delete: { __type: "MachineDeleteInput" },
    where: { __type: "ProvisionCodeDisplayConnectionWhere" },
  },
  ProvisionCodeDisplayDisconnectFieldInput: {
    disconnect: { __type: "MachineDisconnectInput" },
    where: { __type: "ProvisionCodeDisplayConnectionWhere" },
  },
  ProvisionCodeDisplayFieldInput: {
    connect: { __type: "ProvisionCodeDisplayConnectFieldInput" },
    create: { __type: "ProvisionCodeDisplayCreateFieldInput" },
  },
  ProvisionCodeDisplayNodeAggregationWhereInput: {
    AND: { __type: "[ProvisionCodeDisplayNodeAggregationWhereInput!]" },
    OR: { __type: "[ProvisionCodeDisplayNodeAggregationWhereInput!]" },
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
    networkName_AVERAGE_EQUAL: { __type: "Float" },
    networkName_AVERAGE_GT: { __type: "Float" },
    networkName_AVERAGE_GTE: { __type: "Float" },
    networkName_AVERAGE_LT: { __type: "Float" },
    networkName_AVERAGE_LTE: { __type: "Float" },
    networkName_EQUAL: { __type: "String" },
    networkName_GT: { __type: "Int" },
    networkName_GTE: { __type: "Int" },
    networkName_LONGEST_EQUAL: { __type: "Int" },
    networkName_LONGEST_GT: { __type: "Int" },
    networkName_LONGEST_GTE: { __type: "Int" },
    networkName_LONGEST_LT: { __type: "Int" },
    networkName_LONGEST_LTE: { __type: "Int" },
    networkName_LT: { __type: "Int" },
    networkName_LTE: { __type: "Int" },
    networkName_SHORTEST_EQUAL: { __type: "Int" },
    networkName_SHORTEST_GT: { __type: "Int" },
    networkName_SHORTEST_GTE: { __type: "Int" },
    networkName_SHORTEST_LT: { __type: "Int" },
    networkName_SHORTEST_LTE: { __type: "Int" },
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
    node: { __type: "Machine!" },
  },
  ProvisionCodeDisplayUpdateConnectionInput: {
    node: { __type: "MachineUpdateInput" },
  },
  ProvisionCodeDisplayUpdateFieldInput: {
    connect: { __type: "ProvisionCodeDisplayConnectFieldInput" },
    create: { __type: "ProvisionCodeDisplayCreateFieldInput" },
    delete: { __type: "ProvisionCodeDisplayDeleteFieldInput" },
    disconnect: { __type: "ProvisionCodeDisplayDisconnectFieldInput" },
    update: { __type: "ProvisionCodeDisplayUpdateConnectionInput" },
    where: { __type: "ProvisionCodeDisplayConnectionWhere" },
  },
  ProvisionCodeMachineDisplayAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ProvisionCodeMachineDisplayNodeAggregateSelection" },
  },
  ProvisionCodeMachineDisplayNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    networkName: { __type: "StringAggregateSelection!" },
    provisionedAt: { __type: "DateTimeAggregateSelection!" },
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
    display: { __type: "MachineWhere" },
    displayAggregate: { __type: "ProvisionCodeDisplayAggregateInput" },
    displayConnection: { __type: "ProvisionCodeDisplayConnectionWhere" },
    displayConnection_NOT: { __type: "ProvisionCodeDisplayConnectionWhere" },
    display_NOT: { __type: "MachineWhere" },
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
  Schedule: {
    __typename: { __type: "String!" },
    campaigns: {
      __type: "[Campaign]",
      __args: { options: "CampaignOptions", where: "CampaignWhere" },
    },
    campaignsAggregate: {
      __type: "ScheduleCampaignCampaignsAggregationSelection",
      __args: { where: "CampaignWhere" },
    },
    campaignsConnection: {
      __type: "ScheduleCampaignsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ScheduleCampaignsConnectionSort!]",
        where: "ScheduleCampaignsConnectionWhere",
      },
    },
    endDate: { __type: "DateTime" },
    id: { __type: "ID!" },
    locations: {
      __type: "[Location]",
      __args: { options: "LocationOptions", where: "LocationWhere" },
    },
    locationsAggregate: {
      __type: "ScheduleLocationLocationsAggregationSelection",
      __args: { where: "LocationWhere" },
    },
    locationsConnection: {
      __type: "ScheduleLocationsConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ScheduleLocationsConnectionSort!]",
        where: "ScheduleLocationsConnectionWhere",
      },
    },
    name: { __type: "String" },
    screens: {
      __type: "[ScreenTemplate]",
      __args: {
        options: "ScreenTemplateOptions",
        where: "ScreenTemplateWhere",
      },
    },
    screensAggregate: {
      __type: "ScheduleScreenTemplateScreensAggregationSelection",
      __args: { where: "ScreenTemplateWhere" },
    },
    screensConnection: {
      __type: "ScheduleScreensConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ScheduleScreensConnectionSort!]",
        where: "ScheduleScreensConnectionWhere",
      },
    },
    startDate: { __type: "DateTime" },
    tiers: {
      __type: "[ScheduleTier]",
      __args: { options: "ScheduleTierOptions", where: "ScheduleTierWhere" },
    },
    tiersAggregate: {
      __type: "ScheduleScheduleTierTiersAggregationSelection",
      __args: { where: "ScheduleTierWhere" },
    },
    tiersConnection: {
      __type: "ScheduleTiersConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ScheduleTiersConnectionSort!]",
        where: "ScheduleTiersConnectionWhere",
      },
    },
  },
  ScheduleAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    endDate: { __type: "DateTimeAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    startDate: { __type: "DateTimeAggregateSelection!" },
  },
  ScheduleCampaignCampaignsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    edge: { __type: "ScheduleCampaignCampaignsEdgeAggregateSelection" },
    node: { __type: "ScheduleCampaignCampaignsNodeAggregateSelection" },
  },
  ScheduleCampaignCampaignsEdgeAggregateSelection: {
    __typename: { __type: "String!" },
    endDate: { __type: "DateTimeAggregateSelection!" },
    screen: { __type: "StringAggregateSelection!" },
    startDate: { __type: "DateTimeAggregateSelection!" },
    tier: { __type: "StringAggregateSelection!" },
  },
  ScheduleCampaignCampaignsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    assetFolder: { __type: "StringAggregateSelection!" },
    customer: { __type: "StringAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  ScheduleCampaignsAggregateInput: {
    AND: { __type: "[ScheduleCampaignsAggregateInput!]" },
    OR: { __type: "[ScheduleCampaignsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    edge: { __type: "ScheduleCampaignsEdgeAggregationWhereInput" },
    node: { __type: "ScheduleCampaignsNodeAggregationWhereInput" },
  },
  ScheduleCampaignsConnectFieldInput: {
    connect: { __type: "[CampaignConnectInput!]" },
    edge: { __type: "ScheduleItemPropertiesCreateInput" },
    where: { __type: "CampaignConnectWhere" },
  },
  ScheduleCampaignsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ScheduleCampaignsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ScheduleCampaignsConnectionSort: {
    edge: { __type: "ScheduleItemPropertiesSort" },
    node: { __type: "CampaignSort" },
  },
  ScheduleCampaignsConnectionWhere: {
    AND: { __type: "[ScheduleCampaignsConnectionWhere!]" },
    OR: { __type: "[ScheduleCampaignsConnectionWhere!]" },
    edge: { __type: "ScheduleItemPropertiesWhere" },
    edge_NOT: { __type: "ScheduleItemPropertiesWhere" },
    node: { __type: "CampaignWhere" },
    node_NOT: { __type: "CampaignWhere" },
  },
  ScheduleCampaignsCreateFieldInput: {
    edge: { __type: "ScheduleItemPropertiesCreateInput" },
    node: { __type: "CampaignCreateInput!" },
  },
  ScheduleCampaignsDeleteFieldInput: {
    delete: { __type: "CampaignDeleteInput" },
    where: { __type: "ScheduleCampaignsConnectionWhere" },
  },
  ScheduleCampaignsDisconnectFieldInput: {
    disconnect: { __type: "CampaignDisconnectInput" },
    where: { __type: "ScheduleCampaignsConnectionWhere" },
  },
  ScheduleCampaignsEdgeAggregationWhereInput: {
    AND: { __type: "[ScheduleCampaignsEdgeAggregationWhereInput!]" },
    OR: { __type: "[ScheduleCampaignsEdgeAggregationWhereInput!]" },
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
    screen_AVERAGE_EQUAL: { __type: "Float" },
    screen_AVERAGE_GT: { __type: "Float" },
    screen_AVERAGE_GTE: { __type: "Float" },
    screen_AVERAGE_LT: { __type: "Float" },
    screen_AVERAGE_LTE: { __type: "Float" },
    screen_EQUAL: { __type: "String" },
    screen_GT: { __type: "Int" },
    screen_GTE: { __type: "Int" },
    screen_LONGEST_EQUAL: { __type: "Int" },
    screen_LONGEST_GT: { __type: "Int" },
    screen_LONGEST_GTE: { __type: "Int" },
    screen_LONGEST_LT: { __type: "Int" },
    screen_LONGEST_LTE: { __type: "Int" },
    screen_LT: { __type: "Int" },
    screen_LTE: { __type: "Int" },
    screen_SHORTEST_EQUAL: { __type: "Int" },
    screen_SHORTEST_GT: { __type: "Int" },
    screen_SHORTEST_GTE: { __type: "Int" },
    screen_SHORTEST_LT: { __type: "Int" },
    screen_SHORTEST_LTE: { __type: "Int" },
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
    tier_AVERAGE_EQUAL: { __type: "Float" },
    tier_AVERAGE_GT: { __type: "Float" },
    tier_AVERAGE_GTE: { __type: "Float" },
    tier_AVERAGE_LT: { __type: "Float" },
    tier_AVERAGE_LTE: { __type: "Float" },
    tier_EQUAL: { __type: "String" },
    tier_GT: { __type: "Int" },
    tier_GTE: { __type: "Int" },
    tier_LONGEST_EQUAL: { __type: "Int" },
    tier_LONGEST_GT: { __type: "Int" },
    tier_LONGEST_GTE: { __type: "Int" },
    tier_LONGEST_LT: { __type: "Int" },
    tier_LONGEST_LTE: { __type: "Int" },
    tier_LT: { __type: "Int" },
    tier_LTE: { __type: "Int" },
    tier_SHORTEST_EQUAL: { __type: "Int" },
    tier_SHORTEST_GT: { __type: "Int" },
    tier_SHORTEST_GTE: { __type: "Int" },
    tier_SHORTEST_LT: { __type: "Int" },
    tier_SHORTEST_LTE: { __type: "Int" },
  },
  ScheduleCampaignsFieldInput: {
    connect: { __type: "[ScheduleCampaignsConnectFieldInput!]" },
    create: { __type: "[ScheduleCampaignsCreateFieldInput!]" },
  },
  ScheduleCampaignsNodeAggregationWhereInput: {
    AND: { __type: "[ScheduleCampaignsNodeAggregationWhereInput!]" },
    OR: { __type: "[ScheduleCampaignsNodeAggregationWhereInput!]" },
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
  ScheduleCampaignsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    endDate: { __type: "DateTime" },
    node: { __type: "Campaign!" },
    screen: { __type: "String" },
    startDate: { __type: "DateTime" },
    tier: { __type: "String" },
  },
  ScheduleCampaignsUpdateConnectionInput: {
    edge: { __type: "ScheduleItemPropertiesUpdateInput" },
    node: { __type: "CampaignUpdateInput" },
  },
  ScheduleCampaignsUpdateFieldInput: {
    connect: { __type: "[ScheduleCampaignsConnectFieldInput!]" },
    create: { __type: "[ScheduleCampaignsCreateFieldInput!]" },
    delete: { __type: "[ScheduleCampaignsDeleteFieldInput!]" },
    disconnect: { __type: "[ScheduleCampaignsDisconnectFieldInput!]" },
    update: { __type: "ScheduleCampaignsUpdateConnectionInput" },
    where: { __type: "ScheduleCampaignsConnectionWhere" },
  },
  ScheduleConnectInput: {
    campaigns: { __type: "[ScheduleCampaignsConnectFieldInput!]" },
    locations: { __type: "[ScheduleLocationsConnectFieldInput!]" },
    screens: { __type: "[ScheduleScreensConnectFieldInput!]" },
    tiers: { __type: "[ScheduleTiersConnectFieldInput!]" },
  },
  ScheduleConnectWhere: { node: { __type: "ScheduleWhere!" } },
  ScheduleCreateInput: {
    campaigns: { __type: "ScheduleCampaignsFieldInput" },
    endDate: { __type: "DateTime" },
    locations: { __type: "ScheduleLocationsFieldInput" },
    name: { __type: "String" },
    screens: { __type: "ScheduleScreensFieldInput" },
    startDate: { __type: "DateTime" },
    tiers: { __type: "ScheduleTiersFieldInput" },
  },
  ScheduleDeleteInput: {
    campaigns: { __type: "[ScheduleCampaignsDeleteFieldInput!]" },
    locations: { __type: "[ScheduleLocationsDeleteFieldInput!]" },
    screens: { __type: "[ScheduleScreensDeleteFieldInput!]" },
    tiers: { __type: "[ScheduleTiersDeleteFieldInput!]" },
  },
  ScheduleDisconnectInput: {
    campaigns: { __type: "[ScheduleCampaignsDisconnectFieldInput!]" },
    locations: { __type: "[ScheduleLocationsDisconnectFieldInput!]" },
    screens: { __type: "[ScheduleScreensDisconnectFieldInput!]" },
    tiers: { __type: "[ScheduleTiersDisconnectFieldInput!]" },
  },
  ScheduleItemProperties: {
    __typename: { __type: "String!" },
    endDate: { __type: "DateTime" },
    screen: { __type: "String" },
    startDate: { __type: "DateTime" },
    tier: { __type: "String" },
    $on: { __type: "$ScheduleItemProperties!" },
  },
  ScheduleItemPropertiesCreateInput: {
    endDate: { __type: "DateTime" },
    screen: { __type: "String" },
    startDate: { __type: "DateTime" },
    tier: { __type: "String" },
  },
  ScheduleItemPropertiesSort: {
    endDate: { __type: "SortDirection" },
    screen: { __type: "SortDirection" },
    startDate: { __type: "SortDirection" },
    tier: { __type: "SortDirection" },
  },
  ScheduleItemPropertiesUpdateInput: {
    endDate: { __type: "DateTime" },
    screen: { __type: "String" },
    startDate: { __type: "DateTime" },
    tier: { __type: "String" },
  },
  ScheduleItemPropertiesWhere: {
    AND: { __type: "[ScheduleItemPropertiesWhere!]" },
    OR: { __type: "[ScheduleItemPropertiesWhere!]" },
    endDate: { __type: "DateTime" },
    endDate_GT: { __type: "DateTime" },
    endDate_GTE: { __type: "DateTime" },
    endDate_IN: { __type: "[DateTime]" },
    endDate_LT: { __type: "DateTime" },
    endDate_LTE: { __type: "DateTime" },
    endDate_NOT: { __type: "DateTime" },
    endDate_NOT_IN: { __type: "[DateTime]" },
    screen: { __type: "String" },
    screen_CONTAINS: { __type: "String" },
    screen_ENDS_WITH: { __type: "String" },
    screen_IN: { __type: "[String]" },
    screen_NOT: { __type: "String" },
    screen_NOT_CONTAINS: { __type: "String" },
    screen_NOT_ENDS_WITH: { __type: "String" },
    screen_NOT_IN: { __type: "[String]" },
    screen_NOT_STARTS_WITH: { __type: "String" },
    screen_STARTS_WITH: { __type: "String" },
    startDate: { __type: "DateTime" },
    startDate_GT: { __type: "DateTime" },
    startDate_GTE: { __type: "DateTime" },
    startDate_IN: { __type: "[DateTime]" },
    startDate_LT: { __type: "DateTime" },
    startDate_LTE: { __type: "DateTime" },
    startDate_NOT: { __type: "DateTime" },
    startDate_NOT_IN: { __type: "[DateTime]" },
    tier: { __type: "String" },
    tier_CONTAINS: { __type: "String" },
    tier_ENDS_WITH: { __type: "String" },
    tier_IN: { __type: "[String]" },
    tier_NOT: { __type: "String" },
    tier_NOT_CONTAINS: { __type: "String" },
    tier_NOT_ENDS_WITH: { __type: "String" },
    tier_NOT_IN: { __type: "[String]" },
    tier_NOT_STARTS_WITH: { __type: "String" },
    tier_STARTS_WITH: { __type: "String" },
  },
  ScheduleLocationLocationsAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ScheduleLocationLocationsNodeAggregateSelection" },
  },
  ScheduleLocationLocationsNodeAggregateSelection: {
    __typename: { __type: "String!" },
    elevation: { __type: "FloatAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    lat: { __type: "FloatAggregateSelection!" },
    lng: { __type: "FloatAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  ScheduleLocationsAggregateInput: {
    AND: { __type: "[ScheduleLocationsAggregateInput!]" },
    OR: { __type: "[ScheduleLocationsAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ScheduleLocationsNodeAggregationWhereInput" },
  },
  ScheduleLocationsConnectFieldInput: {
    connect: { __type: "[LocationConnectInput!]" },
    where: { __type: "LocationConnectWhere" },
  },
  ScheduleLocationsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ScheduleLocationsRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ScheduleLocationsConnectionSort: { node: { __type: "LocationSort" } },
  ScheduleLocationsConnectionWhere: {
    AND: { __type: "[ScheduleLocationsConnectionWhere!]" },
    OR: { __type: "[ScheduleLocationsConnectionWhere!]" },
    node: { __type: "LocationWhere" },
    node_NOT: { __type: "LocationWhere" },
  },
  ScheduleLocationsCreateFieldInput: {
    node: { __type: "LocationCreateInput!" },
  },
  ScheduleLocationsDeleteFieldInput: {
    delete: { __type: "LocationDeleteInput" },
    where: { __type: "ScheduleLocationsConnectionWhere" },
  },
  ScheduleLocationsDisconnectFieldInput: {
    disconnect: { __type: "LocationDisconnectInput" },
    where: { __type: "ScheduleLocationsConnectionWhere" },
  },
  ScheduleLocationsFieldInput: {
    connect: { __type: "[ScheduleLocationsConnectFieldInput!]" },
    create: { __type: "[ScheduleLocationsCreateFieldInput!]" },
  },
  ScheduleLocationsNodeAggregationWhereInput: {
    AND: { __type: "[ScheduleLocationsNodeAggregationWhereInput!]" },
    OR: { __type: "[ScheduleLocationsNodeAggregationWhereInput!]" },
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
  ScheduleLocationsRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Location!" },
  },
  ScheduleLocationsUpdateConnectionInput: {
    node: { __type: "LocationUpdateInput" },
  },
  ScheduleLocationsUpdateFieldInput: {
    connect: { __type: "[ScheduleLocationsConnectFieldInput!]" },
    create: { __type: "[ScheduleLocationsCreateFieldInput!]" },
    delete: { __type: "[ScheduleLocationsDeleteFieldInput!]" },
    disconnect: { __type: "[ScheduleLocationsDisconnectFieldInput!]" },
    update: { __type: "ScheduleLocationsUpdateConnectionInput" },
    where: { __type: "ScheduleLocationsConnectionWhere" },
  },
  ScheduleOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[ScheduleSort]" },
  },
  ScheduleRelationInput: {
    campaigns: { __type: "[ScheduleCampaignsCreateFieldInput!]" },
    locations: { __type: "[ScheduleLocationsCreateFieldInput!]" },
    screens: { __type: "[ScheduleScreensCreateFieldInput!]" },
    tiers: { __type: "[ScheduleTiersCreateFieldInput!]" },
  },
  ScheduleScheduleTierTiersAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ScheduleScheduleTierTiersNodeAggregateSelection" },
  },
  ScheduleScheduleTierTiersNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    percent: { __type: "FloatAggregateSelection!" },
    slots: { __type: "FloatAggregateSelection!" },
  },
  ScheduleScreenTemplateScreensAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ScheduleScreenTemplateScreensNodeAggregateSelection" },
  },
  ScheduleScreenTemplateScreensNodeAggregateSelection: {
    __typename: { __type: "String!" },
    height: { __type: "IntAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    rotation: { __type: "IntAggregateSelection!" },
    width: { __type: "IntAggregateSelection!" },
  },
  ScheduleScreensAggregateInput: {
    AND: { __type: "[ScheduleScreensAggregateInput!]" },
    OR: { __type: "[ScheduleScreensAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ScheduleScreensNodeAggregationWhereInput" },
  },
  ScheduleScreensConnectFieldInput: {
    connect: { __type: "[ScreenTemplateConnectInput!]" },
    where: { __type: "ScreenTemplateConnectWhere" },
  },
  ScheduleScreensConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ScheduleScreensRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ScheduleScreensConnectionSort: { node: { __type: "ScreenTemplateSort" } },
  ScheduleScreensConnectionWhere: {
    AND: { __type: "[ScheduleScreensConnectionWhere!]" },
    OR: { __type: "[ScheduleScreensConnectionWhere!]" },
    node: { __type: "ScreenTemplateWhere" },
    node_NOT: { __type: "ScreenTemplateWhere" },
  },
  ScheduleScreensCreateFieldInput: {
    node: { __type: "ScreenTemplateCreateInput!" },
  },
  ScheduleScreensDeleteFieldInput: {
    delete: { __type: "ScreenTemplateDeleteInput" },
    where: { __type: "ScheduleScreensConnectionWhere" },
  },
  ScheduleScreensDisconnectFieldInput: {
    disconnect: { __type: "ScreenTemplateDisconnectInput" },
    where: { __type: "ScheduleScreensConnectionWhere" },
  },
  ScheduleScreensFieldInput: {
    connect: { __type: "[ScheduleScreensConnectFieldInput!]" },
    create: { __type: "[ScheduleScreensCreateFieldInput!]" },
  },
  ScheduleScreensNodeAggregationWhereInput: {
    AND: { __type: "[ScheduleScreensNodeAggregationWhereInput!]" },
    OR: { __type: "[ScheduleScreensNodeAggregationWhereInput!]" },
    height_AVERAGE_EQUAL: { __type: "Float" },
    height_AVERAGE_GT: { __type: "Float" },
    height_AVERAGE_GTE: { __type: "Float" },
    height_AVERAGE_LT: { __type: "Float" },
    height_AVERAGE_LTE: { __type: "Float" },
    height_EQUAL: { __type: "Int" },
    height_GT: { __type: "Int" },
    height_GTE: { __type: "Int" },
    height_LT: { __type: "Int" },
    height_LTE: { __type: "Int" },
    height_MAX_EQUAL: { __type: "Int" },
    height_MAX_GT: { __type: "Int" },
    height_MAX_GTE: { __type: "Int" },
    height_MAX_LT: { __type: "Int" },
    height_MAX_LTE: { __type: "Int" },
    height_MIN_EQUAL: { __type: "Int" },
    height_MIN_GT: { __type: "Int" },
    height_MIN_GTE: { __type: "Int" },
    height_MIN_LT: { __type: "Int" },
    height_MIN_LTE: { __type: "Int" },
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
    rotation_AVERAGE_EQUAL: { __type: "Float" },
    rotation_AVERAGE_GT: { __type: "Float" },
    rotation_AVERAGE_GTE: { __type: "Float" },
    rotation_AVERAGE_LT: { __type: "Float" },
    rotation_AVERAGE_LTE: { __type: "Float" },
    rotation_EQUAL: { __type: "Int" },
    rotation_GT: { __type: "Int" },
    rotation_GTE: { __type: "Int" },
    rotation_LT: { __type: "Int" },
    rotation_LTE: { __type: "Int" },
    rotation_MAX_EQUAL: { __type: "Int" },
    rotation_MAX_GT: { __type: "Int" },
    rotation_MAX_GTE: { __type: "Int" },
    rotation_MAX_LT: { __type: "Int" },
    rotation_MAX_LTE: { __type: "Int" },
    rotation_MIN_EQUAL: { __type: "Int" },
    rotation_MIN_GT: { __type: "Int" },
    rotation_MIN_GTE: { __type: "Int" },
    rotation_MIN_LT: { __type: "Int" },
    rotation_MIN_LTE: { __type: "Int" },
    width_AVERAGE_EQUAL: { __type: "Float" },
    width_AVERAGE_GT: { __type: "Float" },
    width_AVERAGE_GTE: { __type: "Float" },
    width_AVERAGE_LT: { __type: "Float" },
    width_AVERAGE_LTE: { __type: "Float" },
    width_EQUAL: { __type: "Int" },
    width_GT: { __type: "Int" },
    width_GTE: { __type: "Int" },
    width_LT: { __type: "Int" },
    width_LTE: { __type: "Int" },
    width_MAX_EQUAL: { __type: "Int" },
    width_MAX_GT: { __type: "Int" },
    width_MAX_GTE: { __type: "Int" },
    width_MAX_LT: { __type: "Int" },
    width_MAX_LTE: { __type: "Int" },
    width_MIN_EQUAL: { __type: "Int" },
    width_MIN_GT: { __type: "Int" },
    width_MIN_GTE: { __type: "Int" },
    width_MIN_LT: { __type: "Int" },
    width_MIN_LTE: { __type: "Int" },
  },
  ScheduleScreensRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ScreenTemplate!" },
  },
  ScheduleScreensUpdateConnectionInput: {
    node: { __type: "ScreenTemplateUpdateInput" },
  },
  ScheduleScreensUpdateFieldInput: {
    connect: { __type: "[ScheduleScreensConnectFieldInput!]" },
    create: { __type: "[ScheduleScreensCreateFieldInput!]" },
    delete: { __type: "[ScheduleScreensDeleteFieldInput!]" },
    disconnect: { __type: "[ScheduleScreensDisconnectFieldInput!]" },
    update: { __type: "ScheduleScreensUpdateConnectionInput" },
    where: { __type: "ScheduleScreensConnectionWhere" },
  },
  ScheduleSort: {
    endDate: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    startDate: { __type: "SortDirection" },
  },
  ScheduleTier: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    percent: { __type: "Float" },
    schedule: {
      __type: "Schedule",
      __args: { options: "ScheduleOptions", where: "ScheduleWhere" },
    },
    scheduleAggregate: {
      __type: "ScheduleTierScheduleScheduleAggregationSelection",
      __args: { where: "ScheduleWhere" },
    },
    scheduleConnection: {
      __type: "ScheduleTierScheduleConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ScheduleTierScheduleConnectionSort!]",
        where: "ScheduleTierScheduleConnectionWhere",
      },
    },
    slots: { __type: "Float" },
  },
  ScheduleTierAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    percent: { __type: "FloatAggregateSelection!" },
    slots: { __type: "FloatAggregateSelection!" },
  },
  ScheduleTierConnectInput: {
    schedule: { __type: "ScheduleTierScheduleConnectFieldInput" },
  },
  ScheduleTierConnectWhere: { node: { __type: "ScheduleTierWhere!" } },
  ScheduleTierCreateInput: {
    name: { __type: "String" },
    percent: { __type: "Float" },
    schedule: { __type: "ScheduleTierScheduleFieldInput" },
    slots: { __type: "Float" },
  },
  ScheduleTierDeleteInput: {
    schedule: { __type: "ScheduleTierScheduleDeleteFieldInput" },
  },
  ScheduleTierDisconnectInput: {
    schedule: { __type: "ScheduleTierScheduleDisconnectFieldInput" },
  },
  ScheduleTierOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[ScheduleTierSort]" },
  },
  ScheduleTierRelationInput: {
    schedule: { __type: "ScheduleTierScheduleCreateFieldInput" },
  },
  ScheduleTierScheduleAggregateInput: {
    AND: { __type: "[ScheduleTierScheduleAggregateInput!]" },
    OR: { __type: "[ScheduleTierScheduleAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ScheduleTierScheduleNodeAggregationWhereInput" },
  },
  ScheduleTierScheduleConnectFieldInput: {
    connect: { __type: "ScheduleConnectInput" },
    where: { __type: "ScheduleConnectWhere" },
  },
  ScheduleTierScheduleConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ScheduleTierScheduleRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ScheduleTierScheduleConnectionSort: { node: { __type: "ScheduleSort" } },
  ScheduleTierScheduleConnectionWhere: {
    AND: { __type: "[ScheduleTierScheduleConnectionWhere!]" },
    OR: { __type: "[ScheduleTierScheduleConnectionWhere!]" },
    node: { __type: "ScheduleWhere" },
    node_NOT: { __type: "ScheduleWhere" },
  },
  ScheduleTierScheduleCreateFieldInput: {
    node: { __type: "ScheduleCreateInput!" },
  },
  ScheduleTierScheduleDeleteFieldInput: {
    delete: { __type: "ScheduleDeleteInput" },
    where: { __type: "ScheduleTierScheduleConnectionWhere" },
  },
  ScheduleTierScheduleDisconnectFieldInput: {
    disconnect: { __type: "ScheduleDisconnectInput" },
    where: { __type: "ScheduleTierScheduleConnectionWhere" },
  },
  ScheduleTierScheduleFieldInput: {
    connect: { __type: "ScheduleTierScheduleConnectFieldInput" },
    create: { __type: "ScheduleTierScheduleCreateFieldInput" },
  },
  ScheduleTierScheduleNodeAggregationWhereInput: {
    AND: { __type: "[ScheduleTierScheduleNodeAggregationWhereInput!]" },
    OR: { __type: "[ScheduleTierScheduleNodeAggregationWhereInput!]" },
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
  ScheduleTierScheduleRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Schedule!" },
  },
  ScheduleTierScheduleScheduleAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: { __type: "ScheduleTierScheduleScheduleNodeAggregateSelection" },
  },
  ScheduleTierScheduleScheduleNodeAggregateSelection: {
    __typename: { __type: "String!" },
    endDate: { __type: "DateTimeAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    startDate: { __type: "DateTimeAggregateSelection!" },
  },
  ScheduleTierScheduleUpdateConnectionInput: {
    node: { __type: "ScheduleUpdateInput" },
  },
  ScheduleTierScheduleUpdateFieldInput: {
    connect: { __type: "ScheduleTierScheduleConnectFieldInput" },
    create: { __type: "ScheduleTierScheduleCreateFieldInput" },
    delete: { __type: "ScheduleTierScheduleDeleteFieldInput" },
    disconnect: { __type: "ScheduleTierScheduleDisconnectFieldInput" },
    update: { __type: "ScheduleTierScheduleUpdateConnectionInput" },
    where: { __type: "ScheduleTierScheduleConnectionWhere" },
  },
  ScheduleTierSort: {
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    percent: { __type: "SortDirection" },
    slots: { __type: "SortDirection" },
  },
  ScheduleTierUpdateInput: {
    name: { __type: "String" },
    percent: { __type: "Float" },
    schedule: { __type: "ScheduleTierScheduleUpdateFieldInput" },
    slots: { __type: "Float" },
  },
  ScheduleTierWhere: {
    AND: { __type: "[ScheduleTierWhere!]" },
    OR: { __type: "[ScheduleTierWhere!]" },
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
    schedule: { __type: "ScheduleWhere" },
    scheduleAggregate: { __type: "ScheduleTierScheduleAggregateInput" },
    scheduleConnection: { __type: "ScheduleTierScheduleConnectionWhere" },
    scheduleConnection_NOT: { __type: "ScheduleTierScheduleConnectionWhere" },
    schedule_NOT: { __type: "ScheduleWhere" },
    slots: { __type: "Float" },
    slots_GT: { __type: "Float" },
    slots_GTE: { __type: "Float" },
    slots_IN: { __type: "[Float]" },
    slots_LT: { __type: "Float" },
    slots_LTE: { __type: "Float" },
    slots_NOT: { __type: "Float" },
    slots_NOT_IN: { __type: "[Float]" },
  },
  ScheduleTiersAggregateInput: {
    AND: { __type: "[ScheduleTiersAggregateInput!]" },
    OR: { __type: "[ScheduleTiersAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ScheduleTiersNodeAggregationWhereInput" },
  },
  ScheduleTiersConnectFieldInput: {
    connect: { __type: "[ScheduleTierConnectInput!]" },
    where: { __type: "ScheduleTierConnectWhere" },
  },
  ScheduleTiersConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ScheduleTiersRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ScheduleTiersConnectionSort: { node: { __type: "ScheduleTierSort" } },
  ScheduleTiersConnectionWhere: {
    AND: { __type: "[ScheduleTiersConnectionWhere!]" },
    OR: { __type: "[ScheduleTiersConnectionWhere!]" },
    node: { __type: "ScheduleTierWhere" },
    node_NOT: { __type: "ScheduleTierWhere" },
  },
  ScheduleTiersCreateFieldInput: {
    node: { __type: "ScheduleTierCreateInput!" },
  },
  ScheduleTiersDeleteFieldInput: {
    delete: { __type: "ScheduleTierDeleteInput" },
    where: { __type: "ScheduleTiersConnectionWhere" },
  },
  ScheduleTiersDisconnectFieldInput: {
    disconnect: { __type: "ScheduleTierDisconnectInput" },
    where: { __type: "ScheduleTiersConnectionWhere" },
  },
  ScheduleTiersFieldInput: {
    connect: { __type: "[ScheduleTiersConnectFieldInput!]" },
    create: { __type: "[ScheduleTiersCreateFieldInput!]" },
  },
  ScheduleTiersNodeAggregationWhereInput: {
    AND: { __type: "[ScheduleTiersNodeAggregationWhereInput!]" },
    OR: { __type: "[ScheduleTiersNodeAggregationWhereInput!]" },
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
  ScheduleTiersRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ScheduleTier!" },
  },
  ScheduleTiersUpdateConnectionInput: {
    node: { __type: "ScheduleTierUpdateInput" },
  },
  ScheduleTiersUpdateFieldInput: {
    connect: { __type: "[ScheduleTiersConnectFieldInput!]" },
    create: { __type: "[ScheduleTiersCreateFieldInput!]" },
    delete: { __type: "[ScheduleTiersDeleteFieldInput!]" },
    disconnect: { __type: "[ScheduleTiersDisconnectFieldInput!]" },
    update: { __type: "ScheduleTiersUpdateConnectionInput" },
    where: { __type: "ScheduleTiersConnectionWhere" },
  },
  ScheduleUpdateInput: {
    campaigns: { __type: "[ScheduleCampaignsUpdateFieldInput!]" },
    endDate: { __type: "DateTime" },
    locations: { __type: "[ScheduleLocationsUpdateFieldInput!]" },
    name: { __type: "String" },
    screens: { __type: "[ScheduleScreensUpdateFieldInput!]" },
    startDate: { __type: "DateTime" },
    tiers: { __type: "[ScheduleTiersUpdateFieldInput!]" },
  },
  ScheduleWhere: {
    AND: { __type: "[ScheduleWhere!]" },
    OR: { __type: "[ScheduleWhere!]" },
    campaigns: { __type: "CampaignWhere" },
    campaignsAggregate: { __type: "ScheduleCampaignsAggregateInput" },
    campaignsConnection: { __type: "ScheduleCampaignsConnectionWhere" },
    campaignsConnection_NOT: { __type: "ScheduleCampaignsConnectionWhere" },
    campaigns_NOT: { __type: "CampaignWhere" },
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
    locations: { __type: "LocationWhere" },
    locationsAggregate: { __type: "ScheduleLocationsAggregateInput" },
    locationsConnection: { __type: "ScheduleLocationsConnectionWhere" },
    locationsConnection_NOT: { __type: "ScheduleLocationsConnectionWhere" },
    locations_NOT: { __type: "LocationWhere" },
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
    screens: { __type: "ScreenTemplateWhere" },
    screensAggregate: { __type: "ScheduleScreensAggregateInput" },
    screensConnection: { __type: "ScheduleScreensConnectionWhere" },
    screensConnection_NOT: { __type: "ScheduleScreensConnectionWhere" },
    screens_NOT: { __type: "ScreenTemplateWhere" },
    startDate: { __type: "DateTime" },
    startDate_GT: { __type: "DateTime" },
    startDate_GTE: { __type: "DateTime" },
    startDate_IN: { __type: "[DateTime]" },
    startDate_LT: { __type: "DateTime" },
    startDate_LTE: { __type: "DateTime" },
    startDate_NOT: { __type: "DateTime" },
    startDate_NOT_IN: { __type: "[DateTime]" },
    tiers: { __type: "ScheduleTierWhere" },
    tiersAggregate: { __type: "ScheduleTiersAggregateInput" },
    tiersConnection: { __type: "ScheduleTiersConnectionWhere" },
    tiersConnection_NOT: { __type: "ScheduleTiersConnectionWhere" },
    tiers_NOT: { __type: "ScheduleTierWhere" },
  },
  Screen: {
    __typename: { __type: "String!" },
    height: { __type: "Float" },
    id: { __type: "ID!" },
    orientation: { __type: "Float" },
    resHeight: { __type: "Float" },
    resWidth: { __type: "Float" },
    width: { __type: "Float" },
  },
  ScreenAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    height: { __type: "FloatAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    orientation: { __type: "FloatAggregateSelection!" },
    resHeight: { __type: "FloatAggregateSelection!" },
    resWidth: { __type: "FloatAggregateSelection!" },
    width: { __type: "FloatAggregateSelection!" },
  },
  ScreenCreateInput: {
    height: { __type: "Float" },
    orientation: { __type: "Float" },
    resHeight: { __type: "Float" },
    resWidth: { __type: "Float" },
    width: { __type: "Float" },
  },
  ScreenOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[ScreenSort]" },
  },
  ScreenSort: {
    height: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    orientation: { __type: "SortDirection" },
    resHeight: { __type: "SortDirection" },
    resWidth: { __type: "SortDirection" },
    width: { __type: "SortDirection" },
  },
  ScreenTemplate: {
    __typename: { __type: "String!" },
    computer: {
      __type: "ComputerTemplate",
      __args: {
        options: "ComputerTemplateOptions",
        where: "ComputerTemplateWhere",
      },
    },
    computerAggregate: {
      __type: "ScreenTemplateComputerTemplateComputerAggregationSelection",
      __args: { where: "ComputerTemplateWhere" },
    },
    computerConnection: {
      __type: "ScreenTemplateComputerConnection!",
      __args: {
        after: "String",
        first: "Int",
        sort: "[ScreenTemplateComputerConnectionSort!]",
        where: "ScreenTemplateComputerConnectionWhere",
      },
    },
    height: { __type: "Int" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    private: { __type: "Boolean" },
    rotation: { __type: "Int" },
    width: { __type: "Int" },
  },
  ScreenTemplateAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    height: { __type: "IntAggregateSelection!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    rotation: { __type: "IntAggregateSelection!" },
    width: { __type: "IntAggregateSelection!" },
  },
  ScreenTemplateComputerAggregateInput: {
    AND: { __type: "[ScreenTemplateComputerAggregateInput!]" },
    OR: { __type: "[ScreenTemplateComputerAggregateInput!]" },
    count: { __type: "Int" },
    count_GT: { __type: "Int" },
    count_GTE: { __type: "Int" },
    count_LT: { __type: "Int" },
    count_LTE: { __type: "Int" },
    node: { __type: "ScreenTemplateComputerNodeAggregationWhereInput" },
  },
  ScreenTemplateComputerConnectFieldInput: {
    connect: { __type: "ComputerTemplateConnectInput" },
    where: { __type: "ComputerTemplateConnectWhere" },
  },
  ScreenTemplateComputerConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[ScreenTemplateComputerRelationship!]!" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  ScreenTemplateComputerConnectionSort: {
    node: { __type: "ComputerTemplateSort" },
  },
  ScreenTemplateComputerConnectionWhere: {
    AND: { __type: "[ScreenTemplateComputerConnectionWhere!]" },
    OR: { __type: "[ScreenTemplateComputerConnectionWhere!]" },
    node: { __type: "ComputerTemplateWhere" },
    node_NOT: { __type: "ComputerTemplateWhere" },
  },
  ScreenTemplateComputerCreateFieldInput: {
    node: { __type: "ComputerTemplateCreateInput!" },
  },
  ScreenTemplateComputerDeleteFieldInput: {
    delete: { __type: "ComputerTemplateDeleteInput" },
    where: { __type: "ScreenTemplateComputerConnectionWhere" },
  },
  ScreenTemplateComputerDisconnectFieldInput: {
    disconnect: { __type: "ComputerTemplateDisconnectInput" },
    where: { __type: "ScreenTemplateComputerConnectionWhere" },
  },
  ScreenTemplateComputerFieldInput: {
    connect: { __type: "ScreenTemplateComputerConnectFieldInput" },
    create: { __type: "ScreenTemplateComputerCreateFieldInput" },
  },
  ScreenTemplateComputerNodeAggregationWhereInput: {
    AND: { __type: "[ScreenTemplateComputerNodeAggregationWhereInput!]" },
    OR: { __type: "[ScreenTemplateComputerNodeAggregationWhereInput!]" },
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
  ScreenTemplateComputerRelationship: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "ComputerTemplate!" },
  },
  ScreenTemplateComputerTemplateComputerAggregationSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    node: {
      __type: "ScreenTemplateComputerTemplateComputerNodeAggregateSelection",
    },
  },
  ScreenTemplateComputerTemplateComputerNodeAggregateSelection: {
    __typename: { __type: "String!" },
    id: { __type: "IDAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
  },
  ScreenTemplateComputerUpdateConnectionInput: {
    node: { __type: "ComputerTemplateUpdateInput" },
  },
  ScreenTemplateComputerUpdateFieldInput: {
    connect: { __type: "ScreenTemplateComputerConnectFieldInput" },
    create: { __type: "ScreenTemplateComputerCreateFieldInput" },
    delete: { __type: "ScreenTemplateComputerDeleteFieldInput" },
    disconnect: { __type: "ScreenTemplateComputerDisconnectFieldInput" },
    update: { __type: "ScreenTemplateComputerUpdateConnectionInput" },
    where: { __type: "ScreenTemplateComputerConnectionWhere" },
  },
  ScreenTemplateConnectInput: {
    computer: { __type: "ScreenTemplateComputerConnectFieldInput" },
  },
  ScreenTemplateConnectWhere: { node: { __type: "ScreenTemplateWhere!" } },
  ScreenTemplateCreateInput: {
    computer: { __type: "ScreenTemplateComputerFieldInput" },
    height: { __type: "Int" },
    name: { __type: "String" },
    private: { __type: "Boolean" },
    rotation: { __type: "Int" },
    width: { __type: "Int" },
  },
  ScreenTemplateDeleteInput: {
    computer: { __type: "ScreenTemplateComputerDeleteFieldInput" },
  },
  ScreenTemplateDisconnectInput: {
    computer: { __type: "ScreenTemplateComputerDisconnectFieldInput" },
  },
  ScreenTemplateOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[ScreenTemplateSort]" },
  },
  ScreenTemplateRelationInput: {
    computer: { __type: "ScreenTemplateComputerCreateFieldInput" },
  },
  ScreenTemplateSort: {
    height: { __type: "SortDirection" },
    id: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    private: { __type: "SortDirection" },
    rotation: { __type: "SortDirection" },
    width: { __type: "SortDirection" },
  },
  ScreenTemplateUpdateInput: {
    computer: { __type: "ScreenTemplateComputerUpdateFieldInput" },
    height: { __type: "Int" },
    name: { __type: "String" },
    private: { __type: "Boolean" },
    rotation: { __type: "Int" },
    width: { __type: "Int" },
  },
  ScreenTemplateWhere: {
    AND: { __type: "[ScreenTemplateWhere!]" },
    OR: { __type: "[ScreenTemplateWhere!]" },
    computer: { __type: "ComputerTemplateWhere" },
    computerAggregate: { __type: "ScreenTemplateComputerAggregateInput" },
    computerConnection: { __type: "ScreenTemplateComputerConnectionWhere" },
    computerConnection_NOT: { __type: "ScreenTemplateComputerConnectionWhere" },
    computer_NOT: { __type: "ComputerTemplateWhere" },
    height: { __type: "Int" },
    height_GT: { __type: "Int" },
    height_GTE: { __type: "Int" },
    height_IN: { __type: "[Int]" },
    height_LT: { __type: "Int" },
    height_LTE: { __type: "Int" },
    height_NOT: { __type: "Int" },
    height_NOT_IN: { __type: "[Int]" },
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
    private: { __type: "Boolean" },
    private_NOT: { __type: "Boolean" },
    rotation: { __type: "Int" },
    rotation_GT: { __type: "Int" },
    rotation_GTE: { __type: "Int" },
    rotation_IN: { __type: "[Int]" },
    rotation_LT: { __type: "Int" },
    rotation_LTE: { __type: "Int" },
    rotation_NOT: { __type: "Int" },
    rotation_NOT_IN: { __type: "[Int]" },
    width: { __type: "Int" },
    width_GT: { __type: "Int" },
    width_GTE: { __type: "Int" },
    width_IN: { __type: "[Int]" },
    width_LT: { __type: "Int" },
    width_LTE: { __type: "Int" },
    width_NOT: { __type: "Int" },
    width_NOT_IN: { __type: "[Int]" },
  },
  ScreenUpdateInput: {
    height: { __type: "Float" },
    orientation: { __type: "Float" },
    resHeight: { __type: "Float" },
    resWidth: { __type: "Float" },
    width: { __type: "Float" },
  },
  ScreenWhere: {
    AND: { __type: "[ScreenWhere!]" },
    OR: { __type: "[ScreenWhere!]" },
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
  StorageTemplate: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    max: { __type: "Float" },
    min: { __type: "Float" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  StorageTemplateAggregateSelection: {
    __typename: { __type: "String!" },
    count: { __type: "Int!" },
    id: { __type: "IDAggregateSelection!" },
    max: { __type: "FloatAggregateSelection!" },
    min: { __type: "FloatAggregateSelection!" },
    name: { __type: "StringAggregateSelection!" },
    type: { __type: "StringAggregateSelection!" },
  },
  StorageTemplateConnectWhere: { node: { __type: "StorageTemplateWhere!" } },
  StorageTemplateCreateInput: {
    max: { __type: "Float" },
    min: { __type: "Float" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  StorageTemplateOptions: {
    limit: { __type: "Int" },
    offset: { __type: "Int" },
    sort: { __type: "[StorageTemplateSort]" },
  },
  StorageTemplateSort: {
    id: { __type: "SortDirection" },
    max: { __type: "SortDirection" },
    min: { __type: "SortDirection" },
    name: { __type: "SortDirection" },
    type: { __type: "SortDirection" },
  },
  StorageTemplateUpdateInput: {
    max: { __type: "Float" },
    min: { __type: "Float" },
    name: { __type: "String" },
    type: { __type: "String" },
  },
  StorageTemplateWhere: {
    AND: { __type: "[StorageTemplateWhere!]" },
    OR: { __type: "[StorageTemplateWhere!]" },
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
    max: { __type: "Float" },
    max_GT: { __type: "Float" },
    max_GTE: { __type: "Float" },
    max_IN: { __type: "[Float]" },
    max_LT: { __type: "Float" },
    max_LTE: { __type: "Float" },
    max_NOT: { __type: "Float" },
    max_NOT_IN: { __type: "[Float]" },
    min: { __type: "Float" },
    min_GT: { __type: "Float" },
    min_GTE: { __type: "Float" },
    min_IN: { __type: "[Float]" },
    min_LT: { __type: "Float" },
    min_LTE: { __type: "Float" },
    min_NOT: { __type: "Float" },
    min_NOT_IN: { __type: "[Float]" },
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
  UpdateComputerTemplatesMutationResponse: {
    __typename: { __type: "String!" },
    computerTemplates: { __type: "[ComputerTemplate!]!" },
    info: { __type: "UpdateInfo!" },
  },
  UpdateComputersMutationResponse: {
    __typename: { __type: "String!" },
    computers: { __type: "[Computer!]!" },
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
  UpdateLocationGroupsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    locationGroups: { __type: "[LocationGroup!]!" },
  },
  UpdateLocationsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    locations: { __type: "[Location!]!" },
  },
  UpdateMachinePluginsMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    machinePlugins: { __type: "[MachinePlugin!]!" },
  },
  UpdateMachineTemplatesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    machineTemplates: { __type: "[MachineTemplate!]!" },
  },
  UpdateMachinesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    machines: { __type: "[Machine!]!" },
  },
  UpdatePeripheralTemplatesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    peripheralTemplates: { __type: "[PeripheralTemplate!]!" },
  },
  UpdateProvisionCodesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    provisionCodes: { __type: "[ProvisionCode!]!" },
  },
  UpdateScheduleTiersMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    scheduleTiers: { __type: "[ScheduleTier!]!" },
  },
  UpdateSchedulesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    schedules: { __type: "[Schedule!]!" },
  },
  UpdateScreenTemplatesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    screenTemplates: { __type: "[ScreenTemplate!]!" },
  },
  UpdateScreensMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    screens: { __type: "[Screen!]!" },
  },
  UpdateStorageTemplatesMutationResponse: {
    __typename: { __type: "String!" },
    info: { __type: "UpdateInfo!" },
    storageTemplates: { __type: "[StorageTemplate!]!" },
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
    createComputerTemplates: {
      __type: "CreateComputerTemplatesMutationResponse!",
      __args: { input: "[ComputerTemplateCreateInput!]!" },
    },
    createComputers: {
      __type: "CreateComputersMutationResponse!",
      __args: { input: "[ComputerCreateInput!]!" },
    },
    createLocationGroups: {
      __type: "CreateLocationGroupsMutationResponse!",
      __args: { input: "[LocationGroupCreateInput!]!" },
    },
    createLocations: {
      __type: "CreateLocationsMutationResponse!",
      __args: { input: "[LocationCreateInput!]!" },
    },
    createMachinePlugins: {
      __type: "CreateMachinePluginsMutationResponse!",
      __args: { input: "[MachinePluginCreateInput!]!" },
    },
    createMachineTemplates: {
      __type: "CreateMachineTemplatesMutationResponse!",
      __args: { input: "[MachineTemplateCreateInput!]!" },
    },
    createMachines: {
      __type: "CreateMachinesMutationResponse!",
      __args: { input: "[MachineCreateInput!]!" },
    },
    createPeripheralTemplates: {
      __type: "CreatePeripheralTemplatesMutationResponse!",
      __args: { input: "[PeripheralTemplateCreateInput!]!" },
    },
    createProvisionCodes: {
      __type: "CreateProvisionCodesMutationResponse!",
      __args: { input: "[ProvisionCodeCreateInput!]!" },
    },
    createScheduleTiers: {
      __type: "CreateScheduleTiersMutationResponse!",
      __args: { input: "[ScheduleTierCreateInput!]!" },
    },
    createSchedules: {
      __type: "CreateSchedulesMutationResponse!",
      __args: { input: "[ScheduleCreateInput!]!" },
    },
    createScreenTemplates: {
      __type: "CreateScreenTemplatesMutationResponse!",
      __args: { input: "[ScreenTemplateCreateInput!]!" },
    },
    createScreens: {
      __type: "CreateScreensMutationResponse!",
      __args: { input: "[ScreenCreateInput!]!" },
    },
    createStorageTemplates: {
      __type: "CreateStorageTemplatesMutationResponse!",
      __args: { input: "[StorageTemplateCreateInput!]!" },
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
    deleteComputerTemplates: {
      __type: "DeleteInfo!",
      __args: {
        delete: "ComputerTemplateDeleteInput",
        where: "ComputerTemplateWhere",
      },
    },
    deleteComputers: {
      __type: "DeleteInfo!",
      __args: { delete: "ComputerDeleteInput", where: "ComputerWhere" },
    },
    deleteLocationGroups: {
      __type: "DeleteInfo!",
      __args: {
        delete: "LocationGroupDeleteInput",
        where: "LocationGroupWhere",
      },
    },
    deleteLocations: {
      __type: "DeleteInfo!",
      __args: { delete: "LocationDeleteInput", where: "LocationWhere" },
    },
    deleteMachinePlugins: {
      __type: "DeleteInfo!",
      __args: { where: "MachinePluginWhere" },
    },
    deleteMachineTemplates: {
      __type: "DeleteInfo!",
      __args: {
        delete: "MachineTemplateDeleteInput",
        where: "MachineTemplateWhere",
      },
    },
    deleteMachines: {
      __type: "DeleteInfo!",
      __args: { delete: "MachineDeleteInput", where: "MachineWhere" },
    },
    deletePeripheralTemplates: {
      __type: "DeleteInfo!",
      __args: {
        delete: "PeripheralTemplateDeleteInput",
        where: "PeripheralTemplateWhere",
      },
    },
    deleteProvisionCodes: {
      __type: "DeleteInfo!",
      __args: {
        delete: "ProvisionCodeDeleteInput",
        where: "ProvisionCodeWhere",
      },
    },
    deleteScheduleTiers: {
      __type: "DeleteInfo!",
      __args: { delete: "ScheduleTierDeleteInput", where: "ScheduleTierWhere" },
    },
    deleteSchedules: {
      __type: "DeleteInfo!",
      __args: { delete: "ScheduleDeleteInput", where: "ScheduleWhere" },
    },
    deleteScreenTemplates: {
      __type: "DeleteInfo!",
      __args: {
        delete: "ScreenTemplateDeleteInput",
        where: "ScreenTemplateWhere",
      },
    },
    deleteScreens: { __type: "DeleteInfo!", __args: { where: "ScreenWhere" } },
    deleteStorageTemplates: {
      __type: "DeleteInfo!",
      __args: { where: "StorageTemplateWhere" },
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
    updateComputerTemplates: {
      __type: "UpdateComputerTemplatesMutationResponse!",
      __args: {
        connect: "ComputerTemplateConnectInput",
        create: "ComputerTemplateRelationInput",
        delete: "ComputerTemplateDeleteInput",
        disconnect: "ComputerTemplateDisconnectInput",
        update: "ComputerTemplateUpdateInput",
        where: "ComputerTemplateWhere",
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
    updateLocationGroups: {
      __type: "UpdateLocationGroupsMutationResponse!",
      __args: {
        connect: "LocationGroupConnectInput",
        create: "LocationGroupRelationInput",
        delete: "LocationGroupDeleteInput",
        disconnect: "LocationGroupDisconnectInput",
        update: "LocationGroupUpdateInput",
        where: "LocationGroupWhere",
      },
    },
    updateLocations: {
      __type: "UpdateLocationsMutationResponse!",
      __args: {
        connect: "LocationConnectInput",
        create: "LocationRelationInput",
        delete: "LocationDeleteInput",
        disconnect: "LocationDisconnectInput",
        update: "LocationUpdateInput",
        where: "LocationWhere",
      },
    },
    updateMachinePlugins: {
      __type: "UpdateMachinePluginsMutationResponse!",
      __args: {
        update: "MachinePluginUpdateInput",
        where: "MachinePluginWhere",
      },
    },
    updateMachineTemplates: {
      __type: "UpdateMachineTemplatesMutationResponse!",
      __args: {
        connect: "MachineTemplateConnectInput",
        create: "MachineTemplateRelationInput",
        delete: "MachineTemplateDeleteInput",
        disconnect: "MachineTemplateDisconnectInput",
        update: "MachineTemplateUpdateInput",
        where: "MachineTemplateWhere",
      },
    },
    updateMachines: {
      __type: "UpdateMachinesMutationResponse!",
      __args: {
        connect: "MachineConnectInput",
        create: "MachineRelationInput",
        delete: "MachineDeleteInput",
        disconnect: "MachineDisconnectInput",
        update: "MachineUpdateInput",
        where: "MachineWhere",
      },
    },
    updatePeripheralTemplates: {
      __type: "UpdatePeripheralTemplatesMutationResponse!",
      __args: {
        connect: "PeripheralTemplateConnectInput",
        create: "PeripheralTemplateRelationInput",
        delete: "PeripheralTemplateDeleteInput",
        disconnect: "PeripheralTemplateDisconnectInput",
        update: "PeripheralTemplateUpdateInput",
        where: "PeripheralTemplateWhere",
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
    updateScheduleTiers: {
      __type: "UpdateScheduleTiersMutationResponse!",
      __args: {
        connect: "ScheduleTierConnectInput",
        create: "ScheduleTierRelationInput",
        delete: "ScheduleTierDeleteInput",
        disconnect: "ScheduleTierDisconnectInput",
        update: "ScheduleTierUpdateInput",
        where: "ScheduleTierWhere",
      },
    },
    updateSchedules: {
      __type: "UpdateSchedulesMutationResponse!",
      __args: {
        connect: "ScheduleConnectInput",
        create: "ScheduleRelationInput",
        delete: "ScheduleDeleteInput",
        disconnect: "ScheduleDisconnectInput",
        update: "ScheduleUpdateInput",
        where: "ScheduleWhere",
      },
    },
    updateScreenTemplates: {
      __type: "UpdateScreenTemplatesMutationResponse!",
      __args: {
        connect: "ScreenTemplateConnectInput",
        create: "ScreenTemplateRelationInput",
        delete: "ScreenTemplateDeleteInput",
        disconnect: "ScreenTemplateDisconnectInput",
        update: "ScreenTemplateUpdateInput",
        where: "ScreenTemplateWhere",
      },
    },
    updateScreens: {
      __type: "UpdateScreensMutationResponse!",
      __args: { update: "ScreenUpdateInput", where: "ScreenWhere" },
    },
    updateStorageTemplates: {
      __type: "UpdateStorageTemplatesMutationResponse!",
      __args: {
        update: "StorageTemplateUpdateInput",
        where: "StorageTemplateWhere",
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
    computerTemplates: {
      __type: "[ComputerTemplate!]!",
      __args: {
        options: "ComputerTemplateOptions",
        where: "ComputerTemplateWhere",
      },
    },
    computerTemplatesAggregate: {
      __type: "ComputerTemplateAggregateSelection!",
      __args: { where: "ComputerTemplateWhere" },
    },
    computerTemplatesCount: {
      __type: "Int!",
      __args: { where: "ComputerTemplateWhere" },
    },
    computers: {
      __type: "[Computer!]!",
      __args: { options: "ComputerOptions", where: "ComputerWhere" },
    },
    computersAggregate: {
      __type: "ComputerAggregateSelection!",
      __args: { where: "ComputerWhere" },
    },
    computersCount: { __type: "Int!", __args: { where: "ComputerWhere" } },
    locationGroups: {
      __type: "[LocationGroup!]!",
      __args: { options: "LocationGroupOptions", where: "LocationGroupWhere" },
    },
    locationGroupsAggregate: {
      __type: "LocationGroupAggregateSelection!",
      __args: { where: "LocationGroupWhere" },
    },
    locationGroupsCount: {
      __type: "Int!",
      __args: { where: "LocationGroupWhere" },
    },
    locations: {
      __type: "[Location!]!",
      __args: { options: "LocationOptions", where: "LocationWhere" },
    },
    locationsAggregate: {
      __type: "LocationAggregateSelection!",
      __args: { where: "LocationWhere" },
    },
    locationsCount: { __type: "Int!", __args: { where: "LocationWhere" } },
    machinePlugins: {
      __type: "[MachinePlugin!]!",
      __args: { options: "MachinePluginOptions", where: "MachinePluginWhere" },
    },
    machinePluginsAggregate: {
      __type: "MachinePluginAggregateSelection!",
      __args: { where: "MachinePluginWhere" },
    },
    machinePluginsCount: {
      __type: "Int!",
      __args: { where: "MachinePluginWhere" },
    },
    machineTemplates: {
      __type: "[MachineTemplate!]!",
      __args: {
        options: "MachineTemplateOptions",
        where: "MachineTemplateWhere",
      },
    },
    machineTemplatesAggregate: {
      __type: "MachineTemplateAggregateSelection!",
      __args: { where: "MachineTemplateWhere" },
    },
    machineTemplatesCount: {
      __type: "Int!",
      __args: { where: "MachineTemplateWhere" },
    },
    machines: {
      __type: "[Machine!]!",
      __args: { options: "MachineOptions", where: "MachineWhere" },
    },
    machinesAggregate: {
      __type: "MachineAggregateSelection!",
      __args: { where: "MachineWhere" },
    },
    machinesCount: { __type: "Int!", __args: { where: "MachineWhere" } },
    peripheralTemplates: {
      __type: "[PeripheralTemplate!]!",
      __args: {
        options: "PeripheralTemplateOptions",
        where: "PeripheralTemplateWhere",
      },
    },
    peripheralTemplatesAggregate: {
      __type: "PeripheralTemplateAggregateSelection!",
      __args: { where: "PeripheralTemplateWhere" },
    },
    peripheralTemplatesCount: {
      __type: "Int!",
      __args: { where: "PeripheralTemplateWhere" },
    },
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
    scheduleTiers: {
      __type: "[ScheduleTier!]!",
      __args: { options: "ScheduleTierOptions", where: "ScheduleTierWhere" },
    },
    scheduleTiersAggregate: {
      __type: "ScheduleTierAggregateSelection!",
      __args: { where: "ScheduleTierWhere" },
    },
    scheduleTiersCount: {
      __type: "Int!",
      __args: { where: "ScheduleTierWhere" },
    },
    schedules: {
      __type: "[Schedule!]!",
      __args: { options: "ScheduleOptions", where: "ScheduleWhere" },
    },
    schedulesAggregate: {
      __type: "ScheduleAggregateSelection!",
      __args: { where: "ScheduleWhere" },
    },
    schedulesCount: { __type: "Int!", __args: { where: "ScheduleWhere" } },
    screenTemplates: {
      __type: "[ScreenTemplate!]!",
      __args: {
        options: "ScreenTemplateOptions",
        where: "ScreenTemplateWhere",
      },
    },
    screenTemplatesAggregate: {
      __type: "ScreenTemplateAggregateSelection!",
      __args: { where: "ScreenTemplateWhere" },
    },
    screenTemplatesCount: {
      __type: "Int!",
      __args: { where: "ScreenTemplateWhere" },
    },
    screens: {
      __type: "[Screen!]!",
      __args: { options: "ScreenOptions", where: "ScreenWhere" },
    },
    screensAggregate: {
      __type: "ScreenAggregateSelection!",
      __args: { where: "ScreenWhere" },
    },
    screensCount: { __type: "Int!", __args: { where: "ScreenWhere" } },
    storageTemplates: {
      __type: "[StorageTemplate!]!",
      __args: {
        options: "StorageTemplateOptions",
        where: "StorageTemplateWhere",
      },
    },
    storageTemplatesAggregate: {
      __type: "StorageTemplateAggregateSelection!",
      __args: { where: "StorageTemplateWhere" },
    },
    storageTemplatesCount: {
      __type: "Int!",
      __args: { where: "StorageTemplateWhere" },
    },
  },
  subscription: {},
  [SchemaUnionsKey]: {
    ScheduleItemProperties: ["ScheduleCampaignsRelationship"],
  },
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

export interface Computer {
  __typename?: "Computer";
  agentVersion?: Maybe<ScalarsEnums["String"]>;
  cpu?: Maybe<ScalarsEnums["Float"]>;
  hostname?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  memory?: Maybe<ScalarsEnums["Float"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  os?: Maybe<ScalarsEnums["String"]>;
  template: (args?: {
    options?: Maybe<ComputerTemplateOptions>;
    where?: Maybe<ComputerTemplateWhere>;
  }) => Maybe<ComputerTemplate>;
  templateAggregate: (args?: {
    where?: Maybe<ComputerTemplateWhere>;
  }) => Maybe<ComputerComputerTemplateTemplateAggregationSelection>;
  templateConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ComputerTemplateConnectionSort>>;
    where?: Maybe<ComputerTemplateConnectionWhere>;
  }) => ComputerTemplateConnection;
}

export interface ComputerAggregateSelection {
  __typename?: "ComputerAggregateSelection";
  agentVersion: StringAggregateSelection;
  count: ScalarsEnums["Int"];
  cpu: FloatAggregateSelection;
  hostname: StringAggregateSelection;
  id: IDAggregateSelection;
  memory: FloatAggregateSelection;
  name: StringAggregateSelection;
  os: StringAggregateSelection;
}

export interface ComputerComputerTemplateTemplateAggregationSelection {
  __typename?: "ComputerComputerTemplateTemplateAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ComputerComputerTemplateTemplateNodeAggregateSelection>;
}

export interface ComputerComputerTemplateTemplateNodeAggregateSelection {
  __typename?: "ComputerComputerTemplateTemplateNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface ComputerTemplate {
  __typename?: "ComputerTemplate";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  peripherals: (args?: {
    options?: Maybe<PeripheralTemplateOptions>;
    where?: Maybe<PeripheralTemplateWhere>;
  }) => Maybe<Array<Maybe<PeripheralTemplate>>>;
  peripheralsAggregate: (args?: {
    where?: Maybe<PeripheralTemplateWhere>;
  }) => Maybe<ComputerTemplatePeripheralTemplatePeripheralsAggregationSelection>;
  peripheralsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ComputerTemplatePeripheralsConnectionSort>>;
    where?: Maybe<ComputerTemplatePeripheralsConnectionWhere>;
  }) => ComputerTemplatePeripheralsConnection;
  plugins: (args?: {
    options?: Maybe<MachinePluginOptions>;
    where?: Maybe<MachinePluginWhere>;
  }) => Maybe<Array<Maybe<MachinePlugin>>>;
  pluginsAggregate: (args?: {
    where?: Maybe<MachinePluginWhere>;
  }) => Maybe<ComputerTemplateMachinePluginPluginsAggregationSelection>;
  pluginsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ComputerTemplatePluginsConnectionSort>>;
    where?: Maybe<ComputerTemplatePluginsConnectionWhere>;
  }) => ComputerTemplatePluginsConnection;
  screens: (args?: {
    options?: Maybe<ScreenTemplateOptions>;
    where?: Maybe<ScreenTemplateWhere>;
  }) => Maybe<Array<Maybe<ScreenTemplate>>>;
  screensAggregate: (args?: {
    where?: Maybe<ScreenTemplateWhere>;
  }) => Maybe<ComputerTemplateScreenTemplateScreensAggregationSelection>;
  screensConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ComputerTemplateScreensConnectionSort>>;
    where?: Maybe<ComputerTemplateScreensConnectionWhere>;
  }) => ComputerTemplateScreensConnection;
  storage: (args?: {
    options?: Maybe<StorageTemplateOptions>;
    where?: Maybe<StorageTemplateWhere>;
  }) => Maybe<Array<Maybe<StorageTemplate>>>;
  storageAggregate: (args?: {
    where?: Maybe<StorageTemplateWhere>;
  }) => Maybe<ComputerTemplateStorageTemplateStorageAggregationSelection>;
  storageConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ComputerTemplateStorageConnectionSort>>;
    where?: Maybe<ComputerTemplateStorageConnectionWhere>;
  }) => ComputerTemplateStorageConnection;
}

export interface ComputerTemplateAggregateSelection {
  __typename?: "ComputerTemplateAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface ComputerTemplateConnection {
  __typename?: "ComputerTemplateConnection";
  edges: Array<ComputerTemplateRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ComputerTemplateMachinePluginPluginsAggregationSelection {
  __typename?: "ComputerTemplateMachinePluginPluginsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ComputerTemplateMachinePluginPluginsNodeAggregateSelection>;
}

export interface ComputerTemplateMachinePluginPluginsNodeAggregateSelection {
  __typename?: "ComputerTemplateMachinePluginPluginsNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface ComputerTemplatePeripheralTemplatePeripheralsAggregationSelection {
  __typename?: "ComputerTemplatePeripheralTemplatePeripheralsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ComputerTemplatePeripheralTemplatePeripheralsNodeAggregateSelection>;
}

export interface ComputerTemplatePeripheralTemplatePeripheralsNodeAggregateSelection {
  __typename?: "ComputerTemplatePeripheralTemplatePeripheralsNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface ComputerTemplatePeripheralsConnection {
  __typename?: "ComputerTemplatePeripheralsConnection";
  edges: Array<ComputerTemplatePeripheralsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ComputerTemplatePeripheralsRelationship {
  __typename?: "ComputerTemplatePeripheralsRelationship";
  cursor: ScalarsEnums["String"];
  node: PeripheralTemplate;
}

export interface ComputerTemplatePluginsConnection {
  __typename?: "ComputerTemplatePluginsConnection";
  edges: Array<ComputerTemplatePluginsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ComputerTemplatePluginsRelationship {
  __typename?: "ComputerTemplatePluginsRelationship";
  cursor: ScalarsEnums["String"];
  node: MachinePlugin;
}

export interface ComputerTemplateRelationship {
  __typename?: "ComputerTemplateRelationship";
  cursor: ScalarsEnums["String"];
  node: ComputerTemplate;
}

export interface ComputerTemplateScreenTemplateScreensAggregationSelection {
  __typename?: "ComputerTemplateScreenTemplateScreensAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ComputerTemplateScreenTemplateScreensNodeAggregateSelection>;
}

export interface ComputerTemplateScreenTemplateScreensNodeAggregateSelection {
  __typename?: "ComputerTemplateScreenTemplateScreensNodeAggregateSelection";
  height: IntAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  rotation: IntAggregateSelection;
  width: IntAggregateSelection;
}

export interface ComputerTemplateScreensConnection {
  __typename?: "ComputerTemplateScreensConnection";
  edges: Array<ComputerTemplateScreensRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ComputerTemplateScreensRelationship {
  __typename?: "ComputerTemplateScreensRelationship";
  cursor: ScalarsEnums["String"];
  node: ScreenTemplate;
}

export interface ComputerTemplateStorageConnection {
  __typename?: "ComputerTemplateStorageConnection";
  edges: Array<ComputerTemplateStorageRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ComputerTemplateStorageRelationship {
  __typename?: "ComputerTemplateStorageRelationship";
  cursor: ScalarsEnums["String"];
  node: StorageTemplate;
}

export interface ComputerTemplateStorageTemplateStorageAggregationSelection {
  __typename?: "ComputerTemplateStorageTemplateStorageAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ComputerTemplateStorageTemplateStorageNodeAggregateSelection>;
}

export interface ComputerTemplateStorageTemplateStorageNodeAggregateSelection {
  __typename?: "ComputerTemplateStorageTemplateStorageNodeAggregateSelection";
  id: IDAggregateSelection;
  max: FloatAggregateSelection;
  min: FloatAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
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

export interface CreateComputerTemplatesMutationResponse {
  __typename?: "CreateComputerTemplatesMutationResponse";
  computerTemplates: Array<ComputerTemplate>;
  info: CreateInfo;
}

export interface CreateComputersMutationResponse {
  __typename?: "CreateComputersMutationResponse";
  computers: Array<Computer>;
  info: CreateInfo;
}

export interface CreateInfo {
  __typename?: "CreateInfo";
  bookmark?: Maybe<ScalarsEnums["String"]>;
  nodesCreated: ScalarsEnums["Int"];
  relationshipsCreated: ScalarsEnums["Int"];
}

export interface CreateLocationGroupsMutationResponse {
  __typename?: "CreateLocationGroupsMutationResponse";
  info: CreateInfo;
  locationGroups: Array<LocationGroup>;
}

export interface CreateLocationsMutationResponse {
  __typename?: "CreateLocationsMutationResponse";
  info: CreateInfo;
  locations: Array<Location>;
}

export interface CreateMachinePluginsMutationResponse {
  __typename?: "CreateMachinePluginsMutationResponse";
  info: CreateInfo;
  machinePlugins: Array<MachinePlugin>;
}

export interface CreateMachineTemplatesMutationResponse {
  __typename?: "CreateMachineTemplatesMutationResponse";
  info: CreateInfo;
  machineTemplates: Array<MachineTemplate>;
}

export interface CreateMachinesMutationResponse {
  __typename?: "CreateMachinesMutationResponse";
  info: CreateInfo;
  machines: Array<Machine>;
}

export interface CreatePeripheralTemplatesMutationResponse {
  __typename?: "CreatePeripheralTemplatesMutationResponse";
  info: CreateInfo;
  peripheralTemplates: Array<PeripheralTemplate>;
}

export interface CreateProvisionCodesMutationResponse {
  __typename?: "CreateProvisionCodesMutationResponse";
  info: CreateInfo;
  provisionCodes: Array<ProvisionCode>;
}

export interface CreateScheduleTiersMutationResponse {
  __typename?: "CreateScheduleTiersMutationResponse";
  info: CreateInfo;
  scheduleTiers: Array<ScheduleTier>;
}

export interface CreateSchedulesMutationResponse {
  __typename?: "CreateSchedulesMutationResponse";
  info: CreateInfo;
  schedules: Array<Schedule>;
}

export interface CreateScreenTemplatesMutationResponse {
  __typename?: "CreateScreenTemplatesMutationResponse";
  info: CreateInfo;
  screenTemplates: Array<ScreenTemplate>;
}

export interface CreateScreensMutationResponse {
  __typename?: "CreateScreensMutationResponse";
  info: CreateInfo;
  screens: Array<Screen>;
}

export interface CreateStorageTemplatesMutationResponse {
  __typename?: "CreateStorageTemplatesMutationResponse";
  info: CreateInfo;
  storageTemplates: Array<StorageTemplate>;
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

export interface IntAggregateSelection {
  __typename?: "IntAggregateSelection";
  average: ScalarsEnums["Float"];
  max: ScalarsEnums["Int"];
  min: ScalarsEnums["Int"];
}

export interface Location {
  __typename?: "Location";
  elevation?: Maybe<ScalarsEnums["Float"]>;
  groups: (args?: {
    options?: Maybe<LocationGroupOptions>;
    where?: Maybe<LocationGroupWhere>;
  }) => Maybe<Array<Maybe<LocationGroup>>>;
  groupsAggregate: (args?: {
    where?: Maybe<LocationGroupWhere>;
  }) => Maybe<LocationLocationGroupGroupsAggregationSelection>;
  groupsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<LocationGroupsConnectionSort>>;
    where?: Maybe<LocationGroupsConnectionWhere>;
  }) => LocationGroupsConnection;
  id: ScalarsEnums["ID"];
  lat?: Maybe<ScalarsEnums["Float"]>;
  lng?: Maybe<ScalarsEnums["Float"]>;
  machines: (args?: {
    options?: Maybe<MachineOptions>;
    where?: Maybe<MachineWhere>;
  }) => Maybe<Array<Maybe<Machine>>>;
  machinesAggregate: (args?: {
    where?: Maybe<MachineWhere>;
  }) => Maybe<LocationMachineMachinesAggregationSelection>;
  machinesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<LocationMachinesConnectionSort>>;
    where?: Maybe<LocationMachinesConnectionWhere>;
  }) => LocationMachinesConnection;
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface LocationAggregateSelection {
  __typename?: "LocationAggregateSelection";
  count: ScalarsEnums["Int"];
  elevation: FloatAggregateSelection;
  id: IDAggregateSelection;
  lat: FloatAggregateSelection;
  lng: FloatAggregateSelection;
  name: StringAggregateSelection;
}

export interface LocationGroup {
  __typename?: "LocationGroup";
  id: ScalarsEnums["ID"];
  locations: (args?: {
    options?: Maybe<LocationOptions>;
    where?: Maybe<LocationWhere>;
  }) => Maybe<Array<Maybe<Location>>>;
  locationsAggregate: (args?: {
    where?: Maybe<LocationWhere>;
  }) => Maybe<LocationGroupLocationLocationsAggregationSelection>;
  locationsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<LocationGroupLocationsConnectionSort>>;
    where?: Maybe<LocationGroupLocationsConnectionWhere>;
  }) => LocationGroupLocationsConnection;
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface LocationGroupAggregateSelection {
  __typename?: "LocationGroupAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface LocationGroupLocationLocationsAggregationSelection {
  __typename?: "LocationGroupLocationLocationsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<LocationGroupLocationLocationsNodeAggregateSelection>;
}

export interface LocationGroupLocationLocationsNodeAggregateSelection {
  __typename?: "LocationGroupLocationLocationsNodeAggregateSelection";
  elevation: FloatAggregateSelection;
  id: IDAggregateSelection;
  lat: FloatAggregateSelection;
  lng: FloatAggregateSelection;
  name: StringAggregateSelection;
}

export interface LocationGroupLocationsConnection {
  __typename?: "LocationGroupLocationsConnection";
  edges: Array<LocationGroupLocationsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface LocationGroupLocationsRelationship {
  __typename?: "LocationGroupLocationsRelationship";
  cursor: ScalarsEnums["String"];
  node: Location;
}

export interface LocationGroupsConnection {
  __typename?: "LocationGroupsConnection";
  edges: Array<LocationGroupsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface LocationGroupsRelationship {
  __typename?: "LocationGroupsRelationship";
  cursor: ScalarsEnums["String"];
  node: LocationGroup;
}

export interface LocationLocationGroupGroupsAggregationSelection {
  __typename?: "LocationLocationGroupGroupsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<LocationLocationGroupGroupsNodeAggregateSelection>;
}

export interface LocationLocationGroupGroupsNodeAggregateSelection {
  __typename?: "LocationLocationGroupGroupsNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface LocationMachineMachinesAggregationSelection {
  __typename?: "LocationMachineMachinesAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<LocationMachineMachinesNodeAggregateSelection>;
}

export interface LocationMachineMachinesNodeAggregateSelection {
  __typename?: "LocationMachineMachinesNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  networkName: StringAggregateSelection;
  provisionedAt: DateTimeAggregateSelection;
}

export interface LocationMachinesConnection {
  __typename?: "LocationMachinesConnection";
  edges: Array<LocationMachinesRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface LocationMachinesRelationship {
  __typename?: "LocationMachinesRelationship";
  cursor: ScalarsEnums["String"];
  node: Machine;
}

export interface Machine {
  __typename?: "Machine";
  computers: (args?: {
    options?: Maybe<ComputerOptions>;
    where?: Maybe<ComputerWhere>;
  }) => Maybe<Computer>;
  computersAggregate: (args?: {
    where?: Maybe<ComputerWhere>;
  }) => Maybe<MachineComputerComputersAggregationSelection>;
  computersConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<MachineComputersConnectionSort>>;
    where?: Maybe<MachineComputersConnectionWhere>;
  }) => MachineComputersConnection;
  id: ScalarsEnums["ID"];
  location: (args?: {
    options?: Maybe<LocationOptions>;
    where?: Maybe<LocationWhere>;
  }) => Maybe<Location>;
  locationAggregate: (args?: {
    where?: Maybe<LocationWhere>;
  }) => Maybe<MachineLocationLocationAggregationSelection>;
  locationConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<MachineLocationConnectionSort>>;
    where?: Maybe<MachineLocationConnectionWhere>;
  }) => MachineLocationConnection;
  name?: Maybe<ScalarsEnums["String"]>;
  networkName?: Maybe<ScalarsEnums["String"]>;
  provisioned?: Maybe<ScalarsEnums["Boolean"]>;
  provisionedAt?: Maybe<ScalarsEnums["DateTime"]>;
  template: (args?: {
    options?: Maybe<MachineTemplateOptions>;
    where?: Maybe<MachineTemplateWhere>;
  }) => Maybe<MachineTemplate>;
  templateAggregate: (args?: {
    where?: Maybe<MachineTemplateWhere>;
  }) => Maybe<MachineMachineTemplateTemplateAggregationSelection>;
  templateConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<MachineTemplateConnectionSort>>;
    where?: Maybe<MachineTemplateConnectionWhere>;
  }) => MachineTemplateConnection;
}

export interface MachineAggregateSelection {
  __typename?: "MachineAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  networkName: StringAggregateSelection;
  provisionedAt: DateTimeAggregateSelection;
}

export interface MachineComputerComputersAggregationSelection {
  __typename?: "MachineComputerComputersAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<MachineComputerComputersNodeAggregateSelection>;
}

export interface MachineComputerComputersNodeAggregateSelection {
  __typename?: "MachineComputerComputersNodeAggregateSelection";
  agentVersion: StringAggregateSelection;
  cpu: FloatAggregateSelection;
  hostname: StringAggregateSelection;
  id: IDAggregateSelection;
  memory: FloatAggregateSelection;
  name: StringAggregateSelection;
  os: StringAggregateSelection;
}

export interface MachineComputersConnection {
  __typename?: "MachineComputersConnection";
  edges: Array<MachineComputersRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface MachineComputersRelationship {
  __typename?: "MachineComputersRelationship";
  cursor: ScalarsEnums["String"];
  node: Computer;
}

export interface MachineLocationConnection {
  __typename?: "MachineLocationConnection";
  edges: Array<MachineLocationRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface MachineLocationLocationAggregationSelection {
  __typename?: "MachineLocationLocationAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<MachineLocationLocationNodeAggregateSelection>;
}

export interface MachineLocationLocationNodeAggregateSelection {
  __typename?: "MachineLocationLocationNodeAggregateSelection";
  elevation: FloatAggregateSelection;
  id: IDAggregateSelection;
  lat: FloatAggregateSelection;
  lng: FloatAggregateSelection;
  name: StringAggregateSelection;
}

export interface MachineLocationRelationship {
  __typename?: "MachineLocationRelationship";
  cursor: ScalarsEnums["String"];
  node: Location;
}

export interface MachineMachineTemplateTemplateAggregationSelection {
  __typename?: "MachineMachineTemplateTemplateAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<MachineMachineTemplateTemplateNodeAggregateSelection>;
}

export interface MachineMachineTemplateTemplateNodeAggregateSelection {
  __typename?: "MachineMachineTemplateTemplateNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface MachinePlugin {
  __typename?: "MachinePlugin";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface MachinePluginAggregateSelection {
  __typename?: "MachinePluginAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface MachineTemplate {
  __typename?: "MachineTemplate";
  computers: (args?: {
    options?: Maybe<ComputerTemplateOptions>;
    where?: Maybe<ComputerTemplateWhere>;
  }) => Maybe<Array<Maybe<ComputerTemplate>>>;
  computersAggregate: (args?: {
    where?: Maybe<ComputerTemplateWhere>;
  }) => Maybe<MachineTemplateComputerTemplateComputersAggregationSelection>;
  computersConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<MachineTemplateComputersConnectionSort>>;
    where?: Maybe<MachineTemplateComputersConnectionWhere>;
  }) => MachineTemplateComputersConnection;
  displays: (args?: {
    options?: Maybe<ScreenTemplateOptions>;
    where?: Maybe<ScreenTemplateWhere>;
  }) => Maybe<Array<Maybe<ScreenTemplate>>>;
  displaysAggregate: (args?: {
    where?: Maybe<ScreenTemplateWhere>;
  }) => Maybe<MachineTemplateScreenTemplateDisplaysAggregationSelection>;
  displaysConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<MachineTemplateDisplaysConnectionSort>>;
    where?: Maybe<MachineTemplateDisplaysConnectionWhere>;
  }) => MachineTemplateDisplaysConnection;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  peripherals: (args?: {
    options?: Maybe<PeripheralTemplateOptions>;
    where?: Maybe<PeripheralTemplateWhere>;
  }) => Maybe<Array<Maybe<PeripheralTemplate>>>;
  peripheralsAggregate: (args?: {
    where?: Maybe<PeripheralTemplateWhere>;
  }) => Maybe<MachineTemplatePeripheralTemplatePeripheralsAggregationSelection>;
  peripheralsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<MachineTemplatePeripheralsConnectionSort>>;
    where?: Maybe<MachineTemplatePeripheralsConnectionWhere>;
  }) => MachineTemplatePeripheralsConnection;
  plugins: (args?: {
    options?: Maybe<MachinePluginOptions>;
    where?: Maybe<MachinePluginWhere>;
  }) => Maybe<Array<Maybe<MachinePlugin>>>;
  pluginsAggregate: (args?: {
    where?: Maybe<MachinePluginWhere>;
  }) => Maybe<MachineTemplateMachinePluginPluginsAggregationSelection>;
  pluginsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<MachineTemplatePluginsConnectionSort>>;
    where?: Maybe<MachineTemplatePluginsConnectionWhere>;
  }) => MachineTemplatePluginsConnection;
}

export interface MachineTemplateAggregateSelection {
  __typename?: "MachineTemplateAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface MachineTemplateComputerTemplateComputersAggregationSelection {
  __typename?: "MachineTemplateComputerTemplateComputersAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<MachineTemplateComputerTemplateComputersNodeAggregateSelection>;
}

export interface MachineTemplateComputerTemplateComputersNodeAggregateSelection {
  __typename?: "MachineTemplateComputerTemplateComputersNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface MachineTemplateComputersConnection {
  __typename?: "MachineTemplateComputersConnection";
  edges: Array<MachineTemplateComputersRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface MachineTemplateComputersRelationship {
  __typename?: "MachineTemplateComputersRelationship";
  cursor: ScalarsEnums["String"];
  node: ComputerTemplate;
}

export interface MachineTemplateConnection {
  __typename?: "MachineTemplateConnection";
  edges: Array<MachineTemplateRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface MachineTemplateDisplaysConnection {
  __typename?: "MachineTemplateDisplaysConnection";
  edges: Array<MachineTemplateDisplaysRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface MachineTemplateDisplaysRelationship {
  __typename?: "MachineTemplateDisplaysRelationship";
  cursor: ScalarsEnums["String"];
  node: ScreenTemplate;
}

export interface MachineTemplateMachinePluginPluginsAggregationSelection {
  __typename?: "MachineTemplateMachinePluginPluginsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<MachineTemplateMachinePluginPluginsNodeAggregateSelection>;
}

export interface MachineTemplateMachinePluginPluginsNodeAggregateSelection {
  __typename?: "MachineTemplateMachinePluginPluginsNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface MachineTemplatePeripheralTemplatePeripheralsAggregationSelection {
  __typename?: "MachineTemplatePeripheralTemplatePeripheralsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<MachineTemplatePeripheralTemplatePeripheralsNodeAggregateSelection>;
}

export interface MachineTemplatePeripheralTemplatePeripheralsNodeAggregateSelection {
  __typename?: "MachineTemplatePeripheralTemplatePeripheralsNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface MachineTemplatePeripheralsConnection {
  __typename?: "MachineTemplatePeripheralsConnection";
  edges: Array<MachineTemplatePeripheralsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface MachineTemplatePeripheralsRelationship {
  __typename?: "MachineTemplatePeripheralsRelationship";
  cursor: ScalarsEnums["String"];
  node: PeripheralTemplate;
}

export interface MachineTemplatePluginsConnection {
  __typename?: "MachineTemplatePluginsConnection";
  edges: Array<MachineTemplatePluginsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface MachineTemplatePluginsRelationship {
  __typename?: "MachineTemplatePluginsRelationship";
  cursor: ScalarsEnums["String"];
  node: MachinePlugin;
}

export interface MachineTemplateRelationship {
  __typename?: "MachineTemplateRelationship";
  cursor: ScalarsEnums["String"];
  node: MachineTemplate;
}

export interface MachineTemplateScreenTemplateDisplaysAggregationSelection {
  __typename?: "MachineTemplateScreenTemplateDisplaysAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<MachineTemplateScreenTemplateDisplaysNodeAggregateSelection>;
}

export interface MachineTemplateScreenTemplateDisplaysNodeAggregateSelection {
  __typename?: "MachineTemplateScreenTemplateDisplaysNodeAggregateSelection";
  height: IntAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  rotation: IntAggregateSelection;
  width: IntAggregateSelection;
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

export interface PeripheralTemplate {
  __typename?: "PeripheralTemplate";
  computer: (args?: {
    options?: Maybe<ComputerTemplateOptions>;
    where?: Maybe<ComputerTemplateWhere>;
  }) => Maybe<ComputerTemplate>;
  computerAggregate: (args?: {
    where?: Maybe<ComputerTemplateWhere>;
  }) => Maybe<PeripheralTemplateComputerTemplateComputerAggregationSelection>;
  computerConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<PeripheralTemplateComputerConnectionSort>>;
    where?: Maybe<PeripheralTemplateComputerConnectionWhere>;
  }) => PeripheralTemplateComputerConnection;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  private?: Maybe<ScalarsEnums["Boolean"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface PeripheralTemplateAggregateSelection {
  __typename?: "PeripheralTemplateAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
}

export interface PeripheralTemplateComputerConnection {
  __typename?: "PeripheralTemplateComputerConnection";
  edges: Array<PeripheralTemplateComputerRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface PeripheralTemplateComputerRelationship {
  __typename?: "PeripheralTemplateComputerRelationship";
  cursor: ScalarsEnums["String"];
  node: ComputerTemplate;
}

export interface PeripheralTemplateComputerTemplateComputerAggregationSelection {
  __typename?: "PeripheralTemplateComputerTemplateComputerAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<PeripheralTemplateComputerTemplateComputerNodeAggregateSelection>;
}

export interface PeripheralTemplateComputerTemplateComputerNodeAggregateSelection {
  __typename?: "PeripheralTemplateComputerTemplateComputerNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface ProvisionCode {
  __typename?: "ProvisionCode";
  createdAt?: Maybe<ScalarsEnums["DateTime"]>;
  display: (args?: {
    options?: Maybe<MachineOptions>;
    where?: Maybe<MachineWhere>;
  }) => Maybe<Machine>;
  displayAggregate: (args?: {
    where?: Maybe<MachineWhere>;
  }) => Maybe<ProvisionCodeMachineDisplayAggregationSelection>;
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

export interface ProvisionCodeDisplayRelationship {
  __typename?: "ProvisionCodeDisplayRelationship";
  cursor: ScalarsEnums["String"];
  node: Machine;
}

export interface ProvisionCodeMachineDisplayAggregationSelection {
  __typename?: "ProvisionCodeMachineDisplayAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ProvisionCodeMachineDisplayNodeAggregateSelection>;
}

export interface ProvisionCodeMachineDisplayNodeAggregateSelection {
  __typename?: "ProvisionCodeMachineDisplayNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  networkName: StringAggregateSelection;
  provisionedAt: DateTimeAggregateSelection;
}

export interface Schedule {
  __typename?: "Schedule";
  campaigns: (args?: {
    options?: Maybe<CampaignOptions>;
    where?: Maybe<CampaignWhere>;
  }) => Maybe<Array<Maybe<Campaign>>>;
  campaignsAggregate: (args?: {
    where?: Maybe<CampaignWhere>;
  }) => Maybe<ScheduleCampaignCampaignsAggregationSelection>;
  campaignsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ScheduleCampaignsConnectionSort>>;
    where?: Maybe<ScheduleCampaignsConnectionWhere>;
  }) => ScheduleCampaignsConnection;
  endDate?: Maybe<ScalarsEnums["DateTime"]>;
  id: ScalarsEnums["ID"];
  locations: (args?: {
    options?: Maybe<LocationOptions>;
    where?: Maybe<LocationWhere>;
  }) => Maybe<Array<Maybe<Location>>>;
  locationsAggregate: (args?: {
    where?: Maybe<LocationWhere>;
  }) => Maybe<ScheduleLocationLocationsAggregationSelection>;
  locationsConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ScheduleLocationsConnectionSort>>;
    where?: Maybe<ScheduleLocationsConnectionWhere>;
  }) => ScheduleLocationsConnection;
  name?: Maybe<ScalarsEnums["String"]>;
  screens: (args?: {
    options?: Maybe<ScreenTemplateOptions>;
    where?: Maybe<ScreenTemplateWhere>;
  }) => Maybe<Array<Maybe<ScreenTemplate>>>;
  screensAggregate: (args?: {
    where?: Maybe<ScreenTemplateWhere>;
  }) => Maybe<ScheduleScreenTemplateScreensAggregationSelection>;
  screensConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ScheduleScreensConnectionSort>>;
    where?: Maybe<ScheduleScreensConnectionWhere>;
  }) => ScheduleScreensConnection;
  startDate?: Maybe<ScalarsEnums["DateTime"]>;
  tiers: (args?: {
    options?: Maybe<ScheduleTierOptions>;
    where?: Maybe<ScheduleTierWhere>;
  }) => Maybe<Array<Maybe<ScheduleTier>>>;
  tiersAggregate: (args?: {
    where?: Maybe<ScheduleTierWhere>;
  }) => Maybe<ScheduleScheduleTierTiersAggregationSelection>;
  tiersConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ScheduleTiersConnectionSort>>;
    where?: Maybe<ScheduleTiersConnectionWhere>;
  }) => ScheduleTiersConnection;
}

export interface ScheduleAggregateSelection {
  __typename?: "ScheduleAggregateSelection";
  count: ScalarsEnums["Int"];
  endDate: DateTimeAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  startDate: DateTimeAggregateSelection;
}

export interface ScheduleCampaignCampaignsAggregationSelection {
  __typename?: "ScheduleCampaignCampaignsAggregationSelection";
  count: ScalarsEnums["Int"];
  edge?: Maybe<ScheduleCampaignCampaignsEdgeAggregateSelection>;
  node?: Maybe<ScheduleCampaignCampaignsNodeAggregateSelection>;
}

export interface ScheduleCampaignCampaignsEdgeAggregateSelection {
  __typename?: "ScheduleCampaignCampaignsEdgeAggregateSelection";
  endDate: DateTimeAggregateSelection;
  screen: StringAggregateSelection;
  startDate: DateTimeAggregateSelection;
  tier: StringAggregateSelection;
}

export interface ScheduleCampaignCampaignsNodeAggregateSelection {
  __typename?: "ScheduleCampaignCampaignsNodeAggregateSelection";
  assetFolder: StringAggregateSelection;
  customer: StringAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface ScheduleCampaignsConnection {
  __typename?: "ScheduleCampaignsConnection";
  edges: Array<ScheduleCampaignsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ScheduleCampaignsRelationship {
  __typename?: "ScheduleCampaignsRelationship";
  cursor: ScalarsEnums["String"];
  endDate?: Maybe<ScalarsEnums["DateTime"]>;
  node: Campaign;
  screen?: Maybe<ScalarsEnums["String"]>;
  startDate?: Maybe<ScalarsEnums["DateTime"]>;
  tier?: Maybe<ScalarsEnums["String"]>;
}

export interface ScheduleItemProperties {
  __typename?: "ScheduleCampaignsRelationship";
  endDate?: Maybe<ScalarsEnums["DateTime"]>;
  screen?: Maybe<ScalarsEnums["String"]>;
  startDate?: Maybe<ScalarsEnums["DateTime"]>;
  tier?: Maybe<ScalarsEnums["String"]>;
  $on: $ScheduleItemProperties;
}

export interface ScheduleLocationLocationsAggregationSelection {
  __typename?: "ScheduleLocationLocationsAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ScheduleLocationLocationsNodeAggregateSelection>;
}

export interface ScheduleLocationLocationsNodeAggregateSelection {
  __typename?: "ScheduleLocationLocationsNodeAggregateSelection";
  elevation: FloatAggregateSelection;
  id: IDAggregateSelection;
  lat: FloatAggregateSelection;
  lng: FloatAggregateSelection;
  name: StringAggregateSelection;
}

export interface ScheduleLocationsConnection {
  __typename?: "ScheduleLocationsConnection";
  edges: Array<ScheduleLocationsRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ScheduleLocationsRelationship {
  __typename?: "ScheduleLocationsRelationship";
  cursor: ScalarsEnums["String"];
  node: Location;
}

export interface ScheduleScheduleTierTiersAggregationSelection {
  __typename?: "ScheduleScheduleTierTiersAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ScheduleScheduleTierTiersNodeAggregateSelection>;
}

export interface ScheduleScheduleTierTiersNodeAggregateSelection {
  __typename?: "ScheduleScheduleTierTiersNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  percent: FloatAggregateSelection;
  slots: FloatAggregateSelection;
}

export interface ScheduleScreenTemplateScreensAggregationSelection {
  __typename?: "ScheduleScreenTemplateScreensAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ScheduleScreenTemplateScreensNodeAggregateSelection>;
}

export interface ScheduleScreenTemplateScreensNodeAggregateSelection {
  __typename?: "ScheduleScreenTemplateScreensNodeAggregateSelection";
  height: IntAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  rotation: IntAggregateSelection;
  width: IntAggregateSelection;
}

export interface ScheduleScreensConnection {
  __typename?: "ScheduleScreensConnection";
  edges: Array<ScheduleScreensRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ScheduleScreensRelationship {
  __typename?: "ScheduleScreensRelationship";
  cursor: ScalarsEnums["String"];
  node: ScreenTemplate;
}

export interface ScheduleTier {
  __typename?: "ScheduleTier";
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  percent?: Maybe<ScalarsEnums["Float"]>;
  schedule: (args?: {
    options?: Maybe<ScheduleOptions>;
    where?: Maybe<ScheduleWhere>;
  }) => Maybe<Schedule>;
  scheduleAggregate: (args?: {
    where?: Maybe<ScheduleWhere>;
  }) => Maybe<ScheduleTierScheduleScheduleAggregationSelection>;
  scheduleConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ScheduleTierScheduleConnectionSort>>;
    where?: Maybe<ScheduleTierScheduleConnectionWhere>;
  }) => ScheduleTierScheduleConnection;
  slots?: Maybe<ScalarsEnums["Float"]>;
}

export interface ScheduleTierAggregateSelection {
  __typename?: "ScheduleTierAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  percent: FloatAggregateSelection;
  slots: FloatAggregateSelection;
}

export interface ScheduleTierScheduleConnection {
  __typename?: "ScheduleTierScheduleConnection";
  edges: Array<ScheduleTierScheduleRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ScheduleTierScheduleRelationship {
  __typename?: "ScheduleTierScheduleRelationship";
  cursor: ScalarsEnums["String"];
  node: Schedule;
}

export interface ScheduleTierScheduleScheduleAggregationSelection {
  __typename?: "ScheduleTierScheduleScheduleAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ScheduleTierScheduleScheduleNodeAggregateSelection>;
}

export interface ScheduleTierScheduleScheduleNodeAggregateSelection {
  __typename?: "ScheduleTierScheduleScheduleNodeAggregateSelection";
  endDate: DateTimeAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  startDate: DateTimeAggregateSelection;
}

export interface ScheduleTiersConnection {
  __typename?: "ScheduleTiersConnection";
  edges: Array<ScheduleTiersRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ScheduleTiersRelationship {
  __typename?: "ScheduleTiersRelationship";
  cursor: ScalarsEnums["String"];
  node: ScheduleTier;
}

export interface Screen {
  __typename?: "Screen";
  height?: Maybe<ScalarsEnums["Float"]>;
  id: ScalarsEnums["ID"];
  orientation?: Maybe<ScalarsEnums["Float"]>;
  resHeight?: Maybe<ScalarsEnums["Float"]>;
  resWidth?: Maybe<ScalarsEnums["Float"]>;
  width?: Maybe<ScalarsEnums["Float"]>;
}

export interface ScreenAggregateSelection {
  __typename?: "ScreenAggregateSelection";
  count: ScalarsEnums["Int"];
  height: FloatAggregateSelection;
  id: IDAggregateSelection;
  orientation: FloatAggregateSelection;
  resHeight: FloatAggregateSelection;
  resWidth: FloatAggregateSelection;
  width: FloatAggregateSelection;
}

export interface ScreenTemplate {
  __typename?: "ScreenTemplate";
  computer: (args?: {
    options?: Maybe<ComputerTemplateOptions>;
    where?: Maybe<ComputerTemplateWhere>;
  }) => Maybe<ComputerTemplate>;
  computerAggregate: (args?: {
    where?: Maybe<ComputerTemplateWhere>;
  }) => Maybe<ScreenTemplateComputerTemplateComputerAggregationSelection>;
  computerConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    sort?: Maybe<Array<ScreenTemplateComputerConnectionSort>>;
    where?: Maybe<ScreenTemplateComputerConnectionWhere>;
  }) => ScreenTemplateComputerConnection;
  height?: Maybe<ScalarsEnums["Int"]>;
  id: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  private?: Maybe<ScalarsEnums["Boolean"]>;
  rotation?: Maybe<ScalarsEnums["Int"]>;
  width?: Maybe<ScalarsEnums["Int"]>;
}

export interface ScreenTemplateAggregateSelection {
  __typename?: "ScreenTemplateAggregateSelection";
  count: ScalarsEnums["Int"];
  height: IntAggregateSelection;
  id: IDAggregateSelection;
  name: StringAggregateSelection;
  rotation: IntAggregateSelection;
  width: IntAggregateSelection;
}

export interface ScreenTemplateComputerConnection {
  __typename?: "ScreenTemplateComputerConnection";
  edges: Array<ScreenTemplateComputerRelationship>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface ScreenTemplateComputerRelationship {
  __typename?: "ScreenTemplateComputerRelationship";
  cursor: ScalarsEnums["String"];
  node: ComputerTemplate;
}

export interface ScreenTemplateComputerTemplateComputerAggregationSelection {
  __typename?: "ScreenTemplateComputerTemplateComputerAggregationSelection";
  count: ScalarsEnums["Int"];
  node?: Maybe<ScreenTemplateComputerTemplateComputerNodeAggregateSelection>;
}

export interface ScreenTemplateComputerTemplateComputerNodeAggregateSelection {
  __typename?: "ScreenTemplateComputerTemplateComputerNodeAggregateSelection";
  id: IDAggregateSelection;
  name: StringAggregateSelection;
}

export interface StorageTemplate {
  __typename?: "StorageTemplate";
  id: ScalarsEnums["ID"];
  max?: Maybe<ScalarsEnums["Float"]>;
  min?: Maybe<ScalarsEnums["Float"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  type?: Maybe<ScalarsEnums["String"]>;
}

export interface StorageTemplateAggregateSelection {
  __typename?: "StorageTemplateAggregateSelection";
  count: ScalarsEnums["Int"];
  id: IDAggregateSelection;
  max: FloatAggregateSelection;
  min: FloatAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
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

export interface UpdateComputerTemplatesMutationResponse {
  __typename?: "UpdateComputerTemplatesMutationResponse";
  computerTemplates: Array<ComputerTemplate>;
  info: UpdateInfo;
}

export interface UpdateComputersMutationResponse {
  __typename?: "UpdateComputersMutationResponse";
  computers: Array<Computer>;
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

export interface UpdateLocationGroupsMutationResponse {
  __typename?: "UpdateLocationGroupsMutationResponse";
  info: UpdateInfo;
  locationGroups: Array<LocationGroup>;
}

export interface UpdateLocationsMutationResponse {
  __typename?: "UpdateLocationsMutationResponse";
  info: UpdateInfo;
  locations: Array<Location>;
}

export interface UpdateMachinePluginsMutationResponse {
  __typename?: "UpdateMachinePluginsMutationResponse";
  info: UpdateInfo;
  machinePlugins: Array<MachinePlugin>;
}

export interface UpdateMachineTemplatesMutationResponse {
  __typename?: "UpdateMachineTemplatesMutationResponse";
  info: UpdateInfo;
  machineTemplates: Array<MachineTemplate>;
}

export interface UpdateMachinesMutationResponse {
  __typename?: "UpdateMachinesMutationResponse";
  info: UpdateInfo;
  machines: Array<Machine>;
}

export interface UpdatePeripheralTemplatesMutationResponse {
  __typename?: "UpdatePeripheralTemplatesMutationResponse";
  info: UpdateInfo;
  peripheralTemplates: Array<PeripheralTemplate>;
}

export interface UpdateProvisionCodesMutationResponse {
  __typename?: "UpdateProvisionCodesMutationResponse";
  info: UpdateInfo;
  provisionCodes: Array<ProvisionCode>;
}

export interface UpdateScheduleTiersMutationResponse {
  __typename?: "UpdateScheduleTiersMutationResponse";
  info: UpdateInfo;
  scheduleTiers: Array<ScheduleTier>;
}

export interface UpdateSchedulesMutationResponse {
  __typename?: "UpdateSchedulesMutationResponse";
  info: UpdateInfo;
  schedules: Array<Schedule>;
}

export interface UpdateScreenTemplatesMutationResponse {
  __typename?: "UpdateScreenTemplatesMutationResponse";
  info: UpdateInfo;
  screenTemplates: Array<ScreenTemplate>;
}

export interface UpdateScreensMutationResponse {
  __typename?: "UpdateScreensMutationResponse";
  info: UpdateInfo;
  screens: Array<Screen>;
}

export interface UpdateStorageTemplatesMutationResponse {
  __typename?: "UpdateStorageTemplatesMutationResponse";
  info: UpdateInfo;
  storageTemplates: Array<StorageTemplate>;
}

export interface Mutation {
  __typename?: "Mutation";
  createCampaignAnalytics: (args: {
    input: Array<CampaignAnalyticCreateInput>;
  }) => CreateCampaignAnalyticsMutationResponse;
  createCampaigns: (args: {
    input: Array<CampaignCreateInput>;
  }) => CreateCampaignsMutationResponse;
  createComputerTemplates: (args: {
    input: Array<ComputerTemplateCreateInput>;
  }) => CreateComputerTemplatesMutationResponse;
  createComputers: (args: {
    input: Array<ComputerCreateInput>;
  }) => CreateComputersMutationResponse;
  createLocationGroups: (args: {
    input: Array<LocationGroupCreateInput>;
  }) => CreateLocationGroupsMutationResponse;
  createLocations: (args: {
    input: Array<LocationCreateInput>;
  }) => CreateLocationsMutationResponse;
  createMachinePlugins: (args: {
    input: Array<MachinePluginCreateInput>;
  }) => CreateMachinePluginsMutationResponse;
  createMachineTemplates: (args: {
    input: Array<MachineTemplateCreateInput>;
  }) => CreateMachineTemplatesMutationResponse;
  createMachines: (args: {
    input: Array<MachineCreateInput>;
  }) => CreateMachinesMutationResponse;
  createPeripheralTemplates: (args: {
    input: Array<PeripheralTemplateCreateInput>;
  }) => CreatePeripheralTemplatesMutationResponse;
  createProvisionCodes: (args: {
    input: Array<ProvisionCodeCreateInput>;
  }) => CreateProvisionCodesMutationResponse;
  createScheduleTiers: (args: {
    input: Array<ScheduleTierCreateInput>;
  }) => CreateScheduleTiersMutationResponse;
  createSchedules: (args: {
    input: Array<ScheduleCreateInput>;
  }) => CreateSchedulesMutationResponse;
  createScreenTemplates: (args: {
    input: Array<ScreenTemplateCreateInput>;
  }) => CreateScreenTemplatesMutationResponse;
  createScreens: (args: {
    input: Array<ScreenCreateInput>;
  }) => CreateScreensMutationResponse;
  createStorageTemplates: (args: {
    input: Array<StorageTemplateCreateInput>;
  }) => CreateStorageTemplatesMutationResponse;
  deleteCampaignAnalytics: (args?: {
    delete?: Maybe<CampaignAnalyticDeleteInput>;
    where?: Maybe<CampaignAnalyticWhere>;
  }) => DeleteInfo;
  deleteCampaigns: (args?: {
    delete?: Maybe<CampaignDeleteInput>;
    where?: Maybe<CampaignWhere>;
  }) => DeleteInfo;
  deleteComputerTemplates: (args?: {
    delete?: Maybe<ComputerTemplateDeleteInput>;
    where?: Maybe<ComputerTemplateWhere>;
  }) => DeleteInfo;
  deleteComputers: (args?: {
    delete?: Maybe<ComputerDeleteInput>;
    where?: Maybe<ComputerWhere>;
  }) => DeleteInfo;
  deleteLocationGroups: (args?: {
    delete?: Maybe<LocationGroupDeleteInput>;
    where?: Maybe<LocationGroupWhere>;
  }) => DeleteInfo;
  deleteLocations: (args?: {
    delete?: Maybe<LocationDeleteInput>;
    where?: Maybe<LocationWhere>;
  }) => DeleteInfo;
  deleteMachinePlugins: (args?: {
    where?: Maybe<MachinePluginWhere>;
  }) => DeleteInfo;
  deleteMachineTemplates: (args?: {
    delete?: Maybe<MachineTemplateDeleteInput>;
    where?: Maybe<MachineTemplateWhere>;
  }) => DeleteInfo;
  deleteMachines: (args?: {
    delete?: Maybe<MachineDeleteInput>;
    where?: Maybe<MachineWhere>;
  }) => DeleteInfo;
  deletePeripheralTemplates: (args?: {
    delete?: Maybe<PeripheralTemplateDeleteInput>;
    where?: Maybe<PeripheralTemplateWhere>;
  }) => DeleteInfo;
  deleteProvisionCodes: (args?: {
    delete?: Maybe<ProvisionCodeDeleteInput>;
    where?: Maybe<ProvisionCodeWhere>;
  }) => DeleteInfo;
  deleteScheduleTiers: (args?: {
    delete?: Maybe<ScheduleTierDeleteInput>;
    where?: Maybe<ScheduleTierWhere>;
  }) => DeleteInfo;
  deleteSchedules: (args?: {
    delete?: Maybe<ScheduleDeleteInput>;
    where?: Maybe<ScheduleWhere>;
  }) => DeleteInfo;
  deleteScreenTemplates: (args?: {
    delete?: Maybe<ScreenTemplateDeleteInput>;
    where?: Maybe<ScreenTemplateWhere>;
  }) => DeleteInfo;
  deleteScreens: (args?: { where?: Maybe<ScreenWhere> }) => DeleteInfo;
  deleteStorageTemplates: (args?: {
    where?: Maybe<StorageTemplateWhere>;
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
  updateComputerTemplates: (args?: {
    connect?: Maybe<ComputerTemplateConnectInput>;
    create?: Maybe<ComputerTemplateRelationInput>;
    delete?: Maybe<ComputerTemplateDeleteInput>;
    disconnect?: Maybe<ComputerTemplateDisconnectInput>;
    update?: Maybe<ComputerTemplateUpdateInput>;
    where?: Maybe<ComputerTemplateWhere>;
  }) => UpdateComputerTemplatesMutationResponse;
  updateComputers: (args?: {
    connect?: Maybe<ComputerConnectInput>;
    create?: Maybe<ComputerRelationInput>;
    delete?: Maybe<ComputerDeleteInput>;
    disconnect?: Maybe<ComputerDisconnectInput>;
    update?: Maybe<ComputerUpdateInput>;
    where?: Maybe<ComputerWhere>;
  }) => UpdateComputersMutationResponse;
  updateLocationGroups: (args?: {
    connect?: Maybe<LocationGroupConnectInput>;
    create?: Maybe<LocationGroupRelationInput>;
    delete?: Maybe<LocationGroupDeleteInput>;
    disconnect?: Maybe<LocationGroupDisconnectInput>;
    update?: Maybe<LocationGroupUpdateInput>;
    where?: Maybe<LocationGroupWhere>;
  }) => UpdateLocationGroupsMutationResponse;
  updateLocations: (args?: {
    connect?: Maybe<LocationConnectInput>;
    create?: Maybe<LocationRelationInput>;
    delete?: Maybe<LocationDeleteInput>;
    disconnect?: Maybe<LocationDisconnectInput>;
    update?: Maybe<LocationUpdateInput>;
    where?: Maybe<LocationWhere>;
  }) => UpdateLocationsMutationResponse;
  updateMachinePlugins: (args?: {
    update?: Maybe<MachinePluginUpdateInput>;
    where?: Maybe<MachinePluginWhere>;
  }) => UpdateMachinePluginsMutationResponse;
  updateMachineTemplates: (args?: {
    connect?: Maybe<MachineTemplateConnectInput>;
    create?: Maybe<MachineTemplateRelationInput>;
    delete?: Maybe<MachineTemplateDeleteInput>;
    disconnect?: Maybe<MachineTemplateDisconnectInput>;
    update?: Maybe<MachineTemplateUpdateInput>;
    where?: Maybe<MachineTemplateWhere>;
  }) => UpdateMachineTemplatesMutationResponse;
  updateMachines: (args?: {
    connect?: Maybe<MachineConnectInput>;
    create?: Maybe<MachineRelationInput>;
    delete?: Maybe<MachineDeleteInput>;
    disconnect?: Maybe<MachineDisconnectInput>;
    update?: Maybe<MachineUpdateInput>;
    where?: Maybe<MachineWhere>;
  }) => UpdateMachinesMutationResponse;
  updatePeripheralTemplates: (args?: {
    connect?: Maybe<PeripheralTemplateConnectInput>;
    create?: Maybe<PeripheralTemplateRelationInput>;
    delete?: Maybe<PeripheralTemplateDeleteInput>;
    disconnect?: Maybe<PeripheralTemplateDisconnectInput>;
    update?: Maybe<PeripheralTemplateUpdateInput>;
    where?: Maybe<PeripheralTemplateWhere>;
  }) => UpdatePeripheralTemplatesMutationResponse;
  updateProvisionCodes: (args?: {
    connect?: Maybe<ProvisionCodeConnectInput>;
    create?: Maybe<ProvisionCodeRelationInput>;
    delete?: Maybe<ProvisionCodeDeleteInput>;
    disconnect?: Maybe<ProvisionCodeDisconnectInput>;
    update?: Maybe<ProvisionCodeUpdateInput>;
    where?: Maybe<ProvisionCodeWhere>;
  }) => UpdateProvisionCodesMutationResponse;
  updateScheduleTiers: (args?: {
    connect?: Maybe<ScheduleTierConnectInput>;
    create?: Maybe<ScheduleTierRelationInput>;
    delete?: Maybe<ScheduleTierDeleteInput>;
    disconnect?: Maybe<ScheduleTierDisconnectInput>;
    update?: Maybe<ScheduleTierUpdateInput>;
    where?: Maybe<ScheduleTierWhere>;
  }) => UpdateScheduleTiersMutationResponse;
  updateSchedules: (args?: {
    connect?: Maybe<ScheduleConnectInput>;
    create?: Maybe<ScheduleRelationInput>;
    delete?: Maybe<ScheduleDeleteInput>;
    disconnect?: Maybe<ScheduleDisconnectInput>;
    update?: Maybe<ScheduleUpdateInput>;
    where?: Maybe<ScheduleWhere>;
  }) => UpdateSchedulesMutationResponse;
  updateScreenTemplates: (args?: {
    connect?: Maybe<ScreenTemplateConnectInput>;
    create?: Maybe<ScreenTemplateRelationInput>;
    delete?: Maybe<ScreenTemplateDeleteInput>;
    disconnect?: Maybe<ScreenTemplateDisconnectInput>;
    update?: Maybe<ScreenTemplateUpdateInput>;
    where?: Maybe<ScreenTemplateWhere>;
  }) => UpdateScreenTemplatesMutationResponse;
  updateScreens: (args?: {
    update?: Maybe<ScreenUpdateInput>;
    where?: Maybe<ScreenWhere>;
  }) => UpdateScreensMutationResponse;
  updateStorageTemplates: (args?: {
    update?: Maybe<StorageTemplateUpdateInput>;
    where?: Maybe<StorageTemplateWhere>;
  }) => UpdateStorageTemplatesMutationResponse;
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
  computerTemplates: (args?: {
    options?: Maybe<ComputerTemplateOptions>;
    where?: Maybe<ComputerTemplateWhere>;
  }) => Array<ComputerTemplate>;
  computerTemplatesAggregate: (args?: {
    where?: Maybe<ComputerTemplateWhere>;
  }) => ComputerTemplateAggregateSelection;
  computerTemplatesCount: (args?: {
    where?: Maybe<ComputerTemplateWhere>;
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
  locationGroups: (args?: {
    options?: Maybe<LocationGroupOptions>;
    where?: Maybe<LocationGroupWhere>;
  }) => Array<LocationGroup>;
  locationGroupsAggregate: (args?: {
    where?: Maybe<LocationGroupWhere>;
  }) => LocationGroupAggregateSelection;
  locationGroupsCount: (args?: {
    where?: Maybe<LocationGroupWhere>;
  }) => ScalarsEnums["Int"];
  locations: (args?: {
    options?: Maybe<LocationOptions>;
    where?: Maybe<LocationWhere>;
  }) => Array<Location>;
  locationsAggregate: (args?: {
    where?: Maybe<LocationWhere>;
  }) => LocationAggregateSelection;
  locationsCount: (args?: {
    where?: Maybe<LocationWhere>;
  }) => ScalarsEnums["Int"];
  machinePlugins: (args?: {
    options?: Maybe<MachinePluginOptions>;
    where?: Maybe<MachinePluginWhere>;
  }) => Array<MachinePlugin>;
  machinePluginsAggregate: (args?: {
    where?: Maybe<MachinePluginWhere>;
  }) => MachinePluginAggregateSelection;
  machinePluginsCount: (args?: {
    where?: Maybe<MachinePluginWhere>;
  }) => ScalarsEnums["Int"];
  machineTemplates: (args?: {
    options?: Maybe<MachineTemplateOptions>;
    where?: Maybe<MachineTemplateWhere>;
  }) => Array<MachineTemplate>;
  machineTemplatesAggregate: (args?: {
    where?: Maybe<MachineTemplateWhere>;
  }) => MachineTemplateAggregateSelection;
  machineTemplatesCount: (args?: {
    where?: Maybe<MachineTemplateWhere>;
  }) => ScalarsEnums["Int"];
  machines: (args?: {
    options?: Maybe<MachineOptions>;
    where?: Maybe<MachineWhere>;
  }) => Array<Machine>;
  machinesAggregate: (args?: {
    where?: Maybe<MachineWhere>;
  }) => MachineAggregateSelection;
  machinesCount: (args?: {
    where?: Maybe<MachineWhere>;
  }) => ScalarsEnums["Int"];
  peripheralTemplates: (args?: {
    options?: Maybe<PeripheralTemplateOptions>;
    where?: Maybe<PeripheralTemplateWhere>;
  }) => Array<PeripheralTemplate>;
  peripheralTemplatesAggregate: (args?: {
    where?: Maybe<PeripheralTemplateWhere>;
  }) => PeripheralTemplateAggregateSelection;
  peripheralTemplatesCount: (args?: {
    where?: Maybe<PeripheralTemplateWhere>;
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
  scheduleTiers: (args?: {
    options?: Maybe<ScheduleTierOptions>;
    where?: Maybe<ScheduleTierWhere>;
  }) => Array<ScheduleTier>;
  scheduleTiersAggregate: (args?: {
    where?: Maybe<ScheduleTierWhere>;
  }) => ScheduleTierAggregateSelection;
  scheduleTiersCount: (args?: {
    where?: Maybe<ScheduleTierWhere>;
  }) => ScalarsEnums["Int"];
  schedules: (args?: {
    options?: Maybe<ScheduleOptions>;
    where?: Maybe<ScheduleWhere>;
  }) => Array<Schedule>;
  schedulesAggregate: (args?: {
    where?: Maybe<ScheduleWhere>;
  }) => ScheduleAggregateSelection;
  schedulesCount: (args?: {
    where?: Maybe<ScheduleWhere>;
  }) => ScalarsEnums["Int"];
  screenTemplates: (args?: {
    options?: Maybe<ScreenTemplateOptions>;
    where?: Maybe<ScreenTemplateWhere>;
  }) => Array<ScreenTemplate>;
  screenTemplatesAggregate: (args?: {
    where?: Maybe<ScreenTemplateWhere>;
  }) => ScreenTemplateAggregateSelection;
  screenTemplatesCount: (args?: {
    where?: Maybe<ScreenTemplateWhere>;
  }) => ScalarsEnums["Int"];
  screens: (args?: {
    options?: Maybe<ScreenOptions>;
    where?: Maybe<ScreenWhere>;
  }) => Array<Screen>;
  screensAggregate: (args?: {
    where?: Maybe<ScreenWhere>;
  }) => ScreenAggregateSelection;
  screensCount: (args?: { where?: Maybe<ScreenWhere> }) => ScalarsEnums["Int"];
  storageTemplates: (args?: {
    options?: Maybe<StorageTemplateOptions>;
    where?: Maybe<StorageTemplateWhere>;
  }) => Array<StorageTemplate>;
  storageTemplatesAggregate: (args?: {
    where?: Maybe<StorageTemplateWhere>;
  }) => StorageTemplateAggregateSelection;
  storageTemplatesCount: (args?: {
    where?: Maybe<StorageTemplateWhere>;
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
  Computer: Computer;
  ComputerAggregateSelection: ComputerAggregateSelection;
  ComputerComputerTemplateTemplateAggregationSelection: ComputerComputerTemplateTemplateAggregationSelection;
  ComputerComputerTemplateTemplateNodeAggregateSelection: ComputerComputerTemplateTemplateNodeAggregateSelection;
  ComputerTemplate: ComputerTemplate;
  ComputerTemplateAggregateSelection: ComputerTemplateAggregateSelection;
  ComputerTemplateConnection: ComputerTemplateConnection;
  ComputerTemplateMachinePluginPluginsAggregationSelection: ComputerTemplateMachinePluginPluginsAggregationSelection;
  ComputerTemplateMachinePluginPluginsNodeAggregateSelection: ComputerTemplateMachinePluginPluginsNodeAggregateSelection;
  ComputerTemplatePeripheralTemplatePeripheralsAggregationSelection: ComputerTemplatePeripheralTemplatePeripheralsAggregationSelection;
  ComputerTemplatePeripheralTemplatePeripheralsNodeAggregateSelection: ComputerTemplatePeripheralTemplatePeripheralsNodeAggregateSelection;
  ComputerTemplatePeripheralsConnection: ComputerTemplatePeripheralsConnection;
  ComputerTemplatePeripheralsRelationship: ComputerTemplatePeripheralsRelationship;
  ComputerTemplatePluginsConnection: ComputerTemplatePluginsConnection;
  ComputerTemplatePluginsRelationship: ComputerTemplatePluginsRelationship;
  ComputerTemplateRelationship: ComputerTemplateRelationship;
  ComputerTemplateScreenTemplateScreensAggregationSelection: ComputerTemplateScreenTemplateScreensAggregationSelection;
  ComputerTemplateScreenTemplateScreensNodeAggregateSelection: ComputerTemplateScreenTemplateScreensNodeAggregateSelection;
  ComputerTemplateScreensConnection: ComputerTemplateScreensConnection;
  ComputerTemplateScreensRelationship: ComputerTemplateScreensRelationship;
  ComputerTemplateStorageConnection: ComputerTemplateStorageConnection;
  ComputerTemplateStorageRelationship: ComputerTemplateStorageRelationship;
  ComputerTemplateStorageTemplateStorageAggregationSelection: ComputerTemplateStorageTemplateStorageAggregationSelection;
  ComputerTemplateStorageTemplateStorageNodeAggregateSelection: ComputerTemplateStorageTemplateStorageNodeAggregateSelection;
  CreateCampaignAnalyticsMutationResponse: CreateCampaignAnalyticsMutationResponse;
  CreateCampaignsMutationResponse: CreateCampaignsMutationResponse;
  CreateComputerTemplatesMutationResponse: CreateComputerTemplatesMutationResponse;
  CreateComputersMutationResponse: CreateComputersMutationResponse;
  CreateInfo: CreateInfo;
  CreateLocationGroupsMutationResponse: CreateLocationGroupsMutationResponse;
  CreateLocationsMutationResponse: CreateLocationsMutationResponse;
  CreateMachinePluginsMutationResponse: CreateMachinePluginsMutationResponse;
  CreateMachineTemplatesMutationResponse: CreateMachineTemplatesMutationResponse;
  CreateMachinesMutationResponse: CreateMachinesMutationResponse;
  CreatePeripheralTemplatesMutationResponse: CreatePeripheralTemplatesMutationResponse;
  CreateProvisionCodesMutationResponse: CreateProvisionCodesMutationResponse;
  CreateScheduleTiersMutationResponse: CreateScheduleTiersMutationResponse;
  CreateSchedulesMutationResponse: CreateSchedulesMutationResponse;
  CreateScreenTemplatesMutationResponse: CreateScreenTemplatesMutationResponse;
  CreateScreensMutationResponse: CreateScreensMutationResponse;
  CreateStorageTemplatesMutationResponse: CreateStorageTemplatesMutationResponse;
  DateTimeAggregateSelection: DateTimeAggregateSelection;
  DeleteInfo: DeleteInfo;
  FloatAggregateSelection: FloatAggregateSelection;
  IDAggregateSelection: IDAggregateSelection;
  IntAggregateSelection: IntAggregateSelection;
  Location: Location;
  LocationAggregateSelection: LocationAggregateSelection;
  LocationGroup: LocationGroup;
  LocationGroupAggregateSelection: LocationGroupAggregateSelection;
  LocationGroupLocationLocationsAggregationSelection: LocationGroupLocationLocationsAggregationSelection;
  LocationGroupLocationLocationsNodeAggregateSelection: LocationGroupLocationLocationsNodeAggregateSelection;
  LocationGroupLocationsConnection: LocationGroupLocationsConnection;
  LocationGroupLocationsRelationship: LocationGroupLocationsRelationship;
  LocationGroupsConnection: LocationGroupsConnection;
  LocationGroupsRelationship: LocationGroupsRelationship;
  LocationLocationGroupGroupsAggregationSelection: LocationLocationGroupGroupsAggregationSelection;
  LocationLocationGroupGroupsNodeAggregateSelection: LocationLocationGroupGroupsNodeAggregateSelection;
  LocationMachineMachinesAggregationSelection: LocationMachineMachinesAggregationSelection;
  LocationMachineMachinesNodeAggregateSelection: LocationMachineMachinesNodeAggregateSelection;
  LocationMachinesConnection: LocationMachinesConnection;
  LocationMachinesRelationship: LocationMachinesRelationship;
  Machine: Machine;
  MachineAggregateSelection: MachineAggregateSelection;
  MachineComputerComputersAggregationSelection: MachineComputerComputersAggregationSelection;
  MachineComputerComputersNodeAggregateSelection: MachineComputerComputersNodeAggregateSelection;
  MachineComputersConnection: MachineComputersConnection;
  MachineComputersRelationship: MachineComputersRelationship;
  MachineLocationConnection: MachineLocationConnection;
  MachineLocationLocationAggregationSelection: MachineLocationLocationAggregationSelection;
  MachineLocationLocationNodeAggregateSelection: MachineLocationLocationNodeAggregateSelection;
  MachineLocationRelationship: MachineLocationRelationship;
  MachineMachineTemplateTemplateAggregationSelection: MachineMachineTemplateTemplateAggregationSelection;
  MachineMachineTemplateTemplateNodeAggregateSelection: MachineMachineTemplateTemplateNodeAggregateSelection;
  MachinePlugin: MachinePlugin;
  MachinePluginAggregateSelection: MachinePluginAggregateSelection;
  MachineTemplate: MachineTemplate;
  MachineTemplateAggregateSelection: MachineTemplateAggregateSelection;
  MachineTemplateComputerTemplateComputersAggregationSelection: MachineTemplateComputerTemplateComputersAggregationSelection;
  MachineTemplateComputerTemplateComputersNodeAggregateSelection: MachineTemplateComputerTemplateComputersNodeAggregateSelection;
  MachineTemplateComputersConnection: MachineTemplateComputersConnection;
  MachineTemplateComputersRelationship: MachineTemplateComputersRelationship;
  MachineTemplateConnection: MachineTemplateConnection;
  MachineTemplateDisplaysConnection: MachineTemplateDisplaysConnection;
  MachineTemplateDisplaysRelationship: MachineTemplateDisplaysRelationship;
  MachineTemplateMachinePluginPluginsAggregationSelection: MachineTemplateMachinePluginPluginsAggregationSelection;
  MachineTemplateMachinePluginPluginsNodeAggregateSelection: MachineTemplateMachinePluginPluginsNodeAggregateSelection;
  MachineTemplatePeripheralTemplatePeripheralsAggregationSelection: MachineTemplatePeripheralTemplatePeripheralsAggregationSelection;
  MachineTemplatePeripheralTemplatePeripheralsNodeAggregateSelection: MachineTemplatePeripheralTemplatePeripheralsNodeAggregateSelection;
  MachineTemplatePeripheralsConnection: MachineTemplatePeripheralsConnection;
  MachineTemplatePeripheralsRelationship: MachineTemplatePeripheralsRelationship;
  MachineTemplatePluginsConnection: MachineTemplatePluginsConnection;
  MachineTemplatePluginsRelationship: MachineTemplatePluginsRelationship;
  MachineTemplateRelationship: MachineTemplateRelationship;
  MachineTemplateScreenTemplateDisplaysAggregationSelection: MachineTemplateScreenTemplateDisplaysAggregationSelection;
  MachineTemplateScreenTemplateDisplaysNodeAggregateSelection: MachineTemplateScreenTemplateDisplaysNodeAggregateSelection;
  Mutation: Mutation;
  PageInfo: PageInfo;
  PeripheralTemplate: PeripheralTemplate;
  PeripheralTemplateAggregateSelection: PeripheralTemplateAggregateSelection;
  PeripheralTemplateComputerConnection: PeripheralTemplateComputerConnection;
  PeripheralTemplateComputerRelationship: PeripheralTemplateComputerRelationship;
  PeripheralTemplateComputerTemplateComputerAggregationSelection: PeripheralTemplateComputerTemplateComputerAggregationSelection;
  PeripheralTemplateComputerTemplateComputerNodeAggregateSelection: PeripheralTemplateComputerTemplateComputerNodeAggregateSelection;
  ProvisionCode: ProvisionCode;
  ProvisionCodeAggregateSelection: ProvisionCodeAggregateSelection;
  ProvisionCodeDisplayConnection: ProvisionCodeDisplayConnection;
  ProvisionCodeDisplayRelationship: ProvisionCodeDisplayRelationship;
  ProvisionCodeMachineDisplayAggregationSelection: ProvisionCodeMachineDisplayAggregationSelection;
  ProvisionCodeMachineDisplayNodeAggregateSelection: ProvisionCodeMachineDisplayNodeAggregateSelection;
  Query: Query;
  Schedule: Schedule;
  ScheduleAggregateSelection: ScheduleAggregateSelection;
  ScheduleCampaignCampaignsAggregationSelection: ScheduleCampaignCampaignsAggregationSelection;
  ScheduleCampaignCampaignsEdgeAggregateSelection: ScheduleCampaignCampaignsEdgeAggregateSelection;
  ScheduleCampaignCampaignsNodeAggregateSelection: ScheduleCampaignCampaignsNodeAggregateSelection;
  ScheduleCampaignsConnection: ScheduleCampaignsConnection;
  ScheduleCampaignsRelationship: ScheduleCampaignsRelationship;
  ScheduleLocationLocationsAggregationSelection: ScheduleLocationLocationsAggregationSelection;
  ScheduleLocationLocationsNodeAggregateSelection: ScheduleLocationLocationsNodeAggregateSelection;
  ScheduleLocationsConnection: ScheduleLocationsConnection;
  ScheduleLocationsRelationship: ScheduleLocationsRelationship;
  ScheduleScheduleTierTiersAggregationSelection: ScheduleScheduleTierTiersAggregationSelection;
  ScheduleScheduleTierTiersNodeAggregateSelection: ScheduleScheduleTierTiersNodeAggregateSelection;
  ScheduleScreenTemplateScreensAggregationSelection: ScheduleScreenTemplateScreensAggregationSelection;
  ScheduleScreenTemplateScreensNodeAggregateSelection: ScheduleScreenTemplateScreensNodeAggregateSelection;
  ScheduleScreensConnection: ScheduleScreensConnection;
  ScheduleScreensRelationship: ScheduleScreensRelationship;
  ScheduleTier: ScheduleTier;
  ScheduleTierAggregateSelection: ScheduleTierAggregateSelection;
  ScheduleTierScheduleConnection: ScheduleTierScheduleConnection;
  ScheduleTierScheduleRelationship: ScheduleTierScheduleRelationship;
  ScheduleTierScheduleScheduleAggregationSelection: ScheduleTierScheduleScheduleAggregationSelection;
  ScheduleTierScheduleScheduleNodeAggregateSelection: ScheduleTierScheduleScheduleNodeAggregateSelection;
  ScheduleTiersConnection: ScheduleTiersConnection;
  ScheduleTiersRelationship: ScheduleTiersRelationship;
  Screen: Screen;
  ScreenAggregateSelection: ScreenAggregateSelection;
  ScreenTemplate: ScreenTemplate;
  ScreenTemplateAggregateSelection: ScreenTemplateAggregateSelection;
  ScreenTemplateComputerConnection: ScreenTemplateComputerConnection;
  ScreenTemplateComputerRelationship: ScreenTemplateComputerRelationship;
  ScreenTemplateComputerTemplateComputerAggregationSelection: ScreenTemplateComputerTemplateComputerAggregationSelection;
  ScreenTemplateComputerTemplateComputerNodeAggregateSelection: ScreenTemplateComputerTemplateComputerNodeAggregateSelection;
  StorageTemplate: StorageTemplate;
  StorageTemplateAggregateSelection: StorageTemplateAggregateSelection;
  StringAggregateSelection: StringAggregateSelection;
  Subscription: Subscription;
  UpdateCampaignAnalyticsMutationResponse: UpdateCampaignAnalyticsMutationResponse;
  UpdateCampaignsMutationResponse: UpdateCampaignsMutationResponse;
  UpdateComputerTemplatesMutationResponse: UpdateComputerTemplatesMutationResponse;
  UpdateComputersMutationResponse: UpdateComputersMutationResponse;
  UpdateInfo: UpdateInfo;
  UpdateLocationGroupsMutationResponse: UpdateLocationGroupsMutationResponse;
  UpdateLocationsMutationResponse: UpdateLocationsMutationResponse;
  UpdateMachinePluginsMutationResponse: UpdateMachinePluginsMutationResponse;
  UpdateMachineTemplatesMutationResponse: UpdateMachineTemplatesMutationResponse;
  UpdateMachinesMutationResponse: UpdateMachinesMutationResponse;
  UpdatePeripheralTemplatesMutationResponse: UpdatePeripheralTemplatesMutationResponse;
  UpdateProvisionCodesMutationResponse: UpdateProvisionCodesMutationResponse;
  UpdateScheduleTiersMutationResponse: UpdateScheduleTiersMutationResponse;
  UpdateSchedulesMutationResponse: UpdateSchedulesMutationResponse;
  UpdateScreenTemplatesMutationResponse: UpdateScreenTemplatesMutationResponse;
  UpdateScreensMutationResponse: UpdateScreensMutationResponse;
  UpdateStorageTemplatesMutationResponse: UpdateStorageTemplatesMutationResponse;
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
  | "Computer"
  | "ComputerAggregateSelection"
  | "ComputerComputerTemplateTemplateAggregationSelection"
  | "ComputerComputerTemplateTemplateNodeAggregateSelection"
  | "ComputerTemplate"
  | "ComputerTemplateAggregateSelection"
  | "ComputerTemplateConnection"
  | "ComputerTemplateMachinePluginPluginsAggregationSelection"
  | "ComputerTemplateMachinePluginPluginsNodeAggregateSelection"
  | "ComputerTemplatePeripheralTemplatePeripheralsAggregationSelection"
  | "ComputerTemplatePeripheralTemplatePeripheralsNodeAggregateSelection"
  | "ComputerTemplatePeripheralsConnection"
  | "ComputerTemplatePeripheralsRelationship"
  | "ComputerTemplatePluginsConnection"
  | "ComputerTemplatePluginsRelationship"
  | "ComputerTemplateRelationship"
  | "ComputerTemplateScreenTemplateScreensAggregationSelection"
  | "ComputerTemplateScreenTemplateScreensNodeAggregateSelection"
  | "ComputerTemplateScreensConnection"
  | "ComputerTemplateScreensRelationship"
  | "ComputerTemplateStorageConnection"
  | "ComputerTemplateStorageRelationship"
  | "ComputerTemplateStorageTemplateStorageAggregationSelection"
  | "ComputerTemplateStorageTemplateStorageNodeAggregateSelection"
  | "CreateCampaignAnalyticsMutationResponse"
  | "CreateCampaignsMutationResponse"
  | "CreateComputerTemplatesMutationResponse"
  | "CreateComputersMutationResponse"
  | "CreateInfo"
  | "CreateLocationGroupsMutationResponse"
  | "CreateLocationsMutationResponse"
  | "CreateMachinePluginsMutationResponse"
  | "CreateMachineTemplatesMutationResponse"
  | "CreateMachinesMutationResponse"
  | "CreatePeripheralTemplatesMutationResponse"
  | "CreateProvisionCodesMutationResponse"
  | "CreateScheduleTiersMutationResponse"
  | "CreateSchedulesMutationResponse"
  | "CreateScreenTemplatesMutationResponse"
  | "CreateScreensMutationResponse"
  | "CreateStorageTemplatesMutationResponse"
  | "DateTimeAggregateSelection"
  | "DeleteInfo"
  | "FloatAggregateSelection"
  | "IDAggregateSelection"
  | "IntAggregateSelection"
  | "Location"
  | "LocationAggregateSelection"
  | "LocationGroup"
  | "LocationGroupAggregateSelection"
  | "LocationGroupLocationLocationsAggregationSelection"
  | "LocationGroupLocationLocationsNodeAggregateSelection"
  | "LocationGroupLocationsConnection"
  | "LocationGroupLocationsRelationship"
  | "LocationGroupsConnection"
  | "LocationGroupsRelationship"
  | "LocationLocationGroupGroupsAggregationSelection"
  | "LocationLocationGroupGroupsNodeAggregateSelection"
  | "LocationMachineMachinesAggregationSelection"
  | "LocationMachineMachinesNodeAggregateSelection"
  | "LocationMachinesConnection"
  | "LocationMachinesRelationship"
  | "Machine"
  | "MachineAggregateSelection"
  | "MachineComputerComputersAggregationSelection"
  | "MachineComputerComputersNodeAggregateSelection"
  | "MachineComputersConnection"
  | "MachineComputersRelationship"
  | "MachineLocationConnection"
  | "MachineLocationLocationAggregationSelection"
  | "MachineLocationLocationNodeAggregateSelection"
  | "MachineLocationRelationship"
  | "MachineMachineTemplateTemplateAggregationSelection"
  | "MachineMachineTemplateTemplateNodeAggregateSelection"
  | "MachinePlugin"
  | "MachinePluginAggregateSelection"
  | "MachineTemplate"
  | "MachineTemplateAggregateSelection"
  | "MachineTemplateComputerTemplateComputersAggregationSelection"
  | "MachineTemplateComputerTemplateComputersNodeAggregateSelection"
  | "MachineTemplateComputersConnection"
  | "MachineTemplateComputersRelationship"
  | "MachineTemplateConnection"
  | "MachineTemplateDisplaysConnection"
  | "MachineTemplateDisplaysRelationship"
  | "MachineTemplateMachinePluginPluginsAggregationSelection"
  | "MachineTemplateMachinePluginPluginsNodeAggregateSelection"
  | "MachineTemplatePeripheralTemplatePeripheralsAggregationSelection"
  | "MachineTemplatePeripheralTemplatePeripheralsNodeAggregateSelection"
  | "MachineTemplatePeripheralsConnection"
  | "MachineTemplatePeripheralsRelationship"
  | "MachineTemplatePluginsConnection"
  | "MachineTemplatePluginsRelationship"
  | "MachineTemplateRelationship"
  | "MachineTemplateScreenTemplateDisplaysAggregationSelection"
  | "MachineTemplateScreenTemplateDisplaysNodeAggregateSelection"
  | "Mutation"
  | "PageInfo"
  | "PeripheralTemplate"
  | "PeripheralTemplateAggregateSelection"
  | "PeripheralTemplateComputerConnection"
  | "PeripheralTemplateComputerRelationship"
  | "PeripheralTemplateComputerTemplateComputerAggregationSelection"
  | "PeripheralTemplateComputerTemplateComputerNodeAggregateSelection"
  | "ProvisionCode"
  | "ProvisionCodeAggregateSelection"
  | "ProvisionCodeDisplayConnection"
  | "ProvisionCodeDisplayRelationship"
  | "ProvisionCodeMachineDisplayAggregationSelection"
  | "ProvisionCodeMachineDisplayNodeAggregateSelection"
  | "Query"
  | "Schedule"
  | "ScheduleAggregateSelection"
  | "ScheduleCampaignCampaignsAggregationSelection"
  | "ScheduleCampaignCampaignsEdgeAggregateSelection"
  | "ScheduleCampaignCampaignsNodeAggregateSelection"
  | "ScheduleCampaignsConnection"
  | "ScheduleCampaignsRelationship"
  | "ScheduleLocationLocationsAggregationSelection"
  | "ScheduleLocationLocationsNodeAggregateSelection"
  | "ScheduleLocationsConnection"
  | "ScheduleLocationsRelationship"
  | "ScheduleScheduleTierTiersAggregationSelection"
  | "ScheduleScheduleTierTiersNodeAggregateSelection"
  | "ScheduleScreenTemplateScreensAggregationSelection"
  | "ScheduleScreenTemplateScreensNodeAggregateSelection"
  | "ScheduleScreensConnection"
  | "ScheduleScreensRelationship"
  | "ScheduleTier"
  | "ScheduleTierAggregateSelection"
  | "ScheduleTierScheduleConnection"
  | "ScheduleTierScheduleRelationship"
  | "ScheduleTierScheduleScheduleAggregationSelection"
  | "ScheduleTierScheduleScheduleNodeAggregateSelection"
  | "ScheduleTiersConnection"
  | "ScheduleTiersRelationship"
  | "Screen"
  | "ScreenAggregateSelection"
  | "ScreenTemplate"
  | "ScreenTemplateAggregateSelection"
  | "ScreenTemplateComputerConnection"
  | "ScreenTemplateComputerRelationship"
  | "ScreenTemplateComputerTemplateComputerAggregationSelection"
  | "ScreenTemplateComputerTemplateComputerNodeAggregateSelection"
  | "StorageTemplate"
  | "StorageTemplateAggregateSelection"
  | "StringAggregateSelection"
  | "Subscription"
  | "UpdateCampaignAnalyticsMutationResponse"
  | "UpdateCampaignsMutationResponse"
  | "UpdateComputerTemplatesMutationResponse"
  | "UpdateComputersMutationResponse"
  | "UpdateInfo"
  | "UpdateLocationGroupsMutationResponse"
  | "UpdateLocationsMutationResponse"
  | "UpdateMachinePluginsMutationResponse"
  | "UpdateMachineTemplatesMutationResponse"
  | "UpdateMachinesMutationResponse"
  | "UpdatePeripheralTemplatesMutationResponse"
  | "UpdateProvisionCodesMutationResponse"
  | "UpdateScheduleTiersMutationResponse"
  | "UpdateSchedulesMutationResponse"
  | "UpdateScreenTemplatesMutationResponse"
  | "UpdateScreensMutationResponse"
  | "UpdateStorageTemplatesMutationResponse";

export interface $ScheduleItemProperties {
  ScheduleCampaignsRelationship?: ScheduleCampaignsRelationship;
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
}
