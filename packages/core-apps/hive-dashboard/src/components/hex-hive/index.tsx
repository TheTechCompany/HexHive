import { Box } from 'grommet';
import { Add, Shop, Spa, Robot, Document, Folder, Monitor } from 'grommet-icons'
import React, { useEffect, useState } from 'react';
import { HexBoxBackground } from '../hex-box-background/HexBoxBackground';
import { HexButton } from '../hex-box-background/HexButton';
import { useQuery, gql } from '@apollo/client';
import { AppModal } from '../app-modal';
import { Files, Flow, Market, Command, Automate, Settings, Signage } from '../../assets/icons';

import Fonts from '../../assets/fonts';
import { useAuth } from '@hexhive/auth-ui';
import { useNavigate } from 'react-router-dom';

export interface HexHiveProps {
    edit?: boolean;
    match?: any;
}

export const HexHive : React.FC<HexHiveProps> = (props) => {


    const navigate = useNavigate()

    const { data } = useQuery(gql`
        query Q {
            hiveAppliances {
                id
                name
                label
         
            }
        }
    `)

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
            icon: <Settings color="black" height="50" width="50" />,
            top: 3,
            title: "Settings",
            left: 8,
            path: '/settings'
        }
    ].filter((a) => user?.activeUser?.applications?.map((x) => x.slug).indexOf(a.path) > -1))

    // const query = useQuery({suspense: false, staleWhileRevalidate: true})
    
    const apps = data?.hiveAppliances || []

    console.log({apps: apps.map((x) => ({...x}))})
    
    const refreshApplications = () => {
        setActions(
   
            [
            {
                icon: <Market  width="50" height="50"/>,
                title: "Market",
                top: 3,
                left: 3,
                path: 'market'
            },
            {
                icon: <Files  width="50" height="50"/>,
                title: "Files",
                top: 3,
                left: 4,
                path: 'files'
            },
            {
                icon: <Flow  width="50" height="50" />,
                top: 3,
                title: "Flow",
                left: 5,
                path: 'flow'
            },
            {
                icon: <Command  width="50" height="50"/>,
                top: 3,
                title: "Command",
                left: 6,
                path: 'command'
            },
            {
                icon: <Automate width="50" height="50"/>,
                top: 3,
                title: "Automate",
                left: 7,
                path: 'automate'
            },
            {
                icon: <Settings />,
                top: 3,
                title: "Settings",
                left: 8,
                path: 'settings'
            },
            {
                icon: <Signage />,
                title: "Signage",
                top: 3,
                left: 9,
                path: 'signage'
            }
        ].filter((a) => user?.activeUser?.applications?.map((x) => x.slug).indexOf(a.path) > -1).concat(
            (user?.activeUser?.applications || []).filter((a: any) => {
                return a && a?.dev == true;
            }).map((x: any, ix) => ({
                id: x.route,
                icon: <div></div>,
                title: x.name,
                path: x.route,
                top: 2,
                left: ix,
                dev: x.dev
            }))
        ))
    }

    useEffect(() => {
        refreshApplications()
    }, [user?.activeUser])
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
                        let action = actions.find((a) => a?.top == pos.y && a?.left == pos.x)

                        if(action){

                            // navigate(action.path)
                            navigate(action.path)
                            // window.location.href = `${window.location.href}${action.path}`
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
