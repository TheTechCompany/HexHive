import React, { useState } from "react";
import { BabylonViewer, FileExplorer } from '@hexhive/ui'
import { Box, Text, List, Grommet } from "grommet";
import { BaseStyle } from "@hexhive/styles";
import { Header } from "./components/header";
import { mutation, useMutation, useQuery  } from "@hexhive/client"
import { useEffect } from "react";
import { BrowserRouter as Router, matchPath, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Explorer } from "./views/explorer";
import { Workflows } from "./views/workflow-editor";
import { WorkflowList } from "./views/workflow-list";
import { TaskEditor } from "./views/task-editor";
import {TaskList} from "./views/task-list";


export const App = (props: any)  => {

  return (
   
  <Box background="neutral-2" height={'100vh'} width={'100vw'} flex direction="column">
    <Header
      
    path={!matchPath(window.location.pathname, {path: '/dashboard/files/workflows'}) ? "/workflows" : "/"}
    onActionClick={(path) => {
        console.log("ACTION")
        props.history.push(path)
    }} />
    <Switch>
      <Route path={"/"} exact render={(props) => <Explorer {...props} />} />
      <Route path={"/workflows"} exact component={WorkflowList} />
      <Route path={"/workflows/:id"} exact component={Workflows} />
      <Route path={"/tasks"} exact component={TaskList} />
      <Route path={"/tasks/:id"} component={TaskEditor} />
      <Route path={"/explore/:id"} render={(props) => <Explorer {...props} />}  />
      </Switch>

  </Box>);
}
