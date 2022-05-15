import express, { Router } from 'express'
import path from 'path'
import organisationRouter from './organisations'
import userRouter from './users'
import applicationRouter from './applications'
import { PrismaClient } from '@hexhive/data'

export default (prisma: PrismaClient) => {
    const router = Router();


    router.use('/organisations', organisationRouter(prisma));
    router.use('/users', userRouter(prisma));
    router.use('/applications', applicationRouter(prisma));

    return router;
}
