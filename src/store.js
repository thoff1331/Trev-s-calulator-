import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import axios from "axios";
const initialState = {
  user: "Trev",
  role: "Software Engineer",
  fte: true,
  years: 3
};
const GET_USER = "GET_USER";
const CHANGE_USERNAME = "CHANGE_USERNAME";

export function getUser(user, role, fte, years) {
  return {
    type: GET_USER,
    payload: axios.get("/getuser")
  };
}
export function changeUserName(user) {
  return {
    type: CHANGE_USERNAME,
    payload: axios.post("/changeusername")
  };
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state
      };
    case `${GET_USER}_PENDING`:
      return {
        ...state
      };
    case `${CHANGE_USERNAME}_FULFILLED`:
      return {
        user: action.payload.data
      };
    default:
      return state;
  }
}

export default createStore(reducer, applyMiddleware(promise));
