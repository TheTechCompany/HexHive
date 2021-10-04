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


export const App = (props: any)  => {

  return (
   
  <Box pad="xsmall" background="neutral-2" height={'100%'} width={'100%'} flex direction="column">

    <Switch>
      <Route path={"/"} exact component={Explorer} />
  
      <Route path={"/explore/:id"} component={Explorer}  />
      </Switch>

  </Box>);
}
