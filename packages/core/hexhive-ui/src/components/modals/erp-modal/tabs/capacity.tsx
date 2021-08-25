import React from 'react';
import { Add } from 'grommet-icons';
import { Box, Button, Text } from 'grommet';
import { CapacityItem } from '../CapacityItem';

export const CapacityTab = ({
    addCapacityItem,
    plan,
    removeCapacityItem,
    updateCapacityItem,
    type
}: any) => {
    return (
        <>
            <Box
                height={{ min: 'min-content' }}
                direction="row"
                align="center"
                justify="between">
                <Text margin="none" weight="bold">Capacity</Text>
                <Button
                    onClick={addCapacityItem}
                    hoverIndicator
                    icon={<Add size="small" />} />
            </Box>
            <Box
                gap="xsmall"
                height={'min-content'}
                overflow={'scroll'}>
                {plan.items?.map((x: any, ix: number) => (
                    <CapacityItem
                        item={x}
                        type={type}
                        removeCapacityItem={() => removeCapacityItem(ix)}
                        updateCapacityItem={(key, value) => updateCapacityItem(ix, key, value)} />
                ))}
            </Box>

        </>
    );
}
