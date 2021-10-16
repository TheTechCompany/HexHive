import { Logout as ExitToApp, Add } from 'grommet-icons';
import React, { useEffect, useState } from 'react';
import { deviceActions, programActions } from '../../actions';
import { Box, List, Text, Button, Select } from 'grommet';
//import { Map } from '@thetechcompany/live-ui'
import { Graph } from '../../components/ui/graph';
import { useMutation, useQuery } from '@hexhive/client'

import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import { useQuery as useApollo, gql, useApolloClient } from '@apollo/client'
import { BusMap } from '../../components/bus-map/BusMap';
import { DeviceBusModal } from '../../components/modals/device-bus/DeviceBusModal';
export interface DeviceSingleProps {
    match?: any;
    history?: any;
}

export const DeviceSingle : React.FC<DeviceSingleProps> = (props) => {
    
    const client = useApolloClient()

    // const [ selectedBus, setSelectedBus ] = useState<{id?: string, name: string}>({})
    const [ modalOpen, openModal ] = useState<boolean>(false);
    
    const query = useQuery({
        suspense: false,
        staleWhileRevalidate: true
    })

    const { data } = useApollo(gql`
        query Q ($id: ID) {
            commandDevices(where: {id: $id}){
                id
                name
                peripherals {
                    id
                    name
                    type

                    mappedDevices {
                        id
                        name
                    }
                    mappedDevicesConnection {
                        edges{
                            port
                        }
                    }
                }

                activeProgram {
                    devices {
                        id
                        name
                        type {
                            id
                            name
                        }
                    }
                }

            }
        }
    `, {
        variables: {
            id: props.match.params.id
        }
    })

    const refetch = () => {
        client.refetchQueries({
            include: ["Q"]
        })
    }

    const [ mapPort, mapInfo ] = useMutation((mutation, args: {
        id: string, 
        port: string, 
        peripheralId: string, 
        deviceId: string
    }) => {

        let mapUpdate = {};

        if(!args.deviceId){
            mapUpdate = {
                disconnect: [{
                    where: {edge: {port: args.port}}
                }]
            }
        }else if(args.deviceId){
            mapUpdate = {
                // disconnect: [{
                //     where: {edge: {port: args.port}, node: {id_NOT: args.deviceId}}
                // }],
                connect: [{
                    where: {node: {id: args.deviceId}}, 
                    edge: {port: args.port} 
                }]
            }
        }

        const device = mutation.updateCommandDevices({
            where: {id: args.id},
            update: {
                peripherals: [{
                    where: {
                        node: {
                            id: args.peripheralId
                        }
                    },
                    update: {
                        node: {
                            mappedDevices: [{
                                ...mapUpdate
                            }]
                        }
                    }
                }]
            }
        })
        return {
            item: {
                ...device.commandDevices?.[0]
            },
        }
    })
    const device = data?.commandDevices?.[0] || {}
    // const programs = query.ProgramMany();

    const goToControls = () => {
        props.history.push(`${props.match.url}/controls`)
    }

    console.log(device)
    return  query.$state.isLoading ? null : (
        <Box 
            elevation="small"
            round="xsmall"
            overflow="hidden"
            background="neutral-2"
            style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
            <Box 
                direction="row"
                align="center"
                justify="between"
                pad="xsmall"
                background="accent-2">
                <Text>
                    {device?.name}
                </Text>
                <Button 
                    onClick={() => {
                        openModal(true);
                    }}
                    hoverIndicator 
                    plain 
                    style={{padding:6, borderRadius: 3}} 
                    size="small" 
                    icon={<Add size="small" />} />
                {/* <Button icon={<ExitToApp />}
                    onClick={() => goToControls()}
                    label="Go to controls" /> */}
            </Box>

            <DeviceBusModal
                open={modalOpen}
                onClose={() => {
                    openModal(false)
                }}
                />
            <Box 
                background="#dfdfdf"
                flex>
                    
                <BusMap
                    add
                    onMapChanged={(bus, port, device) => {
                            mapPort({
                                args: {
                                    id: props.match.params.id,
                                    peripheralId: bus,
                                    port: port,
                                    deviceId: device
                                }
                            }).then(() => {
                                refetch()
                            })
                        
  
                        console.log(bus, port, device)
                    }}
                    devices={device?.activeProgram?.devices}
                    buses={(device?.peripherals || []).map((x) => ({
                        id: x.id,
                        name: x.name,
                        mappedDevices: x.mappedDevices.map((dev, ix) => ({...dev, port: x.mappedDevicesConnection.edges[ix].port})),
                        ports: x.type == "IO-LINK" ? 8 : {inputs: 14, outputs: 14} 
                    }))}/>
{/* 
                <Box 
                    background="neutral-1"
                    round={{corner: 'top', size: 'small'}}
                    elevation="medium"
                    align="center"
                    justify="center"
                    flex>
                        <Text size="small">Select a Bus to configure...</Text>
                </Box> */}
            </Box>
        
                {/* <Box className="detail-col">
                    <Box>
                        <Select 
                            options={programs}
                            labelKey="name"
                            valueKey="_id" />
                      
                      <Text style={{marginTop: 8}}>Uptime: 3months 2days 24hrs</Text>
                    </Box>
                </Box> */}
               {/*<Map 
                    markerIcon={MarkerIcon}
                    center={[-36.87732912268097,174.85584289406773]}
                    markers={{
                        text: device?.name || '',
                        position: [-36.87732912268097,174.85584289406773]
                    }}
                    className="location-col" /> */}
            {/* <div className="bottom-row">
                <Graph
                    data={[{
                        recycled: 1,
                        time: 2
                    }, {
                        recycled: 2,
                        time: 1
                    }]}
                    xKey={"time"}
                    yKey={"recycled"}
                    className="graph-col" />

           
            </div> */}
        </Box>
    )
}