import React from 'react';
import logo from './logo.svg';

import { AuthProvider } from '@hexhive/auth-ui'
import './App.css';

function App() {
  return (
    <AuthProvider
      clientId="hexhive.io"
      clientSecret="tester"
      authorizationServer="http://localhost:8090"
      redirectUri="http://localhost:3001/dashboard">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </AuthProvider>
  );
}

export default App;
