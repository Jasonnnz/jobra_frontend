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

  useEffect(()=>{
      fetch('http://localhost:3000/me')
      .then(r => r.json())
      .then(loggedUser => {
          setCurrentUser(loggedUser)
      })
  },[])

  function moveCard(user){
    setCurrentUser(user) 
    //DONT FORGET TO CHANGE BACKEND
    //manipulate data to get rid of old card and put in new card. use a filter w a bang
    //for adding use spread operator.
    //still use setCurrentUser(newUserVar)

    // eventBus.publish({type: 'MOVE_CARD', fromLaneId: sourceLaneId, toLaneId: targetLaneId, cardId: card.id, index: 0})
  }
  console.log(currentUser)
  // console.log(eventBus)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <AuthForm history={props.history} setCurrentUser={setCurrentUser}></AuthForm>
        </Route>
        <Route exact path="/main">
          <NavBar></NavBar>
          <MainPage moveCard={moveCard} eventBus={eventBus} setEventBus={setEventBus} currentUser={currentUser} ></MainPage>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
