import React, {
  Component, useEffect, useState 
} from 'react';

import {DateSelector} from '../date-selector'

import ScheduleCard from './schedule-card';

import ScheduleModal from '../modals/schedule-modal';
// import './index.css';

import { Box, Text, Button, Spinner } from 'grommet';

var moment = require('moment');

export interface WeekViewProps {
  getJobs?: any;
  getUsers?: any;
  getEmployees?: any;
  getPlant?: any;

  users?: any[];
  user?: any
  token?: string;

  jobs: any[];
  isLoading: boolean;
}


export const ScheduleView : React.FC<WeekViewProps> = (props) => {
  const [ modalShow, showModal ] = useState(false)
  const [ date, setDate ] = useState(moment())
  const [ params, setParams ] = useState<any[]>([moment().startOf('isoWeek'), moment().endOf('isoWeek')])

  const [ scheduleData, setScheduleData ] = useState<any[]>([])
  
  const [ scheduledJobs, setScheduledJobs ] = useState<any[]>([]) //figure out where this goes

  const [ selected, setSelected ] = useState<any>()

  const [ currentDay, setCurrentDay ] = useState<any>()

  const [ timestamp, setTimestamp ] = useState(new Date())

  // const query = useQuery({
  //   suspense: false,
  //   staleWhileRevalidate: true
  // })

  // const jobs : Project[] = (query.ProjectMany() || []).map((x) => ({...x, __typename: 'Project'}))

  useEffect(() => {
    // props.getJobs();
    // props.getUsers();
    // props.getEmployees();
    // props.getPlant();
    /*    utils.user.getAll().then((users) => {
      this.setState({users: users});
    })*/
  }, [])

  // useEffect(() => {
  //   utils.schedule.getScheduleByDate(params).then((schedule) => {
  //     setScheduleData(schedule.map((day: any[]) => {
  //       return day.map((x: any) => {
  //         let job = jobs.find((a) => a?.id == x.job);
  //         let files = job && job?.files?.length;
  //         return {
  //           ...x,
  //           files: files
  //         }

  //       })
  //     }))
  //   })
  // }, [params])
  
  const changeWeek = (week: Date) => {
    let params = [moment(week).startOf('isoWeek'), moment(week).clone().endOf('isoWeek')]
    setDate(week)
    setParams(params)
  }

  const renderHeader = () => {
    let dayHeaders = renderDayHeaders();
    return (
      <Box 
        direction="column" 
        className="week-header">
        <Box align="center" className="week-header__controls">
          <DateSelector
            value={date}
            displayFormat={"MMMM YYYY"}
            stepSize={"week"}
            onChange={changeWeek} />
        </Box>
        <Box direction="row" className="week-header__days">
          {dayHeaders}
        </Box>
      </Box>
    )
  }

  const renderTime = (i: number, format: string) => {
    var m = moment(params[0]);
    var d = m.add(i, 'day');
    return d.format(format);
  }

  const updateOrder = (day: number) => {
    let order : any = {};
    let schedule = scheduleData[day] || [];

    for(var i = 0; i < schedule.length; i++){
      order[schedule[i].id] = i;
    }
    
    let ts = moment(params[0]).add(day, 'days').add(12, 'hours').valueOf();
    _updateOrder(ts, order).then((result) => {
      console.log(result);
    })
  }

  const _updateOrder = (ts: number, order: any) => {
    return fetch(process.env.PUBLIC_URL + "/api/schedule/order", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + props.token, 
      },
      body: JSON.stringify({
        ts: ts,
        order: order
      })
    })
  }

  const move = (pos: number, idx: number, day: number) => {
    if((idx + pos) > -1 && (idx + pos) < scheduleData[day].length){
      let d = scheduleData[day];
      d.splice(idx + pos, 0, d.splice(idx, 1)[0])
      let schedule = scheduleData;
      schedule[day] = d;
      setScheduleData(schedule)
      updateOrder(day);
    }
  }

  const renderSchedule = (i: number) => {
    return scheduleData[i].map((x: any, ix : number) => {
      return (
        <li style={{padding: 0}}>
        <ScheduleCard
          jobs={props.jobs}
          onClick={() => {
            if(!props.user.readonly){
              
                  setScheduledJobs(scheduleData[i])
                  toggleEditorModal(true, x);
            
              }else{
                setScheduledJobs(scheduleData[i])
                toggleEditorModal(true, x)
              }
          
          }}
          onMove={(dir:number) => move(dir, ix, i)}
          key={ix} 
          data={x} />
      </li>
      );
    });
  } 

  const toggleEditorModal = (truthy : boolean, job : any = null) => {
    console.log(truthy, job);   
    if (truthy) {
      let update = {
        showModal: true,
        selectedJob: job,
      }

      if(job && job.date) {
        setTimestamp(job.date)
        //update['timestamp'] = job.date;
      }
      showModal(true)
      setSelected(job)

    } else {
      showModal(false)
      // utils.schedule.getScheduleByDate(params).then((schedule) => {

      //   setScheduleData(schedule)
        
      //   setSelected(null)
      
      // })
      if(currentDay) updateOrder(currentDay);
    }
  }


   const renderCreateScheduleModal = () => {   
    var schedJobs = scheduledJobs;
    return (
      <ScheduleModal 
        jobs={props.jobs}
        onClose={() => toggleEditorModal(false)}
        open={modalShow} 
        timestamp={timestamp} 
        scheduledJobs={schedJobs} 
        item={selected}
      /> 
    );
  } 

  const renderAddScheduleButton = (dayIndex: number) => {

    if(!props.user.readonly){
      return (
        <Button label="Create" key={dayIndex} className="add-item-button"  onClick = { () => {
          var day = moment(params[0]).add(dayIndex, 'day')  
          setTimestamp(day)
          setCurrentDay(dayIndex)
          setScheduledJobs(scheduleData[dayIndex])

          
          toggleEditorModal(true)
        }
        } />
      );
    }else{
      return null;
    }
  }

  const renderDayHeaders = () => {
    let headers = []
    for(var i = 0; i < 7; i++){
      var today = new Date();
      var currentDay = today.getDate();
      var currentMonth = today.getMonth() + 1;
      headers.push(( 
        <Box 
          direction="column"
          flex
          className={(currentDay == renderTime(i, 'DD') && currentMonth == renderTime(i, 'MM')) ? ' week-day-header week-day-header-current' : 'week-day-header'}>
          <Box>
            {renderTime(i, 'ddd')}
          </Box>
          <Box>
            {renderTime(i, 'DD/MM')}
          </Box>
        </Box>
      ))
    }
    return headers;
  }

  const renderDays = () => {
    var week = [];
    for(var i = 0; i < 7; i++){
      const dayItems = (scheduleData[i]) ? renderSchedule(i) : null;
      var today = new Date();
      var currentDay = today.getDate();
      var currentMonth = today.getMonth() + 1;
      week.push((
        <Box 
          align="center"
          flex 
          className={(currentDay == renderTime(i, 'DD') && currentMonth == renderTime(i, 'MM')) ? ' week-day week-day-current' : 'week-day'}>
          <ul style={{listStyle: 'none', padding: 0}} className = 'week-day-content'>
            { dayItems }
            {renderAddScheduleButton(i)}
          </ul>
        </Box>
      ));
    }
    return week;
  }

  const renderedDays = renderDays()
  const renderedModal = renderCreateScheduleModal()

    return (
      <Box 
        flex 
        direction="column" 
        className="week-main">
        {/*<div className="week-main">*/} 
          {renderHeader()} 
          <Box 
            flex 
            className="week-container">
           {props.isLoading ? (
            <Box
              flex
              justify="center"
              align="center">
              <Spinner size="medium"/>
              <Text>Loading schedule ...</Text>
            </Box>
           )  : (
           <Box flex direction="row" className="week-days">
              {renderedDays}      
              {renderedModal}
            </Box>
            )}
          </Box>
        </Box>
    );
  
}

// export default connect((state: StoreState) => ({
//   users: state.schedule.users.list,
//   user: state.auth.user,
//   token: state.auth.token
// }), (dispatch) => ({
//   getJobs: () => dispatch(getJobs() as any),
//   getPlant: () => dispatch(getPlant() as any),
//   getUsers: () => dispatch( getUsers() as any),
//   getEmployees: () => dispatch(getEmployees() as any)
// }))(WeekView)
