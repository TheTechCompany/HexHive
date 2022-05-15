import { PrismaClient } from "@hexhive/data";
import { Router } from "express";
import { nanoid } from "nanoid";
import crypto from 'crypto'

export default (prisma: PrismaClient) => {
    const router = Router();

    router.route('/')
        .get(async (req, res) => {
            const apps = await prisma.user.findMany();
            res.send({result: apps})
        })
        .post(async (req, res) => {
            const password = crypto.createHash('sha256').update(req.body.password).digest('hex');

            const user = await prisma.user.create({
                data: {
                    id: nanoid(),
                    name: req.body.name,
                    email: req.body.email,
                    password
                }
            })
            res.send({result: user})
        })

    router.route('/:id')
        .get(async (req, res) => {
            const user = await prisma.user.findFirst({
                where: {id: req.params.id}, 
                include: {
                    organisations: {
                        include: {issuer: true, roles: true}
                    }
                }
            })
            res.send({result: user})
        })
        .put(async (req, res) => {
            const user = await prisma.user.update({
                where: {id: req.params.id},
                data: {
                    organisations: {
                       
                        upsert: [
                            {
                                where: {
                                    trustId_issuerId: {
                                        issuerId: req.body.organisation,
                                        trustId: req.params.id
                                    }
                                },
                                update: {
                                    roles: {
                                        set: req.body.roles.map((x: any) => ({id: x})),                                         
                                    }
                                },
                                create: {
                                    id: nanoid(),
                                    issuer: {connect: {id: req.body.organisation}},
                                    roles: {
                                        connect: req.body.roles.map((x: string) => ({id: x})),
                                    }
                                }
                            }
                        ]
                    }
                }
            })

            res.send({result: user})

        })


    return router;
}