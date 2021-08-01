import React, { createContext, useEffect, useRef, useState } from "react";
import { AuthClient } from '@hexhive/cas-client'
import { useToken } from "../hooks/useToken";

export const AuthContext = createContext<{token?: string, client?: AuthClient}>({})

export interface AuthProviderProps {
    authorizationServer: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;
}

export const AuthProvider : React.FC<AuthProviderProps> = (props) => {
    
    const [ token, setToken ] = useToken()

    const clientRef = useRef<{client?: AuthClient}>({})

    const [ client, _setClient ] = useState<AuthClient>()

    const setClient = (client: AuthClient) => {
        _setClient(client)
        clientRef.current.client = client;
    }

    useEffect(() => {
        console.log("Setting up", client)

        if(!client){
            const client = new AuthClient({ 
                authorizationServer: props.authorizationServer || 'http://localhost:8090',
                clientId: props.clientId || 'command-hexhive.io',
                clientSecret: props.clientSecret || 'tester',
                redirectUri: props.redirectUri || 'http://localhost:3000/dashboard'
            })

            setClient(client)
        }
    }, [])

    useEffect(() => {

        if(client && !token){
            const search = new URLSearchParams(window.location.search)
            let code = search.get('code') 

            client?.loadToken(code || undefined).then((token) => {
                setToken(token)
                console.log(token)
            })
        }

    }, [client])

    useEffect(() => {
        console.log("user info", token)

        if(token){
            client?.getUserInfo(token).then((info) => {
                console.log("user info", info)
            })
        }
    }, [token])


    return (
        <AuthContext.Provider
            value={{token: token, client: client}}>
                {props.children instanceof Function ? props.children(token) : props.children}
        </AuthContext.Provider>
    )
}