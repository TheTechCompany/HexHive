import { IOInput, IOOutput } from "./io";

export interface IStack {
    name?: string;
    items?: IStackItems[]
    program?: string;
    location?: string;
    _id: string;
  }
  
  export interface IStackItems {
    name?: string;
    key?: string;
    type?: "ui" | "block"
    dimensions?: {
      width?: number;
      height?: number;
    }

    actions?: string;
    ui?: string;
    ports?: IStackItemsPorts[]

    inputs:IOInput[],
    outputs: IOOutput[]

    _id?: string;
  }
  
  export interface IStackItemsPorts {
    name?: string;
    x?: number;
    y?: number;
    rotation?: number;
    type?: string;
    _id?: string;
  }
  