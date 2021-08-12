import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from '@hexhive/auth-ui'
import { Grommet, Box } from 'grommet';
import Dashboard from './views/Dashboard';
import {BaseStyle} from '@hexhive/styles'

function App(props: any) {
  return (
    <AuthProvider   
    authorizationServer={process.env.NODE_ENV == 'production' ? "https://api.hexhive.io" : "http://localhost:7000"}
    clientId="hexhive.io"
      clientSecret="tester"
      redirectUri={process.env.NODE_ENV == 'production' ? "https://hexhive.io/dashboard/command" : "http://localhost:3001/dashboard"}>
      <Grommet
        style={{display: 'flex'}}
        full
        theme={BaseStyle}
        plain>
      
          <Router basename={process.env.PUBLIC_URL}>
            <Box
              fill
              height="full"
              direction="column"
              flex>
              <Route path={`${props.match.url}/`} component={Dashboard} />
            </Box>
          </Router>
      </Grommet>
    </AuthProvider>
  );
}

export default App;
