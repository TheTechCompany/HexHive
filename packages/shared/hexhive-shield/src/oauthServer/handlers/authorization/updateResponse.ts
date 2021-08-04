import url from 'url'

export const updateResponse = (res: { redirect: (arg0: string) => void }, redirectUri: any, state: any) => {
  redirectUri.query = {
    ...redirectUri.query,
    state,
  }
  res.redirect(url.format(redirectUri))
}
