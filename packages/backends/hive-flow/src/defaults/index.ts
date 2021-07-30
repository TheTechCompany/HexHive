import { Connector } from '../connector'
import projectQueries from './project'
import quoteQueries from './quotes'

import {
    schemaComposer
} from 'graphql-compose'


//schemaComposer.addTypeDefs(projectGraph)



export const schema = (connector: Connector) => {
    schemaComposer.Query.addFields(projectQueries(connector).GraphQueries)
    schemaComposer.Mutation.addFields(projectQueries(connector).GraphMutations)

    console.log(quoteQueries(connector).GraphQueries)
    schemaComposer.Query.addFields(quoteQueries(connector).GraphQueries)
    schemaComposer.Mutation.addFields(quoteQueries(connector).GraphMutations)

    return schemaComposer.buildSchema()
}