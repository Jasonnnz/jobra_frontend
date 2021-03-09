import { useState } from 'react';

function Signup({loginForm, setLoginForm, setCurrentUser, history}){
    const [ email, setEmail] = useState("")
    const [ name, setName] = useState("")
    const [ password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSignup(e){
        e.preventDefault()
        const newUser = {
            email: email,
            name: name,
            password: password
        }
        fetch('http://localhost:3000/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(r => r.json())
        .then(user => {
            if (newUser.errors){
                setErrors(newUser.errors)
            } else {
                const { user, token } = newUser;
                localStorage.setItem("token", token);
                setCurrentUser(user);
                history.push('/main')
            }
        })
    }

    return (
        <form onSubmit={handleSignup} className="login-form">
            <label className="auth-label" style={{color: "whitesmoke"}}>Sign Up</label><br></br><br></br>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/><br></br><br></br>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/><br></br><br></br>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/><br></br><br></br>
            {errors.map((error) => {
                return <p key={error}>{error}</p>;
            })}
            <input type="submit" value="Signup"/><br></br><br></br>
            <p style={{color: "whitesmoke"}}>Have an account? <span onClick={()=>setLoginForm(!loginForm)}>Login</span></p>
        </form>
    );
}

export default Signup;
