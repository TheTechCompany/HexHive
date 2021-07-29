import * as types from './actionTypes';
import * as userUtils from '../utils/auth';

export function logout(){
  return {
    type: types.LOGOUT
  }
}

export function authenticate(user: string, pass: string, cb: Function){
  return (dispatch : any, getState: any) => {
    userUtils.email(user, pass).then((r) => {
      if(r.success){
        dispatch(setUser(r.token))
        cb(null);
      }else{
        cb(r)
      }
    });
  }
}

export function setUser(token: string) {
   return {
      type : types.SET_AUTH,
      token : token
   }
}
