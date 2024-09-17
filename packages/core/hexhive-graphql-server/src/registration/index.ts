import { GraphResource } from "..";
import NodeRSA from 'node-rsa'
import { fromKey, generateKey, answerChallenge, getChallenge } from '@hexhive/crypto'

export const registerEndpoint = async (gateway: {
    host: string,
    secret?: string,
}, endpoint: {
    name: string, 
    slug: string, 
    backend_url?: string, //Location of graphql module
    entrypoint?: string, //Location of single-spa entrypoint
    resources?: GraphResource[]
}) => {
    
    const PRIVATE_KEY = process.env.HEXHIVE_SECRET;
    
    let key;
    if(!PRIVATE_KEY){
        console.error("Put your private key in $HEXHIVE_SECRET so you can access the registered application later")
        console.log("Generating one-time keypair...");

        key = generateKey(512);

        console.log(key.exportKey('private'))
    }else{
        key = fromKey(PRIVATE_KEY || '')
    }

    console.log("Sending registration payload...")
    
    const publicKey = key.exportKey('public')

    const resp = await fetch(gateway.host, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            backend_url: endpoint.backend_url,
            entrypoint: endpoint.entrypoint,
            slug: endpoint.slug,
            name: endpoint.name,
            publicKey,
            resources: endpoint.resources
        })
    }).then((r) => r.json());

    if(resp.challenge){
        
        const challenge = getChallenge(key, resp.challenge)

        const answer = answerChallenge(resp.publicKey, challenge);

        console.log("Responding to challenge...");
        
        const challengeAnswerResp = await fetch(gateway.host + '/challenge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                publicKey,
                answer,
                challengeId: resp.challengeId,
            })
        }).then((r) => r.json()).catch((e) => console.log(e));

        if(challengeAnswerResp.success){
            console.log("Authorised to gateway!")
            console.log("Application available with the slug below:")
            console.log(challengeAnswerResp.result?.slug)
        }else{
            console.log(challengeAnswerResp.error)
        }
    }
}
