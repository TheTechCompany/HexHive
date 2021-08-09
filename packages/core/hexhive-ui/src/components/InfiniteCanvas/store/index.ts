import React from 'react';
import { v4 } from 'uuid';
import { InfiniteCanvasNode, InfiniteCanvasPath } from '../types/canvas';
import * as actions from './actions'

export interface StoreState {
    nodes: Array<InfiniteCanvasNode & {ports?: {[key: string]: any}}>
    paths: Array<InfiniteCanvasPath>
}

let n : Array<InfiniteCanvasNode & {ports?: {[key: string]: any}}>;
let p : InfiniteCanvasPath[];
let nIx : number;
let pIx : number;
export function reducer(state : StoreState = {nodes: [], paths: []}, action : {type?: string, data: any}){
    switch(action.type){
        case actions.ADD_NODE:
            n = state.nodes?.slice()
            n?.push(action.data.node)
            return {
                ...state,
                nodes: n
            }
            break;
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
            
            //TODO add port reporting for controller nodes
            let ports : any = n[nIx]?.ports || []

            console.log(n)

            let port_ix = ports.map((x: any) => x.name).indexOf(action.data.handleId)
            console.log("REPORT PORT", port_ix, action.data, ports)
            if(port_ix > -1){
                ports[port_ix] = {
                    ...ports[port_ix],
                    position: {
                        x: action.data.position.x - n[nIx].x,
                        y: action.data.position.y - n[nIx].y 
                    },
                    bounds: {
                        ...action.data.position
                    }
                }
                n[nIx].ports = ports
            }

            console.log(n, nIx, n[nIx])
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
        default:
            return state;
    }
}