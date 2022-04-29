import { Box, List } from 'grommet'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HeaderBar } from '../../components/header-bar';
import { OrganisationModal } from '../../modals/organisation-modal';

const baseUrl = process.env.NODE_ENV == 'production' ? '' : 'http://localhost:9999';

export const OrganisationList = () => {

    const navigate = useNavigate();

    
    const [ modalOpen, openModal ] = useState(false);

    const [ organisations, setOrganisations ] = useState<any[]>([]);

    useEffect(() => {
        fetch(`${baseUrl}/api/organisations`).then((r) => r.json()).then((data) => {
            setOrganisations(data.result);
        })
    }, [])

    const createOrganisation = (name: string) => {
        return fetch(`${baseUrl}/api/organisations`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
        })
    }

    return (
        <Box flex>
            <OrganisationModal
                onClose={() => openModal(false)}
                onSubmit={(organisation) => {
                    createOrganisation(organisation.name).then(() => {
                        openModal(false)
                    })
                }}
                open={modalOpen} />
            <HeaderBar 
                onClick={() => openModal(true)}
                title='Organisations' />
            <List 
                data={organisations}
                onClickItem={({item} : any) => navigate(item.id)}
                primaryKey="name" />
        </Box>
    )
}