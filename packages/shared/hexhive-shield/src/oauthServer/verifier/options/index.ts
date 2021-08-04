import {
  MissingArgumentError,
} from '../../errors'
const notDefinedError = (thing: any) => { throw new MissingArgumentError(thing) }
const scopeAndNotDefinedError = (thing: any) => { throw new MissingArgumentError(`${thing} with a defined scope`) }

function verifyAuthenticateOptions({
  model,
  scope,
  addAcceptedScopesHeader,
  addAuthorizedScopesHeader,
}: any) {
  if (!model) notDefinedError('model')
  const {
    getAccessToken,
    verifyScope,
  } = model
  if (!getAccessToken) notDefinedError('model.getAccessToken')
  if (scope && !addAcceptedScopesHeader) scopeAndNotDefinedError('model.addAcceptedScopesHeader')
  if (scope && !addAuthorizedScopesHeader) scopeAndNotDefinedError('model.addAuthorizedScopesHeader')
  if (scope && !verifyScope) scopeAndNotDefinedError('model.verifyScope')
  return true
}

function verifyAuthorizationOptions({
  model,
  authenticateHandler,
  authorizationCodeLifetime
}: any) {
  if (!model) notDefinedError('model')
  const {
    getClient,
    saveAuthorizationCode,
  } = model
  if (authenticateHandler && !authenticateHandler.handle) notDefinedError('authenticateHandler.handle')
  if (!authorizationCodeLifetime) notDefinedError('authorizationCodeLifetime')
  if (!getClient) notDefinedError('model.getClient')
  if (!saveAuthorizationCode) notDefinedError('model.saveAuthorizationCode')
  return true
}

function verifyTokenOptions({
  model,
  accessTokenLifetime,
  refreshTokenLifetime,
}: any) {
  if (!model) notDefinedError('model')
  const {
    getClient
  } = model
  if (!accessTokenLifetime) notDefinedError('accessTokenLifetime')
  if (!refreshTokenLifetime) notDefinedError('refreshTokenLifetime')
  if (!getClient) notDefinedError('model.getClient')
  return true
}

export default {
  authentication: verifyAuthenticateOptions,
  authorization: verifyAuthorizationOptions,
  token: verifyTokenOptions,
}
