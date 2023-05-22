import { Box } from "@mui/material";
import React, {useState} from "react";
import { CRUDList } from "../../components/CRUDList/CRUDList";
import { RoleModal } from "../../components/modals/RoleModal/RoleModal";
import { gql, useMutation, useQuery as useApollo, useApolloClient } from '@apollo/client'
export const Roles = () => {

	const client = useApolloClient()

	const [ selected, setSelected ] = useState<any>(undefined)
	const [ modalOpen, openModal ] = useState<boolean>(false);


	const { data } = useApollo(gql`
		query Applications {
			hiveAppliances(owned: true){
				id
				name
			}
			roles {
				id
				name
			}
		}
	`)
	const refetch = () => {
		client.refetchQueries({include: ['Q']})
	}

	const roles = data?.roles || [];
	const apps = data?.hiveAppliances || [];

	const [ createRole ] = useMutation(gql`
		mutation CreateRole($name: String, $appliances: [String]) {
			createRole(input: {name: $name, appliances: $appliances}){
				id
			}
		}
	`, {
		refetchQueries: ['Applications']
	})

	const [ updateRole ] = useMutation(gql`
		mutation UpdateRole($id: ID, $name: String, $appliances: [String]){
			updateRole(id: $id, input: {name: $name, appliances: $appliances}){
				id
			}
		}
	`, {
		refetchQueries: ['Applications']
	})

	
	return (
		<Box>
			<RoleModal 
				apps={apps}
				selected={selected}
				onSubmit={(role) => {
					if(role.id){
						updateRole({variables: {...role}}).then(() => {
							openModal(false)
							refetch()
						})
					}else{
						createRole({variables: {...role}}).then(() => {
							openModal(false)
							refetch()
						})
					}
				}}
				open={modalOpen} 
				onClose={() => openModal(false)} />
			<CRUDList
				displayKeys={["name"]}
				onMore={(item) => { setSelected(item); openModal(true) }}
				onCreate={() => openModal(true)}
				data={roles}/>
		</Box>
	)	
}