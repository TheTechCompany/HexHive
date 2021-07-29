import { useEffect, useState } from "react"

export const useToken = () : [string | undefined, (item: string) => void, () => void] => {
    const [ token, setToken ] = useState<string | undefined>()
    
    useEffect(() => {
        window.addEventListener('storage', (event) => {
            let credentials;
            try{
              credentials = JSON.parse(window.sessionStorage.getItem('CREDENTIALS_TOKEN') || '')
            }catch(e){

            }
            switch(event.key){
                case 'REQUESTING_SHARED_CREDENTIALS':
                    window.localStorage.setItem('CREDENTIALS_SHARING', JSON.stringify({ token: token }))
                    window.localStorage.removeItem('CREDENTIALS_SHARING')
                    break;
                case 'CREDENTIALS_SHARING':
                    if(event.newValue) window.sessionStorage.setItem('CREDENTIALS_TOKEN', event.newValue || '')
                    if(credentials) setToken(credentials?.token || undefined)
                    break;
                case 'CREDENTIALS_FLUSH':
                    window.sessionStorage.removeItem('CREDENTIALS_TOKEN')
                    break;
            }
        })

        window.localStorage.setItem('REQUESTING_SHARED_CREDENTIALS', Date.now().toString())
        window.localStorage.removeItem('REQUESTING_SHARED_CREDENTIALS')

    }, [])

    const onLogout = () => {
        window.localStorage.setItem('CREDENTIALS_FLUSH', Date.now().toString())
        window.localStorage.removeItem('CREDENTIALS_FLUSH')
    }

    const onUpdate = (token: string) => {
        console.log("Update token")
        setToken(token)
        window.sessionStorage.setItem('CREDENTIALS_TOKEN', token || '')
        window.localStorage.setItem('CREDENTIALS_SHARING', JSON.stringify({ token: token }))
        window.localStorage.removeItem('CREDENTIALS_SHARING')
    }

    return [token, onUpdate, onLogout]
}