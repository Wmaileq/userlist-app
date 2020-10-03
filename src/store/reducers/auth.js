import { handleActions } from "redux-actions";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/auth";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const auth = handleActions(
  {
    [LOGIN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [LOGIN_SUCCESS]: (state) => ({
      ...state,
      isAuthenticated: true,
      error: null,
      isLoading: false,
    }),
    [LOGIN_FAILURE]: (state, { payload }) => ({
      ...state,
      isAuthenticated: false,
      error: payload,
      isLoading: false,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      isAuthenticated: false,
      error: null,
      isLoading: false,
    }),
  },
  initialState
);

export default auth;
