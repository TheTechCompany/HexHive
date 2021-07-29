import React from 'react';
import logo from './logo.svg';
import {Grommet} from 'grommet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { AuthProvider } from '@hexhive/auth-ui';
import dashboard from './views/dashboard';

function App() {
  return (
    <AuthProvider
      authorizationServer="https://api.hexhive.io"
      clientId="hexhive.io"
      clientSecret="tester"
      redirectUri="https://hexhive.io/dashboard/flow">
        <Grommet plain>
            <Router basename={process.env.PUBLIC_URL}>
                <div className="App">
                  
                  <Route path="/" render={dashboard} />
                </div>
              </Router>
        </Grommet>
    </AuthProvider>
  );
}

export default App;
