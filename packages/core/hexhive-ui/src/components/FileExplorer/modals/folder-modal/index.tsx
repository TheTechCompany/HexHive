import { Box,Text, Layer, TextInput, Button } from 'grommet';
import React from 'react';

export interface FolderModalProps {
    open: boolean;
}

export const FolderModal : React.FC<FolderModalProps> = (props) => {
    return props.open ? (
        <Layer>
            <Box round='xsmall' width="medium">
                <Box pad="xsmall" background="accent-2" direction="row">
                    <Text>Create folder</Text>
                </Box>
                <Box pad="xsmall">
                    <TextInput placeholder="Folder name" />

                </Box>
                <Box
                    pad="xsmall" 
                    justify="end"
                    gap="xxsmall"
                    direction="row">
                    <Button label="Cancel" />
                    <Button primary label="Submit" />

                </Box>
            </Box>
        </Layer>
    ) : null;
}