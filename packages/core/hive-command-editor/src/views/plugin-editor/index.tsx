import { NodeEditor } from '../../components/node-editor';
import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import { GridList, InfiniteCanvas, TabPane } from '@thetechcompany/live-ui'
import { CodeEditor } from '../../components/code-editor'
import {  Stack, StackItems } from '@hive-flow/types';

import componentTemplate from './templates/code/component'
import ioTemplate from './templates/code/io-bus';

import { Box, Text, List, Button } from 'grommet';
import * as Icons from 'grommet-icons'
import _ from 'lodash';
import { PropertyModal } from '../../modals/property/PropertyModal';
import { TabView } from '../../components/tab-view';
import { IOSpecEditor } from '../../components/io-spec-editor/IOSpecEditor';
import { PluginEditorMenu } from './menu';
import { UIEditor } from './editors/ui-editor';
import { BlockEditor } from './editors/block-editor';

export interface StackEditorProps {
    className?: string;
    match?: any;
    history?: any;
    plugin?: Stack & any;
    plugin_item?: any;

    onSave?: () => void;

    onPluginChanged?: (plugin: Stack) => void;
    onCreateItem?: (pluginItem: {name: string}) => void;
}


export const BaseStackEditor : React.FC<StackEditorProps> = (props) => {

    const [ modalOpen, openModal ] = useState<boolean>(false);

    const [ properties, setProperties ] = useState<{name: string, type: string}[]>([])

    const [ node, setNode ] = useState<StackItems>()
    const [ edited, setEdited ] = useState<boolean>(false)

    
    const [ selected, setSelected ] = useState<string>()

    const [_plugin, _setPlugin] = useState<any>({})
    const plugin = useRef<any>({})


    const setPlugin = (_plugin: any) => {
        _setPlugin(_plugin)
        plugin.current = _plugin;
    }


    useEffect(() => {
        if(props.plugin_item){
            setPlugin(props.plugin_item)
        }
    }, [JSON.stringify(props.plugin_item)])


    /*
  
    const onSave = (_node?: StackItems) => {

        if(ix != undefined && ix > -1 && stack?.items != undefined){
            let items : any[] = stack?.items?.slice()
            items[ix] = {
                ..._node,
                ...node,
            }

            items = items.map((item) => {
                item.ports = _.map(item.ports, _.partialRight(pick, ['_id', 'name', 'type', 'x', 'y', 'rotation']))
                return item;
            })
           
            const it = {
                items: _.map(items, _.partialRight(pick, ['_id', 'name', 'code', 'ports']))
            }
            console.log("Update save", items, it)
            updateItem({
                args: {
                    id: props.match.params.id, 
                    update: it
                }
            }).then((r) => {
                console.log("Response", r)
                if(r.item){
                    setEdited(false)
                }
            })
        }
    }

    useEffect(() => {
        if(_node){
            setNode(_node)
        }
    }, [_node])
*/

const onPluginChanged = (key: string, value: any) => {
    setPlugin({...plugin.current, [key]: value})
    props.onPluginChanged?.(plugin.current)
}

const mapProps = (properties: any[]) => {
    let props : any = {};

    properties.forEach((prop) => {
        props[prop.name] = prop.type == 'Enum' ? prop.options : 'string';
    })
    return props;
}


const addPluginItem = (pluginItem: {name: string}) => {

}

const updateItem = (id: string, update: StackItems) => {
    console.log("Update Item", id, update)

    let plugin = Object.assign({}, props.plugin)
    if(!plugin || !plugin.items) return;
    let items = plugin.items.slice();
    let ix = items.map((x: StackItems) => x._id).indexOf(id)

    if(ix !== undefined){
        items[ix] = update;
    }

    plugin.items = items.map((x: StackItems) => _.pick(x, ['_id', 'name', 'ui', 'ports', 'key', 'type', 'dimensions']));

    console.log("Update Item", id, update, plugin)

    props.onPluginChanged?.(plugin)

}

const renderEditor = () => {
    let currentItem = props.plugin?.items?.find((a: any) => a._id == selected)
    switch(currentItem?.type){
        case 'ui':
            return selected && (
                <UIEditor
                    plugin={currentItem} 
                    onPluginChanged={(plugin) => {
                        console.log("UI Editor update", plugin)
                        if(!plugin._id) return;
                        updateItem(selected, plugin)
                    }}/>
            )
        case 'block':
        default:
            return selected && (
                <BlockEditor
                    plugin={currentItem}
                    onPluginChanged={(plugin) => {
                        if(!plugin._id) return;
                        updateItem(plugin._id, plugin)
                    }}/>
            )

    }
}

    return !props.plugin ? null : (
        <Box 
            flex
            direction="column">
            <Box
                elevation="small"
                justify="between"
                align="center"
                direction="row">
                <Text margin={{left: 'small'}}>{props.plugin?.name}</Text>
                <Button 
                    onClick={props.onSave}
                    hoverIndicator 
                    icon={<Icons.Save size="medium" />} />
            </Box>

            <Box
                flex
                direction="row">
            
            {/*<PropertyModal 
                onSubmit={(property) => {
                    let p = _plugin?.properties?.slice() || []
                    p.push(property)

                    onPluginChanged?.('properties', p)
                /* setProperties(p)
                    console.log(property)
                }}
                open={modalOpen} 
                onClose={() => openModal(false)} />*/}
         
            <PluginEditorMenu
                plugin={props.plugin}
                onAdd={props.onCreateItem}
                selected={selected}
                onClick={(id) => setSelected(id)} />

            <Box 
                margin={'xsmall'}   
                direction="column"
                flex>
                {renderEditor()}
            </Box>

         </Box>
         </Box>
    )

}
//          
export const PluginEditor = styled(BaseStackEditor)`

`

/*
<GridList 
        cols={4}
        className={props.className}>
            <StackItemModal 
                open={modalOpen}
                onSubmit={(stack_item : IStackItem) => {
                    if(stack_item.name){
                        stackActions.createStackItem(props.match.params.id, stack_item.name).then((item) => {
                            let s : any = {
                                ...stack,
                                items: [...(stack?.items || []), item]
                            }
                            setStack(s)
                        })
                    }
                }}
                onClose={() => openModal(false)} />
            <GridListTile onClick={() => openModal(true)}>
                <Paper style={{cursor: 'pointer'}}>
                    <Add style={{fontSize: 50}} />
                </Paper>
            </GridListTile>
            {stack?.items?.map((item) => (
                <GridListTile onClick={() => props.history.push(`/dashboard/stacks/${props.match.params.id}/${item._id}/edit`)}>
                    <Paper className="grid-tile__content">
                        <div className="grid-tile__content-img">
                        </div>
                        <Typography variant={'h5'} >{item.name}</Typography>
                    </Paper>
                </GridListTile>
            ))}
        </GridList> 
*/