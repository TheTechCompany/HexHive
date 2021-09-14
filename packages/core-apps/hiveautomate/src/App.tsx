import { Box } from 'grommet';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { TaskEditor } from './views/task-editor';
import { TaskList } from './views/task-list';
import { Workflows } from './views/workflow-editor';
import { WorkflowList } from './views/workflow-list';

export const App = () => {
    return (
        <Box width="100%" height="100%">
        <Router basename={process.env.PUBLIC_URL}>
            <Route path={"/"} exact component={WorkflowList} />
            <Route path={"/workflows"} exact component={WorkflowList} />
            <Route path={"/workflows/:id"} exact component={Workflows} />
            <Route path={"/tasks"} exact component={TaskList} />
            <Route path={"/tasks/:id"} component={TaskEditor} />
        </Router>
        </Box>
    )
}