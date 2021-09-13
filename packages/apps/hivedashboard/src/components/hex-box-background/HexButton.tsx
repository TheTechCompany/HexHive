import { BaseStyle } from '@hexhive/styles';
import { Box, Text } from 'grommet';
import React from 'react';
import { Hexagon } from './Hexagon';
import { HexagonImage } from './HexagonImage';
import { HexBox } from './HexBox';

export const HexButton = (props: any) => {
    console.log(props.top)

    const HEX_SIZE = props.size || 3;

    const TOP_MULTIPLIER = HEX_SIZE * 1.05;
    const WIDTH_MULTIPLIER = HEX_SIZE * 1.2;
    const ROW_OFFSET = HEX_SIZE * 0.6;

    return (
        <HexagonImage
            onClick={props.onClick || (() => { console.log("Click") })}
            size={HEX_SIZE + 1} 
            top={(props.top * TOP_MULTIPLIER) - 0.8} 
            left={-0.8 + (props.left * WIDTH_MULTIPLIER + (props.top % 2 == 0 ? ROW_OFFSET : 0))} 
            color={BaseStyle.global.colors['neutral-1']}>
            {/* <Text weight="bold" color="neutral-4">{props.text}</Text> */}
            {props.logo}
            TEXT
        </HexagonImage>

    );
}   