import profile from "../profile";
import {
  LOAD_PROFILE_FAILURE,
  LOAD_PROFILE_REQUEST,
  LOAD_PROFILE_SUCCESS,
  RESET_PROFILE,
} from "../../actions/profile";

describe("profile reducer tests", () => {
  const mockInitialState = {
    profile: null,
    isLoading: false,
    isError: false,
  };

  it("should handle load profile request action", () => {
    expect(
      profile(mockInitialState, { type: LOAD_PROFILE_REQUEST })
    ).toMatchObject({
      isError: false,
      isLoading: true,
    });
  });

  it("should handle load profile success action", () => {
    const mockProfile = "some profile";
    expect(
      profile(mockInitialState, {
        type: LOAD_PROFILE_SUCCESS,
        payload: mockProfile,
      })
    ).toMatchObject({
      profile: mockProfile,
      isError: false,
      isLoading: false,
    });
  });

  it("should handle load profile failure action", () => {
    expect(
      profile(mockInitialState, { type: LOAD_PROFILE_FAILURE })
    ).toMatchObject({
      isError: true,
      isLoading: false,
    });
  });

  it("should handle reset profile action", () => {
    expect(profile(mockInitialState, { type: RESET_PROFILE })).toMatchObject({
      profile: null,
    });
  });
});
