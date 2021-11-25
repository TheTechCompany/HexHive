import React, {useMemo, useState} from 'react';
import { Box, Text } from 'grommet';
import { LineGraph } from '@hexhive/ui';
import { useQuery, gql } from '@apollo/client';
import { RouteComponentProps } from 'react-router';
import moment from 'moment-timezone';

export const DeviceControlGraph : React.FC<RouteComponentProps<{id: string}>> = (props) => {

	const [ dayBefore, setDayBefore ] = useState<string>(new Date(Date.now() - (1000 * 60 * 60 * 24)).toISOString())

	const { data } = useQuery(gql`
		query Q ($device: String, $device1: String, $device2: String, $device3: String, $deviceId: String, $startDate: String, $valueKey: String, $valueKey2: String){
			commandDeviceTimeseriesTotal(deviceId: $deviceId, device: $device, startDate: $startDate, valueKey: $valueKey) {
				total
			}

			commandDeviceTimeseriesTotal1:commandDeviceTimeseriesTotal(deviceId: $deviceId, device: $device1, startDate: $startDate, valueKey: $valueKey) {
				total
			}

			commandDeviceTimeseries(deviceId: $deviceId, device: $device, startDate: $startDate, valueKey: $valueKey) {
				timestamp
				value
			}
			commandDeviceTimeseries1:commandDeviceTimeseries(deviceId: $deviceId, device: $device1, startDate: $startDate, valueKey: $valueKey) {
				timestamp
				value
			}

			commandDeviceTimeseries2:commandDeviceTimeseries(deviceId: $deviceId, device: $device2, startDate: $startDate, valueKey: $valueKey2) {
				timestamp
				value
			}

			commandDeviceTimeseries3:commandDeviceTimeseries(deviceId: $deviceId, device: $device3, startDate: $startDate, valueKey: $valueKey2) {
				timestamp
				value
			}
		}
	`, {
		variables: {
			device: 'FIT301',
			device1: 'FIT101',
			device2: 'PT201',
			device3: 'PT301',
			deviceId: props.match.params.id,
			valueKey: 'flow',
			valueKey2: 'pressure',
			startDate: dayBefore
		}
	})

	console.log("Render")
	
	const total = useMemo(() => {
		return data?.commandDeviceTimeseriesTotal?.total;
	}, [data?.commandDeviceTimeseriesTotal])

	const total1 = useMemo(() => {
		return data?.commandDeviceTimeseriesTotal1?.total;
	}, [data?.commandDeviceTimeseriesTotal1])


	const values = useMemo(() => {
		return data?.commandDeviceTimeseries?.map((x) => {
			let date = new Date(x.timestamp)
			date = new Date(date.getTime() + (date.getTimezoneOffset() * 60000))
			return {timestamp: moment(date).tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM/YYYY - hh:mma'), value: x.value}
		}) 
	}, [data?.commandDeviceTimeseries])


	const values1 = useMemo(() => {
		return data?.commandDeviceTimeseries1?.map((x) => {
			let date = new Date(x.timestamp)
			date = new Date(date.getTime() + (date.getTimezoneOffset() * 60000))
			return {timestamp: moment(date).tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM/YYYY - hh:mma'), value: x.value}
		}) 
	}, [data?.commandDeviceTimeseries1])
	
	const values2 = useMemo(() => {
		return data?.commandDeviceTimeseries2?.map((x) => {
			let date = new Date(x.timestamp)
			date = new Date(date.getTime() + (date.getTimezoneOffset() * 60000))
			return {timestamp: moment(date).tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM/YYYY - hh:mma'), value: x.value}
		}) 
	}, [data?.commandDeviceTimeseries2])


	const values3 = useMemo(() => {
		return data?.commandDeviceTimeseries3?.map((x) => {
			let date = new Date(x.timestamp)
			date = new Date(date.getTime() + (date.getTimezoneOffset() * 60000))
			return {timestamp: moment(date).tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM/YYYY - hh:mma'), value: x.value}
		}) 
	}, [data?.commandDeviceTimeseries3])
	// const values = [];
	// const query = useQuery({suspense: false, staleWhileRevalidate: true})


	// const values = query.commandDeviceTimeseries({
	// 	device: 'FIT301', 
	// 	valueKey: 'flow', 
	// 	deviceId: props.match.params.id, 
	// 	startDate: dayBefore
	//  })

	return (
		<Box 
			flex
			background="light-1" 
			elevation="small" 
			round="xsmall">
				
			<Box flex direction="row">
				{/* Total Flows */}
				<Box flex>
					<Text>FIT301 - Total Flow: {total?.toFixed(2)} Liters</Text>
					<LineGraph
						data={values || []}
						xKey={'timestamp'}
						yKey={'value'} />
				</Box>
				<Box flex>
					<Text>FIT101 - Total Flow: {total1?.toFixed(2)} Liters</Text>
					<LineGraph 
						data={values1 || []}
						xKey={'timestamp'}
						yKey={'value'}/>
				</Box>
			</Box>
			<Box flex direction="row">
				{/* Membrane pressures */}
				<Box flex>
					<Text>PT201 - Pressure</Text>
					<LineGraph 
							data={values2 || []}
							xKey={'timestamp'}
							yKey={'value'}/>
				</Box>
				<Box flex>
					<Text>PT301 - Pressure</Text>
					<LineGraph 
						data={values3 || []}
						xKey={'timestamp'}
						yKey={'value'}/>
				</Box>
			</Box>
		</Box>
	)
}