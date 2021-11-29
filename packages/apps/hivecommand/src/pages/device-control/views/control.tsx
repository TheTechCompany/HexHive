import { HMICanvas } from '../../../components/hmi-canvas';
import React, {useContext, useEffect, useState} from 'react';
import { Box, Text, TextInput, CheckBox, Button } from 'grommet';
import { Checkmark } from 'grommet-icons';
import { DeviceControlContext } from '../context';
import { getDevicesForNode } from '../utils';
import { Bubble } from '../../../components/Bubble/Bubble';

export default () => {

    const [ infoTarget, setInfoTarget ] = useState<{x?: number, y?: number}>(undefined);
    const [ selected, setSelected ] = useState<{key?: string, id?: string}>(undefined)

    const [ workingState, setWorkingState ] = useState<any>({})

	const { program, values, hmi, hmiNodes, groups, changeDeviceMode, changeDeviceValue, performAction, controlId } = useContext(DeviceControlContext)


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
        // console.log(v, units)
            // return {key: busPort.value, value: v.find((a) => a.valueKey == busPort.key)?.value};
        return v.reduce((prev, curr) => {
            let unit = units?.find((a) => a.key == curr.valueKey);
            let stateItem = state.find((a) => a.key == curr.valueKey);
            console.log(unit)
            let value = curr.value;

            if(!stateItem) return prev;

            if(stateItem?.type == "IntegerT" || stateItem?.type == "UIntegerT"){
                value = parseFloat(value).toFixed(2)
            }
            return {
                ...prev,
                [curr.valueKey]: value //`${value} ${unit && unit.units ? unit.units : ''}`
            }
        }, {})
    
    }

    const renderActionValue = (deviceName: string, deviceInfo: any, deviceMode: string, state: any) => {
        let value = getDeviceValue(deviceName, deviceInfo.state)?.[state.key];

        console.log(deviceName, deviceInfo, state, value)
        if(state.writable && deviceMode == "Manual"){
            return (
                <TextInput 
                    style={{padding: "none"}}
                    type="number" 
                    size="small" 
                    plain 
                    placeholder={state.key} 
                    onChange={(e) => setWorkingState({...workingState, [state.key]: parseFloat(e.target.value)})}
                    value={workingState[state.key] || parseFloat(value)} />
            )
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
										 deviceId: controlId,
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
						 {workingState[state.key] != undefined ? (<Button 
							 plain
							 onClick={() => {
								 sendChanges(deviceName, state.key, workingState[state.key])
							 }}
							 style={{padding: 6, borderRadius: 3}}
							 hoverIndicator
							 icon={<Checkmark size="small" />} />) : ''}
					  </Box>
				  ))}
				 </Box>
  
  {/* 
  
				  {deviceValues(node?.devicePlaceholder?.name)} */}
				  <Box align="center" justify="around" direction="row">
				  {deviceInfo?.actions?.map((action) => (
					  <Button
						  plain
						  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 6, borderRadius: 3}}
						  hoverIndicator={'accent-1'}
						  onClick={() => {
							  performAction({
								  args: {
									  deviceId: controlId, 
									  deviceName: deviceName,
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


	 const deviceModes = program?.devices?.map((a) => {
        let vals = values.filter((b) => b?.deviceId == a.name);
        if(!vals.find((a) => a.valueKey == "mode")) console.log(a.name)
        return {name: a.name, mode: vals.find((a) => a.valueKey == 'mode')?.value};
    }) || [];

    // console.log({deviceModes})

	const sendChanges = (deviceName: string, stateKey: string, stateValue: any) => {
        changeDeviceValue({
            args: {
                deviceName: deviceName,
                key: stateKey,
                value: stateValue
            }
        }).then(() => {
            let ws = Object.assign({}, workingState);
            delete ws[stateKey] 
            setWorkingState(ws)
        })
    }

    useEffect(() => {
        setWorkingState({})
    }, [selected])
 
	return (
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
	)
}