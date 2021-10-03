import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthView } from './views/auth'
import { Dashboard } from './views/dashboard'
import { Box, Grommet } from 'grommet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grommet 
      style={{display: 'flex'}}
      full>
    <Router>
      <Box flex>
        <Route path="/" exact component={AuthView} />
        <Route path="/dashboard" component={Dashboard} />
      </Box>
    </Router>
    </Grommet>
  )
}

export default App
