import { Box, Text } from 'grommet';
import { Upload } from 'grommet-icons';
import { useDropzone } from 'react-dropzone';

import React from 'react';

export const UploadPlaceholder = (props) => {
	return (
		<Box 
			flex 
			direction="column" 
			align="center" 
			justify="center">
			<Upload  size="medium" />
			<Text>Upload files...</Text>
		</Box>
	)
}