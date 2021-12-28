import React from 'react';

export const NodeIdContext = React.createContext({
    nodeId: '',
    position: {
        x: 0,
        y: 0
    },
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    dimensions: {
        width: 0,
        height: 0
    }
})