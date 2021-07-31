import { Connector } from '../connector'
import projectQueries from './project'
import quoteQueries from './quotes'
import equipmentQueries from './equipment'
import peopleQueries from './people'
import scheduleQueries from './schedule'

import {
    schemaComposer
} from 'graphql-compose'


//schemaComposer.addTypeDefs(projectGraph)


const addBlob = (blob: {GraphQueries: any, GraphMutations: any}) => {
    schemaComposer.Query.addFields(blob.GraphQueries)
    schemaComposer.Mutation.addFields(blob.GraphMutations)
}


export const schema = (connector: Connector) => {

    addBlob(projectQueries(connector))
    addBlob(quoteQueries(connector))
    addBlob(equipmentQueries(connector))
    addBlob(scheduleQueries(connector))

    addBlob(peopleQueries(connector))

    return schemaComposer.buildSchema()
}