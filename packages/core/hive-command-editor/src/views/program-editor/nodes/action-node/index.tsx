import { ActionNodeFactory } from './factory'

import { ActionNodeWidget } from './widget'

export const ActionNodeModel = {
    extras: {
        label: 'string',
        actions: [{devices: [], actions:[] }]
    }
}

export {
    ActionNodeFactory,
    ActionNodeWidget,
}