import { Box } from 'grommet';
import React, { useMemo } from 'react';
import { DemoCampaign } from './demo';
import useResizeAware from 'react-resize-aware';
import DEMO from './demo.html';
import { PreviewFrame } from './PreviewFrame';

export interface ScreenPreviewProps {
	previewUrl: string;
	width?: any;
	height?: any;
}

export const ScreenPreview : React.FC<ScreenPreviewProps> = (props) => {
	const [resizeListener, sizes] = useResizeAware();

	const {width, height} = useMemo(() => {
		console.log(sizes)
		return {
			width: (sizes.height / 1920).toFixed(2),
			height: (sizes.height / 1920).toFixed(2)
		}
	}, [sizes])

	return (
		<Box
			style={{aspectRatio: '1080 / 1920'}}
			background="neutral-1"
			width={props.width}
			height={props.height}
			round="small"
			elevation="small">

			<Box  overflow="hidden" background="neutral-2" round="small" flex >
			{resizeListener}
			
				{props.previewUrl ? (<PreviewFrame width={width} height={height} src={props.previewUrl} />) : <DemoCampaign />}
			
			</Box>
		</Box>	
	)
}