import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CRUDList } from '../../components/CRUDList/CRUDList';

export const IntegrationList = (props) => {

	const navigate = useNavigate()
	
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
				navigate(`integrations/${item.id}`)
			}}
			data={data?.hiveIntegrationInstances}
			displayKeys={["name"]}
		/>
	)
}