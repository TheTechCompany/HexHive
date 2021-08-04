import React, { Component, useEffect, useMemo, useState } from 'react';

import {AvatarList} from '../../avatar-list'; 

import { CloneTab } from './tabs/clone-tab'
import { AddTab } from './tabs/add-tab'

import { Layer, Button, Anchor, Box, Heading } from 'grommet';
import { ManagerList } from '../../manager-list';
import { getManagers, isJoined } from './utils';

// import './index.css';
// import { cloneSchedule, getScheduledDates, isJoined, joinCard, leaveCard, removeSchedule, saveSchedule } from './utils';
// import { getManagers } from './utils';

// import { ManagerList } from '../../manager-list';

var moment = require('moment');
var closeCallback;


export interface ScheduleModalProps {

  timestamp?: Date;

  projects: any[];
  people: any[];
  equipment: any[];

  scheduledJobs?: any[];

  open: boolean;
  onClose?: () => void; 

  user?: any;
  users?: any;

  item?: ISchedule

  onSaveItem: (item: any, ts: Date) => void;
  onCloneItem: (item: any, currentDates: Date[], cloneDates: Date[]) => void;
  onCreateItem: (item: any, ts: Date) => void;

  onJoinCard?: () => void;
  onLeaveCard?: () => void;
}

export interface ISchedule {
  id?: string;
  people?: Array<string | undefined | null>
  equipment?: Array<string | undefined | null>

  project: {name: string, id: string};
  notes: Array<string | undefined | null>,
  managers?: Array<string | undefined | null>;
  owner?: {id: string, name: string};
  date?: Date;
}

const ScheduleModal : React.FC<ScheduleModalProps> = (props) => {

  const [ mode, setMode ]= useState<string>('create')

  const stateMode : "Clone" | "Edit" | "Create" = useMemo(() => {
    return (mode === 'clone') ? 'Clone': (mode === 'edit') ? 'Edit' :  'Create';
  }, [mode])

  const [ dialogOpen, setDialogOpen ] = useState<boolean>(false)

  const [ tab, setTab ] = useState<number>(0)
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
    console.log(props.item)
    if(props.item && props.item.id){
      setMode('edit')
    }
    if(props.item && props.item.id && item?.id !== props.item?.id){
      console.log("SCHEDULe")
      // getScheduledDates(props.item.job.id || '').then((dates) => {
      //   console.log("DATES", dates)
      //   setExistingDates(dates)
      //   setCloneSelection(dates)
      // })
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
        <Button label="Clone" onClick = {()=> {setMode('clone')}} />
      ); 
    }
    else if(stateMode === 'Clone'){
      return (
        <Button label="Edit" onClick = {()=> {setMode('edit')}} />
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
            //  removeSchedule(item?.id)
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
      let output : any = Object.assign({}, item)
    
      if(output?.project?.id){
        output.project = item.project.id;

      }
console.log(output)
      if(mode === 'clone'){
        props.onCloneItem(output, existingDates, cloneSelection)
        // await cloneSchedule(item, existingDates, cloneSelection)
      }else{
        if(stateMode == 'Create'){
          props.onCreateItem(output, timestamp)
        }else{
          props.onSaveItem(output, timestamp)
        }
        // await saveSchedule(stateMode, item, timestamp)
      }
      onClose()
    }
  }

 

  const renderMemberButton = () => {
    const toggle = async () => {
      if(joined && item?.id){
        props.onLeaveCard?.();

        // const {add, remove } = await leaveCard(item?.id, props.user, managerList.add, managerList.remove)
        // setManagerList({
        //   add,
        //   remove
        // })
      }else if(!joined && item?.id){
        props.onJoinCard?.();
        // const { add, remove } = await joinCard(item?.id, props.user, managerList.add, managerList.remove)
        // setManagerList({
        //   add,
        //   remove
        // })
      }
    }
    return (
      <Button hoverIndicator style={{padding: '4px 8px 4px 8px'}} margin={{right: 'small'}} plain onClick={toggle} label={ joined ? "Leave" : "Join"} />
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

  const joined = isJoined({id: props.user?._id}, item || null, managerList?.add || [], managerList?.remove || [])

  
  
    return props.open ? (
      <Layer 
        style={{zIndex: 99, boxShadow: '5px 5px 15px -5px #323a3c', overflow: 'hidden'}}
        onClickOutside={onClose}
        onEsc={onClose}> 
      <Box 
        round="xxsmall"
        overflow="hidden"
        background={"neutral-1"}
        direction="column"
        width="large">
        
        <Box
          background="accent-2"
          justify="between"
          align="center"
          pad={{top: "small", bottom: 'small', horizontal: 'small'}}
          direction="row">
          <Box
            direction="row"
            align="center">
          <Heading level='4' margin='none'>
              {stateMode} Schedule Item for {moment(timestamp).format('DD/MM/YYYY')}
          </Heading>
          
          </Box>
          <Box direction="row" align="center">
            {stateMode == 'Edit' && item?.owner?.id !== props.user?._id && renderMemberButton() }

            <ManagerList 
              users={props.users}
              managers={getManagers(item?.owner?.id || props.user?._id || '', item?.managers || [], managerList.add, managerList.remove)}/>
          </Box>
        </Box>

        <Box 
  
          pad="small" 
          height={{max: '65vh'}} margin={{bottom: 'small'}}>
            {!(stateMode === 'Edit' || stateMode === 'Create') ? (
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
                  jobs={props.projects}
                  plants={props.equipment}
                  people={props.people} /> 
            )}
        </Box>
        <Box gap="xsmall" pad={'xsmall'} border={{side: 'top', color: 'light-3'}} direction="row" justify="end">
          {joined && renderRemove(stateMode)}
          {joined && renderClone(stateMode)}
          <Button label="Close" onClick = {onClose} />
            {(joined || stateMode === "Create") && (<Button primary onClick={onSave} label= {
              (stateMode === 'Edit' || stateMode === 'Clone') ? ((stateMode == 'Clone') ? "Save Cloned Items" : "Save Changes") : "Create"
            } />)}
        </Box>
        </Box>   
      </Layer>
    ) : null;
  


}

export default ScheduleModal
// export default connect((state : StoreState) => {
//   console.log(state.schedule)
// //  jobs: (state.schedule.jobs || {list: []}).list,

// return {
//   user: state.auth.user,
//   users: state.schedule.users.list,
//   people: state.schedule.employees.list,
//   plants: state.schedule.plant.list
// }
// })(ScheduleModal);
