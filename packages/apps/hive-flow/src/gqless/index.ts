/**
 * GQLESS: You can safely modify this file and Query Fetcher based on your needs
 */

import { createReactClient } from "@gqless/react";

import { createClient, QueryFetcher } from "gqless";
import {
  generatedSchema,
  scalarsEnumsHash,
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from "./schema.generated";
import { AuthContext } from '@hexhive/auth-ui'
import conf from '../conf'
import { useContext } from "react";

const queryFetcher: QueryFetcher = async function (query, variables) {
  // Modify "http://localhost:8088/graphql " if needed
  const token = window.sessionStorage.getItem('CREDENTIALS_TOKEN')

  console.log("Token", token)
  const response = await fetch(`${conf.baseURL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: "cors",
  });

  const json = await response.json();

  return json;
};

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
});

export const { query, mutation, mutate, subscription, resolved, refetch } =
  client;

export const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: false,

    // Set this flag based on your needs
    staleWhileRevalidate: false,
    
  },
});

export * from "./schema.generated";
