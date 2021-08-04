import { MissingArgumentError, BadArgumentError, InvalidScopeError } from '../../../errors'

import {generateRandomToken} from '../../../utils/token'

const verify = ({
  accessTokenLifetime,
  model,
}: any) => {
  if (!model) throw new MissingArgumentError('model')
  if (!accessTokenLifetime) throw new MissingArgumentError('accessTokenLifetime')
  return true
}

const generateToken = (key: string) => async ({
  client,
  user,
  scope,
  model: {
    [key]: generator = generateRandomToken,
  },
}: any) => {
  const token = await generator(client, user, scope)
  if (!token) throw new BadArgumentError(key, `falsy generated code. If a custom ${key} function is provided, return a non-falsy value`)
  return token
}

const getExpiresAt = (lifetime: number) => {
  const expires = new Date()
  expires.setSeconds(expires.getSeconds() + lifetime)
  return expires
}

const getScope = (req: { body: { scope: any } }) => {
  const scope = req.body.scope
  //if (!verifier.isUnicodeWithExclamationSpace) throw new InvalidScopeError('Scope is malformed')
  return scope
}

const validateScope = async ({
  user,
  client,
  scope,
  model: {
    validateScope,
  }
}: any) => {
  if(!validateScope) return scope
  const s = await validateScope(user, client, scope)
  if(!s) throw new InvalidScopeError('Requested Scope is invalid')
  return scope
}

export default {
  verify,
  generateAccessToken: generateToken('generateAccessToken'),
  generateRefreshToken: generateToken('generateRefreshToken'),
  getAccessTokenExpiresAt: getExpiresAt,
  getRefreshTokenExpiresAt: getExpiresAt,
  getScope,
  validateScope,
}
