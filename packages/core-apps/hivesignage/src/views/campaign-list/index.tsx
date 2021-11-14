import { Box, Button, List } from 'grommet';
import React, { useState } from 'react';
import { Add } from 'grommet-icons';
import { mutation, useMutation, useQuery } from '@hexhive/client'
import { WorkflowModal } from '../../modals/workflow-modal';
import { RouteComponentProps } from 'react-router-dom';
import { TaskModal } from '../../modals/task-modal';

export interface TriggerListProps extends RouteComponentProps {

}

export const CampaignList : React.FC<TriggerListProps> = (props) => {
    const [ modalOpen, openModal ] = useState<boolean>(false);

    const query = useQuery()

    const [ createTrigger, createInfo ] = useMutation((mutation, args: {name: string}) => {
        const item = mutation.createHivePipelineTriggers({input: [{name: args.name}]})
        return {
            item: {
                ...item.hivePipelineTriggers[0]
            },
            err: null
        }
    }, {
        suspense: false,
        awaitRefetchQueries: true,
        refetchQueries: [query.hivePipelineTriggers()]
    })
    // const workflow = query.hivePi
    const triggers = query.hivePipelineTriggers().map((x) => ({id: x.id, name: x.name}));

    return (
        <Box
            background="neutral-1"
            flex
            overflow="hidden"
            round="small"
            elevation="small">
           <TaskModal   
            open={modalOpen}
            onClose={() => openModal(false)}
            onSubmit={(task) => {
                createTrigger({args: {name: task.name}}).then(() => {
                    openModal(false)
                })
            }} />
            <Box  background="accent-2" direction="row" justify="end">
                <Button onClick={() => openModal(true)} icon={<Add />} />
            </Box>
            <List 
                onClickItem={({item}) => props.history.push(`${props.match.url}/${item.id}`)}
                primaryKey={"name"}
                data={triggers} />
        </Box>
    )
}