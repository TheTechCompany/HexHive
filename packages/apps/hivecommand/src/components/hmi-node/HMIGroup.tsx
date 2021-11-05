import { Box } from 'grommet';
import React from 'react';
import { useSVGStyle } from '../../hooks/svg';

export interface HMIGroupProps {
	icons: (string | any)[];
}

export const HMIGroup : React.FC<HMIGroupProps> = (props) => {

	const Icons = props.icons.map((icon) => {
		return useSVGStyle(icon && typeof(icon) === 'string' ? (Icons as any)[icon] : (icon) ? icon : Icons.Previous, (props) => ({
			stroke: props.options?.open == 'true' || props.options?.on == 'true' ? 'green' : 'gray',
			filter: `hue-rotate(${((props.options?.open == true || props.options?.open == 'true') || (props.options?.on == 'true')) ? '45' : '0'}deg)`
    	}));
	})

	console.log(Icons)

	return (
		<Box>
			text
			{Icons.map((Icon) => <Icon />)}
		</Box>
	)
}