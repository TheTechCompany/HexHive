import { query } from "@hexhive/client";
import { Autocomplete, Box, Divider, IconButton, TextField, Typography } from "@mui/material"
import { QueryBuilderMaterial } from "@react-querybuilder/material";
import { useEffect, useState } from "react";
import QueryBuilder, { formatQuery, parseMongoDB } from "react-querybuilder";
import { QueryBuilderDnD } from '@react-querybuilder/dnd';
import * as ReactDnD from 'react-dnd';
import * as ReactDndHtml5Backend from 'react-dnd-html5-backend';
import { ArrowLeft } from '@mui/icons-material'
import { gql, useMutation } from "@apollo/client";
import 'react-querybuilder/dist/query-builder.css';
import './policy-editor.css';

export interface PolicyEditorProps {
    policy?: any;
    permission?: string;
    // appliances?: any[]
    appliance?: any;

    onBack?: () => void;
}

export const PolicyEditor : React.FC<PolicyEditorProps> = (props) => {

    const { permission, policy, appliance } = props;
    console.log({appliance})

    const [query, setQuery] = useState( policy.conditions ? parseMongoDB(policy.conditions) : {combinator: 'and', rules: []})

    const [ updatePermissionPolicy ] = useMutation(gql`
        mutation UpdatePermissionPolicy ($permission: ID, $id: ID, $input: PermissionPolicyInput){
            updatePermissionPolicy(permission: $permission, id: $id, input: $input){
                id
            }
        }
    `, {
        refetchQueries: ['GetPermission']
    })

    useEffect(() => {
        
        setQuery(parseMongoDB(policy.conditions));

    }, [policy.conditions])

    return (
        <Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <IconButton onClick={() => props.onBack?.()} size="small">
                    <ArrowLeft fontSize="inherit"/>
                </IconButton>
                <TextField 
                    fullWidth 
                    label="Policy Name" 
                    size="small" 
                    value={policy?.name || ''}
                    onChange={(e) => {
                            
                        updatePermissionPolicy({
                            variables: {
                                permission,
                                id: policy.id,
                                input: {
                                    name: e.target.value
                                }
                            }
                        })
                    }} />
            </Box>
            <Divider />
            <Autocomplete
                sx={{ marginTop: '12px' }}
                options={appliance?.resources || []}
                value={appliance?.resources?.find((a: any) => a.name == policy.resource) || null}
                onChange={(e, val) => {
                    console.log({val})
                    updatePermissionPolicy({
                        variables: {
                            permission,
                            id: policy.id,
                            input: {
                                resource: val.name
                            }
                        }
                    })

                    // setPolicyResource(val.id)
                    // setPolicies((policies) => {
                    //     let pol = policies.slice();
                    //     pol[ix].resource = val.id;
                    //     return pol;
                    // })
                }}
                getOptionLabel={(opt: any) => typeof (opt) == 'string' ? opt : opt.name}
                renderInput={(params) => <TextField {...params} size="small" label="Resource" />}
            />

            <Autocomplete
                sx={{ marginTop: '12px' }}
                multiple
                options={appliance?.resources?.find((a: any) => a.name == policy.resource)?.actions || []}
                value={policy.verbs}
                onChange={(e, val) => {
                    // setPolicies((policies) => {
                    //     let pol = policies.slice();
                    //     pol[ix].verb = val;
                    //     return pol;
                    // })

                    updatePermissionPolicy({
                        variables: {
                            permission,
                            id: policy.id,
                            input: {
                                verbs: val
                            }
                        }
                    })

                }}
                getOptionLabel={(opt: any) => typeof (opt) == 'string' ? opt : opt.name}
                renderInput={(params) => <TextField {...params} size="small" label="Verbs" />}
            />

            <Autocomplete
                sx={{ marginTop: '12px', marginBottom: '12px' }}
                options={["Allow", "Deny"]}
                value={policy.effect}
                onChange={(e, val) => {
                    // setPolicies((policies) => {
                    //     let pol = policies.slice();
                    //     pol[ix].effect = val;
                    //     return pol;
                    // })

                    updatePermissionPolicy({
                        variables: {
                            permission,
                            id: policy.id,
                            input: {
                                effect: val
                            }
                        }
                    })

                }}
                getOptionLabel={(opt: any) => typeof (opt) == 'string' ? opt : opt.name}
                renderInput={(params) => <TextField {...params} size="small" label="Effect" />}
            />


            <Box className="justifiedLayout" sx={{ padding: '12px 6px 0px 6px' }}>
                <Typography>Conditions</Typography>
            <QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>

                <QueryBuilderMaterial>
                    <QueryBuilder
                        fields={appliance?.resources?.find((a: any) => a.name == policy.resource)?.fields?.map((x) => ({ name: x, label: x }))}
                        query={query}
                        
                        controlClassnames={{ queryBuilder: 'queryBuilder-branches' }}
                        onQueryChange={(q) => {
                            setQuery(q)

                            updatePermissionPolicy({
                                variables: {
                                    permission,
                                    id: policy.id,
                                    input: {
                                        conditions: formatQuery(q, 'mongodb')
                                    }
                                }
                            })
                        
                        }}
                    />
                </QueryBuilderMaterial>
            </QueryBuilderDnD>
            </Box>
        </Box>
    )
}