import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './views/home';
import { BaseHeader } from './components/header';
import { Box } from 'grommet';
import './App.css';
import { useToken } from './hooks/useBrowserContext';

const NoToken = () => (<div>No token</div>)
function App() {
  const [ loading, setLoading ] = useState<boolean>(true)
  const [ accessToken, setAccessToken, logout ] = useToken()
  
  const refreshToken = (code: string) => {
    return fetch(`${process.env.REACT_APP_API || 'http://localhost:8090'}/oauth/token`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, //Need to change grantType to handle cookie refresHTOken
      body: `refreshToken=${code}&state=myState&client_secret=tester&client_id=${process.env.REACT_APP_CLIENT_ID || 'command-hexhive.io'}&grant_type=refresh_token`
    })
    
    // .then((r) => {

    // }).catch(() => {
    //   window.location.href = 'https://hexhive.io/login'
    // })
  }

  const getToken = (code: string) => {
    return fetch(`${process.env.REACT_APP_API || 'http://localhost:8090'}/oauth/token`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `code=${code}&client_secret=${process.env.REACT_APP_CLIENT_SECRET || 'tester'}&state=myState&client_id=${process.env.REACT_APP_CLIENT_ID || 'command-hexhive.io'}&grant_type=authorization_code`
    }).then((r) => r.json())
    
    /*.then((r) => {
      console.log(r)
      if(r.accessToken){
        setAccessToken(r.accessToken)
      }
    }).catch(() => {

    })*/
  }

  useEffect(()=> {
    const search = new URLSearchParams(window.location.search)
    let code = search.get('code') 

    if(code && !accessToken){

      getToken(code).then((resp) => {
        if(resp.accessToken){
          setAccessToken(resp.accessToken)
        }else{
          refreshToken(code || '').then((resp) => {
            console.log("Refresh")
         //   setAccessToken|)
          })
        }
      })
  
    }else if(!code && !accessToken){
      refreshToken('').then((resp) => {
        console.log(resp)
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
        <Route path="/" component={!accessToken ? NoToken : Home} />
      </Box>
    </Router>

  );
}

export default App;
