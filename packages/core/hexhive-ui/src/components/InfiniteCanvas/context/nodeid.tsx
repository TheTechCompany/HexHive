import React from 'react';

export const NodeIdContext = React.createContext({
    nodeId: '',
    position: {
        x: 0,
        y: 0
    },
    dimensions: {
        width: 0,
        height: 0
    }
})