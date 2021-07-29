import React from 'react';
import { ResponsiveContext, Text, Anchor, Heading, Box } from 'grommet'
export const LandingFooter = ({...rest}: any) => {
    return (
        <ResponsiveContext.Consumer>
            {(size) => (
                <Box
                    direction="row"
                    justify="between"
                    border={{side: 'top', color: 'light-4'}}
                    pad={{vertical: 'medium', horizontal: 'medium'}}
                    {...rest}>
                    <Box   
                        gap="large"
                        justify="start"
               >

                        <Heading level='4'>Hive Flow</Heading>

                        <Box>
                            <Text>Links</Text>
                        </Box>     
                    </Box>
                    <Box >
                        <Text weight="bold" size="small">
                            Hive Flow
                        </Text>
                        <Anchor
                            href="/pricing">
                            Pricing
                        </Anchor>
                    </Box>
                </Box>
            )}
        </ResponsiveContext.Consumer>
    )
}