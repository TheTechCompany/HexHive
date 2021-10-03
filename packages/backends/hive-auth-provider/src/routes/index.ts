import { Router } from 'express';

import { AuthRouter } from './auth';

import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { Provider } from 'oidc-provider';
import { InteractionRouter } from './interaction';
import { Account } from '../Account';
import { ForgotRouter } from './forgot';
import { Session } from 'neo4j-driver'
import { ResetRouter } from './reset';
const whitelist = ['null', 'http://localhost:3001', 'https://matrix.hexhive.io', 'http://localhost:7000', 'http://localhost:3000', 'https://hexhive.io', 'https://next.hexhive.io']

export const DefaultRouter = (oidc: Provider, accountant: Account, session: Session) : Router => {
    const router = Router();
    
    const corsOptions = {
        origin: (origin : any, callback: (error: any, result?: any) => void) => {
              if (whitelist.indexOf(origin) !== -1 || !origin) {
                 return callback(null, true)
             } else {
                 return callback(new Error('Not allowed by CORS'))
             }
        },
        credentials: true
        
    }
    router.use(cookieParser())
    router.use(bodyParser.json())
    router.use(bodyParser.urlencoded({extended: false}))

    router.use(cors(corsOptions))

    router.use('/reset', ResetRouter(session))
    router.use('/forgot', ForgotRouter(session))
    router.use('/interaction', InteractionRouter(oidc, accountant))
    router.use('/oauth', AuthRouter(oidc))
    // router.use('/user', UserRouter(cas, methods))
    return router;
}