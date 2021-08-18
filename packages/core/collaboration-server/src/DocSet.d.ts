import Automerge from 'automerge';
import { Model } from 'mongoose';
export declare class DocSet {
    private docs;
    private handlers;
    private models;
    constructor();
    setModels(models: {
        [key: string]: Model<any>;
    }): void;
    get docIds(): string[];
    getDoc(collection: string, docId: string): Promise<Automerge.FreezeObject<any>>;
    removeDoc(docId: string): void;
    setDoc(docId: string, doc: Automerge.FreezeObject<any>): void;
    applyChanges(docId: string, changes: Automerge.BinaryChange[]): Automerge.FreezeObject<any>;
    registerHandler(handler: any): void;
    unregisterHandler(handler: any): void;
}
