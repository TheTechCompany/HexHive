import { Router } from 'express';
import { CentralAuthServer } from '..';

export default (cas: CentralAuthServer, methods: {findUser: (auth_request: any) => Promise<[string, any]>}) => {
    const router = Router();

    //Trade credentials for token
    router.post('/', async (req, res) => {
        const [user, payload] = await methods.findUser(req.body)

        let cookieToken = req.cookies['token'];

        if(cookieToken){
            let decoded = cas.decodeToken(cookieToken)
            return res.send({user: decoded})
        }

        let token = cas.signToken(user, payload)
        res.cookie('token', token, {httpOnly: false, secure: false})
        res.send({token: token})
    })

    router.post('/refresh', (req, res) => {

    })
    return router;
}