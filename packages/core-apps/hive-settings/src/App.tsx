import { Box, List, Typography } from '@mui/material';
import React from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { Apps } from './views/apps';
import { Home } from './views/home';
import { Roles } from './views/roles';
import { Usage } from './views/usage';
import { Users } from './views/users';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { AppSingle } from './views/app-single/AppSingle';
import { IntegrationList } from './views/integration-list';
import { IntegrationSingle } from './views/integration-single';
import { IntegrationEditor } from './views/integration-editor';

import { Sidebar } from '@hexhive/ui'

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
		{label: "Users", path: 'users'},
		{label: "Roles", path: 'roles'}, 
		{label: "Apps", path: 'apps'}, 
		{label: "Integrations", path: 'integrations'}, 
		{label: "Usage", path: "usage"}]

	const onNavigate = ({item}) => {
		navigate(`${item.path}`)
	}

	return (
		<ApolloProvider client={client}>

		<Box  sx={{display: 'flex', flex: 1}}>
			<Sidebar
				menu={menu}
				onSelect={(item) => {
					onNavigate({item: item})
				}}
				/>
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
			<Box sx={{flex: 1}}>
				<Routes>
					<Route path="" element={<Home/>} />
					<Route path="users" element={<Users/>} />
					<Route path="roles" element={<Roles/>} />
					<Route path="apps" element={<Outlet />} >
						<Route path="" element={<Apps />} />
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