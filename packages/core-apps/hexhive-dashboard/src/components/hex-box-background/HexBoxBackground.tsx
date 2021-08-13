import React, { useMemo } from 'react';
import { BaseStyle } from 'shared/hexhive-styles/src/base';
import styled from 'styled-components';
import { HexBox } from './HexBox';
import useResizeAware from 'react-resize-aware';
import { HexButton } from './HexButton';
const HexagonGrid = require('react-hexagon-grid').default;


const COLORSCHEME = [
    'rgb(113, 114, 137)',
    'rgb(167, 181, 153)',
    'rgb(94, 87, 85)',
    'rgb(209, 185, 169)',
    'rgb(180, 180, 210)'
]

export interface BoxBackgroundProps {
    actions: {path: string, title: string}[]
    onAction: (action: {path: string, title: string}) => void;
    size?: {background: number, actions: number};
    className?: string;
}

const BaseBoxBackground : React.FC<BoxBackgroundProps> = ({
    className,
    onAction,
    size = { background: 3, actions: 6},
    actions
}) => {
    const [ resizeListener, sizes ] = useResizeAware();


    console.log(sizes)
    const MAX_WIDTH = Math.floor((sizes.width || (window.innerWidth / 1.8)) / (60 * (size.background / 3)));
    const MAX_HEIGHT = Math.floor((sizes.height ||( window.innerHeight / 2)) / (50 * (size.background / 3)));


    const Cubes = useMemo(() => {
        return Array.from(new Array(MAX_WIDTH * MAX_HEIGHT)).map((x, ix) => ix)
    }, [sizes.width, sizes.height])

  

    const getBoxPosition = (ix: number) => {
        let row = Math.floor( ix / MAX_WIDTH )
        
        let left = ((ix % MAX_WIDTH) * (size.background * 1.4)) + ((row % 2 == 0) ? (size.background * 0.7): 0 )
        let top = ((size.background * 1.2) * row)

        return {left, top}
    }

    const CubeMap = useMemo(() => {
        return Cubes.map((x, ix) => {
            let color_ix = ix * 3;
            let color1 = COLORSCHEME[color_ix % 5];
            let color2 = COLORSCHEME[(color_ix + 1) % 5];
            let color3 = COLORSCHEME[(color_ix + 2) % 5];

        return (
            <HexBox leftColor={color1} topColor={color2} rightColor={color3} size={size.background} {...getBoxPosition(ix)} />
        )})
    }, [Cubes])

    const BUTTON_SIZE = 5;

    let HALF_WIDTH = Math.floor(MAX_WIDTH / 2)
    let HALF_HEIGHT = Math.floor(MAX_HEIGHT / 2)

    const renderActions = () => {
        let top = (HALF_HEIGHT - 1.74) / (size.actions / size.background);
        let mid = (HALF_WIDTH + 0.28 ) /(size.actions / size.background)

        let action_length = actions.length;

        let action_elements = [];
        for(var i = -(action_length / 2); i < action_length / 2; i++){
            const item = actions[(action_length / 2) + i]
            action_elements.push(
                <HexButton 
                    onClick={() => onAction(item)}
                    top={top}
                    left={mid + i}
                    size={size.actions}
                    text={item.title} />)
        }
        return action_elements;
    }

    return (
        <div className={className}>
       
            <div className="container">

            <div className="action-container">
          
            {renderActions()}
           
            </div>           

            {resizeListener}
            {CubeMap}
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