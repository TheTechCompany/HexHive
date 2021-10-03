import { BaseStyle } from '@hexhive/styles';
import { Box, Text } from 'grommet';
import React from 'react';
import { Hexagon } from './Hexagon';
import { HexagonBorder } from './HexagonBorder';
import { HexagonBox } from './HexagonBox';
import { HexagonImage } from './HexagonImage';
import { HexBox } from './HexBox';

export interface HexButtonProps {
    onClick: () => void;
    size?: number;
    top: number;
    left: number;

    logo: any;
    text?: string;
    color?: string;
}

export const HexButton : React.FC<HexButtonProps> = (props) => {

    const HEX_SIZE = props.size || 3;

    const TOP_MULTIPLIER = HEX_SIZE * 1.05;
    const WIDTH_MULTIPLIER = HEX_SIZE * 1.2;
    const ROW_OFFSET = HEX_SIZE * 0.6;

    return (
        <HexagonBox
            onClick={props.onClick || (() => { console.log("Click") })}
            size={HEX_SIZE + 1} 
            top={(props.top * TOP_MULTIPLIER) - 0.8} 
            left={-0.8 + (props.left * WIDTH_MULTIPLIER + (props.top % 2 == 0 ? ROW_OFFSET : 0))} 
            color={BaseStyle.global.colors['accent-1']}>
            {/* <Text weight="bold" color="neutral-4">{props.text}</Text> */}
            <Box
                height="100%"
                width="100%"
                direction='column'
                align="center"
                justify="center"
                >
                <Box align="center" justify="center" flex direction="column">
                    {props.logo}
                </Box>
                <Text size="small" style={{fontFamily: "'BebasNeue', sans-serif"}}>{props.text}</Text>
            </Box>
    
        </HexagonBox>

    );
}   