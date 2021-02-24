import TrelloBoard from './TrelloBoard';
import { useState, useEffect } from 'react';

function MainPage({currentUser, setEventBus, eventBus, moveCard}){

    return (
        <div>
            <TrelloBoard moveCard={moveCard} eventBus={eventBus} setEventBus={setEventBus} currentUser={currentUser} ></TrelloBoard>
        </div>
    );
}

export default MainPage;
