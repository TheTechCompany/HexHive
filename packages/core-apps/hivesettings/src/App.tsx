import { Box, List, Text } from 'grommet';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Apps } from './views/apps';
import { Home } from './views/home';
import { Roles } from './views/roles';
import { Usage } from './views/usage';
import { Users } from './views/users';

export const App = (props)=> {
	console.log(props)
	const menu = [{label: "Users", path: '/users'},{label: "Roles", path: '/roles'}, {label: "Apps", path: '/apps'}, {label: "Usage", path: "/usage"}]
	const onNavigate = ({item}) => {
		props.history.push(`${item.path}`)
	}

	return (
		<Box direction="row" flex>
			<Box width="small" background="brand">
				<List
					onClickItem={onNavigate}
					border={false}
					primaryKey="label"
					data={menu} />
			</Box>
			<Box background="neutral-2" pad="xsmall" flex>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/users" component={Users} />
					<Route path="/roles" component={Roles} />
					<Route path="/apps" component={Apps} />
					<Route path="/usage" component={Usage} />
				</Switch>
			</Box>
		</Box>
	)
}