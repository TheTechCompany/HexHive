import {compile} from 'handlebars'
import fs, { readFileSync } from 'fs';
import path from 'path';

import nodemailer from "nodemailer";


export const sendMail = async (
	transporter: nodemailer.Transporter,
	to: string[], 
	subject: string, 
	body: string,
	htmlTemplate?: string,
	htmlObject?: any
) => {

		return await transporter.sendMail({
			from: "HexHive <no-reply@hexhive.io>",
			to,
			subject,
			text: body,
			html: htmlTemplate ? compile(htmlTemplate)(htmlObject) : undefined		
		})

}

export const sendInvite = async (
	transporter: nodemailer.Transporter,
	invite: {
		to: string, //E-mail of new user
		subject: string, //Subject of the E-Mail
		
		message: string,

		type: string //User or external
	},
	htmlData?: any
) => {
	const inviteFile = invite.type == 'User' ? 'invite-user.html' : 'invite-collaborator.html';
	const htmlTemplate = readFileSync(path.join(__dirname, './templates/', inviteFile), 'utf-8')

	console.log("Sending mail to ", invite.to, invite.message)
	return await sendMail(
		transporter,
		[invite.to], 
		invite.subject,
		invite.message,
		htmlTemplate,
		htmlData
		)
}

export const sendPasswordReset = async (
	transporter: nodemailer.Transporter,
	reset_event: {requested: string, link: string}
) => {
	const subject = `Password reset request`
	return await sendMail(
		transporter,
		[reset_event.requested], 
		subject,
		`Kia Ora,
		
		A password reset has been requested for your HexHive account, if this wasn't you please ignore this email.
		
		Password Reset:
		${reset_event.link}
	
		HexHive`)
}

export const sendNotification = () => {

}