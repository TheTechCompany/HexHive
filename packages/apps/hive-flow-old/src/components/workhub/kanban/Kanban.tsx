import React from 'react';
import { Box } from 'grommet';
import {
    Droppable,
    DroppableProvided,
    DragDropContext,
    DropResult
} from 'react-beautiful-dnd';
import { KanbanColumn } from './KanbanColumn';

 export interface KColumn {
    id?: any;
    title?: string;
    rows?: any[]
 }

 export interface BaseKanbanProps {
    containerHeight?: number,
    useClone?: boolean,
    isCombineEnabled?: boolean,
    withScrollableColumns?: boolean,

    renderCard?: (item?: any) => any;
    onDrag?: (result: DropResult) => void;
    columns?: Array<KColumn>
 }
export const BaseKanban : React.FC<BaseKanbanProps> = ({
    containerHeight,
    useClone,
    isCombineEnabled,
    withScrollableColumns,
    renderCard,
    onDrag,
    columns = []
}) => {

    const onDragEnd = (result: DropResult) => {
        console.log(result)

        let origin : number = parseInt(result.source.droppableId)
        let dest = result.destination?.droppableId

        if(dest){
          let item_ix = columns[origin].rows?.map((x) => x.id).indexOf(result.draggableId)
          if(item_ix && item_ix > -1){
            let item = columns[origin].rows?.splice(item_ix, 1)
            columns[parseInt(dest)].rows?.push(item)
          }
        }

   //     onChange?.(columns)

    }
    
      const board = (
            <Droppable
                droppableId="board"
                type="COLUMN"
                direction='horizontal'
                ignoreContainerClipping={Boolean(containerHeight)}>
                {(provided: DroppableProvided) => (
                    <Box
                      gap="small"
                      pad="small"
                      direction="row"
                      flex
                       ref={provided.innerRef} 
                       {...provided.droppableProps}>
                    {columns.map((key, index: number) => (
                    <KanbanColumn
                        key={key.id}
                        index={index}
                        title={key.title}
                        items={key.rows}
                        isScrollable={withScrollableColumns}
                        isCombineEnabled={isCombineEnabled}
                        useClone={useClone}
                        renderCard={renderCard} />
                    ))}
                    {provided.placeholder}
                    </Box>
                )}
                
                    
            </Droppable>
        )
      
       
    return (
        <DragDropContext onDragEnd={onDrag || onDragEnd}>
            <Box flex>
               {board}
            </Box>
        </DragDropContext>
    )
}