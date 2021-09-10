import { Box, Button, List } from 'grommet';
import React, { useState } from 'react';
import { Add } from 'grommet-icons';
import { mutation, useMutation, useQuery } from '@hexhive/client'
import { WorkflowModal } from '../../modals/workflow-modal';
import { RouteComponentProps } from 'react-router-dom';
import { TaskModal } from '../../modals/task-modal';

export interface TaskListProps extends RouteComponentProps {

}

export const TaskList : React.FC<TaskListProps> = (props) => {
    const [ modalOpen, openModal ] = useState<boolean>(false);

    const query = useQuery()

    const [ createProcess, createInfo ] = useMutation((mutation, args: {name: string}) => {
        const item = mutation.createHiveProcesses({input: [{name: args.name}]})
        return {
            item: {
                ...item.hiveProcesses[0]
            },
            err: null
        }
    }, {
        suspense: false,
        awaitRefetchQueries: true,
        refetchQueries: [query.hiveProcesses()]
    })
    // const workflow = query.hivePi
    const processes = query.hiveProcesses();

    return (
        <Box
            background="neutral-1"
            flex
            round="small"
            margin="small" 
            elevation="small">
           <TaskModal   
            open={modalOpen}
            onClose={() => openModal(false)}
            onSubmit={(task) => {
                createProcess({args: {name: task.name}}).then(() => {
                    openModal(false)
                })
            }} />
            <Box direction="row" justify="end">
                <Button onClick={() => openModal(true)} icon={<Add />} />
            </Box>
            <List 
                onClickItem={({item}) => props.history.push(`${props.match.url}/${item.id}`)}
                primaryKey={"name"}
                data={processes} />
        </Box>
    )
}