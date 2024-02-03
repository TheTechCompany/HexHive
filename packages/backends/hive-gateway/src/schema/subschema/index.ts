import { mergeResolvers } from '@graphql-tools/merge'
import { PrismaClient } from '@hexhive/data'
import nodemailer from 'nodemailer'
import { JSONDefinition, JSONResolver } from 'graphql-scalars'
import acl from './acl'
import apps from './apps'

export default (prisma: PrismaClient, schemas: { [key: string]: {acl: any[]} }, transporter?: nodemailer.Transporter) => {
    const { typeDefs: aclTypeDefs, resolvers: aclResolvers } = acl(prisma, transporter)
    const { typeDefs: appTypeDefs, resolvers: appResolvers }  = apps(prisma, schemas);

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