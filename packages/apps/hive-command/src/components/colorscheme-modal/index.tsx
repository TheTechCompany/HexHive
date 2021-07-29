import React, { useEffect, useState } from 'react';
import { Layer, Box, Text, TextInput } from 'grommet'

export interface ColorschemeModalProps {
    open?: boolean;

    theme?: any;
    setTheme?: (theme: any) => void;
}

export const ColorschemeModal : React.FC<ColorschemeModalProps> = (props) => {

    const [ open, setOpen ] = useState<boolean>(false)

    
    const keydown = (e: KeyboardEvent) => {
        if(e.shiftKey && e.key == "G"){
            setOpen(true)
        }

        if(e.key == "Escape"){
            setOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', keydown)

        return () => {
            window.removeEventListener('keydown', keydown)
        }
    }, [])

    const changeGlobalColor = (color_key: string, color_value: string) => {
        props.setTheme?.({
            ...props.theme,
            global: {
                ...props.theme.global,
                colors: {
                    ...props.theme.global.colors,
                    [color_key]: color_value
                }
            }
        })
    }

    const color_keys = [
            "brand", 
            "dark-1", 
            "dark-2", 
            "light-1", 
            "light-2",
            "neutral-1",
            "neutral-2",
            "accent-1", 
            "accent-2"]

    return open ? (
        <Layer
            onClickOutside={() => setOpen(false)}
             modal={false}>
            <Box
                overflow="scroll"
                background="#dfdfdf"
                 pad="small">
                {color_keys.map((key) => (
                <Box
                    margin="4px"
                    pad="small"
                    height="43px"
                    border={{side: 'bottom', size: 'small'}}
                    align="center"
                    direction="row">
                    <Text style={{width: '200px'}}>{key}</Text>
                    <TextInput
                    placeholder="Brand color" 
                    onChange={(e) => {
                        changeGlobalColor(key, e.target.value)
                    }}
                    value={props.theme?.global.colors?.[key]} />
                </Box>
                ))}
            </Box>
        </Layer>
    ) : null;
}