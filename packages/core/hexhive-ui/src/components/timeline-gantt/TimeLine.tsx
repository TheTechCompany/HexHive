import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import VerticalSpliter from './components/taskList/VerticalSpliter';
import Header from './components/header/Headers';
import DataViewPort from './components/viewport/DataViewPort';
import LinkViewPort from './components/links/LinkViewPort';
import TaskList from './components/taskList/TaskList';
import { BUFFER_DAYS, DATA_CONTAINER_WIDTH } from './Const';
import { VIEW_MODE_DAY, VIEW_MODE_WEEK, VIEW_MODE_MONTH, VIEW_MODE_YEAR } from './Const';
import { DAY_MONTH_MODE, DAY_WEEK_MODE, DAY_DAY_MODE, DAY_YEAR_MODE } from './Const';
import DataController from './controller/DataController';
import Config from './helpers/config/Config';
import DateHelper from './helpers/DateHelper';
import { TimelineContext } from './context'
import {nanoid} from 'nanoid'
import { Link, Config as _Config, Task, TimelineStyle } from './types';
import { useState } from 'react';
import { useRef } from 'react';
import { getDayWidth } from './utils';
import { Box } from 'grommet';
import styled from 'styled-components'



export type TimelineProps = {
  className?: string;
  
  resizable?: boolean;

  nonEditableName?: any;
  style?: TimelineStyle;
  mode?: string;
  itemheight?: number;
  selectedItem?: any;
  data?: Task[];
  links?: Link[];
  config?: _Config;

  date?: Date;
  onDateChange?: (date: Date) => void;

  onUpdateTask?: (task: Task, props: object) => void;
  onCreateLink?: (link: Link) => void;
  onSelectItem?: (item: object) => void;
  onHorizonChange?: (start: Date, end: Date) => void;
  onNeedData?: any;
};

