import { createChallenge, answerChallenge, getChallenge } from '../src';

import { generateKey } from '../src';

describe('Challenges', () => {
    it('Can create challenge', () => {
        const newKey = generateKey(512);

        const challenge = createChallenge(newKey.exportKey('public'), {id: 123});
        expect(challenge.length).toBeGreaterThan(0)
    })

    it('Can get challenge', () => {
        const issuerKey = generateKey(512);
        const newKey = generateKey(512);

        const challenge = createChallenge(newKey.exportKey('public'), {id: 123});

        const resp = getChallenge(newKey, challenge)
        expect(resp.id).toBe(123)
    })

    it("Can answer challenge", () => {
        const issuerKey = generateKey(512);

        const answer = answerChallenge(issuerKey.exportKey('public'), {id: 123})
        expect(answer.length).toBeGreaterThan(0)
    })
})