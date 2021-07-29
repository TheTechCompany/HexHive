import { gql } from '@apollo/client'

export const GET_PROGRAM = gql`
    query GetProgram($id: MongoID){
        ProgramOne(filter: {_id: $id}){
            _id
            name
            program
            io{
                _id
                name
                type
            }
            hmi
            plugins
        }

    }

`

export const GET_STACKS = gql`
    query GetStacks{
        StackMany{
            _id
            name
            items{
                _id
                name
                ui
                dimensions{
                    width
                    height
                }
            }
            program
        }
    }
`

export const GET_PROGRAM_SHARDS = gql`
    query GetProgramShards($parent: MongoID){
        FlowShardMany(filter: {program: $parent}){
            _id
            name
            program
            parent
            nodes{
                type
                x
                y
                id
            }
            paths{
                id
                points{
                    x
                    y
                }
                source
                sourceHandle
                target
                targetHandle
            }
        }
    }
`