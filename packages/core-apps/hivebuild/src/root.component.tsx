import { Box, Grommet } from "grommet";
import { BaseStyle } from "@hexhive/styles";
import { BaseHeader } from "./components/header";
import { AppBuilder } from "./views/app-builder";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { App } from "./App";

export default function Root(props) {
  return (
    <Grommet
      full
      theme={BaseStyle}>
      <Router basename={process.env.PUBLIC_URL}>
        <Box
          fill
          flex>
          <BaseHeader />

          <Route path="/" component={App} />
        </Box>
      </Router>
    </Grommet>);
}
