import { Grommet } from "grommet";
import { BrowserRouter as Router, Route  } from "react-router-dom";
import { App } from "./App";
import { BaseStyle } from '@hexhive/styles'
import { AuthProvider, Loader } from '@hexhive/auth-ui'


export default function Root(props) {
  return (
    <AuthProvider
      authorizationServer={process.env.NODE_ENV == 'production' ? (process.env.REACT_APP_API || "https://staging-api.hexhive.io") : 'http://localhost:7000'}
      returnTo={process.env.NODE_ENV == 'production' ? (`${process.env.REACT_APP_URL}/dashboard/settings`) : 'http://localhost:3000/dashboard/settings'}>
      {(user) => user ? ( 
        <Grommet style={{flex: 1, display: 'flex', height: '100vh', width: '100vw'}} theme={BaseStyle}>
          <Router basename={process.env.PUBLIC_URL || "/dashboard/settings"}>
            <Route path="/" component={App} />
          </Router>
        </Grommet>
      ) : <Loader />}

    </AuthProvider>
  );
}

//<section>{props.name} is mounted!</section>