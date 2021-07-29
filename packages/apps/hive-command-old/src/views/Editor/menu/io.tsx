import { TreeView } from '@thetechcompany/live-ui';
import { Box } from 'grommet';
import React, { useState } from 'react';
import { IOModal } from '../../../components/modals/io';
import { makeTree } from '../../../utils';

const types = [{
    key: "blower",
    label: "Blower"
 }, {
     key: "valve",
     label: "Valve"
 }, {
    key: "pump",
    label: "Pump"
 }, {
    key: "levelSensor",
    label: "Level Sensor"
},{ 
    key: "pressureSensor",
    label: "Pressure Sensor"
}]

export const IOMenu = () => {
    const [ modalOpen, openModal ] = useState(false);
    
    const [ createNode, setCreateNode ] = useState<string>()

    return (
        <Box>
            <IOModal 
                onClose={() => openModal(false)}
                types={types.map((x) => x.label)}
                open={modalOpen} />
             <TreeView
                    onCreate={(selector) => {
                        setCreateNode(selector)
                        openModal(true)
                    }}
                    items={[{
                        id: 'root',
                        label: "I/O", 
                        items: []
                    }]}
            />
        </Box>
    )
}