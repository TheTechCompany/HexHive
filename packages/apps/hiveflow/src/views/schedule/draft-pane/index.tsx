import React from  'react';
import { Box, Text, Collapsible } from 'grommet'
import { useQuery } from '@hexhive/client';
import { stringToColor } from "@hexhive/utils"
export const DraftPane = (props) => {
console.log(props)

	const getHours = (item: any) => {
		return (item?.items || []).reduce((prev, curr) => {
			if(!prev[curr.location]) prev[curr.location] = 0;
			prev[curr.location] += curr.estimate;
			return prev;
		}, {})
	}

	const renderHours = (x: any) => {
		const hours = getHours(x)
		return Object.keys(hours).map((key) => (
			<Box direction="column" justify="end">
			<Text size="small">{key}</Text>
			<Text size="small">{hours[key]}hrs</Text>
			</Box>
		))
	}
	return (
		<Box 	
			overflow="scroll"
			gap="xsmall"
			pad={{right: 'xxsmall'}}
			width={props.drafts.length > 0 ? props.open ? '200px' : '42px' : `0px`}>
        {props.drafts.filter((a) => a.project).map((x) => (
			<Box
				height={{min: 'min-content'}}
			justify="between"
			 round="small" 
			background={stringToColor(`${x.project?.id} - ${props.projects.find((a) => a?.id == x.project?.id)?.name}`)}
			pad={{vertical: '4px', horizontal: '4px'}} direction="row">
				<Box
					flex
					align={props.open ? 'start': 'center'} 
					direction="column" 
					>
					{props.open && <Text size="small">{props.projects.find((a) => a?.id == x.project?.id)?.name}</Text>}
				
					<Text size="small">{x.project?.id}</Text>
				</Box>
				{props.open && <Box direction="column">
					{renderHours(x)}
				</Box>}
			</Box>

          ))}  
		</Box>
	)
}