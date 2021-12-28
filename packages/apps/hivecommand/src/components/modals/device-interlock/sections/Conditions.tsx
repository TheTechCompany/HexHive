import React, {useContext, useMemo} from 'react';
import { Box, Text } from 'grommet';
import { FormControl, FormInput } from '@hexhive/ui';
import { DeviceInterlockContext } from '../context';
import AntdWidgets from 'react-awesome-query-builder/lib/components/widgets/antd';
import AntdConfig from 'react-awesome-query-builder/lib/config/antd';

import { Builder, Utils as QbUtils , BasicConfig, Query, Types } from 'react-awesome-query-builder';
import { merge } from 'lodash'

import 'antd/dist/antd.css'; // or import "react-awesome-query-builder/css/antd.less";
import 'react-awesome-query-builder/lib/css/styles.css';
import { SetpointWidget } from '../widgets/setpoint/SetpointWidget';


const InitialConfig = AntdConfig

const widgets = {
	...InitialConfig.widgets,
	setpoint: {
		// types: number,
		...InitialConfig.widgets.select,
		values: {},
		jsType: 'object',
		validateValue: () => true,
		factory: (props) => <SetpointWidget {...props} />
	}
}

const types : Types = {
	...InitialConfig.types,
	setpoint: {
		defaultOperator: 'equal',
		widgets: {
			setpoint: {
				operators: ['equal', 'not_equal', "less", "less_or_equal", "greater", "greater_or_equal"],
				widgetProps: {

				}
			}
		}
	}
}
export const ConditionSection = (props) => {
	const { interlock, devices, setInterlock } = useContext(DeviceInterlockContext)

	const config = useMemo(() => {


		const stateFields = (devices || []).reduce((prev, curr) => {
			console.log(curr)
			let state = curr?.type?.state.reduce((old, newOne) => ({
				...old,
				[newOne.key]: {
					label2: `${curr.name}.${newOne.key}`,
					label: newOne.key,
					type: newOne.type == "BooleanT" ? 'boolean' : 'setpoint',
					fieldSettings: {
						options: curr?.setpoints?.map((a) => ({
							name: a.name,
							value: a.id
						})),
					},
					valueSources: ['value'],
				}
			}), {})

			return {
				...prev,
				[curr.name]: { 
					type: '!struct',
					label: curr.name,
					subfields: state,
				}
			}
		}, {})

		console.log({stateFields})
		return {
			...InitialConfig,
			fields: stateFields,
			widgets,
			types,
			settings: {
				...InitialConfig.settings,
				// renderField: (field, props) => {  
				// 	console.log(field, props);
				// 	return <FieldCascader {...field}/>
				// }
			}
		}
		// console.log("Config udpate")
	}, [devices])

	const query = useMemo(() => {
		// if(interlock.state) {
		// console.log("Update tree", interlock)


		// console.log({state: interlock.state})
		// let tree = interlock.state || {id: QbUtils.uuid(), type: 'group'}
		// console.log({tree})

		// const imTree = QbUtils.loadTree(tree)
		// console.log({imTree})

		return QbUtils.checkTree(QbUtils.loadTree({id: 'root', type: 'group'}), config)

			// }
	}, [interlock.state])

	return (
		<Box>
			<Query
				{...config}
				value={query}
				onChange={(tree, config) => {
				
					setInterlock({...interlock, state: QbUtils.getTree(tree)})
					// setQuery(tree)
					// console.log(QbUtils.getTree(tree))
				}}
				renderBuilder={(props) => (
					<Builder {...props} />
				)} />
			{/* <FormControl 
					value={interlock.inputDevice}
					onChange={(value) => setInterlock({...interlock, inputDevice: value})}
					options={props.devices || []}
					placeholder="Input Device" />
				<FormControl 
					value={interlock.inputDeviceKey}
					labelKey="key"
					onChange={(value) => setInterlock({...interlock, inputDeviceKey: value})}
					options={props.devices?.find((a) => a.id == interlock?.inputDevice)?.type?.state || []}
					placeholder="Input Device State Key" />
				<FormInput 
					value={interlock.comparator}
					onChange={(value) => setInterlock({...interlock, comparator: value})}
					placeholder="Comparison Operator" />
				<FormControl 
					placeholder="Value Type"
					labelKey="label"
					value={interlock.valueType || 'value'}
					onChange={(value) => setInterlock({...interlock, valueType: value})}
					options={[{id: 'value', label: "Value"} , {id: 'setpoint', label: "Setpoint"}]} />
				{(interlock.valueType && interlock.valueType == "setpoint") ?  (
					<FormControl
						labelKey="name"
						placeholder="Input Device Setpoint"
						value={interlock.assertion}
						onChange={(value) => setInterlock({...interlock, assertion: value})}
						options={props.devices?.find((a) => a.id == interlock?.inputDevice)?.setpoints || []} /> 
				) : <FormInput 
					value={interlock.assertion}
					onChange={(value) => setInterlock({...interlock, assertion: value})}
					placeholder="Input Device State Value" /> } */}
		</Box>
	)
}