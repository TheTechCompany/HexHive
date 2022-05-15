import { Box, List, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HeaderBar } from '../../components/header-bar';
import { ServiceAccountModal } from '../../modals/serviceaccout-modal';

const baseUrl = process.env.NODE_ENV == 'production' ? '' : 'http://localhost:9999';

export const ApplicationSingle = () => {
    
    const { id } = useParams()
    const [ serviceAccountOpen, openServiceAccountModal ] = useState(false);

    const [ selectedAccount, setSelectedAccount ] = useState()

    const [ application, setApplication ] = useState<any>({});


    const createServiceAccount = (name: string) => {
        return fetch(`${baseUrl}/api/applications/${id}/serviceaccounts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
        }).then(r => r.json())
    }

    const fetchApplication = () => {
        return fetch(`${baseUrl}/api/applications/${id}`).then((r) => r.json()).then((data) => {
            setApplication(data.result);
        })
    }
    useEffect(() => {
        fetchApplication()
    }, [])


    return (
        <Box flex>
            <ServiceAccountModal
                selected={selectedAccount}
                open={serviceAccountOpen}
                onClose={() => {
                    openServiceAccountModal(false)
                    setSelectedAccount(undefined)
                }}
                onSubmit={(sa) => {
                    createServiceAccount(sa.name).then(() => {
                        fetchApplication()
                        openServiceAccountModal(false);
                        setSelectedAccount(undefined)
                    })
                }}
                />
            <Box  
                direction='row'
                pad="xsmall" 
                background={'accent-2'}>
                <Text>
                    {application.name}
                </Text>
            </Box>
            <Box flex>
                <Box 
                background={'neutral-1'}
                pad="xsmall"
                gap="xsmall"
                direction='row'
                flex>
                <Box background={'white'} round="xsmall" overflow={'hidden'} flex>
                    <HeaderBar 
                        onClick={() => openServiceAccountModal(true)}
                        title='Service Accounts' />
                    
                    <List
                        onClickItem={({item} : any) => {
                            // console.log({item})
                            setSelectedAccount(item);
                            openServiceAccountModal(true);
                        }}
                         data={application?.serviceAccounts || []}
                         primaryKey="name" />
                </Box>
                <Box background={'white'} round="xsmall" overflow={'hidden'} flex>
                   
                </Box>
            </Box>
            </Box>
        </Box>
    )
}