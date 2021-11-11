import React, { useState, useEffect } from 'react';
import { Box, Select, Text, TextInput } from 'grommet'
import { BaseModal } from '../base';
import { FormControl } from 'core/hexhive-ui/src/components';

export interface DevicePluginModalProps {
	open: boolean;
	onClose?: () => void;
	onSubmit?: (plugin: any) => void;
	plugins?: any[];
	devices?: any[];
	flows?: any[];
	selected?: any;
}

export const DevicePluginModal : React.FC<DevicePluginModalProps> = (props) => {

	const [ plugin, setPlugin ] = useState<{
		plugin?: string,
		rules?: string,
		configuration?: any
	}>({})

	// const [ selectedPlugin, setSelectedPlugin ] = useState<string>('');
	// const [ activeFlow, setActiveFlow ] = useState<string>('');
	// const [ pluginConfiguration, setPluginConfiguration ] = useState<any>({})

	const onChangeConfiguration = (key: string, value: any) => {
		let conf = Object.assign({}, plugin.configuration)
		conf[key] = value;
		setPlugin({...plugin, configuration: conf})
	}

	const onSubmit = () => {
		props.onSubmit?.(plugin)
	}

	useEffect(() => {
		if(props.selected){
			console.log(props.selected)
			// setSelectedPlugin(props.selected.id)
			// let conf = props.selected.configuration.reduce((prev, curr) => ({
			// 	...prev,
			// 	[curr.key]: curr.value
			// }), {})

			// setPluginConfiguration(conf)
		}
	}, [props.selected])

	const renderPluginFormItem = (item: any) => {

		let requirements : any = {};
		if(item.requiresConnection?.edges.length > 0){

			let values = [];
			item.requiresConnection?.edges?.forEach((i) => {
				requirements[i.key] = plugin?.configuration?.[i.node.key]
				values.push(plugin?.configuration?.[i.node.key])
			})

			if(values.indexOf(undefined) > -1){ return }
		}
		switch(item.type) {
			case "Number":
				return (<TextInput 
						value={plugin.configuration?.[item.key] || ''}	
						onChange={(e) => onChangeConfiguration(item.key, e.target.value)}
					type="number" />);
			case "Device":
				return( <Select
					labelKey="name"	
					value={plugin?.configuration?.[item.key]}
					valueKey={{key: 'id', reduce: true}}
					onChange={({value}) => onChangeConfiguration(item.key, value)}
					options={props.devices || []} />)
			case "DeviceState":
				return (<Select 	
						labelKey="key"
						value={plugin?.configuration?.[item.key]}
						valueKey={{key: 'id', reduce: true}}
						onChange={({value}) => onChangeConfiguration(item.key, value)}
						options={props.devices.find((a) =>  a.id == requirements?.device)?.type?.state} />)
			default: return;
		}
	}
	const renderPluginForm = () => {
		return props.plugins.find((a) => a.id === plugin?.plugin)?.config.map((conf) => (
			<Box 
				align="center"
				justify="between"
				direction="row">
				<Box flex>
					<Text>{conf.key}</Text>

				</Box>
				<Box flex>
					{renderPluginFormItem(conf)}
				</Box>
			</Box>
		));
	}
	return (
		<BaseModal
			open={props.open}
			onClose={props.onClose}
			onSubmit={onSubmit}
			title={"Add a Plugin"}
			>

			<Select
				labelKey="name"
				placeholder="Select a plugin"
				valueKey={{reduce: true, key: 'id'}}
				value={plugin?.plugin}
				onChange={({value}) => setPlugin({...plugin, plugin: value})}
				options={props.plugins}
				/>
			<FormControl 
				value={plugin?.rules}
				onChange={(value) => setPlugin({...plugin, rules: value})}
				labelKey="name"
				placeholder="(Optional) active flow" 
				options={props.flows || []} />
			{renderPluginForm()}
		</BaseModal>
	)
}