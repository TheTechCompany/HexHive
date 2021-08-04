import { InvalidRequestError } from '../../errors'
import verifier from '../../verifier'

export const getState = (req: { query: any; body: any }, allowEmptyState: any) => {
  const state = req.body.state || req.query.state
  if (!allowEmptyState && !state) throw new InvalidRequestError('state is required in the request query or body.')
  if (!verifier.isPrintableUnicode(state)) throw new InvalidRequestError('state must consist of printable unicode characters.')
  return state
}
