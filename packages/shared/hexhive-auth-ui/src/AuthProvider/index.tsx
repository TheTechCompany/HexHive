import React, { createContext, useEffect, useRef, useState } from "react";
import { useToken } from "../hooks/useToken";

export const AuthContext = createContext<{activeUser?: {id?: string, name?: string, email?: string}, token?: string}>({})

export interface AuthProviderProps {
    authorizationServer: string; //baseurl for /login
    returnTo: string; //return to section in app
}

export const AuthProvider : React.FC<AuthProviderProps> = (props) => {
    
    const [ activeUser, setActiveUser ] = useState<{sub?: string, name?: string, email?: string, organisation?: string}>()

    const [ token, setToken ] = useToken()

    useEffect(() => {
        if(!activeUser?.sub){
            getUser().then((user) => {
                if(user.sub){
                    setActiveUser(user)
                }else{
                    signIn();
                }
            }).catch((err) => {
                signIn();
            })
        }else{
            console.log("Has user")
        }
            // signIn();
        
    }, [activeUser])

    const getUser = () => {
        return fetch(`${props.authorizationServer}/me`, {
            credentials: 'include'
        }).then((r) => r.json())
    }   

    const signIn = () => {//?returnTo=${props.returnTo}
        let url = `${props.authorizationServer}/login`
        console.log("RETURN TO", props.returnTo)
        if(props.returnTo){
            console.log("RETURN")
            url += `?returnTo=${props.returnTo}`
        }
        window.location.href = url;
    }


    return (
        <AuthContext.Provider
            value={{
                token: token, 
                activeUser: activeUser
            }}>
                {props.children instanceof Function ? props.children(activeUser) : props.children}
        </AuthContext.Provider>
    )
}