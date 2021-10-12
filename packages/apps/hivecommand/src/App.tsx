import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider, Loader } from '@hexhive/auth-ui'
import { Grommet, Box } from 'grommet';
import Dashboard from './views/Dashboard';
import {BaseStyle} from '@hexhive/styles'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API ?  `${process.env.REACT_APP_API}/graphql` : 'http://localhost:7000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include'
})
function App(props: any) {
  console.log(JSON.stringify(process.env))
  return (
    <AuthProvider   
    authorizationServer={process.env.NODE_ENV == 'production' ? (process.env.REACT_APP_API || 'https://staging-api.hexhive.io') : "http://localhost:7000"}
      returnTo={process.env.NODE_ENV == 'production' ? `${process.env.REACT_APP_URL}/dashboard/command` : "http://localhost:3000/dashboard/command"}>
      {(user) => user ? (
 <Grommet
 style={{display: 'flex', flex: 1, height: '100%', width: '100%'}}
 full
 theme={BaseStyle}
 plain>
      <ApolloProvider client={client}>

   <Router basename={process.env.PUBLIC_URL || '/dashboard/command'}>
     <Box
       fill
       height="full"
       direction="column"
       flex>
       <Route path={`/`} component={Dashboard} />
     </Box>
   </Router>
   </ApolloProvider>
</Grommet>
      ) : <Loader />}
     
    </AuthProvider>
  );
}

export default App;
