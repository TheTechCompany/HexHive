import React from 'react';

import { Box, Text, Button } from 'grommet'
import { Add } from '@mui/icons-material';

export interface HeaderBarProps {
    onClick?: () => void;
    title?: string;
}

export const HeaderBar : React.FC<HeaderBarProps> = (props) => {
    return (
        <Box 
            background={'dark-2'}
            align='center'
            justify='between'
            direction='row' 
            pad="xsmall">
            <Text>{props.title}</Text>
            <Button 
                onClick={props.onClick}
                icon={<Add />} 
                plain 
                style={{padding: 6, borderRadius: 3}} hoverIndicator />
        </Box>
    )
}