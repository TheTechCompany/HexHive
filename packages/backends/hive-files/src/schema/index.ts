import { schemaComposer } from 'graphql-compose'
import { merge } from 'lodash'
import { Queries, Mutations } from './file'

import { connect_data } from '@hexhive/types'

export default () => {
    connect_data()
    
    schemaComposer.Query.addFields(Queries)
    schemaComposer.Mutation.addFields(Mutations)
    
    return schemaComposer.buildSchema()
}