import React, { useState, useEffect } from 'react';
import { BaseModal } from '@hexhive/ui';
import { Box, Select, TextInput } from 'grommet';
import QRCode from 'qrcode.react';

const options = [
	'qr-code', 'email', 'sms', 'phone', 'text', 'facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'website'
]
export const CreateAnalyticModal = (props) => {
	const [ analytic, setAnalytic ] = useState<{
		id?: string,
		type: 'qr-code' | 'email' | 'sms' | 'phone' | 'text' | 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | 'website',
		name: string,
		data: string
	}>({
		type: 'qr-code',
		name: '',
		data: ''
	})

	useEffect(() => {
		setAnalytic({
			...props.selected
		})
	}, [props.selected])
	const onSubmit = () => {
		props.onSubmit(analytic)
	}

	return (
		<BaseModal
			width="large"
			title="Create Analytics"
			onClose={props.onClose}
			onSubmit={onSubmit}
			open={props.open}>
			<Box gap="xsmall" align="center" flex direction="row">
				<Box overflow="hidden" round="xsmall" elevation="small">
					<QRCode value={analytic.data} />
				</Box>
			<Box flex gap="xsmall">
				<Select 
					value={analytic.type}
					onChange={({value}) => setAnalytic({...analytic, type: value})}
					options={options} />
				
				<TextInput 
					onChange={(e) => setAnalytic({...analytic, name: e.target.value})}
					value={analytic.name} 
					placeholder="Label" />

				<TextInput 
					value={analytic.data}
					onChange={(e) => setAnalytic({...analytic, data: e.target.value})}
					placeholder="Data" />
			</Box>
			</Box>
		</BaseModal>
	)
}