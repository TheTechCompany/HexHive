import { Router } from 'express'
import { Connector } from '../../connector'

import fileRouter from './file'

export default (connector: Connector) => {
    const router = Router()

    router.use('/file', fileRouter(connector))
    return router
}