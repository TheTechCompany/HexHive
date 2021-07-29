import React from 'react';
import { Box } from 'grommet'
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

export interface KanbanListItemProps {
    item: any,
    isDragging: boolean,
    provided: DraggableProvided,
    isClone?: boolean,
    isGroupedOver?: boolean,
    style?: Object,
    index?: number
}

export const KanbanListItem : React.FC<KanbanListItemProps> = (props) => {
    return (
        <Box
            background="light-1"
            round="small"
            direction="column"
            pad="small"
            {...props.provided.draggableProps}
            {...props.provided.dragHandleProps}
            data-is-dragging={props.isDragging}
            data-index={props.index}
            ref={props.provided.innerRef}
            >
            <Box>
                {props.item.name}
            </Box>
            <Box>
                Files: {(props.item.files || []).length}
            </Box>
        </Box>
    )
}