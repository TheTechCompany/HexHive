import { Box } from "@mui/material";
import React, { useState } from "react";
import { CRUDList } from "../../components/CRUDList/CRUDList";
import { useQuery } from '@hexhive/client'
import { useQuery as useApollo, useMutation, gql } from '@apollo/client'
import { useNavigate } from "react-router-dom";
import { AppModal } from "../../components/modals/AppModal/AppModal";

export const Apps = (props) => {

	const [ modalOpen, openModal ] = useState(false);

	const navigate = useNavigate()

	const { data } = useApollo(gql`
		query OrgApps {
			applications:hiveAppliances(owned: true){
				id
				name
			}
	

			hiveAppliances(owned: false) {
				id
				name
			}
		}
	`)
	
	const [ createApp ] = useMutation(gql`
		mutation AssignApp ($app: ID) {
			createOrganisationApp(app: $app)
		}
	`, {
		refetchQueries: ['OrgApps']
	})
		
	const [ deleteApp ] = useMutation(gql`
		mutation RemoveApp ($app: ID) {
			deleteOrganisationApp(app: $app)
		}
	`, {
		refetchQueries: ['OrgApps']
	})


	const apps = data?.applications || [];

	const available_apps = data?.hiveAppliances || [];

	// const query = useQuery({
	// 	suspense: false,
	// 	staleWhileRevalidate: true
	// })
	
	// const apps = query.hiveAppliances()

	return (
		<Box>
			<AppModal 
				onSubmit={(id) => {
					createApp({
						variables: {
							app: id
						}
					}).then(() => {
						openModal(false);
					})

				}}
				onClose={() => {
					openModal(false);
				}}
				apps={available_apps}
				open={modalOpen} />
			<CRUDList	
				onClick={(item) => {
					navigate(`apps/${item.id}`)
				}}
				onCreate={() => {
					openModal(true)
				}}
				displayKeys={["name"]}
				data={apps}/>
		</Box>
	)	
}