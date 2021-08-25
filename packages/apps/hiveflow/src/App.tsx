import React from 'react';
import logo from './logo.svg';
import {Box, Grommet} from 'grommet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from '@hexhive/auth-ui';
import {Dashboard} from './views/dashboard';
import { BaseStyle } from '@hexhive/styles'

function App(props: any) {
console.log("FLOW", window.location, process.env)

const { REACT_APP_API, PUBLIC_URL, NODE_ENV } = process.env;

  return (
    <AuthProvider
    authorizationServer={NODE_ENV == 'production' ? (REACT_APP_API || "https://staging-api.hexhive.io") : 'http://localhost:7000'}
    returnTo={NODE_ENV == 'production' ? ('https://next.hexhive.io/dashboard/flow') : 'http://localhost:3000/dashboard/flow'}>
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
      </AuthProvider>
  );
}

export default App;
