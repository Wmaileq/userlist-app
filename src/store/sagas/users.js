import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import {
  LOAD_USERS_REQUEST,
  loadUsersFailure,
  loadUsersSuccess,
} from "../actions/users";
import { getRandomUsers } from "../../api/usersApi";
import normalizeUser from "../../utils/normalizeUser";

function* loadUsersSaga() {
  try {
    const response = yield call(getRandomUsers, 50);

    const users = response.data.results.map(normalizeUser);
    yield put(loadUsersSuccess(users));
  } catch (e) {
    console.log(e);
    yield put(loadUsersFailure(e));
  }
}

export default function* usersSagas() {
  yield all([takeLatest(LOAD_USERS_REQUEST, loadUsersSaga)]);
}
