import { mergeResolvers } from '@graphql-tools/merge'
import { PrismaClient } from '@prisma/client'

import acl from './acl'
import apps from './apps'

export default (prisma: PrismaClient) => {
    const { typeDefs: aclTypeDefs, resolvers: aclResolvers } = acl(prisma)
    const { typeDefs: appTypeDefs, resolvers: appResolvers }  = apps(prisma);

    const resolvers : any = mergeResolvers([
        aclResolvers,
        appResolvers
    ])

    const typeDefs = `
        ${aclTypeDefs}
        ${appTypeDefs}
    `

    return {typeDefs, resolvers}
}