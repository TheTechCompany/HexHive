import { Router } from "express";
import { CentralAuthServer } from "../auth";
import handle_auth from "./handle_auth";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser'
import handle_userinfo from "./handle_userinfo";

export const Routes = (cas: CentralAuthServer, methods: any) => {
    const router = Router()

    router.use(bodyParser.json())
    router.use(cookieParser())
    
    router.use('/oauth', handle_auth(cas, methods))
    router.use('/user', handle_userinfo(cas, methods))
    return router;
}