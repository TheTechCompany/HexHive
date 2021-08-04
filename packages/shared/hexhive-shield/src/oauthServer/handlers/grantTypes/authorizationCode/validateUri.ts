import verifier from '../../../verifier'
import { InvalidRequestError } from '../../../errors'

export const validateUri = (req: { body: { redirect_uri: any }; query: { redirect_uri: any } }, code: { redirectUri: any }) => {
  if (!code.redirectUri) return
  const redirectUri = req.body.redirect_uri || req.query.redirect_uri || code.redirectUri
  if (!verifier.isUri(redirectUri)) throw new InvalidRequestError('`redirect_uri` is invalid')
  if (redirectUri != code.redirectUri) throw new InvalidRequestError('`redirect_uri` is invalid')
}