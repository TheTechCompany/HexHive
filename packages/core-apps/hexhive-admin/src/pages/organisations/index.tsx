import React, { useState } from "react";
import { Box, Button, DataTable, Text, TextInput } from 'grommet'
import { useMutation, useQuery } from "../../gqless";
import { OrgModal } from "../../components/modals/org-modal";

const mockData = [
    {id: '123', name: 'HexHive'} 
]

export const OrgPage : React.FC<any> = (props) => {
    const [ selected, setSelected ] = useState<any>()
    const [ modalOpen, openModal ] = useState<boolean>(false)
  
    const query = useQuery({suspense: false, staleWhileRevalidate: true})
    const Organisations = query.OrganisationMany?.map((x) => ({...x, users: x?.users?.map((x) => x?.id), apps: x?.apps?.map((x) => x?.id) }))

    
    const [ createOrganisation, createInfo ] = useMutation((mutation, args: {name: string, users: string[], apps: string[]}) => {
        const item = mutation.createOrganisation({name: args.name, users: args.users, apps: args.apps})

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

    const [ updateOrganisation, updateInfo ] = useMutation((mutation, args: {id: string, name: string, users: string[], apps: string[]}) => {
        const item = mutation.updateOrganisation({id: args.id, name: args.name, users: args.users, apps: args.apps})

        return {
            item: item,
            error: null
        }
    }, {
        onCompleted(data) {},
        onError(error) {},
        refetchQueries: [query.OrganisationMany],
        awaitRefetchQueries: true,
        suspense: false,  
    })


    const Apps = query.AppMany
    const Users = query.UserMany

    return (
        <Box flex>
            <OrgModal  
                selected={selected}
                apps={Apps}
                users={Users}
                onSubmit={(item: any) => {
                    if(!item.id){
                        createOrganisation({args: item}).then(() => {
                            openModal(false)
                        })
                    }else{
                        updateOrganisation({args: item}).then(() => {
                            openModal(false)
                        })
                    }
                    setSelected(undefined)
                }}
                open={modalOpen} 
                onClose={() => {
                    setSelected(undefined)
                    openModal(false)
                }}/>

            <Box align="center" gap="xsmall" direction="row">
                <TextInput placeholder="Search ..." disabled />
                <Button 
                    onClick={() => openModal(true)}
                    primary 
                    label="Add Organisation" />
            </Box>
            <DataTable 
                onClickRow={({datum}) => {
                    setSelected(datum)
                    openModal(true)
                }}
                columns={[
                    {property: 'name', header: 'Name'}
                ]}
                data={Organisations || []} />

        </Box>
    );
}