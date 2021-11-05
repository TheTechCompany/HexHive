import { BaseModal } from '../base';
import { Box, Text, Select } from 'grommet'
import React, {useState, useEffect} from 'react';

export const DeviceBusConnectionModal = (props) => {

	const [ connection, setConnection ] = useState<{key?: string, subindex?: number, device?: string, value?: string}[]>([])

	const [connectionValues, setConnectionValues ] = useState<({key?: string} & any)[]>([]);

	console.log("Connections", connection)

	useEffect(() => {
		setConnection(props.connections)
	}, [props.connections])

	const onChange = (id: string, key: string, value: any) => {
		let c = connectionValues.slice()
		let ix = connectionValues.map((x) => x.key).indexOf(id)
		console.log(c, ix)
		if(ix > -1){
			c[ix] = Object.assign({...c[ix]}, {[key]: value});
		}else{
			c.push({key: id, [key]: value})
		}
		
		setConnectionValues(c)
	}

	useEffect(() => {
		if(props.selected){
			console.log("SELECTED", props.selected)
			setConnectionValues(props.selected.map((x) => ({...x, key: x?.key?.key, device: x.device?.id, value: x.value?.key})))
		}
	}, [props.selected])

	const onSubmit = () => {
		props.onSubmit(connectionValues)
	}
console.log(connectionValues)
	return (
		<BaseModal
			title="Create Mapping"
			width="large"
			open={props.open}
			onSubmit={onSubmit}
			onClose={props.onClose}
			>
			<Box>
			{connection?.sort((a, b) => a.subindex - b.subindex).map((connection) => (
                            <Box align="center" direction="row">
                                <Box flex>
									<Text>{connection.key}</Text> 
								</Box>
								<Box flex>
									<Select 
										labelKey="name"
										valueKey={{reduce: true, key: 'id'}}
										placeholder="Device"
										onChange={({value}) => onChange(connection.key, 'device', value)}
										value={connectionValues?.find((a) => a.key == connection.key)?.device}
										options={props.devices || []} />
								</Box>
								<Box direction="row" flex>
									<Select
										labelKey="key"
										valueKey={{reduce: true, key: 'key'}}
										value={connectionValues?.find((a) => a.key == connection.key)?.value}
										placeholder="Device Key"
										onChange={({value}) => onChange(connection.key, 'value', value)}
										options={props.devices?.find((a) => a.id == connectionValues?.find((a) => a.key == connection.key)?.device)?.type?.state || []} />
								</Box>
                            </Box>
                        ))}
			</Box>
		</BaseModal>
	)
}