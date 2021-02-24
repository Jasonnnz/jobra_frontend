import TrelloBoard from './TrelloBoard';
import { useState, useEffect } from 'react';

function MainPage({currentUser, setEventBus, eventBus}){

    return (
        <div>
            <TrelloBoard eventBus={eventBus} setEventBus={setEventBus} currentUser={currentUser} ></TrelloBoard>
        </div>
    );
}

export default MainPage;
