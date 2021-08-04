import {InvalidRequestError} from '../../../errors'
// http://tools.ietf.org/html/rfc6750#section-2.3
export default (token: any, allowBearerTokensInQueryString = false) => {
  if (allowBearerTokensInQueryString) return token
  throw new InvalidRequestError('Do not send bearer tokens in query URLs','Bearer Tokens in Query URLs are insecure and a bad practice. You can override this by adding the allowBearerTokensInQueryString to the options.')
}
