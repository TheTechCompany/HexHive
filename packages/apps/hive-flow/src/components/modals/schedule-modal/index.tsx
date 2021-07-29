import React, { Component, useEffect, useState } from 'react';

import { connect } from 'react-redux';
import {AvatarList} from '../../primatives/avatar-list'; 
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { CloneTab } from './tabs/clone-tab'
import { AddTab } from './tabs/add-tab'


import { Layer, Button as GButton, Anchor, Box, Heading } from 'grommet';
import * as Icons from 'grommet-icons'

import './index.css';
import utils from '../../../utils';
import { StoreState } from '../../../reducers';
import { cloneSchedule, getScheduledDates, isJoined, joinCard, leaveCard, removeSchedule, saveSchedule } from './utils';
import { getManagers } from './utils';
import { ManagerList } from '../../manager-list';
import { Maybe, Project } from '../../../gqless';

var moment = require('moment');
var conf = require('../../../conf.js');
var closeCallback;

const async = require('async');
const jwtDecode = require('jwt-decode');

var colorUtil = require('../../../utils/color');

export interface ScheduleModalProps {

  timestamp?: Date;

  jobs?: Project[];
  people?: any;
  plants?: any;

  scheduledJobs?: any[];

  open: boolean;
  onClose?: () => void; 

  user?: any;
  users?: any;

  item?: ISchedule
}

export interface ISchedule {
  id?: string;
  employees?: string[],
  plant?: string[],
  job: {
    id?: string;
    name?: string;
    JobID: any;
    JobName: string;
  },
  notes: Array<string>,
  managers?: string[];
  owner?: string;
  date?: Date;
}

