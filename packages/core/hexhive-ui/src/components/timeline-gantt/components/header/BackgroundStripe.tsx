import { Box } from "grommet"
import React from "react"
export const BackgroundStripe = (props: any) => {
    return (
        <Box 
            border={props.border}
            background={props.background}
            style={{
                position: 'absolute', 
                left: props.left, 
                height: '100%', 
                width: `${props.width}px`
            }}></Box>
    )
}