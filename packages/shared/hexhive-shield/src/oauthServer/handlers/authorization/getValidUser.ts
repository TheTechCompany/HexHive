import { ServerError } from '../../errors'
export const getValidUser = async (req: any, res: any, authenticateHandler: { handle: (arg0: any, arg1: any) => any }) => {
  if (!authenticateHandler) return {}
  const user = await authenticateHandler.handle(req, res)
  if (!user) throw new ServerError('`authenticateHandler.handle` did not return a non-falsy user object')
  return user
}
