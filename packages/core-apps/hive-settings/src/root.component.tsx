import { Grommet } from "grommet";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import { App } from "./App";
import { BaseStyle } from '@hexhive/styles'
import { AuthProvider, Loader } from '@hexhive/auth-ui'


export default function Root(props) {
  return (
    <AuthProvider
      authorizationServer={process.env.NODE_ENV == 'production' ? (process.env.REACT_APP_API || "https://staging-api.hexhive.io") : 'http://localhost:7000'}>
      {(user) => user ? ( 
        <Grommet style={{flex: 1, display: 'flex', height: '100vh', width: '100vw'}} theme={BaseStyle}>
          <Router basename={process.env.PUBLIC_URL || "/dashboard/settings"}>
            <Routes>
             <Route path="*" element={<App/>} />
            </Routes>
          </Router>
        </Grommet>
      ) : <Loader />}

    </AuthProvider>
  );
}

//<section>{props.name} is mounted!</section>