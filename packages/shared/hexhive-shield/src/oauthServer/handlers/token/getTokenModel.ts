import { MissingArgumentError, BadArgumentError } from '../../errors'

export const getTokenModel = ({
  accessToken,
  refreshToken,
  client,
  user,
  accessTokenExpiresAt,
  refreshTokenExpiresAt,
  scope,
  ...extendedAttributes
}: any, allowExtendedTokenAttributes = false) => {
  if (!accessToken) throw new MissingArgumentError('token.accessToken from model.saveToken')
  if (!client) throw new MissingArgumentError('token.client from model.saveToken')
  if (!user) throw new MissingArgumentError('token.user from from model.saveToken')
  if (accessTokenExpiresAt && !(accessTokenExpiresAt instanceof Date)) throw new BadArgumentError('accessTokenExpiresAt', 'must be an instance of Date')
  if (refreshTokenExpiresAt && !(refreshTokenExpiresAt instanceof Date)) throw new BadArgumentError('refreshTokenExpiresAt', 'must be an instance of Date')
  let tokenModel: any = {
    accessToken,
    refreshToken,
    client,
    user,
    accessTokenExpiresAt,
    refreshTokenExpiresAt,
    scope,
    customAttributes: allowExtendedTokenAttributes ? extendedAttributes : undefined,
  }
  if (accessTokenExpiresAt) {
    tokenModel.accessTokenLifetime = Math.floor((accessTokenExpiresAt - new Date().getTime()) / 1000)
  }
  return tokenModel
}
