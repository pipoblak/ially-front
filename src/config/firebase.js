import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCf0IH9U14PJAmTu0Nq1fCQ6vqESGbsphY",
  authDomain: "ially-2eb37.firebaseapp.com",
  databaseURL: "https://ially-2eb37.firebaseio.com",
  projectId: "ially-2eb37",
  storageBucket: "ially-2eb37.appspot.com",
  messagingSenderId: "146681856838",
  appId: "1:146681856838:web:dc78c1abd2af6b47c4db47",
  measurementId: "G-W2KK8SZK8F"
};

firebase.initializeApp(config);

export default firebase;