import React, { createContext, useEffect, useRef, useState } from "react";
import { AuthClient } from '@hexhive/cas-client'

export const AuthContext = createContext<{client?: AuthClient}>({})

export const AuthProvider : React.FC<any> = (props) => {
    
    const clientRef = useRef<{client?: AuthClient}>({})

    const [ client, _setClient ] = useState<AuthClient>()

    const setClient = (client: AuthClient) => {
        _setClient(client)
        clientRef.current.client = client;
    }

    useEffect(() => {
        console.log("Setting up", client)
        if(!client){
            const client = new AuthClient({ authorizationServer: 'http://localhost:8090',
            authorizationUri: 'http://localhost:8090/oauth/authorize',
            clientId: 'command-hexhive.io',
            clientSecret: 'tester',
            redirectUri: 'http://localhost:3000/dashboard'})

            setClient(client)
        }
    }, [])

    console.log("AUth provided");
    
    return (
        <AuthContext.Provider
            value={{client: client}}>
                {props.children}
        </AuthContext.Provider>
    )
}