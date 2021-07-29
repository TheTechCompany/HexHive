import { Router } from 'express'
import { CentralAuthServer } from '../auth';

export default (cas: CentralAuthServer, methods: {findUserById: (id: string) => any}) => {
    const router = Router();

    router.get('/', (req, res) => {
        if(!req.cookies || !req.cookies['token']) return res.send({error: "No token"})
        res.send(cas.decodeToken(req.cookies['token']))
        // methods.findUserById()
    })

    return router
}