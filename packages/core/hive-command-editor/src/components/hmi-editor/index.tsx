import React, { useEffect, useMemo, useState } from 'react';

import { Box, Spinner } from 'grommet';

import { LiveComponent, StartNodeFactory} from '@thetechcompany/live-ui';
import { ElementNodeFactory } from './nodes/element-node/factory';
import { IFlowShard,  IStack } from '@hexhive/types';
import { camelCase } from 'lodash';
import { FlowEditor } from '../flow-editor';
import { NodeDropdown } from '../node-dropdown';


export interface HMIEditorProps {
    hmi?: IFlowShard;

    onChange?: (hmi: any) => void;

    editable?: boolean;

    plugins?: IStack[];
}

export const HMIEditor: React.FC<HMIEditorProps> = ({
    hmi,
    onChange,
    plugins = [],
    editable
}) => {
    
    const [ selectedTab, setSelectedTab ] = useState<number | null>(null)

   const [ _hmi, setHMI ] = useState<IFlowShard>(hmi || {nodes: [], paths: []} as any)

   useEffect(() => {
    if(hmi){
        setHMI(hmi)
    }
   }, [hmi])

 
    const _plugins = useMemo(() => {
        console.log("PLugins", plugins)
        return plugins.map((x)=> {
            return {
                ...x,
                items: x.items?.map((y) => ({
                    ...y,
                    ui: y?.ui,
                    ports: y?.ports?.map((z) => ({...z}))
                }))
            }
        })
    }, [JSON.stringify(plugins)])

  
    
  

    const blockTypes : any =  {  }

    
    const loadedPlugins = useMemo(() => {
        if(Array.isArray(_plugins)){
            let assets : any = {};
            let pluginNames : any = {};

            _plugins.forEach((plugin) => {
                console.log(plugin)
                if(!plugin.name) return;
                if(!pluginNames[plugin.name]) pluginNames[plugin.name] = [];
                let plugins = [];
                plugin.items?.forEach((item: any) => {
                let name = camelCase(item?.name || '')
                console.log("Pluggin", item.dimensions)
                    assets[name] = {
                        ports: item?.ports || [],
                        dimensions: item?.dimensions,
                        component: ( <LiveComponent code={item?.ui || `import React from "react"; export default () => <div>${name}</div>`} />)
                    }

                })
                
            })
            return assets;
        }
         return {};
    }, [JSON.stringify(_plugins)])

    const parsePlugins = (plugins : any) => {
        let ret : any = {};
        Object.keys(plugins).forEach((key) => {
            ret[key] = plugins[key].content
        })
        return ret;

    }


    return !loadedPlugins ? (
        <Box
            flex
            align="center"
            justify="center">
            <Spinner />
        </Box>
    ) : (
        <FlowEditor
            program={_hmi as any}
            onChange={(hmi) => {
                onChange?.(hmi)
            }}
            factories={[new StartNodeFactory(), new ElementNodeFactory(loadedPlugins)]}
            assets={parsePlugins(loadedPlugins)}
            blocks={Object.keys(loadedPlugins).map((x) => ({
                blockType: 'element-node', 
                extras: {
                    asset: x,
                    ports: loadedPlugins[x].ports, 
                },
                dimensions: loadedPlugins[x].dimensions,
                content: loadedPlugins[x].component
            }))}

            >
            <NodeDropdown 
                title={"Blocks"}
                items={Object.keys(loadedPlugins).map((x) => ({
                blockType: 'element-node', 
                extras: {
                    asset: x,
                    ports: loadedPlugins[x].ports, 
                },
                dimensions: loadedPlugins[x].dimensions,
                content: loadedPlugins[x].component
            }))} />
        </FlowEditor>     
    )
}

/*
*/

/*
 <BlockTray
                            renderItem={(block, ix) => <TrayItem element={block} />}
                            blocks={Object.keys(loadedPlugins).map((type) => ({
                                blockType: 'element-node',
                                extras: {
                                    asset: type,
                                    ports: loadedPlugins[type].ports
                                },
                                content: loadedPlugins[type].component,
                                label: type
                            }))} />
*/