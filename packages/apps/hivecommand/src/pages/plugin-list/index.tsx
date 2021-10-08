import { Add } from 'grommet-icons';
import { stackActions } from '../../actions';
import { StackModal } from '../../components/modals/stacks';
import React, {Suspense, useEffect, useState} from 'react';
import { useQuery, useMutation, Stack } from '@hexhive/client'
import styled from 'styled-components'
import { Box, Button, CheckBox, TextInput, Text } from 'grommet'
import { PluginStore } from '../../components/plugin-store/PluginStore'
import { NestedList } from '../../components/ui/nested-list';
export interface StackListProps {
    className? :string;
    history?: any;
    match?: any;
}

export const BaseStackList : React.FC<StackListProps> = (props) => {


    const query = useQuery({
        suspense: false,
        staleWhileRevalidate: false
    })

    const plugins = query.commandPlugins()

    
    const [ createStack, {isLoading, data, error }] =  useMutation((mutation, args: {name: string}) => {
        const result = mutation.createCommandPlugins({input: [{name: args.name}]})
       
        if(result){
            return {
                item: {
                    ...result.commandPlugins[0]
                },
                error: null
            }
        }
        return {
            error: "no access"
        }
        
    }, {
        
            onCompleted(data) {},
            onError(error) {},
            refetchQueries: [query.commandPlugins()],
            awaitRefetchQueries: true,
            suspense: false,
          
    })
    
    const [ modalOpen, openModal ] = useState<boolean>(false)
    
    return query.$state.isLoading  ? (<div>Loading...</div>) : (
        <Box
            overflow="hidden"
             background="neutral-1"
            direction="row"
            elevation="small"
            round="small"
            className={props.className}>
            <StackModal 
                open={modalOpen}
                onSubmit={(stack : Stack) => {
                    console.log(stack)
                    if(stack.name){
                        
                        createStack({args: {name: stack.name}}).then(({item, error}) => {
                           console.log(item, error)
                            // if(item){
                            //     let s : any[] = _stacks.slice()
                            //     s.push(item)
                            // //    setStacks(s)
                            // }
                        })
                    }
                }}
                onClose={() => openModal(false)} />
        
            
            <NestedList
                data={plugins}
                onClick={({item}) => props.history.push(`${props.match.url}/${item.id}`)}
                renderItem={(item) => item.name}
                onAdd={() => openModal(true)} />
        </Box>
    )
}

export const PluginList = styled(BaseStackList)`
    flex: 1;
    display: flex;
    position: relative;

    .MuiList-root{
        flex: 1;
    }
`