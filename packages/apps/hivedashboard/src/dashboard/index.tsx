import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from '../views/home';
import { BaseHeader } from '../components/header';
import { Box, Grommet, Spinner } from 'grommet';
import { useToken } from '../hooks/useBrowserContext';

import { AuthProvider } from '@hexhive/auth-ui'
import { Organisation } from '../views/organisation';
import { Settigns } from '../views/settings';

import { BaseStyle } from '@hexhive/styles'

const NoToken = () => (<div>No token</div>)
export const Dashboard = (props: any) => {

  return (
    <React.Suspense fallback={() => <Spinner />} >
    <Grommet theme={BaseStyle} plain full>
    <AuthProvider
      clientId="hexhive.io"
      clientSecret="tester"
      authorizationServer={process.env.NODE_ENV == 'production' ? (process.env.REACT_APP_API || 'https://staging-api.hexhive.io') : "http://localhost:7000"}
      redirectUri={process.env.NODE_ENV == 'production' ? 'https://root-staging.hexhive.io/' : "http://localhost:3001/dashboard"}>
      {(accessToken: string) => (
      <Switch>
        <Box 
          style={{height: '100vh', width: '100vw', overflow: 'hidden'}}
          overflow="hidden"
          background="neutral-1"
          fill 
          flex
          direction="column"
          className="App">
            <Box flex direction="column">
            <Route path={`${props.match.url}/`} exact component={Home} />

            <Route path={`${props.match.url}/organisation`} component={Organisation} />
            <Route path={`${props.match.url}/settings`} component={Settigns} />
          </Box>
        </Box>
      </Switch>)}
    </AuthProvider>
    </Grommet>
    </React.Suspense>
  );
}

