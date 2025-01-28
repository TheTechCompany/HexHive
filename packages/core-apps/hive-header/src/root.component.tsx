import { Grommet } from "grommet";
import React from "react";
import { HexHiveTheme } from "@hexhive/styles";
import { Header } from "./components/Header";
import { AuthProvider } from "@hexhive/auth-ui";
import { ThemeProvider } from "@mui/material";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = localStorage.getItem('HEXHIVE_API');



const client = new ApolloClient({
  uri: API_URL ?  `${API_URL}/graphql` : 'http://localhost:7000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include'
})


export default function Root(props) {
  return (
    <AuthProvider
      authorizationServer={
        process.env.NODE_ENV == "production"
          ? API_URL || "https://staging-api.hexhive.io"
          : "http://localhost:7000"
      }
    >
      <ApolloProvider client={client}>
      <ThemeProvider theme={HexHiveTheme}>
        <Header />
        <div style={{ width: "100%", height: "42px" }} />
      </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  );
}
