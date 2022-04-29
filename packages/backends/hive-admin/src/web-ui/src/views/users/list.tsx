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

    const createUser = (user: {name: string, email: string, password: string}) => {
        return fetch(`${baseUrl}/api/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password
            })
        })
    }
 
    return (
        <Box flex>
            <UserModal 
                onSubmit={(user) => {
                    createUser(user).then(() => {
                        openModal(false);
                    })
                }}
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