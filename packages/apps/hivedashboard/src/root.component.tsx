import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './views/home';
import { BaseHeader } from './components/header';
import { Box, Grommet, Spinner } from 'grommet';
import { useToken } from './hooks/useBrowserContext';

import { AuthProvider } from '@hexhive/auth-ui'
import { Organisation } from './views/organisation';
import { Settigns } from './views/settings';

import { BaseStyle } from '@hexhive/styles'
import { Dashboard } from './dashboard';
import { Login } from './views/login';

const NoToken = () => (<div>No token</div>)
function App() {

  return (
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
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Box>
        </Box>
      </Router>
      </Grommet>
    </React.Suspense>
  );
}

export default App;
