import React from 'react';
import { Box } from 'grommet'
import { AppPicker } from '../../components/app-picker';

import { SettingsOption, ThreeD } from 'grommet-icons';
import { BaseHeader } from '../../components/header';
import { HexBoxBackground } from '../../components/hex-box-background/HexBoxBackground';
import { Footer } from '../../components/footer';

import { Hivecommand, Hivefiles, Hiveflow, Hivemind, Svg3D, MatrixLogo } from '../../assets';

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
                        logo: <Hiveflow />,
                        path: '/dashboard/flow'
                    },
                    {
                        title: 'HiveCommand',
                        logo: <Hivecommand/>,
                        path: '/dashboard/command'
                    },
                    {
                        title: 'Hive3D',
                        logo: <Svg3D />,
                        path: '/dashboard/3d'
                    },

                    {
                        title: 'HiveFiles',
                        logo: <Hivefiles />,
                        path: '/dashboard/files'
                    },
                    {
                        title: 'Matrix',
                        logo: <MatrixLogo />,
                        path: '/dashboard/matrix'
                    }   
                ]}/>
        </Box>
    );
}