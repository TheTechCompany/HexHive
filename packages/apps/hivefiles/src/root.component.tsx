import React, { useState } from "react";
import { BabylonViewer, FileExplorer } from '@hexhive/ui'
import { Box, Text, List, Grommet } from "grommet";
import { BaseStyle } from "@hexhive/styles";
import { BaseHeader } from "./components/header";
import { mutation, useMutation, useQuery  } from "@hexhive/client"
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Explorer } from "./views/explorer";
import {App} from "./App";

const client = new ApolloClient({
  uri: 'http://localhost:7000/graphql',
  cache: new InMemoryCache()
})

export default function Root(props) {

  const query = useQuery()


  return (
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
  </Grommet>);
}
