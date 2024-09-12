import { mergeResolvers } from '@graphql-tools/merge'
import { PrismaClient } from '@hexhive/data'
import nodemailer from 'nodemailer'
import { JSONDefinition, JSONResolver } from 'graphql-scalars'
import acl from './acl'
import apps from './apps'
import { HiveDB } from '@hexhive/db-types'

export default (db: HiveDB, schemas: { [key: string]: {acl: any[]} }, transporter?: nodemailer.Transporter) => {
    const { typeDefs: aclTypeDefs, resolvers: aclResolvers } = acl(db, transporter)
    const { typeDefs: appTypeDefs, resolvers: appResolvers }  = apps(db, schemas);

    const resolvers : any = mergeResolvers([
        aclResolvers,
        appResolvers,
        {JSON: JSONResolver}
    ])

    const typeDefs = `
        ${aclTypeDefs}
        ${appTypeDefs}
        ${JSONDefinition}
    `

    return {typeDefs, resolvers}
}