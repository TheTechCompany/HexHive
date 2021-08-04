import { InvalidScopeError } from '../../errors'
import verifier from '../../verifier'

export const getScope = (req: any) => {
  const scope = req.body.scope || req.query.scope
  if (!verifier.isUnicodeWithExclamationSpace(scope)) throw new InvalidScopeError('Scope is not formatted properly')
  return scope
}

