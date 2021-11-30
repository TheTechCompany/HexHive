import { HMICanvas } from '../../../components/hmi-canvas';
import React, {useContext, useEffect, useState} from 'react';
import { Box, Text, TextInput, CheckBox, Button } from 'grommet';
import { Checkmark } from 'grommet-icons';
import { DeviceControlContext } from '../context';
import { getDevicesForNode } from '../utils';
import { Bubble } from '../../../components/Bubble/Bubble';
import { BaseStyle } from '@hexhive/styles';

const ActionButton = (props) => {
	return (
		<Box background="accent-1" round="xsmall" width={'100%'} elevation="small">
			<Button 
				plain
				hoverIndicator={'accent-2'}
				onClick={props.onClick}
				style={{padding: 6, borderRadius: 3, width: '100%'}}
				label={props.label} />
		</Box>
	)
}
export default () => {

    const [ infoTarget, setInfoTarget ] = useState<{x?: number, y?: number}>(undefined);
    const [ selected, setSelected ] = useState<{key?: string, id?: string}>(undefined)

    const [ workingState, setWorkingState ] = useState<any>({})

	const { program, actions, values, hmi, hmiNodes, groups, changeDeviceMode, changeDeviceValue, performAction, controlId } = useContext(DeviceControlContext)


    const getDeviceValue = (name?: string, units?: {key: string, units?: string}[]) => {
        //Find map between P&ID tag and bus-port

        if(!name) return;

    
        let v = values.filter((a) => a?.deviceId == name);
        let state = program?.devices?.find((a) => a.name == name).type?.state;

         
        return v.reduce((prev, curr) => {
            let unit = units?.find((a) => a.key == curr.valueKey);
            let stateItem = state.find((a) => a.key == curr.valueKey);
            let value = curr.value;

            if(!stateItem) return prev;

            if(stateItem?.type == "IntegerT" || stateItem?.type == "UIntegerT"){
                value = parseFloat(value).toFixed(2)
            }
            return {
                ...prev,
                [curr.valueKey]: value
            }
        }, {})
    
    }

    const renderActionValue = (deviceName: string, deviceInfo: any, deviceMode: string, state: any) => {
        let value = getDeviceValue(deviceName, deviceInfo.state)?.[state.key];

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
 
	 }


	 const deviceModes = program?.devices?.map((a) => {
        let vals = values.filter((b) => b?.deviceId == a.name);
        // if(!vals.find((a) => a.valueKey == "mode")) console.log(a.name)
        return {name: a.name, mode: vals.find((a) => a.valueKey == 'mode')?.value};
    }) || [];


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
		<Box flex direction="row">
			<Box flex>
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
			setInfoTarget({x: x + (node.width || node?.type?.width), y: y})
			
			setSelected(select)
		}}
		/>
		</Box>
			<Box elevation="small" background="light-1">
				<Box background="accent-1" align="center">
					<Text>Controls</Text>
				</Box>
				<Box pad="small"flex>
					<Box border={{side: 'bottom', size: 'small'}}>
						<Text>Current State</Text>

						<Text size="small">Mode: Running</Text>
					</Box>
					<Box  border={{side: 'bottom', size: 'small'}}>
						<Text>Commands</Text>
						<Box gap="xsmall">
							<ActionButton 
								label="Start" />
							{actions.map((action) => (
								<ActionButton
									label={action.name} />
							))}
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}