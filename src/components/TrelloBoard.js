import Board from 'react-trello';
import { useState, useEffect } from 'react';

function TrelloBoard({currentUser, setEventBus, eventBus}){
    
    let handleEventBus = (eventBus) => {
        setEventBus(eventBus)
    }

    // const appliedCards = cards.filter((card) => card.label === "Applied")
    // const acceptedCards = cards.filter((card) => card.label === "Accepted")
    // const rejectedCards = cards.filter((card) => card.label === "Rejected")
    
    
    // const handleDragStart = (cardId, laneId) => {
    //     console.log('drag started')
    //     console.log(`cardId: ${cardId}`)
    //     console.log(`laneId: ${laneId}`)
    // }

    const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
        console.log('drag ended')
        console.log(`cardId: ${cardId}`)
        console.log(`sourceLaneId: ${sourceLaneId}`)
        console.log(`targetLaneId: ${targetLaneId}`)
        fetch(`http://localhost:3000/cards/${cardId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({label: targetLaneId})
        }) //backend persists
    }

    // const shouldReceiveNewData = (nextData) => {
    //     console.log(nextData)
    // }

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

    return(
        <div>
            <Board data={{lanes: currentUser.lanes}}
            editable
            draggable 
            // onDataChange={shouldReceiveNewData}
            // onCardAdd={handleCardAdd}
            // handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
            eventBusHandle={handleEventBus}
            />
        </div>
    );
}
export default TrelloBoard;
