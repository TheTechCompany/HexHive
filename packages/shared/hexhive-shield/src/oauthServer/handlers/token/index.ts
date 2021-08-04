import {
  InvalidRequestError,
} from '../../errors'

import {basicGrantTypes} from '../grantTypes'
import {getValidClient} from './getValidClient'
import {updateErrorResponse} from './updateErrorResponse'
import {handleGrant} from './handleGrant'
import {getTokenModel} from './getTokenModel'
import {getTokenType} from './getTokenType'
import {updateSuccessResponse} from './updateSuccessResponse'

export const tokenHandler = async (req: any ,res: any, {
  accessTokenLifetime,
  refreshTokenLifetime,
  extendedGrantTypes,
  allowExtendedTokenAttributes,
  requireClientAuthentication = {},
  alwaysIssueNewRefreshToken,
  model,
}: any) => {
  const {
    getClient
  } = model
  const grantTypes = {...basicGrantTypes, ...extendedGrantTypes}
  if(req.method !== 'POST') throw new InvalidRequestError('Method MUST be POST')
  if (!req.is('application/x-www-form-urlencoded')) throw new InvalidRequestError('Content must be encoded via the application/x-www-form-urlencoded header')
  let client
  try {
    client = await getValidClient(req, res, getClient, requireClientAuthentication)
  } catch(e) {
    updateErrorResponse(e, res)
    throw e
  }
  const grantData = await handleGrant(req, client, grantTypes, accessTokenLifetime, refreshTokenLifetime, model, alwaysIssueNewRefreshToken)
  const tokenModel = getTokenModel(grantData, allowExtendedTokenAttributes)
  const tokenType = getTokenType(tokenModel)
  updateSuccessResponse(res, tokenType)

  return tokenModel
}
