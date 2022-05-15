import { Box, Button, List, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Add, Edit } from '@mui/icons-material'
import { AssignOrganisationModal } from '../../modals/assign-organisation';

const baseUrl = process.env.NODE_ENV == 'production' ? '' : 'http://localhost:9999';


export const UserSingle = () => {

    const { id } = useParams()

    const [ assignModalOpen, setAssignModalOpen ] = useState(false);
    const [ selectedTrust, setSelectedTrust ] = useState<any>(null);

    const [ organisations, setOrganisations ] = useState<any[]>([]);

    const [ user, setUser ] = useState<any>({});

    useEffect(() => {
        fetch(`${baseUrl}/api/organisations`).then((r) => r.json()).then((data) => setOrganisations(data.result))
        fetch(`${baseUrl}/api/users/${id}`).then((r) => r.json()).then((data) => {
            setUser(data.result);
        })
    }, [])
    
    const assignOrganisation = (org_id: string, roles: string[]) => {
        return fetch(`${baseUrl}/api/users/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                organisation: org_id,
                roles
            })
        })
    }

    return (
        <Box flex>
            <Box
                direction='row' 
                pad="xsmall" 
                background={'accent-2'}>
                <Text>
                    {user.name}
                </Text>
            </Box>

            <AssignOrganisationModal 
                selected={selectedTrust}
                organisations={organisations || []}
                open={assignModalOpen}
                onClose={() => {
                    setAssignModalOpen(false)
                }}
                onSubmit={({id, organisation, roles}) => {

                        assignOrganisation(organisation, roles).then(() => {
                            setAssignModalOpen(false)
                        })
                }}/>

            <Box pad="xsmall" direction='row' flex>
                <Box flex elevation='small' round="xsmall" overflow="hidden">
                    <Box 
                        pad='xsmall'
                        background={'accent-1'}
                        align='center'
                        justify='between'
                        direction='row'>
                        <Text>Organisations</Text>
                        <Button 
                            plain
                            onClick={() => setAssignModalOpen(true)}
                            style={{padding: 6, borderRadius: 3}}
                            hoverIndicator
                            icon={<Add />} />
                    </Box>
                    <Box flex>
                        <List 
                            data={user.organisations}>
                            {(datum: any) => (
                                <Box direction='row' align='center' justify='between'>
                                    <Text>{datum.issuer?.name}</Text>
                                    <Button 
                                        onClick={() => {
                                            setSelectedTrust(datum)
                                            setAssignModalOpen(true);
                                        }}
                                        icon={<Edit />}
                                        hoverIndicator
                                        plain
                                        style={{padding: 6, borderRadius: 3}}
                                        />
                                </Box>
                            )}
                        </List>
                    </Box>
                </Box>
                <Box flex>

                </Box>
            </Box>
        </Box>
    )
}