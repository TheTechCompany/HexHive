import React from 'react';
import { Box, Heading, Paragraph } from 'grommet'
export const EditorBlock = (props: any) => {
    return (
        <Box
            pad="large"
            flex>
            <Box    
                align="end">
                <Heading level='2'>Control the flow</Heading>
                <Paragraph>
                    Create programs that control I/O devices, data flow and more with Hive Flow Based Programming.
                    Edit your programs in the browser with version control and update your nodes seamlessly.
                </Paragraph>
            </Box>
            <Box    
                align="start">
                <Heading level='2'>Customise your controls</Heading>
                <Paragraph>
                    With an infinite canvas for building your control interfaces you'll never run out of space, and the Hive Flow plugin system means you can make and re-use parts again and again.
                    Edit your components in the browser with live reload and version control.
                </Paragraph>
            </Box>
            <Box 
                
                align="end">
                <Heading level='2'>Secure your remote assets</Heading>
                <Paragraph>
                    Our network is secured with a VPN layer so you can always access your edge assets with security and peace of mind.
                </Paragraph>
            </Box>

        </Box>
    )
}

