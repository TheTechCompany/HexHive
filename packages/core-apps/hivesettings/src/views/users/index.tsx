import { Box, List } from "grommet";
import React, {useState} from "react";
import { CRUDList } from "../../components/CRUDList/CRUDList";
import { useMutation, useQuery } from '@hexhive/client'
import { UserModal } from "../../components/modals/UserModal/UserModal";

export const Users = () => {
	const [ selected, setSelected ] = useState<any>(undefined)
	const [ modalOpen, openModal ] = useState<boolean>(false)
	const query = useQuery({suspense: false, staleWhileRevalidate: true})

	const users = query.users({where: {organisation: {name: "Test Org"}}})

	const [ createUser, createInfo ] = useMutation((mutation, args: {name: string, email: string}) => {
		const user = mutation.updateOrganisations({where: {name: "Test Org"}, update: {
			members: [{create: [{node: {name: args.name, email: args.email} } ]}]
		}})
		return {
			item : {
				...user.organisations[0]
			},
			err: null
		}
	}, {
		refetchQueries: [query.users({where: {organisation: {name: "Test Org"}}})],
		awaitRefetchQueries: true
	})
//[{node: {name: args.name, email: args.email} } ]

	const [ updateUser, updateInfo ] = useMutation((mutation, args: {id: string, name: string, email: string}) => {
		if(!args.id) return {err: "No ID"}
		const user = mutation.updateOrganisations({where: {name: "Test Org"}, update: {
			members: [{update: {node: {name: args.name, email: args.email}}, where: {node: {id: args.id}} }]
		}})
		return {
			item : {
				...user.organisations[0]
			},
			err: null
		}
	}, {
		refetchQueries: [query.users({where: {organisation: {name: "Test Org"}}})],
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
					selected={selected}
					onClose={() => openModal(false)}
					onSubmit={(user) => {
						if(!user.id){
							createUser({args: {...user}}).then((data) => {
								console.log(data)
								openModal(false)
							})
						}else{
							updateUser({args: {...user}}).then((data) => {
								openModal(false)
							})
						}
						console.log(user)
					}}
					open={modalOpen} />
		</Box>
	)	
}