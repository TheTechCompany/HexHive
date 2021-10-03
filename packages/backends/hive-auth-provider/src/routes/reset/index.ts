import { getUserByEmail, updateUserPassword } from '@hexhive/data-core';
import { Router } from 'express'
import { Session } from 'neo4j-driver';
import { sendPasswordReset, sendPasswordResetConfirmation } from '../../email';
import jwt from 'jsonwebtoken'

const jwks = require('../../jwks/jwks.json')

export const ResetRouter = (session: Session) : Router => {
    const router = Router();

	router.get('/', (req, res) => {
		let { token } = req.query
		if(!token){
			return res.render('reset', {
				flash: "No reset token supplied",
				success: true,
				params: {
					reset_token: token,
					login_hint: 'ross@hexhive.io',
				},
				client: {}
			})
		}

		const valid = jwt.verify(token?.toString(), jwks.keys[0].x)
		if(!valid || typeof(valid) == 'string'){
			return res.render('reset', {
				flash: "Invalid reset token supplied",
				success: true,
				params: {
					reset_token: token,
					login_hint: 'ross@hexhive.io',
				},
				client: {}
			})
		}
		res.render('reset', {
			flash: undefined,
			success: false,
			params: {
				reset_token: token,
				login_hint: valid.email,
			},
			client: {}
		})
	})

	router.post('/', async (req, res) => {
		console.log(req.body)
		const { reset_token, new_password, confirm_password } = req.body
		const valid = jwt.verify(reset_token?.toString(), jwks.keys[0].x)

		if(!valid || typeof(valid) == 'string' || !valid.sub) 	return res.render('reset', {
			flash: "Invalid token supplied",
			success: true,
			params: {},
			client: {}
		})

		if(new_password !== confirm_password) 	return res.render('reset', {
			flash: "Passwords do not match",
			success: true,
			params: {},
			client: {}
		})

		const user = await session.writeTransaction(async (tx) => {
			return await updateUserPassword(tx, {id: valid.sub || '', password: new_password})
		})

		console.log(user);
		
		if(user){
			await sendPasswordResetConfirmation({
				requested: valid.email,
				link: `https://auth.hexhive.io/report`
			})
			return res.render('reset', {
				flash: "Password reset successful",
				success: true,
				params: {},
				client: {}
			})
		}else{
			res.render('reset', {
				flash: "Error resetting password",
				success: false,
				params: {},
				client: {}
			})
		}
	})


      return router;
}