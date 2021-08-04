import shared from '../shared'

const saveAndValidateToken = async (user: any, client: any, authorizationCode: any, scope: any, model: { saveToken: (arg0: { scope: any; authorizationCode: any; accessToken: any; refreshToken: any; accessTokenExpiresAt: Date; refreshTokenExpiresAt: Date }, arg1: any, arg2: any) => any }, accessLifetime: number, refreshLifetime: number) => {
  const data = { client, user, scope, model }
  const [
    validScope,
    accessToken,
    refreshToken,
    accessTokenExpiresAt,
    refreshTokenExpiresAt,
  ] = await Promise.all([
    shared.validateScope(data),
    shared.generateAccessToken(data),
    shared.generateRefreshToken(data),
    shared.getAccessTokenExpiresAt(accessLifetime),
    shared.getRefreshTokenExpiresAt(refreshLifetime),
  ])
  const token = {
    scope: validScope,
    authorizationCode,
    accessToken,
    refreshToken,
    accessTokenExpiresAt,
    refreshTokenExpiresAt,
  }
  return await model.saveToken(token, client, user)
}

export default saveAndValidateToken
