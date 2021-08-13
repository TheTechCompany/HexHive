import { BaseStyle } from '@hexhive/styles';
import React from 'react';
import styled from 'styled-components'


const BaseBox = styled.div.attrs((props : any)=> ({
    style: {
        cursor: props.onClick ? 'pointer': 'initial',
        position: 'absolute',
        left: `${props.left}em`,
        top: `${props.top}em`,
        backgroundSize: `${props.size || 3}em ${props.size || 3}em`,
        height: `${(props.size || 3 )* 2}em`,
        margin: `-3.5em`,
        width: `${(props.size || 3) * 2}em`
    }
}))`
-webkit-transform: rotateX(45deg) rotateZ(45deg);
-webkit-transform-style: preserve-3d;
z-index: 1;

`

export const BaseHexBox = (props: any) => {
    return (
        <BaseBox {...props} onClick={props.onClick} className={`${props.className}`}>
            <div className={`cube ${props.ix % 2 ? 'even': 'odd'}`}>
            {props.children && <div className={`children-container`}>
                {props.children}

            </div>}
            <div className="left-container-wrapper">
                <div className="left-container">
                </div>

</div>
                <div className="right-container-wrapper">
                    <div className="right-container">
                    </div>
                </div>
            </div>
        </BaseBox>
    );
}

export const HexBox = styled(BaseHexBox)`


.children-container{
    position: absolute;
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    -webkit-transform: rotateZ(-45deg) rotateX(-45deg) translateY(${p => (p.size || 3) * 0.375}em)  translateZ(1000px);

}

.right-container-wrapper, .left-container-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}


.cube {
    ${p => p.flatPak ?  `
        box-shadow: inset 0.5em 0.5em 0 .5em hsla(0,0%,0%,.1),
                    inset 0.1em 0.1em 0 0.1em hsla(0, 0%, 0%, 1);
    ` : ''}
}

.left-container:after {
    ${p => p.flatPak ?  `
        box-shadow: inset 0.5em -0.5em 0 .5em hsla(0,0%,0%,.1),
                    inset 0.1em -0.1em 0 .1em hsla(0, 0%, 0%, 1);;
    ` : ''}
}

.right-container:before{
    ${p => p.flatPak ?  `
        box-shadow: inset -0.5em 0.5em 0 .5em hsla(0,0%,0%,.1),
                    inset -0.1em 0.1em 0 .1em hsla(0, 0%, 0%, 1);
    ` : ''}
}
.cube,
.left-container:after,
.right-container:before {
    z-index: -10;

    ${p => !p.flatPak ? `box-shadow: inset 0 0 0 .25em hsla(0,0%,0%,.1);` : ''}
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
    -webkit-transform: rotateX(-90deg) translateY(${p => p.size || 3}em) translateX(0em);
    -webkit-transform-origin: 100% 100%;
}

.left-container:after {
    background-color: ${p => p.color || p.leftColor || BaseStyle.global.colors['neutral-2']};

}

.right-container-wrapper {
    -webkit-transform: rotateY(90deg) translateX(${p => (p.size || 3)}em) translateY(-${p => (p.size || 3)}em);
    -webkit-transform-origin: 100% 0;
}
/* Right */
.right-container:before {
    background-color: ${p => p.color || p.rightColor || BaseStyle.global.colors['accent-1']};

}

`