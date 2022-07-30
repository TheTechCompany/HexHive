import React, { forwardRef } from 'react'
import styled from 'styled-components'

export const BaseHexagon = forwardRef<HTMLDivElement, any>((props, ref) => {
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

export const HexagonBox = styled(BaseHexagon)`

    .hexagon-container{
        position: relative;
        width: 100%;
        height: 100%;
        opacity: 1;
    }

    .hexagon-container:before {
      content: "";
      background-color: ${p => p.color || '#64C7CC'};
      transition: opacity 0.2s ease-in-out;
      opacity: 0.5;
      z-index: -1;
      position: absolute;
      width: ${p => p.size - (p.selected ? p.size / 30 : 0) || '300'}em; 
      height: ${p => p.size / 1.7320016165 || '173.21'}em;
    }

    &:hover .hexagon-container:before{
      opacity: 0.6;
    }

   

    position: absolute;
    top: ${p => p.top}em;
    left: ${p => p.left}em;
    width: ${p => p.size - (p.selected ? p.size / 30 : 0) || '300'}em; 
    height: ${p => p.size / 1.7320016165 || '173.21'}em;
    margin: ${p => p.size / 3.4642032333 || 86.6}em 0;
    ${p => p.selected ? `
    border-left: solid ${p.size / 60}em #333333;
    border-right: solid ${p.size / 60}em #333333;
    ` : ''}

    &:hover {
      filter: drop-shadow(0px 0px 3px gray);
        ${p => p.onClick ? 'cursor: pointer;' : ''}
    }

    &:after,
    &:before {
      opacity: 0.5;
    }

    &:hover:before,
    &:hover:after {
      opacity: 0.6;
    }

    ${p => p.selected ? `
    &:before,
    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      width: ${(p.size / 1.4142271249) - (p.selected ? p.size / 30 : 0) || '212.13'}em;
      height: ${p.size / 1.4142271249 || '212.13'}em;
      -webkit-transform: scaleY(0.5774) rotate(-45deg);
      -ms-transform: scaleY(0.5774) rotate(-45deg);
      transform: scaleY(0.5774) rotate(-45deg);
      background-color: ${p.color || '#64C7CC'};
      left: ${p.size / 7.7053475112 || '38.9340'}em;
    }

    &:before {
      top: ${p.size / -2.8284275828 || '-106.0660'}em;
      border-top: solid ${p.size / 42.4262137433 || '7.0711'}em #333333;
      border-right: solid ${p.size / 42.4262137433 || '7.0711'}em #333333;
    }
  
    &:after {
      bottom: ${p.size / -2.8284275828 || '-106.0660'}em;
      border-bottom: solid ${p.size / 42.4262137433 || '7.0711'}em #333333;
      border-left: solid ${p.size / 42.4262137433 || '7.0711'}em #333333;
    }
    ` : `
    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 0;
      border-left: ${p.size / 2 || 150}em solid transparent;
      border-right: ${p.size / 2 || 150}em solid transparent;
    }


  &:before {
    bottom: 100%;
    border-bottom: ${p.size / 3.4642032333 || 86.6}em solid ${p.color || '#64C7CC'};
  }
  
  &:after {
    top: 100%;
    width: 0;
    border-top: ${p.size / 3.4642032333 || 86.6}em solid ${p.color || '#64C7CC'};;
  }
    `}

  
`