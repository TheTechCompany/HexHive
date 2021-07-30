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
      authorizationServer={process.env.NODE_ENV == 'production' ? "https://api.hexhive.io" : "http://localhost:8090"}
      clientId="hexhive.io"
      clientSecret="tester"
      redirectUri={process.env.NODE_ENV == 'production' ? "https://hexhive.io/dashboard/flow" : "http://localhost:3001/dashboard"}>
        <Grommet 
          themeMode="dark"
          plain 
          theme={BaseStyle}>  
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
