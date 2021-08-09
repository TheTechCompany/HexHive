// import fileQueries from './files'

import {
    schemaComposer
} from 'graphql-compose'
import { GraphQLSchema } from 'graphql'
import { GraphQLToolsResolveMethods } from 'graphql-compose/lib/SchemaComposer'


//schemaComposer.addTypeDefs(projectGraph)


const addBlob = (blob: {GraphQueries: any, GraphMutations: any}) => {
    schemaComposer.Query.addFields(blob.GraphQueries)
    schemaComposer.Mutation.addFields(blob.GraphMutations)
}


export const schema = () : [GraphQLSchema, string, any] => {

    // addBlob(fileQueries())

    return [schemaComposer.buildSchema(), schemaComposer.toSDL(), schemaComposer.Query.getResolvers()]
}