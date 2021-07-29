import { IconNodeFactory } from '@thetechcompany/live-ui';
import { Box } from 'grommet';
import { FlowEditor } from 'hive-flow-editor/src';
import React from 'react';


export interface DeviceControlProps {

}

export const DeviceControl : React.FC<DeviceControlProps> = (props) => {
    return (
        <Box
            flex>
            <FlowEditor 
                editable={false}
                factories={[
                    new IconNodeFactory()
                ]}
                program={{
                    nodes: [
                        {
                            id: '1',
                            x: 20,
                            y: 20,
                            label: "Icon",
                            type: 'icon-node',
                        }
                    ],
                    paths: []  
                }}/>
        </Box>
    )
}