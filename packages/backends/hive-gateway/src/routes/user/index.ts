import { Router } from 'express'
import { CentralAuthServer } from '@hexhive/auth';

export const UserRouter = (cas: CentralAuthServer, methods: {findUserById: (id: string) => any}) => {
    const router = Router();

    router.get('/', cas.oauthServer.authenticate(), (req, res) => {
        res.send({user: (req as any).user})
        // methods.findUserById()
    })

    return router
}