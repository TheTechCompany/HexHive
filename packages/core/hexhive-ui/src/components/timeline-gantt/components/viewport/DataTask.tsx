import React, { Component } from 'react';
import DateHelper from '../../helpers/DateHelper';
import { MODE_NONE, MODE_MOVE, MOVE_RESIZE_LEFT, MOVE_RESIZE_RIGHT } from '../../Const';
import { LINK_POS_LEFT, LINK_POS_RIGHT } from '../../Const';
import Config from '../../helpers/config/Config';
import { debounce } from 'lodash';
import { Box } from 'grommet';
import { Task } from '../../types';
import styled from 'styled-components'
import { useState } from 'react';
import { useEffect } from 'react';
import { getHostForElement } from '@hexhive/utils';
import { useRef } from 'react';

export interface DataTaskProps {
  dayWidth?: number;
  item?: Task;
  label?: any;
  left?: number;
  width?: number;
  onStartCreateLink?: (item: any, pos: any) => void;
  onChildDrag?: any;
  onTaskChanging?: any;
  onFinishCreateLink?: any;
  onUpdateTask?: any;
  isSelected?: boolean;
  color?: any;
  onSelectItem?: any;
  height?: any;
  nowposition?: any;

  className?: string;
}

export interface DataTaskState {
  dragging: boolean;
  left: number;
  width: number;
  mode: any;
}

