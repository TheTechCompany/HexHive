export const getTokenType = (tokenModel: { accessToken: any; accessTokenLifetime: any; refreshToken: any; scope: any; customAttributes: any }) => {
  return {
    access_token: tokenModel.accessToken,
    token_type: 'Bearer',
    expires_in: tokenModel.accessTokenLifetime,
    refresh_token: tokenModel.refreshToken,
    scope: tokenModel.scope,
    ...tokenModel.customAttributes,
  }
}
