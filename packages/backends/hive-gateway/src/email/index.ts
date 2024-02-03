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
			from: "HexHive Systems <no-reply@hexhive.io>",
			to,
			subject,
			text: body,
			html: htmlTemplate ? compile(htmlTemplate)(htmlObject) : undefined		
		})

}

export const sendInvite = async (
	transporter: nodemailer.Transporter,
	invite: {link: string, sender: string, to: string, receiver: string, type: string}
) => {
	const inviteFile = invite.type == 'User' ? 'invite-user.html' : 'invite-collaborator.html';
	const htmlTemplate = readFileSync(path.join(__dirname, './templates/', inviteFile), 'utf-8')

	const subject = `${invite.sender} has invited you to an organisation on HexHive`
	return await sendMail(
		transporter,
		[invite.to], 
		subject,
		`Kia Ora${invite.receiver ? ` ${invite.receiver}`: ''},
		
		${invite.sender} has invited you to join their HexHive organisation
		
		${invite.link}
	
		HexHive`,
		htmlTemplate,
		invite
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