import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {SpaView, NotFound} from './pages';
import ReduxStore from 'store/ducks';

const store = createStore(ReduxStore);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={SpaView}/>
          <Route exact path="/lista" render={(props)=> <SpaView toggled={true} {...props}/>}/>
          <Route path="/lista/:uuid"render={(props)=> <SpaView toggled={true} {...props}/>}/>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
