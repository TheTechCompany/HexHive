import { useContext } from "react"
import { AuthContext } from "../AuthProvider"

export const useAuth = () => {
    const {activeUser, token} = useContext(AuthContext)

    return {activeUser}
}