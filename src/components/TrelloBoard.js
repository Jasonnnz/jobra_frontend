import Board from 'react-trello';
import { useState, useEffect } from 'react';

function TrelloBoard({currentUser, setEventBus, eventBus, moveCard, delCard}){
    
    let handleEventBus = (eventBus) => {
        setEventBus(eventBus)
    }

    const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
        fetch(`http://localhost:3000/cards/${cardId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({label: targetLaneId})
        }) //backend persists
        .then(r => r.json())
        .then(user => {
            moveCard(user) //card, sourceLaneId, targetLaneId
        })
    }

    const handleCardDelete = (cardId, laneId) => {
        console.log(cardId, laneId)
        //fetch to del cardId
        fetch(`http://localhost:3000/cards/${cardId}`, {
            method: 'DELETE'
        }).then(r => r.json())
        .then(user => {
            delCard(user)
        })
    }

    return(
        <div className="entire-trello"> 
            <Board data={{lanes: currentUser.lanes}} 
            className="overall-board"
            style={{backgroundColor: "rgb(153, 221, 255)"}}
            cardStyle={{backgroundColor: "whitesmoke"}}
            laneStyle={{backgroundColor: "rgb(82, 137, 165)"}}
            handleDragEnd={handleDragEnd}
            eventBusHandle={handleEventBus}
            onCardDelete={handleCardDelete}
            />
        </div>
    );
}
export default TrelloBoard;
