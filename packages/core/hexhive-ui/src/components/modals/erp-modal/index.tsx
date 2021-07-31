import React from 'react';

import { Box, Button, Layer, Text } from 'grommet'
import { PeopleTab } from './tabs/people';

export const ERPModal: React.FC<any> = (props) => {
    return !props.open ? null : (
        <Layer
            onClickOutside={props.onClose}
            onEsc={props.onClose}>
            <Box
                round="xsmall"
                pad="xsmall"
                background="neutral-1"
                width="large"
                flex>

                <Box direction="row">
                    {/* Header */}
                    <Text>Create Schedule for : {"{Date}"}</Text>
                </Box>
                <Box height={{max: '60vh'}} direction="column">
                    {/* Content */}
                    <PeopleTab 
                        onChange={(e: any) => props.onChange?.({ ...props.item, employees: e })}
                        inputData={{
                            assigned: { key: 'ID', data: props.scheduledJobs?.map((x: any) => x.employees) },
                            labelKey: 'Name',
                            data: props.people
                        }}
                        selected={props.item?.employees || []} />
                </Box>
                <Box direction="row" justify="end">
                    {/* Actions */}
                    <Button primary label="Save" ></Button>
                </Box>
            </Box>
        </Layer>
    );
}