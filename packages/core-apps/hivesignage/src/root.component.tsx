import { Grommet } from "grommet";
import { App } from "./App";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BaseStyle } from '@hexhive/styles'
import { AuthProvider, Loader } from '@hexhive/auth-ui'

export default function Root(props) {
  return (
  <AuthProvider
  authorizationServer={process.env.NODE_ENV == 'production' ? (process.env.REACT_APP_API || "https://staging-api.hexhive.io") : 'http://localhost:7000'}
  returnTo={process.env.NODE_ENV == 'production' ? (`${process.env.REACT_APP_URL}/dashboard/signage`) : 'http://localhost:3000/dashboard/signage'}>
    {(user) => user ? (
    <Router basename={process.env.PUBLIC_URL}>
    <Grommet style={{width: '100%', height: '100%'}} theme={BaseStyle}>
      <Route path="/" component={App} />
    </Grommet>
    </Router>
    ) : <Loader />}

  </AuthProvider>
  )
}
