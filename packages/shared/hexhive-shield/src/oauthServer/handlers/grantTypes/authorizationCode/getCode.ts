import verifier from '../../../verifier'
import { InvalidRequestError, InvalidGrantError, MissingArgumentError, BadArgumentError } from '../../../errors'

const getCode = async (req: { body: { code: any } }, client: { id: any }, { getAuthorizationCode }: any) => {
  const authCode = req.body.code
  if (!authCode) throw new InvalidRequestError('Missing Parameter: `code`. Ensure it is sent in the body of the request.')
  if (!verifier.isPrintableUnicode) throw new InvalidRequestError('Invalid Parameter: `code`. Ensure it consists of printable unicode.')
  const code = await getAuthorizationCode(authCode)
  if (!code) throw new InvalidGrantError('Authorization Code Is Invalid')
  if (!code.client) throw new MissingArgumentError('code.client from model.getAuthorizationCode')
  if (!code.user) throw new MissingArgumentError('non-falsy code.user from model.getAuthorizationCode')
  if (code.client.id !== client.id) throw new InvalidGrantError('Authorization Code is Invalid')
  if (!(code.expiresAt instanceof Date)) throw new BadArgumentError('expiresAt from model.getAuthorizationCode', 'code.expiresAt must be an instance of Date')
  if (code.expiresAt < new Date()) throw new InvalidGrantError('Authorization Code is Expired')
  if (code.redirectUri && !verifier.isUri(code.redirectUri)) throw new InvalidGrantError('`redirect_uri` is not a valid URI.')
  return code
}

export default getCode
