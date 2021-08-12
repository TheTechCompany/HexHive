import React, { useMemo } from 'react';
import { BaseStyle } from 'shared/hexhive-styles/src/base';
import styled from 'styled-components';
import { HexBox } from './HexBox';
import useResizeAware from 'react-resize-aware';
import { HexButton } from './HexButton';
const HexagonGrid = require('react-hexagon-grid').default;

const BaseBoxBackground = (props: any) => {
    const [ resizeListener, sizes ] = useResizeAware();

    const HEX_SIZE = 4;

    const MAX_WIDTH = Math.floor((sizes.width || 100) / (60 * (HEX_SIZE / 3)));
    const MAX_HEIGHT = Math.floor((sizes.height || 100) / (50 * (HEX_SIZE / 3)));


    const Cubes = useMemo(() => {

        return Array.from(new Array(MAX_WIDTH * MAX_HEIGHT)).map((x, ix) => ix)
    }, [sizes.width, sizes.height])

    const getBoxPosition = (ix: number) => {
        let row = Math.floor( ix / MAX_WIDTH )
        
        console.log(ix % MAX_WIDTH, ix)
        let left = ((ix % MAX_WIDTH) * (HEX_SIZE * 1.4)) + ((row % 2 == 0) ? (HEX_SIZE * 0.7): 0 )
        let top = ((HEX_SIZE * 1.2) * row)

        return {left, top}
    }

    const BUTTON_SIZE = 5;

    let HALF_WIDTH = Math.floor(MAX_WIDTH / 2)
    let HALF_HEIGHT = Math.floor(MAX_HEIGHT / 2)
    return (
        <div className={props.className}>
       
            <div className="container">

            <div className="action-container">
          
            <HexButton size={HEX_SIZE} left={HALF_WIDTH + 2} top={HALF_HEIGHT} />

            <HexButton  size={HEX_SIZE} left={HALF_WIDTH + 1} top={HALF_HEIGHT} />
            <HexButton  size={HEX_SIZE} left={HALF_WIDTH + 2} top={HALF_HEIGHT + 1} />

                <HexButton size={HEX_SIZE} left={HALF_WIDTH} top={HALF_HEIGHT} />
                <HexButton size={HEX_SIZE} left={HALF_WIDTH - 1} top={HALF_HEIGHT} />
                <HexButton size={HEX_SIZE} left={HALF_WIDTH - 2} top={HALF_HEIGHT} />

            </div>           

            {resizeListener}
                {Cubes.map((x, ix) => (
                    <HexBox size={HEX_SIZE} {...getBoxPosition(ix)} />
                ))}
            </div>
        </div>
    );
}

export const HexBoxBackground = styled(BaseBoxBackground)`

position: absolute;
z-index: 0;
top: 0;
right: 0;
left: 0;
bottom: 0;
padding-top: 20vh;
padding-bottom: 20vh;
padding-left: 15vw;
padding-right: 15vw;


.action-container {
    -webkit-transform-style: preserve-3d;

    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 12;
}

.container {
    
    position: relative;
    height: 100%;
    width: 100%;
}


`

/*
box-shadow: 0 0 0 .1em hsla(0,0%,0%,.2);

background-color: hsla(0,0%,0%,.1);
background-image: -webkit-linear-gradient(hsla(0,0%,0%,.1) 2.5%, transparent 2.5%, transparent 97.5%, hsla(0,0%,0%,.1) 97.5%),
                  -webkit-linear-gradient(left, hsla(0,0%,0%,.1) 2.5%, transparent 2.5%, transparent 97.5%, hsla(0,0%,0%,.1) 97.5%);

*/