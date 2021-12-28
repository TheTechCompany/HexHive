import React, {useContext} from 'react';
import { InfiniteCanvasNode, InfiniteCanvasPath, InfiniteCanvasPosition } from '../types/canvas';
import { HMIPosition } from '../assets/hmi-spec';
import { AbstractWidgetFactory } from '../models/abstract-widget-factory';

export interface IInfiniteCanvasContext {
    style?: {
        lineColor: string;
        background: string;
    }; 
    snapToGrid?: boolean;
    grid?: {width: number, height: number, divisions: number};

    editable?: boolean;
    nodes?: InfiniteCanvasNode[]

    paths?: InfiniteCanvasPath[]

    assets?: {
        [key: string]: JSX.Element
    }

    factories?: {
        [type: string]: AbstractWidgetFactory
    }

    isPortDragging?: boolean

    offset: HMIPosition,
    zoom: number
    darkMode?: boolean;

    nodeRefs?: {[key: string]: any}

    ports?: {[key: string]: any}

    setPorts?: (ports: {[key: string]: any}) => void;
    setNodeRefs?: (nodeRefs: {[key: string]: any}) => void;
    dragPort?: (e: React.MouseEvent, handleId?: string, nodeId?: string) => void;
    reportPosition?: (opts: {nodeId: string, handleId: string, position: {x: number, y: number, width: number, height: number}}) => void;

    linkPath?: (path_id: string, nodeId: string, handleId: string) => void;
    addPathPoint?: (path_id: string, ix: number, point: InfiniteCanvasPosition) => void;
    updatePathPoint?: (path_id: string, ix: number, point: InfiniteCanvasPosition) => void;


    openContextMenu?: (pos: {x: number, y: number}, payload: {type: "node" | "path", id: string}) => void;

    selectNode?: (node: string) => void;
    selectPath?: (path: string) => void;

    selected?: {key?: "node" | "path", id?: string}[]

    moveNode?: (node: string, position: InfiniteCanvasPosition) => void;
    changeZoom?: (zoom: number) => void;
    getRelativeCanvasPos?: (pos: {x: number, y: number}) => {x: number, y: number};
    io_status?: {
        [key: string]: string
    } 
    plant_status?: {
        [key: string]: string
    }

    information?: any;
    onRightClick?: (item: any, pos: InfiniteCanvasPosition) => void;
}

export const InfiniteCanvasContext = React.createContext<IInfiniteCanvasContext>({
    offset: {
        x: 0,
        y: 0
    },
    darkMode: true,
    zoom: 1,
    io_status: {},
    plant_status: {}
})

export const useCanvasControls = () => {
    const { changeZoom } = useContext(InfiniteCanvasContext)

    return changeZoom
}