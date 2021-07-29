import { Document } from 'mongoose';

export interface IDevice extends Document{
    name: string;
    connected?: boolean;
    network_name: string;
    did: string;
    program?: string;
    location: string;
    lastSeen: Date;
}