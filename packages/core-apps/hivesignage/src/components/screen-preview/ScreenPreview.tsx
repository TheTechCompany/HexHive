import { Box } from 'grommet';
import React from 'react';
import { DemoCampaign } from './demo';

import DEMO from './demo.html';
import { PreviewFrame } from './PreviewFrame';

export interface ScreenPreviewProps {
	previewUrl: string;
	width?: any;
	height?: any;
}

export const ScreenPreview : React.FC<ScreenPreviewProps> = (props) => {
	return (
		<Box
			style={{aspectRatio: '1080 / 1920'}}
			background="neutral-1"
			width={props.width}
			height={props.height}
			round="small"
			elevation="small">
			<Box  overflow="hidden" background="neutral-2" round="small" flex margin="small">
				{props.previewUrl ? (<PreviewFrame src={props.previewUrl} />) : <DemoCampaign />}
			</Box>
		</Box>	
	)
}