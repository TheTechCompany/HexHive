import React, {
   Component, useState
} from 'react';

import {AvatarList} from '../../primatives/avatar-list';
import Icon from '@material-ui/core/Icon';
import Popover from 'react-popover';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { Box, Text } from 'grommet'
import './schedule-card.css';
import { Maybe, Project } from '../../../gqless';
import { StoreState } from '../../../reducers';

import FileHex from '../../../assets/icons/file-hex.svg';

var conf = require('../../../conf.js');
var colorUtil = require('../../../utils/color');

export interface ScheduleCardProps {
   onMove?: (dir:number) => void;
   onClick?: any;

   jobs?: Project[];

   users?: any[];
   user?: any;

   data?: {
      job?: {id: string, name: string};
      notes?: any[],
      plants?: any[],
      employees?: any[],
      files?: any[],
      owner?: string
      managers?: any[]
   }
}


const ScheduleCard : React.FC<ScheduleCardProps> = (props) => {
   const [ hoverEl, setHoverEl ] = useState<any>()

   const data = props.data;

   const padZero = (str : string, len : number =2) => {
      var zeros = new Array(len).join('0');
      return (zeros + str).slice(-len);
  }

   const invertColor = (hex: string) => {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

  const moveDown = () => {
    if(props.onMove) props.onMove(1)
  }

  const moveUp = () => {
    if(props.onMove) props.onMove(-1);
  }

const staffNames = () => {
      const names = (data?.employees || []).map((x: any) => {
         return (
            <li>{x.Name}</li>
         );
      });
      if(names?.length > 0){
      return (
         <div className="staff-container">
            <ul className="staff-container">
               {names}
            </ul>
         </div>);
      }else{
         return null;
      } 
   }

   const notes = () => {
      const notes = (data?.notes || []).map((x: any) => {
         return (
            <li>{x}</li>
         );
      });

      if(notes?.length > 0){
         return (
            <div className="notes">
               <div>Notes</div>
               <ul style={{listStyle : 'none', paddingLeft : '0'}}>
                  {notes}
               </ul>
            </div>
         );
      }else{
         return null;
      }
   }

   const plantItems = () => {
      const items = (data?.plants || []).map((x: any) => {
            return (
               <li>{x.Name}</li>
            );
      });
      
      if(items.length > 0){
      return (
         <div className="plant-container">
            <div className="plant-container-header">Plant required</div>
            <ul className="plant-container">
               {items}
            </ul>
         </div>
      );
      }else{
         return null;
      }
   }

   const renderFooter = () => {
      let content = [];
      if((data?.notes || []).length > 0){
         content.push (
            <Typography className="notes-indicator" onClick={props.onClick}>Notes: {data?.notes?.length}</Typography>
         );
      }

      return (
         <Box>
            {content}
         </Box>);
   }  

   const renderOwner = () => {
        if(data?.owner){
          let color = colorUtil.stringToColor(data?.owner);
          let arrowColor = invertColor(color); 
          return (
            <Box 
               style={{
                  backgroundColor: color, 
                  height: '24px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  paddingLeft: '8px'
               }}>
              <Typography  style={{color: arrowColor}}>{data.job?.id}</Typography>
              <div>
                <Icon style={{cursor: 'pointer', color: arrowColor}} onClick={moveDown}>arrow_drop_down</Icon>
                <Icon style={{cursor: 'pointer', color: arrowColor}} onClick={moveUp}>arrow_drop_up</Icon>
              </div>
            </Box>
            );
        }else{
            return null;
        }
    }

  const hoverStart = (e: any) => {
   setHoverEl(e.currentTarget)

//      this.setState({hovering: state})
    }

  const hoverEnd = (e: any) => {
   setHoverEl(null)
  }

  const isEmpty = () => {
    return !((data?.employees && data?.employees.length > 0 ) || (data?.plants && data?.plants.length > 0))
  }

  const renderInfo = () => {
     let content = [
      <AvatarList size={24} users={([data?.owner].concat(data?.managers || [])).map((x) => {
         if(props.users && props.users.length > 0){
          let user = props.users.find((a: any) => a.id == x)
          return {
           color: colorUtil.stringToColor(user? user.id : x),
            name: user? user.name : ''
          }
         }else{
           return {
             color: '',
             name: ''
           }
         }
        })} />
      ]

      let job = data?.job ? props.jobs?.find((a) => a?.id == data?.job?.id) : {files: []}
      console.log(job, data)
  
      if(job?.files && job?.files.length > 0){
         content.push(<img style={{height: 30, width: 30}} src={FileHex} />)
      }
      return content;
  }

      var notesjsx = data?.notes?.map((x: any) => {
            return (<li>{x}</li>);
         })

      const card = data || {};
     return (
       <div>
       
         <Popover 
           enterExitTransitionDurationMs={300}
          isOpen={(data?.notes || []).length > 0 && hoverEl != null}
          target={hoverEl}
          preferPlace={"right"}
           body={(
             <div>
               <ul style={{listStyle : 'none', paddingLeft : 0}}>{notesjsx}</ul>
             </div>)} > 
         
        <Card 
            aria-owns={hoverEl != null ? 'mouse-over-notes' : undefined}
            aria-haspopup="true"
              onMouseEnter={hoverStart}
              onMouseLeave={hoverEnd}
              className="schedule-card" style={{cursor: (!props.user.readonly) ? 'pointer' : 'default'}}>
               {renderOwner()}
                <CardContent style={{paddingBottom: (isEmpty() ? '16px' : undefined), position : 'relative'}} onClick={props.onClick}>
                  <Typography className="card-title" >{data?.job?.name}</Typography>

                     <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                        {staffNames()}
                        {plantItems()}
                        {notes()}
                
                     <Box 
                        direction="row"
                        align="center"
                        justify="between"> 
                       {renderInfo()}
                     </Box>
                     </div>
               </CardContent>
               {renderFooter()}
             </Card>
            </Popover>
        </div>
         
      );
   
}

export default connect((state: StoreState) => ({
  user: state.auth.user,
  users: state.schedule.users.list
}))(ScheduleCard)
