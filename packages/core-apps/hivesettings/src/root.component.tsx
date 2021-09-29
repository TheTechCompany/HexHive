import { BrowserRouter as Router, Route  } from "react-router-dom";
import { App } from "./App";
export default function Root(props) {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  );
}

//<section>{props.name} is mounted!</section>