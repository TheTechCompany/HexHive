import Automerge, { BinaryChange } from 'automerge'
import {Document} from './Document'
import { retry } from 'async';
let document = Automerge.from<any>({name: "Test Doc"})


document = Automerge.change(document, (doc) => {
    doc.table = new Automerge.Table<{name: string, item?: number}>()

    doc.table.add({
        name: "Test",
        item: 2
    })
})

//console.log(Automerge.generateSyncMessage(document, Automerge.Backend.initSyncState()))


export interface AutomergeOpts {
    url: string;
    readyCallback?: Function;
}

export class AutomergeClient {

    private options: AutomergeOpts;

    private connection?: WebSocket;

    private document : Document<any>;

    private mergeListeners : {
        [key: string]: (changes: BinaryChange[]) => void;
    } = {};

    private reconnectionTimer?: NodeJS.Timeout;

    constructor(opts: AutomergeOpts){        
        this.options = opts;

        this.socketOpened = this.socketOpened.bind(this);
        this.receiveMessage = this.receiveMessage.bind(this);

        this.connect(opts.url || `ws://localhost:8001`)

    //    this.connection.onopen = this.socketOpened;

        //('open', this.socketOpened)


       
        // this.connection.on('message', this.receiveMessage)

        this.document = new Document((changes) => {
            this.connection?.send(JSON.stringify({action: 'automerge', data: changes}))   
        })
    }

    async connect(url: string){
        return await new Promise((resolve, reject) => {
            retry({
                times: 29,
                interval: (retryCount) => {
                    console.log(retryCount, (50 * Math.pow(2, retryCount)))
                    return 50 * Math.pow(2, retryCount)
                }
            }, (cb) => {

                this.connection = new WebSocket(url)
                this.connection.onmessage = this.receiveMessage;
                this.connection.onopen = () => {
                    console.log("Socket opened")
                    this.socketOpened()

                    this.connection?.addEventListener('close', (event) => {
                        console.log("Socket closed")
                        this.socketClosed(event);
                    })

                    return cb(null, "Connected")
                }
                this.connection.onerror = (error) => {
                    console.log("Socket Error")
                 //   this.socketError(error);
                //   return reject(error)
                }
                this.connection.onclose = (event) => {
                    console.log("Socket closed")
                //  this.socketClosed(event);
                    return cb(new Error(event.reason))
                }
                
            }, (err, res) => {
                console.log("CONENCTION", err)
            })

        })
    }

    async reconnect(){
       
  
        // try{ 
        //     console.log("Trying to reconnect")
        //     const result = await this.connect(this.options.url)
        //     if(result === "Connected"){
        //         return;
        //     }
        // }catch(e){
        //     if(this.reconnectionTimer) clearTimeout(this.reconnectionTimer)
        //     this.reconnectionTimer = setTimeout(() => this.reconnect(), 10 * 1000)
        // }
    }

    socketError(error: Event){
        // if(this.connection.readyState == this.connection.CLOSING || this.connection.readyState == this.connection.CLOSED){
        //     this.reconnect();
        // }
    }

    socketClosed(closed: CloseEvent){
        this.connect(this.options.url)
    }

    get isReady(){
        return this.connection?.readyState == this.connection?.OPEN
    }

    sendDocChanges(collection: string, docId: string, changes: Automerge.BinaryChange[]){
        this.connection?.send(JSON.stringify({action: 'automerge', data: {changes, collection, id: docId}}))
    }

    receiveMessage(msg: MessageEvent){
        let data = JSON.parse(msg.data.toString())
        switch(data.action){
            case 'automerge':

                let changes = data.data.changes.map((ch: any) => Object.keys(ch).map((x) => ch[x]))
                let binaryChanges = changes.map((x: any[]) => Uint8Array.from(x))

                this.mergeListeners[data.data.id](binaryChanges as any)
                //  this.document.applyChanges([binaryChange] as any)



                break;
        }
    }

    requestMerges(collection: string, docId: string){
        this.connection?.send(JSON.stringify({action: "automerge:init", data: {collection, id: docId}}))
    }

    registerMergeListener(collection: string, docId: string, listener: (changes: BinaryChange[]) => void){
        this.mergeListeners[docId] = listener;
    }

    socketOpened(){
        console.log("Connected")
        this.options.readyCallback?.()
   //     this.subscribeDoc('1234')
    }

    subscribeDoc(id: string){
        this.connection?.send(JSON.stringify({action: "subscribe", data: {id: id}}))
    }

    
}
