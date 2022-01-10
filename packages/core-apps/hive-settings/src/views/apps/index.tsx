import { Box, List } from "grommet";
import React from "react";
import { CRUDList } from "../../components/CRUDList/CRUDList";
import { useQuery } from '@hexhive/client'
import { useQuery as useApollo, gql } from '@apollo/client'
import { useNavigate } from "react-router-dom";

export const Apps = (props) => {

	const navigate = useNavigate()

	const { data } = useApollo(gql`
		query Q {
			hiveOrganisations {
				appliances {
					... on HiveAppliance {
						id
						name
					}
				}
			}
		}
	`)
	
	const apps = data?.hiveOrganisations?.[0]?.appliances || [];

	// const query = useQuery({
	// 	suspense: false,
	// 	staleWhileRevalidate: true
	// })
	
	// const apps = query.hiveAppliances()

	return (
		<Box flex>
			<CRUDList	
				onClick={(item) => {
					navigate(`apps/${item.id}`)
				}}
				displayKeys={["name"]}
				data={apps}/>
		</Box>
	)	
}