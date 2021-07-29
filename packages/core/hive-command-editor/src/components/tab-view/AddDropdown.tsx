import { Box, Text } from "grommet"
import React from "react"
import * as Icons from 'grommet-icons'
import styled from 'styled-components'

const IconObj : any = Icons;

export interface DropdownProps {
    className?: string;
}

export const BaseAddDropdown : React.FC<DropdownProps> = (props) => {
    return (
        <Box 
            className={props.className}
            style={{overflow: 'hidden'}} round={{corner: 'top-right', size: 'small'}}>
        <Box 
            elevation={"small"}
            round={{corner: 'bottom', size: "small"}}
            background="light-2"
            width="small"
            style={{position:'absolute', maxWidth: 'unset', left: '100%', top: '100%'}}>
            {[{
                label: "Code",
                icon: "Code"
            }, {
                label: "UI",
                icon: "Cpu"
            },{
                icon: "ShareOption",
                label: "IO"
            }, {
                label: "Properties",
                icon: "System"
            }].map((item) => {
                let Icon = IconObj[item.icon]
                console.log(IconObj)
                return (
                <Box
                    className="dropdown-item"
                    direction="row"
                    align="center"
                    pad="small"
                    style={{cursor: 'pointer'}}
                    onClick={() => {}}>
                    <Icon />
                    <Text margin={{left: 'small'}}>
                        {item.label}
                    </Text>
                </Box>
            )})}
        </Box>
        </Box>
    )
}

export const AddDropdown = styled(BaseAddDropdown)`

    .dropdown-item:hover{
        background: #dfdfdf;
    }
`