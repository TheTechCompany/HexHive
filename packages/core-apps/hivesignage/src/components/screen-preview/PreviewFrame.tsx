import React from 'react';

export const PreviewFrame = (props) => {
	return (
		<iframe {...props} style={{width: '100%', height: '100%', border: 'none', outline: 'none'}} />
	)
}