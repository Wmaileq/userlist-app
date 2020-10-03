export const LOAD_USERS_REQUEST = "LOAD_USERS_REQUEST";
export const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS";
export const LOAD_USERS_FAILURE = "LOAD_USERS_FAILURE";
export const RESET_USERS = "RESET_USERS";

export const loadUsers = (amount) => ({
  type: LOAD_USERS_REQUEST,
  payload: amount,
});

export const loadUsersSuccess = (users) => ({
  type: LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersFailure = (error) => ({
  type: LOAD_USERS_FAILURE,
  payload: error,
});

export const resetUsers = () => ({ type: RESET_USERS });
