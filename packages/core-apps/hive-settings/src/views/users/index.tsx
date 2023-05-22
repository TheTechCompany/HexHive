import { Box } from "@mui/material";
import React, {useState} from "react";
import { CRUDList } from "../../components/CRUDList/CRUDList";
import { UserModal } from "../../components/modals/UserModal/UserModal";
import { gql, useQuery as useApollo, useMutation, useApolloClient } from '@apollo/client'
import { useAuth } from "@hexhive/auth-ui";

export const Users = () => {
	const client = useApolloClient()

	const { activeUser } = useAuth()

	const [ selected, setSelected ] = useState<any>(undefined)
	const [ modalOpen, openModal ] = useState<boolean>(false)

	const { data } = useApollo(gql`
		query UsersAndRoles{
			users {
				id
				name
				email

				roles {
					id
					name
				}

			}

			roles {
				id
				name
			}
		
		}
	`)

	const refetch = () => {
		client.refetchQueries({include: ['UsersAndRoles']})
	}


	// const users = organisation.members() || []
	// const users = query.hiveUsers({where: {organisation: {members: {id: activeUser?.id}}}})
	// const roles = organisation.roles()  || [] // query.roles({where: {organisation: {id: activeUser?.id}}})

	const users = data?.users || [];
	const roles = data?.roles || [];

	console.log({users})
	// console.log(data)

	// const users = query.hiveUsers({}).map((x) => ({...x, roles: x.roles()?.map((y) => ({...y}))}))
	// const roles = query.roles({})

	const [ createUser ] = useMutation(gql`
		mutation CreateUser ($name: String, $email: String, $roles: [String]) {
			createUser(input: {name: $name, email: $email, roles: $roles}){
				id
			}
		}
	`, {
		refetchQueries: ['UsersAndRoles']
	})

	const [ updateUser ] = useMutation(gql`
		mutation UpdateUser ($id: ID, $name: String, $email: String, $roles: [String] ){
			updateUser(id: $id, input: {name: $name, email: $email, roles: $roles}){
				id
			}
		}
	`, {
		refetchQueries: ['UsersAndRoles']
	})
	

	return (
		<Box sx={{flex: 1}}>
			<CRUDList
				onMore={(item) => {
					setSelected(item)
					openModal(true)
				}}
				onCreate={() => {
					openModal(true)
				}}
				data={users}
				displayKeys={["name"]}/>
			
				<UserModal 
					roles={roles}
					selected={selected}
					onClose={() => openModal(false)}
					onSubmit={(user) => {
						if(!user.id){
							createUser({variables: {...user}}).then((data) => {
								console.log(data)
								openModal(false)
								refetch()
							})
						}else{
							console.log(user)
							updateUser({variables: {...user}}).then((data) => {
								openModal(false)
								refetch()
							})
						}
						console.log(user)
					}}
					open={modalOpen} />
		</Box>
	)	
}