const ScheduleModal : React.FC<ScheduleModalProps> = (props) => {

  const [ dialogOpen, setDialogOpen ] = useState<boolean>(false)

  const [ tab, setTab ] = useState<number>(0)
  const [ mode, setMode ]= useState<string>('create')
  const [ date, setDate ] = useState<Date>(new Date())
  
  const [ timestamp, setTimestamp ] = useState<Date>(props.timestamp || new Date())

  const [item, setItem] = useState<ISchedule>()

  const [ managerList, setManagerList ] = useState<{
    add?: string[];
    remove?: string[];
  }>({})

  const [ existingDates, setExistingDates ] = useState<Date[]>([])
  const [ cloneSelection, setCloneSelection ] = useState<Date[]>([])

  useEffect(() => {
    if(props.timestamp){
      setTimestamp(props.timestamp)
    }
  }, [props.timestamp])

  useEffect(() => {
    if(props.item){
      setItem(props.item)
    }
  }, [props.item])

  useEffect(() => {
    if(props.item && props.item.id){
      setMode('edit')
    }
    if(props.item && props.item.id && item?.id !== props.item?.id){
      console.log("SCHEDULe")
      getScheduledDates(props.item.job.id || '').then((dates) => {
        console.log("DATES", dates)
        setExistingDates(dates)
        setCloneSelection(dates)
      })
    }
  }, [props.item?.id])
  
 /* constructor(props){ 
    super(props);
    closeCallback = props.closeCallback;
    /*One of the props I pass in is an array of the already scheduled jobs
     * for the day called scheduledJobs
    this.state = {
      activeTab: 0,
      mode: 'create',
      date: new Date(),
      jobs : [],
      jobEmployees : [],
      jobPlants : [],
      notes : [],
      jobId : null,
      todaysSchedule : [],
      ...props,
      startDateRange : moment(props.timestamp).toISOString(),
      endDateRange : moment(props.timestamp).toISOString(),
      cloneSelected: [],
      currentItems: [],
      temporaryManagers: [],
      temporaryRemovedManagers: []
    };
  }*/

/*
  componentDidMount(){
       utils.staff.getAll().then((res) => {
      this.setState({ employees: res });
    });*/
    /*    utils.plant.getAll().then((res) => {
      this.setState({ plants: res });
    });

*/


  /*

  componentWillMount(){
    utils.job.fetchJobs(this.state.timestamp, 7).then((res) => {
      for(var i = 0; i < res.length; i++){
        this.state.scheduledJobs.forEach((x) => {
          if(typeof res[i] != 'undefined' && x.job === res[i].JobID){
            res.splice(i, 1);
          }
        });
      }
      this.setState({ 
        jobs: res 
      });
    });
  }*/

 /* componentWillReceiveProps(newProps){
    if(this.props !== newProps){
      this.setState({
        ...newProps,
        endDateRange : moment(newProps.timestamp).toISOString()
      });
    }


    if (newProps.jobData && newProps.jobData !== {}){
      let j = newProps.jobData;
      this.setState({
        _id : j._id,
      temporaryManagers: [],
      temporaryRemovedManagers: [],
        itemId: j.id,
        jobId: (j.job && j.job.id) ? j.job.id: {},
        jobEmployees: j.employees,
        jobPlants: j.plant,
        notes: j.notes,
        timestamp: j.date,
        mode: 'edit'
      });
      if(newProps.jobData.job){
        utils.job.getDates(newProps.jobData.job.id).then((dates) => {
          var ObjDates = [];
          var Obj = [];
          dates.forEach((x) =>{
            ObjDates.push(new Date(x));
            Obj.push(new Date(x));
          });
          this.setState({
            cloneSelected : ObjDates,
            currentItems : Obj
          });
        });
      }
    } else {
      this.componentWillMount()
    }
  }
*/



  const renderClone = (stateMode : string) => {
    if(stateMode === 'Edit'){
      return (	
        <Button onClick = {()=> {setMode('clone')}}>Clone</Button>
      ); 
    }
    else if(stateMode === 'Clone'){
      return (
        <Button onClick = {()=> {setMode('edit')}}>Edit</Button>
      );
    }
    else{
      return null;
    }
  }

  const renderRemove = (stateMode: string) => {
    if(stateMode === 'Edit'){
      return (
        <Button color="secondary" onClick={() => {
          if(item?.id){
             removeSchedule(item?.id)
          }
          onClose()
        }}>Delete</Button>
      );
    }else{
      return null;
    }
  }



  const onSave = async () => {
    console.log(item, mode)
    if(item){
    
      if(mode === 'clone'){
        await cloneSchedule(item, existingDates, cloneSelection)
      }else{
        await saveSchedule(stateMode, item, timestamp)
      }
      onClose()
    }
  }

 

  const renderMemberButton = () => {
    const toggle = async () => {
      if(joined && item?.id){
        const {add, remove } = await leaveCard(item?.id, props.user, managerList.add, managerList.remove)
        setManagerList({
          add,
          remove
        })
      }else if(!joined && item?.id){
        const { add, remove } = await joinCard(item?.id, props.user, managerList.add, managerList.remove)
        setManagerList({
          add,
          remove
        })
      }
    }
    return (
      <Button onClick={toggle}>{ joined ? "Leave" : "Join"} </Button>
    );
  }

  const onClose = () => {    
    props.onClose?.()

    setItem(undefined)
    setExistingDates([])
    setCloneSelection([])
    setManagerList({})
    setMode('create')
  }

  const joined = isJoined(props.user, item || {}, managerList?.add || [], managerList?.remove || [])

  const stateMode = (mode === 'clone') ? 'Clone': (mode === 'edit') ? 'Edit' :  'Create';
  
  
    return props.open ? (
      <Layer 
        style={{zIndex: 99}}
        onClickOutside={onClose}
        onEsc={onClose}> 
      <Box pad="small">
        <Box
          justify="between"
          align="center"
          pad={{top: "small", bottom: 'small'}}
          direction="row">
          <Box
            direction="row"
            align="center">
          <Heading level='4' margin='none'>
              {stateMode} Schedule Item for {moment(timestamp).format('DD/MM/YYYY')}
          </Heading>
          {stateMode == 'Edit' && item?.owner !== props.user.id && renderMemberButton() }
          
          </Box>
            {<ManagerList 
              users={props.users}
              managers={getManagers(item?.owner || props.user.id, item?.managers || [], managerList.add, managerList.remove)}/>}
        </Box>

        <Box margin={{bottom: 'small'}} className="schedule-modal__content MuiDialogContent-root">
            { !(stateMode === 'Edit' || stateMode === 'Create') ? (
                <CloneTab
                   selected={cloneSelection}
                   onSelect={(dates) => setCloneSelection(dates)} /> 
            ) : (
                <AddTab
                  item={item}
                  onChange={(_item) => {
                    console.log({...item, ..._item})
                    setItem({...item, ..._item})
                  }}
                  jobs={props.jobs}
                  plants={props.plants}
                  people={props.people} /> 
            )}
        </Box>
        <Box pad={{top: 'small'}} border={{side: 'top', color: 'light-3'}} direction="row" justify="end">
          {joined && renderRemove(stateMode)}
          {joined && renderClone(stateMode)}
          <Button color="primary" onClick = {onClose}>Close</Button>
            {(joined || stateMode === "Create") && (<Button color="primary" variant="contained" onClick={onSave}>
            {
              (stateMode === 'Edit' || stateMode === 'Clone') ? ((stateMode == 'Clone') ? "Save Cloned Items" : "Save Changes") : "Create Schedule Item"
            }
          </Button>)}
        </Box>
        </Box>   
      </Layer>
    ) : null;
  


}

export default connect((state : StoreState) => {
  console.log(state.schedule)
//  jobs: (state.schedule.jobs || {list: []}).list,

return {
  user: state.auth.user,
  users: state.schedule.users.list,
  people: state.schedule.employees.list,
  plants: state.schedule.plant.list
}
})(ScheduleModal);
