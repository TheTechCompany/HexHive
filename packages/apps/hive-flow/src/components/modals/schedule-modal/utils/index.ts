import moment from "moment";
import { ISchedule } from "..";
import { default as utils } from '../../../../utils'

export interface IJob {
    managers?: string[];
    owner?: string;
}

export interface IUser {
    id: string;
}

export const isJoined = (me: IUser, jobData: IJob, newList: string[], removeList: string[]) => {
    let isManager = jobData && jobData.managers && jobData.managers.indexOf(me.id) > -1;
    let isTemp = newList.indexOf(me.id) > -1
    let isOwner = jobData && jobData.owner == me.id
    let notRemoved = removeList.indexOf(me?.id) < 0; 
    
    return (isManager || isTemp || isOwner) && notRemoved
  }

  const getJobById = (jobs: {JobID: string}[], id: any) => {
    return jobs.find((a) => a.JobID == id)
    
  }

export const removeSchedule = async (id: string) => {
    return await utils.schedule.remove(id)
  }

const newDates = (selected: Date[], items: any[]) => {
    var diff = false;
    var dates = selected
    var obj = items
    var clones = [];
    for(var i = dates.length-1; i >= obj.length; i--){
      clones.push(dates[i].getTime());
    }
    return clones;
  }

export const getScheduledDates = async (job_id: string) => {
    const dates = await utils.job.getDates(job_id)
    return dates;
}



export const cloneSchedule = async (schedule: ISchedule, old_dates: Date[], new_dates: Date[]) => {
    console.log(old_dates, new_dates, schedule)
    var clones = newDates(new_dates, old_dates);
    const job = schedule.job
    let scheduleItem : any = {
      job: {id: job.id, name: job.name},
      employees: schedule.employees || [],
      plant: schedule.plant || [],
      notes: schedule.notes || []
    }
    if(clones.length > 0){
        console.log(clones)
        return await Promise.all(clones.map(async (ts) => {
            scheduleItem.dateTS = moment(ts).valueOf()
            return await utils.schedule.create(scheduleItem)
        }))
    
    }
  }	

export  const saveSchedule = async (mode: string, schedule: ISchedule, timestamp: Date) => {
    
    let scheduleItem : any = {
      job: {id: schedule.job.JobID || schedule.job.id, name: schedule.job.JobName || schedule.job.name},
      employees: schedule.employees || [],
      plant: schedule.plant || [],
      notes: schedule.notes || [],
      dateTS: schedule.date || new Date()
    }

    if(mode === 'Edit'){
        if(schedule.id){
            scheduleItem.id = schedule.id
        }
      return await utils.schedule.update(scheduleItem)
        
    }else if(mode === 'Create'){
        scheduleItem.dateTS = moment(timestamp).valueOf()

        console.log('create')
      return await utils.schedule.create(scheduleItem)
    }
  }

export const joinCard = async (card_id: string, user: {id: string}, add?: string[], remove?: string[]) => {
    const r = await addUserToCard(card_id) 
    
    let removedManagers = remove || []
    let managers = add || [];
      if(r.success){
   

        //Remove from temp if still around
        if(removedManagers.indexOf(user.id) > -1){
          removedManagers.splice(removedManagers.indexOf(user.id), 1);
          
        }
        if(managers?.indexOf(user.id) < 0){
          managers.push(user.id)
        }
      
      
      }
      return {
        remove: removedManagers,
        add: managers
    }
  }
export const addUserToCard = async (id: string) => {
    return await utils.schedule.join(id)
}

export const removeUserFromCard = async (id: string) => {
    return await utils.schedule.leave(id)
}

export const leaveCard = async (card_id: string, user: {id: string}, add?: string[], remove?: string[]) => {
        const result = await removeUserFromCard(card_id)
        let removedManagers = add || []
        let managers: any[] = remove || [];

    if(result.success){
       

        if(removedManagers?.indexOf(user.id) > -1){
          removedManagers.splice(removedManagers.indexOf(user.id), 1);
        }

        managers.push(user.id)
       
    }
    return {
        add: removedManagers,
        remove: managers
    }
}

export const getManagers = (owner?: string, managers?: string[], add?: string[], remove?: string[]) => {
  console.log("managers", managers, remove, add)
    let temp = add?.filter((a) => {
        let _removed = !((remove || []).indexOf(a) > -1)
        let _manager = !((managers || []).indexOf(a) > -1)
        return _manager && _removed
    })
    console.log(temp)

    let output = ([owner]).concat(managers || [])
    if(temp){
        output = output.concat(temp)
    }
    return output.filter((a) => a && !((remove || []).indexOf(a) > -1))
}
