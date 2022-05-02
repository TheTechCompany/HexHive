import { Box, List } from 'grommet'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HeaderBar } from '../../components/header-bar';
import { ApplicationModal } from '../../modals/application-modal';



const baseUrl = process.env.NODE_ENV == 'production' ? '' : 'http://localhost:9999';

export const ApplicationList = () => {
    const navigate = useNavigate();

    const [ modalOpen, openModal ] = useState(false);

    const [ applications, setApplications ] = useState<any[]>([]);

    useEffect(() => {
        fetch(`${baseUrl}/api/applications`).then((r) => r.json()).then((data) => {
            setApplications(data.result);
        })
    }, [])

    const createApplication = (app: {name: string, slug: string, entrypoint: string, staging_entrypoint: string}) => {
        return fetch(`${baseUrl}/api/applications`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: app.name,
                slug: app.slug,
                entrypoint: app.entrypoint,
                staging_entrypoint: app.staging_entrypoint
            })
        }).then((r) => r.json())
    }

    return (
        <Box flex>
            <ApplicationModal 
                onSubmit={(application) => {
                    createApplication(application).then(() => {
                        openModal(false);
                    })
                }}
                onClose={() => openModal(false)}
                open={modalOpen} />
            <HeaderBar
                onClick={() => openModal(true)}
                title='Applications' />
            <List 
                onClickItem={({item} : any) => navigate(item.id)}
                data={applications} 
                primaryKey="name" />
        </Box>
    )
}