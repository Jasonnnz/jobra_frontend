import {useState} from 'react';
function CardForm(){
    const [displayCardForm, setDisplayCardForm] = useState(false)
    const form = <form>
        <input type="text" name="title" placeholder="Enter Card Title"></input>
        <input type="text" name="description" placeholder="Enter Card Description"></input>
        <input type="submit" value="Add Card"></input>
    </form>
    return (
        <div>
            <button onClick={()=>setDisplayCardForm(!displayCardForm)}>Add Card</button>
            { displayCardForm ? form : null}
        </div>
    );
}

export default CardForm;