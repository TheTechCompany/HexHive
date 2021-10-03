import { Box, Grommet } from "grommet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MachineList } from "./views/machine-list";
import { MachineView } from "./views/machine-view";
import { BaseStyle } from '@hexhive/styles';
import { BaseHeader } from "./components/header";

export default function Root(props) {
  return (
  <Grommet theme={BaseStyle} full>
    <Router basename={process.env.PUBLIC_URL}>
      <Box fill>
        <BaseHeader />
        <Route path="/" exact component={MachineList} />
        <Route path="/:id" component={MachineView} />
      </Box>
    </Router>
  </Grommet>)
}
