import { GraphQLSchema, GraphQLScalarType, GraphQLObjectType, GraphQLField, GraphQLInterfaceType, GraphQLArgument, GraphQLUnionType, GraphQLEnumType, GraphQLEnumValue, GraphQLInputObjectType, GraphQLInputField, Kind } from "graphql";
import crypto from 'crypto'

export const HashType = new GraphQLScalarType({
    name: 'Hash',
    serialize: (value) => {
        console.log("serialize", {value})
        return value as string;
    },
    parseLiteral: (value) => {
        if(value.kind == Kind.STRING){
            return crypto.createHash('sha256').update(value.value).digest('hex')
        }
        return '';
        // console.log("parseLiteral", {value})

    },
    parseValue: (value) => {
        return crypto.createHash('sha256').update(value as string).digest('hex')
        console.log("parseValue", {value})

    }
});
//  extends GraphQLScalarType {
//     constructor(type: any){
//         super({
//             name: 'Hash',
            
//             serialize: (value) => {
//                 value = type.serialize(value)
//                 console.log("serialize", {value})
//                 return value;
//             },
//             parseValue: (inputValue) => {
//                 console.log("parseValue", {inputValue})
//                 let val = type.parseValue(inputValue)
//                 return crypto.createHash('sha256').update(val).digest('hex');
                
//             },
//             parseLiteral: (valueNode, variables) => {
//                 console.log("parseLiteral", {valueNode})
//                 let val = type.parseLiteral(valueNode, variables)
//                 if(valueNode.kind == Kind.STRING){
//                     return crypto.createHash('sha256').update(val).digest('hex');
//                 }
//                 return null;
//             }
//         })
//     }
// }


// export class HashDirective extends SchemaDirectiveVisitor {
   
    
//     // visitSchema(_schema: GraphQLSchema): void {
//     //     throw new Error("Method not implemented.");
//     // }
//     // visitScalar(_scalar: GraphQLScalarType<unknown, unknown>): void | GraphQLScalarType<unknown, unknown> | null {
//     //     throw new Error("Method not implemented.");
//     // }
//     // visitObject(_object: GraphQLObjectType<any, any>): void | GraphQLObjectType<any, any> | null {
//     //     throw new Error("Method not implemented.");
//     // }
//     visitFieldDefinition(field: GraphQLField<any, any, any>, _details: { objectType: GraphQLInterfaceType | GraphQLObjectType<any, any>; }): void | GraphQLField<any, any, any> | null {
//         // console.log({_field, _details})
//         // field.type = new HashType(field.type);
        
//         // const { resolve: defaultFieldResolver } = field;

//         // field.resolve = async (source, args, context, info) => {
//         //     console.log({source, args, context, info})
//         //     const digest = crypto.createHash('sha256') //.update(JSON.stringify(args)).digest('hex');
//         //     // source.name = digest.update(source.name).digest('hex') //'hash';

//         //     return defaultFieldResolver?.(source, args, context, info);
//         // }


//         // _field.
//         // throw new Error("Method not implemented.");
//     }
//     // visitArgumentDefinition(_argument: GraphQLArgument, _details: { field: GraphQLField<any, any, any>; objectType: GraphQLInterfaceType | GraphQLObjectType<any, any>; }): void | GraphQLArgument | null {
//     //     throw new Error("Method not implemented.");
//     // }
//     // visitInterface(_iface: GraphQLInterfaceType): void | GraphQLInterfaceType | null {
//     //     throw new Error("Method not implemented.");
//     // }
//     // visitUnion(_union: GraphQLUnionType): void | GraphQLUnionType | null {
//     //     throw new Error("Method not implemented.");
//     // }
//     // visitEnum(_type: GraphQLEnumType): void | GraphQLEnumType | null {
//     //     throw new Error("Method not implemented.");
//     // }
//     // visitEnumValue(_value: GraphQLEnumValue, _details: { enumType: GraphQLEnumType; }): void | GraphQLEnumValue | null {
//     //     throw new Error("Method not implemented.");
//     // }
//     visitInputObject(_object: GraphQLInputObjectType): void | GraphQLInputObjectType | null {
//         throw new Error("Method not implemented.");
//     }
//     visitInputFieldDefinition(_field: GraphQLInputField, _details: { objectType: GraphQLInputObjectType; }): void | GraphQLInputField | null {
//        console.log("Input Field")
//         // _field.type = new HashType(_field.type)
//         // throw new Error("Method not implemented.");
//     }   

// }
