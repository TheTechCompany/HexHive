import * as types from './actionTypes';
import * as staffUtils from '../utils/staff';
import * as userUtils from '../utils/user';
import * as plantUtils from '../utils/plant';
import * as jobUtils from '../utils/job'

function isUpdatable(t1, t2, hrs){
  let diff = (t2 - t1) / 1000 / 60 / 60;
  console.log("Is Updatable", diff)
  return ((t2 - t1) / 1000 / 60 / 60 > hrs)
}

export function setPlant(plant){
  return {
    type: types.SET_PLANT,
    plant: plant
  }
}

export function setJobs(jobs){
  return {
    type: types.SET_JOBS,
    jobs: jobs
  }
}


export function getJobs(){
  console.log("Updating job utils")

  return (dispatch, getState) => {
    console.log("Updating job utils")

    let lastUpdate = (getState().schedule.jobs || {updatedAt: 0}).updatedAt;
    let currentTime = new Date().getTime();
    console.log(lastUpdate, currentTime)

    if(isUpdatable(lastUpdate, currentTime, 0)){
      console.log("Fetching")
      jobUtils.getAll().then((jobs) => {
        console.log("Fetched")

        if(!jobs.err){

          dispatch(setJobs(jobs))
        }
      })
    }
  }
}

export function getPlant(){
  return (dispatch, getState) => {
    let lastUpdate = getState().schedule.plant.updatedAt;
    let currentTime = new Date().getTime();
    if(isUpdatable(lastUpdate, currentTime, 0.5)){
      plantUtils.getAll().then((plant) => {
        if(!plant.err){
          dispatch(setPlant(plant))
        }
      })
    }
  }
}

export function setUsers(users){
  return {
    type: types.SET_USERS,
    users: users
  }
}

export function getUsers() {
  return (dispatch, getState) => {
    console.log("GET USERS")
    let lastUpdate = getState().schedule.users.updatedAt
    let currentTime = new Date().getTime();
    if(isUpdatable(lastUpdate, currentTime, 3)){
      userUtils.getAll().then((users) => {
        console.log(users)
        if(!users.err){
          dispatch(setUsers(users))
        }
      })
    }
  }
}

export function setEmployees(employees){
  return {
    type: types.SET_EMPLOYEES,
    employees: employees
  }
}

export function getEmployees(){
  return (dispatch, getState) => {
    let lastUpdate = getState().schedule.employees.updatedAt
    let currentTime = new Date().getTime();

    if(isUpdatable(lastUpdate, currentTime, 0.5)){
      staffUtils.getAll().then((staff) => {
        if(!staff.err){
          dispatch(setEmployees(staff))
        }
      })
    }
  }
}
