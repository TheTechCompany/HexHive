import { Add } from 'grommet-icons';
import { stackActions } from '../../actions';
import { StackModal } from '../../components/modals/stacks';
import React, {Suspense, useEffect, useState} from 'react';
import { useQuery, useMutation, Stack } from '../../gqless'
import styled from 'styled-components'
import { Box, Button, CheckBox, TextInput, Text } from 'grommet'
import { PluginStore } from '../../components/plugin-store/PluginStore'
export interface StackListProps {
    className? :string;
    history?: any;
    match?: any;
}

export const BaseStackList : React.FC<StackListProps> = (props) => {

    
    const [ createStack, {isLoading, data, error }] = stackActions.useCreateStack();

    const query = useQuery({
        suspense: false,
        staleWhileRevalidate: false
    })

    const stacks = query.StackMany()

    const [ _stacks, setStacks ] = useState<Stack[]>(stacks)

    useEffect(() => {
        if(stacks){
            setStacks(stacks)
        }
    }, [stacks])
    
    const [ modalOpen, openModal ] = useState<boolean>(false)
    
    return query.$state.isLoading  ? (<div>Loading...</div>) : (
        <Box
            direction="row"
            elevation="1"
            round="small"
            className={props.className}>
            <StackModal 
                open={modalOpen}
                onSubmit={(stack : Stack) => {
                    console.log(stack)
                    if(stack.name){
                        
                        createStack({args: {name: stack.name}}).then(({item, error}) => {
                           console.log(item, error)
                            if(item){
                                let s : any[] = _stacks.slice()
                                s.push(item)
                               setStacks(s)
                            }
                        })
                    }
                }}
                onClose={() => openModal(false)} />
            <Box 
                pad="small"
                elevation="small"
                gap="small"
                direction="column"
                width={'20vw'}>
                <Text style={{textDecoration: 'underline'}}>Plugins</Text>
                <Button 
                    plain
                    label="Control nodes" />

                <Button 
                    plain
                    label="Function nodes" />
                <Button 
                    plain
                    label="Control platforms" />
            </Box>
            
            <PluginStore
                onClickRow={(plugin) => {
                    props.history.push(`/dashboard/plugins/${plugin._id}`)
                }}
                onCreate={() => {
                    openModal(true)
                }}
                plugins={stacks as any}
                 />
        </Box>
    )
}

export const PluginList = styled(BaseStackList)`
    flex: 1;
    display: flex;
    padding: 8px;
    position: relative;

    .MuiList-root{
        flex: 1;
    }
`