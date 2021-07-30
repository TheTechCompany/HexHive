import { Box, Text, Heading } from 'grommet';
import React from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { KanbanList } from './KanbanList';


export interface KanbanColumnProps {
    title?: string;
    index?: number;
    items?: any[];

    isCombineEnabled?: boolean,
    useClone?: boolean,
    isScrollable?: boolean;
    renderCard?: any;
}

export const KanbanColumn : React.FC<KanbanColumnProps> = ({
    title = '',
    index = 0,
    items = [{status: 'Issued', name: ''}],
    isCombineEnabled,
    useClone,
    isScrollable,
    renderCard
}) => {
    return (
            <Box 
                background="accent-1"
                round="xsmall"
                direction="column"
                width="300px"
                pad={{horizontal: "small"}}
              >
                <Box 
                    align="center"
                    justify="between"
                    border={{side: 'bottom', color: 'dark-2'}}
                    direction="row" 
                    >
                    <Heading 
                        margin="small"
                        level='4'>{title}</Heading>
                    <Box
                        style={{userSelect: 'none'}}
                        align="center"
                        justify="center"
                        width="30px"
                        height="30px"
                        pad="xsmall"
                        background="dark-3"
                        round="large">
                        <Text size="small">{items?.length}</Text>
                    </Box>
                </Box>
                <Box 
                    overflow={{vertical: 'auto'}}
                    flex>
                 <KanbanList 
                    droppableId={`${index}`}
                    renderCard={renderCard} 
                    items={items}/>

                </Box>
            </Box>
      
    )
}