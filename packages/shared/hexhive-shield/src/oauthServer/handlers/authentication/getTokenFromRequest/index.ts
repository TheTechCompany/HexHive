import {
  UnauthorizedRequestError,
  InvalidRequestError,
} from '../../../errors'

// Only one Authentication Method should be used
// https://tools.ietf.org/html/rfc6750#section-2
import fromHeader from './fromHeader'
import fromBody from './fromBody'
import fromQuery from './fromQuery'

export const getTokenFromRequest = (req: any, allowBearerTokensInQueryString: boolean) => {
  const header = req.get('Authorization')
  const query = req.query.access_token
  const body = req.body.access_token

  if (header && query && body) throw new InvalidRequestError('Only one authentication method is allowed', 'Request has multiple authorizations in it (checked header, body, and query). Please only use one.')
  if (header) return fromHeader(header)
  if (query) return fromQuery(query, allowBearerTokensInQueryString)
  if (body) return fromBody(req)

  throw new UnauthorizedRequestError('No authentication given','No authentication given (checked in header, body, and query). Please authenticate with one of those.')
}
