import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
    <Router basename='/dashboard'>
      <Grommet theme={BaseStyle} plain full>

          <Box 
            style={{height: '100vh', width: '100vw', overflow: 'hidden'}}
            overflow="hidden"
            background="neutral-1"
            fill 
            flex
            direction="column"
            className="App">
              <Box flex direction="column">
              <Routes>
                <Route path="*" element={<Home />} />
              </Routes>

            
            </Box>
          </Box>
      </Grommet>
    </Router>
  );
}

