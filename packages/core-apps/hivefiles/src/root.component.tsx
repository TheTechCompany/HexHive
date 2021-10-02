import React, { useState } from "react";
import { BabylonViewer, FileExplorer } from '@hexhive/ui'
import { Box, Text, List, Grommet, Spinner } from "grommet";
import { BaseStyle } from "@hexhive/styles";
import { BaseHeader } from "./components/header";
import { mutation, useMutation, useQuery  } from "@hexhive/client"
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Explorer } from "./views/explorer";
import {App} from "./App";
import { AuthProvider, Loader } from '@hexhive/auth-ui'

const client = new ApolloClient({
  uri: process.env.REACT_APP_API ?  `${process.env.REACT_APP_API}/graphql` : 'http://localhost:7000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include'
})

export default function Root(props) {

  const query = useQuery()


  return (
    <AuthProvider
      authorizationServer={process.env.NODE_ENV == 'production' ? (process.env.REACT_APP_API || "https://staging-api.hexhive.io") : 'http://localhost:7000'}
      returnTo={process.env.NODE_ENV == 'production' ? (`${process.env.REACT_APP_URL}/dashboard/files`) : 'http://localhost:3000/dashboard/files'}>
        {(user) => user ? (
          <Grommet   
                
            style={{display: 'flex', height: '100%', width: '100%'}}
            themeMode="dark"
            plain 
            theme={BaseStyle}>  
            <ApolloProvider client={client}>
            <Router basename={process.env.PUBLIC_URL}>

              <Route path="/" component={App} />
            
            </Router>
            </ApolloProvider>
            </Grommet>
        ) : <Loader />}
   
  </AuthProvider>);
}
