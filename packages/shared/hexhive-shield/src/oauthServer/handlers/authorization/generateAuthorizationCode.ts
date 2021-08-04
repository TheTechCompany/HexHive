import {generateRandomToken} from '../../utils/token'

export const generateAuthorizationCode = async (client: any, user: any, scope: any, generateAuthorizationCode?: (arg0: any, arg1: any, arg2: any) => any) => {
  if (generateAuthorizationCode) {
    return await generateAuthorizationCode(client, user, scope)
  }
  return await generateRandomToken()
}
