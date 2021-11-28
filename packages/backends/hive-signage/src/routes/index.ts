import { OGM } from '@neo4j/graphql-ogm'
import { Router } from 'express'
import { FileStore } from '../de-file-store'

import campaignRouter from './campaign'

export default (ogm: OGM, fs: FileStore) => {
	const router = Router()

	router.use('/campaign', campaignRouter(ogm, fs))
	
	return router
}