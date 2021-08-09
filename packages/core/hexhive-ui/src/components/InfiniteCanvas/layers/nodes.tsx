import React, { useContext, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { InfiniteCanvasNode } from '../types/canvas';
import { HMINode } from '../assets/hmi-spec';
import { getHostForElement } from '../utils';
import { InfiniteCanvasContext } from '../context/context';
import { NodeIdContext } from '../context/nodeid';
import { Box } from 'grommet';

export interface NodeLayerProps {
    className?: string;
    status?: {
        [key: string]: any;
    }
  
    onClick?: Function;
}

export const BaseNodeLayer : React.FC<NodeLayerProps> = ({
    status = {},
    onClick = () => {},
    className
}) => {
    const {
        selected,
        factories = {},
        moveNode,
        selectNode,
        zoom, 
        assets = {}, 
        offset, 
        nodes = [],
        nodeRefs,
        setNodeRefs,
        openContextMenu
    } = useContext(InfiniteCanvasContext)

   console.log(offset)
   /* const nodeModels = useMemo(() => {
        let models : any = {};
        nodes.forEach((x) => 
            models[x.id || ''] = factories[x.type].generateModel(x)
        )
        return models;
    }, [nodes])

    */

    const itemRefs = useRef<{[key: string]: HTMLDivElement | null}>({})

    const [ hoverEl, setHoverEl ] = useState<any>(null);

    const [ hoverNode, setHoverNode ] = useState<any>(null);

    const renderAssetBundle = (key: string, node: InfiniteCanvasNode) => {

        let value = node.value ? status[node.value] : status[key];

        let factory = factories?.[node.type];
        if(factory){
            return factory.generateWidget(node)
        }

    }

    const getDirection = (dir?: string) => {
        let deg = 0;
        switch(dir){
            case 'left-right':
                deg = 0;
                break;
            case 'right-left':
                deg = 180;
                return `scaleX(-1)`;
            case 'up-down':
                deg = 90;
                break;
            case 'down-up':
                deg = 270;
                return `rotate(270deg) scaleY(-1)`
            default :
                deg = 0;
        }
        return `rotate(${deg}deg)`
    }

    const nodeHover = (target: HTMLDivElement, node_key: any) => {
        if(nodes && nodes[node_key]){
            setHoverEl(target)
            let node = nodes[node_key]
            node.label = node_key;
            setHoverNode(node)
        }
    }
    
    const nodeHoverEnd = () => {
        setHoverEl(null)
        setHoverNode(null)
    }

    const nodeClick = (node?: any) => {
        if(onClick){
            onClick(node.asset, node.label)
        }
     //   console.log(node)
    }

    const mouseDown = (elem: string, evt: React.MouseEvent) => {
        let doc = getHostForElement(evt.target as HTMLElement)
        evt.stopPropagation()


        let offsetRect : any = {
            x: 0,
            y: 0
        }
        let rect = itemRefs.current[elem]?.getBoundingClientRect()
        if(rect){
            offsetRect = {
                x: rect.x - evt.clientX,
                y: rect.y - evt.clientY
            }
        }
        //start dragging

        const mouseMove = (evt: MouseEvent) => {
            evt.stopPropagation()

            moveNode?.(elem, {
                x: evt.clientX + offsetRect?.x, 
                y: evt.clientY + offsetRect?.y
            })
        }

        const mouseUp = (evt: MouseEvent) => {
            evt.stopPropagation()
            doc.removeEventListener('mousemove', mouseMove as EventListenerOrEventListenerObject)
            doc.removeEventListener('mouseup', mouseUp as EventListenerOrEventListenerObject)
        }

        doc.addEventListener('mousemove', mouseMove as EventListenerOrEventListenerObject)
        doc.addEventListener('mouseup', mouseUp as EventListenerOrEventListenerObject)
    }

    return (
        <div 
            className={className} 
            style={{
                pointerEvents: 'none',
                transform: `matrix(${zoom}, 0, 0, ${zoom}, ${offset.x}, ${offset.y})`
            }}>
           {/* <Popover
                style={{pointerEvents: 'none'}}
                disableRestoreFocus
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right'
                }}
                open={Boolean(hoverEl)}
                anchorEl={hoverEl}>
                <div className="info-popup">
                    <Typography variant="subtitle1">{hoverNode && hoverNode.label}</Typography>
                    <Typography variant="subtitle2">{hoverNode && status && (status[hoverNode.value] || status[hoverNode.label])}</Typography>
                </div>
            </Popover>*/}
            {nodes && nodes.map((node) => (
                <div 
                    onContextMenu={(e) => {
                        openContextMenu?.({x: e.clientX, y: e.clientY}, {type: 'node', id: node.id})
                    }}
                    ref={(element) => {
                        itemRefs.current[node.id] = element
                        setNodeRefs?.(itemRefs.current)
                    }}
                    className={`node-container ${(selected?.type == 'node' && selected.id == node.id )? 'selected': ''}`} 
                    onClick={(e) => {
                        selectNode?.(node.id)
                    }}
                    onMouseDown={(evt) => mouseDown(node.id, evt)}
                    onMouseEnter={(ev) => nodeHover(ev.currentTarget, node.id)}
                    onMouseLeave={() => nodeHoverEnd()}
                    style={{
                        pointerEvents: 'all',
                        left: node.x, 
                        top: node.y,
                        transform: getDirection(node.direction)
                    }}>
                    {selected?.type == 'node' && selected.id == node.id && node.menu && (
                        <Box 
                            onMouseDown={(e) => e.stopPropagation()}
                            flex
                            round="xsmall"
                            className="menu-dialog" 
                            style={{position: 'absolute', left: '100%', minWidth: 150, minHeight: 50}} background="light-1">
                            <Box
                                gap="xsmall"
                                pad="xsmall">
                                {node.menu}
                            </Box>
                        </Box>
                    )}
                    <NodeIdContext.Provider value={{
                        nodeId: node.id,
                        position: {
                            x: node.x,
                            y: node.y
                        },
                        dimensions: {
                            width: node.width || 0,
                            height: node.height || 0
                        }
                    }}>
                    {renderAssetBundle(node.id, node)}
                    </NodeIdContext.Provider>
                </div>
            ))}
        </div>
    )
}

export const NodeLayer = styled(BaseNodeLayer)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform-origin: 0 0;


    .info-popup{
        display: flex;
        flex-direction: column;
        padding: 8px;
    }

    .menu-dialog{
        margin-left: 10px;
    }

    .menu-dialog:before{
        content: "";
        position: absolute;
        top: 50%;
        left: -10px;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-right: 10px solid white;
        border-bottom: 5px solid transparent;
    }

    .node-container{
        position: absolute;
        cursor: pointer;
    }

   

    .started path, .started circle{
        stroke: green;
    }
    .open path, .open circle{
        stroke: green;
    }

    .closing path, .closing circle, .opening path, .opening circle{
        stroke: brown;
    }

    .starting path, .starting circle, .stopping path .stopping circle{
        stroke: brown;
    }

    .closed path, .closed circle{
        stroke: red;
    }

    .stopped path, .stopped circle{
        stroke: red;
    }
`