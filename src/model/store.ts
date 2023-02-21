import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./reducers";
import { initSaga } from "./api";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(initSaga);

export type AppRootStateType = ReturnType<typeof rootReducer>;
