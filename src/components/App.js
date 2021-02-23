import logo from '../logo.svg';
import '../App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useState , useEffect} from 'react';
import AuthForm from './AuthForm';

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <AuthForm history={props.history}></AuthForm>
        </Route>
        <Route>
          "Main Page"
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
