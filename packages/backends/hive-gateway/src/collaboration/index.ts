import WebSocket from "ws"
import AutomergeServer from "@hexhive/collaboration-server"
import { HiveDoc } from "@hexhive/types"

export class CollaborationServer {
	private mergeServer : AutomergeServer = new AutomergeServer();

	constructor(){
		this.mergeServer.loadMongoose([
			HiveDoc
		])
	}

	handleConnection(socket: WebSocket){
		this.mergeServer.handleWebsocket(socket)
	}
}
