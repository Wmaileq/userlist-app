import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { selectIsAuthenticated } from "../store/selectors/auth";

const ProtectedRoute = (props) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  if (isAuthenticated) {
    return <Route {...props} />;
  }

  return <Redirect to="/login" />;
};

export default ProtectedRoute;
