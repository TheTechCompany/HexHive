import React, { useState } from 'react';
import { Box, ThemeContext, Text, Layer, List } from 'grommet'
import { AppPicker } from '../../components/app-picker';

import { SettingsOption, ThreeD } from 'grommet-icons';
import { BaseHeader } from '../../components/header';
import { HexBoxBackground } from '../../components/hex-box-background/HexBoxBackground';
import { Footer } from '../../components/footer';

import { Hivecommand, Hivefiles, Hiveflow, Hivemind, Svg3D, MatrixLogo } from '../../assets';
import { HexHive } from 'src/components/hex-hive';

export const Home : React.FC<any> = (props) => {
    const [ drawer, setDrawer ] = useState<boolean>(false);

    return (
        <Box style={{height: '100%', overflow: 'hidden'}}>
            <BaseHeader  
                onMenu={() => {
                    setDrawer(!drawer) 
                }} />
            {drawer && 
            <ThemeContext.Extend
                value={{
                    layer: {
                        zIndex: 0,
                        container: {
                            zIndex: 0
                        }
                    }
                }}>
                <Layer 
                    
                    style={{
                        height: '100%',
                        width: '15%'
                    }}
                    modal={false}
                    onEsc={() => setDrawer(false)}
                    onClickOutside={() => setDrawer(false)}
                    position="left">
                    <Box
                        background="neutral-2"
                        pad={{top: '50px'}}
                        style={{height: '100%'}}>
                        <List 
                            onClickItem={({item}) => console.log(item)}
                            data={[
                                "Connections",
                                "Devices"
                            ]} />
                    </Box>
                </Layer>
                </ThemeContext.Extend>}
            
            <HexHive edit />
            {/* <HexBoxBackground 
                onAdd={() => window.location.href = '/dashboard/apps'}
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
                ]}/> */}
        </Box>
    );
}