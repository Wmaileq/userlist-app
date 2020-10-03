import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { getRandomUsers } from "../../api/usersApi";
import normalizeUser from "../../utils/normalizeUser";
import {
  LOAD_PROFILE_REQUEST,
  loadProfileFailure,
  loadProfileSuccess,
} from "../actions/profile";

export function* loadProfileSaga() {
  try {
    const response = yield call(getRandomUsers, 1);

    const [user] = response.data.results.map(normalizeUser);
    yield put(loadProfileSuccess(user));
  } catch (e) {
    console.log(e);
    yield put(loadProfileFailure(e));
  }
}

export default function* profileSagas() {
  yield all([takeLatest(LOAD_PROFILE_REQUEST, loadProfileSaga)]);
}
