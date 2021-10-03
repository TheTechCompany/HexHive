import { Box, Text, CheckBox, Layer, TextInput, Button } from 'grommet';
import React from 'react';
import { useState } from 'react';

export interface KanbanModalProps {
    open: boolean;
    onClose?: any;

    column?: string;
}

export const KanbanModal : React.FC<KanbanModalProps> = (props) => {

    const [ cleanupEnabled, setCleanupEnabled ] = useState<boolean>(false);

    const [ cleanupOptions, setCleanupOptions ] = useState<{
        ttl?: number;
    }>({})

    return props.open ? (
        <Layer 
            onEsc={props.onClose}
            onClickOutside={props.onClose}>
        <Box width="medium" gap="xsmall" direction="column" round="xsmall" overflow="hidden">
            <Box pad="xsmall" background="accent-2" direction="row">
                <Text>Column settings</Text>
            </Box>
            <Box gap="xsmall" pad="xsmall">
                <TextInput value={props.column} placeholder="Column Name" />
                <CheckBox checked={cleanupEnabled} onChange={(e) => setCleanupEnabled(e.target.checked)} label="Enable auto-cleanup" />
                {cleanupEnabled ? (
                    <Box>
                        <TextInput value={cleanupOptions.ttl} onChange={(e) => setCleanupOptions({...cleanupOptions, ttl: parseFloat(e.target.value)})} type="number" placeholder="Keep for (days)" />
                    </Box>
                ) : null}
            </Box>
            <Box gap="xsmall" justify="end" pad="xsmall" direction="row">
                <Button onClick={props.onClose} label="Close" />
                <Button primary label="Save" />
            </Box>
            </Box>
        </Layer>
    ) : null;
}