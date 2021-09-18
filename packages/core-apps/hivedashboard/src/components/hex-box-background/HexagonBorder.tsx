import React from 'react'
import { forwardRef } from 'react'
import styled from 'styled-components'

export const BaseHexagon : React.FC<any> = forwardRef<HTMLDivElement, any>((props, ref) => {
    return (
        <div 
            ref={ref}
            onClick={props.onClick}
            className={props.className}>
            <div className="hexagon-container">
                {props.children}
            </div>
        </div>
    )
})

export const HexagonBorder = styled(BaseHexagon)`

    position: absolute;
    top: ${p => p.top}em;
    left: ${p => p.left}em;
    width: ${p => p.size -  0.4 || '300'}em; 
    height: ${p => p.size / 1.7320016165 || '173.21'}em;
    background-color: #64C7CC;
    margin: ${p => p.size / 3.4642032333 || 86.6}em 0;
    border-left: solid 0.2em #333333;
    border-right: solid 0.2em #333333;
  
    &:hover, &:hover > *, .hexagon-container {
        ${p => p.onClick ? 'cursor: pointer;' : ''}
        ${p => p.onClick ? 'box-shadow: 0px 5px 10px -4px gray;' : ''}
    }

  &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    width: ${p=> (p.size / 1.4142271249) - 0.3 || '212.13'}em;
    height: ${p=> (p.size / 1.4142271249) - 0.3 || '212.13'}em;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: ${p=>p.size / 7.7053475112 - 0.1|| '38.9340'}em;
}
  
  &:before {
    top: ${p=>p.size / -2.8284275828 || '-106.0660'}em;
    border-top: solid ${0.2 * 1.41422}em #333333;
    border-right: solid ${0.2 * 1.41422}em #333333;
  }
  
  &:after {
    bottom: ${p=>p.size / -2.8284275828 || '-106.0660'}em;
    border-bottom: solid ${0.2 * 1.41422}em #333333;
    border-left: solid ${0.2 * 1.41422}em #333333;
  }
  
  
`