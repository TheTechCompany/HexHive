//Auth router

import { Router } from 'express';
import { CentralAuthServer } from '../auth';

export default (cas: CentralAuthServer, methods: {findUser: (auth_request: any) => Promise<any>}) => {
    const router = Router();

    //Trade credentials for token

    router.post('/authorize', async (req, res, next) => {
        const user = await methods.findUser(req.body)

        let cookieToken = req.cookies['token'];

         if(user){
             req.body.user = {user: user._id}
        //     let decoded = cas.decodeToken(cookieToken)
            return next() //User = id?
         }

        const params = [ // Send params back down
            'client_id',
            'redirect_uri',
            'response_type',
            'grant_type',
            'state',
          ]
            .map(a => `${a}=${req.body[a]}`)
            .join('&')
          return res.redirect(`${req.headers.referer || `/oauth`}?success=false&${params}`)
        }, cas.oauthServer.authorize({
          authenticateHandler: {
            handle: async (req: { body: { [x: string]: any; user?: any } }) => {
                return await methods.findUser(req.body.user)
            //   console.log('Authenticate Handler')
            //   console.log(Object.keys(req.body).map(k => ({name: k, value: req.body[k]})))
            //   return req.body.user
            }
          }
        }), (req, res) => {
            res.send((res as any).locals.oauth)   
        })

    router.post('/token', (req: any,res: any,next: () => void) => {
        console.log('Token')
        next()
      }, cas.oauthServer.token({
        requireClientAuthentication: { // whether client needs to provide client_secret for specific grants
          // 'authorization_code': false,
        },
      }), (req, res) => {
        let oauth = res.locals.oauth.token
        let signed_jwt = cas.signToken({user: {_id: oauth.client}, token: oauth.refreshToken})

        res.cookie('refresh-token', signed_jwt, {
          domain: cas.issuer || 'hexhive.io',
          expires: oauth.refreshTokenExpiresAt
        })

        console.log("Sending toke")

        res.status(200)
        res.send({
          accessToken: oauth.accessToken,
          expiresAt: oauth.accessTokenExpiresAt
        })
      })
    //     let token = cas.signToken(user, payload)
    //     res.cookie('token', token, {httpOnly: false, secure: false})
    //     res.send({token: token})
    // })

    router.post('/refresh', (req, res) => {

    })
    return router;
}