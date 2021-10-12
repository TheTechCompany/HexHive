import React, { useContext } from 'react';
import { Button, Box } from 'grommet'
// import { useCanvasControls } from '@thetechcompany/live-ui'
import {Zoomin, Zoomout, Publish, Undo} from '../../assets/zoom'
// import { EditorContext } from '../../context';

export interface ZoomControlProps {

}

export const ZoomControls : React.FC<ZoomControlProps> = (props) => {
    const changeZoom = (ix: number) => {}//useCanvasControls()
    // const { publishChanges } = useContext(EditorContext)

    return (
        <Box 
            justify="center"
            direction="row"
            style={{
                zIndex: 9,
                bottom: '8px',
                left: 0,
                right: 0,
                margin: '0 auto',
                position: 'absolute'
            }}>

            <Box
                elevation="medium"
                pad={{horizontal: 'small', vertical: 'xsmall'}}
                round="medium"
                direction="row"
                 background="brand"
                 border={{color: 'light-1'}}>

            <Undo
                style={{cursor: 'pointer', marginRight: 12}}
                height="30px" /> 


            <Zoomout 
                onClick={() => changeZoom?.(3)}
                style={{cursor: 'pointer'}}
                height="30px" />
            <Zoomin 
                onClick={() => changeZoom?.(-3)}
                style={{cursor: 'pointer'}}
                height="30px"/>

            <Publish
                // onClick={() => publishChanges?.()}
                style={{cursor: 'pointer', marginLeft: 12}}
                height="30px" />
            </Box>
            
        </Box>
    )
}