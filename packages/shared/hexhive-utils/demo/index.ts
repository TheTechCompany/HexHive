import { hashCode, moduloHash } from '../src/color'

const input = hashCode('MBR R&D')

const mod = moduloHash(input)

console.log(mod)