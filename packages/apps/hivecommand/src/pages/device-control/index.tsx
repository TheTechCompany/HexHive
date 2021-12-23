import { IconNodeFactory } from '@hexhive/ui';
import { Box, Button, CheckBox, Text, TextInput } from 'grommet';
import { InfiniteCanvas } from '@hexhive/ui';
import React, { useState, useMemo, useEffect } from 'react';
import { HMINodeFactory } from '../../components/HMINode/HMINodeFactory';
import { useQuery, gql, useApolloClient } from '@apollo/client';
import { matchPath, Route, RouteComponentProps, Switch } from 'react-router-dom';
// import program from 'shared/hexhive-types/src/models/program';
import * as HMINodes from '../../assets/hmi-elements'

import { useMutation } from '@hexhive/client';
import { HMICanvas } from '../../components/HMICanvas';
import { Bubble } from '../../components/Bubble/Bubble';
import { getDevicesForNode } from './utils';
import { Play, Stop, Checkmark, Services, Cycle, Analytics, Info, Technology } from 'grommet-icons';
import Toolbar from './toolbar';
import { DeviceControlProvider } from './context';
import Controls from './views/control'
import { DeviceControlGraph } from './views/graph'
import { DeviceDevices } from '../device-devices';
import { DeviceSingle } from '../device-single';

export interface DeviceControlProps extends RouteComponentProps<{ id: string }> {

}

