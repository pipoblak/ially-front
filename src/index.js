import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import firebase from "config/firebase";

// const db = firebase.firestore();
// const services = db.collection('services').where('slug','==','troca_radiador').onSnapshot({includeMetadataChanges: true}, function(servicesQ){
//   const docs = servicesQ.docs.map(doc => doc.data());
//   console.log(docs)
// }, function(error) {
//   console.log(error)
// });

ReactDOM.render(<App/>,document.getElementById('root'));

serviceWorker.unregister();
