import TrelloBoard from './TrelloBoard';
import { useState, useEffect } from 'react';
import CardForm from './CardForm';
import Notes from './Notes';

function MainPage({notes, addNote, delNote, currentUser, setEventBus, eventBus, moveCard, addCard, setCurrentUser, delCard, searchCard}){

    return (
        <div>
            <CardForm searchCard={searchCard} setCurrentUser={setCurrentUser} currentUser={currentUser} addCard={addCard}></CardForm>
            <div className="mainpage">
                <TrelloBoard delCard={delCard} moveCard={moveCard} eventBus={eventBus} setEventBus={setEventBus} currentUser={currentUser} ></TrelloBoard>
                <Notes currentUser={currentUser} notes={notes} addNote={addNote} delNote={delNote} ></Notes>
            </div>
        </div>
    );
}

export default MainPage;
