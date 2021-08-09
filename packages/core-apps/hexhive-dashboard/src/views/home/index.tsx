import React from 'react';
import { Box } from 'grommet'
import { AppPicker } from '../../components/app-picker';

import HiveCommand from '../../assets/hivecommand.svg'
import HiveFlow from '../../assets/hiveflow.svg';
import Hive3D from '../../assets/3d.svg';

import Profile from '../../assets/profile.svg';
import Calendar from '../../assets/calendar.svg';
import Tool from '../../assets/tool.svg';
import { SettingsOption, ThreeD } from 'grommet-icons';
import { BaseHeader } from '../../components/header';

export const Home : React.FC<any> = (props) => {
    return (
        <>
        <BaseHeader />

        <Box 
            justify="center"
            align="center"
            flex>
            <AppPicker 
                apps={[
                    { icon: HiveFlow, text: "Flow", onClick: () => window.location.href = '/dashboard/flow' }, 
                    { icon: HiveCommand, text: "Command", onClick: () => window.location.href = '/dashboard/command'}, 
                    { icon: Hive3D, text: "Hive3D", onClick: () => window.location.href = '/dashboard/3d'}
                    // { icon: Tool, text: "3D", onClick: () => window.location.href = '/dashboard/3d-models'},
                    // { icon: Tool, text: "Organisation", onClick: () => window.location.href = '/dashboard/organisation'},
                    // { icon: <SettingsOption />, text: "Settings", onClick: () => window.location.href = '/dashboard/settings'},
                ]}/>
        </Box>  
        </>
    );
}