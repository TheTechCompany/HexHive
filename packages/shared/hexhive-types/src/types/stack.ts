import { Document } from 'mongoose';

export interface IStackPort extends Document{
    name?: string;
    type?: string;
    x?: number;
    y?: number;
}

export interface IStackItem extends Document{
    name?: string;
    code?: string;
    ports?: IStackPort[]
}

export interface IStack extends Document{
    name?: string;
    items?: IStackItem[];
}