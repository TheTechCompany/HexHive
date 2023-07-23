import { Box, List, ListItem, ListItemButton, Typography, Divider } from '@mui/material';
import React from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { Apps as AppsView } from './views/apps';
import { Home } from './views/home';
import { Roles } from './views/roles';
import { Permissions } from './views/permissions';
import { Usage } from './views/usage';
import { Users } from './views/users';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { AppSingle } from './views/app-single/AppSingle';
import { IntegrationList } from './views/integration-list';
import { IntegrationSingle } from './views/integration-single';
import { IntegrationEditor } from './views/integration-editor';
import { AdminPanelSettings, Apps, IntegrationInstructions, Assessment, Key, Person } from '@mui/icons-material'
import { Sidebar } from './components/sidebar'
import { PermissionEditor } from './views/permissions/editor';

const API_URL = localStorage.getItem('HEXHIVE_API') || process.env.REACT_APP_API;

const client = new ApolloClient({
	uri: API_URL ? `${API_URL}/graphql` : 'http://localhost:7000/graphql',
	cache: new InMemoryCache(),
	credentials: 'include'
})

export const App = (props)=> {

	const navigate = useNavigate()

	console.log(props)
	const menu = [
		{label: "Users", path: 'users', icon: <Person />},
		{label: "Roles", path: 'roles', icon: <AdminPanelSettings /> }, 
		{label: "Permissions", path: 'permissions', icon: <Key /> }, 
		{label: "Apps", path: 'apps', icon: <Apps />}, 
		// {label: "Integrations", path: 'integrations', icon: <IntegrationInstructions />}, 
		// {label: "Usage", path: "usage", icon: <Assessment />}]
	]


	return (
		<ApolloProvider client={client}>

		<Box sx={{display: 'flex', minHeight: 0, flex: 1}}>
			<Sidebar items={menu} />
			
			<Divider sx={{ marginRight: '12px'}} orientation='vertical' />
			{/* <Box width="small" background="brand">
				<List
					onClickItem={onNavigate}
					border={false}
					primaryKey="label"
					data={menu}>
					{(datum) => (
						<Box direction="row" align="center">
							<Text>{datum.label}</Text>
						</Box>
					)}
				</List>
			</Box> */}
			<Box sx={{flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '12px', paddingRight: '12px'}}>
				<Routes>
					<Route path="" element={<Home/>} />
					<Route path="users" element={<Users/>} />
					<Route path="roles" element={<Roles/>} />
					<Route path="permissions" element={<Outlet/>}>
						<Route path="" element={<Permissions />} />
						<Route path=":id" element={<PermissionEditor />} />
					</Route>
					<Route path="apps" element={<Outlet />} >
						<Route path="" element={<AppsView />} />
						<Route path="apps/:id" element={<AppSingle/>} />
					</Route>
					<Route path="integrations" element={<Outlet />} >
						<Route path="" element={<IntegrationList/>} />
						<Route path=":id" element={<IntegrationSingle/>} />
						<Route path=":id/edit" element={<IntegrationEditor/>} />
					</Route>

					<Route path="usage" element={<Usage/>} />
				</Routes>
			</Box>
		</Box>
		</ApolloProvider>
	)
}