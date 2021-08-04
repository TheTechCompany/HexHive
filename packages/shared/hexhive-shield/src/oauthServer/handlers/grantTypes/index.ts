import {authorizationCode} from './authorizationCode'
import { clientCredentials } from './clientCredentials'
import password from './password'
import { refreshToken } from './refreshToken'

export const basicGrantTypes = {
  authorization_code: authorizationCode,
  client_credentials: clientCredentials,
  password: password,
  refresh_token: refreshToken
}

