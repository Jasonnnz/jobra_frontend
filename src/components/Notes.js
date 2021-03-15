import {useState} from 'react';
import {Pie} from 'react-chartjs-2';
import {Header} from 'semantic-ui-react';

function Notes({notes, addNote, delNote, currentUser}){
    const [desc, setDesc] = useState("")
    const [color, setColor] = useState("lightblue")
    let data = {
        labels: ["Interested","Applied", "Accepted", "Rejected"],
        datasets: [{
            data: [currentUser.lanes[0].cards.length,
                 currentUser.lanes[1].cards.length,
                 currentUser.lanes[2].cards.length,
                 currentUser.lanes[3].cards.length],
            backgroundColor: ["yellow","lightblue","lightgreen","red"]
        }]
    }

    const allNotes = notes.map((n) => {
        return <div className="each-note" key={n.id} style={{backgroundColor: n.color, opacity: 0.8, color: "whitesmoke"}}>
            <p className="note-description" style={{color:"black"}}>{n.description}</p>
                <button className="each-del-btn"style={{position: "right"}} id={n.id} onClick={(e) => handleDel(e)}>X</button>
        </div>
    })

    function handleDel(e){
        let noteId = e.target.id
        fetch(`http://localhost:3000/notes/${noteId}`,{
            method: 'DELETE'
        })
        delNote(noteId)
    }

    function handleAdd(e){
        e.preventDefault()
        let newNote = {
            user_id: currentUser.id,
            description: desc,
            color: color
        }
        fetch('http://localhost:3000/notes',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })
        .then(r => r.json())
        .then(note => {
            addNote(note)
            // console.log(note)
        })
        setDesc("")
        setColor("blue")
    }

    return(
        <div className="notes-section">
            <div className="whole-section">
                <div className="upper-section">
                    <Pie id="main-page-pie"
                    data={{
                        labels: data.labels,
                        datasets: data.datasets
                    }}
                    height='200px'
                    />
                </div>
                <div className="lower-section">
                    <Header dividing></Header>
                    <Header className="notes-header">Notes</Header>
                    <div className="note-form">
                        <form className="new-note-form">
                            <label htmlFor="description">Add New Note</label><br></br>
                            <input type="text" name="description" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Type note here"/><br></br><br></br>
                            <label htmlFor="color">Select Color</label><br></br>            
                            <input type="radio" id="Blue" name="color" value="LightBlue" onClick={(e)=>setColor(e.target.value.toLowerCase())} checked={color === "lightblue" ? "checked" : "" }/>Blue
                            <input type="radio" id="Red" name="color" value="Red" onClick={(e)=>setColor(e.target.value.toLowerCase())} checked={color === "red" ? "checked" : "" }/>Red
                            <input type="radio" id="Green" name="color" value="LightGreen" onClick={(e)=>setColor(e.target.value.toLowerCase())} checked={color === "lightgreen" ? "checked" : "" }/>Green
                            <input type="radio" id="Yellow" name="color" value="Yellow" onClick={(e)=>setColor(e.target.value.toLowerCase())} checked={color === "yellow" ? "checked" : "" }/>Yellow <br></br>
                            <button onClick={handleAdd}>Add Note</button>
                        </form>
                    </div><br></br>
                    {notes.length === 0 ? <h1 style={{textAlign:"center"}}>No Notes</h1> : allNotes}
                </div>
            </div>
        </div>
    );
}

export default Notes;