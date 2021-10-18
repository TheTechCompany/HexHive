import { AuthProvider } from '@hexhive/auth-ui'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {BaseStyle } from '@hexhive/styles';
import { Box, Grommet } from 'grommet';

import { Dashboard } from './views/dashboard';

export default function Root(props) {
  const { NODE_ENV, REACT_APP_API, REACT_APP_URL } = process.env;
  
  const client = new ApolloClient({
    uri: process.env.REACT_APP_API ?  `${process.env.REACT_APP_API}/graphql` : 'http://localhost:7000/graphql',
    cache: new InMemoryCache(),
    credentials: 'include'
  })

  return (
    <AuthProvider
    authorizationServer={NODE_ENV == 'production' ? (REACT_APP_API || "https://staging-api.hexhive.io") : 'http://localhost:7000'}
    returnTo={NODE_ENV == 'production' ? (`${REACT_APP_URL}/dashboard/flow`) : 'http://localhost:3000/dashboard/flow'}>
    {(user) => user ? (
      <ApolloProvider client={client}>
      <Grommet  
          
          style={{display: 'flex', width: '100%', height: '100%'}}
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

    ) : <div />}
    
      </AuthProvider>
  )
}
