import { Box, Text } from 'grommet';
import React from 'react';
import { HexBox } from './HexBox';


const { Hexagon } = require('tiled-hexagons')

export const HexButton = (props: any) => {
    console.log(props.top)

    const HEX_SIZE = props.size || 3;

    const TOP_MULTIPLIER = HEX_SIZE * 1.45;
    const WIDTH_MULTIPLIER = HEX_SIZE * 1.4;
    const ROW_OFFSET = HEX_SIZE * 0.7;

    return (
        <HexBox
            flatPak 
            onClick={props.onClick || (() => { console.log("Click") })}
            size={HEX_SIZE} 
            top={props.top * TOP_MULTIPLIER} 
            left={props.left * WIDTH_MULTIPLIER + (props.top % 2 == 0 ? ROW_OFFSET : 0)} 
            color="white" >
            {/* <Text weight="bold" color="neutral-4">{props.text}</Text> */}
            {props.logo}
        </HexBox>

    );
}   