import {Pie} from 'react-chartjs-2';
import {useState} from 'react';

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
    console.log(currentUser)

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
                height='60%'/>
            </div>
        </div>
    );
}

export default UserProfile;