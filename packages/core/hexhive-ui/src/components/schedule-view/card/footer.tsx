import { Box, Text} from 'grommet';
import React from 'react'
import { ISchedule } from '../../modals';

interface FooterProps {
    data?: ISchedule;
}

export const Footer : React.FC<FooterProps> = ({data}) => {
    console.log(data)
    return (data?.notes || []).length > 0 ?  (
        <Box 
            direction="row"
            align="center"
            justify="center"
            background={"#F2726B"}>
            <Text color="white" className="notes-indicator">Notes: {data?.notes?.length}</Text>
        </Box>
    ) : null;
}