import { Box } from 'grommet';
import React, {useMemo} from 'react';

import useResizeAware from 'react-resize-aware';

export const PreviewFrame = (props) => {
	console.log(props)
	return (
		<Box flex>
			<iframe {...props} style={{
				marginBottom: -1460,
				width: '1080px', height: '1920px',
				transform: `scale(${props.width}, ${props.height})`,
				transformOrigin: `0px 0px`, border: 'none', outline: 'none'}} />
		</Box>
	)
}