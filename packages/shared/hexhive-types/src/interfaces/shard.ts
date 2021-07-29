export interface FlowShardNodes {
    _id?: string;
    id?: string;
    type?: string;
    extras?: any;
    ports?: any;
    x?: number;
    y?: number;
}  

export interface FlowShardPaths{
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


export interface FlowShard {
    name?: string;
  parent?: string;
  program?: string;
  nodes?: FlowShardNodes[];
  paths?: FlowShardPaths[];
  items?: string[];
  _id: string;
}