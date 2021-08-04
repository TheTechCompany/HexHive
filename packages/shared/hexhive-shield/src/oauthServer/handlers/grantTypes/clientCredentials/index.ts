import { MissingArgumentError, InvalidGrantError } from '../../../errors'
import shared from '../shared'

const save = async (user: any, client: any, providedScope: any, model: { saveToken: (arg0: { scope: any; accessToken: any; accessTokenExpiresAt: Date }, arg1: any, arg2: any) => any }, accessTokenLifetime: number) => {
  const data = { user, client, scope: providedScope, model}
  const [
    scope,
    accessToken,
    accessTokenExpiresAt,
  ] = await Promise.all([
    shared.validateScope(data),
    shared.generateAccessToken(data),
    shared.getAccessTokenExpiresAt(accessTokenLifetime),
  ])
  const token = {
    scope,
    accessToken,
    accessTokenExpiresAt,
  }
  return await model.saveToken(token, client, user)
}

export const clientCredentials = async (req: { body: { scope: any } },client: any, {model, accessTokenLifetime}: any) => {
  shared.verify(model)
  const {
    getUserFromClient,
    saveToken,
  } = model
  if (!getUserFromClient) throw new MissingArgumentError('model.getUserFromClient')
  if (!saveToken) throw new MissingArgumentError('model.saveToken')
  const scope = shared.getScope(req)
  const user = await getUserFromClient(client)
  if(!user) throw new InvalidGrantError('User Credentials are invalid')
  return await save(user, client, scope, model, accessTokenLifetime)
}
