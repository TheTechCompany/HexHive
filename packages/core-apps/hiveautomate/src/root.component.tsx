import { Grommet } from "grommet";
import { App } from "./App";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BaseStyle } from '@hexhive/styles'
export default function Root(props) {
  return <Router basename={process.env.PUBLIC_URL}>
  <Grommet style={{width: '100%', height: '100%'}} theme={BaseStyle}>
    <Route path="/" component={App} />
  </Grommet>
  </Router>
}
