import TrelloBoard from './TrelloBoard';
import { useState, useEffect } from 'react';
import CardForm from './CardForm';

function MainPage({currentUser, setEventBus, eventBus, moveCard, addCard, setCurrentUser, delCard, searchCard}){

    return (
        <div>
            <CardForm searchCard={searchCard} setCurrentUser={setCurrentUser} currentUser={currentUser} addCard={addCard}></CardForm>
            <TrelloBoard delCard={delCard} moveCard={moveCard} eventBus={eventBus} setEventBus={setEventBus} currentUser={currentUser} ></TrelloBoard>
        </div>
    );
}

export default MainPage;
