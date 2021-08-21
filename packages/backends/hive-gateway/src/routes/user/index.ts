import { Router } from 'express'
import { CentralAuthServer } from '@hexhive/auth';
import { Provider } from 'oidc-provider';

export const UserRouter  = (oidc: Provider) : Router => {
    const router = Router();

    router.get('/', (req, res) => {
        res.send({user: (req as any).user})
        // methods.findUserById()
    })

    return router
}