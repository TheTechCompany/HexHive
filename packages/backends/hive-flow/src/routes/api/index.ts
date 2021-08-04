import { Router } from 'express'
import { Connector } from '../../connector'

import fileRouter from './file'
import filesRouter from './files'

export default (connector: Connector) => {
    const router = Router()

    router.use('/files', filesRouter(connector))
    router.use('/file', fileRouter(connector))
    return router
}