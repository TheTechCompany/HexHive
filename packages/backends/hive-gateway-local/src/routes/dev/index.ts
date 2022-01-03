import { HiveFrontendServer } from "@hexhive/frontend-server"
import { HiveGateway } from "@hexhive/gateway"
import { Router } from "express"

export const DevRouter = (gateway: HiveGateway, frontend: HiveFrontendServer) => {
	const router = Router()

	router.route('/graphs')
		.get((req, res) => {
			res.send({
				endpoints: gateway.endpoints
			})
	})

	router.route('/sites')
		.get(async (req, res) => {
			let sites = await frontend.publicSites()
			res.send(sites)
		})

	

	return router;
}