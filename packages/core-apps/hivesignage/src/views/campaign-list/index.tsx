import { Box, Button, Text, List } from 'grommet';
import React, { useState } from 'react';
import { Add } from 'grommet-icons';
import { mutation, useMutation, useQuery } from '@hexhive-api/signage'
import { WorkflowModal } from '../../modals/display-modal';
import { RouteComponentProps } from 'react-router-dom';
import { CampaignModal } from '../../modals/campaign-modal';

export interface TriggerListProps extends RouteComponentProps {

}

export const CampaignList : React.FC<TriggerListProps> = (props) => {
    const [ modalOpen, openModal ] = useState<boolean>(false);

    const query = useQuery()

    const campaigns = query.campaigns()

    const [ createCampaign, createInfo ] = useMutation((mutation, args: {name: string}) => {
        const item = mutation.createCampaigns({input: [{name: args.name}]})
        return {
            item: {
                ...item.campaigns[0]
            },
            err: null
        }
    }, {
        suspense: false,
        awaitRefetchQueries: true,
        refetchQueries: [query.campaigns()]
    })
    // const workflow = query.hivePi

    return (
        <Box
            background="neutral-1"
            flex
            overflow="hidden"
            round="small"
            elevation="small">
           <CampaignModal   
            open={modalOpen}
            onClose={() => openModal(false)}
            onSubmit={(campaign) => {
                createCampaign({args: {name: campaign.name}}).then(() => {
                    openModal(false)
                })
            }} />
            <Box pad="xsmall" align="center" background="accent-2" direction="row" justify="between">
                <Text>Campaigns</Text>
                <Button plain hoverIndicator style={{padding: 6, borderRadius: 3}} onClick={() => openModal(true)} icon={<Add size="small" />} />
            </Box>
            <Box flex>
                <List 
                    onClickItem={({item}) => props.history.push(`${props.match.url}/${item.id}`)}
                    primaryKey={"name"}
                    data={campaigns} />
            </Box>
        </Box>
    )
}