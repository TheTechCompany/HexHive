import { Router } from 'express'
import { CentralAuthServer } from '../auth';

export default (cas: CentralAuthServer, methods: {findUserById: (id: string) => any}) => {
    const router = Router();

    router.get('/', cas.oauthServer.authenticate(), (req, res) => {
        res.send({user: req.user})
        // methods.findUserById()
    })

    return router
}