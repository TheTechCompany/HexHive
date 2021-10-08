import { Logout as ExitToApp } from 'grommet-icons';
import React, { useEffect, useState } from 'react';
import { deviceActions, programActions } from '../../actions';
import { Box, List, Text, Button, Select } from 'grommet';
//import { Map } from '@thetechcompany/live-ui'

import { Graph } from '../../components/ui/graph';
import { useQuery } from '@hexhive/client'

import MarkerIcon from 'leaflet/dist/images/marker-icon.png';

export interface DeviceSingleProps {
    match?: any;
    history?: any;
}

export const DeviceSingle : React.FC<DeviceSingleProps> = (props) => {
  

    const query = useQuery({
        suspense: false,
        staleWhileRevalidate: true
    })

    const device = query.DeviceOne({filter: {_id: props.match.params.id}})

    const programs = query.ProgramMany();

    const goToControls = () => {
        props.history.push(`${props.match.url}/controls`)
    }

    return  query.$state.isLoading ? null : (
        <Box 
            round="xsmall"
            overflow="hidden"
            background="neutral-2"
            style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
            <Box 
                direction="row"
                align="center"
                justify="between"
                pad="xsmall"
                background="accent-2"
                style={{marginBottom: 12}}>
                <Text>
                    {device?.name}
                </Text>
                <Button icon={<ExitToApp />}
                    onClick={() => goToControls()}
                    label="Go to controls" />
                
            </Box>

            <div className="top-row">
                <Box className="detail-col">
                    <Box>
                        <Select 
                            options={programs}
                            labelKey="name"
                            valueKey="_id" />
                      
                      <Text style={{marginTop: 8}}>Uptime: 3months 2days 24hrs</Text>
                    </Box>
                </Box>
               {/*<Map 
                    markerIcon={MarkerIcon}
                    center={[-36.87732912268097,174.85584289406773]}
                    markers={{
                        text: device?.name || '',
                        position: [-36.87732912268097,174.85584289406773]
                    }}
                    className="location-col" /> */}
            </div>
            <div className="bottom-row">
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

                <Box className="notes-col">
                    <Box>
                        <Text>Notes</Text>
                        <List data={[]}/>
                    </Box>
                </Box>
            </div>
        </Box>
    )
}