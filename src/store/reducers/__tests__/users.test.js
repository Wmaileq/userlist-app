import users from "../users";
import {
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE,
  RESET_USERS,
} from "../../actions/users";

describe("profile reducer tests", () => {
  const mockInitialState = {
    users: [],
    isLoading: false,
    isError: false,
  };

  it("should handle load profile request action", () => {
    expect(users(mockInitialState, { type: LOAD_USERS_REQUEST })).toMatchObject(
      {
        isError: false,
        isLoading: true,
      }
    );
  });

  it("should handle load profile success action", () => {
    const mockUsers = ["some user", "next user"];
    expect(
      users(mockInitialState, {
        type: LOAD_USERS_SUCCESS,
        payload: mockUsers,
      })
    ).toMatchObject({
      users: mockUsers,
      isError: false,
      isLoading: false,
    });
  });

  it("should handle load profile failure action", () => {
    expect(users(mockInitialState, { type: LOAD_USERS_FAILURE })).toMatchObject(
      {
        isError: true,
        isLoading: false,
      }
    );
  });

  it("should handle reset profile action", () => {
    expect(users(mockInitialState, { type: RESET_USERS })).toMatchObject({
      users: [],
    });
  });
});
