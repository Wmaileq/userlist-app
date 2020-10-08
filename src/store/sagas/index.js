import { all, fork } from "@redux-saga/core/effects";
import users from "./users";
import auth from "./auth";
import profile from "./profile";

export default function* rootSaga() {
  yield all([fork(users), fork(auth), fork(profile)]);
}
