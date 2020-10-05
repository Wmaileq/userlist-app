import auth from "../auth";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../../actions/auth";

describe("auth reducer tests", () => {
  const mockInitialState = {
    isAuthenticated: false,
    isLoading: false,
    error: null,
  };
  it("should handle login request action", () => {
    expect(auth(mockInitialState, { type: LOGIN_REQUEST })).toMatchObject({
      isLoading: true,
      error: null,
    });
  });

  it("should handle login success action", () => {
    expect(auth(mockInitialState, { type: LOGIN_SUCCESS })).toMatchObject({
      isAuthenticated: true,
      error: null,
      isLoading: false,
    });
  });

  it("should handle login failure action", () => {
    const mockError = "some error";
    expect(
      auth(mockInitialState, { type: LOGIN_FAILURE, payload: mockError })
    ).toMatchObject({
      isAuthenticated: false,
      error: mockError,
      isLoading: false,
    });
  });

  it("should handle logout success action", () => {
    expect(auth(mockInitialState, { type: LOGOUT })).toMatchObject({
      isAuthenticated: false,
      error: null,
      isLoading: false,
    });
  });
});
