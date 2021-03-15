import TrelloBoard from './TrelloBoard';
import { useState, useEffect } from 'react';
import CardForm from './CardForm';
import Notes from './Notes';

function MainPage({setSearchTerm, notes, addNote, delNote, currentUser, setEventBus, eventBus, moveCard, addCard, setCurrentUser, delCard, searchCard}){

    return (
        <div className="searchbar-mainpage">
            <CardForm setSearchTerm={setSearchTerm} searchCard={searchCard} setCurrentUser={setCurrentUser} currentUser={currentUser} addCard={addCard}></CardForm>
            <div className="main-page">
                <TrelloBoard delCard={delCard} moveCard={moveCard} eventBus={eventBus} setEventBus={setEventBus} currentUser={currentUser} ></TrelloBoard>
                <Notes currentUser={currentUser} notes={notes} addNote={addNote} delNote={delNote} ></Notes>
            </div>
        </div>
    );
}

export default MainPage;