const BaseTimeline : React.FC<TimelineProps> = (props) => {
  const [ dragging, setDragging ] = useState<boolean>(false)
  const [ draggingPosition, setDraggingPosition ] = useState<number>(0)
  const [ pxToScroll, setPxToScroll ] = useState<number>(24000)

  const [ scrollTop, setScrollTop ] = useState<number>(0)
  const [ scrollLeft, setScrollLeft ] = useState<number>(0)

  const [ startRow, setStartRow ] = useState<number>();
  const [ endRow, setEndRow ] = useState<number>();

  const [ numVisibleRows, setNumVisibleRows ] = useState<number>(40)
  const [ numVisibleDays, setNumVisibleDays ] = useState<number>(60)

  const [ nowposition, setNowPosition ] = useState<number>(0)

  const [sideStyle, setSideStyle ] = useState<any>({ width: 200 })

  const dayWidth = useRef<number>(getDayWidth(props.mode || 'month'))

  const [currentday, setCurrentDay ] = useState<number>(0)

  const [ interactiveMode, setInteractiveMode ] = useState<boolean>(false)

  const [ mode, setMode ] = useState<string>(props.mode ? props.mode : VIEW_MODE_MONTH)

  const [ size, setSize ] = useState<{ width: number, height: number }>({ width: 1, height: 1 })    

  const [ taskToCreate, setTaskToCreate ] = useState<{task: Task, position: string}>()
  const [ changingTask, setChangingTask ] = useState<any>()

  const dc = useRef<DataController>(new DataController())
  
  const [ scrollData, setScrollData ] = useState<any>()
  const [ headerData, setHeaderData ] = useState<any>()

  const [ data, setData ] = useState<Task[]>([])
  const [ links, setLinks ] = useState<Link[]>([])


  useEffect(() => {
    dc.current.onHorizonChange = onHorizonChange;
    Config.load(props.config);

    dc.current.initialise(
      scrollLeft + nowposition,
      scrollLeft + nowposition + size.width,
      nowposition,
      dayWidth.current
    );

  }, [])


  ////////////////////
  //     ON MODE    //
  ////////////////////
  


  ////////////////////
  //     ON SIZE    //
  ////////////////////

  const onSize = (size: { width: any; height: number; }) => {
    //If size has changed

    console.log(size, dayWidth)
    calculateVerticalScrollVariables(size);
    // if (!initialise) {
    //   dc.current.initialise(
    //     scrollLeft + nowposition,
    //     scrollLeft + nowposition + size.width,
    //     nowposition,
    //     dayWidth
    //   );
    //   initialise = true;
    // }
    setStartEnd();
    let newNumVisibleRows = Math.ceil(size.height / (props.itemheight||0));
    let newNumVisibleDays = calcNumVisibleDays(size, dayWidth.current);
    let rowInfo = calculateStartEndRows(newNumVisibleRows, props.data || [], scrollTop);

    setNumVisibleDays(newNumVisibleDays)
    console.log("DAYS", newNumVisibleDays)
    setNumVisibleRows(newNumVisibleRows)
    setStartRow(rowInfo.start)
    setEndRow(rowInfo.end)
    setSize(size)


  };

  /////////////////////////
  //   VIEWPORT CHANGES  //
  /////////////////////////

  const verticalChange = (scrollTop: any) => {
    if (scrollTop == scrollTop) return;
    //Check if we have scrolling rows
    let rowInfo = calculateStartEndRows(numVisibleRows, props.data || [], scrollTop);
    if (rowInfo.start !== startRow) {
      setScrollTop(scrollTop)

      setStartRow(rowInfo.start)
      setEndRow(rowInfo.end)

    }
  };

  const calculateStartEndRows = (numVisibleRows: number, data: Task[], scrollTop: number) => {
    let new_start = Math.trunc(scrollTop / (props.itemheight||0));
    let new_end = new_start + numVisibleRows >= data.length ? data.length : new_start + numVisibleRows;
    return { start: new_start, end: new_end };
  };

  const setStartEnd = () => {
    dc.current.setStartEnd(scrollLeft, scrollLeft + size.width, nowposition, dayWidth.current);
  };

 const horizontalChange = (newScrollLeft: number) => {
    let new_nowposition = nowposition;
    let new_left = -1;
    let new_startRow = startRow;
    let new_endRow = endRow;

    //Calculating if we need to roll up the scroll
    if (newScrollLeft > pxToScroll) {
      //ContenLegnth-viewportLengt
      new_nowposition = nowposition - pxToScroll - 0 //((props.mode == 'month' || props.mode == 'week') ? 8 : 0)//- 1; //+
      new_left = 0;
    } else {
      if (newScrollLeft <= 0) {
        //ContenLegnth-viewportLengt
        new_nowposition = nowposition + pxToScroll + 14//((props.mode == 'month' || props.mode == 'week') ? 8 : 0) //; //-
        new_left = pxToScroll;
      } else {
        new_left = newScrollLeft;
      }
    }

    //Get the day of the left position
    let currentIndx = Math.trunc((newScrollLeft - nowposition) / dayWidth.current);

    //Calculate rows to render
    new_startRow = Math.trunc(scrollTop / (props.itemheight||0));
    new_endRow =
      new_startRow + numVisibleRows >= (props.data || []).length
        ? (props.data || []).length - 1
        : new_startRow + numVisibleRows;
    //If we need updates then change the state and the scroll position
    //Got you
    setStartEnd();

    setCurrentDay(currentIndx)

    let date = new Date()
    let currentDate = props.date;
    date.setHours(0, 0, 0, 0)
    currentDate?.setHours(0, 0,0,0)

    date.setDate(date.getDate() + currentIndx)
    if(props.date?.getTime() != date.getTime()){
      props.onDateChange?.(date)
    }

    setNowPosition(new_nowposition)
    setHeaderData(headerData)
    setScrollLeft(new_left)
    setStartRow(new_startRow)
    setEndRow(new_endRow)

  };

  const calculateVerticalScrollVariables = (size: { width: number; }) => {
    //The pixel to scroll verically is equal to the pecentage of what the viewport represent in the context multiply by the context width
    setPxToScroll((1 - size.width / DATA_CONTAINER_WIDTH) * DATA_CONTAINER_WIDTH - 1);
  };

  const onHorizonChange = (lowerLimit: any, upLimit: any) => {
    if (props.onHorizonChange) props.onHorizonChange(lowerLimit, upLimit);
  };

  /////////////////////
  //   MOUSE EVENTS  //
  /////////////////////

  const doMouseDown = (e: { clientX: number; }) => {
    setDragging(true)
    setDraggingPosition(e.clientX)

  };
  const doMouseMove = (e: { clientX: number; }) => {
    if (dragging) {
      let delta = draggingPosition - e.clientX;

      if (delta !== 0) {
        setDraggingPosition(e.clientX)
        horizontalChange(scrollLeft + delta);
      }
    }
  };
  const doMouseUp = (e: any) => {
    setDragging(false)
  };
  const doMouseLeave = (e: any) => {
    // if (!e.relatedTarget.nodeName)
    //     dragging=false;
    setDragging(false)
  };

  const doTouchStart = (e: { touches: { clientX: number; }[]; }) => {
    setDragging(true)
    setDraggingPosition(e.touches[0].clientX)

  };
  const doTouchEnd = (e: any) => {
    setDragging(false)
  };
  const doTouchMove = (e: { touches: { clientX: number; }[]; }) => {
    if (dragging) {
      let delta = draggingPosition - e.touches[0].clientX;

      if (delta !== 0) {
        setDraggingPosition(e.touches[0].clientX)
        
        horizontalChange(scrollLeft + delta);
      }
    }
  };
  const doTouchCancel = (e: any) => {
    setDragging(false)
  };


  //Child communicating states
  const onTaskListSizing = (delta: number) => {
    setSideStyle({ width: delta })
    //sideStyle.width - delta 
  };

  /////////////////////
  //   ITEMS EVENTS  //
  /////////////////////

  const onSelectItem = (item: any) => {
    if (props.onSelectItem && item != props.selectedItem) props.onSelectItem(item);
  };

  const onStartCreateLink = (task: Task, position: any) => {
    console.log(`=> Start Link`, task, position);
    setInteractiveMode(true)
    setTaskToCreate({ task: task, position: position })
   
  };

  const onFinishCreateLink = (task: Task, position: any) => {
    console.log(`End Link`, task, taskToCreate, props.onCreateLink);
    if (props.onCreateLink && task &&
      taskToCreate && taskToCreate.task.id != task.id) {

        if(!taskToCreate.task.id || !task.id) return;

        let newLink = {
          id: nanoid(),
          source: taskToCreate.task.id,
          sourceHandle: taskToCreate.position,
          target: task.id, //{ task: task, position: position }
          targetHandle: position
        }
        console.log("New link", newLink)
      props.onCreateLink(newLink);
    }
    setInteractiveMode(false)
    setTaskToCreate(undefined)
    
  };

  const onTaskChanging = (changingTask: any) => {
    console.log("Changing task", changingTask)
    setChangingTask(changingTask)
    
  };

  const calcNumVisibleDays = (size: { width: number; }, newDayWidth?: number) => {
    console.log(size, (newDayWidth || dayWidth))
    return Math.ceil(size.width /(newDayWidth || dayWidth.current)) + BUFFER_DAYS;
  };

  const changeMode = (newMode: string) => {
    console.log("Change mode", newMode)
    if (newMode != mode) {
      let newDayWidth = getDayWidth(newMode);
      //to recalculate the now position we have to see how mwny scroll has happen
      //to do so we calculate the diff of days between current day and now
      //And we calculate how many times we have scroll

      //Posible bug here now

      let scrollTime = Math.ceil((-currentday * newDayWidth) / pxToScroll);
      //We readjust now postion to the new number of scrolls
      let scrollLeft = (currentday * newDayWidth + nowposition) % pxToScroll;
      // we recalculate the new scroll Left value

      console.log(newMode, newDayWidth)
      setMode(newMode)
      dayWidth.current = newDayWidth
      setNumVisibleDays(calcNumVisibleDays(size, newDayWidth))
      setNowPosition(scrollTime * pxToScroll)
      setScrollLeft(scrollLeft)
     
    }
  }

  //USEFUL
  // let rowInfo = calculateStartEndRows(numVisibleRows, props.data || [], scrollTop);

  // const checkNeedData = () => {
  //   if (props.data != data) {
     
  //     Registry.registerData(data);

  //     setData(props.data || [])
  //     setStartRow(rowInfo.start)
  //     setEndRow(rowInfo.end)


  //   }
  //   if (props.links != links) {
  //     setLinks(props.links || [])
  //     Registry.registerLinks(props.links);
  //   }
  // };

  useEffect(() => {
    if(props.data){
    setData(props.data)
    }
  }, [props.data])

  useEffect(() => {
    if(props.links){
    setLinks(props.links)
    }
  }, [props.links])

  useEffect(() => {
    if(props.mode){
      changeMode(props.mode)
    }
  }, [props.mode])
  /*  checkMode();
    checkNeeeData();
    console.log('On render')
    if(!size){
      console.log(state)
    }*/

    console.log(data, props.data)
    return (
      <TimelineContext.Provider value={{
        data,
        links,
        style: props.style,
        mode: mode,
        scrollLeft: scrollLeft,
        moveTimeline: horizontalChange,
        changeMode: changeMode,
        dayWidth: dayWidth.current,
        itemHeight: props.itemheight
      }}>
      <Box 
        overflow="hidden"
        round="small" 
        className={`${props.className} timeLine`} style={{position: 'relative', flex: 1}}>
        <div className="timeLine-side-main" style={sideStyle}>
          <TaskList
            startRow={startRow}
            endRow={endRow}
            selectedItem={props.selectedItem}
            onSelectItem={onSelectItem}
            onUpdateTask={props.onUpdateTask}
            onScroll={verticalChange}
            nonEditable={props.nonEditableName}
          />
          <VerticalSpliter
            enabled={props.resizable}
            onTaskListSizing={onTaskListSizing} />
        </div>

        <div className="timeLine-main">
         
        <Box style={{position: 'absolute', height: '100%', width: '100%', top: 0, left: 0}} className="header-container">
          <Header
              headerData={headerData}
              numVisibleDays={numVisibleDays}
              currentday={currentday}
              nowposition={nowposition}
              scrollLeft={scrollLeft}
            />
        </Box>
        <Box style={{position: 'absolute', width: '100%', height: 'calc(100% - 60px)', zIndex: 9, top: 60, left: 0}}>
        <DataViewPort
            scrollLeft={scrollLeft}
            scrollTop={scrollTop}
            itemheight={props.itemheight}
            nowposition={nowposition}
            startRow={startRow}
            endRow={endRow}
            data={props.data}
            selectedItem={props.selectedItem}
            onScroll={scrollData}
            onMouseDown={doMouseDown}
            onMouseMove={doMouseMove}
            onMouseUp={doMouseUp}
            onMouseLeave={doMouseLeave}
            onTouchStart={doTouchStart}
            onTouchMove={doTouchMove}
            onTouchEnd={doTouchEnd}
            onTouchCancel={doTouchCancel}
            onSelectItem={onSelectItem}
            onUpdateTask={props.onUpdateTask}
            onTaskChanging={onTaskChanging}
            onStartCreateLink={onStartCreateLink}
            onFinishCreateLink={onFinishCreateLink}
            boundaries={{
              lower: scrollLeft,
              upper: scrollLeft + size.width
            }}
            onSize={onSize}
          />
          <LinkViewPort
            scrollLeft={scrollLeft}
            scrollTop={scrollTop}
            startRow={startRow}
            endRow={endRow}
            data={props.data || []}
            nowposition={nowposition}
            interactiveMode={interactiveMode}
            taskToCreate={taskToCreate}
            onFinishCreateLink={onFinishCreateLink}
            changingTask={changingTask}
            selectedItem={props.selectedItem}
            onSelectItem={onSelectItem}
            itemheight={props.itemheight}
            links={props.links || []}
          />
        </Box>
          
        </div>
      </Box>
      </TimelineContext.Provider>
    );
  
}





