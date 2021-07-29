import React from 'react';
import { Box } from 'grommet'
import { AppPicker } from '../../components/app-picker';

import Profile from '../../assets/profile.svg';
import Calendar from '../../assets/calendar.svg';
import Tool from '../../assets/tool.svg';
import { SettingsOption } from 'grommet-icons';

export const Home : React.FC<any> = (props) => {
    return (
        <Box 
            justify="center"
            align="center"
            flex>
            <AppPicker 
                apps={[
                    { icon: Calendar, text: "Flow", onClick: () => window.location.href = '/dashboard/flow'}, 
                    { icon: Tool, text: "Command", onClick: () => window.location.href = '/dashboard/command'}, 
                    { icon: Tool, text: "3D", onClick: () => window.location.href = '/dashboard/3d-models'},
                    { icon: Tool, text: "Organisation", onClick: () => window.location.href = '/dashboard/organisation'},
                    { icon: <SettingsOption />, text: "Settings", onClick: () => window.location.href = '/dashboard/settings'},
                ]}/>
        </Box>  
    );
}