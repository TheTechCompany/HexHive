import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from '@hexhive/auth-ui'
import { Grommet, Box } from 'grommet';
import Dashboard from './views/Dashboard';
import {BaseStyle} from '@hexhive/styles'

function App() {
  return (
    <AuthProvider   
      authorizationServer="https://api.hexhive.io"
      clientId="hexhive.io"
      clientSecret="tester"
      redirectUri="https://hexhive.io/dashboard/command">
      <Grommet
        full
        theme={BaseStyle}
        plain>
      
          <Router basename={process.env.PUBLIC_URL}>
            <Box
              height="full"
              direction="column"
              flex>
              <Route path="/" component={Dashboard} />
            </Box>
          </Router>
      </Grommet>
    </AuthProvider>
  );
}

export default App;
