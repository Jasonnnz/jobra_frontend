import {useState} from 'react';
import { Button, Header, Segment, Modal, Form, Divider, Input } from 'semantic-ui-react'
// import Modal from 'react-modal';

// Modal.setAppElement('#root')

function CardForm({addCard, currentUser, setCurrentUser, searchCard, setSearchTerm}){
    const [open,setOpen] = useState(false);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
	const [search, setSearch] = useState("")


    // function openModal() {
    //     setModalIsOpen((modalIsOpen)=>true);
    // }
    // function closeModal(){
    //     setModalIsOpen((modalIsOpen)=>false);
    // }
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
            setOpen(false)
		})
    }

    function handleSearch(e){
        setSearchTerm(search.toLowerCase())
        let searchedCards = currentUser.cards.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))
        let updatedCards = searchedCards.map((c) => {
            return {...c, label: "Searched"}
        })
        currentUser.lanes[4].cards = updatedCards
        searchCard(currentUser)
	}
    return (
        <div className="searchbar">
			<Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..."></Input>
            <Input type="submit" value="Search" onClick={handleSearch}></Input>
            <Modal basic onClose={()=>setOpen(false)} onOpen={()=>setOpen(true)} open={open} size="small"
            trigger={<Button basic color="black">New Card</Button>}>
                <Segment inverted>
                    <Header>Add New Card</Header>
                    <Form onSubmit={handleFormSubmit} inverted>
                        <Divider horiztonal></Divider>
                        <Form.Input type="text" name="title" placeholder="Enter Card Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        <Form.Input type="text" name="description" placeholder="Enter Card Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        <Button type="submit">Add Card</Button>
                    </Form>
                </Segment>
            </Modal>
        </div>
    );
}

export default CardForm;