import React from 'react';
import logo from './logo.svg';
import {Grommet} from 'grommet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { AuthProvider } from '@hexhive/auth-ui';
import {Dashboard} from './views/dashboard';
import { BaseStyle } from '@hexhive/styles'
function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <AuthProvider
      authorizationServer="https://api.hexhive.io"
      clientId="hexhive.io"
      clientSecret="tester"
      redirectUri="https://hexhive.io/dashboard/flow">
        <Grommet plain theme={BaseStyle}>
            <Router basename={process.env.PUBLIC_URL}>
                <div className="App">
                  
                  <Route path={`/`} component={Dashboard} />
                </div>
              </Router>
        </Grommet>
    </AuthProvider>
  );
}

export default App;
