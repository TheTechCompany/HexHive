import React from 'react';
import logo from './logo.svg';
import {Box, Grommet} from 'grommet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider, Loader } from '@hexhive/auth-ui';
import {Dashboard} from './views/dashboard';
import { BaseStyle } from '@hexhive/styles'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API ?  `${process.env.REACT_APP_API}/graphql` : 'http://localhost:7000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include'
})

function App(props: any) {
console.log("FLOW", window.location, process.env)

const { REACT_APP_API, PUBLIC_URL, REACT_APP_URL, NODE_ENV } = process.env;

  return (
    <AuthProvider
    authorizationServer={NODE_ENV == 'production' ? (REACT_APP_API || "https://staging-api.hexhive.io") : 'http://localhost:7000'}
    returnTo={NODE_ENV == 'production' ? (`${REACT_APP_URL}/dashboard/flow`) : 'http://localhost:3000/dashboard/flow'}>
    {(user) => user ? (
      <ApolloProvider client={client}>
      <Grommet  
          full
          style={{display: 'flex'}}
          themeMode="dark"
          plain 
          theme={BaseStyle}>  
            <Router basename={process.env.PUBLIC_URL}>
                <Box flex>
                  
                  <Route path={`/`} component={Dashboard} />
                </Box>
              </Router>
        </Grommet>
        </ApolloProvider>

    ) : <Loader />}
    
      </AuthProvider>
  );
}

export default App;
