import { handleActions } from "redux-actions";
import {
  LOAD_PROFILE_FAILURE,
  LOAD_PROFILE_REQUEST,
  LOAD_PROFILE_SUCCESS,
} from "../actions/profile";

const initialState = {
  profile: null,
  isLoading: false,
  isError: false,
  isAuthenticated: false,
};

const users = handleActions(
  {
    [LOAD_PROFILE_REQUEST]: (state) => ({
      ...state,
      isError: false,
      isLoading: true,
    }),
    [LOAD_PROFILE_SUCCESS]: (state, { payload }) => ({
      ...state,
      profile: payload,
      isError: false,
      isLoading: false,
    }),
    [LOAD_PROFILE_FAILURE]: (state) => ({
      ...state,
      isError: true,
      isLoading: false,
    }),
  },
  initialState
);
export default users;
