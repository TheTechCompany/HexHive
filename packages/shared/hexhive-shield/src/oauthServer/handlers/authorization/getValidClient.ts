import verifier from '../../verifier'
import { InvalidRequestError, InvalidClientError, UnauthorizedClientError } from '../../errors'

export const getValidClient = async (req: { query: any; body: any }, getClient: (arg0: any, arg1: undefined) => any) => {
  const clientId = req.body.client_id || req.query.client_id
  if (!clientId) throw new InvalidRequestError('client_id must be included in either the body or as a url query.')
  if (!verifier.isPrintableUnicode(clientId)) throw new InvalidRequestError('client_id must consist of printable unicode characters.')
  const redirectURI = req.body.redirect_uri || req.query.redirect_uri
  if (redirectURI && !verifier.isUri(redirectURI)) throw new InvalidRequestError('redirect_uri must be a valid uri.')
  const client = await getClient(clientId, undefined)
  if (!client) throw new InvalidClientError('Client Credentials are invalid')
  if (!client.grants) throw new UnauthorizedClientError('Client does not have this grant.')
  if (!client.grants.includes('authorization_code')) throw new UnauthorizedClientError('Client does not have this grant')
  if (!client.redirectUris || client.redirectUris.length === 0) throw new InvalidClientError('Client does not have redirectUris defined.')
  if (redirectURI && !client.redirectUris.includes(redirectURI)) throw new InvalidClientError('passed redirectUri is not an accepted uri for this client')
  return client
}
