import mongoose, { Model, Document } from 'mongoose';
import { composeMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

export * from './Programs'
export * from './Stacks'

export const convertMongoose = (key: string, model: Model<Document>) => {
    let TC = composeMongoose(model)

    schemaComposer.Query.addFields({
        [`${key}ById`]: TC.mongooseResolvers.findById(),
        [`${key}ByIds`]: TC.mongooseResolvers.findByIds(),
        [`${key}One`]: TC.mongooseResolvers.findOne(),
        [`${key}Many`]: TC.mongooseResolvers.findMany(),
        [`${key}DataLoader`]: TC.mongooseResolvers.dataLoader(),
        [`${key}DataLoaderMany`]: TC.mongooseResolvers.dataLoaderMany(),
        [`${key}ByIdLean`]: TC.mongooseResolvers.findById({ lean: true }),
        [`${key}ByIdsLean`]: TC.mongooseResolvers.findByIds({ lean: true }),
        [`${key}OneLean`]: TC.mongooseResolvers.findOne({ lean: true }),
        [`${key}ManyLean`]: TC.mongooseResolvers.findMany({ lean: true }),
        [`${key}DataLoaderLean`]: TC.mongooseResolvers.dataLoader({ lean: true }),
        [`${key}DataLoaderManyLean`]: TC.mongooseResolvers.dataLoaderMany({ lean: true }),
        [`${key}Count`]: TC.mongooseResolvers.count(),
        [`${key}Connection`]: TC.mongooseResolvers.connection(),
        [`${key}rPagination`]: TC.mongooseResolvers.pagination(),
      });
      
      schemaComposer.Mutation.addFields({
        [`${key}CreateOne`]: TC.mongooseResolvers.createOne(),
        [`${key}CreateMany`]: TC.mongooseResolvers.createMany(),
        [`${key}UpdateById`]: TC.mongooseResolvers.updateById(),
        [`${key}UpdateOne`]: TC.mongooseResolvers.updateOne(),
        [`${key}UpdateMany`]: TC.mongooseResolvers.updateMany(),
        [`${key}RemoveById`]: TC.mongooseResolvers.removeById(),
        [`${key}RemoveOne`]: TC.mongooseResolvers.removeOne(),
        [`${key}RemoveMany`]: TC.mongooseResolvers.removeMany(),
      });
      
}

export const buildSchema = () => {
    return schemaComposer.buildSchema()
}