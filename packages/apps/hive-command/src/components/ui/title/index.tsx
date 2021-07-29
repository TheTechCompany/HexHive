import React, { useState } from 'react';

import { Box, Button, Heading, TextInput } from 'grommet';
import * as Icons from 'grommet-icons';
import { useEffect } from 'react';

export interface TitleProps {
    title?: string;
    placeholder?: string;
    onChange?: (title: string) => void;
}

export const Title : React.FC<TitleProps> = (props) => {
    const [isEditing, setEditing ] = useState<boolean>(false)

    useEffect(() => {
        if(props.title){
            if( props.title?.length < 1){ setEditing(true) }
        }
    }, [props.title])

    return (
        <Box 
            width="medium"
            direction="row"
            pad="none"
            onFocusCapture={() => setEditing(true)}
            onBlurCapture={() => setEditing(false)}
            onClick={() => setEditing(true)}>
            {isEditing && props.onChange ? (
                <>
                <TextInput 
                    autoFocus
                    value={props.title}
                    onChange={(e) => props.onChange?.(e.target.value)}
                    onKeyDown={(e) => {if(e.code == 'Enter' || e.code == 'Escape'){ (e.target as HTMLElement).blur(); setEditing(false);}}}
                    plain
                    size="small"
                    placeholder={props.placeholder || "Enter title"} />
                </>
            ) : 
            <Heading 
                level='6'
                margin={{
                    left: "small",
                    vertical: 'small'
                }}>{props.title}</Heading>}
        </Box>
    )
}