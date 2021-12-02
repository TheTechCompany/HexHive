import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box, List, Button, Tabs, Tab } from 'grommet';
import componentTemplate from '../../templates/code/component'
import ioTemplate from '../../templates/code/io-bus';
import _ from 'lodash';
import { HMICanvas } from '../../../../components/hmi-canvas';
import { HMINode } from '../../../../components/hmi-node';
import { useDropzone } from 'react-dropzone'
import { Code } from 'grommet-icons';
import svgr from '@svgr/core'
import { CodeEditor } from '@hexhive/ui';

export interface UIEditorProps {
    plugin: any,
    onPluginChanged?: (stack: any) => void;
}

export const UIEditor : React.FC<UIEditorProps> = (props) => {

    const [ view, setView ] = useState<string>('code');

    const [ icon, setIcon ] = useState<any>()

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

    const onDrop = useCallback(files => {

        const reader = new FileReader();

        reader.addEventListener('load', (e) => {
            let svgText = e?.target?.result;
            console.log(icon)
            setIcon(svgText)
            
            // svgr(svgText, {
            //     typescript: true
            // }, {
            //     componentName: "Test"
            // }).then((js: any) => {
            //     // let update: any = {
            //     //     ...node,
            //     //     ui: formatCode(trimCode(js))
            //     // }
            //     // console.log("SVG DRop", update, js)
            //     // onChange?.(update)
            // })
        })
        reader.readAsText(files[0])
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        noClick: true,
        accept: ['image/svg+xml']
    })
    
    useEffect(() => {   
        if(!_.isEqual(props.plugin, _plugin)){
            setPlugin(props.plugin)
        }
    }, [props.plugin])

const tabs = [
    // {
    //     label: "IO-Spec",
    //     pane: (
    //         // <IOSpecEditor 
    //         //     plugin={_plugin}/>
    //     )
    // },

    {
        label: "Component",
        pane: (
            <Box 
                flex  
                direction="row">

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
            {...getRootProps()}

            style={{position: 'relative'}}
            background="neutral-4"
            flex>
            <Box direction="row"
                justify="end">
                <Button 
                    onClick={() => {
                        setView(view == "code" ? "view" : "code")
                    }}
                    icon={<Code />} />
            </Box>
            <input {...getInputProps() as any} />

            <Box flex>
                {view == "code" ? (
                    <Box flex>
                        <CodeEditor 
                            value={icon}
                            />
                    </Box>
                ) : <Box 
                    flex
                    justify="center"
                    align="center">
                    <img 
                    style={{height: 100, width: 100}}
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(icon)}`} />
                    </Box>}
            </Box>
          
        </Box>
    );  
}