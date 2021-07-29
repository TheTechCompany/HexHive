import React from 'react';
import { Box, Button, Heading, Text } from 'grommet';

export const PricingItem = (props: any) => {
    return (
        <Box 
            round="xsmall"
            elevation="2"
            margin="small"
            background="light-4"
            pad={{bottom: 'small'}}
            flex>
            <Box   
               round="xsmall" 
                border={{side: 'bottom', color: 'light-4'}}
                flex 
                background="brand"

                direction="column"
                align="center">
                <Text
                    size="large">{props.name}</Text>
                <Text
                    weight="bold"
                    size="xlarge">${props.price}/mo</Text>
            </Box>
            <Box 
                margin={{top: 'medium'}}
                pad={{horizontal: 'small'}}
                >
                {props.features?.map((feature: {description: string}) => (
                    <Text>- {feature.description}</Text>
                ))}
                <Button
                    margin={{top: 'medium'}}
                    label="Sign up">

                </Button>
            </Box>
      
        </Box>
    )
}

export const Pricing = (props: any) => {
    const pricing = [
        {   
            name: 'Starter kit',
            price: 25,
            features: [
                {
                    description: '3 programs',
                },
                {
                    description: '6 deployments'
                },
                {
                    description: 'Hive Flow Online Development Environment'
                },
                {
                    description: '10GB storage'
                }
            ]
        },
        {
            name: 'Medium',
            price: 250,
            features: [
                {
                    description: '10 programs',
                },
                {
                    description: '20 deployments'
                },
                {
                    description: 'Hive Flow Online Development Environment'
                }               
                ,{
                    description: '50GB storage'
                }
            ]
        },
        {
            name: 'Heavy',
            price: 500,
            features: [
                {
                    description: '50 programs',
                },
                {
                    description: '100 deployments'
                },
                {
                    description: 'Hive Flow Online Development Environment'
                },
                {
                    description: '100GB storage'
                }
            ]
        }
    ]
    return (
        <Box   
            flex
            align="center">
            <Heading level='2'>Pricing</Heading>
            <Box 
                alignSelf="center"
                width="80%"
                flex
                justify="between"
                direction="row">
                {pricing.map((price) => (
                   <PricingItem {...price} />
                ))}
            </Box>
        </Box>
    )
}