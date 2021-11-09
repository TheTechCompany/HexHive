import { IconNodeFactory } from '@hexhive/ui';
import { Box, Button, CheckBox, Text, TextInput } from 'grommet';
// import { FlowEditor } from '@hexhive/command-editor';
import { InfiniteCanvas } from '@hexhive/ui';
import React, { useState, useMemo, useEffect } from 'react';
import { HMINodeFactory } from '../../components/hmi-node/HMINodeFactory';
import { useQuery, gql, useApolloClient } from '@apollo/client';
import { RouteComponentProps } from 'react-router';
// import program from 'shared/hexhive-types/src/models/program';
import * as HMINodes from '../../assets/hmi-elements'

import { useMutation } from '@hexhive/client';
import { HMICanvas } from '../../components/hmi-canvas/HMICanvas';
import { Bubble } from '../../components/Bubble/Bubble';
import { getDevicesForNode } from './utils';
import { Play, Stop } from 'grommet-icons';

export interface DeviceControlProps extends RouteComponentProps<{id: string}>{

}

export const DeviceControl : React.FC<DeviceControlProps> = (props) => {

    const client = useApolloClient();

    const [ infoTarget, setInfoTarget ] = useState<{x?: number, y?: number}>(undefined);
    const [ selected, setSelected ] = useState<{key?: string, id?: string}>(undefined)

    const { data : deviceValueData } = useQuery(gql`
    query DeviceValues( $idStr: String) {
        commandDeviceValue(device: $idStr){
            device
            deviceId
            value
            valueKey
        }
    }
    `, {
        variables: {
            idStr: props.match.params.id
        }
    })
    const { data } = useQuery(gql`
            query Q ($id: ID){
     
            commandDevices(where: {id: $id}){

                operatingMode

                configuredDevices {
                    id
                    device{
                        id
                    }
                    conf {
                        id
                        key
                    }
                    value
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
                                                key
                                                writable
                                            }
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
                                            key
                                            writable
                                        }
                                    }
    
                                }
                            
                            
                        }
                            
                    }

                    devices {
                        id
                        name
                        type {
                            state {
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

    const [ performAction, performInfo ] = useMutation((mutation, args: {
        deviceId: string,
        deviceName: string,
        action: string
    }) => {
        const item = mutation.performDeviceAction({deviceId: args.deviceId, deviceName: args.deviceName, action: args.action})

        return {
            item: {
                ...item
            }
        }
    })

    const [ changeDeviceMode, changeDeviceModeInfo ] = useMutation((mutation, args: {
        deviceId: string,
        deviceName: string,
        mode: string
    }) => {
        const item = mutation.changeDeviceMode({deviceId: args.deviceId, deviceName: args.deviceName, mode: args.mode})

        return {
            item: {
                ...item
            }
        }
    })


    const [ changeDeviceValue, changeDeviceInfo ] = useMutation((mutation, args: {bus: string, port: string, value: string}) => {
        const result = mutation.changeDeviceValue({
            device: props.match.params.id,
            bus: args.bus,
            port: args.port, 
            value: args.value
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

    const getDeviceValue = (name?: string, units?: {key: string, units?: string}[]) => {
        //Find map between P&ID tag and bus-port

        if(!name) return;

        // let idToBus = peripherals.reduce((prev, curr) => {
        //     let map = curr?.mappedDevicesConnection?.edges || [];

        //     return prev.concat(map.map((x) => ({
        //         deviceId: x
        //         name: x.node?.device?.name,
        //         key: x.node?.key?.key,
        //         value: x.node?.value?.key
        //     })))
        // }, [])

        // console.log("ID TO BUS", idToBus, name)
        
        // return idToBus.filter((a) => a.name == name).map((busPort) => {

        let v = values.filter((a) => a?.deviceId == name);
        let state = program?.devices?.find((a) => a.name == name).type?.state;

            // console.log(v, busPort)
        console.log(v, units)
            // return {key: busPort.value, value: v.find((a) => a.valueKey == busPort.key)?.value};
        return v.reduce((prev, curr) => {
            let unit = units?.find((a) => a.key == curr.valueKey);
            let stateItem = state.find((a) => a.key == curr.valueKey);
            console.log(unit)
            let value = curr.value;

            if(!stateItem) return prev;

            if(stateItem?.type == "IntegerT"){
                value = parseFloat(value).toFixed(2)
            }
            return {
                ...prev,
                [curr.valueKey]: `${value} ${unit && unit.units ? unit.units : ''}`
            }
        }, {})
    
    }

    const refetch = () => {
        client.refetchQueries({include: ['Q']})
    }

    useEffect(() => {
        const timer = setInterval(() => {
            client.refetchQueries({include: ['DeviceValues']})
        }, 1 * 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    // const deviceValueList = useMemo(() => {
    //     let idToBus = peripherals.reduce((prev, curr) => {
    //         let map = curr?.mappedDevicesConnection?.edges || [];
    //         return prev.concat(map.map((x) => ({
    //             bus: curr.id, 
    //             port: x.port, 
    //             name: x.node?.device?.name,
    //             key: x.node?.key?.key,
    //             value: x.node?.value?.key
    //         })))
    //     }, [])

    //     console.log("ID TO BUS", idToBus, name)
    //     return data?.commandDeviceValue.map((value) => {

    //         let dataPoints = idToBus.filter((a) => a.bus == value.bus && a.port == value.port);

    //         device: idToBus.find((a) => a.bus == value.bus && a.port == value.port)?.name,
    //         value: value.value,
    //         key: value.valueKey
    //     })
    //     // let busPort = idToBus.find((a) => a.name == name)
    //     // if(!busPort) return;
    //     // return values.filter((a) => a?.port == busPort.port && a?.bus == busPort.bus);
        
    // }, [data?.commandDeviceValue])


    const program = data?.commandDevices?.[0]?.activeProgram || {};

    const hmi = program?.hmi?.[0]?.nodes || [];
    const groups = program?.hmi?.[0]?.groups || [];

    const deviceModes = program?.devices?.map((a) => {
        let vals = values.filter((b) => b?.deviceId == a.name);
        if(!vals.find((a) => a.valueKey == "mode")) console.log(a.name)
        return {name: a.name, mode: vals.find((a) => a.valueKey == 'mode')?.value};
    }) || [];

    console.log({deviceModes})

    const hmiNodes = useMemo(() => {
        return hmi.concat(groups.map((x) => x.nodes).reduce((prev, curr) => prev.concat(curr), [])).filter((a) => a?.devicePlaceholder?.name).map((node) => {

            let device = node?.devicePlaceholder?.name;
            let value = getDeviceValue(device, node?.devicePlaceholder?.type?.state);
            let conf =  data?.commandDevices?.[0]?.configuredDevices?.filter((a) => a.device?.id == node.devicePlaceholder.id)

            console.log("CONF", conf)
            return {
                ...node,
                values: value,
                conf
            }
        })
    }, [data, deviceValueData])

    const changeValue = (node: any) => {
        // const values : any[] = getDeviceValue(device)
        let values = getDeviceValue(node?.devicePlaceholder?.name);
        
        // find((a) => a.valueKey == 'value').value 
        
        let deviceName = node?.devicePlaceholder?.name;

        let idToBus = peripherals.reduce((prev, curr) => {
            let map = curr?.mappedDevicesConnection?.edges || [];

            return prev.concat(map.map((x) => ({bus: curr.id, port: x.port, name: x.node.name})))
        }, [])

        console.log("ID TO BUS", idToBus)
        
        let busPort = idToBus.find((a) => a.name == deviceName)
        
        let value = values.find((a) => a.valueKey == 'value');
        console.log(value, values)
        
        let newValue = (!value || value.value == 'false') ? '1' : '0';

        changeDeviceValue({args: {
            bus: busPort.bus,
            port: busPort.port,
            value: newValue
        }})
        console.log(node)
    }

    const deviceValues = (device: string) => {
        const values : any[] = getDeviceValue(device)

        console.log("Values", values, device)
        return (
            <Box>
                Values
                {values?.map((value, ix) => (
                    <Text>{value.valueKey} {value.value}</Text>
                ))}
            </Box>
        )
    }

    const renderActionValue = (deviceName: string, deviceInfo: any, deviceMode: string, state: any) => {
        let value = getDeviceValue(deviceName, deviceInfo.state)?.[state.key];

        console.log(deviceName, deviceInfo, state, value)
        if(state.writable && deviceMode == "Manual"){
            return <TextInput style={{padding: "none"}} type="number" size="small" plain placeholder={state.key} value={parseFloat(value)} />
        }else{
            return <Text size="small">{value}</Text>
        }
    }

    const renderActions = () => {
       let node = hmi.concat(groups).find((a) => a.id == selected?.id)

       if(!node) return ;

       let devices =  getDevicesForNode(node)

       return devices.map((device) => {
           let deviceInfo = device?.type || {};
           let deviceName = device?.name || '';
        
           let deviceMode = deviceModes.find((a) => a.name == deviceName)?.mode;

           return (
            <Box 
                border={{side: 'bottom', size: 'small'}}
                flex 
                direction="column">
                <Box
                     pad="xsmall"
                     justify="center" 
                     direction="column">

                    <Box align="center" justify="between" direction="row">
                        <Text weight="bold" size="small">{device?.name}</Text>
                        <CheckBox 
                            reverse
                            onChange={(e) => {
                                changeDeviceMode({
                                    args: {
                                        deviceId: props.match.params.id,
                                        deviceName: device?.name,
                                        mode: !e.target.checked ? "Manual" : "Automatic"
                                    }
                                })
                            }}
                            checked={deviceMode != "Manual"}
                            label={deviceMode}
                            toggle />

                    </Box>
 
                     <Text size="xsmall">{deviceInfo?.name}</Text>
                </Box>
                <Box pad="xsmall" flex>
                 {deviceInfo?.state?.map((state) => (
                     <Box direction="row" align="center">
                        <Box flex><Text size="small">{state.key}</Text></Box>
                        <Box flex>{renderActionValue(deviceName, deviceInfo, deviceMode, state)}</Box>
                     </Box>
                 ))}
                </Box>
 
 {/* 
 
                 {deviceValues(node?.devicePlaceholder?.name)} */}
                 <Box align="center" justify="around" direction="row">
                 {deviceInfo?.actions?.map((action) => (
                     <Button
                         plain
                         style={{padding: 6, borderRadius: 3}}
                         hoverIndicator 
                         onClick={() => {
                             performAction({
                                 args: {
                                     deviceId: props.match.params.id, 
                                     deviceName: node?.devicePlaceholder?.name,
                                     action: action.key
                                 }
                                     
                             })
                         }}
                         label={action.key} />
                 ))}
                 </Box>
 
             </Box>
        )
       })
    //    let deviceInfo = node?.devicePlaceholder?.type;

     

    }

    const [ changeRootMode, changeModeInfo ] = useMutation((mutation, args: {deviceId: string, mode: string}) => {
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
        if(rootDevice?.operatingMode == "AUTO"){
            changeRootMode({
                args: {
                    deviceId: props.match.params.id,
                    mode: "DISABLED"
                }
            }).then(() => {
                refetch()
            })
         //   setRootDevice({...rootDevice, operatingMode: "Manual"})
        }else{
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
                <Text>{program.name}</Text>
                <Button
                    onClick={toggleOperatingMode}
                    plain
                    hoverIndicator
                    style={{padding: 6, borderRadius: 3}}
                    icon={rootDevice?.operatingMode == "AUTO" ? <Stop size="small" /> : <Play size="small" />} />
            </Box>
            <Box                
                flex
                direction="row">

            <HMICanvas 
                id={program.id}
                program={program}
                deviceValues={hmiNodes}
                modes={deviceModes}
                information={infoTarget != undefined ? (
                    <Bubble style={{position: 'absolute', zIndex: 99, pointerEvents: 'all', left: infoTarget?.x, top: infoTarget?.y}}>
                        {renderActions()}
                    </Bubble>
                ) : null}
                onBackdropClick={() => {
                    setSelected(undefined)
                    setInfoTarget(undefined)
                }}
                onSelect={(select) => {
                    let node = program.hmi?.[0]?.nodes?.concat(program?.hmi?.[0]?.groups).find((a) => a.id == select.id)

                    const { x, y, scaleX, scaleY} = node;
                    console.log({node})
                    setInfoTarget({x: x + (node.width || node?.type?.width), y: y})
                    
                    setSelected(select)
                }}
                />
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
    )
}