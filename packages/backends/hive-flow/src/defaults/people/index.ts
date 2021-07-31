import {
    Queries as GraphQueries,
    Mutations as GraphMutations
} from './graphQueries'

import { schemaComposer } from 'graphql-compose'

// schemaComposer.Mutation.addFields(GraphMutations)
// schemaComposer.Query.addFields(GraphQueries)

import './graphDeclaration'
import { Connector } from '../../connector'

export default (connector: Connector) => {
    return {
        GraphQueries: GraphQueries(connector),
        GraphMutations: GraphMutations(connector)
    }
}