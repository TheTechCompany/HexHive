import { Box, Button, Text, List } from 'grommet';
import React, { useState } from 'react';
import { Add } from 'grommet-icons';
import { mutation, useMutation, useQuery } from '@hexhive-api/signage'
import { WorkflowModal } from '../../modals/display-modal'
import { RouteComponentProps } from 'react-router-dom';

export interface DisplayListProps extends RouteComponentProps {

}

export const DisplayList : React.FC<DisplayListProps> = (props) => {
    const [ modalOpen, openModal ] = useState<boolean>(false);

    const query = useQuery()

   
    // const workflow = query.hivePi
    const displays = query.displays({});

    const [ createDisplay, createInfo ] = useMutation((mutation, args: {name: string}) => {
       const display = mutation.createDisplays({
            input: [{
                label: args?.name    
            }]
        })
        return {
            item: {
                ...display.displays?.[0],
            }
            
        }
    }, {
        awaitRefetchQueries: true,
        refetchQueries: [query.displays({})]
    })

    return (
        <Box
            flex
            overflow="hidden"
            round="small"
            background="neutral-1"
            elevation="small">
            <WorkflowModal 
                open={modalOpen} 
                onSubmit={(display) => {
                    createDisplay({args: {name: display.name}}).then(() => {
                        openModal(false)
                    })
                }}
                onClose={() => openModal(false)} />
            <Box pad="xsmall" align="center" background="accent-2" direction="row" justify="between">
                <Text>Displays</Text>
                <Button plain hoverIndicator style={{padding: 6, borderRadius: 3}} onClick={() => openModal(true)} icon={<Add size="small" />} />
            </Box>
            <Box  overflow="scroll" flex>
                <List 
                    onClickItem={({item}) => props.history.push(`${props.match.url}/${item.id}`)}
                    primaryKey={"label"}
                    data={displays} />
            </Box>
        </Box>
    )
}