import { IconNodeFactory } from '@hexhive/ui';
import { Box, Button, Text } from 'grommet';
// import { FlowEditor } from '@hexhive/command-editor';
import { InfiniteCanvas } from '@hexhive/ui';
import React, { useState, useMemo } from 'react';
import { HMINodeFactory } from '../../components/hmi-node/HMINodeFactory';
import { useQuery, gql} from '@apollo/client';
import { RouteComponentProps } from 'react-router';
// import program from 'shared/hexhive-types/src/models/program';
import * as HMINodes from '../../assets/hmi-elements'

import { useMutation } from '@hexhive/client';
import { HMICanvas } from '../../components/hmi-canvas/HMICanvas';

export interface DeviceControlProps extends RouteComponentProps<{id: string}>{

}

export const DeviceControl : React.FC<DeviceControlProps> = (props) => {

    const [ selected, setSelected ] = useState<{key?: string, id?: string}>(undefined)
    const { data } = useQuery(gql`
        query Q ($id: ID, $idStr: String){
            commandDeviceValue(device: $idStr){
                port
                bus
                value
                valueKey
            }
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
                        nodes{
                            id
                            type
                            x
                            y

                            devicePlaceholder {
                                id
                                name
                                type {
                                    actions {
                                        key
                                    }

                                    state {
                                        key
                                    }
                                }

                            }

                            outputsConnection {
                                                        edges {
                                                            id
                                                            sourceHandle
                                                            targetHandle
                                                            node {
                                                                id
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
            idStr: props.match.params.id
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

    const values = data?.commandDeviceValue || []

    const getDeviceValue = (name?: string, key?: string) => {
        //Find map between P&ID tag and bus-port

        if(!name) return;

        let idToBus = peripherals.reduce((prev, curr) => {
            let map = curr?.mappedDevicesConnection?.edges || [];

            return prev.concat(map.map((x) => ({
                bus: curr.id, 
                port: x.port, 
                name: x.node?.device?.name,
                key: x.node?.key?.key,
                value: x.node?.value?.key
            })))
        }, [])

        console.log("ID TO BUS", idToBus, name)
        
        return idToBus.filter((a) => a.name == name).map((busPort) => {
            let v = values.filter((a) => a?.port == busPort.port && a?.bus == busPort.bus);

            console.log(v, busPort)
            return {key: busPort.value, value: v.find((a) => a.valueKey == busPort.key)?.value};
        }).reduce((prev, curr) => {
            return {
                ...prev,
                [curr.key]: curr.value
            }
        }, {})
    
    }

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

    const hmiNodes = useMemo(() => {
        return hmi.map((node) => {

            let device = node.devicePlaceholder.name;
            let value = getDeviceValue(device)
            let conf =  data?.commandDevices?.[0]?.configuredDevices?.filter((a) => a.device.id == node.devicePlaceholder.id)

            console.log("CONF", conf)
            return {
                ...node,
                values: value,
                conf
            }
        }) 
    }, [data])

    const nodes = hmi.map((node) => ({
        id: node.id,
        type: 'hmi-node',
        x: node.x,
        y: node.y,
        extras: {
            iconString: node.type,
            icon: HMINodes[node.type]
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
       let node = hmi.find((a) => a.id == selected?.id)

       if(!node) return ;

       let deviceInfo = node.devicePlaceholder.type;

       return (
           <Box direction="column">
               <Box
                    pad="xsmall"
                    align="center" 
                    direction="row">
                    <Text>{(node?.devicePlaceholder as any)?.name}</Text>

                    <Text size="small">- {node.type}</Text>
               </Box>

               {deviceInfo.state?.map((state) => (
                   <Text size="small">{state.key} - {getDeviceValue(node?.devicePlaceholder?.name)?.[state.key]}</Text>
               ))}
{/* 

                {deviceValues(node?.devicePlaceholder?.name)} */}

                {deviceInfo.actions?.map((action) => (
                    <Button 
                        onClick={() => {

                        }}
                        label={action.key} />
                ))}

            </Box>
       )

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
                onSelect={(select) => {
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
            <Box 
                pad="xsmall"
                width="small"
                background="neutral-1">
                {renderActions()}
            </Box>
            </Box>
        </Box>
    )
}