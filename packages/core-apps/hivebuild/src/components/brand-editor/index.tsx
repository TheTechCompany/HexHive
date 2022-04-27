import { Box, Text, Image, TextArea, TextInput, Button } from 'grommet';
import { Upload } from 'grommet-icons';
// import { HexImage } from '@hexhive/ui'
import React from 'react';

export interface BrandEditorProps {
    app?: any;
}

export const BrandEditor : React.FC<BrandEditorProps> = (props) => {
    return (
        <Box 
            gap="xsmall"
            pad="small"
            flex>
            <Box 
                round="small"
                background="accent-1"
                elevation="small" direction="row">
                <Box pad="small">

            {/* <HexImage 
                height={200}
                width={200}
                src={"https://via.placeholder.com/150"} /> */}
                <Button primary icon={<Upload />} label="Upload" />
                </Box>
            <Box
                flex
                gap="xsmall"
                pad="xsmall"
                >
                <TextInput value={props.app?.name} placeholder="Application Name" />
                <Text>Made by</Text>

            </Box>
            
            </Box>
            <Box elevation="small" background="accent-2" round="small" flex pad="small"> 
            <TextArea
                    rows={8}
                    placeholder="Description" />
           
            </Box>

        </Box>
    )
}