import { all, fork } from "@redux-saga/core/effects";
import users from "./users";

export default function* () {
  yield all([fork(users)]);
}
