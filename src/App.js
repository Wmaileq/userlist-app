import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "./store/store";

import MainContainer from "./containers/MainContainer/MainContainer";
import UsersContainer from "./containers/UsersContainer";
import LoginContainer from "./containers/LoginContainer";

import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

import "./App.css";

const App = () => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <ProtectedRoute path="/profile">
          <UsersContainer />
        </ProtectedRoute>
        <Route path="/login">
          <LoginContainer />
        </Route>
        <Route path="/users">
          <UsersContainer />
        </Route>
        <Route exact path="/">
          <MainContainer />
        </Route>
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default App;
