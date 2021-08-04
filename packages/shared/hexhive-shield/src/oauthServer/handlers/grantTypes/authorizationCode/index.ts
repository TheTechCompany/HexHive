import { MissingArgumentError, BadArgumentError } from '../../../errors'

import shared from '../shared'

import getCode from './getCode'
import {validateUri} from './validateUri'
import {revokeCode} from './revokeCode'
import saveAndValidateToken from './saveToken'

export const authorizationCode = async (req: any, client: { id: any }, options: { model: any; accessTokenLifetime: any; refreshTokenLifetime: any }) => {
  shared.verify(options)
  const {
    model,
    accessTokenLifetime,
    refreshTokenLifetime
  } = options
  const {
    getAuthorizationCode,
    revokeAuthorizationCode,
    saveToken,
  } = model
  if (!getAuthorizationCode) throw new MissingArgumentError('model.getAuthorizationCode')
  if (!revokeAuthorizationCode) throw new MissingArgumentError('model.revokeAuthorizationCode')
  if (!saveToken) throw new MissingArgumentError('model.saveToken')
  if (!req) throw new MissingArgumentError('request')
  if (!client) throw new MissingArgumentError('client')

  console.log("GET CODE", req.body)
  const code = await getCode(req, client, model)
  await validateUri(req, code)
  await revokeCode(code, model)
  return await saveAndValidateToken(code.user, client, code.authorizationCode, code.scope, model, accessTokenLifetime, refreshTokenLifetime)
}
