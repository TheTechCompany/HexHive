import { IOInput, IOOutput } from "./io";

export interface Stack {
    name?: string;
    items?: StackItems[]
    program?: string;
    location?: string;
    _id: string;
  }
  
  export interface StackItems {
    name?: string;
    key?: string;
    type?: "ui" | "block"
    dimensions?: {
      width?: number;
      height?: number;
    }

    actions?: string;
    ui?: string;
    ports?: StackItemsPorts[]

    inputs:IOInput[],
    outputs: IOOutput[]

    _id?: string;
  }
  
  export interface StackItemsPorts {
    name?: string;
    x?: number;
    y?: number;
    rotation?: number;
    type?: string;
    _id?: string;
  }
  