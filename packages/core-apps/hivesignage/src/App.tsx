import { Box, Text, List } from 'grommet';
import React from 'react';
import { Switch, Route, matchPath} from 'react-router-dom'
import { Analytics } from './views/analytics';
import { DisplayList } from './views/display-list';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { CampaignList } from './views/campaign-list';
import { HomeView } from './views/home';
import { CampaignSingle } from './views/campaign-single';
import { ClusterList } from './views/cluster-list/ClusterList';
import { ComputerList } from './views/computer-list/ComputerList';
import { ClusterSingle } from './views/cluster-single/ClusterSingle';
import { ComputerSingle } from './views/computer-single/ComputerSingle';
import { DisplaySingle } from './views/display-single/DisplaySingle';

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
            label: "Clusters",
            path: "/clusters"
        },
        {
            label: "Computers",
            path: '/computers'
        },
        {
            label: "Displays",
            path: "/displays"
        },
        {
            label: "Campaigns",
            path: "/campaigns"
        },
        {
            label: "Analytics",
            path: '/analytics'
        }
    ]

    return (
        <ApolloProvider client={client}>

        <Box
            focusIndicator={false}
            background="neutral-2"
            direction="row" width="100%" height="100%">
            <Box 
                focusIndicator={false}
                width="small" elevation="small" background="brand"> 
                <List 
                    border={false}
                    pad={'none'}
                    onClickItem={({item}) => changeView(item.path)}
                    data={menu} 
                    primaryKey="label">
                    {(datum) => (
                        <Box 
                            focusIndicator={false}
                            hoverIndicator
                            pad={'xsmall'}
                            background={matchPath(window.location.pathname, {path: `/dashboard/signage${datum.path}`}) ? 'accent-2': ''}
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
                    <Route path={"/"} exact component={HomeView} />
                    <Route path={"/displays"} exact component={DisplayList} />
                    <Route path={"/displays/:id"}  component={DisplaySingle} />
                    <Route path={'/clusters'} exact component={ClusterList} />
                    <Route path={'/clusters/:id'} component={ClusterSingle} />
                    <Route path={'/computers'} exact component={ComputerList} />
                    <Route path={'/computers/:id'} component={ComputerSingle} />
                    <Route path={"/campaigns"} exact component={CampaignList} />
                    <Route path={"/campaigns/:id"} component={CampaignSingle} />
                    <Route path={`/analytics`} exact component={Analytics} />
                </Switch>
            </Box>

        </Box>
        </ApolloProvider>
    )
}