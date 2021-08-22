import { Router } from 'express';
import { CentralAuthServer } from '@hexhive/auth';

import { AuthRouter } from './auth';
import { UserRouter } from './user'

import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { Provider } from 'oidc-provider';
import { InteractionRouter } from './interaction';

const whitelist = ['http://localhost:3001', 'https://matrix.hexhive.io', 'http://localhost:3002', 'http://localhost:3000', 'https://hexhive.io', 'https://next.hexhive.io']

export const DefaultRouter = (oidc: Provider) : Router => {
    const router = Router();
    
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

    router.use('/interaction', InteractionRouter(oidc))
    router.use('/oauth', AuthRouter(oidc))
    // router.use('/user', UserRouter(cas, methods))
    return router;
}