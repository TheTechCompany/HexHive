import { Server } from 'ws';
import AutomergeServer from '../src'


const mergeServer = new AutomergeServer()

const server = new Server({
    port: 8081,
    perMessageDeflate: false
})

server.on('connection', (socket) => {

    mergeServer.handleWebsocket(socket)
})
