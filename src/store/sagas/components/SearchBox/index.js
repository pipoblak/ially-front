import { all, takeLatest, put } from "redux-saga/effects";
import { Types } from 'store/ducks/components/SearchBox';
import firebase from "config/firebase";


function* getProfessionals() {
  try {
    const db = firebase.firestore();
    const professionals = yield db.collection('professionals').orderBy('order').get();
    yield put({type: Types.RETURN_PROFESSIONALS, payload: professionals.docs.map(doc => doc.data()) });
  } catch (err) {

  }
}

function* getServices(action) {
  try {
    const db = firebase.firestore();
    const { slug } = action.payload;
    const services = yield db.collection('services').orderBy('name').where('professional-slug','==', slug).get();
    yield put({type: Types.RETURN_SERVICES, payload: services.docs.map(doc => doc.data()) });
  } catch (err) {
    console.log(err)
  }
}

export default all([
  takeLatest(Types.GET_PROFESSIONALS, getProfessionals),
  takeLatest(Types.GET_SERVICES, getServices),
]);
