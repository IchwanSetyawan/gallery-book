import users from "../reducer/users";
import { GET_LOGIN_ACTION, GET_REGISTER_ACTION } from "./types";

export const getUserAction = () => async (dispatch, getState) => {
  dispatch({
    type: GET_REGISTER_ACTION,
    payload: {
      users: users,
    },
  });
  dispatch({
    type: GET_LOGIN_ACTION,
    payload: {
      users: users,
    },
  });
};
