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
import { HexBoxBackground } from '../../components/hex-box-background/HexBoxBackground';
import { Footer } from '../../components/footer';

export const Home : React.FC<any> = (props) => {
    return (
        <Box style={{height: '100%', overflow: 'hidden'}}>
        <BaseHeader />
            <HexBoxBackground 
                onAction={(item) => {
                    window.location.href = item.path;
                }}  
                actions={[
                    {
                        title: 'HiveFlow',
                        path: '/dashboard/flow'
                    },
                    {
                        title: 'Hive3D',
                        path: '/dashboard/3d'
                    },
                    {
                        title: 'HiveCommand',
                        path: '/dashboard/command'
                    },
                    {
                        title: 'HiveFiles',
                        path: '/dashboard/files'
                    },
                    {
                        title: 'HiveMind',
                        path: '/dashboard/mind'
                    }
                ]}/>
        <Footer />
        </Box>
    );
}