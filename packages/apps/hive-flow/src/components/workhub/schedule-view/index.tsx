import React, {
  Component, useEffect, useState 
} from 'react';
import { connect } from 'react-redux';

import MonthPicker from '../../primatives/month-picker';
import Button from '@material-ui/core/Button';
import ScheduleCard from './schedule-card';
import ScheduleModal from '../../modals/schedule-modal';
import Paper from '@material-ui/core/Paper';
import utils from '../../../utils';
import './index.css';
import { StoreState } from '../../../reducers';
import { Maybe, Project, useQuery } from '../../../gqless';
import { getPlant, getJobs, getEmployees, getUsers } from '../../../actions/schedule';
import { Day } from '@material-ui/pickers';
import { Box, Text, Spinner } from 'grommet';

var moment = require('moment');
var conf = require('../../../conf')

export interface WeekViewProps {
  getJobs?: any;
  getUsers?: any;
  getEmployees?: any;
  getPlant?: any;

  users?: any[];
  user?: any
  token?: string;
}


const WeekView : React.FC<WeekViewProps> = (props) => {
  const [ modalShow, showModal ] = useState(false)
  const [ date, setDate ] = useState(moment())
  const [ params, setParams ] = useState<any[]>([moment().startOf('isoWeek'), moment().endOf('isoWeek')])

  const [ scheduleData, setScheduleData ] = useState<any[]>([])
  
  const [ scheduledJobs, setScheduledJobs ] = useState<any[]>([]) //figure out where this goes

  const [ selected, setSelected ] = useState<any>()

  const [ currentDay, setCurrentDay ] = useState<any>()

  const [ timestamp, setTimestamp ] = useState(new Date())

  const query = useQuery({
    suspense: false,
    staleWhileRevalidate: true
  })

  const jobs : Project[] = (query.ProjectMany() || []).map((x) => ({...x, __typename: 'Project'}))

  useEffect(() => {
    props.getJobs();
    props.getUsers();
    props.getEmployees();
    props.getPlant();
    /*    utils.user.getAll().then((users) => {
      this.setState({users: users});
    })*/
  }, [])

  useEffect(() => {
    utils.schedule.getScheduleByDate(params).then((schedule) => {
      setScheduleData(schedule.map((day: any[]) => {
        return day.map((x: any) => {
          let job = jobs.find((a) => a?.id == x.job);
          let files = job && job?.files?.length;
          return {
            ...x,
            files: files
          }

        })
      }))
    })
  }, [params])
  
  const changeWeek = (week: Date) => {
    let params = [moment(week).startOf('isoWeek'), moment(week).clone().endOf('isoWeek')]
    setDate(week)
    setParams(params)
  }

  const renderHeader = () => {
    let dayHeaders = renderDayHeaders();
    return (
      <div className="week-header">
        <div className="week-header__controls">
          <MonthPicker
            value={date}
            displayFormat={"MMMM YYYY"}
            stepSize={"week"}
            onChange={changeWeek} />
        </div>
        <div className="week-header__days">
          {dayHeaders}
        </div>
      </div>
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
    return fetch(conf.baseURL + "/api/schedule/order", {
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
        <li>
        <ScheduleCard
          jobs={jobs}
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
      utils.schedule.getScheduleByDate(params).then((schedule) => {

        setScheduleData(schedule)
        
        setSelected(null)
      
      })
      if(currentDay) updateOrder(currentDay);
    }
  }


   const renderCreateScheduleModal = () => {   
    var schedJobs = scheduledJobs;
    return (
      <ScheduleModal 
        jobs={jobs}
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
        <Button key={dayIndex} variant="contained" className="add-item-button"  onClick = { () => {
          var day = moment(params[0]).add(dayIndex, 'day')  
          setTimestamp(day)
          setCurrentDay(dayIndex)
          setScheduledJobs(scheduleData[dayIndex])

          
          toggleEditorModal(true)
        }
        }>
        Create
      </Button>
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
        <div className={(currentDay == renderTime(i, 'DD') && currentMonth == renderTime(i, 'MM')) ? ' week-day-header week-day-header-current' : 'week-day-header'}>
          <div>
            {renderTime(i, 'ddd')}
          </div>
          <div>
            {renderTime(i, 'DD/MM')}
          </div>
        </div>
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
        <div className={(currentDay == renderTime(i, 'DD') && currentMonth == renderTime(i, 'MM')) ? ' week-day week-day-current' : 'week-day'}>
          <ul className = 'week-day-content'>
            { dayItems }
            {renderAddScheduleButton(i)}
          </ul>
        </div>
      ));
    }
    return week;
  }

  const renderedDays = renderDays()
  const renderedModal = renderCreateScheduleModal()

    return (
      <Paper className="week-main">
        {/*<div className="week-main">*/} 
          {renderHeader()} 
          <div className="week-container">
           {query.$state.isLoading ? (
            <Box
              flex
              justify="center"
              align="center">
              <Spinner size="medium"/>
              <Text>Loading schedule ...</Text>
            </Box>
           )  : (<div className="week-days">
              {renderedDays}      
              {renderedModal}
            </div>)}
          </div>
        </Paper>
    );
  
}

export default connect((state: StoreState) => ({
  users: state.schedule.users.list,
  user: state.auth.user,
  token: state.auth.token
}), (dispatch) => ({
  getJobs: () => dispatch(getJobs() as any),
  getPlant: () => dispatch(getPlant() as any),
  getUsers: () => dispatch( getUsers() as any),
  getEmployees: () => dispatch(getEmployees() as any)
}))(WeekView)
