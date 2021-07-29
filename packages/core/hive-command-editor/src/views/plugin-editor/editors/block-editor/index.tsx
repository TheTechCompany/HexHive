import { Tabs, Box, Tab } from 'grommet';
import React, { useEffect, useRef, useState } from 'react';
import { CodeEditor } from '../../../../'
import { Stack, StackItems } from '@hexhive/types/dist/interfaces';
import ioTemplate from '../../templates/code/io-bus';


export interface BlockEditorProps {
    onPluginChanged?: (stack: StackItems) => void;
    plugin?: StackItems;
}

export const BlockEditor : React.FC<BlockEditorProps> = (props) => {
    const [ activeTab, setActiveTab ] = useState<number>(0)


    const [_plugin, _setPlugin] = useState<any>({})
    const plugin = useRef<any>({})


    const setPlugin = (_plugin: any) => {
        _setPlugin(_plugin)
        plugin.current = _plugin;
    }

    const mapProps = (properties: any[]) => {
        let props : any = {};
    
        properties.forEach((prop) => {
            props[prop.name] = prop.type == 'Enum' ? prop.options : 'string';
        })
        return props;
    }

    const onPluginChanged = (key: string, value: any) => {
        console.log("PLUGIN", plugin)
        setPlugin({...plugin.current, [key]: value})
        props.onPluginChanged?.(plugin.current)
    }

    useEffect(() => {
        setPlugin(props.plugin)
    }, [props.plugin])
    

    const tabs = [
        {
            label: "Actions",
            pane: (
                <Box flex> 
                     <CodeEditor
                        typeDefs={mapProps(_plugin?.properties || [])}
                        code={_plugin?.code || ioTemplate}
                        onChange={(code) => {
                            onPluginChanged?.('code', code)
                            
                        }} />
    
                </Box>
              
            )
        },
    ]

    return (
        <Box 
            direction="row"
            flex>
            <Tabs 
                alignControls="start"
                activeIndex={activeTab}
                onActive={(index) => setActiveTab(index)}
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
    )
}