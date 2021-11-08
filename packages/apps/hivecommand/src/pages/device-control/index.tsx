import { IconNodeFactory } from '@hexhive/ui';
import { Box, Button, Text } from 'grommet';
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
                                        }
                                    }
    
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

            // console.log(v, busPort)
        console.log(v, units)
            // return {key: busPort.value, value: v.find((a) => a.valueKey == busPort.key)?.value};
        return v.reduce((prev, curr) => {
            let unit = units?.find((a) => a.key == curr.valueKey);
            console.log(unit)
            return {
                ...prev,
                [curr.valueKey]: `${curr.value} ${unit && unit.units ? unit.units : ''}`
            }
        }, {})
    
    }

    useEffect(() => {
        const timer = setInterval(() => {
            client.refetchQueries({include: ['DeviceValues']})
        }, 5 * 1000)

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

    const nodes = hmi.map((node) => ({
        id: node.id,
        type: 'hmi-node',
        x: node.x,
        y: node.y,
        extras: {
            iconString: node.type?.name,
            icon: HMINodes[node.type?.name]
        }
    }))

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

    const renderActions = () => {
       let node = hmi.concat(groups).find((a) => a.id == selected?.id)

       if(!node) return ;

       let devices =  getDevicesForNode(node)

       return devices.map((device) => {
           let deviceInfo = device?.type || {};
           let deviceName = device?.name || '';

           return (
            <Box flex direction="column">
                <Box
                     pad="xsmall"
                     justify="center" 
                     direction="column">
                     <Text size="small">{device?.name}</Text>
 
                     <Text size="xsmall">{deviceInfo?.name}</Text>
                </Box>
                <Box flex>
                 {deviceInfo?.state?.map((state) => (
                     <Text size="small">{state.key} - {getDeviceValue(deviceName, deviceInfo.state)?.[state.key]}</Text>
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

    return (
        <Box
            round="xsmall"
            overflow="hidden"
            flex>
            <Box 
                pad="xsmall"
                background="accent-2"
                direction="row">
                <Text >{program.name}</Text>
            </Box>
            <Box                
                flex
                direction="row">

            <HMICanvas 
                id={program.id}
                program={program}
                deviceValues={hmiNodes}
                information={infoTarget != undefined ? (
                    <Bubble style={{position: 'absolute', zIndex: 99, pointerEvents: 'all', left: infoTarget?.x, top: infoTarget?.y}}>
                        {renderActions()}
                    </Bubble>
                ) : null}
                onBackdropClick={() => {
                    setSelected(undefined)
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