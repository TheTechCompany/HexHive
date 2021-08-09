import { throttle } from "lodash"
import { Ref, RefObject } from "react"
import { getHostForElement } from "."
import { InfiniteCanvasNode, InfiniteCanvasPath, InfiniteCanvasPosition } from "../types/canvas"

export const addNode = (nodes: any[], node: any) => {
    let n = nodes?.slice()
    n?.push(node)
    return n
}

export const moveNode = (node: InfiniteCanvasNode, pos: {x: number, y: number}) => {

    return {
        ...node,
        ...pos   
    };
}

/*
const updateOffset = throttle((x: number, y: number) => {
    let _offset = {
        x: offset.x - (lastPos.x - x),
        y: offset.y - (lastPos.y - y)
    }
    setOffset(_offset)
    props.onViewportChanged?.({offset: _offset, zoom})

}, 100)*/

export const getRelativePos = (ref: RefObject<HTMLElement>, position: {x: number, y: number}) => {
    let box = ref?.current?.getBoundingClientRect()
    return {
        x: position.x - (box ? box.x : 0),
        y: position.y - (box ? box.y : 0) 
    }
}

export const getRelativeCanvasPos = (
    ref: RefObject<HTMLElement>, 
    viewport: {
        offset: {x: number, y: number},
        zoom: number
    },
    position: {x: number, y: number}
) => {
    if(ref.current){
        let pos = getRelativePos(ref, position)

        let scale = 100 / viewport.zoom

        return {
            x: (pos.x - viewport.offset.x) / scale,
            y: (pos.y - viewport.offset.y) / scale 
        }
    }else{
        return {
            x: 0,
            y: 0
        }
    }
}

//    let relative_point = getRelativeCanvasPos(canvasRef, {offset: _offset, zoom: _zoom}, point)
//    onPathsChanged?.(p)


export const addPathSegment = (path : InfiniteCanvasPath, segment_ix: number, point: InfiniteCanvasPosition) => {

    if(!path.target || segment_ix == 0){
       path.points = [point, ...path.points]
    }else{
        path.points.splice(segment_ix, 0, point)
    }
    
    return path;

}

export const updatePathSegment = (path: InfiniteCanvasPath, ix: number, point: InfiniteCanvasPosition) => {
    let p = Object.assign({}, path)

    let points = p.points.slice();

   console.log(path, ix, point)
    points[ix] = point;

    p.points = points;
    console.log(p.points)
    return p
}

export const linkPath = (path: InfiniteCanvasPath, nodeId: string, handleId: string) => {
    
        path.points.splice(path.points.length -1, 1) //TODO make safe for relinking
        path.target = nodeId;
        path.targetHandle = handleId;
    

    return path;
}


export const lockToGrid = (point: InfiniteCanvasPosition, snapToGrid: boolean, grid: {width: number, height: number, divisions: number}) => {
    if(snapToGrid){
        let widthMultiplier = (grid?.width || 0) / (grid.divisions || 10)
        let heightMultiplier = (grid?.height || 0) / (grid.divisions || 10)

        point.x = Math.floor(point.x / widthMultiplier) * widthMultiplier
        point.y = Math.floor(point.y / heightMultiplier) * heightMultiplier
    }

    return point;
}

export const onDrag = (
    evt: React.MouseEvent, 
    drag_event?: (
        event?: MouseEvent,
        position?: {
         x: number, 
         y: number
        }, 
        lastPos?: {
            x: number, 
            y: number
        },
        finished?:boolean
    ) => void) => {

    let lastPos = {
        x: evt.clientX,
        y: evt.clientY
    }

    evt.stopPropagation()

    let doc = getHostForElement(evt.target as HTMLElement)

    lastPos = {
        x: evt.clientX,
        y: evt.clientY
    }

    const onMouseMove = throttle((move_evt: MouseEvent) => {
        drag_event?.(
            move_evt,
            {x: move_evt.clientX, y: move_evt.clientY},
            Object.assign({}, lastPos),
            false
        )
        lastPos = {
            x: move_evt.clientX,
            y: move_evt.clientY
        }
    }, 100) as Function;

    const onMouseUp = (up_evt: MouseEvent) => {
        drag_event?.(
            up_evt,
            undefined,
            undefined,
            true
        )
        doc.removeEventListener('mousemove', onMouseMove as EventListenerOrEventListenerObject)
        doc.removeEventListener('mouseup', onMouseUp as EventListenerOrEventListenerObject)

    }
    doc.addEventListener('mousemove', onMouseMove as EventListenerOrEventListenerObject)
    doc.addEventListener('mouseup', onMouseUp as EventListenerOrEventListenerObject)
}


