import React, {
   Component, useState
} from 'react';

import {AvatarList} from '../avatar-list';

import Popover from 'react-popover';
import { Down as ArrowDown, Up as ArrowUp } from 'grommet-icons'

import { Box, Button, List, Text } from 'grommet'
// import './schedule-card.css';

import {FileHex} from '../../assets';

import { stringToColor } from '@hexhive/utils'
import { useContext } from 'react';
import { ScheduleViewContext } from './context';
import { ISchedule } from '../modals';

export interface ScheduleCardProps {
   onMove?: (dir:number) => void;
   onClick?: any;

   jobs?: any[];

   users?: any[];
   user?: any;

   data: ISchedule
}


const ScheduleCard : React.FC<ScheduleCardProps> = (props) => {

   const { projects, people, equipment } = useContext(ScheduleViewContext)

   const [ hoverEl, setHoverEl ] = useState<any>()


  const moveDown = () => {
    if(props.onMove) props.onMove(1)
  }

  const moveUp = () => {
    if(props.onMove) props.onMove(-1);
  }




   const renderFooter = () => {

   }  

  

  const hoverStart = (e: any) => {
   setHoverEl(e.currentTarget)

//      this.setState({hovering: state})
    }

  const hoverEnd = (e: any) => {
   setHoverEl(null)
  }

 

     return null
   
}

export default ScheduleCard
// export default connect((state: StoreState) => ({
//   user: state.auth.user,
//   users: state.schedule.users.list
// }))(ScheduleCard)
