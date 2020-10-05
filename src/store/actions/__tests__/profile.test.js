import {
  LOAD_PROFILE_FAILURE,
  LOAD_PROFILE_REQUEST,
  LOAD_PROFILE_SUCCESS,
  RESET_PROFILE,
  loadProfile,
  loadProfileFailure,
  loadProfileSuccess,
  resetProfile,
} from "../profile";

describe("profile actions tests", () => {
  it("should create loadProfile action", () => {
    expect(loadProfile()).toStrictEqual({ type: LOAD_PROFILE_REQUEST });
  });

  it("should create loadProfileSuccess action", () => {
    const mockProfile = "some profile";
    expect(loadProfileSuccess(mockProfile)).toStrictEqual({
      type: LOAD_PROFILE_SUCCESS,
      payload: mockProfile,
    });
  });

  it("should create loadProfileFailure action", () => {
    const mockError = "some error";
    expect(loadProfileFailure(mockError)).toStrictEqual({
      type: LOAD_PROFILE_FAILURE,
      payload: mockError,
    });
  });

  it("should create resetProfile action", () => {
    expect(resetProfile()).toStrictEqual({ type: RESET_PROFILE });
  });
});
