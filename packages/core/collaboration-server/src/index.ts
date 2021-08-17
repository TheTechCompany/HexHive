import Automerge from 'automerge'
import { DocSet } from './DocSet'
import WebSocket, { Server} from 'ws';
import { nanoid } from 'nanoid';
import { Model, models } from 'mongoose';

export type AutomergeSocket = {
    socket: WebSocket,
    id?: string
}

export default class AutomergeServer {

    private docSet : DocSet;

    private clients: Array<AutomergeSocket>;

    private mongooseModels : {[key: string]: Model<any>} = {};

    constructor(){
        this.receiveMessage = this.receiveMessage.bind(this)
        // this.subscribeDoc = this.subscribeDoc.bind(this);

        this.docSet = new DocSet();

        this.clients = [];
        
    }

    loadMongoose(models: Model<any>[]){
        models.forEach((model) => {
           let name =  model.modelName;

           let fields = Object.keys(model.schema.paths)

           this.mongooseModels[name] = model;
        })

        this.docSet.setModels(this.mongooseModels)
        console.log(this.mongooseModels)
    }

    broadcast(action: string, data: any, ignore?: string[] | string){
        let clients = this.clients.slice();
        if(ignore){

            clients = clients.filter((a) => a.id && ignore.indexOf(a.id) < 0);

            console.log(`Broadcast called by ${ignore} ${clients.map((x) => x.id).join(',')}`)
        }
        clients.forEach((client) => {
            client.socket.send(JSON.stringify({action: action, data}))
        })
    }



    async docChanged(ws: AutomergeSocket, msg: {action: string, data: any}){
        let doc = await this.docSet.getDoc(msg.data.collection, msg.data.id)

        console.log("Doc change", ws.id, msg)

        if(msg.data && msg.data.changes && msg.data.changes.length > 0){

            let changes = msg.data.changes.map((x: any) => Object.keys(x).map((y) => x[y]))
            let binaryChanges = changes.map((x: any) => Uint8Array.from(x))
          
            const [ object, patch ] = Automerge.applyChanges(doc, binaryChanges as any)

            this.docSet.setDoc(msg.data.id, object)
            console.log("Doc changed by ", ws.id)
            console.log("Doc value", object)

            if(ws.id)  this.broadcast('automerge', {changes: msg.data.changes, id: msg.data.id}, [ws.id])

        }
    }

    // subscribeDoc(ws: AutomergeSocket, msg: {action: string, data: any}){
    //     console.log("Subscribe Doc")

    //     let doc = this.docSet.getDoc(msg.data.id)

    //     const syncMessage = Automerge.getChanges(Automerge.init(), doc)

    //    // console.log(syncMessage)
    //   //  const [ syncState, syncMessage ] = Automerge.generateSyncMessage(doc, Automerge.initSyncState())
        
    //     ws.socket.send(JSON.stringify({ action: 'subscribed', data: syncMessage }))
    // }

    async initMerge(ws :AutomergeSocket, msg: {action: string, data: any}){

        let doc = await this.docSet.getDoc(msg.data.collection, msg.data.id)

        let initial = Automerge.getChanges(Automerge.init(), doc)

        ws.socket.send(JSON.stringify({action: 'automerge', data: {
            id: msg.data.id,
            changes: initial
        }}))

    }

    async receiveMessage(ws: AutomergeSocket, msg: {action: string, data: any}){
        switch(msg.action){
            case 'automerge':
                await this.docChanged(ws, msg)
                break;
            case 'automerge:init':
                this.initMerge(ws, msg)
            // case 'subscribe':
            //     this.subscribeDoc(ws, msg)
            default:
                break;
        }
    
    }

    handleWebsocket(ws: WebSocket){
        
        let socket : AutomergeSocket = {
            socket: ws,
            id: nanoid()
        }
     //   if(!socket.id) socket.id = nanoid();

        let ix = this.clients.push(socket)


    
        ws.on('message', async (data) => {
            await this.receiveMessage(socket, JSON.parse(data.toString()))
        })

        ws.on('close', () => {
            console.log("Websocket closed ", this.clients.length)
            this.clients.splice(ix - 1, 1)
            console.log(this.clients.length)
        })
     
    
        let subscribedDocuments : Automerge.FreezeObject<any>[] = [] // Document[]
        let subscribingDocuments : {id: string, cancel: boolean}[] = [] // { id: string, cancel: boolean }[]
      
        const removeFromSubscribedDocuments = (id: string) => {
          subscribingDocuments = subscribingDocuments.filter(d => d.id !== id)
          subscribedDocuments = subscribedDocuments.filter(d => d.id !== id)
        }
    
        const send = (action: string, data: any) => {
          console.log('sending', action, data)
          ws.send(JSON.stringify({ action, ...data }))
        }
    
     
        // const subscribeToDoc = id => {
        //   if (
        //     subscribingDocuments.some(a => a.id === id) ||
        //     subscribedDocuments.some(a => a.id === id)
        //   ) {
        //     send('error', {
        //       message: 'Already subscribed or subscribing',
        //       id,
        //     })
        //     return
        //   }
        //   subscribingDocuments.push({ id, cancel: false })
    
        //   this.checkAccess(id, req)
        //     .then(access => {
        //       if (access) {
        //         return this.getDoc(id)
        //       } else {
        //         send('error', {
        //           message: 'Access denied',
        //           id,
        //         })
        //         removeFromSubscribedDocuments(id)
        //         return null
        //       }
        //     })
        //     .then(doc => {
        //       if (doc === null) return
        //       if (doc === false) {
        //         // 404
        //         send('error', {
        //           message: 'Document not found',
        //           id,
        //         })
        //         removeFromSubscribedDocuments(id)
        //       } else {
        //         const { cancel } = subscribingDocuments.find(d => d.id === id)
        //         if (!cancel) {
        //           doc.addToSet(docSet)
        //           subscribedDocuments.push(doc)
        //           send('subscribed', { id })
        //         }
        //         subscribingDocuments = subscribingDocuments.filter(d => d.id !== id)
        //       }
        //     })
        //     .catch(e => {
        //       removeFromSubscribedDocuments(id)
        //       send('error', {
        //         message: 'Internal server error',
        //         id,
        //       })
        //       console.error('Error occurred while checking access for ' + id)
        //       console.error(e)
        //     })
    
    }
}
