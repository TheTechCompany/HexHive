import { combineReducers} from 'redux';
import schedule from './schedule';
import auth from './auth';
import {preferenceReducer} from './preferences'

var reducers = {
  auth,
  schedule,
  preferences: preferenceReducer
}
export interface StoreList {
  list: any[],
  updatedAt: number
}
export interface StoreState {
  auth?: any;
  schedule?: any;
  preferences?: {config: any};
}

const reducer = combineReducers<StoreState>(reducers);
export default reducer;
