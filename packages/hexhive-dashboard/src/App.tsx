import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './views/home';
import { BaseHeader } from './components/header';
import { Box } from 'grommet';
import './App.css';

function App() {
  return (
    <Router>
      <Box 
        background="light-4"
        fill 
        direction="column"
        className="App">
        <BaseHeader />
        <Route path="/" component={Home} />
      </Box>
    </Router>

  );
}

export default App;
