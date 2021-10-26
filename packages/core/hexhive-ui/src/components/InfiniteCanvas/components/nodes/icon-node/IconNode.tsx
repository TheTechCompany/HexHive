import { Box, Text } from 'grommet';
import React from 'react';
import styled from 'styled-components'
import * as Icons from 'grommet-icons'
import { PortWidget } from '../../ports';

export interface IconNodeProps{
    className?: string;
    extras?: {
        label?: string;
        color?: string;
        icon?: any;
    },
    isSelected?: boolean;

    width?: any;
    height?: any
    children?: (element: JSX.Element) => JSX.Element
}

const _Icons : any = Icons;

export const BaseIconNode : React.FC<IconNodeProps> = (props) => {
    const Icon = props.extras?.icon && typeof(props.extras.icon) === 'string' ? (Icons as any)[props.extras.icon] : (props.extras?.icon) ? props.extras.icon : Icons.Previous;

    return (
        <Box 
            width={props.width || '72px'}
            height={props.height || '72px'}
            elevation={'small'}
            background={"light-2"}
            round="small"
            border={{style: props.isSelected ? 'solid' : 'dotted', size: 'small', color: props.isSelected ? 'accent-1' : (props.extras?.color || 'brand')}}
            className={props.className}>
            {props.children?.(<Icon size="medium" />)}
        </Box>
    )
}


export const UnstyledIconNode = (props : IconNodeProps) => {

    return (
        <BaseIconNode
            width={{min: props.extras?.label ? '96px' : '55px'}}
            height={props.extras?.label ? '42px' : '55px'}
            {...props}>
            {(icon) => (
                <Box 
                    pad="small"
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
            )}
    
        </BaseIconNode>
    )
}


export const IconNode = styled(UnstyledIconNode)`
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