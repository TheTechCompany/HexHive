import { MissingArgumentError } from '../../errors'
import url from 'url'

export const responseTypes = {
  code: (redirectUri: string, code: string | string[]) => {
    if (!code) throw new MissingArgumentError('code')
    if (!redirectUri) throw new MissingArgumentError('redirectUri')
    const uri = url.parse(redirectUri, true)
    uri.query.code = code
    uri.search = null
    return uri
  },
}
