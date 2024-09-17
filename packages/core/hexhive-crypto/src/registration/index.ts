import NodeRSA = require("node-rsa")

//publicKey - newRequest public key
export const createChallenge = (publicKey: string, challengeContent: {}) => {
    const key = new NodeRSA().importKey(publicKey, 'public')
    const challenge = key.encrypt(JSON.stringify(challengeContent), 'base64')
    return challenge;
}

//key - live NodeRSA instance
export const getChallenge = (key: NodeRSA, challengeString: string) => {
    return JSON.parse(key.decrypt(challengeString, 'utf8'))
}

//publicKey - issuer public key
export const answerChallenge = (publicKey: string, answerContent: {}) => {
    const key = new NodeRSA().importKey(publicKey, 'public')
    const answer = key.encrypt(JSON.stringify(answerContent), 'base64')
    return answer;
}   

//key - live NodeRSA instance
export const getAnswer = (key: NodeRSA, answerString: string) => {
    return JSON.parse(key.decrypt(answerString, 'utf8'))
}
