import { schemaComposer } from 'graphql-compose'

const Queries = {}
const Mutations = {}

export default () => {
    schemaComposer.Query.addFields(Queries)
    schemaComposer.Mutation.addFields(Mutations)
    
    return schemaComposer.buildSchema()
}