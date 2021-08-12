import { BaseStyle } from '@hexhive/styles';
import React from 'react';
import styled from 'styled-components'

export const BaseHexBox = (props: any) => {
    return (
        <div className={`${props.className}`}>
            <div className={`cube ${props.ix % 2 ? 'even': 'odd'}`}>
            <div className="left-container-wrapper">
                <div className="left-container">
                </div>

</div>
                <div className="right-container-wrapper">
                    <div className="right-container">
                    </div>
                </div>
            </div>
        </div>
    );
}

export const HexBox = styled(BaseHexBox)`

position: absolute;
left: ${p => p.left}em;
top: ${p => p.top}em;
background-size: ${p => p.size || 3}em ${p => p.size || 3}em;
height: ${p => (p.size || 3 )* 2}em;
margin: -3.5em;
width: ${p => (p.size || 3) * 2}em;
-webkit-transform: rotateX(45deg) rotateZ(45deg);
-webkit-transform-style: preserve-3d;
z-index: 1;


.right-container-wrapper, .left-container-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.cube,
.left-container:after,
.right-container:before {
    z-index: -10;
    box-shadow: inset 0 0 0 .25em hsla(0,0%,0%,.1);
    content: '';
    float: left;
    height: ${p => p.size || 3}em;
    position: absolute;
    width: ${p => p.size || 3}em;
}

.cube {
    background-color: ${p => p.color || p.topColor || BaseStyle.global.colors['brand']};
    position: relative;
    -webkit-transform: translateZ(${p => p.size || 3}em) translateX(${p => (p.size || 3) / 1.}em) translateY(${p => (p.size || 3) / 1.}em);
    -webkit-transform-style: preserve-3d;
    -webkit-transition: .25s;
}

&:hover{
    z-index: 99999;
}
&:hover .cube{
    ${p => p.onClick ? `-webkit-transform: translateZ(${(p.size || 3) + 1}em) translateX(${(p.size || 3) / 1.}em) translateY(${(p.size || 3) / 1.}em);` : ''}
    -webkit-transition: .25s;
}

.left-container-wrapper{
    -webkit-transform: rotateX(-90deg) translateY(${p => p.size || 3.33}em) translateX(-${p => (p.size || 3) / 2}em);
    -webkit-transform-origin: 100% 100%;
}

.left-container:after {
    background-color: ${p => p.color || p.leftColor || BaseStyle.global.colors['neutral-2']};

}

.right-container-wrapper {
    -webkit-transform: rotateY(90deg) translateX(${p => (p.size || 3) / 2}em) translateY(-${p => (p.size || 3)}em);
    -webkit-transform-origin: 100% 0;
}
/* Right */
.right-container:before {
    background-color: ${p => p.color || p.rightColor || BaseStyle.global.colors['accent-1']};

}

`