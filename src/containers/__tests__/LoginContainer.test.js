import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { act, render } from "@testing-library/react";

import LoginContainer from "../LoginContainer";
import LoginComponent from "../LoginContainer/components/LoginComponent";
import {
  selectError,
  selectIsAuthenticated,
  selectIsLoading,
} from "../../store/selectors/auth";
import { login } from "../../store/actions/auth";
import { routes } from "../../constants";

jest.mock("react-redux");
jest.mock("react-router");
jest.mock("../LoginContainer/components/LoginComponent", () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock("../../store/selectors/auth");

describe("Login container tests", () => {
  const dispatched = [];
  const mockDispatch = jest
    .fn()
    .mockImplementation((action) => dispatched.push(action));
  const mockPush = jest.fn();
  const mockHistory = { push: mockPush };

  const mockError = null;
  const mockIsLoading = true;
  const mockIsAuthenticated = false;

  useSelector.mockImplementation((f) => f());
  useDispatch.mockReturnValue(mockDispatch);
  useHistory.mockReturnValue(mockHistory);

  LoginComponent.mockImplementation(() => null);

  beforeEach(() => {
    jest.clearAllMocks();

    selectError.mockReturnValue(mockError);
    selectIsLoading.mockReturnValue(mockIsLoading);
    selectIsAuthenticated.mockReturnValue(mockIsAuthenticated);
  });

  it("should render LoginComponent with props", () => {
    render(<LoginContainer />);

    expect(LoginComponent).toBeCalledTimes(1);
    expect(LoginComponent.mock.calls[0][0]).toMatchObject({
      error: mockError,
      isLoading: mockIsLoading,
    });
  });

  it("should redirect to profile page if user is authenticated", () => {
    selectIsAuthenticated.mockReturnValue(true);

    render(<LoginContainer />);

    expect(mockPush).toBeCalledWith(routes.profile);
  });

  it("should dispatch login action if onLoginClick is used", () => {
    const mockUsername = "some username";
    const mockPassword = "some password";

    render(<LoginContainer />);

    expect(LoginComponent).toBeCalledTimes(1);

    act(() => {
      LoginComponent.mock.calls[0][0].onLoginClick(mockUsername, mockPassword);
    });

    expect(dispatched).toStrictEqual([login(mockUsername, mockPassword)]);
  });
});
