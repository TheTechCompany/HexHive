import { TextInput, Box, Button } from 'grommet';
import React from 'react';
import * as Icons from 'grommet-icons'

export interface EnumSelectorProps {
    value?: string[];
    onChange?: (value: string[]) => void;
}  


const EnumInput = (props: any) =>  <Box direction="row" align="center">
    <TextInput 
        autoFocus
        onKeyDown={(e) => {
            if(e.key == 'Enter'){
                props.onAdd()
            }
        }} value={props.value} onChange={(e) => props.onChange(e.target.value)} /> <Button onClick={props.onRemove} icon={<Icons.Close size="small" />}/>
</Box>

export const EnumSelector : React.FC<EnumSelectorProps> = (props) => {
    const addItem = () => {
        let s = props.value?.slice() || []
        s.push("")
        props.onChange?.(s)
    }
    return (
        <Box
            pad={{top: 'small'}}
            border={{side: 'top', size: 'small'}}
            gap="small" direction="column">
            {props.value?.map((x, ix) => (
                <EnumInput
                    value={x}
                    onAdd={addItem}
                    onRemove={() => {
                        let s = props.value?.slice() || []
                        s.splice(ix, 1)
                        props.onChange?.(s)
                    }}
                    onChange={(e: string) => {
                        let s = props.value?.slice() || []
                        s[ix] = e;
                        props.onChange?.(s)
                    }} />
            ))}
            <Button onClick={addItem} label="Add item"></Button>
        </Box>
    )
}