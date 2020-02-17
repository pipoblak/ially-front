import { all, takeLatest, put } from "redux-saga/effects";
import { Types } from 'store/ducks/components/SearchBox';

function* getProfessionals() {
  try {
    console.log("TEST")
    yield put({type: Types.RETURN_PROFESSIONALS });
  } catch (err) {
    console.log(err)
  }
 
}

export default all([
  takeLatest(Types.GET_PROFESSIONALS, getProfessionals),
]);
