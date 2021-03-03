import {Pie} from 'react-chartjs-2';
import { Line } from "react-chartjs-2";
import {useState} from 'react';
import { isThisWeek } from 'date-fns'
import { getWeek } from 'date-fns'

function UserProfile({currentUser}){
    const [data, setData] = useState({
        labels: ["Interested","Applied", "Accepted", "Rejected"],
        datasets: [{
            data: [currentUser.lanes[0].cards.length,
                 currentUser.lanes[1].cards.length,
                 currentUser.lanes[2].cards.length,
                 currentUser.lanes[3].cards.length],
            backgroundColor: ["blue","yellow","green","red"]
        }]
    })

    let week1Count = 0 //week9
    let week2Count = 5 //week10
    let week3Count = 9 //week11
    let week4Count = 10 //week12
    
    let cardsUTC = currentUser.cards.map((c) => c.created_at.split('T')[0].split('-'))
    let cardsEST = cardsUTC.map((c) => new Date(c[0],c[1] - 1,c[2]))
    for (let i = 0; i < cardsEST.length; i++){
        let num = getWeek(cardsEST[i]) - 1 //9
        switch(num){
            case 9:
                week1Count++
                break
            case 10:
                week2Count++
                break
            case 11:
                week3Count++
                break
            case 12:
                week4Count++
                break
        }
    }
    console.log(week1Count,week2Count,week3Count,week4Count)
    const lineData = {
        labels: ["02/28 - 03/06","03/07 - 03/13","03/14 - 03/20", "03/21 - 03/27"],
        datasets:[ {
        label: "# of All Applications (4 week period)",
        data: [week1Count, week2Count, week3Count, week4Count],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: "rgba(75,192,192,1)"
    }]
    }

    return (
        <div>
            <div className="current-user-info">
                <h1>{currentUser.name}</h1>
                <h2>{currentUser.email}</h2>
            </div>
            <div className="current-user-charts">
                Charts
                <Pie 
                data={{
                    labels: data.labels,
                    datasets: data.datasets
                }}
                height='60%'
                />
                <Line data={lineData}/>
            </div>
        </div>
    );
}

export default UserProfile;