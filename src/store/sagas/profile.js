import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import {
  LOAD_USERS_REQUEST,
  loadUsersFailure,
  loadUsersSuccess,
} from "../actions/users";
import { getRandomUsers } from "../../api/usersApi";
import normalizeUser from "../../utils/normalizeUser";
import { LOAD_PROFILE_REQUEST } from "../actions/profile";

export function* loadProfileSaga() {
  try {
    const response = yield call(getRandomUsers, 1);

    const users = response.results.map(normalizeUser);
    yield put(loadUsersSuccess(users));
  } catch (e) {
    console.log(e);
    yield put(loadUsersFailure(e));
  }
}

export default function* usersSagas() {
  yield all([takeLatest(LOAD_PROFILE_REQUEST, loadProfileSaga)]);
}
