import { TreeView } from '@thetechcompany/live-ui';
import { Box, List, CheckBox} from 'grommet';
import React, { useState } from 'react';
import { StackModal } from '../modals/stacks';
import { StackItemModal } from '../modals/stacks/item';
import { Stack, StackItems } from '@hive-flow/types';
import { useContext } from 'react';
import { EditorContext } from '../context';
import { ADD_PLUGIN, ADD_PLUGIN_ITEM } from '../store/actions';

export interface PluginProps {
    stacks?: Stack[];
    plugins?: string[]
    
    onSelect?:(stack_ix?: number, item_ix?: number) => void;
}
export const PluginMenu : React.FC<PluginProps> = (props) => {

    const { state, dispatch } = useContext(EditorContext)

    const [ expanded, setExpanded ] = useState<string[]>([])

    const [ modalOpen, openModal ] = useState(false);
    
    const [ createNode, setCreateNode ] = useState<string>()

    const addStack = (args: {name: string}) => {
        dispatch?.({type: ADD_PLUGIN, data: {name: args.name}})
    }

    const addStackItem = (args: {stack_id: string, items: StackItems}) => {
        dispatch?.({type: ADD_PLUGIN_ITEM, data: {stack: args.stack_id, items: args.items}})
    }
   
    const togglePlugin = (id: string, checked: boolean) => {
        let plugins = ([""]).slice()
        let ix = plugins.indexOf(id)

        console.log(ix > -1, plugins, checked, id)
        console.log(ix, plugins, checked)
        if(!checked && ix > -1){
            plugins?.splice(ix, 1)
        }else if(checked){
            plugins?.push(id)
        }

//        setEdited(true)
  //      setProgram({...program, plugins})
    }

    console.log(props.stacks)

    const stacks = props.stacks?.map((x) => ({label: x.name, id: x._id, items: x.items?.map((x) => ({...x, label: x?.name, id: x?._id}))}))
    console.log(stacks)

    const makeStack = (stack: any) => {
        if(stack && (!createNode || createNode == 'root')){
            addStack({name: stack.name})
        }
        openModal(false)
    }


    return (
            <Box flex>
                <StackItemModal 
                    onSubmit={(stack_item : any) => {
                        addStackItem({
                            stack_id: (createNode || '').split('.')[1],
                            items: stack_item
                        })
                    }}
                    onClose={() => openModal(false)}
                    open={modalOpen && ((createNode || '').split('.').length > 1)} />

                <StackModal 
                    onSubmit={(stack: any) => {
                        console.log(stack)
                        makeStack(stack)
                    }}
                    onClose={() => openModal(false)}
                    open={modalOpen && (!createNode || createNode == 'root')} />
                  <TreeView
                    expanded={expanded.length > 0 ? expanded : ['root']}
                    onExpansion={(expansion)=> setExpanded(expansion)}
                    onCreate={(selector) => {
                        console.log(selector)
                        setCreateNode(selector)
                        openModal(true)
                    }}
                    onSelect={(selector) => {
                      let parts=  selector.split('.')
                      if(parts.length == 3 || parts.length == 2){
                          console.log(parts)
                        let stack_ix = stacks?.map((x) => x.id).indexOf(parts[1])

                        if(stacks && stack_ix != undefined && stack_ix > -1){
                            console.log(stack_ix, stacks[stack_ix].items)
                            let item = stacks[stack_ix]?.items?.map((a) => a.id).indexOf(parts[2])
                            if(item != undefined && item > -1){
                                props.onSelect?.(stack_ix, item)
                                console.log(item)
                            }else{
                                props.onSelect?.(stack_ix)
                            }
                        }
                      }else{
                          props.onSelect?.()
                      }
                    }}
                    items={[{
                        id: 'root',
                        label: "Plugins", 
                        items: stacks as any
                    }]}
            />
                    </Box>
     
    )
}