
export const LOAD_PROFILE_REQUEST = "LOAD_PROFILE_REQUEST";
export const LOAD_PROFILE_SUCCESS = "LOAD_PROFILE_SUCCESS";
export const LOAD_PROFILE_FAILURE = "LOAD_PROFILE_FAILURE";


export const loadProfile = () => ({
  type: LOAD_PROFILE_REQUEST,
});

export const loadProfileSuccess = (profile) => ({
  type: LOAD_PROFILE_SUCCESS,
  payload: profile,
});

export const loadProfileFailure = (error) => ({
  type: LOAD_PROFILE_FAILURE,
  payload: error,
});
