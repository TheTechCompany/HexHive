import React, { useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Box, Grommet } from 'grommet';
import { ApolloProvider } from '@apollo/client'
import { client } from './client'

import { EditorPage } from './views/Editor';
import Dashboard from './views/Dashboard';
import { Home } from './views/Home';

import { AuthProvider } from '@hexhive/auth-ui'
 import "@fontsource/roboto-condensed"

import './App.css';
import { ColorschemeModal } from './components/colorscheme-modal';
import { AutomergeClientProvider, useAutomergeClient } from '@hexhive/automerge-client';

function App() {
  
  const [ mergeClient, isReady ] = useAutomergeClient('ws://localhost:8080')

  const [ theme, setTheme ] = useState<any>({
    global: {
      colors: {
        brand: '#054c54',//003f49 //054c54
        "light-1": "#0a7575",
        "dark-1": "#003f49",
        
      },
      
    },
    layer: {
        background: "#003f49"
    },
    select: {
      container: {extend: (props: any) => "background:#003f49;"}
    }
    
  })

  return (
    <AuthProvider   
      authorizationServer="https://api.hexhive.io"
      clientId="hexhive.io"
      clientSecret="tester"
      redirectUri="https://hexhive.io/dashboard/command">
      <Grommet
        full
        theme={theme}
        plain>
        <AutomergeClientProvider client={mergeClient} isReady={isReady}>
        <ApolloProvider client={client}>
          <ColorschemeModal
            theme={theme}
            setTheme={setTheme} />
          <Router basename={process.env.PUBLIC_URL}>
            <Box
              height="full"
              direction="column"
              flex>
              <Route path="/" component={Dashboard} />
            </Box>
          </Router>
        </ApolloProvider>
        </AutomergeClientProvider>
      </Grommet>
    </AuthProvider>
  );
}

export default App;
