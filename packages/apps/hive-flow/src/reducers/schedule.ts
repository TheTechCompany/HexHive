import { Reducer } from 'redux';
import { StoreList } from '.';
import * as types from '../actions/actionTypes';


export interface ScheduleStoreState {
  users?: StoreList;
  employees?: StoreList;
  plant?: StoreList;
}

const initialState = {
  jobs: {
    list: [],
    updatedAt: 0
  },
  users: {
    list: [],
    updatedAt: 0
  },
  employees: {
    list: [],
    updatedAt: 0
  },
  plant: {
    list: [],
    updatedAt: 0 
  }
}

const authReducer : Reducer<ScheduleStoreState> = (state = initialState, action : {type?: string} & any = {}) => {
  switch(action.type){
    case types.SET_PLANT:
      return {
        ...state,
        plant: Object.assign({}, {
          list: action.plant,
          updatedAt: new Date().getTime()
        })
      }
    case types.SET_JOBS:
      return {
        ...state,
        jobs: Object.assign({}, {
          list: action.jobs,
          updatedAt: new Date().getTime()
        })
      }
      case types.SET_USERS:
         return {
            ...state,
           users: Object.assign({}, {
             list: action.users,
             updatedAt: new Date().getTime()
           })
         }
      case types.SET_EMPLOYEES:
        return {
          ...state,
          employees: Object.assign({}, {
            list: action.employees,
            updatedAt: new Date().getTime()
          })
        }
      default :
         return state;
   }
}

export default authReducer