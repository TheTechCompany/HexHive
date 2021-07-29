import React, { useEffect, useState } from 'react';
import { deviceActions } from '../../../actions';
import { BaseModal } from '../base';
import { Device, Program } from '../../../gqless'
import { TextInput, Text, Box, Select } from 'grommet';
import { nanoid } from 'nanoid';

export interface DeviceModalProps {
    open: boolean;
    
    onClose?: () => void;
    onSubmit?: (data: Device) => void;
    selected?: any; // change to device interface

    programs?: Program[]

}

export const DeviceModal : React.FC<DeviceModalProps> = (props) => {

    const [ device, setDevice ] = useState<any & Device>({
        name: '',
        program: '',
        network_name: nanoid().substring(0, 8)
    })

    const onClose = () => {
        props.onClose?.()

        setDevice({
            name: '',
            program: {},
            network_name: nanoid().substring(0, 8)
        })
      
    }

    const onSubmit = () => {
        if(device.program && device.program._id && device.name) props.onSubmit?.(device) 
    }

    const generateName = () => {
        deviceActions.generateDeviceName().then((obj) => {
            setDevice({
                ...device,
                name: obj.name
            })
        })
    }

    useEffect(() => {
        if(props.selected){
            setDevice({
                ...props.selected,
                program: props.programs?.find((a) => a._id == props.selected.program)
            })
        
        }
    }, [props.selected])

    return (
        <BaseModal  
            open={props.open}
            title={`${props.selected?.id ? 'Edit' : 'Add'} Device`}
            onClose={onClose}
            onSubmit={onSubmit}
            >
            <TextInput 
                value={device?.name}
                onChange={(e) => setDevice({...device, name: e.target.value})}
                placeholder="Device Name"
                 />

            <Box 
                round="xsmall"
                    justify="start"
                    pad={{right: 'medium'}} 
                    align="center"
                     direction="row" 
                     border={{size:"small"}}>
                    <Box flex>
                    <TextInput 
                        style={{flex: 1}}
                        focusIndicator={false}
                        textAlign="center" 
                        plain 
                        value={device.network_name}
                        onChange={(e) => setDevice({...device, network_name: e.target.value})}
                        placeholder="Network name" />

                    </Box>
                
                    <Box direction="row" justify='start'>
                        <Text size="large">.hexhive.io</Text>

                    </Box>
                </Box>

               
                <Select
                    placeholder="Program"
                    options={props.programs || []}
                    value={device.program || {}}
                    labelKey={"name"}
                    valueKey={"_id"}
                    onChange={({value, option}) => setDevice({...device, program: option})} />
                    
         
        </BaseModal>
    )
}