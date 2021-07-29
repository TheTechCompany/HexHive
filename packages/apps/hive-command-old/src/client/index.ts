import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

  export const client = new ApolloClient({
    uri: process.env.NODE_ENV == 'production' ? (process.env.REACT_APP_API != undefined ? `${process.env.REACT_APP_API}/graphql` : '/graphql') : "http://localhost:8080/graphql",
    cache: new InMemoryCache()
  });