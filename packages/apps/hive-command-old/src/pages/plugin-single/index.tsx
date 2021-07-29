import React, {useState} from 'react';
import styled from 'styled-components';
import { Stack, StackItems, useQuery } from '../../gqless'
import { GridList, LiveComponent, Paper } from '@thetechcompany/live-ui'
import { Box, Text, Button  } from 'grommet';
import { StackItemModal } from '../../components/modals/stacks/item';
import { stackActions } from '../../actions';
import { useEffect } from 'react';
import * as Icons from 'grommet-icons'
import { Title } from '../../components/ui/title';

export interface PluginSingleProps {

}

export const PluginSingle = styled((props: any) => {
    const [ modalOpen, openModal ] = useState<boolean>(false)

    const query = useQuery({
        suspense: false,
        staleWhileRevalidate: true
    })

    const stack = query.StackById({_id: props.match.params.id})

    const [ plugin, setPlugin ] = useState<Stack>()

    useEffect(() => {
        if(stack){
            setPlugin(stack)
        }
    }, [stack])
 
    const [ createStackItem, {isLoading, data}] = stackActions.useCreateStackItem(props.match.params.id)

    return query.$state.isLoading? null:  (
        <Box>
             <Box
                justify={"between"}
                pad={{horizontal: 'small'}}
                direction="row">
                    <Box 
                        direction="row">
                        <Button onClick={() => props.history.push(`/dashboard/plugins`)}>
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
                            onClick={() => props.history.push(`/dashboard/plugins/${props.match.params.id}/editor`)}
                            size="small"
                            color="accent-1" 
                            label="Editor" primary></Button>
                    </Box>
                   
                  
                    </Box>
            <StackItemModal
                open={modalOpen} 
                onClose={() => openModal(false)}
                onSubmit={(stackItem: StackItems) => {
                    console.log(stackItem)
                    let items  = stack?.items?.slice() || [];
                    items?.push(stackItem as any)

                    console.log(items)
                    if(stackItem){
                        createStackItem({args: {
                            stack_id: props.match.params.id,
                            items: stackItem as any
                        }}).then((stack) => {
                            console.log("Stack item", stack)
                        })
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
                    }
                }}
                />
            <Box pad="small">
            <GridList 
                onClick={(item ) => {
                    props.history.push(`${props.match.url}/${item._id}/editor`)
                }}
                addItem={() => { console.log("Open"); openModal(true)}}
                items={stack?.items?.map((x) => ({...x})) || []}
                renderItem={(item) => (
                    <Box
                        style={{overflow: 'hidden'}}
                        round={"small"}
                        flex
                        justify="between">
                        <Box 
                            round={"xsmall"}
                            pad="xsmall"
                            direction="column"
                            style={{color: 'black'}}
                            flex>
                            <LiveComponent code={item.ui} />
                        </Box>
                        <Box 
                            alignSelf="center"
                            pad={{vertical: 'small'}}>
                            <Text >{item.name}</Text>
                        </Box>
                    </Box>
                )} />
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