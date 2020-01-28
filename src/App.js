import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Router from './router';
import ReduxStore from 'store/ducks';

const store = createStore(ReduxStore);

function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
