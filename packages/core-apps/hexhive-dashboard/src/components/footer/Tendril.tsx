import React from 'react';
import { BaseStyle } from 'shared/hexhive-styles/src/base';
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
    width: 8px;
    background: ${BaseStyle.global.colors['accent-1']};
    position: relative;
    
    .termination {
        position: absolute;
        top: -10px;
        left: -4px;
        width: 15px;
        height: 15px;
        background: ${BaseStyle.global.colors['accent-1']};
        border-radius: 10px;
    }
`