import { Server } from 'ws';
import AutomergeServer from '../src'
import neo4j from 'neo4j-driver'

import { gql } from 'graphql-tag'

const graphql = gql`
    type CommandFlow {
        name: String
        nodes: [CommandNode]
    }

    type CommandNode {
        x: Float
        y: Float
    }
`

const driver = neo4j.driver('')

const mergeServer = new AutomergeServer(driver, graphql)

const server = new Server({
    port: 8081,
    perMessageDeflate: false
})

server.on('connection', (socket) => {

    mergeServer.handleWebsocket(socket)
})
