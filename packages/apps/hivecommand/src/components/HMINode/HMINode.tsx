import { Box, Layer, Text } from 'grommet';
import React, { useMemo, useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components'
import * as Icons from 'grommet-icons'
import { RetractingPort } from '@hexhive/ui';
import { useSVGStyle } from '../../hooks/svg';
import { HMIGroup } from './HMIGroup';
import { HMICanvasContext } from '../hmi-canvas/HMICanvasContext';

export interface IconNodeProps{
    className?: string;
    extras?: {
        options?: any;
        
        label?: string;
        color?: string;
        
        icon?: any;

        iconString?: string;

        devicePlaceholder?: {
            name?: string;
        }

        configuration?: any;

        ports?: any[];

        showTotalizer?: boolean;
        rotation?: number;
        scaleX?: number;
        scaleY?: number;
    },
    width?: any;
    height?: any
    onClick?: () => void;
    children?: (element: JSX.Element) => JSX.Element;
}

const _Icons : any = Icons;

export const BaseIconNode : React.FC<IconNodeProps> = (props) => {

    const { getDeviceConf, getDeviceOptions } = useContext(HMICanvasContext)
    
    let options : any = {};
    let conf : any = {};
    if(getDeviceOptions) {
        options = getDeviceOptions(props.extras?.devicePlaceholder?.name);
    }
    if(getDeviceConf) {
        conf = getDeviceConf(props.extras?.devicePlaceholder?.name);
    }
    // const options = getDeviceOptions(props.extras?.devicePlaceholder?.name)

    // const conf = getDeviceConf(props.extras?.devicePlaceholder?.name)


    const Icon = useSVGStyle(props.extras?.icon && typeof(props.extras?.icon) === 'string' ? (Icons as any)[props.extras.icon] : (props.extras?.icon) ? props.extras?.icon : Icons.Previous, (props) => ({
        stroke: (options?.opening == 'true' || options?.starting == 'true') ? 'yellow' : (options?.open?.trim() == 'true' || options?.on?.trim() == 'true' || parseFloat(options?.speed) > 0) ? 'green' : 'gray'
       
    }))
    //Array.isArray(props.extras.icon) ?
//: () => <HMIGroup icons={props.extras.icon} />
    const [ rotation, setRotation ] = useState<number>(0);

    useEffect(() => {
        setRotation(props?.extras?.rotation)
    }, [props?.extras?.rotation])

    return (
        <Box 
            style={{position: 'relative'}}
            onClick={props.onClick}
            width={props.width || '72px'}
            height={props.height || '72px'}
            round="small"
            className={props.className}>
            {props.children?.(
                <Icon 
                    device={props.extras?.devicePlaceholder}
                    scaleX={props.extras?.scaleX}
                    scaleY={props.extras?.scaleY}
                    conf={conf} 
                    options={options} 
                    size="medium" />
            )}
        </Box>
    )
}


export const UnstyledIconNode = (props : IconNodeProps) => {
    const [actionsOpen, openActions ] = useState<boolean>(false);

    return (
        <>
        {/* {props.extras?.showTotalizer && (
            <Box 
                background="light-1"
                align="center"
                justify="center"
                style={{borderRadius: '100%', width: 33, height: 33, position: 'absolute', top: -50, left: 0, right: 0}}>
                Total
            </Box>
        )} */}
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

                    {props.extras.ports && props.extras.ports.map((port) => (
                        <RetractingPort
                        id="in"
                        {...port}
                        scaleX={props.extras.scaleX}
                        scaleY={props.extras.scaleY}
                        direction="center"   />
                    ))}

                    {icon}
           
                </Box>
            </>
            )}

        </BaseIconNode>
        {props.extras?.devicePlaceholder?.name && (
                        <Box
                            style={{transform: `
                            scaleX(${1 / (props.extras?.scaleX || 1)})
                            scaleY(${1 / (props.extras?.scaleY || 1)})`}}
                            direction="row"
                            justify="center"
                            flex>
                        <Text size="small" color="white">{props.extras?.devicePlaceholder?.name}</Text>
                        </Box>
        )}
 
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