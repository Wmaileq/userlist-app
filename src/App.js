import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "./store/store";

import MainContainer from "./containers/MainContainer/MainContainer";
import UsersContainer from "./containers/UsersContainer";
import LoginContainer from "./containers/LoginContainer";
import ProfileContainer from "./containers/ProfileContainer";

import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

import { routes } from "./constants";

import "./App.css";

const App = () => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <ProtectedRoute path={routes.profile}>
          <ProfileContainer />
        </ProtectedRoute>
        <Route path={routes.login}>
          <LoginContainer />
        </Route>
        <Route path={routes.users}>
          <UsersContainer />
        </Route>
        <Route exact path={routes.main}>
          <MainContainer />
        </Route>
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default App;
