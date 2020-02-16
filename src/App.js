import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Router from './router';
import ReduxStore from 'store/ducks';
import reactotron from 'config/reactotron';

import './fontawesome';

const store = createStore(ReduxStore, reactotron.createEnhancer());

function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
