import React from 'react';
import logo from './logo.svg';
import {Box, Grommet} from 'grommet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from '@hexhive/auth-ui';
import {Dashboard} from './views/dashboard';
import { BaseStyle } from '@hexhive/styles'

function App(props: any) {
console.log("FLOW", window.location, process.env)
  return (
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
  );
}

export default App;
