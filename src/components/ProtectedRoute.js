import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { selectIsAuthenticated } from "../store/selectors/auth";
import { routes } from "../constants";

const ProtectedRoute = (props) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    return <Route {...props} />;
  }

  return <Redirect to={routes.login} />;
};

export default ProtectedRoute;
