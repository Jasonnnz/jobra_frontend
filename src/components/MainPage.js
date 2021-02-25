import TrelloBoard from './TrelloBoard';
import { useState, useEffect } from 'react';
import CardForm from './CardForm';

function MainPage({currentUser, setEventBus, eventBus, moveCard}){

    return (
        <div>
            <CardForm></CardForm>
            <TrelloBoard moveCard={moveCard} eventBus={eventBus} setEventBus={setEventBus} currentUser={currentUser} ></TrelloBoard>
        </div>
    );
}

export default MainPage;
