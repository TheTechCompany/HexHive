export const updateSuccessResponse = (res: { body: any; set: (arg0: string, arg1: string) => void }, tokenType: any) => {
  res.body = tokenType
  res.set('Cache-Control', 'no-store')
  res.set('Pragma', 'no-cache')
}
