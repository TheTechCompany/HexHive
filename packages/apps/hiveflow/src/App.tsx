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
      authorizationServer={process.env.NODE_ENV == 'production' ? "https://api.hexhive.io" : "http://localhost:8090"}
      clientId="hexhive.io"
      clientSecret="tester"
      redirectUri={process.env.NODE_ENV == 'production' ? "https://hexhive.io/dashboard/flow" : "http://localhost:3001/dashboard"}>
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
