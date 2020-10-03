import { handleActions } from "redux-actions";
import {
  LOAD_USERS_FAILURE,
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  RESET_USERS,
} from "../actions/users";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

const users = handleActions(
  {
    [LOAD_USERS_REQUEST]: (state) => ({
      ...state,
      isError: false,
      isLoading: true,
    }),
    [LOAD_USERS_SUCCESS]: (state, { payload }) => ({
      ...state,
      users: payload,
      isError: false,
      isLoading: false,
    }),
    [LOAD_USERS_FAILURE]: (state, { payload }) => ({
      ...state,
      isError: true,
      isLoading: false,
    }),
    [RESET_USERS]: (state) => ({
      ...state,
      users: [],
    }),
  },
  initialState
);
export default users;
