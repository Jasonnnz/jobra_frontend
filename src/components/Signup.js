import { useState } from 'react';

function Signup({loginForm, setLoginForm, setCurrentUser, history}){
    const [ email, setEmail] = useState("")
    const [ name, setName] = useState("")
    const [ password, setPassword] = useState("")

    function handleSignup(e){
        e.preventDefault()
        const newUser = {
            email: email,
            name: name,
            password: password
        }
        fetch('http://localhost:3000/me')
        .then(r => r.json())
        .then(user => {
            setCurrentUser(user)
            history.push('/main')
        })
    }

    return (
        <form onSubmit={handleSignup}>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <input type="submit" value="Signup"/>
            <p>Have an account? <span onClick={()=>setLoginForm(!loginForm)}>Login</span></p>
        </form>
    );
}

export default Signup;
