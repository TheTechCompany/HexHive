import React, { useContext, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components'
import { bfs_search, createLine, getHostForElement } from '../utils';
import { HMILink } from '../assets/hmi-spec';
import { InfiniteCanvasContext } from '../context/context';
import { InfiniteCanvasPath, InfiniteCanvasPosition } from '../types/canvas';
import { FlowPath } from '../defaults/path';
import { Box } from 'grommet';

export interface PathLayerProps {
}


export const PathLayer : React.FC<PathLayerProps> = (props) => {
    const context = useContext(InfiniteCanvasContext)

    const zoom = context.zoom;
    const offset = context.offset
    
    const [ paths, setPaths ] = useState<InfiniteCanvasPath[]>([])
    


    useEffect(() => {
        if(context.paths && context.nodes && context.ports){

            console.log(context.ports)
            
            let p = context.paths.map((x) => {
                let points = x.points || [];
            
                if(x.sourceHandle){
                    let node = context.nodes?.find((a) => a.id == x.source)
                    let port = context?.ports?.[`${x.source}:${x.sourceHandle}`]

                    if(port && node){

                        
                        let point = {
                            x: (node?.x || 0) + (port?.relativeX || 0) + ((port.width || 0) / 2),
                            y: (node?.y || 0) + (port?.relativeY || 0) + ((port.height || 0) /2)
                        }
                        points = [point, ...(points || [])]
                    }
                 }

                if(x.targetHandle){
                    let node = context.nodes?.find((a) => a.id == x.target)
                    let port = context?.ports?.[`${x.target}:${x.targetHandle}`]

                    if(port && node){
                        let point = {
                            x: (node?.x || 0)+ (port?.relativeX || 0) + ((port.width || 0) / 2),
                            y: (node?.y || 0) +(port?.relativeY || 0)+ ((port.height || 0) /2)
                        }
                        points = [...(points || []), point]
                    }
                }
                return {
                    ...x,
                    points: points,
                    id: x.id,
                    
                }
            })

            setPaths(p)
        }
    }, [context.paths, context.nodes, context.ports])


    const runs = [
        {
            source: "TK101",
            target: "TK201",
            producer: "SC101"
        },
        {
            source: "TK201",
            target: "TK301",
            producer: "SC201"
        },
        {
            source: "TK301",
            target: "Clean Water",
            producer: "SC301"
        },
        {
            source: "BLO701",
            target: "TK201",
            producer: "BLO701"
        },
        {
            source: "TK301",
            target: "TK301",
            producer: "SC301"
        },
        {
            source: "TK301",
            target: "Drain",
            producer: "SC301"
        },
        {
            source: "TK601",
            target: "SC301",
            producer: "PMD601"
        },
        {
            source: "TK501",
            target: "TK201",
            producer: "PMD501"
        }
    ]

    const pipe_runs = useMemo(() => {
        let runner : {producer: string, source: string, target: string, points: {id: string, node: string}[]}[] = [];
        runs.forEach((run) => {
            let r = bfs_search(paths, run.source, run.target)
            if(r.length > 0){
                runner.push({
                    producer: run.producer,
                    source: r[0].node,
                    target: r[r.length - 1].node,
                    points: r, //r.map((x) => x.id),
                })
            }
            
        })
        return runner.filter((a) => a)
    }, [])

    const getStatus = (id: string) => {
        //Check pipe run's producer is active
        //Check flow up to id

        let run_paths = pipe_runs.map((run) => {
           return {
                ids: run.points.map((x) => x.id).filter((a) => a), //r.map((x) => x.id),
                points: run.points,
                active: context.io_status?.[run.producer] === "start"
            }
        })

        const run = run_paths.find((a) => a.ids.indexOf(id) > -1);

        if(run){
            let node_ix = run.ids.indexOf(id);
            if(run.ids.length > node_ix){
                node_ix += 1;
            }
            const producer_active = run.active

            const run_nodes = run.points.slice(0, node_ix);

            const run_active = run_nodes.map((x) => context.io_status?.[x.node] !== 'close').indexOf(false) < 0;

            return producer_active && run_active;
        }
    }

    const addPoint = (path_id: string, ix: number, e: React.MouseEvent, pos: InfiniteCanvasPosition) => {
        context.addPathPoint?.(path_id, ix, pos)
        e.stopPropagation()

        console.log(e)

        let doc = getHostForElement(e.target as HTMLElement)

        const mouseMove = (e: MouseEvent) => {
            updatePoint(path_id, ix + 1, {
                x: e.clientX,
                y: e.clientY
            })
        }

        const mouseUp = (e: MouseEvent) => {    
            doc.removeEventListener('mousemove', mouseMove as EventListenerOrEventListenerObject)
            doc.removeEventListener('mouseup', mouseUp as EventListenerOrEventListenerObject)
        }

        doc.addEventListener('mousemove', mouseMove as EventListenerOrEventListenerObject)
        doc.addEventListener('mouseup', mouseUp as EventListenerOrEventListenerObject)
    }

    const updatePoint = (path_id: string, ix: number, pos: InfiniteCanvasPosition) => {
        context.updatePathPoint?.(path_id, ix - 1, pos)
    }

    const linkPath = (path_id: string, nodeId: string, handleId: string) => {
        context.linkPath?.(path_id, nodeId, handleId)
    }

    const onSelect = (path_id: string) => {
        context.selectPath?.(path_id)
    }

    return (
        <svg
            style={{
                width: '100%',
                height: '100%',
                overflow: 'visible',
                pointerEvents: 'all',
                transformOrigin: '0 0',
                transform: `matrix(${zoom}, 0, 0, ${zoom}, ${offset.x}, ${offset.y})`,
                position: 'absolute'
            }}>
                {paths.map((path) => 
                (
                    <>
                    {context.selected?.type == 'path' && context.selected.id == path.id && path.menu && (
                        <Box 
                            onMouseDown={(e) => e.stopPropagation()}
                            flex
                            round="xsmall"
                            className="menu-dialog" 
                            style={{position: 'absolute', left: '100%', minHeight: 50}} background="light-1">
                            <Box
                                gap="xsmall"
                                pad="xsmall">
                                {path.menu}
                            </Box>
                        </Box>
                    )}
                          <FlowPath
                            onContextMenu={(e) => context.openContextMenu?.({x: e.clientX, y: e.clientY}, {type: "path", id: path.id})}
                            selected={context.selected?.type == 'path' && context.selected.id == path.id}
                            path={path}
                            editable={context.editable}
                            onLinked={(nodeId, handleId) => linkPath(path.id, nodeId, handleId)}
                            onPointsChanged={(ix, point) => updatePoint(path.id, ix, point)}
                            onMouseDown={(ix, e, position) => (e.metaKey || e.ctrlKey) ? addPoint(path.id, ix, e, position) : onSelect(path.id)}
                            points={(path.points || [])} />
                    </>
                )
                )}
        </svg>
    )
}

//                            className={getStatus(path.id) ? "active" : 'inactive'} 
