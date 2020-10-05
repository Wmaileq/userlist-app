import {
  LOAD_USERS_FAILURE,
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  RESET_USERS,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
  resetUsers,
} from "../users";

describe("users actions tests", () => {
  it("should create loadUsers action", () => {
    const mockAmount = "some amount";
    expect(loadUsers(mockAmount)).toStrictEqual({
      type: LOAD_USERS_REQUEST,
      payload: mockAmount,
    });
  });

  it("should create loadUsersSuccess action", () => {
    const mockUsers = "some users";
    expect(loadUsersSuccess(mockUsers)).toStrictEqual({
      type: LOAD_USERS_SUCCESS,
      payload: mockUsers,
    });
  });

  it("should create loadUsersFailure action", () => {
    const mockError = "some error";
    expect(loadUsersFailure(mockError)).toStrictEqual({
      type: LOAD_USERS_FAILURE,
      payload: mockError,
    });
  });

  it("should create resetUsers action", () => {
    expect(resetUsers()).toStrictEqual({ type: RESET_USERS });
  });
});
