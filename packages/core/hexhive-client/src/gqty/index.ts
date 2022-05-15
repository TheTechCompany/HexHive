/**
 * GQTY: You can safely modify this file and Query Fetcher based on your needs
 */

import { createReactClient } from "@gqty/react";

import type { QueryFetcher } from "gqty";
import { createClient } from "gqty";
import type {
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from "./schema.generated";
import { generatedSchema, scalarsEnumsHash } from "./schema.generated";

const queryFetcher: QueryFetcher = async function (
  query,
  variables
) {
  const API_URL = localStorage.getItem('HEXHIVE_API');

  let url = process.env.NODE_ENV == 'production' ? `${API_URL}/graphql` || (process.env.REACT_APP_API != undefined ? `${process.env.REACT_APP_API}/graphql` : '/graphql') : "http://localhost:7000/graphql"
  
  // Modify "/api/graphql" if needed
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: "cors",
    credentials: 'include'
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

const { query, mutation, mutate, subscription, resolved, refetch, track } =
  client;

export { query, mutation, mutate, subscription, resolved, refetch, track };

const {
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

export {
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
};

export * from "./schema.generated";
