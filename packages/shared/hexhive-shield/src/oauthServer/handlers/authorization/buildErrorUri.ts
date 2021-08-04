import url from 'url'

export const buildErrorRedirectUri = (redirectUri: string, error: { name: any; message: any }) => {
  let uri : any = url.parse(redirectUri)
  uri.query = { error: error.name, error_description: error.message }
  return uri
}
