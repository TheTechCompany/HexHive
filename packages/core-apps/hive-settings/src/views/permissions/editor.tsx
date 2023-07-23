import { gql, useMutation, useQuery } from "@apollo/client"
import { Autocomplete, Box, Collapse, Divider, IconButton, ListItem, ListItemButton, MenuItem, Paper, Select, TextField, Typography } from "@mui/material"
import { Add } from '@mui/icons-material'
import { useParams } from "react-router-dom"
import { QueryBuilder, formatQuery } from 'react-querybuilder';
import { QueryBuilderMaterial } from '@react-querybuilder/material';
import { useEffect, useState } from "react";
import { PolicyEditor } from "./policy-editor";
import { PolicyList } from "./policy-list";

export const PermissionEditor = () => {

    // const [ permission, setPermission ] = 
    const [query, setQuery] = useState<any>({ combinator: 'and', rules: [] });
    const [hiveAppliance, setHiveAppliance] = useState(null);

    const [activePolicy, setActivePolicy] = useState(null);

    const [policies, setPolicies] = useState<{
        verb: string,
        resource: string,
        effect: string,
        conditions: string
    }[]>([])

    // const [ policyVerb, setPolicyVerb ] = useState(null);
    // const [ policyResource, setPolicyResource ] = useState(null);

    const { id } = useParams()

    useEffect(() => {
        console.log(formatQuery(query, 'mongodb'))
    }, [query])

    const { data } = useQuery(gql`
        query GetPermission ($id:ID){
            hiveAppliances{
                id
                name

                resources {
                    name
                    actions
                    fields
                }
            }
            permissions(ids: [$id]){
                id
                name

                policies {
                    id
                    name

                    verb
                    effect
                    resource
                    conditions
                }

                scope {
                    id
                    name
                }
            }
        }
    `, {
        variables: {
            id
        }
    })

    const [ updatePermission ] = useMutation(gql`
        mutation UpdatePermission($id: ID, $scopeId: String) {
            updatePermission(id: $id, input: {scopeId: $scopeId}){
                id
            }
        }
    `)


    const permission = data?.permissions?.[0] || {};

    return (
        <Paper sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '6px' }}>
            <Typography fontWeight={"bold"} fontSize={"20px"}>{permission?.name}</Typography>
            <Divider sx={{ marginBottom: '12px' }} />
            <Box sx={{ marginBottom: '12px' }}>
                <Autocomplete
                    options={data?.hiveAppliances || []}
                    value={permission?.scope || null}
                    onChange={(e, val) => {
                        //  setHiveAppliance(val.id)
                         updatePermission({
                            variables: {id, scopeId: val.id}
                         })
                    }}
                    isOptionEqualToValue={(option, value) => option.id == value.id}
                    getOptionLabel={(opt: any) => typeof (opt) == 'string' ? opt : opt?.name}
                    renderInput={(params) => <TextField {...params} size="small" label="Application" />}
                />
            </Box>
            <Divider sx={{margin: '6px'}} />

            <Box>
                {activePolicy ? 
                    <PolicyEditor 
                        // appliances={data?.hiveAppliances || []} 
                        onBack={() => setActivePolicy(null)}
                        appliance={data?.hiveAppliances?.find((a: any) => a.id == permission?.scope?.id)} 
                        policy={permission?.policies?.find((a) => a.id == activePolicy)} /> : 
                    <PolicyList 
                        permission={id}
                        onClick={(policy) => setActivePolicy(policy.id)} 
                        policies={permission?.policies || []} />
                }




            </Box>

        </Paper>
    )
}