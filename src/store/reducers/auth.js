import { handleActions } from "redux-actions";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../actions/auth";

const initialState = {
  isAuthenticated: false,
  error: null,
};

const users = handleActions(
  {
    [LOGIN_SUCCESS]: (state) => ({
      ...state,
      isAuthenticated: true,
      error: null,
    }),
    [LOGIN_FAILURE]: (state, { payload }) => ({
      ...state,
      isAuthenticated: false,
      error: payload,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      isAuthenticated: false,
      error: null,
    }),
  },
  initialState
);

export default users;
