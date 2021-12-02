import { Box, Button, List } from 'grommet';
import React, { useState } from 'react';
import { Add } from 'grommet-icons';
import { mutation, useMutation, useQuery } from '@hexhive/client'
import { WorkflowModal } from '../../modals/display-modal';
import { RouteComponentProps } from 'react-router-dom';
import { CampaignModal } from '../../modals/campaign-modal';

export interface AnalyticProps extends RouteComponentProps {

}

export const Analytics : React.FC<AnalyticProps> = (props) => {
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
            overflow="hidden"
            round="small"
            elevation="small">
          
        </Box>
    )
}