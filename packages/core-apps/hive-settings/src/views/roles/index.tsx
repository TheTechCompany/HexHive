import { Box } from "@mui/material";
import React, {useState} from "react";
import { CRUDList } from "../../components/CRUDList/CRUDList";
import { RoleModal } from "../../components/modals/RoleModal/RoleModal";
import { gql, useMutation, useQuery as useApollo, useApolloClient } from '@apollo/client'
export const Roles = () => {

	const client = useApolloClient()

	const [ search, setSearch ] = useState('');


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
			roles {
				id
				name

				permissions {
					id
					name
				}
				
				applications {
					id
					name
				}
			}
		}
	`)
	const refetch = () => {
		client.refetchQueries({include: ['Q']})
	}

	const roles = data?.roles || [];
	const permissions = data?.permissions || [];
	const apps = data?.hiveAppliances || [];

	const [ createRole ] = useMutation(gql`
		mutation CreateRole($name: String, $applications: [String], $permissions: [String]) {
			createRole(input: {name: $name, applications: $applications, permissions: $permissions}){
				id
			}
		}
	`, {
		refetchQueries: ['Applications']
	})

	const [ updateRole ] = useMutation(gql`
		mutation UpdateRole($id: ID, $name: String, $applications: [String], $permissions: [String]){
			updateRole(id: $id, input: {name: $name, applications: $applications, permissions: $permissions}){
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
			<RoleModal 
				apps={apps}
				permissions={permissions}
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
				search={search}
				onSearch={(search) => setSearch(search)}
				displayKeys={["name"]}
				onMore={(item) => { setSelected(item); openModal(true) }}
				onCreate={() => openModal(true)}
				data={roles.filter(searchFilter)}/>
		</Box>
	)	
}