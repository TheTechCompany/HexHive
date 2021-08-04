import {
  InvalidRequestError,
} from '../../../errors'

// http://tools.ietf.org/html/rfc6750#section-2.1
export default (token:string) => {
  const matches = token.match(/Bearer\s(\S+)/)
  if(!matches || matches.length < 2) {
    throw new InvalidRequestError('Malformed authorization header','Authorization header is not formed correctly. Please see the documentation for correct headers')
  }
  return matches[1]
}
