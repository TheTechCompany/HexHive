import React from 'react';
import styled from 'styled-components';

export const BaseHexagonImage = (props) => {
    return (
        <div className={props.className}>
            <div className="hexTop" />
            <div className="hexBottom" />
        </div>
    )
}

export const HexagonImage = styled(BaseHexagonImage)`
    position: relative;
    top: ${p => p.top}em;
    left: ${p => p.left}em;
    width: ${p => p.size || '300'}em; 
    height: ${p => p.size / 1.7320016165 || '173.21'}em;
    background-image: url(http://csshexagon.com/img/meow.jpg);
    background-size: auto ${p => p.size / 0.8660253076 || '346.4102'}em;
    background-position: center;
    margin: ${p => p.size / 3.4642032333 || 86.6}em 0;

    &:hover, &:hover > * {
        ${p => p.onClick ? 'cursor: pointer;' : ''}
        ${p => p.onClick ? 'box-shadow: 0px 5px 10px -4px gray;' : ''}
    }
  
  
  .hexTop,
  .hexBottom {
    position: absolute;
    z-index: 1;
    width: ${p => p.size / 1.4142271249 || '212.13'}em;
    height: ${p => p.size / 1.4142271249 || '212.13'}em;
    overflow: hidden;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background: inherit;
    left: ${p => p.size / 6.8290462099 || '43.93'}em;
  }
  
  /*counter transform the bg image on the caps*/
  .hexTop:after,
  .hexBottom:after {
    content: "";
    position: absolute;
    width: ${p => p.size || '300'}em; 
    height: ${p => p.size / 1.7320016165 || '173.21'}em;
    -webkit-transform:  rotate(45deg) scaleY(1.7321) translateY(${p => p.size / -3.4641032303 || '-86.6025'}em);
    -ms-transform:      rotate(45deg) scaleY(1.7321) translateY(${p => p.size / -3.4641032303 || '-86.6025'}em);
    transform:          rotate(45deg) scaleY(1.7321) translateY(${p => p.size / -3.4641032303 || '-86.6025'}em);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    background: inherit;
  }
  
  .hexTop {
    top: ${p => p.size / -2.8284275828 || '-106.0660px'}em;
  }
  
  .hexTop:after {
    background-position: center top;
  }
  
  .hexBottom {
    bottom: ${p => p.size / -2.8284275828 || '-106.0660px'}em;
  }
  
  .hexBottom:after {
    background-position: center bottom;
  }
  
  &:after {
    content: "";
    position: absolute;
    top: 0.0000px;
    left: 0;
    width: ${p => p.size || '300'}em; 
    height: ${p => p.size / 1.7320016165 || '173.21'}em;
    z-index: 2;
    background: inherit;
  }
`