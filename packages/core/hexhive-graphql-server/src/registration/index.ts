import { GraphResource } from "..";
import NodeRSA from 'node-rsa'

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

        key = new NodeRSA({b: 512});

        console.log(key.exportKey('private'))
    }else{
        key = new NodeRSA(PRIVATE_KEY || '')
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

        const answerText = key.decrypt(resp.challenge, 'utf8')

        const blank = new NodeRSA().importKey(resp.publicKey, 'public');

        const answer = blank.encrypt(answerText, 'base64')

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
        }).then((r) => r.json());

        if(challengeAnswerResp.success){
            console.log("Authorised to gateway!")
            console.log("Application available with the slug below:")
            console.log(challengeAnswerResp.result?.slug)
        }else{
            console.log(challengeAnswerResp.error)
        }
    }

}

// (async () => {
//     await registerEndpoint({
//         host: 'http://localhost:7000/register-endpoint'
//     }, {
//         name: 'test-app',
//         slug: 'app',
//         backend_url: 'http://localhost:7003/graphql',
//         entrypoint: 'http://localhost:8504/hivecommand-app-frontend.js',
//         // port: 7003,
//         resources: [{name: 'Resource', actions: []}]
//      })

// })();