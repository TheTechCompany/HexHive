import { GraphQLError } from 'graphql';
import { schemaComposer } from 'graphql-compose';
import {Models} from '@hive-command/data-types';
const { FlowShard, Program, Stack } = Models;
export const setupStackGraph = () => {


    schemaComposer.Mutation.addFields({
        'addStackItem': {
            type: 'StackItems',
            args: {
                stack: 'String',
                record: 'StackItemsInput'
            },
            resolve: async (root, args) => {

                const stack = await Stack.findById(args.stack)
                if(stack){
                stack.items = [...(stack.items || []), args.record]

                await stack.save();

                return stack.items[stack.items.length - 1]
    
                }
            }
        }
    })
}