export const Timeline = styled(BaseTimeline)`
 
  display: flex;
  flex-direction: row;
  flex: 1;
  border: solid 1px rgb(207, 207, 205);
  font-size: 12px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

/* Main Area */

.timeLine-main {
  flex: 1 1 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
}
/* Main Area Header*/

.timeLine-main-header-viewPort {
  flex: 1;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgb(112, 112, 112);
  overflow: hidden;
}

.timeLine-main-header-container {
  flex: 0 0 60px;
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #333333;
  overflow: hidden;
  user-select: none;
}

.timeLine-main-header-day-item {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(112, 112, 112);
  font-size: 10px;
  text-align: center;
  border-right: solid 1px;
  border-top: solid 1px;
  border-bottom: solid 1px;
  top: 20px;
  height: 40px;
  color: white;
  text-align: center;
}

.timeLine-main-header-top-item {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: solid 1px white;
  height: 20px;
  z-index: 91;
}

.timeLine-main-header-day-week {
  flex: 0 0 12px;
  padding: 4px;
  z-index: 90;
}

.timeLine-main-header-day-month {
  top: 0px;
  position: sticky;
  flex: 0 0 15px;
  padding: 5px;
  z-index: 90;
}

.timeLine-main-header-time {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 22px;
  justify-content: stretch;
}

.timeLine-main-header-time-item {
  border-left: solid 1px silver;
  border-bottom: solid 1px silver;
  border-top: solid 1px silver;
  text-align: center;
  padding-top: 5px;
}
/* Main Area Data*/

.timeLine-main-data-viewPort {
  flex: 1 1 auto;
  position: relative;
  overflow: hidden;
}
.timeLine-main-data-container {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgb(255, 255, 255);
}

.timeLine-main-data-row {
  position: absolute;
  width: 100%;
  height: 50px;
}

.timeLine-main-data-task {
  position: absolute;
  background-color: darkorchid;
  border-radius: 14px;
  color: white;
  text-align: center;
}

.timeLine-main-data-task-side {
  position: absolute;
  width: 10px;
  cursor: col-resize;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.timeLine-main-data-task-side-linker {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  cursor: default;
  z-index: 100;
}
.timeLine-main-data-task-side-linker:hover {
  background-color: black;
  border: solid 0.5px grey;
}
/* .timeLine-main-data-task:hover {
    background-color:chocolate;
    border:solid 2px darkorchid;
    cursor: move;
} */

.timeLine-main-data-verticalLine {
  flex: 1 1 auto;
  height: 100%;
  width: 24px;
  background-color: white;
  border-left-width: 0.5px;
  border-left-color: rgb(207, 207, 205);
  border-left-style: dashed;
}

/* Side Area */

.timeLine-side-main {
  flex: 0 0 auto;
  width: 108px;
  min-width: 108px;
  display: flex;
  flex-direction: row;
}

.timeLine-side {
  flex: 1 0 100px;
  display: flex;
  flex-direction: column;
  border-right: solid 1px rgb(207, 207, 205);
}

.verticalResizer {
  flex: 0 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: col-resize;
  border-right: solid 1px rgb(207, 207, 205);
  height: 100%;
}
.squareGrip {
  flex: 0 0 auto;

  border-radius: 50%;
  height: 5px;
  width: 5px;
  margin: 3px 0;
}

.timeLine-side-title {
  flex: 0 0 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.timeLine-side-task-viewPort {
  position: relative;
  flex: 1 1 auto;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.timeLine-side-task-container {
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}

.timeLine-side-task-row {
  background-color: rgb(112, 112, 112);
  border-bottom-width: 0.5px;
  border-bottom-color: rgb(207, 207, 205);
  border-bottom-style: solid;
  height: 30px;
  color: grey;
  text-align: center;
  text-overflow: ellipsis;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

`