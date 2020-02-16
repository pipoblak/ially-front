import { all } from "redux-saga/effects";
import * as sagas from './sagas';

export default function* rootSaga() {
  return yield all(
    Object.keys(sagas).map(saga => (sagas[saga]))
  );
}
