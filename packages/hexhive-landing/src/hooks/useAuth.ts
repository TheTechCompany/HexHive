import { AuthClient, AuthClientOpts } from "@hexhive/cas-client"
import { useEffect, useState } from "react"

export const useAuth = (opts: AuthClientOpts) => {
    const [ client, setClient ] = useState<AuthClient>()

    useEffect(() => {

        if(!client){
            console.log("Setting upo auth client");
            setClient(new AuthClient({
                authorizationServer: opts.authorizationServer || 'http://localhost:8090',
                clientId: opts.clientId || 'command-hexhive.io',
                clientSecret: opts.clientSecret || 'tester',
                redirectUri: opts.redirectUri || 'http://localhost:3000/dashboard'
            }))
        }
    }, [])

    return client;
}