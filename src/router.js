import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {SpaView, NotFound, ShowItem} from './pages';

export default () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={SpaView}/>
        <Route exact path="/lista" render={(props)=> <SpaView toggled={true} {...props}/>}/>
        <Route path="/lista/:uuid"render={(props)=> <ShowItem toggled={true} {...props}/>}/>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}