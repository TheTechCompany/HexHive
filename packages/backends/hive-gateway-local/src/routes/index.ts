import { HiveFrontendServer } from '@hexhive/frontend-server'
import { HiveGateway } from '@hexhive/gateway'
import { Router } from 'express'
import { DevRouter } from './dev'

export const Routes = (gateway: HiveGateway, frontend: HiveFrontendServer) => {
	const router = Router()

	router.use('/dev', DevRouter(gateway, frontend))
	return router
}