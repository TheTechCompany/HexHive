import React from 'react';
import { Box } from 'grommet'
import { AppPicker } from '../app-picker';

import Profile from '../../assets/profile.svg';
import Calendar from '../../assets/calendar.svg';
import Tool from '../../assets/tool.svg';

export const Home : React.FC<any> = (props) => {
    return (
        <Box 
            justify="center"
            align="center"
            flex>
            <AppPicker 
                apps={[{icon: Profile}, {icon: Calendar}, {icon: Tool}, {icon: Profile}, {icon: Profile}, {icon: Profile}, {icon: Profile}]}/>
        </Box>  
    );
}