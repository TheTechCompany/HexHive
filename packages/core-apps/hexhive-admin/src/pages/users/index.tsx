import React from "react";
import { Box, Button, DataTable, Text, TextInput } from 'grommet'
import { useMutation, useQuery } from "../../gqless";
import { UserModal } from "../../components/modals/user-modal";
import { useState } from "react";

const mockData = [
    {id: '1', username: 'balbatross', name: 'Ross', organisation: '123'}
]

export const UserPage : React.FC<any> = (props) => {
    const [ selected, setSelected ] = useState<any>()

    const [ modalOpen, openModal ] = useState<boolean>(false)

    const query = useQuery({suspense: false, staleWhileRevalidate: true})
    
    const Users = query.UserMany

    const Organisations = query.OrganisationMany?.map((x) => ({...x})) || []
      
    const [ createUser, createInfo ] = useMutation((mutation, args: {name: string, username: string, password: string, organisation: string}) => {
        const item = mutation.createUser({name: args.name, username: args.username, organisation: args.organisation, password: args.password})

        return {
            item: {
                ...item
            },
            error: null
        }
    }, {
        onCompleted(data) {},
        onError(error) {},
        refetchQueries: [query.OrganisationMany],
        awaitRefetchQueries: true,
        suspense: false,  
    })
    
    const [ updateUser, updateInfo ] = useMutation((mutation, args: {id: string, name: string, username: string, password: string, organisation: string}) => {
        const item = mutation.updateUser({id: args.id, name: args.name, username: args.username, organisation: args.organisation})

        return {
            item: item,
            error: null
        }
    }, {
        onCompleted(data) {},
        onError(error) {},
        refetchQueries: [query.UserMany],
        awaitRefetchQueries: true,
        suspense: false,  
    })
    
    return query.$state.isLoading ? null : (
        <Box flex>
            <UserModal     
                selected={selected}
                organisations={Organisations}
                open={modalOpen} 
                onSubmit={(user: any) => {
                    if(user.id){
                        updateUser({args: user}).then(() => {
                            openModal(false)
                        })
                    }else{
                        createUser({args: user}).then(() => {
                            openModal(false)
                        })
                    }
                    setSelected(undefined)
                }}
                onClose={() => {
                    
                    setSelected(undefined)
                    openModal(false)
                }} />

            <Box align="center" gap="xsmall"  direction="row">
                <Box background="brand" pad="xsmall" round="small">
                    <Text>{Users?.length}</Text>
                </Box>
                <TextInput placeholder="Search ..." disabled />
                <Button 
                    onClick={() => openModal(true)}
                    primary 
                    label="Add user" />
            </Box>
            <DataTable 
                onClickRow={({datum}) => {
                    setSelected(datum)
                    openModal(true)
                }}
                columns={[
                    {property: 'username', header: 'Username'},
                    {property: 'name', header: 'Name'},
                    {property: 'organisation', header: 'Organisation', render: (datum) => datum?.organisation?.name}
                ]}
                data={Users || []}/>
        </Box>
    );
}