export const DeviceControl: React.FC<DeviceControlProps> = (props) => {

    const client = useApolloClient();



    const toolbar_menu = [
        { id: 'info', icon: <Info /> },
        { id: 'controls', icon: <Services /> },
        { id: 'graphs', icon: <Analytics /> },
        { id: 'devices', icon: <Technology /> }
    ]

    const view = toolbar_menu.find((a) => {
        return matchPath(window.location.pathname, {
            path: `/dashboard/command${props.match.url}/${a.id}`,
            exact: false
        }) != null;
    })

    const { data: deviceValueData } = useQuery(gql`
    query DeviceValues( $idStr: String, $id: ID) {
        commandDeviceValue(device: $idStr){
            device
            deviceId
            value
            valueKey
        }

        commandDevices (where: {id: $id}){
            waitingForActions {
                id
            }
        }
    }
    `, {
        variables: {
            id: props.match.params.id,
            idStr: props.match.params.id
        }
    })

    const { data } = useQuery(gql`
            query Q ($id: ID){
     
            commandDevices(where: {id: $id}){
                name
                operatingMode

                online
                calibrations {
                    device {
                        id
                        name
                    }

                    deviceKey {
                        key
                    }

                    min
                    max
                }

                peripherals {
                    id
                    name
                    type

                    mappedDevicesConnection {
                        edges{
                            port

                            node {
                                device {
                                    name
                                }

                                key {
                                    key
                                }
                                value {
                                    key
                                }
                                
                            }
                        }
                    }
                }
               
                activeProgram {
                    id
                    name
                    
                    hmi{
                        id
                        name

                        actions {
                            id
                            name
                            flow {
                                id
                                name
                            }
                        }

                        paths {
                            source {
                                ... on CommandHMINode {
                                    id
                                }
                                ... on CommandHMIGroup {
                                    id
                                }
                            }
                            sourceHandle
                            target {
                                ... on CommandHMINode {
                                    id
                                }
                                ... on CommandHMIGroup {
                                    id
                                }
                            }
                            targetHandle
                            points {
                                x
                                y
                            }

                        }
                        groups {
                            id
                            x
                            y

                            width
                            height

                            nodes {
                                    id
                                    type {
                                        name
                                    }
                                    x
                                    y

                                    z
                                    scaleX
                                    scaleY
                                    rotation

                                    devicePlaceholder {
                                        id
                                        name
                                        type {
                                            actions {
                                                key
                                            }
        
                                            state {
                                                units
                                                inputUnits
                                                key
                                                writable
                                            }
                                        }


                                        setpoints {
                                            id
                                            name
                                            key {
                                                id
                                                key
                                            }
                                            value
                                            type
                                        }
        
                                    }
                                
                            }
                            ports {
                                id
                                x
                                y
                                rotation
                                length
                            }
                        }
                        nodes{
       
                                id
                                type {
                                    name
                                    
                                    width
                                    height
    
                                    ports {
                                        x
                                        y
                                        rotation
                                        key
                                    }
                                }   
                                x
                                y
                                rotation
                                scaleX
                                scaleY
    
                                devicePlaceholder {
                                    id
                                    name
                                    type {
                                        actions {
                                            key
                                        }
    
                                        state {
                                            units
                                            inputUnits
                                            key
                                            writable
                                        }
                                    }


                                    setpoints {
                                        id
                                        name
                                        key {
                                            id
                                            key
                                        }
                                        value
                                        type
                                    }
    
                                }
                            
                            
                        }
                            
                    }

                    devices {
                        id
                        name
                        type {
                            state {
                                inputUnits
                                units
                                key
                                type
                            }
                        }
                    }
                }

            }
        }
    `, {
        variables: {
            id: props.match.params.id,
        }
    })

    const [performAction, performInfo] = useMutation((mutation, args: {
        deviceId: string,
        deviceName: string,
        action: string
    }) => {

        // console.log({args})
        const item = mutation.performDeviceAction({ deviceId: args.deviceId, deviceName: args.deviceName, action: args.action })

        return {
            item: {
                ...item
            }
        }
    })

    const [changeDeviceMode, changeDeviceModeInfo] = useMutation((mutation, args: {
        deviceId: string,
        deviceName: string,
        mode: string
    }) => {
        const item = mutation.changeDeviceMode({ deviceId: args.deviceId, deviceName: args.deviceName, mode: args.mode })

        return {
            item: {
                ...item
            }
        }
    })


    const [changeDeviceValue, changeDeviceInfo] = useMutation((mutation, args: {
        deviceName: string,
        key: string,
        value: any
    }) => {

        const result = mutation.changeDeviceValue({
            deviceId: props.match.params.id,
            deviceName: args.deviceName,
            key: args.key,
            value: `${args.value}`
        })

        return {
            item: {
                ...result
            }
        }
        // mutation.
    })

    //Translates id to bus-port value
    const rootDevice = data?.commandDevices?.[0];

    const peripherals = data?.commandDevices?.[0]?.peripherals || []

    const values = deviceValueData?.commandDeviceValue || []

    const waitingForActions = deviceValueData?.commandDevices?.[0]?.waitingForActions || [];

    const refetch = () => {
        client.refetchQueries({ include: ['Q'] })
    }

    useEffect(() => {
        const timer = setInterval(() => {
            client.refetchQueries({ include: ['DeviceValues'] })
        }, 1 * 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])


    const program = data?.commandDevices?.[0]?.activeProgram || {};

    const actions = program?.hmi?.[0]?.actions || [];

    const hmi = program?.hmi?.[0]?.nodes || [];
    const groups = program?.hmi?.[0]?.groups || [];


    const getDeviceValue = (name?: string, units?: { key: string, units?: string }[]) => {
        //Find map between P&ID tag and bus-port

        if (!name) return;


        let v = values.filter((a) => a?.deviceId == name);
        let state = program?.devices?.find((a) => a.name == name).type?.state;

        return v.reduce((prev, curr) => {
            let unit = units?.find((a) => a.key == curr.valueKey);
            let stateItem = state.find((a) => a.key == curr.valueKey);
            let value = curr.value;

            if (!stateItem) return prev;

            if (stateItem?.type == "IntegerT" || stateItem?.type == "UIntegerT") {
                value = parseFloat(value).toFixed(2)
            }
            return {
                ...prev,
                [curr.valueKey]: value //`${value} ${unit && unit.units ? unit.units : ''}`
            }
        }, {})

    }
    const hmiNodes = useMemo(() => {
        return hmi.concat(groups.map((x) => x.nodes).reduce((prev, curr) => prev.concat(curr), [])).filter((a) => a?.devicePlaceholder?.name).map((node) => {

            let device = node?.devicePlaceholder?.name;
            let value = getDeviceValue(device, node?.devicePlaceholder?.type?.state);
            let conf = data?.commandDevices?.[0]?.calibrations?.filter((a) => a.device?.id == node.devicePlaceholder.id)

            // console.log("CONF", conf)
            return {
                ...node,
                values: value,
                conf
            }
        })
    }, [data, deviceValueData])



    const [changeRootMode, changeModeInfo] = useMutation((mutation, args: { deviceId: string, mode: string }) => {
        const item = mutation.changeMode({
            deviceId: args.deviceId,
            mode: args.mode
        })

        return {
            item: {
                ...item
            }
        }
    })

    const toggleOperatingMode = () => {
        if (rootDevice?.operatingMode == "AUTO") {
            changeRootMode({
                args: {
                    deviceId: props.match.params.id,
                    mode: "DISABLED"
                }
            }).then(() => {
                refetch()
            })
            //   setRootDevice({...rootDevice, operatingMode: "Manual"})
        } else {
            changeRootMode({
                args: {
                    deviceId: props.match.params.id,
                    mode: "AUTO"
                }
            }).then(() => {
                refetch()
            })
        }
    }


    return (
        <DeviceControlProvider value={{
            actions,
            waitingForActions,
            toggleOperatingMode,
            operatingMode: rootDevice?.operatingMode,
            controlId: props.match.params.id,
            program,
            values,
            hmi,
            hmiNodes,
            groups,
            changeDeviceMode,
            changeDeviceValue,
            performAction
        }}>
            <Box
                round="xsmall"
                overflow="hidden"
                flex>
                <Box
                    pad="xsmall"
                    align="center"
                    justify="between"
                    background="accent-2"
                    direction="row">
                    <Box direction="row" align="center">
                        <Box
                            margin={{ right: 'small' }}
                            width="7px"
                            height="7px"
                            round="small"
                            background={rootDevice?.online ? 'lime' : 'red'} />
                        <Text>{rootDevice?.name} - {program?.name}</Text>
                    </Box>
                    <Box direction="row">
                        {view?.id == 'controls' && (<Button
                            plain
                            hoverIndicator
                            style={{ padding: 6, borderRadius: 3 }}
                            icon={<Cycle size="small" />} />)}
                    </Box>
                </Box>
                <Box
                    flex
                    direction="row">
                    <Toolbar
                        active={toolbar_menu.find((a) => matchPath(window.location.pathname, {
                            path: `/dashboard/command${props.match.url}/${a?.id}`,
                            exact: false
                        }) != null)?.id}
                        onItemClick={(item) => {
                            props.history.push(`${props.match.url}/${item.id}`)
                        }}
                        items={toolbar_menu} />
                    <Box flex>
                        <Switch>
                            <Route path={[`${props.match.url}`, `${props.match.url}/info`]} exact component={DeviceSingle} />
                            <Route path={`${props.match.url}/controls`} component={Controls} />
                            <Route path={`${props.match.url}/graphs`} component={DeviceControlGraph} />
                            <Route path={`${props.match.url}/devices`} component={DeviceDevices} />
                        </Switch>
                    </Box>

                    {/* <InfiniteCanvas 
                editable={false}
                factories={[
                    new IconNodeFactory(),
                    new HMINodeFactory()
                ]}
                onSelect={(key, id) => {
                    setSelected({key, id})
                }}
                nodes={nodes}
                paths={[]}
                   /> */}
                    {/* <Box 
                pad="xsmall"
                width="small"
                background="neutral-1">
                {renderActions()}
            </Box> */}
                </Box>
            </Box>
        </DeviceControlProvider>
    )
}