import { useMutation, useQuery } from "@hexhive/client";
import { Box, List } from "grommet";
import React, {useState} from "react";
import { CRUDList } from "../../components/CRUDList/CRUDList";
import { RoleModal } from "../../components/modals/RoleModal/RoleModal";

export const Roles = () => {

	const [ selected, setSelected ] = useState<any>(undefined)
	const [ modalOpen, openModal ] = useState<boolean>(false);

	const query = useQuery({suspense: false, staleWhileRevalidate: true})

	const roles = query.roles({where: {organisation: {name: "Test Org"}}})

	const [ createRole, createInfo ] = useMutation((mutation, args: {name: string, email: string}) => {
		const user = mutation.updateOrganisations({where: {name: "Test Org"}, update: {
			roles: [{create: [{node: {name: args.name} } ]}]
		}})
		return {
			item : {
				...user.organisations[0]
			},
			err: null
		}
	}, {
		refetchQueries: [query.roles({where: {organisation: {name: "Test Org"}}})],
		awaitRefetchQueries: true
	})

	const [ updateRole, updateInfo ] = useMutation((mutation, args: {id: string, name: string}) => {
		if(!args.id) return {err: "No ID"}
		const user = mutation.updateOrganisations({where: {name: "Test Org"}, update: {
			roles: [{update: {node: {name: args.name}}, where: {node: {id: args.id}}}]
		}})
		return {
			item : {
				...user.organisations[0]
			},
			err: null
		}
	}, {
		refetchQueries: [query.roles({where: {organisation: {name: "Test Org"}}})],
		awaitRefetchQueries: true
	})
	
	
	return (
		<Box flex>
			<RoleModal 
				selected={selected}
				onSubmit={(role) => {
					if(role.id){
						updateRole({args: {...role}}).then(() => {
							openModal(false)
						})
					}else{
						createRole({args: {...role}}).then(() => {
							openModal(false)
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