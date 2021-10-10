import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { CRUDList } from '../../components/CRUDList/CRUDList';

export const IntegrationList = (props) => {

	const { data } = useQuery(gql`
		query Q {
			hiveIntegrationInstances{
				id
				name
			}
		}
	`)
	return (
		<CRUDList
			onClick={(item) => {
				props.history.push(`/integrations/${item.id}`)
			}}
			data={data?.hiveIntegrationInstances}
			displayKeys={["name"]}
		/>
	)
}