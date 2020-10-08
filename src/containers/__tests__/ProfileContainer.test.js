import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act, render } from "@testing-library/react";

import {
  selectIsError,
  selectIsLoading,
  selectProfile,
} from "../../store/selectors/profile";
import { logout } from "../../store/actions/auth";

import ProfileContainer from "../ProfileContainer";
import ProfileComponent from "../ProfileContainer/components/ProfileComponent";
import { loadProfile, resetProfile } from "../../store/actions/profile";

jest.mock("react-redux");
jest.mock("../../store/selectors/profile");
jest.mock("../ProfileContainer/components/ProfileComponent", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("ProfileContainer tests", () => {
  let dispatched = [];
  const mockDispatch = jest
    .fn()
    .mockImplementation((action) => dispatched.push(action));
  const mockProfile = "some profile";
  const mockIsLoading = false;
  const mockIsError = false;

  useSelector.mockImplementation((f) => f());
  useDispatch.mockReturnValue(mockDispatch);

  ProfileComponent.mockReturnValue(null);

  beforeEach(() => {
    jest.clearAllMocks();
    dispatched = [];
    selectProfile.mockReturnValue(mockProfile);
    selectIsLoading.mockReturnValue(mockIsLoading);
    selectIsError.mockReturnValue(mockIsError);
  });

  it("should render ProfileComponent with valid props", () => {
    render(<ProfileContainer />);

    expect(ProfileComponent).toBeCalledTimes(1);
    expect(ProfileComponent.mock.calls[0][0]).toMatchObject({
      profile: mockProfile,
      isLoading: mockIsLoading,
      isError: mockIsError,
    });
  });

  it("should dispatch loadProfile action on mount and resetProfile on unmount", () => {
    const { unmount } = render(<ProfileContainer />);
    expect(dispatched).toStrictEqual([loadProfile()]);
    unmount();
    expect(dispatched).toStrictEqual([loadProfile(), resetProfile()]);
  });

  it("should dispatch logout action", () => {
    render(<ProfileContainer />);
    act(() => {
      ProfileComponent.mock.calls[0][0].onLogoutClick();
    });
    expect(dispatched).toStrictEqual([loadProfile(), logout()]);
  });
});
