import axios, { Method } from 'axios';
import {createHmac} from 'crypto';

export interface APIKeyPair {
    key: string,
    secret: string
}

const signRequest = (keyPair: APIKeyPair, method: string, route: string, headers: any) => {
    let signingString = `` //`(request-target): ${method.toLowerCase()} ${route}\n`;
    let signingHeaders = []
    for(var k in headers){
        signingHeaders.push(`${k.toLowerCase()}: ${headers[k]}`)
    }

    signingString += signingHeaders.join(`\n`)

    const sig = createHmac('sha256', keyPair.secret).update(signingString).digest('base64')
    console.log(signingString, sig)
    return sig;
}


const eventRequest = async (keyPair: APIKeyPair, topic: string, event: any) => {
    let target = `/api/events/${topic}`
    let url = `http://localhost:7000${target}`
    let headers = {
        // ...axios.defaults.headers.common,
        Date: new Date().toString()
    }
    let method : Method = "POST"

    const headerKeys = Object.keys(headers).map((x) => x.toLowerCase())

    const signature = signRequest(keyPair, method, target, headers)

    const result = await axios.request({
        url: url,
        method: method,
        headers: {
            ...headers,
            // '(request-target)': target,
            'authorization': `Signature keyId="${keyPair.key}",algorithm="hmac-sha256",signature="${signature}"`
        },
        data: event
    })

    return result;
}

eventRequest({
    key: '123456789',
    secret: 'secret1'
}, 'TOPIC', {
    eventInfo: 'stuff'
}).then((resp) => {
    console.log(resp)
})