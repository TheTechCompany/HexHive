import { Box, Text, Button, List } from 'grommet';
import { Add } from 'grommet-icons'
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AppModal } from '../../modals/app-modal';
// import {  useMutation, useQuery  } from '@hexhive/client';
export interface AppListProps extends RouteComponentProps {
    
}
export const AppList : React.FC<AppListProps> = (props) => {
    const [ modalOpen, openModal ] = useState<boolean>(false)

    // const query = useQuery({suspense: false, staleWhileRevalidate: true})

    // const [ createAppliance, createInfo ] = useMutation((mutation, args: {name: string}) => {
    //    const item = mutation.createHiveAppliances({input: [{
    //         name: args.name
    //     }]})
    //     return {
    //         item: {
    //             ...item.hiveAppliances[0]
    //         },
    //         err: null
    //     }
    // }, {
    //     suspense: false,
    //     awaitRefetchQueries: true,
    //     refetchQueries: [query.hiveAppliances()]
    // })
    // const apps = query.hiveAppliances()

    return (
        <Box 
            background="neutral-1" direction="row" flex>
            <AppModal
                open={modalOpen}
                onSubmit={(app) => {
                    // createAppliance({args: {
                    //     name: app.name
                    // }}).then(() => {
                    //     openModal(false)

                    // })
                }}
                onClose={() => openModal(false)} />
            <Box  
                elevation="small"  
                overflow={'hidden'}
                width="small"
                round="small"
                margin={{vertical: 'small'}}
                background="accent-1">
                <List data={["Applications"]} />
            </Box>
            <Box
                margin="small"
                round="small"
                background="neutral-2"
                elevation="small" flex>
                    <Box pad="xsmall" align="center" justify="between" background="accent-2" direction="row">
                        <Text>Applications</Text>

                        <Button 
                            onClick={() => openModal(true)}
                            icon={<Add />} 
                            hoverIndicator 
                            style={{borderRadius: 8}} />
                    </Box>
                {/* <List
                    primaryKey={"name"} 
                    onClickItem={({item}) => props.history.push(`/${item.id}`)}
                    data={apps}
                    /> */}
            </Box>
        </Box>
    )
}