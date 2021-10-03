import { useContext } from "react"
import { AuthContext } from "../AuthProvider"

export const useAuth = () => {
    const {activeUser, token} = useContext(AuthContext)
    
    if(activeUser && !activeUser?.id) activeUser.id = activeUser?.sub;
    return {activeUser}
}