import NodeRSA from "node-rsa"
import { fromKey, generateKey } from '../src/keys'

const testKey = (key: NodeRSA) => {
    return (key.isPrivate())
}

describe("Key generation", () => {

    it('Can generate key', () => {
        const key = generateKey(2048)
        expect(testKey(key)).toBe(true)
    })

    it('Can parse key', () => {
        const baseKey = generateKey(2048)
        const key = fromKey(baseKey.exportKey('private'))
        expect(testKey(key)).toBe(true)
    })
})