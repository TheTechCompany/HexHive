import { SES } from 'aws-sdk'

const ses = new SES({region: 'ap-southeast-2'})

export const sendMail = (to: string[], subject: string, body: string) => {
	return new Promise((resolve, reject) => {
		ses.sendEmail({
			Source: "HexHive Systems <no-reply@hexhive.io>",
			Destination: {
				ToAddresses: to
			},
			Message: {
				Subject: {Data: subject},
				Body: {
					Text: {Data: body}
				}
			}
		}, (err, data) => {
			if(err) return reject(err)
			resolve(data)
		})
	})
}

export const sendInvite = async (invite: {link: string, sender: string, to: string, receiver: string}) => {
	const subject = `${invite.sender} has invited you to an organisation on HexHive`
	return await sendMail(
		[invite.to], 
		subject,
		`Kia Ora${invite.receiver ? ` ${invite.receiver}`: ''},
		
${invite.sender} has invited you to join their HexHive organisation
		
${invite.link}
	
HexHive`)
}

export const sendPasswordReset = async (reset_event: {requested: string, link: string}) => {
	const subject = `Password reset request`
	return await sendMail(
		[reset_event.requested], 
		subject,
		`Kia Ora,
		
A password reset has been requested for your HexHive account, if this wasn't you please ignore this email.
		
Password Reset:
${reset_event.link}
	
HexHive`)
}

export const sendPasswordResetConfirmation = async (reset_event: {requested: string, link: string}) => {
	const subject = `Password reset`
	return await sendMail(
		[reset_event.requested], 
		subject,
		`Kia Ora,
		
Your password has been reset for HexHive if this was not you please click the link below to report this action.
		
Report Reset:
${reset_event.link}
	
HexHive`)
}
export const sendNotification = () => {

}