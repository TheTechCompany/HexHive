import React, { useEffect, useState } from 'react';
import { Stack, useQuery } from '@hexhive/client';
import { useQuery as useApollo, useApolloClient, gql } from '@apollo/client'
import { PluginEditorMenu } from './menu';
import { Box, Text } from 'grommet';
import { UIEditor } from './editors/ui-editor';
import { ProgramCanvasModal } from '../../components/modals/program-canvas';
import { useMutation } from '@hexhive/client';
import { ObjectTypeDefinitionNode } from 'graphql';

export const PluginEditorPage : React.FC<any> = (props) => {
    const [ modalOpen, openModal ] = useState<boolean>(false);

    const query = useQuery({
        staleWhileRevalidate: false,
        suspense: false,
        
    })

    const client = useApolloClient()

    const [ selected, setSelected ] = useState<any>()

    const { data } = useApollo(gql`
        query Q ($id: ID){
            commandPlugins (where: {id: $id}){
                id
                name
                items{
                    id
                    name
                    type
                    value
                }
            }
        }
    `, {
        variables: {
            id: props.match.params.id
        }
    })

    const refetch = () => {
        client.refetchQueries({
            include: ['Q']
        })
    }

    const [ createPluginItem, createInfo ] = useMutation((mutation, args: {name: string}) => {
        const resp = mutation.updateCommandPlugins({
            where: {id: props.match.params.id},
            update: {
                items: [{create: [{
                  node: {
                      name: args.name
                  } 
                }]}]
            }
        })
        return {
            item: {
                ...resp.commandPlugins?.[0]
            }
        }
    })

    const plugin = data?.commandPlugins?.[0];

    const onCreateItem = () => {
        openModal(true)
    }
    
    const renderEditor = () => {
        let currentItem = plugin?.items?.find((a: any) => a.id == selected)
        switch(currentItem?.type){
            default:
            case 'ui':
                return selected &&   (
                    <UIEditor
                        plugin={currentItem} 
                        onPluginChanged={(plugin) => {
                            console.log("UI Editor update", plugin)
                            if(!plugin.id) return;
                            // updateItem(selected, plugin)
                        }}/>
                )
        }
    }


    // const [createStackItem, info] = stackActions.useCreateStackItem(props.match.params.id)

    // const [ updateStack, updateInfo ] = stackActions.useUpdateStack(props.match.params.id)

    return query.$state.isLoading ? null : (
        <Box flex round="xsmall" background="neutral-1" overflow="hidden">
            <ProgramCanvasModal 
                open={modalOpen}
                onSubmit={(item) => {
                    createPluginItem({args: {
                        name: item.name
                    }}).then(() => {
                        refetch()
                    })
                }}
                onClose={() => {
                    openModal(false);
                }}
                modal={gql`
                    type PluginItem {
                        name: String
                    }
                `.definitions?.[0] as ObjectTypeDefinitionNode}/>
            <Box pad="xsmall" background="accent-2" direction="row">
                <Text >{plugin?.name}</Text>
            </Box>
            <Box 
                direction="row"
                flex>
            <PluginEditorMenu 
                plugin={plugin}
                onAdd={onCreateItem}
                selected={selected}
                onClick={(id) => {
                    setSelected(id.id)
                }}
                />
                {renderEditor()}
            </Box>
          
        {/* <PluginEditor
            plugin={plugin}
            onSave={() => {
                if(!plugin?._id) return;
                // updateStack({args: {id: plugin?._id, update: plugin}}).then(() => {
                //     console.log("Updated stack")
                // })
            }}
            onPluginChanged={(plugin: any) => {
                // setPlugin(plugin as any)
                console.log("PLUGIN", plugin)
            }}
            onCreateItem={(item: any) => {
                // createStackItem({args: {
                //     stack_id: props.match.params.id,
                //     items: item
                // }}).then((result) => {
                //     console.log("REsult", result)
                // })
            }}
             /> */}
                     </Box>

    )
}