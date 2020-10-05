import {
  login,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  loginFailure,
  loginSuccess,
  LOGOUT,
  logout,
} from "../auth";

describe("auth actions tests", () => {
  it("should create login action", () => {
    const mockLogin = "some login";
    const mockPassword = "some password";

    expect(login(mockLogin, mockPassword)).toStrictEqual({
      type: LOGIN_REQUEST,
      payload: {
        login: mockLogin,
        password: mockPassword,
      },
    });
  });

  it("should create login success action", () => {
    expect(loginSuccess()).toStrictEqual({
      type: LOGIN_SUCCESS,
    });
  });

  it("should create login failure action", () => {
    const mockError = "some error";
    expect(loginFailure(mockError)).toStrictEqual({
      type: LOGIN_FAILURE,
      payload: mockError,
    });
  });

  it("should create logout action", () => {
    expect(logout()).toStrictEqual({
      type: LOGOUT,
    });
  });
});
