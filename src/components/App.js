import logo from '../logo.svg';
import '../App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useState , useEffect} from 'react';
import AuthForm from './AuthForm';
import NavBar from './NavBar';
import MainPage from './MainPage';

function App(props) {
  const [ currentUser,setCurrentUser ] = useState({lanes:[]});
  const [eventBus, setEventBus] = useState(null)
  // const [cards, setCards] = useState([])

  useEffect(()=>{
      fetch('http://localhost:3000/me')
      .then(r => r.json())
      .then(loggedUser => {
          setCurrentUser(loggedUser)
      })
  },[])
  // console.log(eventBus)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <AuthForm history={props.history} setCurrentUser={setCurrentUser}></AuthForm>
        </Route>
        <Route exact path="/main">
          <NavBar></NavBar>
          <MainPage eventBus={eventBus} setEventBus={setEventBus} currentUser={currentUser} ></MainPage>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
