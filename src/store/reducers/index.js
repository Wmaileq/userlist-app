import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import users from "./users";
import auth from "./auth";
import profile from "./profile";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    users,
    profile,
  });

export default createRootReducer;
