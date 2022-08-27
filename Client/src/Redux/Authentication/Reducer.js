import { LOGIN, LOGOUT, REQ_USER, SIGNUP } from "./ActionType"

const initialState = {
 reqUser: {},
}

export const userReducer = (store=initialState, { type, payload }) => {
 if (type === LOGIN) {
  return {...store, login_user:payload, isLogin:payload?true:false}
 }
 else if (type === SIGNUP) {
  return {...store,signup_user:payload, isSignup:payload.isAuth?true:false}
 }
  
 else if (type === REQ_USER) {
  return {...store, reqUser:payload}
  }
 
 else if (type === LOGOUT) {
  return { ...store, isSignup: false, isLogin:false}
 }
 
 else return store
}