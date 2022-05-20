import { Router } from "express"

export const UserRouter  = () : Router => {
	const router = Router()

	router.get("/", (req, res) => {
		res.send({user: (req as any).user})
	})

	return router
}