import React from 'react';
import logo from './logo.svg';
import {Box, Grommet} from 'grommet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from '@hexhive/auth-ui';
import {Dashboard} from './views/dashboard';
import { BaseStyle } from '@hexhive/styles'

function App(props: any) {

  return (
      <AuthProvider
        authorizationServer={process.env.REACT_APP_API || "https://staging-api.hexhive.io"}
        returnTo={process.env.PUBLIC_URL || 'https://next.hexhive.io/dashboard/flow'}
        clientId={process.env.CLIENT_ID || 'test'}>
        <Grommet  
          full
          style={{display: 'flex'}}
          themeMode="dark"
          plain 
          theme={BaseStyle}>  
            <Router basename={process.env.PUBLIC_URL}>
                <Box flex>
                  
                  <Route path={`${props.match.url}/`} component={Dashboard} />
                </Box>
              </Router>
        </Grommet>
      </AuthProvider>
  );
}

export default App;
