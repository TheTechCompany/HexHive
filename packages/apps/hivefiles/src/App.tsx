import React, { useState } from "react";
import { BabylonViewer, FileExplorer } from '@hexhive/ui'
import { Box, Text, List, Grommet } from "grommet";
import { BaseStyle } from "@hexhive/styles";
import { BaseHeader } from "./components/header";
import { mutation, useMutation, useQuery  } from "@hexhive/client"
import { useEffect } from "react";
import { BrowserRouter as Router, matchPath, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Explorer } from "./views/explorer";
import { Workflows } from "./views/workflows";


export const App = (props: any)  => {

console.l
  return (
   
  <Box height={'100vh'} width={'100vw'} flex direction="column">
    <BaseHeader
      
    path={!matchPath(window.location.pathname, {path: '/dashboard/files/workflows'}) ? "/workflows" : "/"}
    onActionClick={(path) => {
        console.log("ACTION")
        props.history.push(path)
    }} />
    <Switch>
      <Route path={"/"} exact render={(props) => <Explorer {...props} />} />
      <Route path={"/workflows"} exact component={Workflows} />
      <Route path={"/explore/:id"} render={(props) => <Explorer {...props} />}  />
      </Switch>

  </Box>);
}
