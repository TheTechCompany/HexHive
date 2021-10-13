import React, { useState } from 'react';
import { Box, Button, Text, List } from 'grommet'
import { Add } from 'grommet-icons';
import { useQuery, gql } from '@apollo/client';

export const Alarms = (props) => {
	// const [ alarms, setAlarms ] = useState<any[]>([])
	

	const { data } = useQuery(gql`
		query Q ($id: ID){
			commandPrograms(where: {id: $id}) {
				alarms {
					id
					name
				}
			}
		}
	`)

	const alarms = data?.commandPrograms?.[0]?.alarms || [];

	return (
		<Box flex>

			<Box align="center" justify="between" direction="row">
				<Text></Text>
				<Button 
					hoverIndicator
					style={{padding: 6, borderRadius: 3}}	
					plain
					size="small"
					icon={<Add size="small" />} />
			</Box>
			<List
				data={alarms} />
		</Box>
	)
}