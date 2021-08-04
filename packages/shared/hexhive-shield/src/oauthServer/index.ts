import {AuthenticationHandler as AuthenticateHandler} from './handlers/authentication'
import {authorizeHandler as AuthorizeHandler} from './handlers/authorization'
import {tokenHandler as TokenHandler} from './handlers/token'

import verifyOptions from './verifier/options'

export class OAuth {
  options: { model: any; scope: boolean; addAcceptedScopesHeader: boolean; addAuthorizedScopesHeader: boolean; allowBearerTokensInQueryString: boolean; allowEmptyState: boolean; authorizationCodeLifetime: number; accessTokenLifetime: number; refreshTokenLifetime: number; allowExtendedTokenAttributes: boolean; requireClientAuthentication: { authorizationCode: boolean; password: boolean; refreshToken: boolean }; alwaysIssueNewRefreshToken: boolean }
  constructor({
    model,
    scope = false,
    // Authenticate Default Options
    addAcceptedScopesHeader = true,
    addAuthorizedScopesHeader = true,
    allowBearerTokensInQueryString = false,
    // Authorization Default Options
    allowEmptyState = false,
    authorizationCodeLifetime = 5 * 60,
    // Token Default Options
    accessTokenLifetime = 60 * 60,
    refreshTokenLifetime = 60 * 60 * 24 * 14,
    allowExtendedTokenAttributes = false,
    requireClientAuthentication = {
      authorizationCode: true,
      password: true,
      refreshToken: true,
    },
    alwaysIssueNewRefreshToken = true,
    ...rest
  }: any) {
    this.options = {
      model,
      scope,
      addAcceptedScopesHeader,
      addAuthorizedScopesHeader,
      allowBearerTokensInQueryString,
      allowEmptyState,
      authorizationCodeLifetime,
      accessTokenLifetime,
      refreshTokenLifetime,
      allowExtendedTokenAttributes,
      requireClientAuthentication,
      alwaysIssueNewRefreshToken,
      ...rest
    }
  }

  authenticate(req: any, res: any, authenticateOptions: any) {
    const options = {
      ...this.options,
      ...authenticateOptions,
    }
    verifyOptions.authentication(options)
    return AuthenticateHandler(req, res, options)
  }

  authorize(req: any, res: any, authorizeOptions: any) {
    const options = {
      ...this.options,
      ...authorizeOptions,
    }
    verifyOptions.authorization(options)
    return AuthorizeHandler(req, res, options)
  }

  token(req: any, res: any, tokenOptions: any) {
    const options = {
      ...this.options,
      ...tokenOptions,
    }
    verifyOptions.token(options)
    return TokenHandler(req, res, options)
  }
}

import Request from './request'
import Response from './response'
import * as Errors from './errors'

export {
  OAuth as Server,
  Errors,
  Response,
  Request
}
