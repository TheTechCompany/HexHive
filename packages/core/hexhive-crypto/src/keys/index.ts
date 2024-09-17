import NodeRSA from 'node-rsa';

export const generateKey = (bytes: number) => {
    return new NodeRSA({b: bytes});
}

export const fromKey = (key: string) => {
    return new NodeRSA(key)
}