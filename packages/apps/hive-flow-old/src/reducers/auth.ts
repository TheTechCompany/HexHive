import * as types from '../actions/actionTypes';
const jwtDecode = require('jwt-decode');

const initialState = {
  version: '1.0.2',
  token : null,
  user: {

  }
}

export default function auth(state = initialState, action: any & {type?: string} = {}){
   switch(action.type){
      case types.SET_AUTH:
         return {
            ...state,
           token : action.token,
           user: jwtDecode(action.token)
         }
      case types.LOGOUT:
        return {
          ...state,
          token: null,
          user: {}
        }
      default :
         return state;
   }
}
