import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './views/home';
import { BaseHeader } from './components/header';
import { Box } from 'grommet';
import './App.css';

function App() {

  useEffect(()=> {
    const search = new URLSearchParams(window.location.search)
    let code = search.get('code') 

    if(code){
      fetch(`${process.env.REACT_APP_API || 'http://localhost:8090'}/oauth/token`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `code=${code}&client_secret=${process.env.REACT_APP_CLIENT_SECRET || 'tester'}&state=myState&client_id=${process.env.REACT_APP_CLIENT_ID || 'command-hexhive.io'}&grant_type=authorization_code`
      }).then((r) => r.json()).then((r) => {
        if(r.access_token){
          fetch(`${process.env.REACT_APP_API || 'http://localhost:8090'}/test`, {
            headers:  new Headers({
              Authorization: `Bearer ${r.access_token}`,
            })
          }).then((r) => r.json()).then((output) => {
            console.log(output)
          })
        }
      })

      
    }
  }, [])

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
