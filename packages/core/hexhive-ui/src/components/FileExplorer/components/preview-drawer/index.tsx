import { Box, Text, Layer, Button } from 'grommet';
import { Close, LinkNext } from 'grommet-icons';
import React from 'react';
import { useFileExplorer } from '../../context';

export const PreviewDrawer = (props: any) => {
    const { selectFile } = useFileExplorer()

    const onClose = () => {
        selectFile?.(undefined)   
    }
    return (
                <Layer 
                    modal={false}
                    position="right">
                    <Box 
                        width="30vw"
                        height="100vh">
                        <Box 
                            align="center"
                            direction="row">
                            <Button 
                                onClick={onClose}
                                hoverIndicator icon={<LinkNext />} />
                            <Text>
                            {props.data?.name}
                            </Text>
                        </Box>
                        <Text>
                            Preview
                        </Text>
                         

                    </Box>
                </Layer>
    )
}