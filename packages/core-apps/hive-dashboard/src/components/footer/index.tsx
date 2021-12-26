import { Box } from 'grommet';
import React from 'react'
import { Nodewires } from '../../assets';
import styled from 'styled-components'
import { Tendril } from './Tendril';
export interface FooterProps {
    className?: string;
}

export const BaseFooter : React.FC<FooterProps> = (props) => {
    const Tendrils = Array.from(new Array(21)).map((x, ix) => ix)

    return (
        <Box 
            justify="center" 
            className={props.className} 
            pad={{left: "5vw", right: '5vw'}} 
            direction="row">
            <Nodewires className="wire" style={{height: '180%', transform: 'translateY(-50%)'}} />
            <Box className="grass" direction="row" align="end" flex justify="evenly">
            {Tendrils.map((x, ix) => (
                <Tendril 
                    height={ix % 2 ? '50%' : '90%'}
                    style={{
                        bottom: 0
                    }} />
            ))}
            </Box>
            <Nodewires  className="wire" style={{height: '180%', transform: 'translateY(-50%) scaleX(-1)'}} />
        </Box>
    );
}

export const Footer = styled(BaseFooter)`

@keyframes fadeInAnimation {
    0% {
        height: 0px;
        opacity: 0;
    }
    100% {
        height: 100px;
        opacity: 1;
     }
}

@keyframes drawInAnimation {
    0% {
        clip-path: inset(100% 0 0 0);
    }
    100% {
        clip-path: inset(0);
     }
}


.wire{
    transition: clip-path 1s;
    animation: drawInAnimation ease-in 1s; 
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

height: 100px;
position: absolute;
bottom: -20px;
width: 100%;

.grass {

    animation: fadeInAnimation ease-in 1s; 
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    transition: height 1s ease-in;
    width: 80%;
    height: 100px;

    bottom: 0;
    right: 10%;
    left: 10%;


}


    .tendril {
        position: absolute;
        height: 100%;
        background: green;
        width: 10px;
    }
`