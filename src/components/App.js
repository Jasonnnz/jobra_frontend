import logo from '../logo.svg';
import '../App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useState , useEffect} from 'react';
import AuthForm from './AuthForm';
import NavBar from './NavBar';
import MainPage from './MainPage';

function App(props) {
  const [ currentUser,setCurrentUser ] = useState(null);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <AuthForm history={props.history} setCurrentUser={setCurrentUser}></AuthForm>
        </Route>
        <Route exact path="/main">
          <NavBar></NavBar>
          <MainPage></MainPage>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
