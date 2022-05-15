import { PrismaClient } from "@hexhive/data";
import { Router } from "express";
import { nanoid } from "nanoid";

export default (prisma: PrismaClient) => {
    const router = Router();

    router.route('/')
        .get(async (req, res) => {
            const apps = await prisma.organisation.findMany({
                include: {
                    roles: {
                        include: {
                            applications: true
                        }
                    }
                }
            });
            res.send({result: apps})
        })
        .post(async (req, res) => {
            const org = await prisma.organisation.create({
                data: {
                    id: nanoid(),
                    name: req.body.name,
                }
            })
            res.send({result: org})
        })

    
    router.route('/:id')
        .get(async (req, res) => {
            const user = await prisma.organisation.findFirst({
                where: {id: req.params.id},
                include: {
                    applications: true,
                    roles: {
                        include: {
                            applications: true,
                        }
                    },
                    trustsUsers: true
                }
            })
            res.send({result: user})
        })

    router.route('/:id/roles')
        .get(async (req, res) => {

        })
        .post(async (req, res) => {
            const role = await prisma.role.create({
                data: {
                    id: nanoid(),
                    name: req.body.name,
                    organisation: {connect: {id: req.params.id}},
                    applications: {
                        connect: req.body.applications.map((x: any) => ({id: x}))
                    }
                }
            })
            res.send({result: role})
        })

    
    router.route('/:id/applications')
        .get(async (req, res) => {
            const apps = await prisma.application.findMany({where: {users: {some: {id: req.params.id}}}})
            res.send({result: apps})
        })
        .put(async (req, res) => {
            const app = await prisma.organisation.update({
                where: {id: req.params.id},
                data: {
                    applications: {
                        connect: {id: req.body.application}
                    }
                }
            })
            res.send({result: app})
        })
        
    return router;
}