import { Box } from 'grommet';
import { Add, Shop, Spa, Robot, Document, Folder, Monitor } from 'grommet-icons'
import React, { useEffect, useMemo, useState } from 'react';
import { HexBoxBackground } from '../hex-box-background/HexBoxBackground';
import { HexButton } from '../hex-box-background/HexButton';
import { useQuery, gql } from '@apollo/client';
import { AppModal } from '../app-modal';
import { Files, Flow, Market, Command, Automate, Settings, Signage, Message } from '../../assets/icons';
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

            organisation {
                applications {
                    id
                    name
                    slug
                }
            }
       
        }
    `)

    const user = useAuth()

    const [ selectedPos, setSelectedPos ] = useState<{x?: number, y?: number}>({})
    const [ modalOpen, openModal ] = useState<boolean>(false);

    const activeApps = data?.organisation?.applications || [];

    
    // const refreshApplications = () => {

    const actions = useMemo(() => {
        //Checks org apps against hard list until we have a better solution for svg icons
   
            return [
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
                icon: <Market width="50" height="50" />,
                top: 3, 
                title: "Reports",
                left: 8,
                path: 'report'
            },
            {
                icon: <Settings />,
                top: 3,
                title: "Settings",
                left: 9,
                path: 'settings'
            },
            {
                icon: <Message />,
                top: 4,
                left: 4
            }
        ].filter((a) => activeApps?.map((x) => x.slug).indexOf(a.path) > -1)
        
        // .concat(
        //     (user?.activeUser?.applications || []).filter((a: any) => {
        //         return a && a?.dev == true;
        //     }).map((x: any, ix) => ({
        //         id: x.route,
        //         icon: <div></div>,
        //         title: x.name,
        //         path: x.route,
        //         top: 2,
        //         left: ix,
        //         dev: x.dev
        //     }))
        // ))
    }, [activeApps])

    // useEffect(() => {
    //     refreshApplications()
    // }, [activeApps])

    return (
        <Box overflow="hidden">
            <AppModal   
                open={modalOpen} 
                onSubmit={(app: {name: string, path: string}) => {
                    console.log(app)
                    let a : any[] = actions.slice()
                    
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
                    // setActions(a)
                    openModal(false)
                }}
                onClose={() => openModal(false)} />
           
            <HexBoxBackground
                onActionsChanged={(actions) => {
                    // setActions(actions)
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
                apps={activeApps}
                actions={actions}
                size={{background: 3, actions: 6}}>
          
            </HexBoxBackground>
            
        </Box>
    )
}
