import { createStore } from "redux";
import {
  GET_REGISTER_ACTION,
  GET_LOGIN_ACTION,
  GET_LOGOUT_ACTION,
} from "../action/types";

const initialState = {
  users: [],
  loggedInUser: null,
};

export const getUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGISTER_ACTION:
      state = {
        ...state,
        users: [...state.users, action.payload],
      };
    case GET_LOGIN_ACTION:
      return {
        ...state,
        users: action.payload,
      };

    case GET_LOGOUT_ACTION:
      return {
        ...state,
        users: null,
      };
    default:
      return state;
  }
};

export default createStore(getUsersReducer);
