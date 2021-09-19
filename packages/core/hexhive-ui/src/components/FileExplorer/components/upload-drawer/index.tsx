import { Box, Text, Button, Collapsible, List, Spinner, Meter } from 'grommet';
import { Down, Up } from 'grommet-icons'
import React, { useState } from 'react';
import { useFileExplorer } from '../../context';

export interface UploadDrawerProps {

}

export const UploadDrawer : React.FC<UploadDrawerProps> = (props) => {
    const [ expanded, setExpanded ] = useState<boolean>(true)

    const { uploading } = useFileExplorer()

    return (
        <Box
            round={{corner: 'top', size: 'xsmall'}}
            overflow="hidden"
            background="neutral-2"
            height={{max: '200px'}}
            width="small"
            style={{position: 'absolute', right: 6, bottom: 0}}>
                <Box
         
                    justify="between"
                    align="center"
                    direction="row"
                    background="accent-2" 
                    pad="xsmall">
                    <Text>Uploads</Text>
                    <Button 
                        onClick={() => setExpanded(!expanded)}
                        hoverIndicator
                        plain
                        size="small" 
                        icon={expanded ? <Down size="15px" style={{padding: 4}} /> : <Up size="15px" style={{padding: 4}} />} />
                </Box>
                <Collapsible 
                    open={expanded}>
                    <Box 
                        height={{min: '100px'}}
                        flex>
                        <List   
                            pad="none"
                            data={uploading}>
                            {(datum: any) => (
                                <Box 
                                    pad="xsmall"
                                    align="center"
                                    justify="between"
                                    direction="row">
                                    <Text>{datum.name}</Text>
                                    <Box width="20px" height="20px">
                                    <Meter 
                                        
                                        size="xsmall"
                                        type="pie" 
                                        value={datum.percent} />
                                    </Box>
                                 
                                </Box>
                            )}
                        </List>
                         
                    </Box>
                </Collapsible>
        </Box>
    )
}