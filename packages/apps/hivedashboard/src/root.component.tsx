import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { Home } from './views/home';
import { BaseHeader } from './components/header';
import { Box, Grommet, Spinner } from 'grommet';

import { AuthProvider } from '@hexhive/auth-ui'
import { Organisation } from './views/organisation';
import { Settigns } from './views/settings';

import { BaseStyle } from '@hexhive/styles'
import { Dashboard } from './dashboard';
import { Login } from './views/login';
import qs from 'qs';

const NoToken = () => (<div>No token</div>)

console.log(process.env)
function App() {

  const { NODE_ENV, REACT_APP_API, PUBLIC_URL } = process.env;

  return (
    <AuthProvider
      authorizationServer={NODE_ENV == 'production' ? (REACT_APP_API || "https://staging-api.hexhive.io") : 'http://localhost:7000'}
      returnTo={NODE_ENV == 'production' ? ('https://next.hexhive.io/dashboard') : 'http://localhost:3000/dashboard'}>
    <React.Suspense fallback={() => <Spinner />} >
    <Grommet theme={BaseStyle} plain full> 
  
      <Router basename={process.env.PUBLIC_URL}>
        <Box 
          style={{height: '100vh'}}
          overflow="hidden"
          background="neutral-1"
          fill 
          flex
          direction="column"
          className="App">
            <Box flex direction="column">
            <Route path="/" exact render={(props) => {
         
                return Login(props)
              
            }} />
            <Route path="/dashboard" component={Dashboard} />
          </Box>
        </Box>
      </Router>
      </Grommet>
    </React.Suspense>
    </AuthProvider>
  );
}

export default App;
