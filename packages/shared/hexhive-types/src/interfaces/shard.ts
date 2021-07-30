export interface IFlowShardNodes {
    _id?: string;
    id?: string;
    type?: string;
    extras?: any;
    ports?: any;
    x?: number;
    y?: number;
}  

export interface IFlowShardPaths{
    id?: string;
    type?: string;
    source?: string;
    sourceHandle?: string;
    target?: string;
    targetHandle?: string;
    points?: {
        _id: string;
        x: number;
        y: number
    }[]
    _id?: string;
}


export interface IFlowShard {
    name?: string;
  parent?: string;
  program?: string;
  nodes?: IFlowShardNodes[];
  paths?: IFlowShardPaths[];
  items?: string[];
  _id: string;
}