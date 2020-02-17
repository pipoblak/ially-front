import { all, takeLatest, put } from "redux-saga/effects";
import { Types } from 'store/ducks/components/SearchBox';
import firebase from "config/firebase";


function* getProfessionals() {
  try {
    const db = firebase.firestore();
    const professionals = yield db.collection('professionals').get();
    yield put({type: Types.RETURN_PROFESSIONALS, payload: professionals.docs.map(doc => doc.data()) });
  } catch (err) {

  }
 
}

export default all([
  takeLatest(Types.GET_PROFESSIONALS, getProfessionals),
]);
