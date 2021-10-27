import Automerge from 'automerge';
import _ from 'lodash';
import { Model } from 'mongoose';

export abstract class DocSet {
  public docs : {[key: string]: Automerge.FreezeObject<any>} = {};
  private handlers : any[] = [];

  constructor(){
    
  }


  registerHandler (handler: any) {
    this.handlers.push(handler)
  }

  unregisterHandler (handler: any) {
    this.handlers = this.handlers.filter(h => h !== handler)
  }
  
  setDoc (docId: string, doc: Automerge.FreezeObject<any>) {
    this.docs[docId] = doc
    for (let handler of this.handlers) handler(docId, doc)
  }

  async getDoc (collection: string, docId: string) {
    let doc = this.docs[docId]
    if(!doc) {
        // let tmp_doc = await this.models[collection]?.findById(docId)
        console.log("Get doc by id", collection, docId, doc)

        doc = Automerge.from({
          // title: tmp_doc.title,
          // children: tmp_doc.children || [],
          // _id: tmp_doc.id
        })

        
        this.docs[docId] = doc;
    }
    return doc;
  }

}
export class OldDocSet {
    private docs : {[key: string]: Automerge.FreezeObject<any>};
    private handlers : any[];

    private models : {[key: string]: Model<any>} = {};

  constructor () {
    this.docs = {}
    this.handlers = []
  }

  setModels(models: {[key: string]: Model<any>}){
    this.models = models;
  }

  get docIds () {
    return Object.keys(this.docs)
  }

  async getDoc (collection: string, docId: string) {
    let doc = this.docs[docId]
    if(!doc) {
        // let tmp_doc = await this.models[collection]?.findById(docId)
        console.log("Get doc by id", collection, docId, doc)

        doc = Automerge.from({
          // title: tmp_doc.title,
          // children: tmp_doc.children || [],
          // _id: tmp_doc.id
        })

        
        this.docs[docId] = doc;
    }
    return doc;
  }

  removeDoc (docId: string) {
    delete this.docs[docId]
  }

  setDoc (docId: string, doc: Automerge.FreezeObject<any>) {
    this.docs[docId] = doc
    for (let handler of this.handlers) handler(docId, doc)
  }

  applyChanges (docId: string, changes: Automerge.BinaryChange[]) {
    let doc = this.docs[docId] || Automerge.init()
    doc = Automerge.applyChanges(doc, changes)
    this.setDoc(docId, doc)
    return doc
  }

  registerHandler (handler: any) {
    this.handlers.push(handler)
  }

  unregisterHandler (handler: any) {
    this.handlers = this.handlers.filter(h => h !== handler)
  }
}
