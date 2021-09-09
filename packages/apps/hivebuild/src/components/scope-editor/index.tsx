import { Box, Text } from 'grommet';
import React from 'react';

export interface ScopeEditorProps {
    app?: any;
}

export const ScopeEditor : React.FC<ScopeEditorProps> = (props) => {
    return (
        <Box>  
            <Text>Scope</Text>
        </Box>
    )
}