import { Box, Text, List } from 'grommet';
import React from 'react';
import { Switch, Route, matchPath} from 'react-router-dom'
import { Analytics } from './views/analytics';
import { MachineList } from './views/machine-list';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { CampaignList } from './views/campaign-list';
import { HomeView } from './views/home';
import { CampaignSingle } from './views/campaign-single';
import { LocationList } from './views/location-list/LocationList';
import {  ScheduleList } from './views/schedule-list/ScheduleList';
import { LocationSingle } from './views/location-single/LocationSingle';
import {  ScheduleSingle } from './views/schedule-single/ScheduleSingle';
import { MachineSingle } from './views/machine-single';
import { SchedulePlay, System, Catalog, Map, ServerCluster, Analytics as AnalyticsIcon } from 'grommet-icons';
import { MachineTemplateList } from './views/machine-template-list';
import { MachineTemplateSingle } from './views/machine-template-single';

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
            icon: <SchedulePlay />,
            label: "Schedules",
            path: '/schedules'
        },
        {
            icon: <Catalog />,
            label: "Campaigns",
            path: "/campaigns"
        },
        {
            icon: <Map />,
            label: "Locations",
            path: "/locations"
        },
        {
            icon: <ServerCluster/>,
            label: "Machines",
            path: '/machines'
        },
        {
            icon: <System />,
            label: "Templates",
            path: `/machine-templates`
        },
        {
            icon: <AnalyticsIcon />,
            label: "Reports",
            path: '/reports'
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
                            gap="small"
                            focusIndicator={false}
                            hoverIndicator
                            pad={'small'}
                            align="center"
                            background={matchPath(window.location.pathname, {path: `/dashboard/signage${datum.path}`}) ? 'accent-2': ''}
                            direction="row">
                            {datum.icon}
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
                    <Route path={"/schedules"} exact component={ScheduleList} />
                    <Route path={"/schedules/:id"}  component={ScheduleSingle} />
                    <Route path={'/locations'} exact component={LocationList} />
                    <Route path={'/locations/:id'} component={LocationSingle} />
                    <Route path={'/machines'} exact component={MachineList} />
                    <Route path={'/machines/:id'} component={MachineSingle} />
                    <Route path={'/machine-templates'} exact component={MachineTemplateList} />
                    <Route path={'/machine-templates/:id'} component={MachineTemplateSingle} />
                    <Route path={"/campaigns"} exact component={CampaignList} />
                    <Route path={"/campaigns/:id"} component={CampaignSingle} />
                    <Route path={`/reports`} exact component={Analytics} />
                </Switch>
            </Box>

        </Box>
        </ApolloProvider>
    )
}