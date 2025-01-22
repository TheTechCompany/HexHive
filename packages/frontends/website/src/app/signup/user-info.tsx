import { TextField } from "@mui/material"

export const UserInfo = () => {
    return (
        <>
            <TextField size="small" label="Name" />
            <TextField size="small" label="E-Mail" />
            <TextField size="small" label="Password" type="password" />
            <TextField size="small" label="Confirm Password" type="password" />
        </>
    )
}