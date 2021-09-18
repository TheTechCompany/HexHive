import { Box, Text, List } from 'grommet';
import React from 'react';
import { Switch, Route, matchPath} from 'react-router-dom'
import { TaskEditor } from './views/task-editor';
import { TaskList } from './views/task-list';
import { Workflows } from './views/workflow-editor';
import { WorkflowList } from './views/workflow-list';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { TriggerList } from './views/trigger-list';
import { TriggerEditor } from './views/trigger-editor';

const client = new ApolloClient({
    uri: process.env.REACT_APP_API ? `${process.env.REACT_APP_API}/graphql`: 'http://localhost:7000/graphql',
    cache: new InMemoryCache(),
    credentials: 'include'
})

export const App = (props) => {
    const changeView = (name: string) => {
        props.history.push(name)   
    }

    const menu = [
        {
            label: "Workflows",
            path: "/workflows"
        },
        {
            label: "Tasks",
            path: "/tasks"
        },
        {
            label: "Triggers",
            path: '/triggers'
        }
    ]

    return (
        <ApolloProvider client={client}>

        <Box
            background="neutral-2"
            direction="row" width="100%" height="100%">
            <Box 
                focusIndicator={false}
                width="small" elevation="small" background="brand"> 
                <List 
                    pad={'none'}
                    onClickItem={({item}) => changeView(item.path)}
                    data={menu} 
                    primaryKey="label">
                    {(datum) => (
                        <Box 
                            hoverIndicator
                            pad={'xsmall'}
                            background={matchPath(window.location.pathname, {path: `/dashboard/automate${datum.path}`}) ? 'accent-2': ''}
                            direction="row">
                            <Text>{datum.label}</Text>
                        </Box>
                    )}
                </List>  
            </Box>
            <Box 
                style={{borderRadius: 8, overflow: 'hidden'}}
                flex 
                pad="xsmall">
                <Switch>
                    <Route path={"/"} exact component={WorkflowList} />
                    <Route path={"/workflows"} exact component={WorkflowList} />
                    <Route path={"/workflows/:id"} exact component={Workflows} />
                    <Route path={"/tasks"} exact component={TaskList} />
                    <Route path={"/tasks/:id"} component={TaskEditor} />
                    <Route path={`/triggers`} exact component={TriggerList} />
                    <Route path={`/triggers/:id`} exact component={TriggerEditor} />
                </Switch>
            </Box>

        </Box>
        </ApolloProvider>
    )
}