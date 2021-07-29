import React, { useEffect, useRef, useState } from 'react';
import { Box, List, Button, Tabs, Tab } from 'grommet';
import { IOSpecEditor } from '../../../../components/io-spec-editor/IOSpecEditor';
import { StackItems } from '@hexhive/types';
import { NodeEditor, CodeEditor } from '../../../../'
import { TabPane } from '@thetechcompany/live-ui';
import componentTemplate from '../../templates/code/component'
import ioTemplate from '../../templates/code/io-bus';
import _ from 'lodash';

export interface UIEditorProps {
    plugin: StackItems,
    onPluginChanged?: (stack: StackItems) => void;
}

export const UIEditor : React.FC<UIEditorProps> = (props) => {

    const [ modalOpen, openModal ] = useState<boolean>(false);
    const [_plugin, _setPlugin] = useState<any>({})
    const plugin = useRef<any>({})

    const [ activeTab, setActiveTab ] = useState<number>(0)

    console.log(plugin)

    const setPlugin = (_plugin: any) => {
        _setPlugin({..._plugin})
        plugin.current = _plugin;
    }

    const onPluginChanged = (key: string, value: any) => {
        console.log("PLUGIN", plugin)
        setPlugin({...plugin.current, [key]: value})
        props.onPluginChanged?.(plugin.current)
    }
    
    useEffect(() => {   
        if(!_.isEqual(props.plugin, _plugin)){
            setPlugin(props.plugin)
        }
    }, [props.plugin])

const tabs = [
    {
        label: "IO-Spec",
        pane: (
            <IOSpecEditor 
                plugin={_plugin}/>
        )
    },

    {
        label: "Component",
        pane: (
            <Box 
                flex  
                direction="row">
                <CodeEditor 
                    onChange={(code) => {
                        _.throttle((code) => onPluginChanged('ui', code), 100)(code)
                    }}
                    code={_plugin.ui || componentTemplate} />
                <NodeEditor 
                    onChange={(node) => {
                        console.log("Node editor", node)
                        // setPlugin({
                        //     ..._plugin,
                        //     ...node
                        // })
                        props.onPluginChanged?.(node)
                    }}
                    node={{
                        ..._plugin,
                        dimensions: {
                            ..._plugin.dimensions
                        },
                        ui: _plugin.ui || componentTemplate,
                    } as any}
                    />
            </Box>
        )
    },
    {
        label: "Properties",
        pane: (
            <Box 
                flex
                pad="small"> 
                <List 
                    data={plugin?.current.properties}
                    
                    />
                <Button onClick={() => openModal(true)} label="Add property" />
            </Box>
        )
    }
]

console.log(_plugin)
    return (
        <Box
            direction="column" 
            flex>
            <Tabs
                activeIndex={activeTab}
                onActive={(index) => setActiveTab(index)}
                alignControls="start"
                style={{display: 'flex'}}
                flex>
                {tabs.map((tab, ix) => (
                    <Tab 
                        plain
                        title={(
                            <Box
                                border={ix < tabs.length - 1 ? {side: 'right', size: 'small'} : undefined}
                                background={activeTab == ix ? "dark-3" : "dark-2"}
                                pad={{vertical: "xsmall", horizontal: 'xsmall'}}>{tab.label}</Box>
                        )}>
                            <Box fill>
                                {tab.pane}

                            </Box>
                    </Tab>
                ))}
            </Tabs>
          
        </Box>
    );  
}