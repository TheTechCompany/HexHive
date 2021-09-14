import { Grommet } from "grommet";
import { App } from "./App";
import { BaseStyle } from '@hexhive/styles'
export default function Root(props) {
  return <Grommet style={{width: '100%', height: '100%'}} theme={BaseStyle}>
    <App />
  </Grommet>
}
