import { Box } from 'grommet';
import { Add } from 'grommet-icons'
import React, { useState } from 'react';
import { HexBoxBackground } from '../hex-box-background/HexBoxBackground';
import { HexButton } from '../hex-box-background/HexButton';
import { useQuery } from '@hexhive/client';
import { AppModal } from '../app-modal';
export interface HexHiveProps {
    edit?: boolean;
}

export const HexHive : React.FC<HexHiveProps> = (props) => {

    const [ modalOpen, openModal ] = useState<boolean>(false);

    const [ actions, setActions ] = useState<any[]>([
        {
            icon: <Add />,
            top: 3,
            left: 3,
            path: '/add'
        }
    ])

    const query = useQuery({suspense: false, staleWhileRevalidate: true})
    
    const apps = query.hiveAppliances().map((x) => ({...x}))
    
    return (
        <Box overflow="hidden">
            <AppModal   
                open={modalOpen} 
                onClose={() => openModal(false)} />
            <HexBoxBackground
                onActionsChanged={(actions) => {
                    setActions(actions)
                    console.log(actions)
                }}
                onClick={() => {
                    openModal(true)
                }}
                noBackground
                edit={props.edit}
                apps={apps}
                actions={actions}
                size={{background: 3, actions: 6}}>
          
            </HexBoxBackground>
            
        </Box>
    )
}