import { Box } from 'grommet';
import React from 'react'
import styled from 'styled-components'
import { Tendril } from './Tendril';
export interface FooterProps {
    className?: string;
}

export const BaseFooter : React.FC<FooterProps> = (props) => {
    const Tendrils = Array.from(new Array(21)).map((x, ix) => ix)

    return (
        <Box justify="center" className={props.className} pad={{left: "5vw", right: '5vw'}} direction="row">
            <Box direction="row" align="end" flex justify="evenly">
            {Tendrils.map((x, ix) => (
                <Tendril 
                    height={ix % 2 ? '50%' : '90%'}
                    style={{
                        bottom: 0
                    }} />
            ))}
            </Box>
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

animation: fadeInAnimation ease-in 1s; 
animation-iteration-count: 1;
animation-fill-mode: forwards;
transition: height 1s ease-in;

height: 100px;
width: 100%;
position: absolute;
bottom: -20px;
right: 0;
left: 0;

    .tendril {
        position: absolute;
        height: 100%;
        background: green;
        width: 10px;
    }
`