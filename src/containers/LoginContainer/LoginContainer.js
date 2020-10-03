import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import LoginComponent from "./components/LoginComponent";

import { login } from "../../store/actions/auth";
import {
  selectError,
  selectIsAuthenticated,
  selectIsLoading,
} from "../../store/selectors/auth";
import { routes } from "../../constants";

const LoginContainer = () => {
  const history = useHistory();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const onLoginClick = useCallback(
    (username, password) => {
      dispatch(login(username, password));
    },
    [dispatch]
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push(routes.profile);
    }
  }, [isAuthenticated, history]);

  return (
    <LoginComponent
      isLoading={isLoading}
      error={error}
      onLoginClick={onLoginClick}
    />
  );
};
export default LoginContainer;
