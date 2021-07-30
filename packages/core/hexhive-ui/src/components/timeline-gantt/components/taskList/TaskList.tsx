import { Box } from 'grommet';
import React, { Component } from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import { TimelineContext } from '../../context';
import Config from '../../helpers/config/Config';
import { Task } from '../../types';
import { TaskRow } from './TaskRow'
export class VerticalLine extends Component<any, any>{
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div className="timeLine-main-data-verticalLine" style={{ left: this.props.left }} />;
  }
}

//Task Lis

const TaskList : React.FC<any>  = (props) => {
  const taskViewRef = useRef<HTMLDivElement>(null)

  const { data, itemHeight } = useContext(TimelineContext)

  const getContainerStyle = (rows: number) => {
    let new_height = rows > 0 ? rows * ((itemHeight || 0) + 5 ): 10;
    return { height: new_height };
  }

  const renderTaskRow = (data: Task[]) => {
    let result = [];
    for (let i = props.startRow; i < props.endRow + 1; i++) {
      let item = data[i];
      if (!item) break;
      result.push(
        <TaskRow
          key={i}
          index={i}
          item={item}
          label={item.name}
          top={i * ((itemHeight || 0) + 5)}
          itemheight={itemHeight}
          isSelected={props.selectedItem == item}
          onUpdateTask={props.onUpdateTask}
          onSelectItem={props.onSelectItem}
          nonEditable={props.nonEditable}
        />
      );
    }
    return result;
  }

  const doScroll = () => {
    if(taskViewRef.current) props.onScroll(taskViewRef.current.scrollTop);
  };


    const containerStyle = getContainerStyle((data || []).length);

    return (
      <Box className="timeLine-side">
        <Box  
          height={'60px'}
          background="neutral-4"
          elevation="small"
          align="center"
          justify="center"
          pad="small"
          direction="row">
          <div>{Config.values.taskList.title.label}</div>
        </Box>
        <Box 
          background="accent-1"
          ref={taskViewRef} 
          className="timeLine-side-task-viewPort" 
          onScroll={doScroll}>
          <Box className="timeLine-side-task-container" style={{
            display: 'flex',
          }}>
            {renderTaskRow(data || [])}
          </Box>
        </Box>
      </Box>
    );
  
}

export default TaskList