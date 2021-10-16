import { Box, List } from 'grommet';
import React, { Component, useEffect } from 'react';
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

  const renderTaskRow = (item: Task, i: number) => {
    // let result = [];
    // for (let i = props.startRow; i < props.endRow + 1; i++) {
    //   let item = data[i];
    //   if (!item) break;
     return (
        <TaskRow
          key={item.id}
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

  const doScroll = (e: any) => {
    console.log("On Scroll", e)
    props.onScroll(e.target.scrollTop);
    // if(taskViewRef.current) props.onScroll(taskViewRef.current.scrollTop);
  };

  //Setup scroll listener for task list
  useEffect(() => {
      taskViewRef.current?.addEventListener('scroll', doScroll)

      return () => {
        taskViewRef.current?.removeEventListener('scroll', doScroll)
      }
  }, [])

    const containerStyle = getContainerStyle((data || []).length);

    return (
      <Box background="accent-1" className="timeLine-side">
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
        <List 
          pad="none"
          background="accent-1"
          className="timeLine-side-task-viewPort" 
          onScroll={doScroll}
          data={data}>
            {(datum: any, ix: number) => renderTaskRow(datum, ix)}
        </List>
      </Box>
    );
  
}

export default TaskList