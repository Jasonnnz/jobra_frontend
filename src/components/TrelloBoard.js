import Board from 'react-trello';
import { useState, useEffect } from 'react';

function TrelloBoard({currentUser, setEventBus, eventBus, moveCard}){
    
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

    // const shouldReceiveNewData = (nextData) => {
    //     console.log(nextData)
    // }

    const handleDataChange = (newData) => {
        // console.log(newData)
    }

    // const handleCardAdd = (card, laneId) => {
    //     fetch('http://localhost:3000/cards', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(card)
    //     })
    //     .then(r => r.json())
    //     .then(newCard => {
    //         console.log(newCard)
    //         setCards([...cards, newCard])
    //     })
    //     console.dir(card)
    // }
    //data={{lanes: currentUser.lanes}}
    return(
        <div> 
            <Board data={{lanes: currentUser.lanes}} className="overall-board"
            draggable 
            // editable
            // onDataChange={shouldReceiveNewData}
            // onCardAdd={handleCardAdd}
            // handleDragStart={handleDragStart}
            onSubmit={handleDataChange} // MAKE ONCARDCLICK INSTEAD
            handleDragEnd={handleDragEnd}
            eventBusHandle={handleEventBus}
            onDataChange={handleDataChange}
            />
        </div>
    );
}
export default TrelloBoard;
