import { InvalidRequestError, InvalidClientError, UnsupportedGrantTypeError } from '../../errors'
import verifier from '../../verifier'

export const handleGrant = async (req: { body: { grant_type: any } }, client: { grants: string | any[]; accessTokenLifetime: any; refreshTokenLifetime: any }, grantTypes: { [x: string]: any }, accessTokenLifetime: any, refreshTokenLifetime: any, model: any, alwaysIssueNewRefreshToken: any) => {
  const grantType = req.body.grant_type
  if (!grantType) throw new InvalidRequestError('Missing Parameter: `grant_type`')
  if (!verifier.isUnicode(grantType) && !verifier.isUri(grantType)) throw new InvalidRequestError('Invalid Parameter: `grant_type` is either not unicode or a properly formed url.')
  const grantHandler = grantTypes[grantType]
  if (!grantHandler) throw new UnsupportedGrantTypeError(grantType)
  if (!client.grants.includes(grantType)) throw new InvalidClientError('`grant_type` is not valid for this client')

  const aTokenLife = client.accessTokenLifetime || accessTokenLifetime
  const rTokenLife = client.refreshTokenLifetime || refreshTokenLifetime
  return await grantHandler(req, client, {
    accessTokenLifetime: aTokenLife,
    refreshTokenLifetime: rTokenLife,
    model,
    alwaysIssueNewRefreshToken,
  })
}
