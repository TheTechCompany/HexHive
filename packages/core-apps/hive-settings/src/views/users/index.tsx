import { Box, List } from "grommet";
import React, {useState} from "react";
import { CRUDList } from "../../components/CRUDList/CRUDList";
import { resolved, useMutation, useQuery } from '@hexhive/client'
import { UserModal } from "../../components/modals/UserModal/UserModal";
import { gql, useQuery as useApollo, useApolloClient } from '@apollo/client'
import { useAuth } from "@hexhive/auth-ui";

export const Users = () => {
	const client = useApolloClient()

	const { activeUser } = useAuth()

	const [ selected, setSelected ] = useState<any>(undefined)
	const [ modalOpen, openModal ] = useState<boolean>(false)
	const query = useQuery({suspense: false, staleWhileRevalidate: true})

	const { data } = useApollo(gql`
		query Q{
			hiveUsers {
				id
				name
				username
				roles {
					id
					name
				}
			}
			roles{
				id
				name
			}
		}
	`)

	const refetch = () => {
		client.refetchQueries({include: ['Q']})
	}

	const organisation = query.hiveOrganisations({where: {members: {id: activeUser.id}}})?.[0]

	// const users = organisation.members() || []
	// const users = query.hiveUsers({where: {organisation: {members: {id: activeUser?.id}}}})
	// const roles = organisation.roles()  || [] // query.roles({where: {organisation: {id: activeUser?.id}}})

	const users = data?.hiveUsers || [];
	const roles = data?.roles || [];

	// console.log(data)

	// const users = query.hiveUsers({}).map((x) => ({...x, roles: x.roles()?.map((y) => ({...y}))}))
	// const roles = query.roles({})

	const [ createUser, createInfo ] = useMutation((mutation, args: {name: string, email: string}) => {
		const user = mutation.inviteHiveUser({name: args.name, email: args.email})
		return {
			item : {
				result: user
			},
			err: null
		}
	}, {
		refetchQueries: [],
		awaitRefetchQueries: true
	})
//[{node: {name: args.name, email: args.email} } ]

	const [ updateUser, updateInfo ] = useMutation((mutation, args: {id: string, name: string, email: string, add_roles: string[], remove_roles: string[]}) => {
		if(!args.id) return {err: "No ID"}
		const user = mutation.updateHiveOrganisations({update: {
			members: [{
				update: {
					node: {
						name: args.name, 
						username: args.email, 
						roles: [
							{
								connect: [
									{where: {node: {id_IN: args.add_roles}}}
								], 
								disconnect: [
									{where: {node: {id_IN: args.remove_roles}}}
								]
							}
						]
					}
				}, 
				where: {node: {id: args.id}}
			}]
		}})
		return {
			item : {
				...user.hiveOrganisations[0]
			},
			err: null
		}
	}, {
		refetchQueries: [],
		awaitRefetchQueries: true
	})
	console.log(users)

	return (
		<Box flex>
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
							createUser({args: {...user}}).then((data) => {
								console.log(data)
								openModal(false)
								refetch()
							})
						}else{
							console.log(user)
							updateUser({args: {...user}}).then((data) => {
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