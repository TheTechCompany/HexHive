import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
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
import qs from 'qs';

const NoToken = () => (<div>No token</div>)

console.log(process.env)
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
            <Route path="/" exact render={(props) => {
              if (!qs.parse(window.location.search, {ignoreQueryPrefix: true}).token){
                window.location.href = `${process.env.REACT_APP_API}/auth?client_id=hexhive.io&response_type=code&redirect_uri=https://next.hexhive.io/dashboard&scope=openid email&nonce=foobar`
                return null;
              }else{
                return <Login {...props} />
              }
            }} />
            <Route path="/dashboard" component={Dashboard} />
          </Box>
        </Box>
      </Router>
      </Grommet>
    </React.Suspense>
  );
}

export default App;
