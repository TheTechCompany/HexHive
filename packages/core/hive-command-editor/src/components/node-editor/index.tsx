import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { CodeEditor } from '../code-editor';
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'

import { NodeFactory } from './node-blank/node-factory';
import { isEqual, pick, throttle } from 'lodash';
import { Box, Text, Heading, Button, TextInput } from 'grommet';
import * as Icons from 'grommet-icons'

import { InfiniteCanvas, ZoomControls } from '@hexhive/ui'

import { LiveComponent, Tablet } from '@thetechcompany/live-ui'

import { NodeEditorContext } from './context';
import { IStackItems, IStackItemsPorts } from '@hexhive/types';
import _ from 'lodash';

const svgr = require('@svgr/core').default

export interface NodeEditorProps {
    className?: string;
    history?: any;

    node?: IStackItems;
    onChange?: (node: IStackItems) => void;
    onBack?: () => void;

    onSave?: (node?: IStackItems) => void;
    edited?: boolean;
}


const ExampleComponent = `
import React from 'react';

const Component = (props) => {
    return (
        <div style={{
            display: 'flex',
            backgroundColor: 'white',
            flex: 1
        }}>
            New Node
        </div>
    )
}

export default Component;
`

const formatNode = (node: IStackItems) => {
    let n: any = Object.assign({}, node)

    n.ports = n.ports?.map((x: IStackItemsPorts) => pick(x, stack_port_pick ))
    return pick(n, stack_pick)
}

const stack_port_pick = ['_id', 'name', 'x', 'y', 'rotation', 'type']
const stack_pick = ['_id', 'type', 'name', 'dimensions', 'code', 'ui', 'ports']
export const BaseNodeEditor: React.FC<NodeEditorProps> = (props) => {


    const [node, setNode] = useState<IStackItems | undefined>(formatNode(props.node || {} as any) as any)


    useEffect(() => {
        if (props.node && !isEqual(node, formatNode(props.node))) {
            setNode(formatNode(props.node) as any)
        }
    }, [props.node])

    const code = node?.ui || ''
    const ports = node?.ports || [];


    const updateDimensions = (dimensions: { width: number, height: number }) => {
        setNode({
            ...node,
            dimensions: dimensions
        } as any)

        let update = {
            ...node,
            dimensions: _.pick(dimensions, ['width', 'height'])
        }

        onChange(update)
    }

    const NODE_TEMPLATE = {
        id: 'new-node',
        x: 300,
        y: 100,
        width: node?.dimensions?.width,
        height: node?.dimensions?.height,
        type: 'new-node',
        ports: ports
    }



    console.log(ports, node)

    const [Component, setComponent] = useState<any>()

    const trimCode = (code: string) => {
        let parts = code.split(`\n`)
        console.log(parts)

        return parts.slice(3, parts.length - 3).join(`\n`)
    }

    const formatCode = (code: string) => {
        console.log(code)
        let header = `import React from 'react';

const Component = (props) => {       
        `

        let footer = `
}

export default Component;`
        return `${header}
${code}
${footer}`
    }

    const onDrop = useCallback(files => {

        const reader = new FileReader();

        reader.addEventListener('load', (e) => {
            let svgText = e?.target?.result;

            svgr(svgText, {
                typescript: true
            }, {
                componentName: "Test"
            }).then((js: any) => {
                let update: any = {
                    ...node,
                    ui: formatCode(trimCode(js))
                }
                console.log("SVG DRop", update, js)
                onChange?.(update)
            })
        })
        reader.readAsText(files[0])
    }, [node])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        noClick: true,
        accept: ['image/svg+xml']
    })

    const onSave = () => {
        let n: any = Object.assign({}, node)
        n.ports = _.map(n.ports || [], _.partialRight(_.pick, stack_port_pick))

        props.onSave?.(pick(n, stack_pick) as any)
    }
    const onChange = (update: any) => {
        update.ports = _.map(update.ports || [], _.partialRight(_.pick, stack_port_pick))
        props.onChange?.(pick(update, stack_pick) as any)
    }

    const updateCode = throttle((code: string) => {
        let update: any = {
            ...node,
            code: code
        }
        onChange(update)
    }, 500)

    const handleCodeUpdate = (code: string) => {

        updateCode(code)
    }


    const LiveComponentMemo = useMemo(() => {

        return <LiveComponent code={code} />
    }, [code])

    const nodeFactory = useMemo(() => {
        if (LiveComponentMemo) {
            return new NodeFactory({ component: LiveComponentMemo })
        }
    }, [LiveComponentMemo])

    console.log("WIDTH", node?.dimensions?.width)

    return (
        <NodeEditorContext.Provider
            value={{
                dimensions: {
                    width: node?.dimensions?.width || 50,
                    height: node?.dimensions?.height || 50 
                },
                setDimensions: updateDimensions,
                ports: (ports || []),
                setPorts: (ports) => {
                    let update: any = {
                        ...node,
                        ports: ports.map((x) => pick(x, stack_port_pick))
                    }
                    props.onChange?.(update)
                }
            }} >
            <Box
                focusIndicator={false}
                round="small"
                elevation='1'
                background="light-1"
                flex>

                <Box
                    focusIndicator={false}
                    direction="column"
                    flex
                    {...getRootProps()}
                    className={`${props.className} ${isDragActive ? 'dragging' : ''}`}>
                    <input {...getInputProps()} />


                    <Box
                        focusIndicator={false}
                        flex
                        direction="row"
                        className="content">
                        <Box
                            focusIndicator={false}
                            style={{ position: 'relative' }}
                            flex
                            className="node-view">
                            <InfiniteCanvas
                                nodes={[NODE_TEMPLATE as any]}
                                assets={{
                                    component: LiveComponentMemo
                                }}
                                factories={nodeFactory ? [nodeFactory] : []}>
                                <ZoomControls
                                    anchor={{
                                        horizontal: 'right',
                                        vertical: 'bottom'
                                    }} />
                            </InfiniteCanvas>
                            <div style={{ 
                                background: '#dfdfdf',
                                position: 'absolute', 
                                left: 6, 
                                bottom: 6, 
                                justifyContent: 'space-between', 
                                width: 170, 
                                height: 100,
                                borderRadius: 4,
                                padding: 4 
                            }}>
                                <Box 

                                    elevation="small"
                                    direction="row">
                                <Text color="dark-1">Dimensions</Text>

                                </Box>
                                <Box
                                    pad={{top: 'small'}}
                                    align="center"
                                    direction="row">
                                    <Text
                                        color="dark-1"
                                        style={{ width: 70 }}>Width: </Text>
                                    <input
                                        value={node?.dimensions?.width}
                                        onChange={(e) => {
                                            updateDimensions({height: 50, ...node?.dimensions, width: parseInt(e.target.value)})
                                        }}
                                        style={{ width: 100 }}
                                        type="number" />
                                </Box>
                                <Box
                                    align="center"
                                    direction="row">
                                    <Text
                                        color="dark-1"
                                        style={{ width: 70 }}>Height: </Text>
                                    <input
                                        onChange={(e) => {
                                            updateDimensions({width: 50, ...node?.dimensions, height: parseInt(e.target.value)})
                                        }}
                                        value={node?.dimensions?.height}
                                        style={{ width: 100 }}
                                        type="number" />
                                </Box>

                            </div>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </NodeEditorContext.Provider>
    )
}

export const NodeEditor = styled(BaseNodeEditor)`
    flex: 1;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;

    .content {
        width: calc(100%);
        display: flex;
    }
    &.dragging{
        opacity: 0.5;
    }

    .node-view{
        flex: 1;
    }

    .node-editor{
        flex: 0.4;

    }

    .node-view, .node-editor{
        
        display: flex;
    }

    .node-editor > section {
        flex: 1;
        position: relative;
    }

   
`

/*
            titleBar={(
                <div style={{
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding:8,
                }}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton
                            onClick={props.onBack}>
                            <ArrowBack />
                        </IconButton>
                        <Typography variant="h6">
                            New Name
                        </Typography>
                    </div>

                    <IconButton>
                        <Done />
                    </IconButton>
                </div>
            )}
*/