import { ActionNodeFactory, BlockTray, IconNodeFactory, InfiniteCanvas, StartNodeFactory } from '@hexhive/ui';
import { Box, List } from 'grommet';
import _ from 'lodash';
import { nanoid } from 'nanoid';
import React, { useRef, useState } from 'react';

export interface WorkflowsProps {

}

export const Workflows : React.FC<WorkflowsProps> = (props) => {
    const paths = useRef<{p?: any[]}>({p: []})

    const [ nodes, setNodes ] = useState<any[]>([])
    const [ _paths, _setPaths ] = useState<any[]>([])

    const setPaths = (new_paths: any[]) => {
        paths.current.p = new_paths;
        _setPaths(new_paths)
    }
    const updateRef = useRef<{addPath?: (path: any) => void, updatePath?: (path: any) => void}>({
        updatePath: (path) => {
            let p = paths.current.p.slice()
            let ix = p.map((x) => x.id).indexOf(path.id)
            p[ix] = path;
            setPaths(p)
        },
        addPath: (path) => {
            let p = paths.current.p.slice()
            p.push(path)
            setPaths(p)
        }
    })

    const items = [{blockType: 'action-node', label: "STP->GLTF", extras: {title: 'STP->GLB'}},{blockType: 'action-node', label: "GLTF->GLTF+fix", extras: {title: 'GLTF->GLTF Fix'}}, {blockType: 'action-node', label: "GLTF->GLTFPack", extras: {title: 'GLTFPack'}}]
    return (
        <Box flex direction="row">
    
            <InfiniteCanvas 
                editable={true}
                nodes={nodes}
                paths={paths.current.p}
                factories={[new ActionNodeFactory(), new IconNodeFactory(), new StartNodeFactory()]}
                onDrop={(position, data) => {
                    let node = {
                        id: nanoid(),
                        type: data.type,
                        extras: {
                            ...data.extras
                        },
                        x: position.x,
                        y: position.y,
                    }

                    setNodes([...nodes, node])
            
                }}
                onNodeUpdate={(node) => {
                    console.log(node, nodes)
                     let ix = nodes.map((x) => x.id).indexOf(node.id)
                     let n = nodes.slice()
                     n[ix] = node;
                    setNodes(n)
                }}
                onPathCreate={(path) => {
                    console.log("PATH CREATE", path, paths)
                    updateRef.current.addPath(path)
                    // setPaths([...paths, path])
                }}
                onPathUpdate={(path) => {
                    console.log("Path Update", path, paths)

                    updateRef.current.updatePath(path)
                    // let p = paths.slice()
                    // let ix = p.map((x) => x.id).indexOf(path.id)
                    // p[ix] = path;
                    // setPaths(p)
                }}
                onPathsChanged={(paths) => {
                    console.log("Path Change", paths)
                }}
                onNodesChanged={(nodes) => console.log(nodes)}
                >
               

            <Box
                style={{zIndex:99}}
                onMouseDown={(e) => {
                    console.log("Box click")
                    e.stopPropagation()
                }}
             elevation="small" background="neutral-1" width="small">
               
                    <BlockTray 
                        renderItem={(block : any) => (
                        <Box    
                            justify={block.dimensions ? "center" : 'start'}
                            align="center"
                            direction="row">
                            {block.icon}
                            <Box 
                                style={block.dimensions || {marginLeft: 8}}>{block.content || block.label}</Box>
                        </Box>)}
                        blocks={items as any} />
               </Box>
            </InfiniteCanvas>
        </Box>
    )
}