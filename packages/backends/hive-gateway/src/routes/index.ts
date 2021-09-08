import { Router } from 'express';
import { CentralAuthServer } from '@hexhive/auth';

import { AuthRouter } from './auth';
import { UserRouter } from './user'
import FileRouter from './files'
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { Provider } from 'oidc-provider';
import { requiresAuth } from 'express-openid-connect';
import { FileManager } from './files/util';
import { Driver } from 'neo4j-driver';
// import { InteractionRouter } from './interaction';

const whitelist = ['http://localhost:3001', 'https://matrix.hexhive.io', 'http://localhost:3002', 'http://localhost:3000', 'https://hexhive.io', 'https://next.hexhive.io', 'https://go.hexhive.io']

export const DefaultRouter = (neo4j : Driver) : Router => {
    const neo_session = neo4j.session()

    const router = Router();
    let fileManager
    if(process.env.IPFS_URL) fileManager = new FileManager({url: process.env.IPFS_URL || ''})
    
    const corsOptions = {
        origin: (origin : any, callback: (error: any, result?: any) => void) => {
              if (whitelist.indexOf(origin) !== -1 || !origin) {
                 callback(null, true)
             } else {
                 callback(new Error('Not allowed by CORS'))
             }
        },
        credentials: true
        
    }
   
    router.use(cookieParser())
    router.use(bodyParser.json())
    router.use(bodyParser.urlencoded({extended: false}))

    router.use(cors(corsOptions))

    // router.use('/interaction', InteractionRouter())
    router.use('/oauth', AuthRouter())

    if(fileManager) router.use('/api/files', FileRouter(fileManager, neo_session))

    router.get('/login', (req, res) => {
        res.oidc.login({ returnTo: req.query.returnTo?.toString() || process.env.UI_URL || 'https://next.hexhive.io/dashboard' })
    })

    router.get('/me', requiresAuth(), async (req, res) => {
        const userinfo = await req.oidc.fetchUserInfo();
        res.send({...userinfo})
    })
    // router.use('/user', UserRouter(cas, methods))
    return router;
}