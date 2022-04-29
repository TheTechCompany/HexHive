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
            const user = await prisma.application.findFirst({where: {id: req.params.id}})
            res.send({result: user})
        })

    return router;
}