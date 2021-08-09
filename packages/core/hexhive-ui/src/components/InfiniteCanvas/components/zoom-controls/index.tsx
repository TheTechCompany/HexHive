import * as Icons from 'grommet-icons'
import { Box, Button } from 'grommet'
import React, { useContext } from 'react';
import styled from 'styled-components'
import { InfiniteCanvasContext } from '../../context/context';

export interface ZoomControlProps{
    style?: any;
    
    anchor?: {
        vertical?: string,
        horizontal?: string;
    }
    className?: string;
}

export const BaseZoomControls : React.FC<ZoomControlProps> = (props) => {
    const {changeZoom} = useContext(InfiniteCanvasContext)

    return (
        <Box 
            round="xsmall"
            background="white"
            elevation="small"
            className={props.className} 
            style={{...props.style, display: 'flex', flexDirection: 'column'}}>
            <Button 
                style={{padding: 0, paddingTop: 8, paddingBottom: 8, textAlign: 'center'}}
                icon={<Icons.Add/>}
                onClick={() => changeZoom?.(-1)}/>
                
            <Button 
                style={{padding: 0, paddingTop: 8, paddingBottom: 8, textAlign: 'center'}}
                icon={<Icons.Subtract />}
                onClick={() => changeZoom?.(1)} />
             
        </Box>
    )
}

export const ZoomControls = styled(BaseZoomControls)`
    width: 36px;
    position: absolute;
    top: ${p => p.anchor?.vertical == 'top' ? '8px': 'unset'};
    bottom: ${p => p.anchor?.vertical == 'bottom' ? '8px' : 'unset'};
    left: ${p => p.anchor?.horizontal == 'left' ? '8px': 'unset'};
    right: ${p => p.anchor?.horizontal == 'right' ? '8px' : 'unset'};


    .MuiButton-root{
        padding: 6px 8px;
        min-width: 36px;
        max-width: 36px;
    }
`