import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
