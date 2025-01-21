'use client';
import Link from 'next/link';
import styles from './page.module.css';
import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import { UserInfo } from './user-info';
import { OrganisationInfo } from './organisation-info';
import { InviteOthers } from './invite-others';

export default function Signup(){

    const [ stage, setStage ] = useState(0);

    const isInvite = false;

    const renderStage = () => {
        switch(stage){
            case 0:
                return (<UserInfo />)
            case 1:
                return (<OrganisationInfo />)
            case 2:
                return (<InviteOthers />)
        }
    }

    return (
        <div className={styles.signup}>
            <Paper className={styles.signupContainer}>
                <Typography textAlign={'center'} fontSize={'20px'}>Signup</Typography>

                {renderStage()}
                
            
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button onClick={() => setStage(s => s+1)} variant="contained">Next</Button>
                </Box>
                <Divider />
                <Link href="https://go.hexhive.io/login">
                    <Button fullWidth>Login</Button>
                </Link>
            </Paper>
        </div>
    )
}