/*
case actions.MOVE_NODE:
    n = state.nodes.slice()
    p = state.paths.slice()

    nIx = n.map((x) => x.id).indexOf(action.data.id)
    if(nIx > -1){
        n[nIx] = {
            ...n[nIx],
            ...action.data.d
        }

        //move paths attached
        let paths = state.paths.filter((a) => a.source == action.data.id || a.target == action.data.id)
        paths.forEach((path) => {
            let ix = p.map((x) => x.id).indexOf(path.id)
            if(p[ix].source == action.data.id){
                p[ix].points[0] = {
                    x: n[nIx].x + n[nIx]?.ports?.[p[ix].sourceHandle || ''].position.x,
                    y: n[nIx].y + n[nIx]?.ports?.[p[ix].sourceHandle || ''].position.y
                }
            }else{
                p[ix].points[p[ix].points.length - 1] = {
                    x: n[nIx].x + n[nIx]?.ports?.[p[ix].targetHandle || ''].position.x,
                    y: n[nIx].y + n[nIx]?.ports?.[p[ix].targetHandle || ''].position.y
                }
                //p[ix].points[p[ix].points.length - 1] = 
            }
        })
        return {
            ...state,
            nodes: n,
            paths: p
        }
    }
    return state;
    
case actions.REPORT_PORT_POSITION:
    n = state.nodes.slice() //find((a) => a.id == action.data.nodeId)
    nIx = state.nodes.map((x) => x.id).indexOf(action.data.nodeId)
    let ports : any = n[nIx]?.ports || {}

    ports[action.data.handleId] = {
        ...ports[action.data.id],
        position: {
            x: action.data.position.x - n[nIx].x,
            y: action.data.position.y - n[nIx].y 
        },
        bounds: {
            ...action.data.position
        }
    }
    n[nIx].ports = ports
    return {
        ...state,
        nodes: n
    }
case actions.SET_NODES:
    return {
        ...state,
        nodes: action.data.nodes
    }
case actions.SET_PATHS:
    return {
        ...state,
        paths: action.data.paths
    }
case actions.UPDATE_PATH:
    p = state.paths.slice()
    pIx = p.map((a) => a.id).indexOf(action.data.id) //p.find((a) => a.id == action.data.id)
    if(pIx > -1){
        p[pIx] = {
            ...p[pIx],
            ...action.data.d
        }
    }
    return {
        ...state,
        paths: p
    }
case actions.ADD_PATH:
    let id = action.data.path.id || v4()
    action.data.path.id = id;
    return {
        ...state,
        paths: state.paths.concat([action.data.path])
    }
case actions.LINK_PATH:
    p = state.paths.slice();
    pIx = p.map((x) => x.id).indexOf(action.data.path)

    p[pIx].target = action.data.node;
    p[pIx].targetHandle = action.data.handle;

    return {
        ...state,
        paths: p
    }
case actions.ADD_PATH_POINT:
    p = state.paths.slice()
    pIx = p.map((x) => x.id).indexOf(action.data.id)

    if(!p[pIx].target || action.data.segment_ix == 0){
        p[pIx].points.splice(1, 0, action.data.point)
    }else{
        p[pIx].points.splice(action.data.segment_ix + 1, 0, action.data.point)
    }
    return {
        ...state,
        paths: p
    }
case actions.UPDATE_PATH_POINT:
    p = state.paths.slice();
    pIx = p.map((x) => x.id).indexOf(action.data.id)
    p[pIx].points[action.data.ix] = action.data.point;
    return {
        ...state,
        paths: p
    }
*/