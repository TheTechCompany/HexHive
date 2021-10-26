import { Box, Layer, Text } from 'grommet';
import React, { useState, useRef } from 'react';
import styled from 'styled-components'
import * as Icons from 'grommet-icons'
import { PortWidget } from '@hexhive/ui';

export interface IconNodeProps{
    className?: string;
    extras?: {
        options?: any;
        
        label?: string;
        color?: string;
        icon?: any;
        iconString?: string;

        configuration?: any;
    },
    width?: any;
    height?: any
    onClick?: () => void;
    children?: (element: JSX.Element) => JSX.Element;
}

const _Icons : any = Icons;

export const BaseIconNode : React.FC<IconNodeProps> = (props) => {
    const Icon = props.extras?.icon && typeof(props.extras.icon) === 'string' ? (Icons as any)[props.extras.icon] : (props.extras?.icon) ? props.extras.icon : Icons.Previous;

    return (
        <Box 
            style={{position: 'relative'}}
            onClick={props.onClick}
            width={props.width || '72px'}
            height={props.height || '72px'}
            round="small"
            className={props.className}>
            {props.children?.(<Icon conf={props.extras.configuration} options={props.extras.options} size="medium" />)}
        </Box>
    )
}


export const UnstyledIconNode = (props : IconNodeProps) => {
    const [actionsOpen, openActions ] = useState<boolean>(false);

    return (
        <>
        <BaseIconNode
            onClick={() => {
                openActions(!actionsOpen)
            }}
            width={{min: props.extras?.label ? '96px' : '55px'}}
            height={props.extras?.label ? '42px' : '55px'}
            {...props}>
            {(icon) => (
         <>
                <Box 
                    flex
                    justify={props.extras?.label ? 'between' : 'center'}
                    align={props.extras?.label ? 'center': 'center'}
                    direction={props.extras?.label ? 'row': 'column'}>
                    <PortWidget direction="center" type="in" id="in" />
                    {icon}
                    {props.extras?.label && (
                        <Box
                            margin={{left: 'small'}} 
                            direction="row"
                            justify="center"
                            flex>
                        <Text>{props.extras?.label}</Text>
                        </Box>
                    )}
                    <PortWidget direction="center" type="out" id="out"    />
         
                </Box>
            </>
            )}

        </BaseIconNode>
 
    </>
    )
}


export const HMINode = styled(UnstyledIconNode)`
    .port{
        border-radius: 7px;
        height: 12px;
        width: 12px;
    }

    .port-base:first-child{
        top: -6px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        position: absolute;
    }

    .port-base:last-child{
        bottom: -6px;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        position: absolute;
    }
`