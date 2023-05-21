import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import { App } from "./App";
import { HexHiveTheme } from '@hexhive/styles'
import { AuthProvider } from '@hexhive/auth-ui'
import { ThemeProvider } from '@mui/material'

export default function Root(props) {
  return (
    <AuthProvider
      authorizationServer={process.env.NODE_ENV == 'production' ? (process.env.REACT_APP_API || "https://staging-api.hexhive.io") : 'http://localhost:7000'}>
        <ThemeProvider theme={HexHiveTheme}>
          <Router basename={process.env.PUBLIC_URL || "/dashboard/settings"}>
            <Routes>
              <Route path="*" element={<App/>} />
            </Routes>
          </Router>
        </ThemeProvider>
    </AuthProvider>
  );
}

//<section>{props.name} is mounted!</section>