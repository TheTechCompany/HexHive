import React from  'react';
import { Box, Text, Collapsible } from 'grommet'
import { useQuery } from '@hexhive/client';
import { stringToColor } from "@hexhive/utils"
export const DraftPane = (props) => {

	return (
		<Box 	
			overflow="scroll"
			pad={{right: 'xxsmall'}}
			width={props.open ? '200px' : '42px'}>
        {props.drafts.filter((a) => a.project).map((x) => (
            <Box
				align={props.open ? 'start': 'center'} 
				direction="column" 
				round="small" 
				background={stringToColor(`${x.project?.id} - ${props.projects.find((a) => a?.id == x.project?.id)?.name}`)}
				pad="4px">
				{props.open && <Text size="small">{props.projects.find((a) => a?.id == x.project?.id)?.name}</Text>}
              <Text size="small">{x.project?.id}</Text>
            </Box>
          ))}  
		</Box>
	)
}