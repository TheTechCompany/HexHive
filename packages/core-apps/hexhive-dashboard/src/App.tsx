import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './views/home';
import { BaseHeader } from './components/header';
import { Box, Grommet } from 'grommet';
import './App.css';
import { useToken } from './hooks/useBrowserContext';

import { AuthProvider } from '@hexhive/auth-ui'
import { Organisation } from './views/organisation';
import { Settigns } from './views/settings';

import { BaseStyle } from '@hexhive/styles'

const NoToken = () => (<div>No token</div>)
function App() {

  return (
    <Grommet theme={BaseStyle} plain full>
    <AuthProvider
      clientId="hexhive.io"
      clientSecret="tester"
      authorizationServer="http://localhost:8090"
      redirectUri="http://localhost:3001/dashboard">
      {(accessToken: string) => (
      <Router basename={process.env.PUBLIC_URL}>
        <Box 
          background="neutral-4"
          fill 
          direction="column"
          className="App">
          <BaseHeader />
          <Route path="/" exact component={Home} />
          <Route path="/organisation" component={Organisation} />
          <Route path={`/settings`} component={Settigns} />
        </Box>
      </Router>)}
    </AuthProvider>
    </Grommet>
  );
}

export default App;