export const BaseDataTask : React.FC<DataTaskProps> = (props) => {

  const draggingPosition = useRef<number>(0)

  const dragging = useRef<boolean>(false);
  const left = useRef<number>(props.left || 0)
  const width = useRef<number>(props.width || 0)
  
  const mode = useRef<number>(MODE_NONE);


  useEffect(() => {
    if(props.left){
      left.current = props.left
    }
  }, [props.left])

  const onCreateLinkMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, position: string) => {
    if (e.button === 0) {
      e.stopPropagation();
      props.onStartCreateLink?.(props.item, position);
    }
  };
  
  const onCreateLinkMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, position: any) => {
    e.stopPropagation();
    props.onFinishCreateLink(props.item, position);
  };

  const onCreateLinkTouchStart = (e: React.TouchEvent<HTMLDivElement>, position: string) => {
    e.stopPropagation();
    props.onStartCreateLink?.(props.item, position);
  };
  
  const onCreateLinkTouchEnd = (e: React.TouchEvent<HTMLDivElement>, position: any) => {
    e.stopPropagation();
    props.onFinishCreateLink(props.item, position);
  };

  const updatePosition = () => {
    let new_start_date = DateHelper.pixelToDate(left.current, props.nowposition, props.dayWidth || 0);
    let new_end_date = DateHelper.pixelToDate(left.current + width.current, props.nowposition, props.dayWidth || 0);
  
    props.onUpdateTask(props.item, { start: new_start_date, end: new_end_date });
  }

  const dragStart = (x: any, _mode: any) => {
    props.onChildDrag(true);
    draggingPosition.current = x;
    dragging.current = true
    mode.current = _mode
    left.current = props.left || 0
    width.current = props.width || 0

  }
  const dragProcess = (x: number) => {
    let delta = draggingPosition.current - x;
    let newLeft = left.current;
    let newWidth = width.current;


    switch (mode.current) {
      case MODE_MOVE:
        newLeft = left.current - delta;
        break;
      case MOVE_RESIZE_LEFT:
        newLeft = left.current - delta;
        newWidth = width.current + delta;
        break;
      case MOVE_RESIZE_RIGHT:
        newWidth = width.current - delta;
        break;
    }
    //the coordinates need to be global
    let changeObj = {
      item: props.item,
      position: { start: newLeft - props.nowposition, end: newLeft + newWidth - props.nowposition }
    };
  
    //updatePosition() REMINDER/TODO this will make continuous date updates through props as a node moves, disabled for now to make data linking easier

    props.onTaskChanging(changeObj);
    draggingPosition.current = x;

    left.current = newLeft;
    width.current = newWidth
  }
  
  const dragEnd = () => {
    props.onChildDrag(false);
    updatePosition()
    dragging.current = false
    mode.current = MODE_NONE

  }

  const doMouseDown = (e: React.MouseEvent<HTMLDivElement>, mode: number) => {
    if (!props.onUpdateTask) return;
    console.log("doMouseDown")

    let host = getHostForElement(e.target as HTMLElement)

    if (e.button === 0) {
      e.stopPropagation();
      dragStart(e.clientX, mode);

      const doMouseUp = () => {
        dragEnd();
        host.removeEventListener('mousemove', doMouseMove as EventListenerOrEventListenerObject)
        host.removeEventListener('mouseup', doMouseUp as EventListenerOrEventListenerObject)
      };

      host.addEventListener('mousemove', doMouseMove as EventListenerOrEventListenerObject)
      host.addEventListener('mouseup', doMouseUp as EventListenerOrEventListenerObject)

    }
  };

  const doMouseMove = (e: MouseEvent) => {
    if (dragging) {
      e.stopPropagation();
      dragProcess(e.clientX);
    }
  };



  const doTouchStart = (e: React.TouchEvent<HTMLDivElement>, mode: number) => {
    if (!props.onUpdateTask) return;
    console.log('start');
    e.stopPropagation();
    dragStart(e.touches[0].clientX, mode);
  };
  
  const doTouchMove = (e: any) => {
    if (!dragging) {
      console.log('move');
      e.stopPropagation();
      dragProcess(e.changedTouches[0].clientX);
    }
  }
  
  const doTouchEnd = (e: any) => {
    console.log('end');
    dragEnd();
  };

  const calculateStyle = () => {
    let configStyle = props.isSelected ? Config.values.dataViewPort.task.selectedStyle : Config.values.dataViewPort.task.style;
    let backgroundColor = props.color ? props.color : configStyle.backgroundColor;

    // if (this.state.dragging) {
      return {
        ...configStyle,
        backgroundColor: backgroundColor,
        left: left.current,
        width: width.current,
        height: props.height - 5,
      };
    // } 
    /*else {
      return { ...configStyle, backgroundColor, left: this.props.left, width: this.props.width, height: this.props.height - 5 };
    }*/
  }

  const style = calculateStyle();
    return (
      <Box
        className={`${props.className} ${dragging.current ? 'dragging' : ''}`}
        focusIndicator={false}
        elevation={'medium' /*this.props.isSelected ? 'large': 'none'*/}
        onMouseDown={(e) => doMouseDown(e, MODE_MOVE)}
        onTouchStart={(e) => doTouchStart(e, MODE_MOVE)}
        onClick={(e) => {
          props.onSelectItem(props.item);
        }}
        style={{
          ...style,
          top: 3,
          display: 'flex',
        }}
      >
        <div
          className="timeLine-main-data-task-side"
          style={{ top: 0, left: -10, height: style.height }}
          onMouseDown={(e) => doMouseDown(e, MOVE_RESIZE_LEFT)}
          onTouchStart={(e) => doTouchStart(e, MOVE_RESIZE_LEFT)}
        >
          <div className="task-handle" style={{ right: 0}} />
          <div className="task-handle-grip" />

        </div>
        <div
            style={{position: 'absolute', left: -4, bottom: 0, top: 0, margin: 'auto 0'}}
            className="timeLine-main-data-task-side-linker"
            onMouseUp={(e) => onCreateLinkMouseUp(e, LINK_POS_LEFT)}
            onTouchEnd={(e) => onCreateLinkTouchEnd(e, LINK_POS_LEFT)}
        />

        <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            {props.item?.showLabel ? ((typeof(props.item?.showLabel) === 'string') ? props.item.showLabel : props.item?.name) : ''}
        </div>
        <div
            style={{position: 'absolute', left: style.width - 4, bottom: 0, top: 0, margin: 'auto 0'}}
            className="timeLine-main-data-task-side-linker"
            onMouseDown={(e) => onCreateLinkMouseDown(e, LINK_POS_RIGHT)}
            onTouchStart={(e) => onCreateLinkTouchStart(e, LINK_POS_RIGHT)}
          />
        <div
          className="timeLine-main-data-task-side"
          style={{ top: 0, left: style.width, height: style.height }}
          onMouseDown={(e) => doMouseDown(e, MOVE_RESIZE_RIGHT)}
          onTouchStart={(e) => doTouchStart(e, MOVE_RESIZE_RIGHT)}
        >
          <div className="task-handle-grip" />
          <div className="task-handle" style={{marginLeft: '100%'}} />
        </div>
      </Box>
    );
  
}


export default styled(BaseDataTask)`

  .timeLine-main-data-task-side > .task-handle,   .timeLine-main-data-task-side > .task-handle-grip {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  &:hover .timeLine-main-data-task-side > .task-handle {
    opacity: 1;
    background: blue;
    width: 3px;
    height: 100%;
  }

  &:hover  .timeLine-main-data-task-side > .task-handle-grip{
    position: absolute;
    opacity: 1;
    height: 3px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 100%;
    background-color: blue;
  }

  &.dragging .timeLine-main-data-task-side > .task-handle {
    opacity: 1;
    background: blue;
    width: 3px;
    height: 100%;
  }
  
  &.dragging  .timeLine-main-data-task-side > .task-handle-grip{
    position: absolute;
    opacity: 1;
    height: 3px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 100%;
    background-color: blue;
  }
` 