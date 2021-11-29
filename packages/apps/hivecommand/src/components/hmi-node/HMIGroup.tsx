import { Box } from 'grommet';
import React, {useMemo, useContext} from 'react';
import { useSVGStyle } from '../../hooks/svg';
import * as HMIIcons from '../../assets/hmi-elements'
import { RetractingPort } from '@hexhive/ui';
import { HMICanvasContext } from '../hmi-canvas/HMICanvasContext';

export interface HMIGroupProps {
	extras?: {
		nodes?: any[];
		ports?: any[];
		icons: (string | any)[];
	}
	width?: number;
	height?: number;
}

export const HMIGroup : React.FC<HMIGroupProps> = (props) => {

	const { getDeviceOptions, getDeviceConf } = useContext(HMICanvasContext)

	let nodes = useMemo(() => {
		return props.extras.nodes?.sort((a, b) => (a.z || 0) - (b.z || 0)).map((node) => {
			let options : any = {};
			let conf : any = {};
			if(getDeviceOptions) {
				options = getDeviceOptions(node.devicePlaceholder?.name);
			}
			if(getDeviceConf) {
				conf = getDeviceConf(node.devicePlaceholder?.name);
			}
			
			// const options = getDeviceOptions(node?.devicePlaceholder?.name)
			// const conf = getDeviceConf(node?.devicePlaceholder?.name)

			return {
				id: node.id,
				extras: {
					icon: useSVGStyle(HMIIcons[node.type.name], (props) => ({
						stroke: (options?.opening == 'true' || options?.starting == 'true') ? 'yellow' : (options?.open == 'true' || options?.on == 'true' || parseFloat(options?.speed) > 0)? 'green' : 'gray',
						filter: `hue-rotate(${((options?.open == true || options?.open == 'true') || (options?.on == 'true')) ? '45' : '0'}deg)`
					})),
					options,
					conf
				},
				x: node.x,
				y: node.y,
				device: node.devicePlaceholder,
				rotation: node.rotation,
				scaleX: node.scaleX,
				scaleY: node.scaleY
			}
		})
	}, [props.extras.nodes]);
	// const Icons = props.icons.map((icon) => {
	// 	return useSVGStyle(icon && typeof(icon) === 'string' ? (Icons as any)[icon] : (icon) ? icon : Icons.Previous, (props) => ({
	// 		stroke: props.options?.open == 'true' || props.options?.on == 'true' ? 'green' : 'gray',
	// 		filter: `hue-rotate(${((props.options?.open == true || props.options?.open == 'true') || (props.options?.on == 'true')) ? '45' : '0'}deg)`
    // 	}));
	// })

	// console.log(Icons)
	const ports = useMemo(() => {
		return props.extras?.ports?.map((port) => ({
			id: port.id,
			x: port.x,
			y: port.y,
			rotation: port.rotation,
			length: port.length
		}))
	}, [props.extras.ports]);

	return (
		<Box style={{position: 'relative', width: props.width, height: props.height}}>
			{nodes.map((Node) => 
				<div
					style={{
						position: 'absolute', 
						width: '55px', 
						height: '55px', 
						transform: `rotate(${Node.rotation || 0}deg) scaleX(${Node.scaleX || 1}) scaleY(${Node.scaleY || 1})`, 
						left: Node.x, 
						top: Node.y
					}}> 
						<Node.extras.icon device={Node.device} scaleX={Node.scaleX} scaleY={Node.scaleY} rotation={Node.rotation} conf={Node.extras.conf} options={Node.extras.options} />
				</div>)}
			{ports.map((Port) => 
				<div style={{position: 'absolute', left: Port.x, top: Port.y}}>
					<RetractingPort id={Port.id} rotation={Port.rotation} height={Port.length} />
				</div>)}
			{/* {Icons.map((Icon) => <Icon />)} */}
		</Box>
	)
}