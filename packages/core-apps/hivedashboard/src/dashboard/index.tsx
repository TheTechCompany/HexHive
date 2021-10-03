import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from '../views/home';
import { BaseHeader } from '../components/header';
import { Box, Grommet, Spinner } from 'grommet';

import { AuthProvider } from '@hexhive/auth-ui'
import { Organisation } from '../views/organisation';
import { Settigns } from '../views/settings';

import { BaseStyle } from '@hexhive/styles'
import { IFrameAppliance } from '../components/iframe-appliance';

const NoToken = () => (<div>No token</div>)
export const Dashboard = (props: any) => {

  return (
    <React.Suspense fallback={() => <Spinner />} >
    <Grommet theme={BaseStyle} plain full>

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

            <Route path={`${props.match.url}/matrix`} component={IFrameAppliance} />
            <Route path={`${props.match.url}/organisation`} component={Organisation} />
            <Route path={`${props.match.url}/settings`} component={Settigns} />
          </Box>
        </Box>
      </Switch>
    </Grommet>
    </React.Suspense>
  );
}

