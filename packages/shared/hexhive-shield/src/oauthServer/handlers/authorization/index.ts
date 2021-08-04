import { AccessDeniedError } from '../../errors'

import {buildErrorRedirectUri} from './buildErrorUri'
import {generateAuthorizationCode} from './generateAuthorizationCode'
import {getExpiresAt} from './getExpiresAt'
import {getRedirectUri} from './getRedirectUri'
import {getScope} from './getScope'
import {getState} from './getState'
import {getUriBuilderFromResponseType} from './getUriBuilderFromResponseType'
import {getValidClient} from './getValidClient'
import {getValidUser} from './getValidUser'
import {updateResponse} from './updateResponse'

export const authorizeHandler = async (req: any, res: any, {
  model: {
    getClient,
    saveAuthorizationCode,
  },
  authorizationCodeLifetime,
  allowEmptyState,
  authenticateHandler,
}: any) => {
  if (req.query.allowed === 'false') throw new AccessDeniedError('Access Denied: User denied access to application')
  const [expiresAt, client, user] = await Promise.all([
    getExpiresAt(authorizationCodeLifetime),
    getValidClient(req, getClient),
    getValidUser(req,res, authenticateHandler),
  ])
  const uri = getRedirectUri(req, client)
  const state = getState(req, allowEmptyState)
  let code
  try {
    const scope = getScope(req)
    const authorizationCode = await generateAuthorizationCode(client, user, scope)
    code = await saveAuthorizationCode({
      authorizationCode,
      expiresAt,
      scope,
      redirectUri: uri,
    }, client, user)
    const buildSuccessRedirectUri = getUriBuilderFromResponseType(req)
    const redirectUri = buildSuccessRedirectUri(uri, code.authorizationCode)
    updateResponse(res, redirectUri, state)
  } catch(e) {
    const redirectUri = buildErrorRedirectUri(uri, e)
    updateResponse(res,redirectUri, state)
    throw e
  }
  return code
}
