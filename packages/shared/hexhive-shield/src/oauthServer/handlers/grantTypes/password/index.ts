import { InvalidRequestError, InvalidGrantError, MissingArgumentError } from '../../../errors'

import verifier from '../../../verifier'


import shared from '../shared'

const getValidUser = async (req: { body: { username: any; password: any } }, getUser: (arg0: any, arg1: any) => any) => {
  const {
    username,
    password,
  } = req.body
  if(!username) throw new InvalidRequestError('Missing Parameter: `username`')
  if(!password) throw new InvalidRequestError('Missing Parameter: `password`')
  if (!verifier.isUnicodeWithoutNewline(username)) throw new InvalidRequestError('Invalid Parameter: `username`.', 'Must be unicode without newline characters.')
  if (!verifier.isUnicodeWithoutNewline(password)) throw new InvalidRequestError('Invalid Parameter: `password`.', 'Must be unicode without newline characters.')
  const user = await getUser(username, password)
  if(!user) throw new InvalidGrantError('User Credentials are invalid')
  return user
}

const save = async (user: any, client: any, providedScope: any, model: { saveToken: (arg0: { scope: any; accessToken: any; refreshToken: any; accessTokenExpiresAt: any; refreshTokenExpiresAt: Date }, arg1: any, arg2: any) => any }, accessCodeLifetime: any, refreshCodeLifetime: number) => {
  const sharedData = {user, client, scope: providedScope, model }
  const [
    scope,
    accessToken,
    refreshToken,
    accessTokenExpiresAt,
    refreshTokenExpiresAt,
  ] = await Promise.all([
    shared.validateScope(sharedData),
    shared.generateAccessToken(sharedData),
    shared.generateRefreshToken(sharedData),
    shared.generateAccessToken(accessCodeLifetime),
    shared.getRefreshTokenExpiresAt(refreshCodeLifetime),
  ])
  const token = {
    scope,
    accessToken,
    refreshToken,
    accessTokenExpiresAt,
    refreshTokenExpiresAt,
  }
  return await model.saveToken(token, client, user)
}

const password = async (req: any, client: any, options: { model: any; accessCodeLifetime: any; refreshCodeLifetime: any }) => {
  shared.verify(options)
  const {
    model,
    accessCodeLifetime,
    refreshCodeLifetime,
  } = options
  const {
    getUser,
    saveToken,
  } = model
  if (!getUser) throw new MissingArgumentError('model.getUser')
  if (!saveToken) throw new MissingArgumentError('model.saveToken')
  const scope = shared.getScope(req)
  const user = await getValidUser(req, getUser)
  return await save(user, client, scope, model, accessCodeLifetime, refreshCodeLifetime)
}

export default password