import { PrismaClient } from "@hexhive/data";
import { Router } from "express";
import { nanoid } from 'nanoid'

export default (prisma: PrismaClient) => {
    const router = Router();

    router.route('/')
        .get(async (req, res) => {
            const apps = await prisma.application.findMany();
            res.send({result: apps})
        })
        .post(async (req, res) => {
            const app = await prisma.application.create({
                data: {
                    id: nanoid(),
                    name: req.body.name,
                    slug: req.body.slug,
                    entrypoint: req.body.entrypoint,
                    staging_entrypoint: req.body.staging_entrypoint,
                }
            })
            res.send({result: app})
        })

    
    router.route('/:id')
        .get(async (req, res) => {
            const user = await prisma.application.findFirst({where: {id: req.params.id}, include: {serviceAccounts: true}})
            res.send({result: user})
        })

    router.route('/:id/serviceaccounts')
        .get(async (req, res) => {
            const serviceAccounts = await prisma.applicationServiceAccount.findMany({where: {application: {id: req.params.id}}})
            res.send({result: serviceAccounts})
        })
        .post(async (req, res) => {
            const account = await prisma.applicationServiceAccount.create({
                data: {
                    id: nanoid(),
                    name: req.body.name,
                    apiKey: nanoid(),
                    application: {
                        connect: {id: req.params.id}
                    }
                }
            })
            res.send({result: account})
        })
        .put(async (req, res) => {
            const account = await prisma.applicationServiceAccount.update({
                where: {id: req.body.id},
                data: {
                    name: req.body.name
                }
            })
            res.send({result: account})
        })

    return router;
}