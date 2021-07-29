import React, { useState } from 'react'
import logo from './logo.svg'
import { AuthClient } from '../../src';

import { LoginForm } from '../../../hexhive-auth-ui/src'

import './App.css'

const auth = new AuthClient({
  authorizationServer: 'http://localhost:8090',
  clientId: 'command-hexhive.io',
  clientSecret: 'tester',
  redirectUri: 'http://localhost:3000/dashboard'
})

function App() {
  const [count, setCount] = useState(0)

  const [ name, setName ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')

  return (
    <div className="App">
     

          <input type='text' value={name} onChange={e => setName(e.target.value)} name="username" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" />
          <button type="submit" onClick={() => {
              auth.getAuthorizationCode(name, password).then((res) => {
                console.log(res)
                if(res.code.authorizationCode){
                  auth.getToken(res.code.authorizationCode).then((token) => {
                    console.log("TOKEN", token)
                  })
                }
              })
          }}>Sign in</button>
    </div>
  )
}

export default App
