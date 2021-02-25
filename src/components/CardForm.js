import {useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function CardForm({addCard, currentUser, setCurrentUser}){
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
	const [search, setSearch] = useState("")


    function openModal() {
        setModalIsOpen((modalIsOpen)=>!modalIsOpen);
    }

    function closeModal(){
        setModalIsOpen((modalIsOpen)=>!modalIsOpen);
    }
    function handleFormSubmit(e){
        e.preventDefault();
        let newCard = {title: title, description: description, label: "Interested", user_id: currentUser.id}
		fetch('http://localhost:3000/cards',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}, body: JSON.stringify(newCard)
		}).then(r => r.json())
		.then(user => {
			addCard(user)
			setTitle("")
			setDescription("")
			closeModal()
		})
		// setCurrentUser(currentUser)
    }
    const form = <form onSubmit={handleFormSubmit}>
        <input type="text" name="title" placeholder="Enter Card Title" value={title} onChange={(e)=>setTitle(e.target.value)}></input><br></br>
        <input type="text" name="description" placeholder="Enter Card Description" value={description} onChange={(e)=>setDescription(e.target.value)}></input><br></br>
        <input type="submit" value="Add Card"></input>
    </form>

    function handleSearch(e){
		setSearch(e.target.value)
        let searchedCards = currentUser.cards.filter((c) => c.title.toLowerCase().includes(e.target.value.toLowerCase()))
		
	}
    
    return (
        <div>
            <button onClick={openModal}>Add Card</button>
			<input type="text" value={search} onChange={handleSearch}></input>
            <Modal disableAutoFocus={true} isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Modal" className="formModal" overlayClassName="Overlay">
                <button onClick={closeModal}>X</button>
                <div>{form}</div>
            </Modal>
        </div>
    );
}

export default CardForm;