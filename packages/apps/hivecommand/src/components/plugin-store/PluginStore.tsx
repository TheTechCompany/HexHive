import React from 'react';
import { Box, Button, TextInput } from 'grommet';
import { PluginCard } from './PluginCard';

export interface PluginStoreProps {
    plugins?: {
        _id: string;
        name: string;
        owner?: string;
        enabled?: boolean;
    }[]

    onCreate?: any;
    onClickRow?: (row: {_id: string, name: string, owner?: string, enabled?: boolean}) => void;
}

export const PluginStore: React.FC<PluginStoreProps> = (props) => {
    return (
        <Box
            flex
            background="neutral-1"
            elevation="small"
            direction="column">

            <Box 
                pad="small"
                elevation="small"
                background="accent-1"
                align="center"
                direction="row">
                <TextInput
                    width={'small'}
                    placeholder="Search..." />
                <Button
                    onClick={props.onCreate} 
                    primary
                    color="neutral-3" 
                    label="Create"/>
            </Box>
          

            <Box 
                pad="small"
                direction="row"
                wrap={true}
                gap="small">
                {props.plugins?.map((plugin) => (
                    <PluginCard 
                        onClick={() => props.onClickRow?.(plugin)}
                        plugin={plugin} />
                ))} 
           
            </Box>
        </Box>
    )
}