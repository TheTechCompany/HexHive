import { Box, ListItemButton, Typography } from "@mui/material";
import React, {useState} from "react";
import { CRUDList } from "../../components/CRUDList/CRUDList";
import { UserModal } from "../../components/modals/UserModal/UserModal";
import { gql, useQuery as useApollo, useMutation, useApolloClient } from '@apollo/client'
import { useAuth } from "@hexhive/auth-ui";

export const Users = () => {
	const client = useApolloClient()

	const [ search, setSearch ] = useState('');

	const { activeUser } = useAuth()

	const [ selected, setSelected ] = useState<any>(undefined)
	const [ modalOpen, openModal ] = useState<boolean>(false)

	const { data } = useApollo(gql`
		query UsersAndRoles{
			users {
				id
				name
				email

				inactive

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
		mutation CreateUser ($input: UserInput) {
			createUser(input: $input){
				id
			}
		}
	`, {
		refetchQueries: ['UsersAndRoles']
	})

	const [ updateUser ] = useMutation(gql`
		mutation UpdateUser ($id: ID, $input: UserInput ){
			updateUser(id: $id, input: $input){
				id
			}
		}
	`, {
		refetchQueries: ['UsersAndRoles']
	})

	const searchFilter = (a: any) => {
		return (!search || search.length == 0) || a.name.indexOf(search) > -1
	}
	

	return (
		<Box sx={{flex: 1, display: 'flex', minHeight: 0, flexDirection: 'column'}}>
			<CRUDList
				onSearch={(search) => setSearch(search)}
				search={search}

				onMore={(item) => {
					setSelected(item)
					openModal(true)
				}}
				onCreate={() => {
					openModal(true)
				}}
				data={users.filter(searchFilter).sort((a, b) => ((a.inactive || false) - (b.inactive || false)) || (((a.email.length == 0) as any) - ((b.email.length == 0) as any)) || (a.name).localeCompare(b.name)  )}
				displayKeys={["name"]}
				renderItem={(item) => (
					<ListItemButton sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} disabled={item.inactive}>
						<Typography>{item.name}</Typography>
						<Typography fontSize={'12px'}>{item.inactive ? "account inactive" : (!item.email || item.email.length == 0) ? "not setup" : ""}</Typography>
					</ListItemButton>
				)}/>
			
				<UserModal 
					roles={roles}
					selected={selected}
					onClose={() => {
						openModal(false)
						setSelected(null)
					}}
					onSubmit={(user) => {
						if(!user.id){
							createUser({
								variables: {
									input: {
										name: user.name,
										roles: user.roles,
										inactive: user.inactive,
										email: user.email
									}
								}
							}).then((data) => {
								console.log(data)
								openModal(false)
								refetch()
							})
						}else{
							console.log(user)
							updateUser({variables: {id: user.id, input: {
								name: user.name,
								roles: user.roles,
								inactive: user.inactive,
								email: user.email
							}}}).then((data) => {
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