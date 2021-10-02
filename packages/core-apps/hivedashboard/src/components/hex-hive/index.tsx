import { Box } from 'grommet';
import { Add, SettingsOption, Shop, Spa, Robot, Document, Folder} from 'grommet-icons'
import React, { useEffect, useState } from 'react';
import { HexBoxBackground } from '../hex-box-background/HexBoxBackground';
import { HexButton } from '../hex-box-background/HexButton';
import { useQuery } from '@hexhive/client';
import { AppModal } from '../app-modal';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Files, Flow, Market, Command, Automate } from '../../assets/icons';

import Fonts from '../../assets/fonts';
import { useAuth } from '@hexhive/auth-ui';
export interface HexHiveProps extends RouteComponentProps {
    edit?: boolean;
}

export const BaseHexHive : React.FC<HexHiveProps> = (props) => {

    const user = useAuth()

    const [ selectedPos, setSelectedPos ] = useState<{x?: number, y?: number}>({})
    const [ modalOpen, openModal ] = useState<boolean>(false);

    console.log(user)
    const [ actions, setActions ] = useState<any[]>([
        {
            id: '',
            icon: <Market  width="50" height="50"/>,
            title: "Market",
            top: 3,
            left: 3,
            path: '/market'
        },
        {
            id: '0a8eedf3-6802-4ae9-9304-94129d08ee14',
            icon: <Files  width="50" height="50"/>,
            title: "Files",
            top: 3,
            left: 4,
            path: '/files'
        },
        {
            id: '35dec0fc-b2ab-4074-8060-f2216260d360',
            icon: <Flow  width="50" height="50" />,
            top: 3,
            title: "Flow",
            left: 5,
            path: '/flow'
        },
        {
            id: '808e383f-9c2b-4ccb-9900-7562b8b344a4',
            icon: <Command  width="50" height="50"/>,
            top: 3,
            title: "Command",
            left: 6,
            path: '/command'
        },
        {
            id: '',
            icon: <Automate width="50" height="50"/>,
            top: 3,
            title: "Automate",
            left: 7,
            path: '/automate'
        },
        {
            id: '',
            icon: <SettingsOption color="black" size="30px" />,
            top: 3,
            title: "Settings",
            left: 8,
            path: '/settings'
        }
    ].filter((a) => user.activeUser?.applications?.map((x) => x.id).indexOf(a.id) > -1))

    const query = useQuery({suspense: false, staleWhileRevalidate: true})
    
    const apps = query.hiveAppliances().map((x) => ({...x}))
    
    const refreshApplications = () => {
        setActions([
            {
                id: '',
                icon: <Market  width="50" height="50"/>,
                title: "Market",
                top: 3,
                left: 3,
                path: '/market'
            },
            {
                id: '0a8eedf3-6802-4ae9-9304-94129d08ee14',
                icon: <Files  width="50" height="50"/>,
                title: "Files",
                top: 3,
                left: 4,
                path: '/files'
            },
            {
                id: '35dec0fc-b2ab-4074-8060-f2216260d360',
                icon: <Flow  width="50" height="50" />,
                top: 3,
                title: "Flow",
                left: 5,
                path: '/flow'
            },
            {
                id: '808e383f-9c2b-4ccb-9900-7562b8b344a4',
                icon: <Command  width="50" height="50"/>,
                top: 3,
                title: "Command",
                left: 6,
                path: '/command'
            },
            {
                id: 'ZJ5pksG7fbU3ThLG3_nA3',
                icon: <Automate width="50" height="50"/>,
                top: 3,
                title: "Automate",
                left: 7,
                path: '/automate'
            },
            {
                id: 'hCnbZc6H0F4ehaqQlENqc',
                icon: <SettingsOption color="black" size="30px" />,
                top: 3,
                title: "Settings",
                left: 8,
                path: '/settings'
            }
        ].filter((a) => user.activeUser?.applications?.map((x) => x.id).indexOf(a.id) > -1))
    }

    useEffect(() => {
        refreshApplications()
    }, [user.activeUser])
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