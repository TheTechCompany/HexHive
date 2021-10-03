import { getUserByEmail } from '@hexhive/data-core';
import { Router } from 'express'
import { nanoid } from 'nanoid';
import { Session } from 'neo4j-driver';
import { sendPasswordReset } from '../../email';
import jwt from 'jsonwebtoken'
const jwks = require('../../jwks/jwks.json')

export const ForgotRouter = (session: Session) : Router => {
    const router = Router();

	router.get('/', (req, res) => {
		res.render('forgot', {
			flash: undefined,
			success: false,
			params: {},
			client: {}
		})
	})

	router.post('/', async (req, res) => {
		if(!req.body.email) return res.render("forgot", {flash: undefined, success: false, params: {}, client: {}})
		const user = await session.readTransaction(async (tx) => {
			return await getUserByEmail(tx, req.body.email)
		})

		console.log(user);

		if(user){
			const reset_id = nanoid()
			const token = jwt.sign({
				sub: user.id,
				email: user.username,
				scope: ['reset_password'],
				id: reset_id
			}, jwks.keys[0].x)

			await sendPasswordReset({
				requested: user.username,
				link: `https://auth.hexhive.io/reset?token=${token}`
			})
			return res.render('forgot', {
				flash: "Recovery email sent, please check your inbox",
				success: true,
				params: {},
				client: {}
			})
		}else{
			res.render('forgot', {
				flash: "No user found with that email",
				success: false,
				params: {},
				client: {}
			})
		}
	})


      return router;
}