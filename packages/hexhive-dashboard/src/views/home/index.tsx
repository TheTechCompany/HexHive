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
                apps={[{icon: Profile}, {icon: Calendar, onClick: () => window.location.href = '/dashboard/flow'}, {icon: Tool, onClick: () => window.location.href = '/dashboard/command'}, {icon: Profile}, {icon: Profile}, {icon: Profile}, {icon: Profile}]}/>
        </Box>  
    );
}