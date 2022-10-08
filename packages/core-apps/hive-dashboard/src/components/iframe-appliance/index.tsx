import { Box, Text, Spinner } from 'grommet';
import React, { useState } from 'react';

export const IFrameAppliance = () => {
    const [ loading, setLoading ] = useState<boolean>(true);
    
    const onLoad = () => {
        setLoading(false);
    }

    return (
        <Box 
            direction="column"
            flex>
            <Box 
                flex 
                direction="column">
                {loading ? (
                    <Box 
                        direction="column"
                        align="center"
                        justify="center"
                        style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            position: 'absolute', 
                            top: 0, 
                            left: 0, 
                            width: '100%', 
                            height: '100%'}}>
                        <Spinner size="medium" />
                        <Text>Loading ...</Text>
                    </Box>
                ) : null}
                <iframe 
                    style={{flex: 1}} 
                    onLoad={onLoad} 
                    allow="camera;microphone"
                    src="https://apps.hexhive.io/element-v1.8.1/#/home" >

                </iframe>
            </Box>
     
        </Box>

    );
}   