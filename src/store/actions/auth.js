export const LOGOUT = "LOGOUT";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    login: username,
    password,
  },
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});
