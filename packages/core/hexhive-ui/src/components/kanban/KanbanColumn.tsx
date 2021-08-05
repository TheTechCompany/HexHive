import { Box, Text, Heading, Button } from 'grommet';
import React from 'react';
import { More } from 'grommet-icons'
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { KanbanList } from './KanbanList';
import { KanbanColumnMenu } from './KanbanColumnMenu';
import { dateFromObjectID } from '@hexhive/utils';


export interface KanbanColumnProps {
    title?: string;
    ttl?: number;
    menu?: {
        label?: string;
        onClick?: string;
    }[]
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
    ttl,
    items = [{status: 'Issued', name: ''}],
    isCombineEnabled,
    useClone,
    isScrollable,
    renderCard,
    menu = []
}) => {
    return (
            <Box 
                overflow="hidden"
                background="accent-1"
                round="xsmall"
                direction="column"
                width="300px"

              >
                <Box 
                    background="accent-2"
                    pad={{horizontal: "xxsmall"}}
                    align="center"
                    justify="between"
                    border={{side: 'bottom', color: 'dark-2'}}
                    direction="row" 
                    >
                    <Heading 
                        margin="small"
                        level='4'>{title}</Heading>
                    
                    <KanbanColumnMenu menu={menu}  />
                    {/* <Box
                        style={{userSelect: 'none'}}
                        align="center"
                        justify="center"
                        width="30px"
                        height="30px"
                        pad="xsmall"
                        background="dark-3"
                        round="large">
                        <Text size="small">{items?.length}</Text>
                    </Box> */}
                </Box>
                <Box 
                    pad="small"
                    overflow={{vertical: 'auto'}}
                    flex>
                 <KanbanList 
                    droppableId={`${index}`}
                    renderCard={renderCard} 
                    items={items.filter((a) => (!ttl || (Date.now() - dateFromObjectID(a.id).getTime()) < ttl))}/>

                </Box>
            </Box>
      
    )
}