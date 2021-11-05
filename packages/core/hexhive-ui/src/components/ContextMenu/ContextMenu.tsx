import { Box, List, Text } from 'grommet';
import React, { RefObject, useState, useEffect} from 'react';

export interface ContextMenuProps {
	target?: React.RefObject<HTMLElement> | {x?: number, y?: number};
	
	onClick?: (item: any) => void;
	header?: any;
	items?: {label: string}[]
}

export const ContextMenu : React.FC<ContextMenuProps> = (props) => {
	const [ target, setTarget ] = useState<{x?: number, y?: number}>({})

	useEffect(() => {
		let target = props.target as any;
		if(target.x || target.y){
			setTarget(target);
		}else if(target != undefined && target.current){
			let bounds = target.current.getBoundingClientRect();
			setTarget({
				x: bounds.x,
				y: bounds.y
			})
		}
	}, [props.target])

	return (
		<Box 
			round="xsmall"
			style={{
				pointerEvents: 'all',
				background: 'white',
				position: 'absolute',
				width: '120px',
				height: '100px',
				left: target.x,
				top: target.y
			}}>
			{props.header}
			<List 
				pad={"none"}
				onClickItem={({item}: any) => props.onClick?.(item)}
				data={props.items || []}>
				{(datum: {label: string}) => (
					<Box direction="row">
						<Text size="small">{datum.label}</Text>
					</Box>	
				)}
			</List>
		</Box>
	)
}