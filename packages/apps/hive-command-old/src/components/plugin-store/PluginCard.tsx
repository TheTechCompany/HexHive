import React from 'react';
import { Box, Text, CheckBox } from 'grommet';

export interface PluginCardProps {
    plugin?: {
        _id: string;
        name: string;
        enabled?: boolean;
        owner?: string;
    }
    onClick?: (e: React.MouseEvent) => void;
}

export const PluginCard: React.FC<PluginCardProps> = (props) => {
    return (
        <Box
            onClick={props.onClick}
            style={{cursor: 'pointer'}}
            elevation="medium"
            round="small"
            width="30%"
            height="xsmall"
            background="rgba(128, 128, 128, 0.2)"
           >

            <Box flex>
                <Box
                    direction="row"
                    justify="between"
                    pad="small">
                    
                    <Box>
                       <Text>{props.plugin?.name}</Text>
                        <Text size="small">{props.plugin?.owner}</Text>
                    </Box>
                    <CheckBox 
                        checked={props.plugin?.enabled}
                        toggle />
                </Box>
            </Box>
        </Box>
    )
}