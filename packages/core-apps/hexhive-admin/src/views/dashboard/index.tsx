import { Box, Text, Header } from "grommet";
import React from "react";
import { Route, Switch } from "react-router";
import {Sidebar} from '../../components/sidebar'
import { AppPage } from "../../pages/apps";
import { OrgPage } from "../../pages/organisations";
import { UserPage } from "../../pages/users";

const MENU = [
    {label: "Organisations", path: '/organisations'},
    {label: "Users", path: '/users'},
    {label: "Apps", path: '/apps'},
]

export const Dashboard = (props: any) => {
    return (
        <Box flex>
            <Header 
                pad="xsmall"
                background="brand"
                height="xxsmall">
                <Text>Admin</Text>
            </Header>
            <Box direction="row" flex>
                <Sidebar
                    onClick={(item: any) => {
                        props.history.push(`${props.match.url}${item.path}`)
                    }}
                    items={MENU} />
                <Box margin={{left: 'xsmall'}} flex>
                    <Switch>
                        <Route path={`${props.match.url}/users`} component={UserPage} />
                        <Route path={`${props.match.url}/organisations`} component={OrgPage} />
                        <Route path={`${props.match.url}/apps`} component={AppPage} />
                    </Switch>
                </Box>
            </Box>
        </Box>
    );
}