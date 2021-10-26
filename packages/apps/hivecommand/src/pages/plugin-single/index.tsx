import React, {useState} from 'react';
import styled from 'styled-components';
import { gql, useQuery as useApollo } from '@apollo/client'
import { CommandPlugin, Stack, StackItems, useQuery } from '@hexhive/client'
// import { GridList, LiveComponent, Paper } from '@thetechcompany/live-ui'
import { Box, Text, Button  } from 'grommet';
import { StackItemModal } from '../../components/modals/stacks/item';
import { stackActions } from '../../actions';
import { useEffect } from 'react';
import * as Icons from 'grommet-icons'
import { Title } from '../../components/ui/title';
import { GridList } from '@hexhive/ui';

export interface PluginSingleProps {

}

export const PluginSingle = styled((props: any) => {
    const [ modalOpen, openModal ] = useState<boolean>(false)

    const query = useQuery({
        suspense: false,
        staleWhileRevalidate: true
    })

    const { data } = useApollo(gql`
        query Q ($id: ID){
            commandPlugins (where: {id: $id}){
                id
                name
                items{
                    id
                }
            }
        }
    `, {
        variables: {
            id: props.match.params.id
        }
    })

    const plugin = data?.commandPlugins?.[0];


    // const [ plugin, setPlugin ] = useState<CommandPlugin>()

    // useEffect(() => {
    //     if(stack){
    //         setPlugin(stack)
    //     }
    // }, [stack])
 
    // const [ createStackItem, {isLoading, data}] = stackActions.useCreateStackItem(props.match.params.id)

    return query.$state.isLoading? null:  (
        <Box 
            flex 
            pad="xsmall"
            overflow="hidden"
            round="xsmall"
            background="neutral-1">
             <Box
                justify={"between"}
                direction="row">
                    <Box 
                        direction="row">
                        <Button onClick={() => props.history.push(`/plugins`)}>
                            <Icons.Previous />
                        </Button>
                        <Title 
                            title={plugin?.name || ''} 
                            onChange={(e) => {
                                let update = Object.assign({}, plugin)
                                update.name = e;
                            //   onChange(update)
                            }}/>
                    </Box>
                    <Box 
                        direction="row"
                        align="center">
                        <Button 
                            onClick={() => props.history.push(`/plugins/${props.match.params.id}/editor`)}
                            size="small"
                            color="accent-1" 
                            label="Editor" primary></Button>
                        <Button
                            hoverIndicator
                            icon={<Icons.Add />} />
                    </Box>
                   
                  
                    </Box>
            <StackItemModal
                open={modalOpen} 
                onClose={() => openModal(false)}
                onSubmit={(stackItem: StackItems) => {
                    // console.log(stackItem)
                    // let items  = stack?.?.slice() || [];
                    // items?.push(stackItem as any)

                    // console.log(items)
                    // if(stackItem){
                        // createStackItem({args: {
                        //     stack_id: props.match.params.id,
                        //     items: stackItem as any
                        // }}).then((stack) => {
                        //     console.log("Stack item", stack)
                        // })
                        
                        /*.then((result) => {
                            let p = Object.assign({}, plugin)
                            let items : any[] = plugin?.items?.slice() || [];
                            if(items && result.item.items){
                                console.log(result.item)
                                items = result.item.items
                                p.items = items;
                                setPlugin(p)
                            }
                        })*/
                    // }
                }}
                />
            <Box pad="small">
            <GridList 
                renderItem={(item) => (
                    <Box>
                        Item
                    </Box>
                )}
                data={plugin?.items || []}/>
        </Box>
    </Box>        
    )
})`
flex: 1;

.grid-tile__content{
    display: flex;
    flex: 1;
    flex-direction: column;
}

.grid-tile__content .MuiTypography-root{
    text-align: center;
    padding: 4px;
}

.grid-tile__content-img{
    flex: 1;
    background: #dfdfdf;
}

.MuiGridListTile-tile{
    cursor: pointer;
    width: 200px;
    height: 200px;
    flex-direction: column;
    display: flex;
}

.MuiGridListTile-root .MuiPaper-root:not(.grid-tile__content){
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
`