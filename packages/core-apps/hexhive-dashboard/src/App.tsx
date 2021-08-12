import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './views/home';
import { BaseHeader } from './components/header';
import { Box, Grommet, Spinner } from 'grommet';
import './App.css';
import { useToken } from './hooks/useBrowserContext';

import { AuthProvider } from '@hexhive/auth-ui'
import { Organisation } from './views/organisation';
import { Settigns } from './views/settings';

import { BaseStyle } from '@hexhive/styles'

const Hive3D = React.lazy(() => import('@hexhive-apps/3d/dist/App').then((r) => ({default: r.default})))

const HiveFlow = React.lazy(() => import('@hexhive-apps/flow/dist/App').then((r) => ({default: r.default})))
const HiveCommand = React.lazy(() => import('@hexhive-apps/command/dist/App').then((r) => ({default: r.default})))

const NoToken = () => (<div>No token</div>)
function App() {

  return (
    <React.Suspense fallback={() => <Spinner />} >
    <Grommet theme={BaseStyle} plain full>
    <AuthProvider
      clientId="hexhive.io"
      clientSecret="tester"
      authorizationServer={process.env.NODE_ENV == 'production' ? "https://api.hexhive.io" : "http://localhost:7000"}
      redirectUri={process.env.NODE_ENV == 'production' ? 'https://hexhive.io/dashboard' : "http://localhost:3001/dashboard"}>
      {(accessToken: string) => (
      <Router basename={process.env.PUBLIC_URL}>
        <Box 
          overflow="hidden"
          background="neutral-1"
          fill 
          flex
          direction="column"
          className="App">
            <Box flex direction="column">
            <Route path="/" exact component={Home} />
            <Route path="/flow" component={HiveFlow} />
            <Route path="/command" component={HiveCommand} />
            <Route path="/3d" component={Hive3D} />

            <Route path="/organisation" component={Organisation} />
            <Route path={`/settings`} component={Settigns} />
          </Box>
        </Box>
      </Router>)}
    </AuthProvider>
    </Grommet>
    </React.Suspense>
  );
}

export default App;
