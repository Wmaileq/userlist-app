import { all, put, takeLatest, delay } from "@redux-saga/core/effects";
import { LOGIN_REQUEST, loginFailure, loginSuccess } from "../actions/auth";

export function* authSaga({ payload }) {
  try {
    yield delay(1000);
    if (Math.random() < 0.05) {
      throw new Error("Connection error");
    }
    if (payload.login === "admin" && payload.password === "12345") {
      yield put(loginSuccess());
    } else {
      yield put(loginFailure("Username or password is incorrect."));
    }
  } catch (e) {
    console.log(e);
    yield put(loginFailure("Oops... Some connection error happened."));
  }
}

export default function* usersSagas() {
  yield all([takeLatest(LOGIN_REQUEST, authSaga)]);
}
