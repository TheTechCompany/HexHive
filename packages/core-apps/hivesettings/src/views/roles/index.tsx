import { useMutation, useQuery } from "@hexhive/client";
import { Box, List } from "grommet";
import React, {useState} from "react";
import { CRUDList } from "../../components/CRUDList/CRUDList";
import { RoleModal } from "../../components/modals/RoleModal/RoleModal";
import { gql, useQuery as useApollo } from '@apollo/client'
export const Roles = () => {

	const [ selected, setSelected ] = useState<any>(undefined)
	const [ modalOpen, openModal ] = useState<boolean>(false);

	const query = useQuery({suspense: false, staleWhileRevalidate: true})

	const { data } = useApollo(gql`
		query Q {
			hiveOrganisations {
				appliances {
					id
					name
				}
			}
			roles {
				id
				name
				appliances {
					id
					name
				}
			}
		}
	`)
	const roles = data?.roles || [];
	const apps = data?.hiveOrganisations?.[0]?.appliances || [];

	const [ createRole, createInfo ] = useMutation((mutation, args: {name: string, email: string, add_apps?: string[]}) => {
		const user = mutation.updateHiveOrganisations({update: {
			roles: [{create: [{node: {name: args.name, appliances: {connect: [{where: {node: { id_IN: args.add_apps}}}]} } } ]}]
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

	const [ updateRole, updateInfo ] = useMutation((mutation, args: {id: string, name: string, add_apps?: string[], remove_apps?: string[]}) => {
		if(!args.id) return {err: "No ID"}
		const user = mutation.updateHiveOrganisations({update: {
			roles: [{update: {node: {name: args.name, appliances:[ {connect: [{where: {node: {id_IN: args.add_apps}}}], disconnect: [{where: {node: {id_IN: args.remove_apps}}}]}] }}, where: {node: {id: args.id}}}]
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
	
	
	return (
		<Box flex>
			<RoleModal 
				apps={apps}
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