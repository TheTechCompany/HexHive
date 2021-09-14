import { Box, Button, List } from 'grommet';
import React, { useState } from 'react';
import { Add } from 'grommet-icons';
import { mutation, useMutation, useQuery } from '@hexhive/client'
import { WorkflowModal } from '../../modals/workflow-modal';
import { RouteComponentProps } from 'react-router-dom';

export interface WorkflowListProps extends RouteComponentProps {

}

export const WorkflowList : React.FC<WorkflowListProps> = (props) => {
    const [ modalOpen, openModal ] = useState<boolean>(false);

    const query = useQuery()

    const [ createWorkflow, createInfo ] = useMutation((mutation, args: {name: string}) => {
        const item = mutation.createHivePipelines({input: [{name: args.name}]})
        return {
            item: {
                ...item.hivePipelines[0]
            },
            err: null
        }
    }, {
        suspense: false,
        awaitRefetchQueries: true,
        refetchQueries: [query.hivePipelines()]
    })
    // const workflow = query.hivePi
    const workflows = query.hivePipelines();

    return (
        <Box
            flex
            round="small"
            background="neutral-1"
            elevation="small">
            <WorkflowModal 
                open={modalOpen} 
                onSubmit={(workflow) => {
                    createWorkflow({args: {name: workflow.name}}).then(() => {
                        openModal(false);
                    })
                }}
                onClose={() => openModal(false)} />
            <Box direction="row" justify="end">
                <Button onClick={() => openModal(true)} icon={<Add />} />
            </Box>
            <List 
                onClickItem={({item}) => props.history.push(`${props.match.url}/${item.id}`)}
                primaryKey={"name"}
                data={workflows} />
        </Box>
    )
}