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
            style={{backgroundColor: "white", backgroundImage: 'url("https://media.istockphoto.com/vectors/abstract-white-background-geometric-texture-vector-id1069183510?k=6&m=1069183510&s=612x612&w=0&h=IsR2U2IjDpCVAyY6oeeANwvIP1SHpBalMZPB_QNGnbw=")'}}
            cardStyle={{backgroundColor: "whitesmoke"}}
            laneStyle={{backgroundColor: "lightgrey", minWidth:"187px"}}
            handleDragEnd={handleDragEnd}
            eventBusHandle={handleEventBus}
            onCardDelete={handleCardDelete}
            />
        </div>
    );
}
export default TrelloBoard;
