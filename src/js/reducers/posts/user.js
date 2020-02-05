import { ADD_USER,USER_LOADED,DATE_UPDATED,CHANGE_SIGNUP_FORM } from "../../constants/action-types";

const initialState = {
  users: [],
  user:{
    fname:"",
    lname:"",
    password:"",
    cpassword:"",
    gender:"male",
    email:"",
    EmpPhone:"",
    security_question:"",
    security_answer:"",
  },
  start_date:new Date()
};

function userReducer(state = initialState, action) {
  if (action.type === ADD_USER) {
    return Object.assign({}, state, {
      users: state.users.concat(action.payload)
    });
  }
  if (action.type === USER_LOADED) {
    return Object.assign({}, state, {
      users: action.payload
    });
  }
  if(action.type === DATE_UPDATED) {
    return Object.assign({}, state, {
      start_date: action.payload
    });
  }
  if(action.type === CHANGE_SIGNUP_FORM) {
    return Object.assign({}, state, {
      user: action.payload
    });
  }
  return state;
}

export default userReducer;