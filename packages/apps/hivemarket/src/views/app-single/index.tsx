import { useQuery } from '@hexhive/client';
import { Box, Spinner, Text, List, Button } from 'grommet'
import { Download, Trash } from 'grommet-icons';
import React from 'react'
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface AppSingleProps extends RouteComponentProps<{id?: string}> {
    
}

export const AppSingle : React.FC<AppSingleProps> = (props) => {

    const [ isInstalled, setIsInstalled ] = useState<boolean>(false)
    const [ isInstalling, setIsInstalling ] = useState<boolean>(false)

    const query = useQuery({suspense: false})

    const app = query.hiveAppliances({where: {id: props.match.params.id}})

    return (
        <Box gap="xsmall" pad="xsmall" flex>
            <Box 
                direction="row"
                justify="between"
                pad="xsmall"
                round="xsmall"
                elevation="small">
                <Box>
                    <Text>{app?.[0]?.name}</Text>
                    <Text size="small">by HexHive Systems</Text>
                </Box>

                <Box>
                    <Button
                        onClick={() => {
                            setIsInstalling(true)
                            setTimeout(() => {
                                setIsInstalling(false)
                                setIsInstalled(true)
                            }, 2000)
                        }}
                        hoverIndicator
                        icon={isInstalling ? <Spinner /> : isInstalled ? <Trash /> : <Download />} />
                </Box>
            </Box>
            <Box elevation="small" pad="xsmall" round="xsmall">
                <Text>
                    HiveFlow, control your workflow with helpful automation
                </Text>
            </Box>
        </Box>
    )
}