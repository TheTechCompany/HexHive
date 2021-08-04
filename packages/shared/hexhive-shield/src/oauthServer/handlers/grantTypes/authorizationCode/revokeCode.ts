import {
  InvalidGrantError,
} from '../../../errors'

export const revokeCode = async (code: any, { revokeAuthorizationCode }: any) => {
  const status = await revokeAuthorizationCode(code)
  if (!status) throw new InvalidGrantError('Authorization Code is Invalid')
  return code
}

