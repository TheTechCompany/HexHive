import { Heading } from 'grommet';
import React from 'react';
import styled from 'styled-components';
// import { Block } from '@thetechcompany/live-ui';

export interface ElementTrayProps {
    className?: string;
    element?: any & {dimensions: any}
}

export const BaseElementTray : React.FC<ElementTrayProps> = ({
    className,
    element = {}
}) => {
    console.log("ELEMENT", element)
    return (
       
                <div className={className}>
                    <div 
                        style={element.dimensions}
                        className="element-tray__item-vis">
                        {element.content}
                    </div>
                    <Heading>
                        {element.label}
                    </Heading>
                </div>
       
    )
}

export const TrayItem = styled(BaseElementTray)`

        height: 100px;
        display: flex;
        flex-direction: column;
        margin-top: 8px;
        border-bottom: 1px solid black;

    .element-tray__item-vis {
        flex: 1;
        display: flex;
        justify-content: center;
        height: 70%;
        width: 100px;
        align-self: center;
    }

    .element-tray__item-vis > *{
        height: 100%;
    }


`