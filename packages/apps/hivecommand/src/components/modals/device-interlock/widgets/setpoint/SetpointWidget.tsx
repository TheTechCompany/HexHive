import React, { FC, useMemo } from "react";
import { Switch, Input, Select } from "antd";
import { Box } from "grommet";
import { omit } from "lodash";
import PropTypes from "prop-types";

const Option = Select.Option;

export interface SetpointWidgetProps {
	setValue: (val: any) => void;
	value: {setpoint: boolean, value: number};
	config: any,
	field: string
	customProps: any
	readonly: boolean
	// from fieldSettings:
	options?: {name: string, value: any}[],
	placeholder?: string
	labelYes: string
	labelNo: string
}

const SetpointWidget : FC<SetpointWidgetProps> = (props) => {


  
	const {customProps, placeholder, config, value, labelYes, labelNo, readonly} = props;

	const { renderSize } = config.settings;

	const {setpoint, value: setpointValue} = value || {setpoint: false, value: 0};

	const handleChange = (val) => {
		props.setValue({setpoint: setpoint, value: val});
	}

	// useEffect(() => {
	// 	// props.setValue({})
	// }, [setpoint])

	const  filterOption = (input, option) => {
		const dataForFilter = option.children || option.value;
		return dataForFilter.toLowerCase().indexOf(input.toLowerCase()) >= 0;
	}

	const customSelectProps = omit(customProps, [""]);

	const options = useMemo(() => {
		return props?.options?.map((item) => (
			<Option key={item.value} value={item.value}>{item.name}</Option>
		))
	}, [props.options])
	// const placeholderWidth = calcTextWidth(placeholder);
    // const dropdownWidth = this.optionsMaxWidth + SELECT_WIDTH_OFFSET_RIGHT;
	// const width = value ? dropdownWidth : placeholderWidth + SELECT_WIDTH_OFFSET_RIGHT;

	console.log({setpoint})
    return (
		<div 
			style={{height: renderSize, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
			<Switch
				checkedChildren={labelYes || null}
				unCheckedChildren={labelNo || null}
				checked={setpoint}
				size={renderSize}
				onChange={(val) => props.setValue({setpoint: val, value: setpointValue})}
				disabled={readonly}

			/>
			{setpoint ? (
				<Select    
				style={{ width: '100%' }}
				disabled={readonly}
				key={"widget-select"}
				dropdownMatchSelectWidth={false}
				placeholder={placeholder}
				size={renderSize}
				value={setpointValue}
				onChange={handleChange}
				filterOption={filterOption}
				{...customSelectProps}>{options}</Select>
			) : (
				
			<Input
				size={renderSize}
				value={setpointValue}
				type="number"
				onChange={(e) => handleChange(e.target.value)}
				{...customProps} />
			)}
		</div>
	)
}

// SetpointWidget.propTypes = {
// 	value: PropTypes.object
// }

export  { SetpointWidget }