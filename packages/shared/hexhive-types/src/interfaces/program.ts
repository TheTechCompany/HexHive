import { Document } from 'mongoose';

export interface IProcessNode {
    x?: number;
    y?: number;
    id: string;
    label?: string;
    ports?: any[]
    extras?: any;
    selected?: boolean;
    locked?: boolean;
    type?: string;
}

export interface IProcessLink {
    extras?: any;
    id?: string;
    sourcePort?: string;
    source: string;
    targetPort?: string;
    target: string;
    width?: number;
    type?: string;
    locked?: boolean;
    selected?: boolean;
    points?: {
        id: string;
        type: "point";
        x: number;
        y: number;
    }[]
    label?: string;
}

export interface ITransitionCondition {
    input: string;
    comparator: string;
    value: string;
}

export interface IProcessAction {
    device: string;
    operation: string;
}

export interface IProgramProcess {
    _id?: string;
    id: string;
    name: string;
    nodes?: {
        [key : string]: IProcessNode;
    }
    links?: {
        [key: string]: IProcessLink
    }
    sub_processes?: IProgramProcess[]
}

export interface IProgramIO{
    _id?: string;
    name: string;
    type: string;
    pins?: Array<{
        type: 'input' | 'output';
        platform: string;
        pin: number;
        bus: number;
    }>
}

export interface IOProgramPlatform {
    type: string;
    busIndex: number;
    pinCount: number;
}

export interface IProgramHMI {
    
}

export interface IProgram extends Document {
    name: string,
    hmi: any,
    program: any,
    plugins?: any[],

    processes: IProgramProcess[];
    io: IProgramIO[]
}
