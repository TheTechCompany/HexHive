import React from 'react';
import { Box, Button, TextInput } from 'grommet';
import { InfiniteCanvas,AbstractWidgetFactory, InfiniteCanvasNode, InfiniteCanvasPath, InfiniteCanvasPosition } from '@hexhive/ui'
import { ZoomControls } from '../zoom-controls'
import { v4 } from 'uuid';
import * as Icons from 'grommet-icons'
import _ from 'lodash';
import { useRef } from 'react';
import { useEffect } from 'react';
import { BaseStyle } from '@hexhive/styles';

export interface FlowEditorProps {
    editable?: boolean;
    snapToGrid?: boolean;

    factories: AbstractWidgetFactory[];
    blocks?: any[]

    program?: {
        nodes: InfiniteCanvasNode[]
        paths: InfiniteCanvasPath[]
    }

    assets?: {
        [key: string]: JSX.Element;
    }

    menu?: {
        label?: string;
        icon?: any;
        pane: any;
    }[]
    
    contextMenu?: {
        icon?: any;
        label?: any;
        onClick?: any;
    }[];

    onChange?: (program: {nodes: InfiniteCanvasNode[], paths: InfiniteCanvasPath[]}) => void;

    onNodeAdd?: (node: InfiniteCanvasNode) => void;
    onNodeUpdate?: (node: InfiniteCanvasNode) => void;

    onPathAdd?: (path: InfiniteCanvasPath) => void;
    onPathUpdate?: (path: InfiniteCanvasPath) => void;

}

export const FlowEditor : React.FC<FlowEditorProps> = ({
    editable = true,
    snapToGrid = true,
    factories = [],
    program = {
        nodes: [],
        paths: []
    },
    onChange,
    assets = {},
    menu = [],
    blocks = [],
    contextMenu,
    onNodeAdd,
    onNodeUpdate,
    onPathAdd,
    onPathUpdate,
    children
}) => {

    const updateRef = useRef<{add: any, update: any}>({update: onPathUpdate, add: onPathAdd})

    useEffect(() => {
        updateRef.current = {add: onPathAdd, update: onPathUpdate}
    }, [onPathUpdate, onPathAdd])

    const onDrop = (position: InfiniteCanvasPosition, data: any) => {

        console.log("DROPPED", data)
        let node = {
            id: v4(),
            type: data.type,
            extras: {
                ...data.extras
            },
            x: position.x,
            y: position.y,
        }

        onNodeAdd?.(node)

       // onChange?.({nodes: [...program.nodes || [], node], paths: program.paths})
    }

    console.log("FLOW", program.paths, program.nodes)

    return (
       
            <InfiniteCanvas
                style={{background: BaseStyle.global.colors['neutral-4'], lineColor: BaseStyle.global.colors['neutral-1'] + '20' }}
                contextMenu={contextMenu}
                grid={{width: 100, height: 100, divisions: 10}}
                nodes={(program.nodes||[]).map((x) => ({
                    ...x
                }))}
                paths={program.paths.map((x) => ({...x}))}

                
                onNodeUpdate={onNodeUpdate}
                onNodesChanged={(nodes) => {
                    if(!_.isEqual(nodes.slice(), program.nodes.slice())){
                        console.log("Called from nodes")

                       // onChange?.({nodes: nodes, paths: program.paths})
                    }
                }}
                onPathCreate={updateRef.current.add}
                onPathUpdate={updateRef.current.update}
                onPathsChanged={(paths) => {
                    if(!_.isEqual(paths, program.paths)){
                        console.log("Called from path")
                        onChange?.({nodes: program.nodes, paths: paths})
                    }
                }}
                onDrop={onDrop}
                assets={assets}
                editable={editable}    
                factories={factories}>
               
                <ZoomControls  />
                {children}
            </InfiniteCanvas>
    )
}

/*
 <DrawerPane
            menu={[
                {
                    icon: <Icons.Memory />,
                    pane: (
                        <Box 
                            
                            flex
                            pad="small"
                            background="accent-1">
                            <div>Blocks</div>
                            <BlockTray
                                renderItem={(block, ix) => <div>{block.content || block.label}</div>}
                                blocks={blocks} />
                        </Box>
                    )
                },
                ...menu
            ]}>*/

/*Object.keys(loadedPlugins).map((type) => ({
                                blockType: 'element-node',
                                extras: {
                                    asset: type,
                                    ports: loadedPlugins[type].ports
                                },
                                content: loadedPlugins[type].component,
                                label: type
                            }))*/