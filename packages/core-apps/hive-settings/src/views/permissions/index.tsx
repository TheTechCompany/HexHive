import { Box } from "@mui/material";
import React, {useState} from "react";
import { CRUDList } from "../../components/CRUDList/CRUDList";
import { RoleModal } from "../../components/modals/RoleModal/RoleModal";
import { gql, useMutation, useQuery as useApollo, useApolloClient } from '@apollo/client'
import { PermissionModal } from "../../components/modals/PermissionModal/PermissionModal";
import { useNavigate } from "react-router-dom";

export const Permissions = () => {

	const client = useApolloClient()

	const [ search, setSearch ] = useState('');

	const navigate = useNavigate()

	const [ selected, setSelected ] = useState<any>(undefined)
	const [ modalOpen, openModal ] = useState<boolean>(false);


	const { data } = useApollo(gql`
		query Applications {
			hiveAppliances(owned: true){
				id
				name
			}
			permissions {
				id
				name

				
			}
		}
	`)

	const refetch = () => {
		client.refetchQueries({include: ['Q']})
	}

	const permissions = data?.permissions || [];
	const apps = data?.hiveAppliances || [];

	const [ createPermission ] = useMutation(gql`
		mutation CreatePermission($name: String) {
			createPermission(input: {name: $name}){
				id
			}
		}
	`, {
		refetchQueries: ['Applications']
	})

	const [ updatePermission ] = useMutation(gql`
		mutation UpdatePermission($id: ID, $name: String){
			updatePermission(id: $id, input: {name: $name}){
				id
			}
		}
	`, {
		refetchQueries: ['Applications']
	})

	const searchFilter = (a: any) => {
		return (!search || search.length == 0) || a.name.indexOf(search) > -1
	}
	
	return (
		<Box sx={{flex: 1, minHeight: 0, display: 'flex'}}> 
			<PermissionModal 
				selected={selected}
				onSubmit={(role) => {
					if(role.id){
						updatePermission({variables: {...role}}).then(() => {
							openModal(false)
							refetch()
						})
					}else{
						createPermission({variables: {...role}}).then(() => {
							openModal(false)
							refetch()
						})
					}
				}}
				open={modalOpen} 
				onClose={() => openModal(false)} />
			<CRUDList
				search={search}
				onSearch={(search) => setSearch(search)}
				displayKeys={["name"]}
				onMore={(item) => { setSelected(item); openModal(true) }}
				onCreate={() => openModal(true)}
				onClick={(item) => navigate(item.id)}
				data={permissions.filter(searchFilter)}/>
		</Box>
	)	
}