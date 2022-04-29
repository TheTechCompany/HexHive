import { Box, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const baseUrl = process.env.NODE_ENV == 'production' ? '' : 'http://localhost:9999';

export const ApplicationSingle = () => {
    
    const { id } = useParams()
    const [ application, setApplication ] = useState<any>({});

    useEffect(() => {
        fetch(`${baseUrl}/api/applications/${id}`).then((r) => r.json()).then((data) => {
            setApplication(data.result);
        })
    }, [])


    return (
        <Box flex>
            <Box  
                direction='row'
                pad="xsmall" 
                background={'accent-2'}>
                <Text>
                    {application.name}
                </Text>
            </Box>
            <Box flex>

            </Box>
        </Box>
    )
}