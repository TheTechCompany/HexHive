import React, { useState } from "react";
import { Box, Button, DataTable, Text, TextInput } from 'grommet'
import { mutation, useMutation, useQuery } from "../../gqless";
import { AppModal } from "../../components/modals/app-modal";

const mockData = [
    {id: '1', name: 'HiveFlow'},
    {id: '2', name: 'HiveCommand'},
    {id: '3', name: 'HiveMind'}
]
export const AppPage : React.FC<any> = (props) => {
    const [ modalOpen, openModal ] = useState<boolean>(false)
  
    const query = useQuery({suspense: false, staleWhileRevalidate: true})
    const Apps = query.AppMany
  
    const [ createApp, createInfo ] = useMutation((mutation, args: {name: string}) => {
        const item = mutation.createApp({name: args.name})

        return {
            item: {
                ...item
            },
            error: null
        }
    }, {
        onCompleted(data) {},
        onError(error) {},
        refetchQueries: [query.AppMany],
        awaitRefetchQueries: true,
        suspense: false,  
    })

    return (
        <Box flex>
            <AppModal 
                open={modalOpen} 
                onSubmit={(item: any) => {
                
                    createApp({args: item}).then(() => {
                        openModal(false)
                    })
                }}
                onClose={() => openModal(false)} />

            <Box align="center" gap="xsmall" direction="row">
                <TextInput placeholder="Search ..." disabled />
                <Button 
                    onClick={() => openModal(true)}
                    primary 
                    label="Add App" />
            </Box>
            <DataTable
                columns={[
                    {property: 'name', header: 'Name'}
                ]}
                data={Apps || []} />

        </Box>
    );
}