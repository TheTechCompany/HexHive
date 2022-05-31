import { Box, List, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HeaderBar } from '../../components/header-bar';
import { AssignApplicationModal } from '../../modals/assign-application';
import { RoleModal } from '../../modals/role-modal';
import { ServiceAccountModal } from '../../modals/serviceaccout-modal';

const baseUrl = process.env.NODE_ENV == 'production' ? '' : 'http://localhost:9999';

export const OrganisationSingle = () => {

    const [ selectedApiKey, setSelectedApiKey ] = useState(null);
    const [ assignModalOpen, setAssignModalOpen ] = useState(false);
    const [roleModalOpen, openRoleModal ] = useState(false);
    const [ apiModalOpen, openAPIModal ] = useState(false);

    const { id } = useParams()

    const [ organisation, setOrganisation ] = useState<any>({});
    const [ applications, setApplications ] = useState<any>({});

    useEffect(() => {
        fetch(`${baseUrl}/api/organisations/${id}`).then((r) => r.json()).then((data) => {
            setOrganisation(data.result);
        })

        fetch(`${baseUrl}/api/applications`).then((r) => r.json()).then((data) => {
            setApplications(data.result);
        })
    }, [])

    const assignApplication = (app_id: string) => {
        return fetch(`${baseUrl}/api/organisations/${id}/applications`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                application: app_id
            })
        }).then((r) => r.json())
    }

    const createRole = (role: {name: string, applications: string[]}) => {
        return fetch(`${baseUrl}/api/organisations/${id}/roles`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: role.name,
                applications: role.applications
            })
        }).then((r) => r.json())
    }

    const createAPIKey = (name: string, apiKey: string) => {
        return fetch(`${baseUrl}/api/organisations/${id}/apiKeys`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                apiKey
            })
        }).then((r) => r.json())
    }

    const updateAPIKey = (id: string, name: string, apiKey: string) => {
        return fetch(`${baseUrl}/api/organisations/${id}/apiKeys`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name: name,
                apiKey
            })
        }).then((r) => r.json())
    }
    
    return (
        <Box flex>

            <ServiceAccountModal
                open={apiModalOpen}
                selected={selectedApiKey}
                onClose={() => openAPIModal(false)}
                onSubmit={(apiKey) => {
                    if(!apiKey.id){
                        createAPIKey(apiKey.name, apiKey.apiKey).then(() => {
                            openAPIModal(false)
                        });
                    }else{
                        updateAPIKey(apiKey.id, apiKey.name, apiKey.apiKey).then(() => {
                            openAPIModal(false);
                        })
                    }
                }}
                />
            <AssignApplicationModal
                open={assignModalOpen}
                onClose={() => setAssignModalOpen(false)}
                applications={applications}
                onSubmit={({application}) => {
                    assignApplication(application).then(() => {
                        setAssignModalOpen(false)
                    })
                }}
                />

            <RoleModal
                open={roleModalOpen}
                onClose={() => openRoleModal(false)}
                applications={applications}
                onSubmit={(role) => {
                    createRole(role).then(() => {
                        openRoleModal(false);
                    })
                }}
                />
            <Box 
                direction='row'
                pad="xsmall" 
                background={'accent-2'}>
                <Text>
                    {organisation.name}
                </Text>
            </Box>
            <Box 
                background={'neutral-1'}
                pad="xsmall"
                gap="xsmall"
                direction='row'
                flex>
                <Box background={'white'} round="xsmall" overflow={'hidden'} flex>
                    <HeaderBar 
                        onClick={() => setAssignModalOpen(true)}
                        title='Applications' />
                    
                    <List
                         data={organisation?.applications}
                         primaryKey="name" />
                </Box>
                <Box background={'white'} round="xsmall" overflow={'hidden'} flex>
                    <Box flex>
                        <HeaderBar 
                            onClick={() => openRoleModal(true)}
                            title='Roles' />

                        <List
                            data={organisation?.roles}
                            primaryKey="name" />

                    </Box>
                    <Box flex>
                        <HeaderBar
                            title='API-Keys'
                            onClick={() => openAPIModal(true)} />
                        
                        <List
                            onClickItem={({item}: any) => {
                                openAPIModal(true); 
                                setSelectedApiKey(item)
                            }}
                            data={organisation.apiKeys || []}
                            primaryKey="name" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}