export const captureErrorTrace = (errInstance: object, errClass: Function | undefined) => {
  Error.captureStackTrace(errInstance, errClass)
}

export class OAuthError extends Error {
  code: number
  status?: number
  statusCode?: number
  extendedMessage?: any
  constructor(err: Error | string, properties: {code: number, name: string, extendedMessage?: string} = { code: 500, name: 'OAuthError', extendedMessage: '' }) {
    const msg = err instanceof Error ? err.message : err
    super(msg.toString())
    Object.assign(this, properties)
    this.code = this.status || this.statusCode || properties.code
    if (!this.extendedMessage) this.extendedMessage = msg
    captureErrorTrace(this, OAuthError)
  }

  getDebugInfo() { return this.extendedMessage }
}

export class AccessDeniedError extends OAuthError {
  constructor(reasonForDenial: string, extendedMessage?: any) {
    super('AccessDeniedError: ' + reasonForDenial, { code: 400, name: 'access_denied', extendedMessage })
    captureErrorTrace(this, AccessDeniedError)
  }
}

export class InsufficientScopeError extends OAuthError {
  constructor(reasonForDenial: string, extendedMessage?: string) {
    super('InsufficientScopeError: ' + reasonForDenial, { code: 403, name: 'insufficient_scope', extendedMessage })
    captureErrorTrace(this, InsufficientScopeError)
  }
}

export class ServerError extends OAuthError {
  constructor(reasonForDenial: string, extendedMessage?: any) {
    super('ServerError: ' + reasonForDenial, { code: 500, name: 'server_error', extendedMessage })
    captureErrorTrace(this, ServerError)
  }
}

export class InvalidArgumentError extends ServerError {
  constructor(reasonForDenial: string, extendedMessage?: any) {
    super('InvalidArgumentError: ' + reasonForDenial, { code: 500, name: 'invalid_argument', extendedMessage })
    captureErrorTrace(this, InvalidArgumentError)
  }
}

export class MissingArgumentError extends InvalidArgumentError {
  constructor(missingArgument: string) {
    super(`'${missingArgument}' is not present.`, `Please refer to the documentation for '${missingArgument}'.`)
    captureErrorTrace(this, MissingArgumentError)
  }
}

export class BadArgumentError extends InvalidArgumentError {
  constructor(badArgument: string, reasonBad: string) {
    super(`'${badArgument}' is not valid.`, `${badArgument} is not valid. ${reasonBad}. Please refer to the documentation for '${badArgument}'.`)
    captureErrorTrace(this, BadArgumentError)
  }
}

export class InvalidClientError extends OAuthError {
  constructor(reasonForDenial: string, extendedMessage?: any) {
    super('InvalidClientError: ' + reasonForDenial, { code: 400, name: 'invalid_client', extendedMessage })
    captureErrorTrace(this, InvalidClientError)
  }
}

export class InvalidGrantError extends OAuthError {
  constructor(reasonForDenial: string, extendedMessage?: any) {
    super('InvalidGrantError: ' + reasonForDenial, { code: 400, name: 'invalid_grant', extendedMessage })
    captureErrorTrace(this, InvalidGrantError)
  }
}

export class InvalidRequestError extends OAuthError {
  constructor(reasonForDenial: string, extendedMessage?: any) {
    super('InvalidRequestError: ' + reasonForDenial, { code: 400, name: 'invalid_request', extendedMessage })
    captureErrorTrace(this, InvalidRequestError)
  }
}

export class InvalidScopeError extends OAuthError {
  constructor(reasonForDenial: string, extendedMessage?: any) {
    super('InvalidScopeError: ' + reasonForDenial, { code: 400, name: 'invalid_scope', extendedMessage })
    captureErrorTrace(this, InvalidScopeError)
  }
}

export class InvalidTokenError extends OAuthError {
  constructor(reasonForDenial: string, extendedMessage?: any) {
    super('InvalidTokenError: ' + reasonForDenial, { code: 401, name: 'invalid_token', extendedMessage })
    captureErrorTrace(this, InvalidTokenError)
  }
}

export class UnauthorizedClientError extends OAuthError {
  constructor(reasonForDenial: string, extendedMessage?: any) {
    super('UnauthorizedClientError: ' + reasonForDenial, { code: 400, name: 'unauthorized_client', extendedMessage })
    captureErrorTrace(this, UnauthorizedClientError)
  }
}

export class UnauthorizedRequestError extends OAuthError {
  constructor(reasonForDenial: string, extendedMessage?: any) {
    super('UnauthorizedRequestError: ' + reasonForDenial, { code: 401, name: 'unauthorized_request', extendedMessage })
    captureErrorTrace(this, UnauthorizedRequestError)
  }
}

export class UnsupportedGrantTypeError extends OAuthError {
  constructor(reasonForDenial: string, extendedMessage?: any) {
    super('UnsupportedGrantTypeError: ' + reasonForDenial, { code: 400, name: 'unsupported_grant_type', extendedMessage })
    captureErrorTrace(this, UnsupportedGrantTypeError)
  }
}

export class UnsupportedResponseTypeError extends OAuthError {
  constructor(reasonForDenial: string, extendedMessage?: any) {
    super('UnsupportedResponseTypeError: ' + reasonForDenial, { code: 400, name: 'unsupported_response_type', extendedMessage })
    captureErrorTrace(this, UnsupportedResponseTypeError)
  }
}




