import { Box } from 'grommet';
import React from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot, Droppable, DroppableProps, DroppableProvided } from 'react-beautiful-dnd';
import { KanbanListItem } from './KanbanListItem';

export interface KanbanListProps{ 
    items?: any[];
    renderCard?: any;
    droppableId?: string;
}

export const KanbanList :  React.FC<KanbanListProps> = (props) => {
    
    console.log("ITems", props.items, props.renderCard)
    return <Droppable
            droppableId={props.droppableId || ''}
            type="LIST">
            {(
                dropProvided: DroppableProvided
            ) => (
        <Box 
            {...dropProvided.droppableProps}
            ref={dropProvided.innerRef}
            gap="small"
            style={{minHeight: 'min-content'}}
            pad={{vertical: 'small'}}
            direction="column"
            flex>
        {props.items?.map((item, index) => 
            <Draggable key={item._id} draggableId={item._id} index={index}>
              {(
                dragProvided: DraggableProvided,
                dragSnapshot: DraggableStateSnapshot,
            ) => (
                <Box
                round="xsmall"
                border={{side: 'all', color: 'lightblue', size: dragSnapshot.isDragging ? '2px' : '0px'}}
                ref={dragProvided.innerRef}
                {...dragProvided.draggableProps}
                {...dragProvided.dragHandleProps}
                    >
                    {props?.renderCard?.(item) || 'div'}
                </Box>
            )} 
            </Draggable>
        )}
        {dropProvided.placeholder}
        </Box>
            )}
        </Droppable>

}
