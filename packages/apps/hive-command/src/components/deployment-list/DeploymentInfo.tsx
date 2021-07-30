import React from 'react';
import { Box, Button, Text } from 'grommet';
import styled from 'styled-components'
import * as Icons from 'grommet-icons';
import { RouteComponentProps, withRouter } from 'react-router-dom'

export interface DeploymentInfoProps extends RouteComponentProps{
    className?: string;

    open: boolean;
    deployment?: any;
}

export const BaseDeploymentInfo : React.FC<DeploymentInfoProps> = (props) => {
    return (
        <Box 
            background={'#003f49'}
            gap="small"
            elevation="small"
            direction="column"
            className={props.className}>
            
            <Box 
                style={{position: 'relative'}}
                pad="small"
                direction="row">
                <Box>
                    <Icons.Device color="gold"/>
                </Box>
                <Box flex margin={{left: 'small'}}>
                    <Text color={'#676767'}>Device ID</Text>
                    <Text>{props.deployment?.name}</Text>
                    <Text>{props.deployment?.version}</Text>

              
                </Box>
            </Box>
            <Button 
                onClick={() => {
                    props.history.push(`${props.match.url}/${props.deployment._id}/controls`)
                }}
                margin={{left: 'small', right: 'small'}}
                    primary
                    title="Go to HMI"
                     icon={<Icons.Logout />} 
                     label="Controls" />

            <Box 
                border={{side: 'top', size: 'small'}}
                pad="small"
                direction="row">
                <Box>
                    <Icons.Globe color={'gold'} /> 
                </Box>
                <Box flex direction="column" margin={{left: 'small'}}>

                    <Text color={'#676767'}>Domain Name</Text>
                    <Text>{props.deployment?.network_name}.hexhive.io</Text>
                    <hr style={{width: '100%'}} />
                    <Text color={'#676767'}>IP Address</Text>
                    <Text>192.166.255.0</Text>

                    <hr style={{width: '100%', backgroundColor: '#676767'}}/>

                    <Text color={'#676767'}>Agent Version</Text>
                    <Text>v0.0.1</Text>
                </Box>
            </Box>

            <Box 
                border={{side: 'top', size: 'small'}}
                pad="small"
                direction="row">
                <Box>
                    <Icons.Cpu color={'gold'} /> 
                </Box>
                <Box flex direction="column" margin={{left: 'small'}}>
                    <Text color={'#676767'}>Control Platform</Text>
                    <Text>RevPi</Text>

                    <hr style={{width: '100%', backgroundColor: '#676767'}}/>

                    <Text color={'#676767'}>Connectivity</Text>
                    <Text>RUT950</Text>
                </Box>
            </Box>
        </Box>
    )
}

export const DeploymentInfo = styled(withRouter(BaseDeploymentInfo))`
    width: ${p => !p.open ? '0px' : '18vw'};
    transition: width 250ms ease-out;
    overflow: hidden;
`