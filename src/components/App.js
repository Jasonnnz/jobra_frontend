import logo from '../logo.svg';
import '../App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useState , useEffect} from 'react';
import AuthForm from './AuthForm';
import NavBar from './NavBar';
import MainPage from './MainPage';
import UserProfile from './UserProfile';

function App(props) {
  const [currentUser, setCurrentUser] = useState({lanes:[]})
  const [notes, setNotes] = useState([])
  const [eventBus, setEventBus] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  // console.log("BINGO", searchTerm)

  useEffect(()=>{
      fetch('http://localhost:3000/me')
      .then(r => r.json())
      .then(loggedUser => {
          // console.log(loggedUser)
          setCurrentUser(loggedUser)
          setNotes(loggedUser.notes)
      })
  },[])

  function addNote(note) {
    setNotes([...notes, note])
  }

  function delNote(noteId){
    let updatedNotes = notes.filter((n) => n.id !== parseInt(noteId))
    console.log(noteId, updatedNotes)
    setNotes(updatedNotes)
  }

  function addCard(user){
    // let interestedLaneCards = currentUser.lanes[0].cards
    // interestedLaneCards.push(card)
    setCurrentUser(user)
    // console.log(currentUser)
  }

  function delCard(user){
    // let oldLane = currentUser.lanes.filter((l) => l.id === card.label)
    // let updatedLaneCards = oldLane.cards.filter((c) => c.id !== card.id)
    setCurrentUser(user)
  }

  function moveCard(user){
    setCurrentUser(user) 
    //DONT FORGET TO CHANGE BACKEND
    //manipulate data to get rid of old card and put in new card. use a filter w a bang
    //for adding use spread operator.
    //still use setCurrentUser(newUserVar)

    // eventBus.publish({type: 'MOVE_CARD', fromLaneId: sourceLaneId, toLaneId: targetLaneId, cardId: card.id, index: 0})
  }

  function searchCard(currentUser){
    // console.log(currentUser)
    // setCurrentUser(currentUser => currentUser.lanes[4].cards = searchedCards)
    setCurrentUser(currentUser)
    // console.log(currentUser)
  }
  // console.log(currentUser.lanes[0])
  // console.log(eventBus)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <AuthForm history={props.history} setCurrentUser={setCurrentUser}></AuthForm>
        </Route>
        <Route exact path="/main">
          <NavBar history={props.history}></NavBar>
          <MainPage setSearchTerm={setSearchTerm} addNote={addNote} delNote={delNote} notes={notes} searchCard={searchCard} delCard={delCard} addCard={addCard} moveCard={moveCard} eventBus={eventBus} setEventBus={setEventBus} currentUser={currentUser} setCurrentUser={setCurrentUser} ></MainPage>
        </Route>
        <Route exact path="/profile">
          <NavBar history={props.history}></NavBar>
          <UserProfile currentUser={currentUser}></UserProfile>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
