import React from 'react';
import { BaseStyle } from '@hexhive/styles';
import styled from 'styled-components'

export const BaseTendril = (props: any) => {
    return (
        <div style={props.style} className={props.className}>
            <div  className="termination" />
        </div>
    );
}

export const Tendril = styled(BaseTendril)`
    height: ${p => p.height || '100%'};
    width: 4px;
    background: ${BaseStyle.global.colors['accent-1']};
    position: relative;
    
    .termination {
        position: absolute;
        top: -4px;
        left: -3px;
        width: 10px;
        height: 10px;
        background: ${BaseStyle.global.colors['accent-1']};
        border-radius: 10px;
    }
`