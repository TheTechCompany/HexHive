import React from 'react';
import {
    Box,
    Button,
    Paragraph,
    Heading
} from 'grommet';
import HiveFlowLogo from '../../assets/hive-flow-logo.png'


export const IntroBlock = (props: any) => {
    return (
        <Box
            flex
            border={{side: 'bottom', color: 'light-4'}}
            pad={{bottom: 'large', top: 'large'}}
            align="center">
            
            <img 
                style={{height: 100, marginBottom: 24}} 
                src={HiveFlowLogo} />
            <Paragraph>
                Flow based control

            </Paragraph>
            <Box margin={{top: 'large'}}>
                <Button 
                    href="/login"
                    label="Get Started" />
            </Box>
        </Box>
    )
}