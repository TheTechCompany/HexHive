import axios, { Method } from 'axios';
import {createHmac} from 'crypto';

export interface APIKeyPair {
    key: string,
    secret: string
}


export interface HiveEventsOpts {
    url?: string;
    keyPair: APIKeyPair
}

export class HiveEvents {

    private url?: string;

    private apiKey: APIKeyPair

    constructor(opts: HiveEventsOpts){
        this.url = opts.url;
        this.apiKey = opts.keyPair
    }


    signRequest(method: string, route: string, headers: any){
        let signingString = `` //`(request-target): ${method.toLowerCase()} ${route}\n`;
        let signingHeaders = []
        for(var k in headers){
            signingHeaders.push(`${k.toLowerCase()}: ${headers[k]}`)
        }

        signingString += signingHeaders.join(`\n`)

        const sig = createHmac('sha256', this.apiKey.secret).update(signingString).digest('base64')
        return sig;
    }


    async eventRequest(topic: string, event: any){
        let target = `/api/events/${topic}`
        let url = `${ this.url || 'http://localhost:7000'}${target}`
        let headers = {
            // ...axios.defaults.headers.common,
            Date: new Date().toString()
        }
        let method : Method = "POST"

        const headerKeys = Object.keys(headers).map((x) => x.toLowerCase())

        const signature = this.signRequest(method, target, headers)

        const result = await axios.request({
            url: url,
            method: method,
            headers: {
                ...headers,
                // '(request-target)': target,
                'authorization': `Signature keyId="${this.apiKey.key}",algorithm="hmac-sha256",signature="${signature}"`
            },
            data: event
        })

        return result;
    }

}
