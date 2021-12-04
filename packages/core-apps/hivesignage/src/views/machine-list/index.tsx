import { Box, Button, Text, List } from 'grommet';
import React, { useState } from 'react';
import { Add } from 'grommet-icons';
import { mutation, useMutation, useQuery } from '@hexhive-api/signage'
import { CreateMachineModal } from '../../modals/create-machine'
import { RouteComponentProps } from 'react-router-dom';

export interface DisplayListProps extends RouteComponentProps {

}

export const MachineList : React.FC<DisplayListProps> = (props) => {
    const [ modalOpen, openModal ] = useState<boolean>(false);

    const query = useQuery()

   
    // const workflow = query.hivePi
    const machines = query.machines({});

    const templates = query.machineTemplates({});

    const [ createMachine, createInfo ] = useMutation((mutation, args: {name: string, template: string}) => {
        let templateUpdate = {};
        if(args.template){
            templateUpdate = {
                template: {connect: {where: {node: {id: args.template}}}},
            }
        }
        const display = mutation.createMachines({
            input: [{
                name: args?.name,
                ...templateUpdate
            }]
        })
        return {
            item: {
                ...display.machines?.[0],
            }
            
        }
    }, {
        awaitRefetchQueries: true,
        refetchQueries: [query.machines({})]
    })

    return (
        <Box
            flex
            overflow="hidden"
            round="small"
            background="neutral-1"
            elevation="small">
            <CreateMachineModal 
                open={modalOpen} 
                templates={templates}
                onSubmit={(display) => {
                    createMachine({args: {
                        name: display.name,
                        template: display.template
                    }}).then(() => {
                        openModal(false)
                    })
                }}
                onClose={() => openModal(false)} />
            <Box pad="xsmall" align="center" background="accent-2" direction="row" justify="between">
                <Text>Machines</Text>
                <Button plain hoverIndicator style={{padding: 6, borderRadius: 3}} onClick={() => openModal(true)} icon={<Add size="small" />} />
            </Box>
            <Box  overflow="scroll" flex>
                <List 
                    onClickItem={({item}) => props.history.push(`${props.match.url}/${item.id}`)}
                    primaryKey={"name"}
                    data={machines} />
            </Box>
        </Box>
    )
}