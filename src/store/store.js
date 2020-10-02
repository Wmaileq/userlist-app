import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { routerMiddleware } from "connected-react-router";

import rootSaga from "./sagas";
import createRootReducer from "./reducers";

const initialState = {};
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["profile"],
};
const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const store = createStore(
  persistReducer(persistConfig, createRootReducer(history)),
  initialState,
  compose(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

sagaMiddleware.run(rootSaga);

export default store;
