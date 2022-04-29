import { Box, List } from 'grommet'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HeaderBar } from '../../components/header-bar';
import { UserModal } from '../../modals/user-modal';

const baseUrl = process.env.NODE_ENV == 'production' ? '' : 'http://localhost:9999';


export const UserList = () => {

    const [ modalOpen, openModal ] = useState(false);

    const [ users, setUsers ] = useState<any[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${baseUrl}/api/users`).then((r) => r.json()).then((data) => {
            setUsers(data.result);
        })
    }, [])

    return (
        <Box flex>
            <UserModal 
                onClose={() => openModal(false)}
                open={modalOpen} />
            <HeaderBar 
                onClick={() => openModal(true)}
                title='Users' />
            <List 
                data={users}
                onClickItem={({item} : any) => navigate(item.id)}
                primaryKey="name" />
        </Box>
    )
}