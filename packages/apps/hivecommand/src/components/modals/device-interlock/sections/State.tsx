import React, {useContext, useEffect, useMemo, useState} from 'react';
import { Box } from 'grommet';
import QueryBuilder, {Field, formatQuery, RuleGroupType, RuleType} from 'react-querybuilder';
import { DeviceInterlockContext } from '../context';
import {Query, Builder, BasicConfig, Config, Utils as QbUtils, ImmutableTree} from 'react-awesome-query-builder';
import AntdConfig from 'react-awesome-query-builder/lib/config/antd';

import 'antd/dist/antd.css'; // or import "react-awesome-query-builder/css/antd.less";
import 'react-awesome-query-builder/lib/css/styles.css';
// import 'react-awesome-query-builder/lib/css/compact_styles.css'; //optional, for more compact styles


const InitialConfig = AntdConfig; // or MaterialConfig or BasicConfig

const config : Config = {
	...InitialConfig,
	fields: {
	  qty: {
		  label: 'Qty',
		  type: 'number',
		  fieldSettings: {
			  min: 0,
		  },
		  valueSources: ['value'],
		  preferWidgets: ['number'],
	  },
	  price: {
		  label: 'Price',
		  type: 'number',
		  valueSources: ['value'],
		  fieldSettings: {
			  min: 10,
			  max: 100,
		  },
		  preferWidgets: ['slider', 'rangeslider'],
	  },
	  color: {
		  label: 'Color',
		  type: 'select',
		  valueSources: ['value'],
		  fieldSettings: {
			listValues: [
			  { value: 'yellow', title: 'Yellow' },
			  { value: 'green', title: 'Green' },
			  { value: 'orange', title: 'Orange' }
			],
		  }
	  },
	  is_promotion: {
		  label: 'Promo?',
		  type: 'boolean',
		  operators: ['equal'],
		  valueSources: ['value'],
	  },
	}
  };

  const queryValue = {"id": QbUtils.uuid(), type: "group"};


export const StateSection = (props) => {
	const { device, interlock, setInterlock } = useContext(DeviceInterlockContext)

	// const [ config, setConfig ] = useState<Config>({
	// 	...InitialConfig
	// });

	// const [ query, setQuery ] = useState<ImmutableTree>(QbUtils.checkTree(QbUtils.loadTree(interlock.state || {id: QbUtils.uuid(), type: 'group'}), config));

	const config = useMemo(() => {

		const stateFields = (device?.type?.state || []).reduce((prev, curr) => {
			return {
				...prev,
				[curr.key]: {
					label: curr.key,
					type: curr.type == "BooleanT" ? 'boolean' : 'number',
				  	valueSources: ['value'],
				}
			}
		}, {})

		return {
			...InitialConfig,
			fields: stateFields
		}
		// console.log("Config udpate")
	}, [device])

	const query = useMemo(() => {
		// if(interlock.state) {
		// console.log("Update tree", interlock)
		console.log({state: interlock.state})
		let tree = interlock.state || {id: QbUtils.uuid(), type: 'group'}
		console.log({tree})

		const imTree = QbUtils.loadTree(tree)
		console.log({imTree})

		return QbUtils.checkTree(QbUtils.loadTree(tree), config)

			// }
	}, [interlock.state])
	console.log(device?.type)

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
			{/* <QueryBuilder 
				query={query}
				fields={device?.type?.state?.map((stateItem) : Field => ({
					name: stateItem.key,
					label: stateItem.key,
					valueEditorType: stateItem.type == "BooleanT" ? 'select' : 'text',
					values: stateItem.type == "BooleanT" ? ['true', 'false'].map((x) => ({name: x, label: x})) : undefined,
				}))}
				onQueryChange={(query) => {
					console.log(formatQuery(query, 'json'))
					setQuery(query)
				}}/> */}
		</Box>
	)
}