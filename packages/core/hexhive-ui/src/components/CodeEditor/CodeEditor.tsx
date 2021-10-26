import React from 'react';
import { Box } from 'grommet';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-github";

export interface CodeEditorProps {
	value: string;
}

export const CodeEditor : React.FC<CodeEditorProps> = (props) => {
	return (
		<Box flex>
			<AceEditor 
				height="100%"
				width="100%"
				value={props.value}
				/>
		</Box>
	)
}