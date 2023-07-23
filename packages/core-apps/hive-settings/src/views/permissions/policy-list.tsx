import { query } from "@hexhive/client";
import { Autocomplete, Box, Collapse, Divider, IconButton, ListItemButton, Paper, TextField, Typography } from "@mui/material";
import { QueryBuilderMaterial } from "@react-querybuilder/material";
import { Add } from '@mui/icons-material'
import QueryBuilder from "react-querybuilder";
import { gql, useMutation } from "@apollo/client";

export interface PolicyListProps {
    permission: string;

    policies: any[]

    onClick?: (policy: any) => void;
}

export const PolicyList : React.FC<PolicyListProps> = (props) => {
    
    const { policies, permission } = props;


    const [ createPermissionPolicy ] = useMutation(gql`
        mutation UpdatePermission($permission: ID) {
            createPermissionPolicy(permission: $permission){
                id
            }
        }
    `, {
        refetchQueries: ['GetPermission']
    })


    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography>Policies</Typography>
                <IconButton onClick={() => {
                    createPermissionPolicy({variables: {permission}})
                }}>
                    <Add />
                </IconButton>
            </Box>
            <Divider />

            {policies.map((policy, ix) => (
                <ListItemButton sx={{ display: 'flex', padding: "0px", marginTop: '12px' }} onClick={() => props.onClick?.(policy)}>

                    <Paper elevation={3} sx={{ flex: 1, minHeight: '35px', display: 'flex', alignItems: 'center', paddingLeft: '12px' }} onClick={(e) => {
                        // if (ix == activePolicy) {
                        //     e.stopPropagation();
                        // }
                    }}>
                        <Typography>{(policy.verb || policy.resource) ? `${policy.verb || ''} ${policy.resource || ''}` : 'New Policy'}</Typography>

                    
                    </Paper>
                </ListItemButton>
            ))}
        </Box>
    )
}