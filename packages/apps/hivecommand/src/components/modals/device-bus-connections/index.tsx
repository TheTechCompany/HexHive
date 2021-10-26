import { BaseModal } from '../base';
import { Box, Text, Select } from 'grommet'
import React, {useState, useEffect} from 'react';

export const DeviceBusConnectionModal = (props) => {

	const [ connection, setConnection ] = useState<{key: string, device: string, value: string}[]>([])

	useEffect(() => {
		setConnection(props.connections)
	}, [props.connections])

	const onChange = (id: string, key: string, value: any) => {
		let c = connection.slice()
		let ix = connection.map((x) => x.key).indexOf(id)
		console.log(c, ix)
		c[ix] = Object.assign({...c[ix]}, {[key]: value});
		setConnection(c)
	}

	const onSubmit = () => {
		props.onSubmit(connection)
	}

	return (
		<BaseModal
			title="Create Mapping"
			open={props.open}
			onSubmit={onSubmit}
			onClose={props.onClose}
			>
			<Box>
			{connection?.map((connection) => (
                            <Box direction="row">
                                <Text>{connection.key}</Text> 
                                <Select 
                                    labelKey="name"
									valueKey={{reduce: true, key: 'id'}}
									onChange={({value}) => onChange(connection.key, 'device', value)}
                                    value={connection?.device}
                                    options={props.devices || []} />
                                <Select
                                    labelKey="key"
									valueKey={{reduce: true, key: 'key'}}
									value={connection?.value}
									onChange={({value}) => onChange(connection.key, 'value', value)}
                                    options={props.devices?.find((a) => a.id == connection.device)?.type?.state || []} />
                            </Box>
                        ))}
			</Box>
		</BaseModal>
	)
}