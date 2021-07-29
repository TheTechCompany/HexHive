import React, { useEffect, useState } from 'react';
import { DeviceModal } from '../../components/modals/device';
import { deviceActions } from '../../actions'
import { Device, Program, useQuery } from '../../gqless'
import { DeploymentList, DeploymentInfo } from '../../components/deployment-list';
import { Box, TextInput, Button } from 'grommet';
import * as Icons from 'grommet-icons';
import { isEqual } from 'lodash';
import { nanoid } from 'nanoid';

export interface DevicePageProps {
    match?: any;
    history?: any;
}

export const Devices : React.FC<DevicePageProps> = (props) => {
    const [ modalOpen, openModal ] = useState<boolean>(false);

    const [ selectedDevice, setSelectedDevice ] = useState<any>();
    const [ editDevice, setEditDevice ] = useState<any>();
    const [ _devices, setDevices ] = useState<Device[]>([])

    const query = useQuery({
        staleWhileRevalidate: true,
        suspense: false
    })

    const devices = query.DeviceMany();
    const programs = query.ProgramMany()

    useEffect(() => {
        if(devices){
            setDevices(devices)
        }
    }, [devices])

    console.log("Devices", query.DeviceMany())


    const [ createDevice, {isLoading, data}] = deviceActions.useCreateDevice()
    const [ updateDevice, info ] = deviceActions.useUpdateDevice()



    const onSubmit = (device: Device) => {
        if(device._id){
            updateDevice({args: {id: device._id, name: device.name || '', network_name: device.network_name || nanoid().substring(0, 8), program: device.program._id }}).then((updated) => {
                console.log("Update result", updated)
            })
        }else{
            createDevice({args: {name: device.name || '', network_name: device.network_name || nanoid().substring(0, 8), program: device.program._id }}).then((new_device) => {
                if(new_device.item){
                    let d: any[] = devices.slice()
                    d.push(new_device.item)
                    setDevices(d)
                    return true;
                }
            })
        }
    }

    const goToSingle = (id: string) => {
        props.history.push(`${props.match.url}/${id}`)
    }

    return query.$state.isLoading ? <>Loading... </>: (
        <Box
            elevation="small"
            background="brand"
            flex
            direction="column" 
            className="device-list">
            <DeviceModal 
                selected={editDevice}
                programs={programs}
                open={modalOpen}
                onSubmit={onSubmit}
                onClose={() => {
                    setEditDevice(null)
                    openModal(false)
                }} />
            <Box align="center" direction="row" pad="small">
                <TextInput placeholder="Search" />
                <Button
                    onClick={() => openModal(true)}
                     margin={{left: 'small'}} 
                     primary 
                     hoverIndicator 
                     color="light-1"
                     label="Add"
                     icon={<Icons.Add />} />
            </Box>
            <Box
                flex
                direction="row"
                >
            <DeploymentList
                devices={devices}
                programs={programs}
                selected={[selectedDevice?._id]}
                onClickRow={({datum}) => {
                    console.log(datum)
                   
                    if(isEqual(selectedDevice, datum)){
                        setSelectedDevice(undefined)
                    }else{
                        setSelectedDevice(datum)
                    }
                }}
                onEditRow={(datum) => {
                    setEditDevice(datum)
                    openModal(true)
                    console.log("Edit", datum)
                }}
                 />
            <DeploymentInfo 
                deployment={selectedDevice}
                open={Boolean(selectedDevice)}/>
                
            </Box>
            
        </Box>
    )
}