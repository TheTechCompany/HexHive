import { Box, Text} from 'grommet';
import React from 'react'
import { ISchedule } from '../../modals';

interface FooterProps {
    data?: ISchedule;
}

export const Footer : React.FC<FooterProps> = ({data}) => {
    return (
        <Box>
            {(data?.notes || []).length > 0 ? (
                <Text className="notes-indicator">Notes: {data?.notes?.length}</Text>
            ): null}
        </Box>
    );
}