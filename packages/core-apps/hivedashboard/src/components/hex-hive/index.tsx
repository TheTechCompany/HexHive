import { Box } from 'grommet';
import { Add, SettingsOption, Shop, Spa, Robot, Document, Folder} from 'grommet-icons'
import React, { useState } from 'react';
import { HexBoxBackground } from '../hex-box-background/HexBoxBackground';
import { HexButton } from '../hex-box-background/HexButton';
import { useQuery } from '@hexhive/client';
import { AppModal } from '../app-modal';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Files, Flow, Market, Command, Automate } from '../../assets/icons';

import Fonts from '../../assets/fonts';
export interface HexHiveProps extends RouteComponentProps {
    edit?: boolean;
}

export const BaseHexHive : React.FC<HexHiveProps> = (props) => {

    const [ selectedPos, setSelectedPos ] = useState<{x?: number, y?: number}>({})
    const [ modalOpen, openModal ] = useState<boolean>(false);

    const [ actions, setActions ] = useState<any[]>([
        {
            icon: <Market  width="50" height="50"/>,
            title: "Market",
            top: 3,
            left: 3,
            path: '/market'
        },
        {
            icon: <Files  width="50" height="50"/>,
            title: "Files",
            top: 3,
            left: 4,
            path: '/files'
        },
        {
            icon: <Flow  width="50" height="50" />,
            top: 3,
            title: "Flow",
            left: 5,
            path: '/flow'
        },
        {
            icon: <Command  width="50" height="50"/>,
            top: 3,
            title: "Command",
            left: 6,
            path: '/command'
        },
        {
            icon: <Automate width="50" height="50"/>,
            top: 3,
            title: "Automate",
            left: 7,
            path: '/automate'
        },
        {
            icon: <SettingsOption color="black" size="30px" />,
            top: 3,
            title: "Settings",
            left: 8,
            path: '/settings'
        }
    ])

    const query = useQuery({suspense: false, staleWhileRevalidate: true})
    
    const apps = query.hiveAppliances().map((x) => ({...x}))
    
    return (
        <Box overflow="hidden">
            <AppModal   
                open={modalOpen} 
                onSubmit={(app: {name: string, path: string}) => {
                    console.log(app)
                    let a = actions.slice()
                    
                    let ix = a.map((x) => `${x.top},${x.left}`).indexOf(`${selectedPos.y},${selectedPos.x}`)
                    
                    if(ix > -1){
                        a[ix] = {
                            title: app.name,
                            top: selectedPos.y,
                            left: selectedPos.x,
                        }
                    }else{
                        a.push({
                            icon: <Add />,
                            top: selectedPos.y,
                            left: selectedPos.x,
                            title: app.name,
                            path: app.path
                        })
                    }
                    setActions(a)
                    openModal(false)
                }}
                onClose={() => openModal(false)} />
            <HexBoxBackground
                onActionsChanged={(actions) => {
                    setActions(actions)
                    console.log(actions)
                }}
                onClick={(pos) => {
                    if(props.edit){
                        setSelectedPos(pos)
                        openModal(true)
                    }else{
                        let action = actions.find((a) => a.top == pos.y && a.left == pos.x)

                        if(action){
                            window.location.href = `${props.match.url}${action.path}`
                        }
                    }
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

export const HexHive = withRouter(BaseHexHive)