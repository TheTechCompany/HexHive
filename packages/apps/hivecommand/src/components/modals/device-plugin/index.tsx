import React, { useState, useEffect } from 'react';
import { Box, Select, Text, TextInput } from 'grommet'
import { BaseModal } from '../base';

export interface DevicePluginModalProps {
	open: boolean;
	onClose?: () => void;
	onSubmit?: (plugin: any) => void;
	plugins?: any[];
	devices?: any[];
	selected?: any;
}

export const DevicePluginModal : React.FC<DevicePluginModalProps> = (props) => {

	const [ selectedPlugin, setSelectedPlugin ] = useState<string>('');
	
	const [ pluginConfiguration, setPluginConfiguration ] = useState<any>({})

	const onChangeConfiguration = (key: string, value: any) => {
		let conf = Object.assign({}, pluginConfiguration)
		conf[key] = value;
		setPluginConfiguration(conf)
		console.log(conf)
	}

	const onSubmit = () => {
		props.onSubmit?.({
			plugin: selectedPlugin,
			configuration: pluginConfiguration
		})
	}

	useEffect(() => {
		console.log(props.selected)
		if(props.selected){
			setSelectedPlugin(props.selected.id)
			let conf = props.selected.configuration.reduce((prev, curr) => ({
				...prev,
				[curr.key]: curr.value
			}), {})
			console.log("PLUGIN CONF", conf)
			setPluginConfiguration(conf)
		}
	}, [props.selected])

	const renderPluginFormItem = (item: any) => {

		let requirements : any = {};
		if(item.requiresConnection?.edges.length > 0){

			let values = [];
			item.requiresConnection?.edges?.forEach((i) => {
				requirements[i.key] = pluginConfiguration[i.node.key]
				values.push(pluginConfiguration[i.node.key])
			})

			if(values.indexOf(undefined) > -1){ return }
		}
		switch(item.type) {
			case "Number":
				return (<TextInput 
						value={pluginConfiguration[item.key] || ''}	
						onChange={(e) => onChangeConfiguration(item.key, e.target.value)}
					type="number" />);
			case "Device":
				return( <Select
					labelKey="name"	
					value={pluginConfiguration[item.key]}
					valueKey={{key: 'id', reduce: true}}
					onChange={({value}) => onChangeConfiguration(item.key, value)}
					options={props.devices || []} />)
			case "DeviceState":
				return (<Select 	
						labelKey="key"
						value={pluginConfiguration[item.key]}
						valueKey={{key: 'id', reduce: true}}
						onChange={({value}) => onChangeConfiguration(item.key, value)}
						options={props.devices.find((a) =>  a.id == requirements?.device)?.type?.state} />)
			default: return;
		}
	}
	const renderPluginForm = () => {
		return props.plugins.find((a) => a.id === selectedPlugin)?.config.map((conf) => (
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
				value={selectedPlugin}
				onChange={({value}) => setSelectedPlugin(value)}
				options={props.plugins}
				/>
			{renderPluginForm()}
		</BaseModal>
	)
}