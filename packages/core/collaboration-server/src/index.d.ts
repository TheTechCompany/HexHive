import WebSocket from 'ws';
import { Model } from 'mongoose';
export declare type AutomergeSocket = {
    socket: WebSocket;
    id?: string;
};
export default class AutomergeServer {
    private docSet;
    private clients;
    private mongooseModels;
    constructor();
    loadMongoose(models: Model<any>[]): void;
    broadcast(action: string, data: any, ignore?: string[] | string): void;
    docChanged(ws: AutomergeSocket, msg: {
        action: string;
        data: any;
    }): Promise<void>;
    initMerge(ws: AutomergeSocket, msg: {
        action: string;
        data: any;
    }): Promise<void>;
    receiveMessage(ws: AutomergeSocket, msg: {
        action: string;
        data: any;
    }): Promise<void>;
    handleWebsocket(ws: WebSocket): void